import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faBagShopping, faClock, faRightLeft } from '@fortawesome/free-solid-svg-icons';

function WhatWeOffer() {
    return (
        <section>
            <div className="box">
                <div className="icon-circle">
                    <FontAwesomeIcon icon={faTruckFast} />
                </div>
                <p>Fast and free shipping</p>
            </div>
            <div className="box">
                <div className="icon-circle">
                    <FontAwesomeIcon icon={faBagShopping} />
                </div>
                <p>Easy to shop</p>
            </div>
            <div className="box">
                <div className="icon-circle">
                    <FontAwesomeIcon icon={faClock} />
                </div>
                <p>24/7 support</p>
            </div>
            <div className="box">
                <div className="icon-circle">
                    <FontAwesomeIcon icon={faRightLeft} />
                </div>
                <p>Hassle free returns</p>
            </div>
        </section>
    );
}

export default WhatWeOffer;