/**
 * Image Operator Studio - Enhanced Script
 * Provides comprehensive image workspace, canvas collage, filters, transformations,
 * cropping, export, and saved shelf storage with full backward compatibility.
 */

// Global State
let timeout;
let selectedContainer = null;
let canvasZoom = 1;
let currentViewMode = 'freeform'; // 'freeform' | 'grid'
let undoStack = [];
let redoStack = [];
let highestZIndex = 10;
let isPanning = false;
let panStart = { x: 0, y: 0 };

// Crop State
let cropTargetImg = null;
let cropState = {
    startX: 0,
    startY: 0,
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    activeRatio: 'free'
};

// Initialize on Document Ready
$(document).ready(function () {
    initTheme();
    initFullscreen();
    makeDraggableAndResizable();
    initCanvasEvents();
    initInspector();
    initShelf();
    initShortcuts();
    handleImageList(false);
    updateImageCountBadge();
    checkEmptyState();
    updateStorageMeter();

    // Ensure all existing canvas images adopt their original natural dimensions
    $('.image-container').each(function () {
        const c = $(this);
        const img = c.find('.img')[0];
        if (img) {
            function setInitialSize() {
                if (img.naturalWidth && img.naturalHeight && currentViewMode === 'freeform') {
                    c.css({ width: `${img.naturalWidth}px`, height: `${img.naturalHeight}px` });
                    updateInspectorValues(c);
                }
            }
            if (img.complete && img.naturalWidth) {
                setInitialSize();
            } else {
                img.onload = setInitialSize;
            }
        }
    });

    // Select the first image by default if present
    const firstImg = $('.image-container').first();
    if (firstImg.length) {
        selectImage(firstImg);
    }
});

/* ============================================================
   Theme Management
   ============================================================ */

function initTheme() {
    const savedTheme = localStorage.getItem('imgop_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    $('#btn_toggle_theme').on('click', function () {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('imgop_theme', next);
        updateThemeIcon(next);
        showToast(`Switched to ${next} mode`, 'info');
    });
}

function updateThemeIcon(theme) {
    const icon = $('#btn_toggle_theme i');
    if (theme === 'dark') {
        icon.removeClass('fa-sun-o').addClass('fa-moon-o');
    } else {
        icon.removeClass('fa-moon-o').addClass('fa-sun-o');
    }
}

/* ============================================================
   Fullscreen Management
   ============================================================ */

function initFullscreen() {
    $(document).off('click', '#btn_toggle_fullscreen').on('click', '#btn_toggle_fullscreen', function (e) {
        e.preventDefault();
        e.stopPropagation();
        toggleBrowserFullscreen();
    });

    const fullscreenChangeEvents = [
        'fullscreenchange',
        'webkitfullscreenchange',
        'mozfullscreenchange',
        'MSFullscreenChange'
    ];

    fullscreenChangeEvents.forEach(evt => {
        document.addEventListener(evt, updateFullscreenButtonState, false);
    });
}

function toggleBrowserFullscreen() {
    const doc = document;
    const docEl = doc.documentElement;

    const isFull = !!(
        doc.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement
    );

    if (!isFull) {
        const req = docEl.requestFullscreen ||
                    docEl.webkitRequestFullscreen ||
                    docEl.mozRequestFullScreen ||
                    docEl.msRequestFullscreen ||
                    doc.body.requestFullscreen ||
                    doc.body.webkitRequestFullscreen;
        if (req) {
            const p = req.call(docEl);
            if (p && p.catch) {
                p.catch(err => {
                    console.warn('requestFullscreen error:', err);
                    showToast('Fullscreen request was blocked or not allowed by browser', 'warning');
                });
            }
        } else {
            showToast('Fullscreen not supported in this browser', 'warning');
        }
    } else {
        const exit = doc.exitFullscreen ||
                     doc.webkitExitFullscreen ||
                     doc.mozCancelFullScreen ||
                     doc.msExitFullscreen;
        if (exit) {
            const p = exit.call(doc);
            if (p && p.catch) {
                p.catch(err => console.warn('exitFullscreen error:', err));
            }
        }
    }
}

function updateFullscreenButtonState() {
    const isFull = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
    );
    const btn = $('#btn_toggle_fullscreen');
    const icon = btn.find('i');

    if (isFull) {
        icon.removeClass('fa-arrows-alt fa-expand').addClass('fa-compress');
        btn.attr('title', 'Exit Fullscreen Mode (F or Esc)');
        btn.addClass('active');
        showToast('Entered Fullscreen Mode', 'info');
    } else {
        icon.removeClass('fa-compress').addClass('fa-arrows-alt');
        btn.attr('title', 'Toggle Fullscreen Mode (F)');
        btn.removeClass('active');
        showToast('Exited Fullscreen Mode', 'info');
    }
}

// Expose globally so inline onclick handler or window can call it directly
window.toggleBrowserFullscreen = toggleBrowserFullscreen;
window.initFullscreen = initFullscreen;

/* ============================================================
   Draggable & Resizable Setup (Backward Compatible)
   ============================================================ */

function makeDraggableAndResizable() {
    $(".resizable-draggable").each(function () {
        const el = $(this);

        // If already initialized, destroy first
        if (el.data('ui-draggable')) {
            try { el.draggable('destroy'); } catch (e) { }
        }
        if (el.data('ui-resizable')) {
            try { el.resizable('destroy'); } catch (e) { }
        }

        if (currentViewMode === 'freeform') {
            el.draggable({
                containment: false,
                stack: ".image-container",
                start: function () {
                    selectImage(el);
                    saveUndoState();
                },
                drag: function (e, ui) {
                    syncInspectorPosition(ui.position.left, ui.position.top);
                },
                stop: function (e, ui) {
                    syncInspectorPosition(ui.position.left, ui.position.top);
                }
            }).resizable({
                handles: 'n, e, s, w, ne, se, sw, nw',
                aspectRatio: el.attr('data-lock-ratio') === 'true',
                start: function () {
                    selectImage(el);
                    saveUndoState();
                },
                resize: function (e, ui) {
                    syncInspectorDimensions(ui.size.width, ui.size.height);
                },
                stop: function (e, ui) {
                    syncInspectorDimensions(ui.size.width, ui.size.height);
                }
            });
        }
    });
}

/* ============================================================
   Canvas & Image Interaction Events
   ============================================================ */

