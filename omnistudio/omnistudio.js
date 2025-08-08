let conn;
let baseUrl;
let logData;
let sessionId;
let fetchtype;
let recordsArray;
let filter = 'all';
$(document).ready(function () {
    let url = new URL(window.location.href);
    //console.log('$url: ', url);
    baseUrl = url.searchParams.get('baseUrl');
    //console.log('$baseUrl: ', baseUrl);
    sessionId = url.searchParams.get('sessionId');
    //console.log('$sessionId: ', sessionId);
    fetchtype = url.searchParams.get('fetchtype');
    //console.log('$fetchtype: ', fetchtype);
    filter = url.searchParams.get('filter');
    console.log('$filter: ',filter);

    initialize();


    
});

async function initialize(){
    callOnInitialized();
}

$(document).on('click', '.btn-fixed', function (e){
   showSpinner();
   callOnInitialized();
});

async function callOnInitialized(){
    /* let omniQuery = `SELECT Id, Name, Type, SubType, OmniProcessType, IsActive,  UniqueName, VersionNumber,  LastModifiedBy.Name, LastModifiedDate, CreatedDate, CreatedBy.Name FROM OmniProcess Order By LastModifiedDate DESC`;
    if(baseUrl == 'https://1source--devzennify.sandbox.my.salesforce.com'){
        omniQuery = `SELECT Id, Name, Type, SubType, OmniProcessType, IsActive,  UniqueName, VersionNumber,  LastModifiedBy.Name, LastModifiedDate, CreatedDate, CreatedBy.Name FROM OmniProcess Where Type = 'CAO' Order By LastModifiedDate DESC`;
        if(fetchtype == 'mineonly'){
            omniQuery = `SELECT Id, Name, Type, SubType, OmniProcessType, IsActive,  UniqueName, VersionNumber,  LastModifiedBy.Name, LastModifiedDate, CreatedDate, CreatedBy.Name FROM OmniProcess Where CreatedBy.Name = 'Imtiyaj Khan' Order By CreatedDate DESC`;
        }
    }
    let omniscrips = await fetchRecords(omniQuery);
    //console.log('$omniscrips: ',omniscrips);
    recordsArray = [...omniscrips.records];
    //console.log('$recordsArray: ',recordsArray);

    let drQuery = 'Select Id, Name, Type, LastModifiedBy.Name, VersionNumber,  UniqueName, InputType, OutputType, LastModifiedDate, CreatedDate, CreatedBy.Name From OmniDataTransform Order By LastModifiedDate DESC';
    if(fetchtype == 'mineonly'){
        drQuery = `Select Id, Name, Type, LastModifiedBy.Name, VersionNumber,  UniqueName, InputType, OutputType, LastModifiedDate, CreatedDate, CreatedBy.Name From OmniDataTransform Where CreatedBy.Name = 'Imtiyaj Khan' Order By CreatedDate DESC`;
    }

    let dataraptors = await fetchRecords(drQuery);
    //console.log('$dataraptors: ',dataraptors); */

    var myHeaders = new Headers();
    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    fetch("https://techsimplifier-dev-ed.my.site.com/services/apexrest/omnistudio/"+filter, requestOptions).then(response => response.json()).then(result => {
        //console.log('$API-OMNI: ', result);
        let resp = JSON.parse(result);
        //console.log('$resp: ',resp);

        recordsArray = [...resp.OmniIp.records];
        //console.log('$recordsArray: ',recordsArray);

        let dataraptors = [...resp.DataRP.records];

        dataraptors.forEach(dr => {
            let drRec = {...dr};
            drRec.OmniProcessType = 'Data Mapper';
            drRec.SubType = drRec.Type;
            drRec.Type = drRec.InputType;
            recordsArray.push(drRec);
        });

        //console.log('$recordsArray: ',recordsArray);

        recordsArray.sort((a, b) => { 
            const dateA = new Date(a.LastModifiedDate);
            const dateB = new Date(b.LastModifiedDate);
            return dateB - dateA;
        });


        generateTable();
        hideSpinner();

    }).catch(error => {
        //console.log('$API: error', error);
    });
}


