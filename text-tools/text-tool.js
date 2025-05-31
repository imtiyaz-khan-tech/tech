$(document).ready(function() {
    // changeFavicon('Text Tools');

    populateFromLocalStorage();

    Draggable.create('.small_popup_1', {
        handle: '.small_popup_1_box_heading_div'
    });

    /* $('.txt_1').val(`10-AZ-2020
01-AZ-2021
04-AZ-2021
07-AZ-2021
10-AZ-2021
01-AZ-2022
04-AZ-2022
07-AZ-2022
10-AZ-2022
01-AZ-2023
04-AZ-2023
07-AZ-2023
10-AZ-2023
01-AZ-2024
04-AZ-2024
07-AZ-2024`); */
});
$(document).on('click', '.close-icon_1', function (e){
    // $('.d_outer').removeClass('blur');
    $('.small_popup_1').addClass('hide');
});

$(document).on('click', '.b_lines_top', function (e){
   let txt1 = txt_1();
   generateTable(txt1);
});
$(document).on('click', '.b_lines_bottom', function (e){
   let txt2 = txt_2();
   generateTable(txt2);
});

function generateTable(txt){
    txt = txt.trim().split('\n').map(l => l.trim());
    if(txt.filter(Boolean).length){
        let tBody = '';
        txt.forEach((val, indx) => {
            tBody += `<tr class="tbody_1_tr tbody_1_tr_1">
                <td class="td_1 td_1_1">
                    ${indx + 1}
                </td>
                <td class="td_1 td_1_2">
                    ${val}
                </td>
            </tr>`
        });
        $('.small_popup_1').removeClass('hide');
        $('.tbody_1').html(tBody);
    }
}

$(document).on('click', '.td_1:not(.td_1_1)', function (e){
   let _this = $(this);
   let text = $(this).text().trim();
   navigator.clipboard.writeText(text).then(function() {
        $('.td_1').css('color','#666666');
        _this.css('color','#ba31b3');
    }, function(err) {
        _this.css('color','#ba3131');
    });
});

