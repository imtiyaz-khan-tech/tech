let conn;
let userId;
let baseUrl;
let logBody;
let sessionId;
let recordsAll;
let logRecodId;
let totalCount = 0;
$(document).ready(function () {
    let url = new URL(window.location.href);
    console.log('$url: ', url);
    baseUrl = url.searchParams.get('baseUrl');
    console.log('$baseUrl: ', baseUrl);
    sessionId = url.searchParams.get('sessionId');
    console.log('$sessionId: ', sessionId);
    logRecodId = url.searchParams.get('logRecodId');
    console.log('$logRecodId: ', logRecodId);
    initialize();
});

async function initialize(){
    //Connection
    console.time('Connection Time');
    conn = await getConnection(baseUrl, sessionId);
    console.timeEnd('Connection Time');
    console.log('$conn: ',conn);
    if(logRecodId){
        fetchLogBody(logRecodId);
        document.title = 'Log - ' + logRecodId;
    }else{
        if(baseUrl == 'https://phillips66enterprise--wipro.sandbox.my.salesforce.com'){
            userId = '005O8000007aiuXIAQ';
        }else{
            await openUserRecord();
        }
        fetchRecords();
        // fetchLogBody('07LO80000082sXkMAI');
    }
}

async function openUserRecord(){
    const res = await conn.identity();
    console.log('$res: ',res);
    userId = res.user_id;
    console.log('$userId: ',userId);
 }

async function getConnection(baseUrl, sessionId){
    let conn = new jsforce.Connection({
       instanceUrl : baseUrl,
       serverUrl : baseUrl,
       sessionId : sessionId
   });
   return conn;
 }

function fetchRecords() {
    console.time('fetchRecords Time');
    let fields_array = [
        'Id', 'Location', 'DurationMilliseconds', 'Request', 'LastModifiedDate', 
        'LogUser.Name', 'Application', 'Status', 'Operation', 'LogLength', 'LogUserId'
    ];
    let q = `SELECT ${fields_array.join(',')} FROM ApexLog Where LogUserId = '${userId}' Order By LastModifiedDate DESC LIMIT 5`;
    conn.query(q).then(res => {
        console.log('$res: ',res);
        console.timeEnd('fetchRecords Time');
        totalCount = res.totalSize;
        console.log('$totalCount: ',totalCount);
        console.log('$FetchedCount: ', res.records.length);
        recordsAll = [...res.records];
        console.log('$recordsAll: ',recordsAll);

        let td = '';
        recordsAll.forEach((val, indx) => {
            let selected_td = indx == 0 ? 'selected_td' : '';
            td += `<td class="td ${selected_td} td_${indx + 1}" data-length="${val.LogLength}" data-id="${val.Id}" title="Length: ${val.LogLength} [ ${formatBytes(val.LogLength)} ] - Operation: ${val.Operation} - Time: ${getConvertedDateTime(val.LastModifiedDate)}">${val.Id} - [ ${formatBytes(val.LogLength)} ] - ${getConvertedDateTime_short(val.LastModifiedDate)}</td>`;
        });
        $('.tr').html(td);
        if(recordsAll[0]?.Operation == 'common.api.soap.DirectSoap' && recordsAll.length > 1){
            fetchLogBody(recordsAll[1].Id);
            $('.td_1').removeClass('selected_td');
            $('.td_2').addClass('selected_td');
        }else{
            fetchLogBody(recordsAll[0].Id);
        }

        hideSpinner();
        
    }).catch( error => {
        console.error('$error: ',error);
        hideSpinner();
    });
}

function getLineGenerateTable(line){
    let i = 0;
    let regex = new RegExp(`{(.*?)}`, 'g');
    let matches = line.match(regex);
    while(i < matches.length){
        matches[i] = matches[i].replace(/[{}]/g, '');
        i++;
    }
    let singleMatch = matches[0];
    console.log(singleMatch);
    let propsArray = [];
    let singleMatchSplitArray = singleMatch.split(', ');
    i = 0;
    while(i < singleMatchSplitArray.length){
        propsArray.push(singleMatchSplitArray[i].split('=')[0]);
        i++;
    }
    console.log(propsArray);
    let recordsArray = [];

    i = 0;
    while(i < matches.length){
        let record = {};
        let rec = matches[i];
        rec = rec.split(', ');
        let propDataMap = new Map();

        let j = 0;
        while(j < rec.length){
            propDataMap.set(rec[j].split('=')[0], rec[j].split('=')[1]);
            j++;
        }

        j = 0;
        while(j < propsArray.length){
            record[propsArray[j]] = propDataMap.get(propsArray[j]);
            j++;
        }
        recordsArray.push(record);
        i++;
    }
    
    const TABLE_STYLE = 'width: 95vw;';
    const DIV_STYLE = 'overflow:auto';
    const TD_STYLE = 'border:1px solid lightgray;padding:5px;text-align:center;font-size:10px;font-family:monospace';
    const TH_STYLE = 'border:1px solid lightgray;padding:5px;text-align:center;;font-size:10px;';

    let rows = '';
    i = 0;
    while(i < recordsArray.length){
        let tds = '';
        let j = 0;
        while(j < propsArray.length){
            tds += `<td style="${TD_STYLE}">${recordsArray[i][propsArray[j]] || ''}</td>`;
            j++;
        }
        rows +=  `<tr>
            ${tds}
        </tr>`;
        i++;
    }
    let headers = '';
    
    i = 0;
    while(i < propsArray.length){
        headers += `<th style="${TH_STYLE}">${propsArray[i]}</th>`;
        i++;
    }
    
    let htmlString = `
        <div style="${DIV_STYLE}" class="table_dv">
            <table style="${TABLE_STYLE}">
                <tr>
                    ${headers}
                </tr>
                ${rows}
            </table>
        </div>
    `;
    return htmlString;
}

