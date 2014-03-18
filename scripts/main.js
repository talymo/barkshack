$('document').ready(function(){


    $('.navbar-nav li a, .callout').on('click', function(e){
        //Stop default action of the link
        e.preventDefault();
        //find out where the link is going
        var where = $(this).attr('data-link');

        //We need to find out which one is visible so we aren't opening one that is already open. So get the id of the current visible item and do a check against the one we are opening up.

        //Animate all visible items off the screen
        $('.row.visible').animate({left:5000}, 500).removeClass('visbile');

        //Animate the new item onto the screen
        $(where).animate({left:0}, 500).addClass('visible');

        //Stupid padding fix because the containers are positioned absolutely
        //I'm open to better ways to handle this.
        var padding = $(this).attr('data-padding');
        $('.bodyContainer').css('paddingBottom', padding);

    });

    $('.navbar-brand').on('click', function(e){
        $('.row.visible').animate({left:5000}, 500);
        $('.bodyContainer').css('paddingBottom', '0');
    });

});