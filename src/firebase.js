// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOX3E9ceNjpiFR2LP4irK2vkyrHnoYL4M",
  authDomain: "sample-9688d.firebaseapp.com",
  projectId: "sample-9688d",
  storageBucket: "sample-9688d.appspot.com",
  messagingSenderId: "472067010215",
  appId: "1:472067010215:web:493f2bba6521d25fc57582",
  measurementId: "G-T0T59QJ8F9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()

export default app