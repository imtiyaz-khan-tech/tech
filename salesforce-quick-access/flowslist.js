let baseUrl = null;
let processCount = 0;
let sessionId = null;
let flowRecords = [];
let flowRecordsAll = [];
let flowIdApiNameMap;
$(document).ready(function () {
    $(".spinner-div").hide();
    let url = new URL(window.location.href);
    console.log('$url: ', url);
    baseUrl = url.searchParams.get('baseUrl');
    console.log('$baseUrl: ', baseUrl);
    sessionId = url.searchParams.get('sessionId');
    console.log('$sessionId: ', sessionId);
    getFlows();
});

function getFlows(){
    let query = 'SELECT Id,MasterLabel,VersionNumber,Status,LastModifiedDate,CreatedDate,CreatedBy.Name,LastModifiedBy.Name FROM Flow Where Status = \'Active\' ORDER BY LastModifiedDate DESC';
    const endpoint = `${baseUrl}/services/data/v59.0/tooling/query?q=${encodeURIComponent(query)}`;
    fetch(endpoint, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + sessionId,
        },
    }).then(response => response.json()).then(result => {
        console.log('$result: ', result);
        if (result && result[0] && result[0].message) {
            // $('.snackbar').text(result[0].message);
        } else {
            let records = JSON.parse(JSON.stringify(result.records));
            console.log('$records: ', records);
            flowRecords = [...records];
            flowRecordsAll = [...records];
            flowIdApiNameMap = new Map();
            generateFlowTable();
        }
    }).catch(error => {
        console.error('Error:', error);
    });
}

function generateFlowTable(){
    console.log('$flowRecords: ',flowRecords);
    let trTags = '';
    flowRecords.forEach(rec => {
        let value = checkNull(rec['Id']);
        let tdTags = `<td class="td_1 record-id" title="${value}">${value}</td>`;
        value = checkNull(rec['MasterLabel']);
        tdTags += `<td class="td_1" title="${value}">${value}</td>`;
        value = checkNull(flowIdApiNameMap.get(rec['Id']));
        tdTags += `<td class="td_1 ${rec['Id']}_ApiName" title="${value}">${value}</td>`;
        value = getFormattedDate(checkNull(rec['LastModifiedDate']));
        tdTags += `<td class="td_1" title="${value}">${value}</td>`;
        value = checkNull(rec['LastModifiedBy']['Name']);
        tdTags += `<td class="td_1" title="${value}">${value}</td>`;
        value = getFormattedDate(checkNull(rec['CreatedDate']));
        tdTags += `<td class="td_1" title="${value}">${value}</td>`;
        value = checkNull(rec['CreatedBy']['Name']);
        tdTags += `<td class="td_1" title="${value}">${value}</td>`;
        value = checkNull(rec['VersionNumber']);
        // tdTags += `<td class="td_1" title="${value}">v.${value}</td>`;
        tdTags += `<td class="td_1" title="${value}"><input class="version_inp ${rec['Id']}_version-inp" value="${value}" type="number" /></td>`;
        tdTags += `<td class="td_1 td_1_9"><i class="open-icon fa fa-arrow-circle-o-up fa-2x" aria-hidden="true" data-recId="${rec['Id']}" data-version="${value}" data-label="${rec['MasterLabel']}"></i></td>`;
        trTags += `<tr class="tbody_1_tr tbody_1_tr_1 tr_${rec.Id}">${tdTags}</tr>`;
    });
    document.title = 'Flows - [ ' + flowRecords.length + ' ]';
    $('.tbody_1').html(trTags);
    console.log('$flowRecords-Updated: ',flowRecords.length);
    console.log('$flowIdApiNameMap: ',flowIdApiNameMap.size);
    if(flowIdApiNameMap.size < flowRecords.length){
        getFlowApiNames();
    }
}

