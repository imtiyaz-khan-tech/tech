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
    let _recordID = url.searchParams.get('recordID');
    console.log('$_recordID: ', _recordID);
    Draggable.create('.small_popup_1', {
        handle: '.small_popup_1_box_heading_div'
    });
    //Initialize Connection
    initialize();

    setTimeout( () => {
        if(idCheck(_recordID) && _recordID.startsWith('a1j')){
            navigator.clipboard.writeText(_recordID).then(function() {
                console.log('copied : ' + _recordID);
                document.title = 'Copied-QT: ' + _recordID;
             }, function(err) {
                document.title = 'Errorrrr......';
             });
        }else if(idCheck(_recordID) && _recordID.startsWith('006')){
            navigator.clipboard.writeText(_recordID).then(function() {
                console.log('copied : ' + _recordID);
                document.title = 'Copied-OPP: ' + _recordID;
             }, function(err) {
                document.title = 'Errorrrr......';
             });
        }else{
            if(idCheck(_recordID)){
                navigator.clipboard.writeText(_recordID).then(function() {
                    console.log('copied : ' + _recordID);
                    document.title = 'Copied-RecordId: ' + _recordID;
                 }, function(err) {
                    document.title = 'Errorrrr......';
                 });
            }
        }
    }, 1000);
});

async function initialize(){
    //Connection
    conn = await getConnection(baseUrl, sessionId);
    console.log('$conn: ',conn);
}

async function getConnection(baseUrl, sessionId){
    let conn = new jsforce.Connection({
       instanceUrl : baseUrl,
       serverUrl : baseUrl,
       sessionId : sessionId,
       version: '60.0'
   });
   return conn;
}

$(document).on('keydown', '.inp', function(event) {
    let charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 13) {
        let value = $(this).val();
        Visualforce.remoting.Manager.invokeAction('{!$RemoteAction.QuickTasks.getSessionUrls}', value,
            function(data, evnt) {
                console.log('$data: ', data);
                if (data) {
                    sessionStorage.setItem('qt_baseUrl', data.baseUrl);
                    sessionStorage.setItem('qt_sessionId', data.sessionId);
                    window.location.reload();
                }
            }, { escape: false }
        );
    }
});

$(document).on('click', '.close-icon_1', function (e){
    $('.body').removeClass('blur');
    $('.small_popup_1').addClass('hide');
});

$(document).on('click', '.small_popup_1_box_heading_div', function (e){
    $('.body').removeClass('blur');
    $('.small_popup_1').addClass('hide');
});

$(document).on('click', '.btn', function (e){
    let _this = $(this);
    let button = $(_this).data('button');
    console.log('$button: ',button);
    navigator.clipboard.readText().then(text => {
       handleButtonClick(_this, button, text);
    }).catch(err => {
       console.error(err);
    });
});

