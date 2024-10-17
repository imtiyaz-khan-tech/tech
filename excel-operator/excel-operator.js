/*
    *Functionality is if you want to prepare diffrent column excel with provided excel: rPUpdateData(columsArray)
*/
let excelData1;
let excelData2;
let excelJson_top = null;
let excelJson_bottom = null;
$(document).ready(function() {
    console.clear();
    // $('.txt_area').val('__Id\np66_Ship_To_Account__c');
    /* let data =``;
    navigator.clipboard.writeText(data).then(function() {
        pasteExcel1();
     }, function(err) {
        console.error('error copying');
     }); */
});
$(document).on('click', '.btn', function(e) {
    let btn = $(this).data('btn');
    if (btn == 'Paste Excel - 1') {
        pasteExcel1();
    } else if (btn == 'Paste Excel - 2') {
        pasteExcel2();
    } else if (btn == 'Paste Special-1') {
        pasteSpecial1();
    } else if (btn == 'Paste Special-2') {
        pasteSpecial2();
    } else if (btn == 'Clear Top') {
        clearTop();
    } else if (btn == 'Clear Bottom') {
        clearBottom();
    } else if (btn == 'Blank') {
        blankAll();
    } else if (btn == 'Include Columns') {
        let columsArray = $('.txt_area').val().split('\n');
        includeColumns(columsArray);
    } else if (btn == 'Exclude Columns') {
        let columsArray = $('.txt_area').val().split('\n');
        excludeColumns(columsArray);
    } else if (btn == 'Copy Columns') {
        let columsArray = $('.txt_area').val().split('\n');
        copyColumns(columsArray, $(this));
    } else if (btn == 'Concat Columns') {
        let columsArray = $('.txt_area').val().split('\n');
        concatColumns(columsArray, $(this));
    } else if (btn == 'Format Date') {
        formateDateColumn($('.inp_formatted_date').val());
    } else if (btn == 'download-top') {
        var wb = XLSX.utils.table_to_book(document.getElementById("table_top_id"));
        XLSX.writeFile(wb, "SheetJSTable.xlsx");
    } else if (btn == 'download-bottom') {
        var wb = XLSX.utils.table_to_book(document.getElementById("table_bottom_id"));
        XLSX.writeFile(wb, "SheetJSTable.xlsx");
    }else if (btn == 'Copy Top') {
        let html = $('.cleftdvs_top').html();
        html = html.replace(/(<td\b[^>]*?)\s*style="[^"]*"/g, '$1');
        const blob = new Blob([html], { type: "text/html" });
        navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
        let label = $(this).text();
        $(this).text('Copied.');
        setTimeout( () => {
            $(this).text(label);
        }, 1000);
    } else if (btn == 'Copy Bottom') {
        let html = $('.cleftdvs_bottom').html();
        html = html.replace(/(<td\b[^>]*?)\s*style="[^"]*"/g, '$1');
        const blob = new Blob([html], { type: "text/html" });
        navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
        let label = $(this).text();
        $(this).text('Copied.');
        setTimeout( () => {
            $(this).text(label);
        }, 1000);
    } else if (btn == 'Copy Formatted') {
        let html = $('.cleftdvs_bottom').html();
        copyToCLipboard_TimeOut(html, $(this), $(this).text().trim(), 1000, 'Copied.');
    } else if (btn == 'Create Map') {
        let columsArray = $('.txt_area').val().split('\n');
        createMap(columsArray);
    } else if (btn == 'Fill ContractIds') {
        fillContractIds();
    } else if (btn == 'Fill ContractIds Prod') {
        fillContractIdsProd();
    } else if (btn == 'Fill Ship To And Sold To') {
        fillShipToAndSoldTo();
    } else if (btn == 'Highlight Duplicates') {
        highlightDuplicates();
    } else if (btn == 'Fill Data-PP') {
        fillDataPP();
    } else if (btn == 'Fill Columns-PP') {
        fillColumnsPP();
    } else if (btn == 'Fill Data-MP') {
        fillDataMP();
    } else if (btn == 'Fill Columns-MP') {
        fillColumnsMP();
    } else if (btn == 'Fill Data-CB') {
        fillDataCB();
    } else if (btn == 'Fill Columns-CB') {
        fillColumnsCB();
    } else if (btn == 'RP Update Data') {
        let columsArray = $('.txt_area').val().split('\n');
        rPUpdateData(columsArray);
    } else if (btn == 'Fill Members') {
        let columsArray = $('.txt_area').val().split('\n');
        fillMembers(columsArray);
    } else if (btn == 'Get ALI Columns') {
        getALIColumns();
    } else if (btn == 'Fill ALI Columns') {
        fillALIColumns();
    } else if (btn == 'ID TO ALI') {
        fillIDTOALI();
    }
});
function fillMembers(columsArray){
    columsArray = columsArray.filter(Boolean);
    if(columsArray.length == 2){
        let column1 = columsArray.at(0);
        let column2 = columsArray.at(1);
        console.log('$column1: ',column1);
        console.log('$column2: ',column2);
        
        let i = 0;
        let ths = '';
        let columns = ['ID', 'RebateProgramId', 'p66_IsMigrated__c', 'AccountId', 'MemberStatus', 'CreatedById', 'Name'];
        while (i < columns.length) {
            let col = columns[i];
            ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
            i++;
        }
        console.log('$ths: ',ths);

        i = 0;
        let trs = '';
        while(i < excelJson_top.length){
            let item = excelJson_top[i];
            let j = 0;
            let tds = '';
            while(j < columns.length){
                let col = columns[j];
                if(col == 'ID'){
                    tds += `<td class="b_x_td"></td>`;
                }else if(col == 'RebateProgramId'){
                    tds += `<td class="b_x_td">${item[column1]}</td>`;
                }else if(col == 'p66_IsMigrated__c'){
                    tds += `<td class="b_x_td">TRUE</td>`;
                }else if(col == 'AccountId'){
                    tds += `<td class="b_x_td">${item[column2]}</td>`;
                }else if(col == 'MemberStatus'){
                    tds += `<td class="b_x_td">Active</td>`;
                }else if(col == 'CreatedById'){
                    tds += `<td class="b_x_td">0054x000007ae7TAAQ</td>`;
                }else if(col == 'Name'){
                    //Select Id, p66_Rebate_Program__r.Name From Product2 Where p66_Rebate_Program__c != null
                    tds += `<td class="b_x_td">Member-${productIdAndRebateProgramNameMap.get(item['p66_Product__c'])}</td>`;
                }
                j++;
            }
            trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
            i++;
        }
        let table = `
            <table class="b_x_table" id="table_bottom_id">
                <thead class="b_x_thead">
                    <tr  class="b_x_tr b_x_th_tr">
                        ${ths}
                    </tr>
                </thead>
                <tbody class="b_x_body">
                    ${trs}
                </tbody>
            </table>
        `;
        $('.cleftdvs_bottom').html(table);
        let html = $('.cleftdvs_bottom').html();
        copyToCLipboard(html);
    }
}

function rPUpdateData(columsArray){
    columsArray = columsArray.filter(Boolean);
    if(columsArray.length == 2){
        let column1 = columsArray.at(0);
        let column2 = columsArray.at(1);
        console.log('$column1: ',column1);
        console.log('$column2: ',column2);
        
        let i = 0;
        let ths = '';
        let columns = ['Id','p66_Rebate_Program_Member__c','p66_Rebate_Program_Status__c'];
        while (i < columns.length) {
            let col = columns[i];
            ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
            i++;
        }
        console.log('$ths: ',ths);

        i = 0;
        let trs = '';
        while(i < excelJson_top.length){
            let item = excelJson_top[i];
            let j = 0;
            let tds = '';
            while(j < columns.length){
                let col = columns[j];
                if(col == 'p66_Rebate_Program_Member__c'){
                    tds += `<td class="b_x_td">${item[column1]}</td>`;
                }else if(col == 'Id'){
                    tds += `<td class="b_x_td">${item[column2]}</td>`;
                }else if(col == 'p66_Rebate_Program_Status__c'){
                    tds += `<td class="b_x_td">Active</td>`;
                }
                j++;
            }
            trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
            i++;
        }
        let table = `
            <table class="b_x_table" id="table_bottom_id">
                <thead class="b_x_thead">
                    <tr  class="b_x_tr b_x_th_tr">
                        ${ths}
                    </tr>
                </thead>
                <tbody class="b_x_body">
                    ${trs}
                </tbody>
            </table>
        `;
        $('.cleftdvs_bottom').html(table);
        let html = $('.cleftdvs_bottom').html();
        copyToCLipboard(html);
    }
}

function fillColumnsMP(){
    console.log('$excelJson_top: ',excelJson_top);
    console.log('$excelJson_bottom: ',excelJson_bottom);

    let columns = Object.keys(excelJson_bottom[0]);
    console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    while(i < excelJson_bottom.length){
        let item = excelJson_bottom[i];
        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            let value = item[col];
            let foundItem = excelJson_top.find(topItem => {
                return topItem['Apttus__AgreementLineItem__Id']+topItem['Formatted'] ==  item['p66_Legacy_Agreement_Line_Item_ID__c']+item['Formatted'];
            });
            console.log('$foundItem: ',foundItem);
            if(col == 'p66_IsMigrated__c'){
                value = 'TRUE';
            }else if(col == 'p66_Legacy_Program_Payment_ID__c'){
                value = foundItem ? foundItem['PP_ID'] : '#N/A';
            }else if(col == 'p66_Actual_quantity__c'){
                value = foundItem ? foundItem['ARS_Apttus_Rebate__ActualQuantity'] : '#N/A';
            }else if(col == 'p66_Entry_Type__c'){
                value = foundItem ? foundItem['PP_Entry_Type__c'] : '#N/A';
            }else if(col == 'p66_Exclude_from_Contractual_Balance__c'){
                value = foundItem ? foundItem['PP_Is_Incld_Contrct_Amrtzn__c'] : '#N/A';
            }else if(col == 'p66_Invoice_Payment_Amount__c'){
                value = foundItem ? foundItem['PP_Payment_Invoice_Amount__c'] : '#N/A';
            }else if(col == 'P66_Payment_Invoice__c'){
                value = foundItem ? foundItem['PP_Payment_Invoice_num'] : '#N/A';
            }else if(col == 'p66_Rate__c'){
                value = foundItem ? foundItem['PP_Rate'] : '#N/A';
            }else if(col == 'P66_Sequence_Number__c'){
                value = foundItem ? foundItem['PP_Sequence_Number'] : '#N/A';
            }else if(col == 'p66_Status__c'){
                value = foundItem ? foundItem['PP_Status'] : '#N/A';
            }else if(col == 'p66_Transaction_Reason__c'){
                value = foundItem ? foundItem['PP_Transaction_Reason'] : '#N/A';
            }else if(col == 'p66_Transaction_Type__c'){
                value = foundItem ? foundItem['PP_Transaction_Type'] : '#N/A';
            }else if(col == 'p66_Treasury_Hold_Pending_Security__c'){
                value = foundItem ? foundItem['PP_Treasury_Hold_Pending_Security'] : '#N/A';
            }else if(col == 'p66_Type__c'){
                value = foundItem ? foundItem['PP_Type'] : '#N/A';
            }else if(col == 'p66_Comments__c'){
                value = foundItem ? foundItem['PP_Comments'] : '#N/A';
            }else if(col == 'p66_Company_Code__c'){
                value = foundItem ? foundItem['AFTN_Company_Code_c'] : '#N/A';
            }else if(col == 'p66_Currency_Code_USD__c'){
                value = foundItem ? foundItem['AFTN_Currency_Code_USD_c'] : '#N/A';
            }else if(col == 'p66_Description__c'){
                value = foundItem ? foundItem['AFTN_Description'] : '#N/A';
            }else if(col == 'p66_Line_Item_Number__c'){
                value = foundItem ? foundItem['AFTN_Line_Item_Number'] : '#N/A';
            }else if(col == 'p66_Material_Code__c'){
                value = foundItem ? foundItem['AFTN_Material_Code'] : '#N/A';
            }else if(col == 'p66_Payment_Terms__c'){
                value = foundItem ? foundItem['AFTN_Payment_Terms'] : '#N/A';
            }else if(col == 'p66_Plant_Code__c'){
                value = foundItem ? foundItem['AFTN_Plant_Code'] : '#N/A';
            }else if(col == 'p66_Legacy_PO_Number__c'){
                value = foundItem ? foundItem['AFTN_PO_Number'] : '#N/A';
            }else if(col == 'p66_SAP_Reference_Type__c'){
                value = foundItem ? foundItem['AFTN_External_Reference_Type'] : '#N/A';
            }else if(col == 'p66_Legacy_SD_AFTN_ID__c'){
                value = foundItem ? foundItem['AFTN__ID'] : '#N/A';
            }else if(col == 'p66_Ship_To__c'){
                value = foundItem ? (legacyAccountKeyAndSfIDMap.get(foundItem['AFTN_ShipTo']) ?? '') : '#N/A';
            }else if(col == 'p66_Sold_To__c'){
                value = foundItem ? (legacyAccountKeyAndSfIDMap.get(foundItem['AFTN_SoldTo_c']) ?? '') : '#N/A';
            }else if(col == 'p66_SAP_Status__c'){
                value = foundItem ? foundItem['AFTN_Status'] : '#N/A';
            }else if(col == 'p66_Internal_Transaction_Number__c'){
                value = foundItem ? foundItem['AFTN_Internal_Transaction_Number__c'] : '#N/A';
            }else if(col == 'p66_SAP_External_Reference_Date__c'){
                value = foundItem ? foundItem['AFTN_External_Reference_Dt'] : '#N/A';
                // value = foundItem ? (foundItem['AFTN_External_Reference_Dt'] ? convertDate(foundItem['AFTN_External_Reference_Dt']) : '') : '#N/A';
            }else if(col == 'p66_Posting_Date__c'){
                value = foundItem ? foundItem['AFTN_Posting_Dt'] : '#N/A';
                // value = foundItem ? (foundItem['AFTN_Posting_Dt'] ? convertDate(foundItem['AFTN_Posting_Dt']) : '') : '#N/A';
            }else if(col == 'P66_Invoice_Payment_Date__c'){
                value = foundItem ? foundItem['PP_Payment_Invoice_Dt__c'] : '#N/A';
                // value = foundItem ? (foundItem['PP_Payment_Invoice_Dt__c'] ? convertDate(foundItem['PP_Payment_Invoice_Dt__c']) : '') : '#N/A';
            }else if(col == 'p66_SF_Contractual_Program_Balance__c'){
                value = foundItem ? foundItem['CAS_Contractual_Balance__c'] : '#N/A';
            }else if(col == 'p66_Legacy_SAP_Quantity__c'){
                value = foundItem ? foundItem['PP_Quantity'] : '#N/A';
            }
            item[col] = getIdelValue(value);
            tds += `<td class="b_x_td">${getIdelValue(value)}</td>`;
            j++;
        }
        trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="b_x_table" id="table_bottom_id">
            <thead class="b_x_thead">
                <tr  class="b_x_tr b_x_th_tr">
                    ${ths}
                </tr>
            </thead>
            <tbody class="b_x_body">
                ${trs}
            </tbody>
        </table>
    `;
    $('.cleftdvs_bottom').html(table);
    console.log('$excelJson_bottom: ',excelJson_bottom);
    //Convert Excel Into Csv Data
    // let csv = Papa.unparse(excelJson_bottom);
    // console.log('$csv: ',csv);

    // Generate TSV string
    const headers = Object.keys(excelJson_bottom[0]);
    const rows = excelJson_bottom.map(obj => headers.map(header => obj[header]).join('\t'));
    let tsv = [headers.join('\t'), ...rows].join('\n');
    console.log('$tsv: ',tsv);
    copyToCLipboard(tsv);
}

function convertDate(inputDate) {
    // Split the input date string
    let dateParts = inputDate.split("/");
    
    // Extract month, day, and year
    let month = parseInt(dateParts[0], 10) - 1; // Month is 0-indexed in JavaScript
    let day = parseInt(dateParts[1], 10);
    let year = parseInt(dateParts[2], 10);
    
    // Create a new Date object using UTC
    let date = new Date(Date.UTC(year, month, day));

    // Extract the date in ISO format and slice only the date part (YYYY-MM-DD)
    return date.toISOString().split('T')[0];
}

function fillColumnsPP(){
    console.log('$excelJson_top: ',excelJson_top);
    console.log('$excelJson_bottom: ',excelJson_bottom);

    let columns = Object.keys(excelJson_bottom[0]);
    console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    while(i < excelJson_bottom.length){
        let item = excelJson_bottom[i];
        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            let value = item[col];
            let foundItem = excelJson_top.find(fi => {
                return fi['ALI__AgreementLineItem__c_Id']+fi['Formatted'] ==  item['p66_Legacy_Agreement_Line_Item_ID__c']+item['Formatted'];
            });
            console.log('$foundItem: ',foundItem);
            if(col == 'p66_IsMigrated__c'){
                value = 'TRUE';
            }else if(col == 'p66_Legacy_Revenue_Schedule_ID__c'){
                value = foundItem ? foundItem['ARS_ID'] : '#N/A';
            }else if(col == 'p66_Comments__c'){
                value = foundItem ? foundItem['ARS_Apttus_Rebate__Comments__c'] : '#N/A';
            }else if(col == 'p66_Payout_Period_Status__c'){
                value = foundItem ? foundItem['op_ARS_Apttus_Rebate__Status__c'] : '#N/A';
            }
            item[col] = getIdelValue(value);
            tds += `<td class="b_x_td">${getIdelValue(value)}</td>`;
            j++;
        }
        trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="b_x_table" id="table_bottom_id">
            <thead class="b_x_thead">
                <tr  class="b_x_tr b_x_th_tr">
                    ${ths}
                </tr>
            </thead>
            <tbody class="b_x_body">
                ${trs}
            </tbody>
        </table>
    `;
    $('.cleftdvs_bottom').html(table);
    console.log('$excelJson_bottom: ',excelJson_bottom);
    //Convert Excel Into Csv Data
    // let csv = Papa.unparse(excelJson_bottom);
    // console.log('$csv: ',csv);

    // Generate TSV string
    const headers = Object.keys(excelJson_bottom[0]);
    const rows = excelJson_bottom.map(obj => headers.map(header => obj[header]).join('\t'));
    let tsv = [headers.join('\t'), ...rows].join('\n');
    console.log('$tsv: ',tsv);
    copyToCLipboard(tsv);
}
function fillColumnsCB(){
    console.log('$excelJson_top: ',excelJson_top);
    console.log('$excelJson_bottom: ',excelJson_bottom);

    let columns = Object.keys(excelJson_bottom[0]);
    console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    while(i < excelJson_bottom.length){
        let item = excelJson_bottom[i];
        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            let value = item[col];
            let foundItem = excelJson_top.find(fi => {
                return fi['op_ALI_ID']+fi['op_CAS_Period_Start_Dt__c'] ==  item['p66_Legacy_AGL_Bundle_ID__c']+item['p66_Contractual_Payout_Date__c'];
            });
            console.log('$foundItem: ',foundItem);
            if(col == 'p66_IsMigrated__c'){
                value = 'TRUE';
            }else if(col == 'p66_Legacy_Contractual_Amort_Schedule__c'){
                value = foundItem ? foundItem['op_CAS_ID'] : '#N/A';
            }else if(col == 'p66_Amortization__c'){
                value = foundItem ? (foundItem['op_CAS_Amortization__c'] != null ? Math.abs(foundItem['op_CAS_Amortization__c']) : foundItem['op_CAS_Amortization__c']) : '#N/A';
            }else if(col == 'p66_Contractual_Program_Balance__c'){
                value = foundItem ? foundItem['op_CAS_Closing_Balance__c'] : '#N/A';
            }else if(col == 'p66_Comments__c'){
                value = foundItem ? foundItem['op_CAS_Comment__c'] : '#N/A';
            }else if(col == 'p66_Opening_Balance__c'){
                value = foundItem ? foundItem['op_CAS_Opening_Balance__c'] : '#N/A';
                }else if(col == 'p66_Status__c'){
                    value = foundItem ? foundItem['op_CAS_Status__c'] : '#N/A';
            }
            item[col] = getIdelValue(value);
            tds += `<td class="b_x_td">${getIdelValue(value)}</td>`;
            j++;
        }
        trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="b_x_table" id="table_bottom_id">
            <thead class="b_x_thead">
                <tr  class="b_x_tr b_x_th_tr">
                    ${ths}
                </tr>
            </thead>
            <tbody class="b_x_body">
                ${trs}
            </tbody>
        </table>
    `;
    $('.cleftdvs_bottom').html(table);
    console.log('$excelJson_bottom: ',excelJson_bottom);
    //Convert Excel Into Csv Data
    // let csv = Papa.unparse(excelJson_bottom);
    // console.log('$csv: ',csv);

    // Generate TSV string
    const headers = Object.keys(excelJson_bottom[0]);
    const rows = excelJson_bottom.map(obj => headers.map(header => obj[header]).join('\t'));
    let tsv = [headers.join('\t'), ...rows].join('\n');
    console.log('$tsv: ',tsv);
    copyToCLipboard(tsv);
}

function fillDataCB(){
    let data =`op_CAS_ID	op_ALI_ID	op_CAS_Amortization__c	op_CAS_Closing_Balance__c	op_CAS_Comment__c	op_CAS_Opening_Balance__c	op_CAS_Status__c	op_ALI_Product_Name	Formatted	op_CAS_Period_Start_Dt__c	op_CAS_Period_End_Dt__c
a4Q7V00006Gjo12UAB	a140e000009A5VsAAK		0		0	Active	BIP Front Loaded Rebate-3	11/1/2022	11/1/2022	11/30/2022
a4Q7V00006Gjo13UAB	a140e000009A5VsAAK	10	0		0	Active	BIP Front Loaded Rebate-3	12/1/2022	12/1/2022	12/31/2022
a4Q7V00006Gjo14UAB	a140e000009A5VsAAK	-234	0		0	Active	BIP Front Loaded Rebate-3	1/1/2023	1/1/2023	1/31/2023
a4Q7V00006Gjo15UAB	a140e000009A5VsAAK	55	0		0	Active	BIP Front Loaded Rebate-3	2/1/2023	2/1/2023	2/28/2023
a4Q7V00006Gjo16UAB	a140e000009A5VsAAK	-766	0		0	Active	BIP Front Loaded Rebate-3	3/1/2023	3/1/2023	3/31/2023
a4Q7V00006Gjo17UAB	a140e000009A5VsAAK	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2023	4/1/2023	4/30/2023
a4Q7V00006Gjo18UAB	a140e000009A5VsAAK	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2023	5/1/2023	5/31/2023
a4Q7V00006Gjo19UAB	a140e000009A5VsAAK	0	0		0	Active	BIP Front Loaded Rebate-3	6/1/2023	6/1/2023	6/30/2023
a4Q7V00006Gjo1AUAR	a140e000009A5VsAAK	0	2502.685		0	Active	BIP Front Loaded Rebate-3	7/1/2023	7/1/2023	7/31/2023
a4Q7V00006Gjo1BUAR	a140e000009A5VsAAK	0	2502.685		2502.685	Active	BIP Front Loaded Rebate-3	8/1/2023	8/1/2023	8/31/2023
a4Q7V00006Gjo1CUAR	a140e000009A5VsAAK	0	2502.685		2502.685	Active	BIP Front Loaded Rebate-3	9/1/2023	9/1/2023	9/30/2023
a4Q7V00006Gjo1DUAR	a140e000009A5VsAAK	0	6949.12		2502.685	Active	BIP Front Loaded Rebate-3	10/1/2023	10/1/2023	10/31/2023
a4Q7V00006Gjo1EUAR	a140e000009A5VsAAK	0	6949.12		6949.12	Active	BIP Front Loaded Rebate-3	11/1/2023	11/1/2023	11/30/2023
a4Q7V00006Gjo1FUAR	a140e000009A5VsAAK	0	6949.12		6949.12	Active	BIP Front Loaded Rebate-3	12/1/2023	12/1/2023	12/31/2023
a4Q7V00006Gjo1GUAR	a140e000009A5VsAAK	0	8609.48		6949.12	Active	BIP Front Loaded Rebate-3	1/1/2024	1/1/2024	1/31/2024
a4Q7V00006Gjo1HUAR	a140e000009A5VsAAK	0	8609.48		8609.48	Active	BIP Front Loaded Rebate-3	2/1/2024	2/1/2024	2/29/2024
a4Q7V00006Gjo1IUAR	a140e000009A5VsAAK	0	8609.48		8609.48	Active	BIP Front Loaded Rebate-3	3/1/2024	3/1/2024	3/31/2024
a4Q7V00006Gjo1JUAR	a140e000009A5VsAAK	0	10387.255		8609.48	Active	BIP Front Loaded Rebate-3	4/1/2024	4/1/2024	4/30/2024
a4Q7V00006Gjo1KUAR	a140e000009A5VsAAK	0	10387.255		10387.255	Active	BIP Front Loaded Rebate-3	5/1/2024	5/1/2024	5/31/2024
a4Q7V00006Gjo1LUAR	a140e000009A5VsAAK	0	10387.255		10387.255	Active	BIP Front Loaded Rebate-3	6/1/2024	6/1/2024	6/30/2024
a4Q7V00006Gjo1MUAR	a140e000009A5VsAAK	0	12268.135		10387.255	Active	BIP Front Loaded Rebate-3	7/1/2024	7/1/2024	7/31/2024
a4Q7V00006Gjo1NUAR	a140e000009A5VsAAK	0	12268.135		12268.135	Active	BIP Front Loaded Rebate-3	8/1/2024	8/1/2024	8/31/2024
a4Q7V00006Gjo1OUAR	a140e000009A5VsAAK	0	12268.135		12268.135	Draft	BIP Front Loaded Rebate-3	9/1/2024	9/1/2024	9/30/2024
a4Q7V00006Gjo1PUAR	a140e000009A5VsAAK	0	12268.135		12268.135	Draft	BIP Front Loaded Rebate-3	10/1/2024	10/1/2024	10/31/2024
a4Q7V00006Gjo1QUAR	a140e000009A5VsAAK	0	12268.135		12268.135	Draft	BIP Front Loaded Rebate-3	11/1/2024	11/1/2024	11/30/2024
a4Q7V00006Gjo1RUAR	a140e000009A5VsAAK	0	12268.135		12268.135	Draft	BIP Front Loaded Rebate-3	12/1/2024	12/1/2024	12/31/2024
a4Q7V00006GjrVQUAZ	a140e000006Ra77AAC	0	0		0	Active	BIP Front Loaded Rebate-3	7/1/2018	7/1/2018	7/31/2018
a4Q7V00006GjrVRUAZ	a140e000006Ra77AAC	0	0		0	Active	BIP Front Loaded Rebate-3	8/1/2018	8/1/2018	8/31/2018
a4Q7V00006GjrVSUAZ	a140e000006Ra77AAC	0	0		0	Active	BIP Front Loaded Rebate-3	9/1/2018	9/1/2018	9/30/2018
a4Q7V00006GjrVTUAZ	a140e000006Ra77AAC	0	0		0	Active	BIP Front Loaded Rebate-3	10/1/2018	10/1/2018	10/31/2018
a4Q7V00006GjrVUUAZ	a140e000006Ra77AAC	0	0		0	Active	BIP Front Loaded Rebate-3	11/1/2018	11/1/2018	11/30/2018
a4Q7V00006GjrVVUAZ	a140e000006Ra77AAC	0	0		0	Active	BIP Front Loaded Rebate-3	12/1/2018	12/1/2018	12/31/2018
a4Q7V00006GjrVWUAZ	a140e000006Ra77AAC	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2019	1/1/2019	1/31/2019
a4Q7V00006GjrVXUAZ	a140e000006Ra77AAC	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2019	2/1/2019	2/28/2019
a4Q7V00006GjrVYUAZ	a140e000006Ra77AAC	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2019	3/1/2019	3/31/2019
a4Q7V00006GjrVZUAZ	a140e000006Ra77AAC	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2019	4/1/2019	4/30/2019
a4Q7V00006GjrVaUAJ	a140e000006Ra77AAC	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2019	5/1/2019	5/31/2019
a4Q7V00006GjrVbUAJ	a140e000006Ra77AAC	0	12099.26		0	Active	BIP Front Loaded Rebate-3	6/1/2019	6/1/2019	6/30/2019
a4Q7V00006GjrVcUAJ	a140e000006Ra77AAC	0	15931.96		12099.26	Active	BIP Front Loaded Rebate-3	7/1/2019	7/1/2019	7/31/2019
a4Q7V00006GjrVdUAJ	a140e000006Ra77AAC	0	15931.96		15931.96	Active	BIP Front Loaded Rebate-3	8/1/2019	8/1/2019	8/31/2019
a4Q7V00006GjrVeUAJ	a140e000006Ra77AAC	0	15931.96		15931.96	Active	BIP Front Loaded Rebate-3	9/1/2019	9/1/2019	9/30/2019
a4Q7V00006GjrVfUAJ	a140e000006Ra77AAC	0	19580.04		15931.96	Active	BIP Front Loaded Rebate-3	10/1/2019	10/1/2019	10/31/2019
a4Q7V00006GjrVgUAJ	a140e000006Ra77AAC	0	19580.04		19580.04	Active	BIP Front Loaded Rebate-3	11/1/2019	11/1/2019	11/30/2019
a4Q7V00006GjrVhUAJ	a140e000006Ra77AAC	0	19580.04		19580.04	Active	BIP Front Loaded Rebate-3	12/1/2019	12/1/2019	12/31/2019
a4Q7V00006GjrViUAJ	a140e000006Ra77AAC	0	24423.5		19580.04	Active	BIP Front Loaded Rebate-3	1/1/2020	1/1/2020	1/31/2020
a4Q7V00006GjrVjUAJ	a140e000006Ra77AAC	0	24423.5		24423.5	Active	BIP Front Loaded Rebate-3	2/1/2020	2/1/2020	2/29/2020
a4Q7V00006GjrVkUAJ	a140e000006Ra77AAC	0	24423.5		24423.5	Active	BIP Front Loaded Rebate-3	3/1/2020	3/1/2020	3/31/2020
a4Q7V00006GjrVlUAJ	a140e000006Ra77AAC	0	24423.5		24423.5	Active	BIP Front Loaded Rebate-3	4/1/2020	4/1/2020	4/30/2020
a4Q7V00006GjrVmUAJ	a140e000006Ra77AAC	0	28091.68		24423.5	Active	BIP Front Loaded Rebate-3	5/1/2020	5/1/2020	5/31/2020
a4Q7V00006GjrVnUAJ	a140e000006Ra77AAC	0	28091.68		28091.68	Active	BIP Front Loaded Rebate-3	6/1/2020	6/1/2020	6/30/2020
a4Q7V00006GjrVoUAJ	a140e000006Ra77AAC	0	32324.42		28091.68	Active	BIP Front Loaded Rebate-3	7/1/2020	7/1/2020	7/31/2020
a4Q7V00006GjrVpUAJ	a140e000006Ra77AAC	0	32324.42		32324.42	Active	BIP Front Loaded Rebate-3	8/1/2020	8/1/2020	8/31/2020
a4Q7V00006GjrVqUAJ	a140e000006Ra77AAC	0	32324.42		32324.42	Active	BIP Front Loaded Rebate-3	9/1/2020	9/1/2020	9/30/2020
a4Q7V00006GjrVrUAJ	a140e000006Ra77AAC	0	32324.42		32324.42	Active	BIP Front Loaded Rebate-3	10/1/2020	10/1/2020	10/31/2020
a4Q7V00006GjrVsUAJ	a140e000006Ra77AAC	0	37890.56		32324.42	Active	BIP Front Loaded Rebate-3	11/1/2020	11/1/2020	11/30/2020
a4Q7V00006GjrVtUAJ	a140e000006Ra77AAC	0	37890.56		37890.56	Active	BIP Front Loaded Rebate-3	12/1/2020	12/1/2020	12/31/2020
a4Q7V00006GjrVuUAJ	a140e000006Ra77AAC	0	42605.42		37890.56	Active	BIP Front Loaded Rebate-3	1/1/2021	1/1/2021	1/31/2021
a4Q7V00006GjrVvUAJ	a140e000006Ra77AAC	0	42605.42		42605.42	Active	BIP Front Loaded Rebate-3	2/1/2021	2/1/2021	2/28/2021
a4Q7V00006GjrVwUAJ	a140e000006Ra77AAC	0	42605.42		42605.42	Active	BIP Front Loaded Rebate-3	3/1/2021	3/1/2021	3/31/2021
a4Q7V00006GjrVxUAJ	a140e000006Ra77AAC	0	47524.78		42605.42	Active	BIP Front Loaded Rebate-3	4/1/2021	4/1/2021	4/30/2021
a4Q7V00006GjrVyUAJ	a140e000006Ra77AAC	0	47524.78		47524.78	Active	BIP Front Loaded Rebate-3	5/1/2021	5/1/2021	5/31/2021
a4Q7V00006GjrVzUAJ	a140e000006Ra77AAC	0	47524.78		47524.78	Active	BIP Front Loaded Rebate-3	6/1/2021	6/1/2021	6/30/2021
a4Q7V00006GjrW0UAJ	a140e000006Ra77AAC	0	52662.4		47524.78	Active	BIP Front Loaded Rebate-3	7/1/2021	7/1/2021	7/31/2021
a4Q7V00006GjrW1UAJ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	8/1/2021	8/1/2021	8/31/2021
a4Q7V00006GjrW2UAJ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	9/1/2021	9/1/2021	9/30/2021
a4Q7V00006GjrW3UAJ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	10/1/2021	10/1/2021	10/31/2021
a4Q7V00006GjrW4UAJ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	11/1/2021	11/1/2021	11/30/2021
a4Q7V00006GjrW5UAJ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	12/1/2021	12/1/2021	12/31/2021
a4Q7V00006GjrW6UAJ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	1/1/2022	1/1/2022	1/31/2022
a4Q7V00006GjrW7UAJ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	2/1/2022	2/1/2022	2/28/2022
a4Q7V00006GjrW8UAJ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	3/1/2022	3/1/2022	3/31/2022
a4Q7V00006GjrW9UAJ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	4/1/2022	4/1/2022	4/30/2022
a4Q7V00006GjrWAUAZ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	5/1/2022	5/1/2022	5/31/2022
a4Q7V00006GjrWBUAZ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	6/1/2022	6/1/2022	6/30/2022
a4Q7V00006GjrWCUAZ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	7/1/2022	7/1/2022	7/31/2022
a4Q7V00006GjrWDUAZ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	8/1/2022	8/1/2022	8/31/2022
a4Q7V00006GjrWEUAZ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	9/1/2022	9/1/2022	9/30/2022
a4Q7V00006GjrWFUAZ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	10/1/2022	10/1/2022	10/31/2022
a4Q7V00006GjrWGUAZ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	11/1/2022	11/1/2022	11/30/2022
a4Q7V00006GjrWHUAZ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	12/1/2022	12/1/2022	12/31/2022
a4Q7V00006GjrWIUAZ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	1/1/2023	1/1/2023	1/31/2023
a4Q7V00006GjrWJUAZ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	2/1/2023	2/1/2023	2/28/2023
a4Q7V00006GjrWKUAZ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	3/1/2023	3/1/2023	3/31/2023
a4Q7V00006GjrWLUAZ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	4/1/2023	4/1/2023	4/30/2023
a4Q7V00006GjrWMUAZ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	5/1/2023	5/1/2023	5/31/2023
a4Q7V00006GjrWNUAZ	a140e000006Ra77AAC	0	52662.4		52662.4	Active	BIP Front Loaded Rebate-3	6/1/2023	6/1/2023	6/30/2023
a4Q7V00006GjrWOUAZ	a140e000006Ra77AAC	877.7066667	51784.69333		52662.4	Active	BIP Front Loaded Rebate-3	7/1/2023	7/1/2023	7/31/2023
a4Q7V00006GjrWPUAZ	a140e000006Ra77AAC	877.7066667	50906.98667		51784.69333	Active	BIP Front Loaded Rebate-3	8/1/2023	8/1/2023	8/31/2023
a4Q7V00006GjrWQUAZ	a140e000006Ra77AAC	877.7066667	50029.28		50906.98667	Active	BIP Front Loaded Rebate-3	9/1/2023	9/1/2023	9/30/2023
a4Q7V00006GjrWRUAZ	a140e000006Ra77AAC	877.7066667	49151.57333		50029.28	Active	BIP Front Loaded Rebate-3	10/1/2023	10/1/2023	10/31/2023
a4Q7V00006GjrWSUAZ	a140e000006Ra77AAC	877.7066667	48273.86667		49151.57333	Active	BIP Front Loaded Rebate-3	11/1/2023	11/1/2023	11/30/2023
a4Q7V00006GjrWTUAZ	a140e000006Ra77AAC	877.7066667	47396.16		48273.86667	Active	BIP Front Loaded Rebate-3	12/1/2023	12/1/2023	12/31/2023
a4Q7V00006GjrWUUAZ	a140e000006Ra77AAC	877.7066667	46518.45333		47396.16	Active	BIP Front Loaded Rebate-3	1/1/2024	1/1/2024	1/31/2024
a4Q7V00006GjrWVUAZ	a140e000006Ra77AAC	877.7066667	45640.74667		46518.45333	Active	BIP Front Loaded Rebate-3	2/1/2024	2/1/2024	2/29/2024
a4Q7V00006GjrWWUAZ	a140e000006Ra77AAC	877.7066667	44763.04		45640.74667	Active	BIP Front Loaded Rebate-3	3/1/2024	3/1/2024	3/31/2024
a4Q7V00006GjrWXUAZ	a140e000006Ra77AAC	877.7066667	43885.33333		44763.04	Active	BIP Front Loaded Rebate-3	4/1/2024	4/1/2024	4/30/2024
a4Q7V00006GjrWYUAZ	a140e000006Ra77AAC	877.7066667	43007.62667		43885.33333	Active	BIP Front Loaded Rebate-3	5/1/2024	5/1/2024	5/31/2024
a4Q7V00006GjrWZUAZ	a140e000006Ra77AAC	877.7066667	42129.92		43007.62667	Active	BIP Front Loaded Rebate-3	6/1/2024	6/1/2024	6/30/2024
a4Q7V00006GjrWaUAJ	a140e000006Ra77AAC	877.7066667	41252.21333		42129.92	Active	BIP Front Loaded Rebate-3	7/1/2024	7/1/2024	7/31/2024
a4Q7V00006GjrWbUAJ	a140e000006Ra77AAC	877.7066667	40374.50667		41252.21333	Active	BIP Front Loaded Rebate-3	8/1/2024	8/1/2024	8/31/2024
a4Q7V00006GjrWcUAJ	a140e000006Ra77AAC	877.7066667	39496.8		40374.50667	Draft	BIP Front Loaded Rebate-3	9/1/2024	9/1/2024	9/30/2024
a4Q7V00006GjrWdUAJ	a140e000006Ra77AAC	877.7066667	38619.09333		39496.8	Draft	BIP Front Loaded Rebate-3	10/1/2024	10/1/2024	10/31/2024
a4Q7V00006GjrWeUAJ	a140e000006Ra77AAC	877.7066667	37741.38667		38619.09333	Draft	BIP Front Loaded Rebate-3	11/1/2024	11/1/2024	11/30/2024
a4Q7V00006GjrWfUAJ	a140e000006Ra77AAC	877.7066667	36863.68		37741.38667	Draft	BIP Front Loaded Rebate-3	12/1/2024	12/1/2024	12/31/2024
a4Q7V00006GkGadUAF	a140e000008yefrAAA	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2020	2/1/2020	2/29/2020
a4Q7V00006GkGaeUAF	a140e000008yefrAAA	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2020	3/1/2020	3/31/2020
a4Q7V00006GkGafUAF	a140e000008yefrAAA	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2020	4/1/2020	4/30/2020
a4Q7V00006GkGagUAF	a140e000008yefrAAA	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2020	5/1/2020	5/31/2020
a4Q7V00006GkGahUAF	a140e000008yefrAAA	0	0		0	Active	BIP Front Loaded Rebate-3	6/1/2020	6/1/2020	6/30/2020
a4Q7V00006GkGaiUAF	a140e000008yefrAAA	0	1991.865		0	Active	BIP Front Loaded Rebate-3	7/1/2020	7/1/2020	7/31/2020
a4Q7V00006GkGajUAF	a140e000008yefrAAA	0	1991.865		1991.865	Active	BIP Front Loaded Rebate-3	8/1/2020	8/1/2020	8/31/2020
a4Q7V00006GkGakUAF	a140e000008yefrAAA	0	1991.865		1991.865	Active	BIP Front Loaded Rebate-3	9/1/2020	9/1/2020	9/30/2020
a4Q7V00006GkGalUAF	a140e000008yefrAAA	0	3955.425		1991.865	Active	BIP Front Loaded Rebate-3	10/1/2020	10/1/2020	10/31/2020
a4Q7V00006GkGamUAF	a140e000008yefrAAA	0	3955.425		3955.425	Active	BIP Front Loaded Rebate-3	11/1/2020	11/1/2020	11/30/2020
a4Q7V00006GkGanUAF	a140e000008yefrAAA	0	3955.425		3955.425	Active	BIP Front Loaded Rebate-3	12/1/2020	12/1/2020	12/31/2020
a4Q7V00006GkGaoUAF	a140e000008yefrAAA	0	5795.685		3955.425	Active	BIP Front Loaded Rebate-3	1/1/2021	1/1/2021	1/31/2021
a4Q7V00006GkGapUAF	a140e000008yefrAAA	0	5795.685		5795.685	Active	BIP Front Loaded Rebate-3	2/1/2021	2/1/2021	2/28/2021
a4Q7V00006GkGaqUAF	a140e000008yefrAAA	0	5795.685		5795.685	Active	BIP Front Loaded Rebate-3	3/1/2021	3/1/2021	3/31/2021
a4Q7V00006GkGarUAF	a140e000008yefrAAA	0	7437.9		5795.685	Active	BIP Front Loaded Rebate-3	4/1/2021	4/1/2021	4/30/2021
a4Q7V00006GkGasUAF	a140e000008yefrAAA	0	7437.9		7437.9	Active	BIP Front Loaded Rebate-3	5/1/2021	5/1/2021	5/31/2021
a4Q7V00006GkGatUAF	a140e000008yefrAAA	0	7437.9		7437.9	Active	BIP Front Loaded Rebate-3	6/1/2021	6/1/2021	6/30/2021
a4Q7V00006GkGauUAF	a140e000008yefrAAA	0	9449.22		7437.9	Active	BIP Front Loaded Rebate-3	7/1/2021	7/1/2021	7/31/2021
a4Q7V00006GkGavUAF	a140e000008yefrAAA	0	9449.22		9449.22	Active	BIP Front Loaded Rebate-3	8/1/2021	8/1/2021	8/31/2021
a4Q7V00006GkGawUAF	a140e000008yefrAAA	0	9449.22		9449.22	Active	BIP Front Loaded Rebate-3	9/1/2021	9/1/2021	9/30/2021
a4Q7V00006GkGaxUAF	a140e000008yefrAAA	0	11402.145		9449.22	Active	BIP Front Loaded Rebate-3	10/1/2021	10/1/2021	10/31/2021
a4Q7V00006GkGayUAF	a140e000008yefrAAA	0	11402.145		11402.145	Active	BIP Front Loaded Rebate-3	11/1/2021	11/1/2021	11/30/2021
a4Q7V00006GkGazUAF	a140e000008yefrAAA	0	11402.145		11402.145	Active	BIP Front Loaded Rebate-3	12/1/2021	12/1/2021	12/31/2021
a4Q7V00006GkGb0UAF	a140e000008yefrAAA	0	13239.645		11402.145	Active	BIP Front Loaded Rebate-3	1/1/2022	1/1/2022	1/31/2022
a4Q7V00006GkGb1UAF	a140e000008yefrAAA	0	13239.645		13239.645	Active	BIP Front Loaded Rebate-3	2/1/2022	2/1/2022	2/28/2022
a4Q7V00006GkGb2UAF	a140e000008yefrAAA	0	13239.645		13239.645	Active	BIP Front Loaded Rebate-3	3/1/2022	3/1/2022	3/31/2022
a4Q7V00006GkGb3UAF	a140e000008yefrAAA	0	15177.66		13239.645	Active	BIP Front Loaded Rebate-3	4/1/2022	4/1/2022	4/30/2022
a4Q7V00006GkGb4UAF	a140e000008yefrAAA	0	15177.66		15177.66	Active	BIP Front Loaded Rebate-3	5/1/2022	5/1/2022	5/31/2022
a4Q7V00006GkGb5UAF	a140e000008yefrAAA	0	15177.66		15177.66	Active	BIP Front Loaded Rebate-3	6/1/2022	6/1/2022	6/30/2022
a4Q7V00006GkGb6UAF	a140e000008yefrAAA	0	16913.025		15177.66	Active	BIP Front Loaded Rebate-3	7/1/2022	7/1/2022	7/31/2022
a4Q7V00006GkGb7UAF	a140e000008yefrAAA	0	16913.025		16913.025	Active	BIP Front Loaded Rebate-3	8/1/2022	8/1/2022	8/31/2022
a4Q7V00006GkGb8UAF	a140e000008yefrAAA	0	16913.025		16913.025	Active	BIP Front Loaded Rebate-3	9/1/2022	9/1/2022	9/30/2022
a4Q7V00006GkGb9UAF	a140e000008yefrAAA	0	18492.495		16913.025	Active	BIP Front Loaded Rebate-3	10/1/2022	10/1/2022	10/31/2022
a4Q7V00006GkGbAUAV	a140e000008yefrAAA	0	18492.495		18492.495	Active	BIP Front Loaded Rebate-3	11/1/2022	11/1/2022	11/30/2022
a4Q7V00006GkGbBUAV	a140e000008yefrAAA	0	18492.495		18492.495	Active	BIP Front Loaded Rebate-3	12/1/2022	12/1/2022	12/31/2022
a4Q7V00006GkGbCUAV	a140e000008yefrAAA	0	19677.39		18492.495	Active	BIP Front Loaded Rebate-3	1/1/2023	1/1/2023	1/31/2023
a4Q7V00006GkGbDUAV	a140e000008yefrAAA	0	20133.39		19677.39	Active	BIP Front Loaded Rebate-3	2/1/2023	2/1/2023	2/28/2023
a4Q7V00006GkGbEUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	3/1/2023	3/1/2023	3/31/2023
a4Q7V00006GkGbFUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	4/1/2023	4/1/2023	4/30/2023
a4Q7V00006GkGbGUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	5/1/2023	5/1/2023	5/31/2023
a4Q7V00006GkGbHUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	6/1/2023	6/1/2023	6/30/2023
a4Q7V00006GkGbIUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	7/1/2023	7/1/2023	7/31/2023
a4Q7V00006GkGbJUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	8/1/2023	8/1/2023	8/31/2023
a4Q7V00006GkGbKUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	9/1/2023	9/1/2023	9/30/2023
a4Q7V00006GkGbLUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	10/1/2023	10/1/2023	10/31/2023
a4Q7V00006GkGbMUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	11/1/2023	11/1/2023	11/30/2023
a4Q7V00006GkGbNUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	12/1/2023	12/1/2023	12/31/2023
a4Q7V00006GkGbOUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	1/1/2024	1/1/2024	1/31/2024
a4Q7V00006GkGbPUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	2/1/2024	2/1/2024	2/29/2024
a4Q7V00006GkGbQUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	3/1/2024	3/1/2024	3/31/2024
a4Q7V00006GkGbRUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	4/1/2024	4/1/2024	4/30/2024
a4Q7V00006GkGbSUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	5/1/2024	5/1/2024	5/31/2024
a4Q7V00006GkGbTUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	6/1/2024	6/1/2024	6/30/2024
a4Q7V00006GkGbUUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	7/1/2024	7/1/2024	7/31/2024
a4Q7V00006GkGbVUAV	a140e000008yefrAAA	0	20133.39		20133.39	Active	BIP Front Loaded Rebate-3	8/1/2024	8/1/2024	8/31/2024
a4Q7V00006GkGbWUAV	a140e000008yefrAAA	0	20133.39		20133.39	Draft	BIP Front Loaded Rebate-3	9/1/2024	9/1/2024	9/30/2024
a4Q7V00006GkGbXUAV	a140e000008yefrAAA	0	20133.39		20133.39	Draft	BIP Front Loaded Rebate-3	10/1/2024	10/1/2024	10/31/2024
a4Q7V00006GkGbYUAV	a140e000008yefrAAA	0	20133.39		20133.39	Draft	BIP Front Loaded Rebate-3	11/1/2024	11/1/2024	11/30/2024
a4Q7V00006GkGbZUAV	a140e000008yefrAAA	0	20133.39		20133.39	Draft	BIP Front Loaded Rebate-3	12/1/2024	12/1/2024	12/31/2024
a4Q7V00006GlElKUAV	a140e000008ypbHAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	8/1/2021	8/1/2021	8/31/2021
a4Q7V00006GlElLUAV	a140e000008ypbHAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	9/1/2021	9/1/2021	9/30/2021
a4Q7V00006GlElMUAV	a140e000008ypbHAAQ	0	2362.335		0	Active	BIP Front Loaded Rebate-3	10/1/2021	10/1/2021	10/31/2021
a4Q7V00006GlElNUAV	a140e000008ypbHAAQ	0	2362.335		2362.335	Active	BIP Front Loaded Rebate-3	11/1/2021	11/1/2021	11/30/2021
a4Q7V00006GlElOUAV	a140e000008ypbHAAQ	0	2362.335		2362.335	Active	BIP Front Loaded Rebate-3	12/1/2021	12/1/2021	12/31/2021
a4Q7V00006GlElPUAV	a140e000008ypbHAAQ	0	5090.595		2362.335	Active	BIP Front Loaded Rebate-3	1/1/2022	1/1/2022	1/31/2022
a4Q7V00006GlElQUAV	a140e000008ypbHAAQ	0	5090.595		5090.595	Active	BIP Front Loaded Rebate-3	2/1/2022	2/1/2022	2/28/2022
a4Q7V00006GlElRUAV	a140e000008ypbHAAQ	0	5090.595		5090.595	Active	BIP Front Loaded Rebate-3	3/1/2022	3/1/2022	3/31/2022
a4Q7V00006GlElSUAV	a140e000008ypbHAAQ	0	7306.83		5090.595	Active	BIP Front Loaded Rebate-3	4/1/2022	4/1/2022	4/30/2022
a4Q7V00006GlElTUAV	a140e000008ypbHAAQ	0	7306.83		7306.83	Active	BIP Front Loaded Rebate-3	5/1/2022	5/1/2022	5/31/2022
a4Q7V00006GlElUUAV	a140e000008ypbHAAQ	0	7306.83		7306.83	Active	BIP Front Loaded Rebate-3	6/1/2022	6/1/2022	6/30/2022
a4Q7V00006GlElVUAV	a140e000008ypbHAAQ	0	9717.225		7306.83	Active	BIP Front Loaded Rebate-3	7/1/2022	7/1/2022	7/31/2022
a4Q7V00006GlElWUAV	a140e000008ypbHAAQ	0	9717.225		9717.225	Active	BIP Front Loaded Rebate-3	8/1/2022	8/1/2022	8/31/2022
a4Q7V00006GlElXUAV	a140e000008ypbHAAQ	0	9717.225		9717.225	Active	BIP Front Loaded Rebate-3	9/1/2022	9/1/2022	9/30/2022
a4Q7V00006GlElYUAV	a140e000008ypbHAAQ	0	12513.255		9717.225	Active	BIP Front Loaded Rebate-3	10/1/2022	10/1/2022	10/31/2022
a4Q7V00006GlElZUAV	a140e000008ypbHAAQ	0	12513.255		12513.255	Active	BIP Front Loaded Rebate-3	11/1/2022	11/1/2022	11/30/2022
a4Q7V00006GlElaUAF	a140e000008ypbHAAQ	0	12513.255		12513.255	Active	BIP Front Loaded Rebate-3	12/1/2022	12/1/2022	12/31/2022
a4Q7V00006GlElbUAF	a140e000008ypbHAAQ	0	14607.825		12513.255	Active	BIP Front Loaded Rebate-3	1/1/2023	1/1/2023	1/31/2023
a4Q7V00006GlElcUAF	a140e000008ypbHAAQ	0	14607.825		14607.825	Active	BIP Front Loaded Rebate-3	2/1/2023	2/1/2023	2/28/2023
a4Q7V00006GlEldUAF	a140e000008ypbHAAQ	0	14607.825		14607.825	Active	BIP Front Loaded Rebate-3	3/1/2023	3/1/2023	3/31/2023
a4Q7V00006GlEleUAF	a140e000008ypbHAAQ	0	18039.03		14607.825	Active	BIP Front Loaded Rebate-3	4/1/2023	4/1/2023	4/30/2023
a4Q7V00006GlElfUAF	a140e000008ypbHAAQ	0	18039.03		18039.03	Active	BIP Front Loaded Rebate-3	5/1/2023	5/1/2023	5/31/2023
a4Q7V00006GlElgUAF	a140e000008ypbHAAQ	0	18039.03		18039.03	Active	BIP Front Loaded Rebate-3	6/1/2023	6/1/2023	6/30/2023
a4Q7V00006GlElhUAF	a140e000008ypbHAAQ	0	20429.325		18039.03	Active	BIP Front Loaded Rebate-3	7/1/2023	7/1/2023	7/31/2023
a4Q7V00006GlEliUAF	a140e000008ypbHAAQ	0	20429.325		20429.325	Active	BIP Front Loaded Rebate-3	8/1/2023	8/1/2023	8/31/2023
a4Q7V00006GlEljUAF	a140e000008ypbHAAQ	0	20429.325		20429.325	Active	BIP Front Loaded Rebate-3	9/1/2023	9/1/2023	9/30/2023
a4Q7V00006GlElkUAF	a140e000008ypbHAAQ	0	22854.75		20429.325	Active	BIP Front Loaded Rebate-3	10/1/2023	10/1/2023	10/31/2023
a4Q7V00006GlEllUAF	a140e000008ypbHAAQ	0	22854.75		22854.75	Active	BIP Front Loaded Rebate-3	11/1/2023	11/1/2023	11/30/2023
a4Q7V00006GlElmUAF	a140e000008ypbHAAQ	0	22854.75		22854.75	Active	BIP Front Loaded Rebate-3	12/1/2023	12/1/2023	12/31/2023
a4Q7V00006GlElnUAF	a140e000008ypbHAAQ	0	24789.51		22854.75	Active	BIP Front Loaded Rebate-3	1/1/2024	1/1/2024	1/31/2024
a4Q7V00006GlEloUAF	a140e000008ypbHAAQ	0	24789.51		24789.51	Active	BIP Front Loaded Rebate-3	2/1/2024	2/1/2024	2/29/2024
a4Q7V00006GlElpUAF	a140e000008ypbHAAQ	0	24789.51		24789.51	Active	BIP Front Loaded Rebate-3	3/1/2024	3/1/2024	3/31/2024
a4Q7V00006GlElqUAF	a140e000008ypbHAAQ	0	26076.54		24789.51	Active	BIP Front Loaded Rebate-3	4/1/2024	4/1/2024	4/30/2024
a4Q7V00006GlElrUAF	a140e000008ypbHAAQ	0	26076.54		26076.54	Active	BIP Front Loaded Rebate-3	5/1/2024	5/1/2024	5/31/2024
a4Q7V00006GlElsUAF	a140e000008ypbHAAQ	0	26076.54		26076.54	Active	BIP Front Loaded Rebate-3	6/1/2024	6/1/2024	6/30/2024
a4Q7V00006GlEltUAF	a140e000008ypbHAAQ	0	27936.9		26076.54	Active	BIP Front Loaded Rebate-3	7/1/2024	7/1/2024	7/31/2024
a4Q7V00006GlEluUAF	a140e000008ypbHAAQ	0	27936.9		27936.9	Active	BIP Front Loaded Rebate-3	8/1/2024	8/1/2024	8/31/2024
a4Q7V00006GlElvUAF	a140e000008ypbHAAQ	0	27936.9		27936.9	Draft	BIP Front Loaded Rebate-3	9/1/2024	9/1/2024	9/30/2024
a4Q7V00006GlElwUAF	a140e000008ypbHAAQ	0	27936.9		27936.9	Draft	BIP Front Loaded Rebate-3	10/1/2024	10/1/2024	10/31/2024
a4Q7V00006GlElxUAF	a140e000008ypbHAAQ	0	27936.9		27936.9	Draft	BIP Front Loaded Rebate-3	11/1/2024	11/1/2024	11/30/2024
a4Q7V00006GlElyUAF	a140e000008ypbHAAQ	0	27936.9		27936.9	Draft	BIP Front Loaded Rebate-3	12/1/2024	12/1/2024	12/31/2024
a4Q7V00006GlVKqUAN	a1432000003unPkAAI	0	0		0	Active	BIP Front Loaded Rebate-3	8/1/2017	8/1/2017	8/31/2017
a4Q7V00006GlVKrUAN	a1432000003unPkAAI	0	0		0	Active	BIP Front Loaded Rebate-3	9/1/2017	9/1/2017	9/30/2017
a4Q7V00006GlVKsUAN	a1432000003unPkAAI	0	7437.775		0	Active	BIP Front Loaded Rebate-3	10/1/2017	10/1/2017	10/31/2017
a4Q7V00006GlVKtUAN	a1432000003unPkAAI	0	7437.775		7437.775	Active	BIP Front Loaded Rebate-3	11/1/2017	11/1/2017	11/30/2017
a4Q7V00006GlVKuUAN	a1432000003unPkAAI	0	7437.775		7437.775	Active	BIP Front Loaded Rebate-3	12/1/2017	12/1/2017	12/31/2017
a4Q7V00006GlVKvUAN	a1432000003unPkAAI	0	16788.075		7437.775	Active	BIP Front Loaded Rebate-3	1/1/2018	1/1/2018	1/31/2018
a4Q7V00006GlVKwUAN	a1432000003unPkAAI	0	16788.075		16788.075	Active	BIP Front Loaded Rebate-3	2/1/2018	2/1/2018	2/28/2018
a4Q7V00006GlVKxUAN	a1432000003unPkAAI	0	16788.075		16788.075	Active	BIP Front Loaded Rebate-3	3/1/2018	3/1/2018	3/31/2018
a4Q7V00006GlVKyUAN	a1432000003unPkAAI	0	25508.325		16788.075	Active	BIP Front Loaded Rebate-3	4/1/2018	4/1/2018	4/30/2018
a4Q7V00006GlVKzUAN	a1432000003unPkAAI	0	25508.325		25508.325	Active	BIP Front Loaded Rebate-3	5/1/2018	5/1/2018	5/31/2018
a4Q7V00006GlVL0UAN	a1432000003unPkAAI	0	25508.325		25508.325	Active	BIP Front Loaded Rebate-3	6/1/2018	6/1/2018	6/30/2018
a4Q7V00006GlVL1UAN	a1432000003unPkAAI	0	37248.65		25508.325	Active	BIP Front Loaded Rebate-3	7/1/2018	7/1/2018	7/31/2018
a4Q7V00006GlVL2UAN	a1432000003unPkAAI	0	37248.65		37248.65	Active	BIP Front Loaded Rebate-3	8/1/2018	8/1/2018	8/31/2018
a4Q7V00006GlVL3UAN	a1432000003unPkAAI	0	37248.65		37248.65	Active	BIP Front Loaded Rebate-3	9/1/2018	9/1/2018	9/30/2018
a4Q7V00006GlVL4UAN	a1432000003unPkAAI	0	50903.625		37248.65	Active	BIP Front Loaded Rebate-3	10/1/2018	10/1/2018	10/31/2018
a4Q7V00006GlVL5UAN	a1432000003unPkAAI	0	50903.625		50903.625	Active	BIP Front Loaded Rebate-3	11/1/2018	11/1/2018	11/30/2018
a4Q7V00006GlVL6UAN	a1432000003unPkAAI	0	50903.625		50903.625	Active	BIP Front Loaded Rebate-3	12/1/2018	12/1/2018	12/31/2018
a4Q7V00006GlVL7UAN	a1432000003unPkAAI	0	61015.375		50903.625	Active	BIP Front Loaded Rebate-3	1/1/2019	1/1/2019	1/31/2019
a4Q7V00006GlVL8UAN	a1432000003unPkAAI	0	61015.375		61015.375	Active	BIP Front Loaded Rebate-3	2/1/2019	2/1/2019	2/28/2019
a4Q7V00006GlVL9UAN	a1432000003unPkAAI	0	61015.375		61015.375	Active	BIP Front Loaded Rebate-3	3/1/2019	3/1/2019	3/31/2019
a4Q7V00006GlVLAUA3	a1432000003unPkAAI	0	69527.3		61015.375	Active	BIP Front Loaded Rebate-3	4/1/2019	4/1/2019	4/30/2019
a4Q7V00006GlVLBUA3	a1432000003unPkAAI	0	69527.3		69527.3	Active	BIP Front Loaded Rebate-3	5/1/2019	5/1/2019	5/31/2019
a4Q7V00006GlVLCUA3	a1432000003unPkAAI	0	69527.3		69527.3	Active	BIP Front Loaded Rebate-3	6/1/2019	6/1/2019	6/30/2019
a4Q7V00006GlVLDUA3	a1432000003unPkAAI	0	81662.925		69527.3	Active	BIP Front Loaded Rebate-3	7/1/2019	7/1/2019	7/31/2019
a4Q7V00006GlVLEUA3	a1432000003unPkAAI	0	81662.925		81662.925	Active	BIP Front Loaded Rebate-3	8/1/2019	8/1/2019	8/31/2019
a4Q7V00006GlVLFUA3	a1432000003unPkAAI	0	81662.925		81662.925	Active	BIP Front Loaded Rebate-3	9/1/2019	9/1/2019	9/30/2019
a4Q7V00006GlVLGUA3	a1432000003unPkAAI	0	96204		81662.925	Active	BIP Front Loaded Rebate-3	10/1/2019	10/1/2019	10/31/2019
a4Q7V00006GlVLHUA3	a1432000003unPkAAI	0	96204		96204	Active	BIP Front Loaded Rebate-3	11/1/2019	11/1/2019	11/30/2019
a4Q7V00006GlVLIUA3	a1432000003unPkAAI	0	96204		96204	Active	BIP Front Loaded Rebate-3	12/1/2019	12/1/2019	12/31/2019
a4Q7V00006GlVLJUA3	a1432000003unPkAAI	0	107270.9		96204	Active	BIP Front Loaded Rebate-3	1/1/2020	1/1/2020	1/31/2020
a4Q7V00006GlVLKUA3	a1432000003unPkAAI	0	107270.9		107270.9	Active	BIP Front Loaded Rebate-3	2/1/2020	2/1/2020	2/29/2020
a4Q7V00006GlVLLUA3	a1432000003unPkAAI	0	107270.9		107270.9	Active	BIP Front Loaded Rebate-3	3/1/2020	3/1/2020	3/31/2020
a4Q7V00006GlVLMUA3	a1432000003unPkAAI	0	117462.675		107270.9	Active	BIP Front Loaded Rebate-3	4/1/2020	4/1/2020	4/30/2020
a4Q7V00006GlVLNUA3	a1432000003unPkAAI	0	117462.675		117462.675	Active	BIP Front Loaded Rebate-3	5/1/2020	5/1/2020	5/31/2020
a4Q7V00006GlVLOUA3	a1432000003unPkAAI	0	117462.675		117462.675	Active	BIP Front Loaded Rebate-3	6/1/2020	6/1/2020	6/30/2020
a4Q7V00006GlVLPUA3	a1432000003unPkAAI	0	129082.075		117462.675	Active	BIP Front Loaded Rebate-3	7/1/2020	7/1/2020	7/31/2020
a4Q7V00006GlVLQUA3	a1432000003unPkAAI	0	129082.075		129082.075	Active	BIP Front Loaded Rebate-3	8/1/2020	8/1/2020	8/31/2020
a4Q7V00006GlVLRUA3	a1432000003unPkAAI	0	129082.075		129082.075	Active	BIP Front Loaded Rebate-3	9/1/2020	9/1/2020	9/30/2020
a4Q7V00006GlVLSUA3	a1432000003unPkAAI	0	145707.525		129082.075	Active	BIP Front Loaded Rebate-3	10/1/2020	10/1/2020	10/31/2020
a4Q7V00006GlVLTUA3	a1432000003unPkAAI	0	145707.525		145707.525	Active	BIP Front Loaded Rebate-3	11/1/2020	11/1/2020	11/30/2020
a4Q7V00006GlVLUUA3	a1432000003unPkAAI	0	145707.525		145707.525	Active	BIP Front Loaded Rebate-3	12/1/2020	12/1/2020	12/31/2020
a4Q7V00006GlVLVUA3	a1432000003unPkAAI	0	157817.425		145707.525	Active	BIP Front Loaded Rebate-3	1/1/2021	1/1/2021	1/31/2021
a4Q7V00006GlVLWUA3	a1432000003unPkAAI	0	157993.705		157817.425	Active	BIP Front Loaded Rebate-3	2/1/2021	2/1/2021	2/28/2021
a4Q7V00006GlVLXUA3	a1432000003unPkAAI	0	157993.705		157993.705	Active	BIP Front Loaded Rebate-3	3/1/2021	3/1/2021	3/31/2021
a4Q7V00006GlVLYUA3	a1432000003unPkAAI	0	170030.73		157993.705	Active	BIP Front Loaded Rebate-3	4/1/2021	4/1/2021	4/30/2021
a4Q7V00006GlVLZUA3	a1432000003unPkAAI	0	170030.73		170030.73	Active	BIP Front Loaded Rebate-3	5/1/2021	5/1/2021	5/31/2021
a4Q7V00006GlVLaUAN	a1432000003unPkAAI	0	170030.73		170030.73	Active	BIP Front Loaded Rebate-3	6/1/2021	6/1/2021	6/30/2021
a4Q7V00006GlVLbUAN	a1432000003unPkAAI	0	185804.855		170030.73	Active	BIP Front Loaded Rebate-3	7/1/2021	7/1/2021	7/31/2021
a4Q7V00006GlVLcUAN	a1432000003unPkAAI	0	191178.18		185804.855	Active	BIP Front Loaded Rebate-3	8/1/2021	8/1/2021	8/31/2021
a4Q7V00006GlVLdUAN	a1432000003unPkAAI	0	191178.18		191178.18	Active	BIP Front Loaded Rebate-3	9/1/2021	9/1/2021	9/30/2021
a4Q7V00006GlVLeUAN	a1432000003unPkAAI	0	191178.18		191178.18	Active	BIP Front Loaded Rebate-3	10/1/2021	10/1/2021	10/31/2021
a4Q7V00006GlVLfUAN	a1432000003unPkAAI	0	191178.18		191178.18	Active	BIP Front Loaded Rebate-3	11/1/2021	11/1/2021	11/30/2021
a4Q7V00006GlVLgUAN	a1432000003unPkAAI	0	191178.18		191178.18	Active	BIP Front Loaded Rebate-3	12/1/2021	12/1/2021	12/31/2021
a4Q7V00006GlVLhUAN	a1432000003unPkAAI	0	191178.18		191178.18	Active	BIP Front Loaded Rebate-3	1/1/2022	1/1/2022	1/31/2022
a4Q7V00006GlVLiUAN	a1432000003unPkAAI	0	191178.18		191178.18	Active	BIP Front Loaded Rebate-3	2/1/2022	2/1/2022	2/28/2022
a4Q7V00006GlVLjUAN	a1432000003unPkAAI	0	191178.18		191178.18	Active	BIP Front Loaded Rebate-3	3/1/2022	3/1/2022	3/31/2022
a4Q7V00006GlVLkUAN	a1432000003unPkAAI	0	191178.18		191178.18	Active	BIP Front Loaded Rebate-3	4/1/2022	4/1/2022	4/30/2022
a4Q7V00006GlVLlUAN	a1432000003unPkAAI	0	191178.18		191178.18	Active	BIP Front Loaded Rebate-3	5/1/2022	5/1/2022	5/31/2022
a4Q7V00006GlVLmUAN	a1432000003unPkAAI	0	191178.18		191178.18	Active	BIP Front Loaded Rebate-3	6/1/2022	6/1/2022	6/30/2022
a4Q7V00006GlVLnUAN	a1432000003unPkAAI	0	191178.18		191178.18	Active	BIP Front Loaded Rebate-3	7/1/2022	7/1/2022	7/31/2022
a4Q7V00006GlVLoUAN	a1432000003unPkAAI	3186.303	187991.877		191178.18	Active	BIP Front Loaded Rebate-3	8/1/2022	8/1/2022	8/31/2022
a4Q7V00006GlVLpUAN	a1432000003unPkAAI	3186.303	184805.574		187991.877	Active	BIP Front Loaded Rebate-3	9/1/2022	9/1/2022	9/30/2022
a4Q7V00006GlVLqUAN	a1432000003unPkAAI	3186.303	181619.271		184805.574	Active	BIP Front Loaded Rebate-3	10/1/2022	10/1/2022	10/31/2022
a4Q7V00006GlVLrUAN	a1432000003unPkAAI	3186.303	178432.968		181619.271	Active	BIP Front Loaded Rebate-3	11/1/2022	11/1/2022	11/30/2022
a4Q7V00006GlVLsUAN	a1432000003unPkAAI	3186.303	175246.665		178432.968	Active	BIP Front Loaded Rebate-3	12/1/2022	12/1/2022	12/31/2022
a4Q7V00006GlVLtUAN	a1432000003unPkAAI	3186.303	172060.362		175246.665	Active	BIP Front Loaded Rebate-3	1/1/2023	1/1/2023	1/31/2023
a4Q7V00006GlVLuUAN	a1432000003unPkAAI	3186.303	168874.059		172060.362	Active	BIP Front Loaded Rebate-3	2/1/2023	2/1/2023	2/28/2023
a4Q7V00006GlVLvUAN	a1432000003unPkAAI	3186.303	165687.756		168874.059	Active	BIP Front Loaded Rebate-3	3/1/2023	3/1/2023	3/31/2023
a4Q7V00006GlVLwUAN	a1432000003unPkAAI	3186.303	162501.453		165687.756	Active	BIP Front Loaded Rebate-3	4/1/2023	4/1/2023	4/30/2023
a4Q7V00006GlVLxUAN	a1432000003unPkAAI	3186.303	159315.15		162501.453	Active	BIP Front Loaded Rebate-3	5/1/2023	5/1/2023	5/31/2023
a4Q7V00006GlVLyUAN	a1432000003unPkAAI	3186.303	156128.847		159315.15	Active	BIP Front Loaded Rebate-3	6/1/2023	6/1/2023	6/30/2023
a4Q7V00006GlVLzUAN	a1432000003unPkAAI	3186.303	152942.544		156128.847	Active	BIP Front Loaded Rebate-3	7/1/2023	7/1/2023	7/31/2023
a4Q7V00006GlVM0UAN	a1432000003unPkAAI	3186.303	149756.241		152942.544	Active	BIP Front Loaded Rebate-3	8/1/2023	8/1/2023	8/31/2023
a4Q7V00006GlVM1UAN	a1432000003unPkAAI	3186.303	146569.938		149756.241	Active	BIP Front Loaded Rebate-3	9/1/2023	9/1/2023	9/30/2023
a4Q7V00006GlVM2UAN	a1432000003unPkAAI	3186.303	143383.635		146569.938	Active	BIP Front Loaded Rebate-3	10/1/2023	10/1/2023	10/31/2023
a4Q7V00006GlVM3UAN	a1432000003unPkAAI	3186.303	140197.332		143383.635	Active	BIP Front Loaded Rebate-3	11/1/2023	11/1/2023	11/30/2023
a4Q7V00006GlVM4UAN	a1432000003unPkAAI	3186.303	137011.029		140197.332	Active	BIP Front Loaded Rebate-3	12/1/2023	12/1/2023	12/31/2023
a4Q7V00006GlVM5UAN	a1432000003unPkAAI	3186.303	133824.726		137011.029	Active	BIP Front Loaded Rebate-3	1/1/2024	1/1/2024	1/31/2024
a4Q7V00006GlVM6UAN	a1432000003unPkAAI	3186.303	130638.423		133824.726	Active	BIP Front Loaded Rebate-3	2/1/2024	2/1/2024	2/29/2024
a4Q7V00006GlVM7UAN	a1432000003unPkAAI	3186.303	127452.12		130638.423	Active	BIP Front Loaded Rebate-3	3/1/2024	3/1/2024	3/31/2024
a4Q7V00006GlVM8UAN	a1432000003unPkAAI	3186.303	124265.817		127452.12	Active	BIP Front Loaded Rebate-3	4/1/2024	4/1/2024	4/30/2024
a4Q7V00006GlVM9UAN	a1432000003unPkAAI	3186.303	121079.514		124265.817	Active	BIP Front Loaded Rebate-3	5/1/2024	5/1/2024	5/31/2024
a4Q7V00006GlVMAUA3	a1432000003unPkAAI	3186.303	117893.211		121079.514	Active	BIP Front Loaded Rebate-3	6/1/2024	6/1/2024	6/30/2024
a4Q7V00006GlVMBUA3	a1432000003unPkAAI	3186.303	114706.908		117893.211	Active	BIP Front Loaded Rebate-3	7/1/2024	7/1/2024	7/31/2024
a4Q7V00006GlVMCUA3	a1432000003unPkAAI	3186.303	111520.605		114706.908	Active	BIP Front Loaded Rebate-3	8/1/2024	8/1/2024	8/31/2024
a4Q7V00006GlVMDUA3	a1432000003unPkAAI	3186.303	108334.302		111520.605	Draft	BIP Front Loaded Rebate-3	9/1/2024	9/1/2024	9/30/2024
a4Q7V00006GlVMEUA3	a1432000003unPkAAI	3186.303	105147.999		108334.302	Draft	BIP Front Loaded Rebate-3	10/1/2024	10/1/2024	10/31/2024
a4Q7V00006GlVMFUA3	a1432000003unPkAAI	3186.303	101961.696		105147.999	Draft	BIP Front Loaded Rebate-3	11/1/2024	11/1/2024	11/30/2024
a4Q7V00006GlVMGUA3	a1432000003unPkAAI	3186.303	98775.393		101961.696	Draft	BIP Front Loaded Rebate-3	12/1/2024	12/1/2024	12/31/2024
a4Q7V00006GlVOiUAN	a1432000003unPlAAI	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2017	4/1/2017	4/30/2017
a4Q7V00006GlVOjUAN	a1432000003unPlAAI	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2017	5/1/2017	5/31/2017
a4Q7V00006GlVOkUAN	a1432000003unPlAAI	0	0		0	Active	BIP Front Loaded Rebate-3	6/1/2017	6/1/2017	6/30/2017
a4Q7V00006GlVOlUAN	a1432000003unPlAAI	0	8208.625		0	Active	BIP Front Loaded Rebate-3	7/1/2017	7/1/2017	7/31/2017
a4Q7V00006GlVOmUAN	a1432000003unPlAAI	0	8208.625		8208.625	Active	BIP Front Loaded Rebate-3	8/1/2017	8/1/2017	8/31/2017
a4Q7V00006GlVOnUAN	a1432000003unPlAAI	0	8208.625		8208.625	Active	BIP Front Loaded Rebate-3	9/1/2017	9/1/2017	9/30/2017
a4Q7V00006GlVOoUAN	a1432000003unPlAAI	0	16638		8208.625	Active	BIP Front Loaded Rebate-3	10/1/2017	10/1/2017	10/31/2017
a4Q7V00006GlVOpUAN	a1432000003unPlAAI	0	16638		16638	Active	BIP Front Loaded Rebate-3	11/1/2017	11/1/2017	11/30/2017
a4Q7V00006GlVOqUAN	a1432000003unPlAAI	0	16638		16638	Active	BIP Front Loaded Rebate-3	12/1/2017	12/1/2017	12/31/2017
a4Q7V00006GlVOrUAN	a1432000003unPlAAI	0	23975.45		16638	Active	BIP Front Loaded Rebate-3	1/1/2018	1/1/2018	1/31/2018
a4Q7V00006GlVOsUAN	a1432000003unPlAAI	0	23975.45		23975.45	Active	BIP Front Loaded Rebate-3	2/1/2018	2/1/2018	2/28/2018
a4Q7V00006GlVOtUAN	a1432000003unPlAAI	0	23975.45		23975.45	Active	BIP Front Loaded Rebate-3	3/1/2018	3/1/2018	3/31/2018
a4Q7V00006GlVOuUAN	a1432000003unPlAAI	0	30144.325		23975.45	Active	BIP Front Loaded Rebate-3	4/1/2018	4/1/2018	4/30/2018
a4Q7V00006GlVOvUAN	a1432000003unPlAAI	0	30144.325		30144.325	Active	BIP Front Loaded Rebate-3	5/1/2018	5/1/2018	5/31/2018
a4Q7V00006GlVOwUAN	a1432000003unPlAAI	0	30144.325		30144.325	Active	BIP Front Loaded Rebate-3	6/1/2018	6/1/2018	6/30/2018
a4Q7V00006GlVOxUAN	a1432000003unPlAAI	0	37545.025		30144.325	Active	BIP Front Loaded Rebate-3	7/1/2018	7/1/2018	7/31/2018
a4Q7V00006GlVOyUAN	a1432000003unPlAAI	0	37545.025		37545.025	Active	BIP Front Loaded Rebate-3	8/1/2018	8/1/2018	8/31/2018
a4Q7V00006GlVOzUAN	a1432000003unPlAAI	0	37545.025		37545.025	Active	BIP Front Loaded Rebate-3	9/1/2018	9/1/2018	9/30/2018
a4Q7V00006GlVP0UAN	a1432000003unPlAAI	0	45710.075		37545.025	Active	BIP Front Loaded Rebate-3	10/1/2018	10/1/2018	10/31/2018
a4Q7V00006GlVP1UAN	a1432000003unPlAAI	0	45710.075		45710.075	Active	BIP Front Loaded Rebate-3	11/1/2018	11/1/2018	11/30/2018
a4Q7V00006GlVP2UAN	a1432000003unPlAAI	0	45710.075		45710.075	Active	BIP Front Loaded Rebate-3	12/1/2018	12/1/2018	12/31/2018
a4Q7V00006GlVP3UAN	a1432000003unPlAAI	0	52443.95		45710.075	Active	BIP Front Loaded Rebate-3	1/1/2019	1/1/2019	1/31/2019
a4Q7V00006GlVP4UAN	a1432000003unPlAAI	0	52443.95		52443.95	Active	BIP Front Loaded Rebate-3	2/1/2019	2/1/2019	2/28/2019
a4Q7V00006GlVP5UAN	a1432000003unPlAAI	0	52443.95		52443.95	Active	BIP Front Loaded Rebate-3	3/1/2019	3/1/2019	3/31/2019
a4Q7V00006GlVP6UAN	a1432000003unPlAAI	0	58239.95		52443.95	Active	BIP Front Loaded Rebate-3	4/1/2019	4/1/2019	4/30/2019
a4Q7V00006GlVP7UAN	a1432000003unPlAAI	0	58239.95		58239.95	Active	BIP Front Loaded Rebate-3	5/1/2019	5/1/2019	5/31/2019
a4Q7V00006GlVP8UAN	a1432000003unPlAAI	0	58239.95		58239.95	Active	BIP Front Loaded Rebate-3	6/1/2019	6/1/2019	6/30/2019
a4Q7V00006GlVP9UAN	a1432000003unPlAAI	0	65833.375		58239.95	Active	BIP Front Loaded Rebate-3	7/1/2019	7/1/2019	7/31/2019
a4Q7V00006GlVPAUA3	a1432000003unPlAAI	0	65833.375		65833.375	Active	BIP Front Loaded Rebate-3	8/1/2019	8/1/2019	8/31/2019
a4Q7V00006GlVPBUA3	a1432000003unPlAAI	0	65833.375		65833.375	Active	BIP Front Loaded Rebate-3	9/1/2019	9/1/2019	9/30/2019
a4Q7V00006GlVPCUA3	a1432000003unPlAAI	0	72522.925		65833.375	Active	BIP Front Loaded Rebate-3	10/1/2019	10/1/2019	10/31/2019
a4Q7V00006GlVPDUA3	a1432000003unPlAAI	0	72522.925		72522.925	Active	BIP Front Loaded Rebate-3	11/1/2019	11/1/2019	11/30/2019
a4Q7V00006GlVPEUA3	a1432000003unPlAAI	0	72522.925		72522.925	Active	BIP Front Loaded Rebate-3	12/1/2019	12/1/2019	12/31/2019
a4Q7V00006GlVPFUA3	a1432000003unPlAAI	0	78347.4		72522.925	Active	BIP Front Loaded Rebate-3	1/1/2020	1/1/2020	1/31/2020
a4Q7V00006GlVPGUA3	a1432000003unPlAAI	0	78347.4		78347.4	Active	BIP Front Loaded Rebate-3	2/1/2020	2/1/2020	2/29/2020
a4Q7V00006GlVPHUA3	a1432000003unPlAAI	0	78347.4		78347.4	Active	BIP Front Loaded Rebate-3	3/1/2020	3/1/2020	3/31/2020
a4Q7V00006GlVPIUA3	a1432000003unPlAAI	0	83990.175		78347.4	Active	BIP Front Loaded Rebate-3	4/1/2020	4/1/2020	4/30/2020
a4Q7V00006GlVPJUA3	a1432000003unPlAAI	0	83990.175		83990.175	Active	BIP Front Loaded Rebate-3	5/1/2020	5/1/2020	5/31/2020
a4Q7V00006GlVPKUA3	a1432000003unPlAAI	0	83990.175		83990.175	Active	BIP Front Loaded Rebate-3	6/1/2020	6/1/2020	6/30/2020
a4Q7V00006GlVPLUA3	a1432000003unPlAAI	0	90325.825		83990.175	Active	BIP Front Loaded Rebate-3	7/1/2020	7/1/2020	7/31/2020
a4Q7V00006GlVPMUA3	a1432000003unPlAAI	0	90325.825		90325.825	Active	BIP Front Loaded Rebate-3	8/1/2020	8/1/2020	8/31/2020
a4Q7V00006GlVPNUA3	a1432000003unPlAAI	0	90325.825		90325.825	Active	BIP Front Loaded Rebate-3	9/1/2020	9/1/2020	9/30/2020
a4Q7V00006GlVPOUA3	a1432000003unPlAAI	0	98080.625		90325.825	Active	BIP Front Loaded Rebate-3	10/1/2020	10/1/2020	10/31/2020
a4Q7V00006GlVPPUA3	a1432000003unPlAAI	0	98080.625		98080.625	Active	BIP Front Loaded Rebate-3	11/1/2020	11/1/2020	11/30/2020
a4Q7V00006GlVPQUA3	a1432000003unPlAAI	0	98080.625		98080.625	Active	BIP Front Loaded Rebate-3	12/1/2020	12/1/2020	12/31/2020
a4Q7V00006GlVPRUA3	a1432000003unPlAAI	0	105213.475		98080.625	Active	BIP Front Loaded Rebate-3	1/1/2021	1/1/2021	1/31/2021
a4Q7V00006GlVPSUA3	a1432000003unPlAAI	0	105546.125		105213.475	Active	BIP Front Loaded Rebate-3	2/1/2021	2/1/2021	2/28/2021
a4Q7V00006GlVPTUA3	a1432000003unPlAAI	0	105546.125		105546.125	Active	BIP Front Loaded Rebate-3	3/1/2021	3/1/2021	3/31/2021
a4Q7V00006GlVPUUA3	a1432000003unPlAAI	0	112407.6		105546.125	Active	BIP Front Loaded Rebate-3	4/1/2021	4/1/2021	4/30/2021
a4Q7V00006GlVPVUA3	a1432000003unPlAAI	0	112407.6		112407.6	Active	BIP Front Loaded Rebate-3	5/1/2021	5/1/2021	5/31/2021
a4Q7V00006GlVPWUA3	a1432000003unPlAAI	0	112407.6		112407.6	Active	BIP Front Loaded Rebate-3	6/1/2021	6/1/2021	6/30/2021
a4Q7V00006GlVPXUA3	a1432000003unPlAAI	0	112407.6		112407.6	Active	BIP Front Loaded Rebate-3	7/1/2021	7/1/2021	7/31/2021
a4Q7V00006GlVPYUA3	a1432000003unPlAAI	0	112407.6		112407.6	Active	BIP Front Loaded Rebate-3	8/1/2021	8/1/2021	8/31/2021
a4Q7V00006GlVPZUA3	a1432000003unPlAAI	0	112407.6		112407.6	Active	BIP Front Loaded Rebate-3	9/1/2021	9/1/2021	9/30/2021
a4Q7V00006GlVPaUAN	a1432000003unPlAAI	0	112407.6		112407.6	Active	BIP Front Loaded Rebate-3	10/1/2021	10/1/2021	10/31/2021
a4Q7V00006GlVPbUAN	a1432000003unPlAAI	0	112407.6		112407.6	Active	BIP Front Loaded Rebate-3	11/1/2021	11/1/2021	11/30/2021
a4Q7V00006GlVPcUAN	a1432000003unPlAAI	0	112407.6		112407.6	Active	BIP Front Loaded Rebate-3	12/1/2021	12/1/2021	12/31/2021
a4Q7V00006GlVPdUAN	a1432000003unPlAAI	0	112407.6		112407.6	Active	BIP Front Loaded Rebate-3	1/1/2022	1/1/2022	1/31/2022
a4Q7V00006GlVPeUAN	a1432000003unPlAAI	0	112407.6		112407.6	Active	BIP Front Loaded Rebate-3	2/1/2022	2/1/2022	2/28/2022
a4Q7V00006GlVPfUAN	a1432000003unPlAAI	0	112407.6		112407.6	Active	BIP Front Loaded Rebate-3	3/1/2022	3/1/2022	3/31/2022
a4Q7V00006GlVPgUAN	a1432000003unPlAAI	1873.46	110534.14		112407.6	Active	BIP Front Loaded Rebate-3	4/1/2022	4/1/2022	4/30/2022
a4Q7V00006GlVPhUAN	a1432000003unPlAAI	1873.46	108660.68		110534.14	Active	BIP Front Loaded Rebate-3	5/1/2022	5/1/2022	5/31/2022
a4Q7V00006GlVPiUAN	a1432000003unPlAAI	1873.46	106787.22		108660.68	Active	BIP Front Loaded Rebate-3	6/1/2022	6/1/2022	6/30/2022
a4Q7V00006GlVPjUAN	a1432000003unPlAAI	1873.46	104913.76		106787.22	Active	BIP Front Loaded Rebate-3	7/1/2022	7/1/2022	7/31/2022
a4Q7V00006GlVPkUAN	a1432000003unPlAAI	1873.46	103040.3		104913.76	Active	BIP Front Loaded Rebate-3	8/1/2022	8/1/2022	8/31/2022
a4Q7V00006GlVPlUAN	a1432000003unPlAAI	1873.46	101166.84		103040.3	Active	BIP Front Loaded Rebate-3	9/1/2022	9/1/2022	9/30/2022
a4Q7V00006GlVPmUAN	a1432000003unPlAAI	1873.46	99293.38		101166.84	Active	BIP Front Loaded Rebate-3	10/1/2022	10/1/2022	10/31/2022
a4Q7V00006GlVPnUAN	a1432000003unPlAAI	1873.46	97419.92		99293.38	Active	BIP Front Loaded Rebate-3	11/1/2022	11/1/2022	11/30/2022
a4Q7V00006GlVPoUAN	a1432000003unPlAAI	1873.46	95546.46		97419.92	Active	BIP Front Loaded Rebate-3	12/1/2022	12/1/2022	12/31/2022
a4Q7V00006GlVPpUAN	a1432000003unPlAAI	1873.46	93673		95546.46	Active	BIP Front Loaded Rebate-3	1/1/2023	1/1/2023	1/31/2023
a4Q7V00006GlVPqUAN	a1432000003unPlAAI	1873.46	91799.54		93673	Active	BIP Front Loaded Rebate-3	2/1/2023	2/1/2023	2/28/2023
a4Q7V00006GlVPrUAN	a1432000003unPlAAI	1873.46	89926.08		91799.54	Active	BIP Front Loaded Rebate-3	3/1/2023	3/1/2023	3/31/2023
a4Q7V00006GlVPsUAN	a1432000003unPlAAI	1873.46	88052.62		89926.08	Active	BIP Front Loaded Rebate-3	4/1/2023	4/1/2023	4/30/2023
a4Q7V00006GlVPtUAN	a1432000003unPlAAI	1873.46	86179.16		88052.62	Active	BIP Front Loaded Rebate-3	5/1/2023	5/1/2023	5/31/2023
a4Q7V00006GlVPuUAN	a1432000003unPlAAI	1873.46	84305.7		86179.16	Active	BIP Front Loaded Rebate-3	6/1/2023	6/1/2023	6/30/2023
a4Q7V00006GlVPvUAN	a1432000003unPlAAI	1873.46	82432.24		84305.7	Active	BIP Front Loaded Rebate-3	7/1/2023	7/1/2023	7/31/2023
a4Q7V00006GlVPwUAN	a1432000003unPlAAI	1873.46	80558.78		82432.24	Active	BIP Front Loaded Rebate-3	8/1/2023	8/1/2023	8/31/2023
a4Q7V00006GlVPxUAN	a1432000003unPlAAI	1873.46	78685.32		80558.78	Active	BIP Front Loaded Rebate-3	9/1/2023	9/1/2023	9/30/2023
a4Q7V00006GlVPyUAN	a1432000003unPlAAI	1873.46	76811.86		78685.32	Active	BIP Front Loaded Rebate-3	10/1/2023	10/1/2023	10/31/2023
a4Q7V00006GlVPzUAN	a1432000003unPlAAI	1873.46	74938.4		76811.86	Active	BIP Front Loaded Rebate-3	11/1/2023	11/1/2023	11/30/2023
a4Q7V00006GlVQ0UAN	a1432000003unPlAAI	1873.46	73064.94		74938.4	Active	BIP Front Loaded Rebate-3	12/1/2023	12/1/2023	12/31/2023
a4Q7V00006GlVQ1UAN	a1432000003unPlAAI	1873.46	71191.48		73064.94	Active	BIP Front Loaded Rebate-3	1/1/2024	1/1/2024	1/31/2024
a4Q7V00006GlVQ2UAN	a1432000003unPlAAI	1873.46	69318.02		71191.48	Active	BIP Front Loaded Rebate-3	2/1/2024	2/1/2024	2/29/2024
a4Q7V00006GlVQ3UAN	a1432000003unPlAAI	1873.46	67444.56		69318.02	Active	BIP Front Loaded Rebate-3	3/1/2024	3/1/2024	3/31/2024
a4Q7V00006GlVQ4UAN	a1432000003unPlAAI	1873.46	65571.1		67444.56	Active	BIP Front Loaded Rebate-3	4/1/2024	4/1/2024	4/30/2024
a4Q7V00006GlVQ5UAN	a1432000003unPlAAI	1873.46	63697.64		65571.1	Active	BIP Front Loaded Rebate-3	5/1/2024	5/1/2024	5/31/2024
a4Q7V00006GlVQ6UAN	a1432000003unPlAAI	1873.46	61824.18		63697.64	Active	BIP Front Loaded Rebate-3	6/1/2024	6/1/2024	6/30/2024
a4Q7V00006GlVQ7UAN	a1432000003unPlAAI	1873.46	59950.72		61824.18	Active	BIP Front Loaded Rebate-3	7/1/2024	7/1/2024	7/31/2024
a4Q7V00006GlVQ8UAN	a1432000003unPlAAI	1873.46	58077.26		59950.72	Active	BIP Front Loaded Rebate-3	8/1/2024	8/1/2024	8/31/2024
a4Q7V00006GlVQ9UAN	a1432000003unPlAAI	1873.46	56203.8		58077.26	Draft	BIP Front Loaded Rebate-3	9/1/2024	9/1/2024	9/30/2024
a4Q7V00006GlVQAUA3	a1432000003unPlAAI	1873.46	54330.34		56203.8	Draft	BIP Front Loaded Rebate-3	10/1/2024	10/1/2024	10/31/2024
a4Q7V00006GlVQBUA3	a1432000003unPlAAI	1873.46	52456.88		54330.34	Draft	BIP Front Loaded Rebate-3	11/1/2024	11/1/2024	11/30/2024
a4Q7V00006GlVQCUA3	a1432000003unPlAAI	1873.46	50583.42		52456.88	Draft	BIP Front Loaded Rebate-3	12/1/2024	12/1/2024	12/31/2024
a4Q0e0000325uhUEAQ	a1460000002rUKKAA2	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2010	4/1/2010	4/30/2010
a4Q0e0000325uhVEAQ	a1460000002rUKKAA2	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2010	5/1/2010	5/31/2010
a4Q0e0000325uhWEAQ	a1460000002rUKKAA2	0	0		0	Active	BIP Front Loaded Rebate-3	6/1/2010	6/1/2010	6/30/2010
a4Q0e0000325uhXEAQ	a1460000002rUKKAA2	0	3392.04		0	Active	BIP Front Loaded Rebate-3	7/1/2010	7/1/2010	7/31/2010
a4Q0e0000325uhYEAQ	a1460000002rUKKAA2	0	3392.04		3392.04	Active	BIP Front Loaded Rebate-3	8/1/2010	8/1/2010	8/31/2010
a4Q0e0000325uhZEAQ	a1460000002rUKKAA2	0	3392.04		3392.04	Active	BIP Front Loaded Rebate-3	9/1/2010	9/1/2010	9/30/2010
a4Q0e0000325uhaEAA	a1460000002rUKKAA2	0	6219.34		3392.04	Active	BIP Front Loaded Rebate-3	10/1/2010	10/1/2010	10/31/2010
a4Q0e0000325uhbEAA	a1460000002rUKKAA2	0	6219.34		6219.34	Active	BIP Front Loaded Rebate-3	11/1/2010	11/1/2010	11/30/2010
a4Q0e0000325uhcEAA	a1460000002rUKKAA2	0	6219.34		6219.34	Active	BIP Front Loaded Rebate-3	12/1/2010	12/1/2010	12/31/2010
a4Q0e0000325uhdEAA	a1460000002rUKKAA2	0	8995.86		6219.34	Active	BIP Front Loaded Rebate-3	1/1/2011	1/1/2011	1/31/2011
a4Q0e0000325uheEAA	a1460000002rUKKAA2	0	8995.86		8995.86	Active	BIP Front Loaded Rebate-3	2/1/2011	2/1/2011	2/28/2011
a4Q0e0000325uhfEAA	a1460000002rUKKAA2	0	8995.86		8995.86	Active	BIP Front Loaded Rebate-3	3/1/2011	3/1/2011	3/31/2011
a4Q0e0000325uhgEAA	a1460000002rUKKAA2	0	12155.62		8995.86	Active	BIP Front Loaded Rebate-3	4/1/2011	4/1/2011	4/30/2011
a4Q0e0000325uhhEAA	a1460000002rUKKAA2	0	12155.62		12155.62	Active	BIP Front Loaded Rebate-3	5/1/2011	5/1/2011	5/31/2011
a4Q0e0000325uhiEAA	a1460000002rUKKAA2	0	12155.62		12155.62	Active	BIP Front Loaded Rebate-3	6/1/2011	6/1/2011	6/30/2011
a4Q0e0000325uhjEAA	a1460000002rUKKAA2	0	15033.2		12155.62	Active	BIP Front Loaded Rebate-3	7/1/2011	7/1/2011	7/31/2011
a4Q0e0000325uhkEAA	a1460000002rUKKAA2	0	15033.2		15033.2	Active	BIP Front Loaded Rebate-3	8/1/2011	8/1/2011	8/31/2011
a4Q0e0000325uhlEAA	a1460000002rUKKAA2	0	15033.2		15033.2	Active	BIP Front Loaded Rebate-3	9/1/2011	9/1/2011	9/30/2011
a4Q0e0000325uhmEAA	a1460000002rUKKAA2	0	18075.96		15033.2	Active	BIP Front Loaded Rebate-3	10/1/2011	10/1/2011	10/31/2011
a4Q0e0000325uhnEAA	a1460000002rUKKAA2	0	18075.96		18075.96	Active	BIP Front Loaded Rebate-3	11/1/2011	11/1/2011	11/30/2011
a4Q0e0000325uhoEAA	a1460000002rUKKAA2	0	18075.96		18075.96	Active	BIP Front Loaded Rebate-3	12/1/2011	12/1/2011	12/31/2011
a4Q0e0000325uhpEAA	a1460000002rUKKAA2	0	21306.62		18075.96	Active	BIP Front Loaded Rebate-3	1/1/2012	1/1/2012	1/31/2012
a4Q0e0000325uhqEAA	a1460000002rUKKAA2	0	21306.62		21306.62	Active	BIP Front Loaded Rebate-3	2/1/2012	2/1/2012	2/29/2012
a4Q0e0000325uhrEAA	a1460000002rUKKAA2	0	21306.62		21306.62	Active	BIP Front Loaded Rebate-3	3/1/2012	3/1/2012	3/31/2012
a4Q0e0000325uhsEAA	a1460000002rUKKAA2	0	24115.74		21306.62	Active	BIP Front Loaded Rebate-3	4/1/2012	4/1/2012	4/30/2012
a4Q0e0000325uhtEAA	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	5/1/2012	5/1/2012	5/31/2012
a4Q0e0000325uhuEAA	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	6/1/2012	6/1/2012	6/30/2012
a4Q0e0000325uhvEAA	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	7/1/2012	7/1/2012	7/31/2012
a4Q0e0000325uhwEAA	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	8/1/2012	8/1/2012	8/31/2012
a4Q0e0000325uhxEAA	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	9/1/2012	9/1/2012	9/30/2012
a4Q0e0000325uhyEAA	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	10/1/2012	10/1/2012	10/31/2012
a4Q0e0000325uhzEAA	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	11/1/2012	11/1/2012	11/30/2012
a4Q0e0000325ui0EAA	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	12/1/2012	12/1/2012	12/31/2012
a4Q0e0000325ui1EAA	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	1/1/2013	1/1/2013	1/31/2013
a4Q0e0000325ui2EAA	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	2/1/2013	2/1/2013	2/28/2013
a4Q0e0000325ui3EAA	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	3/1/2013	3/1/2013	3/31/2013
a4Q0e0000325ui4EAA	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	4/1/2013	4/1/2013	4/30/2013
a4Q0e0000325ui5EAA	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	5/1/2013	5/1/2013	5/31/2013
a4Q0e0000325ui6EAA	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	6/1/2013	6/1/2013	6/30/2013
a4Q0e0000325ui7EAA	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	7/1/2013	7/1/2013	7/31/2013
a4Q0e0000325ui8EAA	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	8/1/2013	8/1/2013	8/31/2013
a4Q0e0000325ui9EAA	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	9/1/2013	9/1/2013	9/30/2013
a4Q0e0000325uiAEAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	10/1/2013	10/1/2013	10/31/2013
a4Q0e0000325uiBEAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	11/1/2013	11/1/2013	11/30/2013
a4Q0e0000325uiCEAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	12/1/2013	12/1/2013	12/31/2013
a4Q0e0000325uiDEAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	1/1/2014	1/1/2014	1/31/2014
a4Q0e0000325uiEEAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	2/1/2014	2/1/2014	2/28/2014
a4Q0e0000325uiFEAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	3/1/2014	3/1/2014	3/31/2014
a4Q0e0000325uiGEAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	4/1/2014	4/1/2014	4/30/2014
a4Q0e0000325uiHEAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	5/1/2014	5/1/2014	5/31/2014
a4Q0e0000325uiIEAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	6/1/2014	6/1/2014	6/30/2014
a4Q0e0000325uiJEAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	7/1/2014	7/1/2014	7/31/2014
a4Q0e0000325uiKEAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	8/1/2014	8/1/2014	8/31/2014
a4Q0e0000325uiLEAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	9/1/2014	9/1/2014	9/30/2014
a4Q0e0000325uiMEAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	10/1/2014	10/1/2014	10/31/2014
a4Q0e0000325uiNEAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	11/1/2014	11/1/2014	11/30/2014
a4Q0e0000325uiOEAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	12/1/2014	12/1/2014	12/31/2014
a4Q0e0000325uiPEAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	1/1/2015	1/1/2015	1/31/2015
a4Q0e0000325uiQEAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	2/1/2015	2/1/2015	2/28/2015
a4Q0e0000325uiREAQ	a1460000002rUKKAA2	0	24115.74		24115.74	Active	BIP Front Loaded Rebate-3	3/1/2015	3/1/2015	3/31/2015
a4Q0e0000325uiSEAQ	a1460000002rUKKAA2	401.929	23713.811		24115.74	Active	BIP Front Loaded Rebate-3	4/1/2015	4/1/2015	4/30/2015
a4Q0e0000325uiTEAQ	a1460000002rUKKAA2	401.929	23311.882		23713.811	Active	BIP Front Loaded Rebate-3	5/1/2015	5/1/2015	5/31/2015
a4Q0e0000325uiUEAQ	a1460000002rUKKAA2	401.929	22909.953		23311.882	Active	BIP Front Loaded Rebate-3	6/1/2015	6/1/2015	6/30/2015
a4Q0e0000325uiVEAQ	a1460000002rUKKAA2	401.929	22508.024		22909.953	Active	BIP Front Loaded Rebate-3	7/1/2015	7/1/2015	7/31/2015
a4Q0e0000325uiWEAQ	a1460000002rUKKAA2	401.929	22106.095		22508.024	Active	BIP Front Loaded Rebate-3	8/1/2015	8/1/2015	8/31/2015
a4Q0e0000325uiXEAQ	a1460000002rUKKAA2	401.929	21704.166		22106.095	Active	BIP Front Loaded Rebate-3	9/1/2015	9/1/2015	9/30/2015
a4Q0e0000325uiYEAQ	a1460000002rUKKAA2	401.929	21302.237		21704.166	Active	BIP Front Loaded Rebate-3	10/1/2015	10/1/2015	10/31/2015
a4Q0e0000325uiZEAQ	a1460000002rUKKAA2	401.929	20900.308		21302.237	Active	BIP Front Loaded Rebate-3	11/1/2015	11/1/2015	11/30/2015
a4Q0e0000325uiaEAA	a1460000002rUKKAA2	401.929	20498.379		20900.308	Active	BIP Front Loaded Rebate-3	12/1/2015	12/1/2015	12/31/2015
a4Q0e0000325uibEAA	a1460000002rUKKAA2	401.929	20096.45		20498.379	Active	BIP Front Loaded Rebate-3	1/1/2016	1/1/2016	1/31/2016
a4Q0e0000325uicEAA	a1460000002rUKKAA2	401.929	19694.521		20096.45	Active	BIP Front Loaded Rebate-3	2/1/2016	2/1/2016	2/29/2016
a4Q0e0000325uidEAA	a1460000002rUKKAA2	401.929	19292.592		19694.521	Active	BIP Front Loaded Rebate-3	3/1/2016	3/1/2016	3/31/2016
a4Q0e0000325uieEAA	a1460000002rUKKAA2	401.929	18890.663		19292.592	Active	BIP Front Loaded Rebate-3	4/1/2016	4/1/2016	4/30/2016
a4Q0e0000325uifEAA	a1460000002rUKKAA2	401.929	18488.734		18890.663	Active	BIP Front Loaded Rebate-3	5/1/2016	5/1/2016	5/31/2016
a4Q0e0000325uigEAA	a1460000002rUKKAA2	401.929	18086.805		18488.734	Active	BIP Front Loaded Rebate-3	6/1/2016	6/1/2016	6/30/2016
a4Q0e0000325uihEAA	a1460000002rUKKAA2	401.929	17684.876		18086.805	Active	BIP Front Loaded Rebate-3	7/1/2016	7/1/2016	7/31/2016
a4Q0e0000325uiiEAA	a1460000002rUKKAA2	401.929	17282.947		17684.876	Active	BIP Front Loaded Rebate-3	8/1/2016	8/1/2016	8/31/2016
a4Q0e0000325uijEAA	a1460000002rUKKAA2	401.929	16881.018		17282.947	Active	BIP Front Loaded Rebate-3	9/1/2016	9/1/2016	9/30/2016
a4Q0e0000325uikEAA	a1460000002rUKKAA2	401.929	16479.089		16881.018	Active	BIP Front Loaded Rebate-3	10/1/2016	10/1/2016	10/31/2016
a4Q0e0000325uilEAA	a1460000002rUKKAA2	401.929	16077.16		16479.089	Active	BIP Front Loaded Rebate-3	11/1/2016	11/1/2016	11/30/2016
a4Q0e0000325uimEAA	a1460000002rUKKAA2	401.929	15675.231		16077.16	Active	BIP Front Loaded Rebate-3	12/1/2016	12/1/2016	12/31/2016
a4Q0e0000325uinEAA	a1460000002rUKKAA2	401.929	15273.302		15675.231	Active	BIP Front Loaded Rebate-3	1/1/2017	1/1/2017	1/31/2017
a4Q0e0000325uioEAA	a1460000002rUKKAA2	401.929	14871.373		15273.302	Active	BIP Front Loaded Rebate-3	2/1/2017	2/1/2017	2/28/2017
a4Q0e0000325uipEAA	a1460000002rUKKAA2	401.929	14469.444		14871.373	Active	BIP Front Loaded Rebate-3	3/1/2017	3/1/2017	3/31/2017
a4Q0e0000325uiqEAA	a1460000002rUKKAA2	401.929	14067.515		14469.444	Active	BIP Front Loaded Rebate-3	4/1/2017	4/1/2017	4/30/2017
a4Q0e0000325uirEAA	a1460000002rUKKAA2	401.929	13665.586		14067.515	Active	BIP Front Loaded Rebate-3	5/1/2017	5/1/2017	5/31/2017
a4Q0e0000325uisEAA	a1460000002rUKKAA2	401.929	13263.657		13665.586	Active	BIP Front Loaded Rebate-3	6/1/2017	6/1/2017	6/30/2017
a4Q0e0000325uitEAA	a1460000002rUKKAA2	401.929	12861.728		13263.657	Active	BIP Front Loaded Rebate-3	7/1/2017	7/1/2017	7/31/2017
a4Q0e0000325uiuEAA	a1460000002rUKKAA2	401.929	12459.799		12861.728	Active	BIP Front Loaded Rebate-3	8/1/2017	8/1/2017	8/31/2017
a4Q0e0000325uivEAA	a1460000002rUKKAA2	401.929	12057.87		12459.799	Active	BIP Front Loaded Rebate-3	9/1/2017	9/1/2017	9/30/2017
a4Q0e0000325uiwEAA	a1460000002rUKKAA2	401.929	11655.941		12057.87	Active	BIP Front Loaded Rebate-3	10/1/2017	10/1/2017	10/31/2017
a4Q0e0000325uixEAA	a1460000002rUKKAA2	401.929	11254.012		11655.941	Active	BIP Front Loaded Rebate-3	11/1/2017	11/1/2017	11/30/2017
a4Q0e0000325uiyEAA	a1460000002rUKKAA2	401.929	10852.083		11254.012	Active	BIP Front Loaded Rebate-3	12/1/2017	12/1/2017	12/31/2017
a4Q0e0000325uizEAA	a1460000002rUKKAA2	401.929	10450.154		10852.083	Active	BIP Front Loaded Rebate-3	1/1/2018	1/1/2018	1/31/2018
a4Q0e0000325uj0EAA	a1460000002rUKKAA2	401.929	10048.225		10450.154	Active	BIP Front Loaded Rebate-3	2/1/2018	2/1/2018	2/28/2018
a4Q0e0000325uj1EAA	a1460000002rUKKAA2	401.929	9646.296		10048.225	Active	BIP Front Loaded Rebate-3	3/1/2018	3/1/2018	3/31/2018
a4Q0e0000325uj2EAA	a1460000002rUKKAA2	401.929	9244.367		9646.296	Active	BIP Front Loaded Rebate-3	4/1/2018	4/1/2018	4/30/2018
a4Q0e0000325uj3EAA	a1460000002rUKKAA2	401.929	8842.438		9244.367	Active	BIP Front Loaded Rebate-3	5/1/2018	5/1/2018	5/31/2018
a4Q0e0000325uj4EAA	a1460000002rUKKAA2	401.929	8440.509		8842.438	Active	BIP Front Loaded Rebate-3	6/1/2018	6/1/2018	6/30/2018
a4Q0e0000325uj5EAA	a1460000002rUKKAA2	401.929	8038.58		8440.509	Active	BIP Front Loaded Rebate-3	7/1/2018	7/1/2018	7/31/2018
a4Q0e0000325uj6EAA	a1460000002rUKKAA2	401.929	7636.651		8038.58	Active	BIP Front Loaded Rebate-3	8/1/2018	8/1/2018	8/31/2018
a4Q0e0000325uj7EAA	a1460000002rUKKAA2	401.929	7234.722		7636.651	Active	BIP Front Loaded Rebate-3	9/1/2018	9/1/2018	9/30/2018
a4Q0e0000325uj8EAA	a1460000002rUKKAA2	401.929	6832.793		7234.722	Active	BIP Front Loaded Rebate-3	10/1/2018	10/1/2018	10/31/2018
a4Q0e0000325uj9EAA	a1460000002rUKKAA2	401.929	6430.864		6832.793	Active	BIP Front Loaded Rebate-3	11/1/2018	11/1/2018	11/30/2018
a4Q0e0000325ujAEAQ	a1460000002rUKKAA2	401.929	6028.935		6430.864	Active	BIP Front Loaded Rebate-3	12/1/2018	12/1/2018	12/31/2018
a4Q0e0000325ujBEAQ	a1460000002rUKKAA2	401.929	5627.006		6028.935	Active	BIP Front Loaded Rebate-3	1/1/2019	1/1/2019	1/31/2019
a4Q0e0000325ujCEAQ	a1460000002rUKKAA2	401.929	5225.077		5627.006	Active	BIP Front Loaded Rebate-3	2/1/2019	2/1/2019	2/28/2019
a4Q0e0000325ujDEAQ	a1460000002rUKKAA2	401.929	4823.148		5225.077	Active	BIP Front Loaded Rebate-3	3/1/2019	3/1/2019	3/31/2019
a4Q0e0000325ujEEAQ	a1460000002rUKKAA2	401.929	4421.219		4823.148	Active	BIP Front Loaded Rebate-3	4/1/2019	4/1/2019	4/30/2019
a4Q0e0000325ujFEAQ	a1460000002rUKKAA2	401.929	4019.29		4421.219	Active	BIP Front Loaded Rebate-3	5/1/2019	5/1/2019	5/31/2019
a4Q0e0000325ujGEAQ	a1460000002rUKKAA2	401.929	3617.361		4019.29	Active	BIP Front Loaded Rebate-3	6/1/2019	6/1/2019	6/30/2019
a4Q0e0000325ujHEAQ	a1460000002rUKKAA2	401.929	3215.432		3617.361	Active	BIP Front Loaded Rebate-3	7/1/2019	7/1/2019	7/31/2019
a4Q0e0000325ujIEAQ	a1460000002rUKKAA2	401.929	2813.503		3215.432	Active	BIP Front Loaded Rebate-3	8/1/2019	8/1/2019	8/31/2019
a4Q0e0000325ujJEAQ	a1460000002rUKKAA2	401.929	2411.574		2813.503	Active	BIP Front Loaded Rebate-3	9/1/2019	9/1/2019	9/30/2019
a4Q0e0000325ujKEAQ	a1460000002rUKKAA2	401.929	2009.645		2411.574	Active	BIP Front Loaded Rebate-3	10/1/2019	10/1/2019	10/31/2019
a4Q0e0000325ujLEAQ	a1460000002rUKKAA2	401.929	1607.716		2009.645	Active	BIP Front Loaded Rebate-3	11/1/2019	11/1/2019	11/30/2019
a4Q0e0000325ujMEAQ	a1460000002rUKKAA2	401.929	1205.787		1607.716	Active	BIP Front Loaded Rebate-3	12/1/2019	12/1/2019	12/31/2019
a4Q0e0000325ujNEAQ	a1460000002rUKKAA2	401.929	803.858		1205.787	Active	BIP Front Loaded Rebate-3	1/1/2020	1/1/2020	1/31/2020
a4Q0e0000325ujOEAQ	a1460000002rUKKAA2	401.929	401.929		803.858	Active	BIP Front Loaded Rebate-3	2/1/2020	2/1/2020	2/29/2020
a4Q0e0000325ujPEAQ	a1460000002rUKKAA2	401.929	0		401.929	Active	BIP Front Loaded Rebate-3	3/1/2020	3/1/2020	3/31/2020
a4Q7V00006GmctWUAR	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2021	2/1/2021	2/28/2021
a4Q7V00006GmctXUAR	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2021	3/1/2021	3/31/2021
a4Q7V00006GmctYUAR	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2021	4/1/2021	4/30/2021
a4Q7V00006GmctZUAR	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2021	5/1/2021	5/31/2021
a4Q7V00006GmctaUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	6/1/2021	6/1/2021	6/30/2021
a4Q7V00006GmctbUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	7/1/2021	7/1/2021	7/31/2021
a4Q7V00006GmctcUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	8/1/2021	8/1/2021	8/31/2021
a4Q7V00006GmctdUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	9/1/2021	9/1/2021	9/30/2021
a4Q7V00006GmcteUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	10/1/2021	10/1/2021	10/31/2021
a4Q7V00006GmctfUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	11/1/2021	11/1/2021	11/30/2021
a4Q7V00006GmctgUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	12/1/2021	12/1/2021	12/31/2021
a4Q7V00006GmcthUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2022	1/1/2022	1/31/2022
a4Q7V00006GmctiUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2022	2/1/2022	2/28/2022
a4Q7V00006GmctjUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2022	3/1/2022	3/31/2022
a4Q7V00006GmctkUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2022	4/1/2022	4/30/2022
a4Q7V00006GmctlUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2022	5/1/2022	5/31/2022
a4Q7V00006GmctmUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	6/1/2022	6/1/2022	6/30/2022
a4Q7V00006GmctnUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	7/1/2022	7/1/2022	7/31/2022
a4Q7V00006GmctoUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	8/1/2022	8/1/2022	8/31/2022
a4Q7V00006GmctpUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	9/1/2022	9/1/2022	9/30/2022
a4Q7V00006GmctqUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	10/1/2022	10/1/2022	10/31/2022
a4Q7V00006GmctrUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	11/1/2022	11/1/2022	11/30/2022
a4Q7V00006GmctsUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	12/1/2022	12/1/2022	12/31/2022
a4Q7V00006GmcttUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2023	1/1/2023	1/31/2023
a4Q7V00006GmctuUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2023	2/1/2023	2/28/2023
a4Q7V00006GmctvUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2023	3/1/2023	3/31/2023
a4Q7V00006GmctwUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2023	4/1/2023	4/30/2023
a4Q7V00006GmctxUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2023	5/1/2023	5/31/2023
a4Q7V00006GmctyUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	6/1/2023	6/1/2023	6/30/2023
a4Q7V00006GmctzUAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	7/1/2023	7/1/2023	7/31/2023
a4Q7V00006Gmcu0UAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	8/1/2023	8/1/2023	8/31/2023
a4Q7V00006Gmcu1UAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	9/1/2023	9/1/2023	9/30/2023
a4Q7V00006Gmcu2UAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	10/1/2023	10/1/2023	10/31/2023
a4Q7V00006Gmcu3UAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	11/1/2023	11/1/2023	11/30/2023
a4Q7V00006Gmcu4UAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	12/1/2023	12/1/2023	12/31/2023
a4Q7V00006Gmcu5UAB	a140e000008y1CzAAI	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2024	1/1/2024	1/31/2024
a4Q7V00006Gmcu6UAB	a140e000008y1CzAAI	0	31507.22		0	Active	BIP Front Loaded Rebate-3	2/1/2024	2/1/2024	2/29/2024
a4Q7V00006Gmcu7UAB	a140e000008y1CzAAI	0	31507.22		31507.22	Active	BIP Front Loaded Rebate-3	3/1/2024	3/1/2024	3/31/2024
a4Q7V00006Gmcu8UAB	a140e000008y1CzAAI	0	31507.22		31507.22	Active	BIP Front Loaded Rebate-3	4/1/2024	4/1/2024	4/30/2024
a4Q7V00006Gmcu9UAB	a140e000008y1CzAAI	0	31507.22		31507.22	Active	BIP Front Loaded Rebate-3	5/1/2024	5/1/2024	5/31/2024
a4Q7V00006GmcuAUAR	a140e000008y1CzAAI	0	31507.22		31507.22	Active	BIP Front Loaded Rebate-3	6/1/2024	6/1/2024	6/30/2024
a4Q7V00006GmcuBUAR	a140e000008y1CzAAI	0	31507.22		31507.22	Active	BIP Front Loaded Rebate-3	7/1/2024	7/1/2024	7/31/2024
a4Q7V00006GmcuCUAR	a140e000008y1CzAAI	0	31507.22		31507.22	Active	BIP Front Loaded Rebate-3	8/1/2024	8/1/2024	8/31/2024
a4Q7V00006GmcuDUAR	a140e000008y1CzAAI	0	31507.22		31507.22	Draft	BIP Front Loaded Rebate-3	9/1/2024	9/1/2024	9/30/2024
a4Q7V00006GmcuEUAR	a140e000008y1CzAAI	0	31507.22		31507.22	Draft	BIP Front Loaded Rebate-3	10/1/2024	10/1/2024	10/31/2024
a4Q7V00006GmcuFUAR	a140e000008y1CzAAI	0	31507.22		31507.22	Draft	BIP Front Loaded Rebate-3	11/1/2024	11/1/2024	11/30/2024
a4Q7V00006GmcuGUAR	a140e000008y1CzAAI	0	31507.22		31507.22	Draft	BIP Front Loaded Rebate-3	12/1/2024	12/1/2024	12/31/2024
a4Q0e00003ekNrKEAU	a1460000002s9fNAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2012	1/1/2012	1/31/2012
a4Q0e00003ekNrLEAU	a1460000002s9fNAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2012	2/1/2012	2/29/2012
a4Q0e00003ekNrMEAU	a1460000002s9fNAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2012	3/1/2012	3/31/2012
a4Q0e00003ekNrNEAU	a1460000002s9fNAAQ	0	8628.36		0	Active	BIP Front Loaded Rebate-3	4/1/2012	4/1/2012	4/30/2012
a4Q0e00003ekNrOEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	5/1/2012	5/1/2012	5/31/2012
a4Q0e00003ekNrPEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	6/1/2012	6/1/2012	6/30/2012
a4Q0e00003ekNrQEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	7/1/2012	7/1/2012	7/31/2012
a4Q0e00003ekNrREAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	8/1/2012	8/1/2012	8/31/2012
a4Q0e00003ekNrSEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	9/1/2012	9/1/2012	9/30/2012
a4Q0e00003ekNrTEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	10/1/2012	10/1/2012	10/31/2012
a4Q0e00003ekNrUEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	11/1/2012	11/1/2012	11/30/2012
a4Q0e00003ekNrVEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	12/1/2012	12/1/2012	12/31/2012
a4Q0e00003ekNrWEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	1/1/2013	1/1/2013	1/31/2013
a4Q0e00003ekNrXEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	2/1/2013	2/1/2013	2/28/2013
a4Q0e00003ekNrYEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	3/1/2013	3/1/2013	3/31/2013
a4Q0e00003ekNrZEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	4/1/2013	4/1/2013	4/30/2013
a4Q0e00003ekNraEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	5/1/2013	5/1/2013	5/31/2013
a4Q0e00003ekNrbEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	6/1/2013	6/1/2013	6/30/2013
a4Q0e00003ekNrcEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	7/1/2013	7/1/2013	7/31/2013
a4Q0e00003ekNrdEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	8/1/2013	8/1/2013	8/31/2013
a4Q0e00003ekNreEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	9/1/2013	9/1/2013	9/30/2013
a4Q0e00003ekNrfEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	10/1/2013	10/1/2013	10/31/2013
a4Q0e00003ekNrgEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	11/1/2013	11/1/2013	11/30/2013
a4Q0e00003ekNrhEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	12/1/2013	12/1/2013	12/31/2013
a4Q0e00003ekNriEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	1/1/2014	1/1/2014	1/31/2014
a4Q0e00003ekNrjEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	2/1/2014	2/1/2014	2/28/2014
a4Q0e00003ekNrkEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	3/1/2014	3/1/2014	3/31/2014
a4Q0e00003ekNrlEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	4/1/2014	4/1/2014	4/30/2014
a4Q0e00003ekNrmEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	5/1/2014	5/1/2014	5/31/2014
a4Q0e00003ekNrnEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	6/1/2014	6/1/2014	6/30/2014
a4Q0e00003ekNroEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	7/1/2014	7/1/2014	7/31/2014
a4Q0e00003ekNrpEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	8/1/2014	8/1/2014	8/31/2014
a4Q0e00003ekNrqEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	9/1/2014	9/1/2014	9/30/2014
a4Q0e00003ekNrrEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	10/1/2014	10/1/2014	10/31/2014
a4Q0e00003ekNrsEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	11/1/2014	11/1/2014	11/30/2014
a4Q0e00003ekNrtEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	12/1/2014	12/1/2014	12/31/2014
a4Q0e00003ekNruEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	1/1/2015	1/1/2015	1/31/2015
a4Q0e00003ekNrvEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	2/1/2015	2/1/2015	2/28/2015
a4Q0e00003ekNrwEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	3/1/2015	3/1/2015	3/31/2015
a4Q0e00003ekNrxEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	4/1/2015	4/1/2015	4/30/2015
a4Q0e00003ekNryEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	5/1/2015	5/1/2015	5/31/2015
a4Q0e00003ekNrzEAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	6/1/2015	6/1/2015	6/30/2015
a4Q0e00003ekNs0EAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	7/1/2015	7/1/2015	7/31/2015
a4Q0e00003ekNs1EAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	8/1/2015	8/1/2015	8/31/2015
a4Q0e00003ekNs2EAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	9/1/2015	9/1/2015	9/30/2015
a4Q0e00003ekNs3EAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	10/1/2015	10/1/2015	10/31/2015
a4Q0e00003ekNs4EAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	11/1/2015	11/1/2015	11/30/2015
a4Q0e00003ekNs5EAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	12/1/2015	12/1/2015	12/31/2015
a4Q0e00003ekNs6EAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	1/1/2016	1/1/2016	1/31/2016
a4Q0e00003ekNs7EAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	2/1/2016	2/1/2016	2/29/2016
a4Q0e00003ekNs8EAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	3/1/2016	3/1/2016	3/31/2016
a4Q0e00003ekNs9EAE	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	4/1/2016	4/1/2016	4/30/2016
a4Q0e00003ekNsAEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	5/1/2016	5/1/2016	5/31/2016
a4Q0e00003ekNsBEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	6/1/2016	6/1/2016	6/30/2016
a4Q0e00003ekNsCEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	7/1/2016	7/1/2016	7/31/2016
a4Q0e00003ekNsDEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	8/1/2016	8/1/2016	8/31/2016
a4Q0e00003ekNsEEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	9/1/2016	9/1/2016	9/30/2016
a4Q0e00003ekNsFEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	10/1/2016	10/1/2016	10/31/2016
a4Q0e00003ekNsGEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	11/1/2016	11/1/2016	11/30/2016
a4Q0e00003ekNsHEAU	a1460000002s9fNAAQ	0	8628.36		8628.36	Active	BIP Front Loaded Rebate-3	12/1/2016	12/1/2016	12/31/2016
a4Q0e00003ekNsIEAU	a1460000002s9fNAAQ	143.806	8484.554		8628.36	Active	BIP Front Loaded Rebate-3	1/1/2017	1/1/2017	1/31/2017
a4Q0e00003ekNsJEAU	a1460000002s9fNAAQ	143.806	8340.748		8484.554	Active	BIP Front Loaded Rebate-3	2/1/2017	2/1/2017	2/28/2017
a4Q0e00003ekNsKEAU	a1460000002s9fNAAQ	143.806	8196.942		8340.748	Active	BIP Front Loaded Rebate-3	3/1/2017	3/1/2017	3/31/2017
a4Q0e00003ekNsLEAU	a1460000002s9fNAAQ	143.806	8053.136		8196.942	Active	BIP Front Loaded Rebate-3	4/1/2017	4/1/2017	4/30/2017
a4Q0e00003ekNsMEAU	a1460000002s9fNAAQ	143.806	7909.33		8053.136	Active	BIP Front Loaded Rebate-3	5/1/2017	5/1/2017	5/31/2017
a4Q0e00003ekNsNEAU	a1460000002s9fNAAQ	143.806	7765.524		7909.33	Active	BIP Front Loaded Rebate-3	6/1/2017	6/1/2017	6/30/2017
a4Q0e00003ekNsOEAU	a1460000002s9fNAAQ	143.806	7621.718		7765.524	Active	BIP Front Loaded Rebate-3	7/1/2017	7/1/2017	7/31/2017
a4Q0e00003ekNsPEAU	a1460000002s9fNAAQ	143.806	7477.912		7621.718	Active	BIP Front Loaded Rebate-3	8/1/2017	8/1/2017	8/31/2017
a4Q0e00003ekNsQEAU	a1460000002s9fNAAQ	143.806	7334.106		7477.912	Active	BIP Front Loaded Rebate-3	9/1/2017	9/1/2017	9/30/2017
a4Q0e00003ekNsREAU	a1460000002s9fNAAQ	143.806	7190.3		7334.106	Active	BIP Front Loaded Rebate-3	10/1/2017	10/1/2017	10/31/2017
a4Q0e00003ekNsSEAU	a1460000002s9fNAAQ	143.806	7046.494		7190.3	Active	BIP Front Loaded Rebate-3	11/1/2017	11/1/2017	11/30/2017
a4Q0e00003ekNsTEAU	a1460000002s9fNAAQ	143.806	6902.688		7046.494	Active	BIP Front Loaded Rebate-3	12/1/2017	12/1/2017	12/31/2017
a4Q0e00003ekNsUEAU	a1460000002s9fNAAQ	143.806	6758.882		6902.688	Active	BIP Front Loaded Rebate-3	1/1/2018	1/1/2018	1/31/2018
a4Q0e00003ekNsVEAU	a1460000002s9fNAAQ	143.806	6615.076		6758.882	Active	BIP Front Loaded Rebate-3	2/1/2018	2/1/2018	2/28/2018
a4Q0e00003ekNsWEAU	a1460000002s9fNAAQ	143.806	6471.27		6615.076	Active	BIP Front Loaded Rebate-3	3/1/2018	3/1/2018	3/31/2018
a4Q0e00003ekNsXEAU	a1460000002s9fNAAQ	143.806	6327.464		6471.27	Active	BIP Front Loaded Rebate-3	4/1/2018	4/1/2018	4/30/2018
a4Q0e00003ekNsYEAU	a1460000002s9fNAAQ	143.806	6183.658		6327.464	Active	BIP Front Loaded Rebate-3	5/1/2018	5/1/2018	5/31/2018
a4Q0e00003ekNsZEAU	a1460000002s9fNAAQ	143.806	6039.852		6183.658	Active	BIP Front Loaded Rebate-3	6/1/2018	6/1/2018	6/30/2018
a4Q0e00003ekNsaEAE	a1460000002s9fNAAQ	143.806	5896.046		6039.852	Active	BIP Front Loaded Rebate-3	7/1/2018	7/1/2018	7/31/2018
a4Q0e00003ekNsbEAE	a1460000002s9fNAAQ	143.806	5752.24		5896.046	Active	BIP Front Loaded Rebate-3	8/1/2018	8/1/2018	8/31/2018
a4Q0e00003ekNscEAE	a1460000002s9fNAAQ	143.806	5608.434		5752.24	Active	BIP Front Loaded Rebate-3	9/1/2018	9/1/2018	9/30/2018
a4Q0e00003ekNsdEAE	a1460000002s9fNAAQ	143.806	5464.628		5608.434	Active	BIP Front Loaded Rebate-3	10/1/2018	10/1/2018	10/31/2018
a4Q0e00003ekNseEAE	a1460000002s9fNAAQ	143.806	5320.822		5464.628	Active	BIP Front Loaded Rebate-3	11/1/2018	11/1/2018	11/30/2018
a4Q0e00003ekNsfEAE	a1460000002s9fNAAQ	143.806	5177.016		5320.822	Active	BIP Front Loaded Rebate-3	12/1/2018	12/1/2018	12/31/2018
a4Q0e00003ekNsgEAE	a1460000002s9fNAAQ	143.806	5033.21		5177.016	Active	BIP Front Loaded Rebate-3	1/1/2019	1/1/2019	1/31/2019
a4Q0e00003ekNshEAE	a1460000002s9fNAAQ	143.806	4889.404		5033.21	Active	BIP Front Loaded Rebate-3	2/1/2019	2/1/2019	2/28/2019
a4Q0e00003ekNsiEAE	a1460000002s9fNAAQ	143.806	4745.598		4889.404	Active	BIP Front Loaded Rebate-3	3/1/2019	3/1/2019	3/31/2019
a4Q0e00003ekNsjEAE	a1460000002s9fNAAQ	143.806	4601.792		4745.598	Active	BIP Front Loaded Rebate-3	4/1/2019	4/1/2019	4/30/2019
a4Q0e00003ekNskEAE	a1460000002s9fNAAQ	143.806	4457.986		4601.792	Active	BIP Front Loaded Rebate-3	5/1/2019	5/1/2019	5/31/2019
a4Q0e00003ekNslEAE	a1460000002s9fNAAQ	143.806	4314.18		4457.986	Active	BIP Front Loaded Rebate-3	6/1/2019	6/1/2019	6/30/2019
a4Q0e00003ekNsmEAE	a1460000002s9fNAAQ	143.806	4170.374		4314.18	Active	BIP Front Loaded Rebate-3	7/1/2019	7/1/2019	7/31/2019
a4Q0e00003ekNsnEAE	a1460000002s9fNAAQ	143.806	4026.568		4170.374	Active	BIP Front Loaded Rebate-3	8/1/2019	8/1/2019	8/31/2019
a4Q0e00003ekNsoEAE	a1460000002s9fNAAQ	143.806	3882.762		4026.568	Active	BIP Front Loaded Rebate-3	9/1/2019	9/1/2019	9/30/2019
a4Q0e00003ekNspEAE	a1460000002s9fNAAQ	143.806	3738.956		3882.762	Active	BIP Front Loaded Rebate-3	10/1/2019	10/1/2019	10/31/2019
a4Q0e00003ekNsqEAE	a1460000002s9fNAAQ	143.806	3595.15		3738.956	Active	BIP Front Loaded Rebate-3	11/1/2019	11/1/2019	11/30/2019
a4Q0e00003ekNsrEAE	a1460000002s9fNAAQ	143.806	3451.344		3595.15	Active	BIP Front Loaded Rebate-3	12/1/2019	12/1/2019	12/31/2019
a4Q0e00003ekNssEAE	a1460000002s9fNAAQ	143.806	3307.538		3451.344	Active	BIP Front Loaded Rebate-3	1/1/2020	1/1/2020	1/31/2020
a4Q0e00003ekNstEAE	a1460000002s9fNAAQ	143.806	3163.732		3307.538	Active	BIP Front Loaded Rebate-3	2/1/2020	2/1/2020	2/29/2020
a4Q0e00003ekNsuEAE	a1460000002s9fNAAQ	143.806	3019.926		3163.732	Active	BIP Front Loaded Rebate-3	3/1/2020	3/1/2020	3/31/2020
a4Q0e00003ekNsvEAE	a1460000002s9fNAAQ	143.806	2876.12		3019.926	Active	BIP Front Loaded Rebate-3	4/1/2020	4/1/2020	4/30/2020
a4Q0e00003ekNswEAE	a1460000002s9fNAAQ	143.806	2732.314		2876.12	Active	BIP Front Loaded Rebate-3	5/1/2020	5/1/2020	5/31/2020
a4Q0e00003ekNsxEAE	a1460000002s9fNAAQ	143.806	2588.508		2732.314	Active	BIP Front Loaded Rebate-3	6/1/2020	6/1/2020	6/30/2020
a4Q0e00003ekNsyEAE	a1460000002s9fNAAQ	143.806	2444.702		2588.508	Active	BIP Front Loaded Rebate-3	7/1/2020	7/1/2020	7/31/2020
a4Q0e00003ekNszEAE	a1460000002s9fNAAQ	143.806	2300.896		2444.702	Active	BIP Front Loaded Rebate-3	8/1/2020	8/1/2020	8/31/2020
a4Q0e00003ekNt0EAE	a1460000002s9fNAAQ	143.806	2157.09		2300.896	Active	BIP Front Loaded Rebate-3	9/1/2020	9/1/2020	9/30/2020
a4Q0e00003ekNt1EAE	a1460000002s9fNAAQ	143.806	2013.284		2157.09	Active	BIP Front Loaded Rebate-3	10/1/2020	10/1/2020	10/31/2020
a4Q0e00003ekNt2EAE	a1460000002s9fNAAQ	143.806	1869.478		2013.284	Active	BIP Front Loaded Rebate-3	11/1/2020	11/1/2020	11/30/2020
a4Q0e00003ekNt3EAE	a1460000002s9fNAAQ	143.806	1725.672		1869.478	Active	BIP Front Loaded Rebate-3	12/1/2020	12/1/2020	12/31/2020
a4Q0e00003ekNt4EAE	a1460000002s9fNAAQ	143.806	1581.866		1725.672	Active	BIP Front Loaded Rebate-3	1/1/2021	1/1/2021	1/31/2021
a4Q0e00003ekNt5EAE	a1460000002s9fNAAQ	143.806	1438.06		1581.866	Draft	BIP Front Loaded Rebate-3	2/1/2021	2/1/2021	2/28/2021
a4Q0e00003ekNt6EAE	a1460000002s9fNAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2021	3/1/2021	3/31/2021
a4Q0e00003ekNt7EAE	a1460000002s9fNAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2021	4/1/2021	4/30/2021
a4Q0e00003ekNt8EAE	a1460000002s9fNAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2021	5/1/2021	5/31/2021
a4Q0e00003ekNt9EAE	a1460000002s9fNAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	6/1/2021	6/1/2021	6/30/2021
a4Q0e00003ekNtAEAU	a1460000002s9fNAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	7/1/2021	7/1/2021	7/31/2021
a4Q0e00003ekNtBEAU	a1460000002s9fNAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	8/1/2021	8/1/2021	8/31/2021
a4Q0e00003ekNtCEAU	a1460000002s9fNAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	9/1/2021	9/1/2021	9/30/2021
a4Q0e00003ekNtDEAU	a1460000002s9fNAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	10/1/2021	10/1/2021	10/31/2021
a4Q0e00003ekNtEEAU	a1460000002s9fNAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	11/1/2021	11/1/2021	11/30/2021
a4Q0e00003ekNtFEAU	a1460000002s9fNAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	12/1/2021	12/1/2021	12/31/2021
a4Q3200001ARDgQEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2012	1/1/2012	1/31/2012
a4Q3200001ARDgREAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2012	2/1/2012	2/29/2012
a4Q3200001ARDgSEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2012	3/1/2012	3/31/2012
a4Q3200001ARDgTEAX	a1460000002s9fOAAQ	0	19907.14		0	Active	BIP Front Loaded Rebate-3	4/1/2012	4/1/2012	4/30/2012
a4Q3200001ARDgUEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	5/1/2012	5/1/2012	5/31/2012
a4Q3200001ARDgVEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	6/1/2012	6/1/2012	6/30/2012
a4Q3200001ARDgWEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	7/1/2012	7/1/2012	7/31/2012
a4Q3200001ARDgXEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	8/1/2012	8/1/2012	8/31/2012
a4Q3200001ARDgYEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	9/1/2012	9/1/2012	9/30/2012
a4Q3200001ARDgZEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	10/1/2012	10/1/2012	10/31/2012
a4Q3200001ARDgaEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	11/1/2012	11/1/2012	11/30/2012
a4Q3200001ARDgbEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	12/1/2012	12/1/2012	12/31/2012
a4Q3200001ARDgcEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	1/1/2013	1/1/2013	1/31/2013
a4Q3200001ARDgdEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	2/1/2013	2/1/2013	2/28/2013
a4Q3200001ARDgeEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	3/1/2013	3/1/2013	3/31/2013
a4Q3200001ARDgfEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	4/1/2013	4/1/2013	4/30/2013
a4Q3200001ARDggEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	5/1/2013	5/1/2013	5/31/2013
a4Q3200001ARDghEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	6/1/2013	6/1/2013	6/30/2013
a4Q3200001ARDgiEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	7/1/2013	7/1/2013	7/31/2013
a4Q3200001ARDgjEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	8/1/2013	8/1/2013	8/31/2013
a4Q3200001ARDgkEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	9/1/2013	9/1/2013	9/30/2013
a4Q3200001ARDglEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	10/1/2013	10/1/2013	10/31/2013
a4Q3200001ARDgmEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	11/1/2013	11/1/2013	11/30/2013
a4Q3200001ARDgnEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	12/1/2013	12/1/2013	12/31/2013
a4Q3200001ARDgoEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	1/1/2014	1/1/2014	1/31/2014
a4Q3200001ARDgpEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	2/1/2014	2/1/2014	2/28/2014
a4Q3200001ARDgqEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	3/1/2014	3/1/2014	3/31/2014
a4Q3200001ARDgrEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	4/1/2014	4/1/2014	4/30/2014
a4Q3200001ARDgsEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	5/1/2014	5/1/2014	5/31/2014
a4Q3200001ARDgtEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	6/1/2014	6/1/2014	6/30/2014
a4Q3200001ARDguEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	7/1/2014	7/1/2014	7/31/2014
a4Q3200001ARDgvEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	8/1/2014	8/1/2014	8/31/2014
a4Q3200001ARDgwEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	9/1/2014	9/1/2014	9/30/2014
a4Q3200001ARDgxEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	10/1/2014	10/1/2014	10/31/2014
a4Q3200001ARDgyEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	11/1/2014	11/1/2014	11/30/2014
a4Q3200001ARDgzEAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	12/1/2014	12/1/2014	12/31/2014
a4Q3200001ARDh0EAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	1/1/2015	1/1/2015	1/31/2015
a4Q3200001ARDh1EAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	2/1/2015	2/1/2015	2/28/2015
a4Q3200001ARDh2EAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	3/1/2015	3/1/2015	3/31/2015
a4Q3200001ARDh3EAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	4/1/2015	4/1/2015	4/30/2015
a4Q3200001ARDh4EAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	5/1/2015	5/1/2015	5/31/2015
a4Q3200001ARDh5EAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	6/1/2015	6/1/2015	6/30/2015
a4Q3200001ARDh6EAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	7/1/2015	7/1/2015	7/31/2015
a4Q3200001ARDh7EAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	8/1/2015	8/1/2015	8/31/2015
a4Q3200001ARDh8EAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	9/1/2015	9/1/2015	9/30/2015
a4Q3200001ARDh9EAH	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	10/1/2015	10/1/2015	10/31/2015
a4Q3200001ARDhAEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	11/1/2015	11/1/2015	11/30/2015
a4Q3200001ARDhBEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	12/1/2015	12/1/2015	12/31/2015
a4Q3200001ARDhCEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	1/1/2016	1/1/2016	1/31/2016
a4Q3200001ARDhDEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	2/1/2016	2/1/2016	2/29/2016
a4Q3200001ARDhEEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	3/1/2016	3/1/2016	3/31/2016
a4Q3200001ARDhFEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	4/1/2016	4/1/2016	4/30/2016
a4Q3200001ARDhGEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	5/1/2016	5/1/2016	5/31/2016
a4Q3200001ARDhHEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	6/1/2016	6/1/2016	6/30/2016
a4Q3200001ARDhIEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	7/1/2016	7/1/2016	7/31/2016
a4Q3200001ARDhJEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	8/1/2016	8/1/2016	8/31/2016
a4Q3200001ARDhKEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	9/1/2016	9/1/2016	9/30/2016
a4Q3200001ARDhLEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	10/1/2016	10/1/2016	10/31/2016
a4Q3200001ARDhMEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	11/1/2016	11/1/2016	11/30/2016
a4Q3200001ARDhNEAX	a1460000002s9fOAAQ	0	19907.14		19907.14	Active	BIP Front Loaded Rebate-3	12/1/2016	12/1/2016	12/31/2016
a4Q3200001ARDhOEAX	a1460000002s9fOAAQ	331.7856667	19575.35433		19907.14	Active	BIP Front Loaded Rebate-3	1/1/2017	1/1/2017	1/31/2017
a4Q3200001ARDhPEAX	a1460000002s9fOAAQ	331.7856667	19243.56867		19575.35433	Active	BIP Front Loaded Rebate-3	2/1/2017	2/1/2017	2/28/2017
a4Q3200001ARDhQEAX	a1460000002s9fOAAQ	331.7856667	18911.783		19243.56867	Active	BIP Front Loaded Rebate-3	3/1/2017	3/1/2017	3/31/2017
a4Q3200001ARDhREAX	a1460000002s9fOAAQ	331.7856667	18579.99733		18911.783	Active	BIP Front Loaded Rebate-3	4/1/2017	4/1/2017	4/30/2017
a4Q3200001ARDhSEAX	a1460000002s9fOAAQ	331.7856667	18248.21167		18579.99733	Active	BIP Front Loaded Rebate-3	5/1/2017	5/1/2017	5/31/2017
a4Q3200001ARDhTEAX	a1460000002s9fOAAQ	331.7856667	17916.426		18248.21167	Active	BIP Front Loaded Rebate-3	6/1/2017	6/1/2017	6/30/2017
a4Q3200001ARDhUEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	7/1/2017	7/1/2017	7/31/2017
a4Q3200001ARDhVEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	8/1/2017	8/1/2017	8/31/2017
a4Q3200001ARDhWEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	9/1/2017	9/1/2017	9/30/2017
a4Q3200001ARDhXEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	10/1/2017	10/1/2017	10/31/2017
a4Q3200001ARDhYEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	11/1/2017	11/1/2017	11/30/2017
a4Q3200001ARDhZEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	12/1/2017	12/1/2017	12/31/2017
a4Q3200001ARDhaEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2018	1/1/2018	1/31/2018
a4Q3200001ARDhbEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2018	2/1/2018	2/28/2018
a4Q3200001ARDhcEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2018	3/1/2018	3/31/2018
a4Q3200001ARDhdEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2018	4/1/2018	4/30/2018
a4Q3200001ARDheEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2018	5/1/2018	5/31/2018
a4Q3200001ARDhfEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	6/1/2018	6/1/2018	6/30/2018
a4Q3200001ARDhgEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	7/1/2018	7/1/2018	7/31/2018
a4Q3200001ARDhhEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	8/1/2018	8/1/2018	8/31/2018
a4Q3200001ARDhiEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	9/1/2018	9/1/2018	9/30/2018
a4Q3200001ARDhjEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	10/1/2018	10/1/2018	10/31/2018
a4Q3200001ARDhkEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	11/1/2018	11/1/2018	11/30/2018
a4Q3200001ARDhlEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	12/1/2018	12/1/2018	12/31/2018
a4Q3200001ARDhmEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2019	1/1/2019	1/31/2019
a4Q3200001ARDhnEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2019	2/1/2019	2/28/2019
a4Q3200001ARDhoEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2019	3/1/2019	3/31/2019
a4Q3200001ARDhpEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2019	4/1/2019	4/30/2019
a4Q3200001ARDhqEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2019	5/1/2019	5/31/2019
a4Q3200001ARDhrEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	6/1/2019	6/1/2019	6/30/2019
a4Q3200001ARDhsEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	7/1/2019	7/1/2019	7/31/2019
a4Q3200001ARDhtEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	8/1/2019	8/1/2019	8/31/2019
a4Q3200001ARDhuEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	9/1/2019	9/1/2019	9/30/2019
a4Q3200001ARDhvEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	10/1/2019	10/1/2019	10/31/2019
a4Q3200001ARDhwEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	11/1/2019	11/1/2019	11/30/2019
a4Q3200001ARDhxEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	12/1/2019	12/1/2019	12/31/2019
a4Q3200001ARDhyEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2020	1/1/2020	1/31/2020
a4Q3200001ARDhzEAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2020	2/1/2020	2/29/2020
a4Q3200001ARDi0EAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2020	3/1/2020	3/31/2020
a4Q3200001ARDi1EAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2020	4/1/2020	4/30/2020
a4Q3200001ARDi2EAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2020	5/1/2020	5/31/2020
a4Q3200001ARDi3EAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	6/1/2020	6/1/2020	6/30/2020
a4Q3200001ARDi4EAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	7/1/2020	7/1/2020	7/31/2020
a4Q3200001ARDi5EAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	8/1/2020	8/1/2020	8/31/2020
a4Q3200001ARDi6EAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	9/1/2020	9/1/2020	9/30/2020
a4Q3200001ARDi7EAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	10/1/2020	10/1/2020	10/31/2020
a4Q3200001ARDi8EAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	11/1/2020	11/1/2020	11/30/2020
a4Q3200001ARDi9EAH	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	12/1/2020	12/1/2020	12/31/2020
a4Q3200001ARDiAEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2021	1/1/2021	1/31/2021
a4Q3200001ARDiBEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2021	2/1/2021	2/28/2021
a4Q3200001ARDiCEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2021	3/1/2021	3/31/2021
a4Q3200001ARDiDEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2021	4/1/2021	4/30/2021
a4Q3200001ARDiEEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2021	5/1/2021	5/31/2021
a4Q3200001ARDiFEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	6/1/2021	6/1/2021	6/30/2021
a4Q3200001ARDiGEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	7/1/2021	7/1/2021	7/31/2021
a4Q3200001ARDiHEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	8/1/2021	8/1/2021	8/31/2021
a4Q3200001ARDiIEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	9/1/2021	9/1/2021	9/30/2021
a4Q3200001ARDiJEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	10/1/2021	10/1/2021	10/31/2021
a4Q3200001ARDiKEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	11/1/2021	11/1/2021	11/30/2021
a4Q3200001ARDiLEAX	a1460000002s9fOAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	12/1/2021	12/1/2021	12/31/2021
a4Q7V000049xZdbUAE	a1460000002s9fPAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2012	1/1/2012	1/31/2012
a4Q7V000049xZdcUAE	a1460000002s9fPAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2012	2/1/2012	2/29/2012
a4Q7V000049xZddUAE	a1460000002s9fPAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2012	3/1/2012	3/31/2012
a4Q7V000049xZdeUAE	a1460000002s9fPAAQ	0	41053.42		0	Active	BIP Front Loaded Rebate-3	4/1/2012	4/1/2012	4/30/2012
a4Q7V000049xZdfUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	5/1/2012	5/1/2012	5/31/2012
a4Q7V000049xZdgUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	6/1/2012	6/1/2012	6/30/2012
a4Q7V000049xZdhUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	7/1/2012	7/1/2012	7/31/2012
a4Q7V000049xZdiUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	8/1/2012	8/1/2012	8/31/2012
a4Q7V000049xZdjUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	9/1/2012	9/1/2012	9/30/2012
a4Q7V000049xZdkUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	10/1/2012	10/1/2012	10/31/2012
a4Q7V000049xZdlUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	11/1/2012	11/1/2012	11/30/2012
a4Q7V000049xZdmUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	12/1/2012	12/1/2012	12/31/2012
a4Q7V000049xZdnUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	1/1/2013	1/1/2013	1/31/2013
a4Q7V000049xZdoUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	2/1/2013	2/1/2013	2/28/2013
a4Q7V000049xZdpUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	3/1/2013	3/1/2013	3/31/2013
a4Q7V000049xZdqUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	4/1/2013	4/1/2013	4/30/2013
a4Q7V000049xZdrUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	5/1/2013	5/1/2013	5/31/2013
a4Q7V000049xZdsUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	6/1/2013	6/1/2013	6/30/2013
a4Q7V000049xZdtUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	7/1/2013	7/1/2013	7/31/2013
a4Q7V000049xZduUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	8/1/2013	8/1/2013	8/31/2013
a4Q7V000049xZdvUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	9/1/2013	9/1/2013	9/30/2013
a4Q7V000049xZdwUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	10/1/2013	10/1/2013	10/31/2013
a4Q7V000049xZdxUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	11/1/2013	11/1/2013	11/30/2013
a4Q7V000049xZdyUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	12/1/2013	12/1/2013	12/31/2013
a4Q7V000049xZdzUAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	1/1/2014	1/1/2014	1/31/2014
a4Q7V000049xZe0UAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	2/1/2014	2/1/2014	2/28/2014
a4Q7V000049xZe1UAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	3/1/2014	3/1/2014	3/31/2014
a4Q7V000049xZe2UAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	4/1/2014	4/1/2014	4/30/2014
a4Q7V000049xZe3UAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	5/1/2014	5/1/2014	5/31/2014
a4Q7V000049xZe4UAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	6/1/2014	6/1/2014	6/30/2014
a4Q7V000049xZe5UAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	7/1/2014	7/1/2014	7/31/2014
a4Q7V000049xZe6UAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	8/1/2014	8/1/2014	8/31/2014
a4Q7V000049xZe7UAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	9/1/2014	9/1/2014	9/30/2014
a4Q7V000049xZe8UAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	10/1/2014	10/1/2014	10/31/2014
a4Q7V000049xZe9UAE	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	11/1/2014	11/1/2014	11/30/2014
a4Q7V000049xZeAUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	12/1/2014	12/1/2014	12/31/2014
a4Q7V000049xZeBUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	1/1/2015	1/1/2015	1/31/2015
a4Q7V000049xZeCUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	2/1/2015	2/1/2015	2/28/2015
a4Q7V000049xZeDUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	3/1/2015	3/1/2015	3/31/2015
a4Q7V000049xZeEUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	4/1/2015	4/1/2015	4/30/2015
a4Q7V000049xZeFUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	5/1/2015	5/1/2015	5/31/2015
a4Q7V000049xZeGUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	6/1/2015	6/1/2015	6/30/2015
a4Q7V000049xZeHUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	7/1/2015	7/1/2015	7/31/2015
a4Q7V000049xZeIUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	8/1/2015	8/1/2015	8/31/2015
a4Q7V000049xZeJUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	9/1/2015	9/1/2015	9/30/2015
a4Q7V000049xZeKUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	10/1/2015	10/1/2015	10/31/2015
a4Q7V000049xZeLUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	11/1/2015	11/1/2015	11/30/2015
a4Q7V000049xZeMUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	12/1/2015	12/1/2015	12/31/2015
a4Q7V000049xZeNUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	1/1/2016	1/1/2016	1/31/2016
a4Q7V000049xZeOUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	2/1/2016	2/1/2016	2/29/2016
a4Q7V000049xZePUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	3/1/2016	3/1/2016	3/31/2016
a4Q7V000049xZeQUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	4/1/2016	4/1/2016	4/30/2016
a4Q7V000049xZeRUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	5/1/2016	5/1/2016	5/31/2016
a4Q7V000049xZeSUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	6/1/2016	6/1/2016	6/30/2016
a4Q7V000049xZeTUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	7/1/2016	7/1/2016	7/31/2016
a4Q7V000049xZeUUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	8/1/2016	8/1/2016	8/31/2016
a4Q7V000049xZeVUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	9/1/2016	9/1/2016	9/30/2016
a4Q7V000049xZeWUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	10/1/2016	10/1/2016	10/31/2016
a4Q7V000049xZeXUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	11/1/2016	11/1/2016	11/30/2016
a4Q7V000049xZeYUAU	a1460000002s9fPAAQ	0	41053.42		41053.42	Active	BIP Front Loaded Rebate-3	12/1/2016	12/1/2016	12/31/2016
a4Q7V000049xZeZUAU	a1460000002s9fPAAQ	684.2236667	40369.19633		41053.42	Active	BIP Front Loaded Rebate-3	1/1/2017	1/1/2017	1/31/2017
a4Q7V000049xZeaUAE	a1460000002s9fPAAQ	684.2236667	39684.97267		40369.19633	Active	BIP Front Loaded Rebate-3	2/1/2017	2/1/2017	2/28/2017
a4Q7V000049xZebUAE	a1460000002s9fPAAQ	684.2236667	39000.749		39684.97267	Active	BIP Front Loaded Rebate-3	3/1/2017	3/1/2017	3/31/2017
a4Q7V000049xZecUAE	a1460000002s9fPAAQ	684.2236667	38316.52533		39000.749	Active	BIP Front Loaded Rebate-3	4/1/2017	4/1/2017	4/30/2017
a4Q7V000049xZedUAE	a1460000002s9fPAAQ	684.2236667	37632.30167		38316.52533	Active	BIP Front Loaded Rebate-3	5/1/2017	5/1/2017	5/31/2017
a4Q7V000049xZeeUAE	a1460000002s9fPAAQ	684.2236667	36948.078		37632.30167	Active	BIP Front Loaded Rebate-3	6/1/2017	6/1/2017	6/30/2017
a4Q7V000049xZefUAE	a1460000002s9fPAAQ	684.2236667	36263.85433		36948.078	Active	BIP Front Loaded Rebate-3	7/1/2017	7/1/2017	7/31/2017
a4Q7V000049xZegUAE	a1460000002s9fPAAQ	684.2236667	35579.63067		36263.85433	Active	BIP Front Loaded Rebate-3	8/1/2017	8/1/2017	8/31/2017
a4Q7V000049xZehUAE	a1460000002s9fPAAQ	684.2236667	34895.407		35579.63067	Active	BIP Front Loaded Rebate-3	9/1/2017	9/1/2017	9/30/2017
a4Q7V000049xZeiUAE	a1460000002s9fPAAQ	684.2236667	34211.18333		34895.407	Active	BIP Front Loaded Rebate-3	10/1/2017	10/1/2017	10/31/2017
a4Q7V000049xZejUAE	a1460000002s9fPAAQ	684.2236667	33526.95967		34211.18333	Active	BIP Front Loaded Rebate-3	11/1/2017	11/1/2017	11/30/2017
a4Q7V000049xZekUAE	a1460000002s9fPAAQ	684.2236667	32842.736		33526.95967	Active	BIP Front Loaded Rebate-3	12/1/2017	12/1/2017	12/31/2017
a4Q7V000049xZelUAE	a1460000002s9fPAAQ	684.2236667	32158.51233		32842.736	Active	BIP Front Loaded Rebate-3	1/1/2018	1/1/2018	1/31/2018
a4Q7V000049xZemUAE	a1460000002s9fPAAQ	684.2236667	31474.28867		32158.51233	Active	BIP Front Loaded Rebate-3	2/1/2018	2/1/2018	2/28/2018
a4Q7V000049xZenUAE	a1460000002s9fPAAQ	684.2236667	30790.065		31474.28867	Active	BIP Front Loaded Rebate-3	3/1/2018	3/1/2018	3/31/2018
a4Q7V000049xZeoUAE	a1460000002s9fPAAQ	684.2236667	30105.84133		30790.065	Active	BIP Front Loaded Rebate-3	4/1/2018	4/1/2018	4/30/2018
a4Q7V000049xZepUAE	a1460000002s9fPAAQ	684.2236667	29421.61767		30105.84133	Active	BIP Front Loaded Rebate-3	5/1/2018	5/1/2018	5/31/2018
a4Q7V000049xZeqUAE	a1460000002s9fPAAQ	684.2236667	28737.394		29421.61767	Active	BIP Front Loaded Rebate-3	6/1/2018	6/1/2018	6/30/2018
a4Q7V000049xZerUAE	a1460000002s9fPAAQ	684.2236667	28053.17033		28737.394	Active	BIP Front Loaded Rebate-3	7/1/2018	7/1/2018	7/31/2018
a4Q7V000049xZesUAE	a1460000002s9fPAAQ	684.2236667	27368.94667		28053.17033	Active	BIP Front Loaded Rebate-3	8/1/2018	8/1/2018	8/31/2018
a4Q7V000049xZetUAE	a1460000002s9fPAAQ	684.2236667	26684.723		27368.94667	Active	BIP Front Loaded Rebate-3	9/1/2018	9/1/2018	9/30/2018
a4Q7V000049xZeuUAE	a1460000002s9fPAAQ	684.2236667	26000.49933		26684.723	Active	BIP Front Loaded Rebate-3	10/1/2018	10/1/2018	10/31/2018
a4Q7V000049xZevUAE	a1460000002s9fPAAQ	684.2236667	25316.27567		26000.49933	Active	BIP Front Loaded Rebate-3	11/1/2018	11/1/2018	11/30/2018
a4Q7V000049xZewUAE	a1460000002s9fPAAQ	684.2236667	24632.052		25316.27567	Active	BIP Front Loaded Rebate-3	12/1/2018	12/1/2018	12/31/2018
a4Q7V000049xZexUAE	a1460000002s9fPAAQ	684.2236667	23947.82833		24632.052	Active	BIP Front Loaded Rebate-3	1/1/2019	1/1/2019	1/31/2019
a4Q7V000049xZeyUAE	a1460000002s9fPAAQ	684.2236667	23263.60467		23947.82833	Active	BIP Front Loaded Rebate-3	2/1/2019	2/1/2019	2/28/2019
a4Q7V000049xZezUAE	a1460000002s9fPAAQ	684.2236667	22579.381		23263.60467	Active	BIP Front Loaded Rebate-3	3/1/2019	3/1/2019	3/31/2019
a4Q7V000049xZf0UAE	a1460000002s9fPAAQ	684.2236667	21895.15733		22579.381	Active	BIP Front Loaded Rebate-3	4/1/2019	4/1/2019	4/30/2019
a4Q7V000049xZf1UAE	a1460000002s9fPAAQ	684.2236667	21210.93367		21895.15733	Active	BIP Front Loaded Rebate-3	5/1/2019	5/1/2019	5/31/2019
a4Q7V000049xZf2UAE	a1460000002s9fPAAQ	684.2236667	20526.71		21210.93367	Active	BIP Front Loaded Rebate-3	6/1/2019	6/1/2019	6/30/2019
a4Q7V000049xZf3UAE	a1460000002s9fPAAQ	684.2236667	19842.48633		20526.71	Active	BIP Front Loaded Rebate-3	7/1/2019	7/1/2019	7/31/2019
a4Q7V000049xZf4UAE	a1460000002s9fPAAQ	684.2236667	19158.26267		19842.48633	Active	BIP Front Loaded Rebate-3	8/1/2019	8/1/2019	8/31/2019
a4Q7V000049xZf5UAE	a1460000002s9fPAAQ	684.2236667	18474.039		19158.26267	Active	BIP Front Loaded Rebate-3	9/1/2019	9/1/2019	9/30/2019
a4Q7V000049xZf6UAE	a1460000002s9fPAAQ	684.2236667	17789.81533		18474.039	Active	BIP Front Loaded Rebate-3	10/1/2019	10/1/2019	10/31/2019
a4Q7V000049xZf7UAE	a1460000002s9fPAAQ	684.2236667	17105.59167		17789.81533	Active	BIP Front Loaded Rebate-3	11/1/2019	11/1/2019	11/30/2019
a4Q7V000049xZf8UAE	a1460000002s9fPAAQ	684.2236667	16421.368		17105.59167	Active	BIP Front Loaded Rebate-3	12/1/2019	12/1/2019	12/31/2019
a4Q7V000049xZf9UAE	a1460000002s9fPAAQ	684.2236667	15737.14433		16421.368	Active	BIP Front Loaded Rebate-3	1/1/2020	1/1/2020	1/31/2020
a4Q7V000049xZfAUAU	a1460000002s9fPAAQ	684.2236667	15052.92067		15737.14433	Active	BIP Front Loaded Rebate-3	2/1/2020	2/1/2020	2/29/2020
a4Q7V000049xZfBUAU	a1460000002s9fPAAQ	684.2236667	14368.697		15052.92067	Active	BIP Front Loaded Rebate-3	3/1/2020	3/1/2020	3/31/2020
a4Q7V000049xZfCUAU	a1460000002s9fPAAQ	684.2236667	13684.47333		14368.697	Active	BIP Front Loaded Rebate-3	4/1/2020	4/1/2020	4/30/2020
a4Q7V000049xZfDUAU	a1460000002s9fPAAQ	684.2236667	13000.24967		13684.47333	Active	BIP Front Loaded Rebate-3	5/1/2020	5/1/2020	5/31/2020
a4Q7V000049xZfEUAU	a1460000002s9fPAAQ	684.2236667	12316.026		13000.24967	Active	BIP Front Loaded Rebate-3	6/1/2020	6/1/2020	6/30/2020
a4Q7V000049xZfFUAU	a1460000002s9fPAAQ	684.2236667	11631.80233		12316.026	Active	BIP Front Loaded Rebate-3	7/1/2020	7/1/2020	7/31/2020
a4Q7V000049xZfGUAU	a1460000002s9fPAAQ	684.2236667	10947.57867		11631.80233	Active	BIP Front Loaded Rebate-3	8/1/2020	8/1/2020	8/31/2020
a4Q7V000049xZfHUAU	a1460000002s9fPAAQ	684.2236667	10263.355		10947.57867	Active	BIP Front Loaded Rebate-3	9/1/2020	9/1/2020	9/30/2020
a4Q7V000049xZfIUAU	a1460000002s9fPAAQ	684.2236667	9579.131333		10263.355	Active	BIP Front Loaded Rebate-3	10/1/2020	10/1/2020	10/31/2020
a4Q7V000049xZfJUAU	a1460000002s9fPAAQ	684.2236667	8894.907667		9579.131333	Active	BIP Front Loaded Rebate-3	11/1/2020	11/1/2020	11/30/2020
a4Q7V000049xZfKUAU	a1460000002s9fPAAQ	684.2236667	8210.684		8894.907667	Active	BIP Front Loaded Rebate-3	12/1/2020	12/1/2020	12/31/2020
a4Q7V000049xZfLUAU	a1460000002s9fPAAQ	684.2236667	7526.460333		8210.684	Active	BIP Front Loaded Rebate-3	1/1/2021	1/1/2021	1/31/2021
a4Q7V000049xZfMUAU	a1460000002s9fPAAQ	684.2236667	6842.236667		7526.460333	Active	BIP Front Loaded Rebate-3	2/1/2021	2/1/2021	2/28/2021
a4Q7V000049xZfNUAU	a1460000002s9fPAAQ	684.2236667	6158.013		6842.236667	Active	BIP Front Loaded Rebate-3	3/1/2021	3/1/2021	3/31/2021
a4Q7V000049xZfOUAU	a1460000002s9fPAAQ	684.2236667	5473.789333		6158.013	Active	BIP Front Loaded Rebate-3	4/1/2021	4/1/2021	4/30/2021
a4Q7V000049xZfPUAU	a1460000002s9fPAAQ	684.2236667	4789.565667		5473.789333	Active	BIP Front Loaded Rebate-3	5/1/2021	5/1/2021	5/31/2021
a4Q7V000049xZfQUAU	a1460000002s9fPAAQ	684.2236667	4105.342		4789.565667	Active	BIP Front Loaded Rebate-3	6/1/2021	6/1/2021	6/30/2021
a4Q7V000049xZfRUAU	a1460000002s9fPAAQ	684.2236667	3421.118333		4105.342	Active	BIP Front Loaded Rebate-3	7/1/2021	7/1/2021	7/31/2021
a4Q7V000049xZfSUAU	a1460000002s9fPAAQ	684.2236667	2736.894667		3421.118333	Active	BIP Front Loaded Rebate-3	8/1/2021	8/1/2021	8/31/2021
a4Q7V000049xZfTUAU	a1460000002s9fPAAQ	684.2236667	2052.671		2736.894667	Active	BIP Front Loaded Rebate-3	9/1/2021	9/1/2021	9/30/2021
a4Q7V000049xZfUUAU	a1460000002s9fPAAQ	684.2236667	1368.447333		2052.671	Draft	BIP Front Loaded Rebate-3	10/1/2021	10/1/2021	10/31/2021
a4Q7V000049xZfVUAU	a1460000002s9fPAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	11/1/2021	11/1/2021	11/30/2021
a4Q7V000049xZfWUAU	a1460000002s9fPAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	12/1/2021	12/1/2021	12/31/2021
a4Q7V00004NtnJ5UAJ	a1460000002s9fQAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2012	1/1/2012	1/31/2012
a4Q7V00004NtnJ6UAJ	a1460000002s9fQAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2012	2/1/2012	2/29/2012
a4Q7V00004NtnJ7UAJ	a1460000002s9fQAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2012	3/1/2012	3/31/2012
a4Q7V00004NtnJ8UAJ	a1460000002s9fQAAQ	0	26301.72		0	Active	BIP Front Loaded Rebate-3	4/1/2012	4/1/2012	4/30/2012
a4Q7V00004NtnJ9UAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	5/1/2012	5/1/2012	5/31/2012
a4Q7V00004NtnJAUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	6/1/2012	6/1/2012	6/30/2012
a4Q7V00004NtnJBUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	7/1/2012	7/1/2012	7/31/2012
a4Q7V00004NtnJCUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	8/1/2012	8/1/2012	8/31/2012
a4Q7V00004NtnJDUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	9/1/2012	9/1/2012	9/30/2012
a4Q7V00004NtnJEUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	10/1/2012	10/1/2012	10/31/2012
a4Q7V00004NtnJFUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	11/1/2012	11/1/2012	11/30/2012
a4Q7V00004NtnJGUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	12/1/2012	12/1/2012	12/31/2012
a4Q7V00004NtnJHUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	1/1/2013	1/1/2013	1/31/2013
a4Q7V00004NtnJIUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	2/1/2013	2/1/2013	2/28/2013
a4Q7V00004NtnJJUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	3/1/2013	3/1/2013	3/31/2013
a4Q7V00004NtnJKUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	4/1/2013	4/1/2013	4/30/2013
a4Q7V00004NtnJLUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	5/1/2013	5/1/2013	5/31/2013
a4Q7V00004NtnJMUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	6/1/2013	6/1/2013	6/30/2013
a4Q7V00004NtnJNUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	7/1/2013	7/1/2013	7/31/2013
a4Q7V00004NtnJOUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	8/1/2013	8/1/2013	8/31/2013
a4Q7V00004NtnJPUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	9/1/2013	9/1/2013	9/30/2013
a4Q7V00004NtnJQUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	10/1/2013	10/1/2013	10/31/2013
a4Q7V00004NtnJRUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	11/1/2013	11/1/2013	11/30/2013
a4Q7V00004NtnJSUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	12/1/2013	12/1/2013	12/31/2013
a4Q7V00004NtnJTUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	1/1/2014	1/1/2014	1/31/2014
a4Q7V00004NtnJUUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	2/1/2014	2/1/2014	2/28/2014
a4Q7V00004NtnJVUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	3/1/2014	3/1/2014	3/31/2014
a4Q7V00004NtnJWUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	4/1/2014	4/1/2014	4/30/2014
a4Q7V00004NtnJXUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	5/1/2014	5/1/2014	5/31/2014
a4Q7V00004NtnJYUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	6/1/2014	6/1/2014	6/30/2014
a4Q7V00004NtnJZUAZ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	7/1/2014	7/1/2014	7/31/2014
a4Q7V00004NtnJaUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	8/1/2014	8/1/2014	8/31/2014
a4Q7V00004NtnJbUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	9/1/2014	9/1/2014	9/30/2014
a4Q7V00004NtnJcUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	10/1/2014	10/1/2014	10/31/2014
a4Q7V00004NtnJdUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	11/1/2014	11/1/2014	11/30/2014
a4Q7V00004NtnJeUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	12/1/2014	12/1/2014	12/31/2014
a4Q7V00004NtnJfUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	1/1/2015	1/1/2015	1/31/2015
a4Q7V00004NtnJgUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	2/1/2015	2/1/2015	2/28/2015
a4Q7V00004NtnJhUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	3/1/2015	3/1/2015	3/31/2015
a4Q7V00004NtnJiUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	4/1/2015	4/1/2015	4/30/2015
a4Q7V00004NtnJjUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	5/1/2015	5/1/2015	5/31/2015
a4Q7V00004NtnJkUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	6/1/2015	6/1/2015	6/30/2015
a4Q7V00004NtnJlUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	7/1/2015	7/1/2015	7/31/2015
a4Q7V00004NtnJmUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	8/1/2015	8/1/2015	8/31/2015
a4Q7V00004NtnJnUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	9/1/2015	9/1/2015	9/30/2015
a4Q7V00004NtnJoUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	10/1/2015	10/1/2015	10/31/2015
a4Q7V00004NtnJpUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	11/1/2015	11/1/2015	11/30/2015
a4Q7V00004NtnJqUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	12/1/2015	12/1/2015	12/31/2015
a4Q7V00004NtnJrUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	1/1/2016	1/1/2016	1/31/2016
a4Q7V00004NtnJsUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	2/1/2016	2/1/2016	2/29/2016
a4Q7V00004NtnJtUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	3/1/2016	3/1/2016	3/31/2016
a4Q7V00004NtnJuUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	4/1/2016	4/1/2016	4/30/2016
a4Q7V00004NtnJvUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	5/1/2016	5/1/2016	5/31/2016
a4Q7V00004NtnJwUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	6/1/2016	6/1/2016	6/30/2016
a4Q7V00004NtnJxUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	7/1/2016	7/1/2016	7/31/2016
a4Q7V00004NtnJyUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	8/1/2016	8/1/2016	8/31/2016
a4Q7V00004NtnJzUAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	9/1/2016	9/1/2016	9/30/2016
a4Q7V00004NtnK0UAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	10/1/2016	10/1/2016	10/31/2016
a4Q7V00004NtnK1UAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	11/1/2016	11/1/2016	11/30/2016
a4Q7V00004NtnK2UAJ	a1460000002s9fQAAQ	0	26301.72		26301.72	Active	BIP Front Loaded Rebate-3	12/1/2016	12/1/2016	12/31/2016
a4Q7V00004NtnK3UAJ	a1460000002s9fQAAQ	438.362	25863.358		26301.72	Active	BIP Front Loaded Rebate-3	1/1/2017	1/1/2017	1/31/2017
a4Q7V00004NtnK4UAJ	a1460000002s9fQAAQ	438.362	25424.996		25863.358	Active	BIP Front Loaded Rebate-3	2/1/2017	2/1/2017	2/28/2017
a4Q7V00004NtnK5UAJ	a1460000002s9fQAAQ	438.362	24986.634		25424.996	Active	BIP Front Loaded Rebate-3	3/1/2017	3/1/2017	3/31/2017
a4Q7V00004NtnK6UAJ	a1460000002s9fQAAQ	438.362	24548.272		24986.634	Active	BIP Front Loaded Rebate-3	4/1/2017	4/1/2017	4/30/2017
a4Q7V00004NtnK7UAJ	a1460000002s9fQAAQ	438.362	24109.91		24548.272	Active	BIP Front Loaded Rebate-3	5/1/2017	5/1/2017	5/31/2017
a4Q7V00004NtnK8UAJ	a1460000002s9fQAAQ	438.362	23671.548		24109.91	Active	BIP Front Loaded Rebate-3	6/1/2017	6/1/2017	6/30/2017
a4Q7V00004NtnK9UAJ	a1460000002s9fQAAQ	438.362	23233.186		23671.548	Active	BIP Front Loaded Rebate-3	7/1/2017	7/1/2017	7/31/2017
a4Q7V00004NtnKAUAZ	a1460000002s9fQAAQ	438.362	22794.824		23233.186	Active	BIP Front Loaded Rebate-3	8/1/2017	8/1/2017	8/31/2017
a4Q7V00004NtnKBUAZ	a1460000002s9fQAAQ	438.362	22356.462		22794.824	Active	BIP Front Loaded Rebate-3	9/1/2017	9/1/2017	9/30/2017
a4Q7V00004NtnKCUAZ	a1460000002s9fQAAQ	438.362	21918.1		22356.462	Active	BIP Front Loaded Rebate-3	10/1/2017	10/1/2017	10/31/2017
a4Q7V00004NtnKDUAZ	a1460000002s9fQAAQ	438.362	21479.738		21918.1	Active	BIP Front Loaded Rebate-3	11/1/2017	11/1/2017	11/30/2017
a4Q7V00004NtnKEUAZ	a1460000002s9fQAAQ	438.362	21041.376		21479.738	Active	BIP Front Loaded Rebate-3	12/1/2017	12/1/2017	12/31/2017
a4Q7V00004NtnKFUAZ	a1460000002s9fQAAQ	438.362	20603.014		21041.376	Active	BIP Front Loaded Rebate-3	1/1/2018	1/1/2018	1/31/2018
a4Q7V00004NtnKGUAZ	a1460000002s9fQAAQ	438.362	20164.652		20603.014	Active	BIP Front Loaded Rebate-3	2/1/2018	2/1/2018	2/28/2018
a4Q7V00004NtnKHUAZ	a1460000002s9fQAAQ	438.362	19726.29		20164.652	Active	BIP Front Loaded Rebate-3	3/1/2018	3/1/2018	3/31/2018
a4Q7V00004NtnKIUAZ	a1460000002s9fQAAQ	438.362	19287.928		19726.29	Active	BIP Front Loaded Rebate-3	4/1/2018	4/1/2018	4/30/2018
a4Q7V00004NtnKJUAZ	a1460000002s9fQAAQ	438.362	18849.566		19287.928	Active	BIP Front Loaded Rebate-3	5/1/2018	5/1/2018	5/31/2018
a4Q7V00004NtnKKUAZ	a1460000002s9fQAAQ	438.362	18411.204		18849.566	Active	BIP Front Loaded Rebate-3	6/1/2018	6/1/2018	6/30/2018
a4Q7V00004NtnKLUAZ	a1460000002s9fQAAQ	438.362	17972.842		18411.204	Active	BIP Front Loaded Rebate-3	7/1/2018	7/1/2018	7/31/2018
a4Q7V00004NtnKMUAZ	a1460000002s9fQAAQ	438.362	17534.48		17972.842	Active	BIP Front Loaded Rebate-3	8/1/2018	8/1/2018	8/31/2018
a4Q7V00004NtnKNUAZ	a1460000002s9fQAAQ	438.362	17096.118		17534.48	Active	BIP Front Loaded Rebate-3	9/1/2018	9/1/2018	9/30/2018
a4Q7V00004NtnKOUAZ	a1460000002s9fQAAQ	438.362	16657.756		17096.118	Active	BIP Front Loaded Rebate-3	10/1/2018	10/1/2018	10/31/2018
a4Q7V00004NtnKPUAZ	a1460000002s9fQAAQ	438.362	16219.394		16657.756	Active	BIP Front Loaded Rebate-3	11/1/2018	11/1/2018	11/30/2018
a4Q7V00004NtnKQUAZ	a1460000002s9fQAAQ	438.362	15781.032		16219.394	Active	BIP Front Loaded Rebate-3	12/1/2018	12/1/2018	12/31/2018
a4Q7V00004NtnKRUAZ	a1460000002s9fQAAQ	438.362	15342.67		15781.032	Active	BIP Front Loaded Rebate-3	1/1/2019	1/1/2019	1/31/2019
a4Q7V00004NtnKSUAZ	a1460000002s9fQAAQ	438.362	14904.308		15342.67	Active	BIP Front Loaded Rebate-3	2/1/2019	2/1/2019	2/28/2019
a4Q7V00004NtnKTUAZ	a1460000002s9fQAAQ	438.362	14465.946		14904.308	Active	BIP Front Loaded Rebate-3	3/1/2019	3/1/2019	3/31/2019
a4Q7V00004NtnKUUAZ	a1460000002s9fQAAQ	438.362	14027.584		14465.946	Active	BIP Front Loaded Rebate-3	4/1/2019	4/1/2019	4/30/2019
a4Q7V00004NtnKVUAZ	a1460000002s9fQAAQ	438.362	13589.222		14027.584	Active	BIP Front Loaded Rebate-3	5/1/2019	5/1/2019	5/31/2019
a4Q7V00004NtnKWUAZ	a1460000002s9fQAAQ	438.362	13150.86		13589.222	Active	BIP Front Loaded Rebate-3	6/1/2019	6/1/2019	6/30/2019
a4Q7V00004NtnKXUAZ	a1460000002s9fQAAQ	438.362	12712.498		13150.86	Active	BIP Front Loaded Rebate-3	7/1/2019	7/1/2019	7/31/2019
a4Q7V00004NtnKYUAZ	a1460000002s9fQAAQ	438.362	12274.136		12712.498	Active	BIP Front Loaded Rebate-3	8/1/2019	8/1/2019	8/31/2019
a4Q7V00004NtnKZUAZ	a1460000002s9fQAAQ	438.362	11835.774		12274.136	Active	BIP Front Loaded Rebate-3	9/1/2019	9/1/2019	9/30/2019
a4Q7V00004NtnKaUAJ	a1460000002s9fQAAQ	438.362	11397.412		11835.774	Active	BIP Front Loaded Rebate-3	10/1/2019	10/1/2019	10/31/2019
a4Q7V00004NtnKbUAJ	a1460000002s9fQAAQ	438.362	10959.05		11397.412	Active	BIP Front Loaded Rebate-3	11/1/2019	11/1/2019	11/30/2019
a4Q7V00004NtnKcUAJ	a1460000002s9fQAAQ	438.362	10520.688		10959.05	Active	BIP Front Loaded Rebate-3	12/1/2019	12/1/2019	12/31/2019
a4Q7V00004NtnKdUAJ	a1460000002s9fQAAQ	438.362	10082.326		10520.688	Active	BIP Front Loaded Rebate-3	1/1/2020	1/1/2020	1/31/2020
a4Q7V00004NtnKeUAJ	a1460000002s9fQAAQ	438.362	9643.964		10082.326	Active	BIP Front Loaded Rebate-3	2/1/2020	2/1/2020	2/29/2020
a4Q7V00004NtnKfUAJ	a1460000002s9fQAAQ	438.362	9205.602		9643.964	Active	BIP Front Loaded Rebate-3	3/1/2020	3/1/2020	3/31/2020
a4Q7V00004NtnKgUAJ	a1460000002s9fQAAQ	438.362	8767.24		9205.602	Active	BIP Front Loaded Rebate-3	4/1/2020	4/1/2020	4/30/2020
a4Q7V00004NtnKhUAJ	a1460000002s9fQAAQ	438.362	8328.878		8767.24	Active	BIP Front Loaded Rebate-3	5/1/2020	5/1/2020	5/31/2020
a4Q7V00004NtnKiUAJ	a1460000002s9fQAAQ	438.362	7890.516		8328.878	Active	BIP Front Loaded Rebate-3	6/1/2020	6/1/2020	6/30/2020
a4Q7V00004NtnKjUAJ	a1460000002s9fQAAQ	438.362	7452.154		7890.516	Active	BIP Front Loaded Rebate-3	7/1/2020	7/1/2020	7/31/2020
a4Q7V00004NtnKkUAJ	a1460000002s9fQAAQ	438.362	7013.792		7452.154	Active	BIP Front Loaded Rebate-3	8/1/2020	8/1/2020	8/31/2020
a4Q7V00004NtnKlUAJ	a1460000002s9fQAAQ	438.362	6575.43		7013.792	Active	BIP Front Loaded Rebate-3	9/1/2020	9/1/2020	9/30/2020
a4Q7V00004NtnKmUAJ	a1460000002s9fQAAQ	438.362	6137.068		6575.43	Active	BIP Front Loaded Rebate-3	10/1/2020	10/1/2020	10/31/2020
a4Q7V00004NtnKnUAJ	a1460000002s9fQAAQ	438.362	5698.706		6137.068	Active	BIP Front Loaded Rebate-3	11/1/2020	11/1/2020	11/30/2020
a4Q7V00004NtnKoUAJ	a1460000002s9fQAAQ	438.362	5260.344		5698.706	Active	BIP Front Loaded Rebate-3	12/1/2020	12/1/2020	12/31/2020
a4Q7V00004NtnKpUAJ	a1460000002s9fQAAQ	438.362	4821.982		5260.344	Active	BIP Front Loaded Rebate-3	1/1/2021	1/1/2021	1/31/2021
a4Q7V00004NtnKqUAJ	a1460000002s9fQAAQ	438.362	4383.62		4821.982	Active	BIP Front Loaded Rebate-3	2/1/2021	2/1/2021	2/28/2021
a4Q7V00004NtnKrUAJ	a1460000002s9fQAAQ	438.362	3945.258		4383.62	Active	BIP Front Loaded Rebate-3	3/1/2021	3/1/2021	3/31/2021
a4Q7V00004NtnKsUAJ	a1460000002s9fQAAQ	438.362	3506.896		3945.258	Active	BIP Front Loaded Rebate-3	4/1/2021	4/1/2021	4/30/2021
a4Q7V00004NtnKtUAJ	a1460000002s9fQAAQ	438.362	3068.534		3506.896	Active	BIP Front Loaded Rebate-3	5/1/2021	5/1/2021	5/31/2021
a4Q7V00004NtnKuUAJ	a1460000002s9fQAAQ	438.362	2630.172		3068.534	Active	BIP Front Loaded Rebate-3	6/1/2021	6/1/2021	6/30/2021
a4Q7V00004NtnKvUAJ	a1460000002s9fQAAQ	438.362	2191.81		2630.172	Active	BIP Front Loaded Rebate-3	7/1/2021	7/1/2021	7/31/2021
a4Q7V00004NtnKwUAJ	a1460000002s9fQAAQ	438.362	1753.448		2191.81	Active	BIP Front Loaded Rebate-3	8/1/2021	8/1/2021	8/31/2021
a4Q7V00004NtnKxUAJ	a1460000002s9fQAAQ	438.362	1315.086		1753.448	Active	BIP Front Loaded Rebate-3	9/1/2021	9/1/2021	9/30/2021
a4Q7V00004NtnKyUAJ	a1460000002s9fQAAQ	438.362	876.724		1315.086	Active	BIP Front Loaded Rebate-3	10/1/2021	10/1/2021	10/31/2021
a4Q7V00004NtnKzUAJ	a1460000002s9fQAAQ	438.362	438.362		876.724	Active	BIP Front Loaded Rebate-3	11/1/2021	11/1/2021	11/30/2021
a4Q7V00004NtnL0UAJ	a1460000002s9fQAAQ	438.362	0		438.362	Active	BIP Front Loaded Rebate-3	12/1/2021	12/1/2021	12/31/2021
a4Q7V00004NtnMxUAJ	a1460000002s9fRAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2012	1/1/2012	1/31/2012
a4Q7V00004NtnMyUAJ	a1460000002s9fRAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2012	2/1/2012	2/29/2012
a4Q7V00004NtnMzUAJ	a1460000002s9fRAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2012	3/1/2012	3/31/2012
a4Q7V00004NtnN0UAJ	a1460000002s9fRAAQ	0	32876.96		0	Active	BIP Front Loaded Rebate-3	4/1/2012	4/1/2012	4/30/2012
a4Q7V00004NtnN1UAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	5/1/2012	5/1/2012	5/31/2012
a4Q7V00004NtnN2UAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	6/1/2012	6/1/2012	6/30/2012
a4Q7V00004NtnN3UAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	7/1/2012	7/1/2012	7/31/2012
a4Q7V00004NtnN4UAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	8/1/2012	8/1/2012	8/31/2012
a4Q7V00004NtnN5UAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	9/1/2012	9/1/2012	9/30/2012
a4Q7V00004NtnN6UAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	10/1/2012	10/1/2012	10/31/2012
a4Q7V00004NtnN7UAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	11/1/2012	11/1/2012	11/30/2012
a4Q7V00004NtnN8UAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	12/1/2012	12/1/2012	12/31/2012
a4Q7V00004NtnN9UAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	1/1/2013	1/1/2013	1/31/2013
a4Q7V00004NtnNAUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	2/1/2013	2/1/2013	2/28/2013
a4Q7V00004NtnNBUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	3/1/2013	3/1/2013	3/31/2013
a4Q7V00004NtnNCUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	4/1/2013	4/1/2013	4/30/2013
a4Q7V00004NtnNDUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	5/1/2013	5/1/2013	5/31/2013
a4Q7V00004NtnNEUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	6/1/2013	6/1/2013	6/30/2013
a4Q7V00004NtnNFUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	7/1/2013	7/1/2013	7/31/2013
a4Q7V00004NtnNGUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	8/1/2013	8/1/2013	8/31/2013
a4Q7V00004NtnNHUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	9/1/2013	9/1/2013	9/30/2013
a4Q7V00004NtnNIUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	10/1/2013	10/1/2013	10/31/2013
a4Q7V00004NtnNJUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	11/1/2013	11/1/2013	11/30/2013
a4Q7V00004NtnNKUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	12/1/2013	12/1/2013	12/31/2013
a4Q7V00004NtnNLUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	1/1/2014	1/1/2014	1/31/2014
a4Q7V00004NtnNMUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	2/1/2014	2/1/2014	2/28/2014
a4Q7V00004NtnNNUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	3/1/2014	3/1/2014	3/31/2014
a4Q7V00004NtnNOUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	4/1/2014	4/1/2014	4/30/2014
a4Q7V00004NtnNPUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	5/1/2014	5/1/2014	5/31/2014
a4Q7V00004NtnNQUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	6/1/2014	6/1/2014	6/30/2014
a4Q7V00004NtnNRUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	7/1/2014	7/1/2014	7/31/2014
a4Q7V00004NtnNSUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	8/1/2014	8/1/2014	8/31/2014
a4Q7V00004NtnNTUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	9/1/2014	9/1/2014	9/30/2014
a4Q7V00004NtnNUUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	10/1/2014	10/1/2014	10/31/2014
a4Q7V00004NtnNVUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	11/1/2014	11/1/2014	11/30/2014
a4Q7V00004NtnNWUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	12/1/2014	12/1/2014	12/31/2014
a4Q7V00004NtnNXUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	1/1/2015	1/1/2015	1/31/2015
a4Q7V00004NtnNYUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	2/1/2015	2/1/2015	2/28/2015
a4Q7V00004NtnNZUAZ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	3/1/2015	3/1/2015	3/31/2015
a4Q7V00004NtnNaUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	4/1/2015	4/1/2015	4/30/2015
a4Q7V00004NtnNbUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	5/1/2015	5/1/2015	5/31/2015
a4Q7V00004NtnNcUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	6/1/2015	6/1/2015	6/30/2015
a4Q7V00004NtnNdUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	7/1/2015	7/1/2015	7/31/2015
a4Q7V00004NtnNeUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	8/1/2015	8/1/2015	8/31/2015
a4Q7V00004NtnNfUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	9/1/2015	9/1/2015	9/30/2015
a4Q7V00004NtnNgUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	10/1/2015	10/1/2015	10/31/2015
a4Q7V00004NtnNhUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	11/1/2015	11/1/2015	11/30/2015
a4Q7V00004NtnNiUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	12/1/2015	12/1/2015	12/31/2015
a4Q7V00004NtnNjUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	1/1/2016	1/1/2016	1/31/2016
a4Q7V00004NtnNkUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	2/1/2016	2/1/2016	2/29/2016
a4Q7V00004NtnNlUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	3/1/2016	3/1/2016	3/31/2016
a4Q7V00004NtnNmUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	4/1/2016	4/1/2016	4/30/2016
a4Q7V00004NtnNnUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	5/1/2016	5/1/2016	5/31/2016
a4Q7V00004NtnNoUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	6/1/2016	6/1/2016	6/30/2016
a4Q7V00004NtnNpUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	7/1/2016	7/1/2016	7/31/2016
a4Q7V00004NtnNqUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	8/1/2016	8/1/2016	8/31/2016
a4Q7V00004NtnNrUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	9/1/2016	9/1/2016	9/30/2016
a4Q7V00004NtnNsUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	10/1/2016	10/1/2016	10/31/2016
a4Q7V00004NtnNtUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	11/1/2016	11/1/2016	11/30/2016
a4Q7V00004NtnNuUAJ	a1460000002s9fRAAQ	0	32876.96		32876.96	Active	BIP Front Loaded Rebate-3	12/1/2016	12/1/2016	12/31/2016
a4Q7V00004NtnNvUAJ	a1460000002s9fRAAQ	547.9493333	32329.01067		32876.96	Active	BIP Front Loaded Rebate-3	1/1/2017	1/1/2017	1/31/2017
a4Q7V00004NtnNwUAJ	a1460000002s9fRAAQ	547.9493333	31781.06133		32329.01067	Active	BIP Front Loaded Rebate-3	2/1/2017	2/1/2017	2/28/2017
a4Q7V00004NtnNxUAJ	a1460000002s9fRAAQ	547.9493333	31233.112		31781.06133	Active	BIP Front Loaded Rebate-3	3/1/2017	3/1/2017	3/31/2017
a4Q7V00004NtnNyUAJ	a1460000002s9fRAAQ	547.9493333	30685.16267		31233.112	Active	BIP Front Loaded Rebate-3	4/1/2017	4/1/2017	4/30/2017
a4Q7V00004NtnNzUAJ	a1460000002s9fRAAQ	547.9493333	30137.21333		30685.16267	Active	BIP Front Loaded Rebate-3	5/1/2017	5/1/2017	5/31/2017
a4Q7V00004NtnO0UAJ	a1460000002s9fRAAQ	547.9493333	29589.264		30137.21333	Active	BIP Front Loaded Rebate-3	6/1/2017	6/1/2017	6/30/2017
a4Q7V00004NtnO1UAJ	a1460000002s9fRAAQ	547.9493333	29041.31467		29589.264	Active	BIP Front Loaded Rebate-3	7/1/2017	7/1/2017	7/31/2017
a4Q7V00004NtnO2UAJ	a1460000002s9fRAAQ	547.9493333	28493.36533		29041.31467	Active	BIP Front Loaded Rebate-3	8/1/2017	8/1/2017	8/31/2017
a4Q7V00004NtnO3UAJ	a1460000002s9fRAAQ	547.9493333	27945.416		28493.36533	Active	BIP Front Loaded Rebate-3	9/1/2017	9/1/2017	9/30/2017
a4Q7V00004NtnO4UAJ	a1460000002s9fRAAQ	547.9493333	27397.46667		27945.416	Active	BIP Front Loaded Rebate-3	10/1/2017	10/1/2017	10/31/2017
a4Q7V00004NtnO5UAJ	a1460000002s9fRAAQ	547.9493333	26849.51733		27397.46667	Active	BIP Front Loaded Rebate-3	11/1/2017	11/1/2017	11/30/2017
a4Q7V00004NtnO6UAJ	a1460000002s9fRAAQ	547.9493333	26301.568		26849.51733	Active	BIP Front Loaded Rebate-3	12/1/2017	12/1/2017	12/31/2017
a4Q7V00004NtnO7UAJ	a1460000002s9fRAAQ	547.9493333	25753.61867		26301.568	Active	BIP Front Loaded Rebate-3	1/1/2018	1/1/2018	1/31/2018
a4Q7V00004NtnO8UAJ	a1460000002s9fRAAQ	547.9493333	25205.66933		25753.61867	Active	BIP Front Loaded Rebate-3	2/1/2018	2/1/2018	2/28/2018
a4Q7V00004NtnO9UAJ	a1460000002s9fRAAQ	547.9493333	24657.72		25205.66933	Active	BIP Front Loaded Rebate-3	3/1/2018	3/1/2018	3/31/2018
a4Q7V00004NtnOAUAZ	a1460000002s9fRAAQ	547.9493333	24109.77067		24657.72	Active	BIP Front Loaded Rebate-3	4/1/2018	4/1/2018	4/30/2018
a4Q7V00004NtnOBUAZ	a1460000002s9fRAAQ	547.9493333	23561.82133		24109.77067	Active	BIP Front Loaded Rebate-3	5/1/2018	5/1/2018	5/31/2018
a4Q7V00004NtnOCUAZ	a1460000002s9fRAAQ	547.9493333	23013.872		23561.82133	Active	BIP Front Loaded Rebate-3	6/1/2018	6/1/2018	6/30/2018
a4Q7V00004NtnODUAZ	a1460000002s9fRAAQ	547.9493333	22465.92267		23013.872	Active	BIP Front Loaded Rebate-3	7/1/2018	7/1/2018	7/31/2018
a4Q7V00004NtnOEUAZ	a1460000002s9fRAAQ	547.9493333	21917.97333		22465.92267	Active	BIP Front Loaded Rebate-3	8/1/2018	8/1/2018	8/31/2018
a4Q7V00004NtnOFUAZ	a1460000002s9fRAAQ	547.9493333	21370.024		21917.97333	Active	BIP Front Loaded Rebate-3	9/1/2018	9/1/2018	9/30/2018
a4Q7V00004NtnOGUAZ	a1460000002s9fRAAQ	547.9493333	20822.07467		21370.024	Active	BIP Front Loaded Rebate-3	10/1/2018	10/1/2018	10/31/2018
a4Q7V00004NtnOHUAZ	a1460000002s9fRAAQ	547.9493333	20274.12533		20822.07467	Active	BIP Front Loaded Rebate-3	11/1/2018	11/1/2018	11/30/2018
a4Q7V00004NtnOIUAZ	a1460000002s9fRAAQ	547.9493333	19726.176		20274.12533	Active	BIP Front Loaded Rebate-3	12/1/2018	12/1/2018	12/31/2018
a4Q7V00004NtnOJUAZ	a1460000002s9fRAAQ	547.9493333	19178.22667		19726.176	Active	BIP Front Loaded Rebate-3	1/1/2019	1/1/2019	1/31/2019
a4Q7V00004NtnOKUAZ	a1460000002s9fRAAQ	547.9493333	18630.27733		19178.22667	Active	BIP Front Loaded Rebate-3	2/1/2019	2/1/2019	2/28/2019
a4Q7V00004NtnOLUAZ	a1460000002s9fRAAQ	547.9493333	18082.328		18630.27733	Active	BIP Front Loaded Rebate-3	3/1/2019	3/1/2019	3/31/2019
a4Q7V00004NtnOMUAZ	a1460000002s9fRAAQ	547.9493333	17534.37867		18082.328	Active	BIP Front Loaded Rebate-3	4/1/2019	4/1/2019	4/30/2019
a4Q7V00004NtnONUAZ	a1460000002s9fRAAQ	547.9493333	16986.42933		17534.37867	Active	BIP Front Loaded Rebate-3	5/1/2019	5/1/2019	5/31/2019
a4Q7V00004NtnOOUAZ	a1460000002s9fRAAQ	547.9493333	16438.48		16986.42933	Active	BIP Front Loaded Rebate-3	6/1/2019	6/1/2019	6/30/2019
a4Q7V00004NtnOPUAZ	a1460000002s9fRAAQ	547.9493333	15890.53067		16438.48	Active	BIP Front Loaded Rebate-3	7/1/2019	7/1/2019	7/31/2019
a4Q7V00004NtnOQUAZ	a1460000002s9fRAAQ	547.9493333	15342.58133		15890.53067	Active	BIP Front Loaded Rebate-3	8/1/2019	8/1/2019	8/31/2019
a4Q7V00004NtnORUAZ	a1460000002s9fRAAQ	547.9493333	14794.632		15342.58133	Active	BIP Front Loaded Rebate-3	9/1/2019	9/1/2019	9/30/2019
a4Q7V00004NtnOSUAZ	a1460000002s9fRAAQ	547.9493333	14246.68267		14794.632	Active	BIP Front Loaded Rebate-3	10/1/2019	10/1/2019	10/31/2019
a4Q7V00004NtnOTUAZ	a1460000002s9fRAAQ	547.9493333	13698.73333		14246.68267	Active	BIP Front Loaded Rebate-3	11/1/2019	11/1/2019	11/30/2019
a4Q7V00004NtnOUUAZ	a1460000002s9fRAAQ	547.9493333	13150.784		13698.73333	Active	BIP Front Loaded Rebate-3	12/1/2019	12/1/2019	12/31/2019
a4Q7V00004NtnOVUAZ	a1460000002s9fRAAQ	547.9493333	12602.83467		13150.784	Active	BIP Front Loaded Rebate-3	1/1/2020	1/1/2020	1/31/2020
a4Q7V00004NtnOWUAZ	a1460000002s9fRAAQ	547.9493333	12054.88533		12602.83467	Active	BIP Front Loaded Rebate-3	2/1/2020	2/1/2020	2/29/2020
a4Q7V00004NtnOXUAZ	a1460000002s9fRAAQ	547.9493333	11506.936		12054.88533	Active	BIP Front Loaded Rebate-3	3/1/2020	3/1/2020	3/31/2020
a4Q7V00004NtnOYUAZ	a1460000002s9fRAAQ	547.9493333	10958.98667		11506.936	Active	BIP Front Loaded Rebate-3	4/1/2020	4/1/2020	4/30/2020
a4Q7V00004NtnOZUAZ	a1460000002s9fRAAQ	547.9493333	10411.03733		10958.98667	Active	BIP Front Loaded Rebate-3	5/1/2020	5/1/2020	5/31/2020
a4Q7V00004NtnOaUAJ	a1460000002s9fRAAQ	547.9493333	9863.088		10411.03733	Active	BIP Front Loaded Rebate-3	6/1/2020	6/1/2020	6/30/2020
a4Q7V00004NtnObUAJ	a1460000002s9fRAAQ	547.9493333	9315.138667		9863.088	Active	BIP Front Loaded Rebate-3	7/1/2020	7/1/2020	7/31/2020
a4Q7V00004NtnOcUAJ	a1460000002s9fRAAQ	547.9493333	8767.189333		9315.138667	Active	BIP Front Loaded Rebate-3	8/1/2020	8/1/2020	8/31/2020
a4Q7V00004NtnOdUAJ	a1460000002s9fRAAQ	547.9493333	8219.24		8767.189333	Active	BIP Front Loaded Rebate-3	9/1/2020	9/1/2020	9/30/2020
a4Q7V00004NtnOeUAJ	a1460000002s9fRAAQ	547.9493333	7671.290667		8219.24	Active	BIP Front Loaded Rebate-3	10/1/2020	10/1/2020	10/31/2020
a4Q7V00004NtnOfUAJ	a1460000002s9fRAAQ	547.9493333	7123.341333		7671.290667	Active	BIP Front Loaded Rebate-3	11/1/2020	11/1/2020	11/30/2020
a4Q7V00004NtnOgUAJ	a1460000002s9fRAAQ	547.9493333	6575.392		7123.341333	Active	BIP Front Loaded Rebate-3	12/1/2020	12/1/2020	12/31/2020
a4Q7V00004NtnOhUAJ	a1460000002s9fRAAQ	547.9493333	6027.442667		6575.392	Active	BIP Front Loaded Rebate-3	1/1/2021	1/1/2021	1/31/2021
a4Q7V00004NtnOiUAJ	a1460000002s9fRAAQ	547.9493333	5479.493333		6027.442667	Active	BIP Front Loaded Rebate-3	2/1/2021	2/1/2021	2/28/2021
a4Q7V00004NtnOjUAJ	a1460000002s9fRAAQ	547.9493333	4931.544		5479.493333	Active	BIP Front Loaded Rebate-3	3/1/2021	3/1/2021	3/31/2021
a4Q7V00004NtnOkUAJ	a1460000002s9fRAAQ	547.9493333	4383.594667		4931.544	Active	BIP Front Loaded Rebate-3	4/1/2021	4/1/2021	4/30/2021
a4Q7V00004NtnOlUAJ	a1460000002s9fRAAQ	547.9493333	3835.645333		4383.594667	Active	BIP Front Loaded Rebate-3	5/1/2021	5/1/2021	5/31/2021
a4Q7V00004NtnOmUAJ	a1460000002s9fRAAQ	547.9493333	3287.696		3835.645333	Active	BIP Front Loaded Rebate-3	6/1/2021	6/1/2021	6/30/2021
a4Q7V00004NtnOnUAJ	a1460000002s9fRAAQ	547.9493333	2739.746667		3287.696	Active	BIP Front Loaded Rebate-3	7/1/2021	7/1/2021	7/31/2021
a4Q7V00004NtnOoUAJ	a1460000002s9fRAAQ	547.9493333	2191.797333		2739.746667	Active	BIP Front Loaded Rebate-3	8/1/2021	8/1/2021	8/31/2021
a4Q7V00004NtnOpUAJ	a1460000002s9fRAAQ	547.9493333	1643.848		2191.797333	Active	BIP Front Loaded Rebate-3	9/1/2021	9/1/2021	9/30/2021
a4Q7V00004NtnOqUAJ	a1460000002s9fRAAQ	547.9493333	1095.898667		1643.848	Active	BIP Front Loaded Rebate-3	10/1/2021	10/1/2021	10/31/2021
a4Q7V00004NtnOrUAJ	a1460000002s9fRAAQ	547.9493333	547.9493333		1095.898667	Active	BIP Front Loaded Rebate-3	11/1/2021	11/1/2021	11/30/2021
a4Q7V00004NtnOsUAJ	a1460000002s9fRAAQ	547.9493333	0		547.9493333	Active	BIP Front Loaded Rebate-3	12/1/2021	12/1/2021	12/31/2021
a4Q7V00004NtnQpUAJ	a1460000002s9fSAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2012	1/1/2012	1/31/2012
a4Q7V00004NtnQqUAJ	a1460000002s9fSAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2012	2/1/2012	2/29/2012
a4Q7V00004NtnQrUAJ	a1460000002s9fSAAQ	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2012	3/1/2012	3/31/2012
a4Q7V00004NtnQsUAJ	a1460000002s9fSAAQ	0	20746.26		0	Active	BIP Front Loaded Rebate-3	4/1/2012	4/1/2012	4/30/2012
a4Q7V00004NtnQtUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	5/1/2012	5/1/2012	5/31/2012
a4Q7V00004NtnQuUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	6/1/2012	6/1/2012	6/30/2012
a4Q7V00004NtnQvUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	7/1/2012	7/1/2012	7/31/2012
a4Q7V00004NtnQwUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	8/1/2012	8/1/2012	8/31/2012
a4Q7V00004NtnQxUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	9/1/2012	9/1/2012	9/30/2012
a4Q7V00004NtnQyUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	10/1/2012	10/1/2012	10/31/2012
a4Q7V00004NtnQzUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	11/1/2012	11/1/2012	11/30/2012
a4Q7V00004NtnR0UAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	12/1/2012	12/1/2012	12/31/2012
a4Q7V00004NtnR1UAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	1/1/2013	1/1/2013	1/31/2013
a4Q7V00004NtnR2UAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	2/1/2013	2/1/2013	2/28/2013
a4Q7V00004NtnR3UAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	3/1/2013	3/1/2013	3/31/2013
a4Q7V00004NtnR4UAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	4/1/2013	4/1/2013	4/30/2013
a4Q7V00004NtnR5UAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	5/1/2013	5/1/2013	5/31/2013
a4Q7V00004NtnR6UAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	6/1/2013	6/1/2013	6/30/2013
a4Q7V00004NtnR7UAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	7/1/2013	7/1/2013	7/31/2013
a4Q7V00004NtnR8UAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	8/1/2013	8/1/2013	8/31/2013
a4Q7V00004NtnR9UAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	9/1/2013	9/1/2013	9/30/2013
a4Q7V00004NtnRAUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	10/1/2013	10/1/2013	10/31/2013
a4Q7V00004NtnRBUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	11/1/2013	11/1/2013	11/30/2013
a4Q7V00004NtnRCUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	12/1/2013	12/1/2013	12/31/2013
a4Q7V00004NtnRDUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	1/1/2014	1/1/2014	1/31/2014
a4Q7V00004NtnREUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	2/1/2014	2/1/2014	2/28/2014
a4Q7V00004NtnRFUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	3/1/2014	3/1/2014	3/31/2014
a4Q7V00004NtnRGUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	4/1/2014	4/1/2014	4/30/2014
a4Q7V00004NtnRHUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	5/1/2014	5/1/2014	5/31/2014
a4Q7V00004NtnRIUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	6/1/2014	6/1/2014	6/30/2014
a4Q7V00004NtnRJUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	7/1/2014	7/1/2014	7/31/2014
a4Q7V00004NtnRKUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	8/1/2014	8/1/2014	8/31/2014
a4Q7V00004NtnRLUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	9/1/2014	9/1/2014	9/30/2014
a4Q7V00004NtnRMUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	10/1/2014	10/1/2014	10/31/2014
a4Q7V00004NtnRNUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	11/1/2014	11/1/2014	11/30/2014
a4Q7V00004NtnROUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	12/1/2014	12/1/2014	12/31/2014
a4Q7V00004NtnRPUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	1/1/2015	1/1/2015	1/31/2015
a4Q7V00004NtnRQUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	2/1/2015	2/1/2015	2/28/2015
a4Q7V00004NtnRRUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	3/1/2015	3/1/2015	3/31/2015
a4Q7V00004NtnRSUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	4/1/2015	4/1/2015	4/30/2015
a4Q7V00004NtnRTUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	5/1/2015	5/1/2015	5/31/2015
a4Q7V00004NtnRUUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	6/1/2015	6/1/2015	6/30/2015
a4Q7V00004NtnRVUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	7/1/2015	7/1/2015	7/31/2015
a4Q7V00004NtnRWUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	8/1/2015	8/1/2015	8/31/2015
a4Q7V00004NtnRXUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	9/1/2015	9/1/2015	9/30/2015
a4Q7V00004NtnRYUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	10/1/2015	10/1/2015	10/31/2015
a4Q7V00004NtnRZUAZ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	11/1/2015	11/1/2015	11/30/2015
a4Q7V00004NtnRaUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	12/1/2015	12/1/2015	12/31/2015
a4Q7V00004NtnRbUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	1/1/2016	1/1/2016	1/31/2016
a4Q7V00004NtnRcUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	2/1/2016	2/1/2016	2/29/2016
a4Q7V00004NtnRdUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	3/1/2016	3/1/2016	3/31/2016
a4Q7V00004NtnReUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	4/1/2016	4/1/2016	4/30/2016
a4Q7V00004NtnRfUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	5/1/2016	5/1/2016	5/31/2016
a4Q7V00004NtnRgUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	6/1/2016	6/1/2016	6/30/2016
a4Q7V00004NtnRhUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	7/1/2016	7/1/2016	7/31/2016
a4Q7V00004NtnRiUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	8/1/2016	8/1/2016	8/31/2016
a4Q7V00004NtnRjUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	9/1/2016	9/1/2016	9/30/2016
a4Q7V00004NtnRkUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	10/1/2016	10/1/2016	10/31/2016
a4Q7V00004NtnRlUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	11/1/2016	11/1/2016	11/30/2016
a4Q7V00004NtnRmUAJ	a1460000002s9fSAAQ	0	20746.26		20746.26	Active	BIP Front Loaded Rebate-3	12/1/2016	12/1/2016	12/31/2016
a4Q7V00004NtnRnUAJ	a1460000002s9fSAAQ	345.771	20400.489		20746.26	Active	BIP Front Loaded Rebate-3	1/1/2017	1/1/2017	1/31/2017
a4Q7V00004NtnRoUAJ	a1460000002s9fSAAQ	345.771	20054.718		20400.489	Active	BIP Front Loaded Rebate-3	2/1/2017	2/1/2017	2/28/2017
a4Q7V00004NtnRpUAJ	a1460000002s9fSAAQ	345.771	19708.947		20054.718	Active	BIP Front Loaded Rebate-3	3/1/2017	3/1/2017	3/31/2017
a4Q7V00004NtnRqUAJ	a1460000002s9fSAAQ	345.771	19363.176		19708.947	Active	BIP Front Loaded Rebate-3	4/1/2017	4/1/2017	4/30/2017
a4Q7V00004NtnRrUAJ	a1460000002s9fSAAQ	345.771	19017.405		19363.176	Active	BIP Front Loaded Rebate-3	5/1/2017	5/1/2017	5/31/2017
a4Q7V00004NtnRsUAJ	a1460000002s9fSAAQ	345.771	18671.634		19017.405	Active	BIP Front Loaded Rebate-3	6/1/2017	6/1/2017	6/30/2017
a4Q7V00004NtnRtUAJ	a1460000002s9fSAAQ	345.771	18325.863		18671.634	Active	BIP Front Loaded Rebate-3	7/1/2017	7/1/2017	7/31/2017
a4Q7V00004NtnRuUAJ	a1460000002s9fSAAQ	345.771	17980.092		18325.863	Active	BIP Front Loaded Rebate-3	8/1/2017	8/1/2017	8/31/2017
a4Q7V00004NtnRvUAJ	a1460000002s9fSAAQ	345.771	17634.321		17980.092	Active	BIP Front Loaded Rebate-3	9/1/2017	9/1/2017	9/30/2017
a4Q7V00004NtnRwUAJ	a1460000002s9fSAAQ	345.771	17288.55		17634.321	Active	BIP Front Loaded Rebate-3	10/1/2017	10/1/2017	10/31/2017
a4Q7V00004NtnRxUAJ	a1460000002s9fSAAQ	345.771	16942.779		17288.55	Active	BIP Front Loaded Rebate-3	11/1/2017	11/1/2017	11/30/2017
a4Q7V00004NtnRyUAJ	a1460000002s9fSAAQ	345.771	16597.008		16942.779	Active	BIP Front Loaded Rebate-3	12/1/2017	12/1/2017	12/31/2017
a4Q7V00004NtnRzUAJ	a1460000002s9fSAAQ	345.771	16251.237		16597.008	Active	BIP Front Loaded Rebate-3	1/1/2018	1/1/2018	1/31/2018
a4Q7V00004NtnS0UAJ	a1460000002s9fSAAQ	345.771	15905.466		16251.237	Active	BIP Front Loaded Rebate-3	2/1/2018	2/1/2018	2/28/2018
a4Q7V00004NtnS1UAJ	a1460000002s9fSAAQ	345.771	15559.695		15905.466	Active	BIP Front Loaded Rebate-3	3/1/2018	3/1/2018	3/31/2018
a4Q7V00004NtnS2UAJ	a1460000002s9fSAAQ	345.771	15213.924		15559.695	Active	BIP Front Loaded Rebate-3	4/1/2018	4/1/2018	4/30/2018
a4Q7V00004NtnS3UAJ	a1460000002s9fSAAQ	345.771	14868.153		15213.924	Active	BIP Front Loaded Rebate-3	5/1/2018	5/1/2018	5/31/2018
a4Q7V00004NtnS4UAJ	a1460000002s9fSAAQ	345.771	14522.382		14868.153	Active	BIP Front Loaded Rebate-3	6/1/2018	6/1/2018	6/30/2018
a4Q7V00004NtnS5UAJ	a1460000002s9fSAAQ	345.771	14176.611		14522.382	Active	BIP Front Loaded Rebate-3	7/1/2018	7/1/2018	7/31/2018
a4Q7V00004NtnS6UAJ	a1460000002s9fSAAQ	345.771	13830.84		14176.611	Active	BIP Front Loaded Rebate-3	8/1/2018	8/1/2018	8/31/2018
a4Q7V00004NtnS7UAJ	a1460000002s9fSAAQ	345.771	13485.069		13830.84	Active	BIP Front Loaded Rebate-3	9/1/2018	9/1/2018	9/30/2018
a4Q7V00004NtnS8UAJ	a1460000002s9fSAAQ	345.771	13139.298		13485.069	Active	BIP Front Loaded Rebate-3	10/1/2018	10/1/2018	10/31/2018
a4Q7V00004NtnS9UAJ	a1460000002s9fSAAQ	345.771	12793.527		13139.298	Active	BIP Front Loaded Rebate-3	11/1/2018	11/1/2018	11/30/2018
a4Q7V00004NtnSAUAZ	a1460000002s9fSAAQ	345.771	12447.756		12793.527	Active	BIP Front Loaded Rebate-3	12/1/2018	12/1/2018	12/31/2018
a4Q7V00004NtnSBUAZ	a1460000002s9fSAAQ	345.771	12101.985		12447.756	Active	BIP Front Loaded Rebate-3	1/1/2019	1/1/2019	1/31/2019
a4Q7V00004NtnSCUAZ	a1460000002s9fSAAQ	345.771	11756.214		12101.985	Active	BIP Front Loaded Rebate-3	2/1/2019	2/1/2019	2/28/2019
a4Q7V00004NtnSDUAZ	a1460000002s9fSAAQ	345.771	11410.443		11756.214	Active	BIP Front Loaded Rebate-3	3/1/2019	3/1/2019	3/31/2019
a4Q7V00004NtnSEUAZ	a1460000002s9fSAAQ	345.771	11064.672		11410.443	Active	BIP Front Loaded Rebate-3	4/1/2019	4/1/2019	4/30/2019
a4Q7V00004NtnSFUAZ	a1460000002s9fSAAQ	345.771	10718.901		11064.672	Active	BIP Front Loaded Rebate-3	5/1/2019	5/1/2019	5/31/2019
a4Q7V00004NtnSGUAZ	a1460000002s9fSAAQ	345.771	10373.13		10718.901	Active	BIP Front Loaded Rebate-3	6/1/2019	6/1/2019	6/30/2019
a4Q7V00004NtnSHUAZ	a1460000002s9fSAAQ	345.771	10027.359		10373.13	Active	BIP Front Loaded Rebate-3	7/1/2019	7/1/2019	7/31/2019
a4Q7V00004NtnSIUAZ	a1460000002s9fSAAQ	345.771	9681.588		10027.359	Active	BIP Front Loaded Rebate-3	8/1/2019	8/1/2019	8/31/2019
a4Q7V00004NtnSJUAZ	a1460000002s9fSAAQ	345.771	9335.817		9681.588	Active	BIP Front Loaded Rebate-3	9/1/2019	9/1/2019	9/30/2019
a4Q7V00004NtnSKUAZ	a1460000002s9fSAAQ	345.771	8990.046		9335.817	Active	BIP Front Loaded Rebate-3	10/1/2019	10/1/2019	10/31/2019
a4Q7V00004NtnSLUAZ	a1460000002s9fSAAQ	345.771	8644.275		8990.046	Active	BIP Front Loaded Rebate-3	11/1/2019	11/1/2019	11/30/2019
a4Q7V00004NtnSMUAZ	a1460000002s9fSAAQ	345.771	8298.504		8644.275	Active	BIP Front Loaded Rebate-3	12/1/2019	12/1/2019	12/31/2019
a4Q7V00004NtnSNUAZ	a1460000002s9fSAAQ	345.771	7952.733		8298.504	Active	BIP Front Loaded Rebate-3	1/1/2020	1/1/2020	1/31/2020
a4Q7V00004NtnSOUAZ	a1460000002s9fSAAQ	345.771	7606.962		7952.733	Active	BIP Front Loaded Rebate-3	2/1/2020	2/1/2020	2/29/2020
a4Q7V00004NtnSPUAZ	a1460000002s9fSAAQ	345.771	7261.191		7606.962	Active	BIP Front Loaded Rebate-3	3/1/2020	3/1/2020	3/31/2020
a4Q7V00004NtnSQUAZ	a1460000002s9fSAAQ	345.771	6915.42		7261.191	Active	BIP Front Loaded Rebate-3	4/1/2020	4/1/2020	4/30/2020
a4Q7V00004NtnSRUAZ	a1460000002s9fSAAQ	345.771	6569.649		6915.42	Active	BIP Front Loaded Rebate-3	5/1/2020	5/1/2020	5/31/2020
a4Q7V00004NtnSSUAZ	a1460000002s9fSAAQ	345.771	6223.878		6569.649	Active	BIP Front Loaded Rebate-3	6/1/2020	6/1/2020	6/30/2020
a4Q7V00004NtnSTUAZ	a1460000002s9fSAAQ	345.771	5878.107		6223.878	Active	BIP Front Loaded Rebate-3	7/1/2020	7/1/2020	7/31/2020
a4Q7V00004NtnSUUAZ	a1460000002s9fSAAQ	345.771	5532.336		5878.107	Active	BIP Front Loaded Rebate-3	8/1/2020	8/1/2020	8/31/2020
a4Q7V00004NtnSVUAZ	a1460000002s9fSAAQ	345.771	5186.565		5532.336	Active	BIP Front Loaded Rebate-3	9/1/2020	9/1/2020	9/30/2020
a4Q7V00004NtnSWUAZ	a1460000002s9fSAAQ	345.771	4840.794		5186.565	Active	BIP Front Loaded Rebate-3	10/1/2020	10/1/2020	10/31/2020
a4Q7V00004NtnSXUAZ	a1460000002s9fSAAQ	345.771	4495.023		4840.794	Active	BIP Front Loaded Rebate-3	11/1/2020	11/1/2020	11/30/2020
a4Q7V00004NtnSYUAZ	a1460000002s9fSAAQ	345.771	4149.252		4495.023	Active	BIP Front Loaded Rebate-3	12/1/2020	12/1/2020	12/31/2020
a4Q7V00004NtnSZUAZ	a1460000002s9fSAAQ	345.771	3803.481		4149.252	Active	BIP Front Loaded Rebate-3	1/1/2021	1/1/2021	1/31/2021
a4Q7V00004NtnSaUAJ	a1460000002s9fSAAQ	345.771	3457.71		3803.481	Active	BIP Front Loaded Rebate-3	2/1/2021	2/1/2021	2/28/2021
a4Q7V00004NtnSbUAJ	a1460000002s9fSAAQ	345.771	3111.939		3457.71	Active	BIP Front Loaded Rebate-3	3/1/2021	3/1/2021	3/31/2021
a4Q7V00004NtnScUAJ	a1460000002s9fSAAQ	345.771	2766.168		3111.939	Active	BIP Front Loaded Rebate-3	4/1/2021	4/1/2021	4/30/2021
a4Q7V00004NtnSdUAJ	a1460000002s9fSAAQ	345.771	2420.397		2766.168	Active	BIP Front Loaded Rebate-3	5/1/2021	5/1/2021	5/31/2021
a4Q7V00004NtnSeUAJ	a1460000002s9fSAAQ	345.771	2074.626		2420.397	Active	BIP Front Loaded Rebate-3	6/1/2021	6/1/2021	6/30/2021
a4Q7V00004NtnSfUAJ	a1460000002s9fSAAQ	345.771	1728.855		2074.626	Active	BIP Front Loaded Rebate-3	7/1/2021	7/1/2021	7/31/2021
a4Q7V00004NtnSgUAJ	a1460000002s9fSAAQ	345.771	1383.084		1728.855	Active	BIP Front Loaded Rebate-3	8/1/2021	8/1/2021	8/31/2021
a4Q7V00004NtnShUAJ	a1460000002s9fSAAQ	345.771	1037.313		1383.084	Active	BIP Front Loaded Rebate-3	9/1/2021	9/1/2021	9/30/2021
a4Q7V00004NtnSiUAJ	a1460000002s9fSAAQ	345.771	691.542		1037.313	Active	BIP Front Loaded Rebate-3	10/1/2021	10/1/2021	10/31/2021
a4Q7V00004NtnSjUAJ	a1460000002s9fSAAQ	345.771	345.771		691.542	Active	BIP Front Loaded Rebate-3	11/1/2021	11/1/2021	11/30/2021
a4Q7V00004NtnSkUAJ	a1460000002s9fSAAQ	345.771	0		345.771	Active	BIP Front Loaded Rebate-3	12/1/2021	12/1/2021	12/31/2021
a4Q0e00003HnbXgEAJ	a1432000003un4nAAA	872.0084314	43600.42157		0	Active	BIP Front Loaded Rebate-3	5/1/2016	5/1/2016	5/31/2016
a4Q0e00003HnbXhEAJ	a1432000003un4nAAA	872.0084314	42728.41314		43600.42157	Active	BIP Front Loaded Rebate-3	6/1/2016	6/1/2016	6/30/2016
a4Q0e00003HnbXiEAJ	a1432000003un4nAAA	872.0084314	41856.40471		42728.41314	Active	BIP Front Loaded Rebate-3	7/1/2016	7/1/2016	7/31/2016
a4Q0e00003HnbXjEAJ	a1432000003un4nAAA	872.0084314	40984.39627		41856.40471	Active	BIP Front Loaded Rebate-3	8/1/2016	8/1/2016	8/31/2016
a4Q0e00003HnbXkEAJ	a1432000003un4nAAA	872.0084314	40112.38784		40984.39627	Active	BIP Front Loaded Rebate-3	9/1/2016	9/1/2016	9/30/2016
a4Q0e00003HnbXlEAJ	a1432000003un4nAAA	872.0084314	39240.37941		40112.38784	Active	BIP Front Loaded Rebate-3	10/1/2016	10/1/2016	10/31/2016
a4Q0e00003HnbXmEAJ	a1432000003un4nAAA	872.0084314	38368.37098		39240.37941	Active	BIP Front Loaded Rebate-3	11/1/2016	11/1/2016	11/30/2016
a4Q0e00003HnbXnEAJ	a1432000003un4nAAA	872.0084314	37496.36255		38368.37098	Active	BIP Front Loaded Rebate-3	12/1/2016	12/1/2016	12/31/2016
a4Q0e00003HnbXoEAJ	a1432000003un4nAAA	872.0084314	36624.35412		37496.36255	Active	BIP Front Loaded Rebate-3	1/1/2017	1/1/2017	1/31/2017
a4Q0e00003HnbXpEAJ	a1432000003un4nAAA	872.0084314	35752.34569		36624.35412	Active	BIP Front Loaded Rebate-3	2/1/2017	2/1/2017	2/28/2017
a4Q0e00003HnbXqEAJ	a1432000003un4nAAA	872.0084314	34880.33725		35752.34569	Active	BIP Front Loaded Rebate-3	3/1/2017	3/1/2017	3/31/2017
a4Q0e00003HnbXrEAJ	a1432000003un4nAAA	872.0084314	34008.32882		34880.33725	Active	BIP Front Loaded Rebate-3	4/1/2017	4/1/2017	4/30/2017
a4Q0e00003HnbXsEAJ	a1432000003un4nAAA	872.0084314	33136.32039		34008.32882	Active	BIP Front Loaded Rebate-3	5/1/2017	5/1/2017	5/31/2017
a4Q0e00003HnbXtEAJ	a1432000003un4nAAA	872.0084314	32264.31196		33136.32039	Active	BIP Front Loaded Rebate-3	6/1/2017	6/1/2017	6/30/2017
a4Q0e00003HnbXuEAJ	a1432000003un4nAAA	872.0084314	31392.30353		32264.31196	Active	BIP Front Loaded Rebate-3	7/1/2017	7/1/2017	7/31/2017
a4Q0e00003HnbXvEAJ	a1432000003un4nAAA	872.0084314	30520.2951		31392.30353	Active	BIP Front Loaded Rebate-3	8/1/2017	8/1/2017	8/31/2017
a4Q0e00003HnbXwEAJ	a1432000003un4nAAA	872.0084314	29648.28667		30520.2951	Active	BIP Front Loaded Rebate-3	9/1/2017	9/1/2017	9/30/2017
a4Q0e00003HnbXxEAJ	a1432000003un4nAAA	872.0084314	28776.27824		29648.28667	Active	BIP Front Loaded Rebate-3	10/1/2017	10/1/2017	10/31/2017
a4Q0e00003HnbXyEAJ	a1432000003un4nAAA	872.0084314	27904.2698		28776.27824	Active	BIP Front Loaded Rebate-3	11/1/2017	11/1/2017	11/30/2017
a4Q0e00003HnbXzEAJ	a1432000003un4nAAA	872.0084314	27032.26137		27904.2698	Active	BIP Front Loaded Rebate-3	12/1/2017	12/1/2017	12/31/2017
a4Q0e00003HnbY0EAJ	a1432000003un4nAAA	872.0084314	26160.25294		27032.26137	Active	BIP Front Loaded Rebate-3	1/1/2018	1/1/2018	1/31/2018
a4Q0e00003HnbY1EAJ	a1432000003un4nAAA	872.0084314	25288.24451		26160.25294	Active	BIP Front Loaded Rebate-3	2/1/2018	2/1/2018	2/28/2018
a4Q0e00003HnbY2EAJ	a1432000003un4nAAA	872.0084314	24416.23608		25288.24451	Active	BIP Front Loaded Rebate-3	3/1/2018	3/1/2018	3/31/2018
a4Q0e00003HnbY3EAJ	a1432000003un4nAAA	872.0084314	23544.22765		24416.23608	Active	BIP Front Loaded Rebate-3	4/1/2018	4/1/2018	4/30/2018
a4Q0e00003HnbY4EAJ	a1432000003un4nAAA	872.0084314	22672.21922		23544.22765	Active	BIP Front Loaded Rebate-3	5/1/2018	5/1/2018	5/31/2018
a4Q0e00003HnbY5EAJ	a1432000003un4nAAA	872.0084314	21800.21078		22672.21922	Active	BIP Front Loaded Rebate-3	6/1/2018	6/1/2018	6/30/2018
a4Q0e00003HnbY6EAJ	a1432000003un4nAAA	872.0084314	20928.20235		21800.21078	Active	BIP Front Loaded Rebate-3	7/1/2018	7/1/2018	7/31/2018
a4Q0e00003HnbY7EAJ	a1432000003un4nAAA	872.0084314	20056.19392		20928.20235	Active	BIP Front Loaded Rebate-3	8/1/2018	8/1/2018	8/31/2018
a4Q0e00003HnbY8EAJ	a1432000003un4nAAA	872.0084314	19184.18549		20056.19392	Active	BIP Front Loaded Rebate-3	9/1/2018	9/1/2018	9/30/2018
a4Q0e00003HnbY9EAJ	a1432000003un4nAAA	872.0084314	18312.17706		19184.18549	Active	BIP Front Loaded Rebate-3	10/1/2018	10/1/2018	10/31/2018
a4Q0e00003HnbYAEAZ	a1432000003un4nAAA	872.0084314	17440.16863		18312.17706	Active	BIP Front Loaded Rebate-3	11/1/2018	11/1/2018	11/30/2018
a4Q0e00003HnbYBEAZ	a1432000003un4nAAA	872.0084314	16568.1602		17440.16863	Active	BIP Front Loaded Rebate-3	12/1/2018	12/1/2018	12/31/2018
a4Q0e00003HnbYCEAZ	a1432000003un4nAAA	872.0084314	15696.15176		16568.1602	Active	BIP Front Loaded Rebate-3	1/1/2019	1/1/2019	1/31/2019
a4Q0e00003HnbYDEAZ	a1432000003un4nAAA	872.0084314	14824.14333		15696.15176	Active	BIP Front Loaded Rebate-3	2/1/2019	2/1/2019	2/28/2019
a4Q0e00003HnbYEEAZ	a1432000003un4nAAA	872.0084314	13952.1349		14824.14333	Active	BIP Front Loaded Rebate-3	3/1/2019	3/1/2019	3/31/2019
a4Q0e00003HnbYFEAZ	a1432000003un4nAAA	872.0084314	13080.12647		13952.1349	Active	BIP Front Loaded Rebate-3	4/1/2019	4/1/2019	4/30/2019
a4Q0e00003HnbYGEAZ	a1432000003un4nAAA	872.0084314	12208.11804		13080.12647	Active	BIP Front Loaded Rebate-3	5/1/2019	5/1/2019	5/31/2019
a4Q0e00003HnbYHEAZ	a1432000003un4nAAA	872.0084314	11336.10961		12208.11804	Active	BIP Front Loaded Rebate-3	6/1/2019	6/1/2019	6/30/2019
a4Q0e00003HnbYIEAZ	a1432000003un4nAAA	872.0084314	10464.10118		11336.10961	Active	BIP Front Loaded Rebate-3	7/1/2019	7/1/2019	7/31/2019
a4Q0e00003HnbYJEAZ	a1432000003un4nAAA	872.0084314	9592.092745		10464.10118	Active	BIP Front Loaded Rebate-3	8/1/2019	8/1/2019	8/31/2019
a4Q0e00003HnbYKEAZ	a1432000003un4nAAA	872.0084314	8720.084314		9592.092745	Active	BIP Front Loaded Rebate-3	9/1/2019	9/1/2019	9/30/2019
a4Q0e00003HnbYLEAZ	a1432000003un4nAAA	872.0084314	7848.075882		8720.084314	Active	BIP Front Loaded Rebate-3	10/1/2019	10/1/2019	10/31/2019
a4Q0e00003HnbYMEAZ	a1432000003un4nAAA	872.0084314	6976.067451		7848.075882	Active	BIP Front Loaded Rebate-3	11/1/2019	11/1/2019	11/30/2019
a4Q0e00003HnbYNEAZ	a1432000003un4nAAA	872.0084314	6104.05902		6976.067451	Active	BIP Front Loaded Rebate-3	12/1/2019	12/1/2019	12/31/2019
a4Q0e00003HnbYOEAZ	a1432000003un4nAAA	872.0084314	5232.050588		6104.05902	Active	BIP Front Loaded Rebate-3	1/1/2020	1/1/2020	1/31/2020
a4Q0e00003HnbYPEAZ	a1432000003un4nAAA	872.0084314	4360.042157		5232.050588	Active	BIP Front Loaded Rebate-3	2/1/2020	2/1/2020	2/29/2020
a4Q0e00003HnbYQEAZ	a1432000003un4nAAA	872.0084314	3488.033725		4360.042157	Active	BIP Front Loaded Rebate-3	3/1/2020	3/1/2020	3/31/2020
a4Q0e00003HnbYREAZ	a1432000003un4nAAA	872.0084314	2616.025294		3488.033725	Active	BIP Front Loaded Rebate-3	4/1/2020	4/1/2020	4/30/2020
a4Q0e00003HnbYSEAZ	a1432000003un4nAAA	872.0084314	1744.016863		2616.025294	Active	BIP Front Loaded Rebate-3	5/1/2020	5/1/2020	5/31/2020
a4Q0e00003HnbYTEAZ	a1432000003un4nAAA	872.0084314	872.0084314		1744.016863	Active	BIP Front Loaded Rebate-3	6/1/2020	6/1/2020	6/30/2020
a4Q0e00003HnbYUEAZ	a1432000003un4nAAA	872.0084314	0		872.0084314	Active	BIP Front Loaded Rebate-3	7/1/2020	7/1/2020	7/31/2020
a4Q7V00006GnH6cUAF	a140e000008y1CrAAI	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2020	4/1/2020	4/30/2020
a4Q7V00006GnH6dUAF	a140e000008y1CrAAI	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2020	5/1/2020	5/31/2020
a4Q7V00006GnH6eUAF	a140e000008y1CrAAI	0	0		0	Active	BIP Front Loaded Rebate-3	6/1/2020	6/1/2020	6/30/2020
a4Q7V00006GnH6fUAF	a140e000008y1CrAAI	0	3091.74		0	Active	BIP Front Loaded Rebate-3	7/1/2020	7/1/2020	7/31/2020
a4Q7V00006GnH6gUAF	a140e000008y1CrAAI	0	3091.74		3091.74	Active	BIP Front Loaded Rebate-3	8/1/2020	8/1/2020	8/31/2020
a4Q7V00006GnH6hUAF	a140e000008y1CrAAI	0	3091.74		3091.74	Active	BIP Front Loaded Rebate-3	9/1/2020	9/1/2020	9/30/2020
a4Q7V00006GnH6iUAF	a140e000008y1CrAAI	0	6633.42		3091.74	Active	BIP Front Loaded Rebate-3	10/1/2020	10/1/2020	10/31/2020
a4Q7V00006GnH6jUAF	a140e000008y1CrAAI	0	6633.42		6633.42	Active	BIP Front Loaded Rebate-3	11/1/2020	11/1/2020	11/30/2020
a4Q7V00006GnH6kUAF	a140e000008y1CrAAI	0	6633.42		6633.42	Active	BIP Front Loaded Rebate-3	12/1/2020	12/1/2020	12/31/2020
a4Q7V00006GnH6lUAF	a140e000008y1CrAAI	0	9955.28		6633.42	Active	BIP Front Loaded Rebate-3	1/1/2021	1/1/2021	1/31/2021
a4Q7V00006GnH6mUAF	a140e000008y1CrAAI	0	9955.28		9955.28	Active	BIP Front Loaded Rebate-3	2/1/2021	2/1/2021	2/28/2021
a4Q7V00006GnH6nUAF	a140e000008y1CrAAI	0	9955.28		9955.28	Active	BIP Front Loaded Rebate-3	3/1/2021	3/1/2021	3/31/2021
a4Q7V00006GnH6oUAF	a140e000008y1CrAAI	0	13485.4		9955.28	Active	BIP Front Loaded Rebate-3	4/1/2021	4/1/2021	4/30/2021
a4Q7V00006GnH6pUAF	a140e000008y1CrAAI	0	13485.4		13485.4	Active	BIP Front Loaded Rebate-3	5/1/2021	5/1/2021	5/31/2021
a4Q7V00006GnH6qUAF	a140e000008y1CrAAI	0	13485.4		13485.4	Active	BIP Front Loaded Rebate-3	6/1/2021	6/1/2021	6/30/2021
a4Q7V00006GnH6rUAF	a140e000008y1CrAAI	0	17478.08		13485.4	Active	BIP Front Loaded Rebate-3	7/1/2021	7/1/2021	7/31/2021
a4Q7V00006GnH6sUAF	a140e000008y1CrAAI	0	17478.08		17478.08	Active	BIP Front Loaded Rebate-3	8/1/2021	8/1/2021	8/31/2021
a4Q7V00006GnH6tUAF	a140e000008y1CrAAI	0	17478.08		17478.08	Active	BIP Front Loaded Rebate-3	9/1/2021	9/1/2021	9/30/2021
a4Q7V00006GnH6uUAF	a140e000008y1CrAAI	0	20803.86		17478.08	Active	BIP Front Loaded Rebate-3	10/1/2021	10/1/2021	10/31/2021
a4Q7V00006GnH6vUAF	a140e000008y1CrAAI	0	20803.86		20803.86	Active	BIP Front Loaded Rebate-3	11/1/2021	11/1/2021	11/30/2021
a4Q7V00006GnH6wUAF	a140e000008y1CrAAI	0	20803.86		20803.86	Active	BIP Front Loaded Rebate-3	12/1/2021	12/1/2021	12/31/2021
a4Q7V00006GnH6xUAF	a140e000008y1CrAAI	0	24529.58		20803.86	Active	BIP Front Loaded Rebate-3	1/1/2022	1/1/2022	1/31/2022
a4Q7V00006GnH6yUAF	a140e000008y1CrAAI	0	24529.58		24529.58	Active	BIP Front Loaded Rebate-3	2/1/2022	2/1/2022	2/28/2022
a4Q7V00006GnH6zUAF	a140e000008y1CrAAI	0	24529.58		24529.58	Active	BIP Front Loaded Rebate-3	3/1/2022	3/1/2022	3/31/2022
a4Q7V00006GnH70UAF	a140e000008y1CrAAI	0	27971.24		24529.58	Active	BIP Front Loaded Rebate-3	4/1/2022	4/1/2022	4/30/2022
a4Q7V00006GnH71UAF	a140e000008y1CrAAI	0	27971.24		27971.24	Active	BIP Front Loaded Rebate-3	5/1/2022	5/1/2022	5/31/2022
a4Q7V00006GnH72UAF	a140e000008y1CrAAI	0	27971.24		27971.24	Active	BIP Front Loaded Rebate-3	6/1/2022	6/1/2022	6/30/2022
a4Q7V00006GnH73UAF	a140e000008y1CrAAI	0	31749.48		27971.24	Active	BIP Front Loaded Rebate-3	7/1/2022	7/1/2022	7/31/2022
a4Q7V00006GnH74UAF	a140e000008y1CrAAI	0	31749.48		31749.48	Active	BIP Front Loaded Rebate-3	8/1/2022	8/1/2022	8/31/2022
a4Q7V00006GnH75UAF	a140e000008y1CrAAI	0	31749.48		31749.48	Active	BIP Front Loaded Rebate-3	9/1/2022	9/1/2022	9/30/2022
a4Q7V00006GnH76UAF	a140e000008y1CrAAI	0	35248.2		31749.48	Active	BIP Front Loaded Rebate-3	10/1/2022	10/1/2022	10/31/2022
a4Q7V00006GnH77UAF	a140e000008y1CrAAI	0	35248.2		35248.2	Active	BIP Front Loaded Rebate-3	11/1/2022	11/1/2022	11/30/2022
a4Q7V00006GnH78UAF	a140e000008y1CrAAI	0	35248.2		35248.2	Active	BIP Front Loaded Rebate-3	12/1/2022	12/1/2022	12/31/2022
a4Q7V00006GnH79UAF	a140e000008y1CrAAI	0	38423.94		35248.2	Active	BIP Front Loaded Rebate-3	1/1/2023	1/1/2023	1/31/2023
a4Q7V00006GnH7AUAV	a140e000008y1CrAAI	0	38423.94		38423.94	Active	BIP Front Loaded Rebate-3	2/1/2023	2/1/2023	2/28/2023
a4Q7V00006GnH7BUAV	a140e000008y1CrAAI	0	38423.94		38423.94	Active	BIP Front Loaded Rebate-3	3/1/2023	3/1/2023	3/31/2023
a4Q7V00006GnH7CUAV	a140e000008y1CrAAI	0	41554.14		38423.94	Active	BIP Front Loaded Rebate-3	4/1/2023	4/1/2023	4/30/2023
a4Q7V00006GnH7DUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Active	BIP Front Loaded Rebate-3	5/1/2023	5/1/2023	5/31/2023
a4Q7V00006GnH7EUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Active	BIP Front Loaded Rebate-3	6/1/2023	6/1/2023	6/30/2023
a4Q7V00006GnH7FUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Active	BIP Front Loaded Rebate-3	7/1/2023	7/1/2023	7/31/2023
a4Q7V00006GnH7GUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Active	BIP Front Loaded Rebate-3	8/1/2023	8/1/2023	8/31/2023
a4Q7V00006GnH7HUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Active	BIP Front Loaded Rebate-3	9/1/2023	9/1/2023	9/30/2023
a4Q7V00006GnH7IUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Active	BIP Front Loaded Rebate-3	10/1/2023	10/1/2023	10/31/2023
a4Q7V00006GnH7JUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Active	BIP Front Loaded Rebate-3	11/1/2023	11/1/2023	11/30/2023
a4Q7V00006GnH7KUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Active	BIP Front Loaded Rebate-3	12/1/2023	12/1/2023	12/31/2023
a4Q7V00006GnH7LUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Active	BIP Front Loaded Rebate-3	1/1/2024	1/1/2024	1/31/2024
a4Q7V00006GnH7MUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Active	BIP Front Loaded Rebate-3	2/1/2024	2/1/2024	2/29/2024
a4Q7V00006GnH7NUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Active	BIP Front Loaded Rebate-3	3/1/2024	3/1/2024	3/31/2024
a4Q7V00006GnH7OUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Active	BIP Front Loaded Rebate-3	4/1/2024	4/1/2024	4/30/2024
a4Q7V00006GnH7PUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Active	BIP Front Loaded Rebate-3	5/1/2024	5/1/2024	5/31/2024
a4Q7V00006GnH7QUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Active	BIP Front Loaded Rebate-3	6/1/2024	6/1/2024	6/30/2024
a4Q7V00006GnH7RUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Active	BIP Front Loaded Rebate-3	7/1/2024	7/1/2024	7/31/2024
a4Q7V00006GnH7SUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Active	BIP Front Loaded Rebate-3	8/1/2024	8/1/2024	8/31/2024
a4Q7V00006GnH7TUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Draft	BIP Front Loaded Rebate-3	9/1/2024	9/1/2024	9/30/2024
a4Q7V00006GnH7UUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Draft	BIP Front Loaded Rebate-3	10/1/2024	10/1/2024	10/31/2024
a4Q7V00006GnH7VUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Draft	BIP Front Loaded Rebate-3	11/1/2024	11/1/2024	11/30/2024
a4Q7V00006GnH7WUAV	a140e000008y1CrAAI	0	41554.14		41554.14	Draft	BIP Front Loaded Rebate-3	12/1/2024	12/1/2024	12/31/2024
a4Q7V00006GnHEYUA3	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2021	2/1/2021	2/28/2021
a4Q7V00006GnHEZUA3	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2021	3/1/2021	3/31/2021
a4Q7V00006GnHEaUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2021	4/1/2021	4/30/2021
a4Q7V00006GnHEbUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2021	5/1/2021	5/31/2021
a4Q7V00006GnHEcUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	6/1/2021	6/1/2021	6/30/2021
a4Q7V00006GnHEdUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	7/1/2021	7/1/2021	7/31/2021
a4Q7V00006GnHEeUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	8/1/2021	8/1/2021	8/31/2021
a4Q7V00006GnHEfUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	9/1/2021	9/1/2021	9/30/2021
a4Q7V00006GnHEgUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	10/1/2021	10/1/2021	10/31/2021
a4Q7V00006GnHEhUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	11/1/2021	11/1/2021	11/30/2021
a4Q7V00006GnHEiUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	12/1/2021	12/1/2021	12/31/2021
a4Q7V00006GnHEjUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2022	1/1/2022	1/31/2022
a4Q7V00006GnHEkUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2022	2/1/2022	2/28/2022
a4Q7V00006GnHElUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2022	3/1/2022	3/31/2022
a4Q7V00006GnHEmUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2022	4/1/2022	4/30/2022
a4Q7V00006GnHEnUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2022	5/1/2022	5/31/2022
a4Q7V00006GnHEoUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	6/1/2022	6/1/2022	6/30/2022
a4Q7V00006GnHEpUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	7/1/2022	7/1/2022	7/31/2022
a4Q7V00006GnHEqUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	8/1/2022	8/1/2022	8/31/2022
a4Q7V00006GnHErUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	9/1/2022	9/1/2022	9/30/2022
a4Q7V00006GnHEsUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	10/1/2022	10/1/2022	10/31/2022
a4Q7V00006GnHEtUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	11/1/2022	11/1/2022	11/30/2022
a4Q7V00006GnHEuUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	12/1/2022	12/1/2022	12/31/2022
a4Q7V00006GnHEvUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2023	1/1/2023	1/31/2023
a4Q7V00006GnHEwUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2023	2/1/2023	2/28/2023
a4Q7V00006GnHExUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2023	3/1/2023	3/31/2023
a4Q7V00006GnHEyUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2023	4/1/2023	4/30/2023
a4Q7V00006GnHEzUAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2023	5/1/2023	5/31/2023
a4Q7V00006GnHF0UAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	6/1/2023	6/1/2023	6/30/2023
a4Q7V00006GnHF1UAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	7/1/2023	7/1/2023	7/31/2023
a4Q7V00006GnHF2UAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	8/1/2023	8/1/2023	8/31/2023
a4Q7V00006GnHF3UAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	9/1/2023	9/1/2023	9/30/2023
a4Q7V00006GnHF4UAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	10/1/2023	10/1/2023	10/31/2023
a4Q7V00006GnHF5UAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	11/1/2023	11/1/2023	11/30/2023
a4Q7V00006GnHF6UAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	12/1/2023	12/1/2023	12/31/2023
a4Q7V00006GnHF7UAN	a140e000008y1DpAAI	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2024	1/1/2024	1/31/2024
a4Q7V00006GnHF8UAN	a140e000008y1DpAAI	0	38687.01		0	Active	BIP Front Loaded Rebate-3	2/1/2024	2/1/2024	2/29/2024
a4Q7V00006GnHF9UAN	a140e000008y1DpAAI	0	38687.01		38687.01	Active	BIP Front Loaded Rebate-3	3/1/2024	3/1/2024	3/31/2024
a4Q7V00006GnHFAUA3	a140e000008y1DpAAI	0	38687.01		38687.01	Active	BIP Front Loaded Rebate-3	4/1/2024	4/1/2024	4/30/2024
a4Q7V00006GnHFBUA3	a140e000008y1DpAAI	0	38687.01		38687.01	Active	BIP Front Loaded Rebate-3	5/1/2024	5/1/2024	5/31/2024
a4Q7V00006GnHFCUA3	a140e000008y1DpAAI	0	38687.01		38687.01	Active	BIP Front Loaded Rebate-3	6/1/2024	6/1/2024	6/30/2024
a4Q7V00006GnHFDUA3	a140e000008y1DpAAI	0	38687.01		38687.01	Active	BIP Front Loaded Rebate-3	7/1/2024	7/1/2024	7/31/2024
a4Q7V00006GnHFEUA3	a140e000008y1DpAAI	0	38687.01		38687.01	Active	BIP Front Loaded Rebate-3	8/1/2024	8/1/2024	8/31/2024
a4Q7V00006GnHFFUA3	a140e000008y1DpAAI	0	38687.01		38687.01	Draft	BIP Front Loaded Rebate-3	9/1/2024	9/1/2024	9/30/2024
a4Q7V00006GnHFGUA3	a140e000008y1DpAAI	0	38687.01		38687.01	Draft	BIP Front Loaded Rebate-3	10/1/2024	10/1/2024	10/31/2024
a4Q7V00006GnHFHUA3	a140e000008y1DpAAI	0	38687.01		38687.01	Draft	BIP Front Loaded Rebate-3	11/1/2024	11/1/2024	11/30/2024
a4Q7V00006GnHFIUA3	a140e000008y1DpAAI	0	38687.01		38687.01	Draft	BIP Front Loaded Rebate-3	12/1/2024	12/1/2024	12/31/2024
a4Q7V00006GnTveUAF	a140e0000099oisAAA	0	0		0	Active	BIP Front Loaded Rebate-3	10/1/2021	10/1/2021	10/31/2021
a4Q7V00006GnTvfUAF	a140e0000099oisAAA	0	0		0	Active	BIP Front Loaded Rebate-3	11/1/2021	11/1/2021	11/30/2021
a4Q7V00006GnTvgUAF	a140e0000099oisAAA	0	0		0	Active	BIP Front Loaded Rebate-3	12/1/2021	12/1/2021	12/31/2021
a4Q7V00006GnTvhUAF	a140e0000099oisAAA	0	0		0	Active	BIP Front Loaded Rebate-3	1/1/2022	1/1/2022	1/31/2022
a4Q7V00006GnTviUAF	a140e0000099oisAAA	0	0		0	Active	BIP Front Loaded Rebate-3	2/1/2022	2/1/2022	2/28/2022
a4Q7V00006GnTvjUAF	a140e0000099oisAAA	0	0		0	Active	BIP Front Loaded Rebate-3	3/1/2022	3/1/2022	3/31/2022
a4Q7V00006GnTvkUAF	a140e0000099oisAAA	0	0		0	Active	BIP Front Loaded Rebate-3	4/1/2022	4/1/2022	4/30/2022
a4Q7V00006GnTvlUAF	a140e0000099oisAAA	0	0		0	Active	BIP Front Loaded Rebate-3	5/1/2022	5/1/2022	5/31/2022
a4Q7V00006GnTvmUAF	a140e0000099oisAAA	0	0		0	Active	BIP Front Loaded Rebate-3	6/1/2022	6/1/2022	6/30/2022
a4Q7V00006GnTvnUAF	a140e0000099oisAAA	0	0		0	Active	BIP Front Loaded Rebate-3	7/1/2022	7/1/2022	7/31/2022
a4Q7V00006GnTvoUAF	a140e0000099oisAAA	0	0		0	Active	BIP Front Loaded Rebate-3	8/1/2022	8/1/2022	8/31/2022
a4Q7V00006GnTvpUAF	a140e0000099oisAAA	0	5473.42		0	Active	BIP Front Loaded Rebate-3	9/1/2022	9/1/2022	9/30/2022
a4Q7V00006GnTvqUAF	a140e0000099oisAAA	0	7153.74		5473.42	Active	BIP Front Loaded Rebate-3	10/1/2022	10/1/2022	10/31/2022
a4Q7V00006GnTvrUAF	a140e0000099oisAAA	0	7153.74		7153.74	Active	BIP Front Loaded Rebate-3	11/1/2022	11/1/2022	11/30/2022
a4Q7V00006GnTvsUAF	a140e0000099oisAAA	0	7153.74		7153.74	Active	BIP Front Loaded Rebate-3	12/1/2022	12/1/2022	12/31/2022
a4Q7V00006GnTvtUAF	a140e0000099oisAAA	0	8837.7		7153.74	Active	BIP Front Loaded Rebate-3	1/1/2023	1/1/2023	1/31/2023
a4Q7V00006GnTvuUAF	a140e0000099oisAAA	0	8837.7		8837.7	Active	BIP Front Loaded Rebate-3	2/1/2023	2/1/2023	2/28/2023
a4Q7V00006GnTvvUAF	a140e0000099oisAAA	0	8837.7		8837.7	Active	BIP Front Loaded Rebate-3	3/1/2023	3/1/2023	3/31/2023
a4Q7V00006GnTvwUAF	a140e0000099oisAAA	0	10775.78		8837.7	Active	BIP Front Loaded Rebate-3	4/1/2023	4/1/2023	4/30/2023
a4Q7V00006GnTvxUAF	a140e0000099oisAAA	0	10775.78		10775.78	Active	BIP Front Loaded Rebate-3	5/1/2023	5/1/2023	5/31/2023
a4Q7V00006GnTvyUAF	a140e0000099oisAAA	0	10775.78		10775.78	Active	BIP Front Loaded Rebate-3	6/1/2023	6/1/2023	6/30/2023
a4Q7V00006GnTvzUAF	a140e0000099oisAAA	0	11991.96		10775.78	Active	BIP Front Loaded Rebate-3	7/1/2023	7/1/2023	7/31/2023
a4Q7V00006GnTw0UAF	a140e0000099oisAAA	0	11991.96		11991.96	Active	BIP Front Loaded Rebate-3	8/1/2023	8/1/2023	8/31/2023
a4Q7V00006GnTw1UAF	a140e0000099oisAAA	0	11991.96		11991.96	Active	BIP Front Loaded Rebate-3	9/1/2023	9/1/2023	9/30/2023
a4Q7V00006GnTw2UAF	a140e0000099oisAAA	0	13260		11991.96	Active	BIP Front Loaded Rebate-3	10/1/2023	10/1/2023	10/31/2023
a4Q7V00006GnTw3UAF	a140e0000099oisAAA	0	13260		13260	Active	BIP Front Loaded Rebate-3	11/1/2023	11/1/2023	11/30/2023
a4Q7V00006GnTw4UAF	a140e0000099oisAAA	0	13260		13260	Active	BIP Front Loaded Rebate-3	12/1/2023	12/1/2023	12/31/2023
a4Q7V00006GnTw5UAF	a140e0000099oisAAA	0	15262		13260	Active	BIP Front Loaded Rebate-3	1/1/2024	1/1/2024	1/31/2024
a4Q7V00006GnTw6UAF	a140e0000099oisAAA	0	15262		15262	Active	BIP Front Loaded Rebate-3	2/1/2024	2/1/2024	2/29/2024
a4Q7V00006GnTw7UAF	a140e0000099oisAAA	0	15262		15262	Active	BIP Front Loaded Rebate-3	3/1/2024	3/1/2024	3/31/2024
a4Q7V00006GnTw8UAF	a140e0000099oisAAA	0	17482.16		15262	Active	BIP Front Loaded Rebate-3	4/1/2024	4/1/2024	4/30/2024
a4Q7V00006GnTw9UAF	a140e0000099oisAAA	0	17482.16		17482.16	Active	BIP Front Loaded Rebate-3	5/1/2024	5/1/2024	5/31/2024
a4Q7V00006GnTwAUAV	a140e0000099oisAAA	0	17482.16		17482.16	Active	BIP Front Loaded Rebate-3	6/1/2024	6/1/2024	6/30/2024
a4Q7V00006GnTwBUAV	a140e0000099oisAAA	0	18694.04		17482.16	Active	BIP Front Loaded Rebate-3	7/1/2024	7/1/2024	7/31/2024
a4Q7V00006GnTwCUAV	a140e0000099oisAAA	0	18694.04		18694.04	Active	BIP Front Loaded Rebate-3	8/1/2024	8/1/2024	8/31/2024
a4Q7V00006GnTwDUAV	a140e0000099oisAAA	0	18694.04		18694.04	Draft	BIP Front Loaded Rebate-3	9/1/2024	9/1/2024	9/30/2024
a4Q7V00006GnTwEUAV	a140e0000099oisAAA	0	18694.04		18694.04	Draft	BIP Front Loaded Rebate-3	10/1/2024	10/1/2024	10/31/2024
a4Q7V00006GnTwFUAV	a140e0000099oisAAA	0	18694.04		18694.04	Draft	BIP Front Loaded Rebate-3	11/1/2024	11/1/2024	11/30/2024
a4Q7V00006GnTwGUAV	a140e0000099oisAAA	0	18694.04		18694.04	Draft	BIP Front Loaded Rebate-3	12/1/2024	12/1/2024	12/31/2024
a4Q7V00006Go86iUAB	a140e000009A81mAAC	0	0		0	Active	BIP Front Loaded Rebate-3	9/1/2021	9/1/2021	9/30/2021
a4Q7V00006Go86jUAB	a140e000009A81mAAC	0	0		0	Active	BIP Front Loaded Rebate-3	10/1/2021	10/1/2021	10/31/2021
a4Q7V00006Go86kUAB	a140e000009A81mAAC	0	0		0	Active	BIP Front Loaded Rebate-3	11/1/2021	11/1/2021	11/30/2021
a4Q7V00006Go86lUAB	a140e000009A81mAAC	0	496.62		0	Active	BIP Front Loaded Rebate-3	12/1/2021	12/1/2021	12/31/2021
a4Q7V00006Go86mUAB	a140e000009A81mAAC	0	2158.53		496.62	Active	BIP Front Loaded Rebate-3	1/1/2022	1/1/2022	1/31/2022
a4Q7V00006Go86nUAB	a140e000009A81mAAC	0	2158.53		2158.53	Active	BIP Front Loaded Rebate-3	2/1/2022	2/1/2022	2/28/2022
a4Q7V00006Go86oUAB	a140e000009A81mAAC	0	2158.53		2158.53	Active	BIP Front Loaded Rebate-3	3/1/2022	3/1/2022	3/31/2022
a4Q7V00006Go86pUAB	a140e000009A81mAAC	0	3544.605		2158.53	Active	BIP Front Loaded Rebate-3	4/1/2022	4/1/2022	4/30/2022
a4Q7V00006Go86qUAB	a140e000009A81mAAC	0	3544.605		3544.605	Active	BIP Front Loaded Rebate-3	5/1/2022	5/1/2022	5/31/2022
a4Q7V00006Go86rUAB	a140e000009A81mAAC	0	3544.605		3544.605	Active	BIP Front Loaded Rebate-3	6/1/2022	6/1/2022	6/30/2022
a4Q7V00006Go86sUAB	a140e000009A81mAAC	0	4686.27		3544.605	Active	BIP Front Loaded Rebate-3	7/1/2022	7/1/2022	7/31/2022
a4Q7V00006Go86tUAB	a140e000009A81mAAC	0	4686.27		4686.27	Active	BIP Front Loaded Rebate-3	8/1/2022	8/1/2022	8/31/2022
a4Q7V00006Go86uUAB	a140e000009A81mAAC	0	4686.27		4686.27	Active	BIP Front Loaded Rebate-3	9/1/2022	9/1/2022	9/30/2022
a4Q7V00006Go86vUAB	a140e000009A81mAAC	0	6422.04		4686.27	Active	BIP Front Loaded Rebate-3	10/1/2022	10/1/2022	10/31/2022
a4Q7V00006Go86wUAB	a140e000009A81mAAC	0	6422.04		6422.04	Active	BIP Front Loaded Rebate-3	11/1/2022	11/1/2022	11/30/2022
a4Q7V00006Go86xUAB	a140e000009A81mAAC	0	6422.04		6422.04	Active	BIP Front Loaded Rebate-3	12/1/2022	12/1/2022	12/31/2022
a4Q7V00006Go86yUAB	a140e000009A81mAAC	0	7715.115		6422.04	Active	BIP Front Loaded Rebate-3	1/1/2023	1/1/2023	1/31/2023
a4Q7V00006Go86zUAB	a140e000009A81mAAC	0	7715.115		7715.115	Active	BIP Front Loaded Rebate-3	2/1/2023	2/1/2023	2/28/2023
a4Q7V00006Go870UAB	a140e000009A81mAAC	0	7715.115		7715.115	Active	BIP Front Loaded Rebate-3	3/1/2023	3/1/2023	3/31/2023
a4Q7V00006Go871UAB	a140e000009A81mAAC	0	9035.46		7715.115	Active	BIP Front Loaded Rebate-3	4/1/2023	4/1/2023	4/30/2023
a4Q7V00006Go872UAB	a140e000009A81mAAC	0	9035.46		9035.46	Active	BIP Front Loaded Rebate-3	5/1/2023	5/1/2023	5/31/2023
a4Q7V00006Go873UAB	a140e000009A81mAAC	0	9035.46		9035.46	Active	BIP Front Loaded Rebate-3	6/1/2023	6/1/2023	6/30/2023
a4Q7V00006Go874UAB	a140e000009A81mAAC	0	10100.535		9035.46	Active	BIP Front Loaded Rebate-3	7/1/2023	7/1/2023	7/31/2023
a4Q7V00006Go875UAB	a140e000009A81mAAC	0	10100.535		10100.535	Active	BIP Front Loaded Rebate-3	8/1/2023	8/1/2023	8/31/2023
a4Q7V00006Go876UAB	a140e000009A81mAAC	0	10100.535		10100.535	Active	BIP Front Loaded Rebate-3	9/1/2023	9/1/2023	9/30/2023
a4Q7V00006Go877UAB	a140e000009A81mAAC	0	11679.87		10100.535	Active	BIP Front Loaded Rebate-3	10/1/2023	10/1/2023	10/31/2023
a4Q7V00006Go878UAB	a140e000009A81mAAC	0	11679.87		11679.87	Active	BIP Front Loaded Rebate-3	11/1/2023	11/1/2023	11/30/2023
a4Q7V00006Go879UAB	a140e000009A81mAAC	0	11679.87		11679.87	Active	BIP Front Loaded Rebate-3	12/1/2023	12/1/2023	12/31/2023
a4Q7V00006Go87AUAR	a140e000009A81mAAC	0	12920.745		11679.87	Active	BIP Front Loaded Rebate-3	1/1/2024	1/1/2024	1/31/2024
a4Q7V00006Go87BUAR	a140e000009A81mAAC	0	12920.745		12920.745	Active	BIP Front Loaded Rebate-3	2/1/2024	2/1/2024	2/29/2024
a4Q7V00006Go87CUAR	a140e000009A81mAAC	0	12920.745		12920.745	Active	BIP Front Loaded Rebate-3	3/1/2024	3/1/2024	3/31/2024
a4Q7V00006Go87DUAR	a140e000009A81mAAC	0	13853.625		12920.745	Active	BIP Front Loaded Rebate-3	4/1/2024	4/1/2024	4/30/2024
a4Q7V00006Go87EUAR	a140e000009A81mAAC	0	13853.625		13853.625	Active	BIP Front Loaded Rebate-3	5/1/2024	5/1/2024	5/31/2024
a4Q7V00006Go87FUAR	a140e000009A81mAAC	0	13853.625		13853.625	Active	BIP Front Loaded Rebate-3	6/1/2024	6/1/2024	6/30/2024
a4Q7V00006Go87GUAR	a140e000009A81mAAC	0	14972.52		13853.625	Active	BIP Front Loaded Rebate-3	7/1/2024	7/1/2024	7/31/2024
a4Q7V00006Go87HUAR	a140e000009A81mAAC	0	14972.52		14972.52	Active	BIP Front Loaded Rebate-3	8/1/2024	8/1/2024	8/31/2024
a4Q7V00006Go87IUAR	a140e000009A81mAAC	0	14972.52		14972.52	Draft	BIP Front Loaded Rebate-3	9/1/2024	9/1/2024	9/30/2024
a4Q7V00006Go87JUAR	a140e000009A81mAAC	0	14972.52		14972.52	Draft	BIP Front Loaded Rebate-3	10/1/2024	10/1/2024	10/31/2024
a4Q7V00006Go87KUAR	a140e000009A81mAAC	0	14972.52		14972.52	Draft	BIP Front Loaded Rebate-3	11/1/2024	11/1/2024	11/30/2024
a4Q7V00006Go87LUAR	a140e000009A81mAAC	0	14972.52		14972.52	Draft	BIP Front Loaded Rebate-3	12/1/2024	12/1/2024	12/31/2024`;
    navigator.clipboard.writeText(data).then(function() {
        pasteExcel1();
        data =`Id	p66_IsMigrated__c	p66_Rebate_Program__c	p66_Legacy_AGL_Bundle_ID__c	Formatted	p66_Contractual_Payout_Date__c	p66_Legacy_Contractual_Amort_Schedule__c	p66_Amortization__c	p66_Contractual_Program_Balance__c	p66_Comments__c	p66_Opening_Balance__c	p66_Status__c
a5gVC000000AEhdYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	11/1/2022	11/1/2022						
a5gVC000000AEheYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	12/1/2022	12/1/2022						
a5gVC000000AEhfYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	1/1/2023	1/1/2023						
a5gVC000000AEhgYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	2/1/2023	2/1/2023						
a5gVC000000AEhhYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	3/1/2023	3/1/2023						
a5gVC000000AEhiYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	4/1/2023	4/1/2023						
a5gVC000000AEhjYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	5/1/2023	5/1/2023						
a5gVC000000AEhkYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	6/1/2023	6/1/2023						
a5gVC000000AEhlYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	7/1/2023	7/1/2023						
a5gVC000000AEhmYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	8/1/2023	8/1/2023						
a5gVC000000AEhnYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	9/1/2023	9/1/2023						
a5gVC000000AEhoYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	10/1/2023	10/1/2023						
a5gVC000000AEhpYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	11/1/2023	11/1/2023						
a5gVC000000AEhqYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	12/1/2023	12/1/2023						
a5gVC000000AEhrYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	1/1/2024	1/1/2024						
a5gVC000000AEhsYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	2/1/2024	2/1/2024						
a5gVC000000AEhtYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	3/1/2024	3/1/2024						
a5gVC000000AEhuYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	4/1/2024	4/1/2024						
a5gVC000000AEhvYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	5/1/2024	5/1/2024						
a5gVC000000AEhwYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	6/1/2024	6/1/2024						
a5gVC000000AEhxYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	7/1/2024	7/1/2024						
a5gVC000000AEhyYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	8/1/2024	8/1/2024						
a5gVC000000AEhzYAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	9/1/2024	9/1/2024						
a5gVC000000AEi0YAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	10/1/2024	10/1/2024						
a5gVC000000AEi1YAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	11/1/2024	11/1/2024						
a5gVC000000AEi2YAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	12/1/2024	12/1/2024						
a5gVC000000AEi3YAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	1/1/2025	1/1/2025						
a5gVC000000AEi4YAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	2/1/2025	2/1/2025						
a5gVC000000AEi5YAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	3/1/2025	3/1/2025						
a5gVC000000AEi6YAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	4/1/2025	4/1/2025						
a5gVC000000AEi7YAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	5/1/2025	5/1/2025						
a5gVC000000AEi8YAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	6/1/2025	6/1/2025						
a5gVC000000AEi9YAG		0i8VC0000003wM5YAI	a140e000009A5VsAAK	7/1/2025	7/1/2025						
a5gVC000000AEiAYAW		0i8VC0000003wM5YAI	a140e000009A5VsAAK	8/1/2025	8/1/2025						
a5gVC000000AEiBYAW		0i8VC0000003wM5YAI	a140e000009A5VsAAK	9/1/2025	9/1/2025						
a5gVC000000AEiCYAW		0i8VC0000003wM5YAI	a140e000009A5VsAAK	10/1/2025	10/1/2025						
a5gVC000000AEjFYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	7/1/2018	7/1/2018						
a5gVC000000AEjGYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	8/1/2018	8/1/2018						
a5gVC000000AEjHYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	9/1/2018	9/1/2018						
a5gVC000000AEjIYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	10/1/2018	10/1/2018						
a5gVC000000AEjJYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	11/1/2018	11/1/2018						
a5gVC000000AEjKYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	12/1/2018	12/1/2018						
a5gVC000000AEjLYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	1/1/2019	1/1/2019						
a5gVC000000AEjMYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	2/1/2019	2/1/2019						
a5gVC000000AEjNYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	3/1/2019	3/1/2019						
a5gVC000000AEjOYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	4/1/2019	4/1/2019						
a5gVC000000AEjPYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	5/1/2019	5/1/2019						
a5gVC000000AEjQYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	6/1/2019	6/1/2019						
a5gVC000000AEjRYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	7/1/2019	7/1/2019						
a5gVC000000AEjSYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	8/1/2019	8/1/2019						
a5gVC000000AEjTYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	9/1/2019	9/1/2019						
a5gVC000000AEjUYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	10/1/2019	10/1/2019						
a5gVC000000AEjVYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	11/1/2019	11/1/2019						
a5gVC000000AEjWYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	12/1/2019	12/1/2019						
a5gVC000000AEjXYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	1/1/2020	1/1/2020						
a5gVC000000AEjYYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	2/1/2020	2/1/2020						
a5gVC000000AEjZYAW		0i8VC0000003wM6YAI	a140e000006Ra77AAC	3/1/2020	3/1/2020						
a5gVC000000AEjaYAG		0i8VC0000003wM6YAI	a140e000006Ra77AAC	4/1/2020	4/1/2020						
a5gVC000000AEjbYAG		0i8VC0000003wM6YAI	a140e000006Ra77AAC	5/1/2020	5/1/2020						
a5gVC000000AEjcYAG		0i8VC0000003wM6YAI	a140e000006Ra77AAC	6/1/2020	6/1/2020						
a5gVC000000AEjdYAG		0i8VC0000003wM6YAI	a140e000006Ra77AAC	7/1/2020	7/1/2020						
a5gVC000000AEjeYAG		0i8VC0000003wM6YAI	a140e000006Ra77AAC	8/1/2020	8/1/2020						
a5gVC000000AEjfYAG		0i8VC0000003wM6YAI	a140e000006Ra77AAC	9/1/2020	9/1/2020						
a5gVC000000AEjgYAG		0i8VC0000003wM6YAI	a140e000006Ra77AAC	10/1/2020	10/1/2020						
a5gVC000000AEjhYAG		0i8VC0000003wM6YAI	a140e000006Ra77AAC	11/1/2020	11/1/2020						
a5gVC000000AEjiYAG		0i8VC0000003wM6YAI	a140e000006Ra77AAC	12/1/2020	12/1/2020						
a5gVC000000AEjjYAG		0i8VC0000003wM6YAI	a140e000006Ra77AAC	1/1/2021	1/1/2021						
a5gVC000000AEjkYAG		0i8VC0000003wM6YAI	a140e000006Ra77AAC	2/1/2021	2/1/2021						
a5gVC000000AEjlYAG		0i8VC0000003wM6YAI	a140e000006Ra77AAC	3/1/2021	3/1/2021						
a5gVC000000AEjmYAG		0i8VC0000003wM6YAI	a140e000006Ra77AAC	4/1/2021	4/1/2021						
a5gVC000000AEjnYAG		0i8VC0000003wM6YAI	a140e000006Ra77AAC	5/1/2021	5/1/2021						
a5gVC000000AEjoYAG		0i8VC0000003wM6YAI	a140e000006Ra77AAC	6/1/2021	6/1/2021						`;
     navigator.clipboard.writeText(data).then(function() {
        pasteExcel2();
     }, function(err) {
        console.error('error copying');
     });
     }, function(err) {
        console.error('error copying');
     });
     
}
function fillDataPP(){
    let data =`ARS_Agreement_Id__c	ARS_Agreement_Site__c	ALI__AgreementLineItem__c_Id	ARS_ID	ARS_Apttus_Rebate__Comments__c	ALI_Product_Name	Formatted	ARS_Apttus_Rebate__PeriodStartDt__c	lkp_Prrdlst_lkp_rp_LKP_OPTION_NM	op_ARS_Apttus_Rebate__Status__c
a110e00000gpysSAAQ	a4G0e000000MW1IEAW	a147V00000DYwcMQAT	a407V000006onb9QAA	Comment1,Cmnt1	BIP Upfront True Up Deferral	08__2021	08-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a110e00000olNhUAAU	a4G0e000000MbESEA0	a147V00000DrpyeQAB	a407V000007DNXrQAO	Comment2, Cmnt2	BIP Upfront True Up Deferral	10__2022	10-01-2022	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECtYAAW	a4G0e000000Met8EAC	a147V00000GmoARQAZ	a407V000009eoZDQAY	Comment3 dsd	BIP Upfront True Up Deferral	02__2023	02-01-2023	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECvFAAW	a4G60000000LDWcEAO	a147V00000DYwcCQAT	a407V000006onRpQAI	Comment4	BIP Upfront True Up Deferral	08__2021	08-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a110e00000gpyS6AAI	a4G0e000000MVqCEAW	a147V000008RASLQA4	a407V000006p9g7QAA	Comment5	BIP Upfront True Up Deferral	06__2021	06-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECujAAG	a4G60000000LKhHEAW	a147V00000DZ2TaQAL	a407V000006p2MMQAY	Comment6	BIP Upfront True Up Deferral	12__2021	12-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a110e00000pb18VAAQ	a4G7V000000tWAyUAM	a147V00000DZItmQAH	a407V000006paIJQAY	Comment7	BIP Upfront True Up Deferral	01__2022	01-01-2022	BIP Upfront True Up Deferral Option	Reconciled
a110e00000gpjceAAA	a4G0e000000ccK6EAI	a147V000008R9GzQAK	a407V000006omZKQAY	Comment8	BIP Upfront True Up Deferral	06__2021	06-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a110e00000pKFLKAA4	a4G0e000000dK1lEAE	a140e000008R7JeAAK	a407V000005ZEoVQAW	Comment9	BIP Upfront True Up Deferral	05__2021	05-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a113200000DHgJ7AAL	a4G0e000000ccKoEAI	a147V00000DZ4BYQA1	a407V000006p9gCQAQ	Comment10	BIP Upfront True Up Deferral	01__2022	01-01-2022	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECuoAAG	a4G60000000LJ46EAG	a147V000008R83YQAS	a407V000005ZABEQA4	Comment11	BIP Upfront True Up Deferral	05__2021	05-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a110e00000gpjU1AAI	a4G0e000000caMBEAY	a140e000008R1dhAAC	a400e000005Yz2ZAAS	Comment12	BIP Upfront True Up Deferral	03__2021	03-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a117V00000v7WGJQA2	a4G7V000000tTXFUA2	a147V00000DZtjAQAT	a407V00000Gn7HEQAZ	Comment13	BIP Upfront True Up Deferral	03__2021	03-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000007ZkKsAAK	a4G60000000LLK2EAO	a140e000009AD91AAG	a400e000005Yw0VAAS	Comment14	BIP Upfront True Up Deferral	01__2021	01-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a110e00000gpjceAAA	a4G0e000000ccK5EAI	a147V000008R9GVQA0	a407V000006omZHQAY	Comment15	BIP Upfront True Up Deferral	06__2021	06-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECuCAAW	a4G60000000LDy0EAG	a140e000008R6mTAAS	a407V000005ZAAVQA4	Comment16	BIP Upfront True Up Deferral	04__2021	04-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000007Y171AAC	a4G60000000LS3yEAG	a140e000009A8d2AAC	a400e00000ApzQpAAJ	Comment17	BIP Upfront True Up Deferral	12__2020	12-01-2020	BIP Upfront True Up Deferral Option	Reconciled
a110e00000gpjceAAA	a4G0e000000ccK9EAI	a147V000008R9HiQAK	a407V000006omaiQAA	Comment18	BIP Upfront True Up Deferral	06__2021	06-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECuCAAW	a4G60000000LHhjEAG	a147V000008RBQ5QAO	a407V000006p9jXQAQ	Comment19	BIP Upfront True Up Deferral	07__2021	07-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECv2AAG	a4G60000000LHb2EAG	a147V00000DYz7xQAD	a407V000006oqDMQAY	Comment20	BIP Upfront True Up Deferral	09__2021	09-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000007Zju6AAC	a4G60000000LLDUEA4	a140e000008R314AAC	a400e000005Z0g4AAC	Comment21	BIP Upfront True Up Deferral	03__2021	03-01-2021	BIP Upfront True Up Deferral Option	Payment Generated
a1160000000ECsiAAG	a4G60000000LE6TEAW	a140e000009AAB4AAO	a400e00000Aq1UaAAJ	Comment22	BIP Upfront True Up Deferral	12__2020	12-01-2020	BIP Upfront True Up Deferral Option	Payment Generated
a113200000GfkvyAAB	a4G0e000000IChQEAW	a140e000009ADNkAAO	a400e000005Z0DOAA0	Comment23	BIP Upfront True Up Deferral	01__2021	01-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a113200000GfkvyAAB	a4G0e000000chf1EAA	a147V00000DZ5whQAD	a407V000006pBBMQA2	Comment24	BIP Upfront True Up Deferral	02__2022	02-01-2022	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECtYAAW	a4G0e000000cZBVEA2	a147V000008RARwQAO	a407V000005ZELsQAO	Comment25	BIP Upfront True Up Deferral	06__2021	06-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a110e00000gpysSAAQ	a4G0e000000cdMREAY	a140e000008R6dJAAS	a407V000005Z9KkQAK	Comment26	BIP Upfront True Up Deferral	04__2021	04-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a110e00000gpYnxAAE	a4G0e000000cXz5EAE	a140e000008R4z4AAC	a400e000005Z4UdAAK	Comment27	BIP Upfront True Up Deferral	03__2021	03-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000007X6KYAA0	a4G0e000000cb2MEAQ	a140e000009ADO5AAO	a400e00000Aq5IlAAJ	Comment28	BIP Upfront True Up Deferral	01__2021	01-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000007X6KYAA0	a4G0e000000cb2NEAQ	a140e000009ADO6AAO	a400e00000Aq5IgAAJ	Comment29	BIP Upfront True Up Deferral	01__2021	01-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a110e00000gpjceAAA	a4G0e000000ccK7EAI	a147V000008R9GpQAK	a407V000006omZJQAY	Comment30	BIP Upfront True Up Deferral	06__2021	06-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECuCAAW	a4G0e000000cgMSEAY	a140e000008R7wyAAC	a407V000005ZElbQAG	Comment31	BIP Upfront True Up Deferral	05__2021	05-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a110e00000olNhUAAU	a4G0e000000MblDEAS	a147V00000DZzxKQAT	a407V000007CrSTQA0	Comment32	BIP Upfront True Up Deferral	10__2022	10-01-2022	BIP Upfront True Up Deferral Option	Reconciled
a110e00000gpjceAAA	a4G0e000000ccK8EAI	a147V000008R9GfQAK	a407V000006omZIQAY	Comment33	BIP Upfront True Up Deferral	06__2021	06-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000007WZakAAG	a4G0e000000MZ1hEAG	a147V000008R8xcQAC	a407V000005ZAJAQA4	Comment34	BIP Upfront True Up Deferral	05__2021	05-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a110e00000gptgMAAQ	a4G0e000000ccQnEAI	a147V00000DZ064QAD	a407V000006ovgLQAQ	Comment35	BIP Upfront True Up Deferral	10__2021	10-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECuBAAW	a4G60000000LIuAEAW	a147V00000DZ5YHQA1	a407V000006p9jhQAA	Comment36	BIP Upfront True Up Deferral	01__2022	01-01-2022	BIP Upfront True Up Deferral Option	Reconciled
a1160000007Zk4mAAC	a4G60000000LFq5EAG	a147V00000DYxDVQA1	a407V000006onh8QAA	Comment37	BIP Upfront True Up Deferral	08__2021	08-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECsZAAW	a4G60000000LEAdEAO	a147V00000DZ4ClQAL	a407V000006p4eBQAQ	Comment38	BIP Upfront True Up Deferral	01__2022	01-01-2022	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECuCAAW	a4G60000000LHhiEAG	a140e000008R6GoAAK	a400e000005Z6sTAAS	Comment39	BIP Upfront True Up Deferral	04__2021	04-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECu4AAG	a4G7V000001SuPRUA0	a147V00000KKWP1QAP	a407V00000Pwq29QAB	Comment40	BIP Upfront True Up Deferral	08__2021	08-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000007WZZ8AAO	a4G60000000LS2vEAG	a147V000008R84RQAS	a407V000005ZH9IQAW	Comment41	BIP Upfront True Up Deferral	05__2021	05-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECtYAAW	a4G60000000LKybEAG	a140e000009A8aUAAS	a400e00000Apz04AAB	Comment42	BIP Upfront True Up Deferral	12__2020	12-01-2020	BIP Upfront True Up Deferral Option	Reconciled
a110e00000gpthjAAA	a4G0e000000ccaCEAQ	a147V00000DZ05pQAD	a407V000006ovlXQAQ	Comment43	BIP Upfront True Up Deferral	10__2021	10-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECskAAG	a4G60000000LDX2EAO	a147V000008R9TXQA0	a407V000005ZCwxQAG	Comment44	BIP Upfront True Up Deferral	06__2021	06-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECtYAAW	a4G0e0000012hGLEAY	a140e000008R75wAAC	a407V000006pI7UQAU	Comment45	BIP Upfront True Up Deferral	04__2021	04-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000007Zk5wAAC	a4G60000000LFwfEAG	a140e000008R0ejAAC	a400e000005Z3BBAA0	Comment46	BIP Upfront True Up Deferral	02__2021	02-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECuCAAW	a4G60000000LDy7EAG	a140e000009A5poAAC	a400e00000Aq4GbAAJ	Comment47	BIP Upfront True Up Deferral	12__2020	12-01-2020	BIP Upfront True Up Deferral Option	Reconciled
a1160000007Zk83AAC	a4G60000000LFsdEAG	a140e000008R6nRAAS	a407V000005Z9ysQAC	Comment48	BIP Upfront True Up Deferral	04__2021	04-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a110e00000gpysSAAQ	a4G0e000000cgr7EAA	a147V00000DZ2CPQA1	a407V000006oxpeQAA	Comment49	BIP Upfront True Up Deferral	11__2021	11-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a110e00000gpysSAAQ	a4G0e000000cdMUEAY	a147V00000DZ2COQA1	a407V000006oxpdQAA	Comment50	BIP Upfront True Up Deferral	11__2021	11-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECtYAAW	a4G0e000000cgJEEAY	a140e000009ACgLAAW	a400e00000Aq4QJAAZ	Comment51	BIP Upfront True Up Deferral	01__2021	01-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a117V000014MgYlQAK	a4G7V000001NAg5UAG	a147V00000KKSdgQAH	a407V00000PwPZoQAN	Comment52	BIP Upfront True Up Deferral	02__2021	02-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000007WZZ8AAO	a4G60000000LEQVEA4	a147V000008R9feQAC	a407V000005ZEV2QAO	Comment53	BIP Upfront True Up Deferral	06__2021	06-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECsZAAW	a4G60000000LItZEAW	a147V00000DYwXrQAL	a407V000006omrRQAQ	Comment54	BIP Upfront True Up Deferral	08__2021	08-01-2021	BIP Upfront True Up Deferral Option	Reconciled
a1160000000ECtYAAW	a4G0e000000cafLEAQ	a147V00000DrpxlQAB	a407V000007DMICQA4	Comment55	BIP Upfront True Up Deferral	10__2022	10-01-2022	BIP Upfront True Up Deferral Option	Reconciled`;
    navigator.clipboard.writeText(data).then(function() {
        pasteExcel1();
        data =`Id	RebateProgramId	p66_Legacy_Agreement_Line_Item_ID__c	StartDate	Formatted	p66_IsMigrated__c	p66_Legacy_Revenue_Schedule_ID__c	p66_Comments__c	p66_Payout_Period_Status__c
0i7VC0000004bgvYAA	0i8VC0000003uIbYAI	a147V00000DYwcMQAT	01-08-2021	08__2021				
0i7VC0000004biXYAQ	0i8VC0000003uIcYAI	a147V00000DrpyeQAB	01-10-2022	10__2022				
0i7VC0000004bk9YAA	0i8VC0000003uIdYAI	a147V00000GmoARQAZ	01-02-2023	02__2023				
0i7VC0000004bllYAA	0i8VC0000003uIeYAI	a147V00000DYwcCQAT	01-08-2021	08__2021				
0i7VC0000004bnNYAQ	0i8VC0000003uIfYAI	a147V000008RASLQA4	01-06-2021	06__2021				
0i7VC0000004bozYAA	0i8VC0000003uIgYAI	a147V00000DZ2TaQAL	01-12-2021	12__2021				
0i7VC0000004bqbYAA	0i8VC0000003uIhYAI	a147V000008R9GzQAK	01-06-2021	06__2021				
0i7VC0000004bsDYAQ	0i8VC0000003uIiYAI	a140e000008R7JeAAK	01-05-2021	05__2021				
0i7VC0000004btpYAA	0i8VC0000003uIjYAI	a147V000008R83YQAS	01-05-2021	05__2021				
0i7VC0000004bx3YAA	0i8VC0000003uIkYAI	a140e000009AD91AAG	01-01-2021	01__2021				
0i7VC0000004bvRYAQ	0i8VC0000003uIlYAI	a147V000008R9GVQA0	01-06-2021	06__2021				
0i7VC0000004byfYAA	0i8VC0000003uImYAI	a140e000008R6mTAAS	01-04-2021	04__2021				
0i7VC0000004c0HYAQ	0i8VC0000003uInYAI	a140e000009A8d2AAC	01-12-2020	12__2020				
0i7VC0000004c1tYAA	0i8VC0000003uIoYAI	a147V000008R9HiQAK	01-06-2021	06__2021				
0i7VC0000004c3VYAQ	0i8VC0000003uIpYAI	a147V000008RBQ5QAO	01-07-2021	07__2021				
0i7VC0000004c57YAA	0i8VC0000003uIqYAI	a147V00000DYz7xQAD	01-09-2021	09__2021				
0i7VC0000004c6jYAA	0i8VC0000003uIrYAI	a140e000009ADNkAAO	01-01-2021	01__2021				
0i7VC0000004bx4YAA	0i8VC0000003uIsYAI	a147V00000DZ5whQAD	01-02-2022	02__2022				
0i7VC0000004c8LYAQ	0i8VC0000003uItYAI	a147V000008RARwQAO	01-06-2021	06__2021				
0i7VC0000004c9xYAA	0i8VC0000003uIuYAI	a140e000008R6dJAAS	01-04-2021	04__2021				
0i7VC0000004cBZYAY	0i8VC0000003uIvYAI	a140e000008R4z4AAC	01-03-2021	03__2021				
0i7VC0000004cDBYAY	0i8VC0000003uIwYAI	a140e000009ADO5AAO	01-01-2021	01__2021				
0i7VC0000004cEnYAI	0i8VC0000003uIxYAI	a140e000009ADO6AAO	01-01-2021	01__2021				
0i7VC0000004cGPYAY	0i8VC0000003uIyYAI	a147V000008R9GpQAK	01-06-2021	06__2021				
0i7VC0000004cI1YAI	0i8VC0000003uIzYAI	a140e000008R7wyAAC	01-05-2021	05__2021				
0i7VC0000004cJdYAI	0i8VC0000003uJ0YAI	a147V00000DZzxKQAT	01-10-2022	10__2022				
0i7VC0000004cBaYAI	0i8VC0000003uJ1YAI	a147V000008R9GfQAK	01-06-2021	06__2021				
0i7VC0000004cLFYAY	0i8VC0000003uJ2YAI	a147V000008R8xcQAC	01-05-2021	05__2021				
0i7VC0000004bkAYAQ	0i8VC0000003uJ3YAI	a147V00000DZ064QAD	01-10-2021	10__2021				
0i7VC0000004cMrYAI	0i8VC0000003uJ4YAI	a147V00000DZ5YHQA1	01-01-2022	01__2022				
0i7VC0000004cOTYAY	0i8VC0000003uJ5YAI	a147V00000DYxDVQA1	01-08-2021	08__2021				
0i7VC0000004cQ5YAI	0i8VC0000003uJ6YAI	a147V00000DZ4ClQAL	01-01-2022	01__2022				
0i7VC0000004cRhYAI	0i8VC0000003uJ7YAI	a140e000008R6GoAAK	01-04-2021	04__2021				
0i7VC0000004cTJYAY	0i8VC0000003uJ8YAI	a147V000008R84RQAS	01-05-2021	05__2021				
0i7VC0000004cUvYAI	0i8VC0000003uJ9YAI	a140e000009A8aUAAS	01-12-2020	12__2020				
0i7VC0000004cWXYAY	0i8VC0000003uJAYAY	a147V00000DZ05pQAD	01-10-2021	10__2021				
0i7VC0000004cY9YAI	0i8VC0000003uJBYAY	a147V000008R9TXQA0	01-06-2021	06__2021				
0i7VC0000004cBbYAI	0i8VC0000003uJCYAY	a140e000008R75wAAC	01-04-2021	04__2021				
0i7VC0000004cZlYAI	0i8VC0000003uJDYAY	a140e000008R0ejAAC	01-02-2021	02__2021				
0i7VC0000004cbNYAQ	0i8VC0000003uJEYAY	a140e000009A5poAAC	01-12-2020	12__2020				
0i7VC0000004cczYAA	0i8VC0000003uJFYAY	a140e000008R6nRAAS	01-04-2021	04__2021				
0i7VC0000004cebYAA	0i8VC0000003uJGYAY	a147V00000DZ2CPQA1	01-11-2021	11__2021				
0i7VC0000004cgDYAQ	0i8VC0000003uJHYAY	a147V00000DZ2COQA1	01-11-2021	11__2021				
0i7VC0000004cI2YAI	0i8VC0000003uJIYAY	a140e000009ACgLAAW	01-01-2021	01__2021				
0i7VC0000004chpYAA	0i8VC0000003uJJYAY	a147V000008R9feQAC	01-06-2021	06__2021				
0i7VC0000004cjRYAQ	0i8VC0000003uJKYAY	a147V00000DYwXrQAL	01-08-2021	08__2021				
0i7VC0000004cl3YAA	0i8VC0000003uJLYAY	a147V00000DrpxlQAB	01-10-2022	10__2022`;
     navigator.clipboard.writeText(data).then(function() {
        pasteExcel2();
     }, function(err) {
        console.error('error copying');
     });
     }, function(err) {
        console.error('error copying');
     });
     
}
function fillDataMP(){
    let data =`AGR_Agreement_Site__c	AGR_Agreement_Id__c	Apttus__AgreementLineItem__Id	ARS_Apttus_Rebate__ActualQuantity	PP_ID	PP_Entry_Type__c	PP_Is_Incld_Contrct_Amrtzn__c	PP_Payment_Invoice_Amount__c	PP_Payment_Invoice_num	PP_Rate	PP_Quantity	PP_Sequence_Number	PP_Status	PP_Transaction_Reason	PP_Transaction_Type	PP_Treasury_Hold_Pending_Security	PP_Type	PP_Comments	AFTN_Company_Code_c	AFTN_Currency_Code_USD_c	AFTN_Description	AFTN_SAP_Feed_Code	AFTN_Line_Item_Number	AFTN_Material_Code	AFTN_Payment_Terms	AFTN_Plant_Code	AFTN_PO_Number	AFTN_External_Reference_Type	AFTN__ID	AFTN_ShipTo	AFTN_SoldTo_c	AFTN_Status	AFTN_Sytem	ARS_ID	ALI_Product2_Name	AFTN_Internal_Transaction_Number__c	AFTN_External_Reference_Dt	AFTN_Posting_Dt	PP_Payment_Invoice_Dt__c	lkp_rp_LKP_OPTION_NM	CAS_Contractual_Balance__c	Formatted	PP_PERIOD_START_DT	PP_PERIOD_END_DT	Bundle_ALI_ID
a4G0e000000dK0XEAU	a1160000000ECvZAAW	a140e000009A5VtAAK	66791	a4i7V000005yWubQAE	System	0	2337.685	9009238190		1	7561244	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03MQ	7561244	Credit	a4C7V00000C3HnbUAF	0010e00001QgkqHAAR	0016000000HAZMiAAP	Reconciled	SD	a407V000007CpBNQA0	BIP Front Loaded Rebate-3		7/18/2023	7/18/2023	7/18/2023	BIP Front Loaded Rebate Gas-3	0	04__2023	4/1/2023	6/30/2023	a140e000009A5VsAAK
a4G0e000000dK0XEAU	a1160000000ECvZAAW	a140e000009A5VtAAK	119186	a4i7V0000059NUCQA2	System	0	4171.51	9010408405		1	7596169	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7596169	Credit	a4C7V00000CLy6jUAD	0010e00001QgkqHAAR	0016000000HAZMiAAP	Reconciled	SD	a407V000007CpBOQA0	BIP Front Loaded Rebate-3		10/19/2023	10/19/2023	10/19/2023	BIP Front Loaded Rebate Gas-3	2502.685	07__2023	7/1/2023	9/30/2023	a140e000009A5VsAAK
a4G0e000000dK0XEAU	a1160000000ECvZAAW	a140e000009A5VtAAK	43796	a4i7V000003YMZdQAO	System	0	1532.86	9011527276		1	7624090	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7624090	Credit	a4C7V00000AZWKeUAP	0010e00001QgkqHAAR	0016000000HAZMiAAP	Reconciled	SD	a407V000007CpBPQA0	BIP Front Loaded Rebate-3		1/17/2024	1/17/2024	1/17/2024	BIP Front Loaded Rebate Gas-3	6949.12	10__2023	10/1/2023	12/31/2023	a140e000009A5VsAAK
a4G0e000000dK0XEAU	a1160000000ECvZAAW	a140e000009A5VtAAK	44295	a4i7V000003YSxTQAW	System	0	1550.325	9012671600		1	7644275	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7644275	Credit	a4C7V00000AZxUXUA1	0010e00001QgkqHAAR	0016000000HAZMiAAP	Reconciled	SD	a407V000007CpBQQA0	BIP Front Loaded Rebate-3		4/17/2024	4/17/2024	4/17/2024	BIP Front Loaded Rebate Gas-3	8609.48	01__2024	1/1/2024	3/31/2024	a140e000009A5VsAAK
a4G0e000000dK0XEAU	a1160000000ECvZAAW	a140e000009A5VtAAK	47598	a4i7V000003ufk3QAA	System	0	1665.93	9013827687		1	7677230	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7677230	Credit	a4C7V00000AViATUA1	0010e00001QgkqHAAR	0016000000HAZMiAAP	Reconciled	SD	a407V000007CpBRQA0	BIP Front Loaded Rebate-3		7/17/2024	7/17/2024	7/17/2024	BIP Front Loaded Rebate Gas-3	10387.255	04__2024	4/1/2024	6/30/2024	a140e000009A5VsAAK
a4G60000000LKXQEA4	a1160000000ECvZAAW	a140e000006Ra78AAC	213580	a4i0e000001tFi7AAE	System	0	4271.6	9512544715		1	7007116	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	7007116	Credit	a4C0e0000023lZWEAY	0016000000woz7bAAA	0016000000HAZMiAAP	Reconciled	SD	a400e0000046sEtAAI	BIP Front Loaded Rebate-3		6/13/2019	6/12/2019	6/13/2019	BIP Front Loaded Rebate Gas-3	0	07__2018	7/1/2018	9/30/2018	a140e000006Ra77AAC
a4G60000000LKXQEA4	a1160000000ECvZAAW	a140e000006Ra78AAC	204854	a4i0e000001tFi8AAE	System	0	4097.08	9512544715		1	7007117	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03H9	7007116	Credit	a4C0e0000023lZXEAY	0016000000woz7bAAA	0016000000HAZMiAAP	Reconciled	SD	a400e0000046sEuAAI	BIP Front Loaded Rebate-3		6/13/2019	6/12/2019	6/13/2019	BIP Front Loaded Rebate Gas-3	0	10__2018	10/1/2018	12/31/2018	a140e000006Ra77AAC
a4G60000000LKXQEA4	a1160000000ECvZAAW	a140e000006Ra78AAC	186529	a4i0e000001tFi9AAE	System	0	3730.58	9512544715		1	7007118	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	12	11313617	N03	03H9	7007116	Credit	a4C0e0000023lZYEAY	0016000000woz7bAAA	0016000000HAZMiAAP	Reconciled	SD	a400e0000046sEvAAI	BIP Front Loaded Rebate-3		6/13/2019	6/12/2019	6/13/2019	BIP Front Loaded Rebate Gas-3	0	01__2019	1/1/2019	3/31/2019	a140e000006Ra77AAC
a4G60000000LKXQEA4	a1160000000ECvZAAW	a140e000006Ra78AAC	191635	a4i0e000002Dn1wAAC	System	0	3832.7	9512987611		1	7020732	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	7020732	Credit	a4C0e000004j8rlEAA	0016000000woz7bAAA	0016000000HAZMiAAP	Reconciled	SD	a400e0000046sEwAAI	BIP Front Loaded Rebate-3		7/19/2019	7/18/2019	7/19/2019	BIP Front Loaded Rebate Gas-3	0	04__2019	4/1/2019	6/30/2019	a140e000006Ra77AAC
a4G60000000LKXQEA4	a1160000000ECvZAAW	a140e000006Ra78AAC	182404	a4i0e000002E3vlAAC	System	0	3648.08	9000065488		1	7074991	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	7074991	Credit	a4C0e000004jhgGEAQ	0016000000woz7bAAA	0016000000HAZMiAAP	Reconciled	SD	a400e0000046sExAAI	BIP Front Loaded Rebate-3		10/18/2019	10/18/2019	10/18/2019	BIP Front Loaded Rebate Gas-3	15931.96	07__2019	7/1/2019	9/30/2019	a140e000006Ra77AAC
a4G60000000LKXQEA4	a1160000000ECvZAAW	a140e000006Ra78AAC	176818	a4i0e000002EKowAAG	System	0	3536.36	9000530228		1	7128824	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	7128824	Credit	a4C0e000006IpZCEA0	0016000000woz7bAAA	0016000000HAZMiAAP	Reconciled	SD	a400e0000046sEyAAI	BIP Front Loaded Rebate-3		1/27/2020	1/27/2020	1/27/2020	BIP Front Loaded Rebate Gas-3	19580.04	10__2019	10/1/2019	12/31/2019	a140e000006Ra77AAC
a4G60000000LKXQEA4	a1160000000ECvZAAW	a140e000006Ra78AAC	131313	a4i0e000002ZXwbAAG	System	0	2626.26	9001028006		1	7172222	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	7172222	Credit	a4C0e000006JZDkEAO	0016000000woz7bAAA	0016000000HAZMiAAP	Reconciled	SD	a400e0000046sEzAAI	BIP Front Loaded Rebate-3		5/15/2020	5/15/2020	5/15/2020	BIP Front Loaded Rebate Gas-3	24423.5	01__2020	1/1/2020	3/31/2020	a140e000006Ra77AAC
a4G60000000LKXQEA4	a1160000000ECvZAAW	a140e000006Ra78AAC	149732	a4i0e000002ZeDKAA0	System	0	2994.64	9001335869		1	7188303	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03H9	7188302	Credit	a4C0e000006K09nEAC	0016000000woz7bAAA	0016000000HAZMiAAP	Reconciled	SD	a400e0000046sF0AAI	BIP Front Loaded Rebate-3		7/27/2020	7/27/2020	7/27/2020	BIP Front Loaded Rebate Gas-3	24423.5	04__2020	4/1/2020	6/30/2020	a140e000006Ra77AAC
a4G60000000LKXQEA4	a1160000000ECvZAAW	a140e000006Ra78AAC	197415	a4i0e000002ScnCAAS	System	0	3948.3	9001812133		1	7225545	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	7225545	Credit	a4C0e0000024Ud9EAE	0016000000woz7bAAA	0016000000HAZMiAAP	Reconciled	SD	a400e0000046sF1AAI	BIP Front Loaded Rebate-3		11/9/2020	11/9/2020	11/9/2020	BIP Front Loaded Rebate Gas-3	32324.42	07__2020	7/1/2020	9/30/2020	a140e000006Ra77AAC
a4G60000000LKXQEA4	a1160000000ECvZAAW	a140e000006Ra78AAC	163851	a4i0e000002SnVZAA0	System	0	3277.02	9002112434		1	7258548	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03H9	7258548	Credit	a4C0e0000024snBEAQ	0016000000woz7bAAA	0016000000HAZMiAAP	Reconciled	SD	a400e0000046sF2AAI	BIP Front Loaded Rebate-3		1/19/2021	1/19/2021	1/19/2021	BIP Front Loaded Rebate Gas-3	32324.42	10__2020	10/1/2020	12/31/2020	a140e000006Ra77AAC
a4G60000000LKXQEA4	a1160000000ECvZAAW	a140e000006Ra78AAC	181676	a4i0e00000236fTAAQ	System	0	3633.52	9002511424		1	7296663	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03H9	7296663	Credit	a4C0e000004zdUTEAY	0016000000woz7bAAA	0016000000HAZMiAAP	Reconciled	SD	a400e0000046sF3AAI	BIP Front Loaded Rebate-3		4/19/2021	4/19/2021	4/19/2021	BIP Front Loaded Rebate Gas-3	42605.42	01__2021	1/1/2021	3/31/2021	a140e000006Ra77AAC
a4G60000000LKXQEA4	a1160000000ECvZAAW	a140e000006Ra78AAC	181593	a4i7V0000023FeuQAE	System	0	3631.86	9002917338		1	7327340	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03H9	7327340	Credit	a4C7V0000050B8VUAU	0016000000woz7bAAA	0016000000HAZMiAAP	Reconciled	SD	a400e0000046sF4AAI	BIP Front Loaded Rebate-3		7/16/2021	7/16/2021	7/16/2021	BIP Front Loaded Rebate Gas-3	47524.78	04__2021	4/1/2021	6/30/2021	a140e000006Ra77AAC
a4G0e000000cZ7sEAE	a1160000000ECvZAAW	a140e000008yefsAAA	51009	a4i0e000002ZbjyAAC	System	0	765.135	9001221730		1	7181012	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	7181012	Credit	a4C0e000006JwsGEAS	0010e00001L8b4BAAR	0016000000HAZMiAAP	Reconciled	SD	a400e00000BmJ3kAAF	BIP Front Loaded Rebate-3		7/1/2020	7/1/2020	7/1/2020	BIP Front Loaded Rebate Gas-3	0	02__2020	2/1/2020	3/31/2020	a140e000008yefrAAA
a4G0e000000cZ7sEAE	a1160000000ECvZAAW	a140e000008yefsAAA	73682	a4i0e000002ZczyAAC	System	0	1105.23	9001283352		1	7184870	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03H9	7184870	Credit	a4C0e000006JxfqEAC	0010e00001L8b4BAAR	0016000000HAZMiAAP	Reconciled	SD	a400e00000BmJ3lAAF	BIP Front Loaded Rebate-3		7/15/2020	7/15/2020	7/15/2020	BIP Front Loaded Rebate Gas-3	0	04__2020	4/1/2020	6/30/2020	a140e000008yefrAAA
a4G0e000000cZ7sEAE	a1160000000ECvZAAW	a140e000008yefsAAA	122801	a4i0e000002Sa0tAAC	System	0	1842.015	9001694511		1	7216956	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03H9	7216956	Credit	a4C0e0000024JABEA2	0010e00001L8b4BAAR	0016000000HAZMiAAP	Reconciled	SD	a400e00000BmJ3mAAF	BIP Front Loaded Rebate-3		10/14/2020	10/14/2020	10/14/2020	BIP Front Loaded Rebate Gas-3	1991.865	07__2020	7/1/2020	9/30/2020	a140e000008yefrAAA
a4G0e000000cZ7sEAE	a1160000000ECvZAAW	a140e000008yefsAAA	113885	a4i0e000002SnauAAC	System	0	1708.275	9002112437		1	7258873	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03H9	7258873	Credit	a4C0e0000024seCEAQ	0010e00001L8b4BAAR	0016000000HAZMiAAP	Reconciled	SD	a400e00000BmJ3nAAF	BIP Front Loaded Rebate-3		1/19/2021	1/19/2021	1/19/2021	BIP Front Loaded Rebate Gas-3	3955.425	10__2020	10/1/2020	12/31/2020	a140e000008yefrAAA
a4G0e000000cZ7sEAE	a1160000000ECvZAAW	a140e000008yefsAAA	101783	a4i0e00000236lPAAQ	System	0	1526.745	9002511421		1	7297024	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03H9	7297024	Credit	a4C0e000004zdIbEAI	0010e00001L8b4BAAR	0016000000HAZMiAAP	Reconciled	SD	a400e00000BmJ3oAAF	BIP Front Loaded Rebate-3		4/19/2021	4/19/2021	4/19/2021	BIP Front Loaded Rebate Gas-3	5795.685	01__2021	1/1/2021	3/31/2021	a140e000008yefrAAA
a4G0e000000cZ7sEAE	a1160000000ECvZAAW	a140e000008yefsAAA	123790	a4i7V0000023FlrQAE	System	0	1856.85	9002917343		1	7327769	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03H9	7327769	Credit	a4C7V0000050AntUAE	0010e00001L8b4BAAR	0016000000HAZMiAAP	Reconciled	SD	a400e00000BmJ3pAAF	BIP Front Loaded Rebate-3		7/16/2021	7/16/2021	7/16/2021	BIP Front Loaded Rebate Gas-3	7437.9	04__2021	4/1/2021	6/30/2021	a140e000008yefrAAA
a4G0e000000cZ7sEAE	a1160000000ECvZAAW	a140e000008yefsAAA	121496	a4i7V000003CFtdQAG	System	0	1822.44	9003323403		1	7356021	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	7356021	Credit	a4C7V000009eFRzUAM	0010e00001L8b4BAAR	0016000000HAZMiAAP	Reconciled	SD	a400e00000BmJ3qAAF	BIP Front Loaded Rebate-3		10/15/2021	10/15/2021	10/15/2021	BIP Front Loaded Rebate Gas-3	9449.22	07__2021	7/1/2021	9/30/2021	a140e000008yefrAAA
a4G0e000000cZ7sEAE	a1160000000ECvZAAW	a140e000008yefsAAA	114801	a4i7V000003CPWKQA4	System	0	1722.015	9003772668		1	7388438	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	7388438	Credit	a4C7V000009ek2XUAQ	0010e00001L8b4BAAR	0016000000HAZMiAAP	Reconciled	SD	a400e00000BmJ3rAAF	BIP Front Loaded Rebate-3		1/20/2022	1/20/2022	1/20/2022	BIP Front Loaded Rebate Gas-3	11402.145	10__2021	10/1/2021	12/31/2021	a140e000008yefrAAA
a4G0e000000cZ7sEAE	a1160000000ECvZAAW	a140e000008yefsAAA	120001	a4i7V000003CYwmQAG	System	0	1800.015	9004148343		1	7420980	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	7420980	Credit	a4C7V000009fEqwUAE	0010e00001L8b4BAAR	0016000000HAZMiAAP	Reconciled	SD	a400e00000BmJ3sAAF	BIP Front Loaded Rebate-3		4/18/2022	4/18/2022	4/18/2022	BIP Front Loaded Rebate Gas-3	13239.645	01__2022	1/1/2022	3/31/2022	a140e000008yefrAAA
a4G0e000000cZ7sEAE	a1160000000ECvZAAW	a140e000008yefsAAA	106992	a4i7V000003CgkbQAC	System	0	1604.88	9004685639		1	7446550	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	7446550	Credit	a4C7V000009fhvwUAA	0010e00001L8b4BAAR	0016000000HAZMiAAP	Reconciled	SD	a400e00000BmJ3tAAF	BIP Front Loaded Rebate-3		7/19/2022	7/19/2022	7/19/2022	BIP Front Loaded Rebate Gas-3	15177.66	04__2022	4/1/2022	6/30/2022	a140e000008yefrAAA
a4G0e000000cZ7sEAE	a1160000000ECvZAAW	a140e000008yefsAAA	97601	a4i7V000003CwZiQAK	System	0	1464.015	9005914588		1	7483270	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	7483270	Credit	a4C7V00000A8ZVrUAN	0010e00001L8b4BAAR	0016000000HAZMiAAP	Reconciled	SD	a400e00000BmJ3uAAF	BIP Front Loaded Rebate-3		10/19/2022	10/19/2022	10/19/2022	BIP Front Loaded Rebate Gas-3	16913.025	07__2022	7/1/2022	9/30/2022	a140e000008yefrAAA
a4G0e000000cZ7sEAE	a1160000000ECvZAAW	a140e000008yefsAAA	72395	a4i7V000003yXeAQAU	System	0	1085.925	9007022336		1	7511183	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	7511183	Credit	a4C7V00000A94k8UAB	0010e00001L8b4BAAR	0016000000HAZMiAAP	Reconciled	SD	a400e00000BmJ3vAAF	BIP Front Loaded Rebate-3		1/18/2023	1/18/2023	1/18/2023	BIP Front Loaded Rebate Gas-3	18492.495	10__2022	10/1/2022	12/31/2022	a140e000008yefrAAA
a4G0e000000cZ7sEAE	a1160000000ECvZAAW	a140e000008yefsAAA	27800	a4i7V000003yZN7QAM	System	0	417	9007212082		1	7514088	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	7514088	Credit	a4C7V00000A9EBdUAN	0010e00001L8b4BAAR	0016000000HAZMiAAP	Reconciled	SD	a400e00000BmJ3wAAF	BIP Front Loaded Rebate-3		2/2/2023	2/2/2023	2/2/2023	BIP Front Loaded Rebate Gas-3	19677.39	01__2023	1/1/2023	1/31/2023	a140e000008yefrAAA
a4G0e000000Mjc1EAC	a1160000000ECvZAAW	a140e000008ypbIAAQ	145292	a4i7V000003CH0zQAG	System	0	2179.38	9003388741		1	7359541	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7359541	Credit	a4C7V000009eHvKUAU	0010e00001QWJgYAAX	0016000000HAZMiAAP	Reconciled	SD	a407V000006oumpQAA	BIP Front Loaded Rebate-3		10/29/2021	10/29/2021	10/29/2021	BIP Front Loaded Rebate Gas-3	0	08__2021	8/1/2021	9/30/2021	a140e000008ypbHAAQ
a4G0e000000Mjc1EAC	a1160000000ECvZAAW	a140e000008ypbIAAQ	170490	a4i7V000003CPXLQA4	System	0	2557.35	9003772671		1	7388501	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7388501	Credit	a4C7V000009ek2ZUAQ	0010e00001QWJgYAAX	0016000000HAZMiAAP	Reconciled	SD	a407V000006oumqQAA	BIP Front Loaded Rebate-3		1/20/2022	1/20/2022	1/20/2022	BIP Front Loaded Rebate Gas-3	2362.335	10__2021	10/1/2021	12/31/2021	a140e000008ypbHAAQ
a4G0e000000Mjc1EAC	a1160000000ECvZAAW	a140e000008ypbIAAQ	138294	a4i7V000003CYxkQAG	System	0	2074.41	9004148347		1	7421039	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7421039	Credit	a4C7V000009fEr1UAE	0010e00001QWJgYAAX	0016000000HAZMiAAP	Reconciled	SD	a407V000006oumrQAA	BIP Front Loaded Rebate-3		4/18/2022	4/18/2022	4/18/2022	BIP Front Loaded Rebate Gas-3	5090.595	01__2022	1/1/2022	3/31/2022	a140e000008ypbHAAQ
a4G0e000000Mjc1EAC	a1160000000ECvZAAW	a140e000008ypbIAAQ	150293	a4i7V000003CglYQAS	System	0	2254.395	9004685641		1	7446609	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7446609	Credit	a4C7V000009fhvyUAA	0010e00001QWJgYAAX	0016000000HAZMiAAP	Reconciled	SD	a407V000006oumsQAA	BIP Front Loaded Rebate-3		7/19/2022	7/19/2022	7/19/2022	BIP Front Loaded Rebate Gas-3	7306.83	04__2022	4/1/2022	6/30/2022	a140e000008ypbHAAQ
a4G0e000000Mjc1EAC	a1160000000ECvZAAW	a140e000008ypbIAAQ	171400	a4i7V000003CwahQAC	System	0	2571	9005914583		1	7483329	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7483329	Credit	a4C7V00000A8ZVtUAN	0010e00001QWJgYAAX	0016000000HAZMiAAP	Reconciled	SD	a407V000006oumtQAA	BIP Front Loaded Rebate-3		10/19/2022	10/19/2022	10/19/2022	BIP Front Loaded Rebate Gas-3	9717.225	07__2022	7/1/2022	9/30/2022	a140e000008ypbHAAQ
a4G0e000000Mjc1EAC	a1160000000ECvZAAW	a140e000008ypbIAAQ	128292	a4i7V000003yXfCQAU	System	0	1924.38	9007022324		1	7511243	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7511243	Credit	a4C7V00000A94kAUAR	0010e00001QWJgYAAX	0016000000HAZMiAAP	Reconciled	SD	a407V000006oumuQAA	BIP Front Loaded Rebate-3		1/18/2023	1/18/2023	1/18/2023	BIP Front Loaded Rebate Gas-3	12513.255	10__2022	10/1/2022	12/31/2022	a140e000008ypbHAAQ
a4G0e000000Mjc1EAC	a1160000000ECvZAAW	a140e000008ypbIAAQ	210937	a4i7V00000531MyQAI	System	0	3164.055	9008139963		1	7540522	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7540522	Credit	a4C7V00000AGyCOUA1	0010e00001QWJgYAAX	0016000000HAZMiAAP	Reconciled	SD	a407V000006oumvQAA	BIP Front Loaded Rebate-3		4/19/2023	4/19/2023	4/19/2023	BIP Front Loaded Rebate Gas-3	14607.825	01__2023	1/1/2023	3/31/2023	a140e000008ypbHAAQ
a4G0e000000Mjc1EAC	a1160000000ECvZAAW	a140e000008ypbIAAQ	147197	a4i7V000005yWssQAE	System	0	2207.955	9009238193		1	7561141	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03MQ	7561141	Credit	a4C7V00000C3Hk3UAF	0010e00001QWJgYAAX	0016000000HAZMiAAP	Reconciled	SD	a407V000007DRFEQA4	BIP Front Loaded Rebate-3		7/18/2023	7/18/2023	7/18/2023	BIP Front Loaded Rebate Gas-3	18039.03	04__2023	4/1/2023	6/30/2023	a140e000008ypbHAAQ
a4G0e000000Mjc1EAC	a1160000000ECvZAAW	a140e000008ypbIAAQ	147288	a4i7V0000059NSaQAM	System	0	2209.32	9010408419		1	7596069	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7596069	Credit	a4C7V00000CLyGUUA1	0010e00001QWJgYAAX	0016000000HAZMiAAP	Reconciled	SD	a407V000007DRFFQA4	BIP Front Loaded Rebate-3		10/19/2023	10/19/2023	10/19/2023	BIP Front Loaded Rebate Gas-3	20429.325	07__2023	7/1/2023	9/30/2023	a140e000008ypbHAAQ
a4G0e000000Mjc1EAC	a1160000000ECvZAAW	a140e000008ypbIAAQ	120986	a4i7V000003YMY6QAO	System	0	1814.79	9011527286		1	7623995	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7623995	Credit	a4C7V00000AZWKQUA5	0010e00001QWJgYAAX	0016000000HAZMiAAP	Reconciled	SD	a407V000007DRFGQA4	BIP Front Loaded Rebate-3		1/17/2024	1/17/2024		BIP Front Loaded Rebate Gas-3	22854.75	10__2023	10/1/2023	12/31/2023	a140e000008ypbHAAQ
a4G0e000000Mjc1EAC	a1160000000ECvZAAW	a140e000008ypbIAAQ	81501	a4i7V000003YSvvQAG	System	0	1222.515	9012671595		1	7644179	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7644179	Credit	a4C7V00000AZxbMUAT	0010e00001QWJgYAAX	0016000000HAZMiAAP	Reconciled	SD	a407V000007DRFHQA4	BIP Front Loaded Rebate-3		4/17/2024	4/17/2024	4/17/2024	BIP Front Loaded Rebate Gas-3	24789.51	01__2024	1/1/2024	3/31/2024	a140e000008ypbHAAQ
a4G0e000000Mjc1EAC	a1160000000ECvZAAW	a140e000008ypbIAAQ	112316	a4i7V000003ufiYQAQ	System	0	1684.74	9013827688		1	7677137	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7677137	Credit	a4C7V00000AViKRUA1	0010e00001QWJgYAAX	0016000000HAZMiAAP	Reconciled	SD	a407V000007DRFIQA4	BIP Front Loaded Rebate-3		7/17/2024	7/17/2024	7/17/2024	BIP Front Loaded Rebate Gas-3	26076.54	04__2024	4/1/2024	6/30/2024	a140e000008ypbHAAQ
a4G0e000000Mjc1EAC	a1160000000ECvZAAW	a140e000008ypbIAAQ	39297	a4i7V000003ujRVQAY	System	0	589.455			1	7690135	Pending PAA Approval	Rebate	Customer	0	Payment																	a407V000007DRFJQA4	BIP Front Loaded Rebate-3					BIP Front Loaded Rebate Gas-3	27936.9	07__2024	7/1/2024	7/31/2024	a140e000008ypbHAAQ
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	297511	a4i0e000000El1fAAC	System	0	7437.775	9505177006		1	6726774	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	6726774	Credit	a4C0e0000026j8JEAQ	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46RAAQ	BIP Front Loaded Rebate-3		10/17/2017	10/16/2017	10/17/2017	BIP Front Loaded Rebate Gas-3	0	08__2017	8/1/2017	9/30/2017	a1432000003unPkAAI
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	374012	a4i0e000000F1yHAAS	System	0	9350.3	9506417771		1	6772365	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	6772365	Credit	a4C0e0000027JiDEAU	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46SAAQ	BIP Front Loaded Rebate-3		1/31/2018	1/30/2018	1/31/2018	BIP Front Loaded Rebate Gas-3	7437.775	10__2017	10/1/2017	12/31/2017	a1432000003unPkAAI
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	348810	a4i0e000001otSzAAI	System	0	8720.25	9507327890		1	6808010	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	6808010	Credit	a4C0e0000002lFEEAY	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46TAAQ	BIP Front Loaded Rebate-3		4/14/2018	4/13/2018	4/14/2018	BIP Front Loaded Rebate Gas-3	16788.075	01__2018	1/1/2018	3/31/2018	a1432000003unPkAAI
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	469613	a4i0e000001p8RvAAI	System	0	11740.325	9508624340		1	6849681	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	6849681	Credit	a4C0e0000003NBGEA2	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46UAAQ	BIP Front Loaded Rebate-3		7/26/2018	7/25/2018	7/26/2018	BIP Front Loaded Rebate Gas-3	25508.325	04__2018	4/1/2018	6/30/2018	a1432000003unPkAAI
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	546199	a4i0e000001sde5AAA	System	0	13654.975	9509736196		1	6892336	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	6892336	Credit	a4C0e0000022KJ8EAM	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46VAAQ	BIP Front Loaded Rebate-3		10/24/2018	10/23/2018	10/24/2018	BIP Front Loaded Rebate Gas-3	37248.65	07__2018	7/1/2018	9/30/2018	a1432000003unPkAAI
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	404470	a4i0e000001srsYAAQ	System	0	10111.75	9510784564		1	6933822	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	6933822	Credit	a4C0e0000022qEtEAI	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46WAAQ	BIP Front Loaded Rebate-3		1/19/2019	1/17/2019	1/19/2019	BIP Front Loaded Rebate Gas-3	50903.625	10__2018	10/1/2018	12/31/2018	a1432000003unPkAAI
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	340477	a4i0e000001t5uBAAQ	System	0	8511.925	9511854457		1	6975980	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	6975980	Credit	a4C0e0000023OZOEA2	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46XAAQ	BIP Front Loaded Rebate-3		4/19/2019	4/18/2019	4/19/2019	BIP Front Loaded Rebate Gas-3	61015.375	01__2019	1/1/2019	3/31/2019	a1432000003unPkAAI
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	485425	a4i0e000002DmqsAAC	System	0	12135.625	9512987600		1	7020145	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7020145	Credit	a4C0e000004j8rfEAA	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46YAAQ	BIP Front Loaded Rebate-3		7/19/2019	7/18/2019	7/19/2019	BIP Front Loaded Rebate Gas-3	69527.3	04__2019	4/1/2019	6/30/2019	a1432000003unPkAAI
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	581643	a4i0e000002E4zeAAC	System	0	14541.075	9514076302		1	7078668	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7078668	Credit	a4C0e000004jhiwEAA	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46ZAAQ	BIP Front Loaded Rebate-3		10/19/2019	10/18/2019	10/19/2019	BIP Front Loaded Rebate Gas-3	81662.925	07__2019	7/1/2019	9/30/2019	a1432000003unPkAAI
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	442676	a4i0e000002EJcfAAG	System	0	11066.9	9514869050		1	7124888	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7124888	Credit	a4C0e000006ImsTEAS	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46aAAA	BIP Front Loaded Rebate-3		1/17/2020	1/16/2020	1/17/2020	BIP Front Loaded Rebate Gas-3	96204	10__2019	10/1/2019	12/31/2019	a1432000003unPkAAI
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	407671	a4i0e000002ZU9cAAG	System	0	10191.775	9515605260		1	7161645	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7161645	Credit	a4C0e000006JO7xEAG	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46bAAA	BIP Front Loaded Rebate-3		4/16/2020	4/15/2020	4/16/2020	BIP Front Loaded Rebate Gas-3	107270.9	01__2020	1/1/2020	3/31/2020	a1432000003unPkAAI
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	464776	a4i0e000002Zd2FAAS	System	0	11619.4	9516291410		1	7185009	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7185009	Credit	a4C0e000006JxsmEAC	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46cAAA	BIP Front Loaded Rebate-3		7/16/2020	7/15/2020		BIP Front Loaded Rebate Gas-3	117462.675	04__2020	4/1/2020	6/30/2020	a1432000003unPkAAI
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	665018	a4i0e000002Sa3xAAC	System	0	16625.45	9517036302		1	7217143	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7217143	Credit	a4C0e0000024JMtEAM	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46dAAA	BIP Front Loaded Rebate-3		10/15/2020	10/14/2020		BIP Front Loaded Rebate Gas-3	129082.075	07__2020	7/1/2020	9/30/2020	a1432000003unPkAAI
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	665018	a4i0e00000230GqAAI	System	0	176.28	9518081942		1	7274649	Reconciled	Rebate	Customer	0	Payment	Volume variance correction per Jon Furnas email.	NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7274649	Credit	a4C0e000004zIofEAE	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46dAAA	BIP Front Loaded Rebate-3		2/27/2021	2/26/2021	2/27/2021	BIP Front Loaded Rebate Gas-3	129082.075	07__2020	7/1/2020	9/30/2020	a1432000003unPkAAI
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	484396	a4i0e000002SnexAAC	System	0	12109.9	9517791300		1	7259122	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7259122	Credit	a4C0e0000024sxaEAA	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46eAAA	BIP Front Loaded Rebate-3		1/20/2021	1/19/2021		BIP Front Loaded Rebate Gas-3	145707.525	10__2020	10/1/2020	12/31/2020	a1432000003unPkAAI
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	481481	a4i0e00000236rzAAA	System	0	12037.025	9518506756		1	7297428	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7297428	Credit	a4C0e000004zdgBEAQ	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46fAAA	BIP Front Loaded Rebate-3		4/20/2021	4/19/2021		BIP Front Loaded Rebate Gas-3	157817.425	01__2021	1/1/2021	3/31/2021	a1432000003unPkAAI
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	630965	a4i7V0000023FqNQAU	System	0	15774.125	9519274798		1	7328046	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7328046	Credit	a4C7V0000050B2fUAE	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46gAAA	BIP Front Loaded Rebate-3		7/17/2021	7/16/2021	7/17/2021	BIP Front Loaded Rebate Gas-3	170030.73	04__2021	4/1/2021	6/30/2021	a1432000003unPkAAI
a4G32000000g5irEAA	a1160000000ECtYAAW	a1432000003unPmAAI	214933	a4i7V0000023GeyQAE	System	0	5373.325	9519445579		1	7330203	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7330203	Credit	a4C7V0000050KTuUAM	0013200001FrKX0AAN	0016000000H8FgiAAF	Reconciled	SD	a400e000003q46hAAA	BIP Front Loaded Rebate-3		8/5/2021	8/4/2021	8/5/2021	BIP Front Loaded Rebate Gas-3	185804.855	07__2021	7/1/2021	7/31/2021	a1432000003unPkAAI
a4G32000000g5isEAA	a1160000000ECtYAAW	a1432000003unPnAAI	328345	a4i0e000000QEYDAA4	System	0	8208.625	9504021218		1	6646556	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	6646556	Credit	a4C0e000000PhVgEAK	0013200001FrKX1AAN	0016000000H8FgiAAF	Reconciled	SD	a40320000015AsmAAE	BIP Front Loaded Rebate-3		7/18/2017	7/17/2017	7/18/2017	BIP Front Loaded Rebate Gas-3	0	04__2017	4/1/2017	6/30/2017	a1432000003unPlAAI
a4G32000000g5isEAA	a1160000000ECtYAAW	a1432000003unPnAAI	337175	a4i0e000000El1gAAC	System	0	8429.375	9505177008		1	6726775	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	6726775	Credit	a4C0e0000026j8KEAQ	0013200001FrKX1AAN	0016000000H8FgiAAF	Reconciled	SD	a40320000015AsnAAE	BIP Front Loaded Rebate-3		10/17/2017	10/16/2017	10/17/2017	BIP Front Loaded Rebate Gas-3	8208.625	07__2017	7/1/2017	9/30/2017	a1432000003unPlAAI
a4G32000000g5isEAA	a1160000000ECtYAAW	a1432000003unPnAAI	293498	a4i0e000000F1yIAAS	System	0	7337.45	9506417774		1	6772366	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	6772366	Credit	a4C0e0000027JiEEAU	0013200001FrKX1AAN	0016000000H8FgiAAF	Reconciled	SD	a40320000015AsoAAE	BIP Front Loaded Rebate-3		1/31/2018	1/30/2018	1/31/2018	BIP Front Loaded Rebate Gas-3	16638	10__2017	10/1/2017	12/31/2017	a1432000003unPlAAI
a4G32000000g5isEAA	a1160000000ECtYAAW	a1432000003unPnAAI	246755	a4i0e000001otT0AAI	System	0	6168.875	9507327891		1	6808011	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	6808011	Credit	a4C0e0000002lFFEAY	0013200001FrKX1AAN	0016000000H8FgiAAF	Reconciled	SD	a40320000015AspAAE	BIP Front Loaded Rebate-3		4/14/2018	4/13/2018	4/14/2018	BIP Front Loaded Rebate Gas-3	23975.45	01__2018	1/1/2018	3/31/2018	a1432000003unPlAAI
a4G32000000g5isEAA	a1160000000ECtYAAW	a1432000003unPnAAI	296028	a4i0e000001p8RwAAI	System	0	7400.7	9508624341		1	6849682	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	6849682	Credit	a4C0e0000003NBHEA2	0013200001FrKX1AAN	0016000000H8FgiAAF	Reconciled	SD	a40320000015AsqAAE	BIP Front Loaded Rebate-3		7/26/2018	7/25/2018	7/26/2018	BIP Front Loaded Rebate Gas-3	30144.325	04__2018	4/1/2018	6/30/2018	a1432000003unPlAAI
a4G32000000g5isEAA	a1160000000ECtYAAW	a1432000003unPnAAI	326602	a4i0e000001sde6AAA	System	0	8165.05	9509739203		1	6892337	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	6892337	Credit	a4C0e0000022KJ9EAM	0013200001FrKX1AAN	0016000000H8FgiAAF	Reconciled	SD	a40320000015AsrAAE	BIP Front Loaded Rebate-3		10/24/2018	10/23/2018	10/24/2018	BIP Front Loaded Rebate Gas-3	37545.025	07__2018	7/1/2018	9/30/2018	a1432000003unPlAAI
a4G32000000g5isEAA	a1160000000ECtYAAW	a1432000003unPnAAI	269355	a4i0e000001srsZAAQ	System	0	6733.875	9510784565		1	6933823	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	6933823	Credit	a4C0e0000022qEuEAI	0013200001FrKX1AAN	0016000000H8FgiAAF	Reconciled	SD	a40320000015AssAAE	BIP Front Loaded Rebate-3		1/19/2019	1/17/2019	1/19/2019	BIP Front Loaded Rebate Gas-3	45710.075	10__2018	10/1/2018	12/31/2018	a1432000003unPlAAI
a4G32000000g5isEAA	a1160000000ECtYAAW	a1432000003unPnAAI	231840	a4i0e000001t5uCAAQ	System	0	5796	9511854461		1	6975981	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	6975981	Credit	a4C0e0000023OZPEA2	0013200001FrKX1AAN	0016000000H8FgiAAF	Reconciled	SD	a40320000015AstAAE	BIP Front Loaded Rebate-3		4/19/2019	4/18/2019	4/19/2019	BIP Front Loaded Rebate Gas-3	52443.95	01__2019	1/1/2019	3/31/2019	a1432000003unPlAAI
a4G32000000g5isEAA	a1160000000ECtYAAW	a1432000003unPnAAI	303737	a4i0e000002DmqtAAC	System	0	7593.425	9512987604		1	7020146	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7020146	Credit	a4C0e000004j8rgEAA	0013200001FrKX1AAN	0016000000H8FgiAAF	Reconciled	SD	a40320000015AsuAAE	BIP Front Loaded Rebate-3		7/19/2019	7/18/2019	7/19/2019	BIP Front Loaded Rebate Gas-3	58239.95	04__2019	4/1/2019	6/30/2019	a1432000003unPlAAI
a4G32000000g5isEAA	a1160000000ECtYAAW	a1432000003unPnAAI	267582	a4i0e000002E4zfAAC	System	0	6689.55	9514076304		1	7078669	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7078669	Credit	a4C0e000004jhixEAA	0013200001FrKX1AAN	0016000000H8FgiAAF	Reconciled	SD	a40320000015AsvAAE	BIP Front Loaded Rebate-3		10/19/2019	10/18/2019	10/19/2019	BIP Front Loaded Rebate Gas-3	65833.375	07__2019	7/1/2019	9/30/2019	a1432000003unPlAAI
a4G32000000g5isEAA	a1160000000ECtYAAW	a1432000003unPnAAI	232979	a4i0e000002EJcgAAG	System	0	5824.475	9514869051		1	7124889	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7124889	Credit	a4C0e000006ImsUEAS	0013200001FrKX1AAN	0016000000H8FgiAAF	Reconciled	SD	a40320000015AswAAE	BIP Front Loaded Rebate-3		1/17/2020	1/16/2020	1/17/2020	BIP Front Loaded Rebate Gas-3	72522.925	10__2019	10/1/2019	12/31/2019	a1432000003unPlAAI
a4G32000000g5isEAA	a1160000000ECtYAAW	a1432000003unPnAAI	225711	a4i0e000002ZU9dAAG	System	0	5642.775	9515605262		1	7161646	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7161646	Credit	a4C0e000006JO7yEAG	0013200001FrKX1AAN	0016000000H8FgiAAF	Reconciled	SD	a40320000015AsxAAE	BIP Front Loaded Rebate-3		4/16/2020	4/15/2020	4/16/2020	BIP Front Loaded Rebate Gas-3	78347.4	01__2020	1/1/2020	3/31/2020	a1432000003unPlAAI
a4G32000000g5isEAA	a1160000000ECtYAAW	a1432000003unPnAAI	253426	a4i0e000002Zd2GAAS	System	0	6335.65	9516291411		1	7185010	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7185010	Credit	a4C0e000006JxsnEAC	0013200001FrKX1AAN	0016000000H8FgiAAF	Reconciled	SD	a40320000015AsyAAE	BIP Front Loaded Rebate-3		7/16/2020	7/15/2020		BIP Front Loaded Rebate Gas-3	83990.175	04__2020	4/1/2020	6/30/2020	a1432000003unPlAAI
a4G32000000g5isEAA	a1160000000ECtYAAW	a1432000003unPnAAI	310192	a4i0e000002Sa3yAAC	System	0	7754.8	9517036303		1	7217144	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7217144	Credit	a4C0e0000024JKcEAM	0013200001FrKX1AAN	0016000000H8FgiAAF	Reconciled	SD	a40320000015AszAAE	BIP Front Loaded Rebate-3		10/15/2020	10/14/2020		BIP Front Loaded Rebate Gas-3	90325.825	07__2020	7/1/2020	9/30/2020	a1432000003unPlAAI
a4G32000000g5isEAA	a1160000000ECtYAAW	a1432000003unPnAAI	310192	a4i0e00000230GlAAI	System	0	332.65	9518081941		1	7274648	Reconciled	Rebate	Customer	0	Payment	Volume variance correction per Jon Furnas email.	NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7274648	Credit	a4C0e000004zIoeEAE	0013200001FrKX1AAN	0016000000H8FgiAAF	Reconciled	SD	a40320000015AszAAE	BIP Front Loaded Rebate-3		2/27/2021	2/26/2021	2/27/2021	BIP Front Loaded Rebate Gas-3	90325.825	07__2020	7/1/2020	9/30/2020	a1432000003unPlAAI
a4G32000000g5isEAA	a1160000000ECtYAAW	a1432000003unPnAAI	285314	a4i0e000002SneyAAC	System	0	7132.85	9517791301		1	7259123	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7259123	Credit	a4C0e0000024suiEAA	0013200001FrKX1AAN	0016000000H8FgiAAF	Reconciled	SD	a40320000015At0AAE	BIP Front Loaded Rebate-3		1/20/2021	1/19/2021		BIP Front Loaded Rebate Gas-3	98080.625	10__2020	10/1/2020	12/31/2020	a1432000003unPlAAI
a4G32000000g5isEAA	a1160000000ECtYAAW	a1432000003unPnAAI	274459	a4i0e00000236s0AAA	System	0	6861.475	9518506757		1	7297429	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03M2	7297429	Credit	a4C0e000004zdbAEAQ	0013200001FrKX1AAN	0016000000H8FgiAAF	Reconciled	SD	a40320000015At1AAE	BIP Front Loaded Rebate-3		4/20/2021	4/19/2021		BIP Front Loaded Rebate Gas-3	105213.475	01__2021	1/1/2021	3/31/2021	a1432000003unPlAAI
a4G60000000LL1REAW	a1160000000Fm9CAAS	a1460000002rUKLAA2	169602	a4i600000019Mq6AAE	System	0	3392.04	943575677		1	76025	Reconciled	Rebate	Customer	0	Payment	*Tnsf from sh-843305 Act-3392.04 Unam-3392.04 06/10/13*																a4060000002niwbAAA	BIP Front Loaded Rebate-3				7/21/2010	BIP Front Loaded Rebate Gas-3	0	04__2010	4/1/2010	6/30/2010	a1460000002rUKKAA2
a4G60000000LL1REAW	a1160000000Fm9CAAS	a1460000002rUKLAA2	141365	a4i600000019Mq1AAE	System	0	2827.3	944669972		1	76020	Reconciled	Rebate	Customer	0	Payment	*Tnsf from sh-843305 Act-2827.30 Unam-2827.30 06/10/13*																a4060000002niwcAAA	BIP Front Loaded Rebate-3				10/25/2010	BIP Front Loaded Rebate Gas-3	3392.04	07__2010	7/1/2010	9/30/2010	a1460000002rUKKAA2
a4G60000000LL1REAW	a1160000000Fm9CAAS	a1460000002rUKLAA2	138826	a4i600000019MpzAAE	System	0	2776.52	945712344		1	76018	Reconciled	Rebate	Customer	0	Payment	*Tnsf from sh-843305 Act-2776.52 Unam-2776.52 06/10/13*																a4060000002niwdAAA	BIP Front Loaded Rebate-3				1/25/2011	BIP Front Loaded Rebate Gas-3	6219.34	10__2010	10/1/2010	12/31/2010	a1460000002rUKKAA2
a4G60000000LL1REAW	a1160000000Fm9CAAS	a1460000002rUKLAA2	157988	a4i600000019Mq4AAE	System	0	3159.76	946674217		1	76023	Reconciled	Rebate	Customer	0	Payment	*Tnsf from sh-843305 Act-3159.76 Unam-3159.76 06/10/13*																a4060000002niweAAA	BIP Front Loaded Rebate-3				4/19/2011	BIP Front Loaded Rebate Gas-3	8995.86	01__2011	1/1/2011	3/31/2011	a1460000002rUKKAA2
a4G60000000LL1REAW	a1160000000Fm9CAAS	a1460000002rUKLAA2	143879	a4i600000019Mq2AAE	System	0	2877.58	947756158		1	76021	Reconciled	Rebate	Customer	0	Payment	*Tnsf from sh-843305 Act-2877.58 Unam-2877.58 06/10/13*																a4060000002niwfAAA	BIP Front Loaded Rebate-3				7/22/2011	BIP Front Loaded Rebate Gas-3	12155.62	04__2011	4/1/2011	6/30/2011	a1460000002rUKKAA2
a4G60000000LL1REAW	a1160000000Fm9CAAS	a1460000002rUKLAA2	152138	a4i600000019Mq3AAE	System	0	3042.76	948890715		1	76022	Reconciled	Rebate	Customer	0	Payment	*Tnsf from sh-843305 Act-3042.76 Unam-3042.76 06/10/13*																a4060000002niwgAAA	BIP Front Loaded Rebate-3				10/27/2011	BIP Front Loaded Rebate Gas-3	15033.2	07__2011	7/1/2011	9/30/2011	a1460000002rUKKAA2
a4G60000000LL1REAW	a1160000000Fm9CAAS	a1460000002rUKLAA2	161533	a4i600000019Mq5AAE	System	0	3230.66	949851200		1	76024	Reconciled	Rebate	Customer	0	Payment	*Tnsf from sh-843305 Act-3230.66 Unam-3230.66 06/10/13*																a4060000002niwhAAA	BIP Front Loaded Rebate-3				1/23/2012	BIP Front Loaded Rebate Gas-3	18075.96	10__2011	10/1/2011	12/31/2011	a1460000002rUKKAA2
a4G60000000LL1REAW	a1160000000Fm9CAAS	a1460000002rUKLAA2	140456	a4i600000019Mq0AAE	System	0	2809.12	950945510		1	76019	Reconciled	Rebate	Customer	0	Payment	*Tnsf from sh-843305 Act-2809.12 Unam-2809.12 06/10/13*																a4060000002niwiAAA	BIP Front Loaded Rebate-3				4/26/2012	BIP Front Loaded Rebate Gas-3	21306.62	01__2012	1/1/2012	3/31/2012	a1460000002rUKKAA2
a4G0e000000Mc0kEAC	a1160000000ECvZAAW	a140e000008y1D0AAI	35396	a4i7V000003YOhCQAW	System	0	530.94	9011807552		1	7630836	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7630836	Credit	a4C7V00000AZfMAUA1	0010e00001P4vgTAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSbQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024	2/7/2024	BIP Front Loaded Rebate Gas-3	0	02__2021	2/1/2021	3/31/2021	a140e000008y1CzAAI
a4G0e000000Mc0kEAC	a1160000000ECvZAAW	a140e000008y1D0AAI	163481	a4i7V000003YOhHQAW	System	0	2452.22	9011807552		1	7630837	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	13	11313617	N03	03MQ	7630836	Credit	a4C7V00000AZfMDUA1	0010e00001P4vgTAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DScQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	04__2021	4/1/2021	6/30/2021	a140e000008y1CzAAI
a4G0e000000Mc0kEAC	a1160000000ECvZAAW	a140e000008y1D0AAI	267694	a4i7V000003YOhMQAW	System	0	4015.41	9011807552		1	7630838	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	14	11313617	N03	03MQ	7630836	Credit	a4C7V00000AZfMEUA1	0010e00001P4vgTAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSdQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	07__2021	7/1/2021	9/30/2021	a140e000008y1CzAAI
a4G0e000000Mc0kEAC	a1160000000ECvZAAW	a140e000008y1D0AAI	72101	a4i7V000003YOhDQAW	System	0	1081.52	9011807552		1	7630839	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03MQ	7630836	Credit	a4C7V00000AZfMBUA1	0010e00001P4vgTAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSeQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	10__2021	10/1/2021	12/31/2021	a140e000008y1CzAAI
a4G0e000000Mc0kEAC	a1160000000ECvZAAW	a140e000008y1D0AAI	101096	a4i7V000003YOhRQAW	System	0	1516.44	9011807552		1	7630840	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	15	11313617	N03	03MQ	7630836	Credit	a4C7V00000AZfMFUA1	0010e00001P4vgTAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSfQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	01__2022	1/1/2022	3/31/2022	a140e000008y1CzAAI
a4G0e000000Mc0kEAC	a1160000000ECvZAAW	a140e000008y1D0AAI	72899	a4i7V000003YOhWQAW	System	0	1093.49	9011807552		1	7630841	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	17	11313617	N03	03MQ	7630836	Credit	a4C7V00000AZfMHUA1	0010e00001P4vgTAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSgQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	04__2022	4/1/2022	6/30/2022	a140e000008y1CzAAI
a4G0e000000Mc0kEAC	a1160000000ECvZAAW	a140e000008y1D0AAI	306277	a4i7V000003YOhbQAG	System	0	4594.16	9011807552		1	7630842	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	19	11313617	N03	03MQ	7630836	Credit	a4C7V00000AZfMJUA1	0010e00001P4vgTAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DShQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	07__2022	7/1/2022	9/30/2022	a140e000008y1CzAAI
a4G0e000000Mc0kEAC	a1160000000ECvZAAW	a140e000008y1D0AAI	97697	a4i7V000003YOhgQAG	System	0	1465.46	9011807552		1	7630843	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	20	11313617	N03	03MQ	7630836	Credit	a4C7V00000AZfMKUA1	0010e00001P4vgTAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSiQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	10__2022	10/1/2022	12/31/2022	a140e000008y1CzAAI
a4G0e000000Mc0kEAC	a1160000000ECvZAAW	a140e000008y1D0AAI	98295	a4i7V000003YOhlQAG	System	0	1474.43	9011807552		1	7630844	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	22	11313617	N03	03MQ	7630836	Credit	a4C7V00000AZfMMUA1	0010e00001P4vgTAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSjQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	01__2023	1/1/2023	3/31/2023	a140e000008y1CzAAI
a4G0e000000Mc0kEAC	a1160000000ECvZAAW	a140e000008y1D0AAI	137493	a4i7V000003YOhhQAG	System	0	2062.4	9011807552		1	7630845	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	21	11313617	N03	03MQ	7630836	Credit	a4C7V00000AZfMLUA1	0010e00001P4vgTAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSkQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	04__2023	4/1/2023	6/30/2023	a140e000008y1CzAAI
a4G0e000000Mc0kEAC	a1160000000ECvZAAW	a140e000008y1D0AAI	311478	a4i7V000003YOhqQAG	System	0	4672.17	9011807552		1	7630846	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	24	11313617	N03	03MQ	7630836	Credit	a4C7V00000AZfMOUA1	0010e00001P4vgTAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSlQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	07__2023	7/1/2023	9/30/2023	a140e000008y1CzAAI
a4G0e000000Mc0kEAC	a1160000000ECvZAAW	a140e000008y1D0AAI	125689	a4i7V000003YOhrQAG	System	0	1885.34	9011807552		1	7630847	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	25	11313617	N03	03MQ	7630836	Credit	a4C7V00000AZfMPUA1	0010e00001P4vgTAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSmQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	10__2023	10/1/2023	12/31/2023	a140e000008y1CzAAI
a4G0e000000Mc0kEAC	a1160000000ECvZAAW	a140e000008y1D0AAI	24998	a4i7V000003YOhEQAW	System	0	374.97	9011807552		1	7630848	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	12	11313617	N03	03MQ	7630836	Credit	a4C7V00000AZfMCUA1	0010e00001P4vgTAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSnQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	01__2024	1/1/2024	1/31/2024	a140e000008y1CzAAI
a4G60000000LKyHEAW	a1160000000ECtYAAW	a1460000002s9fTAAQ		a4i60000001AZ5YAAW	System	0	8628.36			1	189964	Reconciled	Rebate	Accounting Only	0	Payment																	a4060000002oTt7AAE	BIP Front Loaded Rebate-3				4/10/2012	BIP Front Loaded Rebate Gas-3	0	01__2012	1/1/2012	3/31/2012	a1460000002s9fNAAQ
a4G60000000LS7sEAG	a1160000000ECtYAAW	a1460000002s9fUAAQ		a4i60000001AZ8XAAW	System	0	19907.14			1	189970	Reconciled	Rebate	Accounting Only	0	Payment																	a4060000002oTt8AAE	BIP Front Loaded Rebate-3				4/10/2012	BIP Front Loaded Rebate Gas-3	0	01__2012	1/1/2012	3/31/2012	a1460000002s9fOAAQ
a4G60000000LKyFEAW	a1160000000ECtYAAW	a1460000002s9fVAAQ		a4i60000001AZ5EAAW	System	0	41053.42			1	189962	Reconciled	Rebate	Accounting Only	0	Payment																	a4060000002oTt9AAE	BIP Front Loaded Rebate-3				4/10/2012	BIP Front Loaded Rebate Gas-3	0	01__2012	1/1/2012	3/31/2012	a1460000002s9fPAAQ
a4G60000000LKyFEAW	a1160000000ECtYAAW	a1460000002s9fVAAQ		a4i7V000003CFPnQAO	System	0	2052.67	9003601922		1	7354530	Reconciled	Clawback	Customer	0	Billing		NAWC	USD	BIPFR Clawback	452	10	11313617	N30	03MQ	7354529	Debit	a4C7V000009eF0kUAE	0016000000woz9GAAQ	0016000000H8FgiAAF	Reconciled	SD	a407V000006ozrMQAQ	BIP Front Loaded Rebate-3		12/14/2021	10/11/2021	12/14/2021	BIP Front Loaded Rebate Gas-3	1368.447333	10__2021	10/1/2021	10/1/2021	a1460000002s9fPAAQ
a4G60000000LKyVEAW	a1160000000ECtYAAW	a1460000002s9fWAAQ		a4i60000001AZ6MAAW	System	0	26301.72			1	189966	Reconciled	Rebate	Accounting Only	0	Payment																	a4060000002oTtAAAU	BIP Front Loaded Rebate-3				4/10/2012	BIP Front Loaded Rebate Gas-3	0	01__2012	1/1/2012	3/31/2012	a1460000002s9fQAAQ
a4G60000000LKyZEAW	a1160000000ECtYAAW	a1460000002s9fXAAQ		a4i60000001AZATAA4	System	0	32876.96			1	189972	Reconciled	Rebate	Accounting Only	0	Payment																	a4060000002oTtBAAU	BIP Front Loaded Rebate-3				4/10/2012	BIP Front Loaded Rebate Gas-3	0	01__2012	1/1/2012	3/31/2012	a1460000002s9fRAAQ
a4G60000000LKyXEAW	a1160000000ECtYAAW	a1460000002s9fYAAQ		a4i60000001AZ7jAAG	System	0	20746.26			1	189968	Reconciled	Rebate	Accounting Only	0	Payment																	a4060000002oTtCAAU	BIP Front Loaded Rebate-3				4/10/2012	BIP Front Loaded Rebate Gas-3	0	01__2012	1/1/2012	3/31/2012	a1460000002s9fSAAQ
a4G60000000LJvOEAW	a1160000000ECuCAAW	a1460000002rSwRAAU		a4i600000019G1IAAU	System	0	3597.04	937299700		1	49862	Reconciled	Rebate	Customer	0	Billing	BILLED UNAMS ON DEBRANDED SITE CJ 020309REESTABLISHING BIP.  SITE WAS CLOSED, BUT RE-OPENED.  UNAMS TO REMAIN ON SITE AND PROGRAM TO CONTINUE. CAS 2/25/09*Tnsf from sh-824989 Act(-3597.04) Unam(0.00) 08/31/09*																a4060000002nZx6AAE	BIP Front Loaded Rebate-3				2/4/2009	BIP Front Loaded Rebate Gas-3		01__2009	1/1/2009	3/31/2009	a1460000002rSwQAAU
a4G60000000LJvOEAW	a1160000000ECuCAAW	a1460000002rSwRAAU	53707	a4i600000019G1HAAU	System	0	1074.14	933171221		1	49861	Reconciled	Rebate	Customer	0	Payment	*Tnsf from sh-824989 Act-1074.14 Unam-1074.14 08/31/09*																a4060000002nZx7AAE	BIP Front Loaded Rebate-3				5/12/2008	BIP Front Loaded Rebate Gas-3		01__2008	1/1/2008	3/31/2008	a1460000002rSwQAAU
a4G60000000LJvOEAW	a1160000000ECuCAAW	a1460000002rSwRAAU	45217	a4i600000019G1GAAU	System	0	904.34	934267073		1	49860	Reconciled	Rebate	Customer	0	Payment	*Tnsf from sh-824989 Act-904.34 Unam-904.34 08/31/09*																a4060000002nZx8AAE	BIP Front Loaded Rebate-3				7/23/2008	BIP Front Loaded Rebate Gas-3		04__2008	4/1/2008	6/30/2008	a1460000002rSwQAAU
a4G60000000LJvOEAW	a1160000000ECuCAAW	a1460000002rSwRAAU	43214	a4i600000019G1FAAU	System	0	864.28	935593659		1	49859	Reconciled	Rebate	Customer	0	Payment	*Tnsf from sh-824989 Act-864.28 Unam-864.28 08/31/09*																a4060000002nZx9AAE	BIP Front Loaded Rebate-3				10/15/2008	BIP Front Loaded Rebate Gas-3		07__2008	7/1/2008	9/30/2008	a1460000002rSwQAAU
a4G60000000LJvOEAW	a1160000000ECuCAAW	a1460000002rSwRAAU	37714	a4i600000019G1EAAU	System	0	754.28	937050905		1	49858	Reconciled	Rebate	Customer	0	Payment	*Tnsf from sh-824989 Act-754.28 Unam-754.28 08/31/09*																a4060000002nZxAAAU	BIP Front Loaded Rebate-3				1/21/2009	BIP Front Loaded Rebate Gas-3		10__2008	10/1/2008	12/31/2008	a1460000002rSwQAAU
a4G32000000M2O2EAK	a1160000000ECsoAAG	a1432000003un4oAAA		a4i320000008ZqpAAE	System	0	44472.43			1	6434527	Reconciled	Rebate	Accounting Only	0	Payment	Transfer contractual unamortized amounts from 3 GS STORE 7-MT-00881655																a4032000004K66tAAC	BIP Front Loaded Rebate-3					BIP Front Loaded Rebate Gas-3	43600.42157	05__2016	5/1/2016	6/30/2016	a1432000003un4nAAA
a4G60000000LEVBEA4	a1160000000ECvZAAW	a140e000008y1CsAAI	129890	a4i0e000002ZczUAAS	System	0	2597.8	9001283350		1	7184840	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03MQ	7184840	Credit	a4C0e000006JxmIEAS	0016000000woz7WAAQ	0016000000HAZMiAAP	Reconciled	SD	a400e0000083AhEAAU	BIP Front Loaded Rebate-3		7/15/2020	7/15/2020	7/15/2020	BIP Front Loaded Rebate Gas-3	0	04__2020	4/1/2020	6/30/2020	a140e000008y1CrAAI
a4G60000000LEVBEA4	a1160000000ECvZAAW	a140e000008y1CsAAI	151689	a4i0e000002SZxOAAW	System	0	3033.78	9001694509		1	7216740	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03MQ	7216740	Credit	a4C0e0000024JCjEAM	0016000000woz7WAAQ	0016000000HAZMiAAP	Reconciled	SD	a400e0000083AhFAAU	BIP Front Loaded Rebate-3		10/14/2020	10/14/2020	10/14/2020	BIP Front Loaded Rebate Gas-3	3091.74	07__2020	7/1/2020	9/30/2020	a140e000008y1CrAAI
a4G60000000LEVBEA4	a1160000000ECvZAAW	a140e000008y1CsAAI	140692	a4i0e000002SnZJAA0	System	0	2813.84	9002112435		1	7258777	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03MQ	7258777	Credit	a4C0e0000024skOEAQ	0016000000woz7WAAQ	0016000000HAZMiAAP	Reconciled	SD	a400e0000083AhGAAU	BIP Front Loaded Rebate-3		1/19/2021	1/19/2021	1/19/2021	BIP Front Loaded Rebate Gas-3	6633.42	10__2020	10/1/2020	12/31/2020	a140e000008y1CrAAI
a4G60000000LEVBEA4	a1160000000ECvZAAW	a140e000008y1CsAAI	148200	a4i0e00000236jgAAA	System	0	2964	9002518811		1	7296920	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03MQ	7296920	Credit	a4C0e000004zeDbEAI	0016000000woz7WAAQ	0016000000HAZMiAAP	Reconciled	SD	a400e0000083AhHAAU	BIP Front Loaded Rebate-3		4/20/2021	4/20/2021	4/20/2021	BIP Front Loaded Rebate Gas-3	9955.28	01__2021	1/1/2021	3/31/2021	a140e000008y1CrAAI
a4G60000000LEVBEA4	a1160000000ECvZAAW	a140e000008y1CsAAI	172123	a4i7V0000023FjxQAE	System	0	3442.46	9002917341		1	7327652	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03MQ	7327652	Credit	a4C7V0000050AtvUAE	0016000000woz7WAAQ	0016000000HAZMiAAP	Reconciled	SD	a400e0000083AhIAAU	BIP Front Loaded Rebate-3		7/16/2021	7/16/2021	7/16/2021	BIP Front Loaded Rebate Gas-3	13485.4	04__2021	4/1/2021	6/30/2021	a140e000008y1CrAAI
a4G60000000LEVBEA4	a1160000000ECvZAAW	a140e000008y1CsAAI	142896	a4i7V000003CFrjQAG	System	0	2857.92	9003323402		1	7355907	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7355907	Credit	a4C7V000009eFRoUAM	0016000000woz7WAAQ	0016000000HAZMiAAP	Reconciled	SD	a400e0000083AhJAAU	BIP Front Loaded Rebate-3		10/15/2021	10/15/2021	10/15/2021	BIP Front Loaded Rebate Gas-3	17478.08	07__2021	7/1/2021	9/30/2021	a140e000008y1CrAAI
a4G60000000LEVBEA4	a1160000000ECvZAAW	a140e000008y1CsAAI	158588	a4i7V000003CPToQAO	System	0	3171.76	9003772669		1	7388282	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7388282	Credit	a4C7V000009ek2VUAQ	0016000000woz7WAAQ	0016000000HAZMiAAP	Reconciled	SD	a400e0000083AhKAAU	BIP Front Loaded Rebate-3		1/20/2022	1/20/2022	1/20/2022	BIP Front Loaded Rebate Gas-3	20803.86	10__2021	10/1/2021	12/31/2021	a140e000008y1CrAAI
a4G60000000LEVBEA4	a1160000000ECvZAAW	a140e000008y1CsAAI	145387	a4i7V000003CYuAQAW	System	0	2907.74	9004148344		1	7420821	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7420821	Credit	a4C7V000009fEqhUAE	0016000000woz7WAAQ	0016000000HAZMiAAP	Reconciled	SD	a400e0000083AhLAAU	BIP Front Loaded Rebate-3		4/18/2022	4/18/2022	4/18/2022	BIP Front Loaded Rebate Gas-3	24529.58	01__2022	1/1/2022	3/31/2022	a140e000008y1CrAAI
a4G60000000LEVBEA4	a1160000000ECvZAAW	a140e000008y1CsAAI	165313	a4i7V000003Cgi4QAC	System	0	3306.26	9004685649		1	7446397	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7446397	Credit	a4C7V000009fhvbUAA	0016000000woz7WAAQ	0016000000HAZMiAAP	Reconciled	SD	a400e0000083AhMAAU	BIP Front Loaded Rebate-3		7/19/2022	7/19/2022	7/19/2022	BIP Front Loaded Rebate Gas-3	27971.24	04__2022	4/1/2022	6/30/2022	a140e000008y1CrAAI
a4G60000000LEVBEA4	a1160000000ECvZAAW	a140e000008y1CsAAI	152729	a4i7V000003CwXIQA0	System	0	3054.58	9005914600		1	7483120	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7483120	Credit	a4C7V00000A8ZVWUA3	0016000000woz7WAAQ	0016000000HAZMiAAP	Reconciled	SD	a400e0000083AhNAAU	BIP Front Loaded Rebate-3		10/19/2022	10/19/2022	10/19/2022	BIP Front Loaded Rebate Gas-3	31749.48	07__2022	7/1/2022	9/30/2022	a140e000008y1CrAAI
a4G60000000LEVBEA4	a1160000000ECvZAAW	a140e000008y1CsAAI	135091	a4i7V000003yXbkQAE	System	0	2701.82	9007022334		1	7511033	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7511033	Credit	a4C7V00000A94jlUAB	0016000000woz7WAAQ	0016000000HAZMiAAP	Reconciled	SD	a400e0000083AhOAAU	BIP Front Loaded Rebate-3		1/18/2023	1/18/2023	1/18/2023	BIP Front Loaded Rebate Gas-3	35248.2	10__2022	10/1/2022	12/31/2022	a140e000008y1CrAAI
a4G60000000LEVBEA4	a1160000000ECvZAAW	a140e000008y1CsAAI	133706	a4i7V00000531JiQAI	System	0	2674.12	9008139957		1	7540321	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7540321	Credit	a4C7V00000AGyC1UAL	0016000000woz7WAAQ	0016000000HAZMiAAP	Reconciled	SD	a400e0000083AhPAAU	BIP Front Loaded Rebate-3		4/19/2023	4/19/2023	4/19/2023	BIP Front Loaded Rebate Gas-3	38423.94	01__2023	1/1/2023	3/31/2023	a140e000008y1CrAAI
a4G0e000000Mc0pEAC	a1160000000ECvZAAW	a140e000008y1DqAAI	84495	a4i7V000003YOiPQAW	System	0	1267.425	9011807561		1	7630862	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7630862	Credit	a4C7V00000AZfMaUAL	0010e00001P4vkBAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSoQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	02__2021	2/1/2021	3/31/2021	a140e000008y1DpAAI
a4G0e000000Mc0pEAC	a1160000000ECvZAAW	a140e000008y1DqAAI	128971	a4i7V000003YOiUQAW	System	0	1934.565	9011807561		1	7630863	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	12	11313617	N03	03MQ	7630862	Credit	a4C7V00000AZfMcUAL	0010e00001P4vkBAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSpQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	04__2021	4/1/2021	6/30/2021	a140e000008y1DpAAI
a4G0e000000Mc0pEAC	a1160000000ECvZAAW	a140e000008y1DqAAI	127821	a4i7V000003YOiQQAW	System	0	1917.315	9011807561		1	7630864	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03MQ	7630862	Credit	a4C7V00000AZfMbUAL	0010e00001P4vkBAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSqQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	07__2021	7/1/2021	9/30/2021	a140e000008y1DpAAI
a4G0e000000Mc0pEAC	a1160000000ECvZAAW	a140e000008y1DqAAI	182493	a4i7V000003YOiZQAW	System	0	2737.395	9011807561		1	7630865	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	16	11313617	N03	03MQ	7630862	Credit	a4C7V00000AZfMgUAL	0010e00001P4vkBAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSrQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	10__2021	10/1/2021	12/31/2021	a140e000008y1DpAAI
a4G0e000000Mc0pEAC	a1160000000ECvZAAW	a140e000008y1DqAAI	168099	a4i7V000003YOiVQAW	System	0	2521.485	9011807561		1	7630866	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	13	11313617	N03	03MQ	7630862	Credit	a4C7V00000AZfMdUAL	0010e00001P4vkBAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSsQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	01__2022	1/1/2022	3/31/2022	a140e000008y1DpAAI
a4G0e000000Mc0pEAC	a1160000000ECvZAAW	a140e000008y1DqAAI	160911	a4i7V000003YOiWQAW	System	0	2413.665	9011807561		1	7630867	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	14	11313617	N03	03MQ	7630862	Credit	a4C7V00000AZfMeUAL	0010e00001P4vkBAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DStQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	04__2022	4/1/2022	6/30/2022	a140e000008y1DpAAI
a4G0e000000Mc0pEAC	a1160000000ECvZAAW	a140e000008y1DqAAI	318591	a4i7V000003YOiXQAW	System	0	4778.865	9011807561		1	7630868	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	15	11313617	N03	03MQ	7630862	Credit	a4C7V00000AZfMfUAL	0010e00001P4vkBAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSuQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	07__2022	7/1/2022	9/30/2022	a140e000008y1DpAAI
a4G0e000000Mc0pEAC	a1160000000ECvZAAW	a140e000008y1DqAAI	343323	a4i7V000003YOieQAG	System	0	5149.845	9011807561		1	7630869	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	19	11313617	N03	03MQ	7630862	Credit	a4C7V00000AZfMjUAL	0010e00001P4vkBAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSvQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	10__2022	10/1/2022	12/31/2022	a140e000008y1DpAAI
a4G0e000000Mc0pEAC	a1160000000ECvZAAW	a140e000008y1DqAAI	237807	a4i7V000003YOijQAG	System	0	3567.105	9011807561		1	7630870	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	22	11313617	N03	03MQ	7630862	Credit	a4C7V00000AZfMmUAL	0010e00001P4vkBAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSwQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	01__2023	1/1/2023	3/31/2023	a140e000008y1DpAAI
a4G0e000000Mc0pEAC	a1160000000ECvZAAW	a140e000008y1DqAAI	205703	a4i7V000003YOikQAG	System	0	3085.545	9011807561		1	7630871	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	23	11313617	N03	03MQ	7630862	Credit	a4C7V00000AZfMnUAL	0010e00001P4vkBAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSxQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	04__2023	4/1/2023	6/30/2023	a140e000008y1DpAAI
a4G0e000000Mc0pEAC	a1160000000ECvZAAW	a140e000008y1DqAAI	161100	a4i7V000003YOioQAG	System	0	2416.5	9011807561		1	7630872	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	25	11313617	N03	03MQ	7630862	Credit	a4C7V00000AZfMpUAL	0010e00001P4vkBAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSyQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	07__2023	7/1/2023	9/30/2023	a140e000008y1DpAAI
a4G0e000000Mc0pEAC	a1160000000ECvZAAW	a140e000008y1DqAAI	318606	a4i7V000003YOifQAG	System	0	4779.09	9011807561		1	7630873	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	20	11313617	N03	03MQ	7630862	Credit	a4C7V00000AZfMkUAL	0010e00001P4vkBAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DSzQAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	10__2023	10/1/2023	12/31/2023	a140e000008y1DpAAI
a4G0e000000Mc0pEAC	a1160000000ECvZAAW	a140e000008y1DqAAI	74791	a4i7V000003YOilQAG	System	0	1121.865	9011807561		1	7630874	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	24	11313617	N03	03MQ	7630862	Credit	a4C7V00000AZfMoUAL	0010e00001P4vkBAAR	0016000000HAZMiAAP	Reconciled	SD	a407V00000P5DT0QAN	BIP Front Loaded Rebate-3		2/7/2024	2/7/2024		BIP Front Loaded Rebate Gas-3	0	01__2024	1/1/2024	1/31/2024	a140e000008y1DpAAI
a4G60000000LJsdEAG	a1160000000ECvZAAW	a140e0000099oitAAA	115784	a4i7V000003Ck4WQAS	System	0	2315.68	9005404592		1	7456169	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7456169	Credit	a4C7V00000BVJhlUAH	0016000000woz7aAAA	0016000000HAZMiAAP	Reconciled	SD	a407V00000GmssHQAR	BIP Front Loaded Rebate-3		9/12/2022	9/12/2022	9/12/2022	BIP Front Loaded Rebate Gas-3	0	10__2021	10/1/2021	12/31/2021	a140e0000099oisAAA
a4G60000000LJsdEAG	a1160000000ECvZAAW	a140e0000099oitAAA	79194	a4i7V000003Ck4XQAS	System	0	1583.88	9005404592		1	7456170	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03MQ	7456169	Credit	a4C7V00000BVJhmUAH	0016000000woz7aAAA	0016000000HAZMiAAP	Reconciled	SD	a407V00000GmssIQAR	BIP Front Loaded Rebate-3		9/12/2022	9/12/2022	9/12/2022	BIP Front Loaded Rebate Gas-3	0	01__2022	1/1/2022	3/31/2022	a140e0000099oisAAA
a4G60000000LJsdEAG	a1160000000ECvZAAW	a140e0000099oitAAA	78693	a4i7V000003Ck4YQAS	System	0	1573.86	9005404592		1	7456171	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	12	11313617	N03	03MQ	7456169	Credit	a4C7V00000BVJhnUAH	0016000000woz7aAAA	0016000000HAZMiAAP	Reconciled	SD	a407V00000GmssJQAR	BIP Front Loaded Rebate-3		9/12/2022	9/12/2022	9/12/2022	BIP Front Loaded Rebate Gas-3	0	04__2022	4/1/2022	6/30/2022	a140e0000099oisAAA
a4G60000000LJsdEAG	a1160000000ECvZAAW	a140e0000099oitAAA	84016	a4i7V000003CwbNQAS	System	0	1680.32	9005914594		1	7483371	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7483371	Credit	a4C7V00000A8ZVxUAN	0016000000woz7aAAA	0016000000HAZMiAAP	Reconciled	SD	a407V00000GmssKQAR	BIP Front Loaded Rebate-3		10/19/2022	10/19/2022	10/19/2022	BIP Front Loaded Rebate Gas-3	0	07__2022	7/1/2022	9/30/2022	a140e0000099oisAAA
a4G60000000LJsdEAG	a1160000000ECvZAAW	a140e0000099oitAAA	84198	a4i7V000003yXfqQAE	System	0	1683.96	9007022322		1	7511283	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7511283	Credit	a4C7V00000A94kEUAR	0016000000woz7aAAA	0016000000HAZMiAAP	Reconciled	SD	a407V00000GmssLQAR	BIP Front Loaded Rebate-3		1/18/2023	1/18/2023	1/18/2023	BIP Front Loaded Rebate Gas-3	7153.74	10__2022	10/1/2022	12/31/2022	a140e0000099oisAAA
a4G60000000LJsdEAG	a1160000000ECvZAAW	a140e0000099oitAAA	96904	a4i7V00000531NTQAY	System	0	1938.08	9008139968		1	7540553	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7540553	Credit	a4C7V00000AGyCUUA1	0016000000woz7aAAA	0016000000HAZMiAAP	Reconciled	SD	a407V00000GmssMQAR	BIP Front Loaded Rebate-3		4/19/2023	4/19/2023	4/19/2023	BIP Front Loaded Rebate Gas-3	8837.7	01__2023	1/1/2023	3/31/2023	a140e0000099oisAAA
a4G60000000LJsdEAG	a1160000000ECvZAAW	a140e0000099oitAAA	60809	a4i7V000005yWtTQAU	System	0	1216.18	9009238194		1	7561178	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7561178	Credit	a4C7V00000C3HdkUAF	0016000000woz7aAAA	0016000000HAZMiAAP	Reconciled	SD	a407V00000GmssNQAR	BIP Front Loaded Rebate-3		7/18/2023	7/18/2023	7/18/2023	BIP Front Loaded Rebate Gas-3	10775.78	04__2023	4/1/2023	6/30/2023	a140e0000099oisAAA
a4G60000000LJsdEAG	a1160000000ECvZAAW	a140e0000099oitAAA	63402	a4i7V0000059NTAQA2	System	0	1268.04	9010408426		1	7596105	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7596105	Credit	a4C7V00000CLyMvUAL	0016000000woz7aAAA	0016000000HAZMiAAP	Reconciled	SD	a407V00000GmssOQAR	BIP Front Loaded Rebate-3		10/19/2023	10/19/2023		BIP Front Loaded Rebate Gas-3	11991.96	07__2023	7/1/2023	9/30/2023	a140e0000099oisAAA
a4G60000000LJsdEAG	a1160000000ECvZAAW	a140e0000099oitAAA	100100	a4i7V000003YMYfQAO	System	0	2002	9011527288		1	7624030	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7624030	Credit	a4C7V00000AZWKUUA5	0016000000woz7aAAA	0016000000HAZMiAAP	Reconciled	SD	a407V00000GmssPQAR	BIP Front Loaded Rebate-3		1/17/2024	1/17/2024	1/17/2024	BIP Front Loaded Rebate Gas-3	13260	10__2023	10/1/2023	12/31/2023	a140e0000099oisAAA
a4G60000000LJsdEAG	a1160000000ECvZAAW	a140e0000099oitAAA	111008	a4i7V000003YSwUQAW	System	0	2220.16	9012671602		1	7644214	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7644214	Credit	a4C7V00000AZxeSUAT	0016000000woz7aAAA	0016000000HAZMiAAP	Reconciled	SD	a407V00000GmssQQAR	BIP Front Loaded Rebate-3		4/17/2024	4/17/2024	4/17/2024	BIP Front Loaded Rebate Gas-3	15262	01__2024	1/1/2024	3/31/2024	a140e0000099oisAAA
a4G60000000LJsdEAG	a1160000000ECvZAAW	a140e0000099oitAAA	60594	a4i7V000003ufj7QAA	System	0	1211.88	9013827691		1	7677172	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7677172	Credit	a4C7V00000AViNsUAL	0016000000woz7aAAA	0016000000HAZMiAAP	Reconciled	SD	a407V00000GmssRQAR	BIP Front Loaded Rebate-3		7/17/2024	7/17/2024	7/17/2024	BIP Front Loaded Rebate Gas-3	17482.16	04__2024	4/1/2024	6/30/2024	a140e0000099oisAAA
a4G60000000LERTEA4	a1160000000ECvZAAW	a140e000009A81nAAC	28103	a4i7V000003CMgHQAW	System	0	421.545	9003570920		1	7378652	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7378652	Credit	a4C7V000009eZaUUAU	0016000000woz7UAAQ	0016000000HAZMiAAP	Reconciled	SD	a407V000006p0G8QAI	BIP Front Loaded Rebate-3		12/7/2021	12/7/2021	12/7/2021	BIP Front Loaded Rebate Gas-3	0	09__2021	9/1/2021	9/30/2021	a140e000009A81mAAC
a4G60000000LERTEA4	a1160000000ECvZAAW	a140e000009A81nAAC	98394	a4i7V000003CPbHQAW	System	0	1475.91	9003772670		1	7388744	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7388744	Credit	a4C7V000009ek2cUAA	0016000000woz7UAAQ	0016000000HAZMiAAP	Reconciled	SD	a407V000006p0G9QAI	BIP Front Loaded Rebate-3		1/20/2022	1/20/2022	1/20/2022	BIP Front Loaded Rebate Gas-3	0	10__2021	10/1/2021	12/31/2021	a140e000009A81mAAC
a4G60000000LERTEA4	a1160000000ECvZAAW	a140e000009A81nAAC	78902	a4i7V000003CZ1lQAG	System	0	1183.53	9004148345		1	7421286	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7421286	Credit	a4C7V000009fErKUAU	0016000000woz7UAAQ	0016000000HAZMiAAP	Reconciled	SD	a407V000006p0GAQAY	BIP Front Loaded Rebate-3		4/18/2022	4/18/2022	4/18/2022	BIP Front Loaded Rebate Gas-3	2158.53	01__2022	1/1/2022	3/31/2022	a140e000009A81mAAC
a4G60000000LERTEA4	a1160000000ECvZAAW	a140e000009A81nAAC	67806	a4i7V000003CgpaQAC	System	0	1017.09	9004685646		1	7446858	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7446858	Credit	a4C7V000009fhw3UAA	0016000000woz7UAAQ	0016000000HAZMiAAP	Reconciled	SD	a407V000006p0GBQAY	BIP Front Loaded Rebate-3		7/19/2022	7/19/2022	7/19/2022	BIP Front Loaded Rebate Gas-3	3544.605	04__2022	4/1/2022	6/30/2022	a140e000009A81mAAC
a4G60000000LERTEA4	a1160000000ECvZAAW	a140e000009A81nAAC	103409	a4i7V000003CwepQAC	System	0	1551.135	9005914597		1	7483581	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7483581	Credit	a4C7V00000A8ZVyUAN	0016000000woz7UAAQ	0016000000HAZMiAAP	Reconciled	SD	a407V000006p0GCQAY	BIP Front Loaded Rebate-3		10/19/2022	10/19/2022	10/19/2022	BIP Front Loaded Rebate Gas-3	4686.27	07__2022	7/1/2022	9/30/2022	a140e000009A81mAAC
a4G60000000LERTEA4	a1160000000ECvZAAW	a140e000009A81nAAC	76502	a4i7V000003yXjEQAU	System	0	1147.53	9007022329		1	7511489	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7511489	Credit	a4C7V00000A94kGUAR	0016000000woz7UAAQ	0016000000HAZMiAAP	Reconciled	SD	a407V000006p0GDQAY	BIP Front Loaded Rebate-3		1/18/2023	1/18/2023	1/18/2023	BIP Front Loaded Rebate Gas-3	6422.04	10__2022	10/1/2022	12/31/2022	a140e000009A81mAAC
a4G60000000LERTEA4	a1160000000ECvZAAW	a140e000009A81nAAC	77412	a4i7V00000531QlQAI	System	0	1161.18	9008139953		1	7540757	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7540757	Credit	a4C7V00000AGyCmUAL	0016000000woz7UAAQ	0016000000HAZMiAAP	Reconciled	SD	a407V000006p0GEQAY	BIP Front Loaded Rebate-3		4/19/2023	4/19/2023	4/19/2023	BIP Front Loaded Rebate Gas-3	7715.115	01__2023	1/1/2023	3/31/2023	a140e000009A81mAAC
a4G60000000LERTEA4	a1160000000ECvZAAW	a140e000009A81nAAC	66302	a4i7V000005yWwmQAE	System	0	994.53	9009238195		1	7561379	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	03MQ	7561379	Credit	a4C7V00000C3HdxUAF	0016000000woz7UAAQ	0016000000HAZMiAAP	Reconciled	SD	a407V000006p0GFQAY	BIP Front Loaded Rebate-3		7/18/2023	7/18/2023	7/18/2023	BIP Front Loaded Rebate Gas-3	9035.46	04__2023	4/1/2023	6/30/2023	a140e000009A81mAAC
a4G60000000LERTEA4	a1160000000ECvZAAW	a140e000009A81nAAC	94189	a4i7V0000059NWJQA2	System	0	1412.835	9010408411		1	7596300	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7596300	Credit	a4C7V00000CLyJqUAL	0016000000woz7UAAQ	0016000000HAZMiAAP	Reconciled	SD	a407V000006p0GGQAY	BIP Front Loaded Rebate-3		10/19/2023	10/19/2023	10/19/2023	BIP Front Loaded Rebate Gas-3	10100.535	07__2023	7/1/2023	9/30/2023	a140e000009A81mAAC
a4G60000000LERTEA4	a1160000000ECvZAAW	a140e000009A81nAAC	75723	a4i7V000003YMbkQAG	System	0	1135.845	9011527279		1	7624219	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7624219	Credit	a4C7V00000AZWKhUAP	0016000000woz7UAAQ	0016000000HAZMiAAP	Reconciled	SD	a407V000006p0GHQAY	BIP Front Loaded Rebate-3		1/17/2024	1/17/2024	1/17/2024	BIP Front Loaded Rebate Gas-3	11679.87	10__2023	10/1/2023	12/31/2023	a140e000009A81mAAC
a4G60000000LERTEA4	a1160000000ECvZAAW	a140e000009A81nAAC	57093	a4i7V000003YSzXQAW	System	0	856.395	9012671592		1	7644403	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7644403	Credit	a4C7V00000AZxRoUAL	0016000000woz7UAAQ	0016000000HAZMiAAP	Reconciled	SD	a407V000006p0GIQAY	BIP Front Loaded Rebate-3		4/17/2024	4/17/2024	4/17/2024	BIP Front Loaded Rebate Gas-3	12920.745	01__2024	1/1/2024	3/31/2024	a140e000009A81mAAC
a4G60000000LERTEA4	a1160000000ECvZAAW	a140e000009A81nAAC	69496	a4i7V000003ufmAQAQ	System	0	1042.44	9013827686		1	7677359	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03MQ	7677359	Credit	a4C7V00000AVi4lUAD	0016000000woz7UAAQ	0016000000HAZMiAAP	Reconciled	SD	a407V000006p0GJQAY	BIP Front Loaded Rebate-3		7/17/2024	7/17/2024	7/17/2024	BIP Front Loaded Rebate Gas-3	13853.625	04__2024	4/1/2024	6/30/2024	a140e000009A81mAAC
a4G60000000LERTEA4	a1160000000ECvZAAW	a140e000009A81nAAC	50594	a4i7V000003un5sQAA	System	0	758.91			1	7703229	Pending PAA Approval	Rebate	Customer	0	Payment																	a407V000006p0GKQAY	BIP Front Loaded Rebate-3					BIP Front Loaded Rebate Gas-3	14972.52	07__2024	7/1/2024	8/31/2024	a140e000009A81mAAC`;
    navigator.clipboard.writeText(data).then(function() {
        pasteExcel1();
        data =`Id	p66_Rebate_Program__c	p66_Legacy_Agreement_Line_Item_ID__c	P66_Period_End__c	P66_Period_Start__c	Formatted	p66_IsMigrated__c	p66_Legacy_Program_Payment_ID__c	p66_Actual_quantity__c	p66_Entry_Type__c	p66_Exclude_from_Contractual_Balance__c	p66_Invoice_Payment_Amount__c	P66_Payment_Invoice__c	p66_Rate__c	P66_Sequence_Number__c	p66_Status__c	p66_Transaction_Reason__c	p66_Transaction_Type__c	p66_Treasury_Hold_Pending_Security__c	p66_Type__c	p66_Comments__c	p66_Company_Code__c	p66_Currency_Code_USD__c	p66_Description__c	p66_Line_Item_Number__c	p66_Material_Code__c	p66_Payment_Terms__c	p66_Plant_Code__c	p66_Legacy_PO_Number__c	p66_SAP_Reference_Type__c	p66_Legacy_SD_AFTN_ID__c	p66_Ship_To__c	p66_Sold_To__c	p66_SAP_Status__c	p66_Internal_Transaction_Number__c	p66_SAP_External_Reference_Date__c	p66_Posting_Date__c	P66_Invoice_Payment_Date__c	p66_SF_Contractual_Program_Balance__c
0i6VC00000020VNYAY	0i8VC0000003wM5YAI	a140e000009A5VtAAK	12/31/2022	11/1/2022	11__2022																																	
0i6VC00000020VOYAY	0i8VC0000003wM5YAI	a140e000009A5VtAAK	3/31/2023	1/1/2023	01__2023																																	
0i6VC00000020VPYAY	0i8VC0000003wM5YAI	a140e000009A5VtAAK	6/30/2023	4/1/2023	04__2023																																	
0i6VC00000020VQYAY	0i8VC0000003wM5YAI	a140e000009A5VtAAK	9/30/2023	7/1/2023	07__2023																																	
0i6VC00000020VRYAY	0i8VC0000003wM5YAI	a140e000009A5VtAAK	12/31/2023	10/1/2023	10__2023																																	
0i6VC00000020VSYAY	0i8VC0000003wM5YAI	a140e000009A5VtAAK	3/31/2024	1/1/2024	01__2024																																	
0i6VC00000020VTYAY	0i8VC0000003wM5YAI	a140e000009A5VtAAK	6/30/2024	4/1/2024	04__2024																																	
0i6VC00000020VUYAY	0i8VC0000003wM5YAI	a140e000009A5VtAAK	9/30/2024	7/1/2024	07__2024																																	
0i6VC00000020VVYAY	0i8VC0000003wM5YAI	a140e000009A5VtAAK	12/31/2024	10/1/2024	10__2024																																	
0i6VC00000020VWYAY	0i8VC0000003wM5YAI	a140e000009A5VtAAK	3/31/2025	1/1/2025	01__2025																																	
0i6VC00000020VXYAY	0i8VC0000003wM5YAI	a140e000009A5VtAAK	6/30/2025	4/1/2025	04__2025																																	
0i6VC00000020VYYAY	0i8VC0000003wM5YAI	a140e000009A5VtAAK	9/30/2025	7/1/2025	07__2025																																	
0i6VC00000020VZYAY	0i8VC0000003wM5YAI	a140e000009A5VtAAK	10/31/2025	10/1/2025	10__2025																																	
0i6VC00000020WzYAI	0i8VC0000003wM6YAI	a140e000006Ra78AAC	9/30/2018	7/1/2018	07__2018																																	
0i6VC00000020X0YAI	0i8VC0000003wM6YAI	a140e000006Ra78AAC	12/31/2018	10/1/2018	10__2018																																	
0i6VC00000020X1YAI	0i8VC0000003wM6YAI	a140e000006Ra78AAC	3/31/2019	1/1/2019	01__2019																																	
0i6VC00000020X2YAI	0i8VC0000003wM6YAI	a140e000006Ra78AAC	6/30/2019	4/1/2019	04__2019																																	
0i6VC00000020X3YAI	0i8VC0000003wM6YAI	a140e000006Ra78AAC	9/30/2019	7/1/2019	07__2019																																	
0i6VC00000020X4YAI	0i8VC0000003wM6YAI	a140e000006Ra78AAC	12/31/2019	10/1/2019	10__2019																																	
0i6VC00000020X5YAI	0i8VC0000003wM6YAI	a140e000006Ra78AAC	3/31/2020	1/1/2020	01__2020																																	
0i6VC00000020X6YAI	0i8VC0000003wM6YAI	a140e000006Ra78AAC	6/30/2020	4/1/2020	04__2020																																	
0i6VC00000020X7YAI	0i8VC0000003wM6YAI	a140e000006Ra78AAC	9/30/2020	7/1/2020	07__2020																																	
0i6VC00000020X8YAI	0i8VC0000003wM6YAI	a140e000006Ra78AAC	12/31/2020	10/1/2020	10__2020																																	
0i6VC00000020X9YAI	0i8VC0000003wM6YAI	a140e000006Ra78AAC	3/31/2021	1/1/2021	01__2021																																	
0i6VC00000020XAYAY	0i8VC0000003wM6YAI	a140e000006Ra78AAC	6/30/2021	4/1/2021	04__2021																																	`;
     navigator.clipboard.writeText(data).then(function() {
        pasteExcel2();
     }, function(err) {
        console.error('error copying');
     });
     }, function(err) {
        console.error('error copying');
     });
     
}

function clearTop(){
    $('.cleftdvs_top').html(`<button class="btn pst_btn" data-btn="Paste Excel - 1">Paste Excel</button>`);
    $('.txt_area').val('');
}

function clearBottom(){
    $('.cleftdvs_bottom').html(`<button class="btn pst_btn" data-btn="Paste Excel - 2">Paste Excel</button>`);
}
function blankAll(){
    $('.txt_area').val('');
    $('.inp_formatted_date').val('');
    $('.cleftdvs_top').html(`<button class="btn pst_btn" data-btn="Paste Excel - 1">Paste Excel</button>`);
    $('.cleftdvs_bottom').html(`<button class="btn pst_btn" data-btn="Paste Excel - 2">Paste Excel</button>`);
}

function copyToCLipboard(value) {
    let text = value;
    navigator.clipboard.writeText(text).then(function() {
    }, function(err) {
        console.error(err);
    });
}

function pasteExcel1() {
    navigator.clipboard.readText().then(text => {
        excelData1 = text;
        convertExcelToJson_Top();
    }).catch(err => {
        console.error('$error: ', err);
        console.log('$error message: ', err.message);
        alert(err.message + ' - Use Paste Special');
    });
}


function convertExcelToJson_Top(){
    const workbook = XLSX.read(excelData1, { type: 'string', raw: true });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const csvData = XLSX.utils.sheet_to_csv(worksheet);
    Papa.parse(csvData, {
        header: true,
        dynamicTyping: true,
        complete: function(results) {
            console.log(results);
            console.log(results.data);
            excelJson_top = results.data;
            document.title = 'Excel Operator : [ '+(excelJson_top.length + 1)+' ]';
            generateJsonToTable_Top();
        },
        error: function(err) {
            console.error(err);
        }
    });
}

function generateJsonToTable_Top(){
    let columns = Object.keys(excelJson_top[0]);
    console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="t_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    while(i < excelJson_top.length){
        let item = excelJson_top[i];
        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            tds += `<td class="t_x_td">${getIdelValue(item[col])}</td>`;
            j++;
        }
        trs += `<tr  class="t_x_tr t_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="t_x_table" id="table_top_id">
            <thead class="t_x_thead">
                <tr  class="t_x_tr t_x_th_tr">
                    ${ths}
                </tr>
            </thead>
            <tbody class="t_x_body">
                ${trs}
            </tbody>
        </table>
    `;
    $('.cleftdvs_top').html(table);
}

function convertExcelToJson_Bottom(){
    const workbook = XLSX.read(excelData2, { type: 'string', raw: true });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const csvData = XLSX.utils.sheet_to_csv(worksheet);
    Papa.parse(csvData, {
        header: true,
        dynamicTyping: true,
        complete: function(results) {
            console.log(results);
            console.log(results.data);
            excelJson_bottom = results.data;
            generateJsonToTable_Bottom();
        },
        error: function(err) {
            console.error(err);
        }
    });
}

function generateJsonToTable_Bottom(){
    let columns = Object.keys(excelJson_bottom[0]);
    console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    while(i < excelJson_bottom.length){
        let item = excelJson_bottom[i];
        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            tds += `<td class="b_x_td">${getIdelValue(item[col])}</td>`;
            j++;
        }
        trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="b_x_table" id="table_bottom_id">
            <thead class="b_x_thead">
                <tr  class="b_x_tr b_x_th_tr">
                    ${ths}
                </tr>
            </thead>
            <tbody class="b_x_body">
                ${trs}
            </tbody>
        </table>
    `;
    $('.cleftdvs_bottom').html(table);
}

function getIdelValue(val){
    if(typeof val == 'string'){
        return val.trim().replace(/\n/g, '</br>');
    }else if(typeof val == 'boolean'){
        return val;
    }else if(val == 0 || val == '0'){
        return val;
    }else if(!val){
        return '';
    }else{
        return val;
    }
}

function pasteExcel2() {
    navigator.clipboard.readText().then(text => {
        excelData2 = text;
        convertExcelToJson_Bottom();
    }).catch(err => {
        console.error('$error: ', err);
        console.log('$error message: ', err.message);
        alert(err.message + ' - Use Paste Special');
    });
}

function includeColumns(columsArray){
    let columns = Object.keys(excelJson_top[0]);
    console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        if(columsArray.includes(col))
            ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    while(i < excelJson_top.length){
        let item = excelJson_top[i];
        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            if(columsArray.includes(col))
                tds += `<td class="b_x_td">${getIdelValue(item[col])}</td>`;
            j++;
        }
        trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="b_x_table" id="table_bottom_id">
            <thead class="b_x_thead">
                <tr  class="b_x_tr b_x_th_tr">
                    ${ths}
                </tr>
            </thead>
            <tbody class="b_x_body">
                ${trs}
            </tbody>
        </table>
    `;
    $('.cleftdvs_bottom').html(table);
}


function excludeColumns(columsArray){
    let columns = Object.keys(excelJson_top[0]);
    console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        if(!columsArray.includes(col))
            ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    while(i < excelJson_top.length){
        let item = excelJson_top[i];
        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            if(!columsArray.includes(col))
                tds += `<td class="b_x_td">${getIdelValue(item[col])}</td>`;
            j++;
        }
        trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="b_x_table" id="table_bottom_id">
            <thead class="b_x_thead">
                <tr  class="b_x_tr b_x_th_tr">
                    ${ths}
                </tr>
            </thead>
            <tbody class="b_x_body">
                ${trs}
            </tbody>
        </table>
    `;
    $('.cleftdvs_bottom').html(table);
}

function concatColumns(columsArray, _this){
    columsArray = columsArray.filter(Boolean);
    if(columsArray.length == 2){
        let column1 = columsArray.at(0);
        let column2 = columsArray.at(1);
        let newColumn = column1 + '+' + column2;
        let ths = `<td class="b_x_th">${newColumn}</td>`;
        $('.txt_area').val(newColumn);
        let i = 0;
        let trs = '';
        while(i < excelJson_top.length){
            let item = excelJson_top[i];
            trs += `<tr  class="b_x_tr b_x_tb_tr"><td class="b_x_td">${getIdelValue(item[column1]) + getIdelValue(item[column2])}</td></tr>`;
            i++;
        }
        let table = `
            <table class="b_x_table" id="table_bottom_id">
                <thead class="b_x_thead">
                    <tr  class="b_x_tr b_x_th_tr">
                        ${ths}
                    </tr>
                </thead>
                <tbody class="b_x_body">
                    ${trs}
                </tbody>
            </table>
        `;
        $('.cleftdvs_bottom').html(table);
    }
}
function copyColumns(columsArray, _this){
    columsArray = columsArray.filter(Boolean);
    console.log('$columsArray: ',columsArray);
    if(columsArray.length){
        const table = document.getElementById('table_bottom_id');
        const workbook = XLSX.utils.table_to_book(table, {sheet: "Sheet1"});
        const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"]);
        console.log('$jsonData: ',jsonData);

        // Output the JSON data
        console.log(jsonData);
        let copyData = columsArray.join('\t') + '\n';
        console.log(copyData);
        let i = 0;
        while(i < jsonData.length){
            let item = jsonData[i];
            let j = 0;
            while(j < columsArray.length){
                let itemJ = columsArray[j];
                if(j == (columsArray.length - 1)){
                    copyData += getIdelValue(item[itemJ]) + '\n';
                }else{
                    copyData += getIdelValue(item[itemJ]) + '\t';
                }
                j++;
            }
            i++;
        }
        copyData = copyData.trim();
        console.log(copyData);
        copyToCLipboard_TimeOut(copyData, _this, _this.text().trim(), 1000, 'Copied.');
    }else{

        $('#table_bottom_id .b_x_th').each(function() {
            console.log($(this).text());
            columsArray.push(getIdelValue($(this).text().trim()));
        });

        console.log('$columsArray: ',columsArray);

        const table = document.getElementById('table_bottom_id');
        const workbook = XLSX.utils.table_to_book(table, {sheet: "Sheet1"});
        const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"]);
        console.log('$jsonData: ',jsonData);

        // Output the JSON data
        console.log(jsonData);
        let copyData = columsArray.join('\t') + '\n';
        console.log(copyData);
        let i = 0;
        while(i < jsonData.length){
            let item = jsonData[i];
            let j = 0;
            while(j < columsArray.length){
                let itemJ = columsArray[j];
                if(j == (columsArray.length - 1)){
                    copyData += getIdelValue(item[itemJ]) + '\n';
                }else{
                    copyData += getIdelValue(item[itemJ]) + '\t';
                }
                j++;
            }
            i++;
        }
        copyData = copyData.trim();
        console.log(copyData);
        copyToCLipboard_TimeOut(copyData, _this, _this.text().trim(), 1000, 'Copied.');
    }
}
function copyToCLipboard_TimeOut(value, _this, label, time, copied) {
    navigator.clipboard.writeText(value).then(function() {
        if(_this){
            _this.text(copied);
            setTimeout( () => {
                _this.text(label);
            }, time);
        }
    }, function(err) {
        _this.text('Failed...');
        setTimeout( () => {
            _this.text(label);
        }, 5000);
    });
}
 
 function fillContractIds(){
    console.log('$ring4ContractIdsMap:' , ring4ContractIdsMap);
    console.log('$rin4ContractNumbersMap:' , rin4ContractNumbersMap);
    console.log('$prodContractIdsMap:' , prodContractIdsMap);
    console.log('$prodContractNumbersMap:' , prodContractNumbersMap);
    let columns = Object.keys(excelJson_top[0]);
    columns.splice(1, 0, 'p66_Child_Contract__c');
    columns.splice(2, 0, 'Contract Number');
    console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    while(i < excelJson_top.length){
        let item = excelJson_top[i];
        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            if(col == 'p66_Child_Contract__c'){
                let mapKey = `${item['p66_Legacy_Agreement_Site_ID__c']}${item['p66_Legacy_Agreement_ID__c']}`;
                let contractId = ring4ContractIdsMap.has(mapKey) ? ring4ContractIdsMap.get(mapKey) : '#N/A';
                let style = ``;
                if(contractId == '#N/A' && prodContractIdsMap.has(mapKey)){
                    style = `style="background-color:yellow"`;
                }
                if(contractId != '#N/A'){
                    style = `style="background-color:#a8f5c3"`;
                }
                tds += `<td class="b_x_td" ${style}>${contractId}</td>`;
            }else if(col == 'Contract Number'){
                let mapKey = `${item['p66_Legacy_Agreement_Site_ID__c']}${item['p66_Legacy_Agreement_ID__c']}`;
                let contractNumber = rin4ContractNumbersMap.has(mapKey) ? rin4ContractNumbersMap.get(mapKey) : '#N/A';
                let style = ``;
                if(contractNumber == '#N/A' && prodContractNumbersMap.has(mapKey)){
                    style = `style="background-color:yellow"`;
                }
                if(contractNumber != '#N/A'){
                    style = `style="background-color:#a8f5c3"`;
                }
                tds += `<td class="b_x_td" ${style}>${contractNumber}</td>`;
            }else{
                tds += `<td class="b_x_td">${getIdelValue(item[col])}</td>`;
            }
            j++;
        }
        trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="b_x_table" id="table_bottom_id">
            <thead class="b_x_thead">
                <tr  class="b_x_tr b_x_th_tr">
                    ${ths}
                </tr>
            </thead>
            <tbody class="b_x_body">
                ${trs}
            </tbody>
        </table>
    `;
    $('.cleftdvs_bottom').html(table);
}
 function fillContractIdsProd(){
    console.log('$ring4ContractIdsMap:' , ring4ContractIdsMap);
    console.log('$rin4ContractNumbersMap:' , rin4ContractNumbersMap);
    console.log('$prodContractIdsMap:' , prodContractIdsMap);
    console.log('$prodContractNumbersMap:' , prodContractNumbersMap);
    let columns = Object.keys(excelJson_top[0]);
    console.log('$columns: ',columns);
    columns.splice(1, 0, 'p66_Child_Contract__c');
    columns.splice(2, 0, 'Contract Number');
    console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    while(i < excelJson_top.length){
        let item = excelJson_top[i];
        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            if(col == 'p66_Child_Contract__c'){
                let mapKey = `${item['p66_Legacy_Agreement_Site_ID__c']}${item['p66_Legacy_Agreement_ID__c']}`;
                let contractId = prodContractIdsMap.has(mapKey) ? prodContractIdsMap.get(mapKey) : '#N/A';
                let style = ``;
                if(prodContractIdsMap.has(mapKey) && !ring4ContractIdsMap.has(mapKey)){
                    style = `style="background-color:yellow"`;
                }
                tds += `<td class="b_x_td" ${style}>${contractId}</td>`;
            }else if(col == 'Contract Number'){
                let mapKey = `${item['p66_Legacy_Agreement_Site_ID__c']}${item['p66_Legacy_Agreement_ID__c']}`;
                let contractNumber = prodContractNumbersMap.has(mapKey) ? prodContractNumbersMap.get(mapKey) : '#N/A';
                let style = ``;
                if(prodContractNumbersMap.has(mapKey) && !rin4ContractNumbersMap.has(mapKey)){
                    style = `style="background-color:yellow"`;
                }
                tds += `<td class="b_x_td" ${style}>${contractNumber}</td>`;
            }else{
                tds += `<td class="b_x_td">${getIdelValue(item[col])}</td>`;
            }
            j++;
        }
        trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="b_x_table" id="table_bottom_id">
            <thead class="b_x_thead">
                <tr  class="b_x_tr b_x_th_tr">
                    ${ths}
                </tr>
            </thead>
            <tbody class="b_x_body">
                ${trs}
            </tbody>
        </table>
    `;
    $('.cleftdvs_bottom').html(table);
}
 function highlightDuplicates(){
    let colorsMap = new Map();
    let i = 0;
    while(i < excelJson_top.length){
        let item = excelJson_top[i];
        if(!colorsMap.has(item['ALI__AgreementLineItem__c_Id']))
            colorsMap.set(item['ALI__AgreementLineItem__c_Id'], '#'+(Math.random().toString(16)+'00000').slice(2,8));
        i++;
    }

    let columns = Object.keys(excelJson_top[0]);
    console.log('$columns: ',columns);
    i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    console.log('$ths: ',ths);
    i = 0;
    let trs = '';
    while(i < excelJson_top.length){
        let item = excelJson_top[i];

        let concated = item['ALI__AgreementLineItem__c_Id'] + item['ARS_Apttus_Rebate__PeriodStartDt__c'];
        console.log('$concated: ',concated);

        let f = 0;
        let highlight = false;
        while(f < excelJson_top.length){
            let item_f = excelJson_top[f];
            
            if(f != i){
                let concated_f = item_f['ALI__AgreementLineItem__c_Id'] + item_f['ARS_Apttus_Rebate__PeriodStartDt__c'];
                if(concated == concated_f && !highlight){
                    highlight = true;
                }
            }

            f++;
        }

        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            let style = ``;
            if(highlight){
                style = `style="background-color:${colorsMap.get(item['ALI__AgreementLineItem__c_Id'])}"`;
            }
            tds += `<td class="b_x_td" ${style}>${getIdelValue(item[col])}</td>`;
            j++;
        }
        trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="b_x_table" id="table_bottom_id">
            <thead class="b_x_thead">
                <tr  class="b_x_tr b_x_th_tr">
                    ${ths}
                </tr>
            </thead>
            <tbody class="b_x_body">
                ${trs}
            </tbody>
        </table>
    `;
    $('.cleftdvs_bottom').html(table);
}
function formateDateColumn(colum){
    let columns = Object.keys(excelJson_top[0]);
    console.log('$columns: ',columns);
    let newColumn = 'Formatted-Date';
    let index = columns.indexOf(colum);
    console.log('$index: ',index);
    if(index != -1){
        columns.splice(index, 0, newColumn);
        let i = 0;
        let ths = '';
        while (i < columns.length) {
            let col = columns[i];
            ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
            i++;
        }
        console.log('$ths: ',ths);

        i = 0;
        let trs = '';
        while(i < excelJson_top.length){
            let item = excelJson_top[i];
            let j = 0;
            let tds = '';
            while(j < columns.length){
                let col = columns[j];
                if(col == newColumn){
                    if(colum == 'StartDate'){
                        tds += `<td class="b_x_td">${replaceBeforeChar(item[colum], '-').replaceAll('-','___')}</td>`;
                    }else{
                        tds += `<td class="b_x_td">${replaceTextBetween(item[colum], '-', '-', '___')}</td>`;
                    }
                }else{
                    tds += `<td class="b_x_td">${getIdelValue(item[col])}</td>`;
                }
                j++;
            }
            trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
            i++;
        }
        let table = `
            <table class="b_x_table" id="table_bottom_id">
                <thead class="b_x_thead">
                    <tr  class="b_x_tr b_x_th_tr">
                        ${ths}
                    </tr>
                </thead>
                <tbody class="b_x_body">
                    ${trs}
                </tbody>
            </table>
        `;
        $('.cleftdvs_bottom').html(table);
    }
}
function replaceTextBetween(val, startChar, endChar, replaceValue){
    let regex = new RegExp(`\\${startChar}[^\\${endChar}]+\\${endChar}`, 'g');
    let result = val.replace(regex, replaceValue);
    return result;
}
function replaceBeforeChar(val, startChar) {
    let regex = new RegExp(`^[^${startChar}]*${startChar}`, 'g');
    let result = val.replace(regex, '');
    return result;
}
function replaceAfterChar(val, startChar) {
    let regex = new RegExp(`${startChar}.*`, 'g');
    let result = val.replace(regex, '');
    return result;
}
let isCtrlPressed = false;
$(document).on('keydown', 'body', function (e){
   let charCode = (e.which) ? e.which : e.keyCode;
   if(charCode == 17){
      isCtrlPressed = true;
   }
});
$(document).on('keyup', 'body', function (e){
   let charCode = (e.which) ? e.which : e.keyCode;
   isCtrlPressed = charCode == 17 ? false : isCtrlPressed;
});

$(document).on('click', '.t_x_th,.b_x_th,.t_x_td,.b_x_td', function (e){
    let text = $(this).text().trim();
    console.log('$text: ',text);
    copyToCLipboard(text);
    $('.t_x_th,.b_x_th,.t_x_td,.b_x_td').css('color','#313131');
    $(this).css('color','#9f26c7');
 });
 $(document).on('click', '.t_x_th, .b_x_th', function (e){
    let text = $(this).text().trim();
    console.log('$text: ',text);
    copyToCLipboard(text);
    if(isCtrlPressed){
        $('.inp_formatted_date').val(text);
    }else{
        let txtAreaColumns = $('.txt_area').val().split('\n');
        console.log('$txtAreaColumns: ',txtAreaColumns);
        if(!txtAreaColumns.includes(text))
         txtAreaColumns.push(text);
        console.log('$txtAreaColumns: ',txtAreaColumns);
        $('.txt_area').val(txtAreaColumns.filter(Boolean).join('\n'));
    }
 });
 $(document).on('dblclick', '.t_x_th,.b_x_th', function (e){
     if(isCtrlPressed){
        $('.inp_formatted_date').val('');
    }else{
        $('.txt_area').val('');
    }
});

function fillShipToAndSoldTo(){
    console.log('$legacyAccountKeyAndSfIDMap:' , legacyAccountKeyAndSfIDMap);
    let columns = Object.keys(excelJson_top[0]);
    console.log('$columns: ',columns);
    columns.splice(1, 0, columns[0] + '-SF');
    $('.txt_area').val(columns[0] + '-SF');
    console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    while(i < excelJson_top.length){
        let item = excelJson_top[i];
        let j = 0;
        let tds = '';
        while(j < columns.length){
            if(j == 1){
                let mapKey = `${item[columns[j - 1]]}`;
                let accountId = legacyAccountKeyAndSfIDMap.has(mapKey) ? legacyAccountKeyAndSfIDMap.get(mapKey) : '#N/A';
                tds += `<td class="b_x_td">${accountId}</td>`;
            }else{
                tds += `<td class="b_x_td">${getIdelValue(item[columns[j]])}</td>`;
            }
            j++;
        }
        trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="b_x_table" id="table_bottom_id">
            <thead class="b_x_thead">
                <tr  class="b_x_tr b_x_th_tr">
                    ${ths}
                </tr>
            </thead>
            <tbody class="b_x_body">
                ${trs}
            </tbody>
        </table>
    `;
    $('.cleftdvs_bottom').html(table);
}
function createMap(keyColums){
    keyColums = keyColums.filter(Boolean);
    console.log('$keyColums: ',keyColums);

    let length = keyColums.length;
    console.log('$length: ',length);

    if(length > 1){
        if(length == 2){
            let keyColum = keyColums.at(0);
            let valueColumn = keyColums.at(1);
            console.log('$keyColum: ',keyColum);
            console.log('$excelJson_top: ',excelJson_top);

            let i = 0;
            let excelMap = new Map();
            while(i < excelJson_top.length){
                let item = excelJson_top[i];
                excelMap.set(getIdelValue(item[keyColum]), getIdelValue(item[valueColumn]));
                i++;
            }
            console.log('$excelMap: ', excelMap);
            console.log('$excelMap-Size: ', excelMap.size);
            
            let mapDataArray = [];
            for (const [key, value] of excelMap) {
                mapDataArray.push(`["${key}", "${value}"]`);
            }
            let mapString = `let excelMap = new Map([\n\t${mapDataArray.join(',\n\t')}\t\n]);`;
            console.log(mapString);
            $('.txt_area').val(mapString);
        }else if(length == 3){
            let keyColum1 = keyColums.at(0);
            let keyColum2 = keyColums.at(1);
            let valueColumn = keyColums.at(2);
            console.log('$keyColum1: ',keyColum1);
            console.log('$keyColum2: ',keyColum2);
            console.log('$excelJson_top: ',excelJson_top);

            let i = 0;
            let excelMap = new Map();
            while(i < excelJson_top.length){
                let item = excelJson_top[i];
                excelMap.set(getIdelValue(item[keyColum1])+getIdelValue(item[keyColum2]), getIdelValue(item[valueColumn]));
                i++;
            }
            console.log('$excelMap: ', excelMap);
            console.log('$excelMap-Size: ', excelMap.size);
            
            let mapDataArray = [];
            for (const [key, value] of excelMap) {
                mapDataArray.push(`["${key}", "${value}"]`);
            }
            let mapString = `let excelMap = new Map([\n\t${mapDataArray.join(',\n\t')}\t\n]);`;
            console.log(mapString);
            $('.txt_area').val(mapString);
        }
    }
}
function pasteSpecial1() {
    navigator.clipboard.readText().then(text => {
        excelData1 = text.trim();
        let rows = excelData1.split('\n').map(row => row.trim());
        let headers = rows[0].split('\t').map(head => head.trim());
        let jsonResult = [];
        let i = 1;
        while (i < rows.length) {
            let row = rows[i].split('\t');
            let obj = {};
            let j = 0;
            while (j < headers.length) {
                obj[headers[j].trim()] = row[j] ? row[j].trim() : null;
                j++;
            }
            jsonResult.push(obj);
            i++;
        }
        excelJson_top = jsonResult;
        generateJsonToTable_Top();

    }).catch(err => {
        console.error(err);
        console.error('$error: ', err);
        console.log('$error message: ', err.message);
        alert(err.message);
    });
}
function pasteSpecial2() {
    navigator.clipboard.readText().then(text => {
        excelData2 = text.trim();
        let rows = excelData2.split('\n').map(row => row.trim());
        let headers = rows[0].split('\t').map(head => head.trim());
        let jsonResult = [];
        let i = 1;
        while (i < rows.length) {
            let row = rows[i].split('\t');
            let obj = {};
            let j = 0;
            while (j < headers.length) {
                obj[headers[j].trim()] = row[j] ? row[j].trim() : null;
                j++;
            }
            jsonResult.push(obj);
            i++;
        }
        excelJson_bottom = jsonResult;
        generateJsonToTable_Bottom();

    }).catch(err => {
        console.error(err);
        alert(err.message);
    });
}
function getALIColumns(){
    let i = 0;
    let ths = '';
    let columns = ['Id','p66_Legacy_Agreement_Line_Item_ID__c', 'ALI_Apttus__AgreementLineItem__c_Name', 'p66_Legacy_AGL_Bundle_ID__c'];
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    while(i < excelJson_top.length){
        let item = excelJson_top[i];
        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            if(col == 'Id'){
                tds += `<td class="b_x_td">${item['__Id']}</td>`;
            }else if(col == 'p66_Legacy_Agreement_Line_Item_ID__c'){
                tds += `<td class="b_x_td">-</td>`;
            }else if(col == 'p66_Legacy_AGL_Bundle_ID__c'){
                tds += `<td class="b_x_td">${item['p66_Legacy_AGL_Bundle_ID__c']}</td>`;
            }else if(col == 'ALI_Apttus__AgreementLineItem__c_Name'){
                let startChar = 'AL';
                let replaceValue = 'AL';
                let regex = new RegExp(`^[^${startChar}]*${startChar}`, 'g');
                let result = item['Name'].replace(regex, replaceValue);
                tds += `<td class="b_x_td">${result}</td>`;
            }
            j++;
        }
        trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="b_x_table" id="table_bottom_id">
            <thead class="b_x_thead">
                <tr  class="b_x_tr b_x_th_tr">
                    ${ths}
                </tr>
            </thead>
            <tbody class="b_x_body">
                ${trs}
            </tbody>
        </table>
    `;
    $('.cleftdvs_bottom').html(table);
    let html = $('.cleftdvs_bottom').html();
}
function fillALIColumns(){
    const tableBottom = document.getElementById('table_bottom_id');
    const workbook = XLSX.utils.table_to_book(tableBottom, {sheet: "Sheet1"});
    excelJson_bottom = XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"]);
    console.log('$excelJson_bottom: ',excelJson_bottom);
    let i = 0;
    let ths = '';
    let columns = Object.keys(excelJson_bottom[0]);
    console.log('$columns: ',columns);
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    while(i < excelJson_bottom.length){
        let item = excelJson_bottom[i];
        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            if(col == 'p66_Legacy_Agreement_Line_Item_ID__c'){
                let element = excelJson_top.find(element => {
                    return element['ALI_Apttus__AgreementLineItem__c_Name'] == item['ALI_Apttus__AgreementLineItem__c_Name'];
                });
                console.log('$element: ',element);
                tds += `<td class="b_x_td">${element ? element['ALI_ID'] : '#N/A'}</td>`;
            }else{
                tds += `<td class="b_x_td">${item[col]}</td>`;
            }
            j++;
        }
        trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="b_x_table" id="table_bottom_id">
            <thead class="b_x_thead">
                <tr  class="b_x_tr b_x_th_tr">
                    ${ths}
                </tr>
            </thead>
            <tbody class="b_x_body">
                ${trs}
            </tbody>
        </table>
    `;
    $('.cleftdvs_bottom').html(table);
}
function fillIDTOALI(){
    // console.log('$rPIdAndAliIdMap: ',rPIdAndAliIdMap);
    let i = 0;
    let ths = '';
    let columns = ['__Id','p66_Legacy_Agreement_Line_Item_ID__c'];
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    while(i < excelJson_top.length){
        let item = excelJson_top[i];
        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            if(col == '__Id'){
                tds += `<td class="b_x_td">${item['__Id']}</td>`;
            }else if(col == 'p66_Legacy_Agreement_Line_Item_ID__c'){
                tds += `<td class="b_x_td">${rPIdAndAliIdMap.get(item['__Id']) ? rPIdAndAliIdMap.get(item['__Id']) : '#N/A'}</td>`;
            }
            j++;
        }
        trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="b_x_table" id="table_bottom_id">
            <thead class="b_x_thead">
                <tr  class="b_x_tr b_x_th_tr">
                    ${ths}
                </tr>
            </thead>
            <tbody class="b_x_body">
                ${trs}
            </tbody>
        </table>
    `;
    $('.cleftdvs_bottom').html(table);
    let html = $('.cleftdvs_bottom').html();
}