function changeFavicon(title) {
    document.title = title;
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'text-tools/icon.svg';
    document.getElementsByTagName('head')[0].appendChild(link);
}
$(document).on('click', '.btn', function(e) {
    let btn = $(this).data('btn');
    if (btn == 'Replace') {
        let replace_with = inp('replace_with');
        let replace_value = inp('replace_value');
        let txt1 = txt_1();

        if(replace_value == '\\n' && replace_with == `\\n\\n`){
            txt1 = txt1.trim().split('\n').map(l=>{
                return l.trim();
            });
            txt_2(txt1.join('\n\n'));
        }else{
            if(replace_with == `\\n`){
                txt1 = txt1.trim().split(replace_value).map(l=>{
                    return l.trim();
                });
                txt_2(txt1.join('\n'));
            }else if(replace_with == `\\n\\n`){
                txt1 = txt1.trim().split(replace_value).map(l=>{
                    return l.trim();
                });
                txt_2(txt1.join('\n\n'));
            }else{
                if(replace_value == '\\n'){
                    txt_2(txt1.replaceAll(/\n/g, replace_with).trim());
                }else{
                    txt_2(txt1.replaceAll(replace_value, replace_with));
                    // txt_2(txt1.replaceAll(replace_value, replace_with).trim());
                }
            }
        }
        afterActions();
    }else if (btn == 'Add Left') {
        let left_right_value = inp('left_right_value');
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l=>{
            return left_right_value + l;
        });
        txt_2(txt1.join('\n'));
        afterActions();
    }else if (btn == 'Add Right') {
        let left_right_value = inp('left_right_value');
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l=>{
            return l + left_right_value;
        });
        txt_2(txt1.join('\n'));
        afterActions();
    }else if (btn == 'Add Left-Right') {
        let left_right_value = inp('left_right_value');
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l=>{
            return  left_right_value + l + left_right_value;
        });
        txt_2(txt1.join('\n'));
        afterActions();
    }else if (btn == 'Trim') {
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l => l.trim());
        txt_2(txt1.filter(Boolean).join('\n'));
        txt_1(txt1.filter(Boolean).join('\n'));
    }else if (btn == 'Update') {
        if(txt_2())
            updateToTop();
    }else if (btn == 'Clear') {
        clear();
    }else if (btn == 'Split Excel') {
        let txt1 = txt_1();
        let split_excel_value = inp('split_excel_value');
        if(split_excel_value){
            txt1 = txt1.trim().split('\t').map(l => l.trim());
            txt_2(txt1.filter(Boolean).join(split_excel_value));
            updateToTop();
        }else{
            txt1 = txt1.trim().split('\t').map(l => l.trim());
            txt_2(txt1.filter(Boolean).join('\n'));
            updateToTop();
        }
        afterActions();
    }else if (btn == 'In Query') {
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l => l.trim());
        txt_2( `'` + txt1.filter(Boolean).join(`','`) + `'`);
        afterActions();
    }else if (btn == 'In Query Skip Rows') {
        let txt1 = txt_1();
        let skip_row_count = inp('skip_row_count');
        if(!skip_row_count){
            txt1 = txt1.trim().split('\n').map(l => l.trim());
            txt_2( `'` + txt1.filter(Boolean).join(`','`) + `'`);
        }else{
            txt1 = txt1.trim().split('\n').map(l => l.trim());
            txt1.splice(0, skip_row_count);
            txt_2( `'` + txt1.filter(Boolean).join(`','`) + `'`);
        }
        afterActions();
    }else if (btn == 'Copy') {
        copyToCLipboard(txt_2(), $(this));
    }else if (btn == 'Blank') {
        blank();
    }else if (btn == 'Remove Duplicates') {
        let txt1 = txt_1();
        let noDuplicatesArray = [];
        txt1 = txt1.trim().split('\n').map(l => l.trim());
        let i = 0;
        while(i < txt1.length){
            if(!noDuplicatesArray.includes(txt1[i]))
                noDuplicatesArray.push(txt1[i]);
            i++;
        }
        txt_2(noDuplicatesArray.filter(Boolean).join(`\n`));
        afterActions();
    }else if (btn == 'Generate Array') {
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l => l.trim());
        txt_2(`['${txt1.join(`', '`)}']`);
        afterActions();
    }else if (btn == 'Generate Dropdown') {
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l => {
            return `{ label: "${l.trim()}", value: "${l.trim()}" }`;
        });
        txt_2(`[\n\t${txt1.join(`,\n\t`)}\n];`);
        afterActions();
    }else if (btn == 'Extract Text Between') {
        let txt1 = txt_1();
        let extract_left_value = inp('extract_left_value');
        let extract_right_value = inp('extract_right_value');
        if(extract_left_value && extract_right_value){
            const startTag = extract_left_value;
            const endTag = extract_right_value;
            const regex = new RegExp(`${startTag}(.*?)${endTag}`, 'g');
            const matches = txt1.match(regex);
            const outputArray = matches.map(match => match.replace(startTag, '').replace(endTag, ''));
            txt_2(outputArray.join('\n'));
        }
        afterActions();
    }else if (btn == 'Replace Text Between - Include') {
        let txt1 = txt_1();
        let replace_left_value = inp('replace_left_value');
        console.log('$replace_left_value: ',replace_left_value);
        let replace_right_value = inp('replace_right_value');
        console.log('$replace_right_value: ',replace_right_value);
        let replace_value_btwn = inp('replace_value_btwn');
        console.log('$replace_value_btwn: ',replace_value_btwn);
        if(replace_left_value && replace_right_value){
            const startChar = replace_left_value;
            const endChar = replace_right_value;
            /* const regex = new RegExp(`${startTag}(.*?)${endTag}`, 'g');
            const matches = txt1.match(regex);
            const outputArray = matches.map(match => match.replace(startTag, '').replace(endTag, ''));
            txt_2(outputArray.join('\n')); */
            txt1 = txt1.trim().split('\n').map(l => l.trim());
            console.log('$txt1: ',txt1);
            let i = 0;
            let newArray = [];
            while(i < txt1.length){
                // Create a dynamic regular expression
                let regex = new RegExp(`\\${startChar}[^\\${endChar}]+\\${endChar}`, 'g');
                // Replace the matched text
                let result = txt1[i].replace(regex, replace_value_btwn ? replace_value_btwn : '');
                console.log('$result: ',result);
                newArray.push(result);
                i++;
            }
            console.log('$newArray: ',newArray);
            txt_2(newArray.filter(Boolean).join(`\n`));
            /* 
            txt1 = txt1.trim().split('\n').map(l => l.trim());
            let i = 0;
            while(i < txt1.length){
                if(!noDuplicatesArray.includes(txt1[i]))
                    noDuplicatesArray.push(txt1[i]);
                i++;
            }
            txt_2(noDuplicatesArray.filter(Boolean).join(`\n`));
            */
        }
        afterActions();
    }else if (btn == 'Configure User Snippet') {
        let txt1 = txt_1();
        let txt2 = txt_2();
        txt2 = txt1.replaceAll('"', '\\"');
        txt2 = txt2.replaceAll('$', '$$$');
        
        let textArray = [];
        txt2.split(/\n/g).forEach(element => {
            textArray.push('"' + '' + element);
        });
        txt2 = textArray.join('\n');
        txt2 = txt2.replaceAll(/\n/g, '"' + '\n') + '"';
        txt2 = txt2.replaceAll(/\n/g, ',' + '\n') + ',';
        textArray = [];
        txt2.split(/\n/g).forEach(element => {
            let txt = element.trim();
            if(txt)
                textArray.push(txt);
        });
        let a = textArray[textArray.length - 1];
        let b = '';
        for (let i = 0; i < a.length; i++) {
            if (i === 0) {
                b += a[i];
            }
            else {
                if (a[i] === ' ') {
                    b += a[i];
                }
            }
        }
        txt2 = txt2.replaceAll(b, '"');
        txt2 = txt2.substring(0, txt2.length - 1);
        txt_2(txt2);
        afterActions();
    }else if (btn == 'Extract Text From Html') {
        let txt1 = txt_1();
        txt_2(htmlDecode(txt1));
        afterActions();
    }else if (btn == 'In Query Distinct') {
        navigator.clipboard.readText().then(text => {
            let i = 0;
            txt_1(text);
            text = text.trim().split('\n');
            text.splice(0, 1);
            let newArray = [];
            while(i < text.length){
                let trimValue = text[i].trim();
                if(!newArray.includes(trimValue)){
                    newArray.push(trimValue);
                }
                i++;
            }
            let queryValues = `'` + newArray.filter(Boolean).join(`','`) + `'`;
            let query = `Select Id, p66_Legacy_ID__c from Account where p66_Legacy_ID__c IN (${queryValues})`;
            txt_2(query);
            copyToCLipboard(txt_2());
        }).catch(err => {
           console.error(err);
        });
        afterActions();
    }else if (btn == 'Test Data 1') {
        let testDataArray = [];
        let i = 1;
        while(i <= 5000){
            let recId = `0010e00001Qu08jAAB${i}`;
            if(recId.length > 18){
                let lngth = recId.length - 18;
                recId = recId.split('');
                recId.splice(7, lngth);
                recId = recId.join('');
            }
            testDataArray.push(recId);
            i++;
        }
        txt_1(testDataArray.join('\n'));
        afterActions();
    }else if (btn == 'Test Data 2') {
        let testDataArray = [];
        let i = 1;
        while(i <= 9){
            let data = `Some Data ${i}`;
            testDataArray.push(data);
            i++;
        }
        txt_1(testDataArray.join('\n'));
        afterActions();
    }else if (btn == 'Test Data 3') {
        txt_1('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam necessitatibus tempore cum quos molestias repellat ducimus maiores quam nobis, quia perferendis illum numquam sint veritatis alias eveniet non quaerat vel!');
        afterActions();
    }else if (btn == 'Test Data 4') {
        txt_1('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam necessitatibus tempore cum quos molestias repellat ducimus maiores quam nobis, quia perferendis illum numquam sint veritatis alias eveniet non quaerat vel!');
        afterActions();
    }else if (btn == 'Replace Before') {
        let txt1 = txt_1();
        let replace_before_value = inp('replace_before_value');
        let replace_before_with_value = inp('replace_before_with_value');
        let replace_before_position_value = parseInt(inp('replace_before_position_value'));

        if(replace_before_value){
            if(replace_before_position_value == 1){
                let txt1 = txt_1();
                txt_2(txt1.trim().split('\n').map(l => replaceBeforeChar(l.trim(), replace_before_value, replace_before_with_value)).join('\n'));
                afterActions();
            }else{
                let i = 0;
                let newTxtArray = [];
                let txtArray = txt1.trim().split('\n');
                while(i < txtArray.length){
                    let item = txtArray[i];
                    let itemSplit = item.split(replace_before_value);
                    if(itemSplit.length <= replace_before_position_value && replace_before_position_value > 0){
                        newTxtArray.push(item);
                    }else if(itemSplit.length > replace_before_position_value && replace_before_position_value > 0){
                        item = item.replace(itemSplit[replace_before_position_value - 1], replace_before_with_value);
                        newTxtArray.push(item);
                    }else{
                        let indxAbs = Math.abs(replace_before_position_value);
                        if(itemSplit[indxAbs]){
                            newTxtArray.push(itemSplit[indxAbs]);
                        }else{
                            newTxtArray.push(item);
                        }
                    }

                    i++;
                }
                console.log('$newTxtArray: ',newTxtArray);
                txt_2(newTxtArray.join('\n'));
            }
            
        }
        afterActions();
    }else if (btn == 'Replace After') {
        let txt1 = txt_1();
        let replace_after_value = inp('replace_after_value');
        let replace_after_with_value = inp('replace_after_with_value');
        let replace_after_position_value = parseInt(inp('replace_after_position_value'));

        if(replace_after_value){
            let i = 0;
            let newTxtArray = [];
            let txtArray = txt1.trim().split('\n');
            while(i < txtArray.length){
                let item = txtArray[i];
                let itemSplit = item.split(replace_after_value);
                if(itemSplit.length <= replace_after_position_value && replace_after_position_value > 0){
                    newTxtArray.push(item);
                }else if(itemSplit.length > replace_after_position_value && replace_after_position_value > 0){
                    item = item.replace(itemSplit[replace_after_position_value], replace_after_with_value);
                    newTxtArray.push(item);
                }else{
                    let indxAbs = Math.abs(replace_after_position_value);
                    if(itemSplit[indxAbs]){
                        newTxtArray.push(itemSplit[indxAbs]);
                    }else{
                        newTxtArray.push(item);
                    }
                }

                i++;
            }
            console.log('$newTxtArray: ',newTxtArray);
            txt_2(newTxtArray.join('\n'));
            
        }
        afterActions();
    }else if (btn == 'Shift') {
        let txt1 = txt_1();
        let m_position = inp('m_position');
        let m_seperator = inp('m_seperator');
        let m_move_position = parseInt(inp('m_move_position'));

        console.log('$m_position: ',m_position);
        console.log('$m_seperator: ',m_seperator);
        console.log('$m_move_position: ',m_move_position);

        if(m_seperator){
            let i = 0;
            let newTxtArray = [];
            let txtArray = txt1.trim().split('\n');
            while(i < txtArray.length){
                let item = txtArray[i];
                let itemSplit = item.split(m_seperator);
                console.log('$itemSplit: ',itemSplit);

                let c = 0;
                let splt = [];
                while(c < itemSplit.length){
                    
                    if( c != (m_position - 1)){
                        splt.push(itemSplit[c]);
                    }

                    c++;
                }
                splt.splice((m_move_position - 1), 0, itemSplit[m_position - 1]);
                newTxtArray.push(splt.join(m_seperator));
                i++;
            }
            console.log('$newTxtArray: ',newTxtArray);
            txt_2(newTxtArray.join('\n'));
            
        }
        afterActions();
    }else if (btn == 'Create Json Map') {
        let txt1 = txt_1();
        let key_field = inp('key_field');
        let map_name = inp('map_name');
        let remove_attr = inp('remove_attr');
        console.log('$txt1: ',txt1);
        console.log('$key_field: ',key_field);
        console.log('$map_name: ',map_name);
        if(txt1 && key_field && map_name){
            let dataMap;
            let json = txt1;
            json = JSON.parse(json);
            
            if(key_field.includes('.')){
                let field_1 = key_field.split('.')[0];
                let field_2 = key_field.split('.')[1];
                dataMap = new Map(json.map(item => {
                    delete item.attributes;
                    if(remove_attr){
                        delete item[remove_attr]['attributes'];
                    }
                    return [item[field_1][field_2], item];
                }));
            }else if(key_field.includes(' ')){
                let field_1 = key_field.split(' ')[0];
                let field_2 = key_field.split(' ')[1];
                dataMap = new Map(json.map(item => {
                    delete item.attributes;
                    if(remove_attr){
                        delete item[remove_attr]['attributes'];
                    }
                    return [item[field_1]+item[field_2], item];
                }));
            }else{
                dataMap = new Map(json.map(item => {
                    delete item.attributes;
                    if(remove_attr){
                        delete item[remove_attr]['attributes'];
                    }
                    return [item[key_field], item];
                }));
            }

            let res = Array.from(dataMap.entries());
            let obbStrArray = res.map( v => JSON.stringify(v, null, 2));
            let mapString = "const "+map_name+" = new Map([\n"+obbStrArray.join(',\n')+"\n]);";
            txt_2(mapString);
        }
    }else if (btn == 'Field Permissions') {
        let txt1 = txt_1();
        console.log('$txt1: ',txt1);
        txt1 = txt1.trim().split('\n').filter(Boolean);
        console.log('$txt1: ',txt1);
        let codeXml = ``
        txt1.forEach(val => {
            if(val.includes('<field>')){
                codeXml += `<fieldPermissions>\n\t<editable>true</editable>\n\t${val}\n\t<readable>true</readable>\n</fieldPermissions>\n`;
            }else{
                codeXml += `<fieldPermissions>\n\t<editable>true</editable>\n\t<field>${val}</field>\n\t<readable>true</readable>\n</fieldPermissions>\n`;
            }
        });
        txt_2(codeXml.trim());
    }else if (btn == 'Remove Lines') {
        let txt1 = txt_1();
        console.log('$txt1: ',txt1);
        txt1 = txt1.split('\n');
        console.log('$txt1: ',txt1);

        let remove_starts = inp('remove_starts');
        console.log('$remove_starts: ',remove_starts);
        let remove_ends = inp('remove_ends');
        console.log('$remove_ends: ',remove_ends);
        let remove_contains = inp('remove_contains');
        console.log('$remove_contains: ',remove_contains);

        let filterdLine = [];
        let i = 0;
        while(i < txt1.length){
            let line = txt1[i];
            let include = true;

            if(remove_starts){
                if(line.startsWith(remove_starts)){
                    include = false;
                }
            }

            if(remove_ends){
                if(line.endsWith(remove_ends)){
                    include = false;
                }
            }

            if(remove_contains){
                if(line.includes(remove_contains)){
                    include = false;
                }
            }

            if(include){
                filterdLine.push(line);
            }

            i++;
        }
        txt_2(filterdLine.join('\n'));
    }else if (btn == 'Get Contains') {

        let contains_value = inp('contains_value');
        console.log('$contains_value: ',contains_value);

        if(contains_value){
            let txt1 = txt_1();
            txt1 = txt1.split('\n');

            let lines = [];
            let i = 0;
            while(i < txt1.length){
                if(txt1[i].includes(contains_value)){
                    lines.push(txt1[i]);
                }

                i++;
            }
            txt_2(lines.join('\n'));
        }
    }else if (btn == 'Remove After') {

        let seperator_contains_value = inp('seperator_contains_value');
        console.log('$seperator_contains_value: ',seperator_contains_value);

        if(seperator_contains_value){
            let txt1 = txt_1();
            txt1 = txt1.split('\n');

            let lines = [];
            let i = 0;
            while(i < txt1.length){
                if(txt1[i].includes(seperator_contains_value)){
                    let splitted = txt1[i].split(seperator_contains_value);
                    lines.push(splitted[0]);
                }else{
                    lines.push(txt1[i]);
                }

                i++;
            }
            txt_2(lines.join('\n'));
        }
    }else if (btn == 'Remove Before') {

        let seperator_contains_value = inp('seperator_contains_value');
        console.log('$seperator_contains_value: ',seperator_contains_value);

        if(seperator_contains_value){
            let txt1 = txt_1();
            txt1 = txt1.split('\n');

            let lines = [];
            let i = 0;
            while(i < txt1.length){
                if(txt1[i].includes(seperator_contains_value)){
                    let splitted = txt1[i].split(seperator_contains_value);
                    lines.push(splitted[splitted.length - 1]);
                }else{
                    lines.push(txt1[i]);
                }

                i++;
            }
            txt_2(lines.join('\n'));
        }
    }else if (btn == 'Sort List Asc') {
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l => l.trim()).filter(Boolean);

        let lines = [];
        for(v of txt1){
            lines.push({v,l: v.length});
        }
        console.log('$lines: ',lines);
        lines = lines.sort(function(a, b){return a.l - b.l}).map(v => v.v);
        console.log('$lines: ',lines);
        txt_2(lines.join('\n'));
    }else if (btn == 'Sort List Desc') {
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l => l.trim()).filter(Boolean);

        let lines = [];
        for(v of txt1){
            lines.push({v,l: v.length});
        }
        console.log('$lines: ',lines);
        lines = lines.sort(function(a, b){return b.l - a.l}).map(v => v.v);
        console.log('$lines: ',lines);
        txt_2(lines.join('\n'));
    }else if (btn == 'Sort Alpha. Asc') {
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l => l.trim()).filter(Boolean);
        txt1.sort();
        txt_2(txt1.join('\n'));
    }else if (btn == 'Sort Alpha. Desc') {
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l => l.trim()).filter(Boolean);
        txt1.sort((a, b) => b.localeCompare(a));
        txt_2(txt1.join('\n'));
    }
});

