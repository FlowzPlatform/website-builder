var projectName = 'setNameHere';
var rawData = {};
var productData = {};
var productHtml = "";
var id = $("popularProducts").attr("id");
var apiUrl = $('popularProducts').attr('apiurl');
var apiUsername = $('popularProducts').attr('apiusername');
var apiPassword = $('popularProducts').attr('apipassword');
var numberOfItems = $('popularProducts').attr('numberofitems');

console.log("API URL: " + apiUrl + ", APi Username: " + apiUsername + ", API Password: " + apiPassword + ", Number of Items: " + numberOfItems + ", Selected Template: " + selectTemplate);

$('#sliderListItems').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw">');

$.ajax({
  type: 'GET',
  url: apiUrl,
  async: false,
  beforeSend: function (xhr) {
		xhr.setRequestHeader ("Authorization", "Basic " + btoa( apiUsername + ":" + apiPassword));
	},
  dataType: 'json',
  success: function (data) {
    console.log("Product data received...!!!")
    rawData = data.hits.hits; 
    productData = rawData;
  }
});

console.log(productData);

if(numberOfItems == 'all' || numberOfItems == '' ){
	productHtml = '';
	for( var i in productData){
		productHtml += '<div class="col-sm-3"> <a href="http://localhost/websites/' + projectName + '/product-detail.layout?sku=' + productData[i]._source.sku + '"> <div class="col-item"> <div class="photo"> <img src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'" class="img-responsive" alt="a"/> </div><div class="info"> <div class="row"> <div class="price col-md-6"> <h5>'+ productData[i]._source.product_name + '</h5> <h5 class="price-text-color">$ '+ productData[i]._source.price_1 +'</h5> </div><div class="rating hidden-sm col-md-6"> <i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star"> </i><i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star"> </i><i class="fa fa-star"></i> </div></div><div class="separator clear-left"> <p class="btn-add"> <i class="fa fa-shopping-cart"></i><a href="#" class="hidden-sm">Add to cart</a></p><p class="btn-details"> <i class="fa fa-list"></i><a href="http://localhost/websites/' + projectName + '/product-detail.layout?sku=" class="hidden-sm">More details</a></p></div><div class="clearfix"> </div></div></div></a> </div>';
	}
} else {
	productHtml = '';
	for( var i = 0; i<numberOfItems; i++ ){
		productHtml += '<div class="col-sm-3"> <a href="http://localhost/websites/' + projectName + '/product-detail.layout?sku=' + productData[i]._source.sku + '"> <div class="col-item"> <div class="photo"> <img src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'" class="img-responsive" alt="a"/> </div><div class="info"> <div class="row"> <div class="price col-md-6"> <h5>'+ productData[i]._source.product_name + '</h5> <h5 class="price-text-color">$ '+ productData[i]._source.price_1 +'</h5> </div><div class="rating hidden-sm col-md-6"> <i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star"> </i><i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star"> </i><i class="fa fa-star"></i> </div></div><div class="separator clear-left"> <p class="btn-add"> <i class="fa fa-shopping-cart"></i><a href="#" class="hidden-sm">Add to cart</a></p><p class="btn-details"> <i class="fa fa-list"></i><a href="http://localhost/websites/' + projectName + '/product-detail.layout?sku=" class="hidden-sm">More details</a></p></div><div class="clearfix"> </div></div></div></a> </div>';
	}
}

$('#sliderListItems').html(productHtml);