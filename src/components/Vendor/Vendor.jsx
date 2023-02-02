import React, { useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import  { UserContext } from '../../Context/UseContext';
import './Vendor.css'
export default function Vendor() {
  const {vendor} = useContext(UserContext);

  const navigate = useNavigate();
 
  return (
    <>

<div className="container land1">

  {vendor.map((ven, key)=>(

<div key={key} className="" onClick={()=> navigate(ven.value)}>
<div className="card land-main card0">
      <h2 className='land-title' >{ven.label}</h2>
  </div>
</div>  
))}

</div>
    </>
  )
}
