var brandName = '';
var globalVariables = [];
$('body [id="brandName"]').html('');
$('body [id="brandLogo"]').attr('src', '../assets/brand-logo.png');

$.getJSON( "../assets/config.json", function( data ) {  
    var configData = data;
    brandName = configData[1].projectSettings[0].BrandName;
    globalVariables = configData[1].projectSettings[1].GlobalVariables;
});

// Bootstrap Tooltips
$(document).ready(function(){$('[data-toggle="tooltip"]').tooltip();});

$('#wishlist').click(function(){$('.wishlist').fadeToggle('slow');}); 

$('#compare').click(function(){$('.compare').fadeToggle('slow');});


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
console.log("API URL: " + apiUrl + ", APi Username: " + apiUsername + ", API Password: " + apiPassword + ", Number of Items: " + numberOfItems + ", Selected Template: " + selectTemplate);

$('productListing').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw">');

//Ecommerce Header script
$('#loginform').click(function(){
  $('.login').fadeToggle('slow');
});


// Variable Replacements
setTimeout(async function(){
    $('body [id="brandName"]').html(brandName);
  
    // Replace all global variables
    for (var i = 0; i < globalVariables.length; i++){

        switch(globalVariables[i].variableType){
            case 'text':
                if(($('body [data-id="' + globalVariables[i].variableId + '"]').length > 0)){
                    //var encodeText = String(globalVariables[i].variableValue).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
                    $('body [data-id="' + globalVariables[i].variableId + '"]').text(globalVariables[i].variableValue);
                } 
                break;
            case 'image':
                var _varId = globalVariables[i].variableId;
                var _varValue = globalVariables[i].variableValue;
                if(($('body [data-id="' + _varId + '"]').length > 0)){

                    if(globalVariables[i].isImageUrl == true){
                        $('body [data-id="' + _varId + '"]').children('img').attr('src', _varValue);
                    } else {
                        var getImageData = await $.ajax({
                          url:'../assets/' + _varValue,
                          method: 'GET',
                          type: 'HEAD',
                          async: true,
                          error: function(err)
                          {
                            return false;
                          },
                          success: function(res)
                          {
                            $('body [data-id="' + _varId + '"]').children('img').attr('src', res);
                            return true;
                          }
                        });
                    }
                  
                } 
                break;
            case 'hyperlink':
                if(($('body [data-id="' + globalVariables[i].variableId + '"]').length > 0)){
                    $('body [data-id="' + globalVariables[i].variableId + '"]').children('a')[0].text = globalVariables[i].variableTitle;
                    $('body [data-id="' + globalVariables[i].variableId + '"]').children('a')[0].href = globalVariables[i].variableValue;
                }
                break; 
            case 'html':
                if(($('body [data-id="' + globalVariables[i].variableId + '"]').length > 0)){
                    $('body [data-id="' + globalVariables[i].variableId + '"]').html(globalVariables[i].variableValue);
                } 
                break;
            default:
                console.log('No Variables Found'); 
        }

    }
}, 1000);

function validateForm() {
    var keyword = document.forms["myForm"]["keyword"].value;
    console.log(keyword);
    var category = document.forms["myForm"]["category"].value;
    console.log(category);
    var sku = document.forms["myForm"]["sku"].value;
    var mip = document.forms["myForm"]["mip"].value;
    var maxprice = document.forms["myForm"]["maxprice"].value;
    var color = document.forms["myForm"]["color"].value;
    var tag = document.forms["myForm"]["tag"].value;
    if (keyword == "" && category == "" && sku == "" && mip == "" && maxprice == "" && color == "" && tag == "") {
        alert("At least one field must be filled out");
        return false;
    }
    var reg = /^\d+$/;
    if (mip != reg && mip != "") {
        alert("minimum price can only be number")
    }
    if (maxprice != reg && maxprice != "") {
        alert("Maximum price can only be number")
    }
    if (sku != reg && sku != "") {
        alert("SKU can only be number")
    }
}

function clearForm(evt){
    evt.preventDefault();
    // document.forms["myForm"]["keyword"].value = "";
}

//$('#loginform').click(function(){$('.login').fadeToggle('slow');});

