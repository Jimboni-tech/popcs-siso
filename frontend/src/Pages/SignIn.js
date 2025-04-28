import './SignIn.css';

const SignIn = () => {
    return (
        <div>
            <div>

            </div>
            <div id = 'sititle'>
                <h1>Upper School Sign In</h1>
            </div>
            <div className = 'sicontainer'>
                <input placeholder = 'Name'></input>
                <div class="datetime-input-container">
                    <label for="datetime">Date/Time:</label>
                    <input 
                        id="datetime"
                        name="datetime"
                        type="datetime-local"
                        placeholder="Select date and time"
                    />
                </div>
                <input placeholder = 'Reason'></input>
                <input placeholder = 'Class'></input>
                <input placeholder = 'Teacher'></input>
            </div>
        </div>
    )
}

export default SignIn;