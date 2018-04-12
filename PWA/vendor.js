
 var inames = []
 var iqtyp = []
 var iprice = []
 
 var buko = []
 var qua = []
 var pri = []
 
 var stick = []
 var quan = []
 var pricey = []
 
 var drum = []
 var qty = []
 var price = []
 

function addItem(){
  
  inames.push(document.getElementById('pname').value)
  iqtyp.push(parseInt(document.getElementById('txtNumber').value))
  iprice.push(parseInt(document.getElementById('price').value))
  
  displayCart()
   
}
function addItem2(){
  
  drum.push(document.getElementById('drum2').value)
  qty.push(parseInt(document.getElementById('quant').value))
  price.push(parseInt(document.getElementById('pr').value))
  
  displayCart2()
   
}
function addItems(){
  
  buko.push(document.getElementById('pnames').value)
  qua.push(parseInt(document.getElementById('pqtys').value))
  pri.push(parseInt(document.getElementById('prices').value))
  
  displayCarts()
   
}
function addItem1(){
  
  stick.push(document.getElementById('pnam').value)
  quan.push(parseInt(document.getElementById('pqt').value))
  pricey.push(parseInt(document.getElementById('pric').value))
  
  displayCart1()
   
}
function add()
{
  var txtNumber = document.getElementById("txtNumber");
  var newNumber = parseInt(txtNumber.value) + 1;
  txtNumber.value = newNumber;
}

function subtract()
{
  var txtNumber = document.getElementById("txtNumber");
  var newNumber = parseInt(txtNumber.value) - 1;
  txtNumber.value = newNumber;
}

function add1()
{
  var txtNumber = document.getElementById("pqtys");
  var newNumber = parseInt(txtNumber.value) + 1;
  txtNumber.value = newNumber;
}

function subtract1()
{
  var txtNumber = document.getElementById("pqtys");
  var newNumber = parseInt(txtNumber.value) - 1;
  txtNumber.value = newNumber;
}

function add2()
{
  var txtNumber = document.getElementById("pqt");
  var newNumber = parseInt(txtNumber.value) + 1;
  txtNumber.value = newNumber;
}

function subtract2()
{
  var txtNumber = document.getElementById("pqt");
  var newNumber = parseInt(txtNumber.value) - 1;
  txtNumber.value = newNumber;
}
function adds()
{
  var txtNumber = document.getElementById("quant");
  var newNumber = parseInt(txtNumber.value) + 1;
  txtNumber.value = newNumber;
}

function subtracts()
{
  var txtNumber = document.getElementById("quant");
  var newNumber = parseInt(txtNumber.value) - 1;
  txtNumber.value = newNumber;
}
function displayCarts(){
  cartdata = '<table class = "summary"><tr><th>Product Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';
  
  total = 0;
  totalRemit = 0;
  totalProfit = 0;
    
    for (i=0; i<buko.length; i++){
    total += qua[i] * pri[i]
    totalRemit += qua[i] * pri[i]
    totalProfit = totalRemit * 0.6;
    cartdata += "<tr><td>" + buko[i] + "</td><td>" + qua[i] + "</td><td>" + pri[i] + "</td><td>" + qua[i] * pri[i] + "<button onclick='delElement(" + i + ")'> X </button></td></tr>"
	}
  for (i=0; i<drum.length; i++){
    total += qty[i] * price[i]
    totalRemit += qty[i] * price[i]
    totalProfit = totalRemit * 0.6;
    cartdata += "<tr><td>" + drum[i] + "</td><td>" + qty[i] + "</td><td>" + price[i] + "</td><td>" + qty[i] * price[i] + "<button onclick='delElement(" + i + ")'> X </button></td></tr>"
  }
    for (i=0; i<inames.length; i++){
    total += iqtyp[i] * iprice[i]
    totalRemit += iqtyp[i] * iprice[i]
    totalProfit = totalRemit * 0.6;
    cartdata += "<tr><td>" + inames[i] + "</td><td>" + iqtyp[i] + "</td><td>" + iprice[i] + "</td><td>" + iqtyp[i] * iprice[i] + "<button onclick='delElement(" + i + ")'> X </button></td></tr>"
	}for (i=0; i<stick.length; i++){
    total += quan[i] * pricey[i]
    totalRemit += quan[i] * pricey[i]
    totalProfit = totalRemit * 0.6;
    cartdata += "<tr><td>" + stick[i] + "</td><td>" + quan[i] + "</td><td>" + pricey[i] + "</td><td>" + quan[i] * pricey[i] + "<button onclick='delElement(" + i + ")'> X </button></td></tr>"
  }
  
  cartdata += '<tr class = "totals"><td>TOTALS</td><td></td><td></td><td></td></tr><tr class = "sub-totals"><td>Total Sales</td><td>' + total + '</td><td></td><td></td></tr><tr class = "sub-totals"><td>Total Remit</td><td>' + totalRemit +'</td><td></td><td></td></tr><tr class = "sub-totals"><td>Total Profit</td><td>' + totalProfit +'</td><td></td><td></td></tr></table>'
  
  document.getElementById('cart').innerHTML = cartdata 
  
}

