// var jsonurl = "https://v1.itooi.cn/netease/song?id=1413325844";
// $.get(jsonurl, function(data) {
//     alert(data);
// });
// console.log(json);

function read() {
    console.log(json.songs.al.name); //输出键为“cc”所对应的值
}
// read();


const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    audio: [{
        name: 'Black Catcher',
        artist: 'ビッケブランカ',
        url: 'https://v1.itooi.cn/netease/url?id=1413325844&quality=flac',
        cover: 'https://v1.itooi.cn/netease/pic?id=1413325844',
        lrc: 'https://v1.itooi.cn/netease/lrc?id=1413325844',

    }],
    autoplay: true
});