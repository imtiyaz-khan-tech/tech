let conn;
let baseUrl;
let logData;
let sessionId;
let recordsAll;
let totalCount = 0;
let recordsCurrent;
let completeLogSize = 0;
$(document).ready(function () {
    let url = new URL(window.location.href);
    console.log('$url: ', url);
    baseUrl = url.searchParams.get('baseUrl');
    console.log('$baseUrl: ', baseUrl);
    sessionId = url.searchParams.get('sessionId');
    console.log('$sessionId: ', sessionId);
    //Initialize Connection
    initialize();
});

async function initialize(){
    //Connection
    conn = await getConnection(baseUrl, sessionId);
    console.log('$conn: ',conn);
    getCompleteLogSize(null);
    //Fetch Records
    fetchRecords();
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
    let fields_array = [
        'Id', 'Location', 'DurationMilliseconds', 'Request', 'LastModifiedDate', 
        'LogUser.Name', 'Application', 'Status', 'Operation', 'LogLength', 'LogUserId'
    ];
    let q = `SELECT ${fields_array.join(',')} FROM ApexLog Order By LastModifiedDate DESC`; //q += ' LIMIT 10';
    conn.query(q).then(res => {
        console.log('$res: ',res);
        totalCount = res.totalSize;
        console.log('$totalCount: ',totalCount);
        console.log('$FetchedCount: ', res.records.length);
        console.log('$Records: ', res.records);
        recordsAll = [...res.records];
        console.log('$recordsAll: ',recordsAll);
        recordsCurrent = [...res.records];
        console.log('$recordsCurrent: ',recordsCurrent);
        //Generate Table
        generateTable();
        generateUserOptions();
        hideSpinner();
    }).catch( error => {
        console.error('$error: ',error);
        hideSpinner();
    });
}

function getCompleteLogSize(title){
    let q = 'SELECT SUM(LogLength) completeLogSize FROM ApexLog';
    conn.query(q).then(res => {
        console.log('$CompleteLogSize: ',res);
        if(res && res.records && res.records[0]){
            completeLogSize = res.records[0].completeLogSize;
            console.log('$completeLogSize: ',completeLogSize);
            if(title){
                title = title.replace('0 B', formatBytes(completeLogSize));
                document.title = title;
            }
        }
    }).catch( error => {
        console.error('$CompleteLogSize_error: ',error);
    });
}

function generateTable() {
    let trTags = '';
    let totalSize = 0;
    recordsCurrent.forEach((rec, index) => {
        let tdTags = `<td class="td_1" title="${index + 1}">${index + 1}</td><td class="td_1 record-id" title="${rec.Id}">${rec.Id}</td>`;
        tdTags += `<td class="td_1" title="${rec.LogLength}">${rec.LogLength}</td>`;
        tdTags += `<td class="td_1" title="${rec.Size}">${formatBytes(rec.LogLength)}</td>`;
        tdTags += `<td class="td_1" title="${getConvertedDateTime(rec.LastModifiedDate)}">${getConvertedDateTime(rec.LastModifiedDate)}</td>`;
        tdTags += `<td class="td_1" title="${rec.LogUser.Name}">${rec.LogUser.Name}</td>`;
        tdTags += `<td class="td_1 ${rec.Id}_Status" title="${rec.Status}">${rec.Status}</td>`;
        let operationclass = rec.Operation == 'FutureHandler' ? ' color-operation' : '';
        tdTags += `<td class="td_1${operationclass}" title="${rec.Operation}">${rec.Operation}</td>`;
        tdTags += `<td class="td_1" title="${rec.DurationMilliseconds}">${formatMilliseconds(rec.DurationMilliseconds)}</td>`;
        // tdTags += `<td class="td_1" title="${rec.Request}">${rec.Request}</td>`;
        // tdTags += `<td class="td_1" title="${rec.Location}">${rec.Location}</td>`;
        // tdTags += `<td class="td_1" title="${rec.Application}">${rec.Application}</td>`;
        tdTags += `<td class="td_1"><i class="open-icon fa fa-arrow-circle-o-down fa-2x" aria-hidden="true" data-recId="${rec.Id}"></i></td>`;
        totalSize += rec.LogLength;
        trTags += `<tr class="tr_${rec.Id}">${tdTags}</tr>`;
    });
    // document.title = `Logs - [ ${totalCount} ] : Showing - [ ${recordsCurrent.length} ] : Total Size:- ${formatBytes(totalSize)}`;
    if(completeLogSize == 0){
        getCompleteLogSize(`Total Logs - [ ${totalCount} - ${formatBytes(completeLogSize)} ] : Showing - [ ${recordsCurrent.length} - ${formatBytes(totalSize)}]`);
    }else{
        document.title = `Total Logs - [ ${totalCount} - ${formatBytes(completeLogSize)} ] : Showing - [ ${recordsCurrent.length} - ${formatBytes(totalSize)}]`;
    }
    $('.tbody_1').html(trTags);
}

