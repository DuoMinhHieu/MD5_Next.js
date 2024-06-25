import {Link, NavLink, useParams} from "react-router-dom";
function UserEdit() {
    const {id} = useParams();


    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4>Edit User</h4>
                </div>
                <div className="card-body">
                    <form className="form">
                        <div className="mb-3">
                            <label className="form-label">ID</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary">Save</button>
                            <NavLink to={"/users"}>
                                <button className="btn btn-info">Cancel</button>
                            </NavLink>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default UserEdit;