function initCanvasEvents() {
    // Canvas Background Click -> Deselect
    $('.canvas_viewport').on('click', function (e) {
        if ($(e.target).closest('.image-container').length === 0 &&
            $(e.target).closest('.inspector_panel').length === 0 &&
            $(e.target).closest('.bottom_shelf_drawer').length === 0 &&
            $(e.target).closest('.app_header').length === 0 &&
            $(e.target).closest('.modal_backdrop').length === 0) {
            deselectAll();
        }
    });

    // Select Container on Click
    $(document).on('click', '.image-container', function (e) {
        e.stopPropagation();
        selectImage($(this));
    });

    // Right-Click Context Menu on Image -> Save to Shelf (Preserves Legacy Behavior!)
    $(document).on('contextmenu', '.image-container', function (e) {
        e.preventDefault();
        saveImageToStorage($(this));
    });

    // Double-Click on Container -> Paste from Clipboard (Preserves Legacy Behavior!)
    $(document).on('dblclick', '.image-container', async function (e) {
        e.stopPropagation();
        const container = $(this);
        pasteImageIntoContainer(container);
    });

    // Global Paste Listener (Ctrl+V anywhere!)
    window.addEventListener('paste', async function (e) {
        // If an input or textarea is active, allow standard paste
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
            return;
        }

        const items = (e.clipboardData || e.originalEvent.clipboardData).items;
        let imageFound = false;

        for (let i = 0; i < items.length; i++) {
            if (items[i].type.indexOf('image') !== -1) {
                const blob = items[i].getAsFile();
                const reader = new FileReader();
                reader.onload = function (event) {
                    if (selectedContainer && selectedContainer.length) {
                        applyImageSource(selectedContainer, event.target.result);
                        showToast('Replaced selected image from clipboard!', 'success');
                    } else {
                        addImageToCanvas(event.target.result, 'Pasted Image');
                        showToast('Pasted image onto canvas!', 'success');
                    }
                };
                reader.readAsDataURL(blob);
                imageFound = true;
                break;
            }
        }

        if (!imageFound) {
            showToast('No image data found in clipboard', 'warning');
        }
    });

    // Drag and Drop Files onto Canvas
    const viewport = $('.canvas_viewport');
    viewport.on('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.empty_dropzone').addClass('dragover');
    });

    viewport.on('dragleave drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.empty_dropzone').removeClass('dragover');
    });

    viewport.on('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const files = e.originalEvent.dataTransfer.files;
        handleFiles(files);
    });

    // Add Image Button (Legacy .btn_add_image)
    $(document).on('click', '.btn_add_image, #btn_add_sample', function () {
        addImageToCanvas('image-operator/icon.png', 'Sample Icon');
    });

    // File Input Upload
    $('#file_upload_input').on('change', function (e) {
        handleFiles(this.files);
        this.value = ''; // Reset input
    });

    $('#btn_trigger_upload').on('click', function () {
        $('#file_upload_input').trigger('click');
    });

    // Paste Button in Header
    $('#btn_paste_hdr').on('click', async function () {
        if (selectedContainer) {
            pasteImageIntoContainer(selectedContainer);
        } else {
            try {
                const clipboardItems = await navigator.clipboard.read();
                for (const item of clipboardItems) {
                    const imgType = item.types.find(t => t.startsWith('image/'));
                    if (imgType) {
                        const blob = await item.getType(imgType);
                        const reader = new FileReader();
                        reader.onload = function (ev) {
                            addImageToCanvas(ev.target.result, 'Pasted Image');
                            showToast('Pasted image onto canvas!', 'success');
                        };
                        reader.readAsDataURL(blob);
                        return;
                    }
                }
                showToast('Clipboard does not contain an image', 'warning');
            } catch (err) {
                showToast('Please press Ctrl+V to paste image directly', 'info');
            }
        }
    });

    // Add from URL
    $('#btn_add_url').on('click', function () {
        const url = prompt('Enter image URL or Data URI:');
        if (url && url.trim()) {
            const tempImg = new Image();
            tempImg.crossOrigin = 'anonymous';
            tempImg.onload = function () {
                addImageToCanvas(url.trim(), 'Web Image');
                showToast('Image loaded from URL!', 'success');
            };
            tempImg.onerror = function () {
                showToast('Failed to load image from given URL', 'danger');
            };
            tempImg.src = url.trim();
        }
    });

    // Camera / Screen Snapshot
    $('#btn_capture_screen').on('click', async function () {
        try {
            if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
                const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
                const video = document.createElement('video');
                video.srcObject = stream;
                video.play();

                video.onloadedmetadata = () => {
                    setTimeout(() => {
                        const canvas = document.createElement('canvas');
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(video, 0, 0);
                        const dataURL = canvas.toDataURL('image/png');
                        addImageToCanvas(dataURL, 'Screen Capture');
                        stream.getTracks().forEach(track => track.stop());
                        showToast('Screen captured successfully!', 'success');
                    }, 500);
                };
            } else {
                showToast('Screen capture is not supported in this browser', 'warning');
            }
        } catch (err) {
            showToast('Screen capture cancelled or unavailable', 'info');
        }
    });

    // View Mode Toggle (Freeform vs Grid)
    $('#btn_view_freeform').on('click', function () {
        setViewMode('freeform');
    });

    $('#btn_view_grid').on('click', function () {
        setViewMode('grid');
    });

    // Canvas Background Preset Picker
    $('#select_canvas_bg').on('change', function () {
        const bg = $(this).val();
        $('.canvas_viewport').removeClass('bg-dots bg-grid bg-checker bg-slate bg-white').addClass(`bg-${bg}`);
    });

    // Zoom Controls
    $('#btn_zoom_in').on('click', () => setZoom(canvasZoom + 0.15));
    $('#btn_zoom_out').on('click', () => setZoom(canvasZoom - 0.15));
    $('#btn_zoom_reset').on('click', () => setZoom(1));

    // Clear Canvas
    $('#btn_clear_canvas').on('click', function () {
        if ($('.image-container').length === 0) return;
        if (confirm('Clear all images from canvas? (Saved shelf items will remain preserved)')) {
            saveUndoState();
            $('.image-container').remove();
            deselectAll();
            checkEmptyState();
            updateImageCountBadge();
            showToast('Canvas cleared', 'info');
        }
    });

    // Export Full Canvas
    $('#btn_export_canvas').on('click', function () {
        exportFullCanvas('png');
    });

    $('#btn_export_canvas_jpeg').on('click', function () {
        exportFullCanvas('jpeg');
    });

    $('#btn_copy_canvas').on('click', function () {
        copyCanvasToClipboard();
    });

    $('#btn_download_zip').on('click', function () {
        downloadAllAsZip();
    });

    // Quick Toolbar Buttons
    $(document).on('click', '.quick-rotate-cw', function (e) {
        e.stopPropagation();
        rotateSelected(90);
    });

    $(document).on('click', '.quick-rotate-ccw', function (e) {
        e.stopPropagation();
        rotateSelected(-90);
    });

    $(document).on('click', '.quick-flip-h', function (e) {
        e.stopPropagation();
        flipSelected('h');
    });

    $(document).on('click', '.quick-flip-v', function (e) {
        e.stopPropagation();
        flipSelected('v');
    });

    $(document).on('click', '.quick-crop', function (e) {
        e.stopPropagation();
        openCropModal();
    });

    $(document).on('click', '.quick-duplicate', function (e) {
        e.stopPropagation();
        duplicateSelected();
    });

    $(document).on('click', '.quick-download', function (e) {
        e.stopPropagation();
        downloadSelectedImage();
    });

    $(document).on('click', '.quick-copy', function (e) {
        e.stopPropagation();
        copySelectedToClipboard();
    });

    $(document).on('click', '.quick-save-shelf', function (e) {
        e.stopPropagation();
        if (selectedContainer) saveImageToStorage(selectedContainer);
    });

    $(document).on('click', '.quick-delete', function (e) {
        e.stopPropagation();
        deleteSelected();
    });

    // Dropdown toggles
    $('.dropdown_trigger').on('click', function (e) {
        e.stopPropagation();
        const wrapper = $(this).closest('.dropdown_wrapper');
        $('.dropdown_wrapper').not(wrapper).removeClass('open');
        wrapper.toggleClass('open');
    });

    $(document).on('click', function () {
        $('.dropdown_wrapper').removeClass('open');
    });
}

/* ============================================================
   Image Operations & Manipulation
   ============================================================ */

function handleFiles(files) {
    if (!files || !files.length) return;
    saveUndoState();

    Array.from(files).forEach((file, index) => {
        if (!file.type.startsWith('image/')) return;
        const reader = new FileReader();
        reader.onload = function (e) {
            setTimeout(() => {
                addImageToCanvas(e.target.result, file.name);
            }, index * 80);
        };
        reader.readAsDataURL(file);
    });
}

