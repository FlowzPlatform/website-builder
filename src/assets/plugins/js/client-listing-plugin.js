// $(function() {
  
//   transition_timeout = 40;
  
//   $('.title_items').click(function() {
    
//     current = $(this).next().find('li');
    
//     $(this).toggleClass('active');
//     current.toggleClass('visible');
    
//     if ($(this).hasClass('active')) {
//       for( i = 0; i <= current.length; i++ ) {
//         $(current[i]).css('transition-delay', transition_timeout * i + 'ms');
//       }
//     }
//     else {
//       for( i = current.length, j = -1; i >= 0; i--, j++) {
//         $(current[i]).css('transition-delay', transition_timeout * j + 'ms');
//       }
//     }
  
//   });
// });












var rawData = {};
var productData = {};
var productHtml = '';
// var styles = '<style type="text/css">.product-card>a,.product-card>a:hover{text-decoration-line:none;text-decoration-style:initial;text-decoration-color:initial}*{box-sizing:border-box}body{margin:0}.product-card{max-width:23%;font-size:12px;display:inline-block;box-shadow:#999 2px 2px 15px;margin:5px}.product-card>a{background-image:initial;background-position-x:initial;background-position-y:initial;background-size:initial;background-repeat-x:initial;background-repeat-y:initial;background-attachment:initial;background-origin:initial;background-clip:initial;background-color:#f2f2f2;color:#333;transition-duration:.1s;transition-timing-function:initial;transition-delay:initial;transition-property:all;position:relative;display:block;z-index:0;padding-bottom:5px}.product-card>a:hover{box-shadow:rgba(0,0,0,.3) 0 1px 3px}.product-card-title{min-height:70px;font-size:24px}.product-description{min-height:70px;max-height:70px;overflow-y:auto}.product-card-img{display:block;height:250px;width:100%}.product-card figcaption{display:block;padding:0 10px}.product-card .product-card-address{color:#888;line-height:1.2}.product-card .product-card-address i{font-size:14px;margin-right:2px;line-height:1.2}.product-card .product-card-price{display:block;text-align:right}.product-card .product-card-price .original-price,.product-card .product-card-price .price-savings{line-height:22px;display:inline-block;vertical-align:middle}.product-card .product-card-price .price-savings{float:left;color:#82b548}.product-card .product-card-price .original-price{color:#aaa;font-size:14px}.product-card .product-card-price .amount-price{text-align:right;font-size:20px;color:#82b548}.product-card .product-card-price .from{font-size:12px}.c3308{display:block;width:100%}</style>';

var id = $('productListing').attr('id');
var apiUrl = $('productListing').attr('apiurl');
var apiUsername = $('productListing').attr('apiusername');
var apiPassword = $('productListing').attr('apipassword');
var numberOfItems = $('productListing').attr('numberofitems');
var selectTemplate = $('productListing').attr('selecttemplate');
console.log("API URL: " + apiUrl + ", APi Username: " + apiUsername + ", API Password: " + apiPassword + ", Number of Items: " + numberOfItems + ", Selected Template: " + selectTemplate);

$('productListing').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw">');

$(function() {
    $.ajax({
        type: 'POST',
        url: apiUrl,
        async: true,
        data: " {\r\n \t\"_source\":[\"product_name\",\"sku\"]\r\n}",
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(apiUsername + ":" + apiPassword));
        },
        dataType: 'json',
        success: function(data) {
            let availableTags = data.hits.hits.map(function(a) { return { id: a._source.sku, value: a._source.product_name } })
            $("#search_query").autocomplete({
                source: availableTags
            });
            console.log(availableTags);
        }
    });
});

$('.searchButton').click(function(){
	var searchsku = $("#search_query").autocomplete("instance").selectedItem.id;
	if(searchsku == '' || searchsku == undefined){
		console.log('SKU not defined');
	} else {
		location.href = 'http://localhost/exported/product-detail.html?sku=' + searchsku;
	}
});


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

