/*
    *Functionality is if you want to prepare diffrent column excel with provided excel: rPUpdateData(columsArray)
*/
let excelData1;
let excelData2;
let excelJson_top = null;
let showLessData = false;
let showLessData_Bottom = false;
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
    } else if (btn == 'Filter') {
        filterRows();
    } else if (btn == 'download-top') {
        var wb = XLSX.utils.table_to_book(document.getElementById("table_top_id"));
        XLSX.writeFile(wb, "SheetJSTable.xlsx");
    } else if (btn == 'download-bottom') {
        var wb = XLSX.utils.table_to_book(document.getElementById("table_bottom_id"));
        XLSX.writeFile(wb, "SheetJSTable.xlsx");
    }else if (btn == 'Copy Top') {
        let html = $('.cleftdvs_top').html();
        // html = html.replace(/(<td\b[^>]*?)\s*style="[^"]*"/g, '$1');
        const blob = new Blob([html], { type: "text/html" });
        navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
        let label = $(this).text();
        $(this).text('Copied.');
        setTimeout( () => {
            $(this).text(label);
        }, 1000);
    } else if (btn == 'Copy Bottom') {
        let html = $('.cleftdvs_bottom').html();
        // html = html.replace(/(<td\b[^>]*?)\s*style="[^"]*"/g, '$1');
        const blob = new Blob([html], { type: "text/html" });
        navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
        let label = $(this).text();
        $(this).text('Copied.');
        setTimeout( () => {
            $(this).text(label);
        }, 1000);
    } else if (btn == 'Copy Formatted') {
        /* let html = $('.cleftdvs_bottom').html();
        copyToCLipboard_TimeOut(html, $(this), $(this).text().trim(), 1000, 'Copied.'); */
        let html = $('.cleftdvs_bottom').html();
        const blob = new Blob([html], { type: "text/html" });
        navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
        let label = $(this).text();
        $(this).text('Copied.');
        setTimeout( () => {
            $(this).text(label);
        }, 1000);
    } else if (btn == 'Create Map') {
        let columsArray = $('.txt_area').val().split('\n');
        createMap(columsArray);
    } else if (btn == 'Show Less Or More Data-Top') {
        let text = $(this).text();
        console.log('$text: ',text);
        if(text == 'Show Less Data'){
            $(this).text('Show More Data');
            showLessData = false;
            if(excelJson_top.length){
                generateJsonToTable_Top();
            }
        }else{
            $(this).text('Show Less Data');
            showLessData = true;
        }
        console.log('$showLessData: ',showLessData);
    } else if (btn == 'Show Less Or More Data-Bottom') {
        let text = $(this).text();
        console.log('$text: ',text);
        if(text == 'Show Less Data'){
            $(this).text('Show More Data');
            showLessData_Bottom = false;
            if(excelJson_bottom.length){
                generateJsonToTable_Bottom();
            }
        }else{
            $(this).text('Show Less Data');
            showLessData_Bottom = true;
        }
        console.log('$showLessData_Bottom: ',showLessData_Bottom);
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
    } else if (btn == 'Fill Data-RP') {
        fillDataRP();
    } else if (btn == 'Fill Columns-RP') {
        fillColumnsRP();
    } else if (btn == 'Fill Data-AO') {
        fillDataAO();
    } else if (btn == 'Fill Columns-AO') {
        fillColumnsAO();
    } else if (btn == 'Get Common Values') {
        let columsArray = $('.txt_area').val().split('\n');
        getCommonValues(columsArray);
    } else if (btn == 'Show Related') {
        let columsArray = $('.txt_area').val().split('\n');
        showRelated(columsArray);
    } else if (btn == 'Get Sum') {
        let columsArray = $('.txt_area').val().split('\n');
        getSum(columsArray);
    } else if (btn == 'Remove Duplicates') {
        let columsArray = $('.txt_area').val().split('\n');
        removeDuplicates(columsArray);
    } else if (btn == 'Get Contains') {
        let columsArray = $('.txt_area').val().split('\n');
        getContains(columsArray);
    } else if (btn == 'Json To Excel') {
        jsonToExcel();
    }
});

function jsonToExcel(){
    let jsonText = $('.txt_area').val();
    console.log('$jsonText: ',jsonText);

    excelJson_top = JSON.parse(jsonText);

    console.log('$excelJson_top: ',excelJson_top);

    let columns = Object.keys(excelJson_top[0]);
    // console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    //console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    while(i < excelJson_top.length){
        let item = excelJson_top[i];
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
    $('.cleftdvs_top').html(table);
}

