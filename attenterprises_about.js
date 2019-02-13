// JavaScript Document

$(window).scroll (function()
                  {'use strict';
    var scrollval = $(this) .scrollTop();
    
    $("#body_text").css("transform",'translate(0px,'+scrollval/2+'%)');
});
    