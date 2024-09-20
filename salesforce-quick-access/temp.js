let conn;
let quoteRecordId;
let baseUrl = null;
let sessionId = null;
$(document).ready(function () {
    let url = new URL(window.location.href);
    baseUrl = url.searchParams.get('baseUrl');
    sessionId = url.searchParams.get('sessionId');
    quoteRecordId = url.searchParams.get('recordID');
    console.log('$quoteRecordId: ', quoteRecordId);
    initialize();
});

function initialize(){
    conn = new jsforce.Connection({
        instanceUrl : baseUrl,
        serverUrl : baseUrl,
        sessionId : sessionId,
        version: '60.0'
    });
    console.log('$conn: ',conn);
    $('.quoteIdInput').val(quoteRecordId);
}
$(document).on('click', '.TypeUpdate', function (e){
   let quoteIdInput = $('.quoteIdInput').val();
   console.log('$quoteIdInput: ',quoteIdInput);
   if(quoteIdInput){
        $('.TypeUpdate_icon').addClass('fast-spin');
        conn.sobject("SBQQ__Quote__c").update({
            Id: quoteIdInput,
            ContractType__c : 'ICMUSMarketingORSA'
        }).then((result) => {
            console.log('$result: ',result);
            console.log('$result_id: ',result.id);
            console.log('$result_success: ',result.success);
            $('.TypeUpdate_icon').removeClass('fast-spin');
            handleStatusUpdate();
        }).catch((err) => {
            console.log('$err: ',err.message);
            $('.TypeUpdate_icon').removeClass('fast-spin');
        });
   }
});
$(document).on('click', '.StatusUpdate', function (e){
    handleStatusUpdate();
});
function handleStatusUpdate(){
    let quoteIdInput = $('.quoteIdInput').val();
    console.log('$quoteIdInput: ',quoteIdInput);
    if(quoteIdInput){
         $('.StatusUpdate_icon').addClass('fast-spin');
         conn.sobject("SBQQ__Quote__c").update({
             Id: quoteIdInput,
             SBQQ__Status__c : 'ALM Request Approved'
         }).then((result) => {
             console.log('$StatusUpdate_result: ',result);
             console.log('$result_id: ',result.id);
             console.log('$result_success: ',result.success);
             $('.StatusUpdate_icon').removeClass('fast-spin');
             handleOrderedUpdate();
         }).catch((err) => {
             console.log('$err: ',err.message);
             $('.StatusUpdate_icon').removeClass('fast-spin');
         });
    }
}
$(document).on('click', '.OrderedUpdate', function (e){
    handleOrderedUpdate();
});
function handleOrderedUpdate(){
    let quoteIdInput = $('.quoteIdInput').val();
    console.log('$quoteIdInput: ',quoteIdInput);
    if(quoteIdInput){
         $('.OrderedUpdate_icon').addClass('fast-spin');
         conn.sobject("SBQQ__Quote__c").update({
             Id: quoteIdInput,
             SBQQ__Ordered__c : true
         }).then((result) => {
             console.log('$OrderUpdate_result: ',result);
             console.log('$result_id: ',result.id);
             console.log('$result_success: ',result.success);
             $('.OrderedUpdate_icon').removeClass('fast-spin');
             getOrderIdFromQuote(result.id);
         }).catch((err) => {
             console.log('$err: ',err.message);
             $('.OrderedUpdate_icon').removeClass('fast-spin');
         });
    }
}
function getOrderIdFromQuote(recordID){
    console.log('$recordID: ',recordID);
    let q = `SELECT Id, SBQQ__Status__c, p66_Order__c, SBQQ__Ordered__c, ContractType__c FROM SBQQ__Quote__c Where Id = '${recordID}' LIMIT 1`;
    conn.query(q).then(res => {
        console.log('$quote: ',res);
        let quote = res.records[0];
        console.log('$quote: ',quote);
        let p66_Order__c = quote.p66_Order__c;
        console.log('$p66_Order__c: ',p66_Order__c);
        $('.orderIdInput').val(p66_Order__c);
        handleOrderStatusUpdate(p66_Order__c);
    }).catch( error => {
        console.error('$error: ',error);
    });
}
$(document).on('click', '.OrderStatusUpdate', function (e){
    handleOrderStatusUpdate(null);
});
function handleOrderStatusUpdate(orderIdInput){
    orderIdInput = orderIdInput ? orderIdInput : $('.orderIdInput').val();
    console.log('$orderIdInput: ',orderIdInput);
    if(orderIdInput){
         $('.OrderStatusUpdate_icon').addClass('fast-spin');
         conn.sobject("Order").update({
             Id: orderIdInput,
             Status : 'Activated'
         }).then((result) => {
             console.log('$OrderStatusUpdate_result: ',result);
             console.log('$result_id: ',result.id);
             console.log('$result_success: ',result.success);
             $('.OrderStatusUpdate_icon').removeClass('fast-spin');
             handleContractedUpdate();
         }).catch((err) => {
             console.log('$err: ',err.message);
             $('.OrderStatusUpdate_icon').removeClass('fast-spin');
         });
    }
}
$(document).on('click', '.ContractedUpdate', function (e){
    handleContractedUpdate();
});
function handleContractedUpdate(){
    let orderIdInput = $('.orderIdInput').val();
    console.log('$orderIdInput: ',orderIdInput);
    if(orderIdInput){
         $('.ContractedUpdate_icon').addClass('fast-spin');
         conn.sobject("Order").update({
             Id: orderIdInput,
             SBQQ__Contracted__c : true
         }).then((result) => {
             console.log('$OrderContractedUpdate_result: ',result);
             console.log('$result_id: ',result.id);
             console.log('$result_success: ',result.success);
             getContractIdFromQuote();
         }).catch((err) => {
             console.log('$err: ',err.message);
             $('.ContractedUpdate_icon').removeClass('fast-spin');
         });
    }
}
let link;
let p66_Contract__c;
function getContractIdFromQuote(){
    let recordID = $('.quoteIdInput').val();
    console.log('$recordID: ',recordID);
    let q = `SELECT Id, SBQQ__Status__c, p66_Order__c, p66_Contract__c, SBQQ__Ordered__c, ContractType__c FROM SBQQ__Quote__c Where Id = '${recordID}' LIMIT 1`;
    conn.query(q).then(res => {
        console.log('$quote: ',res);
        let quote = res.records[0];
        console.log('$quote: ',quote);
        p66_Contract__c = quote.p66_Contract__c;
        console.log('$p66_Contract__c: ',p66_Contract__c);

        if(p66_Contract__c){
            
            if(baseUrl.includes('wipro.sandbox.my.salesforce.com')){
                link = 'https://phillips66enterprise--wipro.sandbox.lightning.force.com/lightning/r/Contract/'+p66_Contract__c+'/view';
            }else{
                link = 'https://phillips66enterprise--wiproici.sandbox.lightning.force.com/lightning/r/Contract/'+p66_Contract__c+'/view';
            }
            $('.contract_link').attr('href',link);
            $('.contract_link').text(link);
            $('.ContractedUpdate_icon').removeClass('fast-spin');
        }else{
            getContractIdFromQuote();
        }

    }).catch( error => {
        console.error('$error: ',error);
    });
}
$(document).on('click', '.copyId', function (e){

    navigator.clipboard.writeText(p66_Contract__c).then(function() {
        $('.copyId').text('Copied. Contract Id: ' + p66_Contract__c);
     }, function(err) {
        console.error('error copying');
     });
});
$(document).on('click', '.copyLink', function (e){

    navigator.clipboard.writeText(link).then(function() {
        $('.copyLink').text('Copied Contract Link');
     }, function(err) {
        console.error('error copying');
     });
});
$(document).on('click', '.QuoteRecordOpen', function (e){
   console.log('$quoteRecordId: ',quoteRecordId);
   const userKeyRegExp = /[a-zA-Z0-9]{15}|[a-zA-Z0-9]{18}/;
    const valid = userKeyRegExp.test(quoteRecordId);
    if (valid) {
        let uri = 'recordID=' + quoteRecordId + '&';
        openMaximized('record.html?' + uri + 'baseUrl=' + baseUrl + '&sessionId=' + sessionId);
    }
});
$(document).on('click', '.OrderRecordOpen', function (e){
    let orderRecId = $('.orderIdInput').val();
   console.log('$orderRecId: ',orderRecId);
   const userKeyRegExp = /[a-zA-Z0-9]{15}|[a-zA-Z0-9]{18}/;
    const valid = userKeyRegExp.test(orderRecId);
    if (valid) {
        let uri = 'recordID=' + orderRecId + '&';
        openMaximized('record.html?' + uri + 'baseUrl=' + baseUrl + '&sessionId=' + sessionId);
    }
});
$(document).on('click', '.ContractRecordOpen', function (e){
   console.log('$p66_Contract__c: ',p66_Contract__c);
   const userKeyRegExp = /[a-zA-Z0-9]{15}|[a-zA-Z0-9]{18}/;
    const valid = userKeyRegExp.test(p66_Contract__c);
    if (valid) {
        let uri = 'recordID=' + p66_Contract__c + '&';
        openMaximized('record.html?' + uri + 'baseUrl=' + baseUrl + '&sessionId=' + sessionId);
    }
});
function openMaximized(url) {
    if (url) {
        chrome.windows.create({
            type: 'popup',
            url: url,
            state: 'maximized'
        });
    }
}

$(document).on('click', '.rebateProcessBtn', function (e){
    let apexBody = `
        update new RebateProgram(Id = '${quoteRecordId}', p66_Rebate_Program_Status__c = 'Yes-Pending', p66_Ship_To_Image_Completion_Date__c = null);
        delete [Select Id, Name From RebateProgramMemberPayout Where Period.RebateProgramId = '${quoteRecordId}'];
        delete [Select Id, Name, StartDate, EndDate From RebateProgramPayoutPeriod Where RebateProgramId = '${quoteRecordId}'];
    `;

    conn.tooling.executeAnonymous(apexBody).then((result) => {
        console.log('$result: ',result);
        if(result.success && result.compiled){
            $('.rebateProcessBtn').text('Updated/Deleted');
        }else{
            $('.rebateProcessBtn').text('Error: ' + result.exceptionMessage);
        }
    }).catch((err) => {
        console.log('$err: ',err.message);
    });
});