$(function(){
    $.ajax({
        url:"foot.html",
        type:"get",
        success:function(html){
            // console.log(html);
            $(html).replaceAll("#foot");
            $(`<link rel="stylesheet" href="../css/foot.css">`).appendTo("head");
        }
    })
})