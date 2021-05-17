import FreeShipping from './FreeShipping/FreeShipping';
import Return from './Return/Return';
import Support from './Support/Support';

const Shipping = () => {
    return (
        <div className="shipping">
            <FreeShipping />
            <Return />
            <Support />
        </div>
    );
}

export default Shipping;