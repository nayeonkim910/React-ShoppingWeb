import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import ProtectedRoute from './pages/ProtectedRoute';
import ProductDetailPage from './pages/ProductDetailPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true, element:<Home/>}, //Home
      {path: 'shop/:keyword', element:<Shop/>}, //악세서리, 선글라스, 안경 
      {path: 'shop/item/:id', element:<ProductDetailPage/>}, // 상세페이지
      {path: 'cart', element:<ProtectedRoute><Cart/></ProtectedRoute>}, //장바구니
      {path: 'shop/admin', element:<ProtectedRoute requiredAdmin><Admin/></ProtectedRoute>},  
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
