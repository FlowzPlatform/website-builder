var JSON;
var menuJsonName = '../assets/' + $('navmenu').attr('menuId') + '.json';

$.ajax({
    type: 'GET',
    url: menuJsonName,
    async: true,
    dataType: 'json',
    success: function(data) {
        JSON = {
            "menu": data
        };
    }
});

function makeUL(lst, topLevelUl, rootLvl) {
    var html = [];
    if (topLevelUl) {
        html.push('<ul class="nav navbar-nav" id="menu">');
        topLevelUl = false;
    } else {
        html.push('<ul class="dropdown-menu" role="menu">');
    }

    $(lst).each(function() {
        html.push(makeLI(this, topLevelUl, rootLvl))
    });
    html.push('</ul>');
    rootLvl = true;
    return html.join("\n");
}

function makeLI(elem, topLevelUl, rootLvl) {
    var html = [];
    if (elem.children && !rootLvl) {
        html.push('<li>');
    } else {
        html.push('<li>');
        rootLvl = false;
    }
    if (elem.title) {
        if (elem.children != undefined) {
            html.push('<a class="dropdown-toggle" data-toggle="dropdown" href="' + elem.customSelect + '">' + elem.title + ' <b class="caret"></b></a>');
        } else {
            html.push('<a href="' + elem.customSelect + '">' + elem.title + ' </a>');
        }
    }

    if (elem.children) {
        html.push(makeUL(elem.children, topLevelUl, rootLvl));
    }
    html.push('</li>');
    return html.join("\n");
}

$(function() {
    var topLevelUl = true;
    $("#navigationDiv").html(makeUL(JSON.menu, topLevelUl, true));

});

$(document).ready(function() {
    $('.navbar a.dropdown-toggle').on('click', function(e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        if(!$parent.parent().hasClass('nav')) {
            $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
        }

        $('.nav li.open').not($(this).parents("li")).removeClass("open");

        return false;
    });
});