import * as GiIcons from 'react-icons/gi';

const FreeShipping = () => {
    return (
        <div className="free-shipping">
            <GiIcons.GiCommercialAirplane id="shipping-icon" />
            <div>
                <h4>Free Shipping</h4>
                <span>In Order Min $200</span>
            </div>
        </div>
    );
}

export default FreeShipping;