$(document).on('input', '.inp', function (e){
   let search = $(this).val().trim();
   let field = $(this).data('field');
   if(search){
        flowRecords = flowRecordsAll.filter(f => {
            let value = f[field];
            if(field == 'LastModifiedBy' || field == 'CreatedBy'){
                value = value['Name'];
            }
            if(field == 'FullName'){
                value = flowIdApiNameMap.get(f['Id']);
            }
            return value.toLowerCase().includes(search.toLowerCase());
        });
        generateFlowTable();
   }else{
        flowRecords = [...flowRecordsAll];
        generateFlowTable();
   }
});

function getFormattedDate(date_time){
    date_time = Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(date_time));
    date_time = date_time.substring(0, date_time.length - 2) + date_time.substring(date_time.length - 2).toUpperCase();
    return date_time;
}

function checkNull(value){
    if(!value){
        return '';
    }else{
        return value;
    }
}

async function getFlowApiNames(){
    let i = 0;
    while(i < flowRecords.length){
        let item = flowRecords[i];
        getRecord(item.Id, i + 1);
        // document.title = `Flows - [ ${flowRecords.length} / ${i + 1} ]`;
        i++;
    }
}

function getRecord(flowId){
    let query = `SELECT+Id,MasterLabel,FullName+FROM+Flow+Where+Id+=+'${flowId}'+And+Status+=+'Active'+Limit+1`;
    const endpoint = `${baseUrl}/services/data/v59.0/tooling/query?q=${query}`;
    fetch(endpoint, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + sessionId,
        },
    }).then(response => response.json()).then(result => {
        if (result && result[0] && result[0].message) {
            // $('.snackbar').text(result[0].message);
        } else {
            let records = JSON.parse(JSON.stringify(result.records));
            let rec = records[0];
            $(`.${rec.Id}_ApiName`).text(rec.FullName);
            flowIdApiNameMap.set(rec.Id, rec.FullName);
            processCount ++;
            document.title = `Flows - [ ${flowRecords.length} / ${processCount} ]`;
            if(flowRecords.length == processCount){
                document.title = `Flows - [ ${flowRecords.length} ]`;
            }
        }
    }).catch(error => {
        console.error('Error:--', error);
    });
}

function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).on('click', '.open-icon', function (e){
    let recordID = $(this).attr('data-recId');
    let label = $(this).attr('data-label');
    console.log('$label: ',label);
    let version = parseInt($(this).attr('data-version'));
    console.log('$version: ',version);
    let versionInp = parseInt($(`.${recordID}_version-inp`).val());
    console.log('$versionInp: ',versionInp);

    if(versionInp == version){
        window.open(baseUrl + '/builder_platform_interaction/flowBuilder.app?flowId=' + recordID, '_blank');
    }else if(versionInp && versionInp > 0 && versionInp < version){
        let query = `SELECT+Id,VersionNumber,Status,MasterLabel,FullName+FROM+Flow+Where+MasterLabel+=+'${label}'+And+VersionNumber+=+${versionInp}+Limit+1`;
        const endpoint = `${baseUrl}/services/data/v59.0/tooling/query?q=${query}`;
        fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + sessionId,
            },
        }).then(response => response.json()).then(result => {
            if (result && result[0] && result[0].message) {
                // $('.snackbar').text(result[0].message);
            } else {
                let records = JSON.parse(JSON.stringify(result.records));
                let rec = records[0];
                console.log('$rec: ',rec);
                window.open(baseUrl + '/builder_platform_interaction/flowBuilder.app?flowId=' + rec.Id, '_blank');
            }
        }).catch(error => {
            console.error('Error:--', error);
        });
    }
});

$(document).on('click', '.td_1', function (e) {
    copyToCLipboard($(this).text().trim(), true);
});

function copyToCLipboard(value, showTst) {
    if(value){
        let text = value;
        navigator.clipboard.writeText(text).then(function () {
            console.log('copied : ' + text);
            if (showTst) {
                $('.snackbar').text(text);
                showToast();
            }
        }, function (err) {
            console.error('error copying');
        });
    }
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