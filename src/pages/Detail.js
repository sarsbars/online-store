import { useState, useEffect } from 'react';
import { Navigate, Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { FaCartPlus } from 'react-icons/fa';
import { useCart } from '../components/CartContext';

function Detail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [mainProduct, setMainProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const productId = parseInt(id);
        if (isNaN(productId) || productId < 1 || productId > 20) {
          throw new Error('Invalid product ID');
        }

        const [mainResponse, response13, response14, response12] = await Promise.all([
          axios.get(`${URL}/${productId}`),
          axios.get(`${URL}/13`),
          axios.get(`${URL}/14`),
          axios.get(`${URL}/12`),
        ]);

        setMainProduct(mainResponse.data);
        const similar = [response13.data, response14.data, response12.data].filter(
          product => product && product.id && product.title && product.price && product.image
        );
        console.log('Similar product IDs:', similar.map(p => p.id));
        setSimilarProducts(similar);
        setError('');
      } catch (error) {
        console.error('Error fetching products:', error.message);
        setMainProduct(null);
        setSimilarProducts([]);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  const handleAddToCart = () => {
    if (mainProduct) {
      addToCart(mainProduct);
      console.log(`Added to cart: ${mainProduct.title}`);
    }
  };

  if (error.includes('Invalid product')) {
    return <Navigate to="/notfound" />;
  }

  return (
    <section className="product-page">
      <div className="container"> {/* Add container for centering */}
        {isLoading && <p>Loading...</p>}
        {error && !isLoading && <p className="error">{error}</p>}

        {mainProduct && !isLoading && (
          <div className="main-product flex center"> {/* Add center class */}
            <div className="img-container">
              <figure>
                <img
                  className="main-product-img"
                  src={mainProduct.image}
                  alt={mainProduct.title}
                />
              </figure>
            </div>
            <div className="details-container">
              <div className="product-details">
                <div>
                  <h3>{mainProduct.title}</h3>
                  <div className="rating flex align-items">
                    <p className='rating-text'>Rating: </p>
                    {[...Array(Math.round(mainProduct.rating.rate))].map((_, i) => (
                      <FontAwesomeIcon icon={faStar} className="star" key={i} />
                    ))}
                  </div>
                  <p className='persons-bought'><span>100+ people</span> bought in the last 1 month</p>
                  <p className='price'>${mainProduct.price.toFixed(2)}</p>
                </div>
                <div>
                  <h4 className='about-item'>About this Item</h4>
                  <p>{mainProduct.description}</p>
                </div>
              </div>
              <div className="add-to-cart flex">
                <button onClick={handleAddToCart} className="cart-button">
                  <FaCartPlus className="cart-icon" />
                </button>
              </div>
            </div>
          </div>
        )}

        {similarProducts.length > 0 && !isLoading && (
          <div className="similar-products flex column-direction">
            <h3>Similar Products</h3>
            <div className="similar-products-list flex gap-40 center"> {/* Add center class */}
              {similarProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/detail/${product.id}`}
                  className="similar-product-link"
                >
                  <div className="similar-container">
                    <div className="similar-product flex column-direction">
                      <h4>{product.title}</h4>
                      <figure>
                        <img
                          className="similar-product-img"
                          src={product.image}
                          alt={product.title}
                        />
                      </figure>
                      <p>
                        <strong>Price:</strong> ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Detail;