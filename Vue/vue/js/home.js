    $('li').mouseover(function () {
        $('li').stop().animate({
            width:'5.6%'
        });

        $(this).stop().animate({
            width: '65%'
        });

    });


    $('li').mouseout(function() {
        $(this).stop().animate({
            width: '5.6%'
        })
    });
    $('ul').mouseout(function() {
        $('li').stop().animate({
            width: '14.25%'
        })
    });



