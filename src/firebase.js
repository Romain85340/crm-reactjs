import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
        apiKey: "AIzaSyB4Znpxvg5YAy8gN0Cbpt_meKXOU-5SLX8",
        authDomain: "crm-react-97aa9.firebaseapp.com",
        databaseURL: "https://crm-react-97aa9.firebaseio.com",
        projectId: "crm-react-97aa9",
        storageBucket: "crm-react-97aa9.appspot.com",
        messagingSenderId: "497936432870",
        appId: "1:497936432870:web:a9c93370dd3e77f2544527",
        measurementId: "G-3JYHF97N2E"
}


firebase.initializeApp(config);

export default firebase;