function generateUserOptions(){
    let usersSet = new Set();
    recordsAll.forEach(rec => {
        usersSet.add(rec.LogUser.Name);
    });
    let user_options = '<option value="All Users" selected>All Users</option>';
    usersSet.forEach(val => {
        user_options += `<option value="${val}">${val}</option>`;
    });
    $('.user_options').html(user_options);
}

$(document).on('change', '.user_options', function (e){
    let val = $(this).val().trim();
    console.log('val: ',val);
    if(val == 'All Users'){
        recordsCurrent = [...recordsAll];
        generateTable();
    }else{
        recordsCurrent = recordsAll.filter(rec => {
            return rec.LogUser.Name == val;
        });
        generateTable();
    }
 });

function formatMilliseconds(ms) {
    if (ms < 1000) {
        return ms + ' ms';
    } else if (ms < 60 * 1000) {
        return (ms / 1000).toFixed(1) + ' s';
    } else if (ms < 60 * 60 * 1000) {
        return (ms / (60 * 1000)).toFixed(1) + ' m';
    } else {
        return (ms / (60 * 60 * 1000)).toFixed(1) + ' h';
    }
}

/* function getConvertedDateTime(dateTimeString){
    let date_time = Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(new Date(dateTimeString));
    date_time = date_time.substring(0, date_time.length - 2) + date_time.substring(date_time.length - 2).toUpperCase();
    date_time = date_time.split(', ');
    date_time = date_time[1] + ', ' + date_time[0];
    return date_time;
} */
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

$(document).on('click', '.td_1:not(.record-id)', function (e) {
    copyToCLipboard($(this).text().trim(), true);
});

