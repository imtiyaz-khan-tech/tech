// ============================================================
// Text Tools Studio - Enhanced Modern Controller
// Full backward compatibility with rich Developer Suite
// ============================================================

let undoStack = [];
let redoStack = [];
const MAX_HISTORY = 40;
let isCtrlPressed = false;

$(document).ready(function() {
    populateFromLocalStorage();
    initThemeAndLayout();
    initDraggable();
    updateAllStats();

    if (localStorage.getItem('txt_1')) {
        txt_1(localStorage.getItem('txt_1'));
        countNum();
        updateAllStats();
    }

    // Reset scroll position to top
    $('.c').scrollTop(0);
    $('.right').scrollTop(0);

    // Save initial state to history
    pushHistory();
});

// Guard against main container ever scrolling
$(window).on('load', function() {
    $('.c').scrollTop(0);
    $('.right').scrollTop(0);
});

$(document).on('scroll', '.c', function() {
    if (this.scrollTop !== 0) {
        this.scrollTop = 0;
    }
});

// ============================================================
// History & Undo / Redo
// ============================================================

function pushHistory() {
    const current = {
        txt1: txt_1() || '',
        txt2: txt_2() || ''
    };
    if (undoStack.length > 0) {
        const last = undoStack[undoStack.length - 1];
        if (last.txt1 === current.txt1 && last.txt2 === current.txt2) {
            return;
        }
    }
    undoStack.push(current);
    if (undoStack.length > MAX_HISTORY) undoStack.shift();
    redoStack = [];
}

function undo() {
    if (undoStack.length > 1) {
        const current = undoStack.pop();
        redoStack.push(current);
        const prev = undoStack[undoStack.length - 1];
        txt_1(prev.txt1, false);
        txt_2(prev.txt2, false);
        updateAllStats();
        showToast('Undo performed', 'info');
    } else {
        showToast('Nothing to undo', 'warning');
    }
}

function redo() {
    if (redoStack.length > 0) {
        const next = redoStack.pop();
        undoStack.push(next);
        txt_1(next.txt1, false);
        txt_2(next.txt2, false);
        updateAllStats();
        showToast('Redo performed', 'info');
    } else {
        showToast('Nothing to redo', 'warning');
    }
}

// ============================================================
// Theme & Layout Management
// ============================================================

function initThemeAndLayout() {
    const savedTheme = localStorage.getItem('text_tool_theme') || 'light';
    setTheme(savedTheme);

    const savedLayout = localStorage.getItem('text_tool_layout') || 'vertical';
    setLayout(savedLayout);
}

function setTheme(theme) {
    if (theme === 'dark') {
        $('html').attr('data-theme', 'dark');
        $('#theme_toggle_btn').html('<i class="fa fa-sun-o"></i> <span>Light Mode</span>');
    } else {
        $('html').removeAttr('data-theme');
        $('#theme_toggle_btn').html('<i class="fa fa-moon-o"></i> <span>Dark Mode</span>');
    }
    localStorage.setItem('text_tool_theme', theme);
}

function setLayout(layout) {
    if (layout === 'horizontal') {
        $('.c').addClass('layout-horizontal-editors');
        $('#layout_toggle_btn').html('<i class="fa fa-columns"></i> <span>Split V</span>');
    } else {
        $('.c').removeClass('layout-horizontal-editors');
        $('#layout_toggle_btn').html('<i class="fa fa-bars"></i> <span>Split H</span>');
    }
    localStorage.setItem('text_tool_layout', layout);
}

$(document).on('click', '#theme_toggle_btn', function() {
    const isDark = $('html').attr('data-theme') === 'dark';
    setTheme(isDark ? 'light' : 'dark');
});

$(document).on('click', '#layout_toggle_btn', function() {
    const isHorizontal = $('.c').hasClass('layout-horizontal-editors');
    setLayout(isHorizontal ? 'vertical' : 'horizontal');
});

// ============================================================
// Draggable Initialization & Modals
// ============================================================

function initDraggable() {
    if (typeof Draggable !== 'undefined') {
        try {
            Draggable.create('.small_popup_1', {
                handle: '.small_popup_1_box_heading_div'
            });
        } catch (e) {
            console.log('Draggable init notice:', e);
        }
    }
}

$(document).on('click', '.close-icon_1', function(e) {
    $('.small_popup_1').addClass('hide');
});

$(document).on('click', '.close-diff-modal', function(e) {
    $('.diff_modal').addClass('hide');
});

// Close modals when clicking backdrop
$(document).on('click', '.small_popup_1', function(e) {
    if ($(e.target).hasClass('small_popup_1')) {
        $('.small_popup_1').addClass('hide');
    }
});

$(document).on('click', '.diff_modal', function(e) {
    if ($(e.target).hasClass('diff_modal')) {
        $('.diff_modal').addClass('hide');
    }
});

// ============================================================
// Line Counters & Table Modal
// ============================================================

$(document).on('click', '.b_lines_top', function(e) {
    let txt1 = txt_1();
    generateTable(txt1, 'Input Lines Inspection');
});

$(document).on('click', '.b_lines_bottom', function(e) {
    let txt2 = txt_2();
    generateTable(txt2, 'Output Lines Inspection');
});

function generateTable(txt, title = 'Lines Inspection') {
    txt = (txt || '').trim().split('\n').map(l => l.trim());
    if (txt.filter(Boolean).length) {
        let tBody = '';
        txt.forEach((val, indx) => {
            tBody += `<tr class="tbody_1_tr tbody_1_tr_1">
                <td class="td_1 td_1_1">${indx + 1}</td>
                <td class="td_1 td_1_2" title="Click to copy line">${escapeHtml(val)}</td>
            </tr>`;
        });
        $('.small_popup_1_box_heading_div').html(`
            <div class="popup_heading_title">
                <i class="fa fa-list-ol"></i>
                <span>${title}</span>
                <span class="brand_badge" style="margin-left: 6px;">${txt.length} items</span>
            </div>
            <div class="small_popup_1_close_div">
                <i class="close-icon_1 fa fa-times" aria-hidden="true"></i>
            </div>
        `);
        $('.tbody_1').html(tBody);
        $('#popup_items_count').text(`${txt.length} rows`);
        $('.popup_search_inp').val('');
        $('.small_popup_1').removeClass('hide');
    } else {
        showToast('Text area is empty', 'warning');
    }
}

