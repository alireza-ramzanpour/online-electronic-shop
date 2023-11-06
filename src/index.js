import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Camera from './components/Camera';
import Computer from './components/Computer';
import Laptop from './components/Laptop';
import Monitor from './components/Monitor';
import Tablet from './components/Tablet';
import Watch from './components/Watch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'camera',
        element: <Camera />
      },
      {
        path: 'computer',
        element: <Computer />
      },
      {
        path: 'laptop',
        element: <Laptop />
      },
      {
        path: 'monitor',
        element: <Monitor />
      },
      {
        path: 'tablet',
        element: <Tablet />
      },
      {
        path: 'watch',
        element: <Watch />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
