if('serviceWorker' in navigator){
    try {
        navigator.serviceWorker.register('service.js');
        console.log('Sevice Worker Registered');
    } catch (error){
        console.log('Service Worker registration failed.');
    }
}