function addImageToCanvas(src, title) {
    saveUndoState();
    highestZIndex++;

    const index = $('.image-container').length + 1;
    // Calculate cascade position so images don't completely overlap
    const cascadeOffset = (index % 10) * 28 + 30;

    const containerHtml = `
    <div class="image-container resizable-draggable selected" 
         style="left: ${cascadeOffset}px; top: ${cascadeOffset}px; z-index: ${highestZIndex};"
         data-rotation="0" data-flip-h="1" data-flip-v="1"
         data-brightness="100" data-contrast="100" data-saturate="100"
         data-grayscale="0" data-sepia="0" data-invert="0" data-blur="0" data-hue="0"
         data-lock-ratio="false" data-name="${title || 'Image ' + index}">
        
        <div class="container_index_tag">#${index}</div>
        
        <!-- Floating Quick Toolbar -->
        <div class="card_quick_toolbar">
            <button class="quick_tool_btn quick-rotate-ccw" title="Rotate 90° CCW"><i class="fa fa-undo"></i></button>
            <button class="quick_tool_btn quick-rotate-cw" title="Rotate 90° CW"><i class="fa fa-repeat"></i></button>
            <button class="quick_tool_btn quick-flip-h" title="Flip Horizontal"><i class="fa fa-arrows-h"></i></button>
            <button class="quick_tool_btn quick-flip-v" title="Flip Vertical"><i class="fa fa-arrows-v"></i></button>
            <button class="quick_tool_btn quick-crop" title="Crop Image"><i class="fa fa-crop"></i></button>
            <div class="quick_tool_divider"></div>
            <button class="quick_tool_btn quick-duplicate" title="Duplicate (Ctrl+D)"><i class="fa fa-clone"></i></button>
            <button class="quick_tool_btn quick-copy" title="Copy to Clipboard"><i class="fa fa-clipboard"></i></button>
            <button class="quick_tool_btn quick-download" title="Download Image"><i class="fa fa-download"></i></button>
            <button class="quick_tool_btn quick-save-shelf" title="Save to Shelf (Right-click)"><i class="fa fa-bookmark"></i></button>
            <div class="quick_tool_divider"></div>
            <button class="quick_tool_btn danger quick-delete" title="Delete (Del)"><i class="fa fa-trash"></i></button>
        </div>

        <div class="image-inner">
            <img src="${src}" alt="Image" class="img">
        </div>
    </div>`;

    const el = $(containerHtml).appendTo('.c');

    // On image load, adjust container size to exact natural dimensions
    const imgObj = el.find('.img')[0];
    function setNaturalSize() {
        const nw = imgObj.naturalWidth;
        const nh = imgObj.naturalHeight;
        if (nw && nh && currentViewMode === 'freeform') {
            el.css({ width: `${nw}px`, height: `${nh}px` });
            updateInspectorValues(el);
        }
        selectImage(el);
    }

    if (imgObj.complete && imgObj.naturalWidth) {
        setNaturalSize();
    } else {
        imgObj.onload = setNaturalSize;
    }

    makeDraggableAndResizable();
    selectImage(el);
    checkEmptyState();
    updateImageCountBadge();
}

function selectImage(container) {
    if (!container || !container.length) return;
    $('.image-container').removeClass('selected');
    container.addClass('selected');
    selectedContainer = container;

    // Bring forward in DOM stack
    highestZIndex++;
    container.css('z-index', highestZIndex);

    updateInspectorValues(container);
    $('#inspector_empty_state').hide();
    $('#inspector_controls_state').show();
}

function deselectAll() {
    $('.image-container').removeClass('selected');
    selectedContainer = null;
    $('#inspector_empty_state').show();
    $('#inspector_controls_state').hide();
}

function deleteSelected() {
    if (!selectedContainer) return;
    saveUndoState();
    selectedContainer.fadeOut(150, function () {
        $(this).remove();
        deselectAll();
        checkEmptyState();
        updateImageCountBadge();
    });
    showToast('Image removed', 'info');
}

function duplicateSelected() {
    if (!selectedContainer) return;
    saveUndoState();
    highestZIndex++;

    const clone = selectedContainer.clone();
    clone.removeClass('selected');

    // Nudge position slightly
    const pos = selectedContainer.position();
    clone.css({
        left: (pos.left + 24) + 'px',
        top: (pos.top + 24) + 'px',
        zIndex: highestZIndex
    });

    $('.c').append(clone);
    makeDraggableAndResizable();
    selectImage(clone);
    updateImageCountBadge();
    showToast('Duplicated image', 'success');
}

async function pasteImageIntoContainer(container) {
    try {
        const data = await navigator.clipboard.read();
        const clipboardContent = data[0];
        const imgType = clipboardContent.types.find(t => t.includes('image'));

        if (imgType) {
            const blob = await clipboardContent.getType(imgType);
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
                applyImageSource(container, reader.result);
                showToast('Pasted image into container', 'success');
            };
        } else {
            showToast('Clipboard data is not an image', 'warning');
        }
    } catch (err) {
        showToast('Please grant clipboard permission or use Ctrl+V', 'info');
    }
}

function applyImageSource(container, base64) {
    saveUndoState();
    const img = container.find('.img');
    const imgEl = img[0];

    imgEl.onload = function () {
        const nw = imgEl.naturalWidth;
        const nh = imgEl.naturalHeight;
        if (nw && nh && currentViewMode === 'freeform') {
            container.css({ width: `${nw}px`, height: `${nh}px` });
        }
        updateInspectorValues(container);
    };

    img.prop('src', base64);
    if (imgEl.complete && imgEl.naturalWidth) {
        imgEl.onload();
    }
}

function setViewMode(mode) {
    currentViewMode = mode;
    $('#btn_view_freeform, #btn_view_grid').removeClass('active');

    if (mode === 'grid') {
        $('#btn_view_grid').addClass('active');
        $('.c').addClass('grid-mode');
        try {
            $('.resizable-draggable').draggable('disable').resizable('disable');
        } catch (e) { }
        showToast('Switched to Grid Collage Mode', 'info');
    } else {
        $('#btn_view_freeform').addClass('active');
        $('.c').removeClass('grid-mode');
        makeDraggableAndResizable();
        showToast('Switched to Freeform Studio Mode', 'info');
    }
}

function setZoom(val) {
    canvasZoom = Math.max(0.25, Math.min(3, Math.round(val * 100) / 100));
    $('.canvas_stage').css('transform', `scale(${canvasZoom})`);
    $('#zoom_val_text').text(`${Math.round(canvasZoom * 100)}%`);
}

function checkEmptyState() {
    if ($('.image-container').length === 0) {
        $('#empty_canvas_hero').fadeIn(200);
    } else {
        $('#empty_canvas_hero').fadeOut(150);
    }
}

function updateImageCountBadge() {
    const count = $('.image-container').length;
    $('#image_count_badge').text(`${count} image${count === 1 ? '' : 's'}`);
}

/* ============================================================
   Transformations & Filters Engine
   ============================================================ */

function rotateSelected(deg) {
    if (!selectedContainer) return;
    saveUndoState();
    let current = parseInt(selectedContainer.attr('data-rotation') || '0', 10);
    current = (current + deg) % 360;
    selectedContainer.attr('data-rotation', current);
    applyContainerTransforms(selectedContainer);
    updateInspectorValues(selectedContainer);
}

function flipSelected(axis) {
    if (!selectedContainer) return;
    saveUndoState();
    if (axis === 'h') {
        let flipH = parseInt(selectedContainer.attr('data-flip-h') || '1', 10);
        selectedContainer.attr('data-flip-h', flipH * -1);
    } else {
        let flipV = parseInt(selectedContainer.attr('data-flip-v') || '1', 10);
        selectedContainer.attr('data-flip-v', flipV * -1);
    }
    applyContainerTransforms(selectedContainer);
    updateInspectorValues(selectedContainer);
}

function applyContainerTransforms(container) {
    const rot = container.attr('data-rotation') || 0;
    const flipH = container.attr('data-flip-h') || 1;
    const flipV = container.attr('data-flip-v') || 1;
    const img = container.find('.img');

    img.css('transform', `rotate(${rot}deg) scale(${flipH}, ${flipV})`);
}

function applyLiveFilters(container) {
    const b = container.attr('data-brightness') || 100;
    const c = container.attr('data-contrast') || 100;
    const s = container.attr('data-saturate') || 100;
    const g = container.attr('data-grayscale') || 0;
    const sep = container.attr('data-sepia') || 0;
    const inv = container.attr('data-invert') || 0;
    const bl = container.attr('data-blur') || 0;
    const h = container.attr('data-hue') || 0;

    const filterStr = `brightness(${b}%) contrast(${c}%) saturate(${s}%) grayscale(${g}%) sepia(${sep}%) invert(${inv}%) blur(${bl}px) hue-rotate(${h}deg)`;
    container.find('.img').css('filter', filterStr);
}

