$(function(){
var list=$(".slide_list");
var btnSpan=$(".num_box");
var btns=$(".num_box>span");
var index=0;
var interval=3000;
var conWidth=312;
var timer;
   play();
   btnSpan.on('mouseenter',('span'),function(){
       clearInterval(timer);
       var $btn=$(this);
       $btn.addClass("cur").siblings().removeClass("cur");
       var order=$btn.attr("data-id");
       index=order;
       list.css("left",`${-conWidth*order}px`);
       
   })
   btnSpan.mouseleave(function(){
       play();
   })
   function play(){
       timer=setInterval(function(){
        index++;
        if(index==4){
            btns.eq(0).addClass("cur").siblings().removeClass("cur");
        }
        if(index>3){
            index=0; 
            list.css("left",`${-conWidth*index}px`); 
        }else{
            
            list.css("left",`${-conWidth*index}px`);
            btns.eq(index).addClass("cur").siblings().removeClass("cur");
        }
       },interval)
   }
var ul=$(".units");
var liList=$(".unit");
var liContent=$(".unit-info");
var ilist=$(".mp-level i");
var arr=[
    {"cl":"yihua","united_name":"移花","tw":"醉来忘却移花处，谁自临风吹玉笛","yw":"玉笛临风，醉心入梦，红尘移花归去，沧海踏歌而来。移花乃东海子桑氏开创之门派，中原移花亦出自东海一脉。千年之来遗世独立，是八荒之中最为出尘风雅，写意逍遥之门派...","level":3,"fs":"玉笛临风，醉心入梦，红尘移花归去，沧海踏歌而来。移花乃东海子桑氏开创之门派，中原移花亦出自东海一脉。千年之来遗世独立，是八荒之中最为出尘风雅，写意逍遥之门派。","wp":[["笛子"],["花坠"]],"lk":"//wuxia.qq.com/gamedata/league/yihua.shtml","gl":"javascript:alert('敬请期待！');"},
    {"cl":"shendao","united_name":"神刀","tw":"刀含杀气腾幽朔，萧飒寒芒泣鬼神","yw":"长刀掠世，雄鹰相随，勇者初心无惧，仁者自可无敌。神刀乃傅红雪叶开所在之门派，江湖中第一用刀之门派，亦是八荒中最为特立独行、潇洒率性之门派...","level":4,"fs":"长刀掠世，雄鹰相随，勇者初心无惧，仁者自可无敌。神刀乃傅红雪叶开所在之门派，江湖中第一用刀之门派，亦是八荒中最为特立独行、潇洒率性之门派。","wp":[["长刀"],["鹰"]],"lk":"//wuxia.qq.com/gamedata/league/shendao.shtml","gl":"//wuxia.qq.com/webplat/info/news_version3/5012/16799/16811/24806/m12360/list_1.shtml"},
    {"cl":"taibai","united_name":"太白","tw":"流星白羽光出匣，一剑无痕雪漫山","yw":"风无痕本是开封府司录司参军事，负责协助捕门之人，利用强大的分析能力来推理查案。在多年的查案之中，风无痕因偶然机会获取本被认为是医书的《破穴论》...","level":4,"fs":"剑者百刃之君也。太白乃武林第一剑派。剑法全仗“快”、“悟”二字，意随剑走，剑在意先，招招攻敌破绽，连绵不绝却又无迹可寻，是为“无痕剑意”。","wp":[["剑"],["剑鞘"]],"lk":"//wuxia.qq.com/gamedata/league/taibai.shtml","gl":"//wuxia.qq.com/webplat/info/news_version3/5012/16799/16811/16815/m12360/list_1.shtml"},
    {"cl":"shenwei","united_name":"神威","tw":"神威倒卷翻空浪，一举冲霄气势雄","yw":"后周副都指挥使韩通于954年创立“神威营”，忠诚守护后周皇室安全。韩通之子韩微，曾几次劝说父亲除去后周重臣赵匡胤，但韩通却欣赏赵匡胤之人才气度...","level":3,"fs":"神威本是源自军旅的门派，故而无论是性格还是武功都带着军旅出身的特点，注重实战、刚猛霸道、勇往直前。","wp":[["枪"],["长弓"]],"lk":"//wuxia.qq.com/gamedata/league/shenwei.shtml","gl":"//wuxia.qq.com/webplat/info/news_version3/5012/16799/16811/16814/m12360/list_1.shtml"},
    {"cl":"tangmen","united_name":"唐门","tw":"雾霭云从飞星落，半影相依扇中情","yw":"蜀中唐氏，自魏晋起便为世家。五代十国之时，唐门少主唐郢化名卢郢，游历江南，更是进士及第，成为南唐的文武双进士，天下闻名...","level":5,"fs":"唐门乃百年世家，其暗器机关独步武林，更因善使机关傀儡合击之术，被江湖人称为“半人半影”。真正的唐门高手，从不用毒。","wp":[["傀儡"],["扇子"]],"lk":"//wuxia.qq.com/gamedata/league/tangmen.shtml","gl":"//wuxia.qq.com/webplat/info/news_version3/5012/16799/16811/16816/m12360/list_1.shtml"},
    {"cl":"gaibang","united_name":"丐帮","tw":"醉来豪气不可收，嘘作长虹贯牛斗","yw":"丐帮最早的源流可追溯到春秋时期，但正式作为一个门派存在于江湖之中，则是从唐末开始。黄巢起义中，某金姓将领因不满义军暴虐残害百姓...","level":4,"fs":"丐帮以近身格斗见长，各种多段打击技能令其具有极强的控制能力。","wp":[["缠手"],["酒葫芦"]],"lk":"//wuxia.qq.com/gamedata/league/gaibang.shtml","gl":"//wuxia.qq.com/webplat/info/news_version3/5012/16799/16811/16812/m12360/list_1.shtml"},
    {"cl":"tianxiang","united_name":"天香","tw":"竞夸天下双无绝，独立人间第一香","yw":"华佗当年被处死之前，将其一生所学著为《青囊书》一卷。数百年后，少年桑柴子偶得此书，修习医术，其第一个救下之人，便是官宦千金员外之女...","level":3,"fs":"天香位于东越幽谷万顷花海之中，以医入武，医武合一，创造出独特的武学。天香是八荒中唯一只招收女子的门派，清丽脱俗之中自有冰心国色，只可恋慕，不容轻侮。","wp":[["伞"],["伞中剑"]],"lk":"//wuxia.qq.com/gamedata/league/tianxiang.shtml","gl":"//wuxia.qq.com/webplat/info/news_version3/5012/16799/16811/16817/m12360/list_1.shtml"},
    {"cl":"zhenwu","united_name":"真武","tw":"灵妙潜通乘风起，太极玄虚若镜清","yw":"真武祖师张梦白本是书香门第出身，屡试不中时竟在襄州山中偶遇一似癫似疯之道人扶摇子。得其点化，张梦白以文入武，更习得驱影之术...","level":4,"fs":"武当真武为正宗道家玄门，秉承“大道不远，真我存心，自然成武，天人合一”之念，以剑御气、气透冲霄，乃立“非真武不足当”之威名。","wp":[["双剑"],["剑鞘"]],"lk":"//wuxia.qq.com/gamedata/league/zhenwu.shtml","gl":"//wuxia.qq.com/webplat/info/news_version3/5012/16799/16811/16813/m12360/list_1.shtml"},
    {"cl":"wudu","united_name":"五毒","tw":"动游碧落心无碍，静藏深渊迹绝踪","yw":"地处云滇的五毒与中原诸派均有所不同，其武学以狠、诡、毒、快为要诀，以诡秘凌厉的刀法配合神鬼莫测的身法，可谓是举手之间、取人性命；轻烟散尽、乃见五毒。","level":5,"fs":"五毒门派擅使双刀，具有潜行能力。来无影，去无踪，以鬼魅的身法和爆发伤害见长，常常在阴影当中就能掌控目标的生死。","wp":[["双刃"],["双刃"]],"lk":"//wuxia.qq.com/gamedata/league/wudu.shtml","gl":"//wuxia.qq.com/webplat/info/news_version3/5012/16799/16811/16818/m12360/list_1.shtml"}
];	
   ul.on('mouseover',('.unit'),function(){
       var $btn=$(this);
       var name1=ul.attr("class");
       var name2=$btn.attr("data-id");
       var name3=name1.substr(5);
       var name4=liContent.attr("class");
       var name5=$btn.attr("data-name");
       var name6=name4.substr(10);
       
       if(name2!=name3){
           ul.removeClass(name3).addClass(name2);
       }
       if(name5!=name6){
           liContent.removeClass(name6).addClass(name5);
       }
       for(var item of arr){
        var html=`
                <h3>${item.united_name}
                    <em class="tag sp-2 pa"></em>
                </h3>
                <p class="mp-tw">${item.tw}</p>
                <p class="mp-yw">${item.yw}</p>
        `
        if(liContent.hasClass(item.cl)){ 
            var num=item.level;
            // console.log(num);
            if(num<5){
                ilist.eq(0).nextAll().removeClass("has");
                ilist.eq(num).prevAll().addClass("has");
            }else{
                ilist.eq(0).nextAll().addClass("has");
            }
            $(".mp_info").html(html);  
        }
            
    }
    
})
})
