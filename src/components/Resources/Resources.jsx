import React, { useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import  { UserContext } from '../../Context/UseContext';
export default function Resource() {
  const {resource} = useContext(UserContext);

  const navigate = useNavigate();
 
  return (
    <>

<div className="container land1">

  {resource?.map((resource, key)=>(

<div key={key} className="" onClick={()=> navigate(resource?.value)}>
<div className="card land-main card0">
      <h2 className='land-title' >{resource.label}</h2>
  </div>
</div>  
))}

</div>
    </>
  )
}
