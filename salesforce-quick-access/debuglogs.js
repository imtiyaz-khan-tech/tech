let editor;
let baseUrl = null;
let sessionId = null;
let logsIdArray = null;
let userRecords = null;
$(document).ready(function () {
    $(".spinner-div").hide();
    Draggable.create('.small_popup_1');
    let url = new URL(window.location.href);
    console.log('$url: ', url);
    baseUrl = url.searchParams.get('baseUrl');
    console.log('$baseUrl: ', baseUrl);
    setSessionText();
    sessionId = url.searchParams.get('sessionId');
    console.log('$sessionId: ', sessionId);
});
function setSessionText() {
    let a = baseUrl + '';
    console.log('$a: ', a);
    if (a.includes('sandbox')) {
        a = a.substring(0, a.indexOf('.sandbox.'));
        a = a.split('-');
        a = a[a.length - 1];
        console.log('$a: ', a);
    } else {
        a = a.split('-');
        a = a[0];
        a = a.replaceAll('https://', '');
        console.log('$a: ', a);
    }

    a = a.toUpperCase();
    console.log('$environment: ', a);
    document.title = document.title + ' - ' + a;
}
$(document).on('click', '.top_createlog_btn', function (e) {
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
        result.records.forEach(val => {
            if (val.DeveloperName == 'SFDC_DevConsole') {
                debugLevelId = val.Id;
                return;
            }
        });
        console.log('$debugLevelId: ', debugLevelId);

        //CREATE LOG
        if (debugLevelId) {
            var userId = $('.top_userinfo_inp').val();
            console.log('$userId: ', userId);
            const userKeyRegExp = /[a-zA-Z0-9]{15}|[a-zA-Z0-9]{18}/;
            const valid = userKeyRegExp.test(userId);
            if (valid) {
                var endpoint = baseUrl + '/services/data/v59.0/tooling/sobjects/TraceFlag';

                var currentTime = new Date();
                var startDateTime = currentTime.toISOString().slice(0, 19) + 'Z';
                console.log('$startDateTime: ', startDateTime);

                var oneDayAhead = new Date(currentTime);
                oneDayAhead.setDate(oneDayAhead.getDate() + 1);
                var endDateTime = oneDayAhead.toISOString().slice(0, 19) + 'Z';
                console.log(endDateTime);

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

                fetch(endpoint, _requestOptions).then(response => response.json()).then(result => {
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
            } else {
                $(".spinner-div").hide();
                $('.snackbar').text('Invalid ID.');
                showToast();
            }
        } else {
            $(".spinner-div").hide();
            $('.snackbar').text('Something went wrong.');
            showToast();
        }
        //CREATE LOG

    }).catch(error => {
        console.log('$getObjects: error', error);
    });
});
$(document).on('click', '.top_fetchlog_btn', function (e) {
    var userId = $('.top_userinfo_inp').val();
    console.log('$userId: ', userId);
    const userKeyRegExp = /[a-zA-Z0-9]{15}|[a-zA-Z0-9]{18}/;
    const valid = userKeyRegExp.test(userId);
    if (valid) {
        $(".spinner-div").show();
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + sessionId);

        let query = 'SELECT+Id,LastModifiedDate,LogUser.Name,Application,Status,Operation,LogLength,LogUserId+FROM+ApexLog+Where+LogUserId+=+' + '\'' + userId + '\'+Order+By+LastModifiedDate+DESC+Limit+19';

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        logsIdArray = [];
        fetch(baseUrl + '/services/data/v44.0/tooling/query?q=' + query, requestOptions).then(response => response.json()).then(result => {
            console.log('$LOGS: ', result.records);
            if (!result?.records?.length) {
                $(".spinner-div").hide();
                $('.snackbar').text('Logs not available.');
                showToast();
            }
            let sub_tags = '';
            result.records.forEach(rec => {
                logsIdArray.push(rec.Id);
                let dateString = Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date(rec.LastModifiedDate));
                sub_tags += `
                    <tr class="tr">
                        <td class="td td_id ${rec.Id}" data-id=${rec.Id} style="cursor:pointer;">${rec.LogLength}</td>
                        <td class="td">${dateString}</td>
                        <td class="td">${rec.Status}</td>
                        <td class="td">${rec.LogUser.Name}</td>
                        <td class="td" data-id=${rec.Id}>${rec.Operation}</td>
                    </tr>
                `;
            });
            $('.log_table_body').html(sub_tags);
            $(".spinner-div").hide();
        }).catch(error => {
            console.log('$getObjects: error', error);
        });
    } else {
        $('.snackbar').text('Invalid ID.');
        showToast();
    }
});

