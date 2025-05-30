import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function HeroBanner() {
    return(
        <div className="hero-banner">
            <div className="container">
                <div className="overlay">
                    <h2>Everything You Need. Delivered with Style.</h2>
                    <p>Top picks. Great prices. Fast delivery.</p>
                    <button className="shop-now">Shop now <FontAwesomeIcon icon={faArrowRight} className='shop-now-icon' /></button>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;