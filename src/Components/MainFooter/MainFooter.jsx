import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import Connection from "../FooterLists/Connection/Connection"
import Information from "../FooterLists/Information/Information"
import Service from "../FooterLists/Service/Service"
import Shops from "../FooterLists/Shops/Shops"

const Footer = () => {


    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` });
    }
    return (
        <div className="footer">
            <div className="footer-items">
                <Shops />
                <Information />
                <Service />
                <Connection />
            </div>
            <hr />
            <div className="footer-bottom">
                <div>
                    <p>
                        © 2015 Shopia Fashon Store Shopify.
                    <br />
                    All Rights Reserved. Ecommerce Software by Shopify.
                    <br />
                    Designed by Moccal.abs.com
                    </p>
                    <ul>
                        <li>
                            <FaIcons.FaCcVisa id="bank-icons" />
                        </li>
                        <li>
                            <FaIcons.FaCcMastercard id="bank-icons" />
                        </li>
                        <li>
                            <FaIcons.FaCcApplePay id="bank-icons" />
                        </li>
                        <li>
                            <FaIcons.FaCcDiscover id="bank-icons" />
                        </li>
                    </ul>
                </div>
                <RiIcons.RiArrowUpCircleFill id="arrow-btn" onClick={handleClick} />
            </div>
        </div>
    );
}

export default Footer;