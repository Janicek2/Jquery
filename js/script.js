/*$(document).ready(function() {
    
    //setInterval(changeSlide, 3000);
    //function changeSlide() {
    //    carouseleList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    //}*/
    function moveFirstSlide() {
        var firstItem = $('ul').find('li:first');
        var lastItem = $('ul').find('li:last');
        lastItem.after(firstItem);
        carouseleList.css({marginLeft:0});
    //});
    //}});
    var carouseleList = $('ul');
    var leftArrow = $('.icon1');
    var rightArrow = $('.icon2');
    leftArrow.click( function() {
        carouseleList.animate({'marginLeft':+400}, 500, moveFirstSlide);
         console.log('left');
       });
     rightArrow.click( function() {
        carouseleList.animate({'marginLeft':0}, 500, moveFirstSlide);
         console.log('right');});