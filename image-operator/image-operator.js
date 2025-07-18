let timeout;
let image_base64 = '';

$(document).ready(function () {
    $(".spinner-div").hide();
    makeDraggableAndResizable();
    handleImageList(true);
});

$(document).on('click', '.btn_add_image', function (e) {
    $('.c').append(`<div class="image-container resizable-draggable">
        <img src="/tech/image-operator/icon.png" alt="Image" class="img">
    </div>`);
    makeDraggableAndResizable();
});

function makeDraggableAndResizable(){
    $(".resizable-draggable").draggable().resizable({
        handles: 'n, e, s, w, ne, se, sw, nw'
    });
}
$(document).on('contextmenu', '.image-container', function (e){
   e.preventDefault();
   let base64data = $(this).find('.img').prop('src');
   console.log('$base64data: ',base64data);
   let dateString = new Date().toLocaleString();
    console.log('$dateString: ',dateString);
    let key = `IMG: ${dateString}`;
    localStorage.setItem(key, base64data);
    let imglist = localStorage.getItem('imglist') ?? [];
    console.log('$imglist-local: ',imglist);
    if(imglist.length){
        imglist = JSON.parse(imglist);
        imglist.unshift(key);
        localStorage.setItem('imglist', JSON.stringify(imglist));
        console.log('$imglist: ',imglist);
    }else{
        imglist.unshift(key);
        localStorage.setItem('imglist', JSON.stringify(imglist));
        console.log('$imglist-new: ',imglist);
    }
    handleImageList(false);
    showToast(key);
});
$(document).on('dblclick', '.image-container', async function (e) {
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
            /* let dateString = new Date().toLocaleString();
            console.log('$dateString: ',dateString);
            let key = `IMG: ${dateString}`;
            localStorage.setItem(key, base64data);
            let imglist = localStorage.getItem('imglist') ?? [];
            console.log('$imglist-local: ',imglist);
            if(imglist.length){
                imglist = JSON.parse(imglist);
                imglist.push(key);
                localStorage.setItem('imglist', JSON.stringify(imglist));
                console.log('$imglist: ',imglist);
            }else{
                imglist.push(key);
                localStorage.setItem('imglist', JSON.stringify(imglist));
                console.log('$imglist-new: ',imglist);
            }
            handleImageList(false); */
        }
    } else {
        showToast('Clipboard Data Is Not Image.');
        console.log('Clipboard Data Is Not Image');
    }
});

function handleImageList(setImage){
    let imglist = localStorage.getItem('imglist');
    if(imglist){
        imglist = JSON.parse(imglist);

        if(imglist.length == 1)
            $('.bottom_menu_div').show();

        let i = 0;
        let li = '';
        while(i < imglist.length){
            li += `<div class="li" data-key="${imglist[i]}">${i + 1} -> ${imglist[i]}</div>`;
            i++;
        }
        $('.ul_dv').html(li);
        if(setImage)
            $('.img').prop('src', localStorage.getItem(imglist[0]));
    }else{
        $('.bottom_menu_div').hide();
    }
}


function showToast(message) {
    if (!timeout) {
        timeout = true;
        $('.snackbar').addClass('show');
        $('.snackbar').text(message);
        setTimeout(function () {
            $('.snackbar').removeClass('show');
            timeout = false; 
        }, 2000);
    }
}
// Bottom button Starts
$(document).on('click', '.plus-icon', function (e){
    var icon = $(this);
    if (icon.hasClass('rotate_45')) {
        icon.removeClass('rotate_45').addClass('rotate_0');
        $('.ul_dv').hide(100);
    } else {
        icon.removeClass('rotate_0').addClass('rotate_45');
        
        $('.ul_dv').show(100);
    }
});

$(document).on('contextmenu', '.li', function (e){
   e.preventDefault();
   let key = $(this).data('key');
   console.log('$key: ',key);
   let imglist = localStorage.getItem('imglist');
    console.log('$imglist-local: ',imglist);
    imglist = JSON.parse(imglist);
    imglist = imglist.filter(element => {
        return element != key;
    });
    localStorage.removeItem(key);
    if(imglist.length){
        localStorage.setItem('imglist', JSON.stringify(imglist));

    }else{
        localStorage.removeItem('imglist');
    }
    console.log('$imglist: ',imglist);
    handleImageList(false);
});

$(document).on('click', '.li', function (e){
   let key = $(this).data('key');
   console.log('$key: ',key);
   $('.img').prop('src', localStorage.getItem(key));
});
// Bottom button Finish