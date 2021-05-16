import Connection from "../FooterLists/Connection/Connection"
import Information from "../FooterLists/Information/Information"
import Service from "../FooterLists/Service/Service"
import Shops from "../FooterLists/Shops/Shops"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-items">
                <Shops />
                <Information />
                <Service />
                <Connection />
            </div>
        </div>
    );
}

export default Footer;