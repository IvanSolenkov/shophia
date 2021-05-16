import * as GrIcons from 'react-icons/gr';
import * as FaIcons from 'react-icons/fa';

const Connection = () => {
    return (
        <div className="connection">
            <h4>Stay Connected</h4>
            <div className="social-items">
                <ul>
                    <li>
                        <GrIcons.GrFacebookOption id="social-icons" />
                    </li>
                    <li>
                        <GrIcons.GrTwitter id="social-icons" />
                    </li>
                    <li>
                        <FaIcons.FaInstagram id="social-icons" />
                    </li>
                    <li>
                        <GrIcons.GrPinterest id="social-icons" />
                    </li>
                    <li>
                        <FaIcons.FaWifi id="social-icons" />
                    </li>
                </ul>
            </div>
            <p>Subscribe <span>in</span> Our News Letter</p>
            <div className="input-connection">
                <input type="text" placeholder="Enter Your Email Address" />
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default Connection;