let conn;
let baseUrl;
let sessionId;
$(document).ready(function () {
    let url = new URL(window.location.href);
    console.log('$url: ', url);
    baseUrl = url.searchParams.get('baseUrl');
    console.log('$baseUrl: ', baseUrl);
    sessionId = url.searchParams.get('sessionId');
    console.log('$sessionId: ', sessionId);
    //Initialize Connection
    initialize();

    $('.Max-Keys').val(5);
    $('.Keys').val(`0014x000011ua0bAAA\n0014x000011ua0CAAQ\n0014x000011ua0RAAQ\n0014x000011ua10AAA\n0014x000011ua15AAA`);
    $('.Query').val(`Select Id, Name, (Select Id From Contract_Volume_Summary__r Where p66_Year_Formula__c = 2026 And p66_Product__c = 'Gas') From Account Where ID IN ($)`);
    $('.Fields').val(`Id\nName`);
});

async function initialize(){
    //Connection
    conn = await getConnection(baseUrl, sessionId);
    console.log('$conn: ',conn);
    //Fetch Records
    // fetchRecords();
}

$(document).on('click', '.execute', function (e){
    $('.grid-item-2').html(`<p></p>`);
   fetchRecords();
});

async function getConnection(baseUrl, sessionId){
    let conn = new jsforce.Connection({
       instanceUrl : baseUrl,
       serverUrl : baseUrl,
       sessionId : sessionId
   });
   return conn;
}

// let totalKeys = ['0014x000011ua0bAAA','0014x000011ua0CAAQ','0014x000011ua0RAAQ','0014x000011ua10AAA','0014x000011ua15AAA','0014x000011ua1BAAQ','0014x000011ua3HAAQ','0014x000011ua5bAAA','0014x000011ua5DAAQ','0014x000011ua5lAAA','0014x000011ua5WAAQ','0014x000011ua6fAAA','0014x000011ua8MAAQ','0014x000011ua9KAAQ','0014x000011uaajAAA','0014x000011uaArAAI','0014x000011uaAxAAI','0014x000011uaB5AAI','0014x000011uabiAAA','0014x000011uabXAAQ','0014x000011uaC8AAI','0014x000011uacGAAQ'];
// let query = `Select Id, Name, (Select Id From Contract_Volume_Summary__r Where p66_Year_Formula__c = 2026 And p66_Product__c = 'Gas') From Account Where ID IN ($)`;

let htmlCode;

async function fetchRecords() {

    let totalKeys = $('.Keys').val().split('\n').filter(Boolean);

    let maxKeys = parseInt($('.Max-Keys').val());

    console.log('$maxKeys:', maxKeys);
    console.log('$totalKeys:', totalKeys);

    const keySets = chunkArray(totalKeys, maxKeys);

    console.log('$keySets:', keySets);

    const promises = keySets.map(async (keySet) => {

        const keys = keySet.map(key => `'${key}'`).join(',');
        // console.log('$keys: ',keys);
        const q = $('.Query').val().trim().replace(`$`,keys);
        // console.log('$query: ',query);

        try {
            const res = await conn.query(q);
            console.log('Result:', res);
            return res;
        } catch (error) {
            console.error('$Error:', error);
            throw error;
        }
    });

    const results = await Promise.all(promises);

    console.log('Checkpoint 1');
    console.log('$results: ',results);

    const allRecords = results.flatMap(result => result.records);

    console.log('$allRecords: ',allRecords);

    // console.table(allRecords);

    let fields = $('.Fields').val().split('\n').filter(Boolean);
    console.log('$fields: ',fields);

    htmlCode = generateTable(allRecords, fields);

    $('.grid-item-2').html(htmlCode);

    
}

function generateTable(records, fields) {

    let html = `
        <table border="1" cellspacing="0" cellpadding="5" style="border-collapse:collapse;width:100%">
            <thead>
                <tr>
                    ${fields.map(field => `<th>${field}</th>`).join("")}
                </tr>
            </thead>
            <tbody>
    `;

    records.forEach(record => {

        html += "<tr>";

        fields.forEach(field => {
            html += `<td>${record[field] ?? ""}</td>`;
        });

        html += "</tr>";
    });

    html += `
            </tbody>
        </table>
    `;

    return html;
}

function chunkArray(arr, maxKeys) {
    const result = [];

    for (let i = 0; i < arr.length; i += maxKeys) {
        result.push(arr.slice(i, i + maxKeys));
    }

    return result;
}

$(document).on('click', '.copy-table', function (e){
   copyToCLipboard(htmlCode);
});

function copyToCLipboard(value) {
   let text = value;
   navigator.clipboard.writeText(text).then(function() {
      document.title = 'Copied...';
   }, function(err) {
      console.error('error copying');
      document.title = 'Error...';
   });
}