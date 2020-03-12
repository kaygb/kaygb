// addFadeInBackground('https://tva3.sinaimg.cn/large/0072Vf1pgy1foxkjbqfwjj31hc0u0000.jpg', 'background');

// function addFadeInBackground(url, domId) {
//     var background = new Image();
//     background.src = url;
//     background.onload = function() {
//         console.log('Background load complete!');
//         var loadbackground = document.getElementById(domId);
//         loadbackground.style.background = 'url(' + background.src + ')';
//         loadbackground.style.animationName = 'fadein';
//     }
// }
// JS监听设置网站背景
window.onload = function() {
    setTimeout(function() {

        document.body.style.background = "url(https://acg.wgb.ink/acgurl.php)";
    }, 2e3);

}