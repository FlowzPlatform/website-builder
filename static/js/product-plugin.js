// Change baseURL when going live
const baseURL = 'http://localhost:3032';
// const baseURL = 'http://api.flowz.com/serverapi';

grapesjs.plugins.add('product-plugin', function(editor, options) {
  var bm = editor.BlockManager;

  // bm.add('scriptingTag', {
  //     label: 'Scriptiing',
  //     category: 'Scripting',
  //     content: {
  //         script : 'alert("Hi")',
  //         content : '<a href="" class="addoCart" >Add to cart</a>'
  //     },
  //     attributes: {
  //         class: 'gjs-fonts gjs-f-hero'
  //     }
  // });

  bm.add('g-form-template', {
    label: 'Form Full',
    content: '<div class="g-form"> <div class="g-form-panel"> <label>name</label> <input type="text" name="name"/> <label>age</label> <input type="text" name="age"/> <label>address</label> <div attr-id="address" style="padding: 15px;"> <div class="g-form"> <div class="g-form-panel"> <label>Add 1</label> <input type="text" name="add1"/> <label> city </label> <div attr-id="cities" style="padding: 15px;"> <div class="g-form"> <div class="g-form-panel"> <label>city test</label> <input type="text" name="city"/> <button onclick="handleDelete(event)">Delete</button> </div><div class="g-form-group-button"> <button onclick="handleAdd(event)">Add</button> </div></div></div><button onclick="handleDelete(event)">Delete</button> </div><div class="g-form-group-button"> <button onclick="handleAdd(event)">Add</button> </div></div></div></div><div class="g-form-group-button"> <button onclick="handleAdd(event)">Add</button> </div></div>',
    attributes: {
      class: 'fa fa-html5',
      title: 'G-Form Full'
    },
    category: 'Custom Form Controls'
  });

  bm.add('g-form', {
    label: 'G-Form',
    content: '<gform class="g-form" style="display: block; padding: 10px;"></gform>',
    attributes: {
      class: 'fa fa-html5',
      title: 'G-Form'
    },
    category: 'Custom Form Controls'
  });

  bm.add('gformpanel', {
    label: 'G-Form Panel',
    content: '<gformpanel class="g-form-panel" style="display: block; padding: 5px;"><form class="form"><div class="form-group" style="display: block; padding: 20px; margin: 5px"></div></form></gformpanel>',
    attributes: {
      class: 'fa fa-html5',
      title: 'G-Form Panel'
    },
    category: 'Custom Form Controls'
  });

  bm.add('g-form-add-btn', {
    label: 'G-Form Add Button',
    content: '<div class="g-form-group-button"> <button type="button" onclick="handleAdd(event)">Add</button> </div>',
    attributes: {
      class: 'fa fa-html5',
      title: 'G-Form Add Button'
    },
    category: 'Custom Form Controls'
  });

  bm.add('g-form-delete-btn', {
    label: 'G-Form Delete Button',
    content: '<div class="g-form-group-button"> <button type="button" onclick="handleDelete(event)">Delete</button> </div>',
    attributes: {
      class: 'fa fa-html5',
      title: 'G-Form Delete Button'
    },
    category: 'Custom Form Controls'
  });

  bm.add('formpartial', {
    label: 'G-Form-Partial',
    content: '<formpartial style="display: block; padding: 10px; min-height: 20px;"></formpartial>',
    attributes: {
      class: 'fa fa-html5',
      title: 'G-Form-Partial'
    },
    category: 'Custom Form Controls'
  });


  // Sections
  bm.add('hero', {
    label: 'Hero section',
    category: 'Section',
    content: '<header class="header-banner"> <div class="container-width">' +
      '<div class="logo-container"><div class="logo">Flowz</div></div>' +
      '<nav class="navbar">' +
      '<div class="menu-item">BUILDER</div><div class="menu-item">TEMPLATE</div><div class="menu-item">WEB</div>' +
      '</nav><div class="clearfix"></div>' +
      '<div class="lead-title">Build your templates without coding</div>' +
      '<div class="lead-btn">Try it now</div></div></header>',
    attributes: {
      class: 'gjs-fonts gjs-f-hero'
    }
  });

  bm.add('h1p', {
    label: 'Text section',
    category: 'Section',
    content: `<div>
    <h1 class="heading">Insert title here</h1>
    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    </div>`,
    attributes: {
      class: 'gjs-fonts gjs-f-h1p'
    }
  });

  bm.add('3ba', {
    label: 'Badges',
    category: 'Section',
    content: '<div class="badges">' +
      '<div class="badge">' +
      '<div class="badge-header"></div>' +
      '<img class="badge-avatar" src="https://api.adorable.io/avatars/100/kavi@officebrain.png">' +
      '<div class="badge-body">' +
      '<div class="badge-name">Adam Smith</div><div class="badge-role">CEO</div><div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div>' +
      '</div>' +
      '<div class="badge-foot"><span class="badge-link">f</span><span class="badge-link">t</span><span class="badge-link">ln</span></div>' +
      '</div>' +
      '<div class="badge">' +
      '<div class="badge-header"></div>' +
      '<img class="badge-avatar" src="https://api.adorable.io/avatars/100/faizan@officebrain.png">' +
      '<div class="badge-body">' +
      '<div class="badge-name">John Black</div><div class="badge-role">Software Engineer</div><div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div>' +
      '</div>' +
      '<div class="badge-foot"><span class="badge-link">f</span><span class="badge-link">t</span><span class="badge-link">ln</span></div>' +
      '</div>' +
      '<div class="badge">' +
      '<div class="badge-header"></div>' +
      '<img class="badge-avatar" src="https://api.adorable.io/avatars/100/john@officebrain.png">' +
      '<div class="badge-body">' +
      '<div class="badge-name">Jessica White</div><div class="badge-role">Web Designer</div><div class="badge-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</div>' +
      '</div>' +
      '<div class="badge-foot"><span class="badge-link">f</span><span class="badge-link">t</span><span class="badge-link">ln</span>' +
      '</div>' +
      '</div></div>',
    attributes: {
      class: 'gjs-fonts gjs-f-3ba'
    }
  });

  bm.add('hero', {
    label: 'Hero section',
    category: 'Section',
    content: '<header class="header-banner"> <div class="container-width">' +
      '<div class="logo-container"><div class="logo">Flowz</div></div>' +
      '<nav class="navbar">' +
      '<div class="menu-item">BUILDER</div><div class="menu-item">TEMPLATE</div><div class="menu-item">WEB</div>' +
      '</nav><div class="clearfix"></div>' +
      '<div class="lead-title">Build your templates without coding</div>' +
      '<div class="lead-btn">Try it now</div></div></header>',
    attributes: {
      class: 'gjs-fonts gjs-f-hero'
    }
  });


  bm.add('productContents', {
    label: 'Product Content',
    content: '<style type="text/css">*{box-sizing: border-box;}body{margin: 0;}#c3963{padding:0px; margin-top:0px; margin-right:0px; margin-left:0px; text-rendering:optimizeLegibility; font-weight:400; color:rgb(17, 17, 17); font-family:Arial, sans-serif; margin-bottom:0px !important; font-size:21px !important; line-height:1.3 !important;}#c3997{color:rgb(0, 0, 0); font-family:Arial, sans-serif; font-size:small;}#c4025{padding:0px 0px 4px; margin:0px 0px 0.75em; text-rendering:optimizeLegibility; font-size:12px; line-height:1.255; color:rgb(204, 102, 0); font-family:verdana, arial, helvetica, sans-serif;}.container-width{width:90%; max-width:1150px; margin-top:0px; margin-right:auto; margin-bottom:0px; margin-left:auto;}.flex-sect{background-color:rgb(250, 250, 250); padding-top:100px; padding-right:0px; padding-bottom:100px; padding-left:0px; font-family:Helvetica, serif;}.flex-title{margin-bottom:15px; font-size:2em; text-align:center; font-weight:700; color:rgb(85, 85, 85); padding-top:5px; padding-right:5px; padding-bottom:5px; padding-left:5px;}.cards{padding-top:20px; padding-right:0px; padding-bottom:20px; padding-left:0px; display:flex; justify-content:space-around; flex-direction:initial; flex-wrap:wrap;}.card{background-color:white; height:300px; width:300px; margin-bottom:30px; box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 2px 0px; border-top-left-radius:2px; border-top-right-radius:2px; border-bottom-right-radius:2px; border-bottom-left-radius:2px; transition-duration:0.5s; transition-timing-function:ease; transition-delay:initial; transition-property:all; font-weight:100; overflow-x:hidden; overflow-y:hidden;}.card:hover{margin-top:-5px; box-shadow:rgba(0, 0, 0, 0.2) 0px 20px 30px 0px;}.card-header{height:155px; background-image:url("http://placehold.it/350x250/78c5d6/fff/image1.jpg"); background-size:cover; background-position-x:center; background-position-y:center;}.card-header.ch2{background-image:url("http://placehold.it/350x250/459ba8/fff/image2.jpg");}.card-header.ch3{background-image:url("http://placehold.it/350x250/79c267/fff/image3.jpg");}.card-header.ch4{background-image:url("http://placehold.it/350x250/c5d647/fff/image4.jpg");}.card-header.ch5{background-image:url("http://placehold.it/350x250/f28c33/fff/image5.jpg");}.card-header.ch6{background-image:url("http://placehold.it/350x250/e868a2/fff/image6.jpg");}.card-body{padding-top:15px; padding-right:15px; padding-bottom:5px; padding-left:15px; color:rgb(85, 85, 85);}.card-title{font-size:1.4em; margin-bottom:5px;}.card-sub-title{color:rgb(179, 179, 179); font-size:1em; margin-bottom:15px;}.card-desc{font-size:0.85rem; line-height:17px;}.am-sect{padding-top:100px; padding-bottom:100px; font-family:Helvetica, serif;}.img-phone{float:left;}.am-container{display:flex; flex-wrap:wrap; align-items:center; justify-content:space-around;}.am-content{float:left; padding-top:7px; padding-right:7px; padding-bottom:7px; padding-left:7px; width:490px; color:rgb(68, 68, 68); font-weight:100; margin-top:50px;}.am-pre{padding-top:7px; padding-right:7px; padding-bottom:7px; padding-left:7px; color:rgb(177, 177, 177); font-size:15px;}.am-title{padding-top:7px; padding-right:7px; padding-bottom:7px; padding-left:7px; font-size:25px; font-weight:400;}.am-desc{padding-top:7px; padding-right:7px; padding-bottom:7px; padding-left:7px; font-size:17px; line-height:25px;}.am-post{padding-top:7px; padding-right:7px; padding-bottom:7px; padding-left:7px; line-height:25px; font-size:13px;}</style>' +
      '<productContents><section class="flex-sect"> <div class="container-width"> <div class="flex-title">Our Top Grossing Products </div><div class="cards"> <div class="card"> <div class="card-header"> </div><div class="card-body"> <div class="card-title">Title one </div><div class="card-sub-title">Subtitle one </div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div></div></div><div class="card"> <div class="card-header ch2"> </div><div class="card-body"> <div class="card-title">Title two </div><div class="card-sub-title">Subtitle two </div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div></div></div><div class="card"> <div class="card-header ch3"> </div><div class="card-body"> <div class="card-title">Title three </div><div class="card-sub-title">Subtitle three </div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div></div></div><div class="card"> <div class="card-header ch4"> </div><div class="card-body"> <div class="card-title">Title four </div><div class="card-sub-title">Subtitle four </div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div></div></div><div class="card"> <div class="card-header ch5"> </div><div class="card-body"> <div class="card-title">Title five </div><div class="card-sub-title">Subtitle five </div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div></div></div><div class="card"> <div class="card-header ch6"> </div><div class="card-body"> <div class="card-title">Title six </div><div class="card-sub-title">Subtitle six </div><div class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div></div></div></div></div></section><section class="am-sect"> <div class="container-width"> <div class="am-container"> <img class="img-phone" src="http://grapesjs.com/img/phone-app.png"/> <div class="am-content"> <div class="am-pre">BEST PRODUCT OF ALL TIME </div><div class="am-title"> <h1 class="a-size-large a-spacing-none" id="c3963" id="title">Apple iPhone 6s with Free Vodafone RED Plan (Gold, 16GB) </h1> </div><div class="am-desc"> <span id="c3997" >iPhone 6s - Take everything that made the previous generation great, and advance it to a new level. They’re made with 7000 Series aluminium, the strongest alloy we’ve ever used in an iPhone. They both feature Retina HD displays made from the strongest cover glass used on any smartphone in the world. And now they’re available in an elegant new rose gold ﬁnish.</span> </div><div class="am-post"> <h4 id="c4025" >A breakthrough design. Pushed even further. </h4> </div></div></div></div></section></productContents>',
    attributes: {
      class: 'fa fa-file-o',
      title: 'Content Block'
    },
    category: 'Extra'
  });

  // Copyright
  bm.add('Copyright', {
    label: 'Copyright',
    content: '<style type="text/css">.footerCopyright{background-color:#292929; color:#fff; text-align:center; min-height:25px;padding:5px;}</style><div class="footerCopyright"><p>©2017 <a href="#">Flowz</a> | All rights reserved.</p></div>',
    attributes: {
      class: 'fa fa-copyright',
      title: 'Copyright'
    },
    category: 'Extra'
  });
  // Subscribe
  bm.add('Subscribe', {
    label: 'Subscribe',
    content: '<p class="newsletter">Sign up and Save!</p><input type="email" value="" name="EMAIL" class="required email" id="" aria-required="true"><input type="submit" value="Subscribe" name="subscribe" id="" class="btn btn-default">',
    attributes: {
      class: 'fa fa-rss',
      title: 'Subscribe'
    },
    category: 'Extra'
  });

  // Social Media icons designed by gaurav
  bm.add('socialmedia', {
    label: 'Social Medai Icons',
    content: '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"><style>/*=========================Icons=================*//* footer social icons */ul.social-network{list-style: none;display: inline;margin-left:0 !important;padding: 0;}ul.social-network li{display: inline;margin: 0 5px;}/* footer social icons */.social-network a.icoRss:hover{background-color: #F56505;}.social-network a.icoFacebook:hover{background-color:#3B5998;}.social-network a.icoTwitter:hover{background-color:#33ccff;}.social-network a.icoGoogle:hover{background-color:#BD3518;}.social-network a.icoVimeo:hover{background-color:#0590B8;}.social-network a.icoLinkedin:hover{background-color:#007bb7;}.social-network a.icoRss:hover i, .social-network a.icoFacebook:hover i, .social-network a.icoTwitter:hover i,.social-network a.icoGoogle:hover i, .social-network a.icoVimeo:hover i, .social-network a.icoLinkedin:hover i{color:#fff;}a.socialIcon:hover, .socialHoverClass{color:#44BCDD;}.social-circle li a{display:inline-block;position:relative;margin:0 auto 0 auto;-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;text-align:center;width: 50px;height: 50px;font-size:20px;}.social-circle li i{margin:0;line-height:50px;text-align: center;}.social-circle li a:hover i, .triggeredHover{-moz-transform: rotate(360deg);-webkit-transform: rotate(360deg);-ms--transform: rotate(360deg);transform: rotate(360deg);-webkit-transition: all 0.2s;-moz-transition: all 0.2s;-o-transition: all 0.2s;-ms-transition: all 0.2s;transition: all 0.2s;}.social-circle i{color: #fff;-webkit-transition: all 0.8s;-moz-transition: all 0.8s;-o-transition: all 0.8s;-ms-transition: all 0.8s;transition: all 0.8s;}a{background-color: #D3D3D3;}</style><div class="col-md-12"><ul class="social-network social-circle"> <li><a href="#" class="icoRss" title="Rss"><i class="fa fa-rss"></i></a></li><li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li><li><a href="#" class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i></a></li><li><a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a></li><li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li></ul></div>',
    attributes: {
      class: 'fa fa-facebook',
      title: 'socialmedia'
    },
    category: 'Extra'
  });

  // Image Animation Page Layout
  bm.add('imageanimation', {
    label: 'imageanimation',
    content: '<imageanimation style="display: block; width:100%; min-height:25px; padding: 5px"><title>Animated Background Gradient</title> <style type="text/css"> body{padding: 0px; margin: 0px;}#gradient{width: 40%; height: 500px; padding: 0px; margin: 0px;}.hero-image{position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; z-index: 2; opacity: 0.5;background-position: 50% 50%; background-repeat: no-repeat;}img{width: 40%; height: 500px;}</style> <img class="hero-image" src="https://wallpapershome.com/images/wallpapers/polygon-2560x1600-4k-hd-wallpaper-orange-red-blue-background-pattern-225.jpg"> <div id="gradient"/></imageanimation>',
    attributes: {
      class: 'fa fa-home',
      title: 'imageanimation'
    },
    category: 'Extra'
  });

  // Dynamic navigation menu from JSON created from menu builder
  bm.add('navimenu', {
    label: 'Navbar Menu',
    content: '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">' +
      '<navimenu style="padding: 10px; display: block; min-height: 75px;"><div class="navbar navbar-default" role="navigation"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div><div class="collapse navbar-collapse" id="navigationDiv"><ul class="nav navbar-nav"><li class="active"><a href="#" target="_blank">Home</a></li></ul></li></ul></div></div></div></navimenu>',
    attributes: {
      class: 'fa fa-bars',
      title: 'Navigation Menu'
    },
    category: 'Ecommerce Blocks'
  });

  // Lisiting Page sidebar filters
  bm.add('filters', {
    label: 'Product Filters',
    content: '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"><style type="text/css">.filters{background-color: #fafafa;padding: 20px;}.panel-group{border: 1px solid #eee;}.filter-heading{border-radius: 0;box-shadow: none;background-color: #fff !important;}.filter-heading:hover{background-color: #f5f5f5 !important;}.filter-heading a:hover, .filter-heading a:focus, .filter-heading a:active{text-decoration: none;}.panel-default{border-color: transparent;}.list-group-item{border: none;}.panel-body{padding: 0;}.colors-list{list-style: none;padding: 20px;margin-left: 0;}.color-link:hover{text-decoration: none !important;}.colors-list li{display: inline;}span.color{min-width: 25px;min-height: 25px;padding: 10px 15px;border: 1px solid #aaa;margin: 5px;}.color.green{background-color: #00FF00;}.color.redd{background-color: #ff0000;}.color.blue{background-color: #0000ff;}.color.teal{background-color: #232F3E;}.color.orange{background-color: orange;}.color.purple{background-color: purple;}.list-group-item{padding-top: 1px;}</style>' +
      '<div class="filters"><div class="categories-filter"><div class="panel-group" id="accordion"> <div class="panel panel-default"> <div class="panel-heading filter-heading"> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse1"> Categories<span class="pull-right">+</span></a> </h4> </div><div id="collapse1" class="panel-collapse collapse"> <div class="panel-body"> <div class="list-group"> <a href="#" class="list-group-item"> <div class="checkbox"> <label><input type="checkbox" value="">All Categories</label></div></a> <a href="#" class="list-group-item"> <div class="checkbox"> <label><input type="checkbox" value="">Bags</label></div></a> <a href="#" class="list-group-item"> <div class="checkbox"> <label><input type="checkbox" value="">Pens</label></div></a> <a href="#" class="list-group-item"> <div class="checkbox"> <label><input type="checkbox" value="">Pens</label></div></a></div></div></div></div></div></div><div class="categories-filter"><div class="panel-group" id="accordion"> <div class="panel panel-default"> <div class="panel-heading filter-heading"> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse2"> Price Range<span class="pull-right">+</span></a> </h4> </div><div id="collapse2" class="panel-collapse collapse"> <div class="panel-body"> <div class="list-group"> <a href="#" class="list-group-item"> <div class="checkbox"> <label><input type="checkbox" value="">$0 - $100</label></div></a> <a href="#" class="list-group-item"> <div class="checkbox"> <label><input type="checkbox" value="">$100 - $500</label></div></a> <a href="#" class="list-group-item"> <div class="checkbox"> <label><input type="checkbox" value="">$500 +</label></div></a></div></div></div></div></div></div><div class="categories-filter"><div class="panel-group" id="accordion"> <div class="panel panel-default"> <div class="panel-heading filter-heading"> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse3"> Color<span class="pull-right">+</span></a> </h4> </div><div id="collapse3" class="panel-collapse collapse"> <div class="panel-body"> <ul class="colors-list"> <li><a href="#" class="color-link"><span class="color green"></span></a></li><li><a href="#" class="color-link"><span class="color redd"></span></a></li><li><a href="#" class="color-link"><span class="color blue"></span></a></li><li><a href="#" class="color-link"><span class="color teal"></span></a></li><li><a href="#" class="color-link"><span class="color orange"></span></a></li><li><a href="#" class="color-link"><span class="color purple"></span></a></li></ul> </div></div></div></div></div></div>',
    attributes: {
      class: 'fa fa-filter',
      title: 'Product Filters'
    },
    category: 'Ecommerce Blocks'
  });

  // Custom droppable block of product listing
  bm.add('productListing', {
    label: 'Product Listing',
    content: '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"><script src="https://code.jquery.com/jquery-3.2.1.js" ></script>' +
      '<style type="text/css">.product-card{max-width:23%;font-size:12px;margin:5px;display:inline-block;box-shadow:2px 2px 15px #999}.product-card>a{background:#f2f2f2;color:#333;transition:all .1s;position:relative;display:block;z-index:0;padding-bottom:5px;text-decoration:none}.product-card>a:hover{text-decoration:none;box-shadow:0 1px 3px rgba(0,0,0,.3)}.product-card-title{min-height:70px;font-size:21px}.product-description{min-height:70px;max-height:70px;overflow-y:auto}.product-card-img{display:block;height:250px;width:100%}.product-card figcaption{display:block;padding:0 10px}.product-card .product-card-address{color:#888;line-height:1.2}.product-card .product-card-address i{font-size:14px;margin-right:2px;line-height:1.2}.product-card .product-card-price{display:block;text-align:right}.product-card .product-card-price .original-price,.product-card .product-card-price .price-savings{line-height:22px;display:inline-block;vertical-align:middle}.product-card .product-card-price .price-savings{float:left;color:#82b548}.product-card .product-card-price .original-price{color:#aaa;font-size:14px}.product-card .product-card-price .amount-price{text-align:right;font-size:20px;color:#82b548}.product-card .product-card-price .from{font-size:12px}.product_price span,.product_title h5{font-size:1.1em;line-height:1}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:"Open Sans",Arial,sans-serif}img{max-width:100%;height:auto}ul.product_list{list-style-type:none;margin:0;padding:0;width:100%;display:inline}.product_grid{text-decoration:none;display:inline}.product_item{display:inline-block;background:#fff;border:1px solid #ccc;padding:10px;position:relative;overflow:hidden}.product_sale{position:absolute;z-index:2;right:-28px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);transform:rotate(45deg)}.product_image{position:relative;overflow:hidden}.product_image img{display:block;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.info,.product{position:relative}.product_image img:hover{-o-transform:scale(1.2,1.2);-moz-transform:scale(1.2,1.2);-webkit-transform:scale(1.2,1.2);-ms-transform:scale(1.2,1.2);transform:scale(1.2,1.2)}.product_title{float:left;width:100%;text-transform:uppercase}.product_title h5{margin:auto;font-weight:500;padding-bottom:5px}.product_price a{color:#000}.price_old{color:#ea2e49;text-decoration:line-through}.product_desc p{margin:0;line-height:1.3;padding:10px 0}.product_rating{float:right;width:100px;height:20px;overflow:hidden;background:url(https://bit.ly/1B4PjyM) 0 76% no-repeat}.product_buttons{-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;font-smoothing:antialiased}.product_buttons .product_heart:hover{color:#DF0404;background:rgba(255,255,255,.5)}.product_buttons .product_compare:hover{color:#129612;background:rgba(255,255,255,.5)}.product_buttons .add_to_cart:hover{color:#4DC8D3;background:rgba(255,255,255,.5)}@media only screen and (min-width:320px){.product_sale p{margin:0;color:#fff;background:red;padding:3px 25px;box-shadow:0 2px 8px 0 rgba(0,0,0,.4)}.product_values{float:left;width:calc(100% - 100px);padding:0 10px}.product_rating{margin-right:10px}.product_image{height:150px;float:left;width:100px}.product_image .product_buttons{display:none}.product_desc{overflow:hidden;auto:left;line-height:1}.product_values .product_buttons{position:relative;text-align:left;float:left;margin-top:7px}.product_values .product_buttons button{color:#252525;background:rgba(255,255,255,1);font-size:1em;border-radius:50%;width:40px;height:40px;border:1px solid #000}}@media only screen and (min-width:480px){.product_image{height:250px;width:175px}.product_values{width:calc(100% - 175px)}}@media only screen and (min-width:678px){.product_item{width:49.5%}.product_image{height:150px;width:100px}.product_values{width:calc(100% - 100px)}}@media only screen and (min-width:992px){.product_image{height:250px;width:175px}.product_values{width:calc(100% - 175px)}.product_desc{max-height:200px}}@media only screen and (min-width:1200px){.product_item{width:33%}.product_desc{max-height:131px}}@media only screen and (max-width:992px){.product_desc{max-height:67px}}@media only screen and (max-width:480px){.product_title h5{font-weight:700}}@media only screen and (max-width:320px){.product_buttons,.product_desc,.product_sale{display:none}.product_image img{position:relative}.product_price span{float:left;width:100%}}.listing{list-style:none;margin:20px;padding:0;display:inline-block}.product{width:240px}.img-wrapper,.info{width:100%;text-align:center}.product a{text-decoration:none}.img-wrapper{display:block;height:240px;border:1px solid #afafaf;border-bottom:0;overflow:hidden}.info{background:#000;color:#fff;padding:40px 10px 20px;vertical-align:middle;transform:translateZ(0);box-shadow:0 0 1px transparent;backface-visibility:hidden;transition-property:color,height;transition-duration:.3s,.4s;transition-timing-function:ease-out;height:83px}.info:after,.info:before,.note,.price{position:absolute}.info:before{content:"";z-index:-1;top:0;bottom:0;left:0;right:0;background:#fff;transform:scaleY(0);transform-origin:50%;transition:transform .3s ease-out}.info:after{visibility:hidden;pointer-events:none;z-index:-1;content:"";border-style:solid;transition-duration:.3s;transition-property:transform;left:calc(50% - 11px);bottom:0;border-width:10px 10px 0;border-color:#000 transparent transparent}.product:hover .info{height:40px}.product:hover .info:before{transform:scaleY(.7)}.product:hover .info:after{visibility:visible;transform:translateY(10px)}.slide-title{transition:transform .3s ease-out}.slide-title a{color:inherit}.product:hover .slide-title{transform:translateY(-18px);font-weight:700;color:#000}.price{background:#e32d2c;font-size:1.3em;padding:4px 13px;top:-15px;right:10px}.note.on-sale,.price.sale{background:#00ba2f}.price.old{font-size:.95em;padding:4px 6px;text-decoration:line-through;top:-43px}.actions-wrapper{margin-top:14px;display:flex;justify-content:space-around}.actions-wrapper *{width:50%;padding:2px 0;text-align:center;color:#191919;font-size:.95em;font-weight:700}.actions-wrapper :before{font-family:FontAwesome;margin-right:8px}.wishlist{border-right:1px solid #afafaf}.wishlist:hover{color:#e32d2c}.cart:hover{color:#0a75b9}.product:hover .actions-wrapper *{visibility:visible}.note{top:0;left:0;padding:4px 8px;font-size:.9em}.note.on-sale{color:#fff}.note.no-stock{background:#191919;color:#fff}</style>' +
      '<productListing style="display: block; width: 100%;"><figure class="product-card portrait placeholderCard"> <img class="product-card-img" src="http://placehold.it/400x300"/> <figcaption> <h3 class="product-card-title">Product Title</h3> <div class="product-description">Product Description</div><p class="product-card-address"> <i class="fa fa-map-marker"></i> US</p><div class="product-card-price"> <span class="price-savings">Save 25%</span> <s class="original-price">$ 10.99</s> <p class="amount-price"> <span class="from">starting at</span> $ 10.99<!-- <span class="from">/night</span>--> </p></div><button class="btn btn-info btn-block" style="margin-bottom: 10px" id="addToCartBtn">Add To Cart</button></figcaption></figure>' +
      '<div class="product_grid landscape" style="visibility: hidden;"> <ul class="product_list list"> <li class="product_item"> <div class="product_sale"> <p>On Sale</p></div><div class="product_image"> <a href="#"><img src="http://placehold.it/400x300" alt="Product images"></a> <div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> <div class="quick_view"> <a href="#"> <h6>Quick View</h6> </a> </div></div></div><div class="product_values"> <div class="product_title"> <h5>Product Title</h5> </div><div class="product_price"> <a href="#"><span class="price_old">$79.99</span> <span class="price_new">$11.11</span></a> <span class="product_rating"></span> </div><div class="product_desc"> <p class="truncate">Product Descriptions</p></div><div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> </div></div></li></ul> </div>' +
      '<div class="listing creative" style="visibility: hidden"> <!DOCTYPE html><div> <link rel=\'stylesheet prefetch\' href=\'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\'> <style type="text/css"> @import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css); .wrp-product-2{color: #000000; font-size: 16px; margin: 20px;}.wrp-product-2:hover{box-shadow: 0px 10px 25px -2px rgba(0,0,0,0.36); transition: 0.2s all linear;}.wrp-product-2 *{-webkit-box-sizing: border-box; box-sizing: border-box; -webkit-transition: all 0.3s ease-out; transition: all 0.3s ease-out;}.wrp-product-2 img{max-width: 100%; vertical-align: top; position: relative;}.wrp-product-2 .add-to-cart{position: absolute; top: 0; padding-right: 10px; color: #ffffff; font-weight: 700; text-transform: uppercase; font-size: 0.9em; opacity: 0; background-color: #409ad5; -webkit-transform: rotateX(-90deg); transform: rotateX(-90deg); -webkit-transform-origin: 100% 0; -ms-transform-origin: 100% 0; transform-origin: 100% 0; padding: 5px}.wrp-product-2 .add-to-cart i{display: inline-block; margin-right: 10px; width: 40px; line-height: 40px; text-align: center; background-color: #164666; color: #ffffff; font-size: 1.4em;}.wrp-product-2 .wrp-row{padding: 20px; background-color: #eee;}.wrp-product-2 h3, .wrp-product-2 p{margin: 0;}.wrp-product-2 h3{font-size: 1.5em; font-weight: 700; margin-bottom: 10px; text-transform: uppercase;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}.wrp-product-2 p{font-size: 0.9em; letter-spacing: 1px; font-weight: 400;}.wrp-product-2 .price{font-weight: 500; font-size: 1.5em; line-height: 48px; letter-spacing: 1px;}.wrp-product-2 .price s{margin-right: 5px; opacity: 0.5; font-size: 0.9em;}.wrp-product-2 a{position: absolute; top: 0; bottom: 0; left: 0; right: 0;}.wrp-product-2:hover .add-to-cart{opacity: 1; -webkit-transform: rotateX(0deg); transform: rotateX(0deg);}.wrp-product-2:hover .add-to-cart i{background-color: #2980b9;} .descriptionText{max-height: 70px;overflow-y: auto;}</style> <div class=""> <div class=""> <div class="col-md-3"> <div class="wrp-product-2"> <img src="http://cdn2-www.craveonline.com/assets/uploads/2015/01/Watch-business-man.png" alt="Lorem Ipsum"/> <div class="add-to-cart"><i class="ion-android-add"></i><span>Add to Cart</span></div><div class="wrp-row"> <h3>Pudol Doux</h3> <p>A small description of the product goes here.</p><div class="price"> <s>$24.00</s>$19.00 </div><p><small>Special Offer: <b>10% off</b></small></p></div><a href="#"></a> </div></div></div></div></div></productListing>',
    attributes: {
      class: 'fa fa-tags',
      title: 'Product Block'
    },
    category: 'Ecommerce Blocks'
  });


  // Product Detail
  bm.add('productDetail', {
    label: 'Detail Page',
    content: '<style type="text/css">.blk-row{margin-top: 0;}.details,.preview{-webkit-box-orient:vertical;-webkit-box-direction:normal}.add-to-cart,.colors,.like,.price,.product-title,.sizes{text-transform:UPPERCASE;font-weight:700}body{font-family:\'open sans\';overflow-x:hidden}img{max-width:100%}.preview{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}@media screen and (max-width:996px){.preview{margin-bottom:20px}}.preview-pic{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.preview-thumbnail.nav-tabs{border:none;margin-top:15px}.preview-thumbnail.nav-tabs li{width:18%;margin-right:2.5%}.preview-thumbnail.nav-tabs li img{max-width:100%;display:block}.preview-thumbnail.nav-tabs li a{padding:0;margin:0}.preview-thumbnail.nav-tabs li:last-of-type{margin-right:0}.color,.size{margin-right:10px}.tab-content{overflow:hidden}.tab-content>active{height: auto !important}.tab-content img{width:100%;-webkit-animation-name:opacity;animation-name:opacity;-webkit-animation-duration:.3s;animation-duration:.3s}.detail-card{margin-top:50px;background:#eee;padding:3em;line-height:1.5em}@media screen and (min-width:997px){.wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}}.details{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.colors{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.checked,.price span{color:#ff9f1a}.price,.product-description,.product-title,.rating,.sizes,.vote{margin-bottom:15px}.product-title{margin-top:0}.size:first-of-type{margin-left:40px}.color{display:inline-block;vertical-align:middle;height:2em;width:2em;border-radius:2px}.color:first-of-type{margin-left:20px}.add-to-cart,.like{background:#ff9f1a;padding:1.2em 1.5em;border:none;color:#fff;-webkit-transition:background .3s ease;transition:background .3s ease}.add-to-cart:hover,.like:hover{background:#b36800;color:#fff}.not-available{text-align:center;line-height:2em}.not-available:before{font-family:fontawesome;content:"\f00d";color:#fff}.orange{background:#ff9f1a}.green{background:#85ad00}.blue{background:#0076ad}.tooltip-inner{padding:1.3em}@-webkit-keyframes opacity{0%{opacity:0;-webkit-transform:scale(3);transform:scale(3)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes opacity{0%{opacity:0;-webkit-transform:scale(3);transform:scale(3)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}</style>' +
      '<productDetail style="padding: 20px; display: block; width: 100%; min-height: 50px;"><link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"><div class="detail-card"><div class=container-fliud><div class="row wrapper"><div class="col-md-6 preview"><div class="preview-pic tab-content"><div class="tab-pane active"id=pic-1><img src=http://placehold.it/500x500></div><div class=tab-pane id=pic-2><img src=http://placehold.it/500x300></div><div class=tab-pane id=pic-3><img src=http://placehold.it/500x300></div><div class=tab-pane id=pic-4><img src=http://placehold.it/500x300></div><div class=tab-pane id=pic-5><img src=http://placehold.it/500x300></div></div><ul class="nav nav-tabs preview-thumbnail"><li class=active><a data-target=#pic-1 data-toggle=tab><img src=http://placehold.it/200x125></a><li><a data-target=#pic-2 data-toggle=tab><img src=http://placehold.it/200x125></a><li><a data-target=#pic-3 data-toggle=tab><img src=http://placehold.it/200x125></a><li><a data-target=#pic-4 data-toggle=tab><img src=http://placehold.it/200x125></a><li><a data-target=#pic-5 data-toggle=tab><img src=http://placehold.it/200x125></a></ul></div><div class="col-md-6 details"><h3 class=product-title>men\'s shoes fashion</h3><div class=rating><div class=stars><span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span></div><span class=review-no>41 reviews</span></div><p class=product-description>Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.<h4 class=price>current price: <span>$180</span></h4><p class=vote><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong><h5 class=sizes>sizes: <span class=size data-toggle=tooltip title=small>s</span> <span class=size data-toggle=tooltip title=medium>m</span> <span class=size data-toggle=tooltip title=large>l</span> <span class=size data-toggle=tooltip title="xtra large">xl</span></h5><div class=action><button class="btn btn-default add-to-cart"type=button>add to cart</button> <button class="btn btn-default like"type=button><span class="fa fa-heart"></span></button></div></div></div></div></div></productDetail><script src="js/client-product-detail-plugin.js">',
    attributes: {
      class: 'fa fa-shopping-bag',
      title: 'Product Detail Page',
    },
    category: 'Ecommerce Blocks'
  });

  bm.add('productReactiveSearch', {
    label: 'Product Search',
    content: '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">' +
      '<style type="text/css">.product-card{max-width:23%;font-size:12px;margin:5px;display:inline-block;box-shadow:2px 2px 15px #999}.product-card>a{background:#f2f2f2;color:#333;transition:all .1s;position:relative;display:block;z-index:0;padding-bottom:5px;text-decoration:none}.product-card>a:hover{text-decoration:none;box-shadow:0 1px 3px rgba(0,0,0,.3)}.product-card-title{min-height:70px;font-size:21px}.product-description{min-height:70px;max-height:70px;overflow-y:auto}.product-card-img{display:block;height:250px;width:100%}.product-card figcaption{display:block;padding:0 10px}.product-card .product-card-address{color:#888;line-height:1.2}.product-card .product-card-address i{font-size:14px;margin-right:2px;line-height:1.2}.product-card .product-card-price{display:block;text-align:right}.product-card .product-card-price .original-price,.product-card .product-card-price .price-savings{line-height:22px;display:inline-block;vertical-align:middle}.product-card .product-card-price .price-savings{float:left;color:#82b548}.product-card .product-card-price .original-price{color:#aaa;font-size:14px}.product-card .product-card-price .amount-price{text-align:right;font-size:20px;color:#82b548}.product-card .product-card-price .from{font-size:12px}.product_price span,.product_title h5{font-size:1.1em;line-height:1}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:"Open Sans",Arial,sans-serif}img{max-width:100%;height:auto}ul.product_list{list-style-type:none;margin:0;padding:0;width:100%;display:inline}.product_grid{text-decoration:none;display:inline}.product_item{display:inline-block;background:#fff;border:1px solid #ccc;padding:10px;position:relative;overflow:hidden}.product_sale{position:absolute;z-index:2;right:-28px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);transform:rotate(45deg)}.product_image{position:relative;overflow:hidden}.product_image img{display:block;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.info,.product{position:relative}.product_image img:hover{-o-transform:scale(1.2,1.2);-moz-transform:scale(1.2,1.2);-webkit-transform:scale(1.2,1.2);-ms-transform:scale(1.2,1.2);transform:scale(1.2,1.2)}.product_title{float:left;width:100%;text-transform:uppercase}.product_title h5{margin:auto;font-weight:500;padding-bottom:5px}.product_price a{color:#000}.price_old{color:#ea2e49;text-decoration:line-through}.product_desc p{margin:0;line-height:1.3;padding:10px 0}.product_rating{float:right;width:100px;height:20px;overflow:hidden;background:url(https://bit.ly/1B4PjyM) 0 76% no-repeat}.product_buttons{-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;font-smoothing:antialiased}.product_buttons .product_heart:hover{color:#DF0404;background:rgba(255,255,255,.5)}.product_buttons .product_compare:hover{color:#129612;background:rgba(255,255,255,.5)}.product_buttons .add_to_cart:hover{color:#4DC8D3;background:rgba(255,255,255,.5)}@media only screen and (min-width:320px){.product_sale p{margin:0;color:#fff;background:red;padding:3px 25px;box-shadow:0 2px 8px 0 rgba(0,0,0,.4)}.product_values{float:left;width:calc(100% - 100px);padding:0 10px}.product_rating{margin-right:10px}.product_image{height:150px;float:left;width:100px}.product_image .product_buttons{display:none}.product_desc{overflow:hidden;auto:left;line-height:1}.product_values .product_buttons{position:relative;text-align:left;float:left;margin-top:7px}.product_values .product_buttons button{color:#252525;background:rgba(255,255,255,1);font-size:1em;border-radius:50%;width:40px;height:40px;border:1px solid #000}}@media only screen and (min-width:480px){.product_image{height:250px;width:175px}.product_values{width:calc(100% - 175px)}}@media only screen and (min-width:678px){.product_item{width:49.5%}.product_image{height:150px;width:100px}.product_values{width:calc(100% - 100px)}}@media only screen and (min-width:992px){.product_image{height:250px;width:175px}.product_values{width:calc(100% - 175px)}.product_desc{max-height:200px}}@media only screen and (min-width:1200px){.product_item{width:33%}.product_desc{max-height:131px}}@media only screen and (max-width:992px){.product_desc{max-height:67px}}@media only screen and (max-width:480px){.product_title h5{font-weight:700}}@media only screen and (max-width:320px){.product_buttons,.product_desc,.product_sale{display:none}.product_image img{position:relative}.product_price span{float:left;width:100%}}.listing{list-style:none;margin:20px;padding:0;display:inline-block}.product{width:240px}.img-wrapper,.info{width:100%;text-align:center}.product a{text-decoration:none}.img-wrapper{display:block;height:240px;border:1px solid #afafaf;border-bottom:0;overflow:hidden}.info{background:#000;color:#fff;padding:40px 10px 20px;vertical-align:middle;transform:translateZ(0);box-shadow:0 0 1px transparent;backface-visibility:hidden;transition-property:color,height;transition-duration:.3s,.4s;transition-timing-function:ease-out;height:83px}.info:after,.info:before,.note,.price{position:absolute}.info:before{content:"";z-index:-1;top:0;bottom:0;left:0;right:0;background:#fff;transform:scaleY(0);transform-origin:50%;transition:transform .3s ease-out}.info:after{visibility:hidden;pointer-events:none;z-index:-1;content:"";border-style:solid;transition-duration:.3s;transition-property:transform;left:calc(50% - 11px);bottom:0;border-width:10px 10px 0;border-color:#000 transparent transparent}.product:hover .info{height:40px}.product:hover .info:before{transform:scaleY(.7)}.product:hover .info:after{visibility:visible;transform:translateY(10px)}.slide-title{transition:transform .3s ease-out}.slide-title a{color:inherit}.product:hover .slide-title{transform:translateY(-18px);font-weight:700;color:#000}.price{background:#e32d2c;font-size:1.3em;padding:4px 13px;top:-15px;right:10px}.note.on-sale,.price.sale{background:#00ba2f}.price.old{font-size:.95em;padding:4px 6px;text-decoration:line-through;top:-43px}.actions-wrapper{margin-top:14px;display:flex;justify-content:space-around}.actions-wrapper *{width:50%;padding:2px 0;text-align:center;color:#191919;font-size:.95em;font-weight:700}.actions-wrapper :before{font-family:FontAwesome;margin-right:8px}.wishlist{border-right:1px solid #afafaf}.wishlist:hover{color:#e32d2c}.cart:hover{color:#0a75b9}.product:hover .actions-wrapper *{visibility:visible}.note{top:0;left:0;padding:4px 8px;font-size:.9em}.note.on-sale{color:#fff}.note.no-stock{background:#191919;color:#fff}</style>' +
      '<productReactiveSearch style="display: block;margin-top: 0px;"><figure class="product-card portrait"> <img class="product-card-img" src="http://placehold.it/400x300"/> <figcaption> <h3 class="product-card-title">Product Title</h3> <div class="product-description">Product Sescription</div><p class="product-card-address"> <i class="fa fa-map-marker"></i> US</p><div class="product-card-price"> <span class="price-savings">Save 25%</span> <s class="original-price">$ 10.99</s> <p class="amount-price"> <span class="from">starting at</span> $ 10.99<!-- <span class="from">/night</span>--> </p></div></figcaption></figure>' +
      '<div class="product_grid landscape" style="visibility: hidden;"> <ul class="product_list list"> <li class="product_item"> <div class="product_sale"> <p>On Sale</p></div><div class="product_image"> <a href="#"><img src="http://placehold.it/400x300" alt="Product images"></a> <div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> <div class="quick_view"> <a href="#"> <h6>Quick View</h6> </a> </div></div></div><div class="product_values"> <div class="product_title"> <h5>Product Title</h5> </div><div class="product_price"> <a href="#"><span class="price_old">$79.99</span> <span class="price_new">$11.11</span></a> <span class="product_rating"></span> </div><div class="product_desc"> <p class="truncate">Product Descriptions</p></div><div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> </div></div></li></ul> </div>' +
      '<div class="listing creative" style="visibility: hidden"> <div class="product"> <a class="img-wrapper" href="#"> <img src="https://hussein-alhammad.com/images/codepen/product-card/running-shoe_pink.jpg" alt="Pink running shoe"/> </a> <div class="note on-sale" style="position: absolute;top: 0;left: 0;padding: 4px 8px;font-size: 0.9em;background: #00ba2f;color: #fff;">On sale</div><div class="info"> <div class="slide-title"><a href="#">Some Product</a></div><div class="price sale">$20.50</div><div class="price old">$34.99</div></div><div class="actions-wrapper"> <a href="#" class="add-btn wishlist"><i class="fa fa-heart-o"> Wishlist</a> <a href="#" class="add-btn cart"><i class="fa fa-shopping-cart"> Cart</a> </div></div></div></productReactiveSearch>',
    attributes: {
      class: 'fa fa-search',
      title: 'Product Block'
    },
    category: 'Ecommerce Blocks'
  });

  bm.add('productCompare', {
    label: 'Compare Products',
    content: '<div style="display: block; min-height: 20px;"><link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"><style type="text/css">.buttons{margin-top: 20px;}.productCounts{color: #008080;font-size: 24px;text-align: center;}.productTitle{text-align: center;min-height: 70px;}.table td{text-align: center;}.quantityInput{width: 50px;}.checkPrice{margin-top: 5px;color: #008080;}.colors-list{list-style: none; margin-top: 5px; text-align: left;}.color-link:hover{text-decoration: none !important;}.colors-list li{display: inline;}span.color{min-width: 15px; min-height: 15px; padding: 5px 10px; border: 1px solid #aaa; margin: 1px;}.color.green{background-color: #00FF00;}.color.redd{background-color: #ff0000;}.color.blue{background-color: #0000ff;}.color.teal{background-color: #232F3E;}.color.orange{background-color: orange;}.color.purple{background-color: purple;}</style>' +
      '<div class="container"><div class="row"><div class="col-md-5"><h3>Compare Products</h3></div><div class="col-md-7 buttons" align="right"><a href="#" class="btn btn-danger"><i class="fa fa-times"></i> Clear</a><a href="#" class="btn btn-default"><i class="fa fa-envelope"></i> Email To Friend</a><a href="#" class="btn btn-info"><i class="fa fa-print"></i> Print</a><a href="#" class="btn btn-primary"><i class="fa fa-file-pdf-o"></i> Download PDF</a><a href="#" class="btn btn-link"><strong>Continue Shopping >></strong></a></div></div><hr><div class="row"><div class="col-md-12"><div class="table-responsive"><table class="table table-bordered table-striped"><thead><tr><th width="20%" style="border: none;"></th><th width="20%" style="border: none;"></th><th width="20%" style="border: none;"></th><th width="20%" style="border: none;"></th><th width="20%" style="border: none;"></th></tr></thead><tbody><tr><td><strong>You can add up to 4 products to compare.<br><br><br>Now you can add <br><br><span class="productCounts">2</span><br><br>more products</strong></td><td><div class="product"><img src="http://placehold.it/400x400" class="img-responsive" alt="product image"><h5 class="productTitle"><strong>Product Title</strong></h5><hr><h3>USD $15.99</h3><span>Qty. <input type="number" class="quantityInput" name="" value="6"/></span></div></td><td><div class="product"><img src="http://placehold.it/400x400" class="img-responsive" alt="product image"><h5 class="productTitle"><strong>Product Title</strong></h5><hr><h3>USD $15.99</h3><span>Qty. <input type="number" class="quantityInput" name="" value="6"/></span></div></td><td><a href="#" class="btn btn-defaut"><i class="fa fa-plus-circle"></i> Add More Product</a></td><td><a href="#" class="btn btn-defaut"><i class="fa fa-plus-circle"></i> Add More Product</a></td></tr><tr><td></td><td><a href="#" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></a><a href="#" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart"></i></a><a href="#" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="Add to Cart"><i class="fa fa-shopping-cart"></i></a><p class="checkPrice">Check Pricing</p></td><td><a href="#" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="Quick View"><i class="fa fa-eye"></i></a><a href="#" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i class="fa fa-heart"></i></a><a href="#" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="Add to Cart"><i class="fa fa-shopping-cart"></i></a><p class="checkPrice">Check Pricing</p></td><td></td><td></td></tr><tr><td><strong>SKU</strong></td><td>32154</td><td>78945</td><td></td><td></td></tr><tr><td><strong>Product Colors</strong></td><td><ul class="colors-list"> <li><a href="#" class="color-link"><span class="color green"></span></a></li><li><a href="#" class="color-link"><span class="color redd"></span></a></li><li><a href="#" class="color-link"><span class="color blue"></span></a></li><li><a href="#" class="color-link"><span class="color teal"></span></a></li><li><a href="#" class="color-link"><span class="color orange"></span></a></li><li><a href="#" class="color-link"><span class="color purple"></span></a></li></ul></td><td><ul class="colors-list"> <li><a href="#" class="color-link"><span class="color green"></span></a></li><li><a href="#" class="color-link"><span class="color redd"></span></a></li><li><a href="#" class="color-link"><span class="color blue"></span></a></li><li><a href="#" class="color-link"><span class="color teal"></span></a></li><li><a href="#" class="color-link"><span class="color orange"></span></a></li><li><a href="#" class="color-link"><span class="color purple"></span></a></li></ul></td><td></td><td></td></tr><tr><td><strong>Features</strong></td><td><p align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></td><td><p align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></td><td></td><td></td></tr><tr><td><strong>Summary</strong></td><td><p align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></td><td><p align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></td><td></td><td></td></tr></tbody></table></div></div></div></div></div>',
    attributes: {
      class: 'fa fa-random',
      title: 'Compare Products',
    },
    category: 'Ecommerce Blocks'
  });

  bm.add('productWishlist', {
    label: 'My Wishlist',
    content: '<div style="display: block; min-height: 20px;"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> <style type="text/css"> .myCartListings{background-color: #eee; transition: 0.2s all linear; margin: 20px; padding: 20px;}.myCartListings:hover{box-shadow: 0px 0px 10px #999; transition: 0.2s all linear;}#productImage{padding: 0px 0px 0px 5px;}h4{padding-top: 1%}.colorofproduct{border: solid 2px black; margin: 2px;}#comment{margin-top: 5%;}button.remove{float: right; margin-top: 1%}}</style> <div class="container" id="myCartListings"> <div class="row"><div class="col-md-5"><h3>My Wishlist</h3></div></div><hr> <div class="col-md-12 myCartListings"> <div id="productImage" class="col-md-4"><img src="http://placehold.it/500x500" width="100%" height="50%"></div><div id="Productdetails" class="col-md-8"> <button class="btn btn-danger remove"><i class="fa fa-trash-o danger" aria-hidden="true"></i></button> <h2>Product Title</h2> <h4>Item # : CODE</h4> <h4>USD ($) 99.99 (R) Qty. 0-100</h4> <h4>Product Description</h4> <hr> <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6> <br><div id="colorofproductdiv"><img src="http://www.swedausa.com/product/color/137.jpg" height="27px" width="27px" class="colorofproduct"><img src="http://www.swedausa.com/product/color/329.jpg" height="27px" width="27px" class="colorofproduct"><img src="http://www.swedausa.com/product/color/573.jpg" height="27px" width="27px" class="colorofproduct"><img src="http://www.swedausa.com/product/color/329.jpg" height="27px" width="27px" class="colorofproduct"></div></div></div><div class="col-md-12 myCartListings"> <div id="productImage" class="col-md-4"><img src="http://placehold.it/500x500" width="100%" height="50%"></div><div id="Productdetails" class="col-md-8"> <button class="btn btn-danger remove"><i class="fa fa-trash-o danger" aria-hidden="true"></i></button> <h2>Product Title</h2> <h4>Item # : CODE</h4> <h4>USD ($) 99.99 (R) Qty. 0-100</h4> <h4>Product Description</h4> <hr> <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6> <br><div id="colorofproductdiv"><img src="http://www.swedausa.com/product/color/137.jpg" height="27px" width="27px" class="colorofproduct"><img src="http://www.swedausa.com/product/color/329.jpg" height="27px" width="27px" class="colorofproduct"><img src="http://www.swedausa.com/product/color/573.jpg" height="27px" width="27px" class="colorofproduct"><img src="http://www.swedausa.com/product/color/329.jpg" height="27px" width="27px" class="colorofproduct"></div></div></div></div></div>',
    attributes: {
      class: 'fa fa-heart',
      title: 'My Wishlist',
    },
    category: 'Ecommerce Blocks'
  });

  bm.add('wishlistPopup', {
    label: 'Wishlist Popup',
    content: '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"> <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"> <style type="text/css">.dropdown{position: relative; display: inline-block; margin-bottom: 0px;}.wishlist{position: absolute; width: 350px; z-index: 1; background-color: #eee; display: none;}.arrow-up{width: 0; height: 0; border-left: 20px solid transparent; border-right: 20px solid transparent; border-bottom: 15px solid #ECF0F1; left: 0; position: absolute; top: -10px;}.compareProducts{padding: 10px;}.productItem{margin-top: 25px;}</style><div class="upper-links dropdown"> <div id="wrap"> <div id="regbar"> <div id="navthing"> <h4><a href="#" id="wishlist" class="btn btn-link"><i class="fa fa-heart"></i></a> </h4> <div class="wishlist"> <div class="arrow-up"></div><div class="formholder"> <div class="compareProducts"> <h4>My Wishlist</h4> <div class="row productItem"> <div class="col-md-4"> <img src="http://placehold.it/100x100" class="img-responsive"> </div><div class="col-md-8"> <p><strong>Product Title</strong><a href="#" class="btn btn-xs btn-danger pull-right"><i class="fa fa-times"></i></a><br><span class="text-disabled">SKU: 1234</span><br><h4>$12.99</h4> <i>Qty. 2</i> </p><a href="#" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="Add to Cart"><i class="fa fa-shopping-cart"></i></a> <a href="#" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><i class="fa fa-heart"></i></a> </div></div><div class="row productItem"> <div class="col-md-4"> <img src="http://placehold.it/100x100" class="img-responsive"> </div><div class="col-md-8"> <p><strong>Product Title</strong><a href="#" class="btn btn-xs btn-danger pull-right"><i class="fa fa-times"></i></a><br><span class="text-disabled">SKU: 1234</span><br><h4>$12.99</h4> <i>Qty. 2</i> </p><a href="#" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="Add to Cart"><i class="fa fa-shopping-cart"></i></a> <a href="#" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><i class="fa fa-heart"></i></a> </div></div><div class="row" align="center"> <hr> <a href="#" class="btn btn-default">Remove All</a> <a href="#" class="btn btn-default">Go to Compare</a> </div></div></div></div></div></div></div></div></div>',
    attributes: {
      class: 'fa fa-heart-o',
      title: 'Wishlist Popup',
    },
    category: 'Ecommerce Blocks'
  });

  bm.add('comparePopup', {
    label: 'Compare Popup',
    content: '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"> <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"> <style type="text/css">.dropdown{position: relative; display: inline-block; margin-bottom: 0px;}.compare{position: absolute; width: 350px; z-index: 1; background-color: #eee; display: none;}.arrow-up{width: 0; height: 0; border-left: 20px solid transparent; border-right: 20px solid transparent; border-bottom: 15px solid #ECF0F1; left: 0; position: absolute; top: -10px;}.compareProducts{padding: 10px;}.productItem{margin-top: 25px;}</style><div class="upper-links dropdown"> <div id="wrap"> <div id="regbar"> <div id="navthing"> <h4><a href="#" id="compare" class="btn btn-link"><i class="fa fa-random"></i></a> </h4> <div class="compare"> <div class="arrow-up"></div><div class="formholder"> <div class="compareProducts"> <h4>Compare Products</h4> <div class="row productItem"> <div class="col-md-4"> <img src="http://placehold.it/100x100" class="img-responsive"> </div><div class="col-md-8"> <p><strong>Product Title</strong><a href="#" class="btn btn-xs btn-danger pull-right"><i class="fa fa-times"></i></a><br><span class="text-disabled">SKU: 1234</span><br><h4>$12.99</h4> <i>Qty. 2</i> </p><a href="#" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="Add to Cart"><i class="fa fa-shopping-cart"></i></a> <a href="#" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><i class="fa fa-heart"></i></a> </div></div><div class="row productItem"> <div class="col-md-4"> <img src="http://placehold.it/100x100" class="img-responsive"> </div><div class="col-md-8"> <p><strong>Product Title</strong><a href="#" class="btn btn-xs btn-danger pull-right"><i class="fa fa-times"></i></a><br><span class="text-disabled">SKU: 1234</span><br><h4>$12.99</h4> <i>Qty. 2</i> </p><a href="#" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="Add to Cart"><i class="fa fa-shopping-cart"></i></a> <a href="#" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><i class="fa fa-heart"></i></a> </div></div><div class="row" align="center"> <hr> <a href="#" class="btn btn-default">Remove All</a> <a href="#" class="btn btn-default">Go to Compare</a> </div></div></div></div></div></div></div></div></div>',
    attributes: {
      class: 'fa fa-random',
      title: 'Compare Popup',
    },
    category: 'Ecommerce Blocks'
  });

  bm.add('productSearchFilter', {
    label: 'Product Search Filter',
    content: '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"><productSearchFilter  style="display: block; width: 100%;padding:15px; vertical-align: middle;"><div class="reomve-texts"> <i class="fa fa-search"></i> <label style="margin: inherit;">Product Search Filter</label></div></productSearchFilter>',
    attributes: {
      class: 'fa fa-filter',
      title: 'Product search Filter'
    },
    category: 'Ecommerce Blocks'
  });




  // Full Home Page Layout
  bm.add('accordion', {
    label: 'accordion',
    content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous"><style type="text/css">.container{max-width: 960px;}.panel-default>.panel-heading{color: #333; background-color: #fff; border-color: #e4e5e7; padding: 0; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}.panel-default>.panel-heading a{display: block; padding: 10px 15px;}.panel-default>.panel-heading a:after{content: ""; position: relative; top: 1px; display: inline-block; font-family: \'Glyphicons Halflings\'; font-style: normal; font-weight: 400; line-height: 1; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; float: right; transition: transform .25s linear; -webkit-transition: -webkit-transform .25s linear;}.panel-default>.panel-heading a[aria-expanded="true"]{background-color: #eee;}.panel-default>.panel-heading a[aria-expanded="true"]:after{content: "\2212"; -webkit-transform: rotate(180deg); transform: rotate(180deg);}.panel-default>.panel-heading a[aria-expanded="false"]:after{content: "\002b"; -webkit-transform: rotate(90deg); transform: rotate(90deg);}.accordion-option{width: 100%; float: left; clear: both; margin: 15px 0;}.accordion-option .title{font-size: 20px; font-weight: bold; float: left; padding: 0; margin: 0;}.accordion-option .toggle-accordion{float: right; font-size: 16px; color: #6a6c6f;}.accordion-option .toggle-accordion:before{content: "Expand All";}.accordion-option .toggle-accordion.active:before{content: "Collapse All";}</style> <div class="container"> <div class="accordion-option"> <h3 class="title">TITLE</h3> <a href="javascript:void(0)" class="toggle-accordion active" accordion-id="#accordion"></a> </div><div class="clearfix"></div><div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true"> <div class="panel panel-default"> <div class="panel-heading" role="tab" id="headingOne"> <h4 class="panel-title"> <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Collapsible Group Item #1 </a> </h4> </div><div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne"> <div class="panel-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS. </div></div></div><div class="panel panel-default"> <div class="panel-heading" role="tab" id="headingTwo"> <h4 class="panel-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"> Collapsible Group Item #2 </a> </h4> </div><div id="collapseTwo" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo"> <div class="panel-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS. </div></div></div><div class="panel panel-default"> <div class="panel-heading" role="tab" id="headingThree"> <h4 class="panel-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree"> Collapsible Group Item #3 </a> </h4> </div><div id="collapseThree" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree"> <div class="panel-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS. </div></div></div></div></div>',
    attributes: {
      class: 'fa fa-home',
      title: 'accordion'
    },
    category: 'Special Component'
  });

  // ReUseComponent
  bm.add('ReUseComponent', {
    label: 'ReUse Component',
    content: '<ReUseComponent style="display: block; width: 100%; min-height:20px"><div style="border:solid black 2px"></div></ReUseComponent>',
    attributes: {
      class: 'fa fa-home',
      title: 'ReUse Component'
    },
    category: 'Special Component'
  });

  // VueComponent
  bm.add('VueComponent', {
    label: 'Vue Component',
    content: '<VueComponent style="display: block; width: 100%; min-height:20px"><div style="border:solid black 2px"></div></VueComponent>',
    attributes: {
      class: 'fa fa-home',
      title: 'Vue Component'
    },
    category: 'Special Component'
  });

  bm.add('progressBar', {
    label: 'Progress Bar',
    content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><progressBar style="display: block; width: 100%; padding: 5px"><div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%"> 40%</div></div></progressBar>',
    attributes: {
      class: 'fa fa-spinner',
      title: 'Progress Bar',
    },
    category: 'Special Component'
  });




  // Global Variables

  // Global Image Variable 
  bm.add('globalImageVariable', {
    label: 'Image Variable',
    category: 'Global Variables',
    attributes: {
      class: 'fa fa-image',
    },
    content: '<globalImage style="padding: 5px; display: inline-block;"><img src="http://placehold.it/250x100" alt="Global Image" /></globalImage>'
  });

  // Global Link Variable 
  bm.add('globalLinkVariable', {
    label: 'Link Variable',
    category: 'Global Variables',
    attributes: {
      class: 'fa fa-link',
    },
    content: '<globalLink style="padding: 5px; display: inline-block;"><a href="#">Hyperlink</a></globalLink>'
  });

  // Global HTML Variable 
  bm.add('globalHtmlVariable', {
    label: 'HTML Variable',
    category: 'Global Variables',
    attributes: {
      class: 'fa fa-code',
    },
    content: '<globalHtmlVariable style="padding: 2px; display: inline-block;">HTML Code</globalHtmlVariable>',
  });

  // Global Text Variable 
  bm.add('globalTextVariable', {
    label: 'Text Variable',
    category: 'Global Variables',
    attributes: {
      class: 'fa fa-font',
    },
    content: '<globalTextVariable style="padding: 2px; display: inline-block;">Global Variable</globalTextVariable>',
  });




  // Invoice Filters
  bm.add('InvoiceDetail', {
    label: 'Invoice',
    content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><InvoiceDetail style="display: block; width: 100%;padding:15px"> <h3> Invoices </h3> <table class="table table-bordered table-striped table-collapsed"> <th>Id</th> <th>Name</th> <th>Date</th> <th>Amount Paid</th> <th>Amount Due</th> <th> Total Amount </th><div class="invoiceTableBody"></div></table> </InvoiceDetail>',
    attributes: {
      class: 'fa fa-file-text-o',
      title: 'Invoice Page',
    },
    category: 'Accounting Components'
  });



  bm.add('InvoiceCustomer', {
    label: 'Customers',
    content: '<html><head><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css"></head> <InvoiceFilter style="display: block; width: 100%;padding:15px"><div class="container"><div class="form-group"> <label>status</label> <select class="form-control" id="Select1" style="width: 100px !important; min-width: 100px; max-width: 100px;"><option>Select</option><option>Paid</option><option>Unpaid</option> </select></div><div class="form-group"><div class="form-group row"><div class="col-xs-2"> <label>Amount</label> <select class="form-control" id="Select2" style="width: 150px !important; min-width: 150px; max-width: 150px;"><option>Select</option><option>Paid</option><option>Unpaid</option><option>Total</option> </select></div><div class="col-xs-2"> <label> choice</label> <select class="form-control" id="Select3" style="width: 150px !important; min-width: 150px; max-width: 150px;"><option>Select</option><option>Greater Than</option><option>less Than</option> </select></div></div></div></div> </InvoiceFilter></html>',
    attributes: {
      class: 'fa fa-users',
      title: 'Invoice Page',
    },
    category: 'Accounting Components'
  });

  bm.add('InvoiceFilter', {
    label: 'Invoice Filter',
    content: '<div><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css"> <InvoiceFilter style="display: block; width: 100%;padding:15px"><div class="container"><div class="form-group"> <label>status</label> <select class="form-control ye no y n s" id="menu" style="width: 150px !important; min-width: 160px; max-width: 160px;" onChange="checkOption(this)"><option value="Select">Select</option><option value="Paid">Paid</option><option value="Unpaid">Unpaid</option> </select></div><div class="form-group"><div class="form-group row"><div class="col-xs-2"> <label>Select Amount</label> <select class="form-control yes no y n s" id="Select2" style="width: 150px !important; min-width: 160px; max-width: 160px;" onChange="checkOption(this)"><option value="Select">Select</option><option value="Paid">Paid</option><option value="Unpaid">Unpaid</option><option value="Total">Total</option> </select></div><div class="col-xs-2"> <label> choice</label> <select class="form-control yes no y n s" id="Select3" style="width: 150px !important; min-width: 160px; max-width: 160px;"><option>Select</option><option>Greater Than Or Equal To</option><option>less ThanOr Equal To</option> </select></div><div class="col-xs-2"> <label> Amount </label> <input id="input" class="form-control yes no y n s" id="text1" style="width: 150px !important; min-width: 160px; max-width: 160px;" type="text"></div></div></div><div class="form-group"><div class="form-group row"><div class="col-xs-2"> <label>Select Date</label> <select class="form-control yes ye y n s" id="Select4" style="width: 150px !important; min-width: 160px; max-width: 160px;" onChange="checkOption(this)"><option value="Select">Select</option><option value="Due_Date">Due Date</option><option value="Gen_Date">Generation Date</option> </select></div><div class="col-xs-2"> <label> choice</label> <select class="form-control yes ye y n s" id="Select5" style="width: 150px !important; min-width: 160px; max-width: 160px;"><option>Select</option><option>Greater Than Or Equal To</option><option>less ThanOr Equal To</option> </select></div><div class="col-xs-2"> <label> Choose Date </label> <input type="date" class="form-control yes ye y n s" id="date1" style="width: 100px !important; min-width: 160px; max-width: 160px;"></div></div></div><div class="form-group"><div class="form-group row"><div class="col-xs-2"> <label> Choose Date </label> <input type="date" class="form-control yes ye no n s" id="date2" style="width: 150px !important; min-width: 160px; max-width: 160px;" onChange="checkOption(this)"></div><div class="col-xs-2"> <label style="margin-top: 25px;margin-left: 50px;"> To </label></div><div class="col-xs-2"> <label> Choose Date </label> <input type="date" class="form-control yes ye no n s" id="date3" style="width: 150px !important; min-width: 160px; max-width: 160px;"></div></div></div><div class="form-group"><div class="form-group row"><div class="col-xs-2"> <label> Name </label> <input class="form-control yes ye no y s" id="text2" style="width: 150px !important; min-width: 160px; max-width: 160px;" type="text" onkeyup="check(this)"></div><div class="col-xs-2"> <label> Choose Date </label> <input type="date" class="form-control yes ye no y s" id="date4" style="width: 150px !important; min-width: 160px; max-width: 160px;"></div><div class="col-xs-2"> <label> Paid Amount </label> <input class="form-control yes ye no y s" id="text3" style="width: 150px !important; min-width: 160px; max-width: 160px;" type="text"></div><div class="col-xs-2"> <label> Total Amount </label> <input class="form-control yes ye no y s" id="text4" style="width: 150px !important; min-width: 160px; max-width: 160px;" type="text"></div></div></div><div class="form-group"><h3> Invoices</h3><table class="table table-bordered table-striped table-collapsed" id="tbdata"> <th>  </th> <th>Id</th><th>Name</th><th>Date</th><th>Amount Paid</th><th>Amount Due</th><th> Total Amount</th></table><input type="text" style="width: 100px; padding: 2px; border: 1px solid black"/></div></div> </InvoiceFilter></div>',
    attributes: {
      class: 'fa fa-filter',
      title: 'Invoice Filter',
    },
    category: 'Accounting Components'
  });

  bm.add('InvoicePayment', {
    label: 'Payment',
    content: '<InvoicePayment style="display: block; width: 100%;padding:15px"><div class="container"><div class="form-group"> <input type="submit" class="btn btn-success pull-right" value="Pay Now" style="width: 150px !important; min-width: 160px; max-width: 160px; margin-right: 2px;"></div></div></InvoicePayment>',
    attributes: {
      class: 'fa fa-cc-paypal',
      title: 'Invoice Payment',
    },
    category: 'Accounting Components'
  });




  // dataField component
  bm.add('DataFieldGroup', {
    label: 'Data Field Group',
    content: '<DataFieldGroup style="display: block; width: 100%; min-height:350px"><template scope="item" style="border:solid black 2px;display: block; width: 100%; min-height:330px"></template></DataFieldGroup>',
    attributes: {
      class: 'fa fa-database',
      title: 'Data Field',
    },
    category: 'Data Field Group'
  });


  bm.add('DataFieldText', {
    label: 'Data Field Text',
    content: '<DataFieldText style="display: block; width: 100%; min-height:20px"><p>Insert your text here</p></DataFieldText>',
    attributes: {
      class: 'fa fa-database',
      title: 'Data Field',
    },
    category: 'Data Field Group'
  });

  bm.add('DataFieldList', {
    label: 'Data Field List',
    content: '<DataFieldList style="display: block; width: 100%; min-height:80px"><template scope="item" style="border:solid black 2px;display: block; width: 100%; min-height:70px"><div class="fieldListRepeater"></div><template scope="item"></DataFieldList>',
    attributes: {
      class: 'fa fa-database',
      title: 'Data Field',
    },
    category: 'Data Field Group'
  });


  bm.add('ShoppingCart', {
        label: 'Shopping Cart',
  content:'<ShoppingCart  style="display: block; width: 100%;padding:15px; vertical-align: middle;"><div id="ShoppingCart_append"><i class="fa fa-shopping-cart"></i> <label style="margin: inherit;">Shopping Cart</label></div></ShoppingCart>',
  attributes: {
              class:'fa fa-shopping-cart',
              title: 'Shopping cart',
        },
    category: 'Payment Components'
  });


  // Get DomComponents module
  var comps = editor.DomComponents;

  // Get the model and the view from the default Component type
  var defaultType = comps.getType('default');
  var defaultModel = defaultType.model;
  var defaultView = defaultType.view;
  var traits;

  // The `input` will be the Component type ID
  comps.addType('productListing', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          'id', {
            label: 'API URL',
            name: 'apiurl'
          }, {
            label: 'Username',
            name: 'apiusername',
            type: 'text'
          }, {
            label: 'Password',
            name: 'apipassword',
            type: 'password'
          }, {
            label: 'Items',
            name: 'numberofitems',
            type: 'text'
          }, {
            label: 'Template',
            name: 'selecttemplate',
            type: 'select',
            // changeProp: 1,
            options: [{
              value: 'select',
              name: 'Select Template'
            }, {
              value: 'portrait',
              name: 'Portrait'
            }, {
              value: 'landscape',
              name: 'Landscape'
            }, {
              value: 'creative',
              name: 'Creative'
            }]
          }
        ],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'PRODUCTLISTING') {
          return {
            type: 'productListing'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });

  // The `input` will be the Component type ID
  comps.addType('popularProducts', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          'id', {
            label: 'API URL',
            name: 'apiurl'
          }, {
            label: 'Username',
            name: 'apiusername',
            type: 'text'
          }, {
            label: 'Password',
            name: 'apipassword',
            type: 'password'
          }, {
            label: 'Items',
            name: 'numberofitems',
            type: 'text'
          }
        ],
      }),
    }, {
      isComponent: function(el) {
        if (el.tagName == 'POPULARPRODUCTS') {
          return {
            type: 'popularProducts'
          };
        }
      },
    }),
    view: defaultType.view,
    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });

  comps.addType('navimenu', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'Menu Id',
          name: 'menuid'
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'NAVIMENU') {
          return {
            type: 'navimenu'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });


  comps.addType('Slider', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'Image1 URL',
          name: 'image1',
          type: 'text'
        }, {
          label: 'Image2 URL',
          name: 'image2',
          type: 'text'
        }, {
          label: 'Image3 URL',
          name: 'image3',
          type: 'text'
        }, {
          label: 'Image4 URL',
          name: 'image4',
          type: 'text'
        }, {
          label: 'Image5 URL',
          name: 'image5',
          type: 'text'
        }],
      }),
    }, {
      isComponent: function(el) {
        if (el.tagName == 'SLIDER') {
          return {
            type: 'Slider'
          };
        }
      },
    }),
    view: defaultType.view,
    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });
  comps.addType('Pagination', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'Name [A-Z] ',
          name: 'nameaz',
          type: 'checkbox'
        }, {
          label: 'Name [Z-A] ',
          name: 'nameza',
          type: 'checkbox'
        }, {
          label: 'Price [Low-High] ',
          name: 'pricelh',
          type: 'checkbox'
        }, {
          label: 'Price [High-Low] ',
          name: 'pricehl',
          type: 'checkbox'
        }, {
          label: '#Item [A-Z] ',
          name: 'itemaz',
          type: 'checkbox'
        }, {
          label: '#Item [Z-A] ',
          name: 'itemza',
          type: 'checkbox'
        }],
      }),
    }, {
      isComponent: function(el) {
        if (el.tagName == 'PAGINATION') {
          return {
            type: 'Pagination'
          };
        }
      },
    }),
    view: defaultType.view,
    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });



  comps.addType('imageanimation', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'Color 1',
          name: 'color1',
          type: 'color'
        }, {
          label: 'Color 2',
          name: 'color2',
          type: 'color'
        }, {
          label: 'Color 3',
          name: 'color3',
          type: 'color'
        }, {
          label: 'Color 4',
          name: 'color4',
          type: 'color'
        }, {
          label: 'Color 5',
          name: 'color5',
          type: 'color'
        }, {
          label: 'Color 6',
          name: 'color6',
          type: 'color'
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'IMAGEANIMATION') {
          return {
            type: 'imageanimation'
          };
        }
      },
    }),
    view: defaultType.view,
    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });




  comps.addType('productReactiveSearch', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [

          {
            label: 'API URL',
            name: 'apiurl'
          }, {
            label: 'Username',
            name: 'apiusername',
            type: 'text'
          }, {
            label: 'Password',
            name: 'apipassword',
            type: 'password'
          }, {
            label: 'Search',
            name: 'selectadvance_search_Filter',
            type: 'select',
            // changeProp: 1,
            options: [{
              value: 'select',
              name: 'Select Filter'
            }, {
              value: 'true',
              name: 'True'
            }, {
              value: 'false',
              name: 'False'
            }]
          }, {
            label: 'category',
            name: 'selectcategory_Filter',
            type: 'select',
            // changeProp: 1,
            options: [{
              value: 'select',
              name: 'Select Filter'
            }, {
              value: 'true',
              name: 'True'
            }, {
              value: 'false',
              name: 'False'
            }]
          }, {
            label: 'Prices',
            name: 'selectPrices_Filter',
            type: 'select',
            // changeProp: 1,
            options: [{
              value: 'select',
              name: 'Select Filter'
            }, {
              value: 'true',
              name: 'True'
            }, {
              value: 'false',
              name: 'False'
            }]
          }, {
            label: 'Colours',
            name: 'selectColours_Filter',
            type: 'select',
            // changeProp: 1,
            options: [{
              value: 'select',
              name: 'Select Filter'
            }, {
              value: 'true',
              name: 'True'
            }, {
              value: 'false',
              name: 'False'
            }]
          }, {
            label: 'Brands',
            name: 'selectBrands_Filter',
            type: 'select',
            // changeProp: 1,
            options: [{
              value: 'select',
              name: 'Select Filter'
            }, {
              value: 'true',
              name: 'True'
            }, {
              value: 'false',
              name: 'False'
            }]
          }, {
            label: 'Themes',
            name: 'selecttheme_Filter',
            type: 'select',
            // changeProp: 1,
            options: [{
              value: 'select',
              name: 'Select Filter'
            }, {
              value: 'portrait',
              name: 'Portrait'
            }, {
              value: 'landscape',
              name: 'Landscape'
            }]
          }
        ],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'PRODUCTREACTIVESEARCH') {
          return {
            type: 'productReactiveSearch'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });




  comps.addType('globalImage', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'Data Id',
          name: 'data-global-id',
          type: 'text'
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'GLOBALIMAGE') {
          return {
            type: 'globalImage'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });




  comps.addType('globalLink', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'Data Id',
          name: 'data-global-id',
          type: 'text'
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'GLOBALLINK') {
          return {
            type: 'globalLink'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });




  comps.addType('globalHtmlVariable', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'Data Id',
          name: 'data-global-id',
          type: 'text'
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'GLOBALHTMLVARIABLE') {
          return {
            type: 'globalHtmlVariable'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });




  comps.addType('globalTextVariable', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'Data Id',
          name: 'data-global-id',
          type: 'text'
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'GLOBALTEXTVARIABLE') {
          return {
            type: 'globalTextVariable'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });






  comps.addType('progressBar', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'Progress %',
          name: 'progress',
          type: 'text'
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'PROGRESSBAR') {
          return {
            type: 'progressBar'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });




  // All Product Filters and Invoice Settings
  comps.addType('InvoiceDetail', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
            label: 'API URL Invoice',
            name: 'apiurl'
          }
          // {
          //   label: 'Domain',
          //   name: 'selectdomain',
          //   type: 'select',
          //   // changeProp: 1,
          //   options: [{value: 'Select', name:'Select Domain'},{value: 'QB', name:'QB'},{value: 'Xero', name:'Xero'}]
          // }
        ],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'INVOICEDETAIL') {
          return {
            type: 'InvoiceDetail'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });


  comps.addType('InvoiceCustomer', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'API URL Customer',
          name: 'apiurl'
            //  options: [{value: 'select', name:'Select Menu Type'},{value: 'mini', name:'Mini Top'},{value: 'mainNavigation', name:'Main Navigation'},{value: 'footerNav', name:'Footer Nvigation'}]
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'INVOICECUSTOMER') {
          return {
            type: 'InvoiceCustomer'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });

  comps.addType('InvoiceFilter', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'API URL Filter',
          name: 'apiurl'
            //  options: [{value: 'select', name:'Select Menu Type'},{value: 'mini', name:'Mini Top'},{value: 'mainNavigation', name:'Main Navigation'},{value: 'footerNav', name:'Footer Nvigation'}]
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'INVOICEFILTER') {
          return {
            type: 'InvoiceFilter'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });

  comps.addType('InvoicePayment', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'API URL Payment',
          name: 'apiurl'
            //  options: [{value: 'select', name:'Select Menu Type'},{value: 'mini', name:'Mini Top'},{value: 'mainNavigation', name:'Main Navigation'},{value: 'footerNav', name:'Footer Nvigation'}]
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'INVOICEPAYMENT') {
          return {
            type: 'InvoicePayment'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });

  comps.addType('productFilters', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'API URL product filter',
          name: 'apiurl'
            //  options: [{value: 'select', name:'Select Menu Type'},{value: 'mini', name:'Mini Top'},{value: 'mainNavigation', name:'Main Navigation'},{value: 'footerNav', name:'Footer Nvigation'}]
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'PRODUCTFILTERS') {
          return {
            type: 'productFilters'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });

  comps.addType('productCategory', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'API URL',
          name: 'apiurl'
            //  options: [{value: 'select', name:'Select Menu Type'},{value: 'mini', name:'Mini Top'},{value: 'mainNavigation', name:'Main Navigation'},{value: 'footerNav', name:'Footer Nvigation'}]
        }, {
          label: 'Username',
          name: 'apiusername',
          type: 'text'
        }, {
          label: 'Password',
          name: 'apipassword',
          type: 'password'
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'PRODUCTCATEGORY') {
          return {
            type: 'productCategory'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });

  comps.addType('productColors', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'API URL',
          name: 'apiurl_color'
        }, {
          label: 'Username',
          name: 'apiusername_color',
          type: 'text'
        }, {
          label: 'Password',
          name: 'apipassword_color',
          type: 'password'
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'PRODUCTCOLORS') {
          return {
            type: 'productColors'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });

  comps.addType('productBrand', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'API URL',
          name: 'apiurl_brand'
        }, {
          label: 'Username',
          name: 'apiusername_brand',
          type: 'text'
        }, {
          label: 'Password',
          name: 'apipassword_brand',
          type: 'password'
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'PRODUCTBRAND') {
          return {
            type: 'productBrand'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });

  comps.addType('productTags', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'API URL',
          name: 'apiurl_brand'
        }, {
          label: 'Username',
          name: 'apiusername_brand',
          type: 'text'
        }, {
          label: 'Password',
          name: 'apipassword_brand',
          type: 'password'
        }],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'PRODUCTTAGS') {
          return {
            type: 'productTags'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });




  comps.addType('gformpanel', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        draggable: 'gform, gform *'
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'GFORMPANEL') {
          return {
            type: 'gformpanel'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });









  comps.addType('productSearchFilter', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [

          {
            label: 'API URL',
            name: 'apiurl'
          }, {
            label: 'Username',
            name: 'apiusername',
            type: 'text'
          }, {
            label: 'Password',
            name: 'apipassword',
            type: 'password'
          }, {
            label: 'Search',
            name: 'selectadvance_search_filter',
            type: 'select',
            // changeProp: 1,
            options: [{
              value: 'select',
              name: 'Select Filter'
            }, {
              value: 'true',
              name: 'True'
            }, {
              value: 'false',
              name: 'False'
            }]
          }, {
            label: 'category',
            name: 'selectcategory_filter',
            type: 'select',
            // changeProp: 1,
            options: [{
              value: 'select',
              name: 'Select Filter'
            }, {
              value: 'true',
              name: 'True'
            }, {
              value: 'false',
              name: 'False'
            }]
          }, {
            label: 'Prices',
            name: 'selectprices_filter',
            type: 'select',
            // changeProp: 1,
            options: [{
              value: 'select',
              name: 'Select Filter'
            }, {
              value: 'true',
              name: 'True'
            }, {
              value: 'false',
              name: 'False'
            }]
          }, {
            label: 'Colours',
            name: 'selectcolours_filter',
            type: 'select',
            // changeProp: 1,
            options: [{
              value: 'select',
              name: 'Select Filter'
            }, {
              value: 'true',
              name: 'True'
            }, {
              value: 'false',
              name: 'False'
            }]
          }, {
            label: 'Brands',
            name: 'selectbrands_filter',
            type: 'select',
            // changeProp: 1,
            options: [{
              value: 'select',
              name: 'Select Filter'
            }, {
              value: 'true',
              name: 'True'
            }, {
              value: 'false',
              name: 'False'
            }]
          }, {
            label: 'Themes',
            name: 'selecttheme_filter',
            type: 'select',
            // changeProp: 1,
            options: [{
              value: 'select',
              name: 'Select Filter'
            }, {
              value: 'portrait',
              name: 'Portrait'
            }, {
              value: 'landscape',
              name: 'Landscape'
            }]
          }
        ],
      }),

    }, {
      isComponent: function(el) {
        if (el.tagName == 'PRODUCTSEARCHFILTER') {
          return {
            type: 'productSearchFilter'
          };
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function() {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });









  // dataField components

  //http://172.16.230.176:3034/connectiondata
  let arr_collection = new Array();
  let arr_schema = []
  let arr_coll_schema = new Array()
  console.log("arr_schema type11111111111111s", typeof arr_schema)
  $.getJSON("http://172.16.230.80:3080/settings",
    // $.getJSON("http://localhost:3080/settings",
    function (data) {
      //console.log("data.rethink.dbinstance[0].connection_name", data.rethink.dbinstance.length);
      for (let index = 0; index < data.rethink.dbinstance.length; index++) {
        //console.log("data.rethink.dbinstance[0].connection_name",data.rethink.dbinstance[index].connection_name);
        arr_collection.push(data.rethink.dbinstance[index].connection_name)
        $.getJSON("http://172.16.230.80:3080/connectiondata/" + data.rethink.dbinstance[index].connection_name,
          // $.getJSON("http://localhost:3080/connectiondata/" + data.rethink.dbinstance[index].connection_name ,
          function (data_) {
            console.log("data_", data_)
            // console.log("data.rethink.dbinstance[0].connection_name",data.rethink.dbinstance[index].connection_name);
            let collection_name = data.rethink.dbinstance[index].connection_name
            console.log(data_[0].t_name)
            for (let index_ = 0; index_ < data_.length; index_++) {
              console.log(data_[index_].t_name)
              if (data_[index_].t_name != undefined) {
                let schema_name = data_[index_].t_name
                console.log("arr_schema type", typeof arr_schema)
                arr_schema.push({ collection_name: "'"+collection_name, schema_name: schema_name+"'" })
              }
            }
            $.each(arr_schema, function (index, value) {
              arr_coll_schema.push(value.collection_name + ' : ' + value.schema_name);
            });
            console.log("arr_coll_schema", typeof arr_coll_schema)
          });
      }
    });

    comps.addType('DataFieldGroup', {
      // Define the Model
      model: defaultModel.extend({
        init() {
          this.listenTo(this, 'change:connectiondata', this.doStuff);
        },
        doStuff() {
          console.log("hello here")
        },
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          editable: true,
          droppable: true,
          traits: [
            {
              type: 'select',
              label: 'data-schema',
              name: ':data_schema',
              options: arr_coll_schema,
            }
          ]
        }),

      }, {
          isComponent: function (el) {
            if (el.tagName == 'DATAFIELDGROUP') {
              return {
                type: 'DataFieldGroup'
              };
            }
          },
        }),

      view: defaultType.view,

      // The render() should return 'this'
      render: function () {
        // Extend the original render method
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
        return this;
      },
    });



    comps.addType('DataFieldText', {
      // Define the Model
      model: defaultModel.extend({
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          editable: true,
          droppable: true,
          traits: [
            {
              label: 'Data text field',
              name: ':text',
              type: 'text'
            }
          ]
        }),

      }, {
          isComponent: function (el) {
            if (el.tagName == 'DATAFIELDTEXT') {
              return {
                type: 'DataFieldText'
              };
            }
          },
        }),

      view: defaultType.view,

      // The render() should return 'this'
      render: function () {
        // Extend the original render method
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
        return this;
      },
    });

    comps.addType('DataFieldList', {
      // Define the Model
      model: defaultModel.extend({
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          editable: true,
          droppable: true,
          traits: [
            {
              label: 'Data list field',
              name: ':items',
              type: 'text'
            }
          ]
        }),

      }, {
          isComponent: function (el) {
            if (el.tagName == 'DATAFIELDLIST') {
              return {
                type: 'DataFieldList'
              };
            }
          },
        }),

      view: defaultType.view,

      // The render() should return 'this'
      render: function () {
        // Extend the original render method
        defaultType.view.prototype.render.apply(this, arguments);
        this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
        return this;
      },
    });











