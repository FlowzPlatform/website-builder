$(document).ready(function() {
  updateWishlistCount(JSON.parse(localStorage.getItem("savedWishlist")).length , 1);
  updateWishlistCount(JSON.parse(localStorage.getItem("savedCart")).length , 2);
  updateWishlistCount(JSON.parse(localStorage.getItem("savedCompared")).length , 3);
})

$(document).on('click', '.ecomm-component', function(e) {
	e.preventDefault();
  	let sku=$(this).data('sku');
    //let type=$(this).data('type');
    let supplier_id=$(this).data('supplier_id');
    if (e.target.classList.contains("ecomm-cart")) {
      let type=1;
    }else if(e.target.classList.contains("ecomm-wishlist")) {
      let type=2;
    }else if(e.target.classList.contains("ecomm-compare")) {
      let type=3;
    }
  	addInTransaction(sku,type,supplier_id)
})

function addInTransaction(sku,type,supplier_id){
  if (localStorage.getItem("isAuthenticated")  == null ) {
    dataSaveToLocal(sku,type,supplier_id)
  } else{
    dataSaveToDatabase(sku,type,supplier_id)
  }
}

function dataSaveToDatabase(sku,type,supplier_id){
  var data = { 'type': type,'sku':sku,'supplier_id': supplier_id,'user_id' : 1 };
  $.ajax({
    type : 'POST',
    url : 'http://localhost:3030/transaction',
    data : data,
    dataType : 'json',
    success : function(response_data) {
      if (response_data.status=='success'){
        alert(response_data.success_msg)
      }
      else if(response_data.status=='error')
      {
        alert(response_data.error_msg)
      }
    }
  })
}

function dataSaveToLocal(sku,type,supplier_id){
  let decideLocalStorageKey = decide_localStorage_key(type)
  if (localStorage.getItem(decideLocalStorageKey) != null) {
    let values = JSON.parse(localStorage.getItem(decideLocalStorageKey));
    let wishlistDataSaveToLocalhost = checkIfExist(sku , type ,supplier_id, values); // pass all the params and the last one is the array
    localStorage.setItem(decideLocalStorageKey , JSON.stringify(wishlistDataSaveToLocalhost))
    updateWishlistCount(values.length , type);

  }else{
    var data = [];
    data.push({ 'type': type,'sku':sku,'supplier_id': supplier_id });
    localStorage.setItem(decideLocalStorageKey , JSON.stringify(data))
    updateWishlistCount(JSON.parse(localStorage.getItem(decideLocalStorageKey)).length , type);
    alert("item successfully added")
  }
}

function updateWishlistCount(count , type) {
  if (type == 1) {
    document.getElementById("wishlistCount").innerHTML = count ;

  }
  if(type == 2){
    document.getElementById("cartCount").innerHTML = count ;

  }
  if(type == 3){
    document.getElementById("comparedCount").innerHTML = count ;

  }
}

function decide_localStorage_key(type){
  if (type == 1) {
    return "savedWishlist"
  }else if(type == 2){
    return  "savedCart"
  }else if(type ==3){
    return "savedCompared"
  }
}

function checkIfExist(sku , type ,supplier_id,array) {  // The last one is array
    var id = array.length + 1;
    var found = array.some(function (el) {
      return el.sku == sku && el.supplier_id == supplier_id;
    });
    if (!found)
    {
        array.push({ type: type , sku: sku ,  supplier_id: supplier_id  });
        alert("item successfully added")
    }else{
      alert("item already added")
    }
    return array
}
