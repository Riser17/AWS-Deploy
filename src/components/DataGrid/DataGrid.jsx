import React from "react";
import { useState, useContext } from "react";
import "./Datagrid.css";
import  { UserContext } from '../../Context/UseContext';
//import { MultiSelect } from "react-multi-select-component";

const DataGrid = () => {
  const {data} = useContext(UserContext);
  const [modeldata, setModeldata] = useState([]);
  
  const [selectNotice, setSelectNotice] = useState([]);
  const noticeperiod = [{
    label: '15 Days or less',
    value: '15 Days or less'
},
{
    label: '1 Months',
    value: '1 Months'
},
{
    label: '2 Months',
    value: '2 Months'
},
{
    label: '3 Months',
    value: '3 Months'
},
{
    label: 'Serving Notice Period',
    value: 'Serving Notice Period'
},
{
    label: 'NA',
    value: 'NA'
}

];
 


  // useEffect(() => {
  //   // async function ResumeData() {
  //   //   const res = await axios.get(apiUrl + "leadscv"+ '/' +jobpostgrp ,multiselectedFilter);
  //   //   setData(res.data);
  //   //   return res;
  //   // }
  //   ResumeData();
  // }, [multiselectedFilter]);

  const showDetail = async (id) => {
    const aa = await data.find((obj) => {
      return obj._id === id;
    });
    setModeldata(aa);
  };

// // ss
  // useEffect(() => {
  //   skill();
  //   }, [selectSkills]);

    // useEffect(() => {
    //     setMultiselectedFilter({
    //         'coun' : countryFilter,
    //         'job' : jobFilter
    //     });
    //         }, [countryFilter,jobFilter]);

//   const skill = ()=>{
//     var filterS = [];
//    for (let index = 0; index < selectSkills.length; index++) {
//        filterS = [...filterS, {
//            'Skills' : selectSkills[index].value
//        }]
//    }
//    setSkills(filterS);
// }


  return (
    <>
      <div className="container all-resume-container">
        <div className="Datacontent2 table-responsive">
          <table class="table table-bordered table-striped table-hover ">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Name</th>
                {/* <th scope="col">Address</th> */}
                <th scope="col">Contact No.</th>
                <th scope="col" >Skills </th>
                <th scope="col">Work Experience</th>
                {/* <th scope="col">Telephone Number</th> */}
                <th scope="col">
                    Notice Period
                    
                    <div className="selectnotice">
                    {/* <MultiSelect
        options={noticeperiod}
        value={selectNotice}
        onChange={setSelectNotice}
        labelledBy={"Select Notice"}
        className={"notice_select"}
        
      /> */}
                    </div></th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {/* {console.log(data)} */}

              {data.map((user) => (
                <tr>
                  <td>{user.Name}</td>
                  <td id="num">{
                    user.Phone_Number.split(',').map(function(char,index){
                        return <span aria-hidden="true" key={index}>{char}<br /> </span>
                      })
                  }</td>
                  <td id="data_skill">{user.Key_Skills}</td>
                  <td>{user.Total_Experience}</td>
                  <td>{user.Notice_Period}</td>
                  <td className="viewbtn">
                    
                    <button
                      class="btn btn-primary "
                      onClick={(e) => showDetail(user._id)}
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>
                    </button>
                    
                  </td>
                  {/* <td><button className="btn btn-primary" onClick={aa} > modal</button></td> */}
                  {/* <td><Popup trigger={<button aria-describedby="popup-14" onClick={aa}> Trigger</button>} position="left center  ">
    
            {openModel && <Modal setOpenModel={setOpenModel} openModel={openModel}  user={user}/>}
  </Popup></td> */}

                  {/* <Modal user={user} setOpenModel={setOpenModel} /> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* 
 Model Box  */}

        <div class="modal" id="myModal">
          <div class="modal-dialog" style={{ width: "700px" }}>
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title"><p>{modeldata.Name}</p></h4>
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  &#x2716;
                </button>
              </div>

              <div class="modal-body">
                <div className="row">
                  <div className="col-6">
                    
                      <div class="form-group row">
                        <label
                          for="inputEmail3"
                          class="col-sm-3 col-form-label"
                        >
                          Key Skills
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                          {modeldata.Key_Skills}
                        </label>
                      </div>
                      <div class="form-group row">
                        <label
                          for="inputPassword3"
                          class="col-sm-3 col-form-label"
                        >
                         Total Experience
                        </label>
                        <label
                          for="inputPassword3"
                          class="col-sm-9 col-form-label"
                        >
                         {modeldata.Total_Experience}
                        </label>
                        
                      </div>
                    
                  </div>
                 
                  <div className="col-6">
                
                      <div class="form-group row">
                        <label
                          for="inputEmail3"
                          class="col-sm-3 col-form-label"
                        >
                          Profile
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                          {modeldata.Profile}
                        </label>
                        
                      </div>
                      <div class="form-group row">
                        <label
                          for="inputPassword3"
                          class="col-sm-3 col-form-label"
                        >
                          Email
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                          {modeldata.Email_ID}
                        </label>
                       
                      </div>
                    
                  </div>
                </div>


<hr />
                <div className="row">
                  <div className="col-6">
                
                      <div class="form-group row">
                        <label
                          for="inputEmail3"
                          class="col-sm-3 col-form-label"
                        >
                          Phone Number
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                          {modeldata.Phone_Number}
                        </label>
                        
                      </div>
                      <div class="form-group row">
                        <label
                          for="inputPassword3"
                          class="col-sm-3 col-form-label"
                        >
                        Role
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                          {modeldata.Role}
                        </label>

                      </div>
                    
                  </div>
                  <div className="col-6">
                
                      <div class="form-group row">
                        <label
                          for="inputEmail3"
                          class="col-sm-3 col-form-label"
                        >
                       Current location
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                          {modeldata.Current_Location}
                        </label>
                       
                      </div>
                      <div class="form-group row">
                        <label
                          for="inputPassword3"
                          class="col-sm-3 col-form-label"
                        >
                       Prefered Location
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                          {modeldata.Preferred_Locations}
                        </label>
                        
                      </div>
                    
                  </div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-6">
                
                      <div class="form-group row">
                        <label
                          for="inputEmail3"
                          class="col-sm-3 col-form-label"
                        >
                        Current Company
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                          
                      
                           {/* {console.log(modeldata.Curr[0] || [])} */}
                        </label>
                        
                      </div>
                      <div class="form-group row">
                        <label
                          for="inputPassword3"
                          class="col-sm-3 col-form-label"
                        >
                  Functional Area
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                         {modeldata.Functional_Area} 
                        </label>
                        
                      </div>
                    
                  </div>
                  <div className="col-6">
                
                      <div class="form-group row">
                        <label
                          for="inputEmail3"
                          class="col-sm-3 col-form-label"
                        >
                          Industry
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                         {modeldata.Industry} 
                        </label>
                       
                      </div>
                      <div class="form-group row">
                        <label
                          for="inputPassword3"
                          class="col-sm-3 col-form-label"
                        >
                         Annual_Salary
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                         {modeldata.Annual_Salary} 
                        </label>
                        
                      </div>
                    
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-6">
                
                      <div class="form-group row">
                        <label
                          for="inputEmail3"
                          class="col-sm-3 col-form-label"
                        >
                          Notice Period
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                          {modeldata.Notice_Period}
                        </label>
                       
                      </div>
                      <div class="form-group row">
                        <label
                          for="inputPassword3"
                          class="col-sm-3 col-form-label"
                        >
                         Summary
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                          {modeldata.Summary}
                        </label>
                       
                      </div>
                    
                  </div>
                  <div className="col-6">
                
                      <div class="form-group row">
                        <label
                          for="inputEmail3"
                          class="col-sm-3 col-form-label"
                        >
                         Resume Headline
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                         {modeldata.Resume_Headline}
                        </label>
                        
                      </div>
                      <div class="form-group row">
                        <label
                          for="inputPassword3"
                          class="col-sm-3 col-form-label"
                        >
                        Under Graduation Degree
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                          {modeldata.Under_Graduation_degree}
                        </label>
                        
                      </div>
                    
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-6">
                
                      <div class="form-group row">
                        <label
                          for="inputEmail3"
                          class="col-sm-3 col-form-label"
                        >
                       UG Specialization
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                          {modeldata.UG_Specialization}
                        </label>
                       
                      </div>
                      <div class="form-group row">
                        <label
                          for="inputPassword3"
                          class="col-sm-3 col-form-label"
                        >
                        UG University Institute Name
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                          {modeldata.UG_University_institute_Name}
                        </label>
                       
                      </div>
                    
                  </div>
                  <div className="col-6">
                
                      <div class="form-group row">
                        <label
                          for="inputEmail3"
                          class="col-sm-3 col-form-label"
                        >
                       UG Graduation Year
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                          {modeldata.UG_Graduation_year}
                        </label>
                       
                      </div>
                      <div class="form-group row">
                        <label
                          for="inputPassword3"
                          class="col-sm-3 col-form-label"
                        >
                       Post Graduation Year
                        </label>
                        <label
                          for="inputEmail3"
                          class="col-sm-9 col-form-label"
                        >
                          {modeldata.Post_graduation_degree} {modeldata.PG_specialization}
                        </label>
                        
                      </div>
                    
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataGrid;
