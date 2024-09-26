let excelData1;
let excelData2;
$(document).ready(function() {
    $('.txt_area').val('ALI_ID\nALI_Soldto__c');
});
$(document).on('click', '.btn', function(e) {
    let btn = $(this).data('btn');
    if (btn == 'Paste Excel - 1') {
        pasteExcel1();
    } else if (btn == 'Paste Excel - 2') {
        pasteExcel2();
    } else if (btn == 'Clear Top') {
        $('.cleftdvs_top').html(`<button class="btn pst_btn" data-btn="Paste Excel - 1">Paste Excel</button>`);
    } else if (btn == 'Clear Bottom') {
        $('.cleftdvs_bottom').html(`<button class="btn pst_btn" data-btn="Paste Excel - 2">Paste Excel</button>`);
    } else if (btn == 'Include Columns') {
        let columsArray = $('.txt_area').val().split('\n');
        console.log('$columsArray: ',columsArray);
        includeColumns(columsArray);
    } else if (btn == 'Exclude Columns') {
        let columsArray = $('.txt_area').val().split('\n');
        console.log('$columsArray: ',columsArray);
        excludeColumns(columsArray);
    } else if (btn == 'Copy Excel - 1') {
        let tableText = '';
        $('.t_x_table tr').each(function() {
            let rowText = '';
            $(this).find('th, td').each(function() {
                rowText += $(this).text() + '\t';
            });
            tableText += rowText.trim() + '\n';
        });
        copyToCLipboard(tableText.trim().split('\n').filter(Boolean).join('\n'));
        /* const blob = new Blob([$('.cleftdvs_top').html()], { type: "text/html" });
        navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]); */
    } else if (btn == 'Copy Excel - 2') {
        let tableText = '';
        $('.b_x_table tr').each(function() {
            let rowText = '';
            $(this).find('th, td').each(function() {
                rowText += $(this).text() + '\t';
            });
            tableText += rowText.trim() + '\n';
        });
        copyToCLipboard(tableText.trim().split('\n').filter(Boolean).join('\n'));
    }
});

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
        generateExcelTableTop();
    }).catch(err => {
        console.error(err);
    });
}

function pasteExcel2() {
    navigator.clipboard.readText().then(text => {
        excelData2 = text;
        generateExcelTableBottom();
    }).catch(err => {
        console.error(err);
    });
}

function generateExcelTableTop() {
    let rows = excelData1.trim().split('\n');
    let firstRowCells = rows[0].split('\t');

    let i = 0;
    let ths = '';
    // let f_inx = 0;

    while (i < firstRowCells.length) {
        ths += `<th class="t_x_th">${firstRowCells[i].trim()}</th>`;
        /* if(firstRowCells[i].trim() == 'ALI_Soldto__c'){
            f_inx = i;
        } */
        i++;
    }

    i = 1;
    let trs = '';
    while (i < rows.length) {
        let cells = rows[i].split('\t');
        let tds = '';
        let j = 0;
        while (j < cells.length) {
            /* if(f_inx == j){
                tds += `<td class="t_x_td" style="background-color:yellow;">${cells[j].trim()}</td>`;
            }else{ */
                tds += `<td class="t_x_td">${cells[j].trim()}</td>`;
            //}
            j++;
        }
        trs += `<tr  class="t_x_tr t_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="t_x_table">
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

function generateExcelTableBottom() {
    let rows = excelData2.trim().split('\n');
    let firstRowCells = rows[0].split('\t');

    let i = 0;
    let ths = '';
    while (i < firstRowCells.length) {
        ths += `<th class="b_x_th">${firstRowCells[i].trim()}</th>`;
        i++;
    }

    i = 1;
    let trs = '';
    while (i < rows.length) {
        let cells = rows[i].split('\t');
        let tds = '';
        let j = 0;
        while (j < cells.length) {
            tds += `<td class="b_x_td">${cells[j].trim()}</td>`;
            j++;
        }
        trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="b_x_table">
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

function includeColumns(columsArray){
    let rows = excelData1.trim().split('\n');
    let firstRowCells = rows[0].split('\t');

    let i = 0;
    let ths = '';
    let f_inx = 0;

    let indexes = [];

    while (i < firstRowCells.length) {
        if(columsArray.includes(firstRowCells[i].trim())){
            ths += `<th class="b_x_th">${firstRowCells[i].trim()}</th>`;
            indexes.push(i);
        }
        i++;
    }

    i = 1;
    let trs = '';
    while (i < rows.length) {
        let cells = rows[i].split('\t');
        let tds = '';
        let j = 0;
        while (j < cells.length) {
            if(indexes.includes(j)){
                tds += `<td class="b_x_td">${cells[j].trim()}</td>`;
            }
            j++;
        }
        trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="b_x_table">
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
    let rows = excelData1.trim().split('\n');
    let firstRowCells = rows[0].split('\t');

    let i = 0;
    let ths = '';

    let indexes = [];

    while (i < firstRowCells.length) {
        let col = firstRowCells[i].trim();
        if(!columsArray.includes(col)){
            console.log('$true-col: ',col);
            ths += `<th class="b_x_th">${col}</th>`;
            indexes.push(i);
        }else{
            console.log('$false-col: ',col);
        }
        i++;
    }
    console.log('$ths: ',ths);
    console.log('$indexes: ',indexes);

    i = 1;
    let trs = '';
    while (i < rows.length) {
        let cells = rows[i].split('\t');
        let tds = '';
        let j = 0;
        while (j < cells.length) {
            if(indexes.includes(j)){
                tds += `<td class="b_x_td">${cells[j].trim()}</td>`;
            }
            j++;
        }
        trs += `<tr  class="b_x_tr b_x_tb_tr">${tds}</tr>`;
        i++;
    }
    let table = `
        <table class="b_x_table">
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
$(document).on('click', '.t_x_th,.b_x_th,.t_x_td,.b_x_td', function (e){
   let text = $(this).text().trim();
   console.log('$text: ',text);
   copyToCLipboard(text);
   //$('.t_x_th,.b_x_th,.t_x_td,.b_x_td').css('color','default');
   //$(this).css('color','#9f26c7;');
});