function checkResponse(apiResponse){
    if(apiResponse.isError){
        hideSpinner();
        $$('.snackbar').text(apiResponse.message);
        showToast();
        return null;
    }else{
        return apiResponse.data;
    }
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

$(document).on('contextmenu', '.record-id', function (e){
    let text = $(this).text().trim();
    e.preventDefault();
    $('.record-id').css('color','rgb(42, 40, 40)');
    $(this).css('color','#b800b8');
    openRecordDetail(text);
});

$(document).on('click', '.record-id', function (e){
   let text = $(this).text().trim();
   console.log('$text-Rec ID: ',text);
   $('.record-id').css('color','rgb(42, 40, 40)');
   $(this).css('color','rgb(248 0 0)');
   openRawLog(text);
});

function openRawLog(recordID){
    const userKeyRegExp = /[a-zA-Z0-9]{15}|[a-zA-Z0-9]{18}/;
    const valid = userKeyRegExp.test(recordID);
    if (valid) {
        recordID = 'logRecodId=' + recordID + '&';
        let url = 'https://imtiyaz-khan-tech.github.io/tech/salesforce-quick-access/rawlog.html?' + recordID + 'baseUrl=' + baseUrl + '&sessionId=' + sessionId
        window.open(url, '_blank');
    }
}


function openRecordDetail(recordID){
    const userKeyRegExp = /[a-zA-Z0-9]{15}|[a-zA-Z0-9]{18}/;
    const valid = userKeyRegExp.test(recordID);
    if (valid) {
        recordID = 'logRecodId=' + recordID + '&';
        let url = 'https://imtiyaz-khan-tech.github.io/tech/salesforce-quick-access/recentlogs?' + recordID + 'baseUrl=' + baseUrl + '&sessionId=' + sessionId;
        window.open(url, '_blank');
    }
}

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

function openMaximized(url) {
    if (url) {
        chrome.windows.create({
            type: 'popup',
            url: url,
            state: 'maximized'
        });
    }
}

$(document).on('input', '.search_input', function (e){
   let val = $(this).val().trim();
   if(val){
        $('.search_btn_text').text('Search ');
   }else{
        $('.search_btn_text').text('Exeption ');
   }
});

$(document).on('keydown', '.delete_input', function (event){
   let charCode = (event.which) ? event.which : event.keyCode;
   if(charCode == 13) {
        let search_input = $('.search_input').val().trim();
        if(!search_input){
            handleDeleteButtonClick();
        }else{
            handleSearch();
        }
   }
});
$(document).on('click', '.delete_all_btn', function (e){
    $('.delete_input').val(recordsCurrent.length);
    handleDeleteButtonClick();
});
$(document).on('keydown', '.search_input', function (event){
    let charCode = (event.which) ? event.which : event.keyCode;
    if(charCode == 13) {
        handleSearch();
    }
 });
$(document).on('click', '.search_btn', async function (e){
    handleSearch();
});
$(document).on('click', '.create_log_btn', async function (e){
    createUserLog();
});

function createUserLog(){
    $(".spinner-div").show();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + sessionId);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(baseUrl + '/services/data/v59.0/tooling/query/?q=SELECT+Id,DeveloperName+FROM+DebugLevel', requestOptions).then(response => response.json()).then(result => {
        console.log('$API: ', result);
        let debugLevelId;

        let traceFlagName = 'SFDC_DevConsole';
        if(baseUrl == 'https://phillips66enterprise--wipro.sandbox.my.salesforce.com'){
            traceFlagName = 'SFDC_DevConsole_Best';
        }else if(baseUrl == 'https://phillips66enterprise--ring4.sandbox.my.salesforce.com'){
            traceFlagName = 'SFDC_DevConsole_Finest';
        }
        console.log('$traceFlagName: ',traceFlagName);

        result.records.forEach(val => {
            if (val.DeveloperName == traceFlagName) {
                debugLevelId = val.Id;
                return;
            }
        });
        console.log('$debugLevelId: ', debugLevelId);

        if (debugLevelId) {
            conn.identity().then(res => {
                console.log('$res: ',res);
                let userId = res.user_id;
                console.log('$userId: ', userId);
                const userKeyRegExp = /[a-zA-Z0-9]{15}|[a-zA-Z0-9]{18}/;
                const valid = userKeyRegExp.test(userId);
                // userId = '0054x000004fs4GAAQ';
                if (valid) {

                    let qryENp = `/services/data/v59.0/tooling/query/?q=SELECT+Id,TracedEntityId,StartDate,ExpirationDate,DebugLevelId,LogType+FROM+TraceFlag+Where+TracedEntityId+=+'${userId}'+And+DebugLevelId+='${debugLevelId}'+Order+By+LastModifiedDate+DESC+LIMIT+1`;
                    fetch(baseUrl + qryENp, {method: 'GET', headers: {"Authorization": "Bearer " + sessionId }, redirect: 'follow' }).then(response => response.json()).then(result => {
                        console.log('$API: ', result);
                        if(result?.records?.length){
                            let record = result.records.at(0);
                            console.log('$record: ',record);
                            
                            let currentTime = new Date();
                            let startDateTime = currentTime.toISOString().slice(0, 19) + 'Z';
                            console.log('$startDateTime: ', startDateTime);
            
                            let oneDayAhead = new Date(currentTime);
                            oneDayAhead.setDate(oneDayAhead.getDate() + 1);
                            let endDateTime = oneDayAhead.toISOString().slice(0, 19) + 'Z';
                            console.log('$endDateTime: ', endDateTime);
                            
                            fetch(`${baseUrl}/services/data/v59.0/tooling/sobjects/TraceFlag/${record.Id}`, {
                                method: 'PATCH',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer ' + sessionId,
                                },
                                body: JSON.stringify({StartDate: startDateTime, ExpirationDate: endDateTime }),
                            }).then(response => {
                                console.log('$response: ', response);
                                if (response.ok) {
                                    $(".spinner-div").hide();
                                    $('.snackbar').text('Success! updated user flag.');
                                    showToast();
                                    hideSpinner();
                                }
                            }).then(data => {
                                console.log('$data: ', data);
                            }).catch(error => {
                                console.error('Error:', error);
                            });
                        }else{
                            let currentTime = new Date();
                            let startDateTime = currentTime.toISOString().slice(0, 19) + 'Z';
                            console.log('$startDateTime: ', startDateTime);
            
                            let oneDayAhead = new Date(currentTime);
                            oneDayAhead.setDate(oneDayAhead.getDate() + 1);
                            let endDateTime = oneDayAhead.toISOString().slice(0, 19) + 'Z';
                            console.log('$endDateTime: ', endDateTime);

                            var requestBody = {
                                TracedEntityId: userId,
                                LogType: 'DEVELOPER_LOG',
                                StartDate: startDateTime,
                                ExpirationDate: endDateTime,
                                debugLevelId: debugLevelId
                            };

                            var _requestOptions = {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer ' + sessionId
                                },
                                body: JSON.stringify(requestBody)
                            };

                            fetch(baseUrl + '/services/data/v59.0/tooling/sobjects/TraceFlag', _requestOptions).then(response => response.json()).then(result => {
                                console.log('$response: ', result);
                                if (result && result[0] && result[0]?.message) {
                                    let errorMessage = result[0]?.message;
                                    console.log('$errorMessage: ', errorMessage);
                                    $('.snackbar').text(errorMessage);
                                    showToast();
                                    $(".spinner-div").hide();
                                } else {
                                    console.log('$success_response: ', result);
                                    if (result.success) {
                                        console.log('Checkpoint success');
                                        $(".spinner-div").hide();
                                        $('.snackbar').text('Success! created user flag.');
                                        showToast();
                                        $(".spinner-div").hide();
                                    }
                                }
                            }).catch(error => {
                                console.log('$getObjects: error', error);
                            });
                        }
                    }).catch(error => {
                        console.log('$API: error', error);
                    });
                }
            }).catch(err => {
                console.log('$err: ',err);
            });
        } else {
            $(".spinner-div").hide();
            $('.snackbar').text('Something went wrong.');
            showToast();
        }

    }).catch(error => {
        console.log('$getObjects: error', error);
    });
}
function handleSearch(){
    let icon = $('.search_btn').find('.exception_icon');
    if(icon.hasClass('hide')){
        icon.removeClass('hide');
        console.log('$recordsCurrent: ',recordsCurrent);
         let count = $('.delete_input').val();
         console.log('$count: ',count);
         if(!count){
            if(recordsCurrent.length >= 18){
                count = 18;
            }else if(recordsCurrent.length <= 18){
                count = recordsCurrent.length;
            }else{
                icon.addClass('hide');
            }
        }
        
         if(count && count > 0 && count <= recordsCurrent.length){
             let logsIdsToFetch = [];
             for(let i = 0 ; i < count ; i++){
                 logsIdsToFetch.push(recordsCurrent[i].Id);
             }
             console.log('$logsIdsToFetch: ',logsIdsToFetch);
             if(logsIdsToFetch.length > 0){
                 let i = 0;
                 let responseCount = 0;
                 var myHeaders = new Headers();
                 myHeaders.append("Authorization", "Bearer " + sessionId);
                 let search_input = $('.search_input').val().trim();
                 if(!search_input){
                    search_input = '|Exception|true|';
                 }
                 while(i < logsIdsToFetch.length){
                     let logId = logsIdsToFetch[i];
                     console.log('$logId: ',logId);
                     fetch(baseUrl + '/services/data/v60.0/tooling/sobjects/ApexLog/' + logId + '/Body', { method: 'GET', headers: myHeaders, redirect: 'follow' }).then(response => response.text()).then(result => {
                         console.log('$API: ', result);
                         if(result.includes(search_input)){
                             $(`.${logId}_Status`).css('color','rgb(238 0 0)');
                         }else{
                             $(`.${logId}_Status`).css('color','#5590af');
                         }
                         responseCount ++;
                         if(count == responseCount){
                             icon.addClass('hide');
                         }
                     }).catch(error => {
                         console.log('$API: error', error);
                     });
                     i++;
                 }
                 /* const promises = logsIdsToFetch.map(async (logId) => {
                     let apiResponse =  await fetchLogBodyFromServer(logId);
                     console.log('$apiResponse: ', apiResponse);
                     // if(apiResponse?.data?.includes('List<p66_Image_Exception_Approval_Criteria2__mdt>.add(Object)')){
                     if(apiResponse?.data?.includes('|Exception|true|')){
                         $(`.${logId}_Status`).css('color','rgb(238 0 0)');
                     }
                 });
                 await Promise.all(promises);
                 icon.addClass('hide'); */
             }
         }else{
             console.log('Checkpoint 2');
         }
    }
}
$(document).on('click', '.delete_btn', function (e){
    handleDeleteButtonClick();
});
async function handleDeleteButtonClick(){
    console.log('$recordsCurrent: ',recordsCurrent);
    let delete_input = $('.delete_input').val();
    console.log('$delete_input: ',delete_input);
    // delete_input = 1000;
    if(!delete_input && recordsCurrent.length <= 20){
        delete_input = recordsCurrent.length;
        console.log('$Delete All: ', delete_input);
    }

    if(delete_input && delete_input > 0 && delete_input <= recordsCurrent.length){
        let logsIdsToDelete = [];
        for(let i = 0 ; i < delete_input ; i++){
            logsIdsToDelete.push(recordsCurrent[i].Id);
        }
        console.log('$logsIdsToDelete: ',logsIdsToDelete);
        if(logsIdsToDelete.length > 0){

            let i = 0;
            let responseCount = 0;
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + sessionId);
            while(i < logsIdsToDelete.length){
                let logId = logsIdsToDelete[i];
                console.log('$logId: ',logId);
                fetch(baseUrl + '/services/data/v60.0/sobjects/Apexlog/' + logId, { method: 'DELETE', headers: myHeaders, redirect: 'follow' }).then(response => response.text()).then(result => {
                    console.log(result);
                    responseCount ++;
                    $('.tr_' + logId).css('background','#fdc8c8');
                    $('.delete_btn').text('Deleted [ '+responseCount+' ]');
                    if(delete_input == responseCount){
                        $('.delete_btn').text('Delete');
                        window.location.reload();
                    }
                    console.log('$i: ',i);
                    console.log('$responseCount: ',responseCount);
                }).catch(error => {
                    console.log('$API: error', error);
                });
                i++;
            }

            /* let index = 0;
            const promises = logsIdsToDelete.map(async (logId) => {
                let apiResponse = await deleteLogsFromServer(logId);
                console.log('$apiResponse: ', apiResponse);
                if(apiResponse.message == 'Unexpected end of JSON input'){
                    console.log('Deleted: ' + logId);
                    $('.tr_' + logId).css('background','#fdc8c8');
                    index ++;
                    $('.delete_btn').text('Deleted [ '+index+' ]');
                }
            });
            await Promise.all(promises);
            $('.delete_btn').text('Delete'); */
        }
    }else{
        console.log('Checkpoint 2');
    }
}
/* async function handleDeleteButtonClick(){
    console.log('$recordsCurrent: ',recordsCurrent);
    let delete_input = $('.delete_input').val();
    console.log('$delete_input: ',delete_input);

    if(!delete_input && recordsCurrent.length <= 20){
        delete_input = recordsCurrent.length;
        console.log('$Delete All: ', delete_input);
    }

    if(delete_input && delete_input > 0 && delete_input <= recordsCurrent.length){
        let logsIdsToDelete = [];
        for(let i = 0 ; i < delete_input ; i++){
            logsIdsToDelete.push(recordsCurrent[i].Id);
        }
        console.log('$logsIdsToDelete: ',logsIdsToDelete);
        if(logsIdsToDelete.length > 0){
            let index = 0;
            const promises = logsIdsToDelete.map(async (logId) => {
                let apiResponse = await deleteLogsFromServer(logId);
                console.log('$apiResponse: ', apiResponse);
                if(apiResponse.message == 'Unexpected end of JSON input'){
                    console.log('Deleted: ' + logId);
                    $('.tr_' + logId).css('background','#fdc8c8');
                    index ++;
                    $('.delete_btn').text('Deleted [ '+index+' ]');
                }
            });
            await Promise.all(promises);
            $('.delete_btn').text('Delete');
        }
    }else{
        console.log('Checkpoint 2');
    }
} */

