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
        out += "<h3 class = 'prodname'>"+data[i].name+"</h3>";
        out += "<label>Price: <strong>₱"+data[i].price+"</strong></label>";
        out += "<br>";
        out += "<label>Enter Quantity:</label>";
        out += "<input type = 'number' id = 'quantity'/>";
        out += "<br>";
        out += "<button class = 'submit'>Submit</submit>";
        out += "</aside>";
        out += "</section>";
    }
    out += "</section>";
    document.getElementById('here').innerHTML=out;
}
function addProduct() {
    var request = new XMLHttpRequest();
    request.open('GET', 'products.json', true);
    request.onload = function () {
        var data = JSON.parse(this.response);
            
//        var name = document.getElementById("pname").value;
//        var price = document.getElementById("price").value;
//        var img = document.getElementById("img").value;
//        data.push({"name": name, "price":price, "img": img});
//        showProducts(data);
            
    }
    request.send();
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