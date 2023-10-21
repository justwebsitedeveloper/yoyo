(function($) {
   
    var slide = function(ele,options) {
        var $ele = $(ele);
       
        var setting = {
        		
            speed: 2000,
          
            interval: 3000,
            
        };
       
        $.extend(true, setting, options);
       
        var states = [
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 134, $opacity: 0.3 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 65, $opacity: 0.5 },
            { $zIndex: 3, width: 225, height: 315, top: 55, left: 65, $opacity: 0.9 },
            { $zIndex: 4, width: 280, height: 375, top: 15, left: 332, $opacity: 1},
            { $zIndex: 3, width: 225, height: 315, top: 55, left: 655, $opacity: 0.9 },
            { $zIndex: 2, width: 225, height: 315, top: 55, left: 900, $opacity: 0.8 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 635, $opacity: 0.0 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

        // 事件
        $ele.find('.hi-next').on('click', function() {
            next();
           var parentt=$ele.parent().parent();
           var name=$ele.find('ul li.active').find("img").attr("alt");
           parentt.find("div.top-right .pink_text h1").html("").html(name);
          
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
            
        });

        function changeName(){
            var parentt=$ele.parent().parent();
            var name=$ele.find('ul li.active').find("img").attr("alt");
            parentt.find("div.top-right .pink_text h4").html("").html(name);
            parentt.find("div.bottom-left").addClass("animate_class");
            setTimeout( function(){
            parentt.find("div.bottom-left").removeClass("animate_class");
            }, 1000);
        };

    //     $ele.on('mouseenter', function() {
    //         clearInterval(timer);
    //         timer = null;
    //     }).on('mouseleave', function() {
    //    autoPlay();
    //     });

        move();
       
        autoPlay();

      
        function move() {
            
            $lis.each(function(index, element) {
                var state = states[index];
              //console.log(element);
              
            
              if(state.$opacity==1)
              {
                $(element).addClass("active");
                changeName();
              }
              else
              {
                $(element).removeClass("active");
              }
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed, 'linear').find('img').css('opacity', state.$opacity);
            });
        }

       
        function next() {
           
            states.unshift(states.pop());
            move();
           
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
            
        }
    }
    
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
      
        return this;
    }
})(jQuery);



// 