// Reuse Component
  var folderUrl = localStorage.getItem("folderUrl");
  var useremail = localStorage.getItem("email");

  let foldername = folderUrl.split('/');
  foldername = foldername[(foldername.length - 1)];

  let configFileUrl = baseURL + '/project-configuration?userEmail=' + useremail + '&websiteName=' + foldername;

  $.getJSON(configFileUrl, function(data) {
    var configData = data.data[0].configData;
    console.log('ReUseVue configData:', configData);
    storedTemplates = Object.keys(configData[2].layoutOptions[0]);
  });

  var partialOptions = {};

  setTimeout(function() {
    for (var i = 0; i < storedTemplates.length; i++) {
      if (storedTemplates[i] == 'Layout' || storedTemplates[i] == 'pages' || storedTemplates[i] == '.git' || storedTemplates[i] == 'main-files' || storedTemplates[i] == 'assets') {
        storedTemplates.splice(i, 1)
      }
    }


    for (var i = 0; i <= storedTemplates.length - 1; i++) {
      var request = new XMLHttpRequest();
      request.open("POST", baseURL + '/get-directory-list?folderUrl=' + folderUrl + '/' + "Partials", false);
      request.setRequestHeader("Content-type", "application/json");
      request.send();
      resp = JSON.parse(request.responseText);

      for (let index = 0; index < resp.length; index++) {
        request.open("POST", baseURL + '/get-directory-list?folderUrl=' + folderUrl + '/' + "Partials/" + resp[i], false);
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        resp2 = JSON.parse(request.responseText);
      }

      if (resp.length != 0 && resp[i] != "Menu") {
        if (resp2.length >= 2) {
          for (let j = 0; j < resp2.length; j++) {
            if (j == 0) {
              let string_con = resp2[j]
              string_con = string_con.toString()
              var res = string_con.split(".");
              if (res[1] == "partial") {
                partialOptions[resp[i]] = [{
                  'name': resp2[j]
                }]
              }
            } else {
              let string_con = resp2[j]
              string_con = string_con.toString()
              var res = string_con.split(".");
              if (res[1] == "partial") {
                partialOptions[resp[i]].push({
                  'name': resp2[j]
                })
              }
            }
          }
        } else {
          str = resp2
          str = resp2.toString()
          var res = str.split(".");
          if (res[1] == "partial") {
            partialOptions[resp[i]] = [{
              'name': resp2
            }]
          }
        }
      }
    }
  }, 1000);


  editor.TraitManager.addType('customConent1', {

    getInputEl: function() {
      if (!this.inputEl) {
        var input = document.createElement('select');
        input.setAttribute("id", "Div1");
        input.setAttribute("name", "Div1");
        input.setAttribute("style", "background:#363636");
        $.each(partialOptions, function(key, value) {
          var group = $('<optgroup label="' + key + '" />');
          $.each(value, function() {
            $('<option />').html(this.name).appendTo(group);
          });
          group.appendTo(input);
        });
        input.value = this.target.get('customConent1');
        this.inputEl = input;
      }
      return this.inputEl;
    },

  });

  comps.addType('ReUseComponent', {
    model: defaultModel.extend({
      init() {
        this.listenTo(this, 'change:selectPartial', this.doStuff);
      },
      doStuff() {
        var label, selected_value;
        var folderUrl = localStorage.getItem("folderUrl");
        $('#Div1').on('click', function() {
          label = $(this.options[this.selectedIndex]).closest('optgroup').prop('label');
          selected_value = $("#Div1 option:selected").text();
          let model = editor.getSelected();
          var split_selected_value = selected_value.split(".");
          if (split_selected_value[1] == "partial") {
            model.components("");
            model.components("{{> " + label + " id='" + selected_value + "' }}");
          } else if (split_selected_value[1] == "vue") {
            model.components('<component :is="' + split_selected_value[0] + '">' + selected_value + '</component>');
          }
        });
      },
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'PartialName',
          name: 'selectPartial',
          type: 'customConent1',
          changeProp: 1,
        }],
      }),
    }, {
      isComponent: function(el) {
        if (el.tagName == 'REUSECOMPONENT') {
          return {
            type: 'ReUseComponent'
          };
        }
      },
    }),
    view: defaultType.view,
    render: function() {
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here';
      return this;
    },
  });




  // Vue Component
  var folderUrlVue = localStorage.getItem("folderUrl");
  var useremailVue = localStorage.getItem("email");

  let projectName = folderUrlVue.split('/');
  projectName = projectName[(projectName.length - 1)];

  let configFileUrl2 = baseURL + '/project-configuration?userEmail=' + useremailVue + '&websiteName=' + projectName;
  $.getJSON(configFileUrl2, function(data) {
    var configData = data.data[0].configData;;
    storedTemplates = Object.keys(configData[2].layoutOptions[0]);
  });

  var partialOptions2 = {};

  setTimeout(function() {
    for (var i = 0; i < storedTemplates.length; i++) {
      if (storedTemplates[i] == 'Layout' || storedTemplates[i] == 'pages' || storedTemplates[i] == '.git' || storedTemplates[i] == 'main-files' || storedTemplates[i] == 'assets') {
        storedTemplates.splice(i, 1)
      }
    }


    for (var i = 0; i <= storedTemplates.length - 1; i++) {
      var request = new XMLHttpRequest();
      request.open("POST", baseURL + '/get-directory-list?folderUrl=' + folderUrlVue + '/' + "Partials", false);
      request.setRequestHeader("Content-type", "application/json");
      request.send();
      resp = JSON.parse(request.responseText);

      for (let index = 0; index < resp.length; index++) {
        request.open("POST", baseURL + '/get-directory-list?folderUrl=' + folderUrlVue + '/' + "Partials/" + resp[i], false);
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        resp2 = JSON.parse(request.responseText);
      }

      if (resp.length != 0 && resp[i] != "Menu") {
        console.log("resp", resp)
        let counter = 0;
        if (resp2.length >= 2) {
          for (let j = 0; j < resp2.length; j++) {
            var split_selected_value = resp2[j].split(".");
            if (split_selected_value[1] == "vue") {
              console.log("inside")
              if (counter == 0) {
                partialOptions2[resp[i]] = [{
                  'name': resp2[j]
                }]
                counter++;
              } else {
                partialOptions2[resp[i]].push({
                  'name': resp2[j]
                })
              }
            }
          }
        } else {
          var resp3 = resp2.toString();
          var substring = "vue";
          if (resp3.indexOf(substring) !== -1) {
            partialOptions2[resp[i]] = [{
              'name': resp2
            }]
          }
        }

      }
    }
  }, 1000);


  editor.TraitManager.addType('customConent2', {

    getInputEl: function() {
      if (!this.inputEl) {
        var input = document.createElement('select');
        input.setAttribute("id", "Div1");
        input.setAttribute("name", "Div1");
        input.setAttribute("style", "background:#363636");
        $.each(partialOptions2, function(key, value) {
          var group = $('<optgroup label="' + key + '" />');
          $.each(value, function() {
            $('<option />').html(this.name).appendTo(group);
          });
          group.appendTo(input);
        });
        input.value = this.target.get('customConent2');
        this.inputEl = input;
      }
      return this.inputEl;
    },

  });



  comps.addType('VueComponent', {
    model: defaultModel.extend({
      init() {
        this.listenTo(this, 'change:selectPartial', this.doStuff);
      },
      doStuff() {
        var label, selected_value;
        var folderUrlVue = localStorage.getItem("folderUrl");
        $('#Div1').on('click', function() {
          label = $(this.options[this.selectedIndex]).closest('optgroup').prop('label');
          selected_value = $("#Div1 option:selected").text();
          let model = editor.getSelected();
          var split_selected_value = selected_value.split(".");
          console.log("selected_value", selected_value)
          if (split_selected_value[1] == "vue") {
            model.components('<div id="' + split_selected_value[0] + '"><component athname="' + label + '" :is="' + split_selected_value[0] + '">' + selected_value + '</component></div>');
          }
        });
      },
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [{
          label: 'PartialName',
          name: 'selectPartial',
          type: 'customConent2',
          changeProp: 1,
        }],
      }),
    }, {
      isComponent: function(el) {
        if (el.tagName == 'VUECOMPONENT') {
          return {
            type: 'VueComponent'
          };
        }
      },
    }),
    view: defaultType.view,
    render: function() {
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here';
      return this;
    },
  });

