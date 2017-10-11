// var JSON = {
//     "menu": [{"id":28,"title":"Home","customSelect":"index.html","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0},"custom-select":"index.html","select2-scroll-position":{"x":0,"y":0}},{"id":29,"title":"New Products","customSelect":"product-listing.html","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0},"custom-select":"product-listing.html"},{"title":"Laptops","customSelect":"select something...","id":4,"custom-select":"select something...","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0},"select2-scroll-position":{"x":0,"y":0},"children":[{"id":26,"title":"DSLR's","customSelect":"1","__domenu_params":{},"custom-select":"1","children":[{"id":27,"title":"Semi SLR's","customSelect":"1","__domenu_params":{},"custom-select":"1","children":[{"id":9,"title":"Refurbished Deals","customSelect":"refurbished","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0},"custom-select":"refurbished","children":[{"id":16,"title":"Digital Cameras","customSelect":"2","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0},"custom-select":"2"},{"title":"Mobile Phones","customSelect":"Mobiles","id":3,"custom-select":"Mobiles","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0},"select2-scroll-position":{"x":0,"y":0}}]}]}]}]},{"title":"Deals","customSelect":"#","select2ScrollPosition":{"x":0,"y":0},"id":1,"custom-select":"#","__domenu_params":{},"select2-scroll-position":{"x":0,"y":0},"children":[{"title":"Fashion","customSelect":"fashion","id":5,"custom-select":"fashion","__domenu_params":{},"children":[{"title":"Mens","customSelect":"select something...","id":8,"custom-select":"select something...","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0},"children":[{"id":23,"title":"Apparels","customSelect":"1","__domenu_params":{},"custom-select":"1"},{"id":24,"title":"Latest Trends","customSelect":"1","__domenu_params":{},"custom-select":"1"}]},{"title":"Womens","customSelect":"select something...","id":7,"custom-select":"select something...","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0},"select2-scroll-position":{"x":0,"y":0},"children":[{"id":25,"title":"Best Sellers","customSelect":"2","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0},"custom-select":"2"}]},{"id":10,"title":"Kids","customSelect":"1","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0},"custom-select":"1"}],"select2ScrollPosition":{"x":0,"y":0},"select2-scroll-position":{"x":0,"y":0}}]},{"id":11,"title":"Home & Living","customSelect":"1","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0},"custom-select":"1","select2-scroll-position":{"x":0,"y":0},"children":[{"id":12,"title":"Home Decor","customSelect":"decor","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0},"custom-select":"decor","children":[{"id":13,"title":"Furniture","customSelect":"furniture","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0},"custom-select":"furniture"}]},{"id":14,"title":"Kitchen","customSelect":"kitchen","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0},"custom-select":"kitchen"}]},{"id":15,"title":"Cameras","customSelect":"cameras","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0},"custom-select":"cameras","select2-scroll-position":{"x":0,"y":0},"children":[{"id":17,"title":"Lenses","customSelect":"1","__domenu_params":{},"custom-select":"1"},{"id":18,"title":"Photo Frames","customSelect":"1","__domenu_params":{},"custom-select":"1"}]},{"id":19,"title":"Health & beauty","customSelect":"1","__domenu_params":{},"custom-select":"1","children":[{"id":20,"title":"Mens","customSelect":"1","__domenu_params":{},"custom-select":"1"},{"id":21,"title":"Womens","customSelect":"1","__domenu_params":{},"custom-select":"1"}]},{"id":22,"title":"Electronics","customSelect":"electronics","__domenu_params":{},"select2ScrollPosition":{"x":0,"y":0},"custom-select":"electronics","select2-scroll-position":{"x":0,"y":0}}]};

var JSON;

var jsonUrl = 'http://localhost:3031/dirlisting/0?path=/home/software/AllProjects/FlowzServiceApi/projects/product-listing/assets/menu.json';




    $.ajax({
        type: 'GET',
        url: jsonUrl,
        async: true,
        dataType: 'json',
        success: function(data) {
            // console.log(data);
            JSON = {"menu": JSON.parse(data) };
            // console.log(JSON.stringifi(JSON));
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
      if(elem.children != undefined){
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