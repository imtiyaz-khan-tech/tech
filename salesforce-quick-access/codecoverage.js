let baseUrl;
let testCls;
let sessionId;
$(document).ready(function() {
    let url = new URL(window.location.href);
    console.log('$url: ', url);
    baseUrl = url.searchParams.get('baseUrl');
    console.log('$baseUrl: ', baseUrl);
    sessionId = url.searchParams.get('sessionId');
    console.log('$sessionId: ', sessionId);

    apexClassName = url.searchParams.get('apexClassName');
    console.log('$apexClassName: ', apexClassName);
    testClassName = url.searchParams.get('testClassName');
    console.log('$testClassName: ', testClassName);

    Draggable.create('.small_popup_1');

    if(apexClassName && testClassName){
        testCls = testClassName;
        doStuffs(apexClassName, testClassName);
    }else{
        let tags = `
            <div class="input_divs">
                <div class="input_divs_c">
                    <div class="inp_d inp_d_1">
                        <input class="inp inp_1" placeholder="Apex CLass Name"/>
                    </div>
                    <div class="inp_d inp_d_2">
                        <input class="inp inp_2" placeholder="Test CLass Name"/>
                    </div>
                    <div class="inp_d inp_d_3">
                        <button class="inp btn inp_3">Load</button>
                    </div>
                </div>
            </div>
        `;
        $('.c').html(tags);
        // doPopulate();
    }
});


$(document).on('click', '.btn_run_test', function (e){
    runTests();
});

function runTests(){
    $('.btn_failed').addClass('hide');
    $('.btn_success').addClass('hide');
    $('.open_log_btn').addClass('hide');
    $('.loader_fixed_dv').removeClass('hide');
    // Draggable.create('.loader_fixed_dv');
    if($('.ld2_sub').hasClass('serverSuccess')){
        $('.ld2_sub').removeClass('serverSuccess');
        $('.ld2_sub').addClass('serverWaiting');
        $('.ld2_sub').text('Waiting for response from server...');
    }
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + sessionId);
    
    const raw = JSON.stringify({
        "tests": [
            {
            "className": testCls
            }
        ]
    });

    var requestOptions = {
        body: raw,
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    fetch(baseUrl + "/services/data/v61.0/tooling/runTestsSynchronous", requestOptions).then(response => response.json()).then(result => {
        console.log('$TestRun_Resuls: ', result);

        if(result.failures){
            let faildMethods = result.failures.filter(failure => {
                return failure.name == testCls;
            });
            console.log('$faildMethods: ',faildMethods);
            if(faildMethods.length > 0){
                $('.small_popup_1').removeClass('hide');
                $('.btn_failed').removeClass('hide');
                let rows = '';
                faildMethods.forEach(failure => {
                    rows += `
                        <tr class="tbody_1_tr tbody_1_tr_1">
                            <td class="td_1 td_1_2 th_1_data">
                                ${failure.methodName}
                            </td>
                            <td class="td_1 td_1_3 th_1_data">
                                ${failure.message}
                            </td>
                            <td class="td_1 td_1_4 th_1_data">
                                ${failure.stackTrace}
                            </td>
                        </tr>
                    `;
                });
                $('.tbody_1').html(rows);
            }else{
                if($('.btn_success').hasClass('hide')){
                    $('.btn_success').removeClass('hide');
                }
            }
        }
        $('.ld2_sub').removeClass('serverWaiting');
        $('.ld2_sub').text('Success');
        $('.ld2_sub').addClass('serverSuccess');
        getLogRecordId();
        doStuffs(apexClassName, testClassName);
    }).catch(error => {
        console.log('$API: error', error);
    });
}

$(document).on('click', '.btn_failed', function (e){
    $('.small_popup_1').removeClass('hide');
});

function doPopulate(){
    if(baseUrl == 'https://phillips66enterprise--wipro.sandbox.my.salesforce.com'){
        $('.inp_1').val('p66_FinancialScheduleTriggerHelper');
        $('.inp_2').val('p66_FinancialScheduleTriggerHelper_Test');
    }else if(baseUrl == 'https://learningtrail-dev-ed.develop.my.salesforce.com'){
        $('.inp_1').val('SampleApex');
        $('.inp_2').val('SampleApex_Test');
    }
}

