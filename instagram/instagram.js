let timeout;
let image_base64 = '';

$(document).ready(function () {

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
        $(".spinner-div").hide();
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
                <td class="m_td full_name" data-id=${item.id} data-username=${item.username} data-profilepicurl=${item.profile_pic_url}>
                    ${item.full_name}
                </td>
                <td class="m_td username" data-id=${item.id} data-username=${item.username} data-profilepicurl=${item.profile_pic_url}>
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

$(document).on('dblclick', '.username', function (e){
   let id = $(this).data('id');
   console.log('$id: ',id);
   let username = $(this).data('username');
   console.log('$username: ',username);

   var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "f978f4d86fmshb8750e59a506ba8p1e8334jsn8ec4aca50c93");
    myHeaders.append("x-rapidapi-host", "instagram-social-api.p.rapidapi.com");
    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    $(".spinner-div").show();
    fetch("https://instagram-social-api.p.rapidapi.com/v1/info?username_or_id_or_url=" + username, requestOptions).then(response => response.json()).then(result => {
        console.log('$API: ', result);
        $(".spinner-div").hide();
        window.open(result.data.hd_profile_pic_url_info.url, '_blank');
    }).catch(error => {
        console.log('$API: error', error);
    });
});

$(document).on('dblclick', '.full_name', function (e){
   let id = $(this).data('id');
   console.log('$id: ',id);
   let username = $(this).data('username');
   console.log('$username: ',username);
   let profilepicurl = $(this).data('profilepicurl');
   console.log('$profilepicurl: ',profilepicurl);
   window.open(profilepicurl, '_blank');
});

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