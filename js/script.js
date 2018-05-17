   $(document).ready(function() {
    var carouseleList = $('ul');
    var leftArrow = $('.icon2');
    var rightArrow = $('.icon1');
    var firstItem = $('ul').find('li:first');
    var lastItem = $('ul').find('li:last');

    setInterval(changeSlide, 3000);
    function changeSlide() {
        carouseleList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    }
   
    function moveFirstSlide() {
        lastItem.after(firstItem);
        carouseleList.css({marginLeft:0});
    }
    
    function moveLastSlide() {
        firstItem.after(lastItem);
        carouseleList.css({marginRight:0});
    }

    leftArrow.click( function() {
        carouseleList.css({'marginLeft': -400});
        moveFirstSlide();
         console.log('left');
       });
     rightArrow.click( function() {
        carouseleList.css({'marginLeft':+400});
        moveFirstSlide();
         console.log('right');
        });
    });