$(document).on('click', '.td_id', async function (e) {
    $('.td_id').css('color', 'black');
    $(this).css('color', 'red');
    let logId = $(this).attr('data-id').trim();
    $(".spinner-div").show();
    let logData = await getLogData(logId);
    console.log('$logData: ', logData);
    $('.d_down_textarea').val(logData);
    /* editor = ace.edit(document.querySelector("#editor"));
    editor.setOptions({
        // theme: "ace/theme/cobalt",
        // theme: "ace/theme/monokai",
        // theme: "ace/theme/one_dark",
        // theme: "ace/theme/textmate",
        // theme: "ace/theme/xcode",
        // mode: "ace/mode/javascript",
        mode: "ace/mode/apex"
    });
    editor.getSession().setValue(logData); */
    $(".spinner-div").hide();
});
function showSpinner() {
    $(".spinner-div").show();
}

function hideSpinner() {
    $(".spinner-div").hide();
}

$(document).on('keydown', '.top_userinfo_inp', async function (e) {
    let charCode = (e.which) ? e.which : e.keyCode;
    if (charCode == 13) {
        let recordID = $(this).val().trim();
        console.log('recordID: ', recordID);
        const userKeyRegExp = /[a-zA-Z0-9]{15}|[a-zA-Z0-9]{18}/;
        const valid = userKeyRegExp.test(recordID);
        let selected = $('.top_select').val();
        if (valid) {
            console.log('$selected: ', selected);
            if (selected == 'WEBCART') {
                showSpinner();
                var myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer " + sessionId);

                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };
                let cartId = '\'' + recordID + '\'';
                fetch(baseUrl + '/services/data/v59.0/query/?q=SELECT+OwnerId,Owner.UserName,Owner.Name+FROM+WebCart+WHERE+Id+=+' + cartId, requestOptions).then(response => response.json()).then(result => {
                    console.log('$API: ', result);
                    if (result.records.length == 0) {
                        hideSpinner();
                        $('.snackbar').text('Cart user not found.');
                        showToast();
                    } else {
                        // $('.top_userinfo_inp').val(result.records[0]?.Owner.Name);
                        document.title = 'LOGS - ' + result.records[0]?.Owner.Username;
                        $('.top_userinfo_inp').val(result.records[0]?.OwnerId);
                        hideSpinner();
                    }
                }).catch(error => {
                    console.log('$getObjects: error', error);
                });
            }
        }
        if (selected == 'USERNAME' && recordID.includes('@')) {
            showSpinner();
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + sessionId);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            let userName = '\'' + recordID + '\'';
            fetch(baseUrl + '/services/data/v59.0/query/?q=SELECT+Id,Name,UserName+FROM+User+WHERE+UserName+=+' + userName, requestOptions).then(response => response.json()).then(result => {
                console.log('$API: ', result);
                if (result.records.length == 0) {
                    hideSpinner();
                    $('.snackbar').text('Cart user not found.');
                    showToast();
                } else {
                    document.title = result.records[0]?.Username + ' - LOGS';
                    $('.top_userinfo_inp').val(result.records[0]?.Id);
                    hideSpinner();
                }
            }).catch(error => {
                console.log('$getObjects: error', error);
            });
        } else if (selected == 'NAME') {
            showSpinner();
            let query = `SELECT Id, Name, Email, Username, IsActive, Profile.Name FROM User WHERE Name LIKE '%${recordID}%' LIMIT 100`;
            if(recordID == 's.a'){
                query = `SELECT Id, Name, Email, Username, IsActive, Profile.Name FROM User WHERE Profile.Name = 'System Administrator'`;
            }else if(recordID == 's.a.a'){
                query = `SELECT Id, Name, Email, Username, IsActive, Profile.Name FROM User WHERE Profile.Name = 'System Administrator' And IsActive = True`;
            }else if(recordID == 's.a.i'){
                query = `SELECT Id, Name, Email, Username, IsActive, Profile.Name FROM User WHERE Profile.Name = 'System Administrator' And IsActive = False`;
            }else if(recordID == 'i.u'){
                query = `SELECT Id, Name, Email, Username, IsActive, Profile.Name FROM User WHERE Email LIKE '%.invalid%'`;
            }else if(recordID == 'i.u.a'){
                query = `SELECT Id, Name, Email, Username, IsActive, Profile.Name FROM User WHERE Profile.Name = 'System Administrator' And Email LIKE '%.invalid%'`;
            }
            console.log('Checkpoint CALLED1');
            await fetchRecordsXMLSOAP(query);
            console.log('Checkpoint userRecords: ', userRecords);
            if(!userRecords?.length){
                $('.snackbar').text('No Users including provided name.');
                showToast();
            }else{
                let tBody = '';
                userRecords.forEach(val => {
                    tBody += `<tr class="tbody_1_tr tbody_1_tr_1 tr_${val.Id}">
                        <td class="td_1 td_1_1 ${val.Id} th_1_Id" data-id="${val.Id}">
                            ${val.Id}
                        </td>
                        <td class="td_1 td_1_2 th_1_data">
                            ${val.Name}
                        </td>
                        <td class="td_1 td_1_3 th_1_data">
                            ${val.Username}
                        </td>
                        <td class="td_1 td_1_4 th_1_data">
                            ${val.ProfileName}
                        </td>
                        <td class="td_1 td_1_5 th_1_data">
                            ${val.Email}
                        </td>
                        <td class="td_1 td_1_6 th_1_data">
                            ${val.IsActive}
                        </td>
                    </tr>`
                });
                $('.d_outer').addClass('blur');
                $('.small_popup_1').removeClass('hide');
                $('.tbody_1').html(tBody);
                if(recordID == 's.a' || recordID == 's.a.a' || recordID == 's.a.i'){
                    document.title = userRecords.length + ' - System Administrators';
                }
            }
            hideSpinner();
        }
    }
});

