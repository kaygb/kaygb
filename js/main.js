var meting_api = 'https://api.mizore.cn/meting/api.php?server=:server&type=:type&id=:id'
    //弹出一个页面层
$('#kaygb-blog').on('click', function() {
    layer.open({
        type: 2,
        title: '风也温柔',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['80%', '100%'],
        content: '//eas1.cn/'
    });
});
$('#kaygb-mail').on('click', function() {
    layer.open({
        type: 2,
        title: '风也温柔',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['80%', '100%'],
        content: '//mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=i@eas1.cn'
    });
});

var windowWidth = $(window).width();
if (windowWidth < 767) {
    // do something
    $("#aplayer").remove();
}

console.log('\n' + ' %c PersonalWebSite by 风也温柔 ' + ' %c https://eas1.cn/posts/165.html ' + '\n' + '\n', 'color: #fff; background: #fd79a8; padding:5px 0;', 'background: #FFF; padding:5px 0;');