$(document).on('keypress', '.skip_row_count', function (e){
    if (e.which < 48 || e.which > 57) {
        return false;
    }
});

function htmlDecode(input) {
    let doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}
function removeTags(text){
    return text.replace(/(<([^>]+)>)/ig, '');
}

function copyToCLipboard(value, _this) {
    let text = value;
    navigator.clipboard.writeText(text).then(function() {
        _this.text('Copied.');
        setTimeout( () => {
            _this.text('Copy');
        }, 1000);
    }, function(err) {
        _this.text('Failed.');
        setTimeout( () => {
            _this.text('Copy');
        }, 2000);
    });
}

$(document).on('keyup', 'body', function (e){
   let charCode = (event.which) ? event.which : event.keyCode;
   if(charCode == 27) {
        clear();
   }
});

function clear(){
    txt_1('');
    txt_2('');
    // $('.inp:not(.skip_row_count)').val('');
}

function blank(){
    txt_1('');
    txt_2('');
    $('.inp:not(.skip_row_count)').val('');
}

function txt_1(value) {
    if(value == null){
        return $('.txt_1').val();
    }else{
        $('.txt_1').val(value);
    }
}

function txt_2(value) {
    if(value == null){
        return $('.txt_2').val();
    }else{
        $('.txt_2').val(value);
        if(!value){
            $('.b_lines_bottom').text('0');
        }else{
            let num = (value.match(/\n/g) || []).length;
            num = num == 0 ? 1 : (num + 1);
            $('.b_lines_bottom').text(num);
        }
    }
}

