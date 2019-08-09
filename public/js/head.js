$(function(){
    $.ajax({
        url:"head.html",
        type:"get",
        success: function(result) {
            $(result).replaceAll("header");
            $(`<link rel="stylesheet" href="../css/head.css">`).appendTo("head");
        }
    })
})
$(function(){
    $.ajax({
        url:"foot.html",
        type:"get",
        success: function(result) {
            $(result).replaceAll("footer");
            $(`<link rel="stylesheet" href="../css/foot.css">`).appendTo("head");
        }
    })
})
$(function(){
    $.ajax({
        url:"head.html",
        type:"get",
        success:function(html){
            // console.log(html);
            $(html).replaceAll("#head");
            $(`<link rel="stylesheet" href="../css/head.css">`).appendTo("head");
        }
    })
    $("#ost_go").hover(
        function(){
          $("div.ost_big").show();
          $("#ost_go").hide();
        },
        function(){
          $("div.ost_big").hide();
          $("#ost_go").show();
        }
      );
      $("div.ost_big").hover(function(){
          $("div.ost_big").show();
      },function(){
          $("div.ost_big").hide();
          
        }
      );
      $("h3.ost_title").hover(function(){
        var $icon=$(".ost_icon_arrow")
        console.log($icon)
        $("h3.ost_title").addClass("ost_title_hover");
        $icon.addClass("dodo")
      },
      function(){
        var $icon=$(".ost_icon_arrow")
       $("h3.ost_title").removeClass("ost_title_hover");
       $icon.removeClass("dodo")
        console.log($("ost_icon_arrow"))
      }
      )
})