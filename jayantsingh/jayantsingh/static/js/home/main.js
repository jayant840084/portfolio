var data = {
    // Holds the state of the toggle
    toggle: {},
    // Holds the list of pages | index 0 being the top page
    page_stack: [],
    stack_zindex: 1000,
    loading: $('#loader-bg'),
    colors: [
        '#FF0000',
        '#F1D302',
        '#FFEE00',
        '#00FF50',
        '#00FFAE',
        '#00D8FF',
        '#1B5E20',
        '#827717',
        '#FF6F00',
        '#BF360C'
    ],
    quotations: [
        '“All life is an experiment. The more experiments you make the better.”<br>—Ralph Waldo Emerson',
        '“All of life is peaks and valleys. Don’t let the peaks get too high and the valleys too low.”<br>—John Wooden',
        '"To follow, without halt, one aim: There\'s the secret of success."<br>—Anna Pavlova'
    ]
};

$(function () {

    function init() {

        setRandomColors();
        centerVertically();
        // data initialization
        data.page_stack = $('main').children();

        // toggle button
        $('#toggle').on('click', function () {
            data.toggle.open ? closeMenu() : openMenu();
        });
    }
	init();
});

$(window).bind('resize', function () {
    centerVertically();
});

$(window).on('load', function () {
    hideLoading();
});

function showLoading() {
    $('#loader-bg').css("display", "block");
}

function hideLoading() {
    $('#loader-bg').css("display", "none");
}

function centerVertically() {

    /*
     * to center an element add centerVertically attribute and assign a parent to which
     * it is to be aligned and give it a unique id
     */
    $('[centerVertically]').each(function (index, element) {
        var parentElement = null;
        if (element.getAttribute('centerVertically') === 'window' ||
            element.getAttribute('centerVertically') === 'document')
            parentElement =  window;
        else parentElement = element.getAttribute('centerVertically');
        var elementToCenter = '#' + element.id;

        if ($(window).width() > 720) {
            var marginTop = ($(parentElement).height() - $(elementToCenter).height()) / 2;
            $(elementToCenter).css('margin-top', marginTop);
        }
    });
}

function openMenu() {

    setQuotation();
    // activate click listeners for page stack when menu is opened
    activateStackPageClickListeners();

    // set data.toggle.open to true to imply that menu is open
    data.toggle.open = true;

    createMenuPageStack();
}


function closeMenu() {
    // activate click listeners for page stack when menu is opened
    deactivateStackPageClickListeners();

    // set data.toggle.open to false to imply that menu is closed
    data.toggle.open = false;

    destroyMenuPageIndex();

    $(data.page_stack[0]).css('transform', 'translateY(0%)');
    $(data.page_stack[0]).css('border-radius', '0');
    $(data.page_stack[0]).css('z-index', data.stack_zindex + 1);


}


function createMenuPageStack() {
    var pageList = data.page_stack;
    for (var index = 0; index < pageList.length; index++) {
        var page = pageList[index];
        $(page).css('transition-duration', '0.4s');
        $(page).css('transform', 'translateY(' + (90 - index * 6) + '%) scale(' + (0.9 - index * 0.03) + ', 1)');
        $(page).css('border-radius', '2px');
        $(page).css('z-index', data.stack_zindex - index);
    }
}


function destroyMenuPageIndex() {
    var pageList = data.page_stack;
    for (var index = 1; index < pageList.length; index++) {
        var page = pageList[index];
        $(page).css('transition-duration', '0.2s');
        $(page).css('transform', 'translateY(' + (100) + '%) scale(' + (0.8 - index * 0.05) + ', 1)');
    }
}


function activateStackPageClickListeners() {
    var pageList = data.page_stack;
    for (var index = 0; index < pageList.length; index++) {
        var page = pageList[index];
        $(page).on('click', {
            page: pageList[index]
        }, onStackPageSelected);
    }
}


function deactivateStackPageClickListeners() {
    var pageList = data.page_stack;
    for (var index = 0; index < pageList.length; index++) {
        var page = pageList[index];
        $(page).off('click',onStackPageSelected);
    }
}

function openPage(event, id) {
    event.data = {
        page: $(id)[0]
    };
    onStackPageSelected(event);
}


// set the data.current object to the new values and call the close menu function
function onStackPageSelected(event) {
    var pageList = data.page_stack.splice(data.page_stack.index(event.data.page), 1);
    data.page_stack.splice(0, 0, pageList[0]);
    closeMenu();
}

// home intro random color
function setRandomColors() {
    $('p.home-intro').css('color', getRandomDarkColor());
}

// set a random quotation
function setQuotation() {
    if ($(window).width() > 720) {
        $('p#quotation').html(data.quotations[getRandomInt(0, data.quotations.length)])
            .css('color', getRandomDarkColor());
    }
}

function getRandomDarkColor() {
    return data.colors[getRandomInt(0, data.colors.length)];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function openSubWindow() {

}


function closeSubWindow() {
    $('#sub-window').remove();
}
