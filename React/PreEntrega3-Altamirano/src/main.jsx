import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiC8g2fpM7SvHeHp8ec_UxiL8lO8QV2_0",
  authDomain: "incourse-15ae0.firebaseapp.com",
  projectId: "incourse-15ae0",
  storageBucket: "incourse-15ae0.appspot.com",
  messagingSenderId: "546990786317",
  appId: "1:546990786317:web:7fb60fcca58e8a43149244"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
