import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgviJYFjMfUJ4O0-2ldpXUxKzTT2V8y10",
  authDomain: "fir-login-e2442.firebaseapp.com",
  projectId: "fir-login-e2442",
  storageBucket: "fir-login-e2442.appspot.com",
  messagingSenderId: "613289748392",
  appId: "1:613289748392:web:56b97f9ffc58b07d685f9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};