function inp(cls){
    return $('.' + cls).val();
}

$(document).on('input', '.txt_1', function (e){
    let txt1 = txt_1();
    if(!txt1){
        $('.b_lines_top').text('0');
    }else{
        let num = (txt1.match(/\n/g) || []).length;
        num = num == 0 ? 1 : (num + 1);
        $('.b_lines_top').text(num);
    }
});
$(document).on('input', '.txt_2', function (e){
    let txt2 = txt_2();
    if(!txt2){
        $('.b_lines_bottom').text('0');
    }else{
        let num = (txt2.match(/\n/g) || []).length;
        num = num == 0 ? 1 : (num + 1);
        $('.b_lines_bottom').text(num);
    }
});
function replaceTextBetween(val, startChar, endChar, replaceValue){
    let regex = new RegExp(`\\${startChar}[^\\${endChar}]+\\${endChar}`, 'g');
    let result = val.replace(regex, replaceValue);
    return result;
}
function replaceBeforeChar(val, startChar, replaceValue) {
    let regex = new RegExp(`^[^${startChar}]*${startChar}`, 'g');
    let result = val.replace(regex, replaceValue);
    return result;
}
function replaceAfterChar(val, startChar, replaceValue) {
    let regex = new RegExp(`${startChar}.*`, 'g');
    let result = val.replace(regex, replaceValue);
    return result;
}
$(document).on('input', '.inp', function (e){
    doOnInput($(this));
});