function bakeFiltersToPixels(container) {
    if (!container) return;
    saveUndoState();
    const img = container.find('.img')[0];
    const offscreen = document.createElement('canvas');
    offscreen.width = img.naturalWidth || 800;
    offscreen.height = img.naturalHeight || 800;
    const ctx = offscreen.getContext('2d');

    const b = container.attr('data-brightness') || 100;
    const c = container.attr('data-contrast') || 100;
    const s = container.attr('data-saturate') || 100;
    const g = container.attr('data-grayscale') || 0;
    const sep = container.attr('data-sepia') || 0;
    const inv = container.attr('data-invert') || 0;
    const bl = container.attr('data-blur') || 0;
    const h = container.attr('data-hue') || 0;

    ctx.filter = `brightness(${b}%) contrast(${c}%) saturate(${s}%) grayscale(${g}%) sepia(${sep}%) invert(${inv}%) blur(${bl}px) hue-rotate(${h}deg)`;
    ctx.drawImage(img, 0, 0, offscreen.width, offscreen.height);

    const bakedDataUrl = offscreen.toDataURL('image/png');
    container.find('.img').prop('src', bakedDataUrl);

    // Reset filter parameters since they are now baked into the pixels
    resetFilters(container, false);
    showToast('Filters permanently baked into pixels!', 'success');
}

function resetFilters(container, saveUndo) {
    if (!container) return;
    if (saveUndo !== false) saveUndoState();

    container.attr({
        'data-brightness': 100,
        'data-contrast': 100,
        'data-saturate': 100,
        'data-grayscale': 0,
        'data-sepia': 0,
        'data-invert': 0,
        'data-blur': 0,
        'data-hue': 0
    });

    applyLiveFilters(container);
    updateInspectorValues(container);
    $('.preset_chip').removeClass('active');
}

/* ============================================================
   Right Inspector / Property Panel
   ============================================================ */

function initInspector() {
    // Inspector Tabs
    $('.inspector_tab_btn').on('click', function () {
        const tab = $(this).data('tab');
        $('.inspector_tab_btn').removeClass('active');
        $(this).addClass('active');
        $('.inspector_tab_content').removeClass('active');
        $(`.inspector_tab_content[data-tab-content="${tab}"]`).addClass('active');
    });

    // Toggle Inspector Collapse
    $('#btn_toggle_inspector, #btn_close_inspector').on('click', function () {
        $('.inspector_panel').toggleClass('collapsed');
    });

    // Width & Height inputs
    $('#insp_width').on('change input', function () {
        if (!selectedContainer) return;
        const w = parseInt($(this).val(), 10);
        if (w > 20) {
            if (selectedContainer.attr('data-lock-ratio') === 'true') {
                const ratio = selectedContainer.width() / selectedContainer.height();
                const h = Math.round(w / ratio);
                selectedContainer.css({ width: `${w}px`, height: `${h}px` });
                $('#insp_height').val(h);
            } else {
                selectedContainer.css('width', `${w}px`);
            }
        }
    });

    $('#insp_height').on('change input', function () {
        if (!selectedContainer) return;
        const h = parseInt($(this).val(), 10);
        if (h > 20) {
            if (selectedContainer.attr('data-lock-ratio') === 'true') {
                const ratio = selectedContainer.width() / selectedContainer.height();
                const w = Math.round(h * ratio);
                selectedContainer.css({ width: `${w}px`, height: `${h}px` });
                $('#insp_width').val(w);
            } else {
                selectedContainer.css('height', `${h}px`);
            }
        }
    });

    // Lock Ratio Toggle
    $('#insp_lock_ratio').on('change', function () {
        if (!selectedContainer) return;
        const locked = $(this).is(':checked');
        selectedContainer.attr('data-lock-ratio', locked);
        if (selectedContainer.data('ui-resizable')) {
            selectedContainer.resizable('option', 'aspectRatio', locked);
        }
    });

    // Position X & Y
    $('#insp_pos_x').on('change input', function () {
        if (!selectedContainer) return;
        selectedContainer.css('left', `${$(this).val()}px`);
    });

    $('#insp_pos_y').on('change input', function () {
        if (!selectedContainer) return;
        selectedContainer.css('top', `${$(this).val()}px`);
    });

    // Rotation & Opacity
    $('#insp_rotation').on('input', function () {
        if (!selectedContainer) return;
        const val = $(this).val();
        $('#val_rotation').text(`${val}°`);
        selectedContainer.attr('data-rotation', val);
        applyContainerTransforms(selectedContainer);
    });

    $('#insp_opacity').on('input', function () {
        if (!selectedContainer) return;
        const val = $(this).val();
        $('#val_opacity').text(`${val}%`);
        selectedContainer.css('opacity', val / 100);
    });

    // Object Fit & Blend Mode
    $('#insp_object_fit').on('change', function () {
        if (!selectedContainer) return;
        selectedContainer.find('.img').css('object-fit', $(this).val());
    });

    $('#insp_blend_mode').on('change', function () {
        if (!selectedContainer) return;
        selectedContainer.find('.img').css('mix-blend-mode', $(this).val());
    });

    // Filter Sliders Binding
    const filterSliders = [
        { id: '#insp_brightness', attr: 'data-brightness', label: '#val_brightness', unit: '%' },
        { id: '#insp_contrast', attr: 'data-contrast', label: '#val_contrast', unit: '%' },
        { id: '#insp_saturate', attr: 'data-saturate', label: '#val_saturate', unit: '%' },
        { id: '#insp_grayscale', attr: 'data-grayscale', label: '#val_grayscale', unit: '%' },
        { id: '#insp_sepia', attr: 'data-sepia', label: '#val_sepia', unit: '%' },
        { id: '#insp_invert', attr: 'data-invert', label: '#val_invert', unit: '%' },
        { id: '#insp_blur', attr: 'data-blur', label: '#val_blur', unit: 'px' },
        { id: '#insp_hue', attr: 'data-hue', label: '#val_hue', unit: '°' },
    ];

    filterSliders.forEach(fs => {
        $(fs.id).on('input', function () {
            if (!selectedContainer) return;
            const val = $(this).val();
            $(fs.label).text(`${val}${fs.unit}`);
            selectedContainer.attr(fs.attr, val);
            applyLiveFilters(selectedContainer);
        });
    });

    // Preset Filter Chips
    $('.preset_chip').on('click', function () {
        if (!selectedContainer) return;
        saveUndoState();
        $('.preset_chip').removeClass('active');
        $(this).addClass('active');

        const preset = $(this).data('preset');
        applyPreset(selectedContainer, preset);
    });

    // Bake & Reset Filter Buttons
    $('#btn_bake_filters').on('click', () => bakeFiltersToPixels(selectedContainer));
    $('#btn_reset_filters').on('click', () => resetFilters(selectedContainer));

    // Frame & Border Controls
    $('#insp_border_width').on('input', function () {
        if (!selectedContainer) return;
        const bw = $(this).val();
        $('#val_border_width').text(`${bw}px`);
        selectedContainer.css('border-width', `${bw}px`);
    });

    $('#insp_border_style').on('change', function () {
        if (!selectedContainer) return;
        selectedContainer.css('border-style', $(this).val());
    });

    $('#insp_border_color').on('input change', function () {
        if (!selectedContainer) return;
        selectedContainer.css('border-color', $(this).val());
    });

    $('#insp_border_radius').on('input', function () {
        if (!selectedContainer) return;
        const br = $(this).val();
        $('#val_border_radius').text(`${br}px`);
        selectedContainer.css('border-radius', `${br}px`);
    });

    $('#insp_box_shadow').on('change', function () {
        if (!selectedContainer) return;
        const val = $(this).val();
        let shadowCss = 'none';
        if (val === 'soft') shadowCss = '0 6px 16px rgba(0, 0, 0, 0.35)';
        else if (val === 'deep') shadowCss = '0 16px 36px rgba(0, 0, 0, 0.55)';
        else if (val === 'glow') shadowCss = '0 0 25px rgba(99, 102, 241, 0.5)';
        else if (val === 'neon') shadowCss = '0 0 20px #06b6d4, 0 0 40px #6366f1';
        selectedContainer.css('box-shadow', shadowCss);
    });

    $('#insp_bg_color').on('input change', function () {
        if (!selectedContainer) return;
        selectedContainer.css('background-color', $(this).val());
    });

    // Layer Controls in Inspector
    $('#btn_layer_front').on('click', function () {
        if (!selectedContainer) return;
        highestZIndex++;
        selectedContainer.css('z-index', highestZIndex);
        showToast('Moved to top layer', 'info');
    });

    $('#btn_layer_back').on('click', function () {
        if (!selectedContainer) return;
        selectedContainer.css('z-index', 1);
        showToast('Moved to bottom layer', 'info');
    });

    // Format & Download Single Image
    $('#btn_download_single').on('click', function () {
        downloadSelectedImage();
    });
}

