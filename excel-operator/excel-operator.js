let excelData1;
let excelData2;
$(document).ready(function() {
});
$(document).on('click', '.btn', function(e) {
    let btn = $(this).data('btn');
    if (btn == 'Paste Excel - 1') {
        pasteExcel1();
    } else if (btn == 'Paste Excel - 2') {
        pasteExcel2();
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
    while (i < firstRowCells.length) {
        ths += `<th class="t_x_th">${firstRowCells[i].trim()}</th>`;
        i++;
    }

    i = 1;
    let trs = '';
    while (i < rows.length) {
        let cells = rows[i].split('\t');
        let tds = '';
        let j = 0;
        while (j < cells.length) {
            tds += `<td class="t_x_td">${cells[j].trim()}</td>`;
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