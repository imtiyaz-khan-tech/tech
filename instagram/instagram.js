let timeout;
let followers;
let allFollowers;
let image_base64 = '';
$(document).ready(function () {

    if(localStorage.getItem('allFollowers')){
        allFollowers = JSON.parse(localStorage.getItem('allFollowers'));
        followers = [...allFollowers];
        fetchFollowers();
        $(".spinner-div").hide();
    }else{
        var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", "184006b1bdmsh4501251d96e9da5p14b599jsn00737e7f0378");//Acc1
        // myHeaders.append("x-rapidapi-key", "f978f4d86fmshb8750e59a506ba8p1e8334jsn8ec4aca50c93");//Acc2
        myHeaders.append("x-rapidapi-host", "instagram-social-api.p.rapidapi.com");
        
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        
        fetch("https://instagram-social-api.p.rapidapi.com/v1/followers?username_or_id_or_url=mr.imtiyaz_&amount=1000", requestOptions).then(response => response.json()).then(result => {
            console.log('$API: ', result);
            $(".spinner-div").hide();
            if(result.message){
                showToast(result.message);
            }else{
                followers = [...result.data.items];
                allFollowers = [...result.data.items];
                localStorage.setItem('allFollowers', JSON.stringify(allFollowers));
                fetchFollowers();
            }
        }).catch(error => {
            console.log('$API: error', error);
        });
    }
});

$(document).on('click', '.btn-fixed', function (e){
   localStorage.removeItem('allFollowers');
   window.location.reload();
});

function fetchFollowers(){
    let i = 0;
    let trs = ``;
    while (i < followers.length) {
        let item = followers[i];
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
    $('.private').text(`[ ${followers.length} ]`);
}

$(document).on('input', '.name_inp', function (e) {
    let val = $(this).val().trim();
    console.log('val: ', val);

    if (val) {
        followers = allFollowers.filter(element => element.full_name.toLowerCase().includes(val.toLowerCase()));
    } else {
        followers = [...allFollowers];
    }
    fetchFollowers();
});

$(document).on('input', '.username_inp', function (e) {
    let val = $(this).val().trim();
    console.log('val: ', val);

    if (val) {
        followers = allFollowers.filter(element => element.username.toLowerCase().includes(val.toLowerCase()));
    } else {
        followers = [...allFollowers];
    }
    fetchFollowers();
});

$(document).on('dblclick', '.username', function (e){
   let id = $(this).data('id');
   console.log('$id: ',id);
   let username = $(this).data('username');
   console.log('$username: ',username);

   var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "184006b1bdmsh4501251d96e9da5p14b599jsn00737e7f0378");//Acc1
    // myHeaders.append("x-rapidapi-key", "f978f4d86fmshb8750e59a506ba8p1e8334jsn8ec4aca50c93");//Acc2
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