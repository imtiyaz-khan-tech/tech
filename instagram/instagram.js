let timeout;
let image_base64 = '';

$(document).ready(function () {
    // $(".spinner-div").hide();

    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "f978f4d86fmshb8750e59a506ba8p1e8334jsn8ec4aca50c93");
    myHeaders.append("x-rapidapi-host", "instagram-social-api.p.rapidapi.com");
    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    fetch("https://instagram-social-api.p.rapidapi.com/v1/followers?username_or_id_or_url=mr.imtiyaz_&amount=1000", requestOptions).then(response => response.json()).then(result => {
        console.log('$API: ', result);
        // $('body').append(`<img src="${result.data.items[0].profile_pic_url}" />`);
        // window.open(result.data.items[0].profile_pic_url, '_blank');
        fetchFollowers(result);
    }).catch(error => {
        console.log('$API: error', error);
    });
});

function fetchFollowers(result){
    let i = 0;
    let trs = ``;
    while (i < result.data.items.length) {
        let item = result.data.items[i];
        trs += `
            <tr class="m_tr">
                <td class="m_td">
                    ${item.full_name}
                </td>
                <td class="m_td">
                    ${item.username}
                </td>
                <td class="m_td">
                    ${item.is_private ? '&#128274;' : ''}
                </td>
            </tr>
        `;
        i++;
    }
    $('.tbody').html(trs);
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