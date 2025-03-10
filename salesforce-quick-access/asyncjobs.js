let conn;
let baseUrl;
let logData;
let sessionId;
let recordsAll;
let recordsCurrent;
let intervalVariable;
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
    //Fetch Records
    fetchRecords();
    startTimerCounter();
}
function startTimerCounter(){
    setInterval( () => {
        $('.timer').text(getConvertedTime());
    }, 1000);
}

$(document).on('click', '.auto_refresh', function (e){
    let icon = $(this).find('.auto_refresh_icon');
    if(icon.hasClass('fast-spin')){
        icon.removeClass('fast-spin');
        clearInterval(intervalVariable);
    }else{
        icon.addClass('fast-spin');
        intervalVariable = setInterval( () => {
            if(isFetched)
                fetchRecords();
        }, 1000);
    }
});

/* function getTotalJobsCount(title){
    let q = 'SELECT COUNT() FROM AsyncApexJob';
    conn.query(q).then(res => {
        console.log('$total_jobs-: ',res);
        $('.total_jobs').text('Total Jobs [ '+res.totalSize+' ]');
    }).catch( error => {
        console.error('$total_jobs_error: ',error);
    });
} */

async function getConnection(baseUrl, sessionId){
    let conn = new jsforce.Connection({
       instanceUrl : baseUrl,
       serverUrl : baseUrl,
       sessionId : sessionId
   });
   return conn;
 }

 $(document).on('click', '.refresh_btn', function (e){
    // window.location.reload();
    $('.refresh_btn_icon').addClass('fast-spin');
    showSpinner();
    fetchRecords();
});
let isFetched = false;
async function fetchRecords() {
    let fields_array = [
        'Id', 'CreatedDate', 'CreatedBy.Name', 'JobType', 'ApexClass.Name', 'Status', 'JobItemsProcessed', 'TotalJobItems', 
        'NumberOfErrors', 'CompletedDate', 'MethodName'
    ];
    //Where Status IN ('Queued','Processing','Preparing','Holding')
    let q = `SELECT ${fields_array.join(',')} FROM AsyncApexJob Where (ApexClass.Name = 'p66_ContractAmendmentBatch' OR ((JobType = 'Future' OR JobType = 'Queueable') And ApexClass.Name != 'ICM_ServiceBusAPICallClass')) And JobType != 'BatchApexWorker' And CreatedDate = Today Order By CreatedDate DESC`; q += ' LIMIT 6';
    isFetched = false;
    let asyncApexJobs = await conn.query(q);
    console.log('$asyncApexJobs: ',asyncApexJobs);
    recordsAll = [...asyncApexJobs.records];
    recordsCurrent = [...asyncApexJobs.records];

    // let p66_Async_Job_Details = await conn.query(`SELECT Id, Name, p66_Async_Job_Name__c, p66_Record_ID__c, p66_Object_Name__c, p66_Status__c, p66_Error_Message__c, CreatedDate, LastModifiedDate, CreatedBy.Name FROM p66_Async_Job_Details__c Where CreatedBy.Name = 'Salesforce COE' OR CreatedBy.Name = 'Imtiyaj Khan' Order By CreatedDate DESC LIMIT 7`);
    let p66_Async_Job_Details = await conn.query(`SELECT Id, Name, p66_Async_Job_Name__c, p66_Record_ID__c, p66_Object_Name__c, p66_Status__c, p66_Error_Message__c, CreatedDate, LastModifiedDate, CreatedBy.Name FROM p66_Async_Job_Details__c  Order By CreatedDate DESC LIMIT 10`);
    console.log('$p66_Async_Job_Details: ',p66_Async_Job_Details);
    let asyncJobs = [];
    p66_Async_Job_Details.records.forEach(rec => {
        let adj = {...rec};
        delete adj.attributes;
        adj.JobType = adj.p66_Async_Job_Name__c;
        adj.ApexClass = {Name: adj.p66_Object_Name__c};
        adj.Status = adj.p66_Status__c;
        adj.MethodName = adj.p66_Record_ID__c;
        adj.CompletedDate = adj.LastModifiedDate;
        asyncJobs.push(adj);
    });
    recordsCurrent = [...asyncJobs, ...recordsCurrent];

    
    let date = new Date();
    date.setMinutes(date.getMinutes() - 15);
    let createdDate = date.toISOString();
   
    // let p66_Exceptions = await conn.query(`Select Id, p66_Record_ID__c, p66_Object__c, p66_Operation__c, p66_Exception_Details__c, p66_Class_Name__c, LastModifiedDate, CreatedDate, CreatedBy.Name From p66_Exception__c Where CreatedDate >= ${createdDate} Order By CreatedDate DESC LIMIT 1`);
    let p66_Exceptions = await conn.query(`Select Id, p66_Record_ID__c, p66_Object__c, p66_Operation__c, p66_Exception_Details__c, p66_Class_Name__c, LastModifiedDate, CreatedDate, CreatedBy.Name From p66_Exception__c Order By CreatedDate DESC LIMIT 1`);
    console.log('$p66_Exceptions: ',p66_Exceptions);
    if(p66_Exceptions.records.length){
        let errorRecord = {...p66_Exceptions.records[0]};
        delete errorRecord.attributes;
        errorRecord.JobType = 'Exception';
        errorRecord.Status = errorRecord.p66_Record_ID__c ?? '';
        errorRecord.CompletedDate = errorRecord.LastModifiedDate;
        errorRecord.MethodName = errorRecord.p66_Object__c ?? '';
        errorRecord.ApexClass = errorRecord.p66_Class_Name__c ?? '';
        recordsCurrent.unshift(errorRecord);
    }

    let cronTriggers = await conn.query(`SELECT Id, CreatedDate, CreatedBy.Name, CronJobDetail.Name, CronJobDetailId, State, StartTime, NextFireTime, EndTime FROM CronTrigger Where CronJobDetail.Name Like '%Create/Amend/Renew Contract Scheduler%' Order By NextFireTime ASC LIMIT 1`);
    console.log('$cronTriggers: ',cronTriggers);
    let scheduledRec = {...cronTriggers.records[0]};
    delete scheduledRec.attributes;
    scheduledRec.JobType = scheduledRec.CronJobDetail.Name;
    scheduledRec.Status = scheduledRec.State;
    scheduledRec.CompletedDate = scheduledRec.NextFireTime;
    scheduledRec.MethodName = 'BATCH';
    scheduledRec.ApexClass = {Name: 'p66_ContractAmendmentBatch'};
    recordsCurrent.unshift(scheduledRec);
    generateTable();
    isFetched = true;
    document.title = `Async Apex Jobs - ${getConvertedTime()}`;
    hideSpinner();
}
function getConvertedTime(){
    let date_time = Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata',hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(new Date());
    return date_time.toUpperCase();
}

