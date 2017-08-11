//123portfolio

$(document).ready(function () {
    $(window).scroll(function () {
        var $currentPosition = $(this).scrollTop();
        var $section, $sectionPosition, magicNumber = 145;  // Because contact section is small

        $('section').each(function () {
            $sectionPosition = $(this).offset().top;
            if ($sectionPosition < $currentPosition + magicNumber) {
                $section = $(this);
            }
        });

        $('ul.nav.navbar-nav > li').removeClass('active');
        var selector = 'ul.nav.navbar-nav > li[data-id=' + $section.attr('id') + ']';
        $(selector).addClass('active');

    });
});
