import './Landing.css'
import logo from '../images/popcslogo.png';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


const Landing = () => {
    const navigate = useNavigate();
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    const adminEmails = ['yunchengzhou@gmail.com'];

    const handleAdminCheck = () => {
        if (!isAuthenticated) {
            loginWithRedirect();
        }
        else if (adminEmails.includes(user?.email)) {
            navigate('/admin');
        }
        else {
            alert('You do not have admin access.');
        }
    };


    return(
        <div>
            <div id='landingheader'>
                <div className = 'header-content'>
                    <h1 className = 'header'>Upper School Sign In/Sign Out</h1>
                    <div id = 'logo'>
                        <button id = 'logobutton' onClick = {handleAdminCheck}>
                            <img src = {logo} alt = 'popcslogo' class = 'popcslogo'/>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className = 'pageContainer'>
                <div className = 'buttonContainer'>
                    <button className = 'sisobutton' onClick = {() => navigate('/signin')}>
                        <h3>Sign In</h3>
                    </button>
                </div>
                <div className = 'buttonContainer'>
                    <button className = 'sisobutton' onClick = {() => navigate('/signout')}>
                        <h3>Sign Out</h3>
                    </button>
                </div>
            </div>
            
        </div>
    )
};

export default Landing;