$(function() {
    $.ajax({
        type: 'POST',
        url: 'https://b9934e7ce239fa438ae416c8c7181a94.us-east-1.aws.found.io:9243/pdm1/_search',
        async: true,
        data: " {\r\n \t\"_source\":[\"product_name\",\"sku\"]\r\n}",
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("elastic:KdZuapCcaHrQajxC15EVos0a"));
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
		// location.href = 'http://localhost/websites/' + projectName + '/product-detail.layout?sku=' + searchsku;
		location.href = 'http://localhost/websites/'+projectName+'/product-listing.layout';
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
			productHtml += '<a href="http://localhost/websites/' + projectName + '/MetalsmithOutput/product-detail.html?sku=' + productData[i]._source.sku + '"><figure class="product-card"><img class="product-card-img" src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'"/><figcaption><h3 class="product-card-title">'+ productData[i]._source.product_name + '</h3><div class="product-description">'+ productData[i]._source.description +'</div><p class="product-card-address"><i class="fa fa-map-marker"></i> '+ productData[i]._source.country +'</p><div class="product-card-price"><span class="price-savings">Save 25%</span> <s class="original-price">$ '+ productData[i]._source.price_1 +'</s><p class="amount-price"><span class="from">starting at</span> $ '+ productData[i]._source.price_1 +'</p></div></a><button class="btn btn-info btn-block" style="margin-bottom: 10px" id="addToCartBtn" onclick="addToCart(\''+productData[i]._source.sku+'\')">Add To Cart</button></figcaption></figure>';
		}
	} else {
		productHtml = '';
		for( var i = 0; i<numberOfItems; i++ ){
			productHtml += '<a href="http://localhost/websites/' + projectName + '/MetalsmithOutput/product-detail.html?sku=' + productData[i]._source.sku + '"><figure class="product-card"><img class="product-card-img" src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'"/><figcaption><h3 class="product-card-title">'+ productData[i]._source.product_name + '</h3><div class="product-description">'+ productData[i]._source.description +'</div><p class="product-card-address"><i class="fa fa-map-marker"></i> '+ productData[i]._source.country +'</p><div class="product-card-price"><span class="price-savings">Save 25%</span> <s class="original-price">$ '+ productData[i]._source.price_1 +'</s><p class="amount-price"><span class="from">starting at</span> $ '+ productData[i]._source.price_1 +'</p></div></a><button class="btn btn-info btn-block" style="margin-bottom: 10px" id="addToCartBtn" onclick="addToCart(\''+productData[i]._source.sku+'\')">Add To Cart</button></figcaption></figure>';
		}
	}
} else if(selectTemplate == 'landscape'){
	if(numberOfItems == 'all' || numberOfItems == '' ){
		productHtml = '';
		for( var i in productData){
			productHtml += '<div class="product_grid"> <ul class="product_list list"> <a href="http://localhost/websites/' + projectName + '/MetalsmithOutput/product-detail.html?sku=' + productData[i]._source.sku + '"><li class="product_item"> <div class="product_sale"> <p>On Sale</p></div><div class="product_image"> <a href="http://localhost/websites/' + projectName + '/MetalsmithOutput/product-detail.html?sku=' + productData[i]._source.sku + '"><img src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'" alt="Product images"></a> <div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> <div class="quick_view"> <a href="#"> <h6>Quick View</h6> </a> </div></div></div><div class="product_values"> <div class="product_title"> <h5>'+ productData[i]._source.product_name + '</h5> </div><div class="product_price"> <a href="#"><span class="price_old">$'+ productData[i]._source.pric1 + '</span> <span class="price_new">$'+ productData[i]._source.price_1 + '</span></a> <span class="product_rating"></span> </div><div class="product_desc"> <p class="truncate">'+ productData[i]._source.description + '</p></div><div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart" onclick="addToCart(\''+productData[i]._source.sku+'\')"></i></button> </div></div></li></a></ul> </div>';
		}
	} else {
		productHtml = '';
		for( var i = 0; i<numberOfItems; i++ ){
			productHtml += '<div class="product_grid"> <ul class="product_list list"> <a href="http://localhost/websites/' + projectName + '/MetalsmithOutput/product-detail.html?sku=' + productData[i]._source.sku + '"><li class="product_item"> <div class="product_sale"> <p>On Sale</p></div><div class="product_image"> <a href="http://localhost/websites/' + projectName + '/MetalsmithOutput/product-detail.html?sku=' + productData[i]._source.sku + '"><img src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'" alt="Product images"></a> <div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart"></i></button> <div class="quick_view"> <a href="#"> <h6>Quick View</h6> </a> </div></div></div><div class="product_values"> <div class="product_title"> <h5>'+ productData[i]._source.product_name + '</h5> </div><div class="product_price"> <a href="#"><span class="price_old">$'+ productData[i]._source.pric1 + '</span> <span class="price_new">$'+ productData[i]._source.price_1 + '</span></a> <span class="product_rating"></span> </div><div class="product_desc"> <p class="truncate">'+ productData[i]._source.description + '</p></div><div class="product_buttons"> <button class="product_heart"><i class="fa fa-heart"></i></button> <button class="product_compare"><i class="fa fa-random"></i></button> <button class="add_to_cart"><i class="fa fa-shopping-cart" onclick="addToCart(\''+productData[i]._source.sku+'\')"></i></button> </div></div></li></a></ul> </div>';
		}
	}
} else if(selectTemplate == 'creative'){
	if(numberOfItems == "all" || numberOfItems == "" ){
		productHtml = '';
		for( var i in productData){
			productHtml += '<div class=""> <div class=""> <div class="col-md-3"> <div class="wrp-product-2"> <img src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'" alt="Lorem Ipsum"/> <div class="add-to-cart" onclick="addToCart(\''+productData[i]._source.sku+'\')"><i class="ion-android-add"></i><span>Add to Cart</span></div><a href="http://localhost/websites/' + projectName + '/MetalsmithOutput/product-detail.html?sku=' + productData[i]._source.sku + '"> <div class="wrp-row"> <h3>'+ productData[i]._source.product_name + '</h3> <div class="price"> <s>$ '+ productData[i]._source.price_1 +'</s> </div><p><small>Country: <b>'+ productData[i]._source.country +'</b></small></p></div></a></div></div></div></div>';
		}
	} else {
		productHtml = '';
		for( var i = 0; i<numberOfItems; i++ ){
			productHtml += '<div class=""> <div class=""> <div class="col-md-3"> <div class="wrp-product-2"> <img src="http://104.239.249.114/live-api/web/images/'+ productData[i]._source.default_image+'" alt="Lorem Ipsum"/> <div class="add-to-cart" onclick="addToCart(\''+productData[i]._source.sku+'\')"><i class="ion-android-add"></i><span>Add to Cart</span></div><a href="http://localhost/websites/' + projectName + '/MetalsmithOutput/product-detail.html?sku=' + productData[i]._source.sku + '"> <div class="wrp-row"> <h3>'+ productData[i]._source.product_name + '</h3> <div class="price"> <s>$ '+ productData[i]._source.price_1 +'</s> </div><p><small>Country: <b>'+ productData[i]._source.country +'</b></small></p></div></a></div></div></div></div>';
		}
	}
}

$('#' + id).html(productHtml);
$('.placeholderCard').html('');