import './SignIn.css';
import { CiCalendar } from "react-icons/ci";
import { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
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

    const targetLocation = {
        lat: parseFloat(process.env.REACT_APP_LAT),
        long: parseFloat(process.env.REACT_APP_LONG)
    };

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371;
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    const updateDB = async (event) => {
        event.preventDefault();


        if (isNaN(targetLocation.lat) || isNaN(targetLocation.long)) {
            alert("Target location is not configured properly.");
            console.error("Invalid target location:", targetLocation);
            return;
        }

        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const userLat = position.coords.latitude;
                const userLon = position.coords.longitude;

                const distance = calculateDistance(userLat, userLon, targetLocation.lat, targetLocation.long);
                console.log(`User is ${distance.toFixed(3)} km away from target.`);
w
                if (distance > 0.1) {
                    alert("You must be on campus to sign in.");
                    return;
                }
                try {
                    const res = await axios.post('http://localhost:3001/signin', {
                        name,
                        datetime,
                        reason,
                        class: _class,
                        teacher
                    });
                    console.log(res.data);
                    alert("Sign-in successful!");
                } catch (err) {
                    console.error("Error during sign-in:", err);
                    alert("There was an error signing in.");
                }
            },
            (error) => {
                console.error("Geolocation error:", error);
                alert("Unable to retrieve your location.");
            }
        );
    };

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
                        <input id='name' value={name} onChange={handleNameChange} />
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
                                value={datetime}
                                onChange={handleDatetimeChange}
                            />
                        </div>
                    </div>
                    <div className='inputcontainer'>
                        <div className='label'><label htmlFor="reason">Reason for late arrival</label></div>
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

export default SignIn;