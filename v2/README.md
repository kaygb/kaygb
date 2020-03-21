## 个人主页源码

记得修改内容哦！

预览地址：[https://www.kaygb.top](https://www.kaygb.top)

![](https://cdn.jsdelivr.net/gh/kaygb/blog-images/img/20200320215228.png)

## 更换网易云音乐歌单

找到index.html大概57行的位置，修改data-id的值为你的歌单id
~~~html
<div class="aplayer" data-id="20173709" data-server="netease" data-type="playlist" data-fixed="true" data-autoplay="true" data-volume="0.8"></div>
~~~

## 如何获取网易云歌单id

网页浏览器打开music.163.com，登陆你的账户，然后点击你的歌单，在地址栏可以看到id

![](https://cdn.jsdelivr.net/gh/kaygb/blog-images/img/20200320170205.png)