function getContains(columsArray){
    columsArray = columsArray.filter(Boolean);
    console.log('$columsArray: ',columsArray);
    let columns = Object.keys(excelJson_top.at(0));
    console.log('$columns: ',columns);
    let filterValue = $('.inp_col').val().trim().toLowerCase();
    console.log('$filterValue: ', filterValue);
    let filterArray;
    if(filterValue.includes('|')){
        filterArray = filterValue.split('|').filter(Boolean).map(v => v.trim().toLowerCase());
        console.log('$filterArray: ',filterArray);
    }

    console.log('$filterArray: ',filterArray);

    let filterColum = columsArray.at(0);
    console.log('$filterColum: ',filterColum);

    if(filterValue && filterColum){

        let i = 0;
        let trs = '';
        let ths = '';
        
        while (i < columns.length) {
            let col = columns[i];
            ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
            i++;
        }

        i = 0;
        let filteredRowsCount = 0;
        while(i < excelJson_top.length){
            let item = excelJson_top[i];
            let addRow = false;
            if(filterValue == 'null' && !item[filterColum]){
                addRow = true;
                filteredRowsCount ++;
            }else if(filterValue == '!null' && item[filterColum]){
                addRow = true;
                filteredRowsCount ++;
            }else if(!filterArray && item[filterColum] && item[filterColum].trim().toLowerCase().includes(filterValue)){
                addRow = true;
                filteredRowsCount ++;
            }else if(filterArray && item[filterColum]){
                let matched = false;
                filterArray.forEach(f => {
                    if(!matched && item[filterColum].trim().toLowerCase().includes(f)){
                        matched = true;
                    }
                });
                if(matched){
                    addRow = true;
                    filteredRowsCount ++;
                }

            }

            if(addRow){
                let j = 0;
                let tds = '';
                while(j < columns.length){
                    let col = columns[j];
                    tds += `<td class="b_x_td">${getIdelValue(item[col])}</td>`;
                    j++;
                }
                trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
            }

            i++;
        }
        $('.inp_col').val(`${filteredRowsCount} / ${excelJson_top.length}`);
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

function removeDuplicates(columnsArray){
    columnsArray = columnsArray.filter(Boolean);
    console.log('$columnsArray: ',columnsArray);
    let columns = Object.keys(excelJson_top.at(0));
    console.log('$columns: ',columns);
    if(columnsArray.length && columnsArray.length <= 2){
        let columnOne = columnsArray.at(0);
        let columnTwo = columnsArray.at(1);
        let rowsMap = new Map();

        let i = 0;
        while(i < excelJson_top.length){
            let item = excelJson_top[i];

            let itemValue = '';
            if(columnOne && columnTwo){
                itemValue = item[columnOne] + item[columnTwo];
                console.log('$itemValue: ',itemValue);
                if(itemValue)
                    itemValue = itemValue.trim().toLowerCase();
            }else{
                if(item[columnOne]){
                    itemValue = item[columnOne].trim().toLowerCase();
                }else{
                    itemValue = `null_${i}`;
                }
                console.log('$itemValue: ',itemValue);
            }

            if(!rowsMap.has(itemValue)){
                rowsMap.set(itemValue, item);
            }else{
                console.log('Has Already: ' + itemValue);
                console.log('%c$dup-:', 'color: red;', itemValue);
            }

            i++;
        }
        console.log('$rowsMap: ',rowsMap);

        i = 0;
        let trs = '';
        let ths = '';
        
        while (i < columns.length) {
            let col = columns[i];
            ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
            i++;
        }
        i = 0;

        let uniqueRows = Array.from(rowsMap.values());
        console.log('$uniqueRows: ',uniqueRows);

        $('.inp_col').val(`${uniqueRows.length} / ${excelJson_top.length}`);

        while(i < uniqueRows.length){
            let item = uniqueRows[i];
            let j = 0;
            let tds = '';
            while(j < columns.length){
                let col = columns[j];
                tds += `<td class="b_x_td">${item[col]}</td>`;
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

function getSum(columns){
    columns = columns.filter(Boolean);
    console.log('$columns: ',columns);
    if(columns.length){
        let i = 0;
        let sum = 0;
        let col = columns.at(0);
        while(i < excelJson_top.length){
            let item = excelJson_top[i];
            sum += item[col] ?? 0;
            i++;
        }
        console.log('$sum: ',sum);
        $('.inp_col').val(sum);
    }
}


function showRelated(columns){
    columns = columns.filter(Boolean);
    // columns = ['p66_Rebate_Program__c','p66_Rebate_Program_Member_Payout__c'];
    if(columns.length == 2){
        let col1 = columns[0];
        let col2 = columns[1];
        let mapDataColor = new Map();

        let i = 0;
        while(i < excelJson_top.length){
            let item = excelJson_top[i];

            if(!mapDataColor.has(item[col1])){
                mapDataColor.set(item[col1], '#'+(Math.random().toString(16)+'00000').slice(2,8));
            }

            i++;
        }
        console.log('$mapDataColor: ',mapDataColor);

        i = 0;
        let trs = '';
        let ths = '';
        while (i < columns.length) {
            let col = columns[i];
            ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
            i++;
        }
        i = 0;
        while(i < excelJson_top.length){
            let item = excelJson_top[i];
            let j = 0;
            let tds = '';
            while(j < columns.length){
                let col = columns[j];
                if(col == col1){
                    let style = `style="background-color:${mapDataColor.get(item[col1])}"`;
                    tds += `<td class="b_x_td" ${style}>${item[col1]}</td>`;
                }else if(col == 'p66_Rebate_Program_Member_Payout__c'){
                    let style = `style="background-color:${mapDataColor.get(item[col1])}"`;
                    tds += `<td class="b_x_td" ${style}>${item[col2]}</td>`;
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
function getCommonValues(columsArray){
    columsArray = columsArray.filter(Boolean);
    if(columsArray.length == 2){
        let column1 = columsArray.at(0);
        let column2 = columsArray.at(1);
        console.log('$column1: ',column1);
        console.log('$column2: ',column2);
        
        console.log('$excelJson_top: ',excelJson_top);
        console.log('$excelJson_bottom: ',excelJson_bottom);

        let i = 0;
        let commonValuesArray = [];
        while(i < excelJson_top.length){
            let item = excelJson_top[i];

            let j = 0;
            while(j < excelJson_bottom.length){
                let itemJ = excelJson_bottom[j];

                if(item[column1].trim() == itemJ[column2].trim()){
                    commonValuesArray.push(item[column1].trim());
                }

                j++;
            }

            i++;
        }
        $('.txt_area').val(commonValuesArray.filter(Boolean).join('\n'));
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fillColumnsAO(){
    
    // console.log('$siteIdAliIdAndRPIdMap: ',siteIdAliIdAndRPIdMap);
    // console.log('$legacylAgreementlSitelIDAndAccountIdMap: ',legacylAgreementlSitelIDAndAccountIdMap);
    let jsonBottomMap;
    if(excelJson_bottom){
        let indx = 0;
        jsonBottomMap = new Map();
        while(indx < excelJson_bottom.length){
            let rebateProgramId = '#N/A';
            
            if(excelJson_bottom[indx]['__Id']){
                rebateProgramId = excelJson_bottom[indx]['__Id'];
            }else if(excelJson_bottom[indx]['ID']){
                rebateProgramId = excelJson_bottom[indx]['ID'];
            }else if(excelJson_bottom[indx]['Id']){
                rebateProgramId = excelJson_bottom[indx]['Id'];
            }else if(excelJson_bottom[indx]['id']){
                rebateProgramId = excelJson_bottom[indx]['id'];
            }else if(excelJson_bottom[indx]['recordId']){
                rebateProgramId = excelJson_bottom[indx]['recordId'];
            }else if(excelJson_bottom[indx]['__ID']){
                rebateProgramId = excelJson_bottom[indx]['__ID'];
            }
            jsonBottomMap.set(excelJson_bottom[indx]['p66_Legacy_Agreement_Site_ID__c']+excelJson_bottom[indx]['p66_Legacy_Agreement_Line_Item_ID__c'],rebateProgramId);
            indx++;
        }
    }
    console.log('$jsonBottomMap: ',jsonBottomMap);


    let i = 0;
    let ths = '';
    let columns = ['p66_Legacy_Accounting_Option_ID__c', 'Agreement_Site__c', 'ALI_ID', 'p66_Account_Code__c', 
        'p66_Account_Ship_To__c', 'p66_Application_Name__c', 'p66_Company_Code__c', 'p66_Document_Type_SA__c', 
        'p66_Material_Code__c', 'p66_Payment_Terms__c', 'p66_Posting_Key__c', 'p66_Tax__c', 'p66_Transaction_Type__c', 
        'p66_Additional_Invoice_Text__c', 'p66_Plant_Code__c', 'p66_Rebate_Program__c', 'p66_Description__c'];
    while (i < columns.length) {
        let col = columns[i];
        let style = ``;
        if(col == 'Agreement_Site__c' || col == 'ALI_ID'){
            style = `style="background-color:#ffff6a"`;
        }
        ths += `<td class="b_x_th" ${style}>${getIdelValue(col)}</td>`;
        i++;
    }

    i = 0;
    let trs = '';
    
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

    let progressBarHtml = `
        <div class="progress-wrap progress" data-progress-percent="0">
            <div class="progress-bar progress"></div>
        </div>
    `;
    $('.progress_td').html(progressBarHtml);

    while(i < excelJson_top.length){
        let item = excelJson_top[i];
        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            if(col == 'p66_Legacy_Accounting_Option_ID__c'){
                tds += `<td class="b_x_td">${getIdelValue(item['Id'])}</td>`;
            }else if(col == 'Agreement_Site__c'){
                tds += `<td class="b_x_td">${getIdelValue(item['Agreement_Site__c'])}</td>`;
            }else if(col == 'ALI_ID'){
                tds += `<td class="b_x_td">${getIdelValue(item['ALI_ID'])}</td>`;
            }else if(col == 'p66_Account_Code__c'){
                tds += `<td class="b_x_td">${getIdelValue(item['Account_Code__c'])}</td>`;
            }else if(col == 'p66_Account_Ship_To__c'){
                let mapKey = item['Agreement_Site__c'];
                let accountId = legacylAgreementlSitelIDAndAccountIdMap.has(mapKey) ? legacylAgreementlSitelIDAndAccountIdMap.get(mapKey) : '#N/A';
                tds += `<td class="b_x_td">${accountId}</td>`;
            }else if(col == 'p66_Application_Name__c'){
                tds += `<td class="b_x_td">${getIdelValue(item['Application_Name__c'])}</td>`;
            }else if(col == 'p66_Company_Code__c'){
                tds += `<td class="b_x_td">${getIdelValue(item['Company_Code__c'])}</td>`;
            }else if(col == 'p66_Document_Type_SA__c'){
                tds += `<td class="b_x_td">${getIdelValue(item['Document_Type_SA__c'])}</td>`;
            }else if(col == 'p66_Material_Code__c'){
                tds += `<td class="b_x_td">${getIdelValue(item['Material_Code__c'])}</td>`;
            }else if(col == 'p66_Payment_Terms__c'){
                tds += `<td class="b_x_td">${getIdelValue(item['Payment_Terms__c'])}</td>`;
            }else if(col == 'p66_Posting_Key__c'){
                tds += `<td class="b_x_td">${getIdelValue(item['Posting_Key__c'])}</td>`;
            }else if(col == 'p66_Tax__c'){
                tds += `<td class="b_x_td">${getIdelValue(item['Tax__c'])}</td>`;
            }else if(col == 'p66_Transaction_Type__c'){
                tds += `<td class="b_x_td">${getIdelValue(item['Transaction_Type__c'])}</td>`;
            }else if(col == 'p66_Additional_Invoice_Text__c'){
                tds += `<td class="b_x_td">${getIdelValue(item['Additional_Invoice_Text__c'])}</td>`;
            }else if(col == 'p66_Plant_Code__c'){
                tds += `<td class="b_x_td">${getIdelValue(item['Plant_Code_New__c'])}</td>`;
            }else if(col == 'p66_Rebate_Program__c'){
                if(jsonBottomMap){
                    let mapKey = item['Agreement_Site__c']+item['ALI_ID'];
                    let rebetProgramId = jsonBottomMap.has(mapKey) ? jsonBottomMap.get(mapKey) : '#N/A';
                    if(rebetProgramId == '#N/A'){
                        rebetProgramId = siteIdAliIdAndRPIdMap.has(mapKey) ? siteIdAliIdAndRPIdMap.get(mapKey) : '#N/A';
                    }
                    tds += `<td class="b_x_td">${rebetProgramId}</td>`;
                }else{
                    let mapKey = item['Agreement_Site__c']+item['ALI_ID'];
                    let rebetProgramId = siteIdAliIdAndRPIdMap.has(mapKey) ? siteIdAliIdAndRPIdMap.get(mapKey) : '#N/A';
                    tds += `<td class="b_x_td">${rebetProgramId}</td>`;
                }

            }else if(col == 'p66_Description__c'){
                tds += `<td class="b_x_td">${getIdelValue(item['Description'])}</td>`;
            }
            j++;
        }
        $('.btn-blank').text(`Excel Processed - [ ${i + 1} / ${excelJson_top.length} ]`);
        // Calculate progress percentage based on array length
        var percent = ((i + 1) / excelJson_top.length) * 100;

        // Update the progress bar
        updateProgressBar(percent);
        if(i < 25){
            $('.b_x_body').append(`<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`);
            await delay(40);
        }else{
            trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
            await delay(1);
        }
        i++;
    }
    
    $('.b_x_body').append(trs);
    // $('.progress-wrap').css('background-color','#EFEFEF');
    $('.progress_td').html('');
    $('.btn-blank').text('Blank');
    let b_x_table = document.getElementById("table_bottom_id");
    b_x_table.scrollIntoView({ behavior: 'smooth', block: 'end' });
    $('.btn-blank').text('Blank');
}

async function fillColumnsRP(){
    
    let isLegacy = $('.txt_area').val();
    let productCode = $('.inp_col').val();
    let codeProductRpDetails = JSON.parse(productCodeRPDetailJson);
    let prodRPDetail = codeProductRpDetails.find(element => {
        return element.ProductCode == productCode;
    });

    if(productCode && prodRPDetail && (isLegacy == 'true' || isLegacy == 'false')){
        let i = 0;
        let ths = '';
        let columns = ['p66_IsMigrated__c', 'p66_IsLegacy__c', 'p66_Sold_To_Account__c', 'p66_Ship_To_Account__c', 'p66_Child_Contract__c',
                        'Contract Number', 'p66_Product__c', 'p66_Parent_Rebate_Program__c', 'Parent Rebate Program Name', 
                        'ALI_Apttus__AgreementLineItem__c_Name', 'Name', 'p66_Legacy_Products_List__c', 'p66_Legacy_Agreement_Site_ID__c', 
                        'p66_Legacy_Agreement_ID__c', 'p66_Legacy_Agreement_Line_Item_ID__c', 'p66_Base_Price__c', 'p66_Rebate_Rate_CPG__c', 
                        'p66_Base_Price_Method__c', 'p66_Comments__c', 'Description', 'p66_Exclude_from_Contractual_Balance__c', 'Frequency', 
                        'p66_Rebate_Program_Frequency__c', 'p66_Frequency__c', 'p66_Incentive_Type__c', 'p66_Is_Financial_Schedule__c', 
                        'p66_Payment_Processing_Day__c', 'p66_Price_Method__c', 'p66_Pricing_UOM__c', 'p66_Rebate_Program_Status__c', 'p66_Volume_Basis__c', 
                        'p66_Volume_Source__c', 'p66_Price_Type__c', 'p66_Legacy_Product_category__c', 'p66_Tier_1_CPG__c', 'p66_Tier_1_Volume__c', 
                        'p66_Tier_1_Start_Date__c', 'p66_Tier_1_End_Date__c', 'p66_Tier_1_TLA_Base_Price_CPG__c', 'p66_Tier_2_CPG__c', 'p66_Tier_2_Volume__c', 
                        'p66_Tier_2_Start_Date__c', 'p66_Tier_2_TLA_Base_Price_CPG__c', 'p66_Tier_2_End_Date__c', 'p66_Tier_3_CPG__c', 'p66_Tier_3_Volume__c', 
                        'p66_Tier_4_CPG__c', 'p66_Tier_4_Volume__c', 'p66_Tier_6_CPG__c', 'p66_Tier_6_Volume__c', 'p66_Withholding__c', 'p66_Trueup_period_months__c', 
                        'p66_ContractualAmoritizationDelay_months__c', 'p66_Contractual_Amortization_Method__c', 'p66_ContractualAmoritizationTermsmonths__c', 
                        'p66_Contractual_Rolling_Balance_months__c', 'p66_Out_Standing_Balance__c', 'p66_Legacy_AGL_Bundle_ID__c', 
                        'p66_True_Up_Base_price__c', 'p66_ProgramEffective_Date__c', 'EndDate', 'StartDate', 'p66_Term__c', 'CreatedById','p66_Legacy_Agreement_Line_Item_Status__c'
                    ];
        while (i < columns.length) {
            let col = columns[i];
            ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
            i++;
        }

        
        i = 0;
        let trs = '';
        
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

        let progressBarHtml = `
            <div class="progress-wrap progress" data-progress-percent="0">
                <div class="progress-bar progress"></div>
            </div>
        `;
        $('.progress_td').html(progressBarHtml);

        while(i < excelJson_top.length){
            let item = excelJson_top[i];
            let j = 0;
            let tds = '';
            while(j < columns.length){
                let col = columns[j];
                if(col == 'p66_IsMigrated__c'){
                    tds += `<td class="b_x_td">TRUE</td>`;
                }else if(col == 'p66_IsLegacy__c'){
                    tds += `<td class="b_x_td">${isLegacy.toUpperCase()}</td>`;
                }else if(col == 'p66_Sold_To_Account__c'){
                    let key = item['ALI_Soldto__c'];
                    let accountId = legacyAccountKeyAndSfIDMap.has(key) ? legacyAccountKeyAndSfIDMap.get(key) : '#N/A';
                    tds += `<td class="b_x_td">${accountId}</td>`;
                }else if(col == 'p66_Ship_To_Account__c'){
                    let key = item['ALI_ShipTo__c'];
                    let accountId = legacyAccountKeyAndSfIDMap.has(key) ? legacyAccountKeyAndSfIDMap.get(key) : '#N/A';
                    tds += `<td class="b_x_td">${accountId}</td>`;
                }else if(col == 'p66_Child_Contract__c'){
                    let mapKey = `${item['ALI_Agreement_Site__c']}${item['ALI_Apttus__AgreementId__c']}`;
                    let contractId = ring4ContractIdsMap.has(mapKey) ? ring4ContractIdsMap.get(mapKey) : '#N/A';
                    tds += `<td class="b_x_td">${contractId}</td>`;
                }else if(col == 'Contract Number'){
                    let mapKey = `${item['ALI_Agreement_Site__c']}${item['ALI_Apttus__AgreementId__c']}`;
                    let contractNumber = rin4ContractNumbersMap.has(mapKey) ? rin4ContractNumbersMap.get(mapKey) : '#N/A';
                    tds += `<td class="b_x_td">${contractNumber}</td>`;
                }else if(col == 'p66_Product__c'){
                    tds += `<td class="b_x_td">${prodRPDetail.Id}</td>`;
                }else if(col == 'p66_Parent_Rebate_Program__c'){
                    tds += `<td class="b_x_td">${prodRPDetail.p66_Rebate_Program__c}</td>`;
                }else if(col == 'Parent Rebate Program Name'){
                    tds += `<td class="b_x_td">${prodRPDetail.p66_Rebate_Program__r.Name}</td>`;
                }else if(col == 'ALI_Apttus__AgreementLineItem__c_Name'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Apttus__AgreementLineItem__c_Name'])}</td>`;
                }else if(col == 'Name'){
                    let name;
                    let mapKey = `${item['ALI_Agreement_Site__c']}${item['ALI_Apttus__AgreementId__c']}`;
                    let contractNumber = rin4ContractNumbersMap.has(mapKey) ? rin4ContractNumbersMap.get(mapKey) : '#N/A';
                    if(isLegacy == 'false'){
                        name = prodRPDetail.p66_Rebate_Program__r.Name + '-' + contractNumber + '-' + item['ALI_Apttus__AgreementLineItem__c_Name'];
                    }else{
                        name = 'LRP-'+ item['ALI_Apttus_CMConfig__OptionId__Name'] + '-' + prodRPDetail.p66_Rebate_Program__r.Name + '-' + contractNumber + '-' + item['ALI_Apttus__AgreementLineItem__c_Name'];
                    }
                    tds += `<td class="b_x_td">${name}</td>`;
                }else if(col == 'p66_Legacy_Products_List__c'){
                    tds += `<td class="b_x_td">${item['ALI_Apttus__Product__Name']}-${item['ALI_Apttus_CMConfig__OptionId__Name']}</td>`;
                }else if(col == 'p66_Legacy_Agreement_Site_ID__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Agreement_Site__c'])}</td>`;
                }else if(col == 'p66_Legacy_Agreement_ID__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Apttus__AgreementId__c'])}</td>`;
                }else if(col == 'p66_Legacy_Agreement_Line_Item_ID__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_ID'])}</td>`;
                }else if(col == 'p66_Base_Price__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Apttus_CMConfig_BasePrice'])}</td>`;
                }else if(col == 'p66_Rebate_Rate_CPG__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Apttus_CMConfig_BasePrice'])}</td>`;
                }else if(col == 'p66_Base_Price_Method__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Apttus_CMConfig_BasePriceMethod'])}</td>`;
                }else if(col == 'p66_Comments__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Apttus_CMConfig_Comments'])}</td>`;
                }else if(col == 'Description'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Apttus__Description__c'])}</td>`;
                }else if(col == 'p66_Exclude_from_Contractual_Balance__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_p66_Exclude_from_Contractual_Balance'])}</td>`;
                }else if(col == 'Frequency'){
                    let freq = item['ALI_Apttus_CMConfig__Frequency'];
                    if(freq && freq.toLowerCase() == 'one time'){
                        freq = 'ProgramStartAndEndDate';
                    }
                    tds += `<td class="b_x_td">${getIdelValue(freq)}</td>`;
                }else if(col == 'p66_Rebate_Program_Frequency__c'){
                    let freq = item['ALI_Apttus_CMConfig__Frequency'];
                    if(freq && freq.toLowerCase() == 'one time'){
                        freq = 'Upfront';
                    }
                    tds += `<td class="b_x_td">${getIdelValue(freq)}</td>`;
                }else if(col == 'p66_Frequency__c'){
                    let freq = item['ALI_Apttus_CMConfig__Frequency'];
                    if(freq && freq.toLowerCase() == 'one time'){
                        freq = 'Upfront';
                    }
                    tds += `<td class="b_x_td">${getIdelValue(freq)}</td>`;
                }else if(col == 'p66_Incentive_Type__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Apttus_CMConfig__IncentiveType'])}</td>`;
                }else if(col == 'p66_Is_Financial_Schedule__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Ammortized'])}</td>`;
                }else if(col == 'p66_Payment_Processing_Day__c'){
                    let ppday = item['ALI_Payment_Processing_day'];
                    if(ppday && (ppday == 1 || ppday == '1')){
                        ppday = '1 Working Day';
                    }else if(ppday && (ppday == 2 || ppday == '2')){
                        ppday = '2 Working Days';
                    }else if(ppday && (ppday == 10 || ppday == '10')){
                        ppday = '10 Working Days';
                    }
                    tds += `<td class="b_x_td">${getIdelValue(ppday)}</td>`;
                }else if(col == 'p66_Price_Method__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['bundle_Apttus_CMConfig__PriceMethod__c'])}</td>`;
                }else if(col == 'p66_Pricing_UOM__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Apttus_CMConfig__Uom__c'])}</td>`;
                }else if(col == 'p66_Rebate_Program_Status__c'){
                    tds += `<td class="b_x_td">Draft</td>`;
                }else if(col == 'p66_Volume_Basis__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Volume_Basis'])}</td>`;
                }else if(col == 'p66_Volume_Source__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Volume_Source'])}</td>`;
                }else if(col == 'p66_Price_Type__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Price_Type'])}</td>`;
                }else if(col == 'p66_Legacy_Product_category__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Product_category'])}</td>`;
                }else if(col == 'p66_Tier_1_CPG__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['p66_Tier_1_CPG__c'])}</td>`;
                }else if(col == 'p66_Tier_1_Volume__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['p66_Tier_1_Volume__c'])}</td>`;
                }else if(col == 'p66_Tier_1_Start_Date__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['--'])}</td>`;
                }else if(col == 'p66_Tier_1_End_Date__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['--'])}</td>`;
                }else if(col == 'p66_Tier_1_TLA_Base_Price_CPG__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['p66_Tier_1_TLA_Base_Price_CPG__c'])}</td>`;
                }else if(col == 'p66_Tier_2_CPG__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['p66_Tier_2_CPG__c'])}</td>`;
                }else if(col == 'p66_Tier_2_Volume__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['p66_Tier_2_Volume__c'])}</td>`;
                }else if(col == 'p66_Tier_2_Start_Date__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['--'])}</td>`;
                }else if(col == 'p66_Tier_2_TLA_Base_Price_CPG__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['p66_Tier_2_TLA_Base_Price_CPG__c'])}</td>`;
                }else if(col == 'p66_Tier_2_End_Date__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['--'])}</td>`;
                }else if(col == 'p66_Tier_3_CPG__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['p66_Tier_3_CPG__c'])}</td>`;
                }else if(col == 'p66_Tier_3_Volume__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['p66_Tier_3_Volume__c'])}</td>`;
                }else if(col == 'p66_Tier_4_CPG__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['p66_Tier_4_CPG__c'])}</td>`;
                }else if(col == 'p66_Tier_4_Volume__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['p66_Tier_4_Volume__c'])}</td>`;
                }else if(col == 'p66_Tier_6_CPG__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['p66_Tier_6_CPG__c'])}</td>`;
                }else if(col == 'p66_Tier_6_Volume__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['p66_Tier_6_Volume__c'])}</td>`;
                }else if(col == 'p66_Withholding__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['p66_Withholding__c'])}</td>`;
                }else if(col == 'p66_Trueup_period_months__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['p66_Trueup_period_months__c'])}</td>`;
                }else if(col == 'p66_ContractualAmoritizationDelay_months__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['bundle_ALI_Contractual_Amoritization_Delay'])}</td>`;
                }else if(col == 'p66_Contractual_Amortization_Method__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['bundle_ALI_Contractual_Amortization_method'])}</td>`;
                }else if(col == 'p66_ContractualAmoritizationTermsmonths__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['derived_SF_contractual_term'])}</td>`;
                }else if(col == 'p66_Contractual_Rolling_Balance_months__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['bundle_ALI_Contractual_rolling_Balance'])}</td>`;
                }else if(col == 'p66_Out_Standing_Balance__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['bundle_Recovered_Contractual_Balance__c'])}</td>`;
                }else if(col == 'p66_Legacy_AGL_Bundle_ID__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['bundle_ALI_ID'])}</td>`;
                }else if(col == 'p66_True_Up_Base_price__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['--'])}</td>`;
                }else if(col == 'p66_ProgramEffective_Date__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Apttus_CMConfig__EffectiveDt'])}</td>`;
                }else if(col == 'EndDate'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Apttus_CMConfig__EndDt'])}</td>`;
                }else if(col == 'StartDate'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Apttus_CMConfig__StartDt'])}</td>`;
                }else if(col == 'p66_Term__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['bundle_Contractual_Amortization_Term__C'])}</td>`;
                }else if(col == 'CreatedById'){
                    tds += `<td class="b_x_td">0054x000007ae7TAAQ</td>`;
                }else if(col == 'p66_Legacy_Agreement_Line_Item_Status__c'){
                    tds += `<td class="b_x_td">${getIdelValue(item['ALI_Status'])}</td>`;
                }else{
                    tds += `<td class="b_x_td">-</td>`;
                }
                j++;
            }
            $('.btn-blank').text(`Excel Processed - [ ${i + 1} / ${excelJson_top.length} ]`);
            // Calculate progress percentage based on array length
            var percent = ((i + 1) / excelJson_top.length) * 100;

            // Update the progress bar
            updateProgressBar(percent);
            if(i < 25){
                $('.b_x_body').append(`<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`);
                await delay(40);
            }else{
                trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
                await delay(1);
            }
            i++;
        }
        
        $('.b_x_body').append(trs);
        // $('.progress-wrap').css('background-color','#EFEFEF');
        $('.progress_td').html('');
        $('.btn-blank').text('Blank');
        let b_x_table = document.getElementById("table_bottom_id");
        b_x_table.scrollIntoView({ behavior: 'smooth', block: 'end' });
        $('.btn-blank').text('Blank');
    }
}
// Function to update the progress bar
function updateProgressBar(percent) {
    var getProgressWrapWidth = $('.progress-wrap').width();
    var progressTotal = (percent / 100) * getProgressWrapWidth;
    var animationLength = 1; // Shorter animation for smooth progress

    // Animate the progress bar width
    $('.progress-bar').stop().animate({
    left: progressTotal
    }, animationLength);
}
function fillDataAO(){
    // $('.inp_col').val('R4V4');
    // $('.txt_area').val('true');
    let data =`Id	Name	Account_Code__c	Agreement_Site__c	Application_Name__c	Company_Code__c	Document_Type_SA__c	Material_Code__c	Payment_Terms__c	Posting_Key__c	Tax__c	Transaction_Type__c	Additional_Invoice_Text__c	Plant_Code_New__c	ALI_ID	Description	Terminal_Code
a4D0e000000EsZ2EAK	ALIAO-471652	42000000	a4G60000000LKXQEA4	MDA	1011	SA	11313620		40	Y0	Clawback Amortization DR	N/A		a140e000006Ra78AAC	BIPFR Clearing after Clawback	03H9
a4D0e000000EsZ3EAK	ALIAO-471653		a4G60000000LKXQEA4	MDA	1011	SA	11313617	N03			Rebate	N/A		a140e000006Ra78AAC	BIPFR Quarterly Rebate	03H9
a4D0e000000EsZ4EAK	ALIAO-471654	42000000	a4G60000000LKXQEA4	MDA	1011	SA	11313620		40	Y0	Rebate Amortization DR	N/A		a140e000006Ra78AAC	BIPFR Monthly Amortization	03H9
a4D0e000000EsZ5EAK	ALIAO-471655	18000000	a4G60000000LKXQEA4	MDA	1011	SA	11313620		50	Y0	Clawback Amortization CR	N/A		a140e000006Ra78AAC	BIPFR Clearing after Clawback	03H9
a4D0e000000EsZ6EAK	ALIAO-471656	42000000	a4G60000000LKXQEA4	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup DR	N/A		a140e000006Ra78AAC	BIPFR Quarterly Trueup Amortization	03H9
a4D0e000000EsZ7EAK	ALIAO-471657	18000000	a4G60000000LKXQEA4	MDA	1011	SA	11313620		50	Y0	Rebate Amortization CR	N/A		a140e000006Ra78AAC	BIPFR Monthly Amortization	03H9
a4D0e000000EsZ8EAK	ALIAO-471658	18000000	a4G60000000LKXQEA4	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup CR	N/A		a140e000006Ra78AAC	BIPFR Quarterly Trueup Amortization	03H9
a4D0e000000EsZ9EAK	ALIAO-471659		a4G60000000LKXQEA4	MDA	1011	SA	11313617	N30			Clawback	N/A		a140e000006Ra78AAC	BIPFR Clawback	03H9
a4D0e000000EsZAEA0	ALIAO-471660	18000000	a4G60000000LKXQEA4	MDA	1011	SA	11313617		50	Y0	Termination Contra CR	N/A		a140e000006Ra78AAC	BIPFR Clearing after Clawback	03H9
a4D0e000000EsZBEA0	ALIAO-471661	18000000	a4G60000000LKXQEA4	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup Contra DR	N/A		a140e000006Ra78AAC	BIPFR Quarterly Trueup Amortization	03H9
a4D0e000000EsZCEA0	ALIAO-471662	42000000	a4G60000000LKXQEA4	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup Contra CR	N/A		a140e000006Ra78AAC	BIPFR Quarterly Trueup Amortization	03H9
a4D0e000000EsZDEA0	ALIAO-471663	18000000	a4G60000000LKXQEA4	MDA	1011	SA	11313617		40	Y0	Termination DR	N/A		a140e000006Ra78AAC	BIPFR Clearing after Clawback	03H9
a4D0e000000EsZEEA0	ALIAO-471664	42000000	a4G60000000LKXQEA4	MDA	1011	SA	11313617		50	Y0	Termination CR	N/A		a140e000006Ra78AAC	BIPFR Clearing after Clawback	03H9
a4D0e000000EsZFEA0	ALIAO-471665	42000000	a4G60000000LKXQEA4	MDA	1011	SA	11313617		40	Y0	Termination Contra DR	N/A		a140e000006Ra78AAC	BIPFR Clearing after Clawback	03H9
a4D0e000000NUB0EAO	ALIAO-565329	42000000	a4G60000000LEVBEA4	MDA	1011	SA	11313620		40	Y0	Clawback Amortization DR	N/A		a140e000008y1CsAAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NUB1EAO	ALIAO-565330		a4G60000000LEVBEA4	MDA	1011	SA	11313617	N03			Rebate	N/A		a140e000008y1CsAAI	BIPFR Quarterly Rebate	03MQ
a4D0e000000NUB2EAO	ALIAO-565331	42000000	a4G60000000LEVBEA4	MDA	1011	SA	11313620		40	Y0	Rebate Amortization DR	N/A		a140e000008y1CsAAI	BIPFR Monthly Amortization	03MQ
a4D0e000000NUB3EAO	ALIAO-565332	18000000	a4G60000000LEVBEA4	MDA	1011	SA	11313620		50	Y0	Clawback Amortization CR	N/A		a140e000008y1CsAAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NUB4EAO	ALIAO-565333	42000000	a4G60000000LEVBEA4	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup DR	N/A		a140e000008y1CsAAI	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e000000NUB5EAO	ALIAO-565334	18000000	a4G60000000LEVBEA4	MDA	1011	SA	11313620		50	Y0	Rebate Amortization CR	N/A		a140e000008y1CsAAI	BIPFR Monthly Amortization	03MQ
a4D0e000000NUB6EAO	ALIAO-565335	18000000	a4G60000000LEVBEA4	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup CR	N/A		a140e000008y1CsAAI	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e000000NUB7EAO	ALIAO-565336		a4G60000000LEVBEA4	MDA	1011	SA	11313617	N30			Clawback	N/A		a140e000008y1CsAAI	BIPFR Clawback	03MQ
a4D0e000000NUB8EAO	ALIAO-565337	18000000	a4G60000000LEVBEA4	MDA	1011	SA	11313617		50	Y0	Termination Contra CR	N/A		a140e000008y1CsAAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NUB9EAO	ALIAO-565338	18000000	a4G60000000LEVBEA4	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup Contra DR	N/A		a140e000008y1CsAAI	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e000000NUBAEA4	ALIAO-565339	42000000	a4G60000000LEVBEA4	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup Contra CR	N/A		a140e000008y1CsAAI	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e000000NUBBEA4	ALIAO-565340	18000000	a4G60000000LEVBEA4	MDA	1011	SA	11313617		40	Y0	Termination DR	N/A		a140e000008y1CsAAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NUBCEA4	ALIAO-565341	42000000	a4G60000000LEVBEA4	MDA	1011	SA	11313617		50	Y0	Termination CR	N/A		a140e000008y1CsAAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NUBDEA4	ALIAO-565342	42000000	a4G60000000LEVBEA4	MDA	1011	SA	11313617		40	Y0	Termination Contra DR	N/A		a140e000008y1CsAAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NUBhEAO	ALIAO-565372	42000000	a4G0e000000Mc0kEAC	MDA	1011	SA	11313620		40	Y0	Clawback Amortization DR	N/A		a140e000008y1D0AAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NUBiEAO	ALIAO-565373		a4G0e000000Mc0kEAC	MDA	1011	SA	11313617	N03			Rebate	N/A		a140e000008y1D0AAI	BIPFR Quarterly Rebate	03MQ
a4D0e000000NUBjEAO	ALIAO-565374	42000000	a4G0e000000Mc0kEAC	MDA	1011	SA	11313620		40	Y0	Rebate Amortization DR	N/A		a140e000008y1D0AAI	BIPFR Monthly Amortization	03MQ
a4D0e000000NUBkEAO	ALIAO-565375	18000000	a4G0e000000Mc0kEAC	MDA	1011	SA	11313620		50	Y0	Clawback Amortization CR	N/A		a140e000008y1D0AAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NUBlEAO	ALIAO-565376	42000000	a4G0e000000Mc0kEAC	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup DR	N/A		a140e000008y1D0AAI	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e000000NUBmEAO	ALIAO-565377	18000000	a4G0e000000Mc0kEAC	MDA	1011	SA	11313620		50	Y0	Rebate Amortization CR	N/A		a140e000008y1D0AAI	BIPFR Monthly Amortization	03MQ
a4D0e000000NUBnEAO	ALIAO-565378	18000000	a4G0e000000Mc0kEAC	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup CR	N/A		a140e000008y1D0AAI	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e000000NUBoEAO	ALIAO-565379		a4G0e000000Mc0kEAC	MDA	1011	SA	11313617	N30			Clawback	N/A		a140e000008y1D0AAI	BIPFR Clawback	03MQ
a4D0e000000NUBpEAO	ALIAO-565380	18000000	a4G0e000000Mc0kEAC	MDA	1011	SA	11313617		50	Y0	Termination Contra CR	N/A		a140e000008y1D0AAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NUBqEAO	ALIAO-565381	18000000	a4G0e000000Mc0kEAC	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup Contra DR	N/A		a140e000008y1D0AAI	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e000000NUBrEAO	ALIAO-565382	42000000	a4G0e000000Mc0kEAC	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup Contra CR	N/A		a140e000008y1D0AAI	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e000000NUBsEAO	ALIAO-565383	18000000	a4G0e000000Mc0kEAC	MDA	1011	SA	11313617		40	Y0	Termination DR	N/A		a140e000008y1D0AAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NUBtEAO	ALIAO-565384	42000000	a4G0e000000Mc0kEAC	MDA	1011	SA	11313617		50	Y0	Termination CR	N/A		a140e000008y1D0AAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NUBuEAO	ALIAO-565385	42000000	a4G0e000000Mc0kEAC	MDA	1011	SA	11313617		40	Y0	Termination Contra DR	N/A		a140e000008y1D0AAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NUE6EAO	ALIAO-565515	42000000	a4G0e000000Mc0pEAC	MDA	1011	SA	11313620		40	Y0	Clawback Amortization DR	N/A		a140e000008y1DqAAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NUE7EAO	ALIAO-565516		a4G0e000000Mc0pEAC	MDA	1011	SA	11313617	N03			Rebate	N/A		a140e000008y1DqAAI	BIPFR Quarterly Rebate	03MQ
a4D0e000000NUE8EAO	ALIAO-565517	42000000	a4G0e000000Mc0pEAC	MDA	1011	SA	11313620		40	Y0	Rebate Amortization DR	N/A		a140e000008y1DqAAI	BIPFR Monthly Amortization	03MQ
a4D0e000000NUE9EAO	ALIAO-565518	18000000	a4G0e000000Mc0pEAC	MDA	1011	SA	11313620		50	Y0	Clawback Amortization CR	N/A		a140e000008y1DqAAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NUEAEA4	ALIAO-565519	42000000	a4G0e000000Mc0pEAC	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup DR	N/A		a140e000008y1DqAAI	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e000000NUEBEA4	ALIAO-565520	18000000	a4G0e000000Mc0pEAC	MDA	1011	SA	11313620		50	Y0	Rebate Amortization CR	N/A		a140e000008y1DqAAI	BIPFR Monthly Amortization	03MQ
a4D0e000000NUECEA4	ALIAO-565521	18000000	a4G0e000000Mc0pEAC	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup CR	N/A		a140e000008y1DqAAI	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e000000NUEDEA4	ALIAO-565522		a4G0e000000Mc0pEAC	MDA	1011	SA	11313617	N30			Clawback	N/A		a140e000008y1DqAAI	BIPFR Clawback	03MQ
a4D0e000000NUEEEA4	ALIAO-565523	18000000	a4G0e000000Mc0pEAC	MDA	1011	SA	11313617		50	Y0	Termination Contra CR	N/A		a140e000008y1DqAAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NUEFEA4	ALIAO-565524	18000000	a4G0e000000Mc0pEAC	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup Contra DR	N/A		a140e000008y1DqAAI	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e000000NUEGEA4	ALIAO-565525	42000000	a4G0e000000Mc0pEAC	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup Contra CR	N/A		a140e000008y1DqAAI	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e000000NUEHEA4	ALIAO-565526	18000000	a4G0e000000Mc0pEAC	MDA	1011	SA	11313617		40	Y0	Termination DR	N/A		a140e000008y1DqAAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NUEIEA4	ALIAO-565527	42000000	a4G0e000000Mc0pEAC	MDA	1011	SA	11313617		50	Y0	Termination CR	N/A		a140e000008y1DqAAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NUEJEA4	ALIAO-565528	42000000	a4G0e000000Mc0pEAC	MDA	1011	SA	11313617		40	Y0	Termination Contra DR	N/A		a140e000008y1DqAAI	BIPFR Clearing after Clawback	03MQ
a4D0e000000NZdIEAW	ALIAO-579310	42000000	a4G0e000000cZ7sEAE	MDA	1011	SA	11313620		40	Y0	Clawback Amortization DR	N/A		a140e000008yefsAAA	BIPFR Clearing after Clawback	03H9
a4D0e000000NZdJEAW	ALIAO-579311		a4G0e000000cZ7sEAE	MDA	1011	SA	11313617	N03			Rebate	N/A		a140e000008yefsAAA	BIPFR Quarterly Rebate	03H9
a4D0e000000NZdKEAW	ALIAO-579312	42000000	a4G0e000000cZ7sEAE	MDA	1011	SA	11313620		40	Y0	Rebate Amortization DR	N/A		a140e000008yefsAAA	BIPFR Monthly Amortization	03H9
a4D0e000000NZdLEAW	ALIAO-579313	18000000	a4G0e000000cZ7sEAE	MDA	1011	SA	11313620		50	Y0	Clawback Amortization CR	N/A		a140e000008yefsAAA	BIPFR Clearing after Clawback	03H9
a4D0e000000NZdMEAW	ALIAO-579314	42000000	a4G0e000000cZ7sEAE	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup DR	N/A		a140e000008yefsAAA	BIPFR Quarterly Trueup Amortization	03H9
a4D0e000000NZdNEAW	ALIAO-579315	18000000	a4G0e000000cZ7sEAE	MDA	1011	SA	11313620		50	Y0	Rebate Amortization CR	N/A		a140e000008yefsAAA	BIPFR Monthly Amortization	03H9
a4D0e000000NZdOEAW	ALIAO-579316	18000000	a4G0e000000cZ7sEAE	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup CR	N/A		a140e000008yefsAAA	BIPFR Quarterly Trueup Amortization	03H9
a4D0e000000NZdPEAW	ALIAO-579317		a4G0e000000cZ7sEAE	MDA	1011	SA	11313617	N30			Clawback	N/A		a140e000008yefsAAA	BIPFR Clawback	03H9
a4D0e000000NZdQEAW	ALIAO-579318	18000000	a4G0e000000cZ7sEAE	MDA	1011	SA	11313617		50	Y0	Termination Contra CR	N/A		a140e000008yefsAAA	BIPFR Clearing after Clawback	03H9
a4D0e000000NZdREAW	ALIAO-579319	18000000	a4G0e000000cZ7sEAE	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup Contra DR	N/A		a140e000008yefsAAA	BIPFR Quarterly Trueup Amortization	03H9
a4D0e000000NZdSEAW	ALIAO-579320	42000000	a4G0e000000cZ7sEAE	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup Contra CR	N/A		a140e000008yefsAAA	BIPFR Quarterly Trueup Amortization	03H9
a4D0e000000NZdTEAW	ALIAO-579321	18000000	a4G0e000000cZ7sEAE	MDA	1011	SA	11313617		40	Y0	Termination DR	N/A		a140e000008yefsAAA	BIPFR Clearing after Clawback	03H9
a4D0e000000NZdUEAW	ALIAO-579322	42000000	a4G0e000000cZ7sEAE	MDA	1011	SA	11313617		50	Y0	Termination CR	N/A		a140e000008yefsAAA	BIPFR Clearing after Clawback	03H9
a4D0e000000NZdVEAW	ALIAO-579323	42000000	a4G0e000000cZ7sEAE	MDA	1011	SA	11313617		40	Y0	Termination Contra DR	N/A		a140e000008yefsAAA	BIPFR Clearing after Clawback	03H9
a4D0e000000NayAEAS	ALIAO-583195	42000000	a4G0e000000Mjc1EAC	MDA	1011	SA	11313620		40	Y0	Clawback Amortization DR	N/A		a140e000008ypbIAAQ	BIPFR Clearing after Clawback	03MQ
a4D0e000000NayBEAS	ALIAO-583196		a4G0e000000Mjc1EAC	MDA	1011	SA	11313617	N03			Rebate	N/A		a140e000008ypbIAAQ	BIPFR Quarterly Rebate	03MQ
a4D0e000000NayCEAS	ALIAO-583197	42000000	a4G0e000000Mjc1EAC	MDA	1011	SA	11313620		40	Y0	Rebate Amortization DR	N/A		a140e000008ypbIAAQ	BIPFR Monthly Amortization	03MQ
a4D0e000000NayDEAS	ALIAO-583198	18000000	a4G0e000000Mjc1EAC	MDA	1011	SA	11313620		50	Y0	Clawback Amortization CR	N/A		a140e000008ypbIAAQ	BIPFR Clearing after Clawback	03MQ
a4D0e000000NayEEAS	ALIAO-583199	42000000	a4G0e000000Mjc1EAC	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup DR	N/A		a140e000008ypbIAAQ	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e000000NayFEAS	ALIAO-583200	18000000	a4G0e000000Mjc1EAC	MDA	1011	SA	11313620		50	Y0	Rebate Amortization CR	N/A		a140e000008ypbIAAQ	BIPFR Monthly Amortization	03MQ
a4D0e000000NayGEAS	ALIAO-583201	18000000	a4G0e000000Mjc1EAC	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup CR	N/A		a140e000008ypbIAAQ	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e000000NayHEAS	ALIAO-583202		a4G0e000000Mjc1EAC	MDA	1011	SA	11313617	N30			Clawback	N/A		a140e000008ypbIAAQ	BIPFR Clawback	03MQ
a4D0e000000NayIEAS	ALIAO-583203	18000000	a4G0e000000Mjc1EAC	MDA	1011	SA	11313617		50	Y0	Termination Contra CR	N/A		a140e000008ypbIAAQ	BIPFR Clearing after Clawback	03MQ
a4D0e000000NayJEAS	ALIAO-583204	18000000	a4G0e000000Mjc1EAC	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup Contra DR	N/A		a140e000008ypbIAAQ	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e000000NayKEAS	ALIAO-583205	42000000	a4G0e000000Mjc1EAC	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup Contra CR	N/A		a140e000008ypbIAAQ	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e000000NayLEAS	ALIAO-583206	18000000	a4G0e000000Mjc1EAC	MDA	1011	SA	11313617		40	Y0	Termination DR	N/A		a140e000008ypbIAAQ	BIPFR Clearing after Clawback	03MQ
a4D0e000000NayMEAS	ALIAO-583207	42000000	a4G0e000000Mjc1EAC	MDA	1011	SA	11313617		50	Y0	Termination CR	N/A		a140e000008ypbIAAQ	BIPFR Clearing after Clawback	03MQ
a4D0e000000NayNEAS	ALIAO-583208	42000000	a4G0e000000Mjc1EAC	MDA	1011	SA	11313617		40	Y0	Termination Contra DR	N/A		a140e000008ypbIAAQ	BIPFR Clearing after Clawback	03MQ
a4D0e0000016amuEAA	ALIAO-587348	42000000	a4G60000000LJsdEAG	MDA	1011	SA	11313620		40	Y0	Clawback Amortization DR	N/A		a140e0000099oitAAA	BIPFR Clearing after Clawback	03MQ
a4D0e0000016amvEAA	ALIAO-587349		a4G60000000LJsdEAG	MDA	1011	SA	11313617	N03			Rebate	N/A		a140e0000099oitAAA	BIPFR Quarterly Rebate	03MQ
a4D0e0000016amwEAA	ALIAO-587350	42000000	a4G60000000LJsdEAG	MDA	1011	SA	11313620		40	Y0	Rebate Amortization DR	N/A		a140e0000099oitAAA	BIPFR Monthly Amortization	03MQ
a4D0e0000016amxEAA	ALIAO-587351	18000000	a4G60000000LJsdEAG	MDA	1011	SA	11313620		50	Y0	Clawback Amortization CR	N/A		a140e0000099oitAAA	BIPFR Clearing after Clawback	03MQ
a4D0e0000016amyEAA	ALIAO-587352	42000000	a4G60000000LJsdEAG	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup DR	N/A		a140e0000099oitAAA	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e0000016amzEAA	ALIAO-587353	18000000	a4G60000000LJsdEAG	MDA	1011	SA	11313620		50	Y0	Rebate Amortization CR	N/A		a140e0000099oitAAA	BIPFR Monthly Amortization	03MQ
a4D0e0000016an0EAA	ALIAO-587354	18000000	a4G60000000LJsdEAG	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup CR	N/A		a140e0000099oitAAA	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e0000016an1EAA	ALIAO-587355		a4G60000000LJsdEAG	MDA	1011	SA	11313617	N30			Clawback	N/A		a140e0000099oitAAA	BIPFR Clawback	03MQ
a4D0e0000016an2EAA	ALIAO-587356	18000000	a4G60000000LJsdEAG	MDA	1011	SA	11313617		50	Y0	Termination Contra CR	N/A		a140e0000099oitAAA	BIPFR Clearing after Clawback	03MQ
a4D0e0000016an3EAA	ALIAO-587357	18000000	a4G60000000LJsdEAG	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup Contra DR	N/A		a140e0000099oitAAA	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e0000016an4EAA	ALIAO-587358	42000000	a4G60000000LJsdEAG	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup Contra CR	N/A		a140e0000099oitAAA	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e0000016an5EAA	ALIAO-587359	18000000	a4G60000000LJsdEAG	MDA	1011	SA	11313617		40	Y0	Termination DR	N/A		a140e0000099oitAAA	BIPFR Clearing after Clawback	03MQ
a4D0e0000016an6EAA	ALIAO-587360	42000000	a4G60000000LJsdEAG	MDA	1011	SA	11313617		50	Y0	Termination CR	N/A		a140e0000099oitAAA	BIPFR Clearing after Clawback	03MQ
a4D0e0000016an7EAA	ALIAO-587361	42000000	a4G60000000LJsdEAG	MDA	1011	SA	11313617		40	Y0	Termination Contra DR	N/A		a140e0000099oitAAA	BIPFR Clearing after Clawback	03MQ
a4D0e0000016ePYEAY	ALIAO-597184	42000000	a4G0e000000dK0XEAU	MDA	1011	SA	11313620		40	Y0	Clawback Amortization DR	N/A		a140e000009A5VtAAK	BIPFR Clearing after Clawback	03MQ
a4D0e0000016ePZEAY	ALIAO-597185		a4G0e000000dK0XEAU	MDA	1011	SA	11313617	N03			Rebate	N/A		a140e000009A5VtAAK	BIPFR Quarterly Rebate	03MQ
a4D0e0000016ePaEAI	ALIAO-597186	42000000	a4G0e000000dK0XEAU	MDA	1011	SA	11313620		40	Y0	Rebate Amortization DR	N/A		a140e000009A5VtAAK	BIPFR Monthly Amortization	03MQ
a4D0e0000016ePbEAI	ALIAO-597187	18000000	a4G0e000000dK0XEAU	MDA	1011	SA	11313620		50	Y0	Clawback Amortization CR	N/A		a140e000009A5VtAAK	BIPFR Clearing after Clawback	03MQ
a4D0e0000016ePcEAI	ALIAO-597188	42000000	a4G0e000000dK0XEAU	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup DR	N/A		a140e000009A5VtAAK	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e0000016ePdEAI	ALIAO-597189	18000000	a4G0e000000dK0XEAU	MDA	1011	SA	11313620		50	Y0	Rebate Amortization CR	N/A		a140e000009A5VtAAK	BIPFR Monthly Amortization	03MQ
a4D0e0000016ePeEAI	ALIAO-597190	18000000	a4G0e000000dK0XEAU	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup CR	N/A		a140e000009A5VtAAK	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e0000016ePfEAI	ALIAO-597191		a4G0e000000dK0XEAU	MDA	1011	SA	11313617	N30			Clawback	N/A		a140e000009A5VtAAK	BIPFR Clawback	03MQ
a4D0e0000016ePgEAI	ALIAO-597192	18000000	a4G0e000000dK0XEAU	MDA	1011	SA	11313617		50	Y0	Termination Contra CR	N/A		a140e000009A5VtAAK	BIPFR Clearing after Clawback	03MQ
a4D0e0000016ePhEAI	ALIAO-597193	18000000	a4G0e000000dK0XEAU	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup Contra DR	N/A		a140e000009A5VtAAK	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e0000016ePiEAI	ALIAO-597194	42000000	a4G0e000000dK0XEAU	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup Contra CR	N/A		a140e000009A5VtAAK	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e0000016ePjEAI	ALIAO-597195	18000000	a4G0e000000dK0XEAU	MDA	1011	SA	11313617		40	Y0	Termination DR	N/A		a140e000009A5VtAAK	BIPFR Clearing after Clawback	03MQ
a4D0e0000016ePkEAI	ALIAO-597196	42000000	a4G0e000000dK0XEAU	MDA	1011	SA	11313617		50	Y0	Termination CR	N/A		a140e000009A5VtAAK	BIPFR Clearing after Clawback	03MQ
a4D0e0000016ePlEAI	ALIAO-597197	42000000	a4G0e000000dK0XEAU	MDA	1011	SA	11313617		40	Y0	Termination Contra DR	N/A		a140e000009A5VtAAK	BIPFR Clearing after Clawback	03MQ
a4D0e0000016ft5EAA	ALIAO-602440	42000000	a4G60000000LERTEA4	MDA	1011	SA	11313620		40	Y0	Clawback Amortization DR	N/A		a140e000009A81nAAC	BIPFR Clearing after Clawback	03MQ
a4D0e0000016ft6EAA	ALIAO-602441		a4G60000000LERTEA4	MDA	1011	SA	11313617	N03			Rebate	N/A		a140e000009A81nAAC	BIPFR Quarterly Rebate	03MQ
a4D0e0000016ft7EAA	ALIAO-602442	42000000	a4G60000000LERTEA4	MDA	1011	SA	11313620		40	Y0	Rebate Amortization DR	N/A		a140e000009A81nAAC	BIPFR Monthly Amortization	03MQ
a4D0e0000016ft8EAA	ALIAO-602443	18000000	a4G60000000LERTEA4	MDA	1011	SA	11313620		50	Y0	Clawback Amortization CR	N/A		a140e000009A81nAAC	BIPFR Clearing after Clawback	03MQ
a4D0e0000016ft9EAA	ALIAO-602444	42000000	a4G60000000LERTEA4	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup DR	N/A		a140e000009A81nAAC	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e0000016ftAEAQ	ALIAO-602445	18000000	a4G60000000LERTEA4	MDA	1011	SA	11313620		50	Y0	Rebate Amortization CR	N/A		a140e000009A81nAAC	BIPFR Monthly Amortization	03MQ
a4D0e0000016ftBEAQ	ALIAO-602446	18000000	a4G60000000LERTEA4	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup CR	N/A		a140e000009A81nAAC	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e0000016ftCEAQ	ALIAO-602447		a4G60000000LERTEA4	MDA	1011	SA	11313617	N30			Clawback	N/A		a140e000009A81nAAC	BIPFR Clawback	03MQ
a4D0e0000016ftDEAQ	ALIAO-602448	18000000	a4G60000000LERTEA4	MDA	1011	SA	11313617		50	Y0	Termination Contra CR	N/A		a140e000009A81nAAC	BIPFR Clearing after Clawback	03MQ
a4D0e0000016ftEEAQ	ALIAO-602449	18000000	a4G60000000LERTEA4	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup Contra DR	N/A		a140e000009A81nAAC	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e0000016ftFEAQ	ALIAO-602450	42000000	a4G60000000LERTEA4	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup Contra CR	N/A		a140e000009A81nAAC	BIPFR Quarterly Trueup Amortization	03MQ
a4D0e0000016ftGEAQ	ALIAO-602451	18000000	a4G60000000LERTEA4	MDA	1011	SA	11313617		40	Y0	Termination DR	N/A		a140e000009A81nAAC	BIPFR Clearing after Clawback	03MQ
a4D0e0000016ftHEAQ	ALIAO-602452	42000000	a4G60000000LERTEA4	MDA	1011	SA	11313617		50	Y0	Termination CR	N/A		a140e000009A81nAAC	BIPFR Clearing after Clawback	03MQ
a4D0e0000016ftIEAQ	ALIAO-602453	42000000	a4G60000000LERTEA4	MDA	1011	SA	11313617		40	Y0	Termination Contra DR	N/A		a140e000009A81nAAC	BIPFR Clearing after Clawback	03MQ
a4D320000009KXhEAM	ALIAO-352462	18000000	a4G32000000g5irEAA	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup Contra DR			a1432000003unPmAAI	BIPFR Quarterly Trueup Amortization	03M2
a4D320000009KXiEAM	ALIAO-352463	18000000	a4G32000000g5isEAA	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup Contra DR			a1432000003unPnAAI	BIPFR Quarterly Trueup Amortization	03M2
a4D320000009KXjEAM	ALIAO-352464	42000000	a4G32000000g5irEAA	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup Contra CR			a1432000003unPmAAI	BIPFR Quarterly Trueup Amortization	03M2
a4D320000009KXkEAM	ALIAO-352465	42000000	a4G32000000g5isEAA	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup Contra CR			a1432000003unPnAAI	BIPFR Quarterly Trueup Amortization	03M2
a4D320000009KXlEAM	ALIAO-352466	42000000	a4G32000000g5irEAA	MDA	1011	SA	11313620		40	Y0	Clawback Amortization DR			a1432000003unPmAAI	BIPFR Clearing after Clawback	03M2
a4D320000009KXmEAM	ALIAO-352467	42000000	a4G32000000g5isEAA	MDA	1011	SA	11313620		40	Y0	Clawback Amortization DR			a1432000003unPnAAI	BIPFR Clearing after Clawback	03M2
a4D320000009KXnEAM	ALIAO-352468		a4G32000000g5irEAA	MDA	1011	SA	11313617	N03			Rebate			a1432000003unPmAAI	BIPFR Quarterly Rebate	03M2
a4D320000009KXoEAM	ALIAO-352469		a4G32000000g5isEAA	MDA	1011	SA	11313617	N03			Rebate			a1432000003unPnAAI	BIPFR Quarterly Rebate	03M2
a4D320000009KXpEAM	ALIAO-352470	42000000	a4G32000000g5irEAA	MDA	1011	SA	11313620		40	Y0	Rebate Amortization DR			a1432000003unPmAAI	BIPFR Monthly Amortization	03M2
a4D320000009KXqEAM	ALIAO-352471	42000000	a4G32000000g5isEAA	MDA	1011	SA	11313620		40	Y0	Rebate Amortization DR			a1432000003unPnAAI	BIPFR Monthly Amortization	03M2
a4D320000009KXrEAM	ALIAO-352472	18000000	a4G32000000g5irEAA	MDA	1011	SA	11313620		50	Y0	Clawback Amortization CR			a1432000003unPmAAI	BIPFR Clearing after Clawback	03M2
a4D320000009KXsEAM	ALIAO-352473	18000000	a4G32000000g5isEAA	MDA	1011	SA	11313620		50	Y0	Clawback Amortization CR			a1432000003unPnAAI	BIPFR Clearing after Clawback	03M2
a4D320000009KXtEAM	ALIAO-352474	42000000	a4G32000000g5irEAA	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup DR			a1432000003unPmAAI	BIPFR Quarterly Trueup Amortization	03M2
a4D320000009KXuEAM	ALIAO-352475	42000000	a4G32000000g5isEAA	MDA	1011	SA	11320181		40	Y0	Rebate Amortization Trueup DR			a1432000003unPnAAI	BIPFR Quarterly Trueup Amortization	03M2
a4D320000009KXvEAM	ALIAO-352476	18000000	a4G32000000g5irEAA	MDA	1011	SA	11313620		50	Y0	Rebate Amortization CR			a1432000003unPmAAI	BIPFR Monthly Amortization	03M2
a4D320000009KXwEAM	ALIAO-352477	18000000	a4G32000000g5isEAA	MDA	1011	SA	11313620		50	Y0	Rebate Amortization CR			a1432000003unPnAAI	BIPFR Monthly Amortization	03M2
a4D320000009KXxEAM	ALIAO-352478	18000000	a4G32000000g5irEAA	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup CR			a1432000003unPmAAI	BIPFR Quarterly Trueup Amortization	03M2
a4D320000009KXyEAM	ALIAO-352479	18000000	a4G32000000g5isEAA	MDA	1011	SA	11320181		50	Y0	Rebate Amortization Trueup CR			a1432000003unPnAAI	BIPFR Quarterly Trueup Amortization	03M2
a4D320000009KXzEAM	ALIAO-352480		a4G32000000g5irEAA	MDA	1011	SA	11313617	N30			Clawback			a1432000003unPmAAI	BIPFR Clawback	03M2
a4D320000009KY0EAM	ALIAO-352481		a4G32000000g5isEAA	MDA	1011	SA	11313617	N30			Clawback			a1432000003unPnAAI	BIPFR Clawback	03M2
a4D320000009KY1EAM	ALIAO-352482	18000000	a4G32000000g5irEAA	MDA	1011	SA	11313617		40	Y0	Termination DR			a1432000003unPmAAI	BIPFR Clearing after Clawback	03M2
a4D320000009KY2EAM	ALIAO-352483	18000000	a4G32000000g5isEAA	MDA	1011	SA	11313617		40	Y0	Termination DR			a1432000003unPnAAI	BIPFR Clearing after Clawback	03M2
a4D320000009KY3EAM	ALIAO-352484	42000000	a4G32000000g5irEAA	MDA	1011	SA	11313617		50	Y0	Termination CR			a1432000003unPmAAI	BIPFR Clearing after Clawback	03M2
a4D320000009KY4EAM	ALIAO-352485	42000000	a4G32000000g5isEAA	MDA	1011	SA	11313617		50	Y0	Termination CR			a1432000003unPnAAI	BIPFR Clearing after Clawback	03M2
a4D320000009KY5EAM	ALIAO-352486	42000000	a4G32000000g5irEAA	MDA	1011	SA	11313617		40	Y0	Termination Contra DR			a1432000003unPmAAI	BIPFR Clearing after Clawback	03M2
a4D320000009KY6EAM	ALIAO-352487	42000000	a4G32000000g5isEAA	MDA	1011	SA	11313617		40	Y0	Termination Contra DR			a1432000003unPnAAI	BIPFR Clearing after Clawback	03M2
a4D320000009KY7EAM	ALIAO-352488	18000000	a4G32000000g5irEAA	MDA	1011	SA	11313617		50	Y0	Termination Contra CR			a1432000003unPmAAI	BIPFR Clearing after Clawback	03M2
a4D320000009KY8EAM	ALIAO-352489	18000000	a4G32000000g5isEAA	MDA	1011	SA	11313617		50	Y0	Termination Contra CR			a1432000003unPnAAI	BIPFR Clearing after Clawback	03M2`;
    navigator.clipboard.writeText(data).then(function() {
        pasteExcel1();
     }, function(err) {
        console.error('error copying');
     });
     
}
function fillDataRP(){
    $('.inp_col').val('R4V4');
    $('.txt_area').val('true');
    let data =`ALI_Soldto__Account_Name	ALI_Soldto__c	ALI_Agreement_Site__c	ALI_Apttus__AgreementId__c	ALI_Agreement__c_Name	ALI_ID	ALI_Apttus__AgreementLineItem__c_Name	ALI_Apttus_CMConfig_BasePrice	ALI_Apttus_CMConfig_BasePriceMethod	ALI_Apttus_CMConfig_Comments	ALI_Apttus__Description__c	ALI_p66_Exclude_from_Contractual_Balance	ALI_Apttus_CMConfig__BillingFrequency	ALI_Apttus_CMConfig__IncentiveType	ALI_Ammortized	ALI_Payment_Processing_day	ALI_Apttus_CMConfig_PriceMethod	ALI_Apttus_CMConfig__Uom__c	ALI_Apttus__Product__c	ALI_Apttus__Product__Name	ALI_Apttus_CMConfig__Frequency	ALI_Status	ALI_Apttus_CMConfig__ShipToAccountId	ALI_Volume_Basis	ALI_Volume_Source	ALI_Price_Type	ALI_Product_category	ALI_Apttus_CMConfig__OptionId__Name	ALI_ChargeType__c	p66_Tier_1_CPG__c	p66_Tier_1_Volume__c	p66_Tier_1_TLA_Base_Price_CPG__c	p66_Tier_2_CPG__c	p66_Tier_2_Volume__c	p66_Tier_2_TLA_Base_Price_CPG__c	p66_Tier_3_CPG__c	p66_Tier_3_Volume__c	p66_Tier_3_TLA_Base_Price_CPG__c	p66_Tier_4_CPG__c	p66_Tier_4_Volume__c	p66_Tier_4_TLA_Base_Price_CPG__c	p66_Tier_6_CPG__c	p66_Tier_6_Volume__c	p66_Tier_6_TLA_Base_Price_CPG__c	p66_Withholding__c	p66_Trueup_period_months__c	bundle_ALI_Contractual_Amoritization_Delay	bundle_ALI_Contractual_Amortization_method	bundle_ALI_Contractual_rolling_Balance	bundle_Recovered_Amount__c	bundle_Recovered_Contractual_Balance__c	bundle_Waived_Contractual_Balance__c	bundle_ALI_ID	Agreement_Site__c_Name	Agreement_Site_Agreement_Type__c	ALI_SAP_Ship_To__c	ALI_ShipTo__c	ALI_SoldTo_Number__c	ALI_Apttus__ListPrice__c	related_trueup_base_price	related_trueup_term	related_trueup_volume_source	ALI_Apttus_CMConfig__EffectiveDt	ALI_Apttus_CMConfig__EndDt	ALI_Apttus_CMConfig__StartDt	bundle_Recovered_Dt__c	bundle_Contractual_Amortization_Term__C	bundle_Apttus_CMConfig__EffectiveDate__c	bundle_Apttus_Rebate__TermMonths__c	bundle_Apttus_CMConfig__PriceMethod__c	bundle_Apttus_CMConfig__BasePriceMethod__c	bundle_Apttus_CMConfig__Frequency__c	derived_SF_contractual_term	derived_Contractual_Amortization_Term
THABET MANAGEMENT INC	0010e00001L8UJ4AAN	a4G0e000000MW1IEAW	a110e00000gpysSAAQ	THABET MANAGEMENT INC - BMA	a147V00000DYwcMQAT	AL-0000297235	32782.19	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																		110	Delayed Straight Line	0				a147V00000DYwcLQAT	BUY2 005-OR-00898050	BMA	898050	0010e00001NAEgkAAH	10114385	0				01-08-2021	31-10-2030	01-08-2021		111	0.00.00		Flat Price	Flat Price	One Time	1	
COLEMAN OIL CO	0016000000H8FS0AAN	a4G0e000000MbESEA0	a110e00000olNhUAAU	COLEMAN OIL CO - BMA	a147V00000DrpyeQAB	AL-0000316591	139884.85	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	172	60	Delayed Straight Line	0				a147V00000DrpydQAB	BEAVER TRAP JUNCTION-WA-00900622	BMA	900622	0010e00001P3tRTAAZ	10048403	0				01-10-2022	31-01-2037	01-10-2022		172	0.00.00	172	Flat Price	Flat Price	One Time	112	
JACKSONS FOOD STORES INC	0016000000H8FgiAAF	a4G0e000000Met8EAC	a1160000000ECtYAAW	JACKSONS FOOD STORES INC - BMA	a147V00000GmoARQAZ	AL-0000319754	125211.41	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	146	145	Delayed Straight Line	0				a147V00000GmoAQQAZ	MOXEE-WA-00902231	BMA	902231	0010e00001PiaNcAAJ	10083265	0				01-02-2023	31-03-2035	01-02-2023		146	0.00.00	146	Flat Price	Flat Price	One Time	1	
DON SMALL & SONS OIL DISTRIBUTOR CO	0016000000H8FT9AAN	a4G60000000LDWcEAO	a1160000000ECvFAAW	DON SMALL & SONS OIL DISTRIBUTOR CO - BMA	a147V00000DYwcCQAT	AL-0000297231	2355.05	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																		109	Delayed Straight Line	0				a147V00000DYwcBQAT	DOUGS AUTO ROW 76-WA-00807838	BMA	807838	0016000000woz88AAA	10048836	0				01-08-2021	30-09-2030	01-08-2021		110	0.00.00		Flat Price	Flat Price	One Time	1	
ED STAUB & SONS PETROLEUM INC	0016000000H8FJQAA3	a4G0e000000MVqCEAW	a110e00000gpyS6AAI	ED STAUB & SONS PETROLEUM INC - BMA	a147V000008RASLQA4	AL-0000293980	11831.5	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	111	110	Delayed Straight Line	0				a147V000008RASKQA4	CAMPUS FUEL MART-OR-00896333	BMA	896333	0010e00001NA6fXAAT	10044559	0				01-06-2021	31-08-2030	01-06-2021		111	0.00.00	111	Flat Price	Flat Price	One Time	1	
SUTEY OIL CO INC	0016000000H8FcGAAV	a4G60000000LKhHEAW	a1160000000ECujAAG	SUTEY OIL CO INC - BMA	a147V00000DZ2TaQAL	AL-0000302870	2606.88	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																		109	Delayed Straight Line	0				a147V00000DZ2TZQA1	THRIFTWAY 16-MT-00869269	BMA	869269	0016000000woz4kAAA	10057801	0				01-12-2021	31-01-2031	01-12-2021		110	0.00.00		Flat Price	Flat Price	One Time	1	
COUGAR DEN INC	0010e00001LtHYOAA3	a4G7V000000tWAyUAM	a110e00000pb18VAAQ	COUGAR DEN INC - BMA	a147V00000DZItmQAH	AL-0000310710	68623.98	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																		53	Delayed Straight Line	0				a147V00000DZItlQAH	LUMMI MINI MART-WA-00910333	BMA	910333	0017V00001XDpAiQAL	10115911	0				01-01-2022	30-06-2026	01-01-2022		54	0.00.00		Flat Price	Flat Price	One Time	1	
TC FUELS LP	0010e00001JVC1CAAX	a4G0e000000ccK6EAI	a110e00000gpjceAAA	TC FUELS LP - BMA	a147V000008R9GzQAK	AL-0000293164	1886.35	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	50	49	Delayed Straight Line	0				a147V000008R9GyQAK	FLASH MART 103-IA-00894488	BMA	894488	0010e00001LsJlEAAV	10115501	0				01-06-2021	31-07-2025	01-06-2021		50	0.00.00	50	Flat Price	Flat Price	One Time	1	
PACWEST ENERGY LLC	0010e00001QgkOzAAJ	a4G0e000000dK1lEAE	a110e00000pKFLKAA4	PACWEST ENERGY LLC - MBRA	a140e000008R7JeAAK	AL-0000291351	36479.65	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																		108	Delayed Straight Line	0				a140e000008R7JdAAK	BALDWIN OIL-CA-851440	MBRA	904547	0010e00001QgmE4AAJ	10124202	0				01-05-2021	31-05-2030	01-05-2021		109	0.00.00	109	Flat Price	Flat Price	One Time	1	
COLVIN OIL I LLC	0013200001IaXUTAA3	a4G0e000000ccKoEAI	a113200000DHgJ7AAL	COLVIN OIL I LLC - BMA	a147V00000DZ4BYQA1	AL-0000305074	68623.98	Flat Price		BIP Upfront True Up Deferral Option	0			1	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Transferred			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																		53	Delayed Straight Line	0				a147V00000DZ4BXQA1	LUMMI MINI MART-WA-00894493	BMA	894493	0010e00001LsLaCAAV	10109453	0				01-01-2022	27-04-2022	01-01-2022		54	0.00.00		Flat Price	Flat Price	One Time	1	
TABISH BROTHERS DISTRIBUTORS INC	0016000000H8Fc4AAF	a4G60000000LJ46EAG	a1160000000ECuoAAG	TABISH BROTHERS DISTRIBUTORS INC - BMA	a147V000008R83YQAS	AL-0000292470	4655.96	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	110	109	Delayed Straight Line	0				a147V000008R83XQAS	ARNIES GAS & TIRE-MT-00205018	BMA	205018	0016000000woz3oAAA	10057764	0				01-05-2021	30-06-2030	01-05-2021		110	0.00.00	110	Flat Price	Flat Price	One Time	1	
CALIFORNIA FRESNO INVESTMENT CO	0016000000LQdYJAA1	a4G0e000000caMBEAY	a110e00000gpjU1AAI	CALIFORNIA FRESNO INVESTMENT CO - BRA	a140e000008R1dhAAC	AL-0000287329	53285.92	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Transferred			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																		109	Delayed Straight Line	0				a140e000008R1dgAAC	CAL FRESNO 110-CA-893799	BRA	893799	0010e00001L9ds5AAB	10092142	0				01-03-2021	01-07-2022	01-03-2021		110	0.00.00		Flat Price	Flat Price	One Time	1	
RED TRIANGLE OIL CO	0016000000tr09aAAA	a4G7V000000tTXFUA2	a117V00000v7WGJQA2	RED TRIANGLE OIL CO - MBRA	a147V00000DZtjAQAT	AL-0000315758	53285.92	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																		109	Delayed Straight Line	0				a147V00000DZtj9QAD	BEYOND MART SELMA-CA-893799	MBRA	909437	0017V00001T6ZtkQAF	10100941	0				01-03-2021	30-04-2030	01-03-2021		110	0.00.00		Flat Price	Flat Price	One Time	1	
SIERRA FUEL INC	00160000013UY55AAG	a4G60000000LLK2EAO	a1160000007ZkKsAAK	SIERRA FUEL INC - BRA	a140e000009AD91AAG	AL-0000284957	70611.21	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	96	95	Delayed Straight Line	0				a140e000009AD90AAG	SIERRA FUEL INC-CA-878504	BRA	878504	00160000014An8NAAS	10102316	0				01-01-2021	31-12-2028	01-01-2021		96	0.00.00	96	Flat Price	Flat Price	One Time	1	
TC FUELS LP	0010e00001JVC1CAAX	a4G0e000000ccK5EAI	a110e00000gpjceAAA	TC FUELS LP - BMA	a147V000008R9GVQA0	AL-0000293152	1379.58	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	50	49	Delayed Straight Line	0				a147V000008R9GUQA0	FLASH MART 102-IA-00894505	BMA	894505	0010e00001LsJlDAAV	10115501	0				01-06-2021	31-07-2025	01-06-2021		50	0.00.00	50	Flat Price	Flat Price	One Time	1	
PETROCARD INC	0016000000H8FLrAAN	a4G60000000LDy0EAG	a1160000000ECuCAAW	PETROCARD INC - BMA	a140e000008R6mTAAS	AL-0000290725	13358.31	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	109	108	Delayed Straight Line	0				a140e000008R6mSAAS	ROCKET MARKET LLC-WA-00834499	BMA	834499	0016000000woyw1AAA	10045237	0				01-04-2021	30-04-2030	01-04-2021		109	0.00.00	109	Flat Price	Flat Price	One Time	1	
DIVINE CORP	0016000000H8FJFAA3	a4G60000000LS3yEAG	a1160000007Y171AAC	DIVINE CORP - BMA	a140e000009A8d2AAC	AL-0000282761	4559.76	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	145	144	Delayed Straight Line	0				a140e000009A8d1AAC	DIVINE PINES-WA-00852943	BMA	852943	0016000000woyvaAAA	10044498	0				01-12-2020	31-12-2032	01-12-2020		145	0.00.00	145	Flat Price	Flat Price	One Time	1	
TC FUELS LP	0010e00001JVC1CAAX	a4G0e000000ccK9EAI	a110e00000gpjceAAA	TC FUELS LP - BMA	a147V000008R9HiQAK	AL-0000293187	3119.79	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	48	47	Delayed Straight Line	0				a147V000008R9HhQAK	SUNNYS RUFE SNOW-TX-00894501	BMA	894501	0010e00001LsJlHAAV	10115501	0				01-06-2021	31-05-2025	01-06-2021		48	0.00.00	48	Flat Price	Flat Price	One Time	1	
PETROCARD INC	0016000000H8FLrAAN	a4G60000000LHhjEAG	a1160000000ECuCAAW	PETROCARD INC - BMA	a147V000008RBQ5QAO	AL-0000295537	4782.46	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	110	109	Delayed Straight Line	0				a147V000008RBQ4QAO	RIVERSIDE POWERSPORTS-WA-00834496	BMA	834496	0016000000woyvyAAA	10045237	0				01-07-2021	31-08-2030	01-07-2021		110	0.00.00	110	Flat Price	Flat Price	One Time	1	
WALKER SIMS OIL CO INC	0016000000H8F32AAF	a4G60000000LHb2EAG	a1160000000ECv2AAG	WALKER SIMS OIL CO INC - BMA	a147V00000DYz7xQAD	AL-0000299001	9370.84	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																		106	Delayed Straight Line	0				a147V00000DYz7wQAD	PHILLIPS FOOD PL-NM-00813979	BMA	813979	0016000000woxlxAAA	10003247	0				01-09-2021	31-07-2030	01-09-2021		107	0.00.00		Flat Price	Flat Price	One Time	1	
CALIFORNIA FUEL SUPPLY	0016000000H8FakAAF	a4G60000000LLDUEA4	a1160000007Zju6AAC	CALIFORNIA FUEL SUPPLY - MBRA	a140e000008R314AAC	AL-0000287831	49684.02	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Terminated			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	111	110	Delayed Straight Line	0	0			a140e000008R313AAC	FALCO INC-CA-256429	MBRA	877072	00160000010t5pEAAQ	10055539	0				01-03-2021	01-03-2021	01-03-2021		111	0.00.00	111	Flat Price	Flat Price	One Time	1	
BECK OIL INC	0016000000H8FSvAAN	a4G60000000LE6TEAW	a1160000000ECsiAAG	BECK OIL INC - BMA	a140e000009AAB4AAO	AL-0000283246	14296.61	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	110	109	Delayed Straight Line	0				a140e000009AAB3AAO	BARSTOW ENTERPRISES INC-CA-00838679	BMA	838679	0016000000wpC6KAAU	10048773	0				01-12-2020	31-01-2030	01-12-2020		110	0.00.00	110	Flat Price	Flat Price	One Time	1	
BEST 4 LESS PLACENTIA	0016000000m60XMAAY	a4G0e000000IChQEAW	a113200000GfkvyAAB	BEST 4 LESS PLACENTIA - MBRA	a140e000009ADNkAAO	AL-0000285282	60628.99	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	111	110	Delayed Straight Line	0				a140e000009ADNjAAO	BEST 4 LESS LA HABRA-CA-890684	MBRA	890684	0010e00001K5BEpAAN	10099823	0				01-01-2021	31-03-2030	01-01-2021		111	0.00.00	111	Flat Price	Flat Price	One Time	1	
BEST 4 LESS PLACENTIA	0016000000m60XMAAY	a4G0e000000chf1EAA	a113200000GfkvyAAB	BEST 4 LESS PLACENTIA - MBRA	a147V00000DZ5whQAD	AL-0000307404	193609.41	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	111	110	Delayed Straight Line	0				a147V00000DZ5wgQAD	GALAXY CYPRESS-CA-896266	MBRA	896266	0010e00001MtWIpAAN	10099823	0				01-02-2022	30-04-2031	01-02-2022		111	0.00.00	111	Flat Price	Flat Price	One Time	1	
JACKSONS FOOD STORES INC	0016000000H8FgiAAF	a4G0e000000cZBVEA2	a1160000000ECtYAAW	JACKSONS FOOD STORES INC - BMA	a147V000008RARwQAO	AL-0000293970	29779.1	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	110	109	Delayed Straight Line	0				a147V000008RARvQAO	MERRITT 1 INC-OR-00893317	BMA	893317	0010e00001L8jVqAAJ	10083265	0				01-06-2021	31-07-2030	01-06-2021		110	0.00.00	110	Flat Price	Flat Price	One Time	1	
THABET MANAGEMENT INC	0010e00001L8UJ4AAN	a4G0e000000cdMREAY	a110e00000gpysSAAQ	THABET MANAGEMENT INC - BMA	a140e000008R6dJAAS	AL-0000290521	34206.73	Flat Price		BIP Upfront True Up Deferral Option	0			1	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	111	110	Delayed Straight Line	0				a140e000008R6dIAAS	BUY2 010-OR-00894908	BMA	894908	0010e00001MWDzJAAX	10114385	0				01-04-2021	30-06-2030	01-04-2021		111	0.00.00	111	Flat Price	Flat Price	One Time	1	
HILLSDALE FOOD & FUEL LLC	0010e00001L6rvAAAR	a4G0e000000cXz5EAE	a110e00000gpYnxAAE	HILLSDALE FOOD & FUEL LLC - BRA	a140e000008R4z4AAC	AL-0000289202	19658.77	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	111	110	Delayed Straight Line	0				a140e000008R4z3AAC	HILLSDALE FOOD & FUEL LLC-OR-254566	BRA	892832	0010e00001L7BEQAA3	10113822	0				01-03-2021	31-05-2030	01-03-2021		111	0.00.00	111	Flat Price	Flat Price	One Time	1	
BRAD HALL & ASSOC INC	0016000000MTwsvAAD	a4G0e000000cb2MEAQ	a1160000007X6KYAA0	BRAD HALL & ASSOC INC - BMA	a140e000009ADO5AAO	AL-0000285291	3681.91	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	111	110	Delayed Straight Line	0				a140e000009ADO3AAO	SKY CITY TRAVEL CENTER-NM-00894118	BMA	894118	0010e00001LqMEXAA3	10093045	0				01-01-2021	31-03-2030	01-01-2021		111	0.00.00	111	Flat Price	Flat Price	One Time	1	
BRAD HALL & ASSOC INC	0016000000MTwsvAAD	a4G0e000000cb2NEAQ	a1160000007X6KYAA0	BRAD HALL & ASSOC INC - BMA	a140e000009ADO6AAO	AL-0000285292	8769.22	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	113	112	Delayed Straight Line	0				a140e000009ADO4AAO	SKY CITY EXPRESS-NM-00894117	BMA	894117	0010e00001LqMEYAA3	10093045	0				01-01-2021	31-05-2030	01-01-2021		113	0.00.00	113	Flat Price	Flat Price	One Time	1	
TC FUELS LP	0010e00001JVC1CAAX	a4G0e000000ccK7EAI	a110e00000gpjceAAA	TC FUELS LP - BMA	a147V000008R9GpQAK	AL-0000293160	2218.63	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	50	49	Delayed Straight Line	0				a147V000008R9GoQAK	FLASH MART 104-IA-00894499	BMA	894499	0010e00001LsJlFAAV	10115501	0				01-06-2021	31-07-2025	01-06-2021		50	0.00.00	50	Flat Price	Flat Price	One Time	1	
PETROCARD INC	0016000000H8FLrAAN	a4G0e000000cgMSEAY	a1160000000ECuCAAW	PETROCARD INC - BMA	a140e000008R7wyAAC	AL-0000292394	46956.86	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	110	109	Delayed Straight Line	0				a140e000008R7wxAAC	CLINTON SQUARE GAS & DELI-WA-00895647	BMA	895647	0010e00001Ms2oNAAR	10045237	0				01-05-2021	30-06-2030	01-05-2021		110	0.00.00	110	Flat Price	Flat Price	One Time	1	
COLEMAN OIL CO	0016000000H8FS0AAN	a4G0e000000MblDEAS	a110e00000olNhUAAU	COLEMAN OIL CO - BMA	a147V00000DZzxKQAT	AL-0000316139	49050.97	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	101	100	Delayed Straight Line	0				a147V00000DZzxJQAT	OMAK STATION-WA-00900641	BMA	900641	0010e00001P4V9gAAF	10048403	0				01-10-2022	28-02-2031	01-10-2022		101	0.00.00	101	Flat Price	Flat Price	One Time	1	
TC FUELS LP	0010e00001JVC1CAAX	a4G0e000000ccK8EAI	a110e00000gpjceAAA	TC FUELS LP - BMA	a147V000008R9GfQAK	AL-0000293156	2920.01	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	50	49	Delayed Straight Line	0				a147V000008R9GeQAK	FLASH MART 105-IA-00894500	BMA	894500	0010e00001LsJlGAAV	10115501	0				01-06-2021	31-07-2025	01-06-2021		50	0.00.00	50	Flat Price	Flat Price	One Time	1	
STAN BOYETT & SON INC	0016000000H8FRxAAN	a4G0e000000MZ1hEAG	a1160000007WZakAAG	STAN BOYETT & SON INC - BMA	a147V000008R8xcQAC	AL-0000292866	188308.69	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	111	110	Delayed Straight Line	0				a147V000008R8xbQAC	ST GEORGE-CA-00899344	BMA	899344	0010e00001O5UArAAN	10048394	0				01-05-2021	31-07-2030	01-05-2021		111	0.00.00	111	Flat Price	Flat Price	One Time	1	
S & H OIL LLC	0010e00001JAWjzAAH	a4G0e000000ccQnEAI	a110e00000gptgMAAQ	S & H OIL LLC - BRA	a147V00000DZ064QAD	AL-0000301188	27991.47	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																		110	Delayed Straight Line	0				a147V00000DZ063QAD	S & H OIL LLC-OR-894709	BRA	894709	0010e00001Lt1pOAAR	10116029	0				01-10-2021	31-12-2030	01-10-2021		111	0.00.00		Flat Price	Flat Price	One Time	1	
PERKINS OIL CO	0016000000H8FX2AAN	a4G60000000LIuAEAW	a1160000000ECuBAAW	PERKINS OIL CO - BMA	a147V00000DZ5YHQA1	AL-0000306785	6019.18	Flat Price		BIP Upfront True Up Deferral Option	0			1	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	111	110	Delayed Straight Line	0				a147V00000DZ5YGQA1	WAMSUTTER CONOCO-WY-00204061	BMA	204061	0016000000woyzhAAA	10052854	0				01-01-2022	31-03-2031	01-01-2022		111	0.00.00	111	Flat Price	Flat Price	One Time	1	
SPEARS INC	0016000000H8FOuAAN	a4G60000000LFq5EAG	a1160000007Zk4mAAC	SPEARS INC - BRA	a147V00000DYxDVQA1	AL-0000297363	17242.04	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																		110	Delayed Straight Line	0				a147V00000DYxDUQA1	SPEARS INC-WA-2602680	BRA	807354	0016000000woyuAAAQ	10047153	0				01-08-2021	30-09-2030	01-08-2021		111	0.00.00		Flat Price	Flat Price	One Time	1	
ALSAKER CORP DBA BROADWAY GROUP	0016000000H8FcdAAF	a4G60000000LEAdEAO	a1160000000ECsZAAW	ALSAKER CORP DBA BROADWAY GROUP - BMA	a147V00000DZ4ClQAL	AL-0000305106	2055.22	Flat Price		BIP Upfront True Up Deferral Option	0			1	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	125	124	Delayed Straight Line	0				a147V00000DZ4CkQAL	ELLENSBURG CONOCO-WA-00840867	BMA	840867	0016000000woyxrAAA	10057923	0				01-01-2022	31-05-2032	01-01-2022		125	0.00.00	125	Flat Price	Flat Price	One Time	1	
PETROCARD INC	0016000000H8FLrAAN	a4G60000000LHhiEAG	a1160000000ECuCAAW	PETROCARD INC - BMA	a140e000008R6GoAAK	AL-0000290053	4634.39	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	109	108	Delayed Straight Line	0				a140e000008R6GnAAK	TOWNS CONOCO-WA-00834495	BMA	834495	0016000000woyvxAAA	10045237	0				01-04-2021	30-04-2030	01-04-2021		109	0.00.00	109	Flat Price	Flat Price	One Time	1	
NORTHWEST PETROLEUM CO	0016000000H8FazAAF	a4G7V000001SuPRUA0	a1160000000ECu4AAG	NORTHWEST PETROLEUM CO - BMA	a147V00000KKWP1QAP	AL-0000339152	2192.83	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Pending			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																		110	Delayed Straight Line	0				a147V00000KKWP0QAP	BAIRS TRUCKSTOP #2-MT-	BMA		0017V00002FjNWrQAN	10056862	0				01-08-2021	31-10-2030	01-08-2021		111	0.00.00		Flat Price	Flat Price	One Time	1	
CALIFORNIA FUEL SUPPLY	0016000000H8FakAAF	a4G60000000LS2vEAG	a1160000007WZZ8AAO	CALIFORNIA FUEL SUPPLY - BMA	a147V000008R84RQAS	AL-0000292495	43194.81	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	111	110	Delayed Straight Line	0				a147V000008R84QQAS	BROADWAY 76-CA-00848428	BMA	848428	0016000000wp25rAAA	10055539	0				01-05-2021	31-07-2030	01-05-2021		111	0.00.00	111	Flat Price	Flat Price	One Time	1	
JACKSONS FOOD STORES INC	0016000000H8FgiAAF	a4G60000000LKybEAG	a1160000000ECtYAAW	JACKSONS FOOD STORES INC - BMA	a140e000009A8aUAAS	AL-0000282745	11701.96	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	111	110	Delayed Straight Line	0				a140e000009A8aTAAS	EVERGREEN 76-WA-00872488	BMA	872488	0016000000woz9UAAQ	10083265	0				01-12-2020	28-02-2030	01-12-2020		111	0.00.00	111	Flat Price	Flat Price		1	
KHAN OIL WASHINGTON LLC	0010e00001JAX1KAAX	a4G0e000000ccaCEAQ	a110e00000gpthjAAA	KHAN OIL WASHINGTON LLC - BRA	a147V00000DZ05pQAD	AL-0000301180	30539.53	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																		110	Delayed Straight Line	0				a147V00000DZ05oQAD	KHAN OIL WASHINGTON LLC-WA-895364	BRA	895364	0010e00001Lt3sOAAR	10116921	0				01-10-2021	31-12-2030	01-10-2021		111	0.00.00		Flat Price	Flat Price	One Time	1	
BIG OIL & TIRE CO	0016000000H8FIvAAN	a4G60000000LDX2EAO	a1160000000ECskAAG	BIG OIL & TIRE CO - BMA	a147V000008R9TXQA0	AL-0000293417	4212.25	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	109	108	Delayed Straight Line	0				a147V000008R9TWQA0	BROADWAY GAS & DELI-CA-00810207	BMA	810207	0016000000wp24kAAA	10044412	0				01-06-2021	30-06-2030	01-06-2021		109	0.00.00	109	Flat Price	Flat Price	One Time	1	
JACKSONS FOOD STORES INC	0016000000H8FgiAAF	a4G0e0000012hGLEAY	a1160000000ECtYAAW	JACKSONS FOOD STORES INC - BMA	a140e000008R75wAAC	AL-0000291079	76783.5	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	96	95	Delayed Straight Line	0				a140e000008R75vAAC	BREMERTON 76-WA-00891974	BMA	891974	0010e00001KP7n7AAD	10083265	0				01-04-2021	31-03-2029	01-04-2021		96	0.00.00	96	Flat Price	Flat Price	One Time	1	
TRIMARK XI LLC	0016000000H8FSmAAN	a4G60000000LFwfEAG	a1160000007Zk5wAAC	TRIMARK XI LLC - BRA	a140e000008R0ejAAC	AL-0000286616	79753.53	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Transferred			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																		121	Delayed Straight Line	0				a140e000008R0eiAAC	TRIMARK XI LLC-WA-2634093	BRA	807214	0016000000woyuDAAQ	10048706	0				01-02-2021	01-06-2024	01-02-2021		122	0.00.00		Flat Price	Flat Price	One Time	1	
PETROCARD INC	0016000000H8FLrAAN	a4G60000000LDy7EAG	a1160000000ECuCAAW	PETROCARD INC - BMA	a140e000009A5poAAC	AL-0000278537	27883.57	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	134	133	Delayed Straight Line	0				a140e000009A5pnAAC	WEST HILLS 76-WA-00834507	BMA	834507	0016000000woywdAAA	10045237	0				01-12-2020	31-01-2032	01-12-2020		134	0.00.00	134	Flat Price	Flat Price	One Time	1	
ABDUL NOOR MAYAR	0016000000H8FYLAA3	a4G60000000LFsdEAG	a1160000007Zk83AAC	ABDUL NOOR MAYAR - BRA	a140e000008R6nRAAS	AL-0000290757	20918.16	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	111	110	Delayed Straight Line	0				a140e000008R6nQAAS	ABDUL NOOR MAYAR-CA-2611107	BRA	802348	0016000000wozD9AAI	10054285	0				01-04-2021	30-06-2030	01-04-2021		111	0.00.00	111	Flat Price	Flat Price	One Time	1	
THABET MANAGEMENT INC	0010e00001L8UJ4AAN	a4G0e000000cgr7EAA	a110e00000gpysSAAQ	THABET MANAGEMENT INC - BMA	a147V00000DZ2CPQA1	AL-0000302362	76924.56	Flat Price		BIP Upfront True Up Deferral Option	0			1	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	107	106	Delayed Straight Line	0				a147V00000DZ2CNQA1	BUY2 032-OR-00895760	BMA	895760	0010e00001MsKGKAA3	10114385	0				01-11-2021	30-09-2030	01-11-2021		107	0.00.00	107	Flat Price	Flat Price	One Time	1	
THABET MANAGEMENT INC	0010e00001L8UJ4AAN	a4G0e000000cdMUEAY	a110e00000gpysSAAQ	THABET MANAGEMENT INC - BMA	a147V00000DZ2COQA1	AL-0000302361	33253.72	Flat Price		BIP Upfront True Up Deferral Option	0			1	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	107	106	Delayed Straight Line	0				a147V00000DZ2CMQA1	BUY2 028-OR-00894925	BMA	894925	0010e00001MWDzMAAX	10114385	0				01-11-2021	30-09-2030	01-11-2021		107	0.00.00	107	Flat Price	Flat Price	One Time	1	
JACKSONS FOOD STORES INC	0016000000H8FgiAAF	a4G0e000000cgJEEAY	a1160000000ECtYAAW	JACKSONS FOOD STORES INC - BMA	a140e000009ACgLAAW	AL-0000284634	17319.9	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	119	118	Delayed Straight Line	0				a140e000009ACgKAAW	BREWERS MINI MART II-WA-00895605	BMA	895605	0010e00001MrujNAAR	10083265	0				01-01-2021	30-11-2030	01-01-2021		119	0.00.00	119	Flat Price	Flat Price	One Time	1	
PIT STOP EXPRESS LLC	0017V00002IGVaxQAH	a4G7V000001NAg5UAG	a117V000014MgYlQAK	PIT STOP EXPRESS LLC - BRA	a147V00000KKSdgQAH	AL-0000336927	79753.53	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																		121	Delayed Straight Line	0				a147V00000KKSdfQAH	PIT STOP EXPRESS LLC-WA-2634093	BRA	918571	0017V00002IGWMwQAP	10140531	0				01-02-2021	31-03-2031	01-02-2021		122	0.00.00		Flat Price	Flat Price	One Time	1	
CALIFORNIA FUEL SUPPLY	0016000000H8FakAAF	a4G60000000LEQVEA4	a1160000007WZZ8AAO	CALIFORNIA FUEL SUPPLY - BMA	a147V000008R9feQAC	AL-0000293585	19669.47	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	111	110	Delayed Straight Line	0				a147V000008R9fdQAC	GAWFCO ENTERPRISES INC-CA-00877781	BMA	877781	00160000010t660AAA	10055539	0				01-06-2021	31-08-2030	01-06-2021		111	0.00.00	111	Flat Price	Flat Price	One Time	1	
ALSAKER CORP DBA BROADWAY GROUP	0016000000H8FcdAAF	a4G60000000LItZEAW	a1160000000ECsZAAW	ALSAKER CORP DBA BROADWAY GROUP - BMA	a147V00000DYwXrQAL	AL-0000297030	2192.83	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																		110	Delayed Straight Line	0				a147V00000DYwXqQAL	BAIRS TRUCKSTOP #2-MT-00204000	BMA	204000	0016000000woyxnAAA	10057923	0				01-08-2021	31-10-2030	01-08-2021		111	0.00.00		Flat Price	Flat Price	One Time	1	
JACKSONS FOOD STORES INC	0016000000H8FgiAAF	a4G0e000000cafLEAQ	a1160000000ECtYAAW	JACKSONS FOOD STORES INC - BMA	a147V00000DrpxlQAB	AL-0000316589	88461.29	Flat Price		BIP Upfront True Up Deferral Option	0			0	Immediate	Flat Price	Each	01t0e000006tcvpAAA	BIP Upfront True Up Deferral	One Time	Active			Contract	One Time	Gas	BIP Upfront True Up Deferral Option	Upfront																	124	36	Delayed Straight Line	0				a147V00000DrpxkQAB	HWY 99 76-OR-00894030	BMA	894030	0010e00001LpvpbAAB	10083265	0				01-10-2022	31-01-2033	01-10-2022		124	0.00.00	124	Flat Price	Flat Price	One Time	88	`;
    navigator.clipboard.writeText(data).then(function() {
        pasteExcel1();
     }, function(err) {
        console.error('error copying');
     });
     
}
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
        //console.log('$ths: ',ths);

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
                    //Select Id, ProductCode, p66_Rebate_Program__c, p66_Rebate_Program__r.Name From Product2 Where p66_Rebate_Program__c != null And ProductCode != null
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
        //console.log('$ths: ',ths);

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

