let excelData1;
let excelData2;
let excelJson_top = null;
let excelJson_bottom = null;
$(document).ready(function() {
    console.clear();
    // $('.txt_area').val('RING4_P66_LEGACY_AGREEMENT_SITE_ID__C\nRING4_P66_LEGACY_AGREEMENT_ID__C');
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
    } else if (btn == 'Clear Top') {
        clearTop();
    } else if (btn == 'Clear Bottom') {
        clearBottom();
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
    }
});

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
        console.error(err);
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
        console.error(err);
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

    /* if(keyColums.length == 2){
        let keyColum1 = keyColums.at(0);
        let keyColum2 = keyColums.at(1);
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
    } */
}