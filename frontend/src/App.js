import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import CategoryList from './component/categoryList';
import AddCategory from './component/addCategory';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/add-category" element={<AddCategory />} />
        </Routes>
    </Router>
);

export default App;
