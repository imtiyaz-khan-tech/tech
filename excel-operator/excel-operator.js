let excelData1;
let excelData2;
$(document).ready(function() {
    console.log('excel-operator called');
});
$(document).on('click', '.btn', function (e){
   let btn = $(this).data('btn');
   console.log('$btn: ',btn);
   if(btn == 'Paste Excel - 1'){
        pasteExcel1();
   }else if(btn == 'Paste Excel - 2'){
        pasteExcel2();
   }
});
function pasteExcel1(){
    navigator.clipboard.readText().then(text => {
       excelData1 = text;
       console.log('$excelData1: ',excelData1);
       generateExcelTable(true);
    }).catch(err => {
       console.error(err);
    });
}
function pasteExcel2(){
    navigator.clipboard.readText().then(text => {
       excelData2 = text;
       console.log('$excelData2: ',excelData2);
    }).catch(err => {
       console.error(err);
    });
}
function generateExcelTable(isFirst){
    if(isFirst){
        let rows = excelData1.trim().split('\n');
        console.log('$rows: ',rows);
        let firstRowThs = rows[0].split('\t');
        console.log('$firstRowThs: ',firstRowThs);
        let i = 0;
        let ths = '';
        while(i < firstRowThs.length){
            ths += `<th class="t_x_th">${firstRowThs[i].trim()}</th>`;
            i++;
        }

        i = 1;
        let trs = '';
        while(i < rows.length){
            let row = rows[i].split('\t');
            let tds = '';
            let j = 0;
            while(j < row.length){
                tds += `<td class="t_x_td">${row[j].trim()}</td>`;
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
}