function fetchLogBody(logId) {
    console.time('fetchLogBody Time');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + sessionId);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    showSpinner();
    fetch(baseUrl + '/services/data/v60.0/tooling/sobjects/ApexLog/' + logId + '/Body', requestOptions).then(response => response.text()).then(data => {
        logBody = data;
        console.timeEnd('fetchLogBody Time');
        makeLogBody();
    }).catch(error => {
        console.log('$API: error', error);
        hideSpinner();
    });
}

function makeLogBody(index, ischecked){
    console.time('makeLogBody Time');
    if(index == 3 && !ischecked){
        $('.txt_area').html(logBody.split('\n').join('<br>'));
        return;
    }
    let showExecutions = true;
    if(index == 2 && !ischecked){
        showExecutions = false;
    }
    let showSoql = false;
    if(index == 1 && ischecked){
        showSoql = true;
        if($('.checkbox_icon_2').hasClass("fa-square-o")){
            $('.checkbox_icon_2').removeClass("fa-square-o").addClass("fa-minus-square-o");
        }
        if($('.checkbox_icon_3').hasClass("fa-square-o")){
            $('.checkbox_icon_3').removeClass("fa-square-o").addClass("fa-minus-square-o");
        }
    }
    let lines_clone = [];
    let lines = logBody.split('\n');
    let i = 0;
    while(i < lines.length){
        const regex1 = /\|USER_DEBUG\|\[\d+\]\|DEBUG\|/;
        const regex2 = /System\.\w+Exception/;
        const regex3 = /\|(FATAL_ERROR|FLOW_ELEMENT_ERROR)\|/;

        // const regex4 = /\|(METHOD_ENTRY|METHOD_EXIT|CODE_UNIT_STARTED)\|/;
        // const regex4 = /\|(METHOD_ENTRY|METHOD_EXIT|CODE_UNIT_STARTED|CODE_UNIT_FINISHED)\|(?!.*(Database.|\|METHOD_EXIT\|\[1\]))/;
        // const regex4 = /\|(METHOD_ENTRY|METHOD_EXIT|CODE_UNIT_STARTED|CODE_UNIT_FINISHED|SOQL_EXECUTE_BEGIN)\|(?!.*(Database.))/;
        // const regex = /^(?!.*\|METHOD_EXIT\|\[1\]).*\|METHOD_EXIT\|\[([2-9]|\d{2,})\].*$/;
        // const regex4 = /\|(METHOD_ENTRY|METHOD_EXIT|CODE_UNIT_STARTED|CODE_UNIT_FINISHED)\|(?!.*(Database.|Database.|Database.|\|METHOD_EXIT\|\[1\]))/;
        // const regex4 = /^(METHOD_ENTRY|METHOD_EXIT)$/;

        const regex4 = /\|(METHOD_ENTRY|DML_BEGIN|METHOD_EXIT|CODE_UNIT_STARTED|CODE_UNIT_FINISHED)\|(?!.*(Database.))/;
        const regex5 = /\|(METHOD_ENTRY|METHOD_EXIT|CODE_UNIT_STARTED|CODE_UNIT_FINISHED|SOQL_EXECUTE_BEGIN)\|(?!.*(Database.))/;
        
        if(regex1.test(lines[i]) || (showExecutions && showSoql && regex5.test(lines[i])) || (showExecutions && regex4.test(lines[i]))){
            if(showExecutions && showSoql && regex5.test(lines[i])){
                lines[i] = `<span style="color:#bfd9bb;">${lines[i].substring(lines[i].indexOf('DML_BEGIN'))}</span>`;
                lines[i] = `<span style="color:#bfd9bb;">${lines[i].substring(lines[i].indexOf('METHOD_ENTRY'))}</span>`;
                lines[i] = `<span style="color:#f1cbcb;">${lines[i].substring(lines[i].indexOf('METHOD_EXIT'))}</span>`;
                lines[i] = `<span style="color:#bfd9bb;">${lines[i].substring(lines[i].indexOf('CODE_UNIT_STARTED'))}</span>`;
                lines[i] = `<span style="color:#f1cbcb;">${lines[i].substring(lines[i].indexOf('CODE_UNIT_FINISHED'))}</span>`;
                lines[i] = `<span style="color:#00c1c4;">${lines[i].substring(lines[i].indexOf('SOQL_EXECUTE_BEGIN'))}</span>`;
                lines_clone.push(lines[i]);
            }else if(showExecutions && regex4.test(lines[i])){
                lines[i] = `<span style="color:#bfd9bb;">${lines[i].substring(lines[i].indexOf('METHOD_ENTRY'))}</span>`;
                lines[i] = `<span style="color:#f1cbcb;">${lines[i].substring(lines[i].indexOf('METHOD_EXIT'))}</span>`;
                lines[i] = `<span style="color:#bfd9bb;">${lines[i].substring(lines[i].indexOf('CODE_UNIT_STARTED'))}</span>`;
                lines[i] = `<span style="color:#f1cbcb;">${lines[i].substring(lines[i].indexOf('CODE_UNIT_FINISHED'))}</span>`;
                lines_clone.push(lines[i]);
            }else{
                lines_clone.push(lines[i]);
            }
            if(lines[i].includes('$LIST:')){
                try{
                    lines_clone.push(getLineGenerateTable(lines[i]));
                }catch(error){
                    console.error('$ERROR-GENERATING TABLE: ', error);
                    console.error('$ERROR-GENERATING LINE: ', lines[i]);
                }
            }
        }else if(regex2.test(lines[i]) || regex3.test(lines[i])){
            if(i > 1 && lines.at(i - 1).includes('Class.')){
                lines_clone.push(`<span style="color:red">${lines.at(i - 1)}</span>`);
            }
            lines_clone.push(`<span style="color:red">${lines[i]}</span>`);
        }/* else{
            lines_clone.push(lines[i]);
        } */
        i++;
    }
    
    lines = lines_clone;
    lines_clone = [];
    // console.log('$lines: ',lines);
    if(!(Array.isArray(lines) && lines.length > 0)){
        lines = logBody.split('\n');
        $('.txt_area').html(lines.join('<br>'));
    }else{
        lines = lines.map(line => {
            const regex = /.*?(\|USER_DEBUG\|\[\d+\]\|DEBUG\|.*)/;
            const match = line.match(regex);
            // console.log('$match: ',match);
            if (match) {
                let debugPart = match[1];
                debugPart  = debugPart.replace(/\[(\d+)\]/, (fullMatch, num) => {//9c37dd
                    return `<span style="color:gray">[</span> <span style="color:#0200ff;letter-spacing:1px;font-weight: 500;">${num}</span> <span style="color:gray">]</span>`;
                });
                debugPart = debugPart.replace('|DEBUG|', '');
                debugPart = debugPart.replace('|USER_DEBUG|', '<span style="color:gray">|USER_DEBUG|</span>');
                debugPart = debugPart.replace('$', '<span style="color:red;">$</span>');
                
                if(debugPart.includes('_TG:')){
                    let dbg = debugPart.substring(debugPart.indexOf('_TG:') + 4);
                    return debugPart.replace(dbg, `<span style="color:#08a308;">${dbg}</span>`) ;
                }else if(debugPart.includes('_TR:')){
                    let dbg = debugPart.substring(debugPart.indexOf('_TR:') + 4);
                    return debugPart.replace(dbg, `<span style="color:#de0202;">${dbg}</span>`) ;
                }else if(debugPart.includes('_TB:')){
                    let dbg = debugPart.substring(debugPart.indexOf('_TB:') + 4);
                    return debugPart.replace(dbg, `<span style="color:#6366ff !important;">${dbg}</span>`) ;
                }else if(debugPart.includes('_BTG:')){
                    let dbg = debugPart.substring(debugPart.indexOf('_BTG:') + 5);
                    return debugPart.replace(dbg, `<span style="font-weight:bold;color:#08a308;">${dbg}</span>`) ;
                }else if(debugPart.includes('_BTR:')){
                    let dbg = debugPart.substring(debugPart.indexOf('_BTR:') + 5);
                    return debugPart.replace(dbg, `<span style="font-weight:bold;color:#de0202;">${dbg}</span>`) ;
                }else if(debugPart.includes('_BTB:')){
                    let dbg = debugPart.substring(debugPart.indexOf('_BTB:') + 5);
                    return debugPart.replace(dbg, `<span style="font-weight:bold;color:#6366ff;">${dbg}</span>`) ;
                }else if(debugPart.includes('_BT:')){
                    let dbg = debugPart.substring(debugPart.indexOf('_BT:') + 4);
                    return debugPart.replace(dbg, `<span style="font-weight:bold;">${dbg}</span>`) ;
                }else{
                    return debugPart;
                }

            }
            return line;
        });
        let j = 0;
        while(j < lines.length){
            lines[j] = `<span style="color:gray">${j + 1} : </span>` + lines[j] + '<br><br>';
            j++;
        }
        // lines = logBody.split('\n');
        // $('.txt_area').html(lines.join('<br>'));
        $('.txt_area').html(lines.join(''));
    }
    hideSpinner();
    console.timeEnd('makeLogBody Time');
}

