$(document).ready(function() {
    var carouseleList = $('carousele ul');
    carousele.animate({'margin left':-400}, 500, moveFirstSlide);
    function moveFirstSlide() {
        var firstItem = carousele.find('li:first');
        var lastItem = carousele.find('li:last');
        lastItem.after(firstItem);
        carousele.css({marginLeft:0});
        console.log("start");
        }
    });