let queryTableFields = [
    { name: 'Id', label: 'Id' },
    { name: 'Name', label: 'Name' },
    { name: 'Type', label: 'Type' },
    { name: 'SubType', label: 'Sub Type' },
    { name: 'OmniProcessType', label: 'Metadata Type' },
    { name: 'UniqueName', label: 'Unique Name' },
    { name: 'VersionNumber', label: 'Version' },
    { name: 'IsActive', label: 'Active' },
    { name: 'LastModifiedDate', label: 'Modified' },
    { name: 'LastModifiedBy.Name', label: 'Modified' }
];

async function fetchRecords(q) {
    //console.log('$q: ',q);
    let res = await conn.query(q);
    //console.log('$res: ',res);
    return res;
}


function generateTable() {

    let cols = `
        <th class="th_1 th_1_1">
            
        </th>
    `;
    queryTableFields.forEach(field => {
        cols += `
            <th class="th_1 th_1_1">
                ${field.label}
            </th>
        `;
    });
    cols += `
        <th class="th_1 th_1_1">
            
        </th>
    `;
    $('.thead_1_tr').html(cols);

    let trTags = '';
    recordsArray.forEach((rec, index) => {
        let tdTags = `<td class="td_1" title="${index + 1}">${index + 1}</td>`;
        queryTableFields.forEach(f => {
            let field = f.name;
            let fieldValue = rec[field];
            if(rec[field] == null){
                fieldValue = '';
            }
            if(field == 'LastModifiedDate'){
                fieldValue = getFormattedDateTime(rec[field]);
            }
            if(field == 'LastModifiedBy.Name'){
                fieldValue = rec['LastModifiedBy']['Name'];
            }
            if(field == 'IsActive'){
                if(rec[field]){
                    fieldValue = `&#10004;`;
                }else{
                    fieldValue = '-';
                }
            }
            let title = fieldValue;
            if(rec['CreatedDate'] && field == 'LastModifiedDate'){
                title = getFormattedDateTime(rec['CreatedDate']);
            }else if(rec['CreatedBy'] && field == 'LastModifiedBy.Name'){
                if(rec['CreatedBy']['Name']){
                    title = rec['CreatedBy']['Name'];
                }
            }
            let idclass = field == 'Id' ? 'record-id ' : '';
            tdTags += `<td class="td_1 ${idclass}${field}-${rec.Id}" title="${title}">${fieldValue}</td>`;
        });
        tdTags += `<td class="td_1"><i class="action_btn_icon open_meta fa fa-angle-double-up fa-lg" aria-hidden="true" data-recId="${rec.Id}"></i></td>`;
        // tdTags += `<td class="td_1"><i class="action_btn_icon download_meta fa fa-angle-double-down fa-lg" aria-hidden="true" data-recId="${rec.Id}" data-uniquename="${rec.UniqueName}" data-metadatatype="${rec.OmniProcessType}"></i></td>`;
        let trStyle = '';
        if(rec?.OmniProcessType == 'OmniScript'){
            trStyle = `style="background-color: #e5ffe5;"`;
        }else if(rec?.OmniProcessType == 'Data Mapper'){
            trStyle = `style="background-color: #d0effb;"`;
        }else if(rec?.OmniProcessType == 'Integration Procedure'){
            trStyle = `style="background-color: #f7ecdc;"`;
        }
        trTags += `<tr class="tr_${rec.Id}" ${trStyle}>${tdTags}</tr>`;
    });
    // document.title = `[ ${recordsArray.length} ]`;
    $('.tbody_1').html(trTags);
}


