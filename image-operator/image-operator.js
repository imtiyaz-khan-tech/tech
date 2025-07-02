let timeout;
let image_base64 = '';

$(document).ready(function () {
    $(".spinner-div").hide();
    makeDraggableAndResizable();
});

$(document).on('click', '.btn_add_image', function (e) {
    $('.c').append(`<div class="image-container resizable-draggable">
        <img src="/image-operator/_icon.png" alt="Image" class="img">
    </div>`);
    makeDraggableAndResizable();
});

function makeDraggableAndResizable(){
    $(".resizable-draggable").draggable().resizable({
        handles: 'n, e, s, w, ne, se, sw, nw'
    });
}

/* $(document).on('click', '.image-container', async function (e) {
    console.log('Checkpoint clicked');
    let _this = $(this);
    
    const data = await navigator.clipboard.read();
    let foundImage = false;

    for (let i = 0; i < data.length; i++) {
        const clipboardItem = data[i];
        console.log('$clipboardItem: ',clipboardItem);
        console.log('$clipboardItem.types: ',clipboardItem.types);

        for (let type of clipboardItem.types) {
            console.log('$type: ',type);
            if (type.includes('image')) {
                const blob = await clipboardItem.getType(type);
                console.log('$blob: ', blob);

                const reader = new FileReader();
                reader.readAsDataURL(blob);

                reader.onloadend = function () {
                    const base64data = reader.result;
                    console.log('Image base64data: ', base64data);
                    _this.find('.img').prop('src', base64data);
                };

                foundImage = true;
                break; // Exit inner loop
            }
        }

        if (foundImage) break; // Exit outer loop
    }

    if (!foundImage) {
        showToast();
        console.log('Clipboard Data Is Not Image');
    }
}); */


$(document).on('click', '.image-container', async function (e) {
    console.log('Checkpoint clicked');
    let _this = $(this);
    const data = await navigator.clipboard.read();
    const clipboardContent = data[0];
    if (clipboardContent.types[0].includes('image')) {
        const blob = await clipboardContent.getType('image/png');
        console.log('$blob: ', blob);
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
            var base64data = reader.result;
            console.log('Image base64data: ', base64data);
            _this.find('.img').prop('src', base64data);
        }
    } else {
        showToast();
        console.log('Clipboard Data Is Not Image');
    }
});


function showToast() {
    if (!timeout) {
        timeout = true;
        $('.snackbar').addClass('show');
        setTimeout(function () {
            $('.snackbar').removeClass('show');
            timeout = false;
        }, 2000);
    }
}