import React,{useContext, useEffect } from 'react'
import  { UserContext } from '../../../Context/UseContext'

export default function Exitvendor() {

  const {vendorData,getVendorData} = useContext(UserContext);


  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;
    getVendorData(signal);
    return()=>{
      controller.abort();
    }
  },[]);

	 


  return (
    <div className="container all-resume-container">
    <div className="Datacontent2 table-responsive text-center">
      <table className="table table-bordered table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">FullName</th>
            {/* <th scope="col">Address</th> */}
            <th scope="col">Email</th>
            <th scope="col" >Phonenum </th>
            <th scope="col">VenEligible</th>
            {/* <th scope="col">Telephone Number</th> */}
            <th scope="col">Gst</th>
            <th scope="col">Contactperson</th>
            <th scope="col">Technology</th>
            <th scope="col">Ndasign</th>
            <th scope="col">Cin</th>
          </tr>
        </thead>
        <tbody>

        {vendorData.map((user, key) => (
                <tr key={key}>
                  <td>{user.Fullname}</td>
                  <td>{user.Email}</td>
              <td >{user.Phonenum}</td>
              <td >{user.VenEligible}</td>
              <td>{user.Gst}</td>
              <td>{user.Contactperson}</td>
              <td>{user.Technology}</td>
              <td>{user.Ndasign}</td>
              <td>{user.Cin}</td>
                </tr>
              ))}
          
            
          
        </tbody>
      </table>
    </div>
    {/* 
Model Box  */}

    
  </div>
  )
}