$(document).on('click', '.th_1_Id', function (e){
   let userId = $(this).attr('data-id');
   console.log('$userId: ',userId);
   let user = userRecords.find(usr => {
       return usr.Id == userId;
   });
   console.log('$user: ',user);
   if(user){
        $('.d_outer').removeClass('blur');
        $('.small_popup_1').addClass('hide');
        document.title = 'LOGS - ' + user.Username;
        $('.top_userinfo_inp').val(userId);
        copyToCLipboard(userId, false);
   }
});

$(document).on('click', '.th_1_data', function (e){
   let text = $(this).text().trim();
   console.log('$text: ',text);
   copyToCLipboard(text, true);
});
function copyToCLipboard(value, showSnackbar) {
    let text = value;
    navigator.clipboard.writeText(text).then(function () {
        if(showSnackbar){
            $('.snackbar').text(text);
            showToast();
        }
    }, function (err) {
        console.error('error copying');
    });
}

$(document).on('click', '.close-icon_1', function (e){
   $('.d_outer').removeClass('blur');
   $('.small_popup_1').addClass('hide');
});

async function fetchRecordsXMLSOAP(query) {
    const endpoint = baseUrl + "/services/Soap/c/59.0";
    const soapRequest =
        '<?xml version="1.0" encoding="utf-8" ?>' +
        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:enterprise.soap.sforce.com">' +
        '  <soapenv:Header>' +
        '    <urn:SessionHeader>' +
        '      <urn:sessionId>' + sessionId + '</urn:sessionId>' +
        '    </urn:SessionHeader>' +
        '  </soapenv:Header>' +
        '  <soapenv:Body>' +
        '    <urn:query>' +
        '      <urn:queryString>' + query + '</urn:queryString>' +
        '    </urn:query>' +
        '  </soapenv:Body>' +
        '</soapenv:Envelope>';

    await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "text/xml",
            "SOAPAction": "urn:enterprise.soap.sforce.com/query",
        },
        body: soapRequest,
    }).then(async (response) => await response.text()).then((recs) => {
        console.log('$query-FINAL: ', query);
        let xmlResponse = recs;
        console.log('$xmlResponse: ', xmlResponse);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlResponse, "text/xml");
        let exceptionCode = xmlDoc.querySelector('exceptionCode');
        let exceptionMessage = xmlDoc.querySelector('exceptionMessage');
        console.log('$exceptionCode: ', exceptionCode);
        console.log('$exceptionMessage: ', exceptionMessage);
        if (exceptionCode) {
            console.log('$exceptionCode: ', exceptionCode.textContent);
            console.log('$exceptionMessage: ', exceptionMessage.textContent);
            $('.small_popup_2').removeClass('hide');
            $('.outer').addClass('blur-2');
            $('.errcode').text(exceptionCode.textContent);
            $('.small_popup_2_input_box').text(exceptionMessage.textContent);
            hideSpinner();
        } else {
            prepareRecordsARRAY(xmlResponse);
        }
    }).catch((error) => {
        console.error("Error:", error);
    });

}
function prepareRecordsARRAY(xmlResponse) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlResponse, "text/xml");
    records = [];
    let recordNodes = xmlDoc.querySelectorAll('records');
    recordNodes.forEach(recordNode => {
        let Id = recordNode.querySelector('Id').textContent;
        let Name = recordNode.querySelector('Name').textContent;
        let Username = recordNode.querySelector('Username').textContent;
        let Email = recordNode.querySelector('Email').textContent;
        let IsActive = recordNode.querySelector('IsActive').textContent;
        let Profile = recordNode.querySelector('Profile');
        let ProfileName = Profile.querySelector('Name').textContent;
        let rec = {
            Id: Id,
            Name: Name,
            Username: Username,
            Email: Email,
            IsActive: IsActive,
            ProfileName: ProfileName
        };
        records.push(rec);
    });
    userRecords = [...records];
}