async function handleButtonClick(_this, button, copiedText){
    if(button == 'Delete Payout Periods And Member Payouts'){
        // let id = '0i8O800000007BBIAY';
        if(idCheck(copiedText) && copiedText.startsWith('0i8')){
            let code = `
                String REBATE_PROGRAMM_ID = '${copiedText}';
                update new RebateProgram(Id = REBATE_PROGRAMM_ID, p66_Rebate_Program_Status__c = 'Yes-Pending', p66_Ship_To_Image_Completion_Date__c = null);
                delete [Select Id, Name From RebateProgramMemberPayout Where Period.RebateProgramId =:REBATE_PROGRAMM_ID];
                //delete [Select Id, Name, StartDate, EndDate From RebateProgramPayoutPeriod Where RebateProgramId =:REBATE_PROGRAMM_ID];
            `;
            executeAnonymousHandle(_this, code);
        }
    }else if(button == 'Recreate PayoutPeriods And MemberPayouts'){
        // let id = '0i8O800000007BBIAY';
        if(idCheck(copiedText) && copiedText.startsWith('0i8')){
            let code = `
                String REBATE_PROGRAMM_ID = '${copiedText}';
                update new RebateProgram(Id = REBATE_PROGRAMM_ID, p66_Rebate_Program_Status__c = 'Yes-Pending', p66_Ship_To_Image_Completion_Date__c = null);
                delete [Select Id, Name From RebateProgramMemberPayout Where Period.RebateProgramId =:REBATE_PROGRAMM_ID];
                delete [Select Id, Name, StartDate, EndDate From RebateProgramPayoutPeriod Where RebateProgramId =:REBATE_PROGRAMM_ID];
                update new RebateProgram(Id = REBATE_PROGRAMM_ID, p66_Rebate_Program_Status__c = 'Active');
            `;
            executeAnonymousHandle(_this, code);
        }
    }else if(button == 'Generate Order'){
        // let id = 'a1jO800000HPs3RIAT';
        if(idCheck(copiedText) && copiedText.startsWith('a1j')){
            let code = `
                update new SBQQ__Quote__c(Id = '${copiedText}', p66_ContractType__c = 'ICMUSMarketingORSA', SBQQ__Status__c = 'ALM Request Approved');
                update new SBQQ__Quote__c(Id = '${copiedText}', SBQQ__Ordered__c = true);
            `;
            executeAnonymousHandle(_this, code);
        }
    }else if(button == 'Generate Contract'){
        // let id = 'a1jO800000HPs3RIAT';
        if(idCheck(copiedText) && copiedText.startsWith('a1j')){
            addSpin(_this);
            let query = `SELECT+Id,p66_Order__c+FROM+SBQQ__Quote__c+Where+Id+=+'${copiedText}'+LIMIT+1`;
            const response = await fetchRecord(query);
            console.log('$response:', response);
            if(response.errorCode){
                generateSuccessAndFailedTable(response);
                removeSpin(_this);
            }else{
                let records = response.records;
                console.log('$records: ',records);
                let record = records[0];
                console.log('$record: ',record);
                if(record.p66_Order__c){
                    let code = `
                        update new Order(Id = '${record.p66_Order__c}', Status = 'Activated');
                        update new Order(Id = '${record.p66_Order__c}', SBQQ__Contracted__c = true);
                    `;
                    executeAnonymousHandle(_this, code);
                }
            }
        }
    }else if(button == 'Get Contract'){
        // let id = 'a1jO800000HPs3RIAT';
        if(idCheck(copiedText) && copiedText.startsWith('a1j')){
            addSpin(_this);
            let query = `SELECT+Id,p66_Contract__c+FROM+SBQQ__Quote__c+Where+Id+=+'${copiedText}'+LIMIT+1`;
            const response = await fetchRecord(query);
            console.log('$response:', response);
            if(response.errorCode){
                generateSuccessAndFailedTable(response);
                removeSpin(_this);
            }else{
                let records = response.records;
                console.log('$records: ',records);
                let record = records[0];
                console.log('$record: ',record);
                if(record.p66_Contract__c){
                    let contractLink = `https://phillips66enterprise--wipro.sandbox.lightning.force.com/lightning/r/Contract/${record.p66_Contract__c}/view`;
                    copyToCLipboard(_this, contractLink);
                }else{
                    handleButtonClick(_this, button, copiedText);
                }
            }
        }
    }else if(button == 'Update Rebate Rate CPG'){
        // let id = '0i8O800000007BBIAY';
        if(idCheck(copiedText) && copiedText.startsWith('0i8')){
            let code = `
                String REBATE_PROGRAMM_ID = '${copiedText}';
                RebateProgram rp = [Select p66_Quote_Line__r.p66_Self_Am_Rebate_Rate__c from RebateProgram Where Id =: REBATE_PROGRAMM_ID];
                update new RebateProgram(Id = REBATE_PROGRAMM_ID, p66_Rebate_Rate_CPG__c = rp.p66_Quote_Line__r.p66_Self_Am_Rebate_Rate__c);
            `;
            executeAnonymousHandle(_this, code);
        }
    }else if(button == 'Update - GAS MPV And Rebate Rate CPG'){
        // let id = '0i8O800000007BBIAY';
        if(idCheck(copiedText) && copiedText.startsWith('0i8')){
            let code = `
                String REBATE_PROGRAMM_ID = '${copiedText}';
                RebateProgram rp = [Select p66_Quote__c from RebateProgram Where Id =: REBATE_PROGRAMM_ID];
                update new SBQQ__Quote__c(Id = rp.p66_Quote__c, p66_Gas_Avgas_GLS_YR1__c = 100000, p66_Diesel_Jet_GLS_YR1__c = null);
                RebateProgram rpForLine = [Select p66_Quote_Line__r.p66_Self_Am_Rebate_Rate__c from RebateProgram Where Id =: REBATE_PROGRAMM_ID];
                update new RebateProgram(Id = REBATE_PROGRAMM_ID, p66_Rebate_Rate_CPG__c = rpForLine.p66_Quote_Line__r.p66_Self_Am_Rebate_Rate__c);
            `;
            executeAnonymousHandle(_this, code);
        }
    }else if(button == 'Update - Diesel MPV And Rebate Rate CPG'){
        // let id = '0i8O800000007BBIAY';
        if(idCheck(copiedText) && copiedText.startsWith('0i8')){
            let code = `
                String REBATE_PROGRAMM_ID = '${copiedText}';
                RebateProgram rp = [Select p66_Quote__c from RebateProgram Where Id =: REBATE_PROGRAMM_ID];
                update new SBQQ__Quote__c(Id = rp.p66_Quote__c, p66_Diesel_Jet_GLS_YR1__c = 100000, p66_Gas_Avgas_GLS_YR1__c = null);
                RebateProgram rpForLine = [Select p66_Quote_Line__r.p66_Self_Am_Rebate_Rate__c from RebateProgram Where Id =: REBATE_PROGRAMM_ID];
                update new RebateProgram(Id = REBATE_PROGRAMM_ID, p66_Rebate_Rate_CPG__c = rpForLine.p66_Quote_Line__r.p66_Self_Am_Rebate_Rate__c);
            `;
            executeAnonymousHandle(_this, code);
        }
    }else if(button == 'Update - Combined MPV And Rebate Rate CPG'){
        // let id = '0i8O800000007BBIAY';
        if(idCheck(copiedText) && copiedText.startsWith('0i8')){
            let code = `
                String REBATE_PROGRAMM_ID = '${copiedText}';
                RebateProgram rp = [Select p66_Quote__c from RebateProgram Where Id =: REBATE_PROGRAMM_ID];
                update new SBQQ__Quote__c(Id = rp.p66_Quote__c, p66_Diesel_Jet_GLS_YR1__c = 100000, p66_Gas_Avgas_GLS_YR1__c = 100000);
                RebateProgram rpForLine = [Select p66_Quote_Line__r.p66_Self_Am_Rebate_Rate__c from RebateProgram Where Id =: REBATE_PROGRAMM_ID];
                update new RebateProgram(Id = REBATE_PROGRAMM_ID, p66_Rebate_Rate_CPG__c = rpForLine.p66_Quote_Line__r.p66_Self_Am_Rebate_Rate__c);
            `;
            executeAnonymousHandle(_this, code);
        }
    }else if(button == 'Copy Actual Volume Gal - Qtr : 1'){
        addSpin(_this);
        let query = `Select+Id,+p66_Month_Number__c,+p66_Actual_Volume_GAL__c,+p66_Contract_Month__c,+p66_Contract_Volume_Summary__r.p66_Year__c,+p66_Contract_Volume_Summary__r.p66_Ship_To__c+From+p66_Actual_Volume__c+Where+p66_Contract_Volume_Summary__c+IN+(SELECT+Id+FROM+p66_Contract_Volume_Summary__c+Where+p66_Ship_To__c+=+'0014x000011uV1HAAU'+AND+p66_Year__c+=+'2025'+And+p66_Product__c+=+'Gas')+And+p66_Month_Number__c+IN+(1,2,3)+Order+By+p66_Month_Number__c+Asc`;
        const response = await fetchRecord(query);
        console.log('$response:', response);
        if(response.errorCode){
            generateSuccessAndFailedTable(response);
            removeSpin(_this);
        }else{
            let records = response.records;
            console.log('$records: ',records);
            let totalCount = 0.0;
            records.forEach(val => {
                totalCount += val?.p66_Actual_Volume_GAL__c;
            });
            console.log('$totalCount: ',totalCount);
            copyToCLipboard(_this, totalCount);
        }
    }else if(button == 'Copy Actual Volume Gal - Qtr : 2'){
        addSpin(_this);
        let query = `Select+Id,+p66_Month_Number__c,+p66_Actual_Volume_GAL__c,+p66_Contract_Month__c,+p66_Contract_Volume_Summary__r.p66_Year__c,+p66_Contract_Volume_Summary__r.p66_Ship_To__c+From+p66_Actual_Volume__c+Where+p66_Contract_Volume_Summary__c+IN+(SELECT+Id+FROM+p66_Contract_Volume_Summary__c+Where+p66_Ship_To__c+=+'0014x000011uV1HAAU'+AND+p66_Year__c+=+'2025'+And+p66_Product__c+=+'Gas')+And+p66_Month_Number__c+IN+(4,5,6)+Order+By+p66_Month_Number__c+Asc`;
        const response = await fetchRecord(query);
        console.log('$response:', response);
        if(response.errorCode){
            generateSuccessAndFailedTable(response);
            removeSpin(_this);
        }else{
            let records = response.records;
            console.log('$records: ',records);
            let totalCount = 0.0;
            records.forEach(val => {
                totalCount += val?.p66_Actual_Volume_GAL__c;
            });
            console.log('$totalCount: ',totalCount);
            copyToCLipboard(_this, totalCount);
        }
    }else if(button == 'Copy Actual Volume Gal - Qtr : 3'){
        addSpin(_this);
        let query = `Select+Id,+p66_Month_Number__c,+p66_Actual_Volume_GAL__c,+p66_Contract_Month__c,+p66_Contract_Volume_Summary__r.p66_Year__c,+p66_Contract_Volume_Summary__r.p66_Ship_To__c+From+p66_Actual_Volume__c+Where+p66_Contract_Volume_Summary__c+IN+(SELECT+Id+FROM+p66_Contract_Volume_Summary__c+Where+p66_Ship_To__c+=+'0014x000011uV1HAAU'+AND+p66_Year__c+=+'2025'+And+p66_Product__c+=+'Gas')+And+p66_Month_Number__c+IN+(7,8,9)+Order+By+p66_Month_Number__c+Asc`;
        const response = await fetchRecord(query);
        console.log('$response:', response);
        if(response.errorCode){
            generateSuccessAndFailedTable(response);
            removeSpin(_this);
        }else{
            let records = response.records;
            console.log('$records: ',records);
            let totalCount = 0.0;
            records.forEach(val => {
                totalCount += val?.p66_Actual_Volume_GAL__c;
            });
            console.log('$totalCount: ',totalCount);
            copyToCLipboard(_this, totalCount);
        }
    }else if(button == 'Copy Actual Volume Gal - Qtr : 4'){
        addSpin(_this);
        let query = `Select+Id,+p66_Month_Number__c,+p66_Actual_Volume_GAL__c,+p66_Contract_Month__c,+p66_Contract_Volume_Summary__r.p66_Year__c,+p66_Contract_Volume_Summary__r.p66_Ship_To__c+From+p66_Actual_Volume__c+Where+p66_Contract_Volume_Summary__c+IN+(SELECT+Id+FROM+p66_Contract_Volume_Summary__c+Where+p66_Ship_To__c+=+'0014x000011uV1HAAU'+AND+p66_Year__c+=+'2025'+And+p66_Product__c+=+'Gas')+And+p66_Month_Number__c+IN+(10,11,12)+Order+By+p66_Month_Number__c+Asc`;
        const response = await fetchRecord(query);
        console.log('$response:', response);
        if(response.errorCode){
            generateSuccessAndFailedTable(response);
            removeSpin(_this);
        }else{
            let records = response.records;
            console.log('$records: ',records);
            let totalCount = 0.0;
            records.forEach(val => {
                totalCount += val?.p66_Actual_Volume_GAL__c;
            });
            console.log('$totalCount: ',totalCount);
            copyToCLipboard(_this, totalCount);
        }
    }else if(button == 'Rebate Program Detail'){
        // 0i8O80000000JsHIAU
        if(idCheck(copiedText) && copiedText.startsWith('0i8')){
            addSpin(_this);
            let query = `Select+p66_Rebate_Rate_CPG__c,p66_Product_category__c,p66_Base_Price__c,p66_Self_AM_Max_Period_Volume__c,p66_Quote__r.p66_Gas_Avgas_GLS_YR1__c,p66_Quote__r.p66_Diesel_Jet_GLS_YR1__c+From+RebateProgram+Where+Id+=+'${copiedText}'+LIMIT+1`;
            const response = await fetchRecord(query);
            console.log('$response:', response);
            if(response.errorCode){
                generateSuccessAndFailedTable(response);
                removeSpin(_this);
            }else{
                let records = response.records;
                console.log('$records: ',records);
                let record = records[0];
                console.log('$record: ',record);
                let data = {success : true, ...record,  ...record?.p66_Quote__r};
                console.log('$data: ',data);
                delete data?.attributes;
                delete data?.p66_Quote__r;
                generateSuccessAndFailedTable(data);
                removeSpin(_this);
            }
        }
    }else if(button == 'Copy Actual Volume Gal - From JSON'){
        addSpin(_this);
        let response;
        try{
            response = JSON.parse(copiedText);
            let totalCount = 0.0;
            response.forEach(val => {
                totalCount += val?.p66_Actual_Volume_GAL__c;
            });
            console.log('$totalCount: ',totalCount);
            copyToCLipboard(_this, totalCount);
        }catch(err){
            console.log('$error: ', err);
            console.log('$error name: ', err.name);
            console.log('$error message: ', err.message);
            console.log('$error stack: ', err.stack);
            generateSuccessAndFailedTable({
                error: err.name, message: err.message, stacktrace: err.stack
            });

        }
        console.log('$response: ',response);
        removeSpin(_this);
    }else if(button == 'Get Member Payouts'){
        // 0i8O80000000KmjIAE
        if(idCheck(copiedText) && copiedText.startsWith('0i8')){
            addSpin(_this);
            let query = `Select+p66_Period_Program_Year__c,p66_Period_Program_Quarter__c,p66_Self_AM_Qtrly_Interest__c,p66_Self_AM_Qtrly_Principal__c,p66_Self_AM_Qtrly_Loan_Balance__c,p66_Actual_quantity__c,p66_Self_AM_Qtrly_Rebate__c,p66_Excess_Rebate__c,p66_Invoice_Payment_Amount__c,p66_Ramp_Up_Max_Period_Volume__c+From+RebateProgramMemberPayout+Where+Period.RebateProgramId+=+'${copiedText}'+And+p66_Period_Program_Year__c+!=+null+And+p66_Trueup__c+=+False+Order+By+Period.StartDate+Asc`;
            const response = await fetchRecord(query);
            console.log('$response:', response);
            if(response.errorCode){
                generateSuccessAndFailedTable(response);
                removeSpin(_this);
            }else{
                let thsArray = [
                    { label: 'Year', apiname: 'p66_Period_Program_Year__c' },
                    { label: 'Quarter', apiname: 'p66_Period_Program_Quarter__c' },
                    { label: 'Interest', apiname: 'p66_Self_AM_Qtrly_Interest__c' },
                    { label: 'Principal', apiname: 'p66_Self_AM_Qtrly_Principal__c' },
                    { label: 'Loan Balance', apiname: 'p66_Self_AM_Qtrly_Loan_Balance__c' },
                    { label: 'Quantity', apiname: 'p66_Actual_quantity__c' },
                    { label: 'Qtrly Rebate', apiname: 'p66_Self_AM_Qtrly_Rebate__c' },
                    { label: 'Excess Rebate', apiname: 'p66_Excess_Rebate__c' },
                    { label: 'Invoice Amount', apiname: 'p66_Invoice_Payment_Amount__c' },
                    { label: 'RampUp Max', apiname: 'p66_Ramp_Up_Max_Period_Volume__c' }
                ];
                let records = response.records;
                console.log('$records: ',records);
                generateRecordsTable(records, thsArray);
                removeSpin(_this);
            }
        }
    }else if(button == 'Get Flow Api Name By Label'){
        addSpin(_this);
        //p66 Invoice Payment calculations Self Am
        let query = `SELECT+Id,MasterLabel,FullName+FROM+Flow+Where+MasterLabel+=+'${encodeURIComponent(copiedText)}'+And+Status+=+'Active'+Limit+1`;
        const response = await fetchRecord(query, true);
        console.log('$response:', response);
        if(response.errorCode){
            generateSuccessAndFailedTable(response);
            removeSpin(_this);
        }else{
            let records = response.records;
            let record = records[0];
            console.log('$record: ',record);
            copyToCLipboard(_this, record.FullName);
        }
    }else if(button == 'Get Flow Api Name By Id'){
        addSpin(_this);
        // copiedText = '301O800000GFvZRIA1';
        console.log('$copiedText: ',copiedText);
        let query = `SELECT+Id,MasterLabel,FullName+FROM+Flow+Where+Id+=+'${encodeURIComponent(copiedText)}'+And+Status+=+'Active'+Limit+1`;
        const response = await fetchRecord(query, true);
        console.log('$response:', response);
        if(response.errorCode){
            generateSuccessAndFailedTable(response);
            removeSpin(_this);
        }else{
            let records = response.records;
            let record = records[0];
            console.log('$record: ',record);
            copyToCLipboard(_this, record.FullName);
        }
    }else if(button == 'Create Branded Quote'){
        let code = '';
        if(baseUrl == 'https://phillips66enterprise--wipro.sandbox.my.salesforce.com'){
            code = `
                Opportunity opportunityObj = new Opportunity(
                    AccountId = '0014x000011uUpKAAU',
                    RecordTypeId = '0124x000001lxoBAAQ',
                    IsPrivate = false,
                    Name = 'SHEPHERD OIL CO LLC - New Contract - Marketing - Branded - Marketer - 4/22/2025',
                    StageName = 'Qualification',
                    Probability = 10,
                    CloseDate = Date.valueOf('2025-04-22'),
                    Type = 'Quote',
                    ForecastCategoryName = 'Pipeline',
                    Pricebook2Id = '01s4x00000492nXAAQ',
                    p66_Business_Unit__c = 'Marketing',
                    p66_Channel_of_Trade__c = 'Branded - Marketer',
                    p66_Evergreen__c = false,
                    p66_Confidential__c = false,
                    SBQQ__Contracted__c = false,
                    SBQQ__CreateContractedPrices__c = false,
                    SBQQ__Ordered__c = false,
                    SBQQ__Renewal__c = false,
                    sbaa__StepApproved__c = false,
                    p66_Owners_Role__c = 'p66_International',
                    p66_Sales_District__c = 'a0hTH000003FlPtYAK',
                    p66_Sales_Rep__c = '005Rm000002vjIfIAI',
                    p66_Quotes_Accepted__c = false,
                    p66_Quotes_in_Review__c = false
                );
                insert opportunityObj;
                System.debug('$$$opportunityObj-ID: ' + opportunityObj.Id);

                SBQQ__Quote__c brandedQuote = new SBQQ__Quote__c(
                    RecordTypeId = '0124x000001lxh3AAA',
                    SBQQ__Account__c = '0014x000011uUpKAAU',
                    SBQQ__BillingCity__c = 'BLACKWELL',
                    SBQQ__BillingCountry__c = 'United States',
                    SBQQ__BillingName__c = 'SHEPHERD OIL CO LLC',
                    SBQQ__BillingPostalCode__c = '74631-4926',
                    SBQQ__BillingState__c = 'Oklahoma',
                    SBQQ__BillingStreet__c = '1831 S MAIN ST',
                    SBQQ__ConsumptionRateOverride__c = false,
                    SBQQ__ContractingMethod__c = 'Single Contract',
                    SBQQ__EndDate__c = Date.valueOf('2035-12-31'),
                    SBQQ__ExpirationDate__c = Date.valueOf('2025-02-21'),
                    SBQQ__LastSavedOn__c = DateTime.valueOf('2025-01-22 09:36:27.000+0000'),
                    SBQQ__LineItemsGrouped__c = false,
                    SBQQ__LineItemsPrinted__c = true,
                    SBQQ__Opportunity2__c = opportunityObj.Id,
                    SBQQ__OrderByQuoteLineGroup__c = false,
                    SBQQ__Ordered__c = false,
                    SBQQ__PaperSize__c = 'Default',
                    SBQQ__PriceBook__c = '01s4x00000492nXAAQ',
                    SBQQ__PricebookId__c = '01s4x00000492nXAAQ',
                    SBQQ__PrimaryContact__c = '0034x00000D9zzOAAR',
                    SBQQ__Primary__c = true,
                    SBQQ__SalesRep__c = '005Rm000002vjIfIAI',
                    SBQQ__ShippingCity__c = 'BLACKWELL',
                    SBQQ__ShippingCountry__c = 'United States',
                    SBQQ__ShippingName__c = 'SHEPHERD OIL CO LLC',
                    SBQQ__ShippingPostalCode__c = '74631-4926',
                    SBQQ__ShippingState__c = 'Oklahoma',
                    SBQQ__ShippingStreet__c = '1831 S MAIN ST',
                    SBQQ__StartDate__c = Date.valueOf('2025-01-01'),
                    SBQQ__Status__c = 'Draft',
                    SBQQ__Type__c = 'Quote',
                    SBQQ__Unopened__c = true,
                    SBQQ__WatermarkShown__c = false,
                    p66_Business_Unit__c = 'Marketing',
                    p66_Channel_of_Trade__c = 'Branded - Marketer',
                    p66_Freight_Required__c = false,
                    p66_End_Date__c = Date.valueOf('2035-12-31'),
                    p66_Evergreen__c = false,
                    p66_Is_Supply_Request_Recalled__c = false,
                    p66_Presented__c = false,
                    p66_Rejected__c = false,
                    p66_Sales_District__c = 'a0hTH000003FlPtYAK',
                    p66_Is_Supply_Request_Rejected__c = false,
                    p66_ALM_Upfronts__c = 0,
                    p66_ATM__c = false,
                    p66_Bid_Only__c = false,
                    p66_Car_Wash__c = false,
                    p66_Child_Quote_Count__c = 0,
                    p66_Child_Site_Count__c = 0,
                    p66_Confidential__c = false,
                    p66_Contract_Extension__c = false,
                    p66_Debrand_Site__c = false,
                    p66_Diesel_Jet_Gallons__c = 0,
                    p66_Draft_Child_Quote_Count__c = 0,
                    p66_Gas_Avgas_Gallons__c = 0,
                    p66_Hurdle_Rates_Not_Met__c = 0,
                    p66_Image_Payments__c = 0,
                    p66_Incremental_Diesel_Jet_Volume__c = 0,
                    p66_Incremental_Gas_Avgas_Volume__c = 0,
                    p66_Loan_Amounts__c = 0,
                    p66_Create_Prospect_Ship_To__c = false,
                    p66_Parent_Line_Item_Count__c = 0,
                    p66_Parent_SR_Pending_Approved_Items__c = 0,
                    p66_Phillips_66_Payments__c = 0,
                    p66_Plant_Designation_Change__c = false,
                    p66_Post_Load_Details_Complete__c = false,
                    p66_Pricing_Details_Complete__c = false,
                    p66_Program_Expense_Amounts__c = 0,
                    p66_Refueler_Concession_Amounts__c = 0,
                    p66_Route_for_Program_Review__c = false,
                    p66_SR_Approved_Child_Quote_Count__c = 0,
                    p66_Site_Is_Temp_Closed__c = false,
                    p66_Site_Upfront_Dollar_Threshold__c = false,
                    p66_Total_Gas_Avgas_Gallons__c = 0,
                    p66_Is_Site_Transfer__c = false,
                    p66_z_Debrand__c = false,
                    p66_z_Site_Plant_Change__c = false,
                    p66_z_Temp_Close_Approval_Required__c = false,
                    p66_DTW__c = false,
                    p66_Parent_New_Effective_Quantity__c = 0,
                    p66_Term_Mod__c = false,
                    p66_z_Reopen_Site__c = false,
                    p66_Agreement_Type1__c = 'ORSA',
                    p66_Transfer_Site__c = false,
                    p66_Diesel_Jet_GLS_YR1__c = 0,
                    p66_Gas_Avgas_GLS_YR1__c = 0,
                    p66_Total_Quantity__c = 1,
                    p66_Hide_Quote_from_Aviation_Sales_Rep__c = false,
                    p66_Pricing_Only_Default__c = false,
                    p66_Pricing_Only__c = false,
                    Processed_By_BMA_Auto_Renewal_Automation__c = false,
                    p66_Formula_Pricing__c = false,
                    p66_Is_Blocked_From_Changing_Status__c = false,
                    p66_Signature_Completed__c = false,
                    p66_Contract_Termination__c = false,
                    p66_BIODIESEL_BLENDS_ABOVE_5_PERCENT__c = false,
                    p66_Contract_Analyst_Email__c = 'neelima.taneeru@contractor.p66.com',
                    p66_Extend_Programs__c = false,
                    p66_Is_Refueler_Applicable__c = false,
                    p66_OriginalQuoteInfo__c = 'Q-182808',
                    p66_PrimaryContact_Designation__c = 'Manager-Energy Acquisition',
                    p66_Primary_Contact_Email__c = 'pmurphy@washgas.com.invalid',
                    p66_Sales_District_Name__c = 'Test',
                    p66_Terminate_Rebate_Programs__c = false,
                    p66_Early_Renewal__c = false,
                    p66_ContractType__c = 'ICMUSMarketingORSA'
                );
                insert brandedQuote;
                System.debug('$$$brandedQuote-ID: ' + brandedQuote.Id);
            `;
        }else{
            code = `
                Opportunity opportunityObj = new Opportunity(
                AccountId = '0014x000011uUpKAAU',
                RecordTypeId = '0124x000001lxoBAAQ',
                IsPrivate = false,
                Name = 'SHEPHERD OIL CO LLC - New Contract - Marketing - Branded - Marketer - 4/22/2025',
                StageName = 'Qualification',
                Probability = 10,
                CloseDate = Date.valueOf('2025-04-22'),
                Type = 'Quote',
                ForecastCategoryName = 'Pipeline',
                Pricebook2Id = '01s4x00000492nXAAQ',
                p66_Business_Unit__c = 'Marketing',
                p66_Channel_of_Trade__c = 'Branded - Marketer',
                p66_Evergreen__c = false,
                p66_Confidential__c = false,
                SBQQ__Contracted__c = false,
                SBQQ__CreateContractedPrices__c = false,
                SBQQ__Ordered__c = false,
                SBQQ__Renewal__c = false,
                sbaa__StepApproved__c = false,
                p66_Sales_District__c = 'a0h4x00000UriFBAAZ',
                p66_Sales_Rep__c = '0054x000007actoAAA',
                p66_Quotes_Accepted__c = false,
                p66_Quotes_in_Review__c = false
            );
            insert opportunityObj;
            System.debug('$$$opportunityObj-ID: ' + opportunityObj.Id);

            SBQQ__Quote__c brandedQuote = new SBQQ__Quote__c(
                RecordTypeId = '0124x000001lxh3AAA',
                SBQQ__Account__c = '0014x000011uUpKAAU',
                SBQQ__BillingCity__c = 'BLACKWELL',
                SBQQ__BillingCountry__c = 'United States',
                SBQQ__BillingName__c = 'SHEPHERD OIL CO LLC',
                SBQQ__BillingPostalCode__c = '74631-4926',
                SBQQ__BillingState__c = 'Oklahoma',
                SBQQ__BillingStreet__c = '1831 S MAIN ST',
                SBQQ__ConsumptionRateOverride__c = false,
                SBQQ__ContractingMethod__c = 'Single Contract',
                SBQQ__EndDate__c = Date.valueOf('2035-12-31'),
                SBQQ__ExpirationDate__c = Date.valueOf('2025-02-21'),
                SBQQ__LastSavedOn__c = DateTime.valueOf('2025-01-22 06:38:35.000+0000'),
                SBQQ__LineItemsGrouped__c = false,
                SBQQ__LineItemsPrinted__c = true,
                SBQQ__Opportunity2__c = opportunityObj.Id,
                SBQQ__OrderByQuoteLineGroup__c = false,
                SBQQ__Ordered__c = false,
                SBQQ__PaperSize__c = 'Default',
                SBQQ__PriceBook__c = '01s4x00000492nXAAQ',
                SBQQ__PricebookId__c = '01s4x00000492nXAAQ',
                SBQQ__PrimaryContact__c = '003VC00000qB9lBYAS',
                SBQQ__Primary__c = true,
                SBQQ__SalesRep__c = '0054x000007actoAAA',
                SBQQ__ShippingCity__c = 'BLACKWELL',
                SBQQ__ShippingCountry__c = 'United States',
                SBQQ__ShippingName__c = 'SHEPHERD OIL CO LLC',
                SBQQ__ShippingPostalCode__c = '74631-4926',
                SBQQ__ShippingState__c = 'Oklahoma',
                SBQQ__ShippingStreet__c = '1831 S MAIN ST',
                SBQQ__StartDate__c = Date.valueOf('2025-01-01'),
                SBQQ__Status__c = 'Draft',
                SBQQ__Type__c = 'Quote',
                SBQQ__Unopened__c = true,
                SBQQ__WatermarkShown__c = false,
                p66_Business_Unit__c = 'Marketing',
                p66_Channel_of_Trade__c = 'Branded - Marketer',
                p66_Freight_Required__c = false,
                p66_End_Date__c = Date.valueOf('2035-12-31'),
                p66_Evergreen__c = false,
                p66_Is_Supply_Request_Recalled__c = false,
                p66_Presented__c = false,
                p66_Rejected__c = false,
                p66_Sales_District__c = 'a0h4x00000UriFBAAZ',
                p66_Is_Supply_Request_Rejected__c = false,
                p66_ALM_Upfronts__c = 0,
                p66_ATM__c = false,
                p66_Bid_Only__c = false,
                p66_Car_Wash__c = false,
                p66_Child_Quote_Count__c = 0,
                p66_Child_Site_Count__c = 0,
                p66_Confidential__c = false,
                p66_Contract_Extension__c = false,
                p66_Debrand_Site__c = false,
                p66_Diesel_Jet_Gallons__c = 0,
                p66_Draft_Child_Quote_Count__c = 0,
                p66_Gas_Avgas_Gallons__c = 0,
                p66_Hurdle_Rates_Not_Met__c = 0,
                p66_Image_Payments__c = 0,
                p66_Incremental_Diesel_Jet_Volume__c = 0,
                p66_Incremental_Gas_Avgas_Volume__c = 0,
                p66_Loan_Amounts__c = 0,
                p66_Create_Prospect_Ship_To__c = false,
                p66_Parent_Line_Item_Count__c = 0,
                p66_Parent_SR_Pending_Approved_Items__c = 0,
                p66_Phillips_66_Payments__c = 0,
                p66_Plant_Designation_Change__c = false,
                p66_Post_Load_Details_Complete__c = false,
                p66_Pricing_Details_Complete__c = false,
                p66_Program_Expense_Amounts__c = 0,
                p66_Refueler_Concession_Amounts__c = 0,
                p66_Route_for_Program_Review__c = false,
                p66_SR_Approved_Child_Quote_Count__c = 0,
                p66_Site_Is_Temp_Closed__c = false,
                p66_Site_Upfront_Dollar_Threshold__c = false,
                p66_Total_Gas_Avgas_Gallons__c = 0,
                p66_Is_Site_Transfer__c = false,
                p66_z_Debrand__c = false,
                p66_z_Site_Plant_Change__c = false,
                p66_z_Temp_Close_Approval_Required__c = false,
                p66_DTW__c = false,
                p66_Parent_New_Effective_Quantity__c = 0,
                p66_Term_Mod__c = false,
                p66_z_Reopen_Site__c = false,
                p66_Agreement_Type1__c = 'ORSA',
                p66_Transfer_Site__c = false,
                p66_Diesel_Jet_GLS_YR1__c = 0,
                p66_Gas_Avgas_GLS_YR1__c = 0,
                p66_Total_Quantity__c = 1,
                p66_Pricing_Only__c = false,
                p66_Pricing_Only_Default__c = false,
                p66_Hide_Quote_from_Aviation_Sales_Rep__c = false,
                p66_BIODIESEL_BLENDS_ABOVE_5_PERCENT__c = false,
                p66_ContractType__c = 'ICMUSMarketingORSA',
                p66_Contract_Analyst_Email__c = 'ryan.d.hunt@p66.com.invalid',
                p66_Is_Refueler_Applicable__c = false,
                p66_OriginalQuoteInfo__c = 'Q-537910',
                p66_Primary_Contact_Email__c = 'xyz@mail.com',
                p66_Sales_District_Name__c = 'MK0118',
                p66_Sales_Manager_Email__c = 'douglas.w.akers@p66.com.invalid',
                p66_Contract_Termination__c = false,
                p66_Extend_Programs__c = false,
                p66_Allow_Edit_Start_Date__c = false,
                p66_Signature_Completed__c = false,
                p66_Is_Blocked_From_Changing_Status__c = false,
                Processed_By_BMA_Auto_Renewal_Automation__c = false,
                p66_Formula_Pricing__c = false,
                p66_Terminate_Rebate_Programs__c = false,
                p66_Early_Renewal__c = false
            );
            insert brandedQuote;
            System.debug('$brandedQuote-ID: ' + brandedQuote.Id);
            `;
        }
        executeAnonymousHandle(_this, code);
    }else if(button == 'Get Branded Quote'){
        addSpin(_this);
        let query = `Select+Id,Name,CreatedDate,CreatedBy.Name+From+SBQQ__Quote__c+Where+CreatedDate+=+Today+And+CreatedBy.Name+=+'Imtiyaj Khan'+Order+By+CreatedDate+DESC+LIMIT+1`;
        const response = await fetchRecord(query);
        console.log('$response:', response);
        if(response.errorCode){
            generateSuccessAndFailedTable(response);
            removeSpin(_this);
        }else{
            let records = response.records;
            console.log('$records: ',records);
            let record = records[0];
            console.log('$record: ',record);
            let environmentLink = 'https://phillips66enterprise--ring4.sandbox.lightning.force.com';
            if(baseUrl == 'https://phillips66enterprise--wipro.sandbox.my.salesforce.com'){
                environmentLink = 'https://phillips66enterprise--wipro.sandbox.lightning.force.com';
            }
            let data = {success : true, Quote: `${environmentLink}/lightning/r/SBQQ__Quote__c/${record.Id}/view`, CreatedDate: getConvertedDateTime_short(record.CreatedDate)};
            console.log('$data: ',data);
            delete data?.attributes;
            delete data?.CreatedBy;
            generateSuccessAndFailedTable(data);
            removeSpin(_this);
        }
    }else if(button == 'Delete Financial Schedules And Update Cbs'){
        // let id = '0i6O80000000dKjIAI';
        if(idCheck(copiedText) && copiedText.startsWith('0i6')){
            let code = `
                Id memberPayoutId = '${copiedText}';
                delete [Select Id,Name, p66_Self_AM_Actual_Balance_Amount__c From p66_Financial_Schedule__c Where p66_Rebate_Program_Member_Payout__c =: memberPayoutId];
                List<p66_Contractual_Balance__c> cbs = new List<p66_Contractual_Balance__c>();
                for(p66_Contractual_Balance__c cb : [Select Id, Name, p66_Opening_Balance__c, p66_Contractual_Program_Balance__c From p66_Contractual_Balance__c Where p66_Rebate_Program_Member_Payout__c =: memberPayoutId]){
                    cb.p66_Opening_Balance__c = 0;
                    cb.p66_Contractual_Program_Balance__c = 0;
                    cbs.add(cb);
                }
                update cbs;
            `;
            executeAnonymousHandle(_this, code);
        }
    }else if(button == 'Copy Link'){
        let href;
        try{
            const parser = new DOMParser();
            const doc = parser.parseFromString(copiedText, 'text/html');
            const anchor = doc.querySelector('a');
            href = decodeURIComponent(anchor.getAttribute('href'));
            console.log(href);
            const startTag = 'https://phillips66enterprise';
            const endTag = 'view';
            const regex = new RegExp(`${startTag}(.*?)${endTag}`, 'g');
            const matches = href.match(regex);
            console.log(matches);
            let copyText = matches[0];
            copyText = copyText.replaceAll('.mcas.ms', '');
            copyToCLipboard(_this, copyText);
        }catch(error){
            copyToCLipboard(_this, decodeURIComponent(href));
            // generateSuccessAndFailedTable({ isError: true, name: error.name, message: error.message, stack: error.stack });
        }
    }else if(button == 'Extract Texts'){
        try{
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = copiedText;
            const textOnly = tempDiv.textContent || tempDiv.innerText;
            copyToCLipboard(_this, textOnly.trim());
        }catch(error){
            generateSuccessAndFailedTable({ isError: true, name: error.name, message: error.message, stack: error.stack });
        }
    }else if(button == 'Delete Cors'){
        addSpin(_this);
        let query = `SELECT+Id,DeveloperName,UrlPattern+FROM+CorsWhitelistEntry+Where+UrlPattern=+'https://imtiyaz-khan-tech.github.io'`;
        const response = await fetchRecord(query);
        console.log('$response:', response);
        if(response.isError || response.totalSize == 0){
            if(response.totalSize == 0){
                generateSuccessAndFailedTable({
                    records: 0, data: "Record not found"
                });
            }else{
                generateSuccessAndFailedTable(response);
            }
            removeSpin(_this);
        }else{
            let records = response.records;
            console.log('$records: ',records);
            let record = records[0];
            console.log('$record: ',record);
            let recordId = record.Id;
            console.log('$recordId: ',recordId);
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + sessionId);
            
            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,
                redirect: 'follow'
            };
            
            fetch(baseUrl + "/services/data/v59.0/sobjects/CorsWhitelistEntry/" + recordId, requestOptions).then(response => response.json()).then(result => {
                console.log('$Delete Response: ', result)
                if(Array.isArray(result)){
                    generateSuccessAndFailedTable(result[0]);
                    removeSpin(_this);
                }else{
                    generateSuccessAndFailedTable({
                        success: true, deleted: true
                    });
                    removeSpin(_this);
                }
            }).catch(err => {
                removeSpin(_this);
                console.log('$error: ', err);
                console.log('$error message: ', err.message);
                if(err.message == 'Unexpected end of JSON input'){
                    generateSuccessAndFailedTable({
                        success: true, deleted: true
                    });
                }else{
                    generateSuccessAndFailedTable({
                        error: err.name, message: err.message, stacktrace: err.stack
                    });
                }
            });
        }
    }else if(button == 'Add Cors'){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + sessionId);
        const raw = JSON.stringify({
            "UrlPattern": "https://imtiyaz-khan-tech.github.io"
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body: raw
        };
        
        fetch(baseUrl + "/services/data/v59.0/sobjects/CorsWhitelistEntry/", requestOptions).then(response => response.json()).then(result => {
            console.log('$Created Response: ', result)
            if(Array.isArray(result)){
                generateSuccessAndFailedTable(result[0]);
                removeSpin(_this);
            }else{
                generateSuccessAndFailedTable(result);
                removeSpin(_this);
            }
        }).catch(err => {
            removeSpin(_this);
            console.log('$error: ', err);
            generateSuccessAndFailedTable({
                error: err.name, message: err.message, stacktrace: err.stack
            });
        });
    }else if(button == 'Create Job Fullbox'){
        // let id = 'a1jO800000ZjgLVIAZ';
        if(idCheck(copiedText) && copiedText.startsWith('a1j')){
            let code = `
                Map<String, String> sessionMap = TokenGenerator.getSessionMap('WIPRO');
                System.debug(sessionMap);
                for(Integer i = 0 ; i <= 59; i++){
                    String index = String.valueOf(i);
                    index = index.length() == 1 ? '0'+index : index;
                    String croneExpr = '0 '+ i +' * * * ?';
                    System.schedule('Contract Generation Info ' + i, croneExpr, new CallApiScheduler(sessionMap.get('sessionId'),sessionMap.get('baseUrl'),'${copiedText}'));
                }
            `;
            executeAnonymousHandle(_this, code);
        }
    }else if(button == 'Create Job Ring4'){
        // let id = 'a1jO800000ZjgLVIAZ';
        if(idCheck(copiedText) && copiedText.startsWith('a1j')){
            let code = `
                Map<String, String> sessionMap = TokenGenerator.getSessionMap('RING4');
                System.debug(sessionMap);
                for(Integer i = 0 ; i <= 59; i++){
                    String index = String.valueOf(i);
                    index = index.length() == 1 ? '0'+index : index;
                    String croneExpr = '0 '+ i +' * * * ?';
                    System.schedule('Contract Generation Info ' + i, croneExpr, new CallApiScheduler(sessionMap.get('sessionId'),sessionMap.get('baseUrl'),'${copiedText}'));
                }
            `;
            executeAnonymousHandle(_this, code);
        }
    }else if(button == 'Expire Contract'){
        // let id = '800O800000GerfVIAR';
        if(idCheck(copiedText)){
            let code = `
                Id contractId = '${copiedText}';
                delete [SELECT Id, Name FROM RebateProgramMemberPayout WHERE p66_Rebate_Program__r.p66_Child_Contract__c =:contractId];
                delete [SELECT Id, Name FROM RebateProgram WHERE p66_Child_Contract__c  =:contractId];
                update new Contract(Id = contractId, Status = 'Expired');
            `;
            executeAnonymousHandle(_this, code);
        }
    }else if(button == 'FLS Profiles'){
        // copiedText = 'Account.Total_Amount__c';
        // copiedText = 'SBQQ__Quote__c.p66_DTW__c';
        let textArray = copiedText.split('.');
        if(textArray.length == 2){
            addSpin(_this);
            let query = `SELECT+Id,Field,PermissionsEdit,PermissionsRead,Parent.Profile.Name+FROM+FieldPermissions+Where+Parent.ProfileId+!=+null+And+SobjectType+=+'${textArray[0]}'`;
            const response = await fetchRecord(query);
            console.log('$response:', response);
            if(response.errorCode){
                generateSuccessAndFailedTable(response);
                removeSpin(_this);
            }else{
                let records = response.records;
                console.log('$records: ',records);
                if(response.nextRecordsUrl){
                    let responseNext = await fetchNextRecords(response.nextRecordsUrl);
                    console.log('$responseNext_1: ',responseNext);
                    records = [...records, ...responseNext.records];

                    while(responseNext.nextRecordsUrl){
                        responseNext = await fetchNextRecords(responseNext.nextRecordsUrl);
                        console.log('$responseNext_Loop: ',responseNext);
                        records = [...records, ...responseNext.records];
                    }
                    
                }
                console.log('$records: ',records);

                let thsArray = [
                    { label: 'Profile', apiname: 'Profile' },
                    { label: 'Read', apiname: 'PermissionsRead' },
                    { label: 'Edit', apiname: 'PermissionsEdit' },
                    { label: 'Field', apiname: 'Field' }
                ];
                let i = 0;
                let _records = [];
                
                while(i < records.length){
                    if(records[i].Field == copiedText){
                        _records.push({
                            Field: records[i].Field,
                            Profile: records[i].Parent.Profile.Name,
                            PermissionsRead: records[i].PermissionsRead ? '&#10003;' : '&#10540;',
                            PermissionsEdit: records[i].PermissionsEdit ? '&#10003;' : '&#10540;'
                        });
                    }
                    i++;
                }
                console.log('$thsArray: ',thsArray);
                console.log('$_records: ',_records);
                generateRecordsTable(_records, thsArray);
                removeSpin(_this);
            }
        }
    }else if(button == 'FLS PermissionSets'){
        // copiedText = 'Account.Total_Amount__c';
        // copiedText = 'SBQQ__Quote__c.p66_DTW__c';
        let textArray = copiedText.split('.');
        if(textArray.length == 2){
            addSpin(_this);
            let query = `SELECT+Id,Field,PermissionsEdit,PermissionsRead,ParentId,Parent.Name+FROM+FieldPermissions+Where+Parent.ProfileId+=+null+And+SobjectType+=+'${textArray[0]}'`;
            const response = await fetchRecord(query);
            console.log('$response:', response);
            if(response.errorCode){
                generateSuccessAndFailedTable(response);
                removeSpin(_this);
            }else{
                let records = response.records;
                console.log('$records: ',records);
                if(response.nextRecordsUrl){
                    let responseNext = await fetchNextRecords(response.nextRecordsUrl);
                    console.log('$responseNext_1: ',responseNext);
                    records = [...records, ...responseNext.records];

                    while(responseNext.nextRecordsUrl){
                        responseNext = await fetchNextRecords(responseNext.nextRecordsUrl);
                        console.log('$responseNext_Loop: ',responseNext);
                        records = [...records, ...responseNext.records];
                    }
                    
                }
                console.log('$records: ',records);

                let thsArray = [
                    { label: 'PermissionSet', apiname: 'Profile' },
                    { label: 'Read', apiname: 'PermissionsRead' },
                    { label: 'Edit', apiname: 'PermissionsEdit' },
                    { label: 'Field', apiname: 'Field' }
                ];
                let i = 0;
                let _records = [];
                
                while(i < records.length){
                    if(records[i].Field == copiedText){
                        _records.push({
                            Field: records[i].Field,
                            Profile: records[i].Parent.Name,
                            PermissionsRead: records[i].PermissionsRead ? '&#10003;' : '&#10540;',
                            PermissionsEdit: records[i].PermissionsEdit ? '&#10003;' : '&#10540;'
                        });
                    }
                    i++;
                }
                console.log('$thsArray: ',thsArray);
                console.log('$_records: ',_records);
                generateRecordsTable(_records, thsArray);
                removeSpin(_this);
            }
        }
    }else if(button == 'Complete Signature'){
        // let id = 'a1jO800000ZjgLVIAZ';
        if(idCheck(copiedText) && copiedText.startsWith('a1j')){
            let code = `
                update new SBQQ__Quote__c(
                    Id = '${copiedText}',
                    SBQQ__Status__c = 'ALM Request Approved',
                    p66_Signature_Completed__c = true,
                    p66_Economic_Model_Length_months__c = 1
                );
            `;
            executeAnonymousHandle(_this, code);
        }
    }else if(button == 'Complete Opportunity'){
        // let id = '006TH00000CmYBmYAN';
        if(idCheck(copiedText) && copiedText.startsWith('006')){
            let code = `
                update new Opportunity(
                    Id = '${copiedText}',
                    SBQQ__Ordered__c = true,
                    SBQQ__Contracted__c = true
                );
            `;
            executeAnonymousHandle(_this, code);
        }
    }else if(button == 'Undo Opportunity'){
        // let id = '006TH00000CmYBmYAN';
        if(idCheck(copiedText) && copiedText.startsWith('006')){
            let code = `
                update new Opportunity(
                    Id = '${copiedText}',
                    SBQQ__Ordered__c = false,
                    SBQQ__Contracted__c = false
                );
            `;
            executeAnonymousHandle(_this, code);
        }
    }else if(button == 'Abort Jobs'){
        addSpin(_this);
        let code = `
            for(CronTrigger cr : [SELECT Id FROM CronTrigger Where CronJobDetail.Name Like '%Contract Generation Info%']){
                System.abortJob(cr.Id);
            }
        `;
        executeAnonymousHandle(_this, code);
    }else if(button == 'Draft Quote'){
        // let id = 'a1jO800000ZjgLVIAZ';
        if(idCheck(copiedText) && copiedText.startsWith('a1j')){
            let code = `
                update new SBQQ__Quote__c(
                    Id = '${copiedText}',
                    SBQQ__Status__c = 'Draft',
                    p66_Signature_Completed__c = false
                );
            `;
            executeAnonymousHandle(_this, code);
        }
    }else if(button == 'Trace Flags'){
        addSpin(_this);
        let query = `SELECT+Id,LogType,TracedEntity.Name,CreatedBy.Name,StartDate,ExpirationDate,DebugLevel.DeveloperName+FROM+TraceFlag+Order+By+CreatedBy.Name`;
        const response = await fetchRecord(query,true);
        console.log('$response:', response);
        if(response.errorCode){
            generateSuccessAndFailedTable(response);
            removeSpin(_this);
        }else{
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
                    rowColor: (checkDate(rec.StartDate) || checkDate(rec.ExpirationDate)) ? '#dfffdf' : ''
                };
            });
            let thsArray = [
                { label: 'Name', apiname: 'Name' },
                { label: 'Log Type', apiname: 'LogType' },
                { label: 'Requested By', apiname: 'RequestedBy' },
                { label: 'Start Date', apiname: 'StartDate' },
                { label: 'Expiration Date', apiname: 'ExpirationDate' },
                { label: 'DebugLevel', apiname: 'DebugLevel' },
                { label: '', apiname: 'Button' },
            ];
            generateRecordsTable(records, thsArray);
            removeSpin(_this);
        }
    }
}

