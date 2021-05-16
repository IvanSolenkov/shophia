import brand1 from '../img/our-brand/brand1.png';
import brand2 from '../img/our-brand/brand2.png';
import brand3 from '../img/our-brand/brand3.png';
import brand4 from '../img/our-brand/brand4.png';
import brand5 from '../img/our-brand/brand5.png';
import brand6 from '../img/our-brand/brand6.png';

const OurBrand = () => {
    return (
        <div className="our-brand">
            <img src={brand1} alt="brand1" />
            <img src={brand2} alt="brand2" />
            <img src={brand3} alt="brand3" />
            <img src={brand4} alt="brand4" />
            <img src={brand5} alt="brand5" />
            <img src={brand6} alt="brand6" />
        </div>
    );
}

export default OurBrand;