function showSpinner() {
    $(".spinner-div").show();
}

function hideSpinner() {
    $(".spinner-div").hide();
    $('.refresh_btn_icon').removeClass('fast-spin');
}

function getConvertedDateTime_short(dateTimeString){
    let date_time = Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata',hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(new Date(dateTimeString));
    date_time = date_time.toUpperCase();
    return date_time;
}
function getConvertedDateTime(dateTimeString){
    let date_time = Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(new Date(dateTimeString));
    date_time = date_time.substring(0, date_time.length - 2) + date_time.substring(date_time.length - 2).toUpperCase();
    date_time = date_time.split(', ');
    date_time = date_time[1] + ', ' + date_time[0];
    return date_time;
}
function formatBytes(bytes) {
if (bytes < 1024) {
    return bytes + ' B';
} else if (bytes < 1024 * 1024) {
    return (bytes / 1024).toFixed(2) + ' KB';
} else {
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}
}

$(document).on('click', '.td', function (e){
    console.log($(this).data('id'));
    $('.txt_area').html('');
    $('.td').removeClass('selected_td');
    $(this).addClass('selected_td');
    if($('.checkbox_icon_2').hasClass("fa-square-o")){
        $('.checkbox_icon_2').removeClass("fa-square-o").addClass("fa-minus-square-o");
    }
    if($('.checkbox_icon_3').hasClass("fa-square-o")){
        $('.checkbox_icon_3').removeClass("fa-square-o").addClass("fa-minus-square-o");
    }
    fetchLogBody($(this).data('id'));
});

