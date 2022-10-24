// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5xLYykirPjte4OEseh8fDZn_54Zah0uU",
    authDomain: "learn-with-hridoy-client.firebaseapp.com",
    projectId: "learn-with-hridoy-client",
    storageBucket: "learn-with-hridoy-client.appspot.com",
    messagingSenderId: "137973562864",
    appId: "1:137973562864:web:c23bd77a9232b81ee73135"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;