function generateTable() {
    let trTags = '';
    recordsCurrent.forEach(rec => {

        let currentAndTotalJobItems = rec.Status == 'Completed' 
                                      && rec.TotalJobItems == 0 ? '' : `${rec.JobItemsProcessed} / ${rec.TotalJobItems}`;
        let isScheduledRec = false;
        if(rec.JobType.includes('Contract Scheduler')){
            currentAndTotalJobItems = 'Next Time Frame &rarr;';
            isScheduledRec = true;
        }

        let isAdjRec = false;
        if(rec?.ApexClass?.Name != 'p66_ContractAmendmentBatch'){
            currentAndTotalJobItems = rec.p66_Error_Message__c ?? '';
            isAdjRec = true;
        }

        let isException = false;
        let exceptionTitle = '';
        if(rec?.JobType == 'Exception'){
            exceptionTitle = rec.p66_Exception_Details__c ?? '';
            currentAndTotalJobItems = rec.p66_Operation__c ?? '';
            isException = true;
        }

        let tdTags = `<td class="td_1 record-id" title="${rec.Id}">${rec.Id}</td>`;
        tdTags += `<td class="td_1" title="${rec.JobType}">${rec.JobType}</td>`;
        tdTags += `<td class="td_1" title="${getConvertedDateTime(rec.CreatedDate)}">${getConvertedDateTime(rec.CreatedDate)}</td>`;
        tdTags += `<td class="td_1" title="${rec?.CreatedBy?.Name}">${rec?.CreatedBy?.Name}</td>`;
        tdTags += `<td class="td_1" title="${rec?.ApexClass?.Name ? rec?.ApexClass?.Name : ''}">${rec?.ApexClass?.Name ? rec?.ApexClass?.Name : ''}</td>`;
        tdTags += `<td class="td_1" title="${rec.MethodName ? rec.MethodName : ''}">${rec.MethodName ? rec.MethodName : ''}</td>`;
        tdTags += `<td class="td_1" title="${rec.Status}">${rec.Status}</td>`;
        tdTags += `<td class="td_1" title="${exceptionTitle ?? currentAndTotalJobItems}">${currentAndTotalJobItems}</td>`;
        tdTags += `<td class="td_1" title="${rec.CompletedDate ? getConvertedDateTime(rec.CompletedDate) : ''}">${rec.CompletedDate ? getConvertedDateTime(rec.CompletedDate) : ''}</td>`;
        // tdTags += `<td class="td_1"><i class="refresh_job fa fa-arrow-circle-o-up fa-2x" aria-hidden="true" data-recId="${rec.Id}"></i></td>`;
        // tdTags += `<td class="td_1"><i class="refresh_job fa fa-refresh" aria-hidden="true"></i></td>`;
        tdTags += `<td class="td_1">${rec.Status == 'Processing' ? `<i class="refresh_job fa fa-refresh" aria-hidden="true" data-recId="${rec.Id}"></i>` : ''}</td>`;
        
        let status_class = '';
        if(rec.Status == 'Processing'){
            status_class = 'processing_job';
        }else if(rec.Status == 'Failed'){
            status_class = 'failed_job';
        }else{
            status_class = 'completed_job';
        }

        if(isScheduledRec){
            status_class = 'scheduled_rec';
        }

        if(isAdjRec){
            status_class = 'adj_recs';
        }
        if(isAdjRec && rec.Status == 'Pending'){
            status_class = 'pending_adj';
        }

        if(isException){
            status_class = 'exception_class';
        }

        if(rec?.Status == 'Processing'){
            status_class = 'future_processing';
        }
        
        trTags += `<tr class="tr_${rec.Id} ${status_class}">${tdTags}</tr>`; //Processing
    });
    $('.tbody_1').html(trTags);
}
$(document).on('click', '.refresh_job', function (e){
    $(this).addClass('fast-spin');
    let recordID = $(this).attr('data-recId');
    console.log('$recordID: ',recordID);
    let q = `SELECT Id, Status, JobItemsProcessed, TotalJobItems FROM AsyncApexJob Where Id = '${recordID}' LIMIT 1`;
    conn.query(q).then(res => {
        console.log('$res: ',res);
        let job = res?.records[0];
        let recIndex = recordsCurrent.findIndex(element => {
            return element.Id == recordID;
        });
        console.log('$recIndex: ',recIndex);

        recordsCurrent[recIndex].Status = job.Status;
        recordsCurrent[recIndex].TotalJobItems = job.TotalJobItems;
        recordsCurrent[recIndex].JobItemsProcessed = job.JobItemsProcessed;
        console.log('$recordsCurrent[recIndex]: ',recordsCurrent[recIndex]);
        // $(this).removeClass('fast-spin');
        generateTable();
    }).catch( error => {
        console.error('$error: ',error);
    });
});

