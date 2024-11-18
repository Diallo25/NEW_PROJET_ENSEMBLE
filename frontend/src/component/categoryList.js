import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('/api/categories')
            .then(res => setCategories(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Categories</h1>
            <ul className="list-group">
                {categories.map(category => (
                    <li key={category._id} className="list-group-item">
                        <strong>{category.name}</strong>
                        <p className="mb-0">{category.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
