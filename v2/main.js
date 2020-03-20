//音乐设置
let music_id = "1413325844";
let music_name = "Black Catcher";
let music_artist = "ビッケブランカ";


let apname = music_name;
let apart = music_artist;
let apurl = 'https://v1.itooi.cn/netease/url?id=' + music_id + '&quality=flac';
let apcover = 'https://v1.itooi.cn/netease/pic?id=' + music_id;
let aplrc = 'https://v1.itooi.cn/netease/lrc?id=' + music_id;
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    audio: [{
        name: apname,
        artist: apart,
        url: apurl,
        cover: apcover,
        lrc: aplrc

    }],
    autoplay: true
});

//beta
// var jsonurl = "https://acg.wgb.ink/netease.php?id=" + music_id;

// var obj = JSON.parse(jsonurl);

// function loadXMLDoc() {
//     var xmlhttp;
//     if (window.XMLHttpRequest) {
//         //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
//         xmlhttp = new XMLHttpRequest();
//     } else {
//         // IE6, IE5 浏览器执行代码
//         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     xmlhttp.onreadystatechange = function() {
//         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//             var jsonurl1 = xmlhttp.responseText;
//             return jsonurl1;
//         }
//     }
//     xmlhttp.open("GET", jsonurl, true);
//     xmlhttp.send();
// }
// loadXMLDoc();


console.log('\n' + ' %c PersonalWebSite by 风也温柔 ' + ' %c https://eas1.cn/posts/165.html ' + '\n' + '\n', 'color: #fff; background: #fd79a8; padding:5px 0;', 'background: #FFF; padding:5px 0;');