if(selectTemplate == 'portrait'){
	if(numberOfItems == 'all' || numberOfItems == '' ){
		productHtml = '';
		for( var i in productData){
			productHtml += '<a href="http://localhost/exported/product-detail.html?sku=' + productData[i]._source.sku + '"><figure class="product-card"><img class="product-card-img" src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'"/><figcaption><h3 class="product-card-title">'+ productData[i]._source.product_name + '</h3><div class="product-description">'+ productData[i]._source.description +'</div><p class="product-card-address"><i class="fa fa-map-marker"></i> '+ productData[i]._source.country +'</p><div class="product-card-price"><span class="price-savings">Save 25%</span> <s class="original-price">$ '+ productData[i]._source.price +'</s><p class="amount-price"><span class="from">starting at</span> $ '+ productData[i]._source.price +'</p></div></figcaption></figure></a>';
		}
	} else {
		productHtml = '';
		for( var i = 0; i<numberOfItems; i++ ){
			productHtml += '<a href="http://localhost/exported/product-detail.html?sku=' + productData[i]._source.sku + '"><figure class="product-card"><img class="product-card-img" src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'"/><figcaption><h3 class="product-card-title">'+ productData[i]._source.product_name + '</h3><div class="product-description">'+ productData[i]._source.description +'</div><p class="product-card-address"><i class="fa fa-map-marker"></i> '+ productData[i]._source.country +'</p><div class="product-card-price"><span class="price-savings">Save 25%</span> <s class="original-price">$ '+ productData[i]._source.price +'</s><p class="amount-price"><span class="from">starting at</span> $ '+ productData[i]._source.price +'</p></div></figcaption></figure></a>';
		}
	}
} else if(selectTemplate == 'landscape'){
	if(numberOfItems == 'all' || numberOfItems == '' ){
		productHtml = '';
		for( var i in productData){
			productHtml += '<div class="product_grid"> <ul class="product_list list"> <a href="http://localhost/exported/product-detail.html?sku=' + productData[i]._source.sku + '"><li class="product_item"> <div class="product_sale"> <p>On Sale</p></div><div class="product_image"> <a href="http://localhost/exported/product-detail.html?sku=' + productData[i]._source.sku + '"><img src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'" alt="Product images"></a> <div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> <div class="quick_view"> <a href="#"> <h6>Quick View</h6> </a> </div></div></div><div class="product_values"> <div class="product_title"> <h5>'+ productData[i]._source.product_name + '</h5> </div><div class="product_price"> <a href="#"><span class="price_old">$'+ productData[i]._source.price + '</span> <span class="price_new">$'+ productData[i]._source.price + '</span></a> <span class="product_rating"></span> </div><div class="product_desc"> <p class="truncate">'+ productData[i]._source.description + '</p></div><div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> </div></div></li></a></ul> </div>';
			// productHtml += '<figure class="product-card"><img class="product-card-img" src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.image_url+'"/><figcaption><h3 class="product-card-title">'+ productData[i]._source.title + '</h3><div class="product-description">'+ productData[i]._source.description +'</div><p class="product-card-address"><i class="fa fa-map-marker"></i> '+ productData[i]._source.country +'</p><div class="product-card-price"><span class="price-savings">Save 25%</span> <s class="original-price">$ '+ productData[i]._source.price +'</s><p class="amount-price"><span class="from">starting at</span> $ '+ productData[i]._source.price +'</p></div></figcaption></figure>';
		}
	} else {
		productHtml = '';
		for( var i = 0; i<numberOfItems; i++ ){
			productHtml += '<div class="product_grid"> <ul class="product_list list"> <a href="http://localhost/exported/product-detail.html?sku=' + productData[i]._source.sku + '"><li class="product_item"> <div class="product_sale"> <p>On Sale</p></div><div class="product_image"> <a href="http://localhost/exported/product-detail.html?sku=' + productData[i]._source.sku + '"><img src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'" alt="Product images"></a> <div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> <div class="quick_view"> <a href="#"> <h6>Quick View</h6> </a> </div></div></div><div class="product_values"> <div class="product_title"> <h5>'+ productData[i]._source.product_name + '</h5> </div><div class="product_price"> <a href="#"><span class="price_old">$'+ productData[i]._source.price + '</span> <span class="price_new">$'+ productData[i]._source.price + '</span></a> <span class="product_rating"></span> </div><div class="product_desc"> <p class="truncate">'+ productData[i]._source.description + '</p></div><div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> </div></div></li></a></ul> </div>';
		}
	}
} else if(selectTemplate == 'creative'){
	if(numberOfItems == "all" || numberOfItems == "" ){
		productHtml = '';
		for( var i in productData){
			productHtml += '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"><div class="listing"> <div class="product"> <a class="img-wrapper" href="http://localhost/exported/product-detail.html?sku='+productData[i]._source.sku+'"> <img src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'" alt="Pink running shoe"/> </a> <div class="note on-sale" style="position: absolute;top: 0;left: 0;padding: 4px 8px;font-size: 0.9em;background: #00ba2f;color: #fff;">On sale</div><div class="info"> <div class="slide-title"><a href="#">'+ productData[i]._source.product_name+'</a></div><div class="price sale">$'+ productData[i]._source.price+'</div><div class="price old">$'+ productData[i]._source.price+'</div></div><div class="actions-wrapper"> <a href="#" class="add-btn wishlist"><!--<i class="fa fa-heart-o">-->Wishlist</a> <a href="#" class="add-btn cart"><!--<i class="fa fa-shopping-cart">--> Cart</a> </div></div></div>';
		}
	} else {
		productHtml = '';
		for( var i = 0; i<numberOfItems; i++ ){
			productHtml += '<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"><div class="listing"> <div class="product"> <a class="img-wrapper" href="http://localhost/exported/product-detail.html?sku='+productData[i]._source.sku+'"> <img src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'" alt="Pink running shoe"/> </a> <div class="note on-sale" style="position: absolute;top: 0;left: 0;padding: 4px 8px;font-size: 0.9em;background: #00ba2f;color: #fff;">On sale</div><div class="info"> <div class="slide-title"><a href="#">'+ productData[i]._source.product_name+'</a></div><div class="price sale">$'+ productData[i]._source.price+'</div><div class="price old">$'+ productData[i]._source.price+'</div></div><div class="actions-wrapper"> <a href="#" class="add-btn wishlist"><!--<i class="fa fa-heart-o">-->Wishlist</a> <a href="#" class="add-btn cart"><!--<i class="fa fa-shopping-cart">--> Cart</a> </div></div></div>';
		}
	}
}

$('#' + id).html(productHtml);