function populateFromLocalStorage(){
    if(local('replace_value')){
        $('.replace_value').val(local('replace_value'));
    }
    if(local('replace_with')){
        $('.replace_with').val(local('replace_with'));
    }
    if(local('split_excel_value')){
        $('.split_excel_value').val(local('split_excel_value'));
    }
    if(local('extract_left_value')){
        $('.extract_left_value').val(local('extract_left_value'));
    }
    if(local('extract_right_value')){
        $('.extract_right_value').val(local('extract_right_value'));
    }
    if(local('replace_left_value')){
        $('.replace_left_value').val(local('replace_left_value'));
    }
    if(local('replace_right_value')){
        $('.replace_right_value').val(local('replace_right_value'));
    }
    if(local('replace_value_btwn')){
        $('.replace_value_btwn').val(local('replace_value_btwn'));
    }
    if(local('replace_before_value')){
        $('.replace_before_value').val(local('replace_before_value'));
    }
    if(local('replace_before_with_value')){
        $('.replace_before_with_value').val(local('replace_before_with_value'));
    }
    if(local('replace_after_value')){
        $('.replace_after_value').val(local('replace_after_value'));
    }
    if(local('replace_after_with_value')){
        $('.replace_after_with_value').val(local('replace_after_with_value'));
    }
    if(local('left_right_value')){
        $('.left_right_value').val(local('left_right_value'));
    }
}

function local(key){
    return localStorage.getItem(key);
}

function doOnInput(_this){
    let val = _this.val().trim();
   if(val){
       localStorage.setItem(_this.data('cls'),val);
   }else{
       localStorage.removeItem(_this.data('cls'));
   }
}

function updateToTop(){
    txt_1(txt_2());
}

let isCtrlPressed = false;
$(document).on('keydown', 'body', function (e){
   let charCode = (e.which) ? e.which : e.keyCode;
   if(charCode == 17){
      isCtrlPressed = true;
      console.log(isCtrlPressed);
   }
});
$(document).on('keyup', 'body', function (e){
   let charCode = (e.which) ? e.which : e.keyCode;
   isCtrlPressed = charCode == 17 ? false : isCtrlPressed;
   console.log(isCtrlPressed);
});

function afterActions(){
    if(isCtrlPressed){
        updateToTop();
    }
}