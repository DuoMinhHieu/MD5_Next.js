import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
function ViewInfo(){
    // Sample data, replace with actual data from props or state
    const accountInfo = {
        username: 'john_doe',
        email: 'john_doe@example.com',
        name: 'John Doe'
    };

    return (
        <div className="view-info-container">
            <h2>Account Information</h2>
            <div className="info-group">
                <strong>Username:</strong> {accountInfo.username}
            </div>
            <div className="info-group">
                <strong>Email:</strong> {accountInfo.email}
            </div>
            <div className="info-group">
                <strong>Name:</strong> {accountInfo.name}
            </div>
             <NavLink to={"/users"}>
                                <button className="btn btn-info">Cancel</button>
                            </NavLink>
        </div>
    );
}
export default ViewInfo;