/* async function getSingleRecord(icon, recId){
    let jobs = await conn.sobject('AsyncApexJob').retrieve([recId]);
    console.log('$jobs: ',jobs);
    icon.removeClass('fast-spin');
} */
function generateJobOptions(){
    let jobsSet = new Set();
    recordsAll.forEach(rec => {
        jobsSet.add(rec.JobType);
    });
    let job_options = '<option value="All Jobs" selected>All Jobs</option>';
    jobsSet.forEach(val => {
        job_options += `<option value="${val}">${val}</option>`;
    });
    $('.job_options').html(job_options);
}

$(document).on('change', '.job_options', function (e){
    let val = $(this).val().trim();
    console.log('val: ',val);
    if(val == 'All Jobs'){
        recordsCurrent = [...recordsAll];
        generateTable();
    }else{
        recordsCurrent = recordsAll.filter(rec => {
            return rec.JobType == val;
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

$(document).on('click', '.td_1', function (e) {
    let copiedText = $(this).text().trim();
    copyToCLipboard(copiedText, true);
});

$(document).on('contextmenu', '.td_1', function (e){
    let text = $(this).text().trim();
    const userKeyRegExp = /[a-zA-Z0-9]{15}|[a-zA-Z0-9]{18}/;
    const valid = userKeyRegExp.test(text);
    if (valid && (text.length == 15 || text.length == 18) && !text.includes(' ')) {
        e.preventDefault();
        openRecordDetail(text);
    }
});

function openRecordDetail(recordID){
    const userKeyRegExp = /[a-zA-Z0-9]{15}|[a-zA-Z0-9]{18}/;
    const valid = userKeyRegExp.test(recordID);
    if (valid) {
        recordID = 'recordID=' + recordID + '&';
        let url = 'https://imtiyaz-khan-tech.github.io/tech/salesforce-quick-access/record.html?' + recordID + 'baseUrl=' + baseUrl + '&sessionId=' + sessionId
        window.open(url, '_blank');
    }
}
/* $(document).on('contextmenu', '.td_1', function (e){
    e.preventDefault();
    openRecordDetail($(this).text().trim());
}); */

/* $(document).on('contextmenu', '.record-id', function (e){
    let text = $(this).text().trim();
    e.preventDefault();
    openRecordDetail(text);
}); */

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
// Bottom button Starts
$(document).on('click', '.plus-icon', function (e){
    var icon = $(this);
    if (icon.hasClass('rotate_45')) {
        icon.removeClass('rotate_45').addClass('rotate_0');
        $('.ul_dv').hide(100);
    } else {
        icon.removeClass('rotate_0').addClass('rotate_45');
        $('.ul_dv').show(100);
    }
});
$(document).on('click', '.page_name', function (e){
   let page = $(this).data('page');
   console.log('$page: ',page);
   let uri = `baseUrl=${baseUrl}&sessionId=${sessionId}`;
   window.location.href = `https://imtiyaz-khan-tech.github.io/tech/salesforce-quick-access/${page}?${uri}`
});
// Bottom button Finish