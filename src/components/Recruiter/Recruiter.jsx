import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  { UserContext } from '../../Context/UseContext';
import './Recruiter.css'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {MyTextInput} from '../InputTypes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {

  const {jobgrps, createJobgrp , Resumedata, getdatas} = useContext(UserContext);
  const[query, setQuery] = useState("")

  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;
    getdatas(signal);
    return()=>{
      controller.abort();
    }
  },[]);

  const submitData =async(value)=>{
   const res =await createJobgrp(
      {
        'jobgrp': value.techName + ' Developer'
    } )
    console.log(res);
    if(res.status==200){
      toast.success(res.data, {
        position: "top-center"
    });
    value.techName = '';
    }else{
      toast.error("Something went wrong", {
        position: "top-center"
    });
    }
  }

  $('input').bind('input', function() {
    var c = this.selectionStart,
        r = /[^a-z0-9 ]/gi,
        v = $(this).val();
    if(r.test(v)) {
      $(this).val(v.replace(r, ''));
      c--;
      alert(`Please, Don't type special character`);
    }
    this.setSelectionRange(c, c);
  });

    const navigate = useNavigate();

    const handleClick=(jbgrp)=>{
        navigate(jbgrp)
        Resumedata({
          'collection_name':jbgrp
        })
    }

  return (
    <>
    <div className='mt-4'>
      <input className="input-elevated" type="text" placeholder="Search"  onChange={(e) =>setQuery(e.target.value)}/>
    </div>
    
    <div className="cards-list main1">
{jobgrps.filter(job =>{
if(query == ''){
 return job;
}
else if(job.toLowerCase().includes(query.toLowerCase())){
 return job
}
}).map((job, key)=>(
<div key={key} className="text-center allCard">

<div className="card tech-head land-main card0" onClick={()=>handleClick(`${job.name}`) }>
      <h3 className='land-title' >{job.toUpperCase().slice(0,-1)}</h3>
  </div>
</div>  
))}

</div>



<div>

<button type="button" className=" abs-btn" data-toggle="modal" data-target="#exampleModalCenter">
<span>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>
</span> New Jobpost Group
</button>

</div>
<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Add New JobPostGroup</h5>      
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
      <div className="modal-body">
      <div className="form-group">
    <label htmlFor="exampleFormControlInput1">New JobPostingGroup</label>
    {/* <input type="email" value={newJobgrp} className="form-control inputb" onChange={(e) => setnewJobgrp(e.target.value)} id="exampleFormControlInput1" aria-describedby="emailHelp" placeholder="New Jobpostgroup" required /> */}
    <Formik
        initialValues={{
          techName:''
        }}
        validationSchema= {Yup.object({
          techName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required')
        })}
        onSubmit={(values, { resetForm }) => {
          submitData(values);
          //resetForm();
        }}
      >
        <Form>
                <MyTextInput
                   name="techName"
                   type="text"
                   placeholder="Tech Name"             
            />
            <div className='mt-5'>
          <button type="submit">Submit</button>
          </div>
            <div className="modal-footer">
      </div>
        </Form>
      </Formik>
  
  </div>
      </div>
      
    </div>
  </div>
  <ToastContainer />
</div>
</>
  )
}
