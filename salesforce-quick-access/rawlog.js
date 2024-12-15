let baseUrl;
let sessionId;
let logRecodId;
let originalLog;
$(document).ready(function () {
    let url = new URL(window.location.href);
    console.log('$url: ', url);
    baseUrl = url.searchParams.get('baseUrl');
    console.log('$baseUrl: ', baseUrl);
    sessionId = url.searchParams.get('sessionId');
    console.log('$sessionId: ', sessionId);
    logRecodId = url.searchParams.get('logRecodId');
    console.log('$logRecodId: ', logRecodId);
    document.title = 'Raw Log - ' + logRecodId;
    fetchLogBody(logRecodId);
});

function fetchLogBody(logId) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + sessionId);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    showSpinner();
    fetch(baseUrl + '/services/data/v60.0/tooling/sobjects/ApexLog/' + logId + '/Body', requestOptions).then(response => response.text()).then(data => {
        originalLog = data;
        $('.txt_area').val(data);
        hideSpinner();
    }).catch(error => {
        console.log('$API: error', error);
        hideSpinner();
    });
}

$(document).on('contextmenu', '.filters', function (e){
    e.preventDefault();
    $('.inp_1').val('');
    $('.inp_2').val('');
    $('.inp_3').val('');
    $('.inp_4').val('');
    handleFilterClick();
    $(this).val('--None--');
});

$(document).on('change', '.filters', function (e){
   let filter = $(this).val();
   console.log('$filter: ',filter);
   if(filter == '--Clear--'){
        $('.inp_1').val('');
        $('.inp_2').val('');
        $('.inp_3').val('');
        $('.inp_4').val('');
    }else if(filter == '--None--'){
        $('.inp_1').val('');
        $('.inp_2').val('');
        $('.inp_3').val('');
        $('.inp_4').val('');
        handleFilterClick();
   }else{
        if($('.inp_1').val()){
            if($('.inp_2').val()){
                if($('.inp_3').val()){
                    $('.inp_4').val(filter)
                }else{
                    $('.inp_3').val(filter)
                }
            }else{
                $('.inp_2').val(filter)
            }
        }else{
            $('.inp_1').val(filter)
        }
        handleFilterClick();
   }
});

$(document).on('click', '.btn_filter', function (e){
    if(!$('.inp_1').val() && !$('.inp_2').val() && !$('.inp_3').val() && !$('.inp_4').val()){
        navigator.clipboard.readText().then(text => {
            originalLog = text;
            $('.txt_area').val(text);
        }).catch(err => {
           console.error('Failed to read clipboard contents: ', err);
        });
    }else{
        handleFilterClick();
    }
});

$(document).on('mouseenter', '.btn_filter', function (e){
    if(!$('.inp_1').val() && !$('.inp_2').val() && !$('.inp_3').val() && !$('.inp_4').val()){
        $(this).text('Paste');
    }else{
        $(this).text('Filter');
    }
});
$(document).on('mouseleave', '.btn_filter', function (e){
    $(this).text('Filter');
});


async function handleFilterClick(){
    let inp_1_value = $('.inp_1').val();
    console.log('$inp_1_value: ',inp_1_value);
    let inp_2_value = $('.inp_2').val();
    console.log('$inp_2_value: ',inp_2_value);
    let inp_3_value = $('.inp_3').val();
    console.log('$inp_3_value: ',inp_3_value);
    let inp_4_value = $('.inp_4').val();
    console.log('$inp_4_value: ',inp_4_value);

    let isFlowBegin = inp_1_value == 'FLOW_CREATE_INTERVIEW_BEGIN' || inp_2_value == 'FLOW_CREATE_INTERVIEW_BEGIN' || inp_3_value == 'FLOW_CREATE_INTERVIEW_BEGIN' || inp_4_value == 'FLOW_CREATE_INTERVIEW_BEGIN';
    
    let map = new Map();
    if(isFlowBegin){
        let response = await getFlows();
        let flows = response?.data?.records;
        let i = 0;
        while(i < flows.length){
            let item = flows[i];
            map.set(item.Id.substring(0, 15), item.MasterLabel);
            i++;
        }
    }

    if(!inp_1_value && !inp_2_value && !inp_3_value && !inp_4_value){
        $('.txt_area').val(originalLog);
    }else{
        let logBody = originalLog;
        logBody = logBody.split('\n');
    
        let i = 0;
        let filteredRows = [];
        while(i < logBody.length){
            let item = logBody[i];
            let isTrue = false;

            if(inp_1_value){
                if(item.includes(inp_1_value)){
                    isTrue = true;
                }
            }
            if(inp_2_value){
                if(item.includes(inp_2_value)){
                    isTrue = true;
                }
            }
            if(inp_3_value){
                if(item.includes(inp_3_value)){
                    isTrue = true;
                }
            }
            if(inp_4_value){
                if(item.includes(inp_4_value)){
                    isTrue = true;
                }
            }

            if(isFlowBegin && item.includes('FLOW_CREATE_INTERVIEW_BEGIN')){
                item = item.trim().split('|').map( i => i.trim()).filter(Boolean);
                item.push(map.get(item[item.length - 1]));
                item = item.join('|');
            }

            if(isTrue){
                filteredRows.push( ( i + 1 ) + ': ' + item);
            }
            i++;
        }
        document.title = 'Raw Log ('+filteredRows.length+') - ' + logRecodId;
        $('.txt_area').val(filteredRows.join('\n'));

    }

}

async function getFlows() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + sessionId);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    try{
        let query = `SELECT+Id,MasterLabel+FROM+Flow+Where+Status+=+'Active'`;
        const endpoint = `${baseUrl}/services/data/v59.0/tooling/query?q=${query}`;
        const response = await fetch(endpoint, requestOptions);
        if(!response.ok) {
            return { isError: true, name: response.status, message: response.statusText, stack: response.type };
        }
        const result = await response.json();
        return { isError: false, data: result};
    }catch(error){
       return { isError: true, name: error.name, message: error.message, stack: error.stack };
    }
}

$(document).on('change', '.txt_area', function (e){
   let changed = $(this).val();
   originalLog = changed;
});


function showSpinner() {
    $(".spinner-div").show();
}

function hideSpinner() {
    $(".spinner-div").hide();
    $('.refresh_btn_icon').removeClass('fast-spin');
}