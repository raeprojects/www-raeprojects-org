;(function($){
    if (!$){
        return console.warn("image slider needs jQuery");
    }



    $.fn.imageSlider = function(option){
           var defaults= {
                delay: 3000,
                imageWidth: 1200,
                slideSpeed: 500,
                pause: 9000,
                imageSource: ["../img/eheader1.jpg", "../img/eheader6.jpg", "../img/eheader7.jpg", "../img/eheader9.jpg"],
                imageAlt: ["first imageSlider", "second imageSlider", "third imageSlider", "fourth imageSlider"]
            };
          var setting = $.extend({}, defaults,option);

        return this.each(function(){

            appendPicture();


          function appendPicture(){
                 var div = $("<div>").addClass("wraper").appendTo(".containers");
                 var ul = $("<ul>").appendTo(div);
                 var x,y;
                 for (x = 0, y=setting.imageSource.length; x<y; x++) {
                    var li = $("<li>").appendTo(ul);
                     $("<img>",{
                          src: setting.imageSource[x] ,
                          alt: setting.imageAlt[x]
                     }).appendTo(li);

                     appendBullet();
                 }
            }
            function appendBullet(){
                /*var form = $("<form>").appendTo(".container");
                 //var ul2 = $("<ul>").appendTo(form);
                 for (x = 0, y=setting.imageSource.length; x<y; x++) {
                    //var li = $("<li>").appendTo(ul);
                     $("<input/>",{
                         type: "radio",
                         name: "whatever",
                         id: setting.imageAlt[x]
                          //alt: setting.imageAlt[x]
                     }).addClass("radio").appendTo(".container");

                 }*/
                 appendNavigator();
             }
             function appendNavigator(){
                 $("<button>",{
                    text: "<",
                 }).addClass("btn1").appendTo(".containers");
                 $("<button>",{
                    text: ">",
                 }).addClass("btn2").appendTo(".containers");
             }

             var i = 1;
             var slide;
             function slider(){
                  slide = setInterval(function(){
                      $(".wraper").animate({
                             "marginLeft": "-="+ setting.imageWidth},
                              setting.slideSpeed, function(){
                                i++;
                                 if(i == setting.imageSource.length ){
                                     i = 1;
                                     $(".wraper").css("margin-left",0);
                                 }
                               });
                  }, setting.pause);
             }
              $(".wraper, .btn1, .btn2").on("mouseenter", function(){
                clearInterval(slide);
              });
              $(".wraper, .btn1, .btn2").on("mouseleave",  slider);

              slider();
              $(".btn1").on("click", function(){
                $(".wraper").animate({
                             "marginLeft": "-="+ setting.imageWidth},
                              setting.slideSpeed, function(){
                                i++;
                                 if(i == setting.imageSource.length ){
                                     i = 1;
                                     $(".wraper").css("margin-left",0);
                                 }
                               });
              });
              var k =0 ;
              $(".btn2").on("click", function(){
                if(k === 0){
                                     k =setting.imageSource.length -1;
                                     $(".wraper").css("margin-left",-4800);
                                 }
                $(".wraper").animate({
                             "marginLeft": "+="+ setting.imageWidth},
                              setting.slideSpeed, function(){
                                k--;

                               });
              });


        });

    };


})(jQuery);
$(".containers").imageSlider();