$(document).on('click', '.download_meta', async function (e) {

    let recId = $(this).attr('data-recId');
    let uniquename = $(this).attr('data-uniquename');
    let metadatatype = $(this).attr('data-metadatatype');
    //console.log('$recId: ', recId);
    //console.log('$uniquename: ', uniquename);
    //console.log('$metadatatype: ', metadatatype);

    if(metadatatype == 'Data Mapper'){
        metadatatype = 'OmniDataTransform';
    }else if(metadatatype == 'Integration Procedure'){
        metadatatype = 'OmniIntegrationProcedure';
    }else if(metadatatype == 'OmniScript'){
        metadatatype = 'OmniScript';
    }


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/xml");
    myHeaders.append("SOAPAction", "login");
    myHeaders.append("Accept", "text/xml");

    const raw = `
        <env:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                    xmlns:env="http://schemas.xmlsoap.org/soap/envelope/">
            <env:Header>
                <SessionHeader xmlns="http://soap.sforce.com/2006/04/metadata">
                    <sessionId>${sessionId}</sessionId>
                </SessionHeader>
            </env:Header>
            <env:Body>
                <retrieve xmlns="http://soap.sforce.com/2006/04/metadata">
                    <retrieveRequest>
                        <apiVersion>59.0</apiVersion>
                        <singlePackage>true</singlePackage>
                        <unpackaged>
                            <types>
                                <members>${uniquename}</members>
                                <name>${metadatatype}</name>
                            </types>
                            <version>64.0</version>
                        </unpackaged>
                    </retrieveRequest>
                </retrieve>
            </env:Body>
        </env:Envelope>
    `;

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    showSpinner();
    fetch( baseUrl + "/services/Soap/m/59.0", requestOptions).then((response) => response.text()).then((xmlResponse) => {
        //console.log('Response: ' + xmlResponse);
        //console.log(xmlResponse);
        //console.log('$xmlResponse: ', xmlResponse);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlResponse, "text/xml");

        let recordNodes = xmlDoc.querySelectorAll('result');
        //console.log('$recordNodes: ',recordNodes);

        let processId;
        for (let i = 0; i < recordNodes.length; i++) {
            let id = recordNodes[i].querySelector('id').textContent;
            let state = recordNodes[i].querySelector('state').textContent;
            //console.log('$id: ',id);
            //console.log('$state: ',state);
            processId = id;
        }
        if(processId){
            retrieveMetadataZip(metadatatype, uniquename, processId);
        }
    }).catch((error) => {
        console.error(error);
    });
});

function retrieveMetadataZip(metadatatype, name, processId){

    //console.log('$name: ',name);
    //console.log('$processId: ',processId);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/xml");
    myHeaders.append("SOAPAction", "login");
    myHeaders.append("Accept", "text/xml");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: `
            <env:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                        xmlns:env="http://schemas.xmlsoap.org/soap/envelope/">
                <env:Header>
                    <SessionHeader xmlns="http://soap.sforce.com/2006/04/metadata">
                        <sessionId>${sessionId}</sessionId>
                    </SessionHeader>
                </env:Header>
                <env:Body>
                    <checkRetrieveStatus xmlns="http://soap.sforce.com/2006/04/metadata">
                        <id>${processId}</id>
                        <includeZip>true</includeZip>
                    </checkRetrieveStatus>
                </env:Body>
            </env:Envelope>
        `,
        redirect: "follow"
    };
    fetch( baseUrl + "/services/Soap/m/59.0", requestOptions).then((response) => response.text()).then((xmlResponse) => {
        //console.log('Response: ' + xmlResponse);
        //console.log(xmlResponse);
        //console.log('$xmlResponse: ', xmlResponse);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlResponse, "text/xml");

        let recordNodes = xmlDoc.querySelectorAll('result');
        //console.log('$recordNodes: ',recordNodes);

        let status;
        let zipFile
        for (let i = 0; i < recordNodes.length; i++) {
            status = recordNodes[i].querySelector('status').textContent;
            zipFile = recordNodes[i].querySelector('zipFile').textContent;
            //console.log('$status: ',status);
            //console.log('$zipFile: ',zipFile);
        }

        if(status == 'InProgress' || status == 'Pending'){
            retrieveMetadataZip(metadatatype, name, processId);
        }else{
            //console.log('$SUCCESS-status: ',status);
            //console.log('$SUCCESS-zipFile: ',zipFile);

            if(zipFile){
                extractFileData(metadatatype, name, zipFile);
                /* const byteArray = Uint8Array.from(atob(zipFile), c => c.charCodeAt(0));
                const blob = new Blob([byteArray], { type: 'application/zip' });
                let metadataFileName = `${name} - ${metadatatype} - ` + new Date().toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
                //console.log(metadataFileName);
                saveAs(blob, `${metadataFileName}.zip`); */
                hideSpinner();
            }

        }

    }).catch((error) => {
        console.error(error);
    });
}

