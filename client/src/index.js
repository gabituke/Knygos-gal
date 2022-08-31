import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import App from './App';
import NewPost from './pages/NewPost'
import NotFound from './pages/404'
import EditPost from './pages/EditPost'
import SinglePost from './pages/SinglePost'
import Registration from './pages/Registration.js'
import Header from './components/Header/Header'
import Login from './pages/Login'
import Logout from './pages/Logout'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/new-post" element={<NewPost />} />
   
      <Route path="/edit/:id" element={<EditPost />} />
      <Route path="/post/:id" element={<SinglePost />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
	  <Route path="/login" element={<Login />} />
	  <Route path="/logout" element={<Logout />} />
    </Routes>
  </BrowserRouter>
);
