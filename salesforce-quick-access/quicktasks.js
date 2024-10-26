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
    Draggable.create('.small_popup_1', {
        handle: '.small_popup_1_box_heading_div'
    });
    //Initialize Connection
    initialize();
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
                delete [Select Id, Name, StartDate, EndDate From RebateProgramPayoutPeriod Where RebateProgramId =:REBATE_PROGRAMM_ID];
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
        let query = `Select+Id,+p66_Month_Number__c,+p66_Actual_Volume_GAL__c,+p66_Contract_Month__c,+p66_Contract_Volume_Summary__r.p66_Year__c,+p66_Contract_Volume_Summary__r.p66_Ship_To__c+From+p66_Actual_Volume__c+Where+p66_Contract_Volume_Summary__c+IN+(SELECT+Id+FROM+p66_Contract_Volume_Summary__c+Where+p66_Ship_To__c+=+'0014x000011uV1HAAU'+AND+p66_Year__c+=+'2024'+And+p66_Product__c+=+'Gas')+And+p66_Month_Number__c+IN+(1,2,3)+Order+By+p66_Month_Number__c+Asc`;
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
        let query = `Select+Id,+p66_Month_Number__c,+p66_Actual_Volume_GAL__c,+p66_Contract_Month__c,+p66_Contract_Volume_Summary__r.p66_Year__c,+p66_Contract_Volume_Summary__r.p66_Ship_To__c+From+p66_Actual_Volume__c+Where+p66_Contract_Volume_Summary__c+IN+(SELECT+Id+FROM+p66_Contract_Volume_Summary__c+Where+p66_Ship_To__c+=+'0014x000011uV1HAAU'+AND+p66_Year__c+=+'2024'+And+p66_Product__c+=+'Gas')+And+p66_Month_Number__c+IN+(4,5,6)+Order+By+p66_Month_Number__c+Asc`;
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
        let query = `Select+Id,+p66_Month_Number__c,+p66_Actual_Volume_GAL__c,+p66_Contract_Month__c,+p66_Contract_Volume_Summary__r.p66_Year__c,+p66_Contract_Volume_Summary__r.p66_Ship_To__c+From+p66_Actual_Volume__c+Where+p66_Contract_Volume_Summary__c+IN+(SELECT+Id+FROM+p66_Contract_Volume_Summary__c+Where+p66_Ship_To__c+=+'0014x000011uV1HAAU'+AND+p66_Year__c+=+'2024'+And+p66_Product__c+=+'Gas')+And+p66_Month_Number__c+IN+(7,8,9)+Order+By+p66_Month_Number__c+Asc`;
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
        let query = `Select+Id,+p66_Month_Number__c,+p66_Actual_Volume_GAL__c,+p66_Contract_Month__c,+p66_Contract_Volume_Summary__r.p66_Year__c,+p66_Contract_Volume_Summary__r.p66_Ship_To__c+From+p66_Actual_Volume__c+Where+p66_Contract_Volume_Summary__c+IN+(SELECT+Id+FROM+p66_Contract_Volume_Summary__c+Where+p66_Ship_To__c+=+'0014x000011uV1HAAU'+AND+p66_Year__c+=+'2024'+And+p66_Product__c+=+'Gas')+And+p66_Month_Number__c+IN+(10,11,12)+Order+By+p66_Month_Number__c+Asc`;
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
            let query = `Select+p66_Rebate_Rate_CPG__c,+p66_Product_category__c,+p66_Base_Price__c,+p66_Self_AM_Max_Period_Volume__c,+p66_Quote__r.p66_Gas_Avgas_GLS_YR1__c,+p66_Quote__r.p66_Diesel_Jet_GLS_YR1__c+From+RebateProgram+Where+Id+=+'${copiedText}'+LIMIT+1`;
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
            let query = `Select+p66_Period_Program_Year__c,p66_Qtrly_Rebate_Volume_Cap__c,p66_Period_Program_Quarter__c,p66_Self_AM_Qtrly_Interest__c,p66_Self_AM_Qtrly_Principal__c,p66_Self_AM_Qtrly_Loan_Balance__c,p66_Actual_quantity__c,p66_Ramp_Up_Max_Period_Volume__c,p66_Self_AM_Qtrly_Rebate__c,p66_Excess_Rebate__c+From+RebateProgramMemberPayout+Where+Period.RebateProgramId+=+'${copiedText}'+And+p66_Period_Program_Year__c+!=+null+And+p66_Trueup__c+=+False+Order+By+Period.StartDate+Asc`;
            const response = await fetchRecord(query);
            console.log('$response:', response);
            if(response.errorCode){
                generateSuccessAndFailedTable(response);
                removeSpin(_this);
            }else{
                let thsArray = [
                    { label: 'Year', apiname: 'p66_Period_Program_Year__c' },
                    { label: 'RU_MaxPV', apiname: 'p66_Ramp_Up_Max_Period_Volume__c' },
                    { label: 'Quantity', apiname: 'p66_Actual_quantity__c' },
                    { label: 'Quarter', apiname: 'p66_Period_Program_Quarter__c' },
                    { label: 'Interest', apiname: 'p66_Self_AM_Qtrly_Interest__c' },
                    { label: 'Principal', apiname: 'p66_Self_AM_Qtrly_Principal__c' },
                    { label: 'Loan Balance', apiname: 'p66_Self_AM_Qtrly_Loan_Balance__c' },
                    { label: 'Qtrly Rebate', apiname: 'p66_Self_AM_Qtrly_Rebate__c' },
                    { label: 'Rebate Cap', apiname: 'p66_Qtrly_Rebate_Volume_Cap__c' },
                    { label: 'Excess Rebate', apiname: 'p66_Excess_Rebate__c' }
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
        let code = `
            Opportunity opportunityObj = new Opportunity(
                p66_Business_Unit__c = 'Marketing',
                StageName = 'Qualification',
                p66_Channel_of_Trade__c = 'Branded - Marketer',
                CloseDate = System.today().addMonths(3),
                p66_Sales_District__c = 'a0hO8000004UHPJIA4',
                AccountId = '0014x000011uUpKAAU',
                RecordTypeId = '0124x000001lxoBAAQ'
            );
            insert opportunityObj;
            System.debug(opportunityObj.Id);


            SBQQ__Quote__c quote = new SBQQ__Quote__c(
                RecordTypeId = '0124x000001lxh3AAA',
                SBQQ__Account__c = '0014x000011uUpKAAU',
                SBQQ__StartDate__c = Date.valueOf('2024-01-01'),
                SBQQ__EndDate__c = Date.valueOf('2034-12-31'),
                SBQQ__Opportunity2__c = opportunityObj.Id,
                p66_Evergreen__c = false,
                p66_Business_Unit__c = 'Marketing',
                p66_Channel_of_Trade__c = 'Branded - Marketer',
                SBQQ__Primary__c = true,
                p66_Agreement_Type1__c = 'ORSA',
                SBQQ__PrimaryContact__c = '003Rm0000053QwAIAU',
                p66_End_Date__c = Date.valueOf('2034-12-31')
            );
            insert quote;
            System.debug(quote.Id);
        `;
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
            let data = {success : true, Quote: `https://phillips66enterprise--wipro.sandbox.lightning.force.com/lightning/r/SBQQ__Quote__c/${record.Id}/view`, CreatedDate: getConvertedDateTime_short(record.CreatedDate)};
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
    }
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
        trs += `
            <tr class="tbody_1_tr tbody_1_tr_1">${tds}</tr>
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