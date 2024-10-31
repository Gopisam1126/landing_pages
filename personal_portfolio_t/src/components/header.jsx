import "../componentStyles/header.css";
import "../componentStyles/common.css";
function Header() {
    return <>
        <section className="header-section">
            <nav className="navbar">
                <ul className="nav-ul">
                    <li className="nav-li nav-li1">HOME</li>
                    <li className="nav-li">ABOUT</li>
                    <li className="nav-li">CONTACT</li>
                </ul>
            </nav>
        </section>
    </>
}

export default Header;