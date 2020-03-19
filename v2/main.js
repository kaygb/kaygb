//音乐设置
let music_id = "1413325844";
let music_name = "Black Catcher";
let music_artist = "ビッケブランカ";

// var jsonurl = "https://v1.itooi.cn/netease/song?id=1413325844";
// $.get(jsonurl, function(data) {
//     alert(data);
// });
// console.log(json);

function read() {
    console.log(json.songs.al.name); //输出键为“cc”所对应的值
}
// read();
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
console.log('\n' + ' %c PersonalWebSite by 风也温柔 | KAYGB ' + ' %c https://eas1.cn/ ' + '\n' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');