function displayCart(){
  cartdata = '<table class = "summary"><tr><th>Product Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';
  
  total = 0;
  totalRemit = 0;
  totalProfit = 0;
  
    for (i=0; i<inames.length; i++){
    total += iqtyp[i] * iprice[i]
    totalRemit += iqtyp[i] * iprice[i]
    totalProfit = totalRemit * 0.6;
    cartdata += "<tr><td>" + inames[i] + "</td><td>" + iqtyp[i] + "</td><td>" + iprice[i] + "</td><td>" + iqtyp[i] * iprice[i] + "<button onclick='delElement(" + i + ")'> X </button></td></tr>"
	}
  for (i=0; i<drum.length; i++){
    total += qty[i] * price[i]
    totalRemit += qty[i] * price[i]
    totalProfit = totalRemit * 0.6;
    cartdata += "<tr><td>" + drum[i] + "</td><td>" + qty[i] + "</td><td>" + price[i] + "</td><td>" + qty[i] * price[i] + "<button onclick='delElement(" + i + ")'> X </button></td></tr>"
  }  for (i=0; i<buko.length; i++){
    total += qua[i] * pri[i]
    totalRemit += qua[i] * pri[i]
    totalProfit = totalRemit * 0.6;
    cartdata += "<tr><td>" + buko[i] + "</td><td>" + qua[i] + "</td><td>" + pri[i] + "</td><td>" + qua[i] * pri[i] + "<button onclick='delElement(" + i + ")'> X </button></td></tr>"
	}
    for (i=0; i<stick.length; i++){
    total += quan[i] * pricey[i]
    totalRemit += quan[i] * pricey[i]
    totalProfit = totalRemit * 0.6;
    cartdata += "<tr><td>" + stick[i] + "</td><td>" + quan[i] + "</td><td>" + pricey[i] + "</td><td>" + quan[i] * pricey[i] + "<button onclick='delElement(" + i + ")'> X </button></td></tr>"
  }
  
  cartdata += '<tr class = "totals"><td>TOTALS</td><td></td><td></td><td></td></tr><tr class = "sub-totals"><td>Total Sales</td><td>' + total + '</td><td></td><td></td></tr><tr class = "sub-totals"><td>Total Remit</td><td>' + totalRemit +'</td><td></td><td></td></tr><tr class = "sub-totals"><td>Total Profit</td><td>' + totalProfit +'</td><td></td><td></td></tr></table>'
  
  document.getElementById('cart').innerHTML = cartdata 
  
}
function displayCart1(){
  cartdata = '<table class = "summary"><tr><th>Product Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';
  
    total = 0;
	totalRemit = 0;
    totalProfit = 0;
	
    for (i=0; i<stick.length; i++){
    total += quan[i] * pricey[i]
    totalRemit += quan[i] * pricey[i]
    totalProfit = totalRemit * 0.6;
    cartdata += "<tr><td>" + stick[i] + "</td><td>" + quan[i] + "</td><td>" + pricey[i] + "</td><td>" + quan[i] * pricey[i] + "<button onclick='delElement(" + i + ")'> X </button></td></tr>"
  }
	for (i=0; i<drum.length; i++){
    total += qty[i] * price[i]
    totalRemit += qty[i] * price[i]
    totalProfit = totalRemit * 0.6;
    cartdata += "<tr><td>" + drum[i] + "</td><td>" + qty[i] + "</td><td>" + price[i] + "</td><td>" + qty[i] * price[i] + "<button onclick='delElement(" + i + ")'> X </button></td></tr>"
  }  for (i=0; i<buko.length; i++){
    total += qua[i] * pri[i]
    totalRemit += qua[i] * pri[i]
    totalProfit = totalRemit * 0.6;
    cartdata += "<tr><td>" + buko[i] + "</td><td>" + qua[i] + "</td><td>" + pri[i] + "</td><td>" + qua[i] * pri[i] + "<button onclick='delElement(" + i + ")'> X </button></td></tr>"
	}for (i=0; i<inames.length; i++){
    total += iqtyp[i] * iprice[i]
    totalRemit += iqtyp[i] * iprice[i]
    totalProfit = totalRemit * 0.6;
    cartdata += "<tr><td>" + inames[i] + "</td><td>" + iqtyp[i] + "</td><td>" + iprice[i] + "</td><td>" + iqtyp[i] * iprice[i] + "<button onclick='delElement(" + i + ")'> X </button></td></tr>"
	}
  
  cartdata += '<tr class = "totals"><td>TOTALS</td><td></td><td></td><td></td></tr><tr class = "sub-totals"><td>Total Sales</td><td>' + total + '</td><td></td><td></td></tr><tr class = "sub-totals"><td>Total Remit</td><td>' + totalRemit +'</td><td></td><td></td></tr><tr class = "sub-totals"><td>Total Profit</td><td>' + totalProfit +'</td><td></td><td></td></tr></table>'
  
  document.getElementById('cart').innerHTML = cartdata 
  
}
function displayCart2(){
  cartdata = '<table class = "summary"><tr><th>Product Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';
  
  total = 0;
  totalRemit = 0;
  totalProfit = 0;
  
  for (i=0; i<drum.length; i++){
    total += qty[i] * price[i]
    totalRemit += qty[i] * price[i]
    totalProfit = totalRemit * 0.6;
    cartdata += "<tr><td>" + drum[i] + "</td><td>" + qty[i] + "</td><td>" + price[i] + "</td><td>" + qty[i] * price[i] + "<button onclick='delElement(" + i + ")'> X </button></td></tr>"
  }  for (i=0; i<buko.length; i++){
    total += qua[i] * pri[i]
    totalRemit += qua[i] * pri[i]
    totalProfit = totalRemit * 0.6;
    cartdata += "<tr><td>" + buko[i] + "</td><td>" + qua[i] + "</td><td>" + pri[i] + "</td><td>" + qua[i] * pri[i] + "<button onclick='delElement(" + i + ")'> X </button></td></tr>"
	}for (i=0; i<inames.length; i++){
    total += iqtyp[i] * iprice[i]
    totalRemit += iqtyp[i] * iprice[i]
    totalProfit = totalRemit * 0.6;
    cartdata += "<tr><td>" + inames[i] + "</td><td>" + iqtyp[i] + "</td><td>" + iprice[i] + "</td><td>" + iqtyp[i] * iprice[i] + "<button onclick='delElement(" + i + ")'> X </button></td></tr>"
	}for (i=0; i<stick.length; i++){
    total += quan[i] * pricey[i]
    totalRemit += quan[i] * pricey[i]
    totalProfit = totalRemit * 0.6;
    cartdata += "<tr><td>" + stick[i] + "</td><td>" + quan[i] + "</td><td>" + pricey[i] + "</td><td>" + quan[i] * pricey[i] + "<button onclick='delElement(" + i + ")'> X </button></td></tr>"
  }
  
  cartdata += '<tr class = "totals"><td>TOTALS</td><td></td><td></td><td></td></tr><tr class = "sub-totals"><td>Total Sales</td><td>' + total + '</td><td></td><td></td></tr><tr class = "sub-totals"><td>Total Remit</td><td>' + totalRemit +'</td><td></td><td></td></tr><tr class = "sub-totals"><td>Total Profit</td><td>' + totalProfit +'</td><td></td><td></td></tr></table>'
  
  document.getElementById('cart').innerHTML = cartdata 
  
}

function delElement(a){
  inames.splice(a, 1);
  iqtyp.splice(a, 1)
  iprice.splice(a, 1)
 
  buko.splice(a,1)
  qua.splice(a,1)
  pri.splice(a,1)  
  
  stick.splice(a,1)
  quan.splice(a,1)
  pricey.splice(a,1)
    
  drum.splice(a,1)
  qty.splice(a,1)
  price.splice(a,1)
      
  displayCart()
  displayCarts()
  displayCart1()
  displayCart2()
}