function getObjects() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + sessionId);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(baseUrl + '/services/data/v59.0/sobjects/', requestOptions).then(response => response.text()).then(result => {
        console.log('$API: ', result)
        let res = JSON.parse(result);
        console.log('$res: ', res);
    }).catch(error => {
        console.log('$getObjects: error', error)
    });
}
$(document).on('keydown', '.top_debugsearch_inp', async function (e) {
    let charCode = (e.which) ? e.which : e.keyCode;
    if (charCode == 13) {
        if (logsIdArray) {
            $(".spinner-div").show();
            let searchedText = $(this).val().trim();
            console.log('searchedText: ', searchedText);
            console.log('$logsIdArray: ', logsIdArray);

            let foundRecords = [];

            const promises = logsIdArray.map(async (logId) => {
                let logData = await getLogData(logId);
                console.log('$logData: ', logData);

                if (logData.toLowerCase().includes(searchedText.toLowerCase())) {
                    foundRecords.push(logId);
                }
            });

            await Promise.all(promises);
            $('.td_id').css('color', 'black');
            console.log('$foundRecords: ', foundRecords);
            foundRecords.forEach(async recId => {
                console.log('recId: ', recId);
                $('.' + recId).css('color', 'red');
            });
            if (foundRecords.length) {
                let logData = await getLogData(foundRecords[0]);
                console.log('$logData: ', logData);
                $('.d_down_textarea').text(logData);
            }
            $(".spinner-div").hide();
        } else {
            $('.snackbar').text('Fetch logs first.');
            showToast();
        }
    }
});
async function getLogData(logId) {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + sessionId);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(baseUrl + '/services/data/v44.0/tooling/sobjects/ApexLog/' + logId + '/Body', requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.status);
        }
        const result = await response.text();
        return result;
    } catch (error) {
        console.log('$getLogData: error', error);
        throw error;
    } finally {
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

// Bottom button Starts
$(document).on('click', '.plus-icon', function (e){
    var icon = $(this);
    if (icon.hasClass('rotate_45')) {
        icon.removeClass('rotate_45').addClass('rotate_0');
        $('.ul_dv').hide(100);
        icon.css('color','#cacaca');
    } else {
        icon.removeClass('rotate_0').addClass('rotate_45');
        $('.ul_dv').show(100);
        icon.css('color','cadetblue');
    }
});
$(document).on('click', '.page_name', function (e){
   let page = $(this).data('page');
   console.log('$page: ',page);
   let uri = `baseUrl=${baseUrl}&sessionId=${sessionId}`;
   window.location.href = `https://imtiyaz-khan-tech.github.io/tech/salesforce-quick-access/${page}?${uri}`
});
// Bottom button Finish