// Live search in popup table
$(document).on('input', '.popup_search_inp', function() {
    const q = $(this).val().toLowerCase();
    $('.tbody_1_tr').each(function() {
        const text = $(this).find('.td_1_2').text().toLowerCase();
        if (text.includes(q)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

// Copy all rows from popup
$(document).on('click', '#copy_popup_all_btn', function() {
    const lines = [];
    $('.tbody_1_tr:visible .td_1_2').each(function() {
        lines.push($(this).text());
    });
    if (lines.length) {
        navigator.clipboard.writeText(lines.join('\n')).then(function() {
            showToast(`Copied ${lines.length} lines to clipboard`, 'success');
        });
    }
});

// Copy cell on click
$(document).on('click', '.td_1:not(.td_1_1)', function(e) {
    let _this = $(this);
    let text = $(this).text().trim();
    navigator.clipboard.writeText(text).then(function() {
        $('.td_1').css('color', '');
        _this.css('color', '#10b981');
        showToast('Copied: ' + (text.length > 35 ? text.substring(0, 35) + '...' : text), 'success');
        setTimeout(() => {
            _this.css('color', '');
        }, 1200);
    }, function(err) {
        _this.css('color', '#ef4444');
    });
});

function generateQueriesTable(queriesArray) {
    let tBody = '';
    queriesArray.forEach((val, indx) => {
        tBody += `<tr class="tbody_1_tr tbody_1_tr_1">
            <td class="td_1 td_1_1">${indx + 1}</td>
            <td class="td_1 td_1_2" title="Click to copy query chunk">${escapeHtml(val)}</td>
        </tr>`;
    });
    $('.small_popup_1_box_heading_div').html(`
        <div class="popup_heading_title">
            <i class="fa fa-database"></i>
            <span>Query Chunks</span>
            <span class="brand_badge" style="margin-left: 6px;">${queriesArray.length} chunks</span>
        </div>
        <div class="small_popup_1_close_div">
            <i class="close-icon_1 fa fa-times" aria-hidden="true"></i>
        </div>
    `);
    $('.tbody_1').html(tBody);
    $('#popup_items_count').text(`${queriesArray.length} chunks`);
    $('.popup_search_inp').val('');
    $('.small_popup_1').removeClass('hide');
}

// ============================================================
// Real-time Text Statistics
// ============================================================

function updateStats(selector, text) {
    const raw = text || '';
    const trimmed = raw.trim();
    const lines = trimmed ? raw.split('\n').length : 0;
    const nonEmptyLines = trimmed ? raw.split('\n').filter(l => l.trim().length > 0).length : 0;
    const words = trimmed ? (trimmed.match(/\S+/g) || []).length : 0;
    const chars = raw.length;

    $(`.stat-lines-${selector}`).text(lines);
    $(`.stat-words-${selector}`).text(words);
    $(`.stat-chars-${selector}`).text(chars);
    $(`.stat-nonempty-${selector}`).text(nonEmptyLines);

    if (selector === 'top') {
        $('.b_lines_top').text(nonEmptyLines || lines);
    } else {
        $('.b_lines_bottom').text(nonEmptyLines || lines);
    }
}

function updateAllStats() {
    updateStats('top', txt_1());
    updateStats('bottom', txt_2());
}

function countNum() {
    updateAllStats();
}

// ============================================================
// Tools Search & Instant Filter
// ============================================================

$(document).on('input', '.tools_search_input', function() {
    const q = $(this).val().trim().toLowerCase();
    if (!q) {
        $('.tool_group').removeClass('tool_hidden collapsed');
        $('.btn, .inp, .action_row, tr.tr').removeClass('tool_hidden tool_highlight');
        return;
    }

    $('.tool_group').each(function() {
        const $group = $(this);
        let groupHasMatch = false;

        $group.find('.btn, .inp').each(function() {
            const btnText = ($(this).data('btn') || $(this).text() || $(this).attr('placeholder') || '').toLowerCase();
            const titleText = ($(this).attr('title') || '').toLowerCase();
            const isMatch = btnText.includes(q) || titleText.includes(q);

            if (isMatch) {
                $(this).addClass('tool_highlight').removeClass('tool_hidden');
                groupHasMatch = true;
            } else {
                $(this).removeClass('tool_highlight');
            }
        });

        if (groupHasMatch) {
            $group.removeClass('tool_hidden collapsed');
        } else {
            const groupTitle = $group.find('.tool_group_title').text().toLowerCase();
            if (groupTitle.includes(q)) {
                $group.removeClass('tool_hidden collapsed');
                $group.find('.btn, .inp').removeClass('tool_hidden');
            } else {
                $group.addClass('tool_hidden');
            }
        }
    });
});

$(document).on('click', '.search_clear_btn', function() {
    $('.tools_search_input').val('').trigger('input');
});

// Keyboard shortcut: Ctrl+K or / to focus search
$(document).on('keydown', function(e) {
    if ((e.ctrlKey && e.key.toLowerCase() === 'k') || (e.key === '/' && !$(e.target).is('input, textarea'))) {
        e.preventDefault();
        $('.tools_search_input').focus().select();
    }
    // Ctrl+Z Undo
    if (e.ctrlKey && e.key.toLowerCase() === 'z' && !$(e.target).is('input, textarea')) {
        e.preventDefault();
        undo();
    }
    // Ctrl+Y Redo
    if (e.ctrlKey && e.key.toLowerCase() === 'y' && !$(e.target).is('input, textarea')) {
        e.preventDefault();
        redo();
    }
});

// Tool group collapse/expand
$(document).on('click', '.tool_group_header', function() {
    $(this).closest('.tool_group').toggleClass('collapsed');
});

// Category navigation pills click handler
$(document).on('click', '.cat_pill', function(e) {
    e.preventDefault();
    $('.cat_pill').removeClass('active');
    $(this).addClass('active');
    const cat = $(this).data('target');
    const $target = $(`.tool_group[data-category="${cat}"]`);
    if ($target.length) {
        $target.removeClass('collapsed');
        const $right = $('.right');
        const offset = $target.offset().top - $right.offset().top + $right.scrollTop() - 40;
        $right.animate({ scrollTop: offset }, 200);
    }
});

// Prevent any input focus from scrolling parent .c container
$(document).on('focus', '.inp, .btn, textarea', function() {
    document.querySelector('.c').scrollTop = 0;
});

// ============================================================
// Context Menu & Test Data
// ============================================================

$(document).on('contextmenu', '.btn', function(e) {
    let btn = $(this).data('btn');
    if (btn == 'Trim') {
        e.preventDefault();
        txt_1(`
The quick brown fox jumps over the lazy dog
The quick brown fox jumps over the lazy dog   
The quick brown fox jumps over the lazy dog

The quick brown fox jumps over the lazy dog   

   The quick brown fox jumps over the lazy dog

  The quick brown fox jumps over the lazy dog


The quick brown fox jumps over the lazy dog
`);
        showToast('Sample whitespace test data loaded', 'info');
        pushHistory();
    } else if (btn == 'Remove Duplicates') {
        e.preventDefault();
        txt_1(`The quick brown fox jumps over the lazy dog
The quick brown fox jumps over the lazy cat
The quick brown fox jumps over the lazy hen
The quick brown fox jumps over the lazy rat
The quick brown fox jumps over the lazy dog
The quick brown fox jumps over the lazy hen
The quick brown fox jumps over the lazy dog`);
        showToast('Sample duplicate test data loaded', 'info');
        pushHistory();
    }
});

// ============================================================
// Core Execution Logic (.btn click handler)
// ============================================================

$(document).on('click', '.btn', function(e) {
    let btn = $(this).data('btn');
    if (!btn) return;

    if (btn == 'Replace') {
        let replace_with = inp('replace_with') || '';
        let replace_value = inp('replace_value') || '';
        let txt1 = txt_1() || '';

        if (replace_value == '\\n' && replace_with == `\\n\\n`) {
            txt1 = txt1.trim().split('\n').map(l => l.trim());
            txt_2(txt1.join('\n\n'));
        } else {
            if (replace_with == `\\n`) {
                txt1 = txt1.trim().split(replace_value).map(l => l.trim());
                txt_2(txt1.join('\n'));
            } else if (replace_with == `\\n\\n`) {
                txt1 = txt1.trim().split(replace_value).map(l => l.trim());
                txt_2(txt1.join('\n\n'));
            } else {
                if (replace_value == '\\n') {
                    txt_2(txt1.replaceAll(/\n/g, replace_with).trim());
                } else {
                    txt_2(txt1.replaceAll(replace_value, replace_with));
                }
            }
        }
        showToast('Replaced occurrences', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Add Left') {
        let left_right_value = inp('left_right_value') || '';
        let txt1 = txt_1() || '';
        txt1 = txt1.trim().split('\n').map(l => left_right_value + l);
        txt_2(txt1.join('\n'));
        showToast('Prefix added to lines', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Add Right') {
        let left_right_value = inp('left_right_value') || '';
        let txt1 = txt_1() || '';
        txt1 = txt1.trim().split('\n').map(l => l + left_right_value);
        txt_2(txt1.join('\n'));
        showToast('Suffix added to lines', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Add Left-Right') {
        let left_right_value = inp('left_right_value') || '';
        let txt1 = txt_1() || '';
        txt1 = txt1.trim().split('\n').map(l => left_right_value + l + left_right_value);
        txt_2(txt1.join('\n'));
        showToast('Wrapped lines on left & right', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Trim') {
        let txt1 = txt_1() || '';
        txt1 = txt1.trim().split('\n').map(l => l.trim()).filter(Boolean);
        txt_1(txt1.join('\n'));
        showToast('Whitespace & blank lines trimmed', 'success');
        pushHistory();
    } else if (btn == 'Update') {
        if (e.ctrlKey) {
            localStorage.setItem('txt_1', txt_1());
            showToast('Input saved to local storage', 'info');
        } else {
            if (txt_2()) {
                updateToTop();
                showToast('Output pushed to Input', 'success');
                pushHistory();
            }
        }
    } else if (btn == 'Clear') {
        clear();
        showToast('Cleared input & output', 'info');
        pushHistory();
    } else if (btn == 'Split Excel') {
        let txt1 = txt_1() || '';
        let split_excel_value = inp('split_excel_value');
        if (split_excel_value) {
            txt1 = txt1.trim().split('\t').map(l => l.trim());
            txt_2(txt1.filter(Boolean).join(split_excel_value));
            updateToTop();
        } else {
            txt1 = txt1.trim().split('\t').map(l => l.trim());
            txt_2(txt1.filter(Boolean).join('\n'));
            updateToTop();
        }
        showToast('Excel tabs split successfully', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'In Query') {
        let txt1 = txt_1() || '';
        txt1 = txt1.trim().split('\n').map(l => l.trim()).filter(Boolean);
        txt_2(`'` + txt1.join(`','`) + `'`);
        showToast(`SOQL IN-Query generated (${txt1.length} items)`, 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'In Query Skip Rows') {
        let txt1 = txt_1() || '';
        let skip_row_count = parseInt(inp('skip_row_count')) || 0;
        txt1 = txt1.trim().split('\n').map(l => l.trim()).filter(Boolean);
        if (skip_row_count > 0) {
            txt1.splice(0, skip_row_count);
        }
        txt_2(`'` + txt1.join(`','`) + `'`);
        showToast(`SOQL IN-Query generated (${txt1.length} items)`, 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Copy') {
        copyToCLipboard(txt_2(), $(this));
    } else if (btn == 'Blank') {
        blank();
        showToast('Cleared all data and storage', 'warning');
        pushHistory();
    } else if (btn == 'Remove Duplicates') {
        let txt1 = txt_1() || '';
        let noDuplicatesArray = [];
        txt1 = txt1.trim().split('\n').map(l => l.trim()).filter(Boolean);
        let origCount = txt1.length;
        txt1.forEach(item => {
            if (!noDuplicatesArray.includes(item)) {
                noDuplicatesArray.push(item);
            }
        });
        txt_2(noDuplicatesArray.join('\n'));
        showToast(`Deduplicated: ${origCount - noDuplicatesArray.length} duplicates removed`, 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Generate Array') {
        let txt1 = txt_1() || '';
        txt1 = txt1.trim().split('\n').map(l => l.trim()).filter(Boolean);
        txt_2(`['${txt1.join(`', '`)}']`);
        showToast('Array syntax generated', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Generate Dropdown') {
        let txt1 = txt_1() || '';
        txt1 = txt1.trim().split('\n').map(l => {
            return `  { label: "${l.trim()}", value: "${l.trim()}" }`;
        }).filter(Boolean);
        txt_2(`[\n${txt1.join(`,\n`)}\n];`);
        showToast('Options array generated', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Extract Text Between') {
        let txt1 = txt_1() || '';
        let extract_left_value = inp('extract_left_value');
        let extract_right_value = inp('extract_right_value');
        if (extract_left_value && extract_right_value) {
            try {
                const startTag = escapeRegex(extract_left_value);
                const endTag = escapeRegex(extract_right_value);
                const regex = new RegExp(`${startTag}(.*?)${endTag}`, 'g');
                let match;
                const outputArray = [];
                while ((match = regex.exec(txt1)) !== null) {
                    outputArray.push(match[1]);
                }
                txt_2(outputArray.join('\n'));
                showToast(`Extracted ${outputArray.length} occurrences`, 'success');
            } catch (err) {
                showToast('Regex error: ' + err.message, 'danger');
            }
        }
        pushHistory();
        afterActions();
    } else if (btn == 'Replace Text Between - Include') {
        let txt1 = txt_1() || '';
        let replace_left_value = inp('replace_left_value');
        let replace_right_value = inp('replace_right_value');
        let replace_value_btwn = inp('replace_value_btwn') || '';
        if (replace_left_value && replace_right_value) {
            try {
                const startTag = escapeRegex(replace_left_value);
                const endTag = escapeRegex(replace_right_value);
                const regex = new RegExp(`${startTag}.*?${endTag}`, 'g');
                txt_2(txt1.replace(regex, replace_value_btwn));
                showToast('Text between replaced', 'success');
            } catch (err) {
                showToast('Regex error: ' + err.message, 'danger');
            }
        }
        pushHistory();
        afterActions();
    } else if (btn == 'Configure User Snippet') {
        let txt1 = txt_1() || '';
        let lines = txt1.split('\n');
        let formatted = lines.map(line => {
            let escaped = line.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\$/g, '\\$');
            return `"${escaped}"`;
        }).join(',\n');
        txt_2(formatted);
        showToast('User snippet array formatted', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Extract Text From Html') {
        let txt1 = txt_1() || '';
        txt_2(htmlDecode(txt1));
        showToast('HTML decoded', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'In Query Distinct') {
        navigator.clipboard.readText().then(text => {
            let i = 0;
            txt_1(text);
            text = text.trim().split('\n');
            text.splice(0, 1);
            let newArray = [];
            while (i < text.length) {
                let trimValue = text[i].trim();
                if (!newArray.includes(trimValue)) {
                    newArray.push(trimValue);
                }
                i++;
            }
            let queryValues = `'` + newArray.filter(Boolean).join(`','`) + `'`;
            let query = `Select Id, p66_Legacy_ID__c from Account where p66_Legacy_ID__c IN (${queryValues})`;
            txt_2(query);
            copyToCLipboard(txt_2(), null);
            showToast('Distinct query copied to clipboard', 'success');
            pushHistory();
        }).catch(err => {
            showToast('Clipboard access required', 'warning');
        });
        afterActions();
    } else if (btn == 'Replace Before') {
        let txt1 = txt_1() || '';
        let replace_before_value = inp('replace_before_value');
        let replace_before_with_value = inp('replace_before_with_value') || '';
        let pos = parseInt(inp('replace_before_position_value')) || 1;

        if (replace_before_value) {
            let lines = txt1.trim().split('\n').map(line => {
                let parts = line.split(replace_before_value);
                if (parts.length > 1) {
                    if (pos <= parts.length) {
                        parts[pos - 1] = replace_before_with_value;
                        return parts.join(replace_before_value);
                    }
                }
                return line;
            });
            txt_2(lines.join('\n'));
            showToast('Replaced before delimiter', 'success');
            pushHistory();
        }
        afterActions();
    } else if (btn == 'Replace After') {
        let txt1 = txt_1() || '';
        let replace_after_value = inp('replace_after_value');
        let replace_after_with_value = inp('replace_after_with_value') || '';
        let pos = parseInt(inp('replace_after_position_value')) || 1;

        if (replace_after_value) {
            let lines = txt1.trim().split('\n').map(line => {
                let parts = line.split(replace_after_value);
                if (parts.length > pos) {
                    parts[pos] = replace_after_with_value;
                    return parts.join(replace_after_value);
                }
                return line;
            });
            txt_2(lines.join('\n'));
            showToast('Replaced after delimiter', 'success');
            pushHistory();
        }
        afterActions();
    } else if (btn == 'Shift') {
        let txt1 = txt_1() || '';
        let m_position = parseInt(inp('m_position')) || 1;
        let m_seperator = inp('m_seperator') || ',';
        let m_move_position = parseInt(inp('m_move_position')) || 1;

        let lines = txt1.trim().split('\n').map(line => {
            let parts = line.split(m_seperator);
            if (parts.length >= m_position) {
                let moved = parts.splice(m_position - 1, 1)[0];
                parts.splice(m_move_position - 1, 0, moved);
                return parts.join(m_seperator);
            }
            return line;
        });
        txt_2(lines.join('\n'));
        showToast('Shifted column positions', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Create Json Map') {
        let txt1 = txt_1() || '';
        let key_field = inp('key_field');
        let map_name = inp('map_name') || 'dataMap';
        let remove_attr = inp('remove_attr');

        if (txt1 && key_field) {
            try {
                let json = JSON.parse(txt1);
                if (!Array.isArray(json)) json = [json];
                let dataMap = new Map();
                json.forEach(item => {
                    delete item.attributes;
                    if (remove_attr && item[remove_attr]) {
                        delete item[remove_attr].attributes;
                    }
                    let key = key_field.includes('.') ?
                        key_field.split('.').reduce((acc, part) => acc && acc[part], item) :
                        item[key_field];
                    dataMap.set(key, item);
                });
                let entries = Array.from(dataMap.entries());
                let entriesStr = entries.map(v => JSON.stringify(v, null, 2));
                txt_2(`const ${map_name} = new Map([\n${entriesStr.join(',\n')}\n]);`);
                showToast(`JSON Map created with ${dataMap.size} entries`, 'success');
                pushHistory();
            } catch (err) {
                showToast('Invalid JSON input: ' + err.message, 'danger');
            }
        }
    } else if (btn == 'Field Permissions') {
        let txt1 = txt_1() || '';
        txt1 = txt1.trim().split('\n').map(l => l.trim()).filter(Boolean);
        let codeXml = '';
        txt1.forEach(val => {
            if (val.includes('<field>')) {
                codeXml += `<fieldPermissions>\n\t<editable>true</editable>\n\t${val}\n\t<readable>true</readable>\n</fieldPermissions>\n`;
            } else {
                codeXml += `<fieldPermissions>\n\t<editable>true</editable>\n\t<field>${val}</field>\n\t<readable>true</readable>\n</fieldPermissions>\n`;
            }
        });
        txt_2(codeXml.trim());
        showToast(`Generated permissions for ${txt1.length} fields`, 'success');
        pushHistory();
    } else if (btn == 'Remove Lines') {
        let txt1 = txt_1() || '';
        let lines = txt1.split('\n');
        let remove_starts = inp('remove_starts');
        let remove_ends = inp('remove_ends');
        let remove_contains = inp('remove_contains');

        let filtered = lines.filter(line => {
            if (remove_starts && line.startsWith(remove_starts)) return false;
            if (remove_ends && line.endsWith(remove_ends)) return false;
            if (remove_contains && line.includes(remove_contains)) return false;
            return true;
        });
        txt_2(filtered.join('\n'));
        showToast(`Filtered: ${lines.length - filtered.length} lines removed`, 'success');
        pushHistory();
    } else if (btn == 'Get Contains') {
        let contains_value = inp('contains_value');
        if (contains_value) {
            let txt1 = txt_1() || '';
            let lines = txt1.split('\n').filter(l => l.includes(contains_value));
            txt_2(lines.join('\n'));
            showToast(`Found ${lines.length} matching lines`, 'success');
            pushHistory();
        }
    } else if (btn == 'Remove After') {
        let sep = inp('seperator_contains_value');
        if (sep) {
            let txt1 = txt_1() || '';
            let lines = txt1.split('\n').map(l => {
                if (l.includes(sep)) return l.split(sep)[0];
                return l;
            });
            txt_2(lines.join('\n'));
            showToast('Trimmed content after separator', 'success');
            pushHistory();
        }
    } else if (btn == 'Remove Before') {
        let sep = inp('seperator_contains_value');
        if (sep) {
            let txt1 = txt_1() || '';
            let lines = txt1.split('\n').map(l => {
                if (l.includes(sep)) {
                    let parts = l.split(sep);
                    return parts[parts.length - 1];
                }
                return l;
            });
            txt_2(lines.join('\n'));
            showToast('Trimmed content before separator', 'success');
            pushHistory();
        }
    } else if (btn == 'Sort List Asc') {
        let txt1 = (txt_1() || '').trim().split('\n').map(l => l.trim()).filter(Boolean);
        txt1.sort((a, b) => a.length - b.length);
        txt_2(txt1.join('\n'));
        showToast('Sorted by length ascending', 'success');
        pushHistory();
    } else if (btn == 'Sort List Desc') {
        let txt1 = (txt_1() || '').trim().split('\n').map(l => l.trim()).filter(Boolean);
        txt1.sort((a, b) => b.length - a.length);
        txt_2(txt1.join('\n'));
        showToast('Sorted by length descending', 'success');
        pushHistory();
    } else if (btn == 'Sort Alpha. Asc') {
        let txt1 = (txt_1() || '').trim().split('\n').map(l => l.trim()).filter(Boolean);
        txt1.sort((a, b) => a.localeCompare(b));
        txt_2(txt1.join('\n'));
        showToast('Sorted A-Z', 'success');
        pushHistory();
    } else if (btn == 'Sort Alpha. Desc') {
        let txt1 = (txt_1() || '').trim().split('\n').map(l => l.trim()).filter(Boolean);
        txt1.sort((a, b) => b.localeCompare(a));
        txt_2(txt1.join('\n'));
        showToast('Sorted Z-A', 'success');
        pushHistory();
    } else if (btn == 'Replace Locations') {
        replaceLocationsX();
        replaceLocationsY();
        showToast('Flow location tags reset (0000 / 1111)', 'success');
        pushHistory();
    } else if (btn == 'Get File') {
        getFile();
    } else if (btn == 'Get Package XML') {
        getPackageXML();
    } else if (btn == 'Remove Chars') {
        let txt1 = (txt_1() || '').trim().split('\n').map(l => l.trim()).filter(Boolean);
        let count = parseInt(inp('remove_char_count')) || 0;
        if (count > 0) {
            let lines = txt1.map(v => v.slice(0, -count));
            txt_2(lines.join('\n'));
            showToast(`Removed trailing ${count} chars from lines`, 'success');
            pushHistory();
        }
    } else if (btn == 'Get Session URL') {
        let session_url = inp('session_url') || '';
        if (!session_url.trim()) {
            session_url = 'https://phillips66enterprise.lightning.force.com/lightning/page/home';
        }
        let session_1 = inp('session_1') || '';
        let session_2 = inp('session_2') || '';
        session_url = session_url.split('.com')[0].replace('.lightning.force', '.my.salesforce.com');
        let session_url_1 = session_url + '/secur/frontdoor.jsp?sid=' + session_1;
        let session_url_2 = session_url + '/secur/frontdoor.jsp?sid=' + session_2;
        txt_1(session_url_1 + '\n' + session_url_2);
        txt_2(session_url_1 + '\n' + session_url_2);
        $('.b_lines_top').click();
        showToast('Session URLs generated', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'In Queries') {
        let txt1 = (txt_1() || '').trim().split('\n').map(l => l.trim()).filter(Boolean);
        let chunks_count = parseInt(inp('chunks_count')) || 200;
        let queriesArray = [];
        for (let i = 0; i < txt1.length; i += chunks_count) {
            let chunk = txt1.slice(i, i + chunks_count);
            queriesArray.push(`'` + chunk.join(`','`) + `'`);
        }
        txt_2(queriesArray.join('\n'));
        generateQueriesTable(queriesArray);
        showToast(`Split into ${queriesArray.length} SOQL chunks`, 'success');
        pushHistory();
        afterActions();
    }

    // ============================================================
    // NEW POWER DEVELOPER SUITE ACTIONS
    // ============================================================

    else if (btn == 'UPPERCASE') {
        txt_2((txt_1() || '').toUpperCase());
        showToast('Converted to UPPERCASE', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'lowercase') {
        txt_2((txt_1() || '').toLowerCase());
        showToast('Converted to lowercase', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Title Case') {
        let res = (txt_1() || '').replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
        txt_2(res);
        showToast('Converted to Title Case', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'camelCase') {
        let lines = (txt_1() || '').split('\n').map(toCamelCase);
        txt_2(lines.join('\n'));
        showToast('Converted to camelCase', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'snake_case') {
        let lines = (txt_1() || '').split('\n').map(toSnakeCase);
        txt_2(lines.join('\n'));
        showToast('Converted to snake_case', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'kebab-case') {
        let lines = (txt_1() || '').split('\n').map(toKebabCase);
        txt_2(lines.join('\n'));
        showToast('Converted to kebab-case', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'PascalCase') {
        let lines = (txt_1() || '').split('\n').map(toPascalCase);
        txt_2(lines.join('\n'));
        showToast('Converted to PascalCase', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Format JSON 2') {
        try {
            let obj = JSON.parse(txt_1() || '');
            txt_2(JSON.stringify(obj, null, 2));
            showToast('JSON formatted (2 spaces)', 'success');
            pushHistory();
            afterActions();
        } catch (err) {
            showToast('Invalid JSON: ' + err.message, 'danger');
        }
    } else if (btn == 'Format JSON 4') {
        try {
            let obj = JSON.parse(txt_1() || '');
            txt_2(JSON.stringify(obj, null, 4));
            showToast('JSON formatted (4 spaces)', 'success');
            pushHistory();
            afterActions();
        } catch (err) {
            showToast('Invalid JSON: ' + err.message, 'danger');
        }
    } else if (btn == 'Minify JSON') {
        try {
            let obj = JSON.parse(txt_1() || '');
            txt_2(JSON.stringify(obj));
            showToast('JSON minified', 'success');
            pushHistory();
            afterActions();
        } catch (err) {
            showToast('Invalid JSON: ' + err.message, 'danger');
        }
    } else if (btn == 'JSON to CSV') {
        try {
            let obj = JSON.parse(txt_1() || '');
            if (!Array.isArray(obj)) obj = [obj];
            if (typeof Papa !== 'undefined') {
                txt_2(Papa.unparse(obj));
            } else {
                let keys = Object.keys(obj[0] || {});
                let csv = keys.join(',') + '\n';
                csv += obj.map(row => keys.map(k => JSON.stringify(row[k] || '')).join(',')).join('\n');
                txt_2(csv);
            }
            showToast('JSON converted to CSV', 'success');
            pushHistory();
            afterActions();
        } catch (err) {
            showToast('JSON conversion error: ' + err.message, 'danger');
        }
    } else if (btn == 'CSV to JSON') {
        try {
            let raw = txt_1() || '';
            if (typeof Papa !== 'undefined') {
                let parsed = Papa.parse(raw, { header: true, skipEmptyLines: true });
                txt_2(JSON.stringify(parsed.data, null, 2));
            } else {
                let lines = raw.trim().split('\n');
                let headers = lines[0].split(',').map(h => h.trim());
                let result = lines.slice(1).map(line => {
                    let vals = line.split(',');
                    let item = {};
                    headers.forEach((h, i) => item[h] = vals[i] ? vals[i].trim() : '');
                    return item;
                });
                txt_2(JSON.stringify(result, null, 2));
            }
            showToast('CSV converted to JSON', 'success');
            pushHistory();
            afterActions();
        } catch (err) {
            showToast('CSV conversion error: ' + err.message, 'danger');
        }
    } else if (btn == 'URL Encode') {
        txt_2(encodeURIComponent(txt_1() || ''));
        showToast('URL Encoded', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'URL Decode') {
        try {
            txt_2(decodeURIComponent(txt_1() || ''));
            showToast('URL Decoded', 'success');
            pushHistory();
            afterActions();
        } catch (err) {
            showToast('URL Decode error', 'danger');
        }
    } else if (btn == 'Base64 Encode') {
        try {
            txt_2(btoa(unescape(encodeURIComponent(txt_1() || ''))));
            showToast('Base64 Encoded', 'success');
            pushHistory();
            afterActions();
        } catch (err) {
            showToast('Base64 Encode error: ' + err.message, 'danger');
        }
    } else if (btn == 'Base64 Decode') {
        try {
            txt_2(decodeURIComponent(escape(atob(txt_1() || ''))));
            showToast('Base64 Decoded', 'success');
            pushHistory();
            afterActions();
        } catch (err) {
            showToast('Base64 Decode error: ' + err.message, 'danger');
        }
    } else if (btn == 'HTML Entity Encode') {
        let text = txt_1() || '';
        let encoded = text.replace(/[\u00A0-\u9999<>\&]/g, i => '&#' + i.charCodeAt(0) + ';');
        txt_2(encoded);
        showToast('HTML Entities encoded', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Number Lines') {
        let lines = (txt_1() || '').split('\n').map((l, idx) => `${idx + 1}. ${l}`);
        txt_2(lines.join('\n'));
        showToast('Lines numbered', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Reverse Lines') {
        let lines = (txt_1() || '').split('\n').reverse();
        txt_2(lines.join('\n'));
        showToast('Lines reversed', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Shuffle Lines') {
        let lines = (txt_1() || '').split('\n');
        for (let i = lines.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [lines[i], lines[j]] = [lines[j], lines[i]];
        }
        txt_2(lines.join('\n'));
        showToast('Lines shuffled randomly', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Keep Only Duplicates') {
        let txt1 = (txt_1() || '').trim().split('\n').map(l => l.trim()).filter(Boolean);
        let counts = {};
        txt1.forEach(item => counts[item] = (counts[item] || 0) + 1);
        let dups = Object.keys(counts).filter(k => counts[k] > 1);
        txt_2(dups.join('\n'));
        showToast(`Filtered to ${dups.length} duplicate items`, 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Keep Only Unique Lines') {
        let txt1 = (txt_1() || '').trim().split('\n').map(l => l.trim()).filter(Boolean);
        let counts = {};
        txt1.forEach(item => counts[item] = (counts[item] || 0) + 1);
        let unique = Object.keys(counts).filter(k => counts[k] === 1);
        txt_2(unique.join('\n'));
        showToast(`Filtered to ${unique.length} unique items`, 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Frequency Count') {
        let txt1 = (txt_1() || '').trim().split('\n').map(l => l.trim()).filter(Boolean);
        let counts = {};
        txt1.forEach(item => counts[item] = (counts[item] || 0) + 1);
        let sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
        let formatted = sorted.map(([val, cnt]) => `${cnt}x\t${val}`);
        txt_2(formatted.join('\n'));
        showToast('Frequency count generated', 'success');
        pushHistory();
        afterActions();
    } else if (btn == '15 to 18 Char ID') {
        let txt1 = (txt_1() || '').trim().split('\n');
        let converted = txt1.map(line => {
            let trimmed = line.trim();
            if (trimmed.length === 15) {
                return convert15To18(trimmed);
            }
            // Replace any 15-char Salesforce ID embedded in the line
            return line.replace(/\b([a-zA-Z0-9]{15})\b/g, match => convert15To18(match));
        });
        txt_2(converted.join('\n'));
        showToast('Salesforce 15-to-18 Case-Safe IDs generated', 'success');
        pushHistory();
        afterActions();
    } else if (btn == '18 to 15 Char ID') {
        let txt1 = (txt_1() || '').trim().split('\n');
        let converted = txt1.map(line => {
            let trimmed = line.trim();
            if (trimmed.length === 18) {
                return trimmed.substring(0, 15);
            }
            return line.replace(/\b([a-zA-Z0-9]{18})\b/g, match => match.substring(0, 15));
        });
        txt_2(converted.join('\n'));
        showToast('Salesforce 18-to-15 IDs truncated', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Comma Separated') {
        let txt1 = (txt_1() || '').trim().split('\n').map(l => l.trim()).filter(Boolean);
        txt_2(txt1.join(', '));
        showToast('Joined with commas', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Apex Set<Id>') {
        let txt1 = (txt_1() || '').trim().split('\n').map(l => l.trim()).filter(Boolean);
        let items = txt1.map(id => `'${id}'`).join(', ');
        txt_2(`Set<Id> recordIds = new Set<Id>{ ${items} };`);
        showToast('Apex Set<Id> declaration generated', 'success');
        pushHistory();
        afterActions();
    } else if (btn == 'Diff Compare') {
        openDiffModal();
    } else if (btn == 'Swap') {
        swapEditors();
    }
});

// ============================================================
// Case Conversion Helpers
// ============================================================

function toCamelCase(str) {
    return str.trim()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
        .replace(/^[A-Z]/, c => c.toLowerCase());
}

function toPascalCase(str) {
    let camel = toCamelCase(str);
    return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function toSnakeCase(str) {
    return str.trim()
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[^a-zA-Z0-9]+/g, '_')
        .toLowerCase()
        .replace(/^_+|_+$/g, '');
}

function toKebabCase(str) {
    return toSnakeCase(str).replace(/_/g, '-');
}

// ============================================================
// Salesforce 15-to-18 Character ID Converter
// ============================================================

function convert15To18(id15) {
    if (!id15 || id15.length !== 15) return id15;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ012345";
    let suffix = "";
    for (let i = 0; i < 3; i++) {
        let flags = 0;
        for (let j = 0; j < 5; j++) {
            const c = id15.charAt(i * 5 + j);
            if (c >= 'A' && c <= 'Z') {
                flags |= (1 << j);
            }
        }
        suffix += chars.charAt(flags);
    }
    return id15 + suffix;
}

// ============================================================
// Diff Comparison Modal
// ============================================================

function openDiffModal() {
    const text1 = txt_1() || '';
    const text2 = txt_2() || '';
    const lines1 = text1.split('\n');
    const lines2 = text2.split('\n');

    let diffHtml = '';
    const maxLen = Math.max(lines1.length, lines2.length);

    let addedCount = 0;
    let removedCount = 0;
    let unchangedCount = 0;

    for (let i = 0; i < maxLen; i++) {
        const l1 = lines1[i];
        const l2 = lines2[i];

        if (l1 === l2) {
            unchangedCount++;
            diffHtml += `<div class="diff_line diff_equal"><span style="color:var(--text-muted); width: 35px; user-select:none;">${i + 1}</span> <span>  ${escapeHtml(l1 || '')}</span></div>`;
        } else {
            if (l1 !== undefined) {
                removedCount++;
                diffHtml += `<div class="diff_line diff_removed"><span style="color:var(--danger); width: 35px; user-select:none;">${i + 1}</span> <span>- ${escapeHtml(l1)}</span></div>`;
            }
            if (l2 !== undefined) {
                addedCount++;
                diffHtml += `<div class="diff_line diff_added"><span style="color:var(--success); width: 35px; user-select:none;">${i + 1}</span> <span>+ ${escapeHtml(l2)}</span></div>`;
            }
        }
    }

    $('#diff_summary').html(`
        <span style="color: var(--success); font-weight: 600;">+${addedCount} added</span> &nbsp;
        <span style="color: var(--danger); font-weight: 600;">-${removedCount} removed</span> &nbsp;
        <span style="color: var(--text-muted);">${unchangedCount} unchanged</span>
    `);
    $('#diff_container').html(diffHtml);
    $('.diff_modal').removeClass('hide');
}

// ============================================================
// Quick Editor Actions (Swap, Paste, Clear)
// ============================================================

function swapEditors() {
    let t1 = txt_1();
    let t2 = txt_2();
    txt_1(t2);
    txt_2(t1);
    updateAllStats();
    showToast('Swapped Input ⇅ Output', 'info');
    pushHistory();
}

$(document).on('click', '#btn_swap_editors', function() {
    swapEditors();
});

$(document).on('click', '#btn_push_top', function() {
    if (txt_2()) {
        updateToTop();
        showToast('Output pushed to Input', 'success');
        pushHistory();
    }
});

$(document).on('click', '#btn_paste_input', function() {
    navigator.clipboard.readText().then(text => {
        txt_1(text);
        updateAllStats();
        showToast('Pasted from clipboard', 'success');
        pushHistory();
    }).catch(err => {
        showToast('Clipboard access denied', 'warning');
    });
});

$(document).on('click', '#btn_copy_input', function() {
    copyToCLipboard(txt_1(), $(this));
});

$(document).on('click', '#btn_copy_output', function() {
    copyToCLipboard(txt_2(), $(this));
});

$(document).on('click', '#btn_clear_input', function() {
    txt_1('');
    updateAllStats();
    showToast('Input cleared', 'info');
    pushHistory();
});

$(document).on('click', '#btn_clear_output', function() {
    txt_2('');
    updateAllStats();
    showToast('Output cleared', 'info');
    pushHistory();
});

$(document).on('click', '#btn_undo', function() {
    undo();
});

$(document).on('click', '#btn_redo', function() {
    redo();
});

// Load sample data dropdown
$(document).on('change', '#sample_data_select', function() {
    const val = $(this).val();
    if (val === 'salesforce') {
        let ids = [];
        for (let i = 1; i <= 25; i++) {
            ids.push(`0010e00001Qu0${i < 10 ? '0' + i : i}j`);
        }
        txt_1(ids.join('\n'));
        showToast('Sample 15-char Salesforce IDs loaded', 'info');
    } else if (val === 'whitespace') {
        txt_1(`  Item Alpha   \n\n   Item Beta \n      \n   Item Gamma   \n\n\n   Item Delta`);
        showToast('Sample messy whitespace loaded', 'info');
    } else if (val === 'json') {
        txt_1(`[{"id":"001","name":"Acme Corp","industry":"Technology","active":true},{"id":"002","name":"Global Media","industry":"Media","active":false}]`);
        showToast('Sample JSON payload loaded', 'info');
    } else if (val === 'csv') {
        txt_1(`id,name,role,email\n1,Jane Doe,Admin,jane@example.com\n2,John Smith,Developer,john@example.com\n3,Sarah Connor,Engineer,sarah@example.com`);
        showToast('Sample CSV loaded', 'info');
    }
    $(this).val('');
    updateAllStats();
    pushHistory();
});

// ============================================================
// Toast Notification Engine
// ============================================================

function showToast(message, type = 'info') {
    let $container = $('#toast_container');
    if (!$container.length) {
        $('body').append('<div id="toast_container"></div>');
        $container = $('#toast_container');
    }

    const icons = {
        success: 'fa-check-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle',
        danger: 'fa-times-circle'
    };

    const icon = icons[type] || 'fa-info-circle';
    const $toast = $(`
        <div class="toast toast_${type}">
            <i class="fa ${icon}"></i>
            <span>${escapeHtml(message)}</span>
        </div>
    `);

    $container.append($toast);

    setTimeout(() => {
        $toast.css({ opacity: 0, transform: 'translateY(10px)' });
        setTimeout(() => $toast.remove(), 250);
    }, 2400);
}

// ============================================================
// Salesforce & XML Specialized Logic
// ============================================================

function getPackageXML() {
    let deployRequestResponse = txt_1();
    try {
        let res = JSON.parse(deployRequestResponse);
        const groupedComponents = {};
        const metadataObjectsMap = {};

        let components = ("allComponentMessages" in res.deployResult.details) ?
            res.deployResult.details.allComponentMessages :
            res.deployResult.details.componentSuccesses;

        components.sort((a, b) => a.componentType < b.componentType ? -1 : a.componentType > b.componentType ? 1 : a.fullName < b.fullName ? -1 : a.fullName > b.fullName ? 1 : 0);
        components.forEach(({ componentType, fullName, fileName, problemType }) => {
            if (componentType && fullName && problemType != "Warning") {
                componentType = fileName.startsWith("settings") ? "Settings" : componentType;

                if (!groupedComponents[componentType]) {
                    groupedComponents[componentType] = new Set();
                }
                groupedComponents[componentType].add(fullName);

                if (!metadataObjectsMap[componentType]) {
                    metadataObjectsMap[componentType] = {
                        xmlName: componentType,
                        selected: true,
                        expanded: true,
                        childXmlNames: []
                    };
                }
                metadataObjectsMap[componentType].childXmlNames.push({
                    parent: metadataObjectsMap[componentType],
                    fullName,
                    selected: true
                });
            }
        });
        let metadataObjects = Object.values(metadataObjectsMap).map(metadataObject => {
            metadataObject.childXmlNames.sort((a, b) => a.fullName < b.fullName ? -1 : a.fullName > b.fullName ? 1 : 0);
            return { ...metadataObject };
        });
        generatePackageXml(metadataObjects);
        showToast('Package.xml generated successfully', 'success');
        pushHistory();
    } catch (err) {
        showToast('Deploy response JSON parse error: ' + err.message, 'danger');
    }
}

function generatePackageXml(components) {
    const groupedComponents = {};
    components.forEach((parent) => {
        parent.childXmlNames = parent.childXmlNames.length > 0 && parent.childXmlNames.filter(child => child.selected).length > 0 ? parent.childXmlNames : [{ fullName: "*", selected: true }];
        if (parent.xmlName) {
            if (!groupedComponents[parent.xmlName]) {
                groupedComponents[parent.xmlName] = new Set();
            }
            parent.childXmlNames.forEach((child) => {
                if (child.childXmlNames && child.childXmlNames.length > 0) {
                    child.childXmlNames?.forEach((grandchild) => {
                        if (grandchild.selected) {
                            groupedComponents[parent.xmlName].add(grandchild.fullName);
                        }
                    });
                } else if (child.selected || child.fullName === "*") {
                    groupedComponents[parent.xmlName].add(child.fullName);
                }
            });
        }
    });
    let packageXml = "<Package xmlns=\"http://soap.sforce.com/2006/04/metadata\">\n";
    Object.entries(groupedComponents).forEach(([type, members]) => {
        packageXml += "    <types>\n";
        [...members].sort().forEach(member => {
            packageXml += `        <members>${member}</members>\n`;
        });
        packageXml += `        <name>${type}</name>\n`;
        packageXml += "    </types>\n";
    });
    packageXml += `    <version>61.0</version>\n`;
    packageXml += "</Package>";
    txt_2(packageXml);
}

function getFile() {
    let base64 = (txt_1() || '').trim();
    let file_name = $('.file_name').val() || 'download.bin';
    try {
        const byteCharacters = atob(base64);
        const byteArrays = new Uint8Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteArrays[i] = byteCharacters.charCodeAt(i);
        }
        const blob = new Blob([byteArrays], { type: 'application/octet-stream' });
        if (typeof saveAs !== 'undefined') {
            saveAs(blob, file_name);
        } else {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = file_name;
            a.click();
            URL.revokeObjectURL(url);
        }
        showToast('File downloaded: ' + file_name, 'success');
    } catch (err) {
        showToast('Invalid Base64 string', 'danger');
    }
}

function replaceLocationsX() {
    let txt1 = txt_1() || '';
    txt1 = txt1.replace(/<locationX>.*?<\/locationX>/g, '<locationX>0000</locationX>');
    txt_1(txt1);
    let txt2 = txt_2() || '';
    txt2 = txt2.replace(/<locationX>.*?<\/locationX>/g, '<locationX>0000</locationX>');
    txt_2(txt2);
}

function replaceLocationsY() {
    let txt1 = txt_1() || '';
    txt1 = txt1.replace(/<locationY>.*?<\/locationY>/g, '<locationY>1111</locationY>');
    txt_1(txt1);
    let txt2 = txt_2() || '';
    txt2 = txt2.replace(/<locationY>.*?<\/locationY>/g, '<locationY>1111</locationY>');
    txt_2(txt2);
}

// ============================================================
// Clipboard, Clear, Blank, Text Helpers
// ============================================================

function copyToCLipboard(value, _this) {
    let text = value || '';
    navigator.clipboard.writeText(text).then(function() {
        showToast('Copied to clipboard!', 'success');
        if (_this && _this.length) {
            let orig = _this.text();
            _this.text('Copied!');
            _this.addClass('btn_copy_success');
            setTimeout(() => {
                _this.text(orig);
                _this.removeClass('btn_copy_success');
            }, 1200);
        }
    }, function(err) {
        showToast('Copy failed: ' + err, 'danger');
    });
}

function clear() {
    txt_1('');
    txt_2('');
    updateAllStats();
}

function blank() {
    txt_1('');
    txt_2('');
    localStorage.removeItem('txt_1');
    $('.inp:not(.skip_row_count)').val('');
    updateAllStats();
}

function txt_1(value, updateHistory = true) {
    if (value == null) {
        return $('.txt_1').val();
    } else {
        $('.txt_1').val(value);
        updateAllStats();
        if (updateHistory) pushHistory();
    }
}

function txt_2(value, updateHistory = true) {
    if (value == null) {
        return $('.txt_2').val();
    } else {
        $('.txt_2').val(value);
        updateAllStats();
        if (updateHistory) pushHistory();
    }
}

function inp(cls) {
    return $('.' + cls).val();
}

function updateToTop() {
    txt_1(txt_2());
    updateAllStats();
}

function afterActions() {
    if (isCtrlPressed) {
        updateToTop();
    }
}

// Live text change listeners
$(document).on('input', '.txt_1', function() {
    updateAllStats();
});

$(document).on('input', '.txt_2', function() {
    updateAllStats();
});

// Auto-save input fields to localStorage
$(document).on('input', '.inp', function() {
    doOnInput($(this));
});

function doOnInput(_this) {
    let cls = _this.data('cls');
    if (!cls) return;
    let val = _this.val().trim();
    if (val) {
        localStorage.setItem(cls, val);
    } else {
        localStorage.removeItem(cls);
    }
}

function populateFromLocalStorage() {
    const keys = [
        'replace_value', 'replace_with', 'split_excel_value', 'extract_left_value',
        'extract_right_value', 'replace_left_value', 'replace_right_value', 'replace_value_btwn',
        'replace_before_value', 'replace_before_with_value', 'replace_after_value',
        'replace_after_with_value', 'left_right_value', 'chunks_count', 'map_name',
        'key_field', 'remove_attr', 'remove_starts', 'remove_ends', 'remove_contains',
        'contains_value', 'seperator_contains_value', 'file_name', 'remove_char_count'
    ];
    keys.forEach(key => {
        let saved = localStorage.getItem(key);
        if (saved !== null) {
            $(`.${key}`).val(saved);
        }
    });
}

// Global key listeners
$(document).on('keydown', function(e) {
    if (e.which === 17) {
        isCtrlPressed = true;
    }
    if (e.which === 27) { // Escape
        $('.small_popup_1').addClass('hide');
        $('.diff_modal').addClass('hide');
    }
});

$(document).on('keyup', function(e) {
    if (e.which === 17) {
        isCtrlPressed = false;
    }
});

// Utility functions
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function htmlDecode(input) {
    let doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}