import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCXHUd-VPgv_gDip48IJIHVDGCiq3BcKpY",
    authDomain: "clone-83454.firebaseapp.com",
    projectId: "clone-83454",
    storageBucket: "clone-83454.appspot.com",
    messagingSenderId: "865719352098",
    appId: "1:865719352098:web:237cdb947b41c9c355037b",
    measurementId: "G-4SY3B1YRHE"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };