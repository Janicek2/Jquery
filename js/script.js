   $(document).ready(function() {
    var carouseleList = $('ul');
    var leftArrow = $('.icon2');
    var rightArrow = $('.icon1');

    // setInterval(changeSlide, 3000);
    // function changeSlide() {
    //     carouseleList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    // }
   
    function moveFirstSlide() {
        var firstItem = $('ul').find('li:first');
        var lastItem = $('ul').find('li:last');
        lastItem.after(firstItem);
        carouseleList.css({marginLeft:0});
    }
    
    function moveLastSlide() {
        var firstItem = $('ul').find('li:first');
        var lastItem = $('ul').find('li:last');
        firstItem.before(lastItem);
    }

    leftArrow.click( function() {
        carouseleList.animate({'marginLeft':-400}, 100, moveFirstSlide);
        console.log('left');
       });

     rightArrow.click( function() {
        moveLastSlide();
        carouseleList.animate({'marginLeft':-400}, 100);
        console.log('right');
        });
    });