$(document).on('keydown', '.inp_1', function (event){
   let charCode = (event.which) ? event.which : event.keyCode;
   if(charCode == 13) {
      $('.inp_2').focus();
   }
});

$(document).on('keydown', '.inp_2', function (event){
    let charCode = (event.which) ? event.which : event.keyCode;
    if(charCode == 13) {
       let inp_1 = $('.inp_1').val();
       let inp_2 = $('.inp_2').val();
       if(inp_1 && inp_2){
            reloadUrl(inp_1, inp_2);
       }
    }
});

$(document).on('click', '.btn', function (e){
    let inp_1 = $('.inp_1').val();
    let inp_2 = $('.inp_2').val();
    if(inp_1 && inp_2){
         reloadUrl(inp_1, inp_2);
    }
});

function reloadUrl(inp1, inp2){
    let currentUrl = window.location.href;
    console.log('$currentUrl: ', currentUrl);
    currentUrl += `&apexClassName=${inp1}&testClassName=${inp2}`;
    window.location.href = currentUrl;
}

function doStuffs(apexClassName, testClassName){
    // apexClassName = 'p66_RebateProgramPayoutPeroid_Handler';
    // testClassName = 'p66_RebatePrgmPayoutPeroid_HandlerTest';
    // apexClassName = 'SampleApex';
    // testClassName = 'SampleApex_Test';

    // Test Starts
    /* let endpoint = `${baseUrl}/services/data/v59.0/tooling/sobjects/ApexClass/01pJ2000000gQfUIAU`;

    fetch(endpoint, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + sessionId }
    }).then(response => response.json()).then(data => {
        console.log(data);
        lines = data.Body.split('\n');
        i = 0;
        while(i < lines.length){
            lines[i] = modifyLine(lines[i]);
            lines[i] = `<span style="color:gray;background-color:rgb(247, 247, 247);border-right: 1px solid rgb(221, 221, 221);">${i + 1}${getSpaces(i + 1)}</span><span style="background-color:white">${lines[i]}</span>`;
            i++;
        }
        let finalLines = lines.join('<br>');
        $('.pre_code').html(finalLines);
    }).catch(error => {
        console.error('Error:', error);
    }); */

    // Test Ends

    let endpoint = `${baseUrl}/services/data/v61.0/tooling/query/?q=SELECT+Id,ApexTestClassId,ApexTestClass.Name,TestMethodName,ApexClassOrTriggerId,ApexClassOrTrigger.Name,NumLinesCovered,NumLinesUncovered,Coverage+FROM+ApexCodeCoverage+Where+ApexTestClass.Name+=+'${testClassName}'+And+ApexClassOrTrigger.Name+='${apexClassName}'`;
    fetch(endpoint, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + sessionId }
    }).then(response => response.json()).then(coverageData => {
        console.log(coverageData);
        let apexClassOrTriggerId;
        if(coverageData.records){
            apexClassOrTriggerId = coverageData.records[0]?.ApexClassOrTriggerId;
            let numLinesCovered_Array = [];
            let numLinesUncovered_Array = [];
            coverageData.records.forEach( rec => {
                numLinesCovered_Array.push(...rec.Coverage.coveredLines);
                numLinesUncovered_Array.push(...rec.Coverage.uncoveredLines);
            });
            numLinesCovered_Array = Array.from(new Set(numLinesCovered_Array.sort((a,b) => a-b)));
            numLinesUncovered_Array = Array.from(new Set(numLinesUncovered_Array.sort((a,b) => a-b)));
            console.log('$numLinesCovered_Array: ', numLinesCovered_Array);
            console.log('$numLinesUncovered_Array: ', numLinesUncovered_Array);

            if(numLinesCovered_Array.length == 0 && numLinesUncovered_Array.length == 0){
                $('.btn_code_coverage').text('Run Test -  Check Coverage Here');
            }

            numLinesUncovered_Array = numLinesUncovered_Array.filter(element => !numLinesCovered_Array.includes(element));
            console.log('$numLinesCovered_Array: ', numLinesCovered_Array);
            console.log('$numLinesUncovered_Array: ', numLinesUncovered_Array);
        
            let coverage = parseInt((numLinesCovered_Array.length / (numLinesCovered_Array.length + numLinesUncovered_Array.length) * 100)) + '%';
            console.log('$coverage: ', coverage);

            if(apexClassOrTriggerId){
                console.log('$apexClassOrTriggerId: ',apexClassOrTriggerId);
                endpoint = `${baseUrl}/services/data/v59.0/tooling/sobjects/ApexClass/${apexClassOrTriggerId}`;

                fetch(endpoint, {
                    method: 'GET',
                    headers: { 'Authorization': 'Bearer ' + sessionId }
                }).then(response => response.json()).then(data => {
                    console.log(data);
                    lines = data.Body.split('\n');
                    i = 0;
                    while(i < lines.length){
                        if(lines[i].trim().startsWith(`//`) || lines[i].trim().startsWith(`/*`) || lines[i].trim().startsWith(`/ *`) || lines[i].trim().startsWith(`*`)){
                            lines[i] = `<span class="noselect" style="color:gray;background-color:rgb(247, 247, 247);border-right: 1px solid rgb(221, 221, 221);">${i + 1}${getSpaces(i + 1)}</span><span style="color:rgb(170, 85, 0);">${lines[i]}</span>`;
                        }else{
                            lines[i] = modifyLine(lines[i]);
                            if(numLinesCovered_Array.includes(i + 1)){
                                lines[i] = `<span class="noselect" style="color:gray;background-color:rgb(247, 247, 247);border-right: 1px solid rgb(221, 221, 221);">${i + 1}${getSpaces(i + 1)}</span><span style="background-color:rgb(172, 193, 254);">${lines[i]}</span>`;
                            }else if(numLinesUncovered_Array.includes(i + 1)){
                                lines[i] = `<span class="noselect" style="color:gray;background-color:rgb(247, 247, 247);border-right: 1px solid rgb(221, 221, 221);">${i + 1}${getSpaces(i + 1)}</span><span style="background-color:rgb(253, 73, 73);">${lines[i]}</span>`;
                            }else{
                                lines[i] = `<span class="noselect" style="color:gray;background-color:rgb(247, 247, 247);border-right: 1px solid rgb(221, 221, 221);">${i + 1}${getSpaces(i + 1)}</span><span style="background-color:white">${lines[i]}</span>`;
                            }
                        }
                        
                        i++;
                    }
                    let finalLines = lines.join('<br>');
                    finalLines = finalLines.replace(/\/\*[\s\S]*?\*\//g, `<span style="color:rgb(170, 85, 0) !important;">$&</span>`);
                    // finalLines = finalLines.replace(/\/\*[\s\S]*?\*\//g, (match) => {
                    //     const cleanedText = match.replace(/<\/?span[^>]*>/g, '');
                    //     return `<span style="color:rgb(170, 85, 0) !important;">${cleanedText}</span>`;
                    // });
                    $('.pre_code').html(finalLines);
                    // document.title = 'Code Coverage - ' + coverage;
                    $('.btn_code_coverage').text(`Code Coverage: ${coverage}`);
                    $('.loader_fixed_dv').addClass('hide');
                }).catch(error => {
                    console.error('Error:', error);
                });
                
            }
        }

    }).catch(err => {
        console.error('err:', err);
    });
}
let logRecodId;
function getLogRecordId() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + sessionId);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(baseUrl + `/services/data/v59.0/tooling/query/?q=SELECT+Id,Operation+FROM+ApexLog+Where+Operation+=+'/services/data/v61.0/tooling/runTestsSynchronous'+Order+By+LastModifiedDate+DESC+LIMIT+1`, requestOptions).then(response => response.json()).then(result => {
        console.log('$ApexLog: ', result);
        if(result?.records){
            logRecodId = result.records[0].Id;
            console.log('$logRecodId: ',logRecodId);
            $('.open_log_btn').removeClass('hide');
        }
    }).catch(error => {
        console.error('Error:', error);
    });

}

