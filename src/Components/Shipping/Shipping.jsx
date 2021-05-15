import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';

const Shipping = () => {
    return (
        <div className="shipping">
            <div className="free-shipping">
                <GiIcons.GiCommercialAirplane id="shipping-icon" />
                <div>
                    <h4>Free Shipping</h4>
                    <span>In Order Min $200</span>
                </div>
            </div>

            <div className="return-money">
                <BsIcons.BsFillClockFill id="shipping-icon" />
                <div>
                    <h4>30-Days Returns</h4>
                    <span>Money Back Guarantee</span>
                </div>
            </div>

            <div className="support">
                <CgIcons.CgSupport id="shipping-icon" />
                <div>
                    <h4>24/7 Support</h4>
                    <span>Lifestyme Support</span>
                </div>
            </div>
        </div>
    );
}

export default Shipping;