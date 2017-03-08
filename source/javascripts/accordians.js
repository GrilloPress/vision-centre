jQuery("#buttonHeadingOne").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery("#headingOne").offset().top
    }, 500);
});

jQuery("#buttonHeadingTwo").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery("#headingTwo").offset().top
    }, 500);
});

jQuery("#buttonHeadingThree").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery("#headingThree").offset().top
    }, 500);
});

jQuery("#buttonHeadingFour").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery("#headingFour").offset().top
    }, 500);
});

jQuery("#buttonHeadingFive").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery("#headingFive").offset().top
    }, 500);
});

// Ensure when you click on an accordian to goes to the newly opened tab
jQuery(function () {
    jQuery('#accordion').on('shown.bs.collapse', function (e) {
        var offset = jQuery(this).find('.collapse.in').prev('.panel-heading');
        if(offset) {
            jQuery('html,body').animate({
                scrollTop: jQuery(offset).offset().top -20
            }, 500); 
        }
    }); 
});