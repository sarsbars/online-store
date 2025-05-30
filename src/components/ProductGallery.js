import { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ProductGallery() {

    const[products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState("");
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

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === "price-low-high") {
        return a.price - b.price;
        } else if (sortOption === "price-high-low") {
        return b.price - a.price;
        } else if (sortOption === "name-a-z") {
        return a.title.localeCompare(b.title);
        } else if (sortOption === "name-z-a") {
        return b.title.localeCompare(a.title);
        } else {
        return 0;
        }
  });

    return (
            <section className="products-section">
                <div className="container">
                    <div className="sort-dropdown">
                        <label>Sort by: </label>
                        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option value="">Default</option>
                        <option value="price-low-high">Price: Low to High</option>
                        <option value="price-high-low">Price: High to Low</option>
                        <option value="name-a-z">Name: A to Z</option>
                        <option value="name-z-a">Name: Z to A</option>
                        </select>
                    </div>
                    <h3>Products</h3>
                    {error && <p>{error}</p>}
                    <div className='product-list'>
                            {sortedProducts.map((product) => (
                                <div key={product.id} className="product-card">
                                    <figure className="product-img">
                                        <img src={product.image} className="product-pic" alt='product'></img>
                                    </figure>
                                    <p className="product-title">{product.title.substring(0, 40)}...</p>
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
                </div>
            </section>
    );
}

export default ProductGallery;

