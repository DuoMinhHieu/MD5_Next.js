import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function ChangePassword() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission logic here
    };

    return (
        <div className="change-password-container">
            <h2>Change Password</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="accountName">Account Name</label>
                    <input
                        type="text"
                        id="accountName"
                        {...register('accountName', { required: true })}
                        className={`form-control ${errors.accountName ? 'is-invalid' : ''}`}
                    />
                    {errors.accountName && <span className="invalid-feedback">Account Name is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        {...register('newPassword', { required: true, minLength: 6 })}
                        className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
                    />
                    {errors.newPassword && errors.newPassword.type === 'required' && (
                        <span className="invalid-feedback">New Password is required</span>
                    )}
                    {errors.newPassword && errors.newPassword.type === 'minLength' && (
                        <span className="invalid-feedback">Password must be at least 6 characters</span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="renewPassword">Re-enter New Password</label>
                    <input
                        type="password"
                        id="renewPassword"
                        {...register('renewPassword', {
                            required: true,
                            validate: (value) => value === watch('newPassword') || "Passwords do not match"
                        })}
                        className={`form-control ${errors.renewPassword ? 'is-invalid' : ''}`}
                    />
                    {errors.renewPassword && <span className="invalid-feedback">{errors.renewPassword.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Change Password</button>
                <Link to="/users">
                    <button className="btn btn-info">Cancel</button>
                </Link>
            </form>
        </div>
    );
}

export default ChangePassword;