async function deleteLogsFromServer(logId) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + sessionId);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    try{
        const response = await fetch(baseUrl + '/services/data/v60.0/sobjects/Apexlog/' + logId, requestOptions);
        if(!response.ok) {
            return { isError: true, name: response.status, message: response.statusText, stack: response.type };
        }
        const result = await response.json();
        return { isError: false, data: result};
    }catch(error){
       return { isError: true, name: error.name, message: error.message, stack: error.stack };
    }
}
$(document).on('change', '.log_filter', function (e){
    let val = $(this).val().trim();
    console.log('val: ',val);
    if(val == 'Large First'){
        recordsCurrent = recordsCurrent.sort(function(a, b){return b.LogLength - a.LogLength});
        console.log('$recordsCurrent: ',recordsCurrent);
        generateTable();
    }else if(val == 'Small First'){
        recordsCurrent = recordsCurrent.sort(function(a, b){return a.LogLength - b.LogLength});
        console.log('$recordsCurrent: ',recordsCurrent);
        generateTable();
    }else if(val == 'New First'){
        recordsCurrent.sort((a, b) => { 
            const dateA = new Date(a.LastModifiedDate);
            const dateB = new Date(b.LastModifiedDate);
            // return dateA - dateB; // Old First
            return dateB - dateA; //New First
        });
        console.log('$recordsCurrent: ',recordsCurrent);
        generateTable();
    }else if(val == 'Old First'){
        recordsCurrent.sort((a, b) => { 
            const dateA = new Date(a.LastModifiedDate);
            const dateB = new Date(b.LastModifiedDate);
            return dateA - dateB;
        });
        console.log('$recordsCurrent: ',recordsCurrent);
        generateTable();
    }else if(val == 'Failed Logs'){
        recordsCurrent = recordsCurrent.filter(rec => {
            return rec.Status != 'Success';
        });
        generateTable();
    }else if(val == 'Passed Logs'){
        recordsCurrent = recordsCurrent.filter(rec => {
            return rec.Status == 'Success';
        });
        generateTable();
    }else if(val == 'Long Running First'){
        recordsCurrent = recordsCurrent.sort(function(a, b){return b.DurationMilliseconds - a.DurationMilliseconds});
        console.log('$recordsCurrent: ',recordsCurrent);
        generateTable();
    }else if(val == 'Long Running Last'){
        recordsCurrent = recordsCurrent.sort(function(a, b){return a.DurationMilliseconds - b.DurationMilliseconds});
        console.log('$recordsCurrent: ',recordsCurrent);
        generateTable();
    }
 });
 $(document).on('click', '.close_btn_dv', function (e) {
    $('.d_outer').removeClass('blur');
    $('.small_popup_2').addClass('hide');
});

