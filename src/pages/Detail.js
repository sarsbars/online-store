import Header from '../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Detail() {
    const [mainProduct, setMainProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [error, setError] = useState('');
    const URL = 'https://fakestoreapi.com/products';

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const [response12, response13, response14] = await Promise.all([
                    axios.get(`${URL}/12`),
                    axios.get(`${URL}/13`),
                    axios.get(`${URL}/14`),
                ]);

                setMainProduct(response12.data);
                setSimilarProducts([response13.data, response14.data]);
                setError('');
            } catch (error) {
                console.log(error.message);
                setMainProduct(null);
                setSimilarProducts([]);
                setError('Failed to load products. Please try again later.');
            }
        };

        fetchProducts();
    }, []); 

    return (
        <>
        <Header />
            <section className="product-page">
                <h2>Product Details</h2>
                {error && <p className="error">{error}</p>}

                {mainProduct && (
                    <div className="main-product">
                        <h3>{mainProduct.title}</h3>
                        <figure>
                            <img src={mainProduct.image} alt={mainProduct.title} />
                        </figure>
                        <p>{mainProduct.description}</p>
                        <p><strong>Price:</strong> ${mainProduct.price}</p>
                    </div>
                )}

                {similarProducts.length > 0 && (
                    <div className="similar-products">
                        <h3>Similar Products</h3>
                        <div className="similar-products-list">
                            {similarProducts.map((product) => (
                                <div key={product.id} className="similar-product">
                                    <h4>{product.title}</h4>
                                    <figure>
                                        <img src={product.image} alt={product.title} />
                                    </figure>
                                    <p><strong>Price:</strong> ${product.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

export default Detail;

