var id = $('#myCartListings').attr('id');

var productDetailUrl = new URL(location.href);

var sku = JSON.parse(localStorage.getItem("sku"));

var apiUrl
var apiUsername = '';
var apiPassword = '';

var productHtml;
var productData;

function addToCart(itemsku){
  if(sku == null){
      sku = [];
      sku.push(itemsku);    
      localStorage["sku"] = JSON.stringify(sku);
       alert('Product added to cart!');
  } else {
    if($.inArray(itemsku, sku)<0){
        sku.push(itemsku);    
        localStorage["sku"] = JSON.stringify(sku);
        alert('Product added to cart!');
    } else {
      alert('Product already in cart!');
    }
  }
} 

if (typeof(Storage) !== "undefined") {
    if(localStorage.getItem("sku")){
      console.log('Cart Data Found!!', JSON.parse(localStorage.getItem("sku")));
      var itemsInCart = JSON.parse(localStorage.getItem("sku"));
      for (item in itemsInCart){
      $.ajax({
        type: 'GET',
        url: apiUrl + '?q=sku:' + itemsInCart[item],
        async: false,
        beforeSend: function (xhr) {
          xhr.setRequestHeader ("Authorization", "Basic " + btoa( apiUsername + ":" + apiPassword));
        },
        dataType: 'json',
        success: function (data) {
          console.log("Product data received...!!!")
          rawData = data.hits.hits; 
          productData = rawData;
          console.log('Each Product detail: ', productData);
          productHtml += '<div class="col-md-12 myCartListings"><div id="productImage" class="col-md-4"><img src="http://104.239.249.114/live-api/web/images/' + productData[0]._source.default_image + '" width="100%" height="50%"></div><div id="Productdetails" class="col-md-8"><button class="btn btn-danger remove"><i class="fa fa-trash-o" aria-hidden="true"></i></button><h2>'+productData[0]._source.product_name+'</h2><h4>Item # : '+productData[0]._source.product_id+'</h4><h4>$'+productData[0]._source.price_1+' (R) Qty. 36-95</h4><h4>Product Description</h4><hr><h6>'+productData[0]._source.description+'</h6><br><div id="colorofproductdiv"><img src="http://www.swedausa.com/product/color/137.jpg" height="27px" width="27px" class="colorofproduct"><img src="http://www.swedausa.com/product/color/329.jpg" height="27px" width="27px" class="colorofproduct"><img src="http://www.swedausa.com/product/color/573.jpg" height="27px" width="27px" class="colorofproduct"><img src="http://www.swedausa.com/product/color/329.jpg" height="27px" width="27px" class="colorofproduct"></div><div id="comment"><h6>Comments:</h6><textarea class="form-control" rows="5"></textarea></div></div></div>';
        }
      });
    }
    }
} else {
  console.log('Sorry! No Web Storage support..');
}



$('#myCartListings').html(productHtml);

