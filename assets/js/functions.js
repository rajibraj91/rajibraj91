(function($){
    "use strict";
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });


    // lightcase 
    $('a[data-rel^=lightcase]').lightcase();


    $(document).ready(function () {
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
                $('.header-section').addClass('header-fiexd');

            } else {
                $('.header-section').removeClass('header-fiexd');
            }
        }
    });
    

    // ajax contact form
    $(function() {
        var form = $('#contact-form');
        var formMessages = $('.form-message');
        $(form).submit(function(e) {
            e.preventDefault();
            var formData = $(form).serialize();
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                $(formMessages).text(response);
                $('#contact-form input, #contact-form textarea').val('');
            })
            .fail(function(data) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
        });
    });
    

    


    // wow animation
    new WOW().init();
}(jQuery));