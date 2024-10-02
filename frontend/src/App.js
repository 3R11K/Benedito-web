import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login.tsx';
import { AuthProvider } from './context/AuthContext/AuthContext.tsx';
import Home from './components/Home/Home.tsx';
import CalendarPage from './components/CalendarPage/CalendarPage.tsx';
import EventPage from './components/EventPage/EventPage.tsx';
import { GlobalStyle } from './Global.tsx';

const App = () => (
  <AuthProvider>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path = "/calendar" element = {<CalendarPage />} />
        <Route path = "/event/:id" element = {<EventPage />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
