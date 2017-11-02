var projectName = 'setNameHere';
var rawData = {};
var productData = {};
var productHtml = "";
var id = $("productListing").attr("id");
var apiUrl = $('productListing').attr('apiurl');
var apiUsername = $('productListing').attr('apiusername');
var apiPassword = $('productListing').attr('apipassword');
var numberOfItems = $('productListing').attr('numberofitems');
var selectTemplate = $('productListing').attr('selecttemplate');
var productSearchUrl = new URL(location.href);
var searchQuery = productSearchUrl.searchParams.get("searchQuery");
console.log("API URL: " + apiUrl + ", APi Username: " + apiUsername + ", API Password: " + apiPassword + ", Number of Items: " + numberOfItems + ", Selected Template: " + selectTemplate);

$('productListing').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw">');



$('.searchButton').click(function(){
	var searchsku = $("#search_query").autocomplete("instance").selectedItem.id;
	if(searchsku == '' || searchsku == undefined){
		console.log('SKU not defined');
	} else {
		location.href = 'http://localhost/websites/' + projectName + '/product-detail.layout?sku=' + searchsku;
	}
});

// Do Login
$.ajax({
  type: 'GET',
  url: '',
  async: false,
  data: "{ 'email': '', 'password': '' }",
  dataType: 'json',
  success: function (data) {
    console.log("Logged in successfully!");
    console.log('Login Data: ', data);
    var loginToken = data.token;
  }
});

// $.ajax({
//   type: 'GET',
//   url: 'http://172.16.230.159:8181/api/products/product/result/' + searchQuery,
//   async: false,
//   beforeSend: function (xhr) {
// 		xhr.setRequestHeader ("Authorization", "Basic " + btoa( apiUsername + ":" + apiPassword));
// 	},
//   dataType: 'json',
//   success: function (data) {
//     console.log("Product data received...!!!")
//     rawData = data.hits.hits; 
//     productData = rawData;
//   }
// });

console.log(productData);

