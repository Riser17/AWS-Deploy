import {createContext, useState, useEffect} from 'react';
import axios from 'axios'
import {useNavigate} from "react-router-dom"
const apiUrl = "http://54.160.72.194:9090"

export const UserContext = createContext();

const UserContextProvider =(props)=>{

    const [logindata,setLoginData] = useState('');
    const [jobgrps, setjobgrps] = useState([]);
    const[message, setmessage] = useState([]);
    const [data, setData] = useState([]);
	const [vendorData, setVendorData] = useState([]); 
  const [userdata, setUserData] = useState('');
  const [resourceData, setResourceData] = useState([]); 
  const history = useNavigate();

   const vendor = [{
        label : 'New Vendor',
        value : 'newvendor'
      },{
        label : 'Existing vendor',
        value : 'existingvendor'
      }];

      const resource = [{
        label : 'Add Resource',
        value : 'addresource'
      },{
        label : 'All Resources',
        value : 'allresources'
      }];
    
      useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        getUsersData(signal)
        DashboardValid(signal);
        return()=>{
          controller.abort();
        }
      },[]);


      const getUsersData = async() =>{
        let token = localStorage.getItem("usersdatatoken");
          try{
             const res= await axios.get(apiUrl + '/api/getuserdata', {
              headers: {
                "Content-Type": "application/json",
                "Authorization": token
              } 
            })
            setUserData(res.data.usersdata);
         
          }
          catch (error) {
              console.log(error);
          }
      }

    const DashboardValid = async () => {

        let token = localStorage.getItem("usersdatatoken");
        // const res = await fetch(apiUrl + "/api/validuser", {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //     "Authorization": token
        //   }
        // });
        const res= await axios.get(apiUrl + '/api/validuser', {
          headers: {
            "Content-Type": "application/json",
            "Authorization": token
          } 
        })
        const data = res.data;
    
        if (data.status === 401 || !data) {
      localStorage.removeItem("usersdatatoken");
console.log('hadkjbch');
setLoginData(false)
          history("/login");
        } else {
          setLoginData(data);
          //history("/dash");
        }
      }
    
    const createJobgrp= async(jbgrp)=>{
      let token = localStorage.getItem("usersdatatoken");
      var res;
        try{
            res= await axios.post(apiUrl + '/api/newjbpstgrp', jbgrp, {
              headers: {
                "Content-Type": "application/json",
                "Authorization": token
              }
            })
            setmessage(res.data)
         }
         catch (error) {
             console.log(error);
         }
         getdatas();
         return res;
    }


    const getdatas = async() =>{
      let token = localStorage.getItem("usersdatatoken");
        try{
           const res= await axios.get(apiUrl + '/api/getJobpostgrps', {
            headers: {
              "Content-Type": "application/json",
              "Authorization": token
            }
          })
          setjobgrps(res.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    const Resumedata = async(body)=>{
      let token = localStorage.getItem("usersdatatoken");
        try{
            const res= await axios.post(apiUrl + '/api/leadscv', body, {
              headers: {
                "Content-Type": "application/json",
                "Authorization": token
              }
            })
            setData(res.data)
          
         }
         catch (error) {
             console.log(error);
         }
    }

    const Newvendors = async (body1) => {
      let token = localStorage.getItem("usersdatatoken");
        try {
            const res1 = await axios.post(apiUrl + '/api/newdata', body1, {
              headers: {
                "Content-Type": "application/json",
                "Authorization": token
              }
            });
          return(res1)
        } catch (error) {
            throw error;
        }
    }

    const addResource = async (body1) => {
      console.log(body1);
      let token = localStorage.getItem("usersdatatoken");
        try {
            const res1 = await axios.post(apiUrl + '/api/addresource', body1, {
              headers: {
                "Content-Type": "application/json",
                "Authorization": token
              }
            });
          return(res1)
        } catch (error) {
            throw error;
        }
    }

    const getVendorData = async() =>{
      let token = localStorage.getItem("usersdatatoken");
        try{
           const res= await axios.get(apiUrl + '/api/getVendorData', {
            headers: {
              "Content-Type": "application/json",
              "Authorization": token
            }
          })
           setVendorData(res.data)
        }
        catch (error) {
            console.log(error);
        }
    }

    const getResourceData = async() =>{
      let token = localStorage.getItem("usersdatatoken");
        try{
           const res= await axios.get(apiUrl + '/api/getresources', {
            headers: {
              "Content-Type": "application/json",
              "Authorization": token
            }
          })
           setResourceData(res.data)
        }
        catch (error) {
            console.log(error);
        }
    }


    const value={getdatas,userdata, jobgrps,Resumedata,data, createJobgrp, vendor,Newvendors,
      logindata,setLoginData, DashboardValid, vendorData, getVendorData, resource, resourceData,
       getResourceData , addResource};

    return(
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