function checkDate(dateString) {
    const givenDate = new Date(dateString);
    console.log('$givenDate: ',givenDate);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    today.setHours(0, 0, 0, 0);
    tomorrow.setHours(0, 0, 0, 0);
    givenDate.setHours(0, 0, 0, 0);

    return givenDate.getTime() === today.getTime() || givenDate.getTime() === tomorrow.getTime();
}

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

function getConvertedDateTime_DateFirst(dateTimeString){
    let date_time = Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', day: '2-digit', month: '2-digit',year: 'numeric', hour: '2-digit', minute: '2-digit'}).format(new Date(dateTimeString));
    return date_time.toUpperCase();
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

function generateRecordsTable(records, thsArray){
    
    $('.body').addClass('blur');
    $('.small_popup_1').removeClass('hide');
    $('.small_popup_1_box_heading_div').text('SUCCESS');
    $('.small_popup_1_box_heading_div').html('SUCCESS&nbsp;&nbsp;<i class="fa fa-check" aria-hidden="true"></i>');
    $('.small_popup_1_box_heading_div').removeClass('error_class');
    $('.small_popup_1_box_heading_div').addClass('success_class');

    let ths = `
        <th class="th_1">
            
        </th>
    `;

    thsArray.forEach(val => {
        ths += `
            <th class="th_1">
                ${val.label}
            </th>
        `;
    });
    
    let trs = '';
    records.forEach((rec, indx) => {
        let tds = `
            <td class="td_1 td_1_gray">
                ${indx + 1}
            </td>
        `;
        thsArray.forEach(th => {
            tds += `
                <td class="td_1">
                    ${getParsedValue(rec[th.apiname])}
                </td>
            `;
        });
        let rowStyle = '';
        if(rec?.rowColor){
            rowStyle = `style="background-color: ${rec?.rowColor};"`;
        }
        trs += `
            <tr class="tbody_1_tr tbody_1_tr_1" ${rowStyle}>${tds}</tr>
        `;
    });
    $('.thead_1_tr').html(ths);
    $('.tbody_1').html(trs);
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
//a1jO800000HPs3RIAT
function executeAnonymousHandle(_this, code){
    addSpin(_this);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + sessionId);
    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    const endpoint = `${baseUrl}/services/data/v60.0/tooling/executeAnonymous/?anonymousBody=${encodeURIComponent(code)}`;
    fetch(endpoint, requestOptions).then(response => response.json()).then(data => {
        console.log('$data-: ', data);
        generateSuccessAndFailedTable(data);
        removeSpin(_this);
    }).catch(error => {
        console.log('$API: error', error);
    });
}

async function fetchRecord(query, isTooling) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + sessionId);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    try{
        const response = await fetch(baseUrl + `/services/data/v60.0/${isTooling ? 'tooling/' : ''}query?q=`+query, requestOptions);
        if(!response.ok) {
            return { isError: true, name: response.status, message: response.statusText, stack: response.type };
        }
        const result = await response.json();
        return result;
    }catch(error){
        return { isError: true, name: error.name, message: error.message, stack: error.stack };
    }
}
async function fetchNextRecords(nextrecordspath) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + sessionId);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    try{
        const response = await fetch(baseUrl + nextrecordspath, requestOptions);
        if(!response.ok) {
            return { isError: true, name: response.status, message: response.statusText, stack: response.type };
        }
        const result = await response.json();
        return result;
    }catch(error){
        return { isError: true, name: error.name, message: error.message, stack: error.stack };
    }
}

