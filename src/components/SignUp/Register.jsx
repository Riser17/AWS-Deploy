import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import './Register.css'
import { Formik, Form } from "formik";
import { MyTextInput, MySelect, validationSchemaAddUser } from "../InputTypes";
import * as Yup from "yup";
import { UserContext } from "../../Context/UseContext";
import "../mix.css";



const Register = () => {

    const {logindata,userdata} = useContext(UserContext);
    const [modeldata, setModeldata] = useState({
        'fullname':'',
        'email': '',
        'userRole':'',
        '_id':'',
        'password':''
});

const[disabled, setDisabled] = useState(true);
const[inputClass, setInputClass] = useState();
const[saveBTN, setSaveBTN] = useState('saveBTN');

const editInput = (e) =>{
    setDisabled(!disabled)
    if(!disabled){
        setInputClass('');
        setSaveBTN('saveBTN');
    }
    else{
        setInputClass('profileInput');
        setSaveBTN();
    }
}

const updateUserData = async () =>{
  // var data = [];
  // if(userdata.fullname != modeldata.fullname){
  //     data = [...data,{'Fullname': fullname}]
  // }
  // if(userdata.email != modeldata.email){
  //     data = [...data,{'Email': email}]
  // }
  // if(userdata.userRole != modeldata.userRole){
  //     data = [...data,{'UserRole': userRole}]
  // }
  // if(data.length>0){
  //     const res1 =await updateUser(data);
  //     console.log(res1);
  //     if(res1==200) {
          
  //         toast.success("Employee Details Updated Successfully",{autoClose:3000,position:"top-right"})
  //     }
  //     else{
  //         toast.error("Something went wrong !",{autoClose:3000,position:"top-right"})
  //     }
  // }
  // else{
  //     toast.warning("Nothing Changed !",{autoClose:3000,position:"top-right"})
  // }
  // editInput();
}

    const AddUserAttributes = [{
        'id': 1,
        'label': 'Full Name',
        'name': 'fullname',
        'type': 'text'
    }, {
        'id': 2,
        'label': 'E-mail',
        'name': 'email',
        'type': 'email'
    },
    {
        'id': 3,
        'label': 'Password',
        'name': 'password',
        'type': 'text'
    },
    {
        'id': 4,
        'label': 'Confirm Password',
        'name': 'cpassword',
        'type': 'text'
    }]

    const RoleDropAtributes = [{
        'id': 1,
        'label': 'User Role',
        'name': 'userRole',
        'values': [{
            'id': 12,
            'value': 'admin',
            'placehoder': 'Admin'
        },
        {
            'id': 13,
            'value': 'user',
            'placehoder': 'User'
        }]
    }]

    const submitUserdata = async (userData) => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify({
                userData
            })
        });


        if (res.status === 201) {
            toast.success("User added Successfully 😃!", {
                position: "top-center"
            });
            return 'ss'
        } else {
            toast.error("Something went wrong", {
                position: "top-center"
            });
        }
    }

    const showDetail = async (id) => {
        const aa = await userdata.find((obj) => {
          return obj._id === id;
        });
        setModeldata(aa);
      };

    return (
        <>
        <div>
          <h2>Hello {logindata?.ValidUserOne.fullname.toUpperCase()}</h2>
        </div>
        <div className="addUserForm">
          <Formik
            initialValues={
              {
                fullname: "",
                email: "",
                password: "",
                cpassword: "",
                userRole: '',
              }
            }
            validationSchema={validationSchemaAddUser}
            onSubmit={(values, { resetForm }) => {
              submitUserdata(values);
              resetForm();
            }}
          >
            <Form>
              <div className="row">
                {AddUserAttributes.map((val) => (
                  <div className="col-6" key={val.id}>
                    <MyTextInput {...val}   />
                  </div>
                ))}
                {RoleDropAtributes.map((val) => (
                  <div className="col-6" key={val.id}>
                    <MySelect {...val}>
                      {val.values.map((opt) => (
                        <option key={opt.id} value={opt.value}>
                          {opt.placehoder}
                        </option>
                      ))}
                    </MySelect>
                  </div>
                ))}
                <div className="mt-5">
                  <button type="submit">Add User</button>
                </div>
              </div>
            </Form>
          </Formik>
          <div className="row px-5">
            <table className="table  table-striped table-hover ">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Action</th>
                  <th scope="col">FullName</th>
                  <th scope="col">Email</th>
                  <th scope="col">UserRoles </th>
                </tr>
              </thead>
              <tbody>
                {userdata.map((user) => (
                  <tr key={user._id}>
                    <td>
                      <button
                        className="btn"
                        onClick={(e) => showDetail(user._id)}
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="20"
                          fill="currentColor"
                          className="bi bi-binoculars-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4h4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14H1zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5V3z" />
                        </svg>
                      </button>
                    </td>
                    <td>{user.fullname}</td>
                    <td>{user.email}</td>
                    <td>{user.userRole}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          <div className="modal" id="myModal">
            <div className="modal-dialog" style={{ width: "700px" }}>
              <div className="modal-content">
                    <Formik
            initialValues={{
              'fullname':modeldata.fullname,
              'email': modeldata.email,
              'userRole':modeldata.userRole
            }}
            enableReinitialize={true}
            validationSchema={validationSchemaAddUser}
            onSubmit={(values, { resetForm }) => {
              submitUserdata(values);
              resetForm();
            }}
          >
            <>
            <div className="modal-header">
                  <h4 className="modal-title">{modeldata.fullname} </h4>
  
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    &#x2716;
                  </button>
                </div>
            
  
                <div className="modal-body">
                  <div className="row">
                  <Form>
              <div className="row">
                {AddUserAttributes.map((val) => (
                  <div className="col-12" key={val.id}>
                      <MyTextInput {...val} />
                  </div>
                ))}
                {RoleDropAtributes.map((val) => (
                  <div className="col-12" key={val.id}>
                    <MySelect {...val}>
                      {val.values.map((opt) => (
                        <option key={opt.id} value={opt.value}>
                          {opt.placehoder}
                        </option>
                      ))}
                    </MySelect>
                  </div>
                ))}
                <div className="mt-5">
                  <button type="submit">Add User</button>
                </div>
              </div>
              </Form> 
                  </div>
                </div>
  
                <div className="modal-footer">
                  <div>
                    <button className=" btn-del">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                      <span className="px-1">Delete</span>
                    </button>
                    <button  className=" btn-edit" onClick={editInput}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fillRule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg><span className="px-1">{disabled? ('Edit') : ('Cancel')}</span>
                    </button>
                  </div>
                  <div className={saveBTN}>
                      <button type="button" onClick={updateUserData}>Save</button>
  
                  </div>
                </div>
                </>
          </Formik>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </>
    )
}

export default Register
