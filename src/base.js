import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp   = firebase.initializeApp({
    apiKey: "AIzaSyDqiFk2fzYzSLJPwi2YUAP2lwSZ4EYK3Ns",
    authDomain: "catch-of-the-day-saurabh.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-saurabh.firebaseio.com",
    projectId: "catch-of-the-day-saurabh",
    storageBucket: "catch-of-the-day-saurabh.appspot.com",
    messagingSenderId: "666782450022",
    appId: "1:666782450022:web:58c3cb85e86d65b2"
});


const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp}

export default base; 