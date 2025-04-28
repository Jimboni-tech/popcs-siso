import "./Header.css"
import logo from '../images/logo.png';


const Header = () => {
    return (
        <div className = 'container'>
            <div className = 'logo'>
                <img className = 'logo-image' src = {logo} alt = 'popcslogo'/>
            </div>
        </div>
    );
}

export default Header;  