function generateSuccessAndFailedTable(data){
    if(data.success){
        $('.body').addClass('blur');
        $('.small_popup_1').removeClass('hide');
        $('.small_popup_1_box_heading_div').text('SUCCESS');
        $('.small_popup_1_box_heading_div').html('SUCCESS&nbsp;&nbsp;<i class="fa fa-check" aria-hidden="true"></i>');
        $('.small_popup_1_box_heading_div').removeClass('error_class');
        $('.small_popup_1_box_heading_div').addClass('success_class');
    }else{
        $('.body').addClass('blur');
        $('.small_popup_1').removeClass('hide');
        $('.small_popup_1_box_heading_div').text('ERROR');
        $('.small_popup_1_box_heading_div').html('ERROR&nbsp;&nbsp;<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>');
        $('.small_popup_1_box_heading_div').addClass('error_class');
        $('.small_popup_1_box_heading_div').removeClass('success_class');
    }

    let properties = Object.keys(data);
    console.log('$properties: ',properties);
    let ths = '';
    let tds = '';
    properties.forEach(prop => {
        if(data[prop] == null){
            return;
        }
        console.log('prop: ',prop);
        ths += `
            <th class="th_1 min-width">
                ${prop}
            </th>
        `;
        tds += `
            <td class="td_1">
                ${data[prop]}
            </td>
        `;
    });
    $('.thead_1_tr').html(ths);
    $('.tbody_1').html(`
        <tr class="tbody_1_tr tbody_1_tr_1">${tds}</tr>
    `);
    
}