async function extractFileData(metadatatype, name, base64ZipData) {
    try {
        const zip = new JSZip();
        const loadedZip = await zip.loadAsync(base64ZipData, { base64: true });

        let fileName;
        let filePath;
        if(metadatatype == 'OmniDataTransform'){
            filePath = `omniDataTransforms/${name}.rpt`;
            fileName = `${name}.rpt`;
        }else if(metadatatype == 'OmniIntegrationProcedure'){
            filePath = `omniIntegrationProcedures/${name}.oip`;
            fileName = `${name}.oip`;
        }else if(metadatatype == 'OmniScript'){
            filePath = `omniScripts/${name}.os`;
            fileName = `${name}.os`;
        }

        const file = loadedZip.file(filePath);

        if (!file) {
            console.error("file not found");
            return;
        }

        const content = await file.async("text");
        // //console.log(content);

        const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
        saveAs(blob, fileName);

        return content;
    } catch (err) {
        console.error("Error reading zip:", err);
    }
}

function getFormattedDateTime(dateString) {
    let date_time = Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(dateString));
    date_time = date_time.replaceAll(',', '').toUpperCase().split(' ').join(' ');
    return date_time;
}

$(document).on('click', '.td_1', function (e) {
    copyToCLipboard($(this).text().trim(), true);
});

$(document).on('click', '.open_meta', function (e){
    let _this = $(this);
    let recordid = _this.attr('data-recId');
    //console.log('$recordid: ',recordid);
    let rec = recordsArray.find(element => {
        return element.Id == recordid;
    });
    //console.log('$rec: ',rec);
    let _baseUrl = 'https://1source--devzennify.sandbox.my.salesforce.com';
    if(rec.OmniProcessType == 'OmniScript'){
        let omniUrl = _baseUrl.replace('my.salesforce.com', 'lightning.force.com');
        window.open(`${omniUrl}/builder_omnistudio/omnistudioBuilder.app?type=omniscript&id=${rec.Id}`, '_blank');
    }else if(rec.OmniProcessType == 'Integration Procedure'){
        let omniUrl = _baseUrl.replace('my.salesforce.com', 'lightning.force.com');
        window.open(`${omniUrl}/builder_industries_interaction_rule/industriesBuilder.app?recordId=${rec.Id}`, '_blank');
    }else if(rec.OmniProcessType == 'Data Mapper'){
        let omniUrl = _baseUrl.replace('my.salesforce.com', 'lightning.force.com');
        window.open(`${omniUrl}/builder_omnistudio/omnistudioBuilder.app?type=dataraptor&id=${rec.Id}`, '_blank');
    }

    /* //=================MEMBER PAYOUT STRATS================//
    if(rec.p66_Status__c == 'Draft' || rec.p66_Status__c == 'Reconciled'){
        let code = `
            update new RebateProgramMemberPayout(Id = '${recordid}', p66_Status__c = 'Active');
        `;
        executeAnonymousHandle(_this, recordid, code);
    }else{
        let code = `
            update new RebateProgramMemberPayout(Id = '${recordid}', p66_Status__c = 'Reconciled',
                p66_SAP_External_Reference__c = '11',
                p66_SAP_External_Reference_Date__c = System.today() + 1
            );
        `;
        executeAnonymousHandle(_this, recordid, code);
    }
    //=================MEMBER PAYOUT ENDS HERE================// */
});


