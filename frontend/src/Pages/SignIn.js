import './SignIn.css';
import { CiCalendar } from "react-icons/ci";

const SignIn = () => {
    return (
        <div>
            <div id='signinheader'>
                <h1>Upper School Sign In</h1>
            </div>
            
            <div className='pagecontainer'>
                <div id='studentinfo'>
                    <h3>Sign-in Information</h3>
                </div>
                <div className='sicontainer'>
                    <div className='inputcontainer'>
                        <div className='label'><label htmlFor="name">Student Name</label></div>
                        <input id='name' />
                    </div>
                    <div className="datetimecontainer inputcontainer">
                        <div className='label'><label htmlFor="datetime">Date/Time</label></div>
                        <div className="datetime-input-wrapper">
                            <CiCalendar className="calendar-icon" />
                            <input
                                id="datetime"
                                name="datetime"
                                type="datetime-local"
                                className="datetime-input"
                                onClick={(e) => e.target.showPicker()}
                            />
                        </div>
                    </div>
                    <div className='inputcontainer'>
                        <div className='label'><label htmlFor="reason">Reason for late arrival</label></div>
                        <input id='reason' />
                    </div>
                    <div className='inputcontainer'>
                        <div className='label'><label htmlFor="class">Current Class</label></div>
                        <input id='class' />
                    </div>
                    <div className='inputcontainer'>
                        <div className='label'><label htmlFor="teacher">Teacher</label></div>
                        <input id='teacher' />
                    </div>
                </div>
                <div className='buttonContainer'>
                    <button id='button'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;