let excelData1;
let excelData2;
$(document).ready(function() {
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
    }
});

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
let excelJson_top = null;
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
let excelJson_bottom = null;
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