function executeAnonymousHandle(_this, recordid, code){
    _this.addClass('fast-spin');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + sessionId);
    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    const endpoint = `${baseUrl}/services/data/v60.0/tooling/executeAnonymous/?anonymousBody=${encodeURIComponent(code)}`;
    fetch(endpoint, requestOptions).then(response => response.json()).then(data => {
        //console.log('$data-: ', data);
        if(data.success){
            _this.removeClass('fast-spin');
            // window.location.reload();
            fetchRecordSingle(recordid);
        }else{
            if(data.compileProblem){
                window.alert(data.compileProblem);
            }else{
                window.alert(data.exceptionMessage + ' - ' + data.exceptionStackTrace);
            }
            _this.removeClass('fast-spin');
        }
    }).catch(error => {
        //console.log('$API: error', error);
    });
}


function getConvertedDateTime(dateTimeString){
    let date_time = Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(new Date(dateTimeString));
    date_time = date_time.substring(0, date_time.length - 2) + date_time.substring(date_time.length - 2).toUpperCase();
    date_time = date_time.split(', ');
    date_time = date_time[1] + ', ' + date_time[0];
    return date_time;
}



function showSpinner() {
    $(".spinner-div").show();
}

function hideSpinner() {
    $(".spinner-div").hide();
    $('.refresh_btn_icon').removeClass('fast-spin');
}

let timeout;

function showToast() {
    if (!timeout) {
        timeout = true;
        $('.snackbar').addClass('show');
        setTimeout(function () {
            $('.snackbar').removeClass('show');
            timeout = false;
        }, 2000);
    }
}


function copyToCLipboard(value, showTst) {
    if(value){
        let text = value;
        navigator.clipboard.writeText(text).then(function () {
            //console.log('copied : ' + text);
            if (showTst) {
                $('.snackbar').text(text);
                showToast();
            }
        }, function (err) {
            console.error('error copying');
        });
    }
}

$(document).on('contextmenu', '.record-id', function (e){
    let text = $(this).text().trim();
    e.preventDefault();
    openRecordDetail(text);
});


function openRecordDetail(recordID){
    const userKeyRegExp = /[a-zA-Z0-9]{15}|[a-zA-Z0-9]{18}/;
    const valid = userKeyRegExp.test(recordID);
    if (valid) {
        recordID = 'recordID=' + recordID + '&';
        openMaximized('record.html?' + recordID + 'baseUrl=' + baseUrl + '&sessionId=' + sessionId);
    }
}

function openMaximized(url) {
    if (url) {
        chrome.windows.create({
            type: 'popup',
            url: url,
            state: 'maximized'
        });
    }
}


/* function fetchRecordSingle(recId) {
    let filter = `Where Id = '${recId}'`;
    let q = `SELECT ${fields_array.join(',')} FROM ${objectName} ${filter}`;
    //console.log('$q: ',q);
    conn.query(q).then(res => {
        //console.log('$res: ',res);
        let recs = [...res.records];
        //console.log('$recs: ',recs);
        let rec = recs[0];
        //console.log('$rec: ',rec);

        //Update Existing array
        const index = recordsArray.findIndex(item => item.Id == rec.Id);
        //console.log('$index: ',index);
        if (index != -1) {
            recordsArray.splice(index, 1, rec);
        }

        fields_array.forEach(field => {
            let fieldValue = rec[field];
            if(fieldValue == null){
                fieldValue = '';
            }
            $(`.${field}-${rec.Id}`).text(fieldValue);
        });
        $(`.tr_${rec.Id}`).css('background-color','#f1f6ee');
        hideSpinner();
    }).catch( error => {
        console.error('$error: ',error);
        hideSpinner();
    });
} */