if(selectTemplate == 'portrait'){
	if(numberOfItems == 'all' || numberOfItems == '' ){
		productHtml = '';
		for( var i in productData){
			productHtml += '<a href="http://localhost/websites/' + projectName + '/product-detail.layout?sku=' + productData[i]._source.sku + '"><figure class="product-card"><img class="product-card-img" src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'"/><figcaption><h3 class="product-card-title">'+ productData[i]._source.product_name + '</h3><div class="product-description">'+ productData[i]._source.description +'</div><p class="product-card-address"><i class="fa fa-map-marker"></i> '+ productData[i]._source.country +'</p><div class="product-card-price"><span class="price-savings">Save 25%</span> <s class="original-price">$ '+ productData[i]._source.price_1 +'</s><p class="amount-price"><span class="from">starting at</span> $ '+ productData[i]._source.price_1 +'</p></div></a><button class="btn btn-info btn-block" style="margin-bottom: 10px" id="addToCartBtn" onclick="addToCart(\''+productData[i]._source.sku+'\')">Add To Cart</button></figcaption></figure>';
		}
	} else {
		productHtml = '';
		for( var i = 0; i<numberOfItems; i++ ){
			productHtml += '<a href="http://localhost/websites/' + projectName + '/product-detail.layout?sku=' + productData[i]._source.sku + '"><figure class="product-card"><img class="product-card-img" src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'"/><figcaption><h3 class="product-card-title">'+ productData[i]._source.product_name + '</h3><div class="product-description">'+ productData[i]._source.description +'</div><p class="product-card-address"><i class="fa fa-map-marker"></i> '+ productData[i]._source.country +'</p><div class="product-card-price"><span class="price-savings">Save 25%</span> <s class="original-price">$ '+ productData[i]._source.price_1 +'</s><p class="amount-price"><span class="from">starting at</span> $ '+ productData[i]._source.price_1 +'</p></div></a><button class="btn btn-info btn-block" style="margin-bottom: 10px" id="addToCartBtn" onclick="addToCart(\''+productData[i]._source.sku+'\')">Add To Cart</button></figcaption></figure>';
		}
	}
} else if(selectTemplate == 'landscape'){
	if(numberOfItems == 'all' || numberOfItems == '' ){
		productHtml = '';
		for( var i in productData){
			productHtml += '<div class="product_grid"> <ul class="product_list list"> <a href="http://localhost/websites/' + projectName + '/product-detail.layout?sku=' + productData[i]._source.sku + '"><li class="product_item"> <div class="product_sale"> <p>On Sale</p></div><div class="product_image"> <a href="http://localhost/websites/' + projectName + '/product-detail.layout?sku=' + productData[i]._source.sku + '"><img src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'" alt="Product images"></a> <div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> <div class="quick_view"> <a href="#"> <h6>Quick View</h6> </a> </div></div></div><div class="product_values"> <div class="product_title"> <h5>'+ productData[i]._source.product_name + '</h5> </div><div class="product_price"> <a href="#"><span class="price_old">$'+ productData[i]._source.pric1 + '</span> <span class="price_new">$'+ productData[i]._source.price_1 + '</span></a> <span class="product_rating"></span> </div><div class="product_desc"> <p class="truncate">'+ productData[i]._source.description + '</p></div><div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart" onclick="addToCart(\''+productData[i]._source.sku+'\')"></i></button> </div></div></li></a></ul> </div>';
		}
	} else {
		productHtml = '';
		for( var i = 0; i<numberOfItems; i++ ){
			productHtml += '<div class="product_grid"> <ul class="product_list list"> <a href="http://localhost/websites/' + projectName + '/product-detail.layout?sku=' + productData[i]._source.sku + '"><li class="product_item"> <div class="product_sale"> <p>On Sale</p></div><div class="product_image"> <a href="http://localhost/websites/' + projectName + '/product-detail.layout?sku=' + productData[i]._source.sku + '"><img src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'" alt="Product images"></a> <div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> <div class="quick_view"> <a href="#"> <h6>Quick View</h6> </a> </div></div></div><div class="product_values"> <div class="product_title"> <h5>'+ productData[i]._source.product_name + '</h5> </div><div class="product_price"> <a href="#"><span class="price_old">$'+ productData[i]._source.pric1 + '</span> <span class="price_new">$'+ productData[i]._source.price_1 + '</span></a> <span class="product_rating"></span> </div><div class="product_desc"> <p class="truncate">'+ productData[i]._source.description + '</p></div><div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart" onclick="addToCart(\''+productData[i]._source.sku+'\')"></i></button> </div></div></li></a></ul> </div>';
		}
	}
} else if(selectTemplate == 'creative'){
	if(numberOfItems == "all" || numberOfItems == "" ){
		productHtml = '';
		for( var i in productData){
			productHtml += '<div class=""> <div class=""> <div class="col-md-3"> <div class="wrp-product-2"> <img src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'" alt="Lorem Ipsum"/> <div class="add-to-cart" onclick="addToCart(\''+productData[i]._source.sku+'\')"><i class="ion-android-add"></i><span>Add to Cart</span></div><a href="http://localhost/websites/' + projectName + '/product-detail.layout?sku=' + productData[i]._source.sku + '"> <div class="wrp-row"> <h3>'+ productData[i]._source.product_name + '</h3> <div class="price"> <s>$ '+ productData[i]._source.price_1 +'</s> </div><p><small>Country: <b>'+ productData[i]._source.country +'</b></small></p></div></a></div></div></div></div>';
		}
	} else {
		productHtml = '';
		for( var i = 0; i<numberOfItems; i++ ){
			productHtml += '<div class=""> <div class=""> <div class="col-md-3"> <div class="wrp-product-2"> <img src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'" alt="Lorem Ipsum"/> <div class="add-to-cart" onclick="addToCart(\''+productData[i]._source.sku+'\')"><i class="ion-android-add"></i><span>Add to Cart</span></div><a href="http://localhost/websites/' + projectName + '/product-detail.layout?sku=' + productData[i]._source.sku + '"> <div class="wrp-row"> <h3>'+ productData[i]._source.product_name + '</h3> <div class="price"> <s>$ '+ productData[i]._source.price_1 +'</s> </div><p><small>Country: <b>'+ productData[i]._source.country +'</b></small></p></div></a></div></div></div></div>';
		}
	}
}

$('#' + id).html(productHtml);