$(document).on('click', '.open-icon', function (e){
    let recordID = $(this).attr('data-recId');
    console.log('$recordID: ',recordID);
    let rec = recordsCurrent.find(element => {
        return element.Id == recordID;
    });
    console.log('$rec: ',rec);
    getLogData(recordID, rec);
});

function getLogData(logId, rec) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + sessionId);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    showSpinner();
    fetch(baseUrl + '/services/data/v60.0/tooling/sobjects/ApexLog/' + logId + '/Body', requestOptions).then(response => response.text()).then(result => {
        // console.log('$API: ', result);
        /* $('.d_outer').addClass('blur');
        $('.small_popup_2').removeClass('hide');
        logData = result;
        $('.txt_log_body').val(logData);
        $('.errcode').text('LOG - ' + formatBytes(rec.LogLength) + ' - [ '+getConvertedDateTime(rec.LastModifiedDate)+' ]');
        hideSpinner();
        showUserDebugOnly = false;
        $('.debug_only').css('background','#ffffff'); */
        
        // Create a Blob from the text content
        const blob = new Blob([result], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "Log.java");
        hideSpinner();
    }).catch(error => {
        console.log('$API: error', error);
        hideSpinner();
    });
}
let showUserDebugOnly = false;
$(document).on('click', '.debug_only', function (e){
    showUserDebugOnly = !showUserDebugOnly;
    if(showUserDebugOnly){
        let data = logData.split('\n').filter(line => {
            return line.includes('USER_DEBUG|[') == true;
        });
        try{
            data = data.map((line,indx) => {
                line = (indx + 1) + '. ' + line.substring(line.indexOf(']|DEBUG|') + 8);
                return line;
            });
        }catch(error){
           console.error('$error: ', error);
        }
        $('.txt_log_body').val(data.join('\n\n'));
        $('.debug_only').css('background','#e1ffde');
    }else{
        $('.txt_log_body').val(logData);
        $('.debug_only').css('background','#ffffff');
    }
});
$(document).on('click', '.refresh_btn', function (e){
   window.location.reload();
});

