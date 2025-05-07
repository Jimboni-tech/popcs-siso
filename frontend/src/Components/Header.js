import "./Header.css"
import logo from '../images/logo.png';


const Header = () => {
    return (
        <div className = 'container'>
            <a href = './home'>
                <img className = 'logo-image' src = {logo} alt = 'popcslogo'/>
            </a>
        </div>
    );
}

export default Header;  