function init() {
    set_timing();
    attach_events();
}

function attach_events() {
    $('.links').on('click', 'a', function() {
        change_image($(this).attr('title'));
        $('.links .current').removeClass('current');
        $(this).addClass('current');
    });
}

function change_image(className) {
    $('body').attr('class',className);
}

function set_timing() {
    var sections = $('section'),
        len = sections.length,
        current,
        counter = 0,
        i;

    (function animate() {
        current = sections[counter];
        if(!current) {
            return;
        }
        if($(current).hasClass('active')) {
            $(current).removeClass('active');
        } else {
            $(current).addClass('active');
        }
        counter++;
        if(counter == len)
            counter = 0;
        setTimeout(animate, 50);
    })();

}