function updateInspectorValues(container) {
    if (!container || !container.length) return;

    // Dimensions
    const w = Math.round(container.width());
    const h = Math.round(container.height());
    $('#insp_width').val(w);
    $('#insp_height').val(h);

    const pos = container.position();
    $('#insp_pos_x').val(Math.round(pos.left));
    $('#insp_pos_y').val(Math.round(pos.top));

    // Rotation & Opacity
    const rot = container.attr('data-rotation') || 0;
    $('#insp_rotation').val(rot);
    $('#val_rotation').text(`${rot}°`);

    const op = Math.round((parseFloat(container.css('opacity')) || 1) * 100);
    $('#insp_opacity').val(op);
    $('#val_opacity').text(`${op}%`);

    // Lock Ratio
    const isLocked = container.attr('data-lock-ratio') === 'true';
    $('#insp_lock_ratio').prop('checked', isLocked);

    // Filters
    const b = container.attr('data-brightness') || 100;
    const c = container.attr('data-contrast') || 100;
    const s = container.attr('data-saturate') || 100;
    const g = container.attr('data-grayscale') || 0;
    const sep = container.attr('data-sepia') || 0;
    const inv = container.attr('data-invert') || 0;
    const bl = container.attr('data-blur') || 0;
    const hVal = container.attr('data-hue') || 0;

    $('#insp_brightness').val(b); $('#val_brightness').text(`${b}%`);
    $('#insp_contrast').val(c); $('#val_contrast').text(`${c}%`);
    $('#insp_saturate').val(s); $('#val_saturate').text(`${s}%`);
    $('#insp_grayscale').val(g); $('#val_grayscale').text(`${g}%`);
    $('#insp_sepia').val(sep); $('#val_sepia').text(`${sep}%`);
    $('#insp_invert').val(inv); $('#val_invert').text(`${inv}%`);
    $('#insp_blur').val(bl); $('#val_blur').text(`${bl}px`);
    $('#insp_hue').val(hVal); $('#val_hue').text(`${hVal}°`);

    // Natural Dimensions
    const img = container.find('.img')[0];
    if (img && img.naturalWidth) {
        $('#insp_natural_dim').text(`${img.naturalWidth} × ${img.naturalHeight} px`);
    }
}

function syncInspectorDimensions(w, h) {
    $('#insp_width').val(Math.round(w));
    $('#insp_height').val(Math.round(h));
}

function syncInspectorPosition(x, y) {
    $('#insp_pos_x').val(Math.round(x));
    $('#insp_pos_y').val(Math.round(y));
}

function applyPreset(container, preset) {
    const presets = {
        'normal': { b: 100, c: 100, s: 100, g: 0, sep: 0, inv: 0, bl: 0, h: 0 },
        'vivid': { b: 105, c: 125, s: 150, g: 0, sep: 0, inv: 0, bl: 0, h: 0 },
        'noir': { b: 95, c: 135, s: 0, g: 100, sep: 0, inv: 0, bl: 0, h: 0 },
        'cyberpunk': { b: 110, c: 130, s: 170, g: 0, sep: 0, inv: 0, bl: 0, h: 310 },
        'vintage': { b: 95, c: 90, s: 80, g: 0, sep: 50, inv: 0, bl: 0, h: 10 },
        'sunset': { b: 105, c: 110, s: 135, g: 0, sep: 30, inv: 0, bl: 0, h: 345 },
        'cool': { b: 100, c: 105, s: 110, g: 0, sep: 0, inv: 0, bl: 0, h: 190 },
        'highcontrast': { b: 100, c: 160, s: 120, g: 0, sep: 0, inv: 0, bl: 0, h: 0 }
    };

    const p = presets[preset] || presets['normal'];
    container.attr({
        'data-brightness': p.b,
        'data-contrast': p.c,
        'data-saturate': p.s,
        'data-grayscale': p.g,
        'data-sepia': p.sep,
        'data-invert': p.inv,
        'data-blur': p.bl,
        'data-hue': p.h
    });

    applyLiveFilters(container);
    updateInspectorValues(container);
}

/* ============================================================
   Interactive Crop Tool
   ============================================================ */

function openCropModal() {
    if (!selectedContainer) return;
    const img = selectedContainer.find('.img')[0];
    if (!img) return;

    cropTargetImg = img;
    $('#crop_target_image').prop('src', img.src);
    $('#crop_modal').addClass('open');

    // Reset crop box position to 80% centered
    setTimeout(() => {
        const stage = $('#crop_stage');
        const sw = stage.width();
        const sh = stage.height();
        const box = $('#crop_selection');

        box.css({
            left: `${sw * 0.1}px`,
            top: `${sh * 0.1}px`,
            width: `${sw * 0.8}px`,
            height: `${sh * 0.8}px`
        });

        initCropDrag();
    }, 100);
}

function closeCropModal() {
    $('#crop_modal').removeClass('open');
    cropTargetImg = null;
}

function initCropDrag() {
    const box = $('#crop_selection');
    const stage = $('#crop_stage');

    box.draggable({
        containment: stage,
        cursor: 'move'
    }).resizable({
        containment: stage,
        handles: {
            'nw': '.crop_handle.tl',
            'ne': '.crop_handle.tr',
            'se': '.crop_handle.br',
            'sw': '.crop_handle.bl'
        }
    });

    // Ratio Presets
    $('.ratio_btn').off('click').on('click', function () {
        $('.ratio_btn').removeClass('active');
        $(this).addClass('active');
        const ratio = $(this).data('ratio');
        const sw = stage.width();
        const sh = stage.height();

        if (ratio === 'free') {
            box.resizable('option', 'aspectRatio', false);
        } else {
            let num = 1;
            if (ratio === '1:1') num = 1;
            else if (ratio === '16:9') num = 16 / 9;
            else if (ratio === '4:3') num = 4 / 3;
            else if (ratio === '9:16') num = 9 / 16;
            else if (ratio === '3:2') num = 3 / 2;

            box.resizable('option', 'aspectRatio', num);
            let newW = sw * 0.7;
            let newH = newW / num;
            if (newH > sh * 0.85) {
                newH = sh * 0.75;
                newW = newH * num;
            }
            box.css({ width: `${newW}px`, height: `${newH}px` });
        }
    });

    $('#btn_apply_crop').off('click').on('click', applyCrop);
    $('#btn_cancel_crop, #btn_close_crop_modal').off('click', closeCropModal);
}

function applyCrop() {
    if (!cropTargetImg || !selectedContainer) return;
    saveUndoState();

    const stage = $('#crop_stage');
    const box = $('#crop_selection');

    const displayedImg = $('#crop_target_image')[0];
    const naturalW = cropTargetImg.naturalWidth;
    const naturalH = cropTargetImg.naturalHeight;

    const displayW = displayedImg.width;
    const displayH = displayedImg.height;

    const scaleX = naturalW / displayW;
    const scaleY = naturalH / displayH;

    const cropLeft = parseFloat(box.css('left')) * scaleX;
    const cropTop = parseFloat(box.css('top')) * scaleY;
    const cropW = box.outerWidth() * scaleX;
    const cropH = box.outerHeight() * scaleY;

    const offscreen = document.createElement('canvas');
    offscreen.width = Math.round(cropW);
    offscreen.height = Math.round(cropH);
    const ctx = offscreen.getContext('2d');

    ctx.drawImage(
        cropTargetImg,
        cropLeft, cropTop, cropW, cropH,
        0, 0, offscreen.width, offscreen.height
    );

    const croppedDataUrl = offscreen.toDataURL('image/png');
    selectedContainer.find('.img').prop('src', croppedDataUrl);

    // Update container aspect ratio to match cropped dimensions
    const currentW = selectedContainer.width();
    const newHeight = Math.round(currentW * (cropH / cropW));
    selectedContainer.css('height', `${newHeight}px`);

    closeCropModal();
    updateInspectorValues(selectedContainer);
    showToast('Image cropped successfully!', 'success');
}

