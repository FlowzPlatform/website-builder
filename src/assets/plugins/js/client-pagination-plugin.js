var nameAZ = $('Pagination').attr('nameaz');
var nameZA = $('Pagination').attr('nameza');
var priceLH = $('Pagination').attr('pricelh');
var priceHL = $('Pagination').attr('pricehl');
var itemAZ = $('Pagination').attr('itemaz');
var itemZA = $('Pagination').attr('itemza');
console.log("hello from Pagination");
// console.log("nameZA:"+nameZA);

// // console.log("nameAZ:"+nameAZ);

// console.log("priceLH:"+priceLH);

// console.log("priceHL:"+priceHL);

// console.log("itemAZ:"+itemAZ);

// console.log("itemZA:"+itemZA);



var options;

if (nameAZ=='true')
{
	options=options+'<option value="nameAZ">Name [A-Z]</option>'
}

if (nameZA=='true')
{
	options=options+'<option value="nameZA">Name [Z-A]</option>'
}

if (priceLH=='true')
{
	options=options+'<option value="priceLH">Price [Low-High]</option>'
}

if (priceHL=='true')
{
	options=options+'<option value="priceLH">Price [High-Low]</option>'
}

if (itemAZ=='true')
{
	options=options+'<option value="priceLH">#Item [A-Z]</option>'
}

if (itemZA=='true')
{
	options=options+'<option value="itemZA"># Item [Z-A]</option>'
}

var PaginationHTML='<Pagination style="display:block; min-height: 20px; padding: 20px;"><head><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script><style>.fa{margin-top:24px;float: left;font-size: x-large;} select{margin-top:18px; height: 30px;float:left; width:auto;/* display:table-cell; */}a{color: #0088cc; text-decoration: none;}a:hover{color: #005580; text-decoration: underline;}h2{padding-top: 20px;}h2:first-of-type{padding-top: 0;}ul{padding: 0;}.pagination{height: 30px;/* margin: 18px 0; */ float:right;}.pagination ul{/* display: table-cell; */ /* IE7 inline-block hack */ *zoom: 1; margin-left: 0; margin-bottom: 0; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);}.pagination li{display: inline;}.pagination a{float: left; padding: 0 14px; line-height: 34px; text-decoration: none; border: 1px solid #ddd; border-left-width: 0;}.pagination a:hover,.pagination .active a{background-color: #f5f5f5;}.pagination .active a{color: #999999; cursor: default;}.pagination .disabled span,.pagination .disabled a,.pagination .disabled a:hover{color: #999999; background-color: transparent; cursor: default;}.pagination li:first-child a{border-left-width: 1px; -webkit-border-radius: 3px 0 0 3px; -moz-border-radius: 3px 0 0 3px; border-radius: 3px 0 0 3px;}.pagination li:last-child a{-webkit-border-radius: 0 3px 3px 0; -moz-border-radius: 0 3px 3px 0; border-radius: 0 3px 3px 0;}.pagination-centered{text-align: center;}.pagination-right{text-align: right;}.button{background-color: #e7e7e7; /* Green */ border: none; color: black; padding: 10px 32px; text-align: center; text-decoration: none;/* display: table-cell; */ font-size: 16px; margin: 14px 2px; cursor: pointer; float:right;}.paginationtext{margin-top:20px; font-size:medium; color:black; float:left;}</style></head><div class="container"> <div class="row" style="background-color:rgba(208, 208, 208, 0.33); border:groove; margin:5px;"> <div class="col-sm-3"><i style="margin-top:24px;float: left;font-size: x-large;" aria-hidden=true class="fa fa-list fa-2x"><span style=display:inline-block;width:10px></span> </i><i style="margin-top:24px;float: left;" aria-hidden=true class="fa fa-table fa-2x"><span style=display:inline-block;width:15px></span></i> <select style="margin-top:20px;"> <option value="nameAZ"> '+options+'</option> </select> </div><div class="col-sm-4"> <p class="paginationtext"> Showing 130 Products</p><button class="button">Show All</button> </div><div class="col-sm-5"> <div class="pagination"> <ul> <li><a href="#">Prev</a></li><li class="active"> <a href="#">1</a> </li><li><a href="#">2</a></li><li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">Next</a></li></ul> </div></div></div></div></Pagination>'

$('Pagination').html(PaginationHTML);