async function fillColumnsMP(){
    console.log('$excelJson_top: ',excelJson_top);
    console.log('$excelJson_bottom: ',excelJson_bottom);

    let datePosition = $('.inp_col').val().trim();
    datePosition = datePosition ? parseInt(datePosition) : 1;
    console.log('$datePosition: ',datePosition);
    

    let columns = Object.keys(excelJson_bottom[0]);
    // console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    //console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    let progressBarHtml = `
        <div class="progress-wrap progress" data-progress-percent="0">
            <div class="progress-bar progress"></div>
        </div>
    `;
    $('.progress_td').html(progressBarHtml);

    i = 0;
    let jsonTopMap = new Map();
    while(i < excelJson_top.length){
        let date_apptus = excelJson_top[i]['PP_PERIOD_START_DT'];
        if(datePosition == 1){
            date_apptus = replaceBeforeChar(date_apptus, '-');
        }else{
            date_apptus = replaceTextBetween(date_apptus, '-','-','-');
        }
        jsonTopMap.set(excelJson_top[i]['Apttus__AgreementLineItem__Id']+date_apptus, excelJson_top[i]);
        i++;
    }

    i = 0;
    while(i < excelJson_bottom.length){
        let item = excelJson_bottom[i];
        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            let value = item[col];

            let date_salesforce = replaceBeforeChar(item['P66_Period_Start__c'], '-');
            let foundItem = jsonTopMap.get(item['p66_Legacy_Agreement_Line_Item_ID__c']+date_salesforce);

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
        $('.btn-blank').text(`Excel Processed - [ ${i + 1} / ${excelJson_bottom.length} ]`);
        var percent = ((i + 1) / excelJson_bottom.length) * 100;
        updateProgressBar(percent);
        await delay(1);
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
    // $('.cleftdvs_bottom').html(table);
    $('.progress_td').html('');
    $('.btn-blank').text('Blank');
    //Convert Excel Into Csv Data
    // let csv = Papa.unparse(excelJson_bottom);
    // console.log('$csv: ',csv);

    // Generate TSV string
    /* const headers = Object.keys(excelJson_bottom[0]);
    const rows = excelJson_bottom.map(obj => headers.map(header => obj[header]).join('\t'));
    let tsv = [headers.join('\t'), ...rows].join('\n');
    console.log('$tsv: ',tsv);
    let _this = $('button[data-btn="Fill Columns-MP"]');
    copyToCLipboard_TimeOut(tsv, _this, _this.text().trim(), 1000, 'Copied.'); */

    if(showLessData_Bottom){
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = table;
        const tableElement = tempDiv.querySelector('#table_bottom_id');
        var wb = XLSX.utils.table_to_book(tableElement);
        XLSX.writeFile(wb, `${getDynamicName('MP-SF_MAPPED')}.xlsx`);
    }else{
        $('.cleftdvs_bottom').html(table);
    }
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

async function fillColumnsPP(){
    console.log('$excelJson_top: ',excelJson_top);
    console.log('$excelJson_bottom: ',excelJson_bottom);

    let datePosition = $('.inp_col').val().trim();
    datePosition = datePosition ? parseInt(datePosition) : 1;
    console.log('$datePosition: ',datePosition);

    let columns = Object.keys(excelJson_bottom[0]);
    // console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    //console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    let progressBarHtml = `
        <div class="progress-wrap progress" data-progress-percent="0">
            <div class="progress-bar progress"></div>
        </div>
    `;
    $('.progress_td').html(progressBarHtml);

    i = 0;
    let jsonTopMap = new Map();
    while(i < excelJson_top.length){
        let date_apptus = excelJson_top[i]['ARS_Apttus_Rebate__PeriodStartDt__c'];
        if(datePosition == 1){
            date_apptus = replaceBeforeChar(date_apptus, '-');
        }else{
            date_apptus = replaceTextBetween(date_apptus, '-','-','-');
        }
        jsonTopMap.set(excelJson_top[i]['ALI__AgreementLineItem__c_Id']+date_apptus, excelJson_top[i]);
        i++;
    }

    i = 0;
    while(i < excelJson_bottom.length){
        let item = excelJson_bottom[i];
        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            let value = item[col];
            
            let date_salesforce = replaceBeforeChar(item['StartDate'], '-');
            let foundItem = jsonTopMap.get(item['p66_Legacy_Agreement_Line_Item_ID__c']+date_salesforce);

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
        $('.btn-blank').text(`Excel Processed - [ ${i + 1} / ${excelJson_bottom.length} ]`);
        var percent = ((i + 1) / excelJson_bottom.length) * 100;
        updateProgressBar(percent);
        await delay(1);
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
    // $('.cleftdvs_bottom').html(table);
    $('.progress_td').html('');
    $('.btn-blank').text('Blank');
    //Convert Excel Into Csv Data
    // let csv = Papa.unparse(excelJson_bottom);
    // console.log('$csv: ',csv);

    // Generate TSV string
    /* const headers = Object.keys(excelJson_bottom[0]);
    const rows = excelJson_bottom.map(obj => headers.map(header => obj[header]).join('\t'));
    let tsv = [headers.join('\t'), ...rows].join('\n');
    console.log('$tsv: ',tsv);
    let _this = $('button[data-btn="Fill Columns-PP"]');
    copyToCLipboard_TimeOut(tsv, _this, _this.text().trim(), 1000, 'Copied.'); */
    if(showLessData_Bottom){
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = table;
        const tableElement = tempDiv.querySelector('#table_bottom_id');
        var wb = XLSX.utils.table_to_book(tableElement);
        XLSX.writeFile(wb, `${getDynamicName('PP-SF_MAPPED')}.xlsx`);
    }else{
        $('.cleftdvs_bottom').html(table);
    }
}
function getDynamicName(prefix){
    return prefix + ' ' + new Date().toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
}
async function fillColumnsCB(){
    console.log('$excelJson_top: ',excelJson_top);
    console.log('$excelJson_bottom: ',excelJson_bottom);

    let columns = Object.keys(excelJson_bottom[0]);
    // console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    //console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    let progressBarHtml = `
        <div class="progress-wrap progress" data-progress-percent="0">
            <div class="progress-bar progress"></div>
        </div>
    `;
    $('.progress_td').html(progressBarHtml);

    //Create Map
    i = 0;
    let jsonTopMap = new Map();
    while(i < excelJson_top.length){
        jsonTopMap.set(excelJson_top[i]['op_ALI_ID']+excelJson_top[i]['op_CAS_Period_Start_Dt__c'], excelJson_top[i]);
        i++;
    }

    i = 0;
    while(i < excelJson_bottom.length){
        let item = excelJson_bottom[i];
        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            let value = item[col];

            let foundItem = jsonTopMap.get(item['p66_Legacy_AGL_Bundle_ID__c']+item['p66_Contractual_Payout_Date__c']);
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
        $('.btn-blank').text(`Excel Processed - [ ${i + 1} / ${excelJson_bottom.length} ]`);
        var percent = ((i + 1) / excelJson_bottom.length) * 100;
        updateProgressBar(percent);
        await delay(1);
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
    // $('.cleftdvs_bottom').html(table);
    $('.progress_td').html('');
    $('.btn-blank').text('Blank');
    //Convert Excel Into Csv Data
    // let csv = Papa.unparse(excelJson_bottom);
    // console.log('$csv: ',csv);

    // Generate TSV string
    /* const headers = Object.keys(excelJson_bottom[0]);
    const rows = excelJson_bottom.map(obj => headers.map(header => obj[header]).join('\t'));
    let tsv = [headers.join('\t'), ...rows].join('\n');
    console.log('$tsv: ',tsv);
    let _this = $('button[data-btn="Fill Columns-CB"]');
    copyToCLipboard_TimeOut(tsv, _this, _this.text().trim(), 1000, 'Copied.'); */

    if(showLessData_Bottom){
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = table;
        const tableElement = tempDiv.querySelector('#table_bottom_id');
        var wb = XLSX.utils.table_to_book(tableElement);
        XLSX.writeFile(wb, `${getDynamicName('CB-SF_MAPPED')}.xlsx`);
    }else{
        $('.cleftdvs_bottom').html(table);
    }
}

function fillDataCB(){
    clearInputs();
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
    clearInputs();
    let data =`ARS_Agreement_Id__c	ARS_Agreement_Site__c	ALI__AgreementLineItem__c_Id	ARS_ID	ARS_Apttus_Rebate__Comments__c	ALI_Product_Name	ARS_Apttus_Rebate__ScheduleType__c	ARS_Apttus_Rebate__PeriodStartDt__c	ARS_Apttus_Rebate__PeriodDt__c	lkp_Prrdlst_lkp_rp_LKP_OPTION_NM	op_ARS_Apttus_Rebate__Status__c
a1160000000ECtYAAW	a4G0e000000MjO1EAK	a140e000008yqAqAAI	a407V000006pVKUQA2	BIP Upfront True Up Deferral 1	BIP Front Loaded Rebate	Rebate	01-03-2022	31-03-2022	BIP Front Loaded Rebate Combined	Reconciled
a1160000000ECtYAAW	a4G0e000000MjO1EAK	a140e000008yqAqAAI	a407V000006pVKVQA2	BIP Upfront True Up Deferral 2	BIP Front Loaded Rebate	Rebate	01-04-2022	30-06-2022	BIP Front Loaded Rebate Combined	Reconciled
a1160000000ECtYAAW	a4G0e000000MjO1EAK	a140e000008yqAqAAI	a407V000006pVKWQA2	BIP Upfront True Up Deferral 3	BIP Front Loaded Rebate	Rebate	01-07-2022	30-09-2022	BIP Front Loaded Rebate Combined	Reconciled
a1160000000ECtYAAW	a4G0e000000MjO1EAK	a140e000008yqAqAAI	a407V000006pVKXQA2	BIP Upfront True Up Deferral 4	BIP Front Loaded Rebate	Rebate	01-10-2022	31-12-2022	BIP Front Loaded Rebate Combined	Reconciled
a1160000000ECtYAAW	a4G0e000000MjO1EAK	a140e000008yqAqAAI	a407V000006pVKYQA2	BIP Upfront True Up Deferral 5	BIP Front Loaded Rebate	Rebate	01-01-2023	31-03-2023	BIP Front Loaded Rebate Combined	Reconciled
a1160000000ECtYAAW	a4G0e000000MjO1EAK	a140e000008yqAqAAI	a407V000006pVKZQA2	BIP Upfront True Up Deferral 6	BIP Front Loaded Rebate	Rebate	01-04-2023	30-06-2023	BIP Front Loaded Rebate Combined	Reconciled
a1160000000ECtYAAW	a4G0e000000MjO1EAK	a140e000008yqAqAAI	a407V000006pVKaQAM	BIP Upfront True Up Deferral 7	BIP Front Loaded Rebate	Rebate	01-07-2023	30-09-2023	BIP Front Loaded Rebate Combined	Reconciled
a1160000000ECtYAAW	a4G0e000000MjO1EAK	a140e000008yqAqAAI	a407V000006pVKbQAM	BIP Upfront True Up Deferral 8	BIP Front Loaded Rebate	Rebate	01-10-2023	31-12-2023	BIP Front Loaded Rebate Combined	Reconciled
a1160000000ECtYAAW	a4G0e000000MjO1EAK	a140e000008yqAqAAI	a407V000006pVKcQAM	BIP Upfront True Up Deferral 9	BIP Front Loaded Rebate	Rebate	01-01-2024	31-03-2024	BIP Front Loaded Rebate Combined	Reconciled
a1160000000ECtYAAW	a4G0e000000MjO1EAK	a140e000008yqAqAAI	a407V000006pVKdQAM	BIP Upfront True Up Deferral 10	BIP Front Loaded Rebate	Rebate	01-04-2024	30-06-2024	BIP Front Loaded Rebate Combined	Reconciled
a1160000000ECtYAAW	a4G0e000000MjO1EAK	a140e000008yqAqAAI	a407V000006pVKeQAM	BIP Upfront True Up Deferral 11	BIP Front Loaded Rebate	Rebate	01-07-2024	30-09-2024	BIP Front Loaded Rebate Combined	Ready for Forecast
a1160000000ECtYAAW	a4G0e000000MjO1EAK	a140e000008yqAqAAI	a407V000006pVKfQAM	BIP Upfront True Up Deferral 12	BIP Front Loaded Rebate	Rebate	01-10-2024	31-12-2024	BIP Front Loaded Rebate Combined	Ready for Forecast
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZSAA2	BIP Upfront True Up Deferral 13	BIP Front Loaded Rebate	Rebate	01-09-2015	30-09-2015	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZTAA2	BIP Upfront True Up Deferral 14	BIP Front Loaded Rebate	Rebate	01-10-2015	31-12-2015	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZUAA2	BIP Upfront True Up Deferral 15	BIP Front Loaded Rebate	Rebate	01-01-2016	31-03-2016	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZVAA2	BIP Upfront True Up Deferral 16	BIP Front Loaded Rebate	Rebate	01-04-2016	30-06-2016	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZWAA2	BIP Upfront True Up Deferral 17	BIP Front Loaded Rebate	Rebate	01-07-2016	30-09-2016	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZXAA2	BIP Upfront True Up Deferral 18	BIP Front Loaded Rebate	Rebate	01-10-2016	31-12-2016	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZYAA2	BIP Upfront True Up Deferral 19	BIP Front Loaded Rebate	Rebate	01-01-2017	31-03-2017	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZZAA2	BIP Upfront True Up Deferral 20	BIP Front Loaded Rebate	Rebate	01-04-2017	30-06-2017	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZaAAM	BIP Upfront True Up Deferral 21	BIP Front Loaded Rebate	Rebate	01-07-2017	30-09-2017	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZbAAM	BIP Upfront True Up Deferral 22	BIP Front Loaded Rebate	Rebate	01-10-2017	31-12-2017	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZcAAM	BIP Upfront True Up Deferral 23	BIP Front Loaded Rebate	Rebate	01-01-2018	31-03-2018	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZdAAM	BIP Upfront True Up Deferral 24	BIP Front Loaded Rebate	Rebate	01-04-2018	30-06-2018	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZeAAM	BIP Upfront True Up Deferral 25	BIP Front Loaded Rebate	Rebate	01-07-2018	30-09-2018	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZfAAM	BIP Upfront True Up Deferral 26	BIP Front Loaded Rebate	Rebate	01-10-2018	31-12-2018	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZgAAM	BIP Upfront True Up Deferral 27	BIP Front Loaded Rebate	Rebate	01-01-2019	31-03-2019	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZhAAM	BIP Upfront True Up Deferral 28	BIP Front Loaded Rebate	Rebate	01-04-2019	30-06-2019	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZiAAM	BIP Upfront True Up Deferral 29	BIP Front Loaded Rebate	Rebate	01-07-2019	30-09-2019	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZjAAM	BIP Upfront True Up Deferral 30	BIP Front Loaded Rebate	Rebate	01-10-2019	31-12-2019	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZkAAM	BIP Upfront True Up Deferral 31	BIP Front Loaded Rebate	Rebate	01-01-2020	31-03-2020	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZlAAM	BIP Upfront True Up Deferral 32	BIP Front Loaded Rebate	Rebate	01-04-2020	30-06-2020	BIP Front Loaded Rebate Combined	Reconciled
a1160000007ZkH7AAK	a4G60000000LFxcEAG	a1432000002o0TSAAY	a4032000003eIZmAAM	BIP Upfront True Up Deferral 33	BIP Front Loaded Rebate	Rebate	01-07-2020	31-08-2020	BIP Front Loaded Rebate Combined	Reconciled`;
    navigator.clipboard.writeText(data).then(function() {
        pasteExcel1();
        data =`Id	RebateProgramId	p66_Legacy_Agreement_Line_Item_ID__c	StartDate	p66_IsMigrated__c	p66_Legacy_Revenue_Schedule_ID__c	p66_Comments__c	p66_Payout_Period_Status__c
0i7VC0000007DBpYAM	0i8VC0000003x1xYAA	a140e000008yqAqAAI	01-03-2022				
0i7VC0000007DBqYAM	0i8VC0000003x1xYAA	a140e000008yqAqAAI	01-04-2022				
0i7VC0000007DBrYAM	0i8VC0000003x1xYAA	a140e000008yqAqAAI	01-07-2022				
0i7VC0000007DBsYAM	0i8VC0000003x1xYAA	a140e000008yqAqAAI	01-10-2022				
0i7VC0000007DBtYAM	0i8VC0000003x1xYAA	a140e000008yqAqAAI	01-01-2023				
0i7VC0000007DBuYAM	0i8VC0000003x1xYAA	a140e000008yqAqAAI	01-04-2023				
0i7VC0000007DBvYAM	0i8VC0000003x1xYAA	a140e000008yqAqAAI	01-07-2023				
0i7VC0000007DBwYAM	0i8VC0000003x1xYAA	a140e000008yqAqAAI	01-10-2023				
0i7VC0000007DBxYAM	0i8VC0000003x1xYAA	a140e000008yqAqAAI	01-01-2024				
0i7VC0000007DByYAM	0i8VC0000003x1xYAA	a140e000008yqAqAAI	01-04-2024				
0i7VC0000007DBzYAM	0i8VC0000003x1xYAA	a140e000008yqAqAAI	01-07-2024				
0i7VC0000007DC0YAM	0i8VC0000003x1xYAA	a140e000008yqAqAAI	01-10-2024				
0i7VC0000007DDRYA2	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-09-2015				
0i7VC0000007DDSYA2	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-10-2015				
0i7VC0000007DDTYA2	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-01-2027				
0i7VC0000007DDUYA2	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-04-2027				
0i7VC0000007DDVYA2	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-11-2016				
0i7VC0000007DDWYA2	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-10-2016				
0i7VC0000007DDXYA2	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-01-2017				
0i7VC0000007DDYYA2	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-04-2017				
0i7VC0000007DDZYA2	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-07-2017				
0i7VC0000007DDaYAM	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-10-2017				
0i7VC0000007DDbYAM	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-01-2018				
0i7VC0000007DDcYAM	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-04-2018				
0i7VC0000007DDdYAM	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-07-2018				
0i7VC0000007DDeYAM	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-10-2020				
0i7VC0000007DDfYAM	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-01-2019				
0i7VC0000007DDgYAM	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-04-2019				
0i7VC0000007DDhYAM	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-07-2019				
0i7VC0000007DDiYAM	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-10-2019				
0i7VC0000007DDjYAM	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-01-2020				
0i7VC0000007DDkYAM	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-04-2020				
0i7VC0000007DDlYAM	0i8VC0000003x1yYAA	a1432000002o0TSAAY	01-07-2020				`;
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
    clearInputs();
    $('.inp_col').val('2');
    let data =`AGR_Agreement_Site__c	AGR_Agreement_Id__c	Apttus__AgreementLineItem__Id	ARS_Apttus_Rebate__ActualQuantity	PP_ID	PP_Entry_Type__c	PP_Is_Incld_Contrct_Amrtzn__c	PP_Payment_Invoice_Amount__c	PP_Payment_Invoice_num	PP_Rate	PP_Quantity	PP_Sequence_Number	PP_Status	PP_Transaction_Reason	PP_Transaction_Type	PP_Treasury_Hold_Pending_Security	PP_Type	PP_Comments	AFTN_Company_Code_c	AFTN_Currency_Code_USD_c	AFTN_Description	AFTN_SAP_Feed_Code	AFTN_Line_Item_Number	AFTN_Material_Code	AFTN_Payment_Terms	AFTN_Plant_Code	AFTN_PO_Number	AFTN_External_Reference_Type	AFTN__ID	AFTN_ShipTo	AFTN_SoldTo_c	AFTN_Status	AFTN_Sytem	ARS_ID	ALI_Product2_Name	AFTN_Internal_Transaction_Number__c	AFTN_External_Reference_Dt	AFTN_Posting_Dt	PP_Payment_Invoice_Dt__c	lkp_rp_LKP_OPTION_NM	CAS_Contractual_Balance__c	PP_PERIOD_START_DT	PP_PERIOD_END_DT	Bundle_ALI_ID
a4G0e000000MjO1EAK	a1160000000ECtYAAW	a140e000008yqAqAAI	112491	a4i7V000003Cb2FQAS	System	0	3374.73	9004521779		1	0007427640	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	0007427640	Credit	a4C7V000009fhaaUAA	0010e00001QW1PHAA1	0016000000H8FgiAAF	Reconciled	SD	a407V000006pVKUQA2	BIP Front Loaded Rebate		30-06-2022	30-06-2022	30-06-2022	BIP Front Loaded Rebate Combined	0	03-01-2022	03/31/2022	a140e000008yqApAAI
a4G0e000000MjO1EAK	a1160000000ECtYAAW	a140e000008yqAqAAI	271262	a4i7V000003CglmQAC	System	0	8137.86	9004688349		1	0007446622	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	0007446622	Credit	a4C7V000009fhw0UAA	0010e00001QW1PHAA1	0016000000H8FgiAAF	Reconciled	SD	a407V000006pVKVQA2	BIP Front Loaded Rebate		19-07-2022	19-07-2022		BIP Front Loaded Rebate Combined	0	04-01-2022	06/30/2022	a140e000008yqApAAI
a4G0e000000MjO1EAK	a1160000000ECtYAAW	a140e000008yqAqAAI	262087	a4i7V000003CwavQAC	System	0	7862.61	9005916709		1	0007483343	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	0007483343	Credit	a4C7V00000A8ZVvUAN	0010e00001QW1PHAA1	0016000000H8FgiAAF	Reconciled	SD	a407V000006pVKWQA2	BIP Front Loaded Rebate		19-10-2022	19-10-2022		BIP Front Loaded Rebate Combined	11512.59	07-01-2022	09/30/2022	a140e000008yqApAAI
a4G0e000000MjO1EAK	a1160000000ECtYAAW	a140e000008yqAqAAI	263788	a4i7V000003yXfOQAU	System	0	7913.64	9007024415		1	0007511255	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	0007511255	Credit	a4C7V00000A94kCUAR	0010e00001QW1PHAA1	0016000000H8FgiAAF	Reconciled	SD	a407V000006pVKXQA2	BIP Front Loaded Rebate		18-01-2023	18-01-2023		BIP Front Loaded Rebate Combined	19375.2	10-01-2022	12/31/2022	a140e000008yqApAAI
a4G0e000000MjO1EAK	a1160000000ECtYAAW	a140e000008yqAqAAI	253790	a4i7V00000531N9QAI	System	0	7613.7	9008142190		1	0007540533	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	0007540533	Credit	a4C7V00000AGyCRUA1	0010e00001QW1PHAA1	0016000000H8FgiAAF	Reconciled	SD	a407V000006pVKYQA2	BIP Front Loaded Rebate		19-04-2023	19-04-2023		BIP Front Loaded Rebate Combined	27288.84	01-01-2023	03/31/2023	a140e000008yqApAAI
a4G0e000000MjO1EAK	a1160000000ECtYAAW	a140e000008yqAqAAI	182709	a4i7V000005yWt7QAE	System	0	5481.27	9009241183		1	0007561156	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	0007561156	Credit	a4C7V00000C3Hw9UAF	0010e00001QW1PHAA1	0016000000H8FgiAAF	Reconciled	SD	a407V000006pVKZQA2	BIP Front Loaded Rebate		18-07-2023	18-07-2023	18-07-2023	BIP Front Loaded Rebate Combined	34902.54	04-01-2023	06/30/2023	a140e000008yqApAAI
a4G0e000000MjO1EAK	a1160000000ECtYAAW	a140e000008yqAqAAI	198689	a4i7V0000059NSpQAM	System	0	5960.67	9010410977		1	0007596084	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	0007596084	Credit	a4C7V00000CLy3BUAT	0010e00001QW1PHAA1	0016000000H8FgiAAF	Reconciled	SD	a407V000006pVKaQAM	BIP Front Loaded Rebate		19-10-2023	19-10-2023		BIP Front Loaded Rebate Combined	40383.81	07-01-2023	09/30/2023	a140e000008yqApAAI
a4G0e000000MjO1EAK	a1160000000ECtYAAW	a140e000008yqAqAAI	171589	a4i7V000003YMYKQA4	System	0	5147.67	9011530019		1	0007624009	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	0007624009	Credit	a4C7V00000AZWBsUAP	0010e00001QW1PHAA1	0016000000H8FgiAAF	Reconciled	SD	a407V000006pVKbQAM	BIP Front Loaded Rebate		17-01-2024	17-01-2024		BIP Front Loaded Rebate Combined	46344.48	10-01-2023	12/31/2023	a140e000008yqApAAI
a4G0e000000MjO1EAK	a1160000000ECtYAAW	a140e000008yqAqAAI	203933	a4i7V000003YSw9QAG	System	0	6117.99	9012675381		1	0007644193	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	0007644193	Credit	a4C7V00000AZxeOUAT	0010e00001QW1PHAA1	0016000000H8FgiAAF	Reconciled	SD	a407V000006pVKcQAM	BIP Front Loaded Rebate		17-04-2024	17-04-2024		BIP Front Loaded Rebate Combined	51492.15	01-01-2024	03/31/2024	a140e000008yqApAAI
a4G0e000000MjO1EAK	a1160000000ECtYAAW	a140e000008yqAqAAI	241147	a4i7V000003ufimQAA	System	0	7234.41	9013829906		1	0007677151	Reconciled	Rebate	Customer	0	Payment		1011	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03H9	0007677151	Credit	a4C7V00000AViNoUAL	0010e00001QW1PHAA1	0016000000H8FgiAAF	Reconciled	SD	a407V000006pVKdQAM	BIP Front Loaded Rebate		17-07-2024	17-07-2024		BIP Front Loaded Rebate Combined	57610.14	04-01-2024	06/30/2024	a140e000008yqApAAI
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	123378	a4i32000001b6gkAAA	System	0	1542.23	0967516284		1	0004680054	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	0004680054	Credit	a4C3200000059hDEAQ	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZSAA2	BIP Front Loaded Rebate		23-02-2016	22-02-2016	23-02-2016	BIP Front Loaded Rebate Combined	0	09-01-2015	09/30/2015	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	381579	a4i32000001iONIAA2	System	0	4769.74	0967516284		1	0005396427	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	11	11313617	N03	400	0004680054	Credit	a4C3200000059hEEAQ	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZTAA2	BIP Front Loaded Rebate		23-02-2016	22-02-2016	23-02-2016	BIP Front Loaded Rebate Combined	0	10-01-2015	12/31/2015	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	351884	a4i32000001qtu9AAA	System	0	4398.55	0968176641		1	0006389266	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	0006389266	Credit	a4C320000005W5HEAU	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZUAA2	BIP Front Loaded Rebate		15-04-2016	14-04-2016	15-04-2016	BIP Front Loaded Rebate Combined	0	01-01-2016	03/31/2016	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	405763	a4i320000008f5tAAA	System	0	5072.0375	0969330326		1	0006446755	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	0006446755	Credit	a4C32000000G9yWEAS	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZVAA2	BIP Front Loaded Rebate		16-07-2016	15-07-2016	16-07-2016	BIP Front Loaded Rebate Combined	10710.52	04-01-2016	06/30/2016	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	396818	a4i32000001oLZnAAM	System	0	4960.225	9500684742		1	0006488508	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	0006488508	Credit	a4C320000001Zb3EAE	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZWAA2	BIP Front Loaded Rebate		15-10-2016	14-10-2016	15-10-2016	BIP Front Loaded Rebate Combined	15782.5575	07-01-2016	09/30/2016	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	397060	a4i32000001ohq8AAA	System	0	4963.25	9501789619		1	0006560264	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	0006560264	Credit	a4C3200000027NMEAY	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZXAA2	BIP Front Loaded Rebate		17-01-2017	16-01-2017	17-01-2017	BIP Front Loaded Rebate Combined	20742.7825	10-01-2016	12/31/2016	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	331268	a4i32000000wsInAAI	System	0	4140.85	9502885160		1	0006601441	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	0006601441	Credit	a4C32000000svRpEAI	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZYAA2	BIP Front Loaded Rebate		18-04-2017	17-04-2017	18-04-2017	BIP Front Loaded Rebate Combined	25706.0325	01-01-2017	03/31/2017	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	388153	a4i0e000000QEmZAAW	System	0	4851.9125	9504020802		1	0006647430	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	0006647430	Credit	a4C0e000000PhXVEA0	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZZAA2	BIP Front Loaded Rebate		18-07-2017	17-07-2017	18-07-2017	BIP Front Loaded Rebate Combined	29846.8825	04-01-2017	06/30/2017	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	389939	a4i0e000000EkkhAAC	System	0	4874.2375	9505141926		1	0006725758	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	0006725758	Credit	a4C0e0000026hwzEAA	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZaAAM	BIP Front Loaded Rebate		14-10-2017	13-10-2017	14-10-2017	BIP Front Loaded Rebate Combined	34698.795	07-01-2017	09/30/2017	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	378771	a4i0e000000F0m7AAC	System	0	4734.6375	9506261345		1	0006769502	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	0006769502	Credit	a4C0e0000027GPVEA2	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZbAAM	BIP Front Loaded Rebate		16-01-2018	15-01-2018	16-01-2018	BIP Front Loaded Rebate Combined	39573.0325	10-01-2017	12/31/2017	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	315375	a4i0e000001otGkAAI	System	0	3942.1875	9507319775		1	0006807315	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	0006807315	Credit	a4C0e0000002l4VEAQ	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZcAAM	BIP Front Loaded Rebate		14-04-2018	13-04-2018	14-04-2018	BIP Front Loaded Rebate Combined	44307.67	01-01-2018	03/31/2018	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	370694	a4i0e000001p7KPAAY	System	0	4633.675	9508549876		1	0006846797	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	0006846797	Credit	a4C0e0000003L1zEAE	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZdAAM	BIP Front Loaded Rebate		20-07-2018	19-07-2018	20-07-2018	BIP Front Loaded Rebate Combined	45160.0753333333333	04-01-2018	06/30/2018	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	384036	a4i0e000001sd4GAAQ	System	0	4800.45	9509736132		1	0006890627	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	400	0006890627	Credit	a4C0e0000022KIcEAM	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZeAAM	BIP Front Loaded Rebate		24-10-2018	23-10-2018	24-10-2018	BIP Front Loaded Rebate Combined	44776.9525641025641	07-01-2018	09/30/2018	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	337396	a4i0e000001srqbAAA	System	0	4217.45	9510783806		1	0006933706	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03HW	0006933706	Credit	a4C0e0000022qHNEAY	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZfAAM	BIP Front Loaded Rebate		19-01-2019	17-01-2019	19-01-2019	BIP Front Loaded Rebate Combined	43995.4530390189521	10-01-2018	12/31/2018	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	308263	a4i0e000001t5sNAAQ	System	0	3853.2875	9511856126		1	0006975868	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03HW	0006975868	Credit	a4C0e0000023OZKEA2	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZgAAM	BIP Front Loaded Rebate		19-04-2019	18-04-2019	19-04-2019	BIP Front Loaded Rebate Combined	42002.6505791527313	01-01-2019	03/31/2019	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	370157	a4i0e000002DmpkAAC	System	0	4626.9625	9512987677		1	0007020075	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03HW	0007020075	Credit	a4C0e000004j8rbEAA	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZhAAM	BIP Front Loaded Rebate		19-07-2019	18-07-2019	19-07-2019	BIP Front Loaded Rebate Combined	38997.2766486982753	04-01-2019	06/30/2019	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	352619	a4i0e000002E3x0AAC	System	0	4407.7375	9000066492		1	0007075068	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03HW	0007075068	Credit	a4C0e000004jhgJEAQ	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZiAAM	BIP Front Loaded Rebate		18-10-2019	18-10-2019	18-10-2019	BIP Front Loaded Rebate Combined	35981.7524556387773	07-01-2019	09/30/2019	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	303426	a4i0e000002EJbRAAW	System	0	3792.825	9000486295		1	0007124812	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03HW	0007124812	Credit	a4C0e000006ImrxEAC	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZjAAM	BIP Front Loaded Rebate		16-01-2020	16-01-2020	16-01-2020	BIP Front Loaded Rebate Combined	31685.3052106312273	10-01-2019	12/31/2019	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	293688	a4i0e000002ZU84AAG	System	0	3671.1	9000897077		1	0007161552	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03HW	0007161552	Credit	a4C0e000006JO4LEAW	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZkAAM	BIP Front Loaded Rebate		15-04-2020	15-04-2020	15-04-2020	BIP Front Loaded Rebate Combined	25498.4355224418591	01-01-2020	03/31/2020	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	241955	a4i0e000002Zd0tAAC	System	0	3024.4375	9001284553		1	0007184925	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03HW	0007184925	Credit	a4C0e000006JxmVEAS	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZlAAM	BIP Front Loaded Rebate		15-07-2020	15-07-2020	15-07-2020	BIP Front Loaded Rebate Combined	17507.4145842524909	04-01-2020	06/30/2020	a1432000002o0TRAAY
a4G60000000LFxcEAG	a1160000007ZkH7AAK	a1432000002o0TSAAY	218960	a4i0e000002SUH7AAO	System	0	2737	9001504977		1	0007199562	Reconciled	Rebate	Customer	0	Payment		NAWC	USD	BIPFR Quarterly Rebate	452	10	11313617	N03	03HW	0007199562	Credit	a4C0e00000246dCEAQ	0016000000wozDPAAY	0016000000NNcPUAA1	Reconciled	SD	a4032000003eIZmAAM	BIP Front Loaded Rebate		01-09-2020	01-09-2020	01-09-2020	BIP Front Loaded Rebate Combined	5889.07239606312273	07-01-2020	08/31/2020	a1432000002o0TRAAY`;
    navigator.clipboard.writeText(data).then(function() {
        pasteExcel1();
        data =`Id	p66_Rebate_Program__c	p66_Legacy_Agreement_Line_Item_ID__c	P66_Period_End__c	P66_Period_Start__c	p66_IsMigrated__c	p66_Legacy_Program_Payment_ID__c	p66_Actual_quantity__c	p66_Entry_Type__c	p66_Exclude_from_Contractual_Balance__c	p66_Invoice_Payment_Amount__c	P66_Payment_Invoice__c	p66_Rate__c	P66_Sequence_Number__c	p66_Status__c	p66_Transaction_Reason__c	p66_Transaction_Type__c	p66_Treasury_Hold_Pending_Security__c	p66_Type__c	p66_Comments__c	p66_Company_Code__c	p66_Currency_Code_USD__c	p66_Description__c	p66_Line_Item_Number__c	p66_Material_Code__c	p66_Payment_Terms__c	p66_Plant_Code__c	p66_Legacy_PO_Number__c	p66_SAP_Reference_Type__c	p66_Legacy_SD_AFTN_ID__c	p66_Ship_To__c	p66_Sold_To__c	p66_SAP_Status__c	p66_Internal_Transaction_Number__c	p66_SAP_External_Reference_Date__c	p66_Posting_Date__c	P66_Invoice_Payment_Date__c	p66_SF_Contractual_Program_Balance__c	p66_Legacy_SAP_Quantity__c
0i6VC0000003nIjYAI	0i8VC0000003x1xYAA	a140e000008yqAqAAI	31-03-2022	01-03-2022																																		
0i6VC0000003nIkYAI	0i8VC0000003x1xYAA	a140e000008yqAqAAI	30-06-2022	01-04-2022																																		
0i6VC0000003nIlYAI	0i8VC0000003x1xYAA	a140e000008yqAqAAI	30-09-2022	01-07-2022																																		
0i6VC0000003nImYAI	0i8VC0000003x1xYAA	a140e000008yqAqAAI	31-12-2022	01-10-2022																																		
0i6VC0000003nInYAI	0i8VC0000003x1xYAA	a140e000008yqAqAAI	31-03-2023	01-01-2023																																		
0i6VC0000003nIoYAI	0i8VC0000003x1xYAA	a140e000008yqAqAAI	30-06-2023	01-04-2023																																		
0i6VC0000003nIpYAI	0i8VC0000003x1xYAA	a140e000008yqAqAAI	30-09-2023	01-07-2023																																		
0i6VC0000003nIqYAI	0i8VC0000003x1xYAA	a140e000008yqAqAAI	31-12-2023	01-10-2023																																		
0i6VC0000003nIrYAI	0i8VC0000003x1xYAA	a140e000008yqAqAAI	31-03-2024	01-01-2024																																		
0i6VC0000003nIsYAI	0i8VC0000003x1xYAA	a140e000008yqAqAAI	30-06-2024	01-04-2024																																		
0i6VC0000003nItYAI	0i8VC0000003x1xYAA	a140e000008yqAqAAI	30-09-2024	01-07-2024																																		
0i6VC0000003nIuYAI	0i8VC0000003x1xYAA	a140e000008yqAqAAI	31-12-2024	01-10-2024																																		
0i6VC0000003nIvYAI	0i8VC0000003x1xYAA	a140e000008yqAqAAI	28-02-2025	01-01-2025																																		
0i6VC0000003nH7YAI	0i8VC0000003x1yYAA	a1432000002o0TSAAY	30-09-2015	01-09-2015																																		
0i6VC0000003nH8YAI	0i8VC0000003x1yYAA	a1432000002o0TSAAY	31-12-2015	01-10-2015																																		
0i6VC0000003nH9YAI	0i8VC0000003x1yYAA	a1432000002o0TSAAY	31-03-2016	01-01-2016																																		
0i6VC0000003nHAYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	30-06-2016	01-04-2016																																		
0i6VC0000003nHBYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	30-09-2016	01-07-2016																																		
0i6VC0000003nHCYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	31-12-2016	01-10-2016																																		
0i6VC0000003nHDYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	31-03-2017	01-01-2017																																		
0i6VC0000003nHEYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	30-06-2017	01-04-2017																																		
0i6VC0000003nHFYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	30-09-2017	01-07-2017																																		
0i6VC0000003nHGYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	31-12-2017	01-10-2017																																		
0i6VC0000003nHHYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	31-03-2018	01-01-2018																																		
0i6VC0000003nHIYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	30-06-2018	01-04-2018																																		
0i6VC0000003nHJYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	30-09-2018	01-07-2018																																		
0i6VC0000003nHKYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	31-12-2018	01-10-2018																																		
0i6VC0000003nHLYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	31-03-2019	01-01-2019																																		
0i6VC0000003nHMYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	30-06-2019	01-04-2019																																		
0i6VC0000003nHNYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	30-09-2019	01-07-2019																																		
0i6VC0000003nHOYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	31-12-2019	01-10-2019																																		
0i6VC0000003nHPYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	31-03-2020	01-01-2020																																		
0i6VC0000003nHQYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	30-06-2020	01-04-2020																																		
0i6VC0000003nHRYAY	0i8VC0000003x1yYAA	a1432000002o0TSAAY	31-08-2020	01-07-2020																																		`;
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
    // $('.txt_area').val('');
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
            console.log('TOP: ', results.data);
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
    // console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="t_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    //console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    let dataLength = excelJson_top.length;
    if(showLessData && dataLength > 25){
        dataLength = 25;
    }
    while(i < dataLength){
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
            console.log('BOTTOM: ', results.data);
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
    // console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    //console.log('$ths: ',ths);

    i = 0;
    let trs = '';
    let dataLength = excelJson_bottom.length;
    if(showLessData_Bottom && dataLength > 25){
        dataLength = 25;
    }
    while(i < dataLength){
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
    // console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        if(columsArray.includes(col))
            ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    //console.log('$ths: ',ths);

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
    // console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        if(!columsArray.includes(col))
            ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    //console.log('$ths: ',ths);

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
    // console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    //console.log('$ths: ',ths);

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
    // console.log('$columns: ',columns);
    columns.splice(1, 0, 'p66_Child_Contract__c');
    columns.splice(2, 0, 'Contract Number');
    // console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    //console.log('$ths: ',ths);

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
$(document).on('mouseover', '.b_x_td[data-dup="true"]', function (e){
    let color = $(this).data('color');
    if(color){
        $(this).attr('title',`duplicates=(${colorAndCountMap.get(color)})`);
    }
 });
let colorAndCountMap = new Map();
function highlightDuplicates(){

    let inpColor = $('.inp_col').val();
    let columsArray = $('.txt_area').val().split('\n');
    let columName = columsArray[0];

    let colorsMap = new Map();
    let i = 0;
    while(i < excelJson_top.length){
        let item = excelJson_top[i];
        if(!colorsMap.has(item[columName]))
            colorsMap.set(item[columName], '#'+(Math.random().toString(16)+'00000').slice(2,8));
        i++;
    }

    let columns = Object.keys(excelJson_top[0]);
    // console.log('$columns: ',columns);
    i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    //console.log('$ths: ',ths);
    i = 0;
    let trs = '';

    while(i < excelJson_top.length){
        let item = excelJson_top[i];

        let concated = item[columName];

        let f = 0;
        let highlight = false;
        while(f < excelJson_top.length){
            let item_f = excelJson_top[f];
            
            if(f != i){
                let concated_f = item_f[columName];
                if(concated == concated_f && !highlight){
                    highlight = true;
                    if(!colorAndCountMap.has(colorsMap.get(item_f[columName]))){
                        colorAndCountMap.set(colorsMap.get(item_f[columName]), 0);
                    }
                    colorAndCountMap.set(colorsMap.get(item_f[columName]), colorAndCountMap.get(colorsMap.get(item_f[columName])) + 1);
                }
            }

            f++;
        }

        let j = 0;
        let tds = '';
        while(j < columns.length){
            let col = columns[j];
            let style = ``;
            let dup = ``;
            let data_color = ``;
            if(highlight){
                let color = colorsMap.get(item[columName]);
                if(inpColor){
                    color = inpColor;
                }else{
                    data_color = `data-color="${color}"`;
                }
                dup = `data-dup=true`;
                style = `style="background-color:${color}"`;
            }
            tds += `<td class="b_x_td" ${style} ${data_color} ${dup}>${getIdelValue(item[col])}</td>`;
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
 function highlightDuplicates_Deprecated(){
    let colorsMap = new Map();
    let i = 0;
    while(i < excelJson_top.length){
        let item = excelJson_top[i];
        if(!colorsMap.has(item['ALI__AgreementLineItem__c_Id']))
            colorsMap.set(item['ALI__AgreementLineItem__c_Id'], '#'+(Math.random().toString(16)+'00000').slice(2,8));
        i++;
    }

    let columns = Object.keys(excelJson_top[0]);
    // console.log('$columns: ',columns);
    i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    //console.log('$ths: ',ths);
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
    // console.log('$columns: ',columns);
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
        //console.log('$ths: ',ths);

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
$(document).on('dblclick', '.t_x_td,.b_x_td', function (e){
    let text = $(this).text().trim();
    console.log('$text: ',text);
    copyToCLipboard(text);
    $('.t_x_th,.b_x_th,.t_x_td,.b_x_td').css('color','#313131');
    $(this).css('color','#9f26c7');
    $('.inp_col').val(text);
    if(!isCtrlPressed){
        filterRows();
    }
 });
 $(document).on('dblclick', '.inp_col', function (e){
    navigator.clipboard.readText().then(text => {
       $(this).val(text);
    }).catch(err => {
       console.error(err);
    });
 });

 $(document).on('contextmenu', '.inp_col', function (e){
    e.preventDefault();
    $(this).val('');
 });

function fillShipToAndSoldTo(){
    console.log('$legacyAccountKeyAndSfIDMap:' , legacyAccountKeyAndSfIDMap);
    let columns = Object.keys(excelJson_top[0]);
    // console.log('$columns: ',columns);
    columns.splice(1, 0, columns[0] + '-SF');
    $('.txt_area').val(columns[0] + '-SF');
    // console.log('$columns: ',columns);
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    //console.log('$ths: ',ths);

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
    //console.log('$ths: ',ths);

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
    // console.log('$columns: ',columns);
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }
    //console.log('$ths: ',ths);

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
    //console.log('$ths: ',ths);

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
function clearInputs(){
    $('.inp_col').val('');
    $('.txt_area').val('');
}

function filterRows(){
    let inpFilterValue = $('.inp_col').val();
    let columsArray = $('.txt_area').val().split('\n').filter(Boolean);
    let columName = columsArray[0];

    let columns = Object.keys(excelJson_top[0]);
    if(columsArray.length > 1){
        columns = [...columsArray];
    }
    let i = 0;
    let ths = '';
    while (i < columns.length) {
        let col = columns[i];
        ths += `<td class="b_x_th">${getIdelValue(col)}</td>`;
        i++;
    }

    i = 0;
    let trs = '';
    while(i < excelJson_top.length){
        let item = excelJson_top[i];
        if(item[columName] == inpFilterValue){
            let j = 0;
            let tds = '';
            while(j < columns.length){
                tds += `<td class="b_x_td">${getIdelValue(item[columns[j]])}</td>`;
                j++;
            }
            trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
        }
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