comps.addType('ShoppingCart', {
    model: defaultModel.extend({

            init() {
            this.listenTo(this, 'changeaypal', this.paypalcheck);
            this.listenTo(this, 'change:Stripe', this.stripecheck);
            this.listenTo(this, 'change:AuthorizeDotNet', this.authcheck);
        },

        paypalcheck() {
            console.log("paypal change event function called")

            console.log("this.get('traits').where({name:'x_api_token_paypal'})",this.get('traits').where({name:'x_api_token_paypal'})[0].get('value'))
            console.log("this.get('traits').where({name:'x_api_login_paypal'})",this.get('traits').where({name:'x_api_login_paypal'})[0].get('value'))

                        //    this.get('traits').each(function(trait) {
                        //            console.log("trait",trait.get('name'));
                        //            if (trait.get('name') == 'Paypal') {
                        //                    console.log("Inside if paypal")
                        //                    // this.get('traits').where({name:'x_api_token_paypal'}).style = "display:none"
                        //            }
                //     console.log("trait value",trait.get('value'));
                // });
        },

        stripecheck() {
            console.log("stripe change event function called")

            console.log("this.get('traits').where({name:'x_api_token_stripe'})",this.get('traits').where({name:'x_api_token_stripe'})[0].get('value'))
        },

        authcheck() {
            console.log("auth change event function called")

            console.log("this.get('traits').where({name:'x_api_token_authdotnet'})",this.get('traits').where({name:'x_api_token_authdotnet'})[0].get('value'))
            console.log("this.get('traits').where({name:'x_api_login_authdotnet'})",this.get('traits').where({name:'x_api_login_authdotnet'})[0].get('value'))
        },
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
           {
            type: 'checkbox',        
            label: 'Paypal',
            name: 'Paypal',
          },
          {
            label: 'Token',
            name: 'x_api_token_paypal',
          },
          {
            label: 'Login',
            name: 'x_api_login_paypal',
          },
          {
            type: 'checkbox',        
            label: 'Stripe',
            name: 'Stripe',
          },
          {
            label: 'Token',
            name: 'x_api_token_stripe',
          },
          {
            label: 'Authorize DotNet',
            name: 'AuthorizeDotNet',
            type: 'checkbox',        
          },
          {
            label: 'Token',
            name: 'x_api_token_authdotnet',
          },
          {
            label: 'Login',
            name: 'x_api_login_authdotnet',
          }
        ],
      }),

    },
    {
      isComponent: function(el) {
        if(el.tagName == 'SHOPPINGCART'){
          return {type: 'ShoppingCart'};
        }
      },
    }),

    view: defaultType.view,

    // The render() should return 'this'
    render: function () {
      // Extend the original render method
      defaultType.view.prototype.render.apply(this, arguments);
      this.el.placeholder = 'Text here'; // <- Doesn't affect the final HTML code
      return this;
    },
  });


})