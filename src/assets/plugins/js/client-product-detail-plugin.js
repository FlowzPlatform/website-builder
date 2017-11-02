var id = $('productDetail').attr('id');

var productDetailUrl = new URL(location.href);
var sku = productDetailUrl.searchParams.get("sku");
// var username = productDetailUrl.searchParams.get("username");
// var password = productDetailUrl.searchParams.get("password");

var apiUrl = '';
var apiUsername = '';
var apiPassword = '';

var productHtml;
var productData;

$.ajax({
  type: 'GET',
  url: apiUrl + '?q=sku:' + sku,
  // url: ''
  async: false,
  beforeSend: function (xhr) {
		xhr.setRequestHeader ("Authorization", "Basic " + btoa( apiUsername + ":" + apiPassword));
	},
  dataType: 'json',
  success: function (data) {
    console.log("Product data received...!!!")
    rawData = data.hits.hits; 
    productData = rawData;
    console.log(productData);
  }
});


productHtml = '<style type="text/css">.tab-content>active{ height: auto !important;}</style><productDetail style="padding: 20px; display: block; width: 100%; min-height: 50px;"><link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"><div class=detail-card><div class=container-fliud><div class="row wrapper"><div class="col-md-6 preview"><div class="preview-pic tab-content"><div class="tab-pane active"id=pic-1><img class="product-card-img" src="http://104.239.249.114/live-api/web/images/' + productData[0]._source.default_image + '"></div><div class=tab-pane id=pic-2><img src=http://placehold.it/500x300></div><div class=tab-pane id=pic-3><img src=http://placehold.it/500x300></div><div class=tab-pane id=pic-4><img src=http://placehold.it/500x300></div><div class=tab-pane id=pic-5><img src=http://placehold.it/500x300></div></div><ul class="nav nav-tabs preview-thumbnail"><li class=active><a data-target=#pic-1 data-toggle=tab><img src=http://placehold.it/200x125></a><li><a data-target=#pic-2 data-toggle=tab><img src=http://placehold.it/200x125></a><li><a data-target=#pic-3 data-toggle=tab><img src=http://placehold.it/200x125></a><li><a data-target=#pic-4 data-toggle=tab><img src=http://placehold.it/200x125></a><li><a data-target=#pic-5 data-toggle=tab><img src=http://placehold.it/200x125></a></ul></div><div class="col-md-6 details"><h3 class=product-title>'+productData[0]._source.product_name+'</h3><div class=rating><div class=stars><span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span></div><span class=review-no>41 reviews</span></div><p class=product-description>'+productData[0]._source.description+'<h4 class=price>current price: <span>$'+productData[0]._source.price_1+'</span></h4><p class=vote><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong><h5 class=sizes>sizes: <span class=size data-toggle=tooltip title=small>s</span> <span class=size data-toggle=tooltip title=medium>m</span> <span class=size data-toggle=tooltip title=large>l</span> <span class=size data-toggle=tooltip title="xtra large">xl</span></h5><div class=action><button class="btn btn-default add-to-cart" type=button onclick="addToCart(\'' + productData[0]._source.sku + '\')">add to cart</button> <button class="btn btn-default like"type=button><span class="fa fa-heart"></span></button></div></div></div></div></div></productDetail>';

$('productDetail').html(productHtml);