async function fetchLogBodyFromServer(logId) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + sessionId);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    try{
        const response = await fetch(baseUrl + '/services/data/v60.0/tooling/sobjects/ApexLog/' + logId + '/Body', requestOptions);
        if(!response.ok) {
            return { isError: true, name: response.status, message: response.statusText, stack: response.type };
        }
        const result = await response.text();
        return { isError: false, data: result};
    }catch(error){
       return { isError: true, name: error.name, message: error.message, stack: error.stack };
    }
}

//Table Popup Starts

$(document).on('click', '.table-close-icon', function (e){
    $('.d_outer').removeClass('blur');
    $('.table_popup').addClass('hide');
});
$(document).on('click', '.floating_btn', async function (e){
    $('.d_outer').addClass('blur');
    $('.table_popup').removeClass('hide');
    let response = await fetchTraceFlags();
    console.log('$response: ',response);
    let records = response.records.map(rec => {
        return {
            Name: rec.TracedEntity.Name,
            LogType: rec.LogType,
            RequestedBy: rec.CreatedBy.Name,
            StartDate: getConvertedDateTime_DateFirst(rec.StartDate),
            ExpirationDate: getConvertedDateTime_DateFirst(rec.ExpirationDate),
            DebugLevel: rec.DebugLevel.DeveloperName,
            Button: `
                <button class="btn-action btn-delete-trace-flag" data-id="${rec.Id}">Delete</button>
            `,
            Button2: `
                <button class="btn-action btn-renew-trace-flag" data-id="${rec.Id}">Renew</button>
            `,
            rowColor: (checkDate(rec.StartDate) || checkDate(rec.ExpirationDate)) ? '#dfffdf' : ''
        };
    });
    console.log('$records: ',records);
    let thsArray = [
        { label: 'Name', apiname: 'Name' },
        { label: 'Log Type', apiname: 'LogType' },
        { label: 'Requested By', apiname: 'RequestedBy' },
        { label: 'Start Date', apiname: 'StartDate' },
        { label: 'Expiration Date', apiname: 'ExpirationDate' },
        { label: 'DebugLevel', apiname: 'DebugLevel' },
        { label: '', apiname: 'Button' },
        { label: '', apiname: 'Button2' },
    ];
    console.log('$thsArray: ',thsArray);
    let ths = `
        <th class="th_2">
            
        </th>
    `;

    thsArray.forEach(val => {
        ths += `
            <th class="th_2">
                ${val.label}
            </th>
        `;
    });
    
    let trs = '';
    records.forEach((rec, indx) => {
        let tds = `
            <td class="td_2 td_2_gray">
                ${indx + 1}
            </td>
        `;
        thsArray.forEach(th => {
            tds += `
                <td class="td_2">
                    ${getParsedValue(rec[th.apiname])}
                </td>
            `;
        });
        let rowStyle = '';
        if(rec?.rowColor){
            rowStyle = `style="background-color: ${rec?.rowColor};"`;
        }
        trs += `
            <tr class="tbody_2_tr tbody_2_tr_2" ${rowStyle}>${tds}</tr>
        `;
    });
    $('.thead_2_tr').html(ths);
    $('.tbody_2').html(trs);
});

