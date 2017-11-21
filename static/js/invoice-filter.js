console.log("in invoice filter.js");
 
var customer = $('InvoiceFilter').attr('Customer_Name');
// console.log("customer",customer);
var status = $('InvoiceFilter').attr('Status');
// console.log("status",status);
var amount = $('InvoiceFilter').attr('Amount');
// console.log("amount",amount);
var date = $('InvoiceFilter').attr('Date');
// console.log("date",date);
var dueamount = $('InvoiceFilter').attr('DueAmount');
// console.log("dueamount",dueamount);



var finalCode = '<div><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css"><InvoiceFilter style="display: block; width: 100%;padding:15px"><div class="container"><div class="form-group" id="Customer"><label>Customer Name</label><input class="form-control yes no y n s" id="text1" name="customer1" style="width: 150px !important; min-width: 160px; max-width: 160px;" type="text"></div><div class="form-group" id="status"><label>status</label><select class="form-control ye no y n s" id="menu" name="status" style="width: 150px !important; min-width: 160px; max-width: 160px;" onChange="checkOption(this)"><option value="Select">Select</option><option value="Paid">Paid</option><option value="Unpaid">Unpaid</option></select></div><div class="form-group" id="date"><div class="form-group row"><div class="col-xs-3"><label> From Date</label><input type="date" class="form-control yes ye no n s" id="date2" name="date1" style="width: 150px !important; min-width: 160px; max-width: 160px;" onChange="checkOption(this)"></div><div class="col-xs-3"><label> To Date</label><input type="date" class="form-control yes ye no n s" id="date3" style="width: 150px !important; min-width: 160px; max-width: 160px;"></div></div></div><div class="form-group" id="amount"><div class="form-group row"><div class="col-xs-2"><label>Amount</label><input id="input" class="form-control yes no y n s" id="text1" style="width: 150px !important; min-width: 160px; max-width: 160px;" type="text"></div><div class="col-xs-2"><label>Min-Amount </label><input id="input" class="form-control yes no y n s" id="text1" style="width: 150px !important; min-width: 160px; max-width: 160px;" type="text"></div><div class="col-xs-2"><label>Max-Amount</label><input id="input" class="form-control yes no y n s" id="text1" style="width: 150px !important; min-width: 160px; max-width: 160px;" type="text"></div></div></div><div class="form-group" id="dueamount"><div class="form-group row"><div class="col-xs-2"><label> Due Amount </label><input type="text" class="form-control yes ye no n s" id="date2" style="width: 150px !important; min-width: 160px; max-width: 160px;"></div><div class="col-xs-2"><label>Min-Due Amount</label><input type="text" class="form-control yes ye no n s" id="date2" style="width: 150px !important; min-width: 160px; max-width: 160px;"></div><div class="col-xs-2"><label>Max-Due Amount</label><input type="text" class="form-control yes ye no n s" id="date2" style="width: 150px !important; min-width: 160px; max-width: 160px;"></div></div></div><div class="form-group" id="invoice"><h3> Invoices</h3><table class="table table-bordered table-striped table-collapsed" id="tbdata"><th></th><th>Id</th><th>Name</th><th>Date</th><th>Amount Paid</th><th>Amount Due</th><th> Total Amount</th></table></div></div></InvoiceFilter></div>'

document.addEventListener("DOMContentLoaded",function(event){	
	// if(customer == "false" || customer == "undefined"){
	// 	document.getElementById('Customer').style = "display : none"
	// }
	// if(status == "false" || status == "undefined"){
	// 	document.getElementById('status').style = "display : none"
	// }
	// if(amount == "false" || amount == undefined){
	// 	document.getElementById('amount').style = "display : none"
	// }
	// if(date == "false" || date == "undefined"){
	// 	document.getElementById('date').style = "display : none"
	// }
	// if(dueamount == "false" || dueamount == "undefined"){
	// 	document.getElementById('dueamount').style = "display : none"
	// }
console.log("##customer",customer);
console.log("#status",status);
console.log("#amount",amount);
console.log("#date",date);
console.log("#dueamount",dueamount);


	var customer1 = document.getElementById('text1').value;

	console.log("######",customer1)

	$.ajax({
		type: 'GET',
		url: 'http://172.16.230.88:3001/api/xero/invoice/filter?name=Dweep&app=Test%20Application&cname='+customer1,
		dataType: 'json',
		success: function (data) {
			console.log("Ajax call success", data);
		},error: function(err){
			console.log("Ajax call fail", err)
	    }
	});
})


// productHtml +='<tr><td id="chkbx'+ (b++) +'">' + '<input type="checkbox" name="paid" value="paid" id="'+ (a++) +'">' +'</td><td>'+ item.InvoiceID + '</td><td>'  + item.Contact.Name + '</td><td>' + item.Date + '</td><td>'
// 				         + item.AmountPaid + '</td><td>' + item.AmountDue + '</td><td>' + item.Total + '</td></tr>'



$('InvoiceFilter').html(finalCode);


