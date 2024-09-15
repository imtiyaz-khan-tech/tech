$(document).ready(function() {
    // changeFavicon('Text Tools');
    Draggable.create('.small_popup_1', {
        handle: '.small_popup_1_box_heading_div'
    });
    $('.txt_1').val(`Some Data 1
Some Data 2
Some Data 3
Some Data 4
Some Data 5
Some Data 6
      `);
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
                    txt_2(txt1.replaceAll(replace_value, replace_with).trim());
                }
            }
        }

    }else if (btn == 'Add Left') {
        let left_right_value = inp('left_right_value');
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l=>{
            return left_right_value + l;
        });
        txt_2(txt1.join('\n'));
    }else if (btn == 'Add Right') {
        let left_right_value = inp('left_right_value');
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l=>{
            return l + left_right_value;
        });
        txt_2(txt1.join('\n'));
    }else if (btn == 'Add Left-Right') {
        let left_right_value = inp('left_right_value');
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l=>{
            return  left_right_value + l + left_right_value;
        });
        txt_2(txt1.join('\n'));
    }else if (btn == 'Trim') {
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l => l.trim());
        txt_2(txt1.filter(Boolean).join('\n'));
        txt_1(txt1.filter(Boolean).join('\n'));
    }else if (btn == 'Update') {
        if(txt_2())
            txt_1(txt_2());
    }else if (btn == 'Clear') {
        clear();
    }else if (btn == 'Split Excel') {
        let txt1 = txt_1();
        let split_excel_value = inp('split_excel_value');
        if(split_excel_value){
            txt1 = txt1.trim().split('\t').map(l => l.trim());
            txt_2(txt1.filter(Boolean).join(split_excel_value));
            txt_1(txt_2());
        }else{
            txt1 = txt1.trim().split('\t').map(l => l.trim());
            txt_2(txt1.filter(Boolean).join('\n'));
            txt_1(txt_2());
        }
    }else if (btn == 'In Query') {
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l => l.trim());
        txt_2( `'` + txt1.filter(Boolean).join(`','`) + `'`);
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
    }else if (btn == 'Generate Array') {
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l => l.trim());
        txt_2(`['${txt1.join(`', '`)}']`);
    }else if (btn == 'Generate Dropdown') {
        let txt1 = txt_1();
        txt1 = txt1.trim().split('\n').map(l => {
            return `{ label: "${l.trim()}", value: "${l.trim()}" }`;
        });
        txt_2(`[\n\t${txt1.join(`,\n\t`)}\n];`);
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
    }else if (btn == 'Extract Text From Html') {
        let txt1 = txt_1();
        txt_2(htmlDecode(txt1));
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
    $('.inp').val('');
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
