//navigation bar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main");
}

//content
var request = new XMLHttpRequest();

request.open('GET', 'products.json', true);

request.onload = function () {
	var data = JSON.parse(this.response);
    
    showProducts(data);
}
request.send();

function showProducts(data) {
    var out = "<section class = 'showProducts'>";
    for (var i = 0; i < data.length; i++) {      
        out += "<section class = 'product'>";
        out += "<img src = '"+data[i].img+"'/>";
        out += "<aside class = 'details'>";
        out += "<h3 class = 'prodname' id ='prodname"+i+"'>"+data[i].name+"</h3>";
        out += "<label>Price: Php<strong id ='price"+i+"'>"+data[i].price+"</strong></label>";
        out += "<br>";
        out += "<label>Enter Quantity:</label>";
        out += "<input type ='number' class ='quantity' id ='quantity"+i+"' min='0'/>";
        out += "<br>";
        out += "<button class ='submit-btn' onclick='addLog("+i+")'>Submit</button>";
        out += "</aside>";
        out += "</section>";
    }
    out += "</section>";
    document.getElementById('productList').innerHTML=out;
}

var pname = [];
var price = [];
var qty = [];
function addLog(i) {
    var a = 'prodname'+i;
    var b = 'price'+i;
    var c = 'quantity'+i;
    
    pname.push(document.getElementById(a).textContent);
    price.push(document.getElementById(b).textContent);
    qty.push(document.getElementById(c).value);
    
    displayLog();
    
    document.getElementById(c).value=null;
}
function displayLog() {
    var totalPrice = 0;
    var totalSales = 0;
    var remit = 0;
    var profit = 0;
    var totalRemit = 0;
    var totalProfit = 0;
    
    var out = "<table class = 'displayLog'>" +
        "<th>Product Name</th>" +
        "<th>Unit Price</th>" +
        "<th>Quantity</th>" +        
        "<th>Total Price</th>";
    
    for(var j=0; j < pname.length; j++) {
        out += "<tr>" +
        "<td>" + pname[j] + "</td>" +
        "<td>" + price[j] + "</td>" +
        "<td>" + qty[j]+ "</td>" +
        "<td>" + qty[j]*price[j] + "<button class = 'del-btn' onclick='deleteLog("+j+")'> X </button></td>" +
        "</tr>";
        totalPrice = qty[j]*price[j];
        totalSales = totalPrice + totalSales;
        remit = totalPrice * 0.40;
        profit = totalPrice * 0.60;
        totalRemit = totalRemit + remit;
        totalProfit = totalProfit + profit;
    }
    
    out += "</table>";
    
    //Totals
    out += "<section class = 'totals'>" +
        "<h3>TOTALS</h3>" +
        "<p>Total Sales <strong>"+totalSales+"</strong></p>" +
        "<p>Total Remittance <strong>"+totalRemit+"</strong></p>" +
        "<p>Total Profit <strong>"+totalProfit+"</strong></p>" +
        "<button type='submit' id='checkout-btn' onclick='clearStorage()'>Check Out</button>";
    out += "</section>";    
    
    document.getElementById('showLog').innerHTML=out;
}
function deleteLog(i) {
    pname.splice(i,1);
    price.splice(i,1);
    qty.splice(i,1);
    
    displayLog();
}
function clearStorage() {
    sessionStorage.clear();
    window.location = window.location;
}
/*Code for the service worker*/
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}