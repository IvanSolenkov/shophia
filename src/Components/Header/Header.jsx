import * as GrIcons from 'react-icons/gr';

const Header = () => {
    return (
        <div className="header">
            <div className="head-nav">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Gallery</a>
                    </li>
                    <li>
                        <a href="/">Categories</a>
                    </li>
                    <li>
                        <a href="/">Pages</a>
                    </li>
                </ul>
            </div>

            <h1>Shophia</h1>

            <div className="social-elements">
                <ul>
                    <li>
                        <GrIcons.GrFacebookOption id="social-icons" />
                    </li>
                    <li>
                        <GrIcons.GrTwitter id="social-icons" />
                    </li>
                    <li>
                        <GrIcons.GrPinterest id="social-icons" />
                    </li>
                    <li>
                        <GrIcons.GrInstagram id="social-icons" />
                    </li>
                </ul>
                <select id="cars" name="cars">
                    <option value="rupiah">Rupiah</option>
                    <option value="lorem">Lorem</option>
                </select>
            </div>
        </div>
    );
}

export default Header;