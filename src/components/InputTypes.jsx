import React from 'react';
import { useField } from 'formik';
import * as Yup from 'yup';
import "yup-phone";



export const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <div className='input_wrap'>
        <input className="text-input" {...field} {...props} required/>
        <label>{label}</label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  

  
  export const MySelect = ({ values, label, ...props }) => {

    const [field, meta] = useField(props);

    return (
      <div className='input_wrap'>
        <select {...field} {...props}>
        <option hidden>Selecte an option</option>
        {values.map((opt)=>
                <option key={opt.id} value={opt.value}>{opt.placehoder}</option>
)}
          </select>
        <label htmlFor={props.id || props.name}>{label}</label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  export const validationSchema = Yup.object({
    fullName: Yup.string()
      .max(25, 'Must be 25 characters or less')
      .required('Required'),
    Email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    number: Yup.string().phone("Please enter a valid phone number").required("A phone number is required"),
    venEligible: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    Gst: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    Contactperson: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    Technology: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    Paycycle: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    Cin: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    Ndasign: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
  })

  export const validationSchemaResource = Yup.object({
    fullname: Yup.string()
      .max(25, 'Must be 25 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    phone: Yup.string().phone("Please enter a valid phone number").required("A phone number is required"),
    techprofile: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    skillset: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    totalexpr: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    relevantexpr: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    currentctc: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    expectedctc: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    availjoin: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    noticeperiod: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    systmconfig: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    prefrdlocation: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    currentwst: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    perate: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    anydscall: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    nohrsdaily: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    employment_type: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
  })

  export const validationSchemaAddUser = Yup.object({
    fullname: Yup.string()
      .max(25, "Must be 25 characters or less")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    cpassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        'Must match "password" field value'
      )
      .required("Required"),
    userRole: Yup.string()
      .max(10, "select user role")
      .required("Required"),
  })