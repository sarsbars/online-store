import { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ProductGallery() {

    const[products, setProducts] = useState([]);
    const[error, setError] = useState('');
    
    const URL = 'https://fakestoreapi.com/products';


    useEffect(() => {
        const fetchProduct = async() => {
            try {
                const response = await axios.get(URL);
                setProducts(response.data);
                setError('');
            } catch (error) {
                console.log(error.message);
                setError('Failed to fetch products');
            }
        };
        fetchProduct();
    }, []);

    return (
            <section className="products-section">
                <h3>Products</h3>
                {error && <p>{error}</p>}
                <div className='product-list'>
                        {products.map(product => (
                            <div key={product.id} className="product-card">
                                <figure className="product-img">
                                    <img src={product.image} className="product-pic" alt='product'></img>
                                </figure>
                                <h4>{product.title}</h4>
                                <p>{product.description.substring(0, 100)}...</p>
                                <div className="price-rating flex space-between">
                                    <div>
                                        <p>${product.price}</p>
                                    </div>
                                    <div className="rating">
                                        {[...Array(Math.round(product.rating.rate))].map((_, i) => (
                                            <FontAwesomeIcon icon={faStar} className="star" key={i} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
    );
}

export default ProductGallery;

