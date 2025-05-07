import './SignOut.css';
import { CiCalendar } from "react-icons/ci";
import { useState } from 'react';
import axios from 'axios';


const SignOut = () => {
    const [name, setName] = useState('');
    const [datetime, setDatetime] = useState('');
    const [reason, setReason] = useState('');
    const [_class, set_class] = useState('');
    const [teacher, setTeacher] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleDatetimeChange = (e) => setDatetime(e.target.value);
    const handleReasonChange = (e) => setReason(e.target.value);
    const handleClassChange = (e) => set_class(e.target.value);
    const handleTeacherChange = (e) => setTeacher(e.target.value);

    const updateDB = async (event) => {
        try {
            if (name && datetime && reason && _class && teacher){
                const res = await axios.post('http://localhost:3001/signout', {
                name,
                datetime,
                reason,
                class: _class,
                teacher
                });
                alert("Sign-out successful!")
                console.log(res.data);
            } else{
                alert("Please fill out all fields")
            }
            
            
        } catch (err) {
            console.error("Error during sign-in:", err);
            alert("There was an error signing in.");
        }
    }
            

    return (
        <div>
            <div id='signoutheader'>
                <h1>Upper School Sign Out</h1>
            </div>

            <div className='pagecontainer'>
                <div id='studentinfo'>
                    <h3>Sign-Out Information</h3>
                </div>
                <div className='socontainer'>
                    <div className='inputcontainer'>
                        <div className='label'><label htmlFor="name">Student Name</label></div>
                        <input id='name' value={name} onChange={handleNameChange} />
                    </div>
                    <div className="datetimecontainer inputcontainer">
                        <div className='label'><label htmlFor="datetime">Date/Sign-Out Time</label></div>
                        <div className="datetime-input-wrapper">
                            <CiCalendar className="calendar-icon" />
                            <input
                                id="datetime"
                                name="datetime"
                                type="datetime-local"
                                className="datetime-input"
                                onClick={(e) => e.target.showPicker()}
                                value={datetime}
                                onChange={handleDatetimeChange}
                            />
                        </div>
                    </div>
                    <div className='inputcontainer'>
                        <div className='label'><label htmlFor="reason">Reason for Sign-Out</label></div>
                        <input id='reason' value={reason} onChange={handleReasonChange} />
                    </div>
                    <div className='inputcontainer'>
                        <div className='label'><label htmlFor="class">Current Class</label></div>
                        <input id='class' value={_class} onChange={handleClassChange} />
                    </div>
                    <div className='inputcontainer'>
                        <div className='label'><label htmlFor="teacher">Teacher</label></div>
                        <input id='teacher' value={teacher} onChange={handleTeacherChange} />
                    </div>
                </div>
                <div className='buttonContainer'>
                    <button id='button' onClick={updateDB}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default SignOut;