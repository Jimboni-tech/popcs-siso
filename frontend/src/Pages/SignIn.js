import './SignIn.css';

const SignIn = () => {
    return (
        <div className = 'sicontainer'>
            <input placeholder = 'Name'></input>
            <input placeholder = 'Time' type = 'datetime-local'></input>
            <input placeholder = 'Reason'></input>
            <input placeholder = 'Class'></input>
            <input placeholder = 'Teacher'></input>

        </div>
    )
}

export default SignIn;