$(document).on('click', '.open_log_btn', function (e){
    openRecordDetail();
});

function openRecordDetail(){
    if (logRecodId) {
        let recordID = 'logRecodId=' + logRecodId + '&';
        openMaximized('recentlogs.html?' + recordID + 'baseUrl=' + baseUrl + '&sessionId=' + sessionId);
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

function modifyLine(line){
    line = line.replace(/public /gi, replacePurple('public '));
    line = line.replace(/private /gi, replacePurple('private '));
    line = line.replace(/class /gi, replacePurple('class '));
    line = line.replace(/static /gi, replacePurple('static '));
    line = line.replace(/ static /gi, replacePurple(' static '));
    line = line.replace(/final /gi, replacePurple('final '));
    line = line.replace(/ List/gi, replacePurple(' List'));
    line = line.replace(/Set/gi, replacePurple('Set'));
    line = line.replace(/ Map/gi, replacePurple(' Map'));
    line = line.replace(/System\./gi, replacePurple('System.'));
    line = line.replace(/(?<=\s|})else if(?=\s|\()/g, `<span style="color:rgb(119, 0, 136);">else if</span>`);
    line = line.replace(/(?<=\s|})else(?=\s|\{)/g, `<span style="color:rgb(119, 0, 136);">else</span>`);
    line = line.replace(/\bif(?=\s|\()/g, `<span style="color:rgb(119, 0, 136);">if</span>`);
    line = line.replace(/\bfor(?=\s|\()/g, `<span style="color:rgb(119, 0, 136);">for</span>`);
    line = line.replace(/\bwhile(?=\s|\()/g, `<span style="color:rgb(119, 0, 136);">while</span>`);

    line = line.replace(/(?<=string\s)(\w+)(?=\s=)/i, `<span style="color:#22b;">$1</span>`);
    line = line.replace(/(?<=integer\s)(\w+)(?=\s=)/i, `<span style="color:#22b;">$1</span>`);
    line = line.replace(/(?<=double\s)(\w+)(?=\s=)/i, `<span style="color:#22b;">$1</span>`);
    line = line.replace(/(?<=decimal\s)(\w+)(?=\s=)/i, `<span style="color:#22b;">$1</span>`);
    line = line.replace(/(?<=boolean\s)(\w+)(?=\s=)/i, `<span style="color:#22b;">$1</span>`);
    line = line.replace(/(?<=\=\s*)\d+(\.\d+)?(?=\s*;)/, `<span style="color:rgb(17, 102, 68);">$&</span>`);

    line = line.replace(/void /gi, replaceLightBlue('void '));
    line = line.replace(/integer /gi, replaceLightBlue('Integer '));
    line = line.replace(/string /gi, replaceLightBlue('String '));
    line = line.replace(/double /gi, replaceLightBlue('Double '));
    line = line.replace(/decimal /gi, replaceLightBlue('Decimal '));
    line = line.replace(/@future/gi, replaceGray('@future'));
    line = line.replace(/@AuraEnabled/gi, replaceGray('@AuraEnabled'));
    line = line.replace(/'([^']*)'/g, `<span style="color:rgb(170, 17, 17);">'$1'</span>`);
    line = line.replace(/(\/\/.*)/g, `<span style="color:rgb(170, 85, 0);">$1</span>`); // Replace Text After //
    return line;
}

function replacePurple(replacement){
    return `<span style="color:rgb(119, 0, 136);">${replacement}</span>`;
}
function replaceLightBlue(replacement){
    return `<span style="color:rgb(0, 0, 255);">${replacement}</span>`;
}
function replaceGray(replacement){
    return `<span style="color:rgb(85, 85, 85);">${replacement}</span>`;
}

function getSpaces(num){
    if(num < 10){
        return '&nbsp;&nbsp;&nbsp;&nbsp;';
    }else if(num > 9 && num < 100){
        return '&nbsp;&nbsp;&nbsp;';
    }else if(num > 99 && num < 1000){
        return '&nbsp;&nbsp;';
    }else{
        return '&nbsp;';
    }
}

$(document).on('click', '.close-icon_1', function (e){
    // $('.d_outer').removeClass('blur');
    $('.small_popup_1').addClass('hide');
});