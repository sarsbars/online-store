import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faBagShopping, faClock, faRightLeft } from '@fortawesome/free-solid-svg-icons';

function WhatWeOffer() {
    return (
        <section className='flex space-between'>
            <div className="box">
                <div className="icon-circle">
                    <FontAwesomeIcon icon={faTruckFast} className='icon'/>
                </div>
                <p>Fast and free shipping</p>
            </div>
            <div className="box">
                <div className="icon-circle">
                    <FontAwesomeIcon icon={faBagShopping} className='icon'/>
                </div>
                <p>Easy to shop</p>
            </div>
            <div className="box">
                <div className="icon-circle">
                    <FontAwesomeIcon icon={faClock} className='icon'/>
                </div>
                <p>24/7 support</p>
            </div>
            <div className="box">
                <div className="icon-circle">
                    <FontAwesomeIcon icon={faRightLeft} className='icon'/>
                </div>
                <p>Hassle free returns</p>
            </div>
        </section>
    );
}

export default WhatWeOffer;