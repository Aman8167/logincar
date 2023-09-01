import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDdmw4_XL8_dNse77wNxdbYdQuHj0UheHc",
  authDomain: "seri-6dd46.firebaseapp.com",
  projectId: "seri-6dd46",
  storageBucket: "seri-6dd46.appspot.com",
  messagingSenderId: "209852129933",
  appId: "1:209852129933:web:2fe4c21fe03d25f6f6b8c4",
  measurementId: "G-Q0NMHDDCF4"
};


const app = initializeApp(firebaseConfig);

 export const auth = getAuth();