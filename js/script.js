$(document).ready(function() {
    var carouseleList = $('ul');
    setInterval(changeSlide, 3000);
    function changeSlide() {
        carouseleList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    }
    function moveFirstSlide() {
        var firstItem = $('ul').find('li:first');
        var lastItem = $('ul').find('li:last');
        lastItem.after(firstItem);
        carouseleList.css({marginLeft:0});
        }
    });