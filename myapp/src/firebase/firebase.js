import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAoDmgOLMN3Lk0w8MV_tLbZWUAhQxbNi_c",
  authDomain: "homework9-16242.firebaseapp.com",
  databaseURL: "https://homework9-16242-default-rtdb.firebaseio.com",
  projectId: "homework9-16242",
  storageBucket: "homework9-16242.appspot.com",
  messagingSenderId: "608314249778",
  appId: "1:608314249778:web:b2df0c5556e210604e222b",
  measurementId: "G-GBE7382M0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);