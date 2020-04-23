jQuery(function(){

var minimized_elements = $('.minimize');
var maxLines = 1;

minimized_elements.each(function(){    
    var textArr = $(this).html().replace(/\n?<br>/gi,"<br>").split(/<br>/);
    var countLines = textArr.length;

    if (countLines > maxLines) {
        text_less = textArr.slice(0, maxLines).join("<br>");
        text_more = textArr.slice(maxLines, countLines).join("<br>");
    }
    else return;

    $(this).html(
        text_less + '<div>... </div><a href="#" class="more">More</a>'+
        '<div style="display:none;">'+ text_more +' <a href="#" class="less">Less</a></div>'
    );
}); 

$('a.more', minimized_elements).click(function(event){
    event.preventDefault();
    $(this).hide().prev().hide();
    $(this).next().show();        
});

$('a.less', minimized_elements).click(function(event){
    event.preventDefault();
    $(this).parent().hide().prev().show().prev().show();    
});

});
