import {Link, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";

const formAddValidate = Yup.object().shape({
    id: Yup.number()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string().matches(/^[0-9a-zA-Z]{6,32}$/, "Password 8 - 32 character").required('Required')
});

function UserAdd() {
    const navigate = useNavigate();

    // tao doi tuong formik
    const formAdd = useFormik({
        initialValues: {
            id: "",
            username: "",
            password: ""
        },
        validationSchema: formAddValidate,
        onSubmit: (values) => {
            console.log(values);
            navigate("/users");
        }
    })

    return (
        <>
           <div className="card">
               <div className="card-header">
                   <h4>Add User</h4>
               </div>
               <div className="card-body">
                   <form className="form" onSubmit={formAdd.handleSubmit}>
                       <div className="mb-3">
                           <label className="form-label">ID</label>
                           <input name="id" onChange={formAdd.handleChange} type="text" className="form-control"/>
                           { formAdd.errors.id && <p className={"text-danger"}>{formAdd.errors.id}</p>}
                       </div>
                       <div className="mb-3">
                           <label className="form-label">Username</label>
                           <input name="username" onChange={formAdd.handleChange} type="text" className="form-control"/>
                           { formAdd.errors.username && <p className={"text-danger"}>{formAdd.errors.username}</p>}

                       </div>
                       <div className="mb-3">
                           <label className="form-label">Password</label>
                           <input name="password" onChange={formAdd.handleChange} type="password" className="form-control"/>
                           { formAdd.errors.password && <p className={"text-danger"}>{formAdd.errors.password}</p>}
                       </div>
                       <div className="mb-3">
                           <button type="submit" className="btn btn-primary">Save</button>
                           <Link to={"/users"}>
                               <button className="btn btn-info">Cancel</button>
                           </Link>
                       </div>
                   </form>
               </div>

           </div>
        </>
    )
}

export default UserAdd;