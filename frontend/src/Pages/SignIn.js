import './SignIn.css';
import { CiCalendar } from "react-icons/ci";
import {useState} from 'react';
import axios from 'axios';
const SignIn = () => {
    const [name, setName] = useState('');
    const [datetime, setDatetime] = useState('');
    const [reason, setReason] = useState('');
    const [_class, set_class] = useState('');
    const [teacher, setTeacher] = useState('');
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleDatetimeChange = (event) => {
        setDatetime(event.target.value);
    }
    const handleReasonChange = (event) => {
        setReason(event.target.value);
    }
    const handleClassChange = (event) => {
        set_class(event.target.value);
    }
    const handleTeacherChange = (event) => {
        setTeacher(event.target.value);
    }
    const updateDB = async (event) => {
        try {
            const res = await axios.post('http://localhost:3001/signin', {
                name: name,
                datetime: datetime,
                reason: reason,
                class: _class,
                teacher: teacher
            });
            console.log(res.data);

        } catch (err){
            console.log("error:", err);
        }
    }
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
                        <input id='name' value = {name} onChange = {handleNameChange}/>
                    </div>
                    <div className="datetimecontainer inputcontainer">
                        <div className='label'><label htmlFor="datetime">Date/Sign-in Time</label></div>
                        <div className="datetime-input-wrapper">
                            <CiCalendar className="calendar-icon" />
                            <input
                                id="datetime"
                                name="datetime"
                                type="datetime-local"
                                className="datetime-input"
                                onClick={(e) => e.target.showPicker()}
                                value = {datetime}
                                onChange = {handleDatetimeChange}
                            />
                        </div>
                    </div>
                    <div className='inputcontainer'>
                        <div className='label'><label htmlFor="reason">Reason for late arrival</label></div>
                        <input id='reason' value = {reason} onChange = {handleReasonChange}/>
                    </div>
                    <div className='inputcontainer'>
                        <div className='label'><label htmlFor="class">Current Class</label></div>
                        <input id='class' value = {_class} onChange = {handleClassChange}/>
                    </div>
                    <div className='inputcontainer'>
                        <div className='label'><label htmlFor="teacher">Teacher</label></div>
                        <input id='teacher' value = {teacher} onChange = {handleTeacherChange}/>
                    </div>
                </div>
                <div className='buttonContainer'>
                    <button id='button' onClick={updateDB}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;