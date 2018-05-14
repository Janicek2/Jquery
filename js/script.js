$(function() {
    var carousele = $('carousele ul');
    setTimeout(changeSlide, 3000); //after 3 seconds will change the slide once
    carousele.animate({'marginLeft':-200}, 500, moveFirstSlide);
    var firstItem = carousele.find('li:first');
    var lastItem = carousele.find('li:last');
    lastItem.after(firstItem)
    carousele.css({marginLeft:0});
});