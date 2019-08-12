// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAPGs58zNUlZvkr72Kt5m7w3swz7gKLXBM",
    authDomain: "pwa-hello-1efb1.firebaseapp.com",
    databaseURL: "https://pwa-hello-1efb1.firebaseio.com",
    projectId: "pwa-hello-1efb1",
    storageBucket: "",
    messagingSenderId: "922819731967",
    appId: "1:922819731967:web:12dd1dbf2b755b53"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', )
        .then((reg) => console.log('Service Worker Registered..', reg.scope))
        .catch(err => console.log(err));
}