/* ============================================================
   Bottom Saved Shelf / Storage (100% Backward Compatible)
   ============================================================ */

function initShelf() {
    // Drawer open / close handle
    $('.shelf_handle_bar, .plus-icon').on('click', function (e) {
        // Avoid closing if clicking an action button inside the bar
        if ($(e.target).closest('.shelf_btn').length) return;
        toggleShelf();
    });

    $('#btn_shelf_save_selected').on('click', function () {
        if (selectedContainer) {
            saveImageToStorage(selectedContainer);
        } else {
            showToast('Select an image on the canvas first', 'warning');
        }
    });

    $('#btn_shelf_save_all').on('click', function () {
        const containers = $('.image-container');
        if (!containers.length) {
            showToast('No active images to save', 'warning');
            return;
        }
        containers.each(function () {
            saveImageToStorage($(this), true);
        });
        handleImageList(false);
        showToast(`Saved ${containers.length} images to shelf!`, 'success');
    });

    $('#btn_shelf_clear_all').on('click', function () {
        const list = getSavedImageList();
        if (!list.length) return;
        if (confirm('Are you sure you want to delete all saved images from shelf?')) {
            list.forEach(key => localStorage.removeItem(key));
            localStorage.removeItem('imglist');
            handleImageList(false);
            updateStorageMeter();
            showToast('Cleared all saved images', 'info');
        }
    });

    // Clicking saved shelf card -> Load or add to canvas
    $(document).on('click', '.shelf_card', function (e) {
        if ($(e.target).closest('.shelf_card_action_btn').length) return;
        const key = $(this).data('key');
        const dataUrl = localStorage.getItem(key);
        if (!dataUrl) return;

        if (selectedContainer && selectedContainer.length) {
            applyImageSource(selectedContainer, dataUrl);
            showToast('Loaded saved image into selection!', 'success');
        } else {
            addImageToCanvas(dataUrl, key);
            showToast('Added saved image to canvas!', 'success');
        }
    });

    // Card Action: Add New
    $(document).on('click', '.shelf_action_add', function (e) {
        e.stopPropagation();
        const key = $(this).closest('.shelf_card').data('key');
        const dataUrl = localStorage.getItem(key);
        if (dataUrl) addImageToCanvas(dataUrl, key);
    });

    // Card Action: Download
    $(document).on('click', '.shelf_action_dl', function (e) {
        e.stopPropagation();
        const key = $(this).closest('.shelf_card').data('key');
        const dataUrl = localStorage.getItem(key);
        if (dataUrl) downloadDataUri(dataUrl, `${key.replace(/[^a-zA-Z0-9]/g, '_')}.png`);
    });

    // Card Action: Delete (or Contextmenu on card - Legacy!)
    $(document).on('click', '.shelf_action_delete', function (e) {
        e.stopPropagation();
        const key = $(this).closest('.shelf_card').data('key');
        deleteFromStorage(key);
    });

    $(document).on('contextmenu', '.shelf_card, .li', function (e) {
        e.preventDefault();
        const key = $(this).data('key');
        deleteFromStorage(key);
    });

    // Legacy li click -> Load into selection or add to canvas with natural dimensions
    $(document).on('click', '.li', function (e) {
        const key = $(this).data('key');
        const dataUrl = localStorage.getItem(key);
        if (dataUrl) {
            if (selectedContainer && selectedContainer.length) {
                applyImageSource(selectedContainer, dataUrl);
            } else if ($('.image-container').length) {
                applyImageSource($('.image-container').first(), dataUrl);
            } else {
                addImageToCanvas(dataUrl, key);
            }
        }
    });
}

function toggleShelf(forceOpen) {
    const shelf = $('#bottom_shelf');
    const plusIcon = $('.plus-icon');

    if (forceOpen === true || (forceOpen === undefined && !shelf.hasClass('open'))) {
        shelf.addClass('open');
        plusIcon.removeClass('rotate_0').addClass('rotate_45');
        $('.ul_dv').removeClass('hide_menu').show();
    } else {
        shelf.removeClass('open');
        plusIcon.removeClass('rotate_45').addClass('rotate_0');
        $('.ul_dv').addClass('hide_menu');
    }
}