$(document).on('click', '.td_1', function (e){
   let _this = $(this);
   let text = _this.text().trim();
   console.log('$text: ',text);
   navigator.clipboard.writeText(text).then(function() {
        console.log('copied : ' + text);
        $('.td_1').css('color','black');
        _this.css('color','#0e509c');
    }, function(err) {
        console.error('error copying');
        // 0i8O80000000JsHIAU
    });
});

function addSpin(_this){
    $(_this).find('i.btn_icon').addClass('fast-spin');
}

function removeSpin(_this){
    $(_this).find('i.btn_icon').removeClass('fast-spin');
}

function idCheck(recordID) {
    const userKeyRegExp = /[a-zA-Z0-9]{15}|[a-zA-Z0-9]{18}/;
    return userKeyRegExp.test(recordID);
}

function copyToCLipboard(_this, value) {
   let text = value;
   navigator.clipboard.writeText(text).then(function() {
      console.log('copied : ' + text);
      removeSpin(_this);
      generateSuccessAndFailedTable({
        success: true,
        copied: text
      });
   }, function(err) {
      removeSpin(_this);
      generateSuccessAndFailedTable({
        success: false,
        error_copying: text
      });
   });
}

function getSalesforceSession() {

  var xmlRequestBody = `<?xml version="1.0" encoding="utf-8" ?>
  <env:Envelope xmlns:env="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:cmd="urn:partner.soap.sforce.com">
      <env:Header/>
      <env:Body>
          <cmd:login>
              <cmd:username>tech@simplifier.com</cmd:username>
              <cmd:password>yourpassword</cmd:password>
          </cmd:login>
      </env:Body>
  </env:Envelope>`;

  var requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "text/xml",
        "SOAPAction": "login"
      },
      body: xmlRequestBody,
      redirect: 'follow'
  };

  fetch("https://login.salesforce.com/services/Soap/u/59.0", requestOptions).then(response => response.text()).then(result => {
      console.log(result);
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(result, "text/xml");

      let recordNodes = xmlDoc.querySelectorAll('result');
      console.log('recordNodes: ', recordNodes);
      recordNodes.forEach(recordNode => {
          console.log('$recordNode: ', recordNode);
          let serverUrl = recordNode.querySelector('serverUrl').textContent;
          let sessionId = recordNode.querySelector('sessionId').textContent;
          console.log('serverUrl: ', serverUrl);
          console.log('sessionId: ', sessionId);
      });
  }).catch(error => {
      console.log('error', error)
  });
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
