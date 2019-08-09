$(function () {
    $(".center-nav>ul").on('click', 'li:not(:last-child)', function () {
        $(this).addClass("ischeck");
        $(this).siblings().removeClass("ischeck");
        var i=$(this).index();
        $(".news").css("margin-left",-i*403+"px");
    })
    $(".mediaUl").on('click', 'li', function () {
        $(this).addClass("isActive");
        $(this).siblings().removeClass("isActive");
        var i=$(this).index();
        $(this).parent().parent().siblings().css("margin-left",-i*409+"px");
    })
    $(".onSel").parent().on('mouseenter', 'li', function () {
        $(this).addClass("isSelected");
        $(this).siblings().removeClass("isSelected");
    })
    $(".change").parent().on('click', 'li', function () {
        $(this).addClass("isSelected1");
        $(this).siblings().removeClass("isSelected1");
        if ($(".isSelected1").index() == 1) {
            $(".lunImg").replaceWith(` 
        <div class="lunImg">
        <img src="../img/lunbo1-1.png" alt="">
        <img src="../img/lunbo1-2.png" alt="">
        <img src="../img/lunbo1-3.png" alt="">
        <img src="../img/lunbo1-4.png" alt="">
        <img src="../img/lunbo1-5.png" alt="">
        <img src="../img/lunbo1-6.png" alt="">
        <img src="../img/lunbo1-7.png" alt="">
    </div>
    `);
            $(".atNav").replaceWith(`
    <ul class="atNav onSel">
        <li class="isSelected"><a href="javascript:;">wegame精彩活动</a></li>
        <li><a href="javascript:;">心悦俱乐部</a></li>
        <li><a href="javascript:;">道聚城福利</a></li>
        <li><a href="javascript:;">天涯助手领新头像框</a></li>
        <li><a href="javascript:;">迅游庆中秋</a></li>
        <li><a href="javascript:;">扒扒游福利活动</a></li>
        <li><a href="javascript:;">微信游戏圈上线</a></li>
    </ul>
    `);
        }
        else{
            $(".lunImg").replaceWith(` 
            <div class="lunImg">
            <img src="../img/lunbo1-1.jpeg" alt="">
            <img src="../img/lunbo1-2.jpeg" alt="">
            <img src="../img/lunbo1-3.jpeg" alt="">
            <img src="../img/lunbo1-4.jpeg" alt="">
            <img src="../img/lunbo1-5.jpeg" alt="">
            <img src="../img/lunbo1-6.jpeg" alt="">
            <img src="../img/lunbo1-7.jpeg" alt="">
        </div>
        `);
                $(".atNav").replaceWith(`
            <ul class="atNav onSel">
                <li class="isSelected"><a href="javascript:;">618聚划算</a></li>
                <li><a href="javascript:;">端午粽子PK</a></li>
                <li><a href="javascript:;">四周年合集</a></li>
                <li><a href="javascript:;">满级新服</a></li>
                <li><a href="javascript:;">福利普赠</a></li>
                <li><a href="javascript:;">美装福利</a></li>
                <li><a href="javascript:;">S8斗鱼OB解说</a></li>
            </ul>
        `);  
        }
    })
    $(".atNav").parent().on('mouseenter', 'li', function () {
        $('.lunImg').css("margin-left", `-${$(this).index()*799}px`)
    });
    var t = setInterval(function () {
        var i = $('.isSelected').index();
        if (i == 6) {
            i = -1;
        }
        i++;
        $('.atNav>li').eq(i).addClass("isSelected");
        $('.atNav>li').eq(i).siblings().removeClass("isSelected");
        $('.lunImg').css("margin-left", `-${799*i}px`);
    }, 4000);
    $(".sfq>ul").on('click','li>.sfqTitle',function(){
        if($(this).parent().hasClass("lose")){
            $(this).parent().removeClass("lose");
            $(this).parent().parent().children(":first").addClass("lose");
        }
        else{
            $(this).parent().addClass("lose");
            $(this).parent().siblings().removeClass("lose");
        }
    })
    $(".jobIcon").on('click','li',function(){
        $(this).children().addClass("isgreen");
        $(this).siblings().children().removeClass("isgreen");
        var i=$(this).index();
        $(".actor").eq(i).siblings().css({"left":"-170px","opacity":"0"});
        $(".actor").eq(i).delay().css({"left":"0px","opacity":"1"});
        $(".jobImg").eq(i).siblings().css("right","-170px");
        $(".jobImg").eq(i).delay().css("right","0px");
       
    })
})