async function fetchTraceFlags() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + sessionId);
    let query = `SELECT+Id,LogType,TracedEntity.Name,CreatedBy.Name,StartDate,ExpirationDate,DebugLevel.DeveloperName+FROM+TraceFlag+Order+By+CreatedBy.Name`;
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    try{
        const response = await fetch(baseUrl + `/services/data/v60.0/tooling/query?q=`+query, requestOptions);
        if(!response.ok) {
            return { isError: true, name: response.status, message: response.statusText, stack: response.type };
        }
        const result = await response.json();
        return result;
    }catch(error){
        return { isError: true, name: error.name, message: error.message, stack: error.stack };
    }
}
function getConvertedDateTime_DateFirst(dateTimeString){
    let date_time = Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', day: '2-digit', month: '2-digit',year: 'numeric', hour: '2-digit', minute: '2-digit'}).format(new Date(dateTimeString));
    return date_time.toUpperCase();
}
function checkDate(dateString) {
    const givenDate = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    today.setHours(0, 0, 0, 0);
    tomorrow.setHours(0, 0, 0, 0);
    givenDate.setHours(0, 0, 0, 0);

    return givenDate.getTime() === today.getTime() || givenDate.getTime() === tomorrow.getTime();
}
function getParsedValue(value){
    if(typeof value === 'boolean'){
        return value == true ? 'true' : 'false';
    }else{
        if(typeof value != 'number'){
            return value ? value : '';
        }else{
            return value;
        }
    }
}
$(document).on('click', '.btn-renew-trace-flag', function (e){
    e.stopPropagation();
    let _this = $(this);
    let recordId = _this.data('id');
    console.log('$recordId: ',recordId);
    
    let currentTime = new Date();
    let startDateTime = currentTime.toISOString().slice(0, 19) + 'Z';
    console.log('$startDateTime: ', startDateTime);

    let oneDayAhead = new Date(currentTime);
    oneDayAhead.setDate(oneDayAhead.getDate() + 1);
    let endDateTime = oneDayAhead.toISOString().slice(0, 19) + 'Z';
    console.log('$endDateTime: ', endDateTime);
    
    fetch(`${baseUrl}/services/data/v59.0/tooling/sobjects/TraceFlag/${recordId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionId,
        },
        body: JSON.stringify({StartDate: startDateTime, ExpirationDate: endDateTime }),
    }).then(response => {
        console.log('$response: ', response);
        if (response.ok) {
            $(this).css('color','#36b150');
        }else{
            $(this).css('color','#f64545');
        }
    }).then(data => {
        console.log('$data: ', data);
        $(this).css('color','#36b150');
    }).catch(error => {
        console.error('Error:', error);
        $(this).css('color','#f64545');
    });

});
$(document).on('click', '.btn-delete-trace-flag', function (e){
    e.stopPropagation();
    let _this = $(this);
    let recordId = _this.data('id');
    console.log('$recordId: ',recordId);
 
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + sessionId);
    
    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    fetch(baseUrl + "/services/data/v59.0/tooling/sobjects/TraceFlag/" + recordId, requestOptions).then(response => response.json()).then(result => {
        console.log('$API: -', result);
        if(result && Array.isArray(result) && result.length){
             let err = result.at(0);
             document.title = err?.message ?? err?.errorCode;
             $(this).css('color','#f64545');
        }else{
             $(this).css('color','#36b150');
        }
    }).catch(error => {
        console.log('$API: error', error);
        $(this).css('color','#36b150');
        /* if(error && error == 'SyntaxError: Unexpected end of JSON input'){
             $(this).css('color','#36b150');
        }else{
             _this.css('color','#f64545');
        } */
    });
 });
//Table Popup Ends