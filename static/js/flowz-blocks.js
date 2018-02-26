grapesjs.plugins.add('flowz-blocks', function(editor, options) {
  var bm = editor.BlockManager;
  // Flowz Components

  // <link href="https://raw.githubusercontent.com/froala/design-blocks/master/dist/css/froala_blocks.css" rel="stylesheet" type="text/css">

  // Call-To-Action
  // Style-1
  bm.add('froala-callToAction-style-1', {
    label: 'Style 1',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .style-8{background-image: url(\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_c_1.svg\');}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .style-10{background-image: url(\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_1.svg\');}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .style-12{background-image: url(\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/alt_wide_2.svg\');}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .style-16{background-image: url(\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_c_1.svg\');}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .style-17{background-image: url(\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_0.svg\'); }</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .style-22{ background-image: url(\'https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/alt_wide_1.svg\'); }</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-2{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_0.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-4{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_0.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contact-style-7{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contents-style-20{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_c_1.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contents-style-21{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/alt_wide_2.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contents-style-26{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_c_1.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contents-style-27{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_c_2.svg)}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contents-style-28{background: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_bg.jpg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contents-style-33{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_0.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contents-style-34{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;} .contents-style-34{background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg);}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>' +
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
    content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><header> <div class="container text-center"> <nav class="navbar"> <a class="ml-auto mr-auto" href="https://www.flowz.com"> <img src="https://github.com/froala/design-blocks/blob/master/dist/imgs/img_logo.png?raw=true" height="30" alt="image"> </a> </nav> </div></header>',
    attributes: {
      class: 'custom-icon headers-icon froala-headers-style-1',
      title: 'Header-1'
    },
    category: 'Headers'
  });

  //Style 2 
  bm.add('froala-header-style-2', {
    label: 'Style 2',
    content: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><header> <div class="container"> <nav class="navbar navbar-expand-md"> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav0" aria-controls="navbarNav0" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav0"> <ul class="navbar-nav mr-auto ml-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Team</a> </li></ul> </div></nav> </div></header>',
    attributes: {
      class: 'custom-icon headers-icon froala-headers-style-2',
      title: 'Flowz-Header-layout-2'
    },
    category: 'Headers'
  });

  //Style 3 
  bm.add('froala-header-style-3', {
    label: 'Style 3',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style><header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-md no-gutters"> <div class="col-3 text-left"> <a href="https://www.flowz.com"> <img src="https://github.com/froala/design-blocks/blob/master/dist/imgs/img_logo.png?raw=true" height="30" alt="image"> </a> </div><button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-4" aria-controls="navbarNav7" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse navbar-collapse-4 justify-content-center col-md-6" id="navbarNav7"> <ul class="navbar-nav justify-content-center"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Team</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Contact</a> </li></ul> </div><div class="collapse navbar-collapse navbar-collapse-4"> <ul class="navbar-nav ml-auto justify-content-end"> <li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Log In</a> </li></ul> <a class="btn ml-md-3" href="https://www.flowz.com">Register</a> </div></nav> </div></header>',
    attributes: {
      class: 'custom-icon headers-icon froala-headers-style-3',
      title: 'Flowz-Header-layout-3'
    },
    category: 'Headers'
  });


  //Style 4 
  bm.add('froala-header-style-4', {
    label: 'Style 4',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style><header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-md no-gutters"> <div class="col-2 text-left"> <a href="https://www.flowz.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </div><button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-3" aria-controls="navbarNav6" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse justify-content-center col-md-8 navbar-collapse-3"> <ul class="navbar-nav justify-content-center"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Team</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Contact</a> </li></ul> </div><div class="collapse navbar-collapse justify-content-end col-md-2 navbar-collapse-3"> <ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Log In</a> </li></ul> </div></nav> </div></header>',
    attributes: {
      class: 'custom-icon headers-icon froala-headers-style-4',
      title: 'Flowz-Header-layout-4'
    },
    category: 'Headers'
  });

  //Style 5 
  // bm.add('froala-header-style-5', {
  //   label: 'Style 5',
  //   content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-lg"> <a class="navbar-brand" href="https://www.flowz.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav13" aria-controls="navbarNav13" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav13"> <ul class="navbar-nav mr-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Team</a> </li></ul> <ul class="navbar-nav justify-content-end ml-auto"> <li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Docs</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Contact</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Log In</a> </li></ul> <a class="btn btn-white ml-md-3" href="https://www.flowz.com">Button</a> </div></nav> </div></header>',
  //   attributes: {
  //     class: 'custom-icon headers-icon froala-headers-style-5',
  //     title: 'Flowz-Header-layout-5'
  //   },
  //   category: 'Headers'
  // });


  //Style 6 
  bm.add('froala-header-style-6', {
    label: 'Style 6',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-md no-gutters"> <div class="col-2 text-left"> <a href="https://www.flowz.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </div><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav12" aria-controls="navbarNav12" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse justify-content-center col-md-8" id="navbarNav12"> <ul class="navbar-nav justify-content-center"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Team</a> </li></ul> </div><ul class="navbar-nav col-2 justify-content-end d-none d-md-flex"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-facebook"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-twitter"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-github"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-google"></i></a> </li></ul> </nav> </div></header>',
    attributes: {
      class: 'custom-icon headers-icon froala-headers-style-6',
      title: 'Flowz-Header-layout-6'
    },
    category: 'Headers'
  });


  //Style 7 
  bm.add('froala-header-style-7', {
    label: 'Style 7',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-md no-gutters"> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav10" aria-controls="navbarNav10" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="col-4 col-sm-2 text-center order-lg-6"> <a href="https://www.flowz.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </div><div class="collapse navbar-collapse col-12 col-md-5 order-lg-1" id="navbarNav10"> <ul class="navbar-nav col-5"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Team</a> </li></ul> </div><ul class="navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex"> <li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-twitter"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-github"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-slack"></i></a> </li></ul> </nav> </div></header>',
    attributes: {
      class: 'custom-icon headers-icon froala-headers-style-7',
      title: 'Flowz-Header-layout-7'
    },
    category: 'Headers'
  });

  //Style 8 
  bm.add('froala-header-style-8', {
    label: 'Style 8',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>   <header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-md"> <a class="navbar-brand" href="https://www.flowz.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav11" aria-controls="navbarNav11" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav11"> <ul class="navbar-nav ml-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Team</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">About</a> </li></ul> <a class="btn btn-white btn-empty ml-md-3" href="https://www.flowz.com">Button</a> </div></nav> </div></header>',
    attributes: {
      class: 'custom-icon headers-icon froala-headers-style-8',
      title: 'Flowz-Header-layout-8'
    },
    category: 'Headers'
  });

  //Style 9 
  // bm.add('froala-header-style-9', {
  //   label: 'Style 9',
  //   content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-md"> <a class="navbar-brand" href="https://www.flowz.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav9" aria-controls="navbarNav9" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav9"> <ul class="navbar-nav mr-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Team</a> </li></ul> <ul class="navbar-nav justify-content-end d-none d-lg-flex ml-md-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-slack"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-twitter"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-github"></i></a> </li></ul> <a class="btn btn-white btn-empty ml-md-3" href="https://www.flowz.com">Button</a> </div></nav> </div></header>',
  //   attributes: {
  //     class: 'custom-icon headers-icon froala-headers-style-9',
  //     title: 'Flowz-Header-layout-9'
  //   },
  //   category: 'Headers'
  // });

  //Style 10 
  // bm.add('froala-header-style-10', {
  //   label: 'Style 10',
  //   content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <header class="bg-dark"> <div class="container"> <nav class="navbar navbar-expand-md"> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav8" aria-controls="navbarNav8" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav8"> <ul class="navbar-nav mr-auto ml-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Team</a> </li></ul> </div></nav> </div></header>',
  //   attributes: {
  //     class: 'custom-icon headers-icon froala-headers-style-10',
  //     title: 'Flowz-Header-layout-10'
  //   },
  //   category: 'Headers'
  // });


  //Style 11 
  // bm.add('froala-header-style-11', {
  //   label: 'Style 11',
  //   content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <header class="bg-dark"><div class="container text-center"><nav class="navbar"><a class="ml-auto mr-auto" href="https://www.flowz.com"><img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"></a></nav></div></header>',
  //   attributes: {
  //     class: 'custom-icon headers-icon froala-headers-style-11',
  //     title: 'Flowz-Header-layout-11'
  //   },
  //   category: 'Headers'
  // });

  //Style 12 
  bm.add('froala-header-style-12', {
    label: 'Style 12',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <header class="bg-dark"> <div class="container"> <nav class="navbar"> <a href="https://www.flowz.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </nav> </div></header>',
    attributes: {
      class: 'custom-icon headers-icon froala-headers-style-12',
      title: 'Flowz-Header-layout-12'
    },
    category: 'Headers'
  });


  //Style 13 
  bm.add('froala-header-style-13', {
    label: 'Style 13',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>   <header> <div class="container"> <nav class="navbar navbar-expand-md no-gutters"> <div class="col-3 text-left"> <a href="https://www.flowz.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </div><button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-2" aria-controls="navbarNav7" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse navbar-collapse-2 justify-content-center col-md-6" id="navbarNav7"> <ul class="navbar-nav justify-content-center"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Team</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Contact</a> </li></ul> </div><div class="collapse navbar-collapse navbar-collapse-2"> <ul class="navbar-nav ml-auto justify-content-end"> <li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Log In</a> </li></ul> <a class="btn ml-md-3" href="https://www.flowz.com">Register</a> </div></nav> </div></header>',
    attributes: {
      class: 'custom-icon headers-icon froala-headers-style-13',
      title: 'Flowz-Header-layout-13'
    },
    category: 'Headers'
  });

  //Style 14 
  bm.add('froala-header-style-14', {
    label: 'Style 14',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>    <header> <div class="container"> <nav class="navbar navbar-expand-md no-gutters"> <div class="col-2 text-left"> <a href="https://www.flowz.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </div><button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-1" aria-controls="navbarNav6" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse justify-content-center col-md-8 navbar-collapse-1"> <ul class="navbar-nav justify-content-center"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Team</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Contact</a> </li></ul> </div><div class="collapse navbar-collapse justify-content-end col-md-2 navbar-collapse-1"> <ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Log In &rarr;</a> </li></ul> </div></nav> </div></header>',
    attributes: {
      class: 'custom-icon headers-icon froala-headers-style-14',
      title: 'Flowz-Header-layout-14'
    },
    category: 'Headers'
  });


  //Style 15 
  bm.add('froala-header-style-15', {
    label: 'Style 15',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>    <header> <div class="container"> <nav class="navbar navbar-expand-lg"> <a class="navbar-brand" href="https://www.flowz.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav5" aria-controls="navbarNav5" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav5"> <ul class="navbar-nav mr-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Team</a> </li></ul> <ul class="navbar-nav justify-content-end ml-auto"> <li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Docs</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Contact</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Log In</a> </li></ul> <a class="btn ml-md-3" href="https://www.flowz.com">Button</a> </div></nav> </div></header>',
    attributes: {
      class: 'custom-icon headers-icon froala-headers-style-15',
      title: 'Flowz-Header-layout-15'
    },
    category: 'Headers'
  });

  //Style 16 
  bm.add('froala-header-style-16', {
    label: 'Style 16',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>    <header> <div class="container"> <nav class="navbar navbar-expand-md no-gutters"> <div class="col-2 text-left"> <a href="https://www.flowz.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </div><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav4" aria-controls="navbarNav4" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse justify-content-center col-md-8" id="navbarNav4"> <ul class="navbar-nav justify-content-center"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Team</a> </li></ul> </div><ul class="navbar-nav col-2 justify-content-end d-none d-md-flex"> <li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-facebook"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-twitter"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-github"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-google"></i></a> </li></ul> </nav> </div></header>',
    attributes: {
      class: 'custom-icon headers-icon froala-headers-style-16',
      title: 'Flowz-Header-layout-16'
    },
    category: 'Headers'
  });

  //Style 17 
  bm.add('froala-header-style-17', {
    label: 'Style 17',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>     <header> <div class="container"> <nav class="navbar navbar-expand-md"> <a class="navbar-brand" href="https://www.flowz.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav3" aria-controls="navbarNav3" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav3"> <ul class="navbar-nav ml-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Team</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">About</a> </li></ul> <a class="btn btn-empty ml-md-3" href="https://www.flowz.com">Button</a> </div></nav> </div></header>',
    attributes: {
      class: 'custom-icon headers-icon froala-headers-style-17',
      title: 'Flowz-Header-layout-17'
    },
    category: 'Headers'
  });

  //Style 18 
  bm.add('froala-header-style-18', {
    label: 'Style 18',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>      <header> <div class="container"> <nav class="navbar navbar-expand-md no-gutters"> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="col-4 col-md-2 text-right text-md-center order-lg-6"> <a href="https://www.flowz.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </div><div class="collapse navbar-collapse col-12 col-md-5 order-lg-1" id="navbarNav2"> <ul class="navbar-nav col-5"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Team</a> </li></ul> </div><ul class="navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex"> <li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-twitter"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-github"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-slack"></i></a> </li></ul> </nav> </div></header>',
    attributes: {
      class: 'custom-icon headers-icon froala-headers-style-18',
      title: 'Flowz-Header-layout-18'
    },
    category: 'Headers'
  });

  //Style 19 
  bm.add('froala-header-style-19', {
    label: 'Style 19',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>      <header> <div class="container"> <nav class="navbar navbar-expand-md"> <a class="navbar-brand" href="https://www.flowz.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav1"> <ul class="navbar-nav mr-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Team</a> </li></ul> <ul class="navbar-nav justify-content-end d-none d-lg-flex ml-md-auto"> <li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-slack"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-twitter"></i></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com"><i class="fa fa-github"></i></a> </li></ul> <a class="btn btn-empty ml-md-3" href="https://www.flowz.com">Button</a> </div></nav> </div></header>',
    attributes: {
      class: 'custom-icon headers-icon froala-headers-style-19',
      title: 'Flowz-Header-layout-19'
    },
    category: 'Headers'
  });

  //Style 20 
  bm.add('froala-header-style-20', {
    label: 'Style 20',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>      <header> <div class="container"> <nav class="navbar navbar-expand-md"> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav0" aria-controls="navbarNav0" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNav0"> <ul class="navbar-nav mr-auto ml-auto"> <li class="nav-item active"> <a class="nav-link" href="https://www.flowz.com">Home <span class="sr-only">(current)</span></a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Pricing</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Team</a> </li></ul> </div></nav> </div></header>',
    attributes: {
      class: 'custom-icon headers-icon froala-headers-style-20',
      title: 'Flowz-Header-layout-20'
    },
    category: 'Headers'
  });

  //Style 21 
  bm.add('froala-header-style-21', {
    label: 'Style 21',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>   <header> <div class="container text-center"> <nav class="navbar"> <a class="ml-auto mr-auto" href="https://www.flowz.com"> <img src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="30" alt="image"> </a> </nav> </div></header>',
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style><footer class="fdb-block footer-small"> <div class="container"> <div class="row text-center"> <div class="col"> <p>&copy; 2017 Flowz. All Rights Reserved</p></div></div></div></footer>',
    attributes: {
      class: 'custom-icon froala-footers-style-1',
      title: 'Style 1'
    },
    category: 'Footers'
  });

  // Style 2
  bm.add('froala-footers-style-2', {
    label: 'Style 2',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style><footer class="fdb-block footer-small bg-dark"> <div class="container"> <div class="row align-items-center"> <div class="col-12 col-md-8"> <ul class="nav justify-content-center justify-content-md-start"> <li class="nav-item"> <a class="nav-link active" href="https://www.flowz.com">Home</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Terms</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">About</a> </li></ul> </div><div class="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right"> &copy; 2017 Flowz. All Rights Reserved </div></div></div></footer>',
    attributes: {
      class: 'custom-icon froala-footers-style-2',
      title: 'Style 2'
    },
    category: 'Footers'
  });

  // Style 3
  bm.add('froala-footers-style-3', {
    label: 'Style 3',
    content: ' <footer class="fdb-block footer-small"> <style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <div class="container"> <div class="row text-center align-items-center"> <div class="col-12 col-md-8"> <ul class="nav justify-content-center justify-content-md-start align-items-center"> <li class="nav-item"> <a class="nav-link active" href="https://www.flowz.com"> <img alt="image" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="40" /> </a> </li> <li class="w-100 d-block d-sm-none"></li> <li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li> <li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Terms</a> </li> <li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">About</a> </li> </ul> </div> <div class="col-12 col-md-4 mt-4 mt-md-0 text-md-right"> &copy; 2013-2017 Flowz </div> </div> </div> </footer>',
    attributes: {
      class: 'custom-icon froala-footers-style-3',
      title: 'Style 3'
    },
    category: 'Footers'
  });

  // Style 4
  bm.add('froala-footers-style-4', {
    label: 'Style 4',
    content: '<footer class="fdb-block footer-small"> <style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <div class="container"> <div class="row text-center align-items-center"> <div class="col-12 col-sm-6 col-md-4 text-sm-left"> <img alt="image" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="40" /> </div> <div class="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0 text-center text-sm-right text-md-center"> &copy; 2013-2017 Flowz </div> <div class="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right"> <a href="https://www.flowz.com"><i class="fa fa-twitter" aria-hidden="true"></i></a> <a href="https://www.flowz.com"><i class="fa fa-facebook" aria-hidden="true"></i></a> <a href="https://www.flowz.com"><i class="fa fa-instagram" aria-hidden="true"></i></a> <a href="https://www.flowz.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a> <a href="https://www.flowz.com"><i class="fa fa-google" aria-hidden="true"></i></a> </div> </div> </div> </footer>',
    attributes: {
      class: 'custom-icon froala-footers-style-4',
      title: 'Style 4'
    },
    category: 'Footers'
  });

  // Style 5
  bm.add('froala-footers-style-5', {
    label: 'Style 5',
    content: '<footer class="fdb-block footer-small"><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <div class="container"> <div class="row align-items-center"> <div class="col-12 col-md-6"> <ul class="nav justify-content-center justify-content-md-start"> <li class="nav-item"> <a class="nav-link active" href="https://www.flowz.com">Home</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Terms</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">About</a> </li></ul> </div><div class="col-12 col-md-6 mt-4 mt-md-0 text-center text-md-right"> <a href="https://www.flowz.com"><i class="fa fa-twitter" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.flowz.com"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.flowz.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.flowz.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.flowz.com"><i class="fa fa-google" aria-hidden="true"></i></a> </div></div></div></footer>',
    attributes: {
      class: 'custom-icon froala-footers-style-5',
      title: 'Style 5'
    },
    category: 'Footers'
  });

  // Style 6
  bm.add('froala-footers-style-6', {
    label: 'Style 6',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <footer class="fdb-block footer-small bg-dark"> <div class="container"> <div class="row text-center align-items-center"> <div class="col"> <ul class="nav justify-content-center"> <li class="nav-item"> <a class="nav-link active" href="https://www.flowz.com">Home</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Privacy Policy</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Terms</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">About</a> </li></ul> <p class="text-h5 mt-5">&copy; 2013-2017 Flowz</p></div></div></div></footer>',
    attributes: {
      class: 'custom-icon froala-footers-style-6',
      title: 'Style 6'
    },
    category: 'Footers'
  });

  // Style 7
  bm.add('froala-footers-style-7', {
    label: 'Style 7',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <footer class="fdb-block footer-small"> <div class="container"> <div class="row text-center align-items-center"> <div class="col-12 col-lg-2 text-lg-left"> <img alt="image" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="40"> </div><div class="col mt-4 mt-lg-0 text-center"> <ul class="nav justify-content-center"> <li class="nav-item"> <a class="nav-link active" href="https://www.flowz.com">Home</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Privacy Policy</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Terms</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">About</a> </li></ul> </div><div class="col-12 col-lg-2 mt-4 mt-lg-0 text-lg-right"> <a href="https://www.flowz.com"><i class="fa fa-twitter" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.flowz.com"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.flowz.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.flowz.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.flowz.com"><i class="fa fa-google" aria-hidden="true"></i></a> </div></div><div class="row mt-4"> <div class="col text-center"> &copy; 2017 Flowz. All Rights Reserved </div></div></div></footer>',
    attributes: {
      class: 'custom-icon froala-footers-style-7',
      title: 'Style 7'
    },
    category: 'Footers'
  });

  // Style 8
  // bm.add('froala-footers-style-8', {
  //   label: 'Style 8',
  //   content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <footer class="fdb-block footer-small"> <div class="container"> <div class="row align-items-center"> <div class="col-12 col-md-6"> <ul class="nav justify-content-center justify-content-md-start"> <li class="nav-item"> <a class="nav-link active" href="https://www.flowz.com">Home</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Features</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Terms</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">About</a> </li></ul> </div><div class="col mt-4 mt-md-0 text-center text-md-right"> <a href="https://www.flowz.com" class="btn">Contact Us</a> </div></div></div></footer>',
  //   attributes: {
  //     class: 'custom-icon froala-footers-style-8',
  //     title: 'Style 8'
  //   },
  //   category: 'Footers'
  // });

  // Style 9
  // bm.add('froala-footers-style-9', {
  //   label: 'Style 9',
  //   content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <footer class="fdb-block footer-large"> <div class="container"> <div class="row align-items-top text-center"> <div class="col-12 col-sm-6 col-md-4 col-lg-3 text-sm-left"> <h3><strong>Group 1</strong></h3> <nav class="nav flex-column"> <a class="nav-link active" href="https://www.flowz.com">Home</a> <a class="nav-link" href="https://www.flowz.com">Features</a> <a class="nav-link" href="https://www.flowz.com">Pricing</a> <a class="nav-link" href="https://www.flowz.com">Team</a> <a class="nav-link" href="https://www.flowz.com">Contact Us</a> </nav> </div><div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mt-sm-0 text-sm-left"> <h3><strong>Group 2</strong></h3> <nav class="nav flex-column"> <a class="nav-link active" href="https://www.flowz.com">Privacy Policy</a> <a class="nav-link" href="https://www.flowz.com">Terms</a> <a class="nav-link" href="https://www.flowz.com">FAQ</a> <a class="nav-link" href="https://www.flowz.com">Support</a> </nav> </div><div class="col-12 col-md-4 col-lg-3 text-md-left mt-5 mt-md-0"> <h3><strong>About Us</strong></h3> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div><div class="col-12 col-lg-2 ml-auto text-lg-left mt-4 mt-lg-0"> <h3><strong>Follow Us</strong></h3> <p class="text-h3"> <a href="https://www.flowz.com"><i class="fa fa-twitter" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.flowz.com"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.flowz.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.flowz.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a>&nbsp;&nbsp; <a href="https://www.flowz.com"><i class="fa fa-google" aria-hidden="true"></i></a> </p></div></div><div class="row mt-3"> <div class="col text-center"> &copy; 2017 Flowz. All Rights Reserved </div></div></div></footer>',
  //   attributes: {
  //     class: 'custom-icon froala-footers-style-9',
  //     title: 'Style 9'
  //   },
  //   category: 'Footers'
  // });

  // Style 10
  // bm.add('froala-footers-style-10', {
  //   label: 'Style 10',
  //   content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <footer class="fdb-block footer-large bg-dark"> <div class="container"> <div class="row align-items-top text-center text-md-left"> <div class="col-12 col-sm-6 col-md-4"> <h3><strong>Country A</strong></h3> <p>Street Address 52<br>Contact Name</p><p>+44 827 312 5002</p><p><a href="https://www.flowz.com">countrya@amazing.com</a></p></div><div class="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0"> <h3><strong>Country B</strong></h3> <p>Street Address 100<br>Contact Name</p><p>+13 827 312 5002</p><p><a href="https://www.flowz.com">countryb@amazing.com</a></p></div><div class="col-12 col-md-4 mt-5 mt-md-0 text-md-left"> <h3><strong>About Us</strong></h3> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div></div><div class="row mt-5"> <div class="col text-center"> &copy; 2017 Flowz. All Rights Reserved </div></div></div></footer>',
  //   attributes: {
  //     class: 'custom-icon froala-footers-style-10',
  //     title: 'Style 10'
  //   },
  //   category: 'Footers'
  // });

  // Style 11
  bm.add('froala-footers-style-11', {
    label: 'Style 11',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <footer class="fdb-block footer-small"> <div class="container"> <div class="row align-items-center text-center"> <div class="col-12 col-lg-4 text-lg-left"> &copy; 2017 Flowz </div><div class="col-12 col-lg-4 mt-4 mt-lg-0"> <img alt="image" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_logo.png" height="40"> </div><div class="col-12 col-lg-4 text-lg-right mt-4 mt-lg-0"> <ul class="nav justify-content-lg-end justify-content-center"> <li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Privacy</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">Terms</a> </li><li class="nav-item"> <a class="nav-link" href="https://www.flowz.com">About</a> </li></ul> </div></div></div></footer>',
    attributes: {
      class: 'custom-icon froala-footers-style-11',
      title: 'Style 11'
    },
    category: 'Footers'
  });

  // Style 12
  bm.add('froala-footers-style-12', {
    label: 'Style 12',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <footer class="fdb-block footer-large"> <div class="container"> <div class="row text-center"> <div class="col"> <h3>Company Name</h3> <p>70 Bowman St.<br>South Windsor, CT 06074</p><p>USA</p><p>+13 827 312 5002</p></div></div><div class="row mt-4"> <div class="col text-center"> <p class="text-h3"> <a href="https://www.flowz.com"><i class="fa fa-twitter" aria-hidden="true"></i></a> &nbsp; &nbsp; <a href="https://www.flowz.com"><i class="fa fa-facebook" aria-hidden="true"></i></a> &nbsp; &nbsp; <a href="https://www.flowz.com"><i class="fa fa-instagram" aria-hidden="true"></i></a> &nbsp; &nbsp; <a href="https://www.flowz.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a> &nbsp; &nbsp; <a href="https://www.flowz.com"><i class="fa fa-google" aria-hidden="true"></i></a> </p></div></div></div></footer>',
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
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style><div> <section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-8 col-lg-6 text-center"> <h1>Subscribe</h1> <div class="input-group mt-4 mb-4"> <input type="text" class="form-control" placeholder="Enter your email address"> <span class="input-group-btn"> <button class="btn" type="button">Submit</button> </span> </div><p class="text-h4">Find us on <a href="https://www.flowz.com">Facebook</a> and <a href="https://www.flowz.com">Twitter</a>.</p></div></div></div></section><div>',
    attributes: {
      class: 'custom-icon froala-forms-style-1',
      title: 'Style 1'
    },
    category: 'Designed Forms'
  });

  // Style 2
  bm.add('froala-forms-style-2', {
    label: 'Style 2',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <section class="fdb-block" style="background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder//imgs/bg_2.svg)"> <div class="container"> <div class="fdb-box"> <div class="row justify-content-center align-items-center"> <div class="col-12 col-lg-6"> <h2>Join us!</h2> <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p></div><div class="col-12 col-lg-5 text-center"> <div class="input-group mt-4"> <input type="text" class="form-control" placeholder="Enter your email address"> <span class="input-group-btn"> <button class="btn" type="button">Submit</button> </span> </div></div></div></div></div></section>',
    attributes: {
      class: 'custom-icon froala-forms-style-2',
      title: 'Style 2'
    },
    category: 'Designed Forms'
  });

  // Style 3
  bm.add('froala-forms-style-3', {
    label: 'Style 3',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-lg-10 col-xl-8 text-center"> <div class="row"> <div class="col"> <h1>Register</h1> <p class="text-h3">When she reached the first hills, she had a last view back on the skyline of her hometown.</p></div></div><div class="row align-items-center"> <div class="col-12 col-md-5 mt-4"> <input type="text" class="form-control" placeholder="Email"> </div><div class="col-12 col-md-5 mt-4"> <input type="password" class="form-control" placeholder="Password"> </div><div class="col-12 col-md-2 mt-4"> <button class="btn" type="button">Submit</button> </div></div></div></div></div></section>',
    attributes: {
      class: 'custom-icon froala-forms-style-3',
      title: 'Style 3'
    },
    category: 'Designed Forms'
  });


  // Style 4
  bm.add('froala-forms-style-4', {
    label: 'Style 4',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <section class="fdb-block" style="background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder//imgs/alt_wide_1.svg)"> <div class="container"> <div class="row"> <div class="col-12 col-md-8 col-lg-7 col-xl-5 text-left"> <div class="row"> <div class="col"> <h1>Sign Up</h1> <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p></div></div><div class="row"> <div class="col mt-4"> <input type="text" class="form-control" placeholder="Email"> </div></div><div class="row mt-4"> <div class="col"> <input type="password" class="form-control" placeholder="Password"> </div></div><div class="row mt-4"> <div class="col"> <button class="btn" type="button">Submit</button> </div></div></div></div></div></section>',
    attributes: {
      class: 'custom-icon froala-forms-style-4',
      title: 'Style 4'
    },
    category: 'Designed Forms'
  });

  // Style 5
  bm.add('froala-forms-style-5', {
    label: 'Style 5',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style>  <section class="fdb-block" style="background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_4.svg)"> <div class="container"> <div class="row justify-content-end"> <div class="col-12 col-md-8 col-lg-6 col-xl-5 text-left"> <div class="fdb-box"> <div class="row"> <div class="col"> <h1>Log In</h1> <p class="text-h3">Right at the coast of the Semantics, a large language ocean. A small river named Duden.</p></div></div><div class="row"> <div class="col mt-4"> <input type="text" class="form-control" placeholder="Email"> </div></div><div class="row mt-4"> <div class="col"> <input type="password" class="form-control" placeholder="Password"> </div></div><div class="row mt-4"> <div class="col"> <button class="btn" type="button">Submit</button> </div></div></div></div></div></div></section>',
    attributes: {
      class: 'custom-icon froala-forms-style-5',
      title: 'Style 5'
    },
    category: 'Designed Forms'
  });

  // Style 6
  bm.add('froala-forms-style-6', {
    label: 'Style 6',
    content: ' <section class="fdb-block"><style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-8 col-lg-8 col-xl-6"> <div class="row"> <div class="col text-center"> <h1>Register</h1> <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p></div></div><div class="row align-items-center"> <div class="col mt-4"> <input type="text" class="form-control" placeholder="Company Name"> </div></div><div class="row align-items-center mt-4"> <div class="col"> <input type="email" class="form-control" placeholder="Email"> </div></div><div class="row align-items-center mt-4"> <div class="col"> <input type="password" class="form-control" placeholder="Password"> </div><div class="col"> <input type="password" class="form-control" placeholder="Confirm Password"> </div></div><div class="row justify-content-start mt-4"> <div class="col"> <div class="form-check"> <label class="form-check-label"> <input type="checkbox" class="form-check-input"> I Read and Accept <a href="https://www.flowz.com">Terms and Conditions</a> </label> </div><button class="btn mt-4">Submit</button> </div></div></div></div></div></section>',
    attributes: {
      class: 'custom-icon froala-forms-style-6',
      title: 'Style 6'
    },
    category: 'Designed Forms'
  });

  // Style 7
  bm.add('froala-forms-style-7', {
    label: 'Style 7',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <section class="fdb-block" style="background-image: url(https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder//imgs/bg_0.svg)"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-8 col-lg-7 col-xl-5 text-center"> <div class="fdb-box fdb-touch"> <div class="row"> <div class="col"> <h1>Log In</h1> </div></div><div class="row mt-4"> <div class="col"> <input type="text" class="form-control" placeholder="Email"> </div></div><div class="row mt-4"> <div class="col"> <input type="password" class="form-control mb-1" placeholder="Password"> <p class="text-right"><a href="https://www.flowz.com">Recover Password</a></p></div></div><div class="row mt-4"> <div class="col"> <button class="btn" type="button">Submit</button> </div></div></div></div></div></div></section>',
    attributes: {
      class: 'custom-icon froala-forms-style-7',
      title: 'Style 7'
    },
    category: 'Designed Forms'
  });

  // Style 8
  bm.add('froala-forms-style-8', {
    label: 'Style 8',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-8 col-lg-7 col-md-5 text-center"> <div class="fdb-box fdb-touch"> <div class="row"> <div class="col"> <h1>Register</h1> </div></div><div class="row"> <div class="col mt-4"> <input type="text" class="form-control" placeholder="Name"> </div></div><div class="row mt-4"> <div class="col"> <input type="text" class="form-control" placeholder="Email"> </div></div><div class="row mt-4"> <div class="col"> <input type="password" class="form-control mb-1" placeholder="Password"> <p class="text-right"><a href="https://www.flowz.com">Already have an account?</a></p></div></div><div class="row mt-4"> <div class="col"> <button class="btn" type="button">Submit</button> </div></div></div></div></div></div></section>',
    attributes: {
      class: 'custom-icon froala-forms-style-8',
      title: 'Style 8'
    },
    category: 'Designed Forms'
  });

  // Style 9
  bm.add('froala-forms-style-9', {
    label: 'Style 9',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style><section class="fdb-block bg-gray"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-10 col-lg-8 col-xl-6 text-center"> <img alt="image" height="40" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <h1>Never miss an update</h1> <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p><div class="input-group mt-4 mb-4"> <input type="text" class="form-control" placeholder="Enter your email address"> <span class="input-group-btn"> <button class="btn" type="button">Submit</button> </span> </div><p class="text-h5"><em>*Your email address is safe with us. We never share your email address.</em></p></div></div></div></section>',
    attributes: {
      class: 'custom-icon froala-forms-style-9',
      title: 'Style 9'
    },
    category: 'Designed Forms'
  });

  // Style 10
  bm.add('froala-forms-style-10', {
    label: 'Style 10',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style><section class="fdb-block"> <div class="container"> <div class="row justify-content-center"> <div class="col-12 col-md-10 col-lg-8 col-xl-6 text-center"> <h1>Company Name</h1> <p class="text-h3">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown.</p><div class="input-group mt-5 mb-5"> <input type="text" class="form-control" placeholder="Enter your email address"> <span class="input-group-btn"> <button class="btn" type="button">Submit</button> </span> </div><p class="text-h2"> <a href="https://www.flowz.com"><i class="fa fa-facebook"></i></a>&nbsp;&nbsp;&nbsp; <a href="https://www.flowz.com"><i class="fa fa-twitter"></i></a>&nbsp;&nbsp;&nbsp; <a href="https://www.flowz.com"><i class="fa fa-instagram"></i></a>&nbsp;&nbsp;&nbsp; <a href="https://www.flowz.com"><i class="fa fa-google"></i></a>&nbsp;&nbsp;&nbsp; <a href="https://www.flowz.com"><i class="fa fa-pinterest"></i></a> </p></div></div></div></section>',
    attributes: {
      class: 'custom-icon froala-forms-style-10',
      title: 'Style 10'
    },
    category: 'Designed Forms'
  });

  // Style 11
  bm.add('froala-forms-style-11', {
    label: 'Style 11',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <section class="fdb-block"> <div class="container"> <div class="row"> <div class="col-12 col-md-6 m-md-auto ml-lg-0 col-lg-5"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"> </div><div class="col-12 col-md-10 col-lg-6 mt-4 mt-lg-0 ml-auto mr-auto ml-lg-auto text-left"> <div class="row"> <div class="col"> <h1>Subscribe</h1> <p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p></div></div><div class="row mt-4"> <div class="col"> <div class="input-group" style="font-size:16px"> <input type="text" class="form-control" placeholder="Enter your email address"> <span class="input-group-btn"> <button class="btn" type="button" style="font-size:16px">Submit</button> </span> </div></div></div><div class="row"> <div class="col"> <p class="text-h4" style="font-size:16px">* Leave your email address to be notified first.</p></div></div></div></div></div></section>',
    attributes: {
      class: 'custom-icon froala-forms-style-11',
      title: 'Style 11'
    },
    category: 'Designed Forms'
  });

  // Style 12
  bm.add('froala-forms-style-12', {
    label: 'Style 12',
    content: '<style>.fdb-block{border-bottom: solid 1px #EEE;}</style> <section class="fdb-block" style="background-image: url(//s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_c_2.svg);"> <div class="container"> <div class="row justify-content-end"> <div class="col-12 col-md-9 col-lg-8"> <div class="fdb-box fdb-touch"> <div class="row justify-content-center"> <div class="col-12 col-lg-10"> <h1>Subscribe</h1> <p class="text-h3">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove.</p></div></div><div class="row justify-content-center mt-4"> <div class="col-12 col-lg-10"> <div class="input-group"> <input type="text" class="form-control" placeholder="Enter your email address"> <span class="input-group-btn"> <button class="btn" type="button">Submit</button> </span> </div></div></div></div></div></div></div></section>',
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
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing</h1></div></div><div class="row mt-5 align-items-center"><div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center"><div class="bg-dark pb-5 pt-5 pl-3 pr-3 br"><h2 class="font-weight-light">Hobby</h2><p class="text-h2"><strong>$9 / month</strong></p><p class="text-h3">Even the all-powerful Pointing has no control about the blind texts.</p><ul class="text-left mt-5 mb-5"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p><a href="https://www.flowz.com" class="btn mt-4">Subscribe</a></p></div></div><div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0"><div class="bg-dark pb-5 pt-5 pl-3 pr-3 fdb-touch br"><h2 class="font-weight-light">Professional</h2><p class="text-h2"><strong>$19 / month</strong></p><p class="text-h3">Far far away, behind the word mountains, far from the countries.</p><ul class="text-left mt-5 mb-5"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p><a href="https://www.flowz.com" class="btn mt-4">Subscribe</a></p></div></div><div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0"><div class="bg-dark pb-5 pt-5 pl-3 pr-3 br"><h2 class="font-weight-light">Business</h2><p class="text-h2"><strong>$49 / month</strong></p><p class="text-h3">Wild Question Marks, but the Little Blind Text didn’t listen.</p><ul class="text-left mt-5 mb-5"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p><a href="https://www.flowz.com" class="btn mt-4">Subscribe</a></p></div></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-pricings-style-1',
      title: 'Style 1',
    },
    category: 'Pricing Tables'
  });

  //Style 2
  bm.add('froala-pricings-style-2', {
    label: 'Style 2',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing</h1></div></div><div class="row mt-5 align-items-center"><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left"><div class="fdb-box fdb-touch p-5 br"><h2>Hobby <strong class="float-xl-right d-lg-block d-xl-inline">$99</strong></h2><p class="text-h3"><em>Copy Writers ambushed her, made her drunk with Longe.</em></p><ul class="text-left pl-3 mt-5 mb-5"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p class="text-left pt-4"><a href="https://www.flowz.com" class="btn">Buy Now</a></p></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0"><div class="fdb-box fdb-touch p-5 br"><h2>Advanced <strong class="float-xl-right d-lg-block d-xl-inline">$349</strong></h2><p class="text-h3"><em>Separated they live in Bookmarks right at the coast.</em></p><ul class="text-left pl-3 mt-5 mb-5"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p class="text-left pt-4"><a href="https://www.flowz.com" class="btn">Buy Now</a></p></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0"><div class="fdb-box fdb-touch p-5 br"><h2>Business <strong class="float-xl-right d-lg-block d-xl-inline">$849</strong></h2><p class="text-h3"><em>A small river named Duden flows by their place.</em></p><ul class="text-left pl-3 mt-5 mb-5"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p class="text-left pt-4"><a href="https://www.flowz.com" class="btn">Buy Now</a></p></div></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-pricings-style-2',
      title: 'Style 2',
    },
    category: 'Pricing Tables'
  });

  // Style 3
  bm.add('Ffroala-pricings-style-3', {
    label: 'Style 3',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block bg-dark" style="background-image: url(//s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_0.svg);"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing</h1></div></div><div class="row mt-5 align-items-center"><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center"><div class="fdb-box fdb-touch p-4 br"><h2>Hobby</h2><p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p><p class="text-h1 mt-5 mb-5">$99</p><p><a href="https://www.flowz.com" class="btn">Buy Now</a></p></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0"><div class="fdb-box fdb-touch p-4 br"><h2>Advanced</h2><p class="text-h3">Separated they live in Bookmarksgrove right at the coast, a large language ocean.</p><p class="text-h1 mt-5 mb-5">$299</p><p><a href="https://www.flowz.com" class="btn">Buy Now</a></p></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0"><div class="fdb-box fdb-touch p-4 br"><h2>Business</h2><p class="text-h3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p><p class="text-h1 mb-5 mt-5">$799</p><p><a href="https://www.flowz.com" class="btn">Buy Now</a></p></div></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-pricings-style-3',
      title: 'Style 3',
    },
    category: 'Pricing Tables'
  });

  //Style 4
  bm.add('froala-pricings-style-4', {
    label: 'Style 4',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing Plans</h1></div></div><div class="row mt-5 align-items-top"><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left"><div class="bg-gray pb-5 pt-5 pl-4 pr-4 br"><h2 class="font-weight-light">Startup</h2><hr><p class="text-h2"><strong>$9.90</strong></p><p class="text-h4">Far far away, behind the word mountains, far from the countries.</p><hr><p class="text-right"><em>Unlimited calls</em></p><p class="text-right"><em>Free hosting</em></p><p class="text-right"><em>40MB of storage</em></p><p><br></p><p><br></p><p><br></p><p class="text-center pt-4"><a href="https://www.flowz.com" class="btn btn-round">Choose Plan</a></p></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0"><div class="bg-gray pb-5 pt-5 pl-4 pr-4 br"><h2 class="font-weight-light">Standard</h2><hr><p class="text-h2"><strong>$29.90</strong></p><p class="text-h4">The copy warned the Blind Text, that it would have been rewritten</p><hr><p class="text-right"><em>Unlimited calls</em></p><p class="text-right"><em>Free hosting</em></p><p class="text-right"><em>1GB of storage</em></p><p class="text-right"><em>10 hours of support</em></p><p class="text-right"><em>Custom domain</em></p><p><br></p><p class="text-center pt-4"><a href="https://www.flowz.com" class="btn btn-round">Choose Plan</a></p></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0"><div class="bg-gray pb-5 pt-5 pl-4 pr-4 br"><h2 class="font-weight-light">Professional</h2><hr><p class="text-h2"><strong>$59.90</strong></p><p class="text-h4"> the headline of Alphabet Village and the subline of her own road.</p><hr><p class="text-right"><em>Unlimited calls</em></p><p class="text-right"><em>Free hosting</em></p><p class="text-right"><em>1GB of storage</em></p><p class="text-right"><em>20 hours of support</em></p><p class="text-right"><em>Custom domain</em></p><p class="text-right"><em>Analytics and SEO</em></p><p class="text-center pt-4"><a href="https://www.flowz.com" class="btn btn-round">Choose Plan</a></p></div></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-pricings-style-4',
      title: 'Style 4',
    },
    category: 'Pricing Tables'
  });

  //Style 5
  bm.add('froala-pricings-style-5', {
    label: 'Style 5',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block bg-dark" style="background-image: url(//s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_1.svg)"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing Plans</h1></div></div><div class="row mt-5 align-items-center no-gutters"><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center"><div class="bg-gray pb-5 pt-5 pl-4 pr-4"><h2 class="font-weight-light">Basic</h2><p class="text-h1 mt-5 mb-5"><strong>$19</strong> <span class="text-h4">/month</span></p><ul class="text-left"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p class="text-center pt-4"><a href="https://www.flowz.com" class="btn btn-round btn-white btn-shadow">Choose Plan</a></p></div></div><div class="col-12 col-sm-10 col-md-8 ml-auto mr-auto col-lg-4 text-center mt-4 mt-lg-0 sl-1 pt-0 pt-lg-3 pb-0 pb-lg-3 bg-gray fdb-touch"><div class="pb-5 pt-5 pl-4 pr-4"><h2 class="font-weight-light">Standard</h2><p class="text-h1 mt-5 mb-5"><strong>$49</strong> <span class="text-h4">/month</span></p><ul class="text-left"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p class="text-center pt-4"><a href="https://www.flowz.com" class="btn btn-round btn-shadow">Choose Plan</a></p></div></div><div class="col-12 col-sm-10 col-md-8 ml-auto mr-auto col-lg-4 text-center mt-4 mt-lg-0"><div class="bg-gray pb-5 pt-5 pl-4 pr-4"><h2 class="font-weight-light">OEM</h2><p class="text-h1 mt-5 mb-5"><strong>$99</strong> <span class="text-h4">/month</span></p><ul class="text-left"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p class="text-center pt-4"><a href="https://www.flowz.com" class="btn btn-round btn-white btn-shadow">Choose Plan</a></p></div></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-pricings-style-5',
      title: 'Style 5',
    },
    category: 'Pricing Tables'
  });

  //Style 6
  bm.add('froala-pricings-style-6', {
    label: 'Style 6',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing Plans</h1></div></div><div class="row mt-5 align-items-top"><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left"><div class="br"><div class="bg-dark p-3 text-center"><h2 class="font-weight-light">Startup</h2><p class="text-h2"><strong>$9.90</strong></p></div><div class="bg-gray p-5 text-center"><p><img alt="image" height="40" src=" https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></p><p class="text-h4"><strong>For small companies</strong></p><p><br></p><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p><p class="text-center pt-5"><a href="https://www.flowz.com" class="btn btn-round">Choose Plan</a></p></div></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0"><div class="br"><div class="bg-dark p-3 text-center"><h2 class="font-weight-light">Standard</h2><p class="text-h2"><strong>$19.90</strong></p></div><div class="bg-gray p-5 text-center"><p><img alt="image" height="40" src=" https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></p><p class="text-h4"><strong>For medium companies</strong></p><p><br></p><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p><p class="text-center pt-5"><a href="https://www.flowz.com" class="btn btn-round">Choose Plan</a></p></div></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0"><div class="br"><div class="bg-dark p-3 text-center"><h2 class="font-weight-light">Business</h2><p class="text-h2"><strong>$29.90</strong></p></div><div class="bg-gray p-5 text-center"><p><img alt="image" height="40" src=" https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></p><p class="text-h4"><strong>For large companies</strong></p><p><br></p><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p><p class="text-center pt-5"><a href="https://www.flowz.com" class="btn btn-round">Choose Plan</a></p></div></div></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-pricings-style-6',
      title: 'Style 6',
    },
    category: 'Pricing Tables'
  });

  //Style 7
  bm.add('froala-pricings-style-7', {
    label: 'Style 7',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing Plans</h1></div></div><div class="row mt-5 align-items-top"><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center"><div class="bg-gray pb-5 pt-5 pl-4 pr-4 br"><h3><strong>Startup</strong></h3><p class="text-h4">&lt; 10 employees</p><p class="text-h1 mt-5">$9.90 <span class="text-h3">/ month</span></p><p>Far far away, behind the word mountains, far from the countries.</p><hr><p><em>Unlimited calls</em></p><p><em>Free hosting</em></p><p><em>40MB of storage</em></p><p class="text-center pt-5"><a href="https://www.flowz.com" class="btn btn-round">Subscribe</a></p></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0"><div class="bg-gray pb-5 pt-5 pl-4 pr-4 br"><h3><strong>Agency</strong></h3><p class="text-h4">10-100 employees</p><p class="text-h1 mt-5">$19.90 <span class="text-h3">/ month</span></p><p>And if she hasn’t been rewritten, then they are still using her.</p><hr><p><em>Unlimited calls</em></p><p><em>Free hosting</em></p><p><em>40MB of storage</em></p><p class="text-center pt-5"><a href="https://www.flowz.com" class="btn btn-round">Subscribe</a></p></div></div><div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0"><div class="bg-gray pb-5 pt-5 pl-4 pr-4 br"><h3><strong>Business</strong></h3><p class="text-h4">>100 employees</p><p class="text-h1 mt-5">$99.90 <span class="text-h3">/ month</span></p><p>Separated they live in Bookmarksgrove right at the coast of the Semantics.</p><hr><p><em>Unlimited calls</em></p><p><em>Free hosting</em></p><p><em>40MB of storage</em></p><p class="text-center pt-5"><a href="https://www.flowz.com" class="btn btn-round">Subscribe</a></p></div></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-pricings-style-7',
      title: 'Style 7',
    },
    category: 'Pricing Tables'
  });

  //Style 8
  bm.add('froala-pricings-style-8', {
    label: 'Style 8',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing Plans</h1></div></div><div class="row mt-5 align-items-top"><div class="col-12 col-md-8 m-auto col-lg-4 text-center"> <img alt="image" height="80" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h2><strong>Startup</strong></h2><p class="text-h3 mb-4 mb-lg-5"><em>$9 / month</em></p><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p><p class="text-center mt-4 mt-lg-5"><a href="https://www.flowz.com" class="btn btn-round">Choose Plan</a></p></div><div class="col-12 col-md-8 col-lg-4 text-center m-auto pt-5 pt-lg-0"> <img alt="image" height="80" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h2><strong>Advanced</strong></h2><p class="text-h3 mb-4 mb-lg-5"><em>$19 / month</em></p><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p><p class="text-center mt-4 mt-lg-5"><a href="https://www.flowz.com" class="btn btn-round">Choose Plan</a></p></div><div class="col-12 col-md-8 m-auto col-lg-4 text-center pt-5 pt-lg-0"> <img alt="image" height="80" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h2><strong>Business</strong></h2><p class="text-h3 mb-4 mb-lg-5"><em>$29 / month</em></p><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p><p class="text-center mt-4 mt-lg-5"><a href="https://www.flowz.com" class="btn btn-round">Choose Plan</a></p></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-pricings-style-8',
      title: 'Style 8',
    },
    category: 'Pricing Tables'
  });

  //Style 9
  bm.add('froala-pricings-style-9', {
    label: 'Style 9',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing Plans</h1></div></div><div class="row mt-5 align-items-top"><div class="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left"><div class="bg-gray p-3 text-center br sl-1"><h2 class="font-weight-light">Startup</h2><p class="text-h2">$99</p><p class="text-center"><a href="https://www.flowz.com" class="btn btn-empty">Buy Now</a></p><hr class="mt-5 mb-5"><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p></div></div><div class="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left pt-5 pt-md-0"><div class="bg-gray p-3 text-center br sl-1"><h2 class="font-weight-light">Advanced</h2><p class="text-h2">$399</p><p class="text-center"><a href="https://www.flowz.com" class="btn">Buy Now</a></p><hr class="mt-5 mb-5"><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p></div></div><div class="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left pt-5 pt-xl-0"><div class="bg-gray p-3 text-center br sl-1"><h2 class="font-weight-light">Business</h2><p class="text-h2">$999</p><p class="text-center"><a href="https://www.flowz.com" class="btn btn-empty">Buy Now</a></p><hr class="mt-5 mb-5"><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p></div></div><div class="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left pt-5 pt-xl-0"><div class="bg-gray p-3 text-center br sl-1"><h2 class="font-weight-light">Enterprise</h2><p class="text-h2">Call Us</p><p class="text-center"><a href="https://www.flowz.com" class="btn btn-empty">Contact</a></p><hr class="mt-5 mb-5"><p>10 hours of support</p><p>40MB of storage</p><p>Subdomain</p></div></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-pricings-style-9',
      title: 'Style 9',
    },
    category: 'Pricing Tables'
  });


  //Style 10
  bm.add('froala-pricings-style-10', {
    label: 'Style 10',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col"><h1>Pricing Plans</h1></div></div><table class="table text-center mt-5 d-none d-lg-table"><tbody><tr class="no-border"><th scope="row"></th><td class="text-center"><h2 class="font-weight-light">Hobby</h2><p class="text-h2">$99</p><p><a href="https://www.flowz.com" class="btn btn-empty">Buy Now</a></p></td><td class="text-center"><h2 class="font-weight-light">Professional</h2><p class="text-h2">$399</p><p><a href="https://www.flowz.com" class="btn btn-empty">Buy Now</a></p></td><td class="text-center"><h2 class="font-weight-light">Business</h2><p class="text-h2">$899</p><p><a href="https://www.flowz.com" class="btn">Buy Now</a></p></td><td class="text-center"><h2 class="font-weight-light">Enterprise</h2><p class="text-h2">Call us</p><p><a href="https://www.flowz.com" class="btn btn-empty">Contact</a></p></td></tr><tr><th scope="row">Support</th><td>3 months</td><td>6 months</td><td>12 months</td><td>Custom</td></tr><tr><th scope="row">Full source code</th><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><th scope="row">SaaS / Subscription</th><td>yes</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><th scope="row">Intranet</th><td></td><td>yes</td><td>yes</td><td>yes</td></tr><tr><th scope="row">Downloadable Software</th><td></td><td></td><td>yes</td><td>yes</td></tr><tr><th scope="row">Redistribute</th><td></td><td></td><td></td><td>yes</td></tr><tr><th scope="row">Custom code</th><td></td><td></td><td></td><td>yes</td></tr></tbody></table><table class="table text-center mt-5 d-table d-lg-none"><tbody><tr class="no-border"><td class="text-center" colspan="2"><h2 class="font-weight-light">Hobby</h2><p class="text-h2">$99</p><p><a href="https://www.flowz.com" class="btn btn-empty">Buy Now</a></p></td></tr><tr><th scope="row">Support</th><td>3 months</td></tr><tr><th scope="row">Full source code</th><td>yes</td></tr><tr><th scope="row">SaaS / Subscription</th><td>yes</td></tr><tr><th scope="row">Intranet</th><td></td></tr><tr><th scope="row">Downloadable Software</th><td></td></tr><tr><th scope="row">Redistribute</th><td></td></tr><tr><th scope="row">Custom code</th><td></td></tr></tbody></table><table class="table text-center mt-5 d-table d-lg-none"><tbody><tr class="no-border"><td class="text-center" colspan="2"><h2 class="font-weight-light">Professional</h2><p class="text-h2">$399</p><p><a href="https://www.flowz.com" class="btn btn-empty">Buy Now</a></p></td></tr><tr><th scope="row">Support</th><td>6 months</td></tr><tr><th scope="row">Full source code</th><td>yes</td></tr><tr><th scope="row">SaaS / Subscription</th><td>yes</td></tr><tr><th scope="row">Intranet</th><td>yes</td></tr><tr><th scope="row">Downloadable Software</th><td></td></tr><tr><th scope="row">Redistribute</th><td></td></tr><tr><th scope="row">Custom code</th><td></td></tr></tbody></table><table class="table text-center mt-5 d-table d-lg-none"><tbody><tr class="no-border"><td class="text-center" colspan="2"><h2 class="font-weight-light">Business</h2><p class="text-h2">$899</p><p><a href="https://www.flowz.com" class="btn">Buy Now</a></p></td></tr><tr><th scope="row">Support</th><td>12 months</td></tr><tr><th scope="row">Full source code</th><td>yes</td></tr><tr><th scope="row">SaaS / Subscription</th><td>yes</td></tr><tr><th scope="row">Intranet</th><td>yes</td></tr><tr><th scope="row">Downloadable Software</th><td>yes</td></tr><tr><th scope="row">Redistribute</th><td></td></tr><tr><th scope="row">Custom code</th><td></td></tr></tbody></table><table class="table text-center mt-5 d-table d-lg-none"><tbody><tr class="no-border"><td class="text-center" colspan="2"><h2 class="font-weight-light">Enterprise</h2><p class="text-h2">Call us</p><p><a href="https://www.flowz.com" class="btn btn-empty">Contact</a></p></td></tr><tr><th scope="row">Support</th><td>Custom</td></tr><tr><th scope="row">Full source code</th><td>yes</td></tr><tr><th scope="row">SaaS / Subscription</th><td>yes</td></tr><tr><th scope="row">Intranet</th><td>yes</td></tr><tr><th scope="row">Downloadable Software</th><td>yes</td></tr><tr><th scope="row">Redistribute</th><td>yes</td></tr><tr><th scope="row">Custom code</th><td>yes</td></tr></tbody></table></div> </section>',
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
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block team-1"><div class="container"><div class="row text-center justify-content-center"><div class="col-8"><h1>Our Team</h1><p class="text-h3" style="font-size:18px">Far far away, behind the word mountains, far from the countries.</p></div></div><div class="row-50"></div><div class="row"><div class="col-sm-3 text-left"><div class="fdb-box"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_1.svg"><div class="content"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>Founder</p></div></div></div><div class="col-sm-3 text-left"><div class="fdb-box"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_2.svg"><div class="content"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>Founder</p></div></div></div><div class="col-sm-3 text-left"><div class="fdb-box"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_3.svg"><div class="content"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>Founder</p></div></div></div><div class="col-sm-3 text-left"><div class="fdb-box"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_square_4.svg"><div class="content"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>Founder</p></div></div></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-teams-style-1',
      title: 'Style 1',
    },
    category: 'Team Members'
  });

  //Style 2
  bm.add('froala-teams-style-2', {
    label: 'Style 2',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block team-2"><div class="container"><div class="row text-center justify-content-center"><div class="col-8"><h1>Meet Our Team</h1></div></div><div class="row-50"></div><div class="row text-center justify-content-center"><div class="col-sm-3 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h2>Sara Doe</h2><p>Founder</p></div><div class="col-sm-3 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h2>Sara Doe</h2><p>Founder</p></div><div class="col-sm-3 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h2>Sara Doe</h2><p>Founder</p></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-teams-style-2',
      title: 'Style 2',
    },
    category: 'Team Members'
  });

  //Style 3
  bm.add('froala-teams-style-3', {
    label: 'Style 3',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block team-3"><div class="container"><div class="row text-center justify-content-center"><div class="col-8"><h1>Meet Our Team</h1></div></div><div class="row-70"></div><div class="row text-center justify-content-center"><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src=" https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p><em>Founder</em></p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p><em>Founder</em></p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p><em>Founder</em></p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p><em>Founder</em></p></div></div><div class="row justify-content-center text-center"><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p><em>Founder</em></p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p><em>Founder</em></p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p><em>Founder</em></p></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-teams-style-3',
      title: 'Style 3',
    },
    category: 'Team Members'
  });

  //Style 4
  bm.add('froala-teams-style-4', {
    label: 'Style 4',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block team-4"><div class="container"><div class="row text-center justify-content-center"><div class="col-8"><h1>Team</h1></div></div><div class="row text-center"><div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"><h3 style="font-size:16px"><strong>John Smith</strong></h3><p>Position</p><p>A wonderful serenity has taken possession of my entire soul.</p></div><div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"><h3 style="font-size:16px"><strong>John Smith</strong></h3><p>Position</p><p>Pityful a rethoric question ran over her cheek.</p></div><div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"><h3 style="font-size:16px"><strong>John Smith</strong></h3><p>Position</p><p>And if she hasn’t been rewritten, then they are still using her.</p></div><div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"><h3 style="font-size:16px"><strong>John Smith</strong></h3><p>Position</p><p>Wild Question Marks, but the Little Blind Text didn’t listen.</p></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-teams-style-4',
      title: 'Style 4',
    },
    category: 'Team Members'
  });

  //Style 5
  bm.add('froala-teams-style-5', {
    label: 'Style 5',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block team-5"><div class="container"><div class="row text-center justify-content-center"><div class="col-8"><h1>Meet Our Team</h1></div></div><div class="row-70"></div><div class="row text-center justify-content-center"><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>"Wild Question Marks, but the Little Blind"</p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>"Wild Question Marks, but the Little Blind"</p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>"Wild Question Marks, but the Little Blind"</p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>"Wild Question Marks, but the Little Blind"</p></div></div><div class="row justify-content-center text-center"><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>"Wild Question Marks, but the Little Blind"</p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>"Wild Question Marks, but the Little Blind"</p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>"Wild Question Marks, but the Little Blind"</p></div><div class="col-sm-2 m-sm-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"><h3 style="font-size:16px"><strong>Sara Doe</strong></h3><p>"Wild Question Marks, but the Little Blind"</p></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-teams-style-5',
      title: 'Style 5',
    },
    category: 'Team Members'
  });

  //Style 6
  bm.add('froala-teams-style-6', {
    label: 'Style 6',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block team-6"><div class="container"><div class="row text-center justify-content-center"><div class="col-8"><h1>Team</h1></div></div><div class="row text-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"><h3 style="font-size:16px"><strong>John Smith</strong></h3><p>Position</p><p>Separated they live in Bookmarksgrove right at the coast of the Semantics.</p></div><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"><h3 style="font-size:16px"><strong>John Smith</strong></h3><p>Position</p><p>One morning, when Gregor Samsa woke from troubled dreams.</p></div><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/colors_wide_1.jpg"><h3 style="font-size:16px"><strong>John Smith</strong></h3><p>Position</p><p>A small river named Duden flows by their place and supplies it.</p></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-teams-style-6',
      title: 'Style 6',
    },
    category: 'Team Members'
  });

  //Style 7
  bm.add('froala-teams-style-7', {
    label: 'Style 7',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block team-7"><div class="container"><div class="row text-center justify-content-center"><div class="col-8"><h1>Team</h1></div></div><div class="row-70"></div><div class="row justify-content-center"><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div></div><div class="row-50"></div><div class="row justify-content-center"><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div></div><div class="row-50"></div><div class="row justify-content-center"><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div><div class="col-sm-3 m-sm-auto"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px">Employee Name</h3><p>Position</p></div></div></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-teams-style-7',
      title: 'Style 7',
    },
    category: 'Team Members'
  });

  //Style 8
  bm.add('froala-teams-style-8', {
    label: 'Style 8',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block team-8"><div class="container"><div class="row text-center justify-content-center"><div class="col-8"><h1>Our Amazing Team</h1><p class="text-h3">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p></div></div><div class="row-100"></div><div class="row justify-content-center text-left"><div class="col-sm-6"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px"><strong>Employee Name</strong></h3><p class="text-h3" style="font-size:14px">Position</p><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div></div></div><div class="col-sm-6"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px"><strong>Employee Name</strong></h3><p class="text-h3" style="font-size:14px">Position</p><p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p></div></div></div></div><div class="row-70"></div><div class="row justify-content-center text-left"><div class="col-sm-6"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px"><strong>Employee Name</strong></h3><p class="text-h3" style="font-size:14px">Position</p><p>One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p></div></div></div><div class="col-sm-6"><div class="row align-items-center"><div class="col-4"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></div><div class="col-8"><h3 style="font-size:16px"><strong>Employee Name</strong></h3><p class="text-h3" style="font-size:14px">Position</p><p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p></div></div></div></div></div> </section>',
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
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row align-items-center justify-content-center"><div class="col-12 col-md-10 col-lg-8"><p class="text-h3" style="font-size:16px"> "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p><p class="text-h3" style="font-size:16px"><strong>Person Name</strong>&nbsp; &nbsp;&nbsp;<em>Co-founder at Company</em></p></div><div class="col-8 col-sm-6 col-md-2 col-lg-3 col-xl-2 mt-4 mt-md-0 ml-auto mr-auto mr-md-0"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"/></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-testimonials-style-1',
      title: 'Style 1',
    },
    category: 'Testimonials Section'
  });


  //Style 2
  bm.add('froala-testimonials-style-2', {
    label: 'Style 2',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block" style="background-image: url(//s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_3.svg)"><div class="container"><div class="fdb-box"><div class="row align-items-center justify-content-center"><div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 m-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"/></div><div class="col-12 col-md-8 ml-auto mr-auto mt-4 mt-md-0"><p class="text-h3" style="font-size:16px"> "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."</p><p class="text-h3 mt-4 mt-lg-5" style="font-size:18px"><strong>Person Name</strong></p><p style="font-size:20px"><em>Co-founder at Company</em></p></div></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-testimonials-style-2',
      title: 'Style 2',
    },
    category: 'Testimonials Section'
  });


  //Style 3
  bm.add('froala-testimonials-style-3', {
    label: 'Style 3',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center"><div class="col-12"><h3 style="font-size:22px"><strong>You are in good company</strong></h3><div class="mt-5 justify-content-center"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/adobe.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/discovery.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/ebay.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/samsung.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/orange.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/salesforce.svg"></div><div class="mt-2 mt-md-5 justify-content-center"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/cisco.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/apple.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/ibm.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/intel.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/panasonic.svg"></div></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-testimonials-style-3',
      title: 'Style 3',
    },
    category: 'Testimonials Section'
  });

  //Style 4
  bm.add('froala-testimonials-style-4', {
    label: 'Style 4',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row align-items-center justify-content-center"><div class="col-md-6"><div class="fdb-box fdb-touch"><p class="text-h3 mb-4" style="font-size:16px">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics."</p><p> <img alt="image" height="50" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <strong class="ml-3">Person Name</strong></p></div></div><div class="col-md-6 mt-4 mt-md-0"><div class="fdb-box fdb-touch"><p class="text-h3 mb-4" style="font-size:16px">"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."</p><p> <img alt="image" height="50" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"> <strong class="ml-3">Person Name</strong></p></div></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-testimonials-style-4',
      title: 'Style 4',
    },
    category: 'Testimonials Section'
  });


  //Style 5
  bm.add('froala-testimonials-style-5', {
    label: 'Style 5',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block" style="background-image: url(//s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_2.svg)"><div class="container"><div class="row align-items-center justify-content-center"><div class="col-lg-9 col-xl-6"><div class="fdb-box"><div class="row"><div class="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"/></div><div class="col-md-8 mt-4 mt-md-0"><p class="text-h3" style="font-size:16px"> "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."</p><p class="text-h3 mt-4 mt-xl-5" style="font-size:17px"><strong>Person Name</strong></p><p style="font-size:18px"><em>Co-founder at Company</em></p></div></div></div></div><div class="col-lg-9 col-xl-6 mt-4 mt-xl-0"><div class="fdb-box"><div class="row"><div class="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"/></div><div class="col-md-8 mt-4 mt-md-0"><p class="text-h3" style="font-size:16px"> "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p><p class="text-h3 mt-4 mt-xl-5" style="font-size:17px"><strong>Person Name</strong></p><p style="font-size:18px"><em>Co-founder at Company</em></p></div></div></div></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-testimonials-style-5',
      title: 'Style 5',
    },
    category: 'Testimonials Section'
  });


  //Style 6
  bm.add('froala-testimonials-style-6', {
    label: 'Style 6',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center justify-content-center"><div class="col-lg-8"><h2>You are in good company</h2><p class="text-h3" style="font-size:16px">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p><div class="mt-5 justify-content-center"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/adobe.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/discovery.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/ebay.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/samsung.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/orange.svg"> <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/salesforce.svg"></div></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-testimonials-style-6',
      title: 'Style 6',
    },
    category: 'Testimonials Section'
  });


  //Style 7
  bm.add('froala-testimonials-style-7', {
    label: 'Style 7',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block bg-dark"><div class="container"><div class="row justify-content-center text-center"><div class="col"> <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/adobe.svg"> <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/discovery.svg"> <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/ebay.svg"> <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/samsung.svg"> <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/orange.svg"> <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/salesforce.svg"></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-testimonials-style-7',
      title: 'Style 7',
    },
    category: 'Testimonials Section'
  });

  //Style 8
  bm.add('froala-testimonials-style-8', {
    label: 'Style 8',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row pb-xl-5 text-center justify-content-center"><div class="col-md-10 col-lg-7"><h1>Testimonials</h1></div></div><div class="row mt-5 justify-content-center"><div class="col-md-8 col-lg-4 col-xl-3 m-auto text-center"> <img alt="image" height="50" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/intel.svg"><p class="text-h3 mt-3" style="font-size:16px">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."</p><p class="text-h3 mt-4 mt-xl-5"><strong>Person Name</strong></p><p>Co-founder at Company</p></div><div class="col-md-8 col-lg-4 col-xl-3 pt-5 pt-lg-0 m-auto text-center"> <img alt="image" height="50" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/apple.svg"><p class="text-h3 mt-3" style="font-size:16px">"Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p><p class="text-h3 mt-4 mt-xl-5"><strong>Person Name</strong></p><p>Co-founder at Company</p></div><div class="col-md-8 col-lg-4 col-xl-3 pt-5 pt-lg-0 m-auto text-center"> <img alt="image" height="50" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/customers/samsung.svg"><p class="text-h3 mt-3" style="font-size:16px">"A small river named Duden flows by their place and supplies it with the necessary regelialia."</p><p class="text-h3 mt-4 mt-xl-5"><strong>Person Name</strong></p><p>Co-founder at Company</p></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-testimonials-style-8',
      title: 'Style 8',
    },
    category: 'Testimonials Section'
  });


  //Style 9
  bm.add('froala-testimonials-style-9', {
    label: 'Style 9',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block bg-dark" style="background-image: url(//s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/bg_4.svg)"><div class="container"><div class="row text-center justify-content-center"><div class="col-md-10 col-lg-8 col-xl-7"><h1>Testimonials</h1><p class="text-h3" style="font-size:16px">A small river named Duden flows by their place and supplies it with the necessary regelialia. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p></div></div><div class="row mt-5 align-items-center justify-content-center"><div class="col-md-8 col-lg-4"><div class="fdb-box"><div class="row no-gutters align-items-center"><div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"/></div><div class="col-8 ml-auto"><p> <strong>Person Name</strong><br> <em>Co-founder at Company</em></p></div></div><div class="row mt-4"><div class="col-12"><p class="text-h3" style="font-size:16px"> "Even the all-powerful Pointing has no control about the blind texts it is an unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."</p></div></div></div></div><div class="col-md-8 col-lg-4 mt-4 mt-lg-0"><div class="fdb-box"><div class="row no-gutters align-items-center"><div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"/></div><div class="col-8 ml-auto"><p> <strong>Person Name</strong><br> <em>Co-founder at Company</em></p></div></div><div class="row mt-4"><div class="col-12"><p class="text-h3" style="font-size:16px"> "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p></div></div></div></div><div class="col-md-8 col-lg-4 mt-4 mt-lg-0"><div class="fdb-box"><div class="row no-gutters align-items-center"><div class="col-3"> <img alt="image" class="img-fluid" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"/></div><div class="col-8 ml-auto"><p> <strong>Person Name</strong><br> <em>Co-founder at Company</em></p></div></div><div class="row mt-4"><div class="col-12"><p class="text-h3" style="font-size:16px"> "Separated they live in Bookmarksgrove right at the coast of the Semantics, far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."</p></div></div></div></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-testimonials-style-9',
      title: 'Style 9',
    },
    category: 'Testimonials Section'
  });


  //Style 10
  bm.add('froala-testimonials-style-10', {
    label: 'Style 10',
    content: '<style>.fdb-block{border-bottom:solid 1px #EEE}</style><section class="fdb-block"><div class="container"><div class="row text-center justify-content-center"><div class="col-md-10 col-lg-7"><h1>Testimonials</h1></div></div><div class="row mt-5 justify-content-center"><div class="col-md-10 col-lg-3 ml-auto mr-auto text-center"><p class="text-h3 mb-4 mb-lg-5" style="font-size:16px">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."</p><p><img alt="image" height="50" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></p><p class="text-h3" style="font-size:15px"><strong>Person Name</strong></p><p>Co-founder, Company</p></div><div class="col-md-10 col-lg-3 pt-5 pt-lg-0 ml-auto mr-auto text-center"><p class="text-h3 mb-4 mb-lg-5" style="font-size:16px">"Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p><p><img alt="image" height="50" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></p><p class="text-h3" style="font-size:15px"><strong>Person Name</strong></p><p>Co-founder, Company</p></div><div class="col-md-10 col-lg-3 pt-5 pt-lg-0 ml-auto mr-auto text-center"><p class="text-h3 mb-4 mb-lg-5" style="font-size:16px">"A small river named Duden flows by their place and supplies it with the necessary regelialia."</p><p><img alt="image" height="50" src="https://s3-us-west-2.amazonaws.com/airflowbucket1/flowz-builder/imgs/img_round.svg"></p><p class="text-h3" style="font-size:15px"><strong>Person Name</strong></p><p>Co-founder, Company</p></div></div></div> </section>',
    attributes: {
      class: 'custom-icon froala-testimonials-style-10',
      title: 'Style 10',
    },
    category: 'Testimonials Section'
  });
})