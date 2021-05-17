import female from '../img/customers/customer-female.png';
import male from '../img/customers/customer-male.png';

const Customers = () => {
    return (
        <div className="customers">
            <div className="female-customer">
                <img src={female} alt="female" />
                <div>
                    <p>
                        Sed ut perspiciatis
                        <br />
                        unde omnis iste natus error sit
                        <br />
                        voluptatem accusantium doloremque
                    </p>
                    <h2>Sandra Dewi</h2>
                    <span>Fashion Stilysh</span>
                </div>
            </div>

            <div className="male-customer">
                <div>
                    <p>
                        Sed ut perspiciatis
                        <br />
                        unde omnis iste natus error sit
                        <br />
                        voluptatem accusantium doloremque
                    </p>
                    <h2>Shaheer Sheikh</h2>
                    <span>Designer</span>
                </div>
                <img src={male} alt="male" />
            </div>
        </div>
    );
}

export default Customers;