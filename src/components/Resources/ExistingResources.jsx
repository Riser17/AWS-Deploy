import React,{useState,useContext, useEffect } from 'react'
import  { UserContext } from '../../Context/UseContext'

export default function ExistingResources() {

  const {resourceData,getResourceData} = useContext(UserContext);
  const[query,setQuery] = useState("");
  const [sortConfig, setSortConfig] = useState(null);
  
  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;
    getResourceData(signal);
    return()=>{
      controller.abort();
    }
  },[]);
// console.log(resourceData);
	 
// const sorttoggle = ()=>{
//     const [sortConfig, setSortConfig] = React.useState(null);
  
//     const sortedItems = React.useMemo(() => {
//       let sortData = resourceData;
//       if (sortConfig !== null) {
//         sortData.sort((a, b) => {
//           if (a[sortConfig.key] < b[sortConfig.key]) {
//             return sortConfig.direction === 'ascending' ? -1 : 1;
//           }
//           if (a[sortConfig.key] > b[sortConfig.key]) {
//             return sortConfig.direction === 'ascending' ? 1 : -1;
//           }
//           return 0;
//         });
//       }

//     }, [items, sortConfig]);
  
//     const requestSort = (key) => {
//       let direction = 'ascending';
//       if (
//         sortConfig &&
//         sortConfig.key === key &&
//         sortConfig.direction === 'ascending'
//       ) {
//         direction = 'descending';
//       }
//       setSortConfig({ key, direction });
//     };
  
//     return { items: sortedItems, requestSort, sortConfig };
//   };
  
//  //const aa =  resourceData.sort((a, b) => a.Total_expr > b.Total_expr ? 1 : -1);
//  //.sort((a, b) => a.Total_expr > b.Total_expr ? 1 : -1)
//  for(let i = 0; i<aa.length; i++){
//   console.log(aa[i].Total_expr);
//  }
//  console.log(aa[0].Total_expr);
// }

// const [sortState, setSortState] = useState('default')


// const sortTypes = {
// 	up: {
// 		class: 'sort-up',
// 		fn: (a, b) => a.Full_Name - b.Full_Name
// 	},
// 	down: {
// 		class: 'sort-down',
// 		fn: (a, b) => b.Full_Name - a.Full_Name
// 	},
// 	default: {
// 		class: 'sort',
// 		fn: (a, b) => a
// 	}
// };

// const SortValues =()=>{
//   let nextSort;

//   if (sortState === 'down') nextSort = 'up';
//   else if (sortState === 'up') nextSort = 'default';
//   else if (sortState === 'default') nextSort = 'down';

//   setSortState(nextSort);

// }

//let sortData = resourceData;


  return (
    <div className="container all-resume-container">
      <div className='mt-4 mb-5'>
<input type="text" className="input" placeholder='Search' onChange={(e) =>setQuery(e.target.value)} />
      </div>
    <div className=" mb-4 table-responsive text-center">
      <table className="table  table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Fullname
       
             {/* <button onClick={SortValues}> */}
            {/* {sortTypes[sortState].class} */}
            {/* <i className={`fas fa-${sortTypes[sortState].class}`} /> */}
              {/* {sort? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"/>
  <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
</svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-alpha-up-alt" viewBox="0 0 16 16">
  <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"/>
  <path fill-rule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"/>
  <path d="M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z"/>
</svg>) } */}
              {/* </button> */}
              </th>
            {/* <th scope="col">Address</th> */}
            <th scope="col">Email</th>
            <th scope="col" >Mobile Number</th>
            <th scope="col">Tech. Profile</th>
            {/* <th scope="col">Telephone Number</th> */}
            <th scope="col">Skill Set</th>
            <th scope="col">Total Experience 
           
            <button >low</button>
            <button  >high</button>
          
              
              </th>
            <th scope="col">Relevant Experience</th>
            <th scope="col">Current CTC</th>
            <th scope="col">Expected CTC</th>
            <th scope="col">Availability-to-Join</th>
            <th scope="col">Notice Period</th>
            <th scope="col">System Configuration</th>
            <th scope="col">Preferred Location</th>
            <th scope="col">Current Work Shift time</th>
            <th scope="col">Per Hour / Per Month Rate</th>
            <th scope="col">No. of Hours Daily</th>
            <th scope="col">Employment Type</th>
            <th scope="col">Any daily Stand-up Call</th>
          </tr>
        </thead>
        <tbody>

        {resourceData.filter(user=>{
          if (query == '') {
            return user;
          }
          else if(user.Full_Name.toLowerCase().includes(query.toLowerCase())){
            return user
          }
        }).map((user, key) => (
                <tr key={key}>
                  <td>{user.Full_Name}</td>
                  <td>{user.email}</td>
              <td >{user.phone_no}</td>
              <td >{user.Tech_Profile}</td>
              <td>{user.Skill_set}</td>
              <td>{user.Total_expr}</td>
              <td>{user.Relevant_expr}</td>
              <td>{user.Current_CTC}</td>
              <td>{user.Expected_CTC}</td>
              <td>{user.Availability_to_Join}</td>
              <td>{user.Notice_Period}</td>
              <td>{user.System_Configuration}</td>
              <td>{user.Preferred_Location}</td>
              <td>{user.Current_Wst}</td>
              <td>{user.Perhr_Perm_Rate}</td>
              <td>{user.No_hrs_daily}</td>
              <td>{user.Employment_type}</td>
              <td>{user.Any_ds_call}</td>
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

