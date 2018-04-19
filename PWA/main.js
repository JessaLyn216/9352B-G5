//var json = {
//    "title" : "iVendor",
//    "products" : [
//        {
//            "name" : "Ice cream stick",
//            "price" : 10,
//            "image" : "img/Stick.png"
//        },
//        {
//            "name" : "Pinipig",
//            "price" : 15,
//            "image" : "img/Pinipig.png"
//        },
//        {
//            "name" : "Buko Salad",
//            "price" : 20,
//            "image" : "img/Buko.png"
//        },
//        {
//            "name" : "Drum Stick",
//            "price" : 25,
//            "image" : "img/DSTwo.png"
//        }
//    ] //end of products array
//} //end of json

var x = document.getElementById('here');

function populateHeader(json) {
    var title = document.createElement('h1');
    title.textContent = json.price;
    x.appendChild(title);
}

// function populateContents(json){
//     var q = json['products'];
//     var product = document.createElement('h3');
//     product.textContent = q[0].name;
//     x.appendChild(product);
// }

// function showImages(json) {
//     var q = json['products'];
//     var image = document.createElement('img');
//     image.src = q[0].image;
//     x.appendChild(image);
// }

function showProducts(json) {
    var q = json['products'];

    for (var i = 0; i < q.length; i++) {
        var prodSection = document.createElement('section');
        var prodName = document.createElement('h3');
        var prodPrice = document.createElement('p');
        var prodImage = document.createElement('img');

        prodName.textContent = q[i].name;
        prodPrice.textContent = q[i].price;
        prodImage.src = q[i].image;

        prodSection.appendChild(prodName);
        prodSection.appendChild(prodPrice);
        prodSection.appendChild(prodImage);

        x.appendChild(prodSection);
    }
}

//function addProduct(json) {
//    json['products'].push({"name": "Solo Pack", "price":115, "image":"img/ivendor.png"});
//    json = JSON.stringify(json);
//}

function addProduct() {
    var x = json['products'];
    var name = document.getElementById("pname").value;
    var price = document.getElementById("price").value;
    var img = document.getElementById("img").value;
    x.push({"name": name, "price":price, "img": img});
    showProducts(json);
}

function deleteProduct(json) {
    var del = "Ice cream stick";
    var x = json['products'];
    for (var i = 0; i < x.length; i++) {
        if (x[i].name == del) {
            x.splice(i, 1);
            break;
        } 
    }    
}


//populateHeader(json);
// populateContents(json);
// showImages(json);
//addProduct(json);
//deleteProduct(json);
//showProducts(json);