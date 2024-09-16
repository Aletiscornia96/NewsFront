import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<NewsPage />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/panel" element={<AdminPanel />} />
            </Routes>
        </Router>
    );
}

export default App;
