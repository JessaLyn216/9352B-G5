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


/*Script for User Interface*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


/*IndexedDB: Database for the products*/
//IcID, IceCream, AmountFor, Price
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

/*if (!window.indexedDB) {
    alert():
}*/

let request = window.indexedDB.open("ProductDatabase", 1),
    db,
    tx,
    store,
    index;

request.onupgradeneeded = function(e) {
    let db = request.result,
        store = db.createObjectStore("IceCreamStore", {keyPath: "IcID"}),
    //store = db.createObjectStore("IceCreamStore", { autoIncrement: true})
    index = store.createIndex("IceCream", "IceCream", {unique: false});
};

request.onerror = function(e) {
    console.log("There was an error: "+ e.target.errorCode);
};

request.onsuccess = function(e) {
    db = request.result;
    tx = db.transaction("IceCreamStore", "readwrite");
    store = tx.objectStore("IceCreamStore");
    index = store.index("IceCream");
    
    db.onerror = function(e) {
        console.log("ERROR" + e.target.errorCode);
    }
    
    store.put({IcID: 1, IceCream: "Ice Cream Stick", AmountFor: "Remittance", Price: 5.00});
    
    store.put({IcID: 2, IceCream: "Ice Cream Stick", AmountFor: "Profit", Price: 5.00});
    
    store.put({IcID: 3, IceCream: "Buko Salad", AmountFor: "Remittance", Price: 11.50});
    
    store.put({IcID: 4, IceCream: "Buko Salad", AmountFor: "Profit", Price: 8.50});
    
    store.put({IcID: 5, IceCream: "Pinipig", AmountFor: "Remittance", Price: 10});
    
    store.put({IcID: 6, IceCream: "Pinipig", AmountFor: "Profit", Price: 5});
    
    store.put({IcID: 7, IceCream: "Drumstick", AmountFor: "Remittance", Price: 15});
    
    store.put({IcID: 8, IceCream: "Drumstick", AmountFor: "Profit", Price: 10});
    
    tx.oncomplete = function() {
        db.close();
    }
}
