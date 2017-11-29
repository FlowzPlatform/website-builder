
grapesjs.plugins.add('product-plugin', function(editor, options){
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


    // bm.add('TableData', {
    //  label: 'Table Data`',
    //  content: '<table><thead><th>Sr. No</th></thead><tbody><tr><td>1.</td></tr></tbody></table>',
    //  attributes: {
    //      class: 'fa fa-user-o',
    //      title: 'Table'
    //  },
    //  category: 'Table'
    // });

    bm.add('g-form-template',{
        label: 'Form Full',
        content: '<div class="g-form"> <div class="g-form-panel"> <label>name</label> <input type="text" name="name"/> <label>age</label> <input type="text" name="age"/> <label>address</label> <div attr-id="address" style="padding: 15px;"> <div class="g-form"> <div class="g-form-panel"> <label>Add 1</label> <input type="text" name="add1"/> <label> city </label> <div attr-id="cities" style="padding: 15px;"> <div class="g-form"> <div class="g-form-panel"> <label>city test</label> <input type="text" name="city"/> <button onclick="handleDelete(event)">Delete</button> </div><div class="g-form-group-button"> <button onclick="handleAdd(event)">Add</button> </div></div></div><button onclick="handleDelete(event)">Delete</button> </div><div class="g-form-group-button"> <button onclick="handleAdd(event)">Add</button> </div></div></div></div><div class="g-form-group-button"> <button onclick="handleAdd(event)">Add</button> </div></div>',
        attributes: {
            class: 'fa fa-html5',
            title: 'G-Form Full'
        },
        category: 'Custom Form Controls'
    });

    bm.add('g-form',{
        label: 'G-Form',
        content: '<gform class="g-form" style="display: block; padding: 10px;"></gform>',
        attributes: {
            class: 'fa fa-html5',
            title: 'G-Form'
        },
        category: 'Custom Form Controls'
    });

    bm.add('gformpanel',{
        label: 'G-Form Panel',
        content: '<gformpanel class="g-form-panel" style="display: block; padding: 5px;"><form class="form"><div class="form-group" style="display: block; padding: 20px; margin: 5px"></div></form></gformpanel>',
        attributes: {
            class: 'fa fa-html5',
            title: 'G-Form Panel'
        },
        category: 'Custom Form Controls'
    });

    bm.add('g-form-add-btn',{
        label: 'G-Form Add Button',
        content: '<div class="g-form-group-button"> <button type="button" onclick="handleAdd(event)">Add</button> </div>',
        attributes: {
            class: 'fa fa-html5',
            title: 'G-Form Add Button'
        },
        category: 'Custom Form Controls'
    });

    bm.add('g-form-delete-btn',{
        label: 'G-Form Delete Button',
        content: '<div class="g-form-group-button"> <button type="button" onclick="handleDelete(event)">Delete</button> </div>',
        attributes: {
            class: 'fa fa-html5',
            title: 'G-Form Delete Button'
        },
        category: 'Custom Form Controls'
    });

    bm.add('formpartial',{
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


	
	// // Header Layout
	// bm.add('Header-1', {
	// 	label: 'Header-1',
	// 	content: '<style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');body{font:14px/1.5 Arial, Helvetica, sans-serif;padding:0;margin:0;}.menu{text-align: center;padding-top: 25px;margin-bottom:200px;}.menu img{opacity: 0.4;margin: 20px auto;}}.menu ul{max-width: 600px;margin: 60px auto 0;}.menu ul a{text-decoration: none;color: #FFF;text-align: left;background-color: #BBDEFB;padding: 10px 16px;border-radius: 2px;opacity: 0.8;font-size: 16px;display: inline-block;margin: 4px;line-height: 1;outline: none;transition: 0.2s ease;}.menu ul li a.active{background-color: #66B650;pointer-events: none;}.menu ul li a:hover{opacity: 1;}.menu ul{list-style: none;padding: 0;}.menu ul li{display: inline-block;}@media (max-height:800px){.menu{padding-top:40px;}}/* -- Demo ads -- */@media (max-width: 1200px){#bsaHolder{display:none;}}/* -- Link to Tutorialzine -- */.tz-link{text-decoration: none;color: #fff !important;font: bold 36px Arial,Helvetica,sans-serif !important;}.tz-link span{color: #da431c;}.header-fixed{background-color:#80CBC4;box-shadow:0 1px 1px #ccc;height: 80px;color: #ffffff;box-sizing: border-box;top:-100px;-webkit-transition:top 0.3s;transition:top 0.3s;}.header-fixed .header-limiter{max-width: 1200px;/*text-align: center;*/margin: 0 auto;}.header-fixed-placeholder{height: 80px;display: none;}.header-fixed .header-limiter h1{float: left;font: normal 28px Cookie, Arial, Helvetica, sans-serif;line-height: 40px;margin: 0;}.header-fixed .header-limiter h1 span{color: #5383d3;}/* The navigation links */.header-fixed .header-limiter a{color: #ffffff;text-decoration: none;}.header-fixed .header-limiter nav{font:16px Arial, Helvetica, sans-serif;line-height: 40px;float: right;}.header-fixed .header-limiter nav a{display: inline-block;padding: 0 5px;text-decoration:none;color: #ffffff;opacity: 0.9;}.header-fixed .header-limiter nav a:hover{opacity: 1;}.header-fixed .header-limiter nav a.selected{color: #608bd2;pointer-events: none;opacity: 1;}/* Fixed version of the header */body.fixed .header-fixed{padding: 10px 40px;height: 50px;position: fixed;width: 100%;top: 0;left: 0;z-index: 1;}body.fixed .header-fixed-placeholder{display: block;}body.fixed .header-fixed .header-limiter h1{font-size: 24px;line-height: 30px;}body.fixed .header-fixed .header-limiter nav{line-height: 28px;font-size: 13px;}@media all and (max-width: 600px){.header-fixed{padding: 20px 0;height: 75px;}.header-fixed .header-limiter h1{float: none;margin: -8px 0 10px;text-align: center;font-size: 24px;line-height: 1;}.header-fixed .header-limiter nav{line-height: 1;float:none;}.header-fixed .header-limiter nav a{font-size: 13px;}body.fixed .header-fixed{display: none;}}</style><link href=\'http://fonts.googleapis.com/css?family=Cookie\' rel=\'stylesheet\' type=\'text/css\'></head><body><header class="header-fixed"><div class="header-limiter"><nav style="margin-right: 27%;"><a href="#">About</a><a href="#">Faq</a><a href="#">Contact</a></div><div class="header-limiter"><nav><img src="https://i.imgur.com/6GMu2uP.png" height="50%" width="50%" style="margin-left: 25%;margin-top: 2%;"></nav><nav><a href="#" class="selected">Home</a><a href="#">Blog</a><a href="#">Pricing</a></nav></div></header>',
	// 	attributes: {
	// 	    class: 'fa fa-header',
	// 	    title: 'Header-1'
	// 	},
	// 	category: 'Header'
	// });

	// // Header Layout
	// bm.add('Header-2', {
	// 	label: 'Header-2',
	// 	content: '<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title>User Dropdown Header</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');body{font:14px/1.5 Arial, Helvetica, sans-serif;padding:0;margin:0;}.menu{text-align: center;padding-top: 25px;margin-bottom:200px;}.menu img{opacity: 0.4;margin: 20px auto;}.menu h1{margin-top:0;font: normal 32px/1.5 \'Open Sans\', sans-serif;color: #3F71AE;padding-bottom: 16px;}.menu h2{color: #F05283;}.menu h2 a{color:inherit;text-decoration: none;display: inline-block;border: 1px solid #F05283;padding: 10px 15px;border-radius: 3px;font: bold 14px/1 \'Open Sans\', sans-serif;text-transform: uppercase;}.menu h2 a:hover{background-color:#F05283;transition:0.2s;color:#fff;}.menu ul{max-width: 600px;margin: 60px auto 0;}.menu ul a{text-decoration: none;color: #FFF;text-align: left;background-color: #B9C1CA;padding: 10px 16px;border-radius: 2px;opacity: 0.8;font-size: 16px;display: inline-block;margin: 4px;line-height: 1;outline: none;transition: 0.2s ease;}.menu ul li a.active{background-color: #66B650;pointer-events: none;}.menu ul li a:hover{opacity: 1;}.menu ul{list-style: none;padding: 0;}.menu ul li{display: inline-block;}@media (max-height:800px){.menu{padding-top:40px;}}/* -- Demo ads -- */@media (max-width: 1200px){#bsaHolder{display:none;}}/* -- Link to Tutorialzine -- */.tz-link{text-decoration: none;color: #fff !important;font: bold 36px Arial,Helvetica,sans-serif !important;}.tz-link span{color: #da431c;}.header-user-dropdown{background-color:#8c746f;box-shadow:0 1px 1px #ccc;padding: 20px 40px;height: 80px;color: #ffffff;box-sizing: border-box;}.header-user-dropdown .header-limiter{max-width: 1200px;text-align: center;margin: 0 auto;}/* Logo */.header-user-dropdown .header-limiter h1{float: left;font: normal 28px Cookie, Arial, Helvetica, sans-serif;line-height: 40px;margin:0;}.header-user-dropdown .header-limiter h1 span{color: #bc40df;}/* The header links */.header-user-dropdown .header-limiter a{color: #ffffff;text-decoration: none;}.header-user-dropdown .header-limiter nav{font:16px Arial, Helvetica, sans-serif;line-height: 40px;float: left;margin: 0 0 0 60px;padding: 0;}.header-user-dropdown .header-limiter nav a{font-size: 14px;display: inline-block;padding: 0 12px;opacity: 0.9;position: relative;text-decoration:none;line-height: 1;}.header-user-dropdown .header-limiter nav a:hover{opacity: 1;}/* The "new" badge */.header-user-dropdown .header-limiter nav a span{position: absolute;top: -12px;border-radius: 2px;background-color: #2A6A92;box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);height: 13px;font-size: 11px;right: -15px;padding: 1px 4px 0;}/* The user menu */.header-user-dropdown .header-limiter .header-user-menu{position: relative;float:right;background-color:#757575;width:75px;height:40px;border-radius:2px;}.header-user-dropdown .header-limiter .header-user-menu:before{content:\'\';width:0;height:0;top: 18px;left: 15px;position:absolute;border:5px solid transparent;border-top-color:#fff;}.header-user-dropdown .header-limiter .header-user-menu ul{display: none;font:bold 13px Arial, Helvetica, sans-serif;background-color: inherit;list-style: none;position: absolute;text-align: center;width: 125px;top: 25px;right: 0;padding: 10px;border-radius: 2px;box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);box-sizing: border-box;}.header-user-dropdown .header-user-menu:active ul,.header-user-dropdown .header-user-menu:hover ul,.header-user-dropdown .header-user-menu.show ul{display:block;}.header-user-dropdown .header-user-menu ul li{padding:5px;}.header-user-dropdown .header-user-menu ul li a:hover{opacity:0.9;}.header-user-dropdown .header-user-menu ul li a.highlight{color:#e9ac09;}.header-user-dropdown .header-user-menu img{border-radius:50%;position:absolute;top:6px;max-width: 28px;right:10px;}@media all and (max-width: 800px){.header-user-dropdown .header-limiter h1{font-size: 24px;}.header-user-dropdown .header-limiter nav a{padding: 0 5px;}.header-user-dropdown .header-limiter nav{margin-left: 20px;}}@media all and (max-width: 600px){.header-user-dropdown .header-limiter nav{display: none;}}</style><link href=\'http://fonts.googleapis.com/css?family=Cookie\' rel=\'stylesheet\' type=\'text/css\'></head><body><header class="header-user-dropdown"><div class="header-limiter"><h1><img src="https://i.imgur.com/6GMu2uP.png" height="50%" width="50%"></h1><nav><a href="#">Overview</a><a href="#">Surveys</a><a href="#">Reports</a><a href="#">Roles <span class="header-new-feature">new</span></a></nav><div class="header-user-menu"><img src="https://i.imgur.com/Sh09xIL.png" alt="User Image"/><ul><li><a href="#">Settings</a></li><li><a href="#">Payments</a></li><li><a href="#" class="highlight">Logout</a></li></ul></div></div></header></body></html>',
	// 	attributes: {
	// 	    class: 'fa fa-header',
	// 	    title: 'Header-2'
	// 	},
	// 	category: 'Header'
	// });

	// // Header Layout
	// bm.add('Header-3', {
	// 	label: 'Header-3',
	// 	content: '<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Second Bar Header</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');body{font:14px/1.5 Arial, Helvetica, sans-serif;padding:0;margin:0;}.menu{text-align: center;padding-top: 25px;margin-bottom:200px;}.menu img{opacity: 0.4;margin: 20px auto;}.menu h1{margin-top:0;font: normal 32px/1.5 \'Open Sans\', sans-serif;color: #3F71AE;padding-bottom: 16px;}.menu h2{color: #F05283;}.menu h2 a{color:inherit;text-decoration: none;display: inline-block;border: 1px solid #F05283;padding: 10px 15px;border-radius: 3px;font: bold 14px/1 \'Open Sans\', sans-serif;text-transform: uppercase;}.menu h2 a:hover{background-color:#F05283;transition:0.2s;color:#fff;}.menu ul{max-width: 600px;margin: 60px auto 0;}.menu ul a{text-decoration: none;color: #FFF;text-align: left;background-color: #B9C1CA;padding: 10px 16px;border-radius: 2px;opacity: 0.8;font-size: 16px;display: inline-block;margin: 4px;line-height: 1;outline: none;transition: 0.2s ease;}.menu ul li a.active{background-color: #66B650;pointer-events: none;}.menu ul li a:hover{opacity: 1;}.menu ul{list-style: none;padding: 0;}.menu ul li{display: inline-block;}@media (max-height:800px){.menu{padding-top:40px;}}/* -- Demo ads -- */@media (max-width: 1200px){#bsaHolder{display:none;}}/* -- Link to Tutorialzine -- */.tz-link{text-decoration: none;color: #fff !important;font: bold 36px Arial,Helvetica,sans-serif !important;}.tz-link span{color: #da431c;}.header-two-bars{font:13px Arial, Helvetica, sans-serif;}.header-two-bars .header-limiter{max-width: 1200px;text-align: center;margin: 0 auto;}/* Logo */.header-two-bars h1{float: left;font: normal 28px Cookie, Arial, Helvetica, sans-serif;line-height: 40px;margin: 0;}.header-two-bars h1 span{color: #FF5722;}/* The first bar */.header-two-bars .header-first-bar{background-color:#757575;box-shadow:0 1px 1px #ccc;padding: 20px 40px;height: 80px;color: #ffffff;box-sizing: border-box;}.header-two-bars .header-first-bar a{color: #ffffff;text-decoration: none;}.header-two-bars .header-first-bar nav{font:14px Arial, Helvetica, sans-serif;line-height: 40px;float: left;margin: 0 0 0 60px;padding: 0;}.header-two-bars .header-first-bar nav a{display: inline-block;padding: 0 5px;opacity: 0.9;text-decoration:none;line-height: 1;}.header-two-bars .header-first-bar nav a:hover{opacity: 1;}.header-two-bars .header-first-bar nav a.selected{border-radius: 2px;background-color: #2B5773;padding: 8px 12px;}.header-two-bars .header-first-bar a.logout-button{font-size: 13px;font-weight: bold;float: right;border-radius: 3px;background-color: rgba(58, 60, 62, 0);height: 40px;padding: 0 20px;border: 1px solid #5E6367;line-height: 40px;box-sizing: border-box;}/* Second Bar */.header-two-bars .header-second-bar{background-color: #ffffff;box-shadow: 1px 3px 3px 0 rgba(0, 0, 0, 0.05);padding: 20px 40px;}.header-two-bars .header-second-bar h2{line-height: 20px;margin: 0;float: left;}.header-two-bars .header-second-bar h2 a{font-size: 16px;color: #4e5359;text-decoration: none;}.header-two-bars .header-second-bar nav{text-align: right;line-height: 20px;font-size: 16px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}.header-two-bars .header-second-bar nav a{display: inline-block;color: #4e5359;text-decoration: none;}.header-two-bars .header-second-bar nav i.fa{color: #A9B7BF;margin: 0 4px 0 15px;}/*Making the header responsive. Remove these styles, ifyou don\'t need the header to work on mobile devices. */@media all and (max-width: 800px){.header-two-bars .header-second-bar nav{font-size:14px;}}@media all and (max-width: 600px){.header-two-bars .header-first-bar{padding:20px 0;}.header-two-bars .header-first-bar h1{float: none;margin: -8px 0 2px;text-align: center;font-size: 24px;line-height: 1;}.header-two-bars .header-first-bar nav{margin: 0;float: none;font-size:13px;}.header-two-bars .header-first-bar nav a.selected{padding: 5px 8px;}.header-two-bars .header-first-bar .logout-button{display: none;}.header-two-bars .header-second-bar{padding: 20px 0;}.header-two-bars .header-second-bar h2{float:none;margin: 0 0 12px;}.header-two-bars .header-second-bar nav{text-align: center;}.header-two-bars .header-second-bar nav a{display: block;padding: 8px;}.header-two-bars .header-second-bar nav i.fa{margin-left:0;}}</style><link href=\'http://fonts.googleapis.com/css?family=Cookie\' rel=\'stylesheet\' type=\'text/css\'><link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"></head><body><header class="header-two-bars"><div class="header-first-bar"><div class="header-limiter"><h1><img src="https://i.imgur.com/6GMu2uP.png" height="50%" width="50%"></h1><nav><a href="#" class="selected">Overview</a><a href="#">Surveys</a><a href="#">Reports</a><a href="#">Roles</a></nav><a href="#" class="logout-button">Logout</a></div></div><div class="header-second-bar"><div class="header-limiter"><h2><a href="#">Survey name</a></h2><nav><a href="#"><i class="fa fa-comments-o"></i> Questions</a><a href="#"><i class="fa fa-file-text"></i> Results</a><a href="#"><i class="fa fa-group"></i> Participants</a><a href="#"><i class="fa fa-cogs"></i> Settings</a></nav></div></div></header></body></html>',
	// 	attributes: {
	// 	    class: 'fa fa-header',
	// 	    title: 'Header-3'
	// 	},
	// 	category: 'Header'
	// });

	// // Header Layout
	// bm.add('Header-4', {
	// 	label: 'Header-4',
	// 	content: '<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Login, Sign up Header</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');body{font:14px/1.5 Arial, Helvetica, sans-serif;padding:0;margin:0;}.menu{text-align: center;padding-top: 25px;margin-bottom:200px;}.menu img{opacity: 0.4;margin: 20px auto;}.menu h1{margin-top:0;font: normal 32px/1.5 \'Open Sans\', sans-serif;color: #3F71AE;padding-bottom: 16px;}.menu h2{color: #F05283;}.menu h2 a{color:inherit;text-decoration: none;display: inline-block;border: 1px solid #F05283;padding: 10px 15px;border-radius: 3px;font: bold 14px/1 \'Open Sans\', sans-serif;text-transform: uppercase;}.menu h2 a:hover{background-color:#F05283;transition:0.2s;color:#fff;}.menu ul{max-width: 600px;margin: 60px auto 0;}.menu ul a{text-decoration: none;color: #FFF;text-align: left;background-color: #B9C1CA;padding: 10px 16px;border-radius: 2px;opacity: 0.8;font-size: 16px;display: inline-block;margin: 4px;line-height: 1;outline: none;transition: 0.2s ease;}.menu ul li a.active{background-color: #66B650;pointer-events: none;}.menu ul li a:hover{opacity: 1;}.menu ul{list-style: none;padding: 0;}.menu ul li{display: inline-block;}@media (max-height:800px){.menu{padding-top:40px;}}/* -- Demo ads -- */@media (max-width: 1200px){#bsaHolder{display:none;}}/* -- Link to Tutorialzine -- */.tz-link{text-decoration: none;color: #fff !important;font: bold 36px Arial,Helvetica,sans-serif !important;}.tz-link span{color: #da431c;}.header-login-signup{background-color:#827717;box-shadow:0 1px 1px #ccc;padding: 20px 40px;height: 80px;color: #ffffff;box-sizing: border-box;}.header-login-signup .header-limiter{max-width: 1200px;text-align: center;margin: 0 auto;}/* Logo */.header-login-signup .header-limiter h1{float: left;font: normal 28px Cookie, Arial, Helvetica, sans-serif;line-height: 40px;margin: 0;}.header-login-signup .header-limiter h1 span{color: #5383d3;}/* The navigation links */.header-login-signup .header-limiter a{color: #ffffff;text-decoration: none;}.header-login-signup .header-limiter nav{font:16px Arial, Helvetica, sans-serif;line-height: 40px;float: left;margin: 0 0 0 60px;padding: 0;}.header-login-signup .header-limiter nav a{font-size: 14px;display: inline-block;padding: 0 5px;opacity: 0.9;text-decoration:none;line-height: 1;}.header-login-signup .header-limiter nav a:hover{opacity: 1;}.header-login-signup .header-limiter nav a.selected{color: #608bd2;}/* Login/Sign up buttons */.header-login-signup .header-limiter ul{font: 14px Arial, Helvetica, sans-serif;list-style: none;line-height: 1;float: right;}.header-login-signup .header-limiter ul li{display: inline-block;margin-left: 15px;opacity:0.9;}.header-login-signup .header-limiter ul li:hover{opacity: 1;}/* The sign up button */.header-login-signup .header-limiter ul li:last-child a{font-weight: bold;background-color: #C0CA33;padding: 10px 15px;border-radius: 3px;}/* Making the header responsive */@media all and (max-width: 600px){.header-login-signup{padding: 25px;height: 85px;}.header-login-signup .header-limiter h1{float: none;margin: -8px 0 2px;text-align: center;font-size: 24px;line-height: 1;}.header-login-signup .header-limiter nav{margin: 0;float: none;}.header-login-signup .header-limiter nav li a{font-size: 13px;}.header-login-signup .header-limiter ul{display: none;}}For the headers to look good, be sure to reset the margin and padding of the body */body{margin:0;padding:0;}</style><link href=\'http://fonts.googleapis.com/css?family=Cookie\' rel=\'stylesheet\' type=\'text/css\'></head><body><header class="header-login-signup"><div class="header-limiter"><h1><img src="https://i.imgur.com/6GMu2uP.png" height="50%" width="50%"></h1><nav><a href="#" class="selected">Home</a><a href="#">Blog</a><a href="#">Pricing</a></nav><ul><li><a href="#">Login</a></li><li><a href="#">Sign up</a></li></ul></div></header></body></html>',
	// 	attributes: {
	// 	    class: 'fa fa-header',
	// 	    title: 'Header-4'
	// 	},
	// 	category: 'Header'
	// });

	// // Header Layout
	// bm.add('Header-5', {
	// 	label: 'Header-5',
	// 	content: '<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Basic Header</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');body{font:14px/1.5 Arial, Helvetica, sans-serif;padding:0;margin:0;}.menu{text-align: center;padding-top: 25px;margin-bottom:200px;}.menu img{opacity: 0.4;margin: 20px auto;}.menu h1{margin-top:0;font: normal 32px/1.5 \'Open Sans\', sans-serif;color: #3F71AE;padding-bottom: 16px;}.menu h2{color: #F05283;}.menu h2 a{color:inherit;text-decoration: none;display: inline-block;border: 1px solid #F05283;padding: 10px 15px;border-radius: 3px;font: bold 14px/1 \'Open Sans\', sans-serif;text-transform: uppercase;}.menu h2 a:hover{background-color:#F05283;transition:0.2s;color:#fff;}.menu ul{max-width: 600px;margin: 60px auto 0;}.menu ul a{text-decoration: none;color: #FFF;text-align: left;background-color: #BBDEFB;padding: 10px 16px;border-radius: 2px;opacity: 0.8;font-size: 16px;display: inline-block;margin: 4px;line-height: 1;outline: none;transition: 0.2s ease;}.menu ul li a.active{background-color: #66B650;pointer-events: none;}.menu ul li a:hover{opacity: 1;}.menu ul{list-style: none;padding: 0;}.menu ul li{display: inline-block;}@media (max-height:800px){.menu{padding-top:40px;}}/* -- Demo ads -- */@media (max-width: 1200px){#bsaHolder{display:none;}}/* -- Link to Tutorialzine -- */.tz-link{text-decoration: none;color: #fff !important;font: bold 36px Arial,Helvetica,sans-serif !important;}.tz-link span{color: #da431c;}.header-fixed{background-color:#80CBC4;box-shadow:0 1px 1px #ccc;padding: 20px 40px;height: 80px;color: #ffffff;box-sizing: border-box;top:-100px;-webkit-transition:top 0.3s;transition:top 0.3s;}.header-fixed .header-limiter{max-width: 1200px;text-align: center;margin: 0 auto;}.header-fixed-placeholder{height: 80px;display: none;}.header-fixed .header-limiter h1{float: left;font: normal 28px Cookie, Arial, Helvetica, sans-serif;line-height: 40px;margin: 0;}.header-fixed .header-limiter h1 span{color: #5383d3;}/* The navigation links */.header-fixed .header-limiter a{color: #ffffff;text-decoration: none;}.header-fixed .header-limiter nav{font:16px Arial, Helvetica, sans-serif;line-height: 40px;float: right;}.header-fixed .header-limiter nav a{display: inline-block;padding: 0 5px;text-decoration:none;color: #ffffff;opacity: 0.9;}.header-fixed .header-limiter nav a:hover{opacity: 1;}.header-fixed .header-limiter nav a.selected{color: #608bd2;pointer-events: none;opacity: 1;}/* Fixed version of the header */body.fixed .header-fixed{padding: 10px 40px;height: 50px;position: fixed;width: 100%;top: 0;left: 0;z-index: 1;}body.fixed .header-fixed-placeholder{display: block;}body.fixed .header-fixed .header-limiter h1{font-size: 24px;line-height: 30px;}body.fixed .header-fixed .header-limiter nav{line-height: 28px;font-size: 13px;}@media all and (max-width: 600px){.header-fixed{padding: 20px 0;height: 75px;}.header-fixed .header-limiter h1{float: none;margin: -8px 0 10px;text-align: center;font-size: 24px;line-height: 1;}.header-fixed .header-limiter nav{line-height: 1;float:none;}.header-fixed .header-limiter nav a{font-size: 13px;}body.fixed .header-fixed{display: none;}}body{margin: 0;padding: 0;height: 1500px;}</style><link href=\'http://fonts.googleapis.com/css?family=Cookie\' rel=\'stylesheet\' type=\'text/css\'></head><body><header class="header-fixed"><div class="header-limiter"><h1><img src="https://i.imgur.com/6GMu2uP.png" height="50%" width="50%"></h1><nav><a href="#" class="selected">Home</a><a href="#">Blog</a><a href="#">Pricing</a><a href="#">About</a><a href="#">Faq</a><a href="#">Contact</a></nav></div></header></body></html>',
	// 	attributes: {
	// 	    class: 'fa fa-header',
	// 	    title: 'Header-5'
	// 	},
	// 	category: 'Header'
	// });

 //  // Header Layout
 //  bm.add('Ecomm-Header', {
 //    label: 'Ecommerce Header',
 //    content: '<style type="text/css">#flipkart-navbar{background-color: #232F3E; color: #FFFFFF;}.row1{padding-top: 10px;}.row2{padding-bottom: 20px;}.flipkart-navbar-input{padding: 11px 16px; border-radius: 2px 0 0 2px; border: 0 none; outline: 0 none; font-size: 15px; color: #000;}.flipkart-navbar-button{background-color: rgb(254, 189, 105); border: 1px solid #ffe11b; border-radius: 0 2px 2px 0; color: #565656; padding: 10px 0; height: 43px; cursor: pointer; padding-left: 18px;}.cart-button{background-color: rgb(254, 189, 105); box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .23), inset 1px 1px 0 0 hsla(0, 0%, 100%, .2); padding: 10px 0; text-align: center; height: 41px; border-radius: 2px; font-weight: 500; width: 120px; display: inline-block; color: #333; text-decoration: none; color: inherit; border: none; outline: none;}.cart-button:hover{text-decoration: none; color: #fff; cursor: pointer;}.cart-svg{display: inline-block; width: 16px; height: 16px; vertical-align: middle; margin-right: 8px;}.item-number{border-radius: 3px; background-color: rgba(0, 0, 0, .1); height: 20px; padding: 3px 6px; font-weight: 500; display: inline-block; color: #fff; line-height: 12px; margin-left: 10px;}.upper-links{display: inline-block; padding: 0 11px; line-height: 23px; font-family: \'Roboto\', sans-serif; letter-spacing: 0; color: inherit; border: none; outline: none; font-size: 12px;}.dropdown{position: relative; display: inline-block; margin-bottom: 0px;}.dropdown .dropdown-menu{position: absolute; top: 100%; display: none; background-color: #fff; color: #333; left: 0px; border: 0; border-radius: 0; box-shadow: 0 4px 8px -3px #555454; margin: 0; padding: 0px;}.links{color: #fff; text-decoration: none;}.links:hover{color: #fff; text-decoration: none;}.profile-links{font-size: 12px; font-family: \'Roboto\', sans-serif; border-bottom: 1px solid #e9e9e9; box-sizing: border-box; display: block; padding: 0 11px; line-height: 23px;}.profile-li{padding-top: 2px;}.largenav{display: none;}.smallnav{display: block;}.smallsearch{margin-left: 15px; margin-top: 15px;}.menu{cursor: pointer;}@media screen and (min-width: 768px){.largenav{display: block;}.smallnav{display: none;}.smallsearch{margin: 0px;}}/*Sidenav*/.sidenav{height: 100%; width: 0; position: fixed; z-index: 1; top: 0; left: 0; background-color: #fff; overflow-x: hidden; transition: 0.5s; box-shadow: 0 4px 8px -3px #555454; padding-top: 0px;}.sidenav a{padding: 8px 8px 8px 32px; text-decoration: none; font-size: 25px; color: #818181; display: block; transition: 0.3s}.sidenav .closebtn{position: absolute; top: 0; right: 25px; font-size: 36px; margin-left: 50px; color: #fff;}@media screen and (max-height: 450px){.sidenav a{font-size: 18px;}}.sidenav-heading{font-size: 36px; color: #fff;}.footer-top-layout{background: #232F3E none repeat scroll 0 0; color: #ffffff; padding: 40px 0;}.OurBlog{margin-bottom: 32px; text-align: center;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.OurBlog > p{color: #ffffff;}.post-blog-date::after{background: #ffffff none repeat scroll 0 0; bottom: 0; content: ""; height: 4px; left: 0; margin: auto; position: absolute; right: 0; width: 50px;}.post-blog-date{padding-bottom: 25px; position: relative;}body{color: #fff; font-family: "Open Sans", sans-serif; line-height: 24px;}.footer-top-layout [class*="col-sm-"]:first-child{padding: 0;}.footer-top-layout [class*="col-sm-"]{border-right: 2px solid #333333; padding: 0 0 0 28px;}.footer-top-layout{color: #ffffff;}.footer-col-item{min-height: 140px;}address{color: #eee;}.footer-top-layout [class*="col-sm-"]:last-child{border-right: medium none;}.footer-top-layout{color: #ffffff;}body{color: #666666; font-family: "Open Sans", sans-serif;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{color: #eee; font-family: "Roboto", sans-serif; font-weight: 500; line-height: 1.1; margin-top: 0;}body{color: #eee; font-family: "Open Sans", sans-serif; line-height: 24px;}.footer-col-item .item-contact a{color: #eee; display: inline-block; margin-bottom: 7px; width: 100%;}.footer-col-item .item-contact a .link-id{color: #ffffff; margin-left: 0; margin-right: 6px;}.footer-col-item span{margin-left: 7px;}.footer-col-item .item-contact a{color: #eee;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.signUpNewsletter{position: relative;}.signUpNewsletter .gt-email{background: rgba(0, 0, 0, 0) none repeat scroll 0 0; border: 1px solid #eee; border-radius: 0; color: #ffffff; height: 52px;}.signUpNewsletter .btn-go{background: rgba(0, 0, 0, 0) none repeat scroll 0 0; border-color: #eee; border-style: solid; border-width: 0 0 0 1px; bottom: 0; color: #ffffff; font-size: 16px; position: absolute; right: 0; text-transform: uppercase; top: 0; width: 52px;}.footer-bottom-layout{background: #292929 none repeat scroll 0 0; padding: 20px 0; text-align: center; color: #eee;}.socialMedia-footer{margin-bottom: 20px;}.socialMedia-footer > a{display: inline-block; margin: 0 8px;}.footer-bottom-layout{text-align: center;}@import url(\'https://fonts.googleapis.com/css?family=Roboto:400,500,700\');.modal__background{position: fixed; top: 0; right: 0; bottom: 0; left: 0; -webkit-transition: 0.35s; transition: 0.35s; background: rgba(0, 0, 0, 0.8); opacity: 0; pointer-events: none; z-index: 2;}.modal__background:target{opacity: 1; pointer-events: auto;}input{width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;}.button:hover{color: red;}.modal__content{background: #fff; padding: 1rem; position: relative; z-index: 4;}@media screen and (max-width: 699px){.modal__content{margin: 2rem;}}@media screen and (min-width: 700px){.modal__content{margin: 4rem auto; background-color: #eee; max-width: 874px; min-height: 256px;}}.modal__content svg,.modal__content path{position: absolute; top: 1rem; right: 1rem; height: 25px; width: 25px; -webkit-transition: all 0.15s ease-out 0s; transition: all 0.15s ease-out 0s; fill: #bfbfbf;}.modal__content svg:hover,.modal__content path:hover{fill: #0c0c0c;}h2{color: #223f5d; font-family: \'Roboto\', sans-serif; font-size: 40px; margin: 0rem 0 1rem; text-align: center;}.close img{float: right; width: 20px;}.success{width: 100%;}.form_11{color: #283593;}input{color: #283593}#menu{color: #eee; height: 35px;}#menu ul, #menu li{margin: 0; padding: 0; list-style: none}#menu ul{height: 35px}#menu li{float: left; display: inline; position: relative; font: bold 13px Arial;}#menu li a{color: #ccc}#menu a{display: block; line-height: 35px; padding: 0 14px; text-decoration: none; color: #333;}#menu li:hover > a, #menu li a:hover{color: #fff}#menu input{display: none; margin: 0 0; padding: 0 0; width: 80px; height: 35px; opacity: 0; cursor: pointer}#menu label{font: bold 30px Arial; display: none; width: 35px; height: 36px; line-height: 36px; text-align: center}#menu label span{font-size: 13px; position: absolute; left: 35px}#menu ul.menus{height: auto; overflow: hidden; width: 180px; background: #fff; position: absolute; z-index: 99; display: none; border: 1px solid #ccc; border-top: none; color: #333}#menu ul.menus a{color: #333}#menu ul.menus li{display: block; width: 100%; font: 12px Arial; text-transform: none;}#menu li:hover ul.menus{display: block}#menu a.prett, #menu a.trigger2{padding: 0 27px 0 14px}#menu li:hover > a.prett, #menu a.prett:hover{background: #fff; color: #333}#menu a.prett::after{content: ""; width: 0; height: 0; border-width: 6px 5px; border-style: solid; border-color: #eee transparent transparent transparent; position: absolute; top: 15px; right: 9px}#menu ul.menus a:hover{background: #BABABA;}#menu a.trigger2::after{content: ""; width: 0; height: 0; border-width: 5px 6px; border-style: solid; border-color: transparent transparent transparent #eee; position: absolute; top: 13px; right: 9px}@media screen and (max-width: 600px){#menu{position: relative}#menu ul{background: #838383; position: absolute; top: 100%; right: 0; left: 0; z-index: 3; height: auto; display: none;}#menu ul.menus{width: 100%; position: static; border: none}#menu li{display: block; float: none; width: auto; text-align: left}#menu li a{color: #fff}#menu li a:hover{color: #333}#menu li:hover{background: #BABABA; color: #333;}#menu li:hover > a.prett, #menu a.prett:hover{background: #BABABA; color: #333;}#menu ul.menus a{background: #BABABA;}#menu ul.menus a:hover{background: #fff;}#menu input, #menu label{position: absolute; top: 0; left: 0; display: block}#menu input{z-index: 4}#menu input:checked + label{color: white}#menu input:checked ~ ul{display: block}}#regbar{height: 67px; color: black;}fieldset{border: none;}.login{position: absolute; width: 350px; z-index: 1; background-color: #eee; display: none;}.arrow-up{width: 0; height: 0; border-left: 20px solid transparent; border-right: 20px solid transparent; border-bottom: 15px solid #ECF0F1; left: 10%; position: absolute; top: -10px;}.formholder{width: 350px; border-radius: 5px; padding-top: 5px;}.formholder input[type="email"],.formholder input[type="password"]{padding: 7px 5px; margin: 10px 0; width: 96%; display: block; font-size: 18px; border-radius: 5px; border: none; -webkit-transition: 0.3s linear; -moz-transition: 0.3s linear; -o-transition: 0.3s linear; transition: 0.3s linear;}.formholder input[type="email"]:focus,.formholder input[type="password"]:focus{outline: none; box-shadow: 0 0 1px 1px #1abc9c;}.formholder input[type="submit"]{padding: 10px; font-size: 20px; display: block; width: 100%; border: none; color: #fff; background-color: #232f3e; border-radius: 5px;}.formholder input[type="submit"]:hover{background: #506c90;}.randompad{padding: 10px;}.green{color: #1abc9c;}a{color: #ecf0f1; text-decoration: none;}#RegisterButton{color:black; font-size: 20px;}</style><link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><commonLayout> <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> <div id="flipkart-navbar"> <div class="container"> <div class="row row1"> <ul class="largenav pull-right"> <li class="upper-links"><a class="links" href="#">Link 1</a></li><li class="upper-links"><a class="links" href="#">Link 2</a></li><li class="upper-links"><a class="links" href="#">Link 3</a></li><li class="upper-links"><a class="links" href="#">Link 4</a></li><li class="upper-links"><a class="links" href="#">Link 5</a></li><li class="upper-links"><a class="links" href="#">Link 6</a></li><li class="upper-links"> <a class="links" href="#"> <svg class="" width="16px" height="12px" style="overflow: visible;"> <path d="M8.037 17.546c1.487 0 2.417-.93 2.417-2.417H5.62c0 1.486.93 2.415 2.417 2.415m5.315-6.463v-2.97h-.005c-.044-3.266-1.67-5.46-4.337-5.98v-.81C9.01.622 8.436.05 7.735.05 7.033.05 6.46.624 6.46 1.325v.808c-2.667.52-4.294 2.716-4.338 5.98h-.005v2.972l-1.843 1.42v1.376h14.92v-1.375l-1.842-1.42z" fill="#fff"></path> </svg> </a> </li><li class="upper-links dropdown"> <div id="wrap"> <div id="regbar"> <div id="navthing"> <h4><a href="#" id="loginform">Login</a> </h4> <div class="login"> <div class="arrow-up"></div><div class="formholder"> <div class="randompad"> <fieldset> <label name="email">Email</label> <input type="email" placeholder="example@example.com"/> <label name="password">Password</label> <input type="password"/> <input type="submit" value="Login" id="loginbutton"/> <br>Create an account <a href="#"><span id="RegisterButton">Register</span></a> </fieldset> </div></div></div></div></div></div></li></ul> </div><div class="row row2"> <div class="col-sm-2"><span class="largenav"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1200px-DC_Comics_logo.svg.png" width="80%" height="10%"></span></h1> </div><div class="flipkart-navbar-search smallsearch col-sm-8 col-xs-11"> <div class="row"> <input class="flipkart-navbar-input col-xs-11" type="" placeholder="Search for Products, Brands and more" id=search_query name=search_query> <a style="cursor:pointer"> <a class="flipkart-navbar-button col-xs-1 searchButton"> <i class="fa fa-search"></i> </a> </div></div><div class="cart largenav col-sm-2"> <form name="myForm" method="post"> <a href="#open-modal" class="button cart-button" style="color: black">Advance Search</a><br><br><br><br><div id="open-modal" class="modal__background"> <div class="modal__content"> <a href="#close" title="Close" class="close"> <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-128.png"> </a> <div class="form_11"> <div class="col-md-12"> <div class="col-md-3"> Keyword <input type="text" name="keyword"> <br><br></div><div class="col-md-3"> Category <input type="text" name="category"> <br><br></div><div class="col-md-3"> Item #/Sku number <input type="text" name="sku"><br><br></div><div class="col-md-3"> Min. Price <input type="text" name="mip"> <br><br></div></div><div class="col-md-12"> <div class="col-md-3"> Max. Price <input type="text" name="maxprice"> <br><br></div><div class="col-md-3"> Select Color <input type="text" name="color"> <br><br></div><div class="col-md-3"> Tags <input type="text" name="tag"> </div></div><div class="col-md-12" style="margin-left: 2%"> <button class="btn" onclick="return validateForm()">Search</button> <button class="btn" onclick="return clearForm()">Clear</button> </div></div></div></div></form> </div><nav id=\'menu\'> <ul> <li><a class=\'prett\'>PRODUCTS</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> <li><a class=\'prett\'>BRANDS</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> <li><a class=\'prett\'>CATLOG</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> <li><a class=\'prett\'>SERVICE</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> <li><a class=\'prett\'>TOOLS</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> </li><li><a class=\'prett\'>PROMOTIONS</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> <li><a>OUTLET</a></li><li><a class=\'prett\'>ABOUT</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> </li></ul> </nav> </div></div></div></commonLayout>',
 //    attributes: {
 //        class: 'fa fa-header',
 //        title: 'Ecomm-Header'
 //    },
 //    category: 'Header'
 //  });

	// // Footer Layout
	// bm.add('Footer-1', {
	// 	label: 'Footer-1',
	// 	content: '<html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="keywords" content="footer, links, icons"/><title>Distributed Footer</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');*{padding:0;margin:0;}body{font:14px/1.5 Arial, Helvetica, sans-serif;}@media (max-height:800px){footer{position: static;}}.footer-distributed{background-color: #80CBC4;box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);box-sizing: border-box;width: 100%;text-align: left;font: normal 16px sans-serif;padding: 45px 50px;margin-top: 80px;}.footer-distributed .footer-left p{color: #8f9296;font-size: 14px;margin: 0;}/* Footer links */.footer-distributed p.footer-links{font-size:18px;font-weight: bold;color: #ffffff;margin: 0 0 10px;padding: 0;}.footer-distributed p.footer-links a{display:inline-block;line-height: 1.8;text-decoration: none;color: inherit;}.footer-distributed .footer-right{float: right;margin-top: 6px;max-width: 180px;}.footer-distributed .footer-right a{display: inline-block;width: 35px;height: 35px;background-color: #4b7188;border-radius: 2px;font-size: 20px;color: #ffffff;text-align: center;line-height: 35px;margin-left: 3px;}/* If you don\'t want the footer to be responsive, remove these media queries */@media (max-width: 600px){.footer-distributed .footer-left,.footer-distributed .footer-right{text-align: center;}.footer-distributed .footer-right{float: none;margin: 0 auto 20px;}.footer-distributed .footer-left p.footer-links{line-height: 1.8;}}</style><link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"></head><body><footer class="footer-distributed"><div class="footer-right"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-github"></i></a></div><div class="footer-left"><p class="footer-links"><a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·<a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a></p><p>Company Name &copy; 2017</p></div></footer></body></html>',
	// 	attributes: {
	// 	    class: 'fa fa-square-o',
	// 	    title: 'Footer-1'
	// 	},
	// 	category: 'Footer'
	// });

	// // Footer Layout
	// bm.add('Footer-2', {
	// 	label: 'Footer-2',
	// 	content: '<html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="keywords" content="footer, address, phone, icons"/><title>Footer With Address And Phones</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');*{padding:0;margin:0;}html{background-color: #eaf0f2;}body{font:14px/1.5 Arial, Helvetica, sans-serif;}header{text-align: center;padding-top: 100px;margin-bottom:200px;}header h1{font: normal 32px/1.5 \'Open Sans\', sans-serif;color: #3F71AE;padding-bottom: 16px;}header h2{color: #F05283;}header h2 a{color:inherit;text-decoration: none;display: inline-block;border: 1px solid #F05283;padding: 10px 15px;border-radius: 3px;font: bold 14px/1 \'Open Sans\', sans-serif;text-transform: uppercase;}header h2 a:hover{background-color:#F05283;transition:0.2s;color:#fff;}header ul{max-width: 600px;margin: 60px auto 0;}header ul a{text-decoration: none;color: #FFF;text-align: left;background-color: #B9C1CA;padding: 10px 16px;border-radius: 2px;opacity: 0.8;font-size: 16px;display: inline-block;margin: 4px;line-height: 1;outline: none;transition: 0.2s ease;}header ul li a.active{background-color: #66B650;pointer-events: none;}header ul li a:hover{opacity: 1;}header ul{list-style: none;padding: 0;}header ul li{display: inline-block;}/* In our demo, the footers are fixed to the bottom of the page */@media (max-height:800px){footer{position: static;}header{padding-top:40px;}}.footer-distributed{background-color: #292c2f;box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);box-sizing: border-box;width: 100%;text-align: left;font: bold 16px sans-serif;padding: 55px 50px;margin-top: 80px;}.footer-distributed .footer-left,.footer-distributed .footer-center,.footer-distributed .footer-right{display: inline-block;vertical-align: top;}/* Footer left */.footer-distributed .footer-left{width: 40%;}/* The company logo */.footer-distributed h3{color: #ffffff;font: normal 36px \'Cookie\', cursive;margin: 0;}.footer-distributed h3 span{color: #5383d3;}/* Footer links */.footer-distributed .footer-links{color: #ffffff;margin: 20px 0 12px;padding: 0;}.footer-distributed .footer-links a{display:inline-block;line-height: 1.8;text-decoration: none;color: inherit;}.footer-distributed .footer-company-name{color: #8f9296;font-size: 14px;font-weight: normal;margin: 0;}/* Footer Center */.footer-distributed .footer-center{width: 35%;}.footer-distributed .footer-center i{background-color: #33383b;color: #ffffff;font-size: 25px;width: 38px;height: 38px;border-radius: 50%;text-align: center;line-height: 42px;margin: 10px 15px;vertical-align: middle;}.footer-distributed .footer-center i.fa-envelope{font-size: 17px;line-height: 38px;}.footer-distributed .footer-center p{display: inline-block;color: #ffffff;vertical-align: middle;margin:0;}.footer-distributed .footer-center p span{display:block;font-weight: normal;font-size:14px;line-height:2;}.footer-distributed .footer-center p a{color: #5383d3;text-decoration: none;;}/* Footer Right */.footer-distributed .footer-right{width: 20%;}.footer-distributed .footer-company-about{line-height: 20px;color: #92999f;font-size: 13px;font-weight: normal;margin: 0;}.footer-distributed .footer-company-about span{display: block;color: #ffffff;font-size: 14px;font-weight: bold;margin-bottom: 20px;}.footer-distributed .footer-icons{margin-top: 25px;}.footer-distributed .footer-icons a{display: inline-block;width: 35px;height: 35px;cursor: pointer;background-color: #33383b;border-radius: 2px;font-size: 20px;color: #ffffff;text-align: center;line-height: 35px;margin-right: 3px;margin-bottom: 5px;}@media (max-width: 880px){.footer-distributed{font: bold 14px sans-serif;}.footer-distributed .footer-left,.footer-distributed .footer-center,.footer-distributed .footer-right{display: block;width: 100%;margin-bottom: 40px;text-align: center;}.footer-distributed .footer-center i{margin-left: 0;}}</style><link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"><link href="http://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css"></head><body><footer class="footer-distributed"><div class="footer-left"><h3>Company<span>logo</span></h3><p class="footer-links"><a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·<a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a></p><p class="footer-company-name">Company Name &copy; 2015</p></div><div class="footer-center"><div><i class="fa fa-map-marker"></i><p><span>21 Revolution Street</span> Paris, France</p></div><div><i class="fa fa-phone"></i><p>+1 555 123456</p></div><div><i class="fa fa-envelope"></i><p><a href="mailto:support@company.com">support@company.com</a></p></div></div><div class="footer-right"><p class="footer-company-about"><span>About the company</span>Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.</p><div class="footer-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-github"></i></a></div></div></footer></body></html>',
	// 	attributes: {
	// 	    class: 'fa fa-square-o',
	// 	    title: 'Footer-2'
	// 	},
	// 	category: 'Footer'
	// });

	// // Footer Layout
	// bm.add('Footer-3', {
	// 	label: 'Footer-3',
	// 	content: '<html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="keywords" content="footer, contact, form, icons"/><title>Footer Distributed With Contact Form</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');*{padding:0;margin:0;}body{font:14px/1.5 Arial, Helvetica, sans-serif;}@media (max-height:800px){footer{position: static;}header{padding-top:40px;}}.footer-distributed{background-color: #827717;box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);box-sizing: border-box;width: 100%;font: bold 16px sans-serif;text-align: left;padding: 50px 60px 40px;margin-top: 80px;overflow: hidden;}/* Footer left */.footer-distributed .footer-left{float: left;}/* The company logo */.footer-distributed h3{color: #ffffff;font: normal 36px \'Cookie\', cursive;margin: 0 0 10px;}.footer-distributed h3 span{color: #5383d3;}/* Footer links */.footer-distributed .footer-links{color: #ffffff;margin: 0 0 10px;padding: 0;}.footer-distributed .footer-links a{display:inline-block;line-height: 1.8;text-decoration: none;color: inherit;}.footer-distributed .footer-company-name{color: #8f9296;font-size: 14px;font-weight: normal;margin: 0;}/* Footer social icons */.footer-distributed .footer-icons{margin-top: 40px;}.footer-distributed .footer-icons a{display: inline-block;width: 35px;height: 35px;cursor: pointer;background-color: #33383b;border-radius: 2px;font-size: 20px;color: #ffffff;text-align: center;line-height: 35px;margin-right: 3px;margin-bottom: 5px;}/* Footer Right */.footer-distributed .footer-right{float: right;}.footer-distributed .footer-right p{display: inline-block;vertical-align: top;margin: 15px 42px 0 0;color: #ffffff;}/* The contact form */.footer-distributed form{display: inline-block;}.footer-distributed form input,.footer-distributed form textarea{display: block;border-radius: 3px;box-sizing: border-box;background-color: #1f2022;box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);border: none;resize: none;font: inherit;font-size: 14px;font-weight: normal;color: #d1d2d2;width: 400px;padding: 18px;}.footer-distributed ::-webkit-input-placeholder{color: #5c666b;}.footer-distributed ::-moz-placeholder{color: #5c666b;opacity: 1;}.footer-distributed :-ms-input-placeholder{color: #5c666b;}.footer-distributed form input{height: 55px;margin-bottom: 15px;}.footer-distributed form textarea{height: 100px;margin-bottom: 20px;}.footer-distributed form button{border-radius: 3px;background-color: #33383b;color: #ffffff;border: 0;padding: 15px 50px;font-weight: bold;float: right;}/* If you don\'t want the footer to be responsive, remove these media queries */@media (max-width: 1000px){.footer-distributed{font: bold 14px sans-serif;}.footer-distributed .footer-company-name{font-size: 12px;}.footer-distributed form input,.footer-distributed form textarea{width: 250px;}.footer-distributed form button{padding: 10px 35px;}}@media (max-width: 800px){.footer-distributed{padding: 30px;}.footer-distributed .footer-left,.footer-distributed .footer-right{float: none;max-width: 300px;margin: 0 auto;}.footer-distributed .footer-left{margin-bottom: 40px;}.footer-distributed form{margin-top: 30px;}.footer-distributed form{display: block;}.footer-distributed form button{float: none;}}</style><link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"><link href="http://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css"></head><body><footer class="footer-distributed"><div class="footer-left"><h3>Company<span>logo</span></h3><p class="footer-links"><a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·<a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a></p><p class="footer-company-name">Company Name &copy; 2015</p><div class="footer-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-github"></i></a></div></div><div class="footer-right"><p>Contact Us</p><form action="#" method="post"><input type="text" name="email" placeholder="Email"/><textarea name="message" placeholder="Message"></textarea><button>Send</button></form></div></footer></body></html>',
	// 	attributes: {
	// 	    class: 'fa fa-square-o',
	// 	    title: 'Footer-3'
	// 	},
	// 	category: 'Footer'
	// });

	// // Footer Layout
	// bm.add('Footer-4', {
	// 	label: 'Footer-4',
	// 	content: '<html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="keywords" content="footer, search, form, icons"/><title>Footer with a Search Form</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');*{padding:0;margin:0;}html{background-color: #eaf0f2;}body{font:14px/1.5 Arial, Helvetica, sans-serif;}header{text-align: center;padding-top: 100px;margin-bottom:200px;}header h1{font: normal 32px/1.5 \'Open Sans\', sans-serif;color: #3F71AE;padding-bottom: 16px;}header h2{color: #F05283;}header h2 a{color:inherit;text-decoration: none;display: inline-block;border: 1px solid #F05283;padding: 10px 15px;border-radius: 3px;font: bold 14px/1 \'Open Sans\', sans-serif;text-transform: uppercase;}header h2 a:hover{background-color:#F05283;transition:0.2s;color:#fff;}header ul{max-width: 600px;margin: 60px auto 0;}header ul a{text-decoration: none;color: #FFF;text-align: left;background-color: #B9C1CA;padding: 10px 16px;border-radius: 2px;opacity: 0.8;font-size: 16px;display: inline-block;margin: 4px;line-height: 1;outline: none;transition: 0.2s ease;}header ul li a.active{background-color: #66B650;pointer-events: none;}header ul li a:hover{opacity: 1;}header ul{list-style: none;padding: 0;}header ul li{display: inline-block;}@media (max-height:800px){footer{position: static;}header{padding-top:40px;}}.footer-distributed{background-color: #292c2f;box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);box-sizing: border-box;width: 100%;font: bold 16px sans-serif;text-align: left;padding: 50px 60px;margin-top: 80px;overflow: hidden;}/* Footer left */.footer-distributed .footer-left{float: left;}.footer-distributed .footer-links{color: #ffffff;margin: 0 0 10px;padding: 0;}.footer-distributed .footer-links a{display:inline-block;line-height: 1.8;text-decoration: none;color: inherit;}.footer-distributed .footer-company-name{color: #8f9296;font-size: 14px;font-weight: normal;margin: 0;}/* Footer right */.footer-distributed .footer-right{float: right;}/* The search form */.footer-distributed form{position: relative;}.footer-distributed form input{display: block;border-radius: 3px;box-sizing: border-box;background-color: #1f2022;box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);border: none;font: inherit;font-size: 14px;font-weight: normal;color: #d1d2d2;width: 500px;padding: 18px 50px 18px 18px;}.footer-distributed form input:focus{outline: none;}/* Changing the placeholder color */.footer-distributed form input::-webkit-input-placeholder{color: #5c666b;}.footer-distributed form input::-moz-placeholder{opacity: 1;color: #5c666b;}.footer-distributed form input:-ms-input-placeholder{color: #5c666b;}/* The magnify glass icon */.footer-distributed form i{width: 18px;height: 18px;position: absolute;top: 16px;right: 18px;color: #d1d2d2;font-size: 18px;}/* If you don\'t want the footer to be responsive, remove these media queries */@media (max-width: 1000px){.footer-distributed form input{width: 300px;}}@media (max-width: 800px){.footer-distributed{padding: 30px;text-align: center;font: bold 14px sans-serif;}.footer-distributed .footer-company-name{margin-top: 10px;font-size: 12px;}.footer-distributed .footer-left,.footer-distributed .footer-right{float: none;max-width: 300px;margin: 0 auto;}.footer-distributed .footer-left{margin-bottom: 20px;}.footer-distributed form input{width: 100%;}}</style><link rel="stylesheet" href="css/footer-distributed-with-search.css"><link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"></head><body><footer class="footer-distributed"><div class="footer-left"><p class="footer-links"><a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·<a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a></p><p class="footer-company-name">Company Name &copy; 2015</p></div><div class="footer-right"><form method="get" action="#"><input placeholder="Search our website" name="search"/><i class="fa fa-search"></i></form></div></footer></body></html>',
	// 	attributes: {
	// 	    class: 'fa fa-square-o',
	// 	    title: 'Footer-4'
	// 	},
	// 	category: 'Footer'
	// });

	// // Footer Layout
	// bm.add('Footer-5', {
	// 	label: 'Footer-5',
	// 	content: '<html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="keywords" content="footer, basic, centered, links"/><title>Basic, Centered Footer</title><style type="text/css">@import url(\'http://fonts.googleapis.com/css?family=Open+Sans:400,700\');*{padding:0;margin:0;}html{background-color: #eaf0f2;}body{font:14px/1.5 Arial, Helvetica, sans-serif;}header{text-align: center;padding-top: 100px;margin-bottom:200px;}header h1{font: normal 32px/1.5 \'Open Sans\', sans-serif;color: #3F71AE;padding-bottom: 16px;}header h2{color: #F05283;}header h2 a{color:inherit;text-decoration: none;display: inline-block;border: 1px solid #F05283;padding: 10px 15px;border-radius: 3px;font: bold 14px/1 \'Open Sans\', sans-serif;text-transform: uppercase;}header h2 a:hover{background-color:#F05283;transition:0.2s;color:#fff;}header ul{max-width: 600px;margin: 60px auto 0;}header ul a{text-decoration: none;color: #FFF;text-align: left;background-color: #B9C1CA;padding: 10px 16px;border-radius: 2px;opacity: 0.8;font-size: 16px;display: inline-block;margin: 4px;line-height: 1;outline: none;transition: 0.2s ease;}header ul li a.active{background-color: #66B650;pointer-events: none;}header ul li a:hover{opacity: 1;}header ul{list-style: none;padding: 0;}header ul li{display: inline-block;}@media (max-height:800px){footer{position: static;}header{padding-top:40px;}}.footer-basic-centered{background-color: #292c2f;box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);box-sizing: border-box;width: 100%;text-align: center;font: normal 18px sans-serif;padding: 45px;margin-top: 80px;}.footer-basic-centered .footer-company-motto{color: #8d9093;font-size: 24px;margin: 0;}.footer-basic-centered .footer-company-name{color: #8f9296;font-size: 14px;margin: 0;}.footer-basic-centered .footer-links{list-style: none;font-weight: bold;color: #ffffff;padding: 35px 0 23px;margin: 0;}.footer-basic-centered .footer-links a{display:inline-block;text-decoration: none;color: inherit;}/* If you don\'t want the footer to be responsive, remove these media queries */@media (max-width: 600px){.footer-basic-centered{padding: 35px;}.footer-basic-centered .footer-company-motto{font-size: 18px;}.footer-basic-centered .footer-company-name{font-size: 12px;}.footer-basic-centered .footer-links{font-size: 14px;padding: 25px 0 20px;}.footer-basic-centered .footer-links a{line-height: 1.8;}}</style><link rel="stylesheet" href="css/footer-basic-centered.css"></head><footer class="footer-basic-centered"><p class="footer-company-motto">The company motto.</p><p class="footer-links"><a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·<a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a></p><p class="footer-company-name">Company Name &copy; 2015</p></footer></body></html>',
	// 	attributes: {
	// 	    class: 'fa fa-square-o',
	// 	    title: 'Footer-5'
	// 	},
	// 	category: 'Footer'
	// });

 //  // Sidebar Component
 //  bm.add('Sidebar', {
 //    label: 'Sidebar',
 //    content: '<div id="sidebar" style="display: block; width: 100%; min-height: 20px"> <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"> <style type="text/css">#wrapper{padding-left: 250px; -webkit-transition: all 0.5s ease; -moz-transition: all 0.5s ease; -o-transition: all 0.5s ease; transition: all 0.5s ease;}#wrapper.toggled{padding-left: 250px;}#sidebar-wrapper{z-index: 1000; position: fixed; left: 250px; width: 250px; height: 100%; margin-left: -250px; overflow-y: auto; background: #000; -webkit-transition: all 0.5s ease; -moz-transition: all 0.5s ease; -o-transition: all 0.5s ease; transition: all 0.5s ease;}#wrapper.toggled #sidebar-wrapper{width: 250px;}#page-content-wrapper{width: 100%; position: absolute; padding: 15px;}#wrapper.toggled #page-content-wrapper{position: absolute; margin-right: -250px;}/* Sidebar Styles */.sidebar-nav{position: absolute; top: 0; width: 250px; margin: 0; padding: 0; list-style: none; width: 100%;}.sidebar-nav li{text-indent: 20px; line-height: 40px;}.sidebar-nav li a{display: block; text-decoration: none; color: #999999; width: 100%;}.sidebar-nav li a:hover{text-decoration: none; color: #fff; background: rgba(255,255,255,0.2);}.sidebar-nav li a:active,.sidebar-nav li a:focus{text-decoration: none;}.sidebar-nav > .sidebar-brand{height: 65px; font-size: 18px; line-height: 60px;}.sidebar-nav > .sidebar-brand a{color: #999999;}.sidebar-nav > .sidebar-brand a:hover{color: #fff; background: none;}</style><div id="wrapper" class="wrapper"> <div id="sidebar-wrapper"> <ul class="sidebar-nav"> <li class="sidebar-brand"> <a href="#"> Company Name </a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Dashboard</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Shortcuts</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Overview</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Events</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">About</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Services</a> </li><li class="sidebar-link"> <a href="#" class="sidebar-anchor">Contact</a> </li></ul> </div></div></div>',
 //    attributes: {
 //        class: 'fa fa-bars',
 //        title: 'Sidebar'
 //    },
 //    category: 'Sidebar'
 //  });











	// bm.add('Login-1', {
	// 	label: 'Login-1',
	// 	content: '<html><head><meta charset="UTF-8"> <title>Login Form</title> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"> <style>@import url(https://fonts.googleapis.com/css?family=Open+Sans);.btn{display: inline-block; *display: inline; *zoom: 1; padding: 4px 10px 4px; margin-bottom: 0; font-size: 13px; line-height: 18px; color: #333333; text-align: center;text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); vertical-align: middle; background-color: #f5f5f5; background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6); background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6)); background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6); background-image: -o-linear-gradient(top, #ffffff, #e6e6e6); background-image: linear-gradient(top, #ffffff, #e6e6e6); background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#e6e6e6, GradientType=0); border-color: #e6e6e6 #e6e6e6 #e6e6e6; border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); border: 1px solid #e6e6e6; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); cursor: pointer; *margin-left: .3em;}.btn:hover, .btn:active, .btn.active, .btn.disabled, .btn[disabled]{background-color: #e6e6e6;}.btn-large{padding: 9px 14px; font-size: 15px; line-height: normal; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;}.btn:hover{color: #333333; text-decoration: none; background-color: #e6e6e6; background-position: 0 -15px; -webkit-transition: background-position 0.1s linear; -moz-transition: background-position 0.1s linear; -ms-transition: background-position 0.1s linear; -o-transition: background-position 0.1s linear; transition: background-position 0.1s linear;}.btn-primary, .btn-primary:hover{text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); color: #ffffff;}.btn-primary.active{color: rgba(255, 255, 255, 0.75);}.btn-primary{background-color: #4a77d4; background-image: -moz-linear-gradient(top, #6eb6de, #4a77d4); background-image: -ms-linear-gradient(top, #6eb6de, #4a77d4); background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#6eb6de), to(#4a77d4)); background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4); background-image: -o-linear-gradient(top, #6eb6de, #4a77d4); background-image: linear-gradient(top, #6eb6de, #4a77d4); background-repeat: repeat-x; filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#4a77d4, GradientType=0); border: 1px solid #3762bc; text-shadow: 1px 1px 1px rgba(0,0,0,0.4); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5);}.btn-primary:hover, .btn-primary:active, .btn-primary.active, .btn-primary.disabled, .btn-primary[disabled]{filter: none; background-color: #4a77d4;}.btn-block{width: 100%; display:block;}*{-webkit-box-sizing:border-box; -moz-box-sizing:border-box; -ms-box-sizing:border-box; -o-box-sizing:border-box; box-sizing:border-box;}html{width: 100%; height:100%; overflow:hidden;}body{width: 100%;height:100%;font-family: \'Open Sans\', sans-serif;background: #092756;background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top, rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg, #670d10 0%,#092756 100%);background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg, #670d10 0%,#092756 100%);background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg, #670d10 0%,#092756 100%);background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg, #670d10 0%,#092756 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#3E1D6D\', endColorstr=\'#092756\',GradientType=1 );}.login{position: absolute;top: 50%;left: 50%;margin: -150px 0 0 -150px;width:300px;height:300px;}.login h1{color: #fff; text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px; text-align:center;}input{width: 100%; margin-bottom: 10px; background: rgba(0,0,0,0.3);border: none;outline: none;padding: 10px;font-size: 13px;color: #fff;text-shadow: 1px 1px 1px rgba(0,0,0,0.3);border: 1px solid rgba(0,0,0,0.3);border-radius: 4px;box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);-webkit-transition: box-shadow .5s ease;-moz-transition: box-shadow .5s ease;-o-transition: box-shadow .5s ease;-ms-transition: box-shadow .5s ease;transition: box-shadow .5s ease;}input:focus{box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2);}</style> <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script></head><body> <div class="login"><h1>Login</h1> <form method="post"> <input type="text" name="u" placeholder="Username" required="required"/> <input type="password" name="p" placeholder="Password" required="required"/> <button type="submit" class="btn btn-primary btn-block btn-large">Let me in.</button> </form></div><script src="js/index.js"></script></body></html>',
	// 	attributes: {
	// 	    class: 'fa fa-user-o',
	// 	    title: 'Login-1'
	// 	},
	// 	category: 'Login'
	// });

	// // Login Layout
	// bm.add('Login-2', {
	// 	label: 'Login-2',
	// 	content: '<html><head> <meta charset="UTF-8"> <link rel=\'stylesheet prefetch\' href=\'http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\'> <style type="text/css"> @import url(https://fonts.googleapis.com/css?family=Vibur);*{box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; font-family: arial;}body{background: grey;}h1{color: #ccc; text-align: center; font-family: \'Vibur\', cursive; font-size: 50px;}.login-form{width: 350px; padding: 40px 30px; background: #eee; -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px; margin: auto; position: absolute; left: 0; right: 0; top: 50%; -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); -webkit-transform: translateY(-50%); transform: translateY(-50%);}.form-group{position: relative; margin-bottom: 15px;}.form-control{width: 100%; height: 50px; border: none; padding: 5px 7px 5px 15px; background: #fff; color: #666; border: 2px solid #ddd; -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;}.form-control:focus, .form-control:focus + .fa{border-color: #10CE88; color: #10CE88;}.form-group .fa{position: absolute; right: 15px; top: 17px; color: #999;}.log-status.wrong-entry{-moz-animation: wrong-log 0.3s; -webkit-animation: wrong-log 0.3s; animation: wrong-log 0.3s;}.log-status.wrong-entry .form-control, .wrong-entry .form-control + .fa{border-color: #ed1c24; color: #ed1c24;}.log-btn{background: #0AC986; dispaly: inline-block; width: 100%; font-size: 16px; height: 50px; color: #fff; text-decoration: none; border: none; -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;}.link{text-decoration: none; color: #C6C6C6; float: right; font-size: 12px; margin-bottom: 15px;}.link:hover{text-decoration: underline; color: #8C918F;}.alert{display: none; font-size: 12px; color: #f00; float: left;}@-moz-keyframes wrong-log{0%, 100%{left: 0px;}20% , 60%{left: 15px;}40% , 80%{left: -15px;}}@-webkit-keyframes wrong-log{0%, 100%{left: 0px;}20% , 60%{left: 15px;}40% , 80%{left: -15px;}}@keyframes wrong-log{0%, 100%{left: 0px;}20% , 60%{left: 15px;}40% , 80%{left: -15px;}}</style> </head><body> <div class="login-form"> <h1>Vini</h1> <div class="form-group "> <input type="text" class="form-control" placeholder="Username " id="UserName"> <i class="fa fa-user"></i> </div><div class="form-group log-status"> <input type="password" class="form-control" placeholder="Password" id="Passwod"> <i class="fa fa-lock"></i> </div><span class="alert">Invalid Credentials</span> <a class="link" href="#">Lost your password?</a> <button type="button" class="log-btn" >Log in</button> </div></body></html>',
	// 	attributes: {
	// 	    class: 'fa fa-user-o',
	// 	    title: 'Login-2'
	// 	},
	// 	category: 'Login'
	// });

	// // Login Layout
	// bm.add('Login-3', {
	// 	label: 'Login-3',
	// 	content: '<!DOCTYPE html><html ><head> <meta charset="UTF-8"> <style type="text/css"> body{font-family: \'Open Sans\', sans-serif; color:blue; background:#3498db; margin: 0 auto 0 auto; width:100%; text-align:center; margin: 20px 0px 20px 0px;}p{font-size:12px; text-decoration: none; color:#ffffff;}h1{font-size:1.5em; color:#525252;}.box{background:white; width:300px; border-radius:6px; margin: 0 auto 0 auto; padding:0px 0px 70px 0px; border: #2980b9 4px solid;}.email{background:#ecf0f1; border: #ccc 1px solid; border-bottom: #ccc 2px solid; padding: 8px; width:250px; color:#AAAAAA; margin-top:10px; font-size:1em; border-radius:4px;}.password{border-radius:4px; background:#ecf0f1; border: #ccc 1px solid; padding: 8px; width:250px; font-size:1em;}.btn{background:#2ecc71; width:125px; padding-top:5px; padding-bottom:5px; color:white; border-radius:4px; border: #27ae60 1px solid; margin-top:20px; margin-bottom:20px; float:left; margin-left:16px; font-weight:800; font-size:0.8em;}.btn:hover{background:#2CC06B;}#btn2{float:left; background:#3498db; width:125px; padding-top:5px; padding-bottom:5px; color:white; border-radius:4px; border: #2980b9 1px solid; margin-top:20px; margin-bottom:20px; margin-left:10px; font-weight:800; font-size:0.8em;}#btn2:hover{background:#3594D2;}</style></head><body> <link href=\'https://fonts.googleapis.com/css?family=Open+Sans:700,600\' rel=\'stylesheet\' type=\'text/css\'><form method="post" action="index.html"><div class="box"><h1>Dashboard</h1><input type="email" name="email" placeholder="email" class="email"/> <input type="password" name="password" placeholder="password" class="email"/> <a href="#"><div class="btn">Sign In</div></a> <a href="#"><div id="btn2">Sign Up</div></a> </div></form><p>Forgot your password? <u style="color:#f1c40f;">Click Here!</u></p></body></html>',
	// 	attributes: {
	// 	    class: 'fa fa-user-o',
	// 	    title: 'Login-3'
	// 	},
	// 	category: 'Login'
	// });

	// // Login Layout
	// bm.add('Login-4', {
	// 	label: 'Login-4',
	// 	content: '<html><head> <meta charset="UTF-8"> <title>Simple login form</title> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"> <style type="text/css"> @import url(https://fonts.googleapis.com/css?family=Tenor+Sans); html{background-color: #5D92BA; font-family: "Tenor Sans", sans-serif;}.container{width: 500px; height: 400px; margin: 0 auto;}.login{margin-top: 50px; width: 450px;}.login-heading{font: 1.8em/48px "Tenor Sans", sans-serif; color: #a51f1f;}.input-txt{width: 100%; padding: 20px 10px; background: #5D92BA; border: none; font-size: 1em; color: #000000; border-bottom: 1px dotted rgba(250, 250, 250, 0.4); -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; -moz-transition: background-color 0.5s ease-in-out; -o-transition: background-color 0.5s ease-in-out; -webkit-transition: background-color 0.5s ease-in-out; transition: background-color 0.5s ease-in-out;}.input-txt:-moz-placeholder{color: #81aac9;}.input-txt:-ms-input-placeholder{color: #81aac9;}.input-txt::-webkit-input-placeholder{color: #81aac9;}.input-txt:focus{background-color: #4478a0;}.login-footer{margin: 10px 0; overlow: hidden; float: left; width: 100%;}.btn{padding: 15px 30px; border: none; background: #a51f1f; color: #5D92BA;}.btn--right{float: right;}.icon{display: inline-block;}.icon--min{font-size: .9em;}.lnk{font-size: .8em; line-height: 3em; color: #a51f1f; text-decoration: none;}</style></head><body> <div class="container"> <div class="login"> <h1 class="login-heading"> <strong>Welcome.</strong> Please login.</h1> <form method="post"> <input type="text" name="user" placeholder="Username" required="required" class="input-txt"/> <input type="password" name="password" placeholder="Password" required="required" class="input-txt"/> <div class="login-footer"> <a href="#" class="lnk"> <span class="icon icon--min">ಠ╭╮ಠ</span> I\'ve forgotten something </a> <button type="submit" class="btn btn--right">Sign in </button> </div></form> </div></div></body></html>',
	// 	attributes: {
	// 	    class: 'fa fa-user-o',
	// 	    title: 'Login-4'
	// 	},
	// 	category: 'Login'
	// });

	// // Search Layout
	// bm.add('search', {
	// 	label: 'search',
	// 	content: '<html><head><title>search</title><style type="text/css">#search{}#search input[type="text"]{background: url(search-white.png) no-repeat 10px 6px #fcfcfc; border: 1px solid #d1d1d1; font: bold 12px Arial,Helvetica,Sans-serif; color: #bebebe; width: 150px; padding: 6px 15px 6px 35px; -webkit-border-radius: 20px; -moz-border-radius: 20px; border-radius: 20px; text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1); -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) inset; -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) inset; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) inset; -webkit-transition: all 0.7s ease 0s; -moz-transition: all 0.7s ease 0s; -o-transition: all 0.7s ease 0s; transition: all 0.7s ease 0s;}#search input[type="text"]:focus{width: 200px;}</style></head><body><form method="get" action="/search" id="search"> <input name="q" type="text" size="40" placeholder="Search..."/></form></body></html>',
	// 	attributes: {
	// 	    class: 'fa fa-search',
	// 	    title: 'search'
	// 	},
	// 	category: 'Search'
	// });




	// Static components for page

  // Full Home Page Layout
  // bm.add('homepage', {
  //   label: 'Homepage',
  //   content: '<html><head><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><style>.clearfix{clear:both;}.card, .product-card > a, .product_image img{transition-delay:initial;transition-property:all;}.product a, .product-card > a, .product-card > a:hover{text-decoration-line:none;text-decoration-color:initial;}.product-card > a{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat-x:initial;background-repeat-y:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:rgb(242, 242, 242);color:rgb(51, 51, 51);transition-duration:0.1s;transition-timing-function:initial;position:relative;display:block;z-index:0;padding-bottom:5px;text-decoration-style:initial;}.product_buttons .add_to_cart:hover, .product_buttons .product_compare:hover, .product_buttons .product_heart:hover{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat-x:initial;background-repeat-y:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:rgba(255, 255, 255, 0.5);}.product-card > a:hover{text-decoration-style:initial;box-shadow:rgba(0, 0, 0, 0.3) 0px 1px 3px;}.product-card figcaption{display:block;padding-top:0px;padding-right:10px;padding-bottom:0px;padding-left:10px;}.product-card .product-card-address{color:rgb(136, 136, 136);line-height:1.2;}.product-card .product-card-address i{font-size:14px;margin-right:2px;line-height:1.2;}.product-card .product-card-price{display:block;text-align:right;}.product-card .product-card-price .original-price, .product-card .product-card-price .price-savings{line-height:22px;display:inline-block;vertical-align:middle;}.product-card .product-card-price .price-savings{float:left;color:rgb(130, 181, 72);}.product-card .product-card-price .original-price{color:rgb(170, 170, 170);font-size:14px;}.product-card .product-card-price .amount-price{text-align:right;font-size:20px;color:rgb(130, 181, 72);}.product-card .product-card-price .from{font-size:12px;}.product_price span, .product_title h5{font-size:1.1em;line-height:1;}*{box-sizing:border-box;font-family:"Open Sans", Arial, sans-serif;}img{max-width:100%;height:auto;}ul.product_list{list-style-type:none;width:100%;display:inline;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;}.product_image img{display:block;position:absolute;top:0px;bottom:0px;left:0px;right:0px;transition-duration:0.5s;transition-timing-function:ease-in-out;margin-top:auto;margin-right:auto;margin-bottom:auto;margin-left:auto;}.product_image img:hover{transform:scale(1.2, 1.2);}.product_title h5{font-weight:500;padding-bottom:5px;margin-top:auto;margin-right:auto;margin-bottom:auto;margin-left:auto;}.product_price a{color:rgb(0, 0, 0);}.product_desc p{line-height:1.3;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:10px;padding-right:0px;padding-bottom:10px;padding-left:0px;}.product_buttons .product_heart:hover{color:rgb(223, 4, 4);}.product_buttons .product_compare:hover{color:rgb(18, 150, 18);}.product_buttons .add_to_cart:hover{color:rgb(77, 200, 211);}.product a{text-decoration-style:initial;}.product:hover .info{height:40px;}.product:hover .info::before{transform:scaleY(0.7);}.product:hover .info::after{visibility:visible;transform:translateY(10px);}.title a{color:inherit;}.product:hover .title{transform:translateY(-18px);font-weight:700;color:rgb(0, 0, 0);}.actions-wrapper *{width:50%;text-align:center;color:rgb(25, 25, 25);font-size:0.95em;font-weight:700;padding-top:2px;padding-right:0px;padding-bottom:2px;padding-left:0px;}.actions-wrapper ::before{font-family:FontAwesome;margin-right:8px;}.product:hover .actions-wrapper *{visibility:visible;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#c18765, #c18771{position:relative;}#c18793, #c18805{left:-1131px;top:0px;}#c18765, #c18770, #c18772, #c18801, #c18805, #c18810, #c18846, #c18874{width:1170px;height:370px;}#c18801, #c18813{opacity:0;position:absolute;}#c17455, #c18772, #c18793, #c18801{display:none;}#c18770, #c18772, #c18773, #c18777, #c18784, #c18793, #c18800, #c18805, #c18810, #c18813, #c18821, #c18822, #c18826, #c18836, #c18846, #c18853, #c18854, #c18858, #c18868, #c18874, #c18881, #c18882, #c18886{position:absolute;}#c18765, #c18784, #c18800, #c18805, #c18836, #c18868{overflow-x:hidden;overflow-y:hidden;}#c18770{top:0px;left:0px;transform-origin:0px 0px 0px;transform:scale(1);}#c18771{overflow-x:visible;overflow-y:visible;display:block;top:0px;left:0px;}#c18772{top:0px;left:0px;}#c18773, #c18822, #c18854, #c18882{opacity:0.7;display:block;background-color:rgb(0, 0, 0);top:0px;left:0px;width:100%;height:100%;}#c18777, #c18826, #c18858, #c18886{display:block;background-image:url("/bundles/officebrainpage/images/img/loading.gif");background-position-x:50%;background-position-y:50%;background-size:initial;background-repeat-x:no-repeat;background-repeat-y:no-repeat;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:initial;top:0px;left:0px;width:100%;height:100%;}#c18784, #c18800{cursor:move;left:0px;top:0px;z-index:0;}#c18793{z-index:0;pointer-events:none;}#c18801{top:0px;left:0px;background-color:rgb(0, 0, 0);}#c18810, #c18846, #c18874{top:0px;left:0px;}#c18813{width:599px;right:auto;height:65px;bottom:auto;left:-693px;top:4px;}.js-banner-dynamic-height-width, #c18821, #c18836, #c18841, #c18853, #c18868, #c18873, #c18881{width:1170px;height:370px;}#c18821, #c18853, #c18881{top:0px;left:0px;z-index:1000;display:none;}#c18836{top:0px;left:39px;}#c18841, #c18873{top:0px;left:0px;}#c18868{top:0px;left:-1170px;}#c18899{top:157.5px;left:8px;}#c18907{top:157.5px;right:8px;}.home-content{margin-top:150px;}.ob-qa-basic-search-btn{position:absolute;background-color:#232F3E;color:#f8efef;padding:6px 10px 10px 10px;margin:0px 0px 0px 0px;}.ob-qa-basic-search-btn:hover{color:#f8efef;}.js-banner-dynamic-height-width{margin:0px auto 0px auto;}@media only screen and (min-width: 320px){.product_sale p, .product_values .product_buttons button{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat-x:initial;background-repeat-y:initial;background-attachment:initial;background-origin:initial;background-clip:initial;}.product_sale p{color:rgb(255, 255, 255);background-color:red;box-shadow:rgba(0, 0, 0, 0.4) 0px 2px 8px 0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:3px;padding-right:25px;padding-bottom:3px;padding-left:25px;}.product_image .product_buttons{display:none;}.product_values .product_buttons{position:relative;text-align:left;float:left;margin-top:7px;}.product_values .product_buttons button{color:rgb(37, 37, 37);background-color:rgb(255, 255, 255);font-size:1em;width:40px;height:40px;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-right-radius:50%;border-bottom-left-radius:50%;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(0, 0, 0);border-right-color:rgb(0, 0, 0);border-bottom-color:rgb(0, 0, 0);border-left-color:rgb(0, 0, 0);}}@media only screen and (max-width: 480px){.product_title h5{font-weight:700;}}@media only screen and (max-width: 320px){.product_image img{position:relative;}.product_price span{float:left;width:100%;}}</style></head>'+
  //       '<body><homepage><div class="js-body-container js-theme-publish" id="ob-SmcDistributorTheme"> <header> <div id="js-fix-header-controller"> <div class="ob-header"> <div class="main-logo-part"> <div class="ob-logo-block"> <div class="container"> <div class="row"> <div class="col-lg-6 col-md-6 col-sm-8 col-xs-6 logo-col"> <a class="js-editable js-draggable" href="http://localhost/exported/index.html" data-title="Logo" data-id="header_logo_area"><img class="js-logo img-responsive" src="http://i.imgur.com/WQhZy0t.png" data-id="header_logo_area" data-highlightable="1"/></a> </div><div class="col-lg-6 col-md-6 col-sm-4 col-xs-6 shop-menu-col"> <div class="slidemenu shop-menu" id="slidemenu">  <div class="clearfix"> </div></div><div class="clearfix"> </div></div><ul class="nav navbar-nav ui-advance-search pull-right position-inherit"> <li class="dropdown nav-search-btn js-advance-menu position-inherit"> <a class="header-search-medium dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown" aria-expanded="true"><i class="fa fa-search"> </i>Search In </a> <div class="top-search-block"> <div class="search-form searchbox pull-left">  <span class="header-search search-field advance-search-wrap js-advance-search-wrap dropdown"><input class="form-control ob-qa-srch-txt-box" id=search_query name=search_query placeholder="Enter Keyword here"><a style="cursor: pointer" class="ob-qa-basic-search-btn searchButton"><i class="fa fa-search fa-fw"data-highlightable=1></i></a></span> </div> </div></li></ul> </div></div></div></div></div><div class="ob-menu"> <div class="container"> <div class="navbar2 navbar-default mainmenu-nav menu-box menu-box-op2" role="navigation" id="mainmenu-nav"> <div class="navbar-header2"> <a class="navbar-toggle"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></a> </div><div id="mainmenu"> <span class="scroll-logo"><a href="https://smcmadetoorder.com/en_us"><img class="img-responsive" src="Service%20Master%20Clean%20Made%20To%20Order%20Store_files/1492085906_signet-logo.png"/></a></span>  </div><div id="navbar-height-col2"> </div></div></div></div></div></header></div><div class="home-content"> <div class="container"><img class="js-banner-dynamic-height-width" id="c28614" u="image" src="https://smcmadetoorder.com/images/uploads/banner_images/thumb_5d2fd65ac0cbb483f0233b7505bd53fb84580132.jpg" border="0"/> <div class="row"> <div class="col-lg-12"> <div class="ribbon-section"> <div class="container"> <div class="row"> <h3 class="ribbon ribbon-custom-2"> <span>Looking for something else? </span> <a href="https://smcmadetoorder.com/en_us/requestquote"><u>Request a Quote </u></a> or Call (800) 654-3889 </h3> </div></div></div><div class="row pro-img"> <div class="col-md-3 col-xs-12"> <img class="img-responsive center-block" src="https://virtualmarketingcart.com/api/v3/54607c1317207c5f03d63af1/en_us/logo-everything-default-image/ME5183/87/2?color=White&project_id=33&originalImage=http%3A%2F%2Fimage.promoworld.ca%2Fsignet-api%2Fweb%2Fimages%2F33%2Fmedia%2Fcache%2Fthumb_product_image_210x210%2F87%2FME5183-front-1000x.jpg" alt="pulsar bluetooth speaker" title="pulsar bluetooth speaker"/> </div><div class="col-md-3 col-xs-12"> <img class="img-responsive center-block" src="https://virtualmarketingcart.com/api/v3/54607c1317207c5f03d63af1/en_us/logo-everything-default-image/BC12SJB/318/2?project_id=33&originalImage=http%3A%2F%2Fimage.promoworld.ca%2Fsignet-api%2Fweb%2Fimages%2F33%2Fmedia%2Fcache%2Fthumb_product_image_210x210%2F318%2Fbc12sjb_3.jpg" alt="business card magnet w/small bag of jelly beans" title="business card magnet w/small bag of jelly beans"/> </div><div class="col-md-3 col-xs-12"> <img class="img-responsive center-block" src="https://virtualmarketingcart.com/api/v3/54607c1317207c5f03d63af1/en_us/logo-everything-default-image/TM6008/87/2?color=Silver&project_id=33&originalImage=https%3A%2F%2Fvirtualmarketingcart.com%2Fapi%2Fv3%2F54607c1317207c5f03d63af1%2Fen_us%2Fsignet-admin-image%2FTM6008%2F87%3Fcolor%3DSilver" alt="cape cod tumbler" title="cape cod tumbler"/> </div><div class="col-md-3 col-xs-12"> <img class="img-responsive center-block" src="https://virtualmarketingcart.com/api/v3/54607c1317207c5f03d63af1/en_us/logo-everything-default-image/FB3215/87/2?color=Black&project_id=33&originalImage=https%3A%2F%2Fvirtualmarketingcart.com%2Fapi%2Fv3%2F54607c1317207c5f03d63af1%2Fen_us%2Fsignet-admin-image%2FFB3215%2F87%3Fcolor%3DBlack" alt="reply lunch cooler tote" title="reply lunch cooler tote"/> </div></div><div class="clearfix"> </div></div></div></div></div><div class="container"> <div class="banner-box"> <div class="row js-adverise-sortable"> <div class="ui-state-default js-element"> <div class="js-editable" data-id="footer_banner_1_area" data-title="Footer Banner Area" data-type="footer-banner-1-area"> <div class="col-lg-6 col-md-6 col-sm-12 cat-right-side"> <div class="deal-banner js-sub-element" data-id="0" data-title="Small Banner 1"> <a href="#" data-href="yes"><img src="https://smcmadetoorder.com/uploads/themeImages/1492085438_banner-small01-SVMC.jpg" data-src="yes" width="570px" height="185px"/></a> </div><div class="row"> <div class="col-md-12 col-sm-12 col-xs-6 design-ideas"> <div class="deal-banner"> <div class="js-sub-element" data-id="1" data-title="Small Banner 2"> <a href="mailto:info@smcmadetoorder.com" target="_top" data-href="yes"><img src="https://smcmadetoorder.com/uploads/themeImages/1492085448_banner-small02.jpg" data-src="yes" width="570px" height="185px"/></a> </div></div></div></div></div><div class="col-lg-6 col-md-6 col-sm-12 col-xs-6 closeout-bg js-sub-element cat-right-side" data-id="2" data-title="Square Banner"> <a href="http://www.signetcompanystore.com/" target="_blank" data-href="yes"><div class="banner-over"> <div class="deal-banner"> <img src="https://smcmadetoorder.com/uploads/themeImages/1495486896_smc%20bottom%20revised%203.png" data-src="yes" width="570px" height="378px"/> </div></div></a> </div></div></div></div></div></div><div class="clearfix"></div><div class="middle-footer"> <div class="container"> <div class="row js-row-elements"> <div class="col-lg-4 col-md-3 col-sm-3 col-xs-12"> <div class="common-title"> <h3 class="footer-heading">My account </h3> </div><div class="clearfix"> </div><ul class="list-unstyled footer-link"> <li> <a href="https://smcmadetoorder.com/en_us/my-account/info" title="My account">My account</a> </li><li> <a href="https://smcmadetoorder.com/en_us/order-list" title="Order History">Order History</a> </li><li> <a href="https://smcmadetoorder.com/en_us/wish-list" title="Wish List">Wish List</a> </li><li> <a href="https://smcmadetoorder.com/en_us/cart-list" title="My Cart">My Cart</a> </li></ul> </div><div class="col-lg-4 col-md-3 col-sm-3 col-xs-12"> <div class="common-title"> <h3 class="footer-heading">information </h3> </div><div class="clearfix"> </div><ul class="list-unstyled footer-link"> <ul class="list-unstyled footer-link"> <li> <a href="https://smcmadetoorder.com/en_us/page/about-us" title="About Us">About Us</a> </li><li> <a href="https://smcmadetoorder.com/en_us/page/general-info" title="General Information">General Information</a> </li><li> <a href="https://smcmadetoorder.com/en_us/customer-survey" title="Customer Satisfaction Survey">Customer Satisfaction Survey</a> </li><li> <a href="https://smcmadetoorder.com/en_us/page/privacy-policy" title="Privacy Policy">Privacy Policy</a> </li></ul> </ul> </div><div class="col-lg-4 col-md-6 col-sm-6 col-xs-12"> <div class="ui-state-default js-element"> <div class="common-title"> <h3 class="footer-heading">Contact Details </h3> </div><div class="clearfix"> </div><div class="js-editable" data-title="Contact Detail" data-id="footer_contact_area" data-type="footer-contact-area"> <ul class="footer-contact-detail footer-link js-sub-sortable"> <li class="phone-number js-sub-element" data-element-title="Phone" data-id="phone" data-sort="1">(800) 654-3889 </li><li class="email-css js-sub-element" data-element-title="Email" data-id="email" data-sort="2"> <i class="fa fa-envelope"> </i> <span data-title="yes">info@smcmadetoorder.com</span> </li><li class="address-contact js-sub-element" data-element-title="Address" data-id="address" data-sort="3">SIGNET, INC. </li><li class="address-contact-1 js-sub-element" data-element-title="Address1" data-id="address1">1801 N. Shelby Oaks Drive, Suite 12 </li><li class="address-contact-1 js-sub-element" data-element-title="Address2" data-id="address2">Memphis, TN 38134 </li></ul> </div></div></div></div></div></div><div class="bottom-footer"> <div class="container"> <div class="social-icon-box"> <div class="pull-left"> <ul> <li class="social-icon"> <a href="https://facebook.com/gosignet" target="_blank"><i class="fb-icon strip-icon"> </i></a> </li><li class="social-icon"> <a href="https://twitter.com/signetpromo" target="_blank"><i class="twitter-icon strip-icon"> </i></a> </li><li class="social-icon"> <a href="https://www.linkedin.com/company/signet-inc-" target="_blank"><i class="in-icon strip-icon"> </i></a> </li><li class="social-icon"> <a href="https://www.instagram.com/signetinc/" target="_blank"><i class="instagram-icon strip-icon"> </i></a> </li></ul> </div><div class="pull-right"> <p class="newslatter">JOIN OUR NEWSLETTER </p><form class="form-inline news-box" role="form" action="https://smcmadetoorder.com/en_us/newsletter"> <div class="form-group"> <input class="form-control" id="email_id" name="email_send" placeholder="Enter Your Email Address" type="email"/> </div><button class="btn btn-default news-letter-validation-submit-btn" type="submit">Subscribe</button> </form> </div><div class="clearfix"> </div></div><span class="pull-left"> Powered by: <a href="http://i.imgur.com/WQhZy0t.png" target="_blank"><img src="http://i.imgur.com/WQhZy0t.png"/></a></span> <span class="col-lg-7 col-md-7 col-sm-7 col-xs-12 text-center">Copyright Â© 2017 Signet, Inc. All rights reserved</span> </div></div><link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/><link rel="stylesheet" type="text/css" href="https://smcmadetoorder.com/bundles/officebraincustombundletheme/SmcDistributorTheme/css/all-css.css"/></homepage><script src="https://code.jquery.com/jquery-3.2.1.js"></script><script src="./js/client-listing-plugin.js"></script></body></html>',
  //   attributes: {
  //       class: 'fa fa-home',
  //       title: 'Homepage'
  //   },
  //   category: 'Static Components'
  // });

	bm.add('productContents', {
		label: 'Product Content',
		content: '<style type="text/css">*{box-sizing: border-box;}body{margin: 0;}#c3963{padding:0px; margin-top:0px; margin-right:0px; margin-left:0px; text-rendering:optimizeLegibility; font-weight:400; color:rgb(17, 17, 17); font-family:Arial, sans-serif; margin-bottom:0px !important; font-size:21px !important; line-height:1.3 !important;}#c3997{color:rgb(0, 0, 0); font-family:Arial, sans-serif; font-size:small;}#c4025{padding:0px 0px 4px; margin:0px 0px 0.75em; text-rendering:optimizeLegibility; font-size:12px; line-height:1.255; color:rgb(204, 102, 0); font-family:verdana, arial, helvetica, sans-serif;}.container-width{width:90%; max-width:1150px; margin-top:0px; margin-right:auto; margin-bottom:0px; margin-left:auto;}.flex-sect{background-color:rgb(250, 250, 250); padding-top:100px; padding-right:0px; padding-bottom:100px; padding-left:0px; font-family:Helvetica, serif;}.flex-title{margin-bottom:15px; font-size:2em; text-align:center; font-weight:700; color:rgb(85, 85, 85); padding-top:5px; padding-right:5px; padding-bottom:5px; padding-left:5px;}.cards{padding-top:20px; padding-right:0px; padding-bottom:20px; padding-left:0px; display:flex; justify-content:space-around; flex-direction:initial; flex-wrap:wrap;}.card{background-color:white; height:300px; width:300px; margin-bottom:30px; box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 2px 0px; border-top-left-radius:2px; border-top-right-radius:2px; border-bottom-right-radius:2px; border-bottom-left-radius:2px; transition-duration:0.5s; transition-timing-function:ease; transition-delay:initial; transition-property:all; font-weight:100; overflow-x:hidden; overflow-y:hidden;}.card:hover{margin-top:-5px; box-shadow:rgba(0, 0, 0, 0.2) 0px 20px 30px 0px;}.card-header{height:155px; background-image:url("http://placehold.it/350x250/78c5d6/fff/image1.jpg"); background-size:cover; background-position-x:center; background-position-y:center;}.card-header.ch2{background-image:url("http://placehold.it/350x250/459ba8/fff/image2.jpg");}.card-header.ch3{background-image:url("http://placehold.it/350x250/79c267/fff/image3.jpg");}.card-header.ch4{background-image:url("http://placehold.it/350x250/c5d647/fff/image4.jpg");}.card-header.ch5{background-image:url("http://placehold.it/350x250/f28c33/fff/image5.jpg");}.card-header.ch6{background-image:url("http://placehold.it/350x250/e868a2/fff/image6.jpg");}.card-body{padding-top:15px; padding-right:15px; padding-bottom:5px; padding-left:15px; color:rgb(85, 85, 85);}.card-title{font-size:1.4em; margin-bottom:5px;}.card-sub-title{color:rgb(179, 179, 179); font-size:1em; margin-bottom:15px;}.card-desc{font-size:0.85rem; line-height:17px;}.am-sect{padding-top:100px; padding-bottom:100px; font-family:Helvetica, serif;}.img-phone{float:left;}.am-container{display:flex; flex-wrap:wrap; align-items:center; justify-content:space-around;}.am-content{float:left; padding-top:7px; padding-right:7px; padding-bottom:7px; padding-left:7px; width:490px; color:rgb(68, 68, 68); font-weight:100; margin-top:50px;}.am-pre{padding-top:7px; padding-right:7px; padding-bottom:7px; padding-left:7px; color:rgb(177, 177, 177); font-size:15px;}.am-title{padding-top:7px; padding-right:7px; padding-bottom:7px; padding-left:7px; font-size:25px; font-weight:400;}.am-desc{padding-top:7px; padding-right:7px; padding-bottom:7px; padding-left:7px; font-size:17px; line-height:25px;}.am-post{padding-top:7px; padding-right:7px; padding-bottom:7px; padding-left:7px; line-height:25px; font-size:13px;}</style>'+
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

	// Static components for page
	// bm.add('featureSlider', {
	// 	label: 'Feature Slider',
	// 	content: '<style type="text/css"> /*It will be a full-screen slider so we set it to position absolute.*/.css-slider-wrapper{display: block; background: #FFF; overflow: hidden; position: absolute; left: 0; right: 0; top: 0; bottom: 0;}/* Slider */.slider{width: 100%; height: 100%; position: absolute; left: 0; top: 0; opacity: 1; z-index: 0; display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; justify-content: center; align-content: center; -webkit-transition: -webkit-transform 1600ms; transition: -webkit-transform 1600ms, transform 1600ms; -webkit-transform: scale(1); transform: scale(1);}/* Slides Background Color */.slide-1{background: #fbad99; left: 0;}.slide-2{background: #a9785c; left: 100%}.slide-3{background: #9ea6b3; left: 200%}.slide-4{background: #b1a494; left: 300%;}.slider{display: flex; justify-content: flex-start;}.slider-content{width: 635px; padding-left: 100px;}/*Now style elements within each slide. text, a button and an image.*//* Slider Inner Slide Effect */.slider h2{color: #333333; font-weight: 900; text-transform: capitalize; font-size: 60px; font-weight: 300; line-height: 1.2; opacity: 0; -webkit-transform: translateX(500px); transform: translateX(500px); margin-top: 0; letter-spacing: 2px;}.slider h4{font-size: 22px; font-family: "Oswald"; color: rgba(51, 51, 51, 0.349); font-weight: bold; text-transform: uppercase; line-height: 1.2; opacity: 0; -webkit-transform: translateX(500px); transform: translateX(500px);}.slider > img{position: absolute; right: 10%; bottom: 0; height: 100%; opacity: 0; -webkit-transform: translateX(500px); transform: translateX(500px);}.slide-1 > img{right: 0;}.buy-now-btn{background-color: #ea2e49; width: 220px; height: 50px; border-radius: 30px; border: none; font-family: Montserrat; font-size: 20px; font-weight: 100; color: #fff; text-align: left; padding-left: 35px; position: relative; cursor: pointer; transition: all .2s;}.buy-now-btn:hover{box-shadow: 0px 0px 60px -17px rgba(51,51,51,1);}.buy-now-btn:after{content: \'Buy Now\'; font-size: 12px; font-weight: bold; text-transform: uppercase; position: absolute; right: 35px; top: 18px;}.slider .buy-now-btn:focus,.navigation .login-btn:focus{outline: none;}/*Let’s also make sure that when the slide changes, elements within it — such as text and images — animate.*//* Animations */.slider h2{-webkit-transition: opacity 800ms, -webkit-transform 800ms; transition: transform 800ms, opacity 800ms; -webkit-transition-delay: 1s; /* Safari */ transition-delay: 1s;}.slider h4{-webkit-transition: opacity 800ms, -webkit-transform 800ms; transition: transform 800ms, opacity 800ms; -webkit-transition-delay: 1.4s; /* Safari */ transition-delay: 1.4s;}.slider > img{-webkit-transition: opacity 800ms, -webkit-transform 800ms; transition: transform 800ms, opacity 800ms; -webkit-transition-delay: 1.2s; /* Safari */ transition-delay: 1.2s;}/*number pagination in the right corner of each slide. Let’s style that, too*//* Number Pagination */.number-pagination{position: absolute; bottom: 30px; right: 100px; font-family: "Oswald"; font-weight: bold;}.number-pagination span{font-size: 30px; color: #ea2e49; letter-spacing: 4px;}.number-pagination span:after{content: "/4"; font-size: 16px; color: #fff;}/*Awesome! Now, style the slider pagination.*//* Slider Pagger */.slider-pagination{position: absolute; bottom: 30px; width: 575px; left: 100px; z-index: 1000; display: flex; align-items: center;}.slider-pagination label{width: 8px; height: 8px; border-radius: 50%; display: inline-block; background: #fff; margin: 0 10px; cursor: pointer;}/*magically style the radiobuttons to the label styles*//* Slider Pagger Event */.slide-radio1:checked ~ .slider-pagination .page1,.slide-radio2:checked ~ .slider-pagination .page2,.slide-radio3:checked ~ .slider-pagination .page3,.slide-radio4:checked ~ .slider-pagination .page4{width: 14px; height: 14px; border: 2px solid #ea2e49; background: transparent;}/* Slider Slide Effect */.slide-radio1:checked ~ .slider{-webkit-transform: translateX(0%); transform: translateX(0%);}.slide-radio2:checked ~ .slider{-webkit-transform: translateX(-100%); transform: translateX(-100%);}.slide-radio3:checked ~ .slider{-webkit-transform: translateX(-200%); transform: translateX(-200%);}.slide-radio4:checked ~ .slider{-webkit-transform: translateX(-300%); transform: translateX(-300%);}.slide-radio1:checked ~ .slide-1 h2,.slide-radio2:checked ~ .slide-2 h2,.slide-radio3:checked ~ .slide-3 h2,.slide-radio4:checked ~ .slide-4 h2,.slide-radio1:checked ~ .slide-1 h4,.slide-radio2:checked ~ .slide-2 h4,.slide-radio3:checked ~ .slide-3 h4,.slide-radio4:checked ~ .slide-4 h4,.slide-radio1:checked ~ .slide-1 > img,.slide-radio2:checked ~ .slide-2 > img,.slide-radio3:checked ~ .slide-3 > img,.slide-radio4:checked ~ .slide-4 > img{-webkit-transform: translateX(0); transform: translateX(0); opacity: 1}/* Responsive */@media only screen and (max-width: 768px){.slider h2{font-size: 20px;}.slider h4{font-size: 16px;}.slider-content{padding: 0 2%}.navigation{padding: 0 2%;}.navigation-left{display: none;}.number-pagination{right: 2%;}.slider-pagination{left: 2%;}.slider .buy-now-btn{padding: 0 15px; width: 175px; height: 42px;}.slider .buy-now-btn:after{top: 15px;}.slider > img{right: 2%;}.slide-1 > img{right: -110px;}}</style>'+
	// 			'<FeatureSlider><div class="css-slider-wrapper"> <input type="radio" name="slider" class="slide-radio1" checked id="slider_1"> <input type="radio" name="slider" class="slide-radio2" id="slider_2"> <input type="radio" name="slider" class="slide-radio3" id="slider_3"> <input type="radio" name="slider" class="slide-radio4" id="slider_4"> <div class="slider-pagination"> <label for="slider_1" class="page1"></label> <label for="slider_2" class="page2"></label> <label for="slider_3" class="page3"></label> <label for="slider_4" class="page4"></label> </div><div class="slider slide-1"> <img src="https://designmodo.com/demo/full-screen-slider/images/model-1.png" alt=""> <div class="slider-content"> <h4>New Product</h4> <h2>Denim Longline T-Shirt Dress With Split</h2> <button type="button" class="buy-now-btn" name="button">$130</button> </div><div class="number-pagination"> <span>1</span> </div></div><div class="slider slide-2"> <img src="https://designmodo.com/demo/full-screen-slider/images/model-2.png" alt=""> <div class="slider-content"> <h4>New Product</h4> <h2>Denim Longline T-Shirt Dress With Split</h2> <button type="button" class="buy-now-btn" name="button">$130</button> </div><div class="number-pagination"> <span>2</span> </div></div><div class="slider slide-3"> <img src="https://designmodo.com/demo/full-screen-slider/images/model-3.png" alt=""> <div class="slider-content"> <h4>New Product</h4> <h2>Denim Longline T-Shirt Dress With Split</h2> <button type="button" class="buy-now-btn" name="button">$130</button> </div><div class="number-pagination"> <span>3</span> </div></div><div class="slider slide-4"> <img src="https://designmodo.com/demo/full-screen-slider/images/model-4.png" alt=""> <div class="slider-content"> <h4>New Product</h4> <h2>Denim Longline T-Shirt Dress With Split</h2> <button type="button" class="buy-now-btn" name="button">$130</button> </div><div class="number-pagination"> <span>4</span> </div></div></div></FeatureSlider>',
	// 	attributes: {
	// 		class: 'fa fa-code',
	// 		title: 'Feature Slider'
	// 	},
	// 	category: 'Static Components'
	// });

  // bm.add('teamMembers', {
  //     label: 'Team Members',
  //     content: '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" ><style>@import url(https://fonts.googleapis.com/css?family=Raleway:200);body{color: #858585; font-family: \'Raleway\',sans-serif; font-size: 16px; font-weight: 200;}h4,.h4{font-size: 18px; font-weight: bold;}.container{width: 1170px;}.container{margin-left: auto; margin-right: auto; padding-left: 15px; padding-right: 15px;}.team{width: 350px; min-height: 100%; border: 1px solid rgba(133,133,133,.15); background-color: #fff; -moz-box-shadow: 0 0 8px rgba(0,0,0,.09); -webkit-box-shadow: 0 0 8px rgba(0,0,0,.09); box-shadow: 0 0 8px rgba(0,0,0,.09); float: left; margin-left: 16px;}.teamimg{display: block; margin-left: auto; margin-right: auto; position: relative; margin-top: -80px; width:170px; height:170px; background: #fff;}.team-img{width: 170px; height: 170px;}.teamsocial{height: 48px; background-color: #f7f5f5; position: relative; bottom: -14px; left: 0;}.facebook-team{float: left; width: 48px; height: 48px; color: #D1CFCF; display:block; font-size:30px; padding: 7px;}.twitter-team{float: left; width: 48px; height: 48px; color: #D1CFCF; display:block; font-size:30px; padding: 7px;}.google-team{float: left; width: 48px; height: 48px; color: #D1CFCF; display:block; font-size:30px; padding: 7px;}.pinterest-team{float: left; width: 48px; height: 48px; color: #D1CFCF; display:block; font-size:30px; padding: 7px;}.facebook-team:hover{color: #3B5998;}.twitter-team:hover{color: #29B3E1;}.google-team:hover{color: #DE5845;}.pinterest-team:hover{color: #C51C23;}</style>'+
  //         ' <div class="container" style="padding-top: 130px;margin-bottom:48px;"> <div class="row"> <div class="team"> <div class="teamimg"> <img class="team-img" src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"> </div><h4 style="text-align:center;margin-bottom: 2px;margin-top: 25px;">Alex Morrison</h4> <p style="text-align:center;">GRAPHIC DESIGNER / CO-FOUNDER</p><p style="text-align:center;margin-top: -14px;margin-bottom:-8px;padding:23px;">Maecenas non elit egestas, interdum elit eget, ornare massa. Vestibulum imperdiet urna at rutrum interdum. Nullam luctus lorem non magna commodo mattis. Curabitur pharetra pulvinar quam et viverra. Duis interdum et nunc sed laoreet. Cras ultrices dolor id ipsum malesuada congue.Quisque luctus.</p><div class="teamsocial"> <ul> <li style="margin-left:35px;float:left;list-style: none outside none;"> <a href="#" title="Facebook"> <div class="facebook-team"> <i class="fa fa-facebook"></i> </div></a> </li><li style="float:left;list-style: none outside none;"> <a href="#" title="Twitter"> <div class="twitter-team"><i class="fa fa-twitter"></i></div></a> </li><li style="float:left;list-style: none outside none;"> <a href="#" title="Google"> <div class="google-team"> <i class="fa fa-google-plus"></i> </div></a> </li><li style="float:left;list-style: none outside none;"> <a href="#" title="Pinterest"> <div class="pinterest-team"> <i class="fa fa-pinterest"></i> </div></a> </li></ul> </div></div><div class="team"> <div class="teamimg"><img class="team-img" src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"></div><h4 style="text-align:center;margin-bottom: 2px;margin-top: 25px;">Bryan Jones</h4> <p style="text-align:center;">UI / UX DESIGNER</p><p style="text-align:center;margin-top: -14px;margin-bottom:-8px;padding:23px;">Quisque dapibus tincidunt luctus. Nulla consequat lorem vel turpis porta pharetra. Aliquam faucibus magna erat, a gravida dui bibendum eu. Curabitur elementum nibh vel diam luctus varius. Curabitur sem lectus, viverra ultricies quam iaculis, elementum dapibus dui. Phasellus viverra fringilla nunc varius dictum.</p><div class="teamsocial"> <ul> <li style="margin-left:35px;float:left;list-style: none outside none;"> <a href="#" title="Facebook"> <div class="facebook-team"> <i class="fa fa-facebook"></i> </div></a> </li><li style="float:left;list-style: none outside none;"> <a href="#" title="Twitter"> <div class="twitter-team"><i class="fa fa-twitter"></i></div></a> </li><li style="float:left;list-style: none outside none;"> <a href="#" title="Google"> <div class="google-team"> <i class="fa fa-google-plus"></i> </div></a> </li><li style="float:left;list-style: none outside none;"> <a href="#" title="Pinterest"> <div class="pinterest-team"> <i class="fa fa-pinterest"></i> </div></a> </li></ul> </div></div><div class="team"> <div class="teamimg"><img class="team-img" src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"></div><h4 style="text-align:center;margin-bottom: 2px;margin-top: 25px;">Gabrielle Vasques</h4> <p style="text-align:center;">ILLUSTRATOR / CO-FOUNDER</p><p style="text-align:center;margin-top: -14px;margin-bottom:-8px;padding:23px;">Ut tincidunt sollicitudin arcu, non bibendum mi adipiscing sit amet. Nulla et facilisis orci. Fusce bibendum leo sodales, sollicitudin turpis eu, scelerisque nulla. Aliquam et urna ac felis ornare consectetur at vitae libero. Donec nec quam ut odio suscipit aliquam. Nulla sit amet tortor molestie, blandit justo non, imperdiet velit.</p><div class="teamsocial"> <ul> <li style="margin-left:35px;float:left;list-style: none outside none;"> <a href="#" title="Facebook"> <div class="facebook-team"> <i class="fa fa-facebook"></i> </div></a> </li><li style="float:left;list-style: none outside none;"> <a href="#" title="Twitter"> <div class="twitter-team"><i class="fa fa-twitter"></i></div></a> </li><li style="float:left;list-style: none outside none;"> <a href="#" title="Google"> <div class="google-team"> <i class="fa fa-google-plus"></i> </div></a> </li><li style="float:left;list-style: none outside none;"> <a href="#" title="Pinterest"> <div class="pinterest-team"> <i class="fa fa-pinterest"></i> </div></a> </li></ul> </div></div></div></div>',
  //     attributes: {
  //         class: 'fa fa-users',
  //         title: 'Team Members',
  //     },
  //     category: 'Static Components'
  // });

  // bm.add('pricingTable', {
  //     label: 'Pricing Table',
  //     content: '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" ><style>body{background: #303030;}#pricing-table{margin: 100px auto;text-align: center;width: 892px; /* total computed width=222 x 3 + 226 */}#pricing-table .plan{font: 12px \'Lucida Sans\', \'trebuchet MS\', Arial, Helvetica;text-shadow: 0 1px rgba(255,255,255,.8); background: #fff; border: 1px solid #ddd;color: #333;padding: 20px;width: 180px; /* plan width=180 + 20 + 20 + 1 + 1=222px */ float: left;position: relative;}#pricing-table #most-popular{z-index: 2;top: -13px;border-width: 3px;padding: 30px 20px;-moz-border-radius: 5px;-webkit-border-radius: 5px;border-radius: 5px;-moz-box-shadow: 20px 0 10px -10px rgba(0, 0, 0, .15), -20px 0 10px -10px rgba(0, 0, 0, .15);-webkit-box-shadow: 20px 0 10px -10px rgba(0, 0, 0, .15), -20px 0 10px -10px rgba(0, 0, 0, .15);box-shadow: 20px 0 10px -10px rgba(0, 0, 0, .15), -20px 0 10px -10px rgba(0, 0, 0, .15);}#pricing-table .plan:nth-child(1){-moz-border-radius: 5px 0 0 5px;-webkit-border-radius: 5px 0 0 5px;border-radius: 5px 0 0 5px;}#pricing-table .plan:nth-child(4){-moz-border-radius: 0 5px 5px 0;-webkit-border-radius: 0 5px 5px 0;border-radius: 0 5px 5px 0;}/* --------------- */#pricing-table h3{font-size: 20px;font-weight: normal;padding: 20px;margin: -20px -20px 50px -20px;background-color: #eee;background-image: -moz-linear-gradient(#fff,#eee);background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#eee)); background-image: -webkit-linear-gradient(#fff, #eee);background-image: -o-linear-gradient(#fff, #eee);background-image: -ms-linear-gradient(#fff, #eee);background-image: linear-gradient(#fff, #eee);}#pricing-table #most-popular h3{background-color: #ddd;background-image: -moz-linear-gradient(#eee,#ddd);background-image: -webkit-gradient(linear, left top, left bottom, from(#eee), to(#ddd)); background-image: -webkit-linear-gradient(#eee, #ddd);background-image: -o-linear-gradient(#eee, #ddd);background-image: -ms-linear-gradient(#eee, #ddd);background-image: linear-gradient(#eee, #ddd);margin-top: -30px;padding-top: 30px;-moz-border-radius: 5px 5px 0 0;-webkit-border-radius: 5px 5px 0 0;border-radius: 5px 5px 0 0;}#pricing-table .plan:nth-child(1) h3{-moz-border-radius: 5px 0 0 0;-webkit-border-radius: 5px 0 0 0;border-radius: 5px 0 0 0;}#pricing-table .plan:nth-child(4) h3{-moz-border-radius: 0 5px 0 0;-webkit-border-radius: 0 5px 0 0;border-radius: 0 5px 0 0;}#pricing-table h3 span{display: block;font: bold 25px/100px Georgia, Serif;color: #777;background: #fff;border: 5px solid #fff;height: 100px;width: 100px;margin: 10px auto -65px;-moz-border-radius: 100px;-webkit-border-radius: 100px;border-radius: 100px;-moz-box-shadow: 0 5px 20px #ddd inset, 0 3px 0 #999 inset;-webkit-box-shadow: 0 5px 20px #ddd inset, 0 3px 0 #999 inset;box-shadow: 0 5px 20px #ddd inset, 0 3px 0 #999 inset;}/* --------------- */#pricing-table ul{margin: 20px 0 0 0;padding: 0;list-style: none;}#pricing-table li{border-top: 1px solid #ddd;padding: 10px 0;}/* --------------- */#pricing-table .signup{position: relative;padding: 8px 20px;margin: 20px 0 0 0; color: #fff;font: bold 14px Arial, Helvetica;text-transform: uppercase;text-decoration: none;display: inline-block; background-color: #72ce3f;background-image: -moz-linear-gradient(#72ce3f, #62bc30);background-image: -webkit-gradient(linear, left top, left bottom, from(#72ce3f), to(#62bc30)); background-image: -webkit-linear-gradient(#72ce3f, #62bc30);background-image: -o-linear-gradient(#72ce3f, #62bc30);background-image: -ms-linear-gradient(#72ce3f, #62bc30);background-image: linear-gradient(#72ce3f, #62bc30);-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius: 3px; text-shadow: 0 1px 0 rgba(0,0,0,.3); -moz-box-shadow: 0 1px 0 rgba(255, 255, 255, .5), 0 2px 0 rgba(0, 0, 0, .7);-webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, .5), 0 2px 0 rgba(0, 0, 0, .7);box-shadow: 0 1px 0 rgba(255, 255, 255, .5), 0 2px 0 rgba(0, 0, 0, .7);}#pricing-table .signup:hover{background-color: #62bc30;background-image: -moz-linear-gradient(#62bc30, #72ce3f);background-image: -webkit-gradient(linear, left top, left bottom, from(#62bc30), to(#72ce3f)); background-image: -webkit-linear-gradient(#62bc30, #72ce3f);background-image: -o-linear-gradient(#62bc30, #72ce3f);background-image: -ms-linear-gradient(#62bc30, #72ce3f);background-image: linear-gradient(#62bc30, #72ce3f);}#pricing-table .signup:active, #pricing-table .signup:focus{background: #62bc30; top: 2px;-moz-box-shadow: 0 0 3px rgba(0, 0, 0, .7) inset;-webkit-box-shadow: 0 0 3px rgba(0, 0, 0, .7) inset;box-shadow: 0 0 3px rgba(0, 0, 0, .7) inset;}/* --------------- */.clear:before, .clear:after{content:""; display:table}.clear:after{clear:both}.clear{zoom:1}</style>'+
  //         '<div class="container"><div class="col-md-12"><div id="pricing-table" class="clear"> <div class="plan"> <h3>Enterprise<span>$59</span></h3> <a class="signup" href="">Sign up</a> <ul> <li><b>10GB</b> Disk Space</li><li><b>100GB</b> Monthly Bandwidth</li><li><b>20</b> Email Accounts</li><li><b>Unlimited</b> subdomains</li></ul> </div><div class="plan" id="most-popular"> <h3>Professional<span>$29</span></h3> <a class="signup" href="">Sign up</a> <ul> <li><b>5GB</b> Disk Space</li><li><b>50GB</b> Monthly Bandwidth</li><li><b>10</b> Email Accounts</li><li><b>Unlimited</b> subdomains</li></ul> </div><div class="plan"> <h3>Standard<span>$17</span></h3><a class="signup" href="">Sign up</a> <ul> <li><b>3GB</b> Disk Space</li><li><b>25GB</b> Monthly Bandwidth</li><li><b>5</b> Email Accounts</li><li><b>Unlimited</b> subdomains</li></ul> </div><div class="plan"> <h3>Basic<span>$9</span></h3> <a class="signup" href="">Sign up</a> <ul> <li><b>1GB</b> Disk Space</li><li><b>10GB</b> Monthly Bandwidth</li><li><b>2</b> Email Accounts</li><li><b>Unlimited</b> subdomains</li></ul> </div></div></div></div>',
  //     attributes: {
  //         class: 'fa fa-usd',
  //         title: 'Pricing Table',
  //     },
  //     category: 'Static Components'
  // });

  

	// bm.add('bootstrapSlider',{
	// 	label: 'Bootstrap Slider',
	// 	content: '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"><script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script><div id="myCarousel" class="carousel slide" data-ride="carousel"> <ol class="carousel-indicators"> <li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li></ol> <div class="carousel-inner"> <div class="item active"> <img src="http://lorempixel.com/1920/1080/sports/1/" alt="Los Angeles" style="width:100%;"> </div><div class="item"> <img src="http://lorempixel.com/1920/1080/sports/2/" alt="Chicago" style="width:100%;"> </div><div class="item"> <img src="http://lorempixel.com/1920/1080/sports/3/" alt="New york" style="width:100%;"> </div></div><a class="left carousel-control" href="#myCarousel" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> <span class="sr-only">Previous</span> </a> <a class="right carousel-control" href="#myCarousel" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> <span class="sr-only">Next</span> </a> </div>',
	// 	attributes: {
	// 		class: 'fa fa-user',
	// 		title: 'Bootstrap Slider'
	// 	},
	// 	category: 'Static Components'
	// });











  // Ecommerce Components
	// Pre Defined Site Header
	// bm.add('siteHeader', {
	// 	label: 'Header',
	// 	content: '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><style>.clearfix{clear:both}.card,.product-card>a,.product_image img{transition-delay:initial;transition-property:all}.product a,.product-card>a,.product-card>a:hover{text-decoration-line:none;text-decoration-color:initial}.product-card>a{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat-x:initial;background-repeat-y:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:#f2f2f2;color:#333;transition-duration:.1s;transition-timing-function:initial;position:relative;display:block;z-index:0;padding-bottom:5px;text-decoration-style:initial}.product_buttons .add_to_cart:hover,.product_buttons .product_compare:hover,.product_buttons .product_heart:hover{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat-x:initial;background-repeat-y:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:rgba(255,255,255,.5)}.product-card>a:hover{text-decoration-style:initial;box-shadow:rgba(0,0,0,.3) 0 1px 3px}.product-card figcaption{display:block;padding-top:0;padding-right:10px;padding-bottom:0;padding-left:10px}.product-card .product-card-address{color:#888;line-height:1.2}.product-card .product-card-address i{font-size:14px;margin-right:2px;line-height:1.2}.product-card .product-card-price{display:block;text-align:right}.product-card .product-card-price .original-price,.product-card .product-card-price .price-savings{line-height:22px;display:inline-block;vertical-align:middle}.product-card .product-card-price .price-savings{float:left;color:#82b548}.product-card .product-card-price .original-price{color:#aaa;font-size:14px}.product-card .product-card-price .amount-price{text-align:right;font-size:20px;color:#82b548}.product-card .product-card-price .from{font-size:12px}.product_price span,.product_title h5{font-size:1.1em;line-height:1}*{box-sizing:border-box;font-family:"Open Sans",Arial,sans-serif}img{max-width:100%;height:auto}ul.product_list{list-style-type:none;width:100%;display:inline;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0}.product_image img{display:block;position:absolute;top:0;bottom:0;left:0;right:0;transition-duration:.5s;transition-timing-function:ease-in-out;margin-top:auto;margin-right:auto;margin-bottom:auto;margin-left:auto}.product_image img:hover{transform:scale(1.2,1.2)}.product_title h5{font-weight:500;padding-bottom:5px;margin-top:auto;margin-right:auto;margin-bottom:auto;margin-left:auto}.product_price a{color:#000}.product_desc p{line-height:1.3;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:10px;padding-right:0;padding-bottom:10px;padding-left:0}.product_buttons .product_heart:hover{color:#df0404}.product_buttons .product_compare:hover{color:#129612}.product_buttons .add_to_cart:hover{color:#4dc8d3}.product a{text-decoration-style:initial}.product:hover .info{height:40px}.product:hover .info::before{transform:scaleY(.7)}.product:hover .info::after{visibility:visible;transform:translateY(10px)}.title a{color:inherit}.product:hover .title{transform:translateY(-18px);font-weight:700;color:#000}.actions-wrapper *{width:50%;text-align:center;color:#191919;font-size:.95em;font-weight:700;padding-top:2px;padding-right:0;padding-bottom:2px;padding-left:0}.actions-wrapper::before{font-family:FontAwesome;margin-right:8px}.product:hover .actions-wrapper *{visibility:visible}body{margin-top:0;margin-right:0;margin-bottom:0;margin-left:0}#c18765,#c18771{position:relative}#c18793,.footer-div-fix{background-color: transparent !important; border: none !important; font-weight: normal}#c18805{left:-1131px;top:0}#c18765,#c18770,#c18772,#c18801,#c18805,#c18810,#c18846,#c18874{width:1170px;height:370px}#c18801,#c18813{opacity:0;position:absolute}#c17455,#c18772,#c18793,#c18801{display:none}#c18770,#c18772,#c18773,#c18777,#c18784,#c18793,#c18800,#c18805,#c18810,#c18813,#c18821,#c18822,#c18826,#c18836,#c18846,#c18853,#c18854,#c18858,#c18868,#c18874,#c18881,#c18882,#c18886{position:absolute}#c18765,#c18784,#c18800,#c18805,#c18836,#c18868{overflow-x:hidden;overflow-y:hidden}#c18770{top:0;left:0;transform-origin:0 0 0;transform:scale(1)}#c18771{overflow-x:visible;overflow-y:visible;display:block;top:0;left:0}#c18772{top:0;left:0}#c18773,#c18822,#c18854,#c18882{opacity:.7;display:block;background-color:#000;top:0;left:0;width:100%;height:100%}#c18777,#c18826,#c18858,#c18886{display:block;background-image:url(/bundles/officebrainpage/images/img/loading.gif);background-position-x:50%;background-position-y:50%;background-size:initial;background-repeat-x:no-repeat;background-repeat-y:no-repeat;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:initial;top:0;left:0;width:100%;height:100%}#c18784,#c18800{cursor:move;left:0;top:0;z-index:0}#c18793{z-index:0;pointer-events:none}#c18801{top:0;left:0;background-color:#000}#c18810,#c18846,#c18874{top:0;left:0}#c18813{width:599px;right:auto;height:65px;bottom:auto;left:-693px;top:4px}#c18821,#c18836,#c18841,#c18853,#c18868,#c18873,#c18881,.js-banner-dynamic-height-width{width:1170px;height:370px}#c18821,#c18853,#c18881{top:0;left:0;z-index:1000;display:none}#c18836{top:0;left:39px}#c18841,#c18873{top:0;left:0}#c18868{top:0;left:-1170px}#c18899{top:157.5px;left:8px}#c18907{top:157.5px;right:8px}.home-content{margin-top:150px}.ob-qa-basic-search-btn{position:absolute;background-color:teal;color:#f8efef;padding:8px 10px 12px 10px;margin:0}.ob-qa-basic-search-btn:hover{color:#f8efef}.js-banner-dynamic-height-width{margin:0 auto 0 auto}@media only screen and (min-width:320px){.product_sale p,.product_values .product_buttons button{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat-x:initial;background-repeat-y:initial;background-attachment:initial;background-origin:initial;background-clip:initial}.product_sale p{color:#fff;background-color:red;box-shadow:rgba(0,0,0,.4) 0 2px 8px 0;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:3px;padding-right:25px;padding-bottom:3px;padding-left:25px}.product_image .product_buttons{display:none}.product_values .product_buttons{position:relative;text-align:left;float:left;margin-top:7px}.product_values .product_buttons button{color:#252525;background-color:#fff;font-size:1em;width:40px;height:40px;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-right-radius:50%;border-bottom-left-radius:50%;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:#000;border-right-color:#000;border-bottom-color:#000;border-left-color:#000}}@media only screen and (max-width:480px){.product_title h5{font-weight:700}}@media only screen and (max-width:320px){.product_image img{position:relative}.product_price span{float:left;width:100%}}</style>'+
	// 			'<body><homepage><div class="js-body-container js-theme-publish"id=ob-SmcDistributorTheme><header><div id=js-fix-header-controller><div class=ob-header><div class=main-logo-part><div class=ob-logo-block><div class=container><div class=row><div class="col-md-6 col-lg-6 col-xs-6 col-sm-8 logo-col"><a href=http://localhost/exported/index.html class="js-editable js-draggable"data-id=header_logo_area data-title=Logo><img src=http://i.imgur.com/WQhZy0t.png class="img-responsive js-logo"data-highlightable=1 data-id=header_logo_area></a></div><div class="col-md-6 col-lg-6 col-xs-6 col-sm-4 shop-menu-col"><div class="shop-menu slidemenu"id=slidemenu><div class=clearfix></div></div><div class=clearfix></div></div><ul class="position-inherit nav navbar-nav pull-right ui-advance-search"><li class="dropdown js-advance-menu nav-search-btn position-inherit"><a href=javascript:void(0) class="dropdown-toggle header-search-medium"aria-expanded=true data-toggle=dropdown><i class="fa fa-search"></i>Search In</a><div class=top-search-block><div class="pull-left search-form searchbox"><span class="dropdown advance-search-wrap header-search js-advance-search-wrap search-field"><input class="form-control ob-qa-srch-txt-box"id=search_query name=search_query placeholder="Enter Keyword here"><a style="cursor: pointer" class="ob-qa-basic-search-btn searchButton"><i class="fa fa-search fa-fw"data-highlightable=1></i></a></span><div style="display: inline-block; padding-top: 19px; font-size: 14px; color: #232F3E;"><a class="" style="font-family: \'HelveticaNeueLTStd55-Roman\';" href="product-listing.html">Advanced Search</a></div></div></div></ul></div></div></div></div></div><div class=ob-menu><div class=container><div class="mainmenu-nav menu-box menu-box-op2 navbar-default navbar2"id=mainmenu-nav role=navigation><div class=navbar-header2><a class=navbar-toggle><span class=sr-only>Toggle navigation</span><span class=icon-bar></span><span class=icon-bar></span><span class=icon-bar></span></a></div><div id=mainmenu><span class=scroll-logo><a href=https://smcmadetoorder.com/en_us><img src=Service%20Master%20Clean%20Made%20To%20Order%20Store_files/1492085906_signet-logo.png class=img-responsive></a></span></div><div id=navbar-height-col2></div></div></div></div></div></header></div><div class="blk-row" style="min-height: 50px; margin-top:180px"></div><div class=clearfix></div><div class=middle-footer><div class=container><div class="row js-row-elements"><div class="col-xs-12 col-lg-4 col-md-3 col-sm-3"><div class=common-title><h3 class=footer-heading>My account</h3></div><div class=clearfix></div><ul class="footer-link list-unstyled"><li><a href=https://smcmadetoorder.com/en_us/my-account/info title="My account">My account</a><li><a href=https://smcmadetoorder.com/en_us/order-list title="Order History">Order History</a><li><a href=https://smcmadetoorder.com/en_us/wish-list title="Wish List">Wish List</a><li><a href=https://smcmadetoorder.com/en_us/cart-list title="My Cart">My Cart</a></ul></div><div class="col-xs-12 col-lg-4 col-md-3 col-sm-3"><div class=common-title><h3 class=footer-heading>information</h3></div><div class=clearfix></div><ul class="footer-link list-unstyled"><ul class="footer-link list-unstyled"><li><a href=https://smcmadetoorder.com/en_us/page/about-us title="About Us">About Us</a><li><a href=https://smcmadetoorder.com/en_us/page/general-info title="General Information">General Information</a><li><a href=https://smcmadetoorder.com/en_us/customer-survey title="Customer Satisfaction Survey">Customer Satisfaction Survey</a><li><a href=https://smcmadetoorder.com/en_us/page/privacy-policy title="Privacy Policy">Privacy Policy</a></ul></ul></div><div class="col-xs-12 col-lg-4 col-md-6 col-sm-6"><div class="js-element ui-state-default footer-div-fix"><div class=common-title><h3 class=footer-heading>Contact Details</h3></div><div class=clearfix></div><div class=js-editable data-id=footer_contact_area data-title="Contact Detail"data-type=footer-contact-area><ul class="footer-link footer-contact-detail js-sub-sortable"><li class="js-sub-element phone-number"data-element-title=Phone data-id=phone data-sort=1>(800) 654-3889<li class="js-sub-element email-css"data-element-title=Email data-id=email data-sort=2><i class="fa fa-envelope"></i> <span data-title=yes>info@smcmadetoorder.com</span><li class="js-sub-element address-contact"data-element-title=Address data-id=address data-sort=3>SIGNET, INC.<li class="js-sub-element address-contact-1"data-element-title=Address1 data-id=address1>1801 N. Shelby Oaks Drive, Suite 12<li class="js-sub-element address-contact-1"data-element-title=Address2 data-id=address2>Memphis, TN 38134</ul></div></div></div></div></div></div><div class=bottom-footer><div class=container><div class=social-icon-box><div class=pull-left><ul><li class=social-icon><a href=https://facebook.com/gosignet target=_blank><i class="strip-icon fb-icon"></i></a><li class=social-icon><a href=https://twitter.com/signetpromo target=_blank><i class="strip-icon twitter-icon"></i></a><li class=social-icon><a href=https://www.linkedin.com/company/signet-inc- target=_blank><i class="strip-icon in-icon"></i></a><li class=social-icon><a href=https://www.instagram.com/signetinc/ target=_blank><i class="strip-icon instagram-icon"></i></a></ul></div><div class=pull-right><p class=newslatter>JOIN OUR NEWSLETTER<form action=https://smcmadetoorder.com/en_us/newsletter class="form-inline news-box"role=form><div class=form-group><input class=form-control id=email_id name=email_send placeholder="Enter Your Email Address"type=email></div><button class="btn btn-default news-letter-validation-submit-btn"type=submit>Subscribe</button></form></div><div class=clearfix></div></div><span class=pull-left>Powered by: <a href=http://i.imgur.com/WQhZy0t.png target=_blank><img src=http://i.imgur.com/WQhZy0t.png></a></span><span class="col-xs-12 col-lg-7 col-md-7 col-sm-7 text-center">Copyright © 2017 Flowz, Inc. All rights reserved</span></div></div><link href=https://smcmadetoorder.com/bundles/officebraincustombundletheme/SmcDistributorTheme/css/all-css.css rel=stylesheet></homepage></script>',
	// 	attributes: {
	// 		class: 'fa fa-file-text',
	// 		title: 'Header'
	// 	},
	// 	category: 'Ecommerce Blocks'
	// });

	// Flipkart Like header
	// bm.add('siteHeaderNew', {
	// 	label: 'Ecommerce Navabar',
	// 	content: '<style type="text/css">#flipkart-navbar{background-color: #232F3E; color: #FFFFFF;}.row1{padding-top: 10px;}.row2{padding-bottom: 20px;}.flipkart-navbar-input{padding: 11px 16px; border-radius: 2px 0 0 2px; border: 0 none; outline: 0 none; font-size: 15px; color: #000;}.flipkart-navbar-button{background-color: rgb(254, 189, 105); border: 1px solid #ffe11b; border-radius: 0 2px 2px 0; color: #565656; padding: 10px 0; height: 43px; cursor: pointer; padding-left: 18px;}.cart-button{background-color: rgb(254, 189, 105); box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .23), inset 1px 1px 0 0 hsla(0, 0%, 100%, .2); padding: 10px 0; text-align: center; height: 41px; border-radius: 2px; font-weight: 500; width: 120px; display: inline-block; color: #FFFFFF; text-decoration: none; color: inherit; border: none; outline: none;}.cart-button:hover{text-decoration: none; color: #fff; cursor: pointer;}.cart-svg{display: inline-block; width: 16px; height: 16px; vertical-align: middle; margin-right: 8px;}.item-number{border-radius: 3px; background-color: rgba(0, 0, 0, .1); height: 20px; padding: 3px 6px; font-weight: 500; display: inline-block; color: #fff; line-height: 12px; margin-left: 10px;}.upper-links{display: inline-block; padding: 0 11px; line-height: 23px; font-family: \'Roboto\', sans-serif; letter-spacing: 0; color: inherit; border: none; outline: none; font-size: 12px;}.dropdown{position: relative; display: inline-block; margin-bottom: 0px;}.dropdown:hover{background-color: #fff;}.dropdown:hover .links{color: #000;}.dropdown:hover .dropdown-menu{display: block;}.dropdown .dropdown-menu{position: absolute; top: 100%; display: none; background-color: #fff; color: #333; left: 0px; border: 0; border-radius: 0; box-shadow: 0 4px 8px -3px #555454; margin: 0; padding: 0px;}.links{color: #fff; text-decoration: none;}.links:hover{color: #fff; text-decoration: none;}.profile-links{font-size: 12px; font-family: \'Roboto\', sans-serif; border-bottom: 1px solid #e9e9e9; box-sizing: border-box; display: block; padding: 0 11px; line-height: 23px;}.profile-li{padding-top: 2px;}.largenav{display: none;}.smallnav{display: block;}.smallsearch{margin-left: 15px; margin-top: 15px;}.menu{cursor: pointer;}@media screen and (min-width: 768px){.largenav{display: block;}.smallnav{display: none;}.smallsearch{margin: 0px;}}/*Sidenav*/.sidenav{height: 100%; width: 0; position: fixed; z-index: 1; top: 0; left: 0; background-color: #fff; overflow-x: hidden; transition: 0.5s; box-shadow: 0 4px 8px -3px #555454; padding-top: 0px;}.sidenav a{padding: 8px 8px 8px 32px; text-decoration: none; font-size: 25px; color: #818181; display: block; transition: 0.3s}.sidenav .closebtn{position: absolute; top: 0; right: 25px; font-size: 36px; margin-left: 50px; color: #fff;}@media screen and (max-height: 450px){.sidenav a{font-size: 18px;}}.sidenav-heading{font-size: 36px; color: #fff;}'+
	// 				' .footer-top-layout{background: #232F3E none repeat scroll 0 0; color: #ffffff; padding: 40px 0;}.OurBlog{margin-bottom: 32px; text-align: center;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.OurBlog > p{color: #ffffff;}.post-blog-date::after{background: #ffffff none repeat scroll 0 0; bottom: 0; content: ""; height: 4px; left: 0; margin: auto; position: absolute; right: 0; width: 50px;}.post-blog-date{padding-bottom: 25px; position: relative;}body{color: #fff; font-family: "Open Sans",sans-serif; line-height: 24px;}.footer-top-layout [class*="col-sm-"]:first-child{padding: 0;}.footer-top-layout [class*="col-sm-"]{border-right: 2px solid #333333; padding: 0 0 0 28px;}.footer-top-layout{color: #ffffff;}.footer-col-item{min-height: 140px;}address{color: #eee;}.footer-top-layout [class*="col-sm-"]:last-child{border-right: medium none;}.footer-top-layout{color: #ffffff;}body{color: #666666; font-family: "Open Sans",sans-serif;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6{color: #eee; font-family: "Roboto",sans-serif; font-weight: 500; line-height: 1.1; margin-top: 0;}body{color: #eee; font-family: "Open Sans",sans-serif; line-height: 24px;}.footer-col-item .item-contact a{color: #eee; display: inline-block; margin-bottom: 7px; width: 100%;}.footer-col-item .item-contact a .link-id{color: #ffffff; margin-left: 0; margin-right: 6px;}.footer-col-item span{margin-left: 7px;}.footer-col-item .item-contact a{color: #eee;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.signUpNewsletter{position: relative;}.signUpNewsletter .gt-email{background: rgba(0, 0, 0, 0) none repeat scroll 0 0; border: 1px solid #eee; border-radius: 0; color: #ffffff; height: 52px;}.signUpNewsletter .btn-go{background: rgba(0, 0, 0, 0) none repeat scroll 0 0; border-color: #eee; border-style: solid; border-width: 0 0 0 1px; bottom: 0; color: #ffffff; font-size: 16px; position: absolute; right: 0; text-transform: uppercase; top: 0; width: 52px;}.footer-bottom-layout{background: #292929 none repeat scroll 0 0; padding: 20px 0; text-align: center; color: #eee;}.socialMedia-footer{margin-bottom: 20px;}.socialMedia-footer > a{display: inline-block; margin: 0 8px;}.footer-bottom-layout{text-align: center;}</style><link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous">'+
	// 				'<commonLayout><link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"><div id="flipkart-navbar"> <div class="container"> <div class="row row1"> <ul class="largenav pull-right"> <li class="upper-links"><a class="links" href="#">Link 1</a></li><li class="upper-links"><a class="links" href="#">Link 2</a></li><li class="upper-links"><a class="links" href="#">Link 3</a></li><li class="upper-links"><a class="links" href="#">Link 4</a></li><li class="upper-links"><a class="links" href="#">Link 5</a></li><li class="upper-links"><a class="links" href="#">Link 6</a></li><li class="upper-links"> <a class="links" href="#"> <svg class="" width="16px" height="12px" style="overflow: visible;"> <path d="M8.037 17.546c1.487 0 2.417-.93 2.417-2.417H5.62c0 1.486.93 2.415 2.417 2.415m5.315-6.463v-2.97h-.005c-.044-3.266-1.67-5.46-4.337-5.98v-.81C9.01.622 8.436.05 7.735.05 7.033.05 6.46.624 6.46 1.325v.808c-2.667.52-4.294 2.716-4.338 5.98h-.005v2.972l-1.843 1.42v1.376h14.92v-1.375l-1.842-1.42z" fill="#fff"></path> </svg> </a> </li><li class="upper-links dropdown"><a class="links" href="http://clashhacks.in/">Dropdown</a> <ul class="dropdown-menu"> <li class="profile-li"><a class="profile-links" href="#">Link</a></li><li class="profile-li"><a class="profile-links" href="#">Link</a></li><li class="profile-li"><a class="profile-links" href="#">Link</a></li><li class="profile-li"><a class="profile-links" href="#">Link</a></li><li class="profile-li"><a class="profile-links" href="#">Link</a></li><li class="profile-li"><a class="profile-links" href="#">Link</a></li><li class="profile-li"><a class="profile-links" href="#">Link</a></li></ul> </li></ul> </div><div class="row row2"> <div class="col-sm-2"><a href="http://localhost/exported/index.html" style="color: #fff"><h1 style="margin:0px;"><span class="largenav">Flowz</span></h1></a> </div><div class="flipkart-navbar-search smallsearch col-sm-8 col-xs-11"> <div class="row"> <input class="flipkart-navbar-input col-xs-11" type="" placeholder="Search for Products, Brands and more" id=search_query name=search_query> <a style="cursor:pointer"><a class="flipkart-navbar-button col-xs-1 searchButton" > <i class="fa fa-search"></i> </a> </div></div><div class="cart largenav col-sm-2"> <a class="cart-button" href="http://localhost/exported/product-listing.html"> <i class="fa fa-shopping-cart"></i> Link <span class="item-number ">0</span> </a> </div></div></div></div><div id="mySidenav" class="sidenav"> <div class="container" style="background-color: #2874f0; padding-top: 10px;"> <span class="sidenav-heading">Home</span> <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a> </div><a href="#">Link</a> <a href="#">Link</a> <a href="#">Link</a> <a href="#">Link</a></div>'+
	// 				'<div class="blk1" style="min-height: 50px; display: block; width:100%"></div><footer id="footer-Section"> <div class="footer-top-layout"> <div class="container"> <div class="row"> <div class="OurBlog"> <h4>Our Blog</h4> <p>BCM wins mandate for Avendus Wealth Management portal revamp</p><div class="post-blog-date">20th Oct 2016</div></div><div class=" col-lg-8 col-lg-offset-2"> <div class="col-sm-4"> <div class="footer-col-item"> <h4>Go Travel Cloud</h4> <address> 501,507 your company address<br>400015 Maharashtra, UK </address> </div></div><div class="col-sm-4"> <div class="footer-col-item"> <h4>Reach Us</h4> <div class="item-contact"> <a href="tel:630-885-9200"><span class="link-id">P</span>:<span>630-885-9200</span></a> <a href="tel:630-839.2006"><span class="link-id">F</span>:<span>630-839.2006</span></a> <a href="mailto:info@brandcatmedia.com"><span class="link-id">E</span>:<span>info@brandcatmedia.com</span></a> </div></div></div><div class="col-sm-4"> <div class="footer-col-item"> <h4>Sign up for Newsletter</h4> <form class="signUpNewsletter" action="" method="get"> <input name="" class="gt-email form-control" placeholder="You@youremail.com" type="text"> <input name="" class="btn-go" value="Go" type="button"> </form> </div></div></div></div></div></div><div class="footer-bottom-layout"> <div class="socialMedia-footer"> <i class="fa fa-facebook fa-fw fa-2x"></i> <i class="fa fa-google-plus fa-fw fa-2x"></i> <i class="fa fa-twitter fa-fw fa-2x"></i> <i class="fa fa-youtube fa-fw fa-2x"></i> </div><div class="copyright-tag">Copyright © 2017 company name. All Rights Reserved.</div></div></footer></commonLayout>',
	// 	attributes: {
	// 		class: 'fa fa-file-code-o',
	// 		title: 'Ecommerce Navbar'
	// 	},
	// 	category: 'Ecommerce Blocks'
	// });

	// Predefined footer matching with Flipkart like Header
	// bm.add('footer',{
	// 	label: 'Footer & Copyright',
	// 	content: '<style type="text/css">.footer-top-layout{background: #232F3E none repeat scroll 0 0; color: #ffffff; padding: 40px 0;}.OurBlog{margin-bottom: 32px; text-align: center;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.OurBlog > p{color: #ffffff;}.post-blog-date::after{background: #ffffff none repeat scroll 0 0; bottom: 0; content: ""; height: 4px; left: 0; margin: auto; position: absolute; right: 0; width: 50px;}.post-blog-date{padding-bottom: 25px; position: relative;}body{color: #fff; font-family: "Open Sans",sans-serif; line-height: 24px;}.footer-top-layout [class*="col-sm-"]:first-child{padding: 0;}.footer-top-layout [class*="col-sm-"]{border-right: 2px solid #333333; padding: 0 0 0 28px;}.footer-top-layout{color: #ffffff;}.footer-col-item{min-height: 140px;}address{color: #eee;}.footer-top-layout [class*="col-sm-"]:last-child{border-right: medium none;}.footer-top-layout{color: #ffffff;}body{color: #666666; font-family: "Open Sans",sans-serif;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6{color: #eee; font-family: "Roboto",sans-serif; font-weight: 500; line-height: 1.1; margin-top: 0;}body{color: #eee; font-family: "Open Sans",sans-serif; line-height: 24px;}.footer-col-item .item-contact a{color: #eee; display: inline-block; margin-bottom: 7px; width: 100%;}.footer-col-item .item-contact a .link-id{color: #ffffff; margin-left: 0; margin-right: 6px;}.footer-col-item span{margin-left: 7px;}.footer-col-item .item-contact a{color: #eee;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.signUpNewsletter{position: relative;}.signUpNewsletter .gt-email{background: rgba(0, 0, 0, 0) none repeat scroll 0 0; border: 1px solid #eee; border-radius: 0; color: #ffffff; height: 52px;}.signUpNewsletter .btn-go{background: rgba(0, 0, 0, 0) none repeat scroll 0 0; border-color: #eee; border-style: solid; border-width: 0 0 0 1px; bottom: 0; color: #ffffff; font-size: 16px; position: absolute; right: 0; text-transform: uppercase; top: 0; width: 52px;}.footer-bottom-layout{background: #008888 none repeat scroll 0 0; padding: 20px 0; text-align: center; color: #eee;}.socialMedia-footer{margin-bottom: 20px;}.socialMedia-footer > a{display: inline-block; margin: 0 8px;}.footer-bottom-layout{text-align: center;}</style><link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous">'+
	// 			'<footer id="footer-Section"> <div class="footer-top-layout"> <div class="container"> <div class="row"> <div class="OurBlog"> <h4>Our Blog</h4> <p>BCM wins mandate for Avendus Wealth Management portal revamp</p><div class="post-blog-date">20th Oct 2016</div></div><div class=" col-lg-8 col-lg-offset-2"> <div class="col-sm-4"> <div class="footer-col-item"> <h4>Go Travel Cloud</h4> <address> 501,507 your company address<br>400015 Maharashtra, UK </address> </div></div><div class="col-sm-4"> <div class="footer-col-item"> <h4>Reach Us</h4> <div class="item-contact"> <a href="tel:630-885-9200"><span class="link-id">P</span>:<span>630-885-9200</span></a> <a href="tel:630-839.2006"><span class="link-id">F</span>:<span>630-839.2006</span></a> <a href="mailto:info@brandcatmedia.com"><span class="link-id">E</span>:<span>info@brandcatmedia.com</span></a> </div></div></div><div class="col-sm-4"> <div class="footer-col-item"> <h4>Sign up for Newsletter</h4> <form class="signUpNewsletter" action="" method="get"> <input name="" class="gt-email form-control" placeholder="You@youremail.com" type="text"> <input name="" class="btn-go" value="Go" type="button"> </form> </div></div></div></div></div></div><div class="footer-bottom-layout"> <div class="socialMedia-footer"> <i class="fa fa-facebook fa-fw fa-2x"></i> <i class="fa fa-google-plus fa-fw fa-2x"></i> <i class="fa fa-twitter fa-fw fa-2x"></i> <i class="fa fa-youtube fa-fw fa-2x"></i> </div><div class="copyright-tag">Copyright © 2017 company name. All Rights Reserved.</div></div></footer>',
	// 	attributes: {
	// 		class: 'fa fa-html5',
	// 		title: 'Footer & Copyright'
	// 	},
	// 	category: 'Ecommerce Blocks'
	// });

	// Dynamic navigation menu from JSON created from menu builder
	bm.add('navimenu',{
		label: 'Navbar Menu',
		content: '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">'+
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
		content: '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"><style type="text/css">.filters{background-color: #fafafa;padding: 20px;}.panel-group{border: 1px solid #eee;}.filter-heading{border-radius: 0;box-shadow: none;background-color: #fff !important;}.filter-heading:hover{background-color: #f5f5f5 !important;}.filter-heading a:hover, .filter-heading a:focus, .filter-heading a:active{text-decoration: none;}.panel-default{border-color: transparent;}.list-group-item{border: none;}.panel-body{padding: 0;}.colors-list{list-style: none;padding: 20px;margin-left: 0;}.color-link:hover{text-decoration: none !important;}.colors-list li{display: inline;}span.color{min-width: 25px;min-height: 25px;padding: 10px 15px;border: 1px solid #aaa;margin: 5px;}.color.green{background-color: #00FF00;}.color.redd{background-color: #ff0000;}.color.blue{background-color: #0000ff;}.color.teal{background-color: #232F3E;}.color.orange{background-color: orange;}.color.purple{background-color: purple;}.list-group-item{padding-top: 1px;}</style>'+
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
    content:  '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"><script src="https://code.jquery.com/jquery-3.2.1.js" ></script>'+
            '<style type="text/css">.product-card{max-width:23%;font-size:12px;margin:5px;display:inline-block;box-shadow:2px 2px 15px #999}.product-card>a{background:#f2f2f2;color:#333;transition:all .1s;position:relative;display:block;z-index:0;padding-bottom:5px;text-decoration:none}.product-card>a:hover{text-decoration:none;box-shadow:0 1px 3px rgba(0,0,0,.3)}.product-card-title{min-height:70px;font-size:21px}.product-description{min-height:70px;max-height:70px;overflow-y:auto}.product-card-img{display:block;height:250px;width:100%}.product-card figcaption{display:block;padding:0 10px}.product-card .product-card-address{color:#888;line-height:1.2}.product-card .product-card-address i{font-size:14px;margin-right:2px;line-height:1.2}.product-card .product-card-price{display:block;text-align:right}.product-card .product-card-price .original-price,.product-card .product-card-price .price-savings{line-height:22px;display:inline-block;vertical-align:middle}.product-card .product-card-price .price-savings{float:left;color:#82b548}.product-card .product-card-price .original-price{color:#aaa;font-size:14px}.product-card .product-card-price .amount-price{text-align:right;font-size:20px;color:#82b548}.product-card .product-card-price .from{font-size:12px}.product_price span,.product_title h5{font-size:1.1em;line-height:1}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:"Open Sans",Arial,sans-serif}img{max-width:100%;height:auto}ul.product_list{list-style-type:none;margin:0;padding:0;width:100%;display:inline}.product_grid{text-decoration:none;display:inline}.product_item{display:inline-block;background:#fff;border:1px solid #ccc;padding:10px;position:relative;overflow:hidden}.product_sale{position:absolute;z-index:2;right:-28px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);transform:rotate(45deg)}.product_image{position:relative;overflow:hidden}.product_image img{display:block;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.info,.product{position:relative}.product_image img:hover{-o-transform:scale(1.2,1.2);-moz-transform:scale(1.2,1.2);-webkit-transform:scale(1.2,1.2);-ms-transform:scale(1.2,1.2);transform:scale(1.2,1.2)}.product_title{float:left;width:100%;text-transform:uppercase}.product_title h5{margin:auto;font-weight:500;padding-bottom:5px}.product_price a{color:#000}.price_old{color:#ea2e49;text-decoration:line-through}.product_desc p{margin:0;line-height:1.3;padding:10px 0}.product_rating{float:right;width:100px;height:20px;overflow:hidden;background:url(https://bit.ly/1B4PjyM) 0 76% no-repeat}.product_buttons{-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;font-smoothing:antialiased}.product_buttons .product_heart:hover{color:#DF0404;background:rgba(255,255,255,.5)}.product_buttons .product_compare:hover{color:#129612;background:rgba(255,255,255,.5)}.product_buttons .add_to_cart:hover{color:#4DC8D3;background:rgba(255,255,255,.5)}@media only screen and (min-width:320px){.product_sale p{margin:0;color:#fff;background:red;padding:3px 25px;box-shadow:0 2px 8px 0 rgba(0,0,0,.4)}.product_values{float:left;width:calc(100% - 100px);padding:0 10px}.product_rating{margin-right:10px}.product_image{height:150px;float:left;width:100px}.product_image .product_buttons{display:none}.product_desc{overflow:hidden;auto:left;line-height:1}.product_values .product_buttons{position:relative;text-align:left;float:left;margin-top:7px}.product_values .product_buttons button{color:#252525;background:rgba(255,255,255,1);font-size:1em;border-radius:50%;width:40px;height:40px;border:1px solid #000}}@media only screen and (min-width:480px){.product_image{height:250px;width:175px}.product_values{width:calc(100% - 175px)}}@media only screen and (min-width:678px){.product_item{width:49.5%}.product_image{height:150px;width:100px}.product_values{width:calc(100% - 100px)}}@media only screen and (min-width:992px){.product_image{height:250px;width:175px}.product_values{width:calc(100% - 175px)}.product_desc{max-height:200px}}@media only screen and (min-width:1200px){.product_item{width:33%}.product_desc{max-height:131px}}@media only screen and (max-width:992px){.product_desc{max-height:67px}}@media only screen and (max-width:480px){.product_title h5{font-weight:700}}@media only screen and (max-width:320px){.product_buttons,.product_desc,.product_sale{display:none}.product_image img{position:relative}.product_price span{float:left;width:100%}}.listing{list-style:none;margin:20px;padding:0;display:inline-block}.product{width:240px}.img-wrapper,.info{width:100%;text-align:center}.product a{text-decoration:none}.img-wrapper{display:block;height:240px;border:1px solid #afafaf;border-bottom:0;overflow:hidden}.info{background:#000;color:#fff;padding:40px 10px 20px;vertical-align:middle;transform:translateZ(0);box-shadow:0 0 1px transparent;backface-visibility:hidden;transition-property:color,height;transition-duration:.3s,.4s;transition-timing-function:ease-out;height:83px}.info:after,.info:before,.note,.price{position:absolute}.info:before{content:"";z-index:-1;top:0;bottom:0;left:0;right:0;background:#fff;transform:scaleY(0);transform-origin:50%;transition:transform .3s ease-out}.info:after{visibility:hidden;pointer-events:none;z-index:-1;content:"";border-style:solid;transition-duration:.3s;transition-property:transform;left:calc(50% - 11px);bottom:0;border-width:10px 10px 0;border-color:#000 transparent transparent}.product:hover .info{height:40px}.product:hover .info:before{transform:scaleY(.7)}.product:hover .info:after{visibility:visible;transform:translateY(10px)}.slide-title{transition:transform .3s ease-out}.slide-title a{color:inherit}.product:hover .slide-title{transform:translateY(-18px);font-weight:700;color:#000}.price{background:#e32d2c;font-size:1.3em;padding:4px 13px;top:-15px;right:10px}.note.on-sale,.price.sale{background:#00ba2f}.price.old{font-size:.95em;padding:4px 6px;text-decoration:line-through;top:-43px}.actions-wrapper{margin-top:14px;display:flex;justify-content:space-around}.actions-wrapper *{width:50%;padding:2px 0;text-align:center;color:#191919;font-size:.95em;font-weight:700}.actions-wrapper :before{font-family:FontAwesome;margin-right:8px}.wishlist{border-right:1px solid #afafaf}.wishlist:hover{color:#e32d2c}.cart:hover{color:#0a75b9}.product:hover .actions-wrapper *{visibility:visible}.note{top:0;left:0;padding:4px 8px;font-size:.9em}.note.on-sale{color:#fff}.note.no-stock{background:#191919;color:#fff}</style>'+
            '<productListing style="display: block; width: 100%;"><figure class="product-card portrait placeholderCard"> <img class="product-card-img" src="http://placehold.it/400x300"/> <figcaption> <h3 class="product-card-title">Product Title</h3> <div class="product-description">Product Description</div><p class="product-card-address"> <i class="fa fa-map-marker"></i> US</p><div class="product-card-price"> <span class="price-savings">Save 25%</span> <s class="original-price">$ 10.99</s> <p class="amount-price"> <span class="from">starting at</span> $ 10.99<!-- <span class="from">/night</span>--> </p></div><button class="btn btn-info btn-block" style="margin-bottom: 10px" id="addToCartBtn">Add To Cart</button></figcaption></figure>'+
            '<div class="product_grid landscape" style="visibility: hidden;"> <ul class="product_list list"> <li class="product_item"> <div class="product_sale"> <p>On Sale</p></div><div class="product_image"> <a href="#"><img src="http://placehold.it/400x300" alt="Product images"></a> <div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> <div class="quick_view"> <a href="#"> <h6>Quick View</h6> </a> </div></div></div><div class="product_values"> <div class="product_title"> <h5>Product Title</h5> </div><div class="product_price"> <a href="#"><span class="price_old">$79.99</span> <span class="price_new">$11.11</span></a> <span class="product_rating"></span> </div><div class="product_desc"> <p class="truncate">Product Descriptions</p></div><div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> </div></div></li></ul> </div>'+
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
    content: '<style type="text/css">.blk-row{margin-top: 0;}.details,.preview{-webkit-box-orient:vertical;-webkit-box-direction:normal}.add-to-cart,.colors,.like,.price,.product-title,.sizes{text-transform:UPPERCASE;font-weight:700}body{font-family:\'open sans\';overflow-x:hidden}img{max-width:100%}.preview{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}@media screen and (max-width:996px){.preview{margin-bottom:20px}}.preview-pic{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.preview-thumbnail.nav-tabs{border:none;margin-top:15px}.preview-thumbnail.nav-tabs li{width:18%;margin-right:2.5%}.preview-thumbnail.nav-tabs li img{max-width:100%;display:block}.preview-thumbnail.nav-tabs li a{padding:0;margin:0}.preview-thumbnail.nav-tabs li:last-of-type{margin-right:0}.color,.size{margin-right:10px}.tab-content{overflow:hidden}.tab-content>active{height: auto !important}.tab-content img{width:100%;-webkit-animation-name:opacity;animation-name:opacity;-webkit-animation-duration:.3s;animation-duration:.3s}.detail-card{margin-top:50px;background:#eee;padding:3em;line-height:1.5em}@media screen and (min-width:997px){.wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}}.details{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.colors{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.checked,.price span{color:#ff9f1a}.price,.product-description,.product-title,.rating,.sizes,.vote{margin-bottom:15px}.product-title{margin-top:0}.size:first-of-type{margin-left:40px}.color{display:inline-block;vertical-align:middle;height:2em;width:2em;border-radius:2px}.color:first-of-type{margin-left:20px}.add-to-cart,.like{background:#ff9f1a;padding:1.2em 1.5em;border:none;color:#fff;-webkit-transition:background .3s ease;transition:background .3s ease}.add-to-cart:hover,.like:hover{background:#b36800;color:#fff}.not-available{text-align:center;line-height:2em}.not-available:before{font-family:fontawesome;content:"\f00d";color:#fff}.orange{background:#ff9f1a}.green{background:#85ad00}.blue{background:#0076ad}.tooltip-inner{padding:1.3em}@-webkit-keyframes opacity{0%{opacity:0;-webkit-transform:scale(3);transform:scale(3)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes opacity{0%{opacity:0;-webkit-transform:scale(3);transform:scale(3)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}</style>'+
            '<productDetail style="padding: 20px; display: block; width: 100%; min-height: 50px;"><link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"><div class="detail-card"><div class=container-fliud><div class="row wrapper"><div class="col-md-6 preview"><div class="preview-pic tab-content"><div class="tab-pane active"id=pic-1><img src=http://placehold.it/500x500></div><div class=tab-pane id=pic-2><img src=http://placehold.it/500x300></div><div class=tab-pane id=pic-3><img src=http://placehold.it/500x300></div><div class=tab-pane id=pic-4><img src=http://placehold.it/500x300></div><div class=tab-pane id=pic-5><img src=http://placehold.it/500x300></div></div><ul class="nav nav-tabs preview-thumbnail"><li class=active><a data-target=#pic-1 data-toggle=tab><img src=http://placehold.it/200x125></a><li><a data-target=#pic-2 data-toggle=tab><img src=http://placehold.it/200x125></a><li><a data-target=#pic-3 data-toggle=tab><img src=http://placehold.it/200x125></a><li><a data-target=#pic-4 data-toggle=tab><img src=http://placehold.it/200x125></a><li><a data-target=#pic-5 data-toggle=tab><img src=http://placehold.it/200x125></a></ul></div><div class="col-md-6 details"><h3 class=product-title>men\'s shoes fashion</h3><div class=rating><div class=stars><span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span></div><span class=review-no>41 reviews</span></div><p class=product-description>Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.<h4 class=price>current price: <span>$180</span></h4><p class=vote><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong><h5 class=sizes>sizes: <span class=size data-toggle=tooltip title=small>s</span> <span class=size data-toggle=tooltip title=medium>m</span> <span class=size data-toggle=tooltip title=large>l</span> <span class=size data-toggle=tooltip title="xtra large">xl</span></h5><div class=action><button class="btn btn-default add-to-cart"type=button>add to cart</button> <button class="btn btn-default like"type=button><span class="fa fa-heart"></span></button></div></div></div></div></div></productDetail><script src="js/client-product-detail-plugin.js">',
    attributes: {
        class: 'fa fa-shopping-bag',
        title: 'Product Detail Page',
    },
    category: 'Ecommerce Blocks'
  });

  bm.add('productReactiveSearch', {
    label: 'Product Search',
    content:  '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">'+
            '<style type="text/css">.product-card{max-width:23%;font-size:12px;margin:5px;display:inline-block;box-shadow:2px 2px 15px #999}.product-card>a{background:#f2f2f2;color:#333;transition:all .1s;position:relative;display:block;z-index:0;padding-bottom:5px;text-decoration:none}.product-card>a:hover{text-decoration:none;box-shadow:0 1px 3px rgba(0,0,0,.3)}.product-card-title{min-height:70px;font-size:21px}.product-description{min-height:70px;max-height:70px;overflow-y:auto}.product-card-img{display:block;height:250px;width:100%}.product-card figcaption{display:block;padding:0 10px}.product-card .product-card-address{color:#888;line-height:1.2}.product-card .product-card-address i{font-size:14px;margin-right:2px;line-height:1.2}.product-card .product-card-price{display:block;text-align:right}.product-card .product-card-price .original-price,.product-card .product-card-price .price-savings{line-height:22px;display:inline-block;vertical-align:middle}.product-card .product-card-price .price-savings{float:left;color:#82b548}.product-card .product-card-price .original-price{color:#aaa;font-size:14px}.product-card .product-card-price .amount-price{text-align:right;font-size:20px;color:#82b548}.product-card .product-card-price .from{font-size:12px}.product_price span,.product_title h5{font-size:1.1em;line-height:1}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:"Open Sans",Arial,sans-serif}img{max-width:100%;height:auto}ul.product_list{list-style-type:none;margin:0;padding:0;width:100%;display:inline}.product_grid{text-decoration:none;display:inline}.product_item{display:inline-block;background:#fff;border:1px solid #ccc;padding:10px;position:relative;overflow:hidden}.product_sale{position:absolute;z-index:2;right:-28px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);transform:rotate(45deg)}.product_image{position:relative;overflow:hidden}.product_image img{display:block;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.info,.product{position:relative}.product_image img:hover{-o-transform:scale(1.2,1.2);-moz-transform:scale(1.2,1.2);-webkit-transform:scale(1.2,1.2);-ms-transform:scale(1.2,1.2);transform:scale(1.2,1.2)}.product_title{float:left;width:100%;text-transform:uppercase}.product_title h5{margin:auto;font-weight:500;padding-bottom:5px}.product_price a{color:#000}.price_old{color:#ea2e49;text-decoration:line-through}.product_desc p{margin:0;line-height:1.3;padding:10px 0}.product_rating{float:right;width:100px;height:20px;overflow:hidden;background:url(https://bit.ly/1B4PjyM) 0 76% no-repeat}.product_buttons{-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;font-smoothing:antialiased}.product_buttons .product_heart:hover{color:#DF0404;background:rgba(255,255,255,.5)}.product_buttons .product_compare:hover{color:#129612;background:rgba(255,255,255,.5)}.product_buttons .add_to_cart:hover{color:#4DC8D3;background:rgba(255,255,255,.5)}@media only screen and (min-width:320px){.product_sale p{margin:0;color:#fff;background:red;padding:3px 25px;box-shadow:0 2px 8px 0 rgba(0,0,0,.4)}.product_values{float:left;width:calc(100% - 100px);padding:0 10px}.product_rating{margin-right:10px}.product_image{height:150px;float:left;width:100px}.product_image .product_buttons{display:none}.product_desc{overflow:hidden;auto:left;line-height:1}.product_values .product_buttons{position:relative;text-align:left;float:left;margin-top:7px}.product_values .product_buttons button{color:#252525;background:rgba(255,255,255,1);font-size:1em;border-radius:50%;width:40px;height:40px;border:1px solid #000}}@media only screen and (min-width:480px){.product_image{height:250px;width:175px}.product_values{width:calc(100% - 175px)}}@media only screen and (min-width:678px){.product_item{width:49.5%}.product_image{height:150px;width:100px}.product_values{width:calc(100% - 100px)}}@media only screen and (min-width:992px){.product_image{height:250px;width:175px}.product_values{width:calc(100% - 175px)}.product_desc{max-height:200px}}@media only screen and (min-width:1200px){.product_item{width:33%}.product_desc{max-height:131px}}@media only screen and (max-width:992px){.product_desc{max-height:67px}}@media only screen and (max-width:480px){.product_title h5{font-weight:700}}@media only screen and (max-width:320px){.product_buttons,.product_desc,.product_sale{display:none}.product_image img{position:relative}.product_price span{float:left;width:100%}}.listing{list-style:none;margin:20px;padding:0;display:inline-block}.product{width:240px}.img-wrapper,.info{width:100%;text-align:center}.product a{text-decoration:none}.img-wrapper{display:block;height:240px;border:1px solid #afafaf;border-bottom:0;overflow:hidden}.info{background:#000;color:#fff;padding:40px 10px 20px;vertical-align:middle;transform:translateZ(0);box-shadow:0 0 1px transparent;backface-visibility:hidden;transition-property:color,height;transition-duration:.3s,.4s;transition-timing-function:ease-out;height:83px}.info:after,.info:before,.note,.price{position:absolute}.info:before{content:"";z-index:-1;top:0;bottom:0;left:0;right:0;background:#fff;transform:scaleY(0);transform-origin:50%;transition:transform .3s ease-out}.info:after{visibility:hidden;pointer-events:none;z-index:-1;content:"";border-style:solid;transition-duration:.3s;transition-property:transform;left:calc(50% - 11px);bottom:0;border-width:10px 10px 0;border-color:#000 transparent transparent}.product:hover .info{height:40px}.product:hover .info:before{transform:scaleY(.7)}.product:hover .info:after{visibility:visible;transform:translateY(10px)}.slide-title{transition:transform .3s ease-out}.slide-title a{color:inherit}.product:hover .slide-title{transform:translateY(-18px);font-weight:700;color:#000}.price{background:#e32d2c;font-size:1.3em;padding:4px 13px;top:-15px;right:10px}.note.on-sale,.price.sale{background:#00ba2f}.price.old{font-size:.95em;padding:4px 6px;text-decoration:line-through;top:-43px}.actions-wrapper{margin-top:14px;display:flex;justify-content:space-around}.actions-wrapper *{width:50%;padding:2px 0;text-align:center;color:#191919;font-size:.95em;font-weight:700}.actions-wrapper :before{font-family:FontAwesome;margin-right:8px}.wishlist{border-right:1px solid #afafaf}.wishlist:hover{color:#e32d2c}.cart:hover{color:#0a75b9}.product:hover .actions-wrapper *{visibility:visible}.note{top:0;left:0;padding:4px 8px;font-size:.9em}.note.on-sale{color:#fff}.note.no-stock{background:#191919;color:#fff}</style>'+
            '<productReactiveSearch style="display: block;margin-top: 0px;"><figure class="product-card portrait"> <img class="product-card-img" src="http://placehold.it/400x300"/> <figcaption> <h3 class="product-card-title">Product Title</h3> <div class="product-description">Product Sescription</div><p class="product-card-address"> <i class="fa fa-map-marker"></i> US</p><div class="product-card-price"> <span class="price-savings">Save 25%</span> <s class="original-price">$ 10.99</s> <p class="amount-price"> <span class="from">starting at</span> $ 10.99<!-- <span class="from">/night</span>--> </p></div></figcaption></figure>'+
            '<div class="product_grid landscape" style="visibility: hidden;"> <ul class="product_list list"> <li class="product_item"> <div class="product_sale"> <p>On Sale</p></div><div class="product_image"> <a href="#"><img src="http://placehold.it/400x300" alt="Product images"></a> <div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> <div class="quick_view"> <a href="#"> <h6>Quick View</h6> </a> </div></div></div><div class="product_values"> <div class="product_title"> <h5>Product Title</h5> </div><div class="product_price"> <a href="#"><span class="price_old">$79.99</span> <span class="price_new">$11.11</span></a> <span class="product_rating"></span> </div><div class="product_desc"> <p class="truncate">Product Descriptions</p></div><div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> </div></div></li></ul> </div>'+
            '<div class="listing creative" style="visibility: hidden"> <div class="product"> <a class="img-wrapper" href="#"> <img src="https://hussein-alhammad.com/images/codepen/product-card/running-shoe_pink.jpg" alt="Pink running shoe"/> </a> <div class="note on-sale" style="position: absolute;top: 0;left: 0;padding: 4px 8px;font-size: 0.9em;background: #00ba2f;color: #fff;">On sale</div><div class="info"> <div class="slide-title"><a href="#">Some Product</a></div><div class="price sale">$20.50</div><div class="price old">$34.99</div></div><div class="actions-wrapper"> <a href="#" class="add-btn wishlist"><i class="fa fa-heart-o"> Wishlist</a> <a href="#" class="add-btn cart"><i class="fa fa-shopping-cart"> Cart</a> </div></div></div></productReactiveSearch>',
    attributes: { 
        class: 'fa fa-search',
        title: 'Product Block'
    },
    category: 'Ecommerce Blocks'
  });

  bm.add('productCompare', {
      label: 'Compare Products',
      content: '<div style="display: block; min-height: 20px;"><link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"><style type="text/css">.buttons{margin-top: 20px;}.productCounts{color: #008080;font-size: 24px;text-align: center;}.productTitle{text-align: center;min-height: 70px;}.table td{text-align: center;}.quantityInput{width: 50px;}.checkPrice{margin-top: 5px;color: #008080;}.colors-list{list-style: none; margin-top: 5px; text-align: left;}.color-link:hover{text-decoration: none !important;}.colors-list li{display: inline;}span.color{min-width: 15px; min-height: 15px; padding: 5px 10px; border: 1px solid #aaa; margin: 1px;}.color.green{background-color: #00FF00;}.color.redd{background-color: #ff0000;}.color.blue{background-color: #0000ff;}.color.teal{background-color: #232F3E;}.color.orange{background-color: orange;}.color.purple{background-color: purple;}</style>'+
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

  






















    // E-comm WishList
    //  bm.add('WishList_Button', {
    //     label: 'WishList Button',
    //     content: {
    //       script: "",
    //       content: '<div class="ecomm-component ecomm-wishlist"><a href="" class="btn btn-default"><i class="fa fa-heart"></i> Add to Wishlist</a></div>'
    //     },
    //     attributes: {
    //         class: 'fa fa-list-alt',
    //         title: 'WishList Button',
    //     },
    //     category: 'Ecommerce Component'
    // });

    //  // E-comm Add to cart
    //  bm.add('cartButton', {
    //     label: 'Cart Button',
    //     content: {
    //       script: "",
    //       content: '<div class="ecomm-component ecomm-cart"><a href="" class="btn btn-default"><i class="fa fa-shopping-cart"></i> Add to cart</a></div>'
    //     },
    //     attributes: {
    //         class: 'fa fa-list-alt',
    //         title: 'Cart Button',
    //     },
    //     category: 'Ecommerce Component'
    // });


    //  // E-comm Add to cart
    //  bm.add('CompareButton', {
    //     label: 'Compare Button',
    //     content: {
    //       script: "",
    //       content: '<div class="ecomm-component ecomm-compare"><a href="" class="btn btn-default"><i class="fa fa-retweet"></i> Add to Compare</a></div>'
    //     },
    //     attributes: {
    //         class: 'fa fa-list-alt',
    //         title: 'Compare Button',
    //     },
    //     category: 'Ecommerce Component'
    // });

    // // E-comm Add to cart
    //  bm.add('More_Details', {
    //     label: 'More Details',
    //     content: {
    //       script: "",
    //       content: '<div class="ecomm-component ecomm-more-details"><a href="" class="btn btn-default"><i class="fa fa-list-alt"></i> More details</a></div>'
    //     },
    //     attributes: {
    //         class: 'fa fa-list-alt',
    //         title: 'More Details',
    //     },
    //     category: 'Ecommerce Component'
    // });

    //  // E-comm Image
    //  bm.add('image_ecomm', {
    //     label: 'image_ecomm',
    //     content: {
    //       script: "",
    //       content: '<div class="ecomm-component ecomm-product-image"><img src="http://placehold.it/200x150" class="img-responsive center-block" alt=""></div>'
    //     },
    //     attributes: {
    //         class: 'fa fa-picture-o',
    //         title: 'Image',
    //     },
    //     category: 'Ecommerce Component'
    // });


    // E-comm Image
    //  bm.add('Button_ecomm', {
    //     label: 'Button_ecomm',
    //     content: {
    //       script: "",
    //       content: '<div><button>Product Name</button></div>'
    //     },
    //     attributes: {
    //         class: 'fa fa-picture-o',
    //         title: 'Button_ecomm',
    //     },
    //     category: 'Ecommerce Component'
    // });

    // // E-comm Product Name
    //  bm.add('Product Name', {
    //     label: 'Product Name',
    //     content: {
    //       script: "",
    //       content: '<div class="ecomm-component ecomm-product-name"><p>Product Title</p></div>'
    //     },
    //     attributes: {
    //         class: 'fa fa-title',
    //         title: 'Product Name',
    //     },
    //     category: 'Ecommerce Component'
    // });

	

  

	// Social media icons(Mine, not rendering)
	// bm.add('socialIcons',{
	// 	label: 'Social Icons',
	// 	content: '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"><style type="text/css"> .list-unstyled{padding-left: 0;list-style: none;}.list-inline li{display: inline-block;padding-right: 5px;padding-left: 5px;margin-bottom: 10px;}/*---- Genral classes end -------*//*Change icons size here*/.social-icons .fa{font-size: 1.2em;}/*Change icons circle size and color here*/.social-icons .fa{width: 40px;height: 40px;line-height: 40px;text-align: center;color: #FFF;color: rgba(255, 255, 255, 0.8);-webkit-transition: all 0.3s ease-in-out;-moz-transition: all 0.3s ease-in-out;-ms-transition: all 0.3s ease-in-out;-o-transition: all 0.3s ease-in-out;transition: all 0.3s ease-in-out;}.social-icons.icon-circle .fa{border-radius: 50%;}.social-icons .fa:hover, .social-icons .fa:active{color: #FFF;}.social-icons.icon-zoom .fa:hover, .social-icons.icon-zoom .fa:active{-webkit-transform: scale(1.1);-moz-transform: scale(1.1);-ms-transform: scale(1.1);-o-transform: scale(1.1);transform: scale(1.1);}.social-icons .fa-facebook{background-color:#3C599F;}.social-icons .fa-flickr{background-color:#FF0084;}.social-icons .fa-github{background-color:#070709;}.social-icons .fa-google-plus{background-color:#CF3D2E;}.social-icons .fa-instagram{background-color:#A1755C;}.social-icons .fa-linkedin{background-color:#0085AE;}.social-icons .fa-pinterest{background-color:#CC2127;}.social-icons .fa-skype{background-color:#01AEF2;}.social-icons .fa-tumblr{background-color:#314E6C;}.social-icons .fa-twitter{background-color:#32CCFE;}.social-icons .fa-vimeo-square{background-color:#229ACC;}.social-icons .fa-youtube{background-color:#C52F30;}</style> <ul class="social-icons icon-circle icon-zoom list-unstyled list-inline"> <li> <a href="#"><i class="fa fa-facebook"></i></a></li><li> <a href="#"><i class="fa fa-github"></i></a></li><li> <a href="#"><i class="fa fa-google-plus"></i></a></li><li> <a href="#"><i class="fa fa-instagram"></i></a></li><li> <a href="#"><i class="fa fa-linkedin"></i></a></li><li> <a href="#"><i class="fa fa-pinterest"></i></a></li><li> <a href="#"><i class="fa fa-skype"></i></a></li><li> <a href="#"><i class="fa fa-tumblr"></i></a></li><li> <a href="#"><i class="fa fa-twitter"></i></a></li><li> <a href="#"><i class="fa fa-vimeo-square"></i></a></li><a href="#"><li><i class="fa fa-youtube"></i></li></a></ul> </div>',
	// 	attributes: {
	// 		class: 'fa fa-facebook',
	// 		title: 'Social Icons'
	// 	},
	// 	category: 'Dynamic Components'
	// })

	











  // Page Templates

  // Coming Soon
  // bm.add('Template-Coming-Soon', {
  //   label: 'Template',
  //   content: '<!DOCTYPE html><html><title>W3.CSS Template</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"><style>body,h1{font-family: "Raleway", sans-serif}body, html{height: 100%}.bgimg{background-image: url(\'https:\/\/wallpapercave.com/wp/Fj4g4zO.jpg\'); min-height: 100%; background-position: center; background-size: cover;}</style><body><div class="bgimg w3-display-container w3-animate-opacity w3-text-white"> <div class="w3-display-topleft w3-padding-large w3-xlarge"> Logo </div><div class="w3-display-middle"> <h1 class="w3-jumbo w3-animate-top">COMING SOON</h1> <hr class="w3-border-grey" style="margin:auto;width:40%"> <p class="w3-large w3-center">35 days left</p></div><div class="w3-display-bottomleft w3-padding-large"> Powered by <a href="#" target="_blank">Flowz</a> </div></div></body></html>',
  //   attributes: {
  //       class: 'fa fa-home',
  //       title: 'Template'
  //   },
  //   category: 'Template'
  // });
  // // Portfolio
  // bm.add('Template-Portfolio', {
  //   label: 'Template',
  //   content: '<!DOCTYPE html><html><title>W3.CSS Template</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"><link rel=\'stylesheet\' href=\'https://fonts.googleapis.com/css?family=Roboto\'><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><style>html,body,h1,h2,h3,h4,h5,h6{font-family: "Roboto", sans-serif}</style><body class="w3-light-grey"><div class="w3-content w3-margin-top" style="max-width:1400px;"> <div class="w3-row-padding"> <div class="w3-third"> <div class="w3-white w3-text-grey w3-card-4"> <div class="w3-display-container"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WeLZdFD62GEKO_wITiHKZ8pC43XS6Nakaoq5PfjIqJ6MNx6zHw" style="width:100%" alt="Avatar"> <div class="w3-display-bottomleft w3-container w3-text-black"> <h2 style="color: #009688!important">Jane Doe</h2> </div></div><div class="w3-container"> <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p><p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p><p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com</p><p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p><hr> <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p><p>Adobe Photoshop</p><div class="w3-light-grey w3-round-xlarge w3-small"> <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:90%">90%</div></div><p>Photography</p><div class="w3-light-grey w3-round-xlarge w3-small"> <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:80%"> <div class="w3-center w3-text-white">80%</div></div></div><p>Illustrator</p><div class="w3-light-grey w3-round-xlarge w3-small"> <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:75%">75%</div></div><p>Media</p><div class="w3-light-grey w3-round-xlarge w3-small"> <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:50%">50%</div></div><br><p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p><p>English</p><div class="w3-light-grey w3-round-xlarge"> <div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div></div><p>Spanish</p><div class="w3-light-grey w3-round-xlarge"> <div class="w3-round-xlarge w3-teal" style="height:24px;width:55%"></div></div><p>German</p><div class="w3-light-grey w3-round-xlarge"> <div class="w3-round-xlarge w3-teal" style="height:24px;width:25%"></div></div><br></div></div><br></div><div class="w3-twothird"> <div class="w3-container w3-card-2 w3-white w3-margin-bottom"> <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2> <div class="w3-container"> <h5 class="w3-opacity"><b>Front End Developer / w3schools.com</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span class="w3-tag w3-teal w3-round">Current</span></h6> <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p><hr> </div><div class="w3-container"> <h5 class="w3-opacity"><b>Web Developer / something.com</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014</h6> <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p><hr> </div><div class="w3-container"> <h5 class="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012</h6> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br></div></div><div class="w3-container w3-card-2 w3-white"> <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2> <div class="w3-container"> <h5 class="w3-opacity"><b>W3Schools.com</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6> <p>Web Development! All I need to know in one place</p><hr> </div><div class="w3-container"> <h5 class="w3-opacity"><b>London Business School</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6> <p>Master Degree</p><hr> </div><div class="w3-container"> <h5 class="w3-opacity"><b>School of Coding</b></h5> <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6> <p>Bachelor Degree</p><br></div></div></div></div></div><footer class="w3-container w3-teal w3-center w3-margin-top"> <p>Find me on social media.</p><i class="fa fa-facebook-official w3-hover-opacity"></i> <i class="fa fa-instagram w3-hover-opacity"></i> <i class="fa fa-snapchat w3-hover-opacity"></i> <i class="fa fa-pinterest-p w3-hover-opacity"></i> <i class="fa fa-twitter w3-hover-opacity"></i> <i class="fa fa-linkedin w3-hover-opacity"></i> <p>Powered by <a href="#" target="_blank">Flowz</a></p></footer></body></html>',
  //   attributes: {
  //       class: 'fa fa-home',
  //       title: 'Template-2'
  //   },
  //   category: 'Template'
  // });
  // // Basic Site
  // bm.add('Template-Basic-Site', {
  //   label: 'Template',
  //   content: '<!DOCTYPE html><html><title>W3.CSS Template</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><style>body,h1,h2,h3,h4,h5,h6{font-family: "Lato", sans-serif}.w3-bar,h1,button{font-family: "Montserrat", sans-serif}.fa-anchor,.fa-coffee{font-size:200px}</style><body><div class="w3-top"> <div class="w3-bar w3-red w3-card-2 w3-left-align w3-large"> <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" href="javascript:void(0);" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a> <a href="#" class="w3-bar-item w3-button w3-padding-large w3-white">Home</a> <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 1</a> <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 2</a> <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 3</a> <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 4</a> </div><div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large"> <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 1</a> <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 2</a> <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 3</a> <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 4</a> </div></div><header class="w3-container w3-red w3-center" style="padding:128px 16px"> <h1 class="w3-margin w3-jumbo">START PAGE</h1> <p class="w3-xlarge">Template by w3.css</p><button class="w3-button w3-black w3-padding-large w3-large w3-margin-top">Get Started</button></header><div class="w3-row-padding w3-padding-64 w3-container"> <div class="w3-content"> <div class="w3-twothird"> <h1>Lorem Ipsum</h1> <h5 class="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5> <p class="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div><div class="w3-third w3-center"> <i class="fa fa-anchor w3-padding-64 w3-text-red"></i> </div></div></div><div class="w3-row-padding w3-light-grey w3-padding-64 w3-container"> <div class="w3-content"> <div class="w3-third w3-center"> <i class="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right"></i> </div><div class="w3-twothird"> <h1>Lorem Ipsum</h1> <h5 class="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5> <p class="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div></div></div><div class="w3-container w3-black w3-center w3-opacity w3-padding-64"> <h1 class="w3-margin w3-xlarge">Quote of the day: live life</h1></div><footer class="w3-container w3-padding-64 w3-center w3-opacity" style="color: red"> <div class="w3-xlarge w3-padding-32"> <i class="fa fa-facebook-official w3-hover-opacity"></i> <i class="fa fa-instagram w3-hover-opacity"></i> <i class="fa fa-snapchat w3-hover-opacity"></i> <i class="fa fa-pinterest-p w3-hover-opacity"></i> <i class="fa fa-twitter w3-hover-opacity"></i> <i class="fa fa-linkedin w3-hover-opacity"></i> </div><p>Powered by <a href="#" target="_blank">Flowz</a></p></footer></body></html>',
  //   attributes: {
  //       class: 'fa fa-home',
  //       title: 'Template-2'
  //   },
  //   category: 'Template'
  // });











  // Sweda like components
  
  bm.add('Slider', {
    label: 'Slider',
    content: '<Slider style="display: block; min-height: 50px"> <style>#slider{margin: 0 auto; width: 1146px; position: relative;}#slides{background: #fff; padding: 5px; -webkit-box-shadow: 2px 2px 4px #333, inset 1px 1px 0 #ddd; -moz-box-shadow: 2px 2px 4px #333, inset 1px 1px 0 #ddd; -o-box-shadow: 2px 2px 4px #333, inset 1px 1px 0 #ddd; -ms-box-shadow: 2px 2px 4px #333, inset 1px 1px 0 #ddd; box-shadow: 2px 2px 4px #333, inset 1px 1px 0 #ddd; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;}.inner{width: 500%;}.inner:after{display: block; height: 0; clear: both;}.page{float: left; width: 20%;}.page img{width: 100%; height: 466px;}#overflow{overflow: hidden;}#slider input{display: none;}#controls{position: absolute; width: 100%; top: 216px; left: 0; height: 50px;}#controls label{display: none; opacity: 0.3; cursor: pointer;}#controls label:hover{opacity: 0.8;}#slide1:checked ~ #controls label:nth-child(2), #slide2:checked ~ #controls label:nth-child(3), #slide3:checked ~ #controls label:nth-child(4), #slide4:checked ~ #controls label:nth-child(5), #slide5:checked ~ #controls label:nth-child(1){width: 0; height: 0; border-top: 20px solid transparent; border-left: 20px solid #333; border-bottom: 20px solid transparent; float: right; margin-right: -30px; display: block;}#slide1:checked ~ #controls label:nth-child(5), #slide2:checked ~ #controls label:nth-child(1), #slide3:checked ~ #controls label:nth-child(2), #slide4:checked ~ #controls label:nth-child(3), #slide5:checked ~ #controls label:nth-child(4){width: 0; height: 0; border-top: 20px solid transparent; border-bottom: 20px solid transparent; border-right: 20px solid rgb(51, 51, 51); float: left; display: block; margin-left: -27px;}#slide1:checked ~ #slides .inner{margin-left: 0;}#slide2:checked ~ #slides .inner{margin-left: -100%;}#slide3:checked ~ #slides .inner{margin-left: -200%;}#slide4:checked ~ #slides .inner{margin-left: -300%;}#slide5:checked ~ #slides .inner{margin-left: -400%;}#active{text-align: center; margin-top: 10px; text-align: center; vertical-align: middle; padding-right: 3px;}#active label{padding: 6px; width: 230px; height: 53px; background: #f1f1f1; display: table-cell; cursor: pointer; -webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px; line-height: 19px; font-family: sans-serif; font-size: small;}#active label:hover{background: #c4bebe;}#slide1:checked ~ #active label:nth-child(1), #slide2:checked ~ #active label:nth-child(2), #slide3:checked ~ #active label:nth-child(3), #slide4:checked ~ #active label:nth-child(4), #slide5:checked ~ #active label:nth-child(5){background: #dddddd;}#slides .inner{-webkit-transition: all 0.8s ease-in-out; -moz-transition: all 0.8s ease-in-out; -ms-transition: all 0.8s ease-in-out; -o-transition: all 0.8s ease-in-out; transition: all 0.8s ease-in-out;}</style> <div id="slider"> <input type="radio" id="slide1" name="slider" checked/> <input type="radio" id="slide2" name="slider"/> <input type="radio" id="slide3" name="slider"/> <input type="radio" id="slide4" name="slider"/> <input type="radio" id="slide5" name="slider"/> <div id="slides"> <div id="overflow"> <div class="inner"> <div class="page"><img src="http://placehold.it/1146x466" alt=""/> </div><div class="page"><img src="http://placehold.it/1146x466" alt=""/> </div><div class="page"><img src="http://placehold.it/1146x466" alt=""/> </div><div class="page"><img src="http://placehold.it/1146x466" alt=""/> </div><div class="page"><img src="http://placehold.it/1146x466" alt=""/> </div></div></div></div><div id="controls"> <label for="slide1"></label> <label for="slide2"></label> <label for="slide3"></label> <label for="slide4"></label> <label for="slide5"></label> </div><div id="active"> <label for="slide1"> <p>IT\'S A WRAP</p></label> <label for="slide2"> <p>CHECK OUT OUR <br>Autumn Savings</p></label> <label for="slide3"> <p>New! <br>Light Up Pen!</p></label> <label for="slide4"> <p>INTRODUCING... <br>Sweda Outlet</p></label> <label for="slide5"> <p>Take 40% Off</p></label> </div></div></Slider>',
    attributes: {
        class: 'fa fa-code',
        title: 'Slider'
    },
    category: 'Sweda Components'
  });
  bm.add('popularProducts', {
    label: 'Popular Products',
    content: '<popularProducts style="display: block; min-height: 50px; padding: 50px;"> <div class="popularProducts"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"><link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"><style type="text/css">.col-item{border: 1px solid #E1E1E1; border-radius: 5px; background: #FFF;}.col-item .photo img{margin: 0 auto; width: 100%;}.col-item .info{padding: 10px; border-radius: 0 0 5px 5px; margin-top: 1px;}.col-item:hover .info{background-color: #eee;}.col-item .price{/*width: 50%;*/ float: left; margin-top: 5px;}.col-item .price h5{line-height: 20px; margin: 0;}.price-text-color{color: #219FD1;}.col-item .info .rating{color: #777;}.col-item .rating{/*width: 50%;*/ float: left; font-size: 17px; text-align: right; line-height: 52px; margin-bottom: 10px; height: 52px;}.col-item .separator{border-top: 1px solid #E1E1E1;}.clear-left{clear: left;}.col-item .separator p{line-height: 20px; margin-bottom: 0; margin-top: 10px; text-align: center;}.col-item .separator p i{margin-right: 5px;}.col-item .btn-add{width: 50%; float: left;}.col-item .btn-add{border-right: 1px solid #E1E1E1;}.col-item .btn-details{width: 50%; float: left; padding-left: 10px;}.controls{margin-top: 20px;}[data-slide="prev"]{margin-right: 10px;}</style><div class="container-fluid"> <div class="row"> <div class="row"> <div class="col-md-9"> <h3> Popular Products</h3> </div><div class="col-md-3"> <div class="controls pull-right hidden-xs"> <a class="left btn btn-success" href="#carousel-example" data-slide="prev"><i class="fa fa-angle-left"></i></a><a class="right btn btn-success" href="#carousel-example" data-slide="next"><i class="fa fa-angle-right"></i></a> </div></div></div><div id="carousel-example" class="carousel slide hidden-xs" data-ride="carousel"> <div class="carousel-inner"> <div class="item active"> <div class="row" id="sliderListItems"> <div class="col-sm-3"> <div class="col-item"> <div class="photo"> <img src="http://placehold.it/350x260" class="img-responsive" alt="a"/> </div><div class="info"> <div class="row"> <div class="price col-md-6"> <h5> Sample Product</h5> <h5 class="price-text-color"> $199.99</h5> </div><div class="rating hidden-sm col-md-6"> <i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star"> </i><i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star"> </i><i class="fa fa-star"></i> </div></div><div class="separator clear-left"> <p class="btn-add"> <i class="fa fa-shopping-cart"></i><a href="#" class="hidden-sm">Add to cart</a></p><p class="btn-details"> <i class="fa fa-list"></i><a href="#" class="hidden-sm">More details</a></p></div><div class="clearfix"> </div></div></div></div><div class="col-sm-3"> <div class="col-item"> <div class="photo"> <img src="http://placehold.it/350x260" class="img-responsive" alt="a"/> </div><div class="info"> <div class="row"> <div class="price col-md-6"> <h5> Product Example</h5> <h5 class="price-text-color"> $249.99</h5> </div><div class="rating hidden-sm col-md-6"> </div></div><div class="separator clear-left"> <p class="btn-add"> <i class="fa fa-shopping-cart"></i><a href="#" class="hidden-sm">Add to cart</a></p><p class="btn-details"> <i class="fa fa-list"></i><a href="#" class="hidden-sm">More details</a></p></div><div class="clearfix"> </div></div></div></div><div class="col-sm-3"> <div class="col-item"> <div class="photo"> <img src="http://placehold.it/350x260" class="img-responsive" alt="a"/> </div><div class="info"> <div class="row"> <div class="price col-md-6"> <h5> Next Sample Product</h5> <h5 class="price-text-color"> $149.99</h5> </div><div class="rating hidden-sm col-md-6"> <i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star"> </i><i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star"> </i><i class="fa fa-star"></i> </div></div><div class="separator clear-left"> <p class="btn-add"> <i class="fa fa-shopping-cart"></i><a href="#" class="hidden-sm">Add to cart</a></p><p class="btn-details"> <i class="fa fa-list"></i><a href="#" class="hidden-sm">More details</a></p></div><div class="clearfix"> </div></div></div></div><div class="col-sm-3"> <div class="col-item"> <div class="photo"> <img src="http://placehold.it/350x260" class="img-responsive" alt="a"/> </div><div class="info"> <div class="row"> <div class="price col-md-6"> <h5> Sample Product</h5> <h5 class="price-text-color"> $199.99</h5> </div><div class="rating hidden-sm col-md-6"> <i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star"> </i><i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star"> </i><i class="fa fa-star"></i> </div></div><div class="separator clear-left"> <p class="btn-add"> <i class="fa fa-shopping-cart"></i><a href="#" class="hidden-sm">Add to cart</a></p><p class="btn-details"> <i class="fa fa-list"></i><a href="#" class="hidden-sm">More details</a></p></div><div class="clearfix"> </div></div></div></div></div></div><div class="item"> <div class="row"> <div class="col-sm-3"> <div class="col-item"> <div class="photo"> <img src="http://placehold.it/350x260" class="img-responsive" alt="a"/> </div><div class="info"> <div class="row"> <div class="price col-md-6"> <h5> Product with Variants</h5> <h5 class="price-text-color"> $199.99</h5> </div><div class="rating hidden-sm col-md-6"> <i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star"> </i><i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star"> </i><i class="fa fa-star"></i> </div></div><div class="separator clear-left"> <p class="btn-add"> <i class="fa fa-shopping-cart"></i><a href="#" class="hidden-sm">Add to cart</a></p><p class="btn-details"> <i class="fa fa-list"></i><a href="#" class="hidden-sm">More details</a></p></div><div class="clearfix"> </div></div></div></div><div class="col-sm-3"> <div class="col-item"> <div class="photo"> <img src="http://placehold.it/350x260" class="img-responsive" alt="a"/> </div><div class="info"> <div class="row"> <div class="price col-md-6"> <h5> Grouped Product</h5> <h5 class="price-text-color"> $249.99</h5> </div><div class="rating hidden-sm col-md-6"> </div></div><div class="separator clear-left"> <p class="btn-add"> <i class="fa fa-shopping-cart"></i><a href="#" class="hidden-sm">Add to cart</a></p><p class="btn-details"> <i class="fa fa-list"></i><a href="#" class="hidden-sm">More details</a></p></div><div class="clearfix"> </div></div></div></div><div class="col-sm-3"> <div class="col-item"> <div class="photo"> <img src="http://placehold.it/350x260" class="img-responsive" alt="a"/> </div><div class="info"> <div class="row"> <div class="price col-md-6"> <h5> Product with Variants</h5> <h5 class="price-text-color"> $149.99</h5> </div><div class="rating hidden-sm col-md-6"> <i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star"> </i><i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star"> </i><i class="fa fa-star"></i> </div></div><div class="separator clear-left"> <p class="btn-add"> <i class="fa fa-shopping-cart"></i><a href="#" class="hidden-sm">Add to cart</a></p><p class="btn-details"> <i class="fa fa-list"></i><a href="#" class="hidden-sm">More details</a></p></div><div class="clearfix"> </div></div></div></div><div class="col-sm-3"> <div class="col-item"> <div class="photo"> <img src="http://placehold.it/350x260" class="img-responsive" alt="a"/> </div><div class="info"> <div class="row"> <div class="price col-md-6"> <h5> Product with Variants</h5> <h5 class="price-text-color"> $199.99</h5> </div><div class="rating hidden-sm col-md-6"> <i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star"> </i><i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star"> </i><i class="fa fa-star"></i> </div></div><div class="separator clear-left"> <p class="btn-add"> <i class="fa fa-shopping-cart"></i><a href="#" class="hidden-sm">Add to cart</a></p><p class="btn-details"> <i class="fa fa-list"></i><a href="#" class="hidden-sm">More details</a></p></div><div class="clearfix"> </div></div></div></div></div></div></div></div></div></div></div></popularProducts>',
    attributes: {
        class: 'fa fa-code',
        title: 'Popular Products'
    },
    category: 'Sweda Components'
  });
  bm.add('siteHeaderNew3', {
    label: 'Sweda Navbar',
    content: '<style type="text/css">#flipkart-navbar{background-color: #232F3E; color: #FFFFFF;}.row1{padding-top: 10px;}.row2{padding-bottom: 20px;}.flipkart-navbar-input{padding: 11px 16px; border-radius: 2px 0 0 2px; border: 0 none; outline: 0 none; font-size: 15px; color: #000;}.flipkart-navbar-button{background-color: rgb(254, 189, 105); border: 1px solid #ffe11b; border-radius: 0 2px 2px 0; color: #565656; padding: 10px 0; height: 43px; cursor: pointer; padding-left: 18px;}.cart-button{background-color: rgb(254, 189, 105); box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .23), inset 1px 1px 0 0 hsla(0, 0%, 100%, .2); padding: 10px 0; text-align: center; height: 41px; border-radius: 2px; font-weight: 500; width: 120px; display: inline-block; color: #333; text-decoration: none; color: inherit; border: none; outline: none;}.cart-button:hover{text-decoration: none; color: #fff; cursor: pointer;}.cart-svg{display: inline-block; width: 16px; height: 16px; vertical-align: middle; margin-right: 8px;}.item-number{border-radius: 3px; background-color: rgba(0, 0, 0, .1); height: 20px; padding: 3px 6px; font-weight: 500; display: inline-block; color: #fff; line-height: 12px; margin-left: 10px;}.upper-links{display: inline-block; padding: 0 11px; line-height: 23px; font-family: \'Roboto\', sans-serif; letter-spacing: 0; color: inherit; border: none; outline: none; font-size: 12px;}.dropdown{position: relative; display: inline-block; margin-bottom: 0px;}.dropdown .dropdown-menu{position: absolute; top: 100%; display: none; background-color: #fff; color: #333; left: 0px; border: 0; border-radius: 0; box-shadow: 0 4px 8px -3px #555454; margin: 0; padding: 0px;}.links{color: #fff; text-decoration: none;}.links:hover{color: #fff; text-decoration: none;}.profile-links{font-size: 12px; font-family: \'Roboto\', sans-serif; border-bottom: 1px solid #e9e9e9; box-sizing: border-box; display: block; padding: 0 11px; line-height: 23px;}.profile-li{padding-top: 2px;}.largenav{display: none;}.smallnav{display: block;}.smallsearch{margin-left: 15px; margin-top: 15px;}.menu{cursor: pointer;}@media screen and (min-width: 768px){.largenav{display: block;}.smallnav{display: none;}.smallsearch{margin: 0px;}}/*Sidenav*/.sidenav{height: 100%; width: 0; position: fixed; z-index: 1; top: 0; left: 0; background-color: #fff; overflow-x: hidden; transition: 0.5s; box-shadow: 0 4px 8px -3px #555454; padding-top: 0px;}.sidenav a{padding: 8px 8px 8px 32px; text-decoration: none; font-size: 25px; color: #818181; display: block; transition: 0.3s}.sidenav .closebtn{position: absolute; top: 0; right: 25px; font-size: 36px; margin-left: 50px; color: #fff;}@media screen and (max-height: 450px){.sidenav a{font-size: 18px;}}.sidenav-heading{font-size: 36px; color: #fff;}.footer-top-layout{background: #232F3E none repeat scroll 0 0; color: #ffffff; padding: 40px 0;}.OurBlog{margin-bottom: 32px; text-align: center;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.OurBlog > p{color: #ffffff;}.post-blog-date::after{background: #ffffff none repeat scroll 0 0; bottom: 0; content: ""; height: 4px; left: 0; margin: auto; position: absolute; right: 0; width: 50px;}.post-blog-date{padding-bottom: 25px; position: relative;}body{color: #fff; font-family: "Open Sans", sans-serif; line-height: 24px;}.footer-top-layout [class*="col-sm-"]:first-child{padding: 0;}.footer-top-layout [class*="col-sm-"]{border-right: 2px solid #333333; padding: 0 0 0 28px;}.footer-top-layout{color: #ffffff;}.footer-col-item{min-height: 140px;}address{color: #eee;}.footer-top-layout [class*="col-sm-"]:last-child{border-right: medium none;}.footer-top-layout{color: #ffffff;}body{color: #666666; font-family: "Open Sans", sans-serif;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{color: #eee; font-family: "Roboto", sans-serif; font-weight: 500; line-height: 1.1; margin-top: 0;}body{color: #eee; font-family: "Open Sans", sans-serif; line-height: 24px;}.footer-col-item .item-contact a{color: #eee; display: inline-block; margin-bottom: 7px; width: 100%;}.footer-col-item .item-contact a .link-id{color: #ffffff; margin-left: 0; margin-right: 6px;}.footer-col-item span{margin-left: 7px;}.footer-col-item .item-contact a{color: #eee;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.signUpNewsletter{position: relative;}.signUpNewsletter .gt-email{background: rgba(0, 0, 0, 0) none repeat scroll 0 0; border: 1px solid #eee; border-radius: 0; color: #ffffff; height: 52px;}.signUpNewsletter .btn-go{background: rgba(0, 0, 0, 0) none repeat scroll 0 0; border-color: #eee; border-style: solid; border-width: 0 0 0 1px; bottom: 0; color: #ffffff; font-size: 16px; position: absolute; right: 0; text-transform: uppercase; top: 0; width: 52px;}.footer-bottom-layout{background: #292929 none repeat scroll 0 0; padding: 20px 0; text-align: center; color: #eee;}.socialMedia-footer{margin-bottom: 20px;}.socialMedia-footer > a{display: inline-block; margin: 0 8px;}.footer-bottom-layout{text-align: center;}@import url(\'https://fonts.googleapis.com/css?family=Roboto:400,500,700\');.modal__background{position: fixed; top: 0; right: 0; bottom: 0; left: 0; -webkit-transition: 0.35s; transition: 0.35s; background: rgba(0, 0, 0, 0.8); opacity: 0; pointer-events: none; z-index: 2;}.modal__background:target{opacity: 1; pointer-events: auto;}.button:hover{color: red;}.modal__content{background: #fff; padding: 1rem; position: relative; z-index: 4;}@media screen and (max-width: 699px){.modal__content{margin: 2rem;}}@media screen and (min-width: 700px){.modal__content{margin: 4rem auto; max-width: 400px; min-height: 256px;}}.modal__content svg,.modal__content path{position: absolute; top: 1rem; right: 1rem; height: 25px; width: 25px; -webkit-transition: all 0.15s ease-out 0s; transition: all 0.15s ease-out 0s; fill: #bfbfbf;}.modal__content svg:hover,.modal__content path:hover{fill: #0c0c0c;}h2{color: #223f5d; font-family: \'Roboto\', sans-serif; font-size: 40px; margin: 0rem 0 1rem; text-align: center;}.close img{float: right; width: 20px;}.success{width: 100%;}.form_11{color: #283593;}input{color: #283593}#menu{color: #eee; height: 35px;margin-top:70px}#menu ul, #menu li{margin: 0; padding: 0; list-style: none}#menu ul{height: 35px}#menu li{float: left; display: inline; position: relative; font: bold 13px Arial;}#menu li a{color: #ccc}#menu a{display: block; line-height: 35px; padding: 0 14px; text-decoration: none; color: #333;}#menu li:hover > a, #menu li a:hover{color: #fff}#menu input{display: none; margin: 0 0; padding: 0 0; width: 80px; height: 35px; opacity: 0; cursor: pointer}#menu label{font: bold 30px Arial; display: none; width: 35px; height: 36px; line-height: 36px; text-align: center}#menu label span{font-size: 13px; position: absolute; left: 35px}#menu ul.menus{height: auto; overflow: hidden; width: 180px; background: #fff; position: absolute; z-index: 99; display: none; border: 1px solid #ccc; border-top: none; color: #333}#menu ul.menus a{color: #333}#menu ul.menus li{display: block; width: 100%; font: 12px Arial; text-transform: none;}#menu li:hover ul.menus{display: block}#menu a.prett, #menu a.trigger2{padding: 0 27px 0 14px}#menu li:hover > a.prett, #menu a.prett:hover{background: #fff; color: #333}#menu a.prett::after{content: ""; width: 0; height: 0; border-width: 6px 5px; border-style: solid; border-color: #eee transparent transparent transparent; position: absolute; top: 15px; right: 9px}#menu ul.menus a:hover{background: #BABABA;}#menu a.trigger2::after{content: ""; width: 0; height: 0; border-width: 5px 6px; border-style: solid; border-color: transparent transparent transparent #eee; position: absolute; top: 13px; right: 9px}@media screen and (max-width: 600px){#menu{position: relative}#menu ul{background: #838383; position: absolute; top: 100%; right: 0; left: 0; z-index: 3; height: auto; display: none;}#menu ul.menus{width: 100%; position: static; border: none}#menu li{display: block; float: none; width: auto; text-align: left}#menu li a{color: #fff}#menu li a:hover{color: #333}#menu li:hover{background: #BABABA; color: #333;}#menu li:hover > a.prett, #menu a.prett:hover{background: #BABABA; color: #333;}#menu ul.menus a{background: #BABABA;}#menu ul.menus a:hover{background: #fff;}#menu input, #menu label{position: absolute; top: 0; left: 0; display: block}#menu input{z-index: 4}#menu input:checked + label{color: white}#menu input:checked ~ ul{display: block}}#regbar{height: 67px; color: black;}fieldset{border: none;}.login{position: absolute; width: 350px; z-index: 1; background-color: #eee; display: none;}.arrow-up{width: 0; height: 0; border-left: 20px solid transparent; border-right: 20px solid transparent; border-bottom: 15px solid #ECF0F1; left: 10%; position: absolute; top: -10px;}.formholder{width: 350px; border-radius: 5px; padding-top: 5px;}.formholder input[type="email"],.formholder input[type="password"]{padding: 7px 5px; margin: 10px 0; width: 96%; display: block; font-size: 18px; border-radius: 5px; border: none; -webkit-transition: 0.3s linear; -moz-transition: 0.3s linear; -o-transition: 0.3s linear; transition: 0.3s linear;}.formholder input[type="email"]:focus,.formholder input[type="password"]:focus{outline: none; box-shadow: 0 0 1px 1px #1abc9c;}.formholder input[type="submit"]{padding: 10px; font-size: 20px; display: block; width: 100%; border: none; color: #fff; background-color: #232f3e; border-radius: 5px;}.formholder input[type="submit"]:hover{background: #506c90;}.randompad{padding: 10px;}.green{color: #1abc9c;}a{color: #ecf0f1; text-decoration: none;}#RegisterButton{color:black; font-size: 20px;}</style>'+
        '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><commonLayout> <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> <div id="flipkart-navbar"> <div class="container"> <div class="row row1"> <ul class="largenav pull-right"> <li class="upper-links"><a class="links" href="#">Link 1</a></li><li class="upper-links"><a class="links" href="#">Link 2</a></li><li class="upper-links"><a class="links" href="#">Link 3</a></li><li class="upper-links"><a class="links" href="#">Link 4</a></li><li class="upper-links"><a class="links" href="#">Link 5</a></li><li class="upper-links"><a class="links" href="#">Link 6</a></li><li class="upper-links"> <a class="links" href="#"> <svg class="" width="16px" height="12px" style="overflow: visible;"> <path d="M8.037 17.546c1.487 0 2.417-.93 2.417-2.417H5.62c0 1.486.93 2.415 2.417 2.415m5.315-6.463v-2.97h-.005c-.044-3.266-1.67-5.46-4.337-5.98v-.81C9.01.622 8.436.05 7.735.05 7.033.05 6.46.624 6.46 1.325v.808c-2.667.52-4.294 2.716-4.338 5.98h-.005v2.972l-1.843 1.42v1.376h14.92v-1.375l-1.842-1.42z" fill="#fff"></path> </svg> </a> </li><li class="upper-links dropdown"> <div id="wrap"> <div id="regbar"> <div id="navthing"> <h4><a href="#" id="loginform">Login</a> </h4> <div class="login"> <div class="arrow-up"></div><div class="formholder"> <div class="randompad"> <fieldset> <label name="email">Email</label> <input type="email" placeholder="example@example.com"/> <label name="password">Password</label> <input type="password"/> <input type="submit" value="Login" id="loginbutton"/> <br>Create an account <a href="#"><span id="RegisterButton">Register</span></a> </fieldset> </div></div></div></div></div></div></li></ul> </div><div class="row row2"> <div class="col-sm-2"><a href="#" style="color: #fff"><h1 style="margin:0px;"><span class="largenav"><img src="http://www.swedausa.com/bundles/officebraincustombundletheme/SwedaTheme/images/logo.jpg?v=1.2.1" width="100%" style="margin-top: -88px"></span></h1></a> </div><div class="flipkart-navbar-search smallsearch col-sm-8 col-xs-11"> <div class="row" style="padding-top:0;"> <input class="flipkart-navbar-input col-xs-11" type="" placeholder="Search for Products, Brands and more" id=search_query name=search_query> <a style="cursor:pointer"> <a class="flipkart-navbar-button col-xs-1 searchButton"> <i class="fa fa-search"></i> </a> </div></div><div class="cart largenav col-sm-2"> <a href="#open-modal" class="button cart-button" style="color: black">Advance Search</a><br><br><div id="open-modal" class="modal__background"> <div class="modal__content"> <a href="#close" title="Close" class="close"> <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-128.png"> </a> <div class="form_11"> keyword <input type="text" name="keyword"> <br><br>category <input type="text" name="category"> <br><br>Item #/Sku number <input type="text" name="sku"><br><br>Min. Price <input type="text" name="mip"> <br><br>Max. Price <input type="text" name="map"> <br><br>Select Color <input type="text" name="color"> <br><br>Tags <input type="text" name="tag"> </div></div></div></div><nav id=\'menu\'> <ul> <li><a class=\'prett\'>PRODUCTS</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> <li><a class=\'prett\'>BRANDS</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> <li><a class=\'prett\'>CATLOG</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> <li><a class=\'prett\'>SERVICE</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> <li><a class=\'prett\'>TOOLS</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> </li><li><a class=\'prett\'>PROMOTIONS</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> <li><a>OUTLET</a></li><li><a class=\'prett\'>ABOUT</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> </li></ul> </nav> </div></div></div><div id="mySidenav" class="sidenav"> <div class="container" style="background-color: #2874f0; padding-top: 10px;"> <span class="sidenav-heading">Home</span> <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a> </div><a href="#">Link</a> <a href="#">Link</a> <a href="#">Link</a> <a href="#">Link</a></div><div class="blk1" style="min-height: 50px; display: block; width:100%"></div><footer id="footer-Section"> <div class="footer-top-layout"> <div class="container"> <div class="row"> <div class="OurBlog"> <h4>Our Blog</h4> <p>BCM wins mandate for Avendus Wealth Management portal revamp</p><div class="post-blog-date">20th Oct 2016</div></div><div class=" col-lg-8 col-lg-offset-2"> <div class="col-sm-4"> <div class="footer-col-item"> <h4>Go Travel Cloud</h4> <address> 501,507 your company address<br>400015 Maharashtra,UK </address> </div></div><div class="col-sm-4"> <div class="footer-col-item"> <h4>Reach Us</h4> <div class="item-contact"> <a href="tel:630-885-9200"><span class="link-id">P</span>:<span>630-885-9200</span></a> <a href="tel:630-839.2006"><span class="link-id">F</span>:<span>630-839.2006</span></a> <a href="mailto:info@brandcatmedia.com"><span class="link-id">E</span>:<span>info@brandcatmedia.com</span></a> </div></div></div><div class="col-sm-4"> <div class="footer-col-item"> <h4>Sign up for Newsletter</h4> <form class="signUpNewsletter" action="" method="get"> <input name="" class="gt-email form-control" placeholder="You@youremail.com" type="text"> <input name="" class="btn-go" value="Go" type="button"> </form> </div></div></div></div></div></div><div class="footer-bottom-layout"> <div class="socialMedia-footer"> <i class="fa fa-facebook fa-fw fa-2x"></i> <i class="fa fa-google-plus fa-fw fa-2x"></i> <i class="fa fa-twitter fa-fw fa-2x"></i> <i class="fa fa-youtube fa-fw fa-2x"></i> </div><div class="copyright-tag">Copyright © 2017 company name. All Rights Reserved.</div><script type="text/javascript">$(\'#loginform\').click(function(){$(\'.login\').fadeToggle(\'slow\');}); </script> </div></footer></commonLayout>',
    attributes: {
      class: 'fa fa-file-code-o',
      title: 'Sweda Navbar'
    },
    category: 'Sweda Components'
  });
  bm.add('swedaHeader', {
    label: 'Sweda Navbar 1',
    content: '<style type="text/css">#flipkart-navbar{background-color: #232F3E; color: #FFFFFF;}.row1{padding-top: 10px;}.row2{padding-bottom: 20px;}.flipkart-navbar-input{padding: 11px 16px; border-radius: 2px 0 0 2px; border: 0 none; outline: 0 none; font-size: 15px; color: #000;}.flipkart-navbar-button{background-color: rgb(254, 189, 105); border: 1px solid #ffe11b; border-radius: 0 2px 2px 0; color: #565656; padding: 10px 0; height: 43px; cursor: pointer; padding-left: 18px;}.cart-button{background-color: rgb(254, 189, 105); box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .23), inset 1px 1px 0 0 hsla(0, 0%, 100%, .2); padding: 10px 0; text-align: center; height: 41px; border-radius: 2px; font-weight: 500; width: 120px; display: inline-block; color: #333; text-decoration: none; color: inherit; border: none; outline: none;}.cart-button:hover{text-decoration: none; color: #fff; cursor: pointer;}.cart-svg{display: inline-block; width: 16px; height: 16px; vertical-align: middle; margin-right: 8px;}.item-number{border-radius: 3px; background-color: rgba(0, 0, 0, .1); height: 20px; padding: 3px 6px; font-weight: 500; display: inline-block; color: #fff; line-height: 12px; margin-left: 10px;}.upper-links{display: inline-block; padding: 0 11px; line-height: 23px; font-family: \'Roboto\', sans-serif; letter-spacing: 0; color: inherit; border: none; outline: none; font-size: 12px;}.dropdown{position: relative; display: inline-block; margin-bottom: 0px;}.dropdown .dropdown-menu{position: absolute; top: 100%; display: none; background-color: #fff; color: #333; left: 0px; border: 0; border-radius: 0; box-shadow: 0 4px 8px -3px #555454; margin: 0; padding: 0px;}.links{color: #fff; text-decoration: none;}.links:hover{color: #fff; text-decoration: none;}.profile-links{font-size: 12px; font-family: \'Roboto\', sans-serif; border-bottom: 1px solid #e9e9e9; box-sizing: border-box; display: block; padding: 0 11px; line-height: 23px;}.profile-li{padding-top: 2px;}.largenav{display: none;}.smallnav{display: block;}.smallsearch{margin-left: 15px; margin-top: 15px;}.menu{cursor: pointer;}@media screen and (min-width: 768px){.largenav{display: block;}.smallnav{display: none;}.smallsearch{margin: 0px;}}/*Sidenav*/.sidenav{height: 100%; width: 0; position: fixed; z-index: 1; top: 0; left: 0; background-color: #fff; overflow-x: hidden; transition: 0.5s; box-shadow: 0 4px 8px -3px #555454; padding-top: 0px;}.sidenav a{padding: 8px 8px 8px 32px; text-decoration: none; font-size: 25px; color: #818181; display: block; transition: 0.3s}.sidenav .closebtn{position: absolute; top: 0; right: 25px; font-size: 36px; margin-left: 50px; color: #fff;}@media screen and (max-height: 450px){.sidenav a{font-size: 18px;}}.sidenav-heading{font-size: 36px; color: #fff;}.footer-top-layout{background: #232F3E none repeat scroll 0 0; color: #ffffff; padding: 40px 0;}.OurBlog{margin-bottom: 32px; text-align: center;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.OurBlog > p{color: #ffffff;}.post-blog-date::after{background: #ffffff none repeat scroll 0 0; bottom: 0; content: ""; height: 4px; left: 0; margin: auto; position: absolute; right: 0; width: 50px;}.post-blog-date{padding-bottom: 25px; position: relative;}body{color: #fff; font-family: "Open Sans", sans-serif; line-height: 24px;}.footer-top-layout [class*="col-sm-"]:first-child{padding: 0;}.footer-top-layout [class*="col-sm-"]{border-right: 2px solid #333333; padding: 0 0 0 28px;}.footer-top-layout{color: #ffffff;}.footer-col-item{min-height: 140px;}address{color: #eee;}.footer-top-layout [class*="col-sm-"]:last-child{border-right: medium none;}.footer-top-layout{color: #ffffff;}body{color: #666666; font-family: "Open Sans", sans-serif;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{color: #eee; font-family: "Roboto", sans-serif; font-weight: 500; line-height: 1.1; margin-top: 0;}body{color: #eee; font-family: "Open Sans", sans-serif; line-height: 24px;}.footer-col-item .item-contact a{color: #eee; display: inline-block; margin-bottom: 7px; width: 100%;}.footer-col-item .item-contact a .link-id{color: #ffffff; margin-left: 0; margin-right: 6px;}.footer-col-item span{margin-left: 7px;}.footer-col-item .item-contact a{color: #eee;}.footer-top-layout h4{color: #ffffff; font-size: 18px; margin-bottom: 21px;}.signUpNewsletter{position: relative;}.signUpNewsletter .gt-email{background: rgba(0, 0, 0, 0) none repeat scroll 0 0; border: 1px solid #eee; border-radius: 0; color: #ffffff; height: 52px;}.signUpNewsletter .btn-go{background: rgba(0, 0, 0, 0) none repeat scroll 0 0; border-color: #eee; border-style: solid; border-width: 0 0 0 1px; bottom: 0; color: #ffffff; font-size: 16px; position: absolute; right: 0; text-transform: uppercase; top: 0; width: 52px;}.footer-bottom-layout{background: #292929 none repeat scroll 0 0; padding: 20px 0; text-align: center; color: #eee;}.socialMedia-footer{margin-bottom: 20px;}.socialMedia-footer > a{display: inline-block; margin: 0 8px;}.footer-bottom-layout{text-align: center;}@import url(\'https://fonts.googleapis.com/css?family=Roboto:400,500,700\');.modal__background{position: fixed; top: 0; right: 0; bottom: 0; left: 0; -webkit-transition: 0.35s; transition: 0.35s; background: rgba(0, 0, 0, 0.8); opacity: 0; pointer-events: none; z-index: 2;}.modal__background:target{opacity: 1; pointer-events: auto;}input{width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;}.button:hover{color: red;}.modal__content{background: #fff; padding: 1rem; position: relative; z-index: 4;}@media screen and (max-width: 699px){.modal__content{margin: 2rem;}}@media screen and (min-width: 700px){.modal__content{margin: 4rem auto; background-color: #eee; max-width: 874px; min-height: 256px;}}.modal__content svg,.modal__content path{position: absolute; top: 1rem; right: 1rem; height: 25px; width: 25px; -webkit-transition: all 0.15s ease-out 0s; transition: all 0.15s ease-out 0s; fill: #bfbfbf;}.modal__content svg:hover,.modal__content path:hover{fill: #0c0c0c;}h2{color: #223f5d; font-family: \'Roboto\', sans-serif; font-size: 40px; margin: 0rem 0 1rem; text-align: center;}.close img{float: right; width: 20px;}.success{width: 100%;}.form_11{color: #283593;}input{color: #283593}#menu{color: #eee; height: 35px;}#menu ul, #menu li{margin: 0; padding: 0; list-style: none}#menu ul{height: 35px}#menu li{float: left; display: inline; position: relative; font: bold 13px Arial;}#menu li a{color: #ccc}#menu a{display: block; line-height: 35px; padding: 0 14px; text-decoration: none; color: #333;}#menu li:hover > a, #menu li a:hover{color: #fff}#menu input{display: none; margin: 0 0; padding: 0 0; width: 80px; height: 35px; opacity: 0; cursor: pointer}#menu label{font: bold 30px Arial; display: none; width: 35px; height: 36px; line-height: 36px; text-align: center}#menu label span{font-size: 13px; position: absolute; left: 35px}#menu ul.menus{height: auto; overflow: hidden; width: 180px; background: #fff; position: absolute; z-index: 99; display: none; border: 1px solid #ccc; border-top: none; color: #333}#menu ul.menus a{color: #333}#menu ul.menus li{display: block; width: 100%; font: 12px Arial; text-transform: none;}#menu li:hover ul.menus{display: block}#menu a.prett, #menu a.trigger2{padding: 0 27px 0 14px}#menu li:hover > a.prett, #menu a.prett:hover{background: #fff; color: #333}#menu a.prett::after{content: ""; width: 0; height: 0; border-width: 6px 5px; border-style: solid; border-color: #eee transparent transparent transparent; position: absolute; top: 15px; right: 9px}#menu ul.menus a:hover{background: #BABABA;}#menu a.trigger2::after{content: ""; width: 0; height: 0; border-width: 5px 6px; border-style: solid; border-color: transparent transparent transparent #eee; position: absolute; top: 13px; right: 9px}@media screen and (max-width: 600px){#menu{position: relative}#menu ul{background: #838383; position: absolute; top: 100%; right: 0; left: 0; z-index: 3; height: auto; display: none;}#menu ul.menus{width: 100%; position: static; border: none}#menu li{display: block; float: none; width: auto; text-align: left}#menu li a{color: #fff}#menu li a:hover{color: #333}#menu li:hover{background: #BABABA; color: #333;}#menu li:hover > a.prett, #menu a.prett:hover{background: #BABABA; color: #333;}#menu ul.menus a{background: #BABABA;}#menu ul.menus a:hover{background: #fff;}#menu input, #menu label{position: absolute; top: 0; left: 0; display: block}#menu input{z-index: 4}#menu input:checked + label{color: white}#menu input:checked ~ ul{display: block}}#regbar{height: 67px; color: black;}fieldset{border: none;}.login{position: absolute; width: 350px; z-index: 1; background-color: #eee; display: none;}.arrow-up{width: 0; height: 0; border-left: 20px solid transparent; border-right: 20px solid transparent; border-bottom: 15px solid #ECF0F1; left: 10%; position: absolute; top: -10px;}.formholder{width: 350px; border-radius: 5px; padding-top: 5px;}.formholder input[type="email"],.formholder input[type="password"]{padding: 7px 5px; margin: 10px 0; width: 96%; display: block; font-size: 18px; border-radius: 5px; border: none; -webkit-transition: 0.3s linear; -moz-transition: 0.3s linear; -o-transition: 0.3s linear; transition: 0.3s linear;}.formholder input[type="email"]:focus,.formholder input[type="password"]:focus{outline: none; box-shadow: 0 0 1px 1px #1abc9c;}.formholder input[type="submit"]{padding: 10px; font-size: 20px; display: block; width: 100%; border: none; color: #fff; background-color: #232f3e; border-radius: 5px;}.formholder input[type="submit"]:hover{background: #506c90;}.randompad{padding: 10px;}.green{color: #1abc9c;}a{color: #ecf0f1; text-decoration: none;}#RegisterButton{color:black; font-size: 20px;}</style>'+
        '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><commonLayout> <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> <div id="flipkart-navbar"> <div class="container"> <div class="row row1"> <ul class="largenav pull-right"> <li class="upper-links"><a class="links" href="#">Link 1</a></li><li class="upper-links"><a class="links" href="#">Link 2</a></li><li class="upper-links"><a class="links" href="#">Link 3</a></li><li class="upper-links"><a class="links" href="#">Link 4</a></li><li class="upper-links"><a class="links" href="#">Link 5</a></li><li class="upper-links"><a class="links" href="#">Link 6</a></li><li class="upper-links"> <a class="links" href="#"> <svg class="" width="16px" height="12px" style="overflow: visible;"> <path d="M8.037 17.546c1.487 0 2.417-.93 2.417-2.417H5.62c0 1.486.93 2.415 2.417 2.415m5.315-6.463v-2.97h-.005c-.044-3.266-1.67-5.46-4.337-5.98v-.81C9.01.622 8.436.05 7.735.05 7.033.05 6.46.624 6.46 1.325v.808c-2.667.52-4.294 2.716-4.338 5.98h-.005v2.972l-1.843 1.42v1.376h14.92v-1.375l-1.842-1.42z" fill="#fff"></path> </svg> </a> </li><li class="upper-links dropdown"> <div id="wrap"> <div id="regbar"> <div id="navthing"> <h4><a href="#" id="loginform">Login</a> </h4> <div class="login"> <div class="arrow-up"></div><div class="formholder"> <div class="randompad"> <fieldset> <label name="email">Email</label> <input type="email" placeholder="example@example.com"/> <label name="password">Password</label> <input type="password"/> <input type="submit" value="Login" id="loginbutton"/> <br>Create an account <a href="#"><span id="RegisterButton">Register</span></a> </fieldset> </div></div></div></div></div></div></li></ul> </div><div class="row row2"> <div class="col-sm-2"><a href="http://localhost/exported/index.html" style="color: #fff"><h1 style="margin:0px;"><span class="largenav"><img src="http://www.swedausa.com/bundles/officebraincustombundletheme/SwedaTheme/images/logo.jpg?v=1.2.1" width="100%"></span></h1></a> </div><div class="flipkart-navbar-search smallsearch col-sm-8 col-xs-11"> <div class="row"> <input class="flipkart-navbar-input col-xs-11" type="" placeholder="Search for Products, Brands and more" id=search_query name=search_query> <a style="cursor:pointer"> <a class="flipkart-navbar-button col-xs-1 searchButton"> <i class="fa fa-search"></i> </a> </div></div><div class="cart largenav col-sm-2"> <a href="#open-modal" class="button cart-button" style="color: black">Advance Search</a><br><br><br><br><div id="open-modal" class="modal__background"> <div class="modal__content"> <a href="#close" title="Close" class="close"> <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-128.png"> </a> <div class="form_11"> <div class="col-md-12"> <div class="col-md-3"> keyword <input type="text" name="keyword"> <br><br></div><div class="col-md-3"> category <input type="text" name="category"> <br><br></div><div class="col-md-3"> Item #/Sku number <input type="text" name="sku"><br><br></div><div class="col-md-3"> Min. Price <input type="text" name="mip"> <br><br></div></div><div class="col-md-12"> <div class="col-md-12"> <div class="col-md-3"> Max. Price <input type="text" name="map"> <br><br></div><div class="col-md-3"> Select Color <input type="text" name="color"> <br><br></div><div class="col-md-3"> Tags <input type="text" name="tag"> </div><div class="col-md-3" style="padding-top: 2.5%"> <button class="btn btn-primary fa fa-search">Search</button> <button class="btn">Clear</button> </div></div></div></div></div></div></div><nav id=\'menu\'> <ul> <li><a class=\'prett\'>PRODUCTS</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> <li><a class=\'prett\'>BRANDS</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> <li><a class=\'prett\'>CATLOG</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> <li><a class=\'prett\'>SERVICE</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> <li><a class=\'prett\'>TOOLS</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> </li><li><a class=\'prett\'>PROMOTIONS</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> <li><a>OUTLET</a></li><li><a class=\'prett\'>ABOUT</a> <ul class=\'menus\'> <li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul> </li></ul> </nav> </div></div></div><div id="mySidenav" class="sidenav"> <div class="container" style="background-color: #2874f0; padding-top: 10px;"> <span class="sidenav-heading">Home</span> <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a> </div><a href="#">Link</a> <a href="#">Link</a> <a href="#">Link</a> <a href="#">Link</a></div><div class="blk1" style="min-height: 50px; display: block; width:100%"></div><footer id="footer-Section"> <div class="footer-top-layout"> <div class="container"> <div class="row"> <div class="OurBlog"> <h4>Our Blog</h4> <p>BCM wins mandate for Avendus Wealth Management portal revamp</p><div class="post-blog-date">20th Oct 2016</div></div><div class=" col-lg-8 col-lg-offset-2"> <div class="col-sm-4"> <div class="footer-col-item"> <h4>Go Travel Cloud</h4> <address> 501,507 your company address<br>400015 Maharashtra,UK </address> </div></div><div class="col-sm-4"> <div class="footer-col-item"> <h4>Reach Us</h4> <div class="item-contact"> <a href="tel:630-885-9200"><span class="link-id">P</span>:<span>630-885-9200</span></a> <a href="tel:630-839.2006"><span class="link-id">F</span>:<span>630-839.2006</span></a> <a href="mailto:info@brandcatmedia.com"><span class="link-id">E</span>:<span>info@brandcatmedia.com</span></a> </div></div></div><div class="col-sm-4"> <div class="footer-col-item"> <h4>Sign up for Newsletter</h4> <form class="signUpNewsletter" action="" method="get"> <input name="" class="gt-email form-control" placeholder="You@youremail.com" type="text"> <input name="" class="btn-go" value="Go" type="button"> </form> </div></div></div></div></div></div><div class="footer-bottom-layout"> <div class="socialMedia-footer"> <i class="fa fa-facebook fa-fw fa-2x"></i> <i class="fa fa-google-plus fa-fw fa-2x"></i> <i class="fa fa-twitter fa-fw fa-2x"></i> <i class="fa fa-youtube fa-fw fa-2x"></i> </div><div class="copyright-tag">Copyright © 2017 company name. All Rights Reserved.</div><script src=\'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js\'></script> <script type="text/javascript">$(\'#loginform\').click(function(){$(\'.login\').fadeToggle(\'slow\');}); </script> </div></footer></commonLayout>',
    attributes: {
      class: 'fa fa-file-code-o',
      title: 'Sweda Navbar 1'
    },
    category: 'Sweda Components'
  });
  // Menu
  bm.add('Tmenu', {
    label: 'Tmenu',
    content: '<div style="display: block; min-height: 20px;background-color:#292929; color: #fff"><style type="text/css"> fieldset{border: none; background-color: #eee}.login{position: absolute; z-index:999; right:170px; width: 350px; display: none;}.arrow-up{width: 0; height: 0; border-left: 20px solid transparent; border-right: 20px solid transparent; border-bottom: 15px solid #ECF0F1; left: 10%; position: absolute; top: 0px;}fieldset>label{color:#000}fieldset{padding:15px}.formholder{width: 350px; border-radius: 5px; padding-top: 5px;}.formholder input[type="email"], .formholder input[type="password"]{padding: 7px 5px; margin: 10px 0; width: 96%; display: block; font-size: 18px; border-radius: 5px; border: none; -webkit-transition: 0.3s linear; -moz-transition: 0.3s linear; -o-transition: 0.3s linear; transition: 0.3s linear;}.formholder input[type="email"]:focus, .formholder input[type="password"]:focus{outline: none; box-shadow: 0 0 1px 1px #1abc9c;}.formholder input[type="submit"]{padding: 10px; font-size: 20px; display: block; width: 100%; border: none; color: #fff; border-radius: 5px;}.formholder input:hover{background: #eee;}.randompad{padding: 10px;}.green{color: #1abc9c;}a{text-decoration: none;}a:hover{color: #1abc9c;}#loginform{}</style><a href="#" style="margin-left:60%;color:#fff">Compare(0)</a> | <a href="#" style="color:#fff">wish List(0)</a> | <a href="#" style="color:#fff">Smart Cart(0)</a> | <a href="#" id="loginform" style="color:#fff">iStore login</a> <div class="login"> <div class="arrow-up"></div><div class="formholder"> <div class="randompad"> <fieldset style="padding:15px;"> <label name="email">Email</label> <input type="email" value="example@example.com"/> <label name="password">Password</label> <input type="password"/> <input type="submit" value="Login" style="color:#292929"/> </fieldset> </div></div></div></div></div></div>',
    attributes: {
        class: 'fa fa-home',
        title: 'Tmenu'
    },
    category: 'Sweda Components'
  });
  // menu
  bm.add('menu', {
    label: 'menu',
    content: '<menuComponent><style type="text/css"> #menu{color:#eee;height:35px;}#menu ul,#menu li{margin:0;padding:0;list-style:none}#menu ul{height:35px}#menu li{float:left;display:inline;position:relative;font:bold 13px Arial;}#menu li a{color:#ccc}#menu a{display:block;line-height:35px;padding:0 14px;text-decoration:none;color:#333;}#menu li:hover > a,#menu li a:hover{color:#fff}#menu input{display:none;margin:0 0;padding:0 0;width:80px;height:35px;opacity:0;cursor:pointer}#menu label{font:bold 30px Arial;display:none;width:35px;height:36px;line-height:36px;text-align:center}#menu label span{font-size:13px;position:absolute;left:35px}#menu ul.menus{height:auto;overflow:hidden;width:180px;background:#fff;position:absolute;z-index:99;display:none;border:1px solid #ccc;border-top:none;color:#333}#menu ul.menus a{color:#333}#menu ul.menus li{display:block;width:100%;font:12px Arial;text-transform:none;}#menu li:hover ul.menus{display:block}#menu a.prett,#menu a.trigger2{padding:0 27px 0 14px}#menu li:hover > a.prett,#menu a.prett:hover{background:#fff;color:#333}#menu a.prett::after{content:"";width:0;height:0;border-width:6px 5px;border-style:solid;border-color:#eee transparent transparent transparent;position:absolute;top:15px;right:9px}#menu ul.menus a:hover{background:#BABABA;}#menu a.trigger2::after{content:"";width:0;height:0;border-width:5px 6px;border-style:solid;border-color:transparent transparent transparent #eee ;position:absolute;top:13px;right:9px}@media screen and (max-width: 600px){#menu{position:relative}#menu ul{background:#838383;position:absolute;top:100%;right:0;left:0;z-index:3;height:auto;display:none;}#menu ul.menus{width:100%;position:static;border:none}#menu li{display:block;float:none;width:auto;text-align:left}#menu li a{color:#fff}#menu li a:hover{color:#333}#menu li:hover{background:#BABABA;color:#333;}#menu li:hover > a.prett,#menu a.prett:hover{background:#BABABA;color:#333;}#menu ul.menus a{background:#BABABA;}#menu ul.menus a:hover{background:#fff;}#menu input,#menu label{position:absolute;top:0;left:0;display:block}#menu input{z-index:4}#menu input:checked + label{color:white}#menu input:checked ~ ul{display:block}}</style><nav id=\'menu\'><ul><li><a class=\'prett\'>PRODUCTS</a><ul class=\'menus\'><li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul><li><a class=\'prett\'>BRANDS</a><ul class=\'menus\'><li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul><li><a class=\'prett\'>CATLOG</a><ul class=\'menus\'><li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul><li><a class=\'prett\'>SERVICE</a><ul class=\'menus\'><li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul><li><a class=\'prett\'>TOOLS</a><ul class=\'menus\'><li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul></li><li><a class=\'prett\'>PROMOTIONS</a><ul class=\'menus\'><li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul><li><a>OUTLET</a></li><li><a class=\'prett\'>ABOUT</a><ul class=\'menus\'><li><a href=\'#\'>Drop Menu 1</a></li><li><a href=\'#\'>Drop Menu 2</a></li><li><a href=\'#\'>Drop Menu 3</a></li></ul></li></ul></nav></menuComponent>',
    attributes: {
        class: 'fa fa-bars',
        title: 'menu'
    },
    category: 'Sweda Components'
  });
  bm.add('Pagination', {
    label: 'Pagination',
    content: '<Pagination style="display:block; min-height: 20px; padding: 20px;"><head><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script><style>.fa{margin-top:24px;float: left;font-size: x-large;} select{margin-top:18px; height: 30px;float:left; width:auto;/* display:table-cell; */}a{color: #0088cc; text-decoration: none;}a:hover{color: #005580; text-decoration: underline;}h2{padding-top: 20px;}h2:first-of-type{padding-top: 0;}ul{padding: 0;}.pagination{height: 30px;/* margin: 18px 0; */ float:right;}.pagination ul{/* display: table-cell; */ /* IE7 inline-block hack */ *zoom: 1; margin-left: 0; margin-bottom: 0; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);}.pagination li{display: inline;}.pagination a{float: left; padding: 0 14px; line-height: 34px; text-decoration: none; border: 1px solid #ddd; border-left-width: 0;}.pagination a:hover,.pagination .active a{background-color: #f5f5f5;}.pagination .active a{color: #999999; cursor: default;}.pagination .disabled span,.pagination .disabled a,.pagination .disabled a:hover{color: #999999; background-color: transparent; cursor: default;}.pagination li:first-child a{border-left-width: 1px; -webkit-border-radius: 3px 0 0 3px; -moz-border-radius: 3px 0 0 3px; border-radius: 3px 0 0 3px;}.pagination li:last-child a{-webkit-border-radius: 0 3px 3px 0; -moz-border-radius: 0 3px 3px 0; border-radius: 0 3px 3px 0;}.pagination-centered{text-align: center;}.pagination-right{text-align: right;}.button{background-color: #e7e7e7; /* Green */ border: none; color: black; padding: 10px 32px; text-align: center; text-decoration: none;/* display: table-cell; */ font-size: 16px; margin: 14px 2px; cursor: pointer; float:right;}.paginationtext{margin-top:20px; font-size:medium; color:black; float:left;}</style></head><div class="container"> <div class="row" style="background-color:rgba(208, 208, 208, 0.33); border:groove; margin:5px;"> <div class="col-sm-3"><i style="margin-top:24px;float: left;font-size: x-large;" aria-hidden=true class="fa fa-list fa-2x"><span style=display:inline-block;width:10px></span> </i><i style="margin-top:24px;float: left;" aria-hidden=true class="fa fa-table fa-2x"><span style=display:inline-block;width:15px></span></i> <select style="margin-top:20px;"> <option value="nameAZ">options</option> </select> </div><div class="col-sm-4"> <p class="paginationtext"> Showing 130 Products</p><button class="button">Show All</button> </div><div class="col-sm-5"> <div class="pagination"> <ul> <li><a href="#">Prev</a></li><li class="active"> <a href="#">1</a> </li><li><a href="#">2</a></li><li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">Next</a></li></ul> </div></div></div></div></Pagination>',
    attributes: {
      class: 'fa fa-home',
      title: 'Pagination'
    },
    category: 'Sweda Components'
  });
  // Prev Next
  bm.add('PaginationPager',{
    label: 'PaginationPager',
    content: '<link href=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css rel=stylesheet><script src=https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js></script><script src=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js></script><div class=container style="background-color:rgba(208, 208, 208, 0.33);border:groove"><ul class=pager><li class=previous><a href=#>Previous</a><li class=next><a href=#>Next</a></ul></div>',
    attributes: {
      class: 'fa fa-home',
      title: 'Pager'
    },
    category: 'Sweda Components'
  });
  // Ecatlog card
  bm.add('RegPage', {
    label: 'Registration Page',
    content: '<div style="display: block; min-height: 20px;"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"> <link rel=\'stylesheet prefetch\' href=\'http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\'> <style type="text/css"> *,*:before,*:after{box-sizing: border-box;}body{padding: 1em; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-size: 15px; color: #b9b9b9; background-color: #fff;}h4{color: #232f3e;}input,select option,select{width: 100%; padding: 1em; line-height: 1.4; background-color: #f9f9f9; border: 1px solid #e5e5e5; border-radius: 3px; -webkit-transition: 0.35s ease-in-out; -moz-transition: 0.35s ease-in-out; -o-transition: 0.35s ease-in-out; transition: 0.35s ease-in-out; transition: all 0.35s ease-in-out;}input:focus{outline: 0; border-color: #64ac15;}input:focus + .input-icon i{color: #7ed321;}input:focus + .input-icon:after{border-right-color: #7ed321;}input:checked + label:after{opacity: 1;}select{height: 3.4em; line-height: 2;}select:first-of-type{border-top-left-radius: 3px; border-bottom-left-radius: 3px;}select:last-of-type{border-top-right-radius: 3px; border-bottom-right-radius: 3px;}select:focus,select:active{outline: 0;}select option{background-color: #7ed321; color: #fff;}.input-group{margin-bottom: 1em; zoom: 1;}.input-group:before,.input-group:after{content: ""; display: table;}.input-group:after{clear: both;}.input-group-icon{position: relative;}.input-group-icon input{padding-left: 4.4em;}.input-group-icon .input-icon{position: absolute; top: 0; left: 0; width: 3.4em; height: 3.4em; line-height: 3.4em; text-align: center; pointer-events: none;}.input-group-icon .input-icon:after{position: absolute; top: 0.6em; bottom: 0.6em; left: 3.4em; display: block; border-right: 1px solid #e5e5e5; content: ""; -webkit-transition: 0.35s ease-in-out; -moz-transition: 0.35s ease-in-out; -o-transition: 0.35s ease-in-out; transition: 0.35s ease-in-out; transition: all 0.35s ease-in-out;}.input-group-icon .input-icon i{-webkit-transition: 0.35s ease-in-out; -moz-transition: 0.35s ease-in-out; -o-transition: 0.35s ease-in-out; transition: 0.35s ease-in-out; transition: all 0.35s ease-in-out;}.container{max-width: 38em; padding: 1em 3em 2em 3em; margin: 0em auto; background-color: #eee; border-radius: 4.2px; box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);}.row{zoom: 1;}.row:before,.row:after{content: ""; display: table;}.row:after{clear: both;}.col-half{padding-right: 10px; float: left; width: 50%;}.col-half:last-of-type{padding-right: 0;}.col-third{padding-right: 10px; float: left; width: 33.33333333%;}.col-third:last-of-type{padding-right: 0;}@media only screen and (max-width: 540px){.col-half{width: 100%; padding-right: 0;}}#register{background-color: #232f3e; color: #fff; border-color: #232f3f;}.animate{transition: all 0.1s; -webkit-transition: all 0.1s;}.action-button{position: relative; margin: 10px 10px 10px 10px; border-radius: 10px; font-family: \'Pacifico\', cursive; font-size: 25px; color: #FFF; text-decoration: none;}.blue{background-color: #232f3e; border-bottom: 5px solid #232f3e; text-shadow: 0px -2px #232f3e;}.action-button:active{transform: translate(0px,5px); -webkit-transform: translate(0px,5px); border-bottom: 1px solid;}</style> <div class="container"> <form> <div class="row"> <h4>Personal Information</h4> <div class="input-group input-group-icon"> <input type="text" placeholder="First Name"/> <div class="input-icon"><i class="fa fa-user"></i></div></div><div class="input-group input-group-icon"> <input type="text" placeholder="Last Name"/> <div class="input-icon"><i class="fa fa-user"></i></div></div><div class="input-group input-group-icon"> <input type="text" placeholder="Middle Name"/> <div class="input-icon"><i class="fa fa-user"></i></div></div><div class="input-group input-group-icon"> <input type="text" placeholder="Company Name"/> <div class="input-icon"><i class="fa fa-user"></i></div></div></div><div class="row"> <div class="col-md-12"> <h4>Login Information</h4> <div class="input-group"> <div class="input-group input-group-icon"> <input type="email" placeholder="Email Adress"/> <div class="input-icon"><i class="fa fa-envelope"></i></div></div><div class="input-group input-group-icon"> <input type="password" placeholder="Password"/> <div class="input-icon"><i class="fa fa-key"></i></div></div><div class="input-group input-group-icon"> <input type="password" placeholder="Confirm Password"/> <div class="input-icon"><i class="fa fa-key"></i></div></div></div></div></div><div class="row"> <div class="col-md-12"> <h4>Contact Information</h4> <div class="input-group input-group-icon"> <input type="text" placeholder="Address 1"/> <div class="input-icon"><i class="fa fa-user"></i></div></div><div class="input-group input-group-icon"> <input type="text" placeholder="Address 2"/> <div class="input-icon"><i class="fa fa-user"></i></div></div></div><div class="col-half"> <div class="input-group input-group-icon"> <input type="text" placeholder="country"/> <div class="input-icon"><i class="fa fa-user"></i></div></div></div><div class="col-half"> <div class="input-group input-group-icon"> <input type="text" placeholder="state"/> <div class="input-icon"><i class="fa fa-user"></i></div></div></div><div class="col-half"> <div class="input-group input-group-icon"> <input type="text" placeholder="City"/> <div class="input-icon"><i class="fa fa-user"></i></div></div></div><div class="col-half"> <div class="input-group input-group-icon"> <input type="text" placeholder="Zip Code"/> <div class="input-icon"><i class="fa fa-user"></i></div></div></div><div class="col-half"> <div class="input-group input-group-icon"> <input type="text" placeholder="Phone"/> <div class="input-icon"><i class="fa fa-user"></i></div></div></div><div class="col-half"> <div class="input-group input-group-icon"> <input type="text" placeholder="Fax"/> <div class="input-icon"><i class="fa fa-user"></i></div></div></div></div><h4>Terms and Conditions</h4> <div class="input-group"> <input type="checkbox" id="terms"/> <label for="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label> <br></div><button class="action-button shadow animate blue">Register</button> </div></form></div></div>',
    attributes: {
        class: 'fa fa-home',
        title: 'Registration Page'
    },
    category: 'Sweda Components'
  });
  bm.add('CartPage', {
    label: 'Cart Page',
    content: '<div style="display: block; min-height: 20px;"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"><style type="text/css">.myCartListings{background-color: #eee;transition: 0.2s all linear; margin: 20px; padding:20px;}.myCartListings:hover {box-shadow: 0px 0px 10px #999;transition: 0.2s all linear;}#productImage{padding: 0px 0px 0px 5px;}h4{padding-top: 1%}.colorofproduct{border: solid 2px black;margin: 2px;}#comment{margin-top: 5%;}button.remove{float: right;margin-top: 1%} }</style><div class="container" id="myCartListings"><div class="col-md-12 myCartListings"><div id="productImage" class="col-md-4"><img src="http://placehold.it/500x500" width="100%" height="50%"></div><div id="Productdetails" class="col-md-8"><button class="btn btn-danger remove"><i class="fa fa-trash-o danger" aria-hidden="true"></i></button><h2>Product Title</h2><h4>Item # : CODE</h4><h4>USD ($) 99.99 (R) Qty. 0-100</h4><h4>Product Description</h4><hr><h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6><br><div id="colorofproductdiv"><img src="http://www.swedausa.com/product/color/137.jpg" height="27px" width="27px" class="colorofproduct"><img src="http://www.swedausa.com/product/color/329.jpg" height="27px" width="27px" class="colorofproduct"><img src="http://www.swedausa.com/product/color/573.jpg" height="27px" width="27px" class="colorofproduct"><img src="http://www.swedausa.com/product/color/329.jpg" height="27px" width="27px" class="colorofproduct"></div><div id="comment"><h6>Comments:</h6><textarea rows="5" class="form-control"></textarea></div></div></div></div><div class="container" style="margin-bottom: 40px;"><div class="row"><div class="col-md-12"><button class="btn btn-primary btn-lg"><i class="fa fa-cart-arrow-down fa-fw"></i> Proceed to Checkout</button><button class="btn btn-info btn-lg"><i class="fa fa-cart-plus fa-fw"></i> Add More Items</button></div></div></div></div>',
    attributes: {
        class: 'fa fa-shopping-bag',
        title: 'Cart Page'
    },
    category: 'Sweda Components'
  });
  bm.add('CatalogBlocks', {
    label: 'Catalog Blocks',
    content: '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"><style type="text/css">body{color: white}a{color: #93a1b9}.catalogBG{background-color: #253a5c;min-height: 300px;padding: 40px;}</style><div class=" container"><div class="col-md-12"><div class="col-md-6 catalogBG"><div class="col-md-4"><h3>E-catlog</h3><ul><li><a href="new">One</a></li><li><a href="two">Two</a></li></ul></div><div class="col-md-8 image"><img src="http://www.swedausa.com/images/uploads/home_page_images/1501553209.png" width="100%"/></div></div><div class="col-md-6"> <div class="row"> <div class="col-xs-12"><img src="http://www.swedausa.com/images/uploads/home_page_images/1489144791.png" width="100%"></div><div class="col-xs-12"> <div class="row"> <div class="col-xs-6"><img src="http://www.swedausa.com/images/uploads/home_page_images/1502835654.png" width="100%"></div><div class="col-xs-6"><img src="http://www.swedausa.com/images/uploads/home_page_images/1489144934.png" width="100%"></div></div></div></div></div></div></div>',
    attributes: {
        class: 'fa fa-shopping-bag',
        title: 'Catalog Blocks'
    },
    category: 'Sweda Components'
  });
  bm.add('AdvancedSearch', {
    label: 'Advanced Search',
    content: '<!DOCTYPE html><html> <head> <title></title> <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"> <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"> <style type="text/css"> input{width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;}</style> </head> <body> <div class="container" style="background-color: #eee; margin-top: 2% "> <div class="form_11" style="margin-top: 2%"> <div class="col-md-12"> <div class="col-md-3"> keyword <input type="text" name="keyword"> <br><br></div><div class="col-md-3"> category <input type="text" name="category"> <br><br></div><div class="col-md-3"> Item/Sku <input type="text" name="sku"> <br><br></div><div class="col-md-3"> Min. Price <input type="text" name="mip"> <br><br></div></div><div class="col-md-12"> <div class="col-md-12"> <div class="col-md-3"> Price <input type="text" name="map"> <br><br></div><div class="col-md-3"> Color <input type="text" name="color"> <br><br></div><div class="col-md-3"> Tags <input type="text" name="tag"> <br><br></div><div class="col-md-3" style="margin-top: 3%"> <button class="btn btn-primary"><i class="fa fa-search" aria-hidden="true">Search</i></button> <button>Clear</button> </div></div></div></div></div></body></html>',
    attributes: {
        class: 'fa fa-shopping-bag',
        title: 'Advanced Search'
    },
    category: 'Sweda Components'
  });











  // Filter Components
  

  // Categories Filter Dynamic
  // bm.add('productCategory', {
  //   label: 'Product Category',
  //   content: '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" ><productCategory style="display: block; width: 100%;padding:15px"><style type="text/css"> .ui-checkbox input, .ui-radio input { left: -20px !important; height: 14px !important; } ul{list-style-type:none;padding-left:30px}.filters{background-color:#fafafa;padding:20px}.panel-group{border:1px solid #eee}.filter-heading{border-radius:0;box-shadow:none;background-color:#fff !important}.filter-heading:hover{background-color:#f5f5f5 !important}.filter-heading a:hover, .filter-heading a:focus, .filter-heading a:active{text-decoration:none}.panel-default{border-color:transparent}.list-group-item{border:none}.panel-body{padding:0}.colors-list{list-style:none;padding:20px;margin-left:0}.color-link:hover{text-decoration:none !important}.colors-list li{display:inline}span.color{min-width:25px;min-height:25px;padding:10px 15px;border:1px solid #aaa;margin:5px}.color.green{background-color:#0F0}.color.redd{background-color:#f00}.color.blue{background-color:#00f}.color.teal{background-color:#008080}.color.orange{background-color:orange}.color.purple{background-color:purple}.list-group-item{padding-top:1px}</style><div class="filters"><div class="categories-filter"><div class="panel-group" id="accordion"><div class="panel panel-default"><div class="panel-heading filter-heading"><h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Product Categories<span class="pull-right">+</span></a></h4></div><div id="collapse1" class="panel-collapse collapse in"><div class="panel-body"><ul><li> <input type="checkbox">Level 1</input><ul><li> <input type="checkbox">Level 2</input><ul><li><input type="checkbox" >Level 3</input></li><li><input type="checkbox" >Level 3</input></li><li><input type="checkbox" >Level 3</input></li></ul></li></ul></li></ul></div></div></div></div></div></div></productCategory>',
  //   attributes: {
  //       class: 'fa fa-filter',
  //       title: 'Product category filter',
  //   },
  //   category: 'Filter Components'
  // });

  // // Filter Price 
  // bm.add('productPrice', {
  //   label: 'Price',
  //   content: '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" ><productPrice style="display: block; width: 100%;padding:15px"><style type="text/css"></style><div class="filters"><div class="categories-filter"><div class="panel-group" id="accordion"><div class="panel panel-default"><div class="panel-heading filter-heading"><h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse2"> Price<span class="pull-right">+</span></a></h4></div><div id="collapse2" class="panel-collapse collapse in"><div class="panel-body"><div data-role="main" class="ui-content"><div data-role="rangeslider"> <label for="price-min">Price:</label> <input type="range" name="price-min" id="price-min" value="200" min="0" max="1000"> <label for="price-max">Price:</label> <input type="range" name="price-max" id="price-max" value="800" min="0" max="1000"></div> <input type="submit" data-inline="true" value="Filter"></div></div></div></div></div></div></div></productPrice>',
  //   attributes: {
  //       class: 'fa fa-money',
  //       title: 'Product price',
  //   },
  //   category: 'Filter Components'
  // });

  // // Filter Colors
  // bm.add('productColors', {
  //   label: 'Colors',
  //    content: '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" ><productColors style="display: block; width: 100%;padding:15px"><style type="text/css">.ui-checkbox .ui-btn, .ui-radio .ui-btn { margin: 0; text-align: left; white-space: normal; z-index: 2; padding: 2px; margin-right: 3px; } .ui-btn.ui-checkbox-off::after{display: none !important} .ui-page-theme-a .ui-btn:hover, html .ui-bar-a .ui-btn:hover, html .ui-body-a .ui-btn:hover, html body .ui-group-theme-a .ui-btn:hover, html head+body .ui-btn.ui-btn-a:hover {border-color: #ddd; color: #333; text-shadow: 0 1px 0 #f3f3f3; } .ui-btn, label.ui-btn { font-weight: 700; border-width: 1px; } ul.text-capitalize li{margin-top:5px;display:inline-block}label{display:block !important}.filters{background-color:#fafafa;padding:20px;width:30%}.checkbox label{padding-left:0px;font-size:15px}.panel-group{border:1px solid #eee}ul{list-style-type:none}.nav-cat-scrollbar{max-height:440px;overflow:auto}.color-filter input[type=checkbox]{display: none }.filter-heading{border-radius:0;box-shadow:none;background-color:#fff !important}.filter-heading:hover{background-color:#f5f5f5 !important}.filters{background-color:#fafafa;padding:20px;width:100%}.filter-heading a:hover, .filter-heading a:focus, .filter-heading a:active{text-decoration:none}.panel-default{border-color:transparent}.list-group-item{border:none}.panel-body{padding:0}.colors-list{list-style:none;padding:20px;margin-left:0}.color-link:hover{text-decoration:none !important}.colors-list li{display:inline}span.color{min-width:25px;min-height:25px;padding:10px 15px;border:1px solid #aaa;margin:5px}.color.green{background-color:#0F0}.color.redd{background-color:#f00}.color.blue{background-color:#00f}.color.teal{background-color:#008080}.color.orange{background-color:orange}.color.purple{background-color:purple}.list-group-item{padding-top:1px}.color-filter ul li{position:relative}.color-filter ul li label{margin-left:0;padding-left:0;line-height:0;font-family:\'Lato\',Helvetica,Arial,sans-serif;color:#333;font-size:12px;font-weight:bold;letter-spacing:0;text-transform:uppercase}.color-filter input[type=checkbox]{border-radius:0;vertical-align:middle;margin:0;line-height:normal;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0;height:30px;opacity:0}.color-filter ul li input:checked+label{background-image:url(https://vignette1.wikia.nocookie.net/spongefan/images/c/c0/Clip-art-check.png/revision/latest?cb=20140318205721);background-size:25px 23px;width:30px;height:30px;display:inline-block;background-position:2px 1px;background-repeat:no-repeat;position:absolute;background-repeat:no-repeat;top:0}</style><div class="filters"><div class="categories-filter"><div class="panel-group" id="accordion"><div class="panel panel-default"><div class="panel-heading filter-heading"><h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse3"> Color<span class="pull-right">+</span></a></h4></div><div id="collapse3" class="panel-collapse collapse in"><div class="panel-body"><div id="collapsethree" class="cat-collapseOne panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne"><div class="color-filter nav-cat-scrollbar"><ul class="text-capitalize"><li><div data-toggle="tooltip" data-placement="top" data-original-title="Multicolor" ><label for="img1"> <img src="http://www.swedausa.com/product/color/16.jpg"></label> <input type="checkbox" title="Multicolor" id="img1" data-type="parent" data-filter-type="color" name="lists[weekly]" value="True" class="check-with-label search-filter 16 color_master-Multicolor" data-color-id="js-filter-master-Multicolor" id="master-weeklly16" data-filter-id="Colors:16:Colors:0:Multicolor"> <label for="master-weeklly16"></label></div></li><li><div data-toggle="tooltip" data-placement="top" data-original-title="Black"> <label for="img2"> <img src="http://www.swedausa.com/product/color/15.jpg"></label> <input type="checkbox" title="Black" id="img2" data-type="parent" data-filter-type="color" name="lists[weekly]" value="True" class="check-with-label search-filter 15 color_master-Black" data-color-id="js-filter-master-Black" id="master-weeklly15" data-filter-id="Colors:15:Colors:0:Black"> <label for="master-weeklly15"></label></div></li><li><div data-toggle="tooltip" data-placement="top" data-original-title="Red"> <label for="img3"> <img src="http://www.swedausa.com/product/color/1.jpg"></label> <input type="checkbox" title="Red" id="img3" data-type="parent" data-filter-type="color" name="lists[weekly]" value="True" class="check-with-label search-filter 1 color_master-Red" data-color-id="js-filter-master-Red" id="master-weeklly1" data-filter-id="Colors:1:Colors:0:Red"> <label for="master-weeklly1"></label></div></li><li><div data-toggle="tooltip" data-placement="top" data-original-title="Blue" > <label for="img4"> <img src="http://www.swedausa.com/product/color/3.jpg"></label> <input type="checkbox" title="Blue" id="img4" data-type="parent" data-filter-type="color" name="lists[weekly]" value="True" class="check-with-label search-filter 3 color_master-Blue" data-color-id="js-filter-master-Blue" id="master-weeklly3" data-filter-id="Colors:3:Colors:0:Blue"> <label for="master-weeklly3"></label></div></li><li><div data-toggle="tooltip" data-placement="top" data-original-title="Yellow"> <label for="img5"> <img src="http://www.swedausa.com/product/color/4.jpg"></label> <input type="checkbox" title="Yellow" id="img5" data-type="parent" data-filter-type="color" name="lists[weekly]" value="True" class="check-with-label search-filter 4 color_master-Yellow" data-color-id="js-filter-master-Yellow" id="master-weeklly4" data-filter-id="Colors:4:Colors:0:Yellow"> <label for="master-weeklly4"></label></div></li><li><div data-toggle="tooltip" data-placement="top" data-original-title="Green" > <label for="img6"> <img src="http://www.swedausa.com/product/color/2.jpg"></label> <input type="checkbox" title="Green" id="img6" data-type="parent" data-filter-type="color" name="lists[weekly]" value="True" class="check-with-label search-filter 2 color_master-Green" data-color-id="js-filter-master-Green" id="master-weeklly2" data-filter-id="Colors:2:Colors:0:Green"> <label for="master-weeklly2"></label></div></li><li><div data-toggle="tooltip" data-placement="top" data-original-title="White"> <label for="img7"> <img src="http://www.swedausa.com/product/color/5.jpg"></label> <input type="checkbox" title="White" id="img7" data-type="parent" data-filter-type="color" name="lists[weekly]" value="True" class="check-with-label search-filter 5 color_master-White" data-color-id="js-filter-master-White" id="master-weeklly5" data-filter-id="Colors:5:Colors:0:White"> <label for="master-weeklly5"></label></div></li><li><div data-toggle="tooltip" data-placement="top" data-original-title="Silver"> <label for="img8"> <img src="http://www.swedausa.com/product/color/12.jpg"></label> <input type="checkbox" title="Silver" id="img8" data-type="parent" data-filter-type="color" name="lists[weekly]" value="True" class="check-with-label search-filter 12 color_master-Silver" data-color-id="js-filter-master-Silver" id="master-weeklly12" data-filter-id="Colors:12:Colors:0:Silver"> <label for="master-weeklly12"></label></div></li><li><div data-toggle="tooltip" data-placement="top" data-original-title="Pink"> <label for="img9"> <img src="http://www.swedausa.com/product/color/7.jpg"></label> <input type="checkbox" title="Pink" id="img9" data-type="parent" data-filter-type="color" name="lists[weekly]" value="True" class="check-with-label search-filter 7 color_master-Pink" data-color-id="js-filter-master-Pink" id="master-weeklly7" data-filter-id="Colors:7:Colors:0:Pink"> <label for="master-weeklly7"></label></div></li><li><div data-toggle="tooltip" data-placement="top" data-original-title="Gray/Grey"> <label for="img10"> <img src="http://www.swedausa.com/product/color/6.jpg"></label> <input type="checkbox" title="Gray/Grey" id="img10" data-type="parent" data-filter-type="color" name="lists[weekly]" value="True" class="check-with-label search-filter 6 color_master-Gray/Grey" data-color-id="js-filter-master-Gray/Grey" id="master-weeklly6" data-filter-id="Colors:6:Colors:0:Gray/Grey"> <label for="master-weeklly6"></label></div></li><li><div data-toggle="tooltip" data-placement="top" data-original-title="Brown"> <label for="img11"> <img src="http://www.swedausa.com/product/color/8.jpg"></label> <input type="checkbox" title="Brown" id="img11" data-type="parent" data-filter-type="color" name="lists[weekly]" value="True" class="check-with-label search-filter 8 color_master-Brown" data-color-id="js-filter-master-Brown" id="master-weeklly8" data-filter-id="Colors:8:Colors:0:Brown"> <label for="master-weeklly8"></label></div></li><li><div data-toggle="tooltip" data-placement="top" data-original-title="Clear"> <label for="img12"> <img src="http://www.swedausa.com/product/color/14.jpg"></label> <input type="checkbox" title="Clear" id="img12" data-type="parent" data-filter-type="color" name="lists[weekly]" value="True" class="check-with-label search-filter 14 color_master-Clear" data-color-id="js-filter-master-Clear" id="master-weeklly14" data-filter-id="Colors:14:Colors:0:Clear"> <label for="master-weeklly14"></label></div></li><li><div data-toggle="tooltip" data-placement="top" data-original-title="Orange"> <label for="img13"> <img src="http://www.swedausa.com/product/color/9.jpg"></label> <input type="checkbox" title="Orange" id="img13" data-type="parent" data-filter-type="color" name="lists[weekly]" value="True" class="check-with-label search-filter 9 color_master-Orange" data-color-id="js-filter-master-Orange" id="master-weeklly9" data-filter-id="Colors:9:Colors:0:Orange"> <label for="master-weeklly9"></label></div></li><li><div data-toggle="tooltip" data-placement="top" data-original-title="Cyan"> <label for="img14"> <img src="http://www.swedausa.com/product/color/10.jpg"></label> <input type="checkbox" title="Cyan" id="img14" data-type="parent" data-filter-type="color" name="lists[weekly]" value="True" class="check-with-label search-filter 10 color_master-Cyan" data-color-id="js-filter-master-Cyan" id="master-weeklly10" data-filter-id="Colors:10:Colors:0:Cyan"> <label for="master-weeklly10"></label></div></li><li><div data-toggle="tooltip" data-placement="top" data-original-title="Gold"> <label for="img15"> <img src="http://www.swedausa.com/product/color/13.jpg"></label> <input type="checkbox" title="Gold" id="img15" data-type="parent" data-filter-type="color" name="lists[weekly]" value="True" class="check-with-label search-filter 13 color_master-Gold" data-color-id="js-filter-master-Gold" id="master-weeklly13" data-filter-id="Colors:13:Colors:0:Gold"> <label for="master-weeklly13"></label></div></li><li><div data-toggle="tooltip" data-placement="top" data-original-title="Violet"> <label for="img16"> <img src="http://www.swedausa.com/product/color/11.jpg"></label> <input type="checkbox" title="Violet" id="img16" data-type="parent" data-filter-type="color" name="lists[weekly]" value="True" class="check-with-label search-filter 11 color_master-Violet" data-color-id="js-filter-master-Violet" id="master-weeklly11" data-filter-id="Colors:11:Colors:0:Violet"> <label for="master-weeklly11"></label></div></li></ul></div></div></div></div></div></div></div></div></productColors>',
  //   attributes: {
  //       class: 'fa fa-delicious',
  //       title: 'Product Colors',
  //   },
  //   category: 'Filter Components'
  // });

  // // Filter Brands
  // bm.add('productBrand', {
  //   label: 'Brands',
  //   content: '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" ><productBrand style="display: block; width: 100%;padding:15px"><style type="text/css">ul{list-style-type:none;padding-left:30px}.filters{background-color:#fafafa;padding:20px}.panel-group{border:1px solid #eee}.filter-heading{border-radius:0;box-shadow:none;background-color:#fff !important}.filter-heading:hover{background-color:#f5f5f5 !important}.filter-heading a:hover, .filter-heading a:focus, .filter-heading a:active{text-decoration:none}.panel-default{border-color:transparent}.list-group-item{border:none}.panel-body{padding:0}span.color{min-width:25px;min-height:25px;padding:10px 15px;border:1px solid #aaa;margin:5px}</style><div class="filters"><div class="categories-filter"><div class="panel-group" id="accordion"><div class="panel panel-default"><div class="panel-heading filter-heading"><h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse4"> Brand<span class="pull-right">+</span></a></h4></div><div id="collapse4" class="panel-collapse collapse in"><div class="panel-body"><ul><li><input type="checkbox">Brand 1</input></li><li><input type="checkbox">Brand 2</input></li><li><input type="checkbox">Brand 3</input></li><li><input type="checkbox">Brand 4</input></li><li><input type="checkbox">Brand 5</input></li></ul></div></div></div></div></div></div></productBrand>',
  //   attributes: {
  //       class: 'fa fa-bookmark-o',
  //       title: 'Product Brands',
  //   },
  //   category: 'Filter Components'
  // });

  









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
  // Full Home Page Layout
  bm.add('ReUseComponent', {
      label: 'ReUse Component',
      content: '<ReUseComponent style="display: block; width: 100%; min-height:20px"><div style="border:solid black 2px"></div></ReUseComponent>',
      attributes: {
          class: 'fa fa-home',
          title: 'ReUse Component'
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
        // '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> <body> <div class="container-fluid"><InvoiceDetail> <div class="row" style=""> <div clss="col-sm-3 col-md-2"> </div><div class="col-sm-8 col-md-8" style="margin-top:51px;margin-left:auto !important;margin-right:auto !important;"> <h3> Invoices </h3> <table class="table table-bordered table-striped table-collapsed"> <thead> <th>Id</th> <th>Name</th> <th>Date</th> <th>Amount Paid</th> <th>Amount Due</th> <th> Total Amount </th> </thead> <tbody> <tr> <td> InvoiceID </td><td> ContactName </td><td> Date </td><td> AmountPaid </td><td> AmountDue </td> <td> Total Amount</td> </tr></tbody> </table> </div><div clss="col-sm-3 col-md-2"> </div></div></InvoiceDetail></div>',  
        //  content:'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> <body> <div class="container-fluid"><InvoiceDetail>  <div class="col-sm-8 col-md-8" style="margin-top:51px;margin-left:auto !important;margin-right:auto !important;"> <h3> Invoices </h3> <table class="table table-bordered table-striped table-collapsed"> <thead> <th>Id</th> <th>Name</th> <th>Date</th> <th>Amount Paid</th> <th>Amount Due</th> <th> Total Amount </th> </thead> <tbody> <tr> <td> InvoiceID </td><td> ContactName </td><td> Date </td><td> AmountPaid </td><td> AmountDue </td> <td> Total Amount</td> </tr></tbody> </table> </div><div clss="col-sm-3 col-md-2"> </div></InvoiceDetail></div>', 
        content:'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><InvoiceDetail style="display: block; width: 100%;padding:15px"> <h3> Invoices </h3> <table class="table table-bordered table-striped table-collapsed"> <th>Id</th> <th>Name</th> <th>Date</th> <th>Amount Paid</th> <th>Amount Due</th> <th> Total Amount </th><div class="invoiceTableBody"></div></table> </InvoiceDetail>',
        // content:'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><InvoiceDetail><div class="container-fluid"></InvoiceDetail><InvoiceDetail>   <h3> Invoices </h3> <table class="table table-bordered table-striped table-collapsed"> <thead> <th>Id</th> <th>Name</th> <th>Date</th> <th>Amount Paid</th> <th>Amount Due</th> <th> Total Amount </th> </thead> <tbody> <tr> <td> 1  </td> <td> krishna </td> <td> 04/01/2017 </td> <td> 1000</td> <td>500 </td> <td> 1500 </td> </tr> <tr> <td> 2  </td> <td> dweep </td> <td> 04/05/2017 </td> <td> 2500</td> <td>500 </td> <td> 3000 </td> </tr> <td> 3  </td> <td> ekta </td> <td> 12/05/2017 </td> <td> 3500</td> <td>500 </td> <td> 4000 </td> </tr> <td> 4  </td> <td> ashwini </td> <td> 10/05/2017 </td> <td> 4500</td> <td>500 </td> <td> 5000 </td> </tr></tbody>  </table> </InvoiceDetail></div>',
 
        attributes: {
            class: 'fa fa-file-text-o',
            title: 'Invoice Page',
        },
        category: 'Accounting Components'
    });



    bm.add('InvoiceCustomer', {
        label: 'Customers',
        // content:'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><InvoiceCustomer style="display: block; width: 100%;padding:15px"><h3> Customer </h3> <table class="table table-bordered table-striped table-collapsed"> <th>Customer Name</th> <div class="invoiceTableBody"> </div> </table></InvoiceCustomer></div>',
        content: '<html><head><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css"></head> <InvoiceFilter style="display: block; width: 100%;padding:15px"><div class="container"><div class="form-group"> <label>status</label> <select class="form-control" id="Select1" style="width: 100px !important; min-width: 100px; max-width: 100px;"><option>Select</option><option>Paid</option><option>Unpaid</option> </select></div><div class="form-group"><div class="form-group row"><div class="col-xs-2"> <label>Amount</label> <select class="form-control" id="Select2" style="width: 150px !important; min-width: 150px; max-width: 150px;"><option>Select</option><option>Paid</option><option>Unpaid</option><option>Total</option> </select></div><div class="col-xs-2"> <label> choice</label> <select class="form-control" id="Select3" style="width: 150px !important; min-width: 150px; max-width: 150px;"><option>Select</option><option>Greater Than</option><option>less Than</option> </select></div></div></div></div> </InvoiceFilter></html>',
        attributes: {
            class: 'fa fa-users',
            title: 'Invoice Page',
        },
        category: 'Accounting Components'
    });

    bm.add('InvoiceFilter', {
        label: 'Invoice Filter',
        // content:'<div><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css"> <InvoiceFilter style="display: block; width: 100%;padding:15px"><div class="container"><div class="form-group"> <label>status</label> <select class="form-control" id="Select1" style="width: 150px !important; min-width: 150px; max-width: 150px;"><option>Select</option><option>Paid</option><option>Unpaid</option> </select></div><div class="form-group"><div class="form-group row"><div class="col-xs-2"> <label>Select Amount</label> <select class="form-control" id="Select2" style="width: 150px !important; min-width: 150px; max-width: 150px;"><option>Select</option><option>Paid</option><option>Unpaid</option><option>Total</option> </select></div><div class="col-xs-2"> <label> choice</label> <select class="form-control" id="Select3" style="width: 150px !important; min-width: 150px; max-width: 150px;"><option>Select</option><option>Greater Than</option><option>less Than</option> </select></div><div class="col-xs-2"> <label> Amount </label> <input class="form-control" style="width: 150px !important; min-width: 150px; max-width: 150px;" type="text"></div></div></div> <div class="form-group"><h3> Invoices</h3><table class="table table-bordered table-striped table-collapsed"><th>Id</th><th>Name</th><th>Date</th><th>Amount Paid</th><th>Amount Due</th><th> Total Amount</th></table></div> </div> </InvoiceFilter></div>',
        content:'<div><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css"> <InvoiceFilter style="display: block; width: 100%;padding:15px"><div class="container"><div class="form-group"> <label>status</label> <select class="form-control ye no y n s" id="menu" style="width: 150px !important; min-width: 160px; max-width: 160px;" onChange="checkOption(this)"><option value="Select">Select</option><option value="Paid">Paid</option><option value="Unpaid">Unpaid</option> </select></div><div class="form-group"><div class="form-group row"><div class="col-xs-2"> <label>Select Amount</label> <select class="form-control yes no y n s" id="Select2" style="width: 150px !important; min-width: 160px; max-width: 160px;" onChange="checkOption(this)"><option value="Select">Select</option><option value="Paid">Paid</option><option value="Unpaid">Unpaid</option><option value="Total">Total</option> </select></div><div class="col-xs-2"> <label> choice</label> <select class="form-control yes no y n s" id="Select3" style="width: 150px !important; min-width: 160px; max-width: 160px;"><option>Select</option><option>Greater Than Or Equal To</option><option>less ThanOr Equal To</option> </select></div><div class="col-xs-2"> <label> Amount </label> <input id="input" class="form-control yes no y n s" id="text1" style="width: 150px !important; min-width: 160px; max-width: 160px;" type="text"></div></div></div><div class="form-group"><div class="form-group row"><div class="col-xs-2"> <label>Select Date</label> <select class="form-control yes ye y n s" id="Select4" style="width: 150px !important; min-width: 160px; max-width: 160px;" onChange="checkOption(this)"><option value="Select">Select</option><option value="Due_Date">Due Date</option><option value="Gen_Date">Generation Date</option> </select></div><div class="col-xs-2"> <label> choice</label> <select class="form-control yes ye y n s" id="Select5" style="width: 150px !important; min-width: 160px; max-width: 160px;"><option>Select</option><option>Greater Than Or Equal To</option><option>less ThanOr Equal To</option> </select></div><div class="col-xs-2"> <label> Choose Date </label> <input type="date" class="form-control yes ye y n s" id="date1" style="width: 100px !important; min-width: 160px; max-width: 160px;"></div></div></div><div class="form-group"><div class="form-group row"><div class="col-xs-2"> <label> Choose Date </label> <input type="date" class="form-control yes ye no n s" id="date2" style="width: 150px !important; min-width: 160px; max-width: 160px;" onChange="checkOption(this)"></div><div class="col-xs-2"> <label style="margin-top: 25px;margin-left: 50px;"> To </label></div><div class="col-xs-2"> <label> Choose Date </label> <input type="date" class="form-control yes ye no n s" id="date3" style="width: 150px !important; min-width: 160px; max-width: 160px;"></div></div></div><div class="form-group"><div class="form-group row"><div class="col-xs-2"> <label> Name </label> <input class="form-control yes ye no y s" id="text2" style="width: 150px !important; min-width: 160px; max-width: 160px;" type="text" onkeyup="check(this)"></div><div class="col-xs-2"> <label> Choose Date </label> <input type="date" class="form-control yes ye no y s" id="date4" style="width: 150px !important; min-width: 160px; max-width: 160px;"></div><div class="col-xs-2"> <label> Paid Amount </label> <input class="form-control yes ye no y s" id="text3" style="width: 150px !important; min-width: 160px; max-width: 160px;" type="text"></div><div class="col-xs-2"> <label> Total Amount </label> <input class="form-control yes ye no y s" id="text4" style="width: 150px !important; min-width: 160px; max-width: 160px;" type="text"></div></div></div><div class="form-group"><h3> Invoices</h3><table class="table table-bordered table-striped table-collapsed" id="tbdata"> <th>  </th> <th>Id</th><th>Name</th><th>Date</th><th>Amount Paid</th><th>Amount Due</th><th> Total Amount</th></table><input type="text" style="width: 100px; padding: 2px; border: 1px solid black"/></div></div> </InvoiceFilter></div>',
        attributes: {
            class: 'fa fa-filter',
            title: 'Invoice Filter',
        },
        category: 'Accounting Components'
    });

    bm.add('InvoicePayment', {
        label: 'Payment',
        content:'<InvoicePayment style="display: block; width: 100%;padding:15px"><div class="container"><div class="form-group"> <input type="submit" class="btn btn-success pull-right" value="Pay Now" style="width: 150px !important; min-width: 160px; max-width: 160px; margin-right: 2px;"></div></div></InvoicePayment>',
        attributes: {
            class:'fa fa-cc-paypal',
            title: 'Invoice Payment',
        },
        category: 'Accounting Components'
    });



  

  















  // Flowz Components

  // <link href="https://raw.githubusercontent.com/froala/design-blocks/master/dist/css/froala_blocks.css" rel="stylesheet" type="text/css">

  // Call-To-Action
  // Style-1
  bm.add('froala-callToAction-style-1', {
      label: 'Style 1',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-8 text-center"> <p class="text-h3"> "Separated they live in Bookmarksgrove right at the coast of the Semantics, far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast." </p><p class="mt-5 mt-sm-4"> <a class="btn" href="#">Download</a> </p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-1',
          title: 'Style 1',
      },
      category: 'Call To action'
  });

  // Style-2
  bm.add('froala-callToAction-style-2', {
      label: 'Style 2',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-6 text-center"> <h1>Call to Action</h1> <p class="text-h3"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts </p><p class="mt-5 mt-sm-4"> <a class="btn" href="#">Download</a> </p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-2',
          title: 'Style 2',
      },
      category: 'Call To action'
  });

  // Style-3
  bm.add('froala-callToAction-style-3', {
      label: 'Style 3',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-sm-8 col-md-6 col-lg-4 text-center"> <h3> <strong>Right at the coast of the Semantics, a large language ocean. A small river named Duden.</strong> </h3> <p class="mt-5 mt-sm-4"> <a class="btn" href="#">Download</a> </p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-3',
          title: 'Style 3',
      },
      category: 'Call To action'
  });

  // Style-4
  bm.add('froala-callToAction-style-4', {
      label: 'Style 4',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-8 col-lg-6 text-center"> <h1>Call to Action</h1> <p class="text-h3"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts </p><p class="mt-5 mt-sm-4"> <a class="btn" href="#">Download</a> </p></div></div><div class="row pt-5 pb-3"> <div class="col-12 text-center"> <p><strong>Fortune 100 companies are using our products</strong></p></div></div><div class="row"> <div class="col-12 text-center"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/adobe.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/discovery.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2 " src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/ebay.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/samsung.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/orange.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/salesforce.svg"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-4',
          title: 'Style 4',
      },
      category: 'Call To action'
  });

  // Style-5
  bm.add('froala-callToAction-style-5', {
      label: 'Style 5',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-8 text-center"> <h1>Far far away, behind the word mountains, far from</h1> <p class="mt-5"> <a class="btn" href="#">Download</a> </p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-5',
          title: 'Style 5',
      },
      category: 'Call To action'
  });

  // Style-6
  bm.add('froala-callToAction-style-6', {
      label: 'Style 6',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-sm-10 col-md-8 col-lg-4 text-center"> <p class="text-h3"> Follow us and ask more on: </p><p class="text-h2"> <a href="#"><i class="fa fa-facebook"></i></a>&nbsp;&nbsp;&nbsp; <a href="#"><i class="fa fa-twitter"></i></a>&nbsp;&nbsp;&nbsp; <a href="#"><i class="fa fa-instagram"></i></a>&nbsp;&nbsp;&nbsp; <a href="#"><i class="fa fa-google"></i></a>&nbsp;&nbsp;&nbsp; <a href="#"><i class="fa fa-pinterest"></i></a> </p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-6',
          title: 'Style 6',
      },
      category: 'Call To action'
  });

  // Style-7
  bm.add('froala-callToAction-style-7', {
      label: 'Style 7',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-center pb-0 pb-lg-4"> <div class="col-12"> <h1>Call to action</h1> </div></div><div class="row text-center pt-4 pt-md-5"> <div class="col-12 col-sm-10 col-md-6 col-lg-4 m-sm-auto"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:18px">First Action</h3> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p><p class="mt-3"><a class="btn" href="#">Button</a></p></div><div class="col-12 col-sm-10 col-md-6 col-lg-4 ml-sm-auto mr-sm-auto mt-5 mt-md-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:18px">Second Action</h3> <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p><p class="mt-3"><a class="btn" href="#">Button</a></p></div><div class="col-12 col-sm-10 col-md-6 col-lg-4 ml-sm-auto mr-sm-auto mt-5 mt-md-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:18px">Third Action</h3> <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p><p class="mt-3"><a class="btn" href="#">Button</a></p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-7',
          title: 'Style 7',
      },
      category: 'Call To action'
  });


  // Style-8
  bm.add('froala-callToAction-style-8', {
      label: 'Style 8',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .style-8{background-image: url(\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_c_1.svg\');}</style>'+
               '<section class="fdb-block style-8"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-10 col-lg-8 text-center"> <div class="fdb-box"> <h1>Call to Action</h1> <p class="text-h3" style="font-size:16px"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts </p><p class="mt-4"> <a class="btn" href="#">Download</a> </p></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-8',
          title: 'Style 8',
      },
      category: 'Call To action'
  });

  // Style-9
  bm.add('froala-callToAction-style-9', {
      label: 'Style 9',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row align-items-center"> <div class="col-12 col-sm-9 text-left"> <h2>Use Flowz Design Blocks for free in your project</h2> </div><div class="col-12 col-sm-3 text-left text-sm-center mt-4 mt-sm-0"> <a class="btn" href="#">Download</a> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-9',
          title: 'Style 9',
      },
      category: 'Call To action'
  });

  // Style-10
  bm.add('froala-callToAction-style-10', {
      label: 'Style 10',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .style-10{background-image: url(\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_1.svg\');}</style>'+
               '<section class="fdb-block pb-0 style-10"> <div class="container"> <div class="row justify-content-end"> <div class="col-12 col-md-8 col-lg-6 text-center"> <div class="fdb-box br-0"> <h1>Call to Action</h1> <p class="text-h3" style="font-size:16px"> When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove </p><p class="mt-4"> <a class="btn" href="#">Download</a> </p></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-10',
          title: 'Style 10',
      },
      category: 'Call To action'
  });

  // Style-11
  bm.add('froala-callToAction-style-11', {
      label: 'Style 11',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row align-items-center"> <div class="col-12 col-sm-3 text-center"> <a class="btn" href="#">Download</a> </div><div class="col-12 col-sm-9 text-center text-sm-right mt-4 mt-sm-0"> <h2>Use Flowz Design Blocks for free in your project</h2> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-11',
          title: 'Style 11',
      },
      category: 'Call To action'
  });

  // Style-12
  bm.add('froala-callToAction-style-12', {
      label: 'Style 12',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .style-12{background-image: url(\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/alt_wide_2.svg\');}</style>'+
               '<section class="fdb-block style-12" > <div class="container"> <div class="row"> <div class="col-12 col-sm-10 col-md-8 col-lg-6 text-left"> <h1>Call to Action</h1> <p class="text-h3" style="font-size:16px"> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. </p><p class="mt-4"> <a class="btn" href="#">Download</a> </p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-12',
          title: 'Style 12',
      },
      category: 'Call To action'
  });

  // Style-13
  bm.add('froala-callToAction-style-13', {
      label: 'Style 13',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row"> <div class="col-12"> <h1 style="font-size:24px">Flowz Design Blocks</h1> <p class="text-h3" style="font-size:16px"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. </p></div></div><div class="row justify-content-center align-items-center pt-5"> <div class="col-8 col-sm-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_2.svg"> </div><div class="col-12 col-sm-6 m-auto pt-4 pt-sm-0"> <h2 style="font-size:22px"><strong>Bootstrap</strong></h2> <p class="text-h3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p></div><div class="col-12 col-sm-3 text-center pt-4 pt-sm-0"> <p><a class="btn btn-empty" href="#" style="font-size:18px">Take a Tour</a></p><p><a class="btn" href="#" style="font-size:18px">Start Now</a></p><p class="text-h5" style="font-size:16px">Some foo text</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-13',
          title: 'Style 13',
      },
      category: 'Call To action'
  });

  // Style-14
  bm.add('froala-callToAction-style-14', {
      label: 'Style 14',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row"> <div class="col-12 text-center"> <h1>Flowz Design Blocks</h1> <p class="text-h2" style="font-size:16px"> Far far away, behind the word mountains, far from. </p></div></div><div class="row align-items-center pt-2 pt-lg-5"> <div class="col-12 col-md-8 col-lg-7"> <h2 style="font-size:22px">Call to action</h2> <p class="text-h3" style="font-size:16px">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p><p class="mt-4"><a class="btn" href="#" style="font-size:18px">Take a Tour</a></p></div><div class="col-8 col-md-4 m-auto m-md-0 ml-md-auto pt-5"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_1.svg"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-14',
          title: 'Style 14',
      },
      category: 'Call To action'
  });

  // Style-15
  bm.add('froala-callToAction-style-15', {
      label: 'Style 15',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row align-items-center"> <div class="col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_4.svg"> </div><div class="col-12 col-md-8 ml-auto pt-5 pt-md-0"> <h2 style="font-size:22px">Call to action</h2> <p class="text-h3" style="font-size:16px">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p><p class="mt-4"><a class="btn" href="#" style="font-size:18px">Take a Tour</a></p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-15',
          title: 'Style 15',
      },
      category: 'Call To action'
  });

  // Style-16
  bm.add('froala-callToAction-style-16', {
      label: 'Style 16',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .style-16{background-image: url(\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_c_1.svg\');}</style>'+
               '<section class="fdb-block bg-dark fdb-viewport style-16" > <div class="container align-items-center justify-content-center d-flex"> <div class="row justify-content-center text-center"> <div class="col-12 col-md-10 col-lg-8"> <h1>Flowz Design Blocks is Open Source and free to use in your apps</h1> <p class="mt-5"><a href="#" class="btn">Call to Action</a></p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-16',
          title: 'Style 16',
      },
      category: 'Call To action'
  });

  // Style-17
  bm.add('froala-callToAction-style-17', {
      label: 'Style 17',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .style-17{background-image: url(\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_0.svg\'); }</style>'+
               '<section class="fdb-block fdb-viewport bg-dark style-17"> <div class="container justify-content-center align-items-center d-flex"> <div class="row justify-content-center text-center"> <div class="col-12 col-md-8"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h1>Flowz Design Blocks</h1> <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p><p class="mt-5"><a href="#" class="btn">Call to Action</a></p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-17',
          title: 'Style 17',
      },
      category: 'Call To action'
  });

  // Style-18
  bm.add('froala-callToAction-style-18', {
      label: 'Style 18',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block pb-0"> <div class="container align-items-end justify-content-center d-flex"> <div class="row align-items-top text-left"> <div class="col-12 col-md-6 col-lg-5"> <p class="mb-5 mt-5"><img alt="image" height="40" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png"></p><h1 style="font-size:24px">Design Blocks</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p><p class="mt-4"><a href="#" class="btn" style="font-size:16px">Call to Action</a></p></div><div class="col-12 col-sm-4 col-md-6 col-lg-4 m-auto pt-5"> <img alt="image" class="img-fluid br-0" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_tall.png"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-18',
          title: 'Style 18',
      },
      category: 'Call To action'
  });

  // Style-19
  bm.add('froala-callToAction-style-19', {
      label: 'Style 19',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container align-items-center justify-content-center d-flex"> <div class="row align-items-center text-left"> <div class="col-12 col-sm-6"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div><div class="col-12 col-lg-5 ml-auto pt-5 pt-lg-0"> <h1>Flowz Design Blocks</h1> <p class="text-h3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p><p class="mt-4"><a href="#" class="btn">Call to Action</a></p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-19',
          title: 'Style 19',
      },
      category: 'Call To action'
  });

  // Style-20
  bm.add('froala-callToAction-style-20', {
      label: 'Style 20',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block pb-0"> <div class="container"> <div class="row align-items-center text-left"> <div class="col-12 col-md-8"> <h1>Flowz Design Blocks</h1> <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p></div><div class="col-12 col-md-3 ml-auto text-left text-md-right"> <p><a href="#" class="btn">Call to Action</a></p></div></div><div class="row pt-5"> <div class="col-12"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_very_wide.svg"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-20',
          title: 'Style 20',
      },
      category: 'Call To action'
  });

  // Style-21
  bm.add('froala-callToAction-style-21', {
      label: 'Style 21',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .style-22{ background-image: url(\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/alt_wide_1.svg\'); }</style>'+
               '<section class="fdb-block fdb-viewport style-22"> <div class="container align-items-center justify-content-center d-flex"> <div class="row align-items-center text-left"> <div class="col-12 col-sm-10 col-md-8 col-lg-6"> <h1>Flowz Design Blocks is build on Boostrap Framework</h1> <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there.</p><p class="mt-5"><a href="#" class="btn btn-shadow">Call to Action</a> <a href="#" class="btn btn-white btn-shadow">Button</a></p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-21',
          title: 'Style 21',
      },
      category: 'Call To action'
  });

  // Style-22
  bm.add('froala-callToAction-style-22', {
      label: 'Style 22',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-8 col-lg-5 text-center pb-md-5"> <h1>Flowz Design Blocks</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p><p class="mt-4"><a href="#" class="btn">Call to Action</a></p></div></div><div class="row text-center justify-content-center pt-5"> <div class="col-12 col-sm-6 col-lg-3"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:18px"><strong>Feature One</strong></h3> <p>Far far away, behind the word mountains, far from the countries</p></div><div class="col-12 col-sm-6 col-lg-3 pt-4 pt-sm-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:18px"><strong>Feature Two</strong></h3> <p>Separated they live in Bookmarksgrove right at the coast</p></div><div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:18px"><strong>Feature Three</strong></h3> <p>A small river named Duden flows by their place and supplies it</p></div><div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:18px"><strong>Feature Four</strong></h3> <p>Far far away, behind the word mountains, far from the countries</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-callToAction-style-22',
          title: 'Style 22',
      },
      category: 'Call To action'
  });













  // Contact Forms
  // Style-1
  bm.add('froala-contacts-style-1', {
      label: 'Style 1',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block pt-0"> <div class="container-fluid p-0 pb-md-5"> <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe> </div><div class="container"> <div class="row mt-5"> <div class="col-12 col-md-6 col-lg-5"> <h2 style="font-size:18px">Contact Us</h2> <p class="text-h3" style="font-size:16px"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove. </p><p class="text-h3" style="font-size:16px"> It is a paradisematic country, in which roasted parts of sentences fly into your mouth. </p><p class="text-h3 mt-5" style="font-size:16px"> <strong>Email:</strong> <a href="#">hello@website.com</a> </p><p class="text-h3" style="font-size:16px"> <strong>Phone:</strong> <a href="#">+44 123 123 1232</a> </p></div><div class="col-12 col-md-6 ml-auto pt-5 pt-md-0"> <form> <div class="row"> <div class="col" style="font-size:16px"> <input type="text" class="form-control" placeholder="First name"> </div><div class="col" style="font-size:16px"> <input type="text" class="form-control" placeholder="Last name"> </div></div><div class="row mt-4"> <div class="col" style="font-size:16px"> <input type="email" class="form-control" placeholder="Enter email"> </div></div><div class="row mt-4"> <div class="col" style="font-size:16px"> <input type="email" class="form-control" placeholder="Subject"> </div></div><div class="row mt-4"> <div class="col" style="font-size:16px"> <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea> </div></div><div class="row mt-4"> <div class="col" style="font-size:16px"> <button type="submit" class="btn">Submit</button> </div></div></form> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contacts-style-1',
          title: 'Style 1',
      },
      category: 'Contact Forms'
  });

  // Style-2
  bm.add('froala-contacts-style-2', {
      label: 'Style 2',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-2{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_0.svg);}</style>'+
               '<section class="fdb-block bg-dark contact-style-2"> <div class="container"> <div class="row text-center justify-content-center"> <div class="col-12 col-md-8 col-lg-7"> <h1>Contact Us</h1> <h2>We love to hear from you!</h2> </div></div><div class="row pt-4"> <div class="col-12"> <form> <div class="row"> <div class="col-12 col-md"> <input type="text" class="form-control" placeholder="Name"> </div><div class="col-12 col-md mt-4 mt-md-0"> <input type="text" class="form-control" placeholder="Email"> </div><div class="col-12 col-md mt-4 mt-md-0"> <input type="text" class="form-control" placeholder="Phone (optional)"> </div></div><div class="row mt-4"> <div class="col"> <input type="email" class="form-control" placeholder="Subject"> </div></div><div class="row mt-4"> <div class="col"> <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea> </div></div><div class="row mt-4"> <div class="col text-center"> <button type="submit" class="btn">Submit</button> </div></div></form> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contacts-style-2',
          title: 'Style 2',
      },
      category: 'Contact Forms'
  });

  // Style-3
  bm.add('froala-contacts-style-3', {
      label: 'Style 3',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-center justify-content-center"> <div class="col-12 col-md-8 col-lg-7"> <h1>Contact Us</h1> <p class="text-h3" style="font-size:16px">One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p></div></div><div class="row pt-4"> <div class="col-12 col-md-6"> <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe> </div><div class="col-12 col-md-6 pt-5 pt-md-0"> <form> <div class="row"> <div class="col"> <input type="email" class="form-control" placeholder="Enter email"> </div></div><div class="row mt-4"> <div class="col"> <input type="email" class="form-control" placeholder="Subject"> </div></div><div class="row mt-4"> <div class="col"> <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea> </div></div><div class="row mt-4"> <div class="col"> <button type="submit" class="btn">Submit</button> </div></div></form> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contacts-style-3',
          title: 'Style 3',
      },
      category: 'Contact Forms'
  });

  // Style-4
  bm.add('froala-contacts-style-4', {
      label: 'Style 4',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-4{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_0.svg);}</style>'+
               '<section class="fdb-block contact-style-4"> <div class="container"> <div class="row"> <div class="col"> <div class="fdb-box fdb-touch"> <div class="row text-center justify-content-center"> <div class="col-12 col-md-9 col-lg-7"> <h1>Contact Us</h1> <p class="text-h3" style="font-size:16px">Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</p></div></div><div class="row justify-content-center pt-4"> <div class="col-12 col-md-8"> <form> <div class="row"> <div class="col-12 col-md"> <input type="text" class="form-control" placeholder="Name"> </div><div class="col-12 col-md mt-4 mt-md-0"> <input type="text" class="form-control" placeholder="Email"> </div></div><div class="row mt-4"> <div class="col"> <input type="email" class="form-control" placeholder="Subject"> </div></div><div class="row mt-4"> <div class="col"> <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea> </div></div><div class="row mt-4"> <div class="col text-center"> <button type="submit" class="btn">Submit</button> </div></div></form> </div></div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contacts-style-4',
          title: 'Style 4',
      },
      category: 'Contact Forms'
  });

  // Style-5
  bm.add('froala-contacts-style-5', {
      label: 'Style 5',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block pt-0"> <div class="container-fluid p-0 pb-3"> <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe> </div><div class="container"> <div class="row text-center justify-content-center pt-5"> <div class="col-12 col-md-7"> <h1>Contact Us</h1> </div></div><div class="row justify-content-center pt-4"> <div class="col-12 col-md-7"> <form> <div class="row"> <div class="col"> <input type="text" class="form-control" placeholder="Email"> </div></div><div class="row mt-4"> <div class="col"> <input type="email" class="form-control" placeholder="Subject"> </div></div><div class="row mt-4"> <div class="col"> <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea> </div></div><div class="row mt-4"> <div class="col text-center"> <button type="submit" class="btn">Submit</button> </div></div></form> </div></div><div class="row-100"></div></div><div class="bg-dark"> <div class="container"> <div class="row-50"></div><div class="row justify-content-center text-center"> <div class="col-12 col-md mr-auto ml-auto"> <img alt="image" height="40" class="mb-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <p class="text-h3">+44 (112) 123 752</p></div><div class="col-12 col-md pt-4 pt-md-0 mr-auto ml-auto"> <img alt="image" height="40" class="mb-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <p class="text-h3" style="font-size:16px">123 6th St.<br>Melbourne, FL 32904</p></div><div class="col-12 col-md pt-4 pt-md-0 mr-auto ml-auto"> <img alt="image" height="40" class="mb-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <p class="text-h3" style="font-size:16px">support@website.com</p></div></div><div class="row-50"></div></div></div><div class="container"> <div class="row-70"></div><div class="row text-center"> <div class="col"> <p class="text-h2"> <a href="#"><i class="fa fa-facebook" style="font-size:30px"></i></a>&nbsp;&nbsp;&nbsp; <a href="#"><i class="fa fa-twitter" style="font-size:30px"></i></a>&nbsp;&nbsp;&nbsp; <a href="#"><i class="fa fa-instagram" style="font-size:30px"></i></a>&nbsp;&nbsp;&nbsp; <a href="#"><i class="fa fa-google" style="font-size:30px"></i></a>&nbsp;&nbsp;&nbsp; <a href="#"><i class="fa fa-pinterest" style="font-size:30px"></i></a> </p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contacts-style-5',
          title: 'Style 5',
      },
      category: 'Contact Forms'
  });

  // Style-6
  bm.add('froala-contacts-style-6', {
      label: 'Style 6',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block pt-0"> <div class="container-fluid p-0 pb-5"> <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe> </div><div class="container"> <div class="row pt-5"> <div class="col-12"> <form> <div class="row"> <div class="col-12 col-md"> <label>First Name</label> <input type="text" class="form-control"> </div><div class="col-12 col-md mt-4 mt-md-0"> <label>Last Name</label> <input type="text" class="form-control"> </div></div><div class="row mt-4"> <div class="col"> <label>Your Email</label> <input type="email" class="form-control"> </div></div><div class="row mt-4"> <div class="col"> <label>Subject (optional but helpful)</label> <input type="email" class="form-control"> </div></div><div class="row mt-4"> <div class="col"> <label>How can we help?</label> <textarea class="form-control" name="message" rows="3"></textarea> </div></div><div class="row mt-4 text-center"> <div class="col"> <button type="submit" class="btn">Submit</button> </div></div></form> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contacts-style-6',
          title: 'Style 6',
      },
      category: 'Contact Forms'
  });

  // Style-7
  bm.add('froala-contacts-style-7', {
      label: 'Style 7',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block pb-0 contact-style-7"> <div class="container"> <div class="row text-center justify-content-center"> <div class="col-12 col-md-8 col-lg-7"> <h1>Contact Us</h1> <p class="text-h3" style="font-size:16px">If you’re already an active user, please <a href="#">sign in</a> before contacting us.</p></div></div><div class="row-50"> </div><div class="row justify-content-center"> <div class="col-12 col-md-8 col-lg-7"> <form> <div class="row"> <div class="col"> <label>Your Email Address</label> <input type="text" class="form-control"> </div></div><div class="row mt-4"> <div class="col"> <label>Subject (optional but helpful)</label> <input type="email" class="form-control"> </div></div><div class="row mt-4"> <div class="col"> <label>How can we help?</label> <textarea class="form-control" name="message" rows="3"></textarea> </div></div><div class="row mt-4"> <div class="col text-right"> <button type="submit" class="btn">Submit</button> </div></div></form> </div></div><div class="row-100"></div></div><div class="container-fluid p-0"> <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe> </div></section>',
      attributes: {
          class: 'custom-icon froala-contacts-style-7',
          title: 'Style 7',
      },
      category: 'Contact Forms'
  });

  // Style-8
  bm.add('froala-contacts-style-8', {
      label: 'Style 8',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block pt-0"> <div class="bg-gray"> <div class="container"> <div class="row-100"></div><div class="row text-left"> <div class="col-8"> <h1>Contact Us</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div></div><div class="row-100"></div></div></div><div class="container"> <div class="row-100"></div><div class="row"> <div class="col-12 col-md-6 col-lg-5"> <h2>Call or email</h2> <p class="text-large">Support, Sales, and Account Management services are currently available in English</p><p class="text-h3 mt-4 mt-lg-5"> <strong>Support</strong> </p><p> +800 3005 4300 </p><p> <a href="#">Contact Support</a> </p><p> Our technical support is available by phone or email from 11am to 11pm BST, Monday through Friday. </p><p class="text-h3 mt-4 mt-lg-5"> <strong>Sales</strong> </p><p> +800 3005 4300 </p><p> <a href="#">Contact Sales</a> </p><p> Our technical support is available by phone or email from 11am to 11pm BST, Monday through Friday. </p><p class="text-h3 mt-4 mt-lg-5"> <strong>General inquiries</strong> </p><p> <a href="#">hello@website.com</a> </p></div><div class="col-12 col-md-6 ml-auto"> <h2>Drop us a line</h2> <form> <div class="row"> <div class="col"> <input type="text" class="form-control" placeholder="First name"> </div><div class="col"> <input type="text" class="form-control" placeholder="Last name"> </div></div><div class="row mt-4"> <div class="col"> <input type="text" class="form-control" placeholder="Company Name"> </div></div><div class="row mt-4"> <div class="col"> <input type="email" class="form-control" placeholder="Email"> </div></div><div class="row mt-4"> <div class="col"> <input type="text" class="form-control" placeholder="Phone"> </div><div class="col"> <input type="text" class="form-control" placeholder="Country"> </div></div><div class="row mt-4"> <div class="col"> <select class="form-control" required> <option value="">Select Department</option> <option value="1">Support</option> <option value="2">Sales</option> <option value="3">Accounting</option> </select> </div></div><div class="row mt-4"> <div class="col"> <textarea class="form-control" name="message" rows="5" placeholder="How can we help?"></textarea> </div></div><div class="row mt-4"> <div class="col"> <button type="submit" class="btn">Submit</button> </div></div></form> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contacts-style-8',
          title: 'Style 8',
      },
      category: 'Contact Forms'
  });

  // Style-9
  bm.add('froala-contacts-style-9', {
      label: 'Style 9',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block bg-gray"> <div class="container"> <div class="row text-center justify-content-center"> <div class="col-12 col-md-8 col-lg-7"> <p class="text-h2">support@website.com</p><p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p><p><br></p><p class="text-h2"> <a href="#"><i class="fa fa-facebook"></i></a>&nbsp;&nbsp;&nbsp; <a href="#"><i class="fa fa-twitter"></i></a>&nbsp;&nbsp;&nbsp; <a href="#"><i class="fa fa-instagram"></i></a>&nbsp;&nbsp;&nbsp; <a href="#"><i class="fa fa-google"></i></a>&nbsp;&nbsp;&nbsp; <a href="#"><i class="fa fa-pinterest"></i></a> </p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contacts-style-9',
          title: 'Style 9',
      },
      category: 'Contact Forms'
  });

  // Style-10
  bm.add('froala-contacts-style-10', {
      label: 'Style 10',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-center justify-content-center"> <div class="col-12 col-md-12 col-lg-12"> <h1>Contact Us</h1> <p class="text-h3" style="font-size:16px">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div></div><div class="row-70"></div><div class="row"> <div class="col-12 col-md-6 col-lg m-auto"> <form> <div class="row"> <div class="col"> <input type="email" class="form-control" placeholder="Enter email"> </div></div><div class="row mt-4"> <div class="col"> <input type="email" class="form-control" placeholder="Subject"> </div></div><div class="row mt-4"> <div class="col"> <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea> </div></div><div class="row mt-4"> <div class="col"> <button type="submit" class="btn">Submit</button> </div></div></form> </div><div class="col-12 col-md-6 col-lg pt-5 m-auto pt-lg-0"> <iframe class="mb-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656" width="100%" height="200" frameborder="0" style="border:0" allowfullscreen=""></iframe> <p><strong>Showroom</strong></p><p> 71 Pilgrim Avenue<br>Chevy Chase, MD 20815 </p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contacts-style-10',
          title: 'Style 10',
      },
      category: 'Contact Forms'
  });










  // Contents Blocks
  // Style-1
  bm.add('froala-contents-style-1', {
      label: 'Style 1',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col col-md-8 text-center"> <h1>Flowz Design Blocks</h1> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-1',
          title: 'Style 1',
      },
      category: 'Content Blocks'
  });

  // Style-2
  bm.add('froala-contents-style-2', {
      label: 'Style 2',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col col-md-8 text-center"> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in <a href="#">Bookmarksgrove</a> right at the coast of the Semantics, a large language ocean.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-2',
          title: 'Style 2',
      },
      category: 'Content Blocks'
  });

  // Style-3
  bm.add('froala-contents-style-3', {
      label: 'Style 3',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col col-md-8 text-center"> <h1>Flowz Design Blocks</h1> <p class="text-h3" style="font-size:16px">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far <a href="#">World of Grammar</a>.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-3',
          title: 'Style 3',
      },
      category: 'Content Blocks'
  });

  // Style-4
  bm.add('froala-contents-style-4', {
      label: 'Style 4',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row"> <div class="col col-sm-10 col-md-8 text-left"> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-4',
          title: 'Style 4',
      },
      category: 'Content Blocks'
  });

  // Style-5
  bm.add('froala-contents-style-5', {
      label: 'Style 5',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-end"> <div class="col col-sm-10 col-md-8 text-left"> <p class="text-h3" style="font-size:16px">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far <a href="#">World of Grammar</a>.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-5',
          title: 'Style 5',
      },
      category: 'Content Blocks'
  });

  // Style-6
  bm.add('froala-contents-style-6', {
      label: 'Style 6',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row"> <div class="col text-left"> <h2>Far far away...</h2> <p>Far far away, behind the word mountains, far from the countries <a href="#">Vokalia</a> and <a href="#">Consonantia</a>, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p><p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the <a href="#">Little Blind Text</a> should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-6',
          title: 'Style 6',
      },
      category: 'Content Blocks'
  });

  // Style-7
  bm.add('froala-contents-style-7', {
      label: 'Style 7',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row"> <div class="col text-center"> <h1>Flowz Design Blocks</h1> <div class="row text-left pt-4"> <div class="col-12 col-md-6"> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place far far away.</p></div><div class="col-12 col-md-6"> <p class="text-h3" style="font-size:16px">Separated they live in Bookmarksgrove right at the coast of the Semantics, far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.</p></div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-7',
          title: 'Style 7',
      },
      category: 'Content Blocks'
  });

  // Style-8
  bm.add('froala-contents-style-8', {
      label: 'Style 8',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row"> <div class="col text-center"> <h1 style="font-size:24px">Flowz Design Blocks</h1> <h2>Subtitle comes here.</h2> <p class="text-h3"><a href="#">Learn More &gt;</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">Buy &gt;</a></p><img alt="image" class="img-fluid mt-5" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-8',
          title: 'Style 8',
      },
      category: 'Content Blocks'
  });

  // Style-9
  bm.add('froala-contents-style-9', {
      label: 'Style 9',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row"> <div class="col text-center"> <h1 style="font-size:24px">Flowz Design Blocks</h1> </div></div><div class="row pt-4"> <div class="col"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div><div class="col"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_2.jpg"> </div></div><div class="row pt-4"> <div class="col"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-9',
          title: 'Style 9',
      },
      category: 'Content Blocks'
  });

  // Style-10
  bm.add('froala-contents-style-10', {
      label: 'Style 10',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row"> <div class="col text-center"> <h1 style="font-size:24px">Flowz Design Blocks</h1> </div></div><div class="row pt-4"> <div class="col"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div><div class="col"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div><div class="col"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-10',
          title: 'Style 10',
      },
      category: 'Content Blocks'
  });

  // Style-11
  bm.add('froala-contents-style-11', {
      label: 'Style 11',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row"> <div class="col text-center"> <h1 style="font-size:24px">Flowz Design Blocks</h1> </div></div><div class="row pt-4"> <div class="col-6 col-md-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div><div class="col-6 col-md-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_2.jpg"> </div><div class="col-6 col-md-3 mt-4 mt-md-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div><div class="col-6 col-md-3 mt-4 mt-md-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_2.jpg"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-11',
          title: 'Style 11',
      },
      category: 'Content Blocks'
  });

  // Style-12
  bm.add('froala-contents-style-12', {
      label: 'Style 12',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row align-items-center"> <div class="col-12 col-md-6 col-lg-5"> <h1 style="font-size:24px">Design Blocks</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div><div class="col-12 col-md-6 ml-md-auto mt-4 mt-md-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-12',
          title: 'Style 12',
      },
      category: 'Content Blocks'
  });

  // Style-13
  bm.add('froala-contents-style-13', {
      label: 'Style 13',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col col-md-8 text-center"> <img alt="image" class="fdb-icon mb-4" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_1.svg"/> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-13',
          title: 'Style 13',
      },
      category: 'Content Blocks'
  });

  // Style-14
  bm.add('froala-contents-style-14', {
      label: 'Style 14',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row align-items-center"> <div class="col-12 col-md-6 mb-4 mb-md-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div><div class="col-12 col-md-6 col-lg-5 ml-md-auto text-left"> <h1 style="font-size:24px">Flowz Blocks</h1> <p class="text-h3" style="font-size:16px">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p><p><a class="btn btn-round mt-4" href="#" style="font-size:18px">Download</a></p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-14',
          title: 'Style 14',
      },
      category: 'Content Blocks'
  });

  // Style-15
  bm.add('froala-contents-style-15', {
      label: 'Style 15',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block pb-0"> <div class="container"> <div class="row align-items-center"> <div class="col-12 col-md-6 col-lg-5"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_1.svg"/> <h1 style="font-size:24px">Design Blocks</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div><div class="col-10 col-sm-6 m-auto col-md-4 pt-4 pt-md-0"> <img alt="image" class="img-fluid br-0" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_tall.png"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-15',
          title: 'Style 15',
      },
      category: 'Content Blocks'
  });

  // Style-16
  bm.add('froala-contents-style-16', {
      label: 'Style 16',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-8 text-center"> <div class="row justify-content-center pb-4"> <div class="col-4 col-sm-3 col-md-2"><img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_1.svg"/></div><div class="col-4 col-sm-3 col-md-2"><img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_2.svg"/></div><div class="col-4 col-sm-3 col-md-2"><img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_3.svg"/></div></div><p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-16',
          title: 'Style 16',
      },
      category: 'Content Blocks'
  });

  // Style-17
  bm.add('froala-contents-style-17', {
      label: 'Style 17',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block pb-0"> <div class="container"> <div class="row align-items-center"> <div class="col-10 col-sm-6 m-auto col-md-4 pb-4 pb-md-0"> <img alt="image" class="img-fluid br-0" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_tall.png"> </div><div class="col-12 ml-auto col-md-6 col-lg-5"> <h1 style="font-size:24px">Design Blocks</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p><p><a class="btn btn-round mt-4 mb-5 mb-md-0" href="#">Download</a></p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-17',
          title: 'Style 17',
      },
      category: 'Content Blocks'
  });

  // Style-18
  bm.add('froala-contents-style-18', {
      label: 'Style 18',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row align-items-center"> <div class="col-12 col-md-12 col-lg-6 col-xl-5"> <h1 style="font-size:24px">Design Blocks</h1> <p class="text-h3 mb-5" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p><p style="font-size:16px"><strong>Works in every browser:</strong></p><p> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_1.svg"/> <img alt="image" class="fdb-icon ml-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_2.svg"/> <img alt="image" class="fdb-icon ml-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_3.svg"/> <img alt="image" class="fdb-icon ml-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_4.svg"/></p></div><div class="col-12 col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-18',
          title: 'Style 18',
      },
      category: 'Content Blocks'
  });

  // Style-19
  bm.add('froala-contents-style-19', {
      label: 'Style 19',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-left"> <div class="col-12 col-md-6"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_1.svg"/> <h3 style="font-size:16px"><strong>Awesome Things</strong></h3> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far from the countries Vokalia and Consonantia.</p></div><div class="col-12 col-md-6 pt-5 pt-md-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_2.svg"/> <h3 style="font-size:16px"><strong>More Awesomeness</strong></h3> <p class="text-h3" style="font-size:16px">Separated they live in Bookmarksgrove right at the coast of the Semantics, far far away, behind the word mountains, far from the countries <a href="#">Vokalia and Consonantia</a>, there live the blind texts. </p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-19',
          title: 'Style 19',
      },
      category: 'Content Blocks'
  });

  // Style-20
  bm.add('froala-contents-style-20', {
      label: 'Style 20',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contents-style-20{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_c_1.svg);}</style>'+
               '<section class="fdb-block contents-style-20"> <div class="container"> <div class="row text-left"> <div class="col-12 col-sm-10 m-auto m-md-0 col-md-8 col-lg-6"> <div class="fdb-box"> <div class="row justify-content-center"> <div class="col-12 col-xl-8 text-center"> <h1 style="font-size:24px">Flowz Design Blocks</h1> <p class="text-h3" style="font-size:16px">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove</p><p class="text-h3 mt-4"><a href="#" style="font-size:16px">Learn More &gt;</a></p></div></div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-20',
          title: 'Style 20',
      },
      category: 'Content Blocks'
  });

  // Style-21
  bm.add('froala-contents-style-21', {
      label: 'Style 21',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contents-style-21{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/alt_wide_2.svg);}</style>'+
               '<section class="fdb-block fdb-image-bg contents-style-21"> <div class="container"> <div class="row text-left"> <div class="col-12 col-md-8 col-lg-6 ml-sm-auto"> <div class="fdb-box fdb-touch"> <div class="row justify-content-center"> <div class="col-12 col-xl-8 text-center"> <h1 style="font-size:24px">Flowz Design Blocks</h1> <p class="text-h3" style="font-size:16px">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove</p><p class="text-h3 mt-4"><a href="#" class="btn btn-round" style="font-size:16px">Register</a></p></div></div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-21',
          title: 'Style 21',
      },
      category: 'Content Blocks'
  });

  // Style-22
  bm.add('froala-contents-style-22', {
      label: 'Style 22',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-lg-8 col-xl-6 text-center"> <img alt="image" width="200" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png"/> <h1>Flowz Design Blocks</h1> <p class="text-h3" style="font-size:16px">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p><p class="text-h3 mt-5"><a href="#" class="btn btn-round">Download Now</a></p><p>Latest Version: 2.3.5</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-22',
          title: 'Style 22',
      },
      category: 'Content Blocks'
  });

  // Style-23
  bm.add('froala-contents-style-23', {
      label: 'Style 23',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block pb-0"> <div class="container"> <div class="row align-items-center"> <div class="col-10 col-sm-6 col-md-5 col-lg-4 m-auto pb-5 pb-md-0"> <img alt="image" class="img-fluid br-0" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_tall.png"> </div><div class="col-12 ml-md-auto col-md-7 col-lg-5 pb-5 pb-md-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_1.svg"> <h1 style="font-size:24px">Design Blocks</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p><p class="mt-4"><a class="btn" href="#" style="font-size:16px">Download</a><a class="btn" href="#" style="font-size:16px">Register</a></p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-23',
          title: 'Style 23',
      },
      category: 'Content Blocks'
  });

  // Style-24
  bm.add('froala-contents-style-24', {
      label: 'Style 24',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block pb-0"> <div class="container"> <div class="row align-items-center"> <div class="col-12 col-md-7 col-lg-5 ml-md-auto"> <h1 style="font-size:24px">Design Blocks</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p><p class="mt-5"> <img alt="image" height="25" class="mr-4" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/samsung.svg"> <img alt="image" height="25" class="mr-4" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/adobe.svg"> <img alt="image" height="25" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/amazon.svg"> </p></div><div class="col-10 col-sm-6 col-md-5 col-lg-4 m-auto pt-5 pt-md-0"> <img alt="image" class="img-fluid br-0" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_tall.png"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-24',
          title: 'Style 24',
      },
      category: 'Content Blocks'
  });

  // Style-25
  bm.add('froala-contents-style-25', {
      label: 'Style 25',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row"> <div class="col-12"> <div class="row justify-content-center pb-5"> <div class="col-12 col-lg-8 text-center"> <h1 style="font-size:22px">Flowz Design Blocks is Open Source and free to use</h1> </div></div><img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-25',
          title: 'Style 25',
      },
      category: 'Content Blocks'
  });

  // Style-26
  bm.add('froala-contents-style-26', {
      label: 'Style 26',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contents-style-26{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_c_1.svg);}</style>'+
               '<section class="fdb-block"> <div class="col-fill-left contents-style-26"> </div><div class="container"> <div class="row justify-content-end"> <div class="col-12 col-md-5 text-center"> <h1 style="font-size:22px">Flowz Blocks</h1> <p class="text-h3" style="font-size:16px">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove</p><p class="mt-4"><a href="#" style="font-size:16px">Learn More &gt;</a></p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-26',
          title: 'Style 26',
      },
      category: 'Content Blocks'
  });

  // Style-27
  bm.add('froala-contents-style-27', {
      label: 'Style 27',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contents-style-27{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_c_2.svg)}</style>'+
               '<section class="fdb-block pt-0 pb-0"> <div class="col-fill-right contents-style-27"> </div><div class="container pt-5 pb-5"> <div class="row"> <div class="col-12 col-md-5 text-center"> <h1 style="font-size:22px">Flowz Blocks</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p><p class="mt-4 mb-5"><a class="btn" href="#" style="font-size:18px">Button</a></p><p style="font-size:16px">Follow us on</p><p> <a href="#"><i class="fa fa-twitter" aria-hidden="true" style="font-size:16px"></i></a>&nbsp;&nbsp; <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="#"><i class="fa fa-instagram" aria-hidden="true" style="font-size:16px"></i></a>&nbsp;&nbsp; <a href="#"><i class="fa fa-pinterest" aria-hidden="true" style="font-size:16px"></i></a>&nbsp;&nbsp; <a href="#"><i class="fa fa-google" aria-hidden="true" style="font-size:16px"></i></a> </p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-27',
          title: 'Style 27',
      },
      category: 'Content Blocks'
  });

  // Style-28
  bm.add('froala-contents-style-28', {
      label: 'Style 28',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contents-style-28{background: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_bg.jpg);}</style>'+
               '<section class="fdb-block fdb-image-bg contents-style-28"> <div class="container"> <div class="row text-center"> <div class="col-12"> <h1>Made with <span class="fa fa-heart heart"></span> by Flowz</h1> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-28',
          title: 'Style 28',
      },
      category: 'Content Blocks'
  });

  // Style-29
  bm.add('froala-contents-style-29', {
      label: 'Style 29',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-center align-items-center"> <div class="col-8 col-md-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_2.svg"> </div><div class="col-4 col-md-2"> <div class="row"> <div class="col-12"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_3.svg"> </div></div><div class="row mt-4"> <div class="col-12"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_4.svg"> </div></div></div><div class="col-12 col-md-6 col-lg-5 ml-auto pt-5 pt-md-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h1>Design Blocks</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-29',
          title: 'Style 29',
      },
      category: 'Content Blocks'
  });

  // Style-30
  bm.add('froala-contents-style-30', {
      label: 'Style 30',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row align-items-center"> <div class="col-6 col-lg-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div><div class="col-6 col-lg-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_2.jpg"> </div><div class="col-12 col-lg-6 pt-5 pt-lg-0"> <p class="text-h3 text-left" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p><p class="text-h3 text-left" style="font-size:16px">Right at the coast of the Semantics, a large language ocean. A small river named Duden. <a href="#" style="font-size:16px">[Read More]</a></p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-30',
          title: 'Style 30',
      },
      category: 'Content Blocks'
  });

  // Style-31
  bm.add('froala-contents-style-31', {
      label: 'Style 31',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-left align-items-center"> <div class="col-12 col-md-6 col-lg-4"> <h2 style="font-size:20px">Your Website</h2> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p><p class="text-h3"><a href="#" style="font-size:16px">Read More</a></p></div><div class="col-12 col-md-6 col-lg-4 pt-4 pt-md-0"> <h2 style="font-size:20px">Amazing Design</h2> <p class="text-h3" style="font-size:16px">Right at the coast of the Semantics, a large language ocean. A small river named Dude a rge language ocean there live the blind.</p><p class="text-h3"><a href="#" style="font-size:16px">Read More</a></p></div><div class="col-12 col-md-8 m-auto m-lg-0 col-lg-4 pt-5 pt-lg-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-31',
          title: 'Style 31',
      },
      category: 'Content Blocks'
  });

  // Style-32
  bm.add('froala-contents-style-32', {
      label: 'Style 32',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-center"> <div class="col-12"> <h1>Flowz Design Blocks</h1> <p class="text-h2" style="font-size:16px">Right at the coast of the Semantics, a large language ocean.</p></div></div><div class="row text-center pt-3 pt-xl-5"> <div class="col-12 col-sm-10 m-auto m-md-0 col-md-6"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p></div><div class="col-12 col-sm-10 m-auto m-md-0 col-md-6 pt-5 pt-md-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_2.jpg"> <p class="text-h3">Right at the coast of the Semantics, a large language ocean. A small river named Duden.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-32',
          title: 'Style 32',
      },
      category: 'Content Blocks'
  });

  // Style-33
  bm.add('froala-contents-style-33', {
      label: 'Style 33',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contents-style-33{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_0.svg);}</style>'+
               '<section class="fdb-block pb-0 contents-style-33"> <div class="container"> <div class="row text-left"> <div class="col-12 col-md-8 col-lg-6"> <div class="fdb-box fdb-touch br-0"> <h2><strong>Design Blocks</strong></h2> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p><p class="text-h3 mt-4"><a href="#" style="font-size:16px">Read More</a></p></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-33',
          title: 'Style 33',
      },
      category: 'Content Blocks'
  });

  // Style-34
  bm.add('froala-contents-style-34', {
      label: 'Style 34',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contents-style-34{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block pb-0 contents-style-34"> <div class="container"> <div class="row text-left justify-content-end"> <div class="col-12 col-md-6 col-xl-4"> <div class="fdb-box br-0"> <h2><strong>Design Blocks</strong></h2> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p><p class="text-h3 mt-4"><a href="#" style="font-size:16px">Read More</a></p></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-34',
          title: 'Style 34',
      },
      category: 'Content Blocks'
  });

  // Style-35
  bm.add('froala-contents-style-35', {
      label: 'Style 35',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contents-style-34{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-left align-items-center"> <div class="col-10 col-sm-6 m-auto m-lg-0 col-lg-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_1.svg"> </div><div class="col-12 col-lg-8 pt-4 pt-lg-0"> <h1>Flowz Design Blocks</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p><div class="row mt-5"> <div class="col-12 col-sm-6"> <h3 style="font-size:16px"><strong>Open Source</strong></h3> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p></div><div class="col-12 col-sm-6 pt-3 pt-sm-0"> <h3 style="font-size:16px"><strong>Bootstrap</strong></h3> <p class="text-h3" style="font-size:16px">Right at the coast of the Semantics, a large language ocean. A small river named Duden.</p></div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-contents-style-35',
          title: 'Style 35',
      },
      category: 'Content Blocks'
  });













  // Features Blocks
  // Style-1
  bm.add('froala-features-style-1', {
      label: 'Style 1',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-center justify-content-sm-center no-gutters"> <div class="col-12 col-sm-8 col-md-3 m-auto"> <h3 style="font-size:20px"><strong>Feature 1</strong></h3> <p style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p></div><div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0"> <h3 style="font-size:20px"><strong>Feature 2</strong></h3> <p style="font-size:16px">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div><div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0"> <h3 style="font-size:20px"><strong>Feature 3</strong></h3> <p style="font-size:16px">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p></div></div><div class="row text-center justify-content-md-center pt-3 pt-md-5"> <div class="col-12 col-sm-8 col-md-3 m-auto"> <h3 style="font-size:20px"><strong>Feature 4</strong></h3> <p style="font-size:16px">It is a paradisematic country, in which roasted parts of sentences fly into your mouth</p></div><div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0"> <h3 style="font-size:20px"><strong>Feature 5</strong></h3> <p style="font-size:16px">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day.</p></div><div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0"> <h3 style="font-size:20px"><strong>Feature 6</strong></h3> <p style="font-size:16px">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-1',
          title: 'Style 1',
      },
      category: 'Feature Blocks'
  });

  // Style-2
  bm.add('froala-features-style-2', {
      label: 'Style 2',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-center justify-content-sm-center no-gutters"> <div class="col-12 col-sm-8 col-md-3 m-auto"> <h3 style="font-size:20px"><strong>Feature 1</strong></h3> <p style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p></div><div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0"> <h3 style="font-size:20px"><strong>Feature 2</strong></h3> <p style="font-size:16px">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div><div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0"> <h3 style="font-size:20px"><strong>Feature 3</strong></h3> <p style="font-size:16px">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p></div><div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0"> <h3 style="font-size:20px"><strong>Feature 4</strong></h3> <p style="font-size:16px">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p></div></div><div class="row text-center justify-content-md-center pt-3 pt-md-5"> <div class="col-12 col-sm-8 col-md-3 m-auto"> <h3 style="font-size:20px"><strong>Feature 5</strong></h3> <p style="font-size:16px">It is a paradisematic country, in which roasted parts of sentences fly into your mouth</p></div><div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0"> <h3 style="font-size:20px"><strong>Feature 6</strong></h3> <p style="font-size:16px">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day.</p></div><div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0"> <h3 style="font-size:20px"><strong>Feature 7</strong></h3> <p style="font-size:16px">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks</p></div><div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0"> <h3 style="font-size:20px"><strong>Feature 8</strong></h3> <p style="font-size:16px">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-2',
          title: 'Style 2',
      },
      category: 'Feature Blocks'
  });

  // Style-3
  bm.add('froala-features-style-3', {
      label: 'Style 3',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row"> <div class="col-12 text-center"> <h1 style="font-size:24px">Features</h1> </div></div><div class="row text-left justify-content-center pt-5"> <div class="col-12 col-md-6 col-lg-5 m-auto"> <h3 style="font-size:20px"><strong>Feature One</strong></h3> <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div><div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-md-0"> <h3 style="font-size:20px"><strong>Feature Two</strong></h3> <p class="text-h3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.</p></div></div><div class="row text-left justify-content-center pt-lg-4"> <div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-lg-0"> <h3 style="font-size:20px"><strong>Feature Three</strong></h3> <p class="text-h3">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.</p></div><div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-lg-0"> <h3 style="font-size:20px"><strong>Feature Four</strong></h3> <p class="text-h3">A small river named Duden flows by their place far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-3',
          title: 'Style 3',
      },
      category: 'Feature Blocks'
  });

  // Style-4
  bm.add('froala-features-style-4', {
      label: 'Style 4',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block bg-dark" style="background-image: url(//s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_0.svg)"> <div class="container"> <div class="row"> <div class="col text-center"> <h1>Flowz Design Blocks</h1> </div></div><div class="row-70"></div><div class="row text-center justify-content-sm-center no-gutters"> <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto"> <div class="fdb-box fdb-touch"> <h2>Feature 1</h2> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p><p class="mt-4"><a href="#">Learn More &gt;</a></p></div></div><div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto pt-5 pt-xl-0"> <div class="fdb-box fdb-touch"> <h2>Feature 2</h2> <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p><p class="mt-4"><a href="#">Learn More &gt;</a></p></div></div><div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto pt-5 pt-xl-0"> <div class="fdb-box fdb-touch"> <h2>Feature 3</h2> <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p><p class="mt-4"><a href="#">Learn More &gt;</a></p></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-4',
          title: 'Style 4',
      },
      category: 'Feature Blocks'
  });

  // Style-5
  bm.add('froala-features-style-5', {
      label: 'Style 5',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row align-items-center"> <div class="col-12 col-lg-6 col-xl-5"> <h1 style="font-size:24px">Design Blocks</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p><div class="row pt-4 pt-xl-5"> <div class="col-12 col-md-5"> <h4 style="font-size:20px"><strong>Feature One</strong></h4> <p style="font-size:16px">A small river named Duden flows</p></div><div class="col-12 col-md-5 m-auto pt-3 pt-md-0"> <h4 style="font-size:20px"><strong>Feature Two</strong></h4> <p style="font-size:16px">Separated they live in Bookmarksgrove</p></div></div></div><div class="col-12 col-md-8 col-lg-6 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-5',
          title: 'Style 5',
      },
      category: 'Feature Blocks'
  });

  // Style-6
  bm.add('froala-features-style-6', {
      label: 'Style 6',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row align-items-center"> <div class="col-12 col-md-8 col-lg-6 m-md-auto ml-lg-0 mr-lg-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div><div class="col-12 col-lg-6 col-xl-5 ml-sm-auto pt-5 pt-lg-0"> <h1 style="font-size:24px">Design Blocks</h1> <div class="row pt-4 pt-xl-5"> <div class="col-12 col-sm-6 col-xl-5"> <h4 style="font-size:20px"><strong>Feature One</strong></h4> <p style="font-size:16px">Far far away, behind the word mountains</p></div><div class="col-12 col-sm-6 col-xl-5 m-auto pt-3 pt-sm-0"> <h4 style="font-size:20px"><strong>Feature Two</strong></h4> <p>Separated they live in Bookmarksgrove</p></div></div><div class="row pt-3"> <div class="col-12 col-sm-6 col-xl-5"> <h4><strong>Feature Three</strong></h4> <p style="font-size:16px">A small river named Duden flows by me</p></div><div class="col-12 col-sm-6 col-xl-5 m-auto pt-3 pt-sm-0"> <h4><strong>Feature Four</strong></h4> <p>Separated they live in Bookmarksgrove</p></div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-6',
          title: 'Style 6',
      },
      category: 'Feature Blocks'
  });

  // Style-7
  bm.add('froala-features-style-7', {
      label: 'Style 7',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-center"> <div class="col-12 col-sm-6 col-lg-5 col-xl-4 m-auto"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>Feature 1</strong></h3> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p></div><div class="col-12 col-sm-6 col-lg-5 col-xl-4 m-auto pt-4 pt-sm-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>Feature 2</strong></h3> <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-7',
          title: 'Style 7',
      },
      category: 'Feature Blocks'
  });

  // Style-8
  bm.add('froala-features-style-8', {
      label: 'Style 8',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-center"> <div class="col-12"> <h1 style="font-size:24px">Features</h1> <img alt="image" class="img-fluid mt-5" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_very_wide.svg"> </div></div><div class="row text-center justify-content-center mt-5"> <div class="col-12 col-sm-4 col-lg-3 m-md-auto"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>Feature 1</strong></h3> </div><div class="col-12 col-sm-4 col-lg-3 m-auto pt-4 pt-sm-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>Feature 2</strong></h3> </div><div class="col-12 col-sm-4 col-lg-3 m-auto pt-4 pt-sm-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>Feature 3</strong></h3> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-8',
          title: 'Style 8',
      },
      category: 'Feature Blocks'
  });

  // Style-9
  bm.add('froala-features-style-9', {
      label: 'Style 9',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-center"> <div class="col-12"> <h1 style="font-size:24px">Features</h1> </div></div><div class="row text-center justify-content-center mt-5"> <div class="col-12 col-sm-4 col-xl-3 m-md-auto"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>Feature 1</strong></h3> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p></div><div class="col-12 col-sm-4 col-xl-3 m-auto pt-4 pt-sm-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>Feature 2</strong></h3> <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div><div class="col-12 col-sm-4 col-xl-3 m-auto pt-4 pt-sm-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>Feature 3</strong></h3> <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-9',
          title: 'Style 9',
      },
      category: 'Feature Blocks'
  });

  // Style-10
  bm.add('froala-features-style-10', {
      label: 'Style 10',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-center"> <div class="col-12"> <h1 style="font-size:24px">Features</h1> </div></div><div class="row text-center justify-content-center mt-5"> <div class="col-12 col-sm-6 col-lg-3"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>Feature One</strong></h3> <p>Far far away, behind the word mountains, far from the countries</p></div><div class="col-12 col-sm-6 col-lg-3 pt-4 pt-sm-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>Feature Two</strong></h3> <p>Separated they live in Bookmarksgrove right at the coast</p></div><div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>Feature Three</strong></h3> <p>A small river named Duden flows by their place and supplies it</p></div><div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>Feature Four</strong></h3> <p>Duden flows by their place far far away, behind the word mountains.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-10',
          title: 'Style 10',
      },
      category: 'Feature Blocks'
  });

  // Style-11
  bm.add('froala-features-style-11', {
      label: 'Style 11',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-center"> <div class="col-12"> <h1 style="font-size:24px">Features</h1> </div></div><div class="row text-left mt-5"> <div class="col-12 col-md-4"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:20px"><strong>Feature One</strong></h3> <p>Far far away, behind the word mountains, far from the countries</p></div></div></div><div class="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:20px"><strong>Feature Two</strong></h3> <p>Even the all-powerful Pointing has no control about the blind texts.</p></div></div></div><div class="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:20px"><strong>Feature Three</strong></h3> <p>A small river named Duden flows by their place and supplies it</p></div></div></div></div><div class="row text-left pt-3 pt-sm-4 pt-md-5"> <div class="col-12 col-md-4"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:20px"><strong>Feature Four</strong></h3> <p>Duden flows by their place far far away, behind the word mountains.</p></div></div></div><div class="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:20px"><strong>Feature Five</strong></h3> <p>Separated they live in Bookmarksgrove right at the coast</p></div></div></div><div class="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:20px"><strong>Feature Six</strong></h3> <p>On her way she met a copy. The copy warned the Little Blind Text.</p></div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-11',
          title: 'Style 11',
      },
      category: 'Feature Blocks'
  });

  // Style-12
  bm.add('froala-features-style-12', {
      label: 'Style 12',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-center"> <div class="col-12"> <h1 style="font-size:24px">Features</h1> </div></div><div class="row text-left mt-5"> <div class="col-12 col-sm-6 col-lg-3"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:16px"><strong>Feature One</strong></h3> <p>Even the all-powerful Pointing has no control about the blind texts</p></div></div></div><div class="col-12 col-sm-6 col-lg-3 pt-3 pt-sm-0"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:16px"><strong>Feature Two</strong></h3> <p>Separated they live in Bookmarksgrove right at the coast</p></div></div></div><div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:16px"><strong>Feature Three</strong></h3> <p>A small river named Duden flows by their place and supplies it</p></div></div></div><div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:16px"><strong>Feature Four</strong></h3> <p>Far far away, behind the word mountains, far from the countries</p></div></div></div></div><div class="row text-left pt-3 pt-lg-5"> <div class="col-12 col-sm-6 col-lg-3"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:16px"><strong>Feature Five</strong></h3> <p>On her way she met a copy. The copy warned the Little Blind Text.</p></div></div></div><div class="col-12 col-sm-6 col-lg-3 pt-3 pt-sm-0"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:16px"><strong>Feature Six</strong></h3> <p>Far far away, behind the word mountains, far from the countries</p></div></div></div><div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:16px"><strong>Feature Seven</strong></h3> <p>Duden flows by their place far far away, behind the word mountains.</p></div></div></div><div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:16px"><strong>Feature Eight</strong></h3> <p>Separated they live in Bookmarksgrove right at the coast</p></div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-12',
          title: 'Style 12',
      },
      category: 'Feature Blocks'
  });

  // Style-13
  bm.add('froala-features-style-13', {
      label: 'Style 13',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block pb-0"> <div class="container"> <div class="row text-lg-right align-items-center"> <div class="col-12 col-sm-6 col-lg-3"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h4 style="font-size:18px"><strong>Feature One</strong></h4> <p>Far far away, behind the word mountains is hope.</p><img alt="image" class="fdb-icon mt-3 mt-xl-5" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h4 style="font-size:18px"><strong>Feature Two</strong></h4> <p>On her way she met a copy of the Little Blind Text.</p><img alt="image" class="fdb-icon mt-3 mt-xl-5" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h4 style="font-size:18px"><strong>Feature Three</strong></h4> <p>Even the all-powerful has no control about the blind texts</p></div><div class="col-12 col-sm-6 col-lg-3 text-left pt-3 pt-sm-0 order-lg-12"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h4 style="font-size:18px"><strong>Feature Four</strong></h4> <p>Duden flows by their place, behind the word mountains.</p><img alt="image" class="fdb-icon mt-3 mt-xl-5" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h4 style="font-size:18px"><strong>Feature Five</strong></h4> <p>Separated they live in Bookmark right at the coast</p><img alt="image" class="fdb-icon mt-3 mt-xl-5" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h4 style="font-size:18px"><strong>Feature Six</strong></h4> <p>A small river named Duden flows by their place and supplies it</p></div><div class="col-7 col-sm-4 col-lg-4 m-auto pt-5 pt-lg-0 order-lg-1"> <img alt="image" class="img-fluid br-b-0" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_very_tall.png"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-13',
          title: 'Style 13',
      },
      category: 'Feature Blocks'
  });

  // Style-14
  bm.add('froala-features-style-14', {
      label: 'Style 14',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block pb-md-0"> <div class="container"> <div class="row text-right align-items-center"> <div class="col-7 col-md-4 m-auto"> <img alt="image" class="img-fluid br-b-0" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_very_tall.png"> </div><div class="col-12 col-md-7 col-lg-5 m-auto text-left pt-5 pt-md-0"> <div class="row pb-lg-5"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:20px"><strong>Feature Seven</strong></h3> <p>Even the all-powerful Pointing has no control about the blind texts.</p></div></div><div class="row pt-4 pt-md-5 pb-lg-5"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:20px"><strong>Feature Seven</strong></h3> <p>Duden flows by their place far far away, behind the word mountains.</p></div></div><div class="row pt-4 pt-md-5"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:20px"><strong>Feature Seven</strong></h3> <p>A small river named Duden flows by their place and supplies it.</p></div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-14',
          title: 'Style 14',
      },
      category: 'Feature Blocks'
  });

  // Style-15
  bm.add('froala-features-style-15', {
      label: 'Style 15',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block pb-0"> <div class="container"> <div class="row text-right align-items-center"> <div class="col-12 col-lg-6 col-xl-5 m-lg-auto text-left"> <h1>Features</h1> <p class="text-h3 pb-xl-4" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p><div class="row pt-5"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences.</p></div></div><div class="row pt-5"> <div class="col-9 text-right"> <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, there live the blind texts.</p></div><div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div></div></div><div class="col-7 col-sm-4 m-auto pt-5 pt-md-0"> <img alt="image" class="img-fluid br-b-0" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_very_tall.png"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-15',
          title: 'Style 15',
      },
      category: 'Feature Blocks'
  });

  // Style-16
  bm.add('froala-features-style-16', {
      label: 'Style 16',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block pb-md-0"> <div class="container"> <div class="row justify-content-center pb-xl-5"> <div class="col-12 col-md-8 text-center"> <h1>Flowz Design Blocks</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div></div><div class="row text-right align-items-center-lg align-items-end pt-5"> <div class="col-7 col-sm-4 m-auto mb-md-0 mt-md-0 m-lg-auto"> <img alt="image" class="img-fluid br-b-0" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_tall.png"> </div><div class="col-12 col-md-7 col-lg-6 col-xl-5 m-auto text-left pt-5 pt-md-0"> <h3 style="font-size:20px"><strong>Feature One</strong></h3> <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences.</p><h3 class="mt-4 mt-xl-5" style="font-size:20px"><strong>Feature Two</strong></h3> <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, there live the blind texts.</p><h3 class="mt-4 mt-xl-5" style="font-size:20px"><strong>Feature Three</strong></h3> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-16',
          title: 'Style 16',
      },
      category: 'Feature Blocks'
  });

  // Style-17
  bm.add('froala-features-style-17', {
      label: 'Style 17',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 text-left"> <h1>Flowz Design Blocks</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p><img alt="image" class="img-fluid mt-5" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_very_wide.svg"> </div></div><div class="row text-left mt-5"> <div class="col-12 col-md-4"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:20px"><strong>Feature One</strong></h3> <p>Far far away, behind the word mountains, far from the countries</p></div></div></div><div class="col-12 col-md-4 pt-4 pt-md-0"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:20px"><strong>Feature Two</strong></h3> <p>Separated they live in Bookmarksgrove right at the coast</p></div></div></div><div class="col-12 col-md-4 pt-4 pt-md-0"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:20px"><strong>Feature Three</strong></h3> <p>A small river named Duden flows by their place and supplies it</p></div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-17',
          title: 'Style 17',
      },
      category: 'Feature Blocks'
  });

  // Style-18
  bm.add('froala-features-style-18', {
      label: 'Style 18',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 text-center"> <h1>Features</h1> </div></div><div class="row text-center mt-5"> <div class="col-12 col-sm-4"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>Feature One</strong></h3> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p></div><div class="col-12 col-sm-4 pt-4 pt-sm-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>Feature Two</strong></h3> <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. </p></div><div class="col-12 col-sm-4 pt-4 pt-sm-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>Feature Three</strong></h3> <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country,</p></div></div><div class="row mt-5"> <div class="col-12"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_very_wide.svg"> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-18',
          title: 'Style 18',
      },
      category: 'Feature Blocks'
  });

  // Style-19
  bm.add('froala-features-style-19', {
      label: 'Style 19',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 text-left"> <h1>Flowz Design Blocks</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div></div><div class="row text-left mt-5"> <div class="col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto mr-md-auto ml-md-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_1.svg"> <h3 style="font-size:20px"><strong>Feature One</strong></h3> <p>Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div><div class="col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto pt-5 pt-md-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_2.svg"> <h3style="font-size:20px"><strong>Feature Two</strong></h3> <p> It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p></div><div class="col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto ml-md-auto mr-md-0 pt-5 pt-md-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_3.svg"> <h3 style="font-size:20px"><strong>Feature Three</strong></h3> <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-19',
          title: 'Style 19',
      },
      category: 'Feature Blocks'
  });

  // Style-20
  bm.add('froala-features-style-20', {
      label: 'Style 20',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 text-left"> <h1>Flowz Design Blocks</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p><img alt="image" class="img-fluid mt-5" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_very_wide.svg"> </div></div><div class="row text-left pt-5"> <div class="col-12 col-md-6"> <h3 style="font-size:20px"><strong>Feature One</strong></h3> <p>Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p><p><a href="#">Learn More &gt;</a></p></div><div class="col-12 col-md-6 pt-4 pt-md-0"> <h3 style="font-size:20px"><strong>Feature Two</strong></h3> <p> It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin.</p><p><a href="#">Learn More &gt;</a></p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-20',
          title: 'Style 20',
      },
      category: 'Feature Blocks'
  });

  // Style-21
  bm.add('froala-features-style-21', {
      label: 'Style 21',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 text-left"> <h1>Flowz Design Blocks</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text.</p></div></div><div class="row text-left pt-5"> <div class="col-12 col-sm-6 col-md-5"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_2.svg"> <h3 style="font-size:20px"><strong>Feature One</strong></h3> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p></div><div class="col-12 col-sm-6 col-md-5 ml-sm-auto pt-5 pt-sm-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_4.svg"> <h3 style="font-size:20px"><strong>Feature Two</strong></h3> <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-21',
          title: 'Style 21',
      },
      category: 'Feature Blocks'
  });

  // Style-22
  bm.add('froala-features-style-22', {
      label: 'Style 22',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center pb-5"> <div class="col-12 text-center"> <h1>Flowz Design Blocks</h1> </div></div><div class="row text-left align-items-center pt-5 pb-md-5"> <div class="col-4 col-md-5"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_1.svg"> </div><div class="col-12 col-md-5 m-md-auto"> <h2><strong>Feature One</strong></h2> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p><p><a href="#">Learn More &gt;</a></p></div></div><div class="row text-left align-items-center pt-5 pb-md-5"> <div class="col-4 col-md-5 m-md-auto order-md-5"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_3.svg"> </div><div class="col-12 col-md-5"> <h2><strong>Feature Two</strong></h2> <p class="text-h3" style="font-size:16px">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p><p><a href="#">Learn More &gt;</a></p></div></div><div class="row text-left align-items-center pt-5"> <div class="col-4 col-md-5"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_2.svg"> </div><div class="col-12 col-md-5 m-md-auto"> <h2><strong>Feature Three</strong></h2> <p class="text-h3" style="font-size:16px">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around.</p><p><a href="#">Learn More &gt;</a></p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-22',
          title: 'Style 22',
      },
      category: 'Feature Blocks'
  });

  // Style-23
  bm.add('froala-features-style-23', {
      label: 'Style 23',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row"> <div class="col-12 col-md-10 col-lg-8 text-left"> <h1>Flowz Design Blocks is simply ahead the word mountains</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p><p class="text-h3"><a href="#" style="font-size:20px">Explore all features &gt;</a></p></div></div><div class="row text-center no-gutters pt-5"> <div class="col-12 col-md-10 col-lg-8"> <div class="row"> <div class="col-8 col-sm-5 col-md-2 m-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h4 style="font-size:18px">Feature One</h4> </div><div class="col-8 col-sm-5 col-md-2 m-auto pt-5 pt-sm-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h4 style="font-size:18px">Feature Two</h4> </div><div class="col-8 col-sm-5 col-md-2 m-auto pt-5 pt-md-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h4 style="font-size:18px">Feature Three</h4> </div><div class="col-8 col-sm-5 col-md-2 m-auto pt-5 pt-md-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h4 style="font-size:18px">Feature Four</h4> </div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-23',
          title: 'Style 23',
      },
      category: 'Feature Blocks'
  });

  // Style-24
  bm.add('froala-features-style-24', {
      label: 'Style 24',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row align-items-top"> <div class="col-12 col-md-6 col-xl-4 m-auto"> <h2>Learn more about the Flowz Design Blocks you love</h2> </div><div class="col-12 col-md-6 pt-5 pt-md-0"> <div class="row justify-content-left"> <div class="col-3 m-auto text-center"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <p><a href="#">One &gt;</a></p></div><div class="col-3 m-auto text-center"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <p><a href="#">Two &gt;</a></p></div><div class="col-3 m-auto text-center"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <p><a href="#">Three &gt;</a></p></div></div><div class="row justify-content-left mt-4 mt-xl-5"> <div class="col-3 m-auto text-center"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <p><a href="#">Four &gt;</a></p></div><div class="col-3 m-auto text-center"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <p><a href="#">Five &gt;</a></p></div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-24',
          title: 'Style 24',
      },
      category: 'Feature Blocks'
  });

  // Style-25
  bm.add('froala-features-style-25', {
      label: 'Style 25',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-center"> <div class="col-12"> <h1>There is a feature for everyone</h1> <p class="text-h3"><a href="#" style="font-size:16px">See all features &gt;</a> </div></div><div class="row text-center justify-content-center mt-5"> <div class="col-10 col-sm-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_1.svg"> <h3 style="font-size:16px"><strong>Feature One</strong></h3> </div><div class="col-10 col-sm-3 pt-5 pt-sm-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_4.svg"> <h3 style="font-size:16px"><strong>Feature Two</strong></h3> </div><div class="col-10 col-sm-3 pt-5 pt-sm-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_2.svg"> <h3 style="font-size:16px"><strong>Feature Three</strong></h3> </div><div class="col-10 col-sm-3 pt-5 pt-sm-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_3.svg"> <h3 style="font-size:16px"><strong>Feature Four</strong></h3> </div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-25',
          title: 'Style 25',
      },
      category: 'Feature Blocks'
  });

  // Style-26
  bm.add('froala-features-style-26', {
      label: 'Style 26',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row align-items-center pb-xl-5"> <div class="col-12 col-md-7 col-xl-5"> <h1>Flowz Design Blocks</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div><div class="col-12 col-sm-6 col-md-4 m-sm-auto mr-md-0 ml-md-auto pt-4 pt-md-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_1.svg"> </div></div><div class="row pt-5"> <div class="col-12 col-sm-6 col-md-3"> <h3 style="font-size:20px"><strong>Feature One</strong></h3> <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large ocean.</p></div><div class="col-12 col-sm-6 col-md-3 pt-3 pt-sm-0"> <h3 style="font-size:20px"><strong>Feature Two</strong></h3> <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p></div><div class="col-12 col-sm-6 col-md-3 pt-3 pt-md-0"> <h3 style="font-size:20px"><strong>Feature Three</strong></h3> <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p></div><div class="col-12 col-sm-6 col-md-3 pt-3 pt-md-0"> <h3 style="font-size:20px"><strong>Feature Four</strong></h3> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-26',
          title: 'Style 26',
      },
      category: 'Feature Blocks'
  });

  // Style-27
  bm.add('froala-features-style-27', {
      label: 'Style 27',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center pb-xl-5"> <div class="col-12 col-sm-11 text-center"> <h1>Flowz Design Blocks</h1> <img alt="image" class="img-fluid mt-5" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_very_wide.svg"> </div></div><div class="row text-left justify-content-center pt-5"> <div class="col-12 col-md-6 col-lg-5 m-sm-auto"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:20px"><strong>Feature One</strong></h3> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p></div></div></div><div class="col-12 col-md-6 col-lg-5 m-sm-auto pt-3 pt-sm-5 pt-md-0"> <div class="row"> <div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> </div><div class="col-9"> <h3 style="font-size:20px"><strong>Feature Two</strong></h3> <p>Separated they live in Bookmarksgrove, right at the coast of the Semantics, a large language ocean.</p></div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-27',
          title: 'Style 27',
      },
      category: 'Feature Blocks'
  });

  // Style-28
  bm.add('froala-features-style-28', {
      label: 'Style 28',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-center"> <div class="col-12"> <h1 style="font-size:20px">Features</h1> </div></div><div class="row text-center justify-content-center mt-5"> <div class="col-12 col-md-4 col-lg-3 m-md-auto"> <h3 style="font-size:20px"><strong>Feature 1</strong></h3> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p></div><div class="col-12 col-md-4 col-lg-3 m-md-auto pt-3 pt-md-0"> <h3 style="font-size:20px"><strong>Feature 2</strong></h3> <p>Separated they live in Bookmarksgrove right at the coast, a large language ocean.</p></div><div class="col-12 col-md-4 col-lg-3 m-md-auto pt-3 pt-md-0"> <h3 style="font-size:20px"><strong>Feature 3</strong></h3> <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-28',
          title: 'Style 28',
      },
      category: 'Feature Blocks'
  });

  // Style-29
  bm.add('froala-features-style-29', {
      label: 'Style 29',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12col-md-10 col-lg-8 text-center"> <h1>Flowz Design Blocks</h1> </div></div><div class="row justify-content-center text-center mt-5"> <div class="col-12 col-sm-6 col-md-5 col-lg-3"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:16px"><strong>Feature one longer Text</strong></h3> </div><div class="col-12 col-sm-6 col-md-5 col-lg-3 pt-4 pt-sm-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:16px"><strong>Feature two shorter</strong></h3> </div></div><div class="row justify-content-center text-center mt-5 mt-md-4"> <div class="col-12 col-md-10 col-lg-8"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_very_wide.svg"> <p><em>Coming this fall</em></p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-29',
          title: 'Style 29',
      },
      category: 'Feature Blocks'
  });

  // Style-30
  bm.add('froala-features-style-30', {
      label: 'Style 30',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-center"> <div class="col-12 col-sm-6 col-md-3"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>The all-powerful Pointing has no control</strong></h3> <p class="mt-3"><a class="btn" href="#">Learn</a></p></div><div class="col-12 col-sm-6 col-md-3 pt-5 pt-sm-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>Far far away, behind the word mountains</strong></h3> <p class="mt-3"><a class="btn" href="#">Learn</a></p></div><div class="col-12 col-sm-6 col-md-3 pt-5 pt-md-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>The Big Oxmox advised her not to do so</strong></h3> <p class="mt-3"><a class="btn" href="#">Learn</a></p></div><div class="col-12 col-sm-6 col-md-3 pt-5 pt-md-0"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h3 style="font-size:20px"><strong>The copy warned the Little Blind Text</strong></h3> <p class="mt-3"><a class="btn" href="#">Learn</a></p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-30',
          title: 'Style 30',
      },
      category: 'Feature Blocks'
  });

  // Style-31
  bm.add('froala-features-style-31', {
      label: 'Style 31',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-center"> <div class="col-12 col-md-8 m-auto col-lg-4"> <div class="fdb-box fdb-touch"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h2>Feature 1</h2> <p>Far far away, behind the word mountains, far from the countries.</p></div></div><div class="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0"> <div class="fdb-box fdb-touch"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h2>Feature 2</h2> <p>Separated they live in Bookmarksgrove right at the coast.</p></div></div><div class="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0"> <div class="fdb-box fdb-touch"> <img alt="image" class="fdb-icon" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h2>Feature 3</h2> <p>A small river named Duden flows by their place and supplies.</p></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-31',
          title: 'Style 31',
      },
      category: 'Feature Blocks'
  });

  // Style-32
  bm.add('froala-features-style-32', {
      label: 'Style 32',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-left"> <div class="col-12 col-md-8 m-auto col-lg-4"> <div class="fdb-box fdb-touch"> <h2>Feature 1</h2> <p>Far far away, behind the word mountains, far from the country Vokalia, there live the blind texts.</p><p><a href="#">Read more</a></p></div></div><div class="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0"> <div class="fdb-box fdb-touch"> <h2>Feature 2</h2> <p>Separated they live in Bookmarks right at the coast of the Semantics, a large language ocean.</p><p><a href="#">Read more</a></p></div></div><div class="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0"> <div class="fdb-box fdb-touch"> <h2>Feature 3</h2> <p>A small river named Duden flows by their small place and supplies it with the necessary regelialia.</p><p><a href="#">Read more</a></p></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-32',
          title: 'Style 32',
      },
      category: 'Feature Blocks'
  });

  // Style-33
  bm.add('froala-features-style-33', {
      label: 'Style 33',
      content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link href="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css" rel="stylesheet" type="text/css">'+
               '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>'+
               '<section class="fdb-block"> <div class="container"> <div class="row text-left"> <div class="col-12 col-md-4"> <h2>Feature One</h2> <p><strong>Far far away</strong>, behind the word mountains, far from the countries <a href="#">Vokalia and Consonantia</a>, there live the blind texts.</p></div><div class="col-12 col-md-4 pt-5 pt-sm-4 pt-md-0"> <h2>Feature Two</h2> <p> A small river named Duden flows by their place and supplies it with the necessary regelialia.</p></div><div class="col-12 col-md-4 pt-5 pt-sm-4 pt-md-0"> <h2>Feature Three</h2> <p>Even the all-powerful Pointing has no control about the <strong>blind texts</strong> it is an almost unorthographic life.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-features-style-33',
          title: 'Style 33',
      },
      category: 'Feature Blocks'
  });












  // Headers
  //Style 1 
  bm.add('froala-header-style-1', {
      label: 'Style 1',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><header> <div class="container text-center"> <nav class="navbar"> <a class="ml-auto mr-auto" href="https://www.froala.com"> <img src="https://github.com/froala/design-blocks/blob/master/dist/imgs/img_logo.png?raw=true" height="30" alt="image"> </a> </nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-1',
          title: 'Header-1'
      },
      category: 'Headers'
  });

  //Style 2 
  bm.add('froala-header-style-2', {
      label: 'Style 2',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><header> <div class="container"> <nav class="navbar navbar-expand-md"> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav0" aria-controls="navbarNav0" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav0"> <ul class="navbar-nav mr-auto ml-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Team</a> </li></ul> </div></nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-2',
          title: 'Flowz-Header-layout-2'
      },
      category: 'Headers'
  });

  //Style 3 
  bm.add('froala-header-style-3', {
      label: 'Style 3',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'http://linerpro.ml/extra/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style><header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-md no-gutters"> <div class="col-3 text-left"> <a href="https://www.froala.com"> <img src="https://github.com/froala/design-blocks/blob/master/dist/imgs/img_logo.png?raw=true" height="30" alt="image"> </a> </div><button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-4" aria-controls="navbarNav7" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse navbar-collapse-4 justify-content-center col-md-6" id="navbarNav7"> <ul class="navbar-nav justify-content-center"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Team</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Contact</a> </li></ul> </div><div class="collapse navbar-collapse navbar-collapse-4"> <ul class="navbar-nav ml-auto justify-content-end"> <li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Log In</a> </li></ul> <a class="btn ml-md-3" href="https://www.froala.com">Register</a> </div></nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-3',
          title: 'Flowz-Header-layout-3'
      },
      category: 'Headers'
  });


  //Style 4 
  bm.add('froala-header-style-4', {
      label: 'Style 4',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style><header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-md no-gutters"> <div class="col-2 text-left"> <a href="https://www.froala.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </div><button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-3" aria-controls="navbarNav6" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse justify-content-center col-md-8 navbar-collapse-3"> <ul class="navbar-nav justify-content-center"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Team</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Contact</a> </li></ul> </div><div class="collapse navbar-collapse justify-content-end col-md-2 navbar-collapse-3"> <ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Log In</a> </li></ul> </div></nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-4',
          title: 'Flowz-Header-layout-4'
      },
      category: 'Headers'
  });

  //Style 5 
  bm.add('froala-header-style-5', {
      label: 'Style 5',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-lg"> <a class="navbar-brand" href="https://www.froala.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav13" aria-controls="navbarNav13" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav13"> <ul class="navbar-nav mr-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Team</a> </li></ul> <ul class="navbar-nav justify-content-end ml-auto"> <li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Docs</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Contact</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Log In</a> </li></ul> <a class="btn btn-white ml-md-3" href="https://www.froala.com">Button</a> </div></nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-5',
          title: 'Flowz-Header-layout-5'
      },
      category: 'Headers'
  });

  
  //Style 6 
  bm.add('froala-header-style-6', {
      label: 'Style 6',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-md no-gutters"> <div class="col-2 text-left"> <a href="https://www.froala.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </div><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav12" aria-controls="navbarNav12" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse justify-content-center col-md-8" id="navbarNav12"> <ul class="navbar-nav justify-content-center"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Team</a> </li></ul> </div><ul class="navbar-nav col-2 justify-content-end d-none d-md-flex"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-facebook"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-twitter"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-github"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-google"></i></a> </li></ul> </nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-6',
          title: 'Flowz-Header-layout-6'
      },
      category: 'Headers'
  });


  //Style 7 
  bm.add('froala-header-style-7', {
      label: 'Style 7',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-md no-gutters"> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav10" aria-controls="navbarNav10" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="col-4 col-sm-2 text-center order-lg-6"> <a href="https://www.froala.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </div><div class="collapse navbar-collapse col-12 col-md-5 order-lg-1" id="navbarNav10"> <ul class="navbar-nav col-5"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Team</a> </li></ul> </div><ul class="navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex"> <li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-twitter"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-github"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-slack"></i></a> </li></ul> </nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-7',
          title: 'Flowz-Header-layout-7'
      },
      category: 'Headers'
  });

  //Style 8 
  bm.add('froala-header-style-8', {
      label: 'Style 8',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>   <header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-md"> <a class="navbar-brand" href="https://www.froala.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav11" aria-controls="navbarNav11" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav11"> <ul class="navbar-nav ml-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Team</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">About</a> </li></ul> <a class="btn btn-white btn-empty ml-md-3" href="https://www.froala.com">Button</a> </div></nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-8',
          title: 'Flowz-Header-layout-8'
      },
      category: 'Headers'
  });

  //Style 9 
  bm.add('froala-header-style-9', {
      label: 'Style 9',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-md"> <a class="navbar-brand" href="https://www.froala.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav9" aria-controls="navbarNav9" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav9"> <ul class="navbar-nav mr-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Team</a> </li></ul> <ul class="navbar-nav justify-content-end d-none d-lg-flex ml-md-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-slack"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-twitter"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-github"></i></a> </li></ul> <a class="btn btn-white btn-empty ml-md-3" href="https://www.froala.com">Button</a> </div></nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-9',
          title: 'Flowz-Header-layout-9'
      },
      category: 'Headers'
  });

  //Style 10 
  bm.add('froala-header-style-10', {
      label: 'Style 10',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-md"> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav8" aria-controls="navbarNav8" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav8"> <ul class="navbar-nav mr-auto ml-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Team</a> </li></ul> </div></nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-10',
          title: 'Flowz-Header-layout-10'
      },
      category: 'Headers'
  });


  //Style 11 
  bm.add('froala-header-style-11', {
      label: 'Style 11',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <header class="bg-dark"><div class="container text-center"><nav class="navbar"><a class="ml-auto mr-auto" href="https://www.froala.com"><img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"></a></nav></div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-11',
          title: 'Flowz-Header-layout-11'
      },
      category: 'Headers'
  });

  //Style 12 
  bm.add('froala-header-style-12', {
      label: 'Style 12',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <header class="bg-dark"> <div class="container"> <nav class="navbar"> <a href="https://www.froala.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-12',
          title: 'Flowz-Header-layout-12'
      },
      category: 'Headers'
  });


 //Style 13 
  bm.add('froala-header-style-13', {
      label: 'Style 13',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>   <header> <div class="container"> <nav class="navbar navbar-expand-md no-gutters"> <div class="col-3 text-left"> <a href="https://www.froala.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </div><button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-2" aria-controls="navbarNav7" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse navbar-collapse-2 justify-content-center col-md-6" id="navbarNav7"> <ul class="navbar-nav justify-content-center"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Team</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Contact</a> </li></ul> </div><div class="collapse navbar-collapse navbar-collapse-2"> <ul class="navbar-nav ml-auto justify-content-end"> <li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Log In</a> </li></ul> <a class="btn ml-md-3" href="https://www.froala.com">Register</a> </div></nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-13',
          title: 'Flowz-Header-layout-13'
      },
      category: 'Headers'
  });

  //Style 14 
  bm.add('froala-header-style-14', {
      label: 'Style 14',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>    <header> <div class="container"> <nav class="navbar navbar-expand-md no-gutters"> <div class="col-2 text-left"> <a href="https://www.froala.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </div><button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-1" aria-controls="navbarNav6" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse justify-content-center col-md-8 navbar-collapse-1"> <ul class="navbar-nav justify-content-center"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Team</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Contact</a> </li></ul> </div><div class="collapse navbar-collapse justify-content-end col-md-2 navbar-collapse-1"> <ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Log In &rarr;</a> </li></ul> </div></nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-14',
          title: 'Flowz-Header-layout-14'
      },
      category: 'Headers'
  });


  //Style 15 
  bm.add('froala-header-style-15', {
      label: 'Style 15',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>    <header> <div class="container"> <nav class="navbar navbar-expand-lg"> <a class="navbar-brand" href="https://www.froala.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav5" aria-controls="navbarNav5" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav5"> <ul class="navbar-nav mr-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Team</a> </li></ul> <ul class="navbar-nav justify-content-end ml-auto"> <li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Docs</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Contact</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Log In</a> </li></ul> <a class="btn ml-md-3" href="https://www.froala.com">Button</a> </div></nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-15',
          title: 'Flowz-Header-layout-15'
      },
      category: 'Headers'
  });

  //Style 16 
  bm.add('froala-header-style-16', {
      label: 'Style 16',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>    <header> <div class="container"> <nav class="navbar navbar-expand-md no-gutters"> <div class="col-2 text-left"> <a href="https://www.froala.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </div><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav4" aria-controls="navbarNav4" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse justify-content-center col-md-8" id="navbarNav4"> <ul class="navbar-nav justify-content-center"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Team</a> </li></ul> </div><ul class="navbar-nav col-2 justify-content-end d-none d-md-flex"> <li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-facebook"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-twitter"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-github"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-google"></i></a> </li></ul> </nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-16',
          title: 'Flowz-Header-layout-16'
      },
      category: 'Headers'
  });

   //Style 17 
  bm.add('froala-header-style-17', {
      label: 'Style 17',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>     <header> <div class="container"> <nav class="navbar navbar-expand-md"> <a class="navbar-brand" href="https://www.froala.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav3" aria-controls="navbarNav3" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav3"> <ul class="navbar-nav ml-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Team</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">About</a> </li></ul> <a class="btn btn-empty ml-md-3" href="https://www.froala.com">Button</a> </div></nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-17',
          title: 'Flowz-Header-layout-17'
      },
      category: 'Headers'
  });

  //Style 18 
  bm.add('froala-header-style-18', {
      label: 'Style 18',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>      <header> <div class="container"> <nav class="navbar navbar-expand-md no-gutters"> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="col-4 col-md-2 text-right text-md-center order-lg-6"> <a href="https://www.froala.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </div><div class="collapse navbar-collapse col-12 col-md-5 order-lg-1" id="navbarNav2"> <ul class="navbar-nav col-5"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Team</a> </li></ul> </div><ul class="navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex"> <li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-twitter"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-github"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-slack"></i></a> </li></ul> </nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-18',
          title: 'Flowz-Header-layout-18'
      },
      category: 'Headers'
  });

  //Style 19 
  bm.add('froala-header-style-19', {
      label: 'Style 19',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>      <header> <div class="container"> <nav class="navbar navbar-expand-md"> <a class="navbar-brand" href="https://www.froala.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav1"> <ul class="navbar-nav mr-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Team</a> </li></ul> <ul class="navbar-nav justify-content-end d-none d-lg-flex ml-md-auto"> <li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-slack"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-twitter"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com"><i class="fa fa-github"></i></a> </li></ul> <a class="btn btn-empty ml-md-3" href="https://www.froala.com">Button</a> </div></nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-19',
          title: 'Flowz-Header-layout-19'
      },
      category: 'Headers'
  });

  //Style 20 
  bm.add('froala-header-style-20', {
      label: 'Style 20',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>      <header> <div class="container"> <nav class="navbar navbar-expand-md"> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav0" aria-controls="navbarNav0" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav0"> <ul class="navbar-nav mr-auto ml-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Team</a> </li></ul> </div></nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-20',
          title: 'Flowz-Header-layout-20'
      },
      category: 'Headers'
  });

  //Style 21 
  bm.add('froala-header-style-21', {
      label: 'Style 21',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>   <header> <div class="container text-center"> <nav class="navbar"> <a class="ml-auto mr-auto" href="https://www.froala.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </nav> </div></header>',
      attributes: {
          class: 'custom-icon headers-icon froala-headers-style-21',
          title: 'Flowz-Header-layout-21'
      },
      category: 'Headers'
  });



















  // Footers
  // Style 1
  bm.add('froala-footers-style-1', {
      label: 'Style 1',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style><footer class="fdb-block footer-small"> <div class="container"> <div class="row text-center"> <div class="col"> <p>&copy; 2017 Flowz. All Rights Reserved</p></div></div></div></footer>',
      attributes: {
          class: 'custom-icon froala-footers-style-1',
          title: 'Style 1'
      },
      category: 'Footers'
  });

  // Style 2
  bm.add('froala-footers-style-2', {
      label: 'Style 2',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style><footer class="fdb-block footer-small bg-dark"> <div class="container"> <div class="row align-items-center"> <div class="col-12 col-md-8"> <ul class="nav justify-content-center justify-content-md-start"> <li class="nav-item"> <a class="nav-link active" href="https://www.froala.com">Home</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Terms</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">About</a> </li></ul> </div><div class="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right"> &copy; 2017 Flowz. All Rights Reserved </div></div></div></footer>',
      attributes: {
          class: 'custom-icon froala-footers-style-2',
          title: 'Style 2'
      },
      category: 'Footers'
  });

  // Style 3
  bm.add('froala-footers-style-3', {
      label: 'Style 3',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <footer class="fdb-block footer-small"> <div class="container"> <div class="row text-center align-items-center"> <div class="col-12 col-md-8"> <ul class="nav justify-content-center justify-content-md-start align-items-center"> <li class="nav-item"> <a class="nav-link active" href="https://www.froala.com"> <img alt="image" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="40"> </a> </li><li class="w-100 d-block d-sm-none"></li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Terms</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">About</a> </li></ul> </div><div class="col-12 col-md-4 mt-4 mt-md-0 text-md-right"> &copy; 2013-2017 Flowz </div></div></div></footer>',
      attributes: {
          class: 'custom-icon froala-footers-style-3',
          title: 'Style 3'
      },
      category: 'Footers'
  });

  // Style 4
  bm.add('froala-footers-style-4', {
      label: 'Style 4',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <footer class="fdb-block footer-small"> <div class="container"> <div class="row text-center align-items-center"> <div class="col-12 col-sm-6 col-md-4 text-sm-left"> <img alt="image" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="40"> </div><div class="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0 text-center text-sm-right text-md-center"> &copy; 2013-2017 Flowz </div><div class="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right"> <a href="https://www.froala.com"><i class="fa fa-twitter" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-google" aria-hidden="true"></i></a> </div></div></div></footer>',
      attributes: {
          class: 'custom-icon froala-footers-style-4',
          title: 'Style 4'
      },
      category: 'Footers'
  });

  // Style 5
  bm.add('froala-footers-style-5', {
      label: 'Style 5',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <footer class="fdb-block footer-small"> <div class="container"> <div class="row align-items-center"> <div class="col-12 col-md-6"> <ul class="nav justify-content-center justify-content-md-start"> <li class="nav-item"> <a class="nav-link active" href="https://www.froala.com">Home</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Terms</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">About</a> </li></ul> </div><div class="col-12 col-md-6 mt-4 mt-md-0 text-center text-md-right"> <a href="https://www.froala.com"><i class="fa fa-twitter" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-google" aria-hidden="true"></i></a> </div></div></div></footer>',
      attributes: {
          class: 'custom-icon froala-footers-style-5',
          title: 'Style 5'
      },
      category: 'Footers'
  });

  // Style 6
  bm.add('froala-footers-style-6', {
      label: 'Style 6',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <footer class="fdb-block footer-small bg-dark"> <div class="container"> <div class="row text-center align-items-center"> <div class="col"> <ul class="nav justify-content-center"> <li class="nav-item"> <a class="nav-link active" href="https://www.froala.com">Home</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Privacy Policy</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Terms</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">About</a> </li></ul> <p class="text-h5 mt-5">&copy; 2013-2017 Flowz</p></div></div></div></footer>',
      attributes: {
          class: 'custom-icon froala-footers-style-6',
          title: 'Style 6'
      },
      category: 'Footers'
  });

  // Style 7
  bm.add('froala-footers-style-7', {
      label: 'Style 7',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <footer class="fdb-block footer-small"> <div class="container"> <div class="row text-center align-items-center"> <div class="col-12 col-lg-2 text-lg-left"> <img alt="image" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="40"> </div><div class="col mt-4 mt-lg-0 text-center"> <ul class="nav justify-content-center"> <li class="nav-item"> <a class="nav-link active" href="https://www.froala.com">Home</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Privacy Policy</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Terms</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">About</a> </li></ul> </div><div class="col-12 col-lg-2 mt-4 mt-lg-0 text-lg-right"> <a href="https://www.froala.com"><i class="fa fa-twitter" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-google" aria-hidden="true"></i></a> </div></div><div class="row mt-4"> <div class="col text-center"> &copy; 2017 Flowz. All Rights Reserved </div></div></div></footer>',
      attributes: {
          class: 'custom-icon froala-footers-style-7',
          title: 'Style 7'
      },
      category: 'Footers'
  });

  // Style 8
  bm.add('froala-footers-style-8', {
      label: 'Style 8',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <footer class="fdb-block footer-small"> <div class="container"> <div class="row align-items-center"> <div class="col-12 col-md-6"> <ul class="nav justify-content-center justify-content-md-start"> <li class="nav-item"> <a class="nav-link active" href="https://www.froala.com">Home</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Terms</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">About</a> </li></ul> </div><div class="col mt-4 mt-md-0 text-center text-md-right"> <a href="https://www.froala.com" class="btn">Contact Us</a> </div></div></div></footer>',
      attributes: {
          class: 'custom-icon froala-footers-style-8',
          title: 'Style 8'
      },
      category: 'Footers'
  });

  // Style 9
  bm.add('froala-footers-style-9', {
      label: 'Style 9',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <footer class="fdb-block footer-large"> <div class="container"> <div class="row align-items-top text-center"> <div class="col-12 col-sm-6 col-md-4 col-lg-3 text-sm-left"> <h3><strong>Group 1</strong></h3> <nav class="nav flex-column"> <a class="nav-link active" href="https://www.froala.com">Home</a> <a class="nav-link" href="https://www.froala.com">Features</a> <a class="nav-link" href="https://www.froala.com">Pricing</a> <a class="nav-link" href="https://www.froala.com">Team</a> <a class="nav-link" href="https://www.froala.com">Contact Us</a> </nav> </div><div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mt-sm-0 text-sm-left"> <h3><strong>Group 2</strong></h3> <nav class="nav flex-column"> <a class="nav-link active" href="https://www.froala.com">Privacy Policy</a> <a class="nav-link" href="https://www.froala.com">Terms</a> <a class="nav-link" href="https://www.froala.com">FAQ</a> <a class="nav-link" href="https://www.froala.com">Support</a> </nav> </div><div class="col-12 col-md-4 col-lg-3 text-md-left mt-5 mt-md-0"> <h3><strong>About Us</strong></h3> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div><div class="col-12 col-lg-2 ml-auto text-lg-left mt-4 mt-lg-0"> <h3><strong>Follow Us</strong></h3> <p class="text-h3"> <a href="https://www.froala.com"><i class="fa fa-twitter" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-google" aria-hidden="true"></i></a> </p></div></div><div class="row mt-3"> <div class="col text-center"> &copy; 2017 Flowz. All Rights Reserved </div></div></div></footer>',
      attributes: {
          class: 'custom-icon froala-footers-style-9',
          title: 'Style 9'
      },
      category: 'Footers'
  });

  // Style 10
  bm.add('froala-footers-style-10', {
      label: 'Style 10',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <footer class="fdb-block footer-large bg-dark"> <div class="container"> <div class="row align-items-top text-center text-md-left"> <div class="col-12 col-sm-6 col-md-4"> <h3><strong>Country A</strong></h3> <p>Street Address 52<br>Contact Name</p><p>+44 827 312 5002</p><p><a href="https://www.froala.com">countrya@amazing.com</a></p></div><div class="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0"> <h3><strong>Country B</strong></h3> <p>Street Address 100<br>Contact Name</p><p>+13 827 312 5002</p><p><a href="https://www.froala.com">countryb@amazing.com</a></p></div><div class="col-12 col-md-4 mt-5 mt-md-0 text-md-left"> <h3><strong>About Us</strong></h3> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div></div><div class="row mt-5"> <div class="col text-center"> &copy; 2017 Flowz. All Rights Reserved </div></div></div></footer>',
      attributes: {
          class: 'custom-icon froala-footers-style-10',
          title: 'Style 10'
      },
      category: 'Footers'
  });

  // Style 11
  bm.add('froala-footers-style-11', {
      label: 'Style 11',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <footer class="fdb-block footer-small"> <div class="container"> <div class="row align-items-center text-center"> <div class="col-12 col-lg-4 text-lg-left"> &copy; 2017 Flowz </div><div class="col-12 col-lg-4 mt-4 mt-lg-0"> <img alt="image" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="40"> </div><div class="col-12 col-lg-4 text-lg-right mt-4 mt-lg-0"> <ul class="nav justify-content-lg-end justify-content-center"> <li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Privacy</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">Terms</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.froala.com">About</a> </li></ul> </div></div></div></footer>',
      attributes: {
          class: 'custom-icon froala-footers-style-11',
          title: 'Style 11'
      },
      category: 'Footers'
  });

  // Style 12
  bm.add('froala-footers-style-12', {
      label: 'Style 12',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <footer class="fdb-block footer-large"> <div class="container"> <div class="row text-center"> <div class="col"> <h3>Company Name</h3> <p>70 Bowman St.<br>South Windsor, CT 06074</p><p>USA</p><p>+13 827 312 5002</p></div></div><div class="row mt-4"> <div class="col text-center"> <p class="text-h3"> <a href="https://www.froala.com"><i class="fa fa-twitter" aria-hidden="true"></i></a> &nbsp; &nbsp; <a href="https://www.froala.com"><i class="fa fa-facebook" aria-hidden="true"></i></a> &nbsp; &nbsp; <a href="https://www.froala.com"><i class="fa fa-instagram" aria-hidden="true"></i></a> &nbsp; &nbsp; <a href="https://www.froala.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a> &nbsp; &nbsp; <a href="https://www.froala.com"><i class="fa fa-google" aria-hidden="true"></i></a> </p></div></div></div></footer>',
      attributes: {
          class: 'custom-icon froala-footers-style-12',
          title: 'Style 12'
      },
      category: 'Footers'
  });
















  // Form Controls
  // Style 1
  bm.add('froala-forms-style-1', {
      label: 'Style 1',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-8 col-lg-6 text-center"> <h1>Subscribe</h1> <div class="input-group mt-4 mb-4"> <input type="text" class="form-control" placeholder="Enter your email address"> <span class="input-group-btn"> <button class="btn" type="button">Submit</button> </span> </div><p class="text-h4">Find us on <a href="https://www.froala.com">Facebook</a> and <a href="https://www.froala.com">Twitter</a>.</p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-forms-style-1',
          title: 'Style 1'
      },
      category: 'Designed Forms'
  });

  // Style 2
  bm.add('froala-forms-style-2', {
      label: 'Style 2',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <section class="fdb-block" style="background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder//imgs/bg_2.svg)"> <div class="container"> <div class="fdb-box"> <div class="row justify-content-center align-items-center"> <div class="col-12 col-lg-6"> <h2>Join us!</h2> <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p></div><div class="col-12 col-lg-5 text-center"> <div class="input-group mt-4"> <input type="text" class="form-control" placeholder="Enter your email address"> <span class="input-group-btn"> <button class="btn" type="button">Submit</button> </span> </div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-forms-style-2',
          title: 'Style 2'
      },
      category: 'Designed Forms'
  });

  // Style 3
  bm.add('froala-forms-style-3', {
      label: 'Style 3',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-lg-10 col-xl-8 text-center"> <div class="row"> <div class="col"> <h1>Register</h1> <p class="text-h3">When she reached the first hills, she had a last view back on the skyline of her hometown.</p></div></div><div class="row align-items-center"> <div class="col-12 col-md-5 mt-4"> <input type="text" class="form-control" placeholder="Email"> </div><div class="col-12 col-md-5 mt-4"> <input type="password" class="form-control" placeholder="Password"> </div><div class="col-12 col-md-2 mt-4"> <button class="btn" type="button">Submit</button> </div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-forms-style-3',
          title: 'Style 3'
      },
      category: 'Designed Forms'
  });


   // Style 4
  bm.add('froala-forms-style-4', {
      label: 'Style 4',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <section class="fdb-block" style="background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder//imgs/alt_wide_1.svg)"> <div class="container"> <div class="row"> <div class="col-12 col-md-8 col-lg-7 col-xl-5 text-left"> <div class="row"> <div class="col"> <h1>Sign Up</h1> <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p></div></div><div class="row"> <div class="col mt-4"> <input type="text" class="form-control" placeholder="Email"> </div></div><div class="row mt-4"> <div class="col"> <input type="password" class="form-control" placeholder="Password"> </div></div><div class="row mt-4"> <div class="col"> <button class="btn" type="button">Submit</button> </div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-forms-style-4',
          title: 'Style 4'
      },
      category: 'Designed Forms'
  });

   // Style 5
  bm.add('froala-forms-style-5', {
      label: 'Style 5',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <section class="fdb-block" style="background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_4.svg)"> <div class="container"> <div class="row justify-content-end"> <div class="col-12 col-md-8 col-lg-6 col-xl-5 text-left"> <div class="fdb-box"> <div class="row"> <div class="col"> <h1>Log In</h1> <p class="text-h3">Right at the coast of the Semantics, a large language ocean. A small river named Duden.</p></div></div><div class="row"> <div class="col mt-4"> <input type="text" class="form-control" placeholder="Email"> </div></div><div class="row mt-4"> <div class="col"> <input type="password" class="form-control" placeholder="Password"> </div></div><div class="row mt-4"> <div class="col"> <button class="btn" type="button">Submit</button> </div></div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-forms-style-5',
          title: 'Style 5'
      },
      category: 'Designed Forms'
  });

   // Style 6
  bm.add('froala-forms-style-6', {
      label: 'Style 6',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-8 col-lg-8 col-xl-6"> <div class="row"> <div class="col text-center"> <h1>Register</h1> <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p></div></div><div class="row align-items-center"> <div class="col mt-4"> <input type="text" class="form-control" placeholder="Company Name"> </div></div><div class="row align-items-center mt-4"> <div class="col"> <input type="email" class="form-control" placeholder="Email"> </div></div><div class="row align-items-center mt-4"> <div class="col"> <input type="password" class="form-control" placeholder="Password"> </div><div class="col"> <input type="password" class="form-control" placeholder="Confirm Password"> </div></div><div class="row justify-content-start mt-4"> <div class="col"> <div class="form-check"> <label class="form-check-label"> <input type="checkbox" class="form-check-input"> I Read and Accept <a href="https://www.froala.com">Terms and Conditions</a> </label> </div><button class="btn mt-4">Submit</button> </div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-forms-style-6',
          title: 'Style 6'
      },
      category: 'Designed Forms'
  });

   // Style 7
  bm.add('froala-forms-style-7', {
      label: 'Style 7',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <section class="fdb-block" style="background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder//imgs/bg_0.svg)"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-8 col-lg-7 col-xl-5 text-center"> <div class="fdb-box fdb-touch"> <div class="row"> <div class="col"> <h1>Log In</h1> </div></div><div class="row mt-4"> <div class="col"> <input type="text" class="form-control" placeholder="Email"> </div></div><div class="row mt-4"> <div class="col"> <input type="password" class="form-control mb-1" placeholder="Password"> <p class="text-right"><a href="https://www.froala.com">Recover Password</a></p></div></div><div class="row mt-4"> <div class="col"> <button class="btn" type="button">Submit</button> </div></div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-forms-style-7',
          title: 'Style 7'
      },
      category: 'Designed Forms'
  });

  // Style 8
  bm.add('froala-forms-style-8', {
      label: 'Style 8',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-8 col-lg-7 col-md-5 text-center"> <div class="fdb-box fdb-touch"> <div class="row"> <div class="col"> <h1>Register</h1> </div></div><div class="row"> <div class="col mt-4"> <input type="text" class="form-control" placeholder="Name"> </div></div><div class="row mt-4"> <div class="col"> <input type="text" class="form-control" placeholder="Email"> </div></div><div class="row mt-4"> <div class="col"> <input type="password" class="form-control mb-1" placeholder="Password"> <p class="text-right"><a href="https://www.froala.com">Already have an account?</a></p></div></div><div class="row mt-4"> <div class="col"> <button class="btn" type="button">Submit</button> </div></div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-forms-style-8',
          title: 'Style 8'
      },
      category: 'Designed Forms'
  });

   // Style 9
  bm.add('froala-forms-style-9', {
      label: 'Style 9',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style><section class="fdb-block bg-gray"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-10 col-lg-8 col-xl-6 text-center"> <img alt="image" height="40" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h1>Never miss an update</h1> <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p><div class="input-group mt-4 mb-4"> <input type="text" class="form-control" placeholder="Enter your email address"> <span class="input-group-btn"> <button class="btn" type="button">Submit</button> </span> </div><p class="text-h5"><em>*Your email address is safe with us. We never share your email address.</em></p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-forms-style-9',
          title: 'Style 9'
      },
      category: 'Designed Forms'
  });

  // Style 10
  bm.add('froala-forms-style-10', {
      label: 'Style 10',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style><section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-10 col-lg-8 col-xl-6 text-center"> <h1>Company Name</h1> <p class="text-h3">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown.</p><div class="input-group mt-5 mb-5"> <input type="text" class="form-control" placeholder="Enter your email address"> <span class="input-group-btn"> <button class="btn" type="button">Submit</button> </span> </div><p class="text-h2"> <a href="https://www.froala.com"><i class="fa fa-facebook"></i></a>&nbsp;&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-twitter"></i></a>&nbsp;&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-instagram"></i></a>&nbsp;&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-google"></i></a>&nbsp;&nbsp;&nbsp; <a href="https://www.froala.com"><i class="fa fa-pinterest"></i></a> </p></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-forms-style-10',
          title: 'Style 10'
      },
      category: 'Designed Forms'
  });

  // Style 11
  bm.add('froala-forms-style-11', {
      label: 'Style 11',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <section class="fdb-block"> <div class="container"> <div class="row"> <div class="col-12 col-md-6 m-md-auto ml-lg-0 col-lg-5"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div><div class="col-12 col-md-10 col-lg-6 mt-4 mt-lg-0 ml-auto mr-auto ml-lg-auto text-left"> <div class="row"> <div class="col"> <h1>Subscribe</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p></div></div><div class="row mt-4"> <div class="col"> <div class="input-group" style="font-size:16px"> <input type="text" class="form-control" placeholder="Enter your email address"> <span class="input-group-btn"> <button class="btn" type="button" style="font-size:16px">Submit</button> </span> </div></div></div><div class="row"> <div class="col"> <p class="text-h4" style="font-size:16px">* Leave your email address to be notified first.</p></div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-forms-style-11',
          title: 'Style 11'
      },
      category: 'Designed Forms'
  });

   // Style 12
  bm.add('froala-forms-style-12', {
      label: 'Style 12',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <section class="fdb-block" style="background-image: url(//s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_c_2.svg);"> <div class="container"> <div class="row justify-content-end"> <div class="col-12 col-md-9 col-lg-8"> <div class="fdb-box fdb-touch"> <div class="row justify-content-center"> <div class="col-12 col-lg-10"> <h1>Subscribe</h1> <p class="text-h3">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove.</p></div></div><div class="row justify-content-center mt-4"> <div class="col-12 col-lg-10"> <div class="input-group"> <input type="text" class="form-control" placeholder="Enter your email address"> <span class="input-group-btn"> <button class="btn" type="button">Submit</button> </span> </div></div></div></div></div></div></div></section>',
      attributes: {
          class: 'custom-icon froala-forms-style-12',
          title: 'Style 12'
      },
      category: 'Designed Forms'
  });
























  // Pricing Tables
  //Style 1
  bm.add('froala-pricings-style-1', {
      label: 'Style 1',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing</h1></div></div><div class="row mt-5 align-items-center"><div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center"><div class="bg-dark pb-5 pt-5 pl-3 pr-3 br"><h2 class="font-weight-light">Hobby</h2><p class="text-h2"><strong>$9 / month</strong></p><p class="text-h3">Even the all-powerful Pointing has no control about the blind texts.</p><ul class="text-left mt-5 mb-5"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p><a href="https://www.froala.com" class="btn mt-4">Subscribe</a></p></div></div><div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0"><div class="bg-dark pb-5 pt-5 pl-3 pr-3 fdb-touch br"><h2 class="font-weight-light">Professional</h2><p class="text-h2"><strong>$19 / month</strong></p><p class="text-h3">Far far away, behind the word mountains, far from the countries.</p><ul class="text-left mt-5 mb-5"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p><a href="https://www.froala.com" class="btn mt-4">Subscribe</a></p></div></div><div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0"><div class="bg-dark pb-5 pt-5 pl-3 pr-3 br"><h2 class="font-weight-light">Business</h2><p class="text-h2"><strong>$49 / month</strong></p><p class="text-h3">Wild Question Marks, but the Little Blind Text didn’t listen.</p><ul class="text-left mt-5 mb-5"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p><a href="https://www.froala.com" class="btn mt-4">Subscribe</a></p></div></div></div></div> </section>',
      attributes: {
          class: 'custom-icon froala-pricings-style-1',
          title: 'Style 1',
      },
      category: 'Pricing Tables'
  });

  //Style 2
  bm.add('froala-pricings-style-2', {
      label: 'Style 2',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing</h1></div></div><div class="row mt-5 align-items-center"><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left"><div class="fdb-box fdb-touch p-5 br"><h2>Hobby <strong class="float-xl-right d-lg-block d-xl-inline">$99</strong></h2><p class="text-h3"><em>Copy Writers ambushed her, made her drunk with Longe.</em></p><ul class="text-left pl-3 mt-5 mb-5"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p class="text-left pt-4"><a href="https://www.froala.com" class="btn">Buy Now</a></p></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0"><div class="fdb-box fdb-touch p-5 br"><h2>Advanced <strong class="float-xl-right d-lg-block d-xl-inline">$349</strong></h2><p class="text-h3"><em>Separated they live in Bookmarks right at the coast.</em></p><ul class="text-left pl-3 mt-5 mb-5"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p class="text-left pt-4"><a href="https://www.froala.com" class="btn">Buy Now</a></p></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0"><div class="fdb-box fdb-touch p-5 br"><h2>Business <strong class="float-xl-right d-lg-block d-xl-inline">$849</strong></h2><p class="text-h3"><em>A small river named Duden flows by their place.</em></p><ul class="text-left pl-3 mt-5 mb-5"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p class="text-left pt-4"><a href="https://www.froala.com" class="btn">Buy Now</a></p></div></div></div></div> </section>',
      attributes: {
          class: 'custom-icon froala-pricings-style-2',
          title: 'Style 2',
      },
      category: 'Pricing Tables'
  });

  // Style 3
  bm.add('Ffroala-pricings-style-3', {
      label: 'Style 3',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block bg-dark" style="background-image: url(//s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_0.svg);"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing</h1></div></div><div class="row mt-5 align-items-center"><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center"><div class="fdb-box fdb-touch p-4 br"><h2>Hobby</h2><p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p><p class="text-h1 mt-5 mb-5">$99</p><p><a href="https://www.froala.com" class="btn">Buy Now</a></p></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0"><div class="fdb-box fdb-touch p-4 br"><h2>Advanced</h2><p class="text-h3">Separated they live in Bookmarksgrove right at the coast, a large language ocean.</p><p class="text-h1 mt-5 mb-5">$299</p><p><a href="https://www.froala.com" class="btn">Buy Now</a></p></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0"><div class="fdb-box fdb-touch p-4 br"><h2>Business</h2><p class="text-h3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p><p class="text-h1 mb-5 mt-5">$799</p><p><a href="https://www.froala.com" class="btn">Buy Now</a></p></div></div></div></div> </section>',
      attributes: {
          class: 'custom-icon froala-pricings-style-3',
          title: 'Style 3',
      },
      category: 'Pricing Tables'
  });

  //Style 4
  bm.add('froala-pricings-style-4', {
      label: 'Style 4',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing Plans</h1></div></div><div class="row mt-5 align-items-top"><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left"><div class="bg-gray pb-5 pt-5 pl-4 pr-4 br"><h2 class="font-weight-light">Startup</h2><hr><p class="text-h2"><strong>$9.90</strong></p><p class="text-h4">Far far away, behind the word mountains, far from the countries.</p><hr><p class="text-right"><em>Unlimited calls</em></p><p class="text-right"><em>Free hosting</em></p><p class="text-right"><em>40MB of storage</em></p><p><br></p><p><br></p><p><br></p><p class="text-center pt-4"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0"><div class="bg-gray pb-5 pt-5 pl-4 pr-4 br"><h2 class="font-weight-light">Standard</h2><hr><p class="text-h2"><strong>$29.90</strong></p><p class="text-h4">The copy warned the Blind Text, that it would have been rewritten</p><hr><p class="text-right"><em>Unlimited calls</em></p><p class="text-right"><em>Free hosting</em></p><p class="text-right"><em>1GB of storage</em></p><p class="text-right"><em>10 hours of support</em></p><p class="text-right"><em>Custom domain</em></p><p><br></p><p class="text-center pt-4"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0"><div class="bg-gray pb-5 pt-5 pl-4 pr-4 br"><h2 class="font-weight-light">Professional</h2><hr><p class="text-h2"><strong>$59.90</strong></p><p class="text-h4"> the headline of Alphabet Village and the subline of her own road.</p><hr><p class="text-right"><em>Unlimited calls</em></p><p class="text-right"><em>Free hosting</em></p><p class="text-right"><em>1GB of storage</em></p><p class="text-right"><em>20 hours of support</em></p><p class="text-right"><em>Custom domain</em></p><p class="text-right"><em>Analytics and SEO</em></p><p class="text-center pt-4"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p></div></div></div></div> </section>',
      attributes: {
          class: 'custom-icon froala-pricings-style-4',
          title: 'Style 4',
      },
      category: 'Pricing Tables'
  });

  //Style 5
  bm.add('froala-pricings-style-5', {
      label: 'Style 5',
      content:'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block bg-dark" style="background-image: url(//s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_1.svg)"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing Plans</h1></div></div><div class="row mt-5 align-items-center no-gutters"><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center"><div class="bg-gray pb-5 pt-5 pl-4 pr-4"><h2 class="font-weight-light">Basic</h2><p class="text-h1 mt-5 mb-5"><strong>$19</strong> <span class="text-h4">/month</span></p><ul class="text-left"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p class="text-center pt-4"><a href="https://www.froala.com" class="btn btn-round btn-white btn-shadow">Choose Plan</a></p></div></div><div class="col-12 col-sm-10 col-md-8 ml-auto mr-auto col-lg-4 text-center mt-4 mt-lg-0 sl-1 pt-0 pt-lg-3 pb-0 pb-lg-3 bg-gray fdb-touch"><div class="pb-5 pt-5 pl-4 pr-4"><h2 class="font-weight-light">Standard</h2><p class="text-h1 mt-5 mb-5"><strong>$49</strong> <span class="text-h4">/month</span></p><ul class="text-left"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p class="text-center pt-4"><a href="https://www.froala.com" class="btn btn-round btn-shadow">Choose Plan</a></p></div></div><div class="col-12 col-sm-10 col-md-8 ml-auto mr-auto col-lg-4 text-center mt-4 mt-lg-0"><div class="bg-gray pb-5 pt-5 pl-4 pr-4"><h2 class="font-weight-light">OEM</h2><p class="text-h1 mt-5 mb-5"><strong>$99</strong> <span class="text-h4">/month</span></p><ul class="text-left"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p class="text-center pt-4"><a href="https://www.froala.com" class="btn btn-round btn-white btn-shadow">Choose Plan</a></p></div></div></div></div> </section>',
      attributes: {
          class: 'custom-icon froala-pricings-style-5',
          title: 'Style 5',
      },
      category: 'Pricing Tables'
  });

  //Style 6
  bm.add('froala-pricings-style-6', {
     label: 'Style 6',
     content:'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing Plans</h1></div></div><div class="row mt-5 align-items-top"><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left"><div class="br"><div class="bg-dark p-3 text-center"><h2 class="font-weight-light">Startup</h2><p class="text-h2"><strong>$9.90</strong></p></div><div class="bg-gray p-5 text-center"><p><img alt="image" height="40" src=" https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></p><p class="text-h4"><strong>For small companies</strong></p><p><br></p><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p><p class="text-center pt-5"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p></div></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0"><div class="br"><div class="bg-dark p-3 text-center"><h2 class="font-weight-light">Standard</h2><p class="text-h2"><strong>$19.90</strong></p></div><div class="bg-gray p-5 text-center"><p><img alt="image" height="40" src=" https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></p><p class="text-h4"><strong>For medium companies</strong></p><p><br></p><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p><p class="text-center pt-5"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p></div></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0"><div class="br"><div class="bg-dark p-3 text-center"><h2 class="font-weight-light">Business</h2><p class="text-h2"><strong>$29.90</strong></p></div><div class="bg-gray p-5 text-center"><p><img alt="image" height="40" src=" https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></p><p class="text-h4"><strong>For large companies</strong></p><p><br></p><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p><p class="text-center pt-5"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p></div></div></div></div></div> </section>',
     attributes: {
         class: 'custom-icon froala-pricings-style-6',
         title: 'Style 6',
     },
     category: 'Pricing Tables'
  });

  //Style 7
  bm.add('froala-pricings-style-7', {
      label: 'Style 7',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing Plans</h1></div></div><div class="row mt-5 align-items-top"><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center"><div class="bg-gray pb-5 pt-5 pl-4 pr-4 br"><h3><strong>Startup</strong></h3><p class="text-h4">&lt; 10 employees</p><p class="text-h1 mt-5">$9.90 <span class="text-h3">/ month</span></p><p>Far far away, behind the word mountains, far from the countries.</p><hr><p><em>Unlimited calls</em></p><p><em>Free hosting</em></p><p><em>40MB of storage</em></p><p class="text-center pt-5"><a href="https://www.froala.com" class="btn btn-round">Subscribe</a></p></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0"><div class="bg-gray pb-5 pt-5 pl-4 pr-4 br"><h3><strong>Agency</strong></h3><p class="text-h4">10-100 employees</p><p class="text-h1 mt-5">$19.90 <span class="text-h3">/ month</span></p><p>And if she hasn’t been rewritten, then they are still using her.</p><hr><p><em>Unlimited calls</em></p><p><em>Free hosting</em></p><p><em>40MB of storage</em></p><p class="text-center pt-5"><a href="https://www.froala.com" class="btn btn-round">Subscribe</a></p></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0"><div class="bg-gray pb-5 pt-5 pl-4 pr-4 br"><h3><strong>Business</strong></h3><p class="text-h4">>100 employees</p><p class="text-h1 mt-5">$99.90 <span class="text-h3">/ month</span></p><p>Separated they live in Bookmarksgrove right at the coast of the Semantics.</p><hr><p><em>Unlimited calls</em></p><p><em>Free hosting</em></p><p><em>40MB of storage</em></p><p class="text-center pt-5"><a href="https://www.froala.com" class="btn btn-round">Subscribe</a></p></div></div></div></div> </section>',
      attributes: {
          class: 'custom-icon froala-pricings-style-7',
          title: 'Style 7',
      },
      category: 'Pricing Tables'
  });

  //Style 8
  bm.add('froala-pricings-style-8', {
      label: 'Style 8',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing Plans</h1></div></div><div class="row mt-5 align-items-top"><div class="col-12 col-md-8 m-auto col-lg-4 text-center"> <img alt="image" height="80" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h2><strong>Startup</strong></h2><p class="text-h3 mb-4 mb-lg-5"><em>$9 / month</em></p><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p><p class="text-center mt-4 mt-lg-5"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p></div><div class="col-12 col-md-8 col-lg-4 text-center m-auto pt-5 pt-lg-0"> <img alt="image" height="80" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h2><strong>Advanced</strong></h2><p class="text-h3 mb-4 mb-lg-5"><em>$19 / month</em></p><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p><p class="text-center mt-4 mt-lg-5"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p></div><div class="col-12 col-md-8 m-auto col-lg-4 text-center pt-5 pt-lg-0"> <img alt="image" height="80" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h2><strong>Business</strong></h2><p class="text-h3 mb-4 mb-lg-5"><em>$29 / month</em></p><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p><p class="text-center mt-4 mt-lg-5"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p></div></div></div> </section>',
      attributes: {
          class: 'custom-icon froala-pricings-style-8',
          title: 'Style 8',
      },
      category: 'Pricing Tables'
  });

  //Style 9
  bm.add('froala-pricings-style-9', {
      label: 'Style 9',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing Plans</h1></div></div><div class="row mt-5 align-items-top"><div class="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left"><div class="bg-gray p-3 text-center br sl-1"><h2 class="font-weight-light">Startup</h2><p class="text-h2">$99</p><p class="text-center"><a href="https://www.froala.com" class="btn btn-empty">Buy Now</a></p><hr class="mt-5 mb-5"><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p></div></div><div class="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left pt-5 pt-md-0"><div class="bg-gray p-3 text-center br sl-1"><h2 class="font-weight-light">Advanced</h2><p class="text-h2">$399</p><p class="text-center"><a href="https://www.froala.com" class="btn">Buy Now</a></p><hr class="mt-5 mb-5"><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p></div></div><div class="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left pt-5 pt-xl-0"><div class="bg-gray p-3 text-center br sl-1"><h2 class="font-weight-light">Business</h2><p class="text-h2">$999</p><p class="text-center"><a href="https://www.froala.com" class="btn btn-empty">Buy Now</a></p><hr class="mt-5 mb-5"><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p></div></div><div class="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left pt-5 pt-xl-0"><div class="bg-gray p-3 text-center br sl-1"><h2 class="font-weight-light">Enterprise</h2><p class="text-h2">Call Us</p><p class="text-center"><a href="https://www.froala.com" class="btn btn-empty">Contact</a></p><hr class="mt-5 mb-5"><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p></div></div></div></div> </section>',
      attributes: {
          class: 'custom-icon froala-pricings-style-9',
          title: 'Style 9',
      },
      category: 'Pricing Tables'
  });


  //Style 10
  bm.add('froala-pricings-style-10', {
      label: 'Style 10',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing Plans</h1></div></div><table class="table text-center mt-5 d-none d-lg-table"><tbody><tr class="no-border"><th scope="row"></th><td class="text-center"><h2 class="font-weight-light">Hobby</h2><p class="text-h2">$99</p><p><a href="https://www.froala.com" class="btn btn-empty">Buy Now</a></p></td><td class="text-center"><h2 class="font-weight-light">Professional</h2><p class="text-h2">$399</p><p><a href="https://www.froala.com" class="btn btn-empty">Buy Now</a></p></td><td class="text-center"><h2 class="font-weight-light">Business</h2><p class="text-h2">$899</p><p><a href="https://www.froala.com" class="btn">Buy Now</a></p></td><td class="text-center"><h2 class="font-weight-light">Enterprise</h2><p class="text-h2">Call us</p><p><a href="https://www.froala.com" class="btn btn-empty">Contact</a></p></td></tr><tr><th scope="row">Support</th><td>3 months</td><td>6 months</td><td>12 months</td><td>Custom</td></tr><tr><th scope="row">Full source code</th><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><th scope="row">SaaS / Subscription</th><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><th scope="row">Intranet</th><td></td><td>yes</td><td>yes</td><td>yes</td></tr><tr><th scope="row">Downloadable Software</th><td></td><td></td><td>yes</td><td>yes</td></tr><tr><th scope="row">Redistribute</th><td></td><td></td><td></td><td>yes</td></tr><tr><th scope="row">Custom code</th><td></td><td></td><td></td><td>yes</td></tr></tbody></table><table class="table text-center mt-5 d-table d-lg-none"><tbody><tr class="no-border"><td class="text-center" colspan="2"><h2 class="font-weight-light">Hobby</h2><p class="text-h2">$99</p><p><a href="https://www.froala.com" class="btn btn-empty">Buy Now</a></p></td></tr><tr><th scope="row">Support</th><td>3 months</td></tr><tr><th scope="row">Full source code</th><td>yes</td></tr><tr><th scope="row">SaaS / Subscription</th><td>yes</td></tr><tr><th scope="row">Intranet</th><td></td></tr><tr><th scope="row">Downloadable Software</th><td></td></tr><tr><th scope="row">Redistribute</th><td></td></tr><tr><th scope="row">Custom code</th><td></td></tr></tbody></table><table class="table text-center mt-5 d-table d-lg-none"><tbody><tr class="no-border"><td class="text-center" colspan="2"><h2 class="font-weight-light">Professional</h2><p class="text-h2">$399</p><p><a href="https://www.froala.com" class="btn btn-empty">Buy Now</a></p></td></tr><tr><th scope="row">Support</th><td>6 months</td></tr><tr><th scope="row">Full source code</th><td>yes</td></tr><tr><th scope="row">SaaS / Subscription</th><td>yes</td></tr><tr><th scope="row">Intranet</th><td>yes</td></tr><tr><th scope="row">Downloadable Software</th><td></td></tr><tr><th scope="row">Redistribute</th><td></td></tr><tr><th scope="row">Custom code</th><td></td></tr></tbody></table><table class="table text-center mt-5 d-table d-lg-none"><tbody><tr class="no-border"><td class="text-center" colspan="2"><h2 class="font-weight-light">Business</h2><p class="text-h2">$899</p><p><a href="https://www.froala.com" class="btn">Buy Now</a></p></td></tr><tr><th scope="row">Support</th><td>12 months</td></tr><tr><th scope="row">Full source code</th><td>yes</td></tr><tr><th scope="row">SaaS / Subscription</th><td>yes</td></tr><tr><th scope="row">Intranet</th><td>yes</td></tr><tr><th scope="row">Downloadable Software</th><td>yes</td></tr><tr><th scope="row">Redistribute</th><td></td></tr><tr><th scope="row">Custom code</th><td></td></tr></tbody></table><table class="table text-center mt-5 d-table d-lg-none"><tbody><tr class="no-border"><td class="text-center" colspan="2"><h2 class="font-weight-light">Enterprise</h2><p class="text-h2">Call us</p><p><a href="https://www.froala.com" class="btn btn-empty">Contact</a></p></td></tr><tr><th scope="row">Support</th><td>Custom</td></tr><tr><th scope="row">Full source code</th><td>yes</td></tr><tr><th scope="row">SaaS / Subscription</th><td>yes</td></tr><tr><th scope="row">Intranet</th><td>yes</td></tr><tr><th scope="row">Downloadable Software</th><td>yes</td></tr><tr><th scope="row">Redistribute</th><td>yes</td></tr><tr><th scope="row">Custom code</th><td>yes</td></tr></tbody></table></div> </section>',
      attributes: {
          class: 'custom-icon froala-pricings-style-10',
          title: 'Style 10',
      },
      category: 'Pricing Tables'
  }); 




















  // Team Members
  //Style 1
  bm.add('froala-teams-style-1', {
      label: 'Style 1',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block team-1"><div class="container"><div class="row text-center justify-content-center"><div class="col-8"><h1>Our Team</h1><p class="text-h3" style="font-size:18px">Far far away, behind the word mountains, far from the countries.</p></div></div><div class="row-50"></div><div class="row"><div class="col-sm-3 text-left"><div class="fdb-box"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_1.svg"><div class="content"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>Founder</p></div></div></div><div class="col-sm-3 text-left"><div class="fdb-box"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_2.svg"><div class="content"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>Founder</p></div></div></div><div class="col-sm-3 text-left"><div class="fdb-box"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_3.svg"><div class="content"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>Founder</p></div></div></div><div class="col-sm-3 text-left"><div class="fdb-box"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_4.svg"><div class="content"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>Founder</p></div></div></div></div></div> </section>',
      attributes: {
          class: 'custom-icon froala-teams-style-1',
          title: 'Style 1',
      },
      category: 'Team Members'
  });

  //Style 2
  bm.add('froala-teams-style-2', {
      label: 'Style 2',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block team-2"><div class="container"><div class="row text-center justify-content-center"><div class="col-8"><h1>Meet Our Team</h1></div></div><div class="row-50"></div><div class="row text-center justify-content-center"><div class="col-sm-3 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h2>Sara Doe</h2><p>Founder</p></div><div class="col-sm-3 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h2>Sara Doe</h2><p>Founder</p></div><div class="col-sm-3 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h2>Sara Doe</h2><p>Founder</p></div></div></div> </section>',
      attributes: {
          class: 'custom-icon froala-teams-style-2',
          title: 'Style 2',
      },
      category: 'Team Members'
  });

  //Style 3
  bm.add('froala-teams-style-3', {
      label: 'Style 3',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block team-3"><div class="container"><div class="row text-center justify-content-center"><div class="col-8"><h1>Meet Our Team</h1></div></div><div class="row-70"></div><div class="row text-center justify-content-center"><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src=" https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p><em>Founder</em></p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p><em>Founder</em></p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p><em>Founder</em></p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p><em>Founder</em></p></div></div><div class="row justify-content-center text-center"><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p><em>Founder</em></p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p><em>Founder</em></p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p><em>Founder</em></p></div></div></div> </section>',
      attributes: {
        class: 'custom-icon froala-teams-style-3',
        title: 'Style 3',
      },
      category: 'Team Members'
  });

  //Style 4
  bm.add('froala-teams-style-4', {
      label: 'Style 4',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block team-4"><div class="container"><div class="row text-center justify-content-center"><div class="col-8"><h1>Team</h1></div></div><div class="row text-center"><div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"><h3 style="font-size:16px"><strong>John Smith</strong></h3><p>Position</p><p>A wonderful serenity has taken possession of my entire soul.</p></div><div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"><h3 style="font-size:16px"><strong>John Smith</strong></h3><p>Position</p><p>Pityful a rethoric question ran over her cheek.</p></div><div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"><h3 style="font-size:16px"><strong>John Smith</strong></h3><p>Position</p><p>And if she hasn’t been rewritten, then they are still using her.</p></div><div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"><h3 style="font-size:16px"><strong>John Smith</strong></h3><p>Position</p><p>Wild Question Marks, but the Little Blind Text didn’t listen.</p></div></div></div> </section>',
      attributes: {
          class: 'custom-icon froala-teams-style-4',
          title: 'Style 4',
      },
      category: 'Team Members'
  });

  //Style 5
  bm.add('froala-teams-style-5', {
      label: 'Style 5',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block team-5"><div class="container"><div class="row text-center justify-content-center"><div class="col-8"><h1>Meet Our Team</h1></div></div><div class="row-70"></div><div class="row text-center justify-content-center"><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>"Wild Question Marks, but the Little Blind"</p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>"Wild Question Marks, but the Little Blind"</p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>"Wild Question Marks, but the Little Blind"</p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>"Wild Question Marks, but the Little Blind"</p></div></div><div class="row justify-content-center text-center"><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>"Wild Question Marks, but the Little Blind"</p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>"Wild Question Marks, but the Little Blind"</p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>"Wild Question Marks, but the Little Blind"</p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>"Wild Question Marks, but the Little Blind"</p></div></div></div> </section>',
      attributes: {
        class: 'custom-icon froala-teams-style-5',
        title: 'Style 5',
      },
      category: 'Team Members'
  });

  //Style 6
  bm.add('froala-teams-style-6', {
      label: 'Style 6',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block team-6"><div class="container"><div class="row text-center justify-content-center"><div class="col-8"><h1>Team</h1></div></div><div class="row text-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"><h3 style="font-size:16px"><strong>John Smith</strong></h3><p>Position</p><p>Separated they live in Bookmarksgrove right at the coast of the Semantics.</p></div><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"><h3 style="font-size:16px"><strong>John Smith</strong></h3><p>Position</p><p>One morning, when Gregor Samsa woke from troubled dreams.</p></div><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"><h3 style="font-size:16px"><strong>John Smith</strong></h3><p>Position</p><p>A small river named Duden flows by their place and supplies it.</p></div></div></div> </section>',
      attributes: {
        class: 'custom-icon froala-teams-style-6',
        title: 'Style 6',
      },
      category: 'Team Members'
  });

  //Style 7
  bm.add('froala-teams-style-7', {
      label: 'Style 7',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block team-7"><div class="container"><div class="row text-center justify-content-center"><div class="col-8"><h1>Team</h1></div></div><div class="row-70"></div><div class="row justify-content-center"><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div></div><div class="row-50"></div><div class="row justify-content-center"><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div></div><div class="row-50"></div><div class="row justify-content-center"><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div></div></div> </section>',
      attributes: {
        class: 'custom-icon froala-teams-style-7',
        title: 'Style 7',
      },
      category: 'Team Members'
  });

  //Style 8
  bm.add('froala-teams-style-8', {
      label: 'Style 8',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block team-8"><div class="container"><div class="row text-center justify-content-center"><div class="col-8"><h1>Our Amazing Team</h1><p class="text-h3">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p></div></div><div class="row-100"></div><div class="row justify-content-center text-left"><div class="col-sm-6"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px"><strong>Employee Name</strong></h3><p class="text-h3" style="font-size:14px">Position</p><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div></div></div><div class="col-sm-6"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px"><strong>Employee Name</strong></h3><p class="text-h3" style="font-size:14px">Position</p><p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div></div></div></div><div class="row-70"></div><div class="row justify-content-center text-left"><div class="col-sm-6"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px"><strong>Employee Name</strong></h3><p class="text-h3" style="font-size:14px">Position</p><p>One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p></div></div></div><div class="col-sm-6"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px"><strong>Employee Name</strong></h3><p class="text-h3" style="font-size:14px">Position</p><p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p></div></div></div></div></div> </section>',
      attributes: {
        class: 'custom-icon froala-teams-style-8',
        title: 'Style 8',
      },
      category: 'Team Members'
  });






















  // Testimonials
  //Style 1
  bm.add('froala-testimonials-style-1', {
      label: 'Style 1',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row align-items-center justify-content-center"><div class="col-12 col-md-10 col-lg-8"><p class="text-h3" style="font-size:16px"> "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p><p class="text-h3" style="font-size:16px"><strong>Person Name</strong>&nbsp; &nbsp;&nbsp;<em>Co-founder at Company</em></p></div><div class="col-8 col-sm-6 col-md-2 col-lg-3 col-xl-2 mt-4 mt-md-0 ml-auto mr-auto mr-md-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"/></div></div></div> </section>',
      attributes: {
        class: 'custom-icon froala-testimonials-style-1',
        title: 'Style 1',
      },
      category: 'Testimonials Section'
  });


  //Style 2
  bm.add('froala-testimonials-style-2', {
      label: 'Style 2',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block" style="background-image: url(//s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg)"><div class="container"><div class="fdb-box"><div class="row align-items-center justify-content-center"><div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 m-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"/></div><div class="col-12 col-md-8 ml-auto mr-auto mt-4 mt-md-0"><p class="text-h3" style="font-size:16px"> "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."</p><p class="text-h3 mt-4 mt-lg-5" style="font-size:18px"><strong>Person Name</strong></p><p style="font-size:20px"><em>Co-founder at Company</em></p></div></div></div></div> </section>',
      attributes: {
          class: 'custom-icon froala-testimonials-style-2',
          title: 'Style 2',
      },
      category: 'Testimonials Section'
  });


  //Style 3
  bm.add('froala-testimonials-style-3', {
      label: 'Style 3',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col-12"><h3 style="font-size:22px"><strong>You are in good company</strong></h3><div class="mt-5 justify-content-center"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/adobe.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/discovery.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/ebay.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/samsung.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/orange.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/salesforce.svg"></div><div class="mt-2 mt-md-5 justify-content-center"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/cisco.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/apple.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/ibm.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/intel.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/panasonic.svg"></div></div></div></div> </section>',
      attributes: {
        class: 'custom-icon froala-testimonials-style-3',
        title: 'Style 3',
      },
      category: 'Testimonials Section'
  });

  //Style 4
  bm.add('froala-testimonials-style-4', {
      label: 'Style 4',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row align-items-center justify-content-center"><div class="col-md-6"><div class="fdb-box fdb-touch"><p class="text-h3 mb-4" style="font-size:16px">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics."</p><p> <img alt="image" height="50" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <strong class="ml-3">Person Name</strong></p></div></div><div class="col-md-6 mt-4 mt-md-0"><div class="fdb-box fdb-touch"><p class="text-h3 mb-4" style="font-size:16px">"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."</p><p> <img alt="image" height="50" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <strong class="ml-3">Person Name</strong></p></div></div></div></div> </section>',
      attributes: {
          class: 'custom-icon froala-testimonials-style-4',
          title: 'Style 4',
      },
      category: 'Testimonials Section'
  });


  //Style 5
  bm.add('froala-testimonials-style-5', {
      label: 'Style 5',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block" style="background-image: url(//s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_2.svg)"><div class="container"><div class="row align-items-center justify-content-center"><div class="col-lg-9 col-xl-6"><div class="fdb-box"><div class="row"><div class="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"/></div><div class="col-md-8 mt-4 mt-md-0"><p class="text-h3" style="font-size:16px"> "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."</p><p class="text-h3 mt-4 mt-xl-5" style="font-size:17px"><strong>Person Name</strong></p><p style="font-size:18px"><em>Co-founder at Company</em></p></div></div></div></div><div class="col-lg-9 col-xl-6 mt-4 mt-xl-0"><div class="fdb-box"><div class="row"><div class="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"/></div><div class="col-md-8 mt-4 mt-md-0"><p class="text-h3" style="font-size:16px"> "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p><p class="text-h3 mt-4 mt-xl-5" style="font-size:17px"><strong>Person Name</strong></p><p style="font-size:18px"><em>Co-founder at Company</em></p></div></div></div></div></div></div> </section>',
      attributes: {
          class: 'custom-icon froala-testimonials-style-5',
          title: 'Style 5',
      },
      category: 'Testimonials Section'
  });


  //Style 6
  bm.add('froala-testimonials-style-6', {
      label: 'Style 6',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center justify-content-center"><div class="col-lg-8"><h2>You are in good company</h2><p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p><div class="mt-5 justify-content-center"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/adobe.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/discovery.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/ebay.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/samsung.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/orange.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/salesforce.svg"></div></div></div></div> </section>',
      attributes: {
          class: 'custom-icon froala-testimonials-style-6',
          title: 'Style 6',
      },
      category: 'Testimonials Section'
  });


  //Style 7
  bm.add('froala-testimonials-style-7', {
      label: 'Style 7',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block bg-dark"><div class="container"><div class="row justify-content-center text-center"><div class="col"> <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/adobe.svg"> <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/discovery.svg"> <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/ebay.svg"> <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/samsung.svg"> <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/orange.svg"> <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/salesforce.svg"></div></div></div> </section>',
      attributes: {
          class: 'custom-icon froala-testimonials-style-7',
          title: 'Style 7',
      },
      category: 'Testimonials Section'
  });

  //Style 8
  bm.add('froala-testimonials-style-8', {
      label: 'Style 8',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row pb-xl-5 text-center justify-content-center"><div class="col-md-10 col-lg-7"><h1>Testimonials</h1></div></div><div class="row mt-5 justify-content-center"><div class="col-md-8 col-lg-4 col-xl-3 m-auto text-center"> <img alt="image" height="50" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/intel.svg"><p class="text-h3 mt-3" style="font-size:16px">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."</p><p class="text-h3 mt-4 mt-xl-5"><strong>Person Name</strong></p><p>Co-founder at Company</p></div><div class="col-md-8 col-lg-4 col-xl-3 pt-5 pt-lg-0 m-auto text-center"> <img alt="image" height="50" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/apple.svg"><p class="text-h3 mt-3" style="font-size:16px">"Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p><p class="text-h3 mt-4 mt-xl-5"><strong>Person Name</strong></p><p>Co-founder at Company</p></div><div class="col-md-8 col-lg-4 col-xl-3 pt-5 pt-lg-0 m-auto text-center"> <img alt="image" height="50" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/samsung.svg"><p class="text-h3 mt-3" style="font-size:16px">"A small river named Duden flows by their place and supplies it with the necessary regelialia."</p><p class="text-h3 mt-4 mt-xl-5"><strong>Person Name</strong></p><p>Co-founder at Company</p></div></div></div> </section>',
      attributes: {
        class: 'custom-icon froala-testimonials-style-8',
        title: 'Style 8',
      },
      category: 'Testimonials Section'
  });


  //Style 9
  bm.add('froala-testimonials-style-9', {
      label: 'Style 9',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block bg-dark" style="background-image: url(//s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_4.svg)"><div class="container"><div class="row text-center justify-content-center"><div class="col-md-10 col-lg-8 col-xl-7"><h1>Testimonials</h1><p class="text-h3" style="font-size:16px">A small river named Duden flows by their place and supplies it with the necessary regelialia. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p></div></div><div class="row mt-5 align-items-center justify-content-center"><div class="col-md-8 col-lg-4"><div class="fdb-box"><div class="row no-gutters align-items-center"><div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"/></div><div class="col-8 ml-auto"><p> <strong>Person Name</strong><br> <em>Co-founder at Company</em></p></div></div><div class="row mt-4"><div class="col-12"><p class="text-h3" style="font-size:16px"> "Even the all-powerful Pointing has no control about the blind texts it is an unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."</p></div></div></div></div><div class="col-md-8 col-lg-4 mt-4 mt-lg-0"><div class="fdb-box"><div class="row no-gutters align-items-center"><div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"/></div><div class="col-8 ml-auto"><p> <strong>Person Name</strong><br> <em>Co-founder at Company</em></p></div></div><div class="row mt-4"><div class="col-12"><p class="text-h3" style="font-size:16px"> "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p></div></div></div></div><div class="col-md-8 col-lg-4 mt-4 mt-lg-0"><div class="fdb-box"><div class="row no-gutters align-items-center"><div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"/></div><div class="col-8 ml-auto"><p> <strong>Person Name</strong><br> <em>Co-founder at Company</em></p></div></div><div class="row mt-4"><div class="col-12"><p class="text-h3" style="font-size:16px"> "Separated they live in Bookmarksgrove right at the coast of the Semantics, far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."</p></div></div></div></div></div></div> </section>',
      attributes: {
        class: 'custom-icon froala-testimonials-style-9',
        title: 'Style 9',
      },
      category: 'Testimonials Section'
  });


  //Style 10
  bm.add('froala-testimonials-style-10', {
      label: 'Style 10',
      content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel=\'stylesheet\' href=\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/css/froala_blocks.css\'/><style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center justify-content-center"><div class="col-md-10 col-lg-7"><h1>Testimonials</h1></div></div><div class="row mt-5 justify-content-center"><div class="col-md-10 col-lg-3 ml-auto mr-auto text-center"><p class="text-h3 mb-4 mb-lg-5" style="font-size:16px">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."</p><p><img alt="image" height="50" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></p><p class="text-h3" style="font-size:15px"><strong>Person Name</strong></p><p>Co-founder, Company</p></div><div class="col-md-10 col-lg-3 pt-5 pt-lg-0 ml-auto mr-auto text-center"><p class="text-h3 mb-4 mb-lg-5" style="font-size:16px">"Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p><p><img alt="image" height="50" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></p><p class="text-h3" style="font-size:15px"><strong>Person Name</strong></p><p>Co-founder, Company</p></div><div class="col-md-10 col-lg-3 pt-5 pt-lg-0 ml-auto mr-auto text-center"><p class="text-h3 mb-4 mb-lg-5" style="font-size:16px">"A small river named Duden flows by their place and supplies it with the necessary regelialia."</p><p><img alt="image" height="50" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></p><p class="text-h3" style="font-size:15px"><strong>Person Name</strong></p><p>Co-founder, Company</p></div></div></div> </section>',
      attributes: {
        class: 'custom-icon froala-testimonials-style-10',
        title: 'Style 10',
      },
      category: 'Testimonials Section'
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
          'id',
          {
            label: 'API URL',
            name: 'apiurl'
          },
          {
            label: 'Username',
            name: 'apiusername',
            type: 'text'
          },
          {
            label: 'Password',
            name: 'apipassword',
            type: 'password'
          },
          {
            label: 'Items',
            name: 'numberofitems',
            type: 'text'
          },
          {
            label: 'Template',
            name: 'selecttemplate',
            type: 'select',
            // changeProp: 1,
            options: [{value: 'select', name:'Select Template'},{value: 'portrait', name:'Portrait'},{value: 'landscape', name:'Landscape'},{value: 'creative', name:'Creative'}]
          }
        ],
      }),

    },
    {
      isComponent: function(el) {
        if(el.tagName == 'PRODUCTLISTING'){
          return {type: 'productListing'};
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

  // The `input` will be the Component type ID
  comps.addType('popularProducts', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          'id',
          {
            label: 'API URL',
            name: 'apiurl'
          },
          {
            label: 'Username',
            name: 'apiusername',
            type: 'text'
          },
          {
            label: 'Password',
            name: 'apipassword',
            type: 'password'
          },
          {
            label: 'Items',
            name: 'numberofitems',
            type: 'text'
          }
        ],
      }),
    },
    {
      isComponent: function(el) {
        if(el.tagName == 'POPULARPRODUCTS'){
          return {type: 'popularProducts'};
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

  comps.addType('navimenu', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          {
            label: 'Menu Id',
            name: 'menuid'
          }
        ],
      }),

    },
    {
      isComponent: function(el) {
        if(el.tagName == 'NAVIMENU'){
          return {type: 'navimenu'};
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


  comps.addType('Slider', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          {
            label: 'Image1 URL',
            name: 'image1',
            type: 'text'
          },
          {
            label: 'Image2 URL',
            name: 'image2',
            type: 'text'
          },
          {
            label: 'Image3 URL',
            name: 'image3',
            type: 'text'
          },
          {
            label: 'Image4 URL',
            name: 'image4',
            type: 'text'
          },
          {
            label: 'Image5 URL',
            name: 'image5',
            type: 'text'
          }
        ],
      }),
    },
    {
      isComponent: function(el) {
        if(el.tagName == 'SLIDER'){
          return {type: 'Slider'};
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
  comps.addType('Pagination', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          {
            label: 'Name [A-Z] ',
            name: 'nameaz',
            type: 'checkbox'
          },
          {
            label: 'Name [Z-A] ',
            name: 'nameza',
            type: 'checkbox'
          },
          {
            label: 'Price [Low-High] ',
            name: 'pricelh',
            type: 'checkbox'
          },
          {
            label: 'Price [High-Low] ',
            name: 'pricehl',
            type: 'checkbox'
          },
          {
            label: '#Item [A-Z] ',
            name: 'itemaz',
            type: 'checkbox'
          },
          {
            label: '#Item [Z-A] ',
            name: 'itemza',
            type: 'checkbox'
          }
        ],
      }),
    },
    {
      isComponent: function(el) {
        if(el.tagName == 'PAGINATION'){
          return {type: 'Pagination'};
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



  comps.addType('imageanimation', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          {
            label: 'Color 1',
            name: 'color1',
            type: 'color'
          },
          {
            label: 'Color 2',
            name: 'color2',
            type: 'color'
          },
          {
            label: 'Color 3',
            name: 'color3',
            type: 'color'
          },
          {
            label: 'Color 4',
            name: 'color4',
            type: 'color'
          },
          {
            label: 'Color 5',
            name: 'color5',
            type: 'color'
          },
          {
            label: 'Color 6',
            name: 'color6',
            type: 'color'
          }
        ],
      }),

    },
    {
      isComponent: function(el) {
        if(el.tagName == 'IMAGEANIMATION'){
          return {type: 'imageanimation'};
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
          },
          {
            label: 'Username',
            name: 'apiusername',
            type: 'text'
          },
          {
            label: 'Password',
            name: 'apipassword',
            type: 'password'
          },
          {
            label: 'Search',
            name: 'selectadvance_search_Filter',
            type: 'select',
            // changeProp: 1,
            options: [{value: 'select', name:'Select Filter'},{value: 'true', name:'True'},{value: 'false', name:'False'}]
          },
          {
            label: 'category',
            name: 'selectcategory_Filter',
            type: 'select',
            // changeProp: 1,
            options: [{value: 'select', name:'Select Filter'},{value: 'true', name:'True'},{value: 'false', name:'False'}]
          },
          {
            label: 'Prices',
            name: 'selectPrices_Filter',
            type: 'select',
            // changeProp: 1,
            options: [{value: 'select', name:'Select Filter'},{value: 'true', name:'True'},{value: 'false', name:'False'}]
          },
          {
            label: 'Colours',
            name: 'selectColours_Filter',
            type: 'select',
            // changeProp: 1,
            options: [{value: 'select', name:'Select Filter'},{value: 'true', name:'True'},{value: 'false', name:'False'}]
          },
          {
            label: 'Brands',
            name: 'selectBrands_Filter',
            type: 'select',
            // changeProp: 1,
            options: [{value: 'select', name:'Select Filter'},{value: 'true', name:'True'},{value: 'false', name:'False'}]
          },
          {
            label: 'Themes',
            name: 'selecttheme_Filter',
            type: 'select',
            // changeProp: 1,
            options: [{value: 'select', name:'Select Filter'},{value: 'portrait', name:'Portrait'},{value: 'landscape', name:'Landscape'}]
          }
        ],
      }),

    },
    {
      isComponent: function(el) {
        if(el.tagName == 'PRODUCTREACTIVESEARCH'){
          return {type: 'productReactiveSearch'};
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





  comps.addType('globalImage', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          {
            label: 'Data Id',
            name: 'data-id',
            type: 'text'
          }
        ],
      }),

    },
    {
      isComponent: function(el) {
        if(el.tagName == 'GLOBALIMAGE'){
          return {type: 'globalImage'};
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




  comps.addType('globalLink', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          {
            label: 'Data Id',
            name: 'data-id',
            type: 'text'
          }
        ],
      }),

    },
    {
      isComponent: function(el) {
        if(el.tagName == 'GLOBALLINK'){
          return {type: 'globalLink'};
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





  comps.addType('globalHtmlVariable', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          {
            label: 'Data Id',
            name: 'data-id',
            type: 'text'
          }
        ],
      }),

    },
    {
      isComponent: function(el) {
        if(el.tagName == 'GLOBALHTMLVARIABLE'){
          return {type: 'globalHtmlVariable'};
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




  comps.addType('globalTextVariable', {
    // Define the Model
    model: defaultModel.extend({
      // Extend default properties
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        editable: true,
        droppable: true,
        traits: [
          {
            label: 'Data Id',
            name: 'data-id',
            type: 'text'
          }
        ],
      }),

    },
    {
      isComponent: function(el) {
        if(el.tagName == 'GLOBALTEXTVARIABLE'){
          return {type: 'globalTextVariable'};
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









  // // ReUse Component
  // var comps = editor.DomComponents;
  // var defaultType = comps.getType('default');
  // var defaultModel = defaultType.model;
  // var defaultView = defaultType.view;
  // var traits;

  // var folderUrl = localStorage.getItem("folderUrl");
  // var storedTemplates;
  // // Get Config Data
  // let configFileUrl = 'http://localhost:3030/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json';
  // $.getJSON( configFileUrl, function( data ) {  
  //     var configData = JSON.parse(data);
  //     console.log('Config Data:', configData);
  //     storedTemplates = Object.keys(configData[2].layoutOptions[0]);
  // });

  // let arr = [{
  //     "value": "Select_Partial",
  //     "name": "Select Partial"
  // }]

  // let arr_to_print = []

  // setTimeout(function(){
  //   console.log('List of Partials: ', storedTemplates);  

  //   for (var i = 0; i < storedTemplates.length; i++) {
  //       if (storedTemplates[i] == 'Layout' || storedTemplates[i] == 'pages' || storedTemplates[i] == '.git' || storedTemplates[i] == 'main-files' || storedTemplates[i] == 'assets') {
  //           storedTemplates.splice(i, 1)
  //       }
  //   }

    

  //   for (var i = 0; i <= storedTemplates.length - 1; i++) {
  //       var request = new XMLHttpRequest();
  //       request.open("POST", 'http://localhost:3030/get-directory-list?folderUrl=' + folderUrl + '/' + "Partials", false);
  //       request.setRequestHeader("Content-type", "application/json");
  //       request.send();
  //       resp = JSON.parse(request.responseText);

  //       for (let index = 0; index < resp.length; index++) {
  //           request.open("POST", 'http://localhost:3030/get-directory-list?folderUrl=' + folderUrl + '/' + "Partials/" + resp[i], false);
  //           request.setRequestHeader("Content-type", "application/json");
  //           request.send();
  //           resp2 = JSON.parse(request.responseText);          
  //       }
        
  //       if (resp.length != 0) {
  //           if (resp2.length >= 2) {
  //               for (let j = 0; j < resp2.length; j++) {
  //                   arr_to_print.push(resp[i] + '-' + resp2[j])
  //               }
  //           } else {
  //               arr_to_print.push(resp[i] + '-' + resp2)
  //           }
  //       } 
  //   }
  //   for (var i = arr_to_print.length - 1; i >= 0; i--) {
  //       arr.push({
  //           "value": arr_to_print[i],
  //           "name": arr_to_print[i]
  //       })
  //   }
  // },1000);
  
  // // var storedTemplates = JSON.parse(localStorage.getItem("listOfTempaltes"));

  // // console.log('Stored Templates: ', storedTemplates);
  

  // comps.addType('ReUseComponent', {
  //     model: defaultModel.extend({
  //         init() {
  //             this.listenTo(this, 'change:selectPartial', this.doStuff);
  //         },
  //         doStuff() {
  //             let foldername;
  //             let filename;
  //             this.get('traits').each(function (trait) {
  //                 let value_selct = trait.get('value')
  //                 let split = value_selct.split('-')
  //                 foldername = split[0];
  //                 filename = split[1];
  //             });

  //             var folderUrl = localStorage.getItem("folderUrl");
  //             var xhttp = new XMLHttpRequest();
  //             xhttp.open("GET", 'http://localhost:3030/flows-dir-listing/0?path=' + folderUrl + '/Partials/' + foldername + '/' + filename + '.html', false);
  //             xhttp.setRequestHeader("Content-type", "application/json");
  //             xhttp.send();
  //             var response = JSON.parse(xhttp.responseText);
  //             let model = editor.getSelected();
  //             model.components("{{> " + foldername + " id='" + filename + ".html' }}");
  //             // FINAL_RES =  {{> Template id='creative.html' }}
  //             //editor.setComponents(response); // Replace whole page to new component
  //             //editor.addComponents(response);
  //         },
  //         defaults: Object.assign({}, defaultModel.prototype.defaults, {
  //             editable: true,
  //             droppable: true,
  //             traits: [

  //                 {
  //                     label: 'PartialName',
  //                     name: 'selectPartial',
  //                     type: 'select',
  //                     changeProp: 1,
  //                     options: arr
  //                 }
  //             ],
  //         }),
  //     }, {
  //             isComponent: function (el) {
  //                 if (el.tagName == 'REUSECOMPONENT') {
  //                     return {
  //                         type: 'ReUseComponent'
  //                     };
  //                 }
  //             },
  //         }),
  //     view: defaultType.view,
  //     render: function () {
  //         defaultType.view.prototype.render.apply(this, arguments);
  //         this.el.placeholder = 'Text here';
  //         return this;
  //     },
  // });











  // ReUse Component
    // var storedTemplates = JSON.parse(localStorage.getItem("listOfTempaltes"));
     var folderUrl = localStorage.getItem("folderUrl");

    let configFileUrl = 'http://localhost:3030/flows-dir-listing/0?path=' + folderUrl + '/assets/config.json';
    $.getJSON( configFileUrl, function( data ) {  
        var configData = JSON.parse(data);
        console.log('Config Data:', configData);
        storedTemplates = Object.keys(configData[2].layoutOptions[0]);
    });

    var partialOptions = {};

    setTimeout(function(){
      for (var i = 0; i < storedTemplates.length; i++) {
          console.log("value...", storedTemplates[i])
          if (storedTemplates[i] == 'Layout' || storedTemplates[i] == 'pages' || storedTemplates[i] == '.git' || storedTemplates[i] == 'main-files' || storedTemplates[i] == 'assets') {
              storedTemplates.splice(i, 1)
          }
      }

      
      // let arr_to_print = []
      // var folderUrl = localStorage.getItem("folderUrl");
      for (var i = 0; i <= storedTemplates.length - 1; i++) {
          var request = new XMLHttpRequest();
          console.log("folderUrl", folderUrl)
          request.open("POST", 'http://localhost:3030/get-directory-list?folderUrl=' + folderUrl + '/' + "Partials", false);
          request.setRequestHeader("Content-type", "application/json");
          request.send();
          resp = JSON.parse(request.responseText);

          for (let index = 0; index < resp.length; index++) {
              request.open("POST", 'http://localhost:3030/get-directory-list?folderUrl=' + folderUrl + '/' + "Partials/" + resp[i], false);
              request.setRequestHeader("Content-type", "application/json");
              request.send();
              resp2 = JSON.parse(request.responseText);
          }

          if (resp.length != 0 && resp[i] != "Menu") {
              if (resp2.length >= 2) {
                  for (let j = 0; j < resp2.length; j++) {
                      if (j == 0) {
                          partialOptions[resp[i]] = [{ 'name': resp2[j] }]
                      } else{
                          partialOptions[resp[i]].push({ 'name': resp2[j] })
                      }
                  }
              } else {
                  partialOptions[resp[i]] = [{ 'name' : resp2  }]
              }
          }
      }
    },1000);
    

    editor.TraitManager.addType('customConent1', {

        /**
         * Returns the input element
         * @return {HTMLElement}
         */
        getInputEl: function () {
            if (!this.inputEl) {
                var input = document.createElement('select');
                input.setAttribute("id", "Div1");
                input.setAttribute("name", "Div1");
                input.setAttribute("style", "background:#363636");
                $.each(partialOptions, function (key, value) {
                    console.log('================' + key);
                    var group = $('<optgroup label="' + key + '" />');
                    $.each(value, function () {
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
                $('#Div1').on('click', function () {
                    label = $(this.options[this.selectedIndex]).closest('optgroup').prop('label');
                    selected_value =  $("#Div1 option:selected").text();
                    let model = editor.getSelected();

                    model.components("");
                    if(selected_value.match('.hbs')){
                        model.components("{{> " + label + " id='" + selected_value + "' }}");
                    }else{

                    model.components("{{> " + label + " id='" + selected_value + ".html' }}");
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
                    }
                ],
            }),
        }, {
                isComponent: function (el) {
                    if (el.tagName == 'REUSECOMPONENT') {
                        return {
                            type: 'ReUseComponent'
                        };
                    }
                },
            }),
        view: defaultType.view,
        render: function () {
            defaultType.view.prototype.render.apply(this, arguments);
            this.el.placeholder = 'Text here';
            return this;
        },
    });






























    // Form Partial
    editor.TraitManager.addType('customConent2', {

        /**
         * Returns the input element
         * @return {HTMLElement}
         */
        getInputEl: function () {
            if (!this.inputEl) {
                var input = document.createElement('select');
                input.setAttribute("id", "Div1");
                input.setAttribute("name", "Div1");
                input.setAttribute("style", "background:#363636");
                $.each(partialOptions, function (key, value) {
                    console.log('================' + key);
                    var group = $('<optgroup label="' + key + '" />');
                    $.each(value, function () {
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

    comps.addType('formpartial', {
        model: defaultModel.extend({
            init() {
                this.listenTo(this, 'change:selectPartial', this.doStuff);
            },
            doStuff() {
                var label, selected_value;
                var folderUrl = localStorage.getItem("folderUrl");
                $('#Div1').on('click', function () {
                    label = $(this.options[this.selectedIndex]).closest('optgroup').prop('label');
                    selected_value =  $("#Div1 option:selected").text();
                    let model = editor.getSelected();

                    model.components("");
                    if(selected_value.match('.hbs')){
                        model.components("{{> " + label + " id='" + selected_value + "' }}");
                    }else{

                    model.components("{{> " + label + " id='" + selected_value + ".html' }}");
                    }
                });
            },
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                editable: true,
                droppable: true,
                traits: [{
                        label: 'Select Partial',
                        name: 'selectPartial',
                        type: 'customConent2',
                        changeProp: 1,
                    },
                    {
                      label: 'Attribute ID:',
                      name: 'attr-id'
                    }
                ],
            }),
        }, {
                isComponent: function (el) {
                    if (el.tagName == 'FORMPARTIAL') {
                        return {
                            type: 'formpartial'
                        };
                    }
                },
            }),
        view: defaultType.view,
        render: function () {
            defaultType.view.prototype.render.apply(this, arguments);
            this.el.placeholder = 'Text here';
            return this;
        },
    });







  // ReUse Component
  // var comps = editor.DomComponents;
  // var defaultType = comps.getType('default');
  // var defaultModel = defaultType.model;
  // var defaultView = defaultType.view;
  // var traits;
  // var storedTemplates = JSON.parse(localStorage.getItem("listOfTempaltes"));
  // for (var i = 0; i < storedTemplates.length; i++) {
  //     console.log("value...", storedTemplates[i])
  //     if (storedTemplates[i] == 'Layout' || storedTemplates[i] == 'pages' || storedTemplates[i] == 'Menu' || storedTemplates[i] == '.git' || storedTemplates[i] == 'main-files' || storedTemplates[i] == 'assets') {
  //         storedTemplates.splice(i, 1)
  //     }
  // }
  // console.log("++++++++++Hello", storedTemplates)

  // let arr = [{
  //     "value": "Select_Partial",
  //     "name": "Select Partial"
  // }]

  // let arr_to_print = []
  // var folderUrl = localStorage.getItem("folderUrl");
  // for (var i = 0; i <= storedTemplates.length - 1; i++) {
  //     var request = new XMLHttpRequest();
  //     console.log("folderUrl", folderUrl)
  //     request.open("POST", 'http://localhost:3030/get-directory-list?folderUrl=' + folderUrl + '/' + "Partials", false);
  //     request.setRequestHeader("Content-type", "application/json");
  //     request.send();
  //     resp = JSON.parse(request.responseText);
  //     console.log("resp..............", resp)
  //     console.log("resp..............", resp.length)

  //     for (let index = 0; index < resp.length; index++) {
  //         request.open("POST", 'http://localhost:3030/get-directory-list?folderUrl=' + folderUrl + '/' + "Partials/" + resp[i], false);
  //         request.setRequestHeader("Content-type", "application/json");
  //         request.send();
  //         resp2 = JSON.parse(request.responseText);
  //         console.log("resp2....", resp2)

          
  //     }
      
  //     if (resp.length != 0) {
  //         if (resp2.length >= 2) {
  //             for (let j = 0; j < resp2.length; j++) {
  //                 arr_to_print.push(resp[i] + '-' + resp2[j])
  //             }
  //         } else {
  //             arr_to_print.push(resp[i] + '-' + resp2)
  //         }
  //     } 

  //     // if (resp.length != 0) {
  //     //     if (resp.length >= 2) {
  //     //         for (let j = 0; j < resp.length; j++) {
  //     //             arr_to_print.push(storedTemplates[i] + '-' + resp[j])
  //     //         }
  //     //     } else {
  //     //         arr_to_print.push(storedTemplates[i] + '-' + resp)
  //     //     }
  //     // }


  // }
  // console.log("arr_to_print", arr_to_print)
  // for (var i = arr_to_print.length - 1; i >= 0; i--) {
  //     arr.push({
  //         "value": arr_to_print[i],
  //         "name": arr_to_print[i]
  //     })
  // }
  // console.log(arr)

  // comps.addType('ReUseComponent', {
  //     model: defaultModel.extend({
  //         init() {
  //             this.listenTo(this, 'change:selectPartial', this.doStuff);
  //         },
  //         doStuff() {
  //             let foldername;
  //             let filename;
  //             this.get('traits').each(function (trait) {
  //                 let value_selct = trait.get('value')
  //                 let split = value_selct.split('-')
  //                 foldername = split[0];
  //                 filename = split[1];
  //             });

  //             var folderUrl = localStorage.getItem("folderUrl");
  //             var xhttp = new XMLHttpRequest();
  //             xhttp.open("GET", 'http://localhost:3030/flows-dir-listing/0?path=' + folderUrl + '/Partials/' + foldername + '/' + filename + '.html', false);
  //             xhttp.setRequestHeader("Content-type", "application/json");
  //             xhttp.send();
  //             var response = JSON.parse(xhttp.responseText);
  //             let model = editor.getSelected();
  //             model.components("{{> " + foldername + " id='" + filename + ".html' }}"  );
  //             // FINAL_RES =  {{> Template id='creative.html' }}
  //             //editor.setComponents(response); // Replace whole page to new component
  //             //editor.addComponents(response);
  //         },
  //         defaults: Object.assign({}, defaultModel.prototype.defaults, {
  //             editable: true,
  //             droppable: true,
  //             traits: [

  //                 {
  //                     label: 'PartialName',
  //                     name: 'selectPartial',
  //                     type: 'select',
  //                     changeProp: 1,
  //                     options: arr
  //                 }
  //             ],
  //         }),
  //     }, {
  //             isComponent: function (el) {
  //                 if (el.tagName == 'REUSECOMPONENT') {
  //                     return {
  //                         type: 'ReUseComponent'
  //                     };
  //                 }
  //             },
  //         }),
  //     view: defaultType.view,
  //     render: function () {
  //         defaultType.view.prototype.render.apply(this, arguments);
  //         this.el.placeholder = 'Text here';
  //         return this;
  //     },
  // });





    comps.addType('progressBar', {
        // Define the Model
        model: defaultModel.extend({
            // Extend default properties
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                editable: true,
                droppable: true,
                traits: [
                    {
                        label: 'Progress %',
                        name: 'progress',
                        type: 'text'
                    }
                ],
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
            traits: [
              {
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

        },
        {
          isComponent: function(el) {
            if(el.tagName == 'INVOICEDETAIL'){
              return {type: 'InvoiceDetail'};
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


     comps.addType('InvoiceCustomer', {
        // Define the Model
        model: defaultModel.extend({
          // Extend default properties
          defaults: Object.assign({}, defaultModel.prototype.defaults, {
            editable: true,
            droppable: true,
            traits: [
              {
                label: 'API URL Customer',
                name: 'apiurl'
              //  options: [{value: 'select', name:'Select Menu Type'},{value: 'mini', name:'Mini Top'},{value: 'mainNavigation', name:'Main Navigation'},{value: 'footerNav', name:'Footer Nvigation'}]
              }
            ],
          }),

        },
        {
          isComponent: function(el) {
            if(el.tagName == 'INVOICECUSTOMER'){
              return {type: 'InvoiceCustomer'};
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

     comps.addType('InvoiceFilter', {
        // Define the Model
        model: defaultModel.extend({
          // Extend default properties
          defaults: Object.assign({}, defaultModel.prototype.defaults, {
            editable: true,
            droppable: true,
            traits: [
              {
                label: 'API URL Filter',
                name: 'apiurl'
              //  options: [{value: 'select', name:'Select Menu Type'},{value: 'mini', name:'Mini Top'},{value: 'mainNavigation', name:'Main Navigation'},{value: 'footerNav', name:'Footer Nvigation'}]
              }
            ],
          }),

        },
        {
          isComponent: function(el) {
            if(el.tagName == 'INVOICEFILTER'){
              return {type: 'InvoiceFilter'};
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

     comps.addType('InvoicePayment', {
        // Define the Model
        model: defaultModel.extend({
          // Extend default properties
          defaults: Object.assign({}, defaultModel.prototype.defaults, {
            editable: true,
            droppable: true,
            traits: [
              {
                label: 'API URL Payment',
                name: 'apiurl'
              //  options: [{value: 'select', name:'Select Menu Type'},{value: 'mini', name:'Mini Top'},{value: 'mainNavigation', name:'Main Navigation'},{value: 'footerNav', name:'Footer Nvigation'}]
              }
            ],
          }),

        },
        {
          isComponent: function(el) {
            if(el.tagName == 'INVOICEPAYMENT'){
              return {type: 'InvoicePayment'};
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

     comps.addType('productFilters', {
        // Define the Model
        model: defaultModel.extend({
          // Extend default properties
          defaults: Object.assign({}, defaultModel.prototype.defaults, {
            editable: true,
            droppable: true,
            traits: [
              {
                label: 'API URL product filter',
                name: 'apiurl'
              //  options: [{value: 'select', name:'Select Menu Type'},{value: 'mini', name:'Mini Top'},{value: 'mainNavigation', name:'Main Navigation'},{value: 'footerNav', name:'Footer Nvigation'}]
              }
            ],
          }),

        },
        {
          isComponent: function(el) {
            if(el.tagName == 'PRODUCTFILTERS'){
              return {type: 'productFilters'};
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

     comps.addType('productCategory', {
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
              //  options: [{value: 'select', name:'Select Menu Type'},{value: 'mini', name:'Mini Top'},{value: 'mainNavigation', name:'Main Navigation'},{value: 'footerNav', name:'Footer Nvigation'}]
              },
               {
                label: 'Username',
                name: 'apiusername',
                type: 'text'
              },
              {
                label: 'Password',
                name: 'apipassword',
                type: 'password'
              }
            ],
          }),

        },
        {
          isComponent: function(el) {
            if(el.tagName == 'PRODUCTCATEGORY'){
              return {type: 'productCategory'};
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

     comps.addType('productColors', {
        // Define the Model
        model: defaultModel.extend({
          // Extend default properties
          defaults: Object.assign({}, defaultModel.prototype.defaults, {
            editable: true,
            droppable: true,
            traits: [
              {
                label: 'API URL',
                name: 'apiurl_color'
              },
               {
                label: 'Username',
                name: 'apiusername_color',
                type: 'text'
              },
              {
                label: 'Password',
                name: 'apipassword_color',
                type: 'password'
              }
            ],
          }),

        },
        {
          isComponent: function(el) {
            if(el.tagName == 'PRODUCTCOLORS'){
              return {type: 'productColors'};
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

     comps.addType('productBrand', {
        // Define the Model
        model: defaultModel.extend({
          // Extend default properties
          defaults: Object.assign({}, defaultModel.prototype.defaults, {
            editable: true,
            droppable: true,
            traits: [
              {
                label: 'API URL',
                name: 'apiurl_brand'
              },
               {
                label: 'Username',
                name: 'apiusername_brand',
                type: 'text'
              },
              {
                label: 'Password',
                name: 'apipassword_brand',
                type: 'password'
              }
            ],
          }),

        },
        {
          isComponent: function(el) {
            if(el.tagName == 'PRODUCTBRAND'){
              return {type: 'productBrand'};
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

     comps.addType('productTags', {
        // Define the Model
        model: defaultModel.extend({
          // Extend default properties
          defaults: Object.assign({}, defaultModel.prototype.defaults, {
            editable: true,
            droppable: true,
            traits: [
              {
                label: 'API URL',
                name: 'apiurl_brand'
              },
               {
                label: 'Username',
                name: 'apiusername_brand',
                type: 'text'
              },
              {
                label: 'Password',
                name: 'apipassword_brand',
                type: 'password'
              }
            ],
          }),

        },
        {
          isComponent: function(el) {
            if(el.tagName == 'PRODUCTTAGS'){
              return {type: 'productTags'};
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




})