$(document).on('click', '.checkbox_icon', function (e) {
    let index = $(this).data('index');
    toggleCheckboxIcon(index);
});
function toggleCheckboxIcon(index) {
    let icon = $(`.checkbox_icon_${index}`);
    if(icon.hasClass("fa-minus-square-o")){
        icon.removeClass("fa-minus-square-o").addClass("fa-square-o");
        console.log('on un-checked');
        if(index == 1){
            console.log(`unchecked-index - ${index}`);
            makeLogBody(index, false);
        }else if(index == 2){
            console.log(`unchecked-index - ${index}`);
            if($('.checkbox_icon_1').hasClass("fa-minus-square-o")){
                $('.checkbox_icon_1').removeClass("fa-minus-square-o").addClass("fa-square-o");
            }
            makeLogBody(index, false);
        }else if(index == 3){
            makeLogBody(index, false);
            if($('.checkbox_icon_1').hasClass("fa-minus-square-o")){
                $('.checkbox_icon_1').removeClass("fa-minus-square-o").addClass("fa-square-o");
            }
            if($('.checkbox_icon_2').hasClass("fa-minus-square-o")){
                $('.checkbox_icon_2').removeClass("fa-minus-square-o").addClass("fa-square-o");
            }
            console.log(`unchecked-index - ${index}`);
        }
    }else if(icon.hasClass("fa-square-o")){
        icon.removeClass("fa-square-o").addClass("fa-minus-square-o");
        console.log('on checked');
        if(index == 1){
            console.log(`checked-index - ${index}`);
            makeLogBody(index, true);
        }else if(index == 2){
            console.log(`checked-index - ${index}`);
            if($('.checkbox_icon_3').hasClass("fa-square-o")){
                $('.checkbox_icon_3').removeClass("fa-square-o").addClass("fa-minus-square-o");
            }
            makeLogBody(index, true);
        }else if(index == 3){
            if($('.checkbox_icon_2').hasClass("fa-square-o")){
                $('.checkbox_icon_2').removeClass("fa-square-o").addClass("fa-minus-square-o");
            }
            makeLogBody(index, true);
            console.log(`checked-index - ${index}`);
        }
    }
}