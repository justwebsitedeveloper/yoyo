
$(document).ready(function() {
    setTimeout(function(){
        $(".newclass_menu_query1").show();
    },1000)
    $(document).on("click", "#dcmenuEl", function(e) {
        e.preventDefault();
        $('#responsivemnu').drawer('toggle')
    });
    $('#responsivemnu').drawer({
        opened: false,
        align: 'left',
        range: [0, 0],
        persistent:false,
        mouseEvents: true,
        touchEvents: true,
    });
    $('.lang-selector').on('change', function() {
       
        var return_url;
        var location_url =window.location.href;
        var index = location_url.lastIndexOf("/") + 1;
        var filename = location_url.substr(index);
        var base_url=getBaseUrl();
        var val=$(this).val();
        if(val=="english")
        {
            var str=base_url.toString();
            var res = str.replace("tamil/", "");
            return_url= res+filename;
           
        }
        else
        {
            return_url= base_url+"tamil/"+filename;
        }
        window.location.href=return_url;
        

    });
    $(".lang").click(function () {
        var return_url;
        var location_url =window.location.href;
        var index = location_url.lastIndexOf("/") + 1;
        var filename = location_url.substr(index);
        var base_url=getBaseUrl();
        var val=$(this).attr("id");
       
        if(val=="english")
        {
            var str=base_url.toString();
            var res = str.replace("tamil/", "");
            return_url= res+filename;
           
        }
        else
        {
            return_url= base_url+"tamil/"+filename;
        }
        window.location.href=return_url;
    
    });
    $(".nav-download").click(function () {
        $("#popupmodal").modal("show");
    })
    $(".colse_div").click(function () {
       
        $('#responsivemnu').drawer('toggle')
    })
    $(".parent").click(function(e) {
        e.stopImmediatePropagation();
        var id = $(this).closest("li").attr("id");
        $("#" + id + " > .nav-child:nth-child(3)").slideToggle("slow");
        $("#" + id + " .arrow_rgt").toggle();
        $("#" + id + " .arrow_down").toggle();
    });
       
    $(".arrow_rgt").click(function(e) {
        e.stopImmediatePropagation();
        $(".mobile_menu_ul .arrow_down").hide();
        $(".mobile_menu_ul .arrow_rgt").show();
        $(".mobile_menu_ul .mega_menu > .nav-child").hide("slow");
        var id = $(this).closest("li").attr("id");
        $("#" + id + " > .nav-child:nth-child(3)").show("slow");
        $("#" + id + " .arrow_rgt").hide();
        $("#" + id + " .arrow_down").show();
    });
    $(".arrow_down").click(function(e) {
        e.stopImmediatePropagation();
        $(".mobile_menu_ul .arrow_down").hide();
        $(".mobile_menu_ul .arrow_rgt").show();
        $(".mobile_menu_ul .mega_menu > .nav-child").hide("slow");
        var id = $(this).closest("li").attr("id");
        $("#" + id + " > .nav-child:nth-child(3)").hide("slow");
        $("#" + id + " .arrow_rgt").show();
        $("#" + id + " .arrow_down").hide();
    });
    // $(".mobile_menu_ul li a").click(function(e) {
    //     e.stopImmediatePropagation();
    //     $(".mobile_menu_ul li").removeClass(".actmenu");
    //     $(this).addClass(".actmenu");
    // });
});

    

    
function getBaseUrl() {
    var re = new RegExp(/^.*\//);
    var base_url = re.exec(window.location.href);
    return base_url;
}



      

        
        
   
    function closeNav()
    {
        $('#responsivemnu').drawer('toggle')
    }