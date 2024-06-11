import './App.css'
import Template from './components/Template/Template'
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Home from './pages/home/Home';
import Layout from './components/layout';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const socket = io('http://localhost:5173');

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    socket.on('tweet', (tweet) => {
      setTweets((prevTweets) => [tweet, ...prevTweets]);
    });

    return () => {
      socket.off('tweet');
    };
  }, []);

  const handleNewTweet = (tweet) => {
    socket.emit('tweet', tweet);
  };

  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<HomePage />} />
        <Route path="/log-in" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  )
}

export default App;
