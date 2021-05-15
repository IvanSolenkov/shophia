import * as IoIcons from 'react-icons/io';

const TopNav = () => {
    return (
        <div className="account-menu">
            <div className="call-number">
                <IoIcons.IoMdCall />
                <span>Call+001 555 801</span>
            </div>

            <div className="nav-elements">
                <ul>
                    <li>
                        <a href="/">Welcome msg!</a>
                    </li>
                    <li>
                        <a href="/">My Account</a>
                    </li>
                    <li>
                        <a href="/">My Wishlist</a>
                    </li>
                    <li id="last-nav-el">
                        <a href="/">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TopNav;