import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ categoryId }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`/api/products/${categoryId}`)
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, [categoryId]);

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Products</h1>
            <ul className="list-group">
                {products.map(product => (
                    <li key={product._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{product.name}</strong>
                            <p className="mb-0">{product.description}</p>
                        </div>
                        <span className="badge bg-primary">${product.price.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
