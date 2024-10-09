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
        if(replace_before_value){
            txt_2(txt1.trim().split('\n').map(l => replaceBeforeChar(l.trim(), replace_before_value, replace_before_with_value)).join('\n'));
        }
        afterActions();
    }else if (btn == 'Replace After') {
        let txt1 = txt_1();
        let replace_after_value = inp('replace_after_value');
        let replace_after_with_value = inp('replace_after_with_value');
        if(replace_after_value){
            txt_2(txt1.trim().split('\n').map(l => replaceAfterChar(l.trim(), replace_after_value, replace_after_with_value)).join('\n'));
        }
        afterActions();
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
    txt_2('');
    $('.inp:not(.skip_row_count)').val('');
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