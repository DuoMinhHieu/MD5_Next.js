import React , {useState} from 'react';
import { NavLink } from 'react-router-dom';
function EditProfile(){
    // Sample initial data, replace with actual data from props or state
    const [username, setUsername] = useState('john_doe');
    const [email, setEmail] = useState('john_doe@example.com');
    const [name, setName] = useState('John Doe');
    // States for validation errors
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSubmit = (e) => {
        /*
        e.preventDefault();
        // Handle form submission logic here
        console.log("Updated Profile Info:");
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Name:", name);
        */
       e.preventDefault();

        let isValid = true;

        if (username.trim() === '') {
            setUsernameError('Username is required');
            isValid = false;
        } else {
            setUsernameError('');
        }

        if (email.trim() === '') {
            setEmailError('Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError('Invalid email format');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (name.trim() === '') {
            setNameError('Name is required');
            isValid = false;
        } else {
            setNameError('');
        }

        if (isValid) {
            // Handle form submission logic here
            console.log("Updated Profile Info:");
            console.log("Username:", username);
            console.log("Email:", email);
            console.log("Name:", name);
        }
    };

    return (
        <div className="edit-profile-container">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Profile</button>
                 <NavLink to={"/users"}>
                                <button className="btn btn-info">Cancel</button>
                            </NavLink>
            </form>
        </div>
    );
}
export default EditProfile;