function getSavedImageList() {
    try {
        const raw = localStorage.getItem('imglist');
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

// Save image container to storage (Matches and extends legacy logic)
function saveImageToStorage(container, silent) {
    if (!container || !container.length) return;
    const base64data = container.find('.img').prop('src');
    if (!base64data) return;

    const dateString = new Date().toLocaleString();
    const key = `IMG: ${dateString}`;

    try {
        localStorage.setItem(key, base64data);
        let imglist = getSavedImageList();

        // Avoid duplicates in key list
        imglist = imglist.filter(k => k !== key);
        imglist.unshift(key);
        localStorage.setItem('imglist', JSON.stringify(imglist));

        handleImageList(false);
        updateStorageMeter();

        if (!silent) {
            showToast(`Saved to shelf: ${key}`, 'success');
            // Auto-open shelf briefly if collapsed to give clear visual feedback
            if (!$('#bottom_shelf').hasClass('open')) {
                toggleShelf(true);
            }
        }
    } catch (err) {
        showToast('Storage limit reached! Please delete some saved images.', 'danger');
    }
}

function deleteFromStorage(key) {
    let imglist = getSavedImageList();
    imglist = imglist.filter(item => item !== key);
    localStorage.removeItem(key);

    if (imglist.length) {
        localStorage.setItem('imglist', JSON.stringify(imglist));
    } else {
        localStorage.removeItem('imglist');
    }

    handleImageList(false);
    updateStorageMeter();
    showToast('Removed image from shelf', 'info');
}

// Core Image List Handler (Legacy Compatible & Enhanced)
function handleImageList(setImage) {
    const imglist = getSavedImageList();
    const container = $('#shelf_cards_container');
    const countBadge = $('#shelf_count_badge');

    countBadge.text(imglist.length);

    if (!imglist || !imglist.length) {
        container.html(`
            <div class="shelf_empty_msg">
                <i class="fa fa-folder-open-o"></i> No saved images in shelf. Right-click any image on canvas to save it here!
            </div>
        `);
        // Also keep legacy .ul_dv updated
        $('.ul_dv').html('');
        return;
    }

    let cardsHtml = '';
    let legacyLiHtml = '';

    imglist.forEach((key, index) => {
        const dataUrl = localStorage.getItem(key) || '';
        const approxSize = dataUrl ? `${Math.round((dataUrl.length * 3 / 4) / 1024)} KB` : '';

        cardsHtml += `
        <div class="shelf_card" data-key="${key}" title="${key} (Click to load, right-click to delete)">
            <div class="shelf_card_actions">
                <button class="shelf_card_action_btn shelf_action_add" title="Add as new image to canvas"><i class="fa fa-plus"></i></button>
                <button class="shelf_card_action_btn shelf_action_dl" title="Download image"><i class="fa fa-download"></i></button>
                <button class="shelf_card_action_btn del shelf_action_delete" title="Delete from shelf"><i class="fa fa-trash"></i></button>
            </div>
            <div class="shelf_card_thumb">
                <img src="${dataUrl}" alt="Thumbnail">
            </div>
            <div class="shelf_card_footer">
                <div class="shelf_card_title">${key}</div>
                <div class="shelf_card_meta">
                    <span>#${index + 1}</span>
                    <span>${approxSize}</span>
                </div>
            </div>
        </div>`;

        legacyLiHtml += `<div class="li" data-key="${key}">${index + 1} -> ${key}</div>`;
    });

    container.html(cardsHtml);
    $('.ul_dv').html(legacyLiHtml);

    if (setImage && imglist.length && $('.image-container').length) {
        const firstContainer = $('.image-container').first();
        applyImageSource(firstContainer, localStorage.getItem(imglist[0]));
    }
}

function updateStorageMeter() {
    let totalBytes = 0;
    for (let x in localStorage) {
        if (localStorage.hasOwnProperty(x)) {
            totalBytes += (localStorage[x].length + x.length) * 2;
        }
    }
    const mbUsed = (totalBytes / (1024 * 1024)).toFixed(2);
    $('#storage_used_text').text(`${mbUsed} / 5.0 MB`);
}

/* ============================================================
   Canvas Export & Downloading
   ============================================================ */

function downloadSelectedImage() {
    if (!selectedContainer) return;
    const img = selectedContainer.find('.img')[0];
    const format = $('#insp_export_format').val() || 'png';
    const quality = parseFloat($('#insp_export_quality').val() || '0.92');

    const offscreen = document.createElement('canvas');
    offscreen.width = img.naturalWidth || selectedContainer.width();
    offscreen.height = img.naturalHeight || selectedContainer.height();
    const ctx = offscreen.getContext('2d');

    // Apply Live Filters onto offscreen canvas
    const b = selectedContainer.attr('data-brightness') || 100;
    const c = selectedContainer.attr('data-contrast') || 100;
    const s = selectedContainer.attr('data-saturate') || 100;
    const g = selectedContainer.attr('data-grayscale') || 0;
    const sep = selectedContainer.attr('data-sepia') || 0;
    const inv = selectedContainer.attr('data-invert') || 0;
    const bl = selectedContainer.attr('data-blur') || 0;
    const h = selectedContainer.attr('data-hue') || 0;

    ctx.filter = `brightness(${b}%) contrast(${c}%) saturate(${s}%) grayscale(${g}%) sepia(${sep}%) invert(${inv}%) blur(${bl}px) hue-rotate(${h}deg)`;

    // Handle Rotation & Flips
    const rot = parseInt(selectedContainer.attr('data-rotation') || '0', 10);
    const flipH = parseInt(selectedContainer.attr('data-flip-h') || '1', 10);
    const flipV = parseInt(selectedContainer.attr('data-flip-v') || '1', 10);

    ctx.save();
    ctx.translate(offscreen.width / 2, offscreen.height / 2);
    ctx.rotate((rot * Math.PI) / 180);
    ctx.scale(flipH, flipV);
    ctx.drawImage(img, -offscreen.width / 2, -offscreen.height / 2, offscreen.width, offscreen.height);
    ctx.restore();

    const mime = `image/${format}`;
    const dataUrl = offscreen.toDataURL(mime, quality);
    const filename = `image-operator-${Date.now()}.${format === 'jpeg' ? 'jpg' : format}`;
    downloadDataUri(dataUrl, filename);
    showToast(`Downloaded as ${format.toUpperCase()}`, 'success');
}

async function copySelectedToClipboard() {
    if (!selectedContainer) return;
    const img = selectedContainer.find('.img')[0];
    const offscreen = document.createElement('canvas');
    offscreen.width = img.naturalWidth || selectedContainer.width();
    offscreen.height = img.naturalHeight || selectedContainer.height();
    const ctx = offscreen.getContext('2d');
    ctx.drawImage(img, 0, 0);

    offscreen.toBlob(async function (blob) {
        try {
            await navigator.clipboard.write([
                new ClipboardItem({ 'image/png': blob })
            ]);
            showToast('Copied image to clipboard!', 'success');
        } catch (e) {
            showToast('Unable to copy directly; try right-click Save', 'warning');
        }
    });
}

function exportFullCanvas(format) {
    const containers = $('.image-container');
    if (!containers.length) {
        showToast('No images on canvas to export', 'warning');
        return;
    }

    // Determine bounding box
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

    containers.each(function () {
        const el = $(this);
        const pos = el.position();
        const w = el.outerWidth();
        const h = el.outerHeight();

        minX = Math.min(minX, pos.left);
        minY = Math.min(minY, pos.top);
        maxX = Math.max(maxX, pos.left + w);
        maxY = Math.max(maxY, pos.top + h);
    });

    const padding = 40;
    const canvasW = Math.round(maxX - minX + padding * 2);
    const canvasH = Math.round(maxY - minY + padding * 2);

    const master = document.createElement('canvas');
    master.width = canvasW;
    master.height = canvasH;
    const ctx = master.getContext('2d');

    // Background fill
    if (format === 'jpeg') {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, canvasW, canvasH);
    }

    // Sort containers by z-index
    const sorted = containers.toArray().sort((a, b) => {
        return (parseInt($(a).css('z-index'), 10) || 0) - (parseInt($(b).css('z-index'), 10) || 0);
    });

    sorted.forEach(containerEl => {
        const el = $(containerEl);
        const pos = el.position();
        const x = pos.left - minX + padding;
        const y = pos.top - minY + padding;
        const w = el.width();
        const h = el.height();
        const img = el.find('.img')[0];

        ctx.save();
        ctx.translate(x + w / 2, y + h / 2);

        // Rotation & Flip
        const rot = parseInt(el.attr('data-rotation') || '0', 10);
        const flipH = parseInt(el.attr('data-flip-h') || '1', 10);
        const flipV = parseInt(el.attr('data-flip-v') || '1', 10);
        ctx.rotate((rot * Math.PI) / 180);
        ctx.scale(flipH, flipV);

        // Filters
        const b = el.attr('data-brightness') || 100;
        const c = el.attr('data-contrast') || 100;
        const s = el.attr('data-saturate') || 100;
        const g = el.attr('data-grayscale') || 0;
        const sep = el.attr('data-sepia') || 0;
        const inv = el.attr('data-invert') || 0;
        const bl = el.attr('data-blur') || 0;
        const hue = el.attr('data-hue') || 0;
        ctx.filter = `brightness(${b}%) contrast(${c}%) saturate(${s}%) grayscale(${g}%) sepia(${sep}%) invert(${inv}%) blur(${bl}px) hue-rotate(${hue}deg)`;

        ctx.globalAlpha = parseFloat(el.css('opacity')) || 1;
        ctx.drawImage(img, -w / 2, -h / 2, w, h);
        ctx.restore();
    });

    const mime = `image/${format}`;
    const dataUrl = master.toDataURL(mime, 0.95);
    const filename = `canvas-collage-${Date.now()}.${format === 'jpeg' ? 'jpg' : format}`;
    downloadDataUri(dataUrl, filename);
    showToast('Canvas collage exported successfully!', 'success');
}

async function copyCanvasToClipboard() {
    const containers = $('.image-container');
    if (!containers.length) {
        showToast('No images on canvas to copy', 'warning');
        return;
    }

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    containers.each(function () {
        const el = $(this);
        const pos = el.position();
        minX = Math.min(minX, pos.left);
        minY = Math.min(minY, pos.top);
        maxX = Math.max(maxX, pos.left + el.outerWidth());
        maxY = Math.max(maxY, pos.top + el.outerHeight());
    });

    const padding = 20;
    const canvasW = Math.round(maxX - minX + padding * 2);
    const canvasH = Math.round(maxY - minY + padding * 2);

    const master = document.createElement('canvas');
    master.width = canvasW;
    master.height = canvasH;
    const ctx = master.getContext('2d');

    const sorted = containers.toArray().sort((a, b) => {
        return (parseInt($(a).css('z-index'), 10) || 0) - (parseInt($(b).css('z-index'), 10) || 0);
    });

    sorted.forEach(containerEl => {
        const el = $(containerEl);
        const pos = el.position();
        const x = pos.left - minX + padding;
        const y = pos.top - minY + padding;
        const w = el.width();
        const h = el.height();
        const img = el.find('.img')[0];

        ctx.save();
        ctx.translate(x + w / 2, y + h / 2);
        const rot = parseInt(el.attr('data-rotation') || '0', 10);
        const flipH = parseInt(el.attr('data-flip-h') || '1', 10);
        const flipV = parseInt(el.attr('data-flip-v') || '1', 10);
        ctx.rotate((rot * Math.PI) / 180);
        ctx.scale(flipH, flipV);
        ctx.drawImage(img, -w / 2, -h / 2, w, h);
        ctx.restore();
    });

    master.toBlob(async function (blob) {
        try {
            await navigator.clipboard.write([
                new ClipboardItem({ 'image/png': blob })
            ]);
            showToast('Canvas copied to clipboard!', 'success');
        } catch (e) {
            showToast('Failed to copy canvas to clipboard', 'warning');
        }
    });
}

function downloadAllAsZip() {
    if (typeof JSZip === 'undefined') {
        showToast('Zip library loading... please wait', 'warning');
        return;
    }

    const containers = $('.image-container');
    if (!containers.length) {
        showToast('No images to package into zip', 'warning');
        return;
    }

    const zip = new JSZip();
    const folder = zip.folder("images");

    containers.each(function (index) {
        const img = $(this).find('.img')[0];
        const base64 = img.src;
        if (base64.startsWith('data:image/')) {
            const parts = base64.split(';base64,');
            const ext = parts[0].split('/')[1] || 'png';
            folder.file(`image_${index + 1}.${ext}`, parts[1], { base64: true });
        }
    });

    zip.generateAsync({ type: "blob" }).then(function (content) {
        if (typeof saveAs !== 'undefined') {
            saveAs(content, `image-operator-bundle-${Date.now()}.zip`);
        } else {
            const url = URL.createObjectURL(content);
            downloadDataUri(url, `image-operator-bundle-${Date.now()}.zip`);
        }
        showToast('Downloaded images as ZIP!', 'success');
    });
}

function downloadDataUri(dataUrl, filename) {
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

/* ============================================================
   Undo / Redo System
   ============================================================ */

function saveUndoState() {
    const state = [];
    $('.image-container').each(function () {
        const el = $(this);
        state.push({
            src: el.find('.img').prop('src'),
            left: el.css('left'),
            top: el.css('top'),
            width: el.css('width'),
            height: el.css('height'),
            zIndex: el.css('z-index'),
            rotation: el.attr('data-rotation') || 0,
            flipH: el.attr('data-flip-h') || 1,
            flipV: el.attr('data-flip-v') || 1,
            brightness: el.attr('data-brightness') || 100,
            contrast: el.attr('data-contrast') || 100,
            saturate: el.attr('data-saturate') || 100,
            grayscale: el.attr('data-grayscale') || 0,
            sepia: el.attr('data-sepia') || 0,
            invert: el.attr('data-invert') || 0,
            blur: el.attr('data-blur') || 0,
            hue: el.attr('data-hue') || 0
        });
    });

    undoStack.push(JSON.stringify(state));
    if (undoStack.length > 25) undoStack.shift();
    redoStack = []; // Clear redo stack on new action
}

function undo() {
    if (!undoStack.length) return;
    const currentState = [];
    $('.image-container').each(function () {
        const el = $(this);
        currentState.push({
            src: el.find('.img').prop('src'),
            left: el.css('left'),
            top: el.css('top'),
            width: el.css('width'),
            height: el.css('height')
        });
    });
    redoStack.push(JSON.stringify(currentState));

    const prevState = JSON.parse(undoStack.pop());
    restoreCanvasState(prevState);
    showToast('Undo', 'info');
}

function redo() {
    if (!redoStack.length) return;
    const nextState = JSON.parse(redoStack.pop());
    restoreCanvasState(nextState);
    showToast('Redo', 'info');
}

function restoreCanvasState(state) {
    $('.image-container').remove();
    state.forEach(item => {
        addImageToCanvas(item.src, 'Restored');
        const last = $('.image-container').last();
        last.css({
            left: item.left,
            top: item.top,
            width: item.width,
            height: item.height,
            zIndex: item.zIndex
        });
        last.attr({
            'data-rotation': item.rotation,
            'data-flip-h': item.flipH,
            'data-flip-v': item.flipV,
            'data-brightness': item.brightness,
            'data-contrast': item.contrast,
            'data-saturate': item.saturate,
            'data-grayscale': item.grayscale,
            'data-sepia': item.sepia,
            'data-invert': item.invert,
            'data-blur': item.blur,
            'data-hue': item.hue
        });
        applyContainerTransforms(last);
        applyLiveFilters(last);
    });
}

/* ============================================================
   Keyboard Shortcuts
   ============================================================ */

function initShortcuts() {
    $(document).on('keydown', function (e) {
        // Skip if inside input/textarea
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

        // Delete / Backspace -> Delete Selected Image
        if (e.key === 'Delete' || e.key === 'Backspace') {
            if (selectedContainer) {
                e.preventDefault();
                deleteSelected();
            }
        }

        // Ctrl + D -> Duplicate
        if (e.ctrlKey && e.key.toLowerCase() === 'd') {
            if (selectedContainer) {
                e.preventDefault();
                duplicateSelected();
            }
        }

        // Ctrl + Z -> Undo
        if (e.ctrlKey && e.key.toLowerCase() === 'z') {
            e.preventDefault();
            undo();
        }

        // Ctrl + Y -> Redo
        if (e.ctrlKey && e.key.toLowerCase() === 'y') {
            e.preventDefault();
            redo();
        }

        // Ctrl + S -> Save selected to shelf
        if (e.ctrlKey && e.key.toLowerCase() === 's') {
            e.preventDefault();
            if (selectedContainer) saveImageToStorage(selectedContainer);
        }

        // Layer ordering: [ and ]
        if (e.key === ']' && selectedContainer) {
            e.preventDefault();
            highestZIndex++;
            selectedContainer.css('z-index', highestZIndex);
        }
        if (e.key === '[' && selectedContainer) {
            e.preventDefault();
            selectedContainer.css('z-index', 1);
        }

        // Arrow keys nudge
        if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key) && selectedContainer) {
            e.preventDefault();
            const step = e.shiftKey ? 10 : 1;
            const pos = selectedContainer.position();
            if (e.key === 'ArrowLeft') selectedContainer.css('left', `${pos.left - step}px`);
            if (e.key === 'ArrowRight') selectedContainer.css('left', `${pos.left + step}px`);
            if (e.key === 'ArrowUp') selectedContainer.css('top', `${pos.top - step}px`);
            if (e.key === 'ArrowDown') selectedContainer.css('top', `${pos.top + step}px`);
            syncInspectorPosition(selectedContainer.position().left, selectedContainer.position().top);
        }

        // Escape -> Deselect / Close Modals
        if (e.key === 'Escape') {
            $('.modal_backdrop').removeClass('open');
            deselectAll();
        }

        // F key -> Toggle Fullscreen (when not holding modifier keys)
        if (e.key.toLowerCase() === 'f' && !e.ctrlKey && !e.altKey && !e.metaKey) {
            e.preventDefault();
            toggleBrowserFullscreen();
        }

        // ? or H -> Open Shortcuts
        if (e.key === '?' || (e.shiftKey && e.key === '/')) {
            e.preventDefault();
            $('#shortcuts_modal').addClass('open');
        }
    });

    // Shortcuts modal open / close
    $('#btn_shortcuts_modal').on('click', () => $('#shortcuts_modal').addClass('open'));
    $('#btn_close_shortcuts_modal').on('click', () => $('#shortcuts_modal').removeClass('open'));

    // Modal background close
    $('.modal_backdrop').on('click', function (e) {
        if ($(e.target).hasClass('modal_backdrop')) {
            $(this).removeClass('open');
        }
    });
}

/* ============================================================
   Toast Notification System (Enhances .snackbar)
   ============================================================ */

function showToast(message, type) {
    type = type || 'info';

    // Also update legacy .snackbar for any existing scripts
    const snackbar = $('.snackbar');
    if (snackbar.length) {
        snackbar.text(message);
        snackbar.addClass('show');
        setTimeout(() => snackbar.removeClass('show'), 2000);
    }

    // Modern glass toast container
    let container = $('.toast_container');
    if (!container.length) {
        container = $('<div class="toast_container"></div>').appendTo('body');
    }

    const iconMap = {
        'info': 'fa-info-circle',
        'success': 'fa-check-circle',
        'warning': 'fa-exclamation-triangle',
        'danger': 'fa-times-circle'
    };

    const iconClass = iconMap[type] || 'fa-info-circle';
    const toast = $(`
        <div class="toast_item ${type}">
            <i class="fa ${iconClass}"></i>
            <span>${message}</span>
        </div>
    `).appendTo(container);

    setTimeout(() => {
        toast.css({ opacity: 0, transform: 'translateY(12px) scale(0.95)' });
        setTimeout(() => toast.remove(), 250);
    }, 2800);
}