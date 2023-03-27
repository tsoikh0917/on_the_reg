import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProSidebarProvider } from 'react-pro-sidebar';
import SideBar from './components/sidebar/sidebar';
import Topbar from './components/sidebar/topbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.backgroundColor = "#F5F5F5";

root.render(
  <React.StrictMode >
    <Topbar/>
    <ProSidebarProvider>
      <SideBar/>
    </ProSidebarProvider>
    <BrowserRouter >
    <App />
    </BrowserRouter>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
