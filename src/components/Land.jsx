import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Land.css'

export default function Land() {
  const project = [{
    label : 'Recuriter Data',
    value : 'recuriter'
  },{
    label : 'Vendor Data',
    value : 'vendor'
  },{
    label : 'Resources Data',
    value : 'resources'
  }];
  const navigate = useNavigate();

  return (
    <>

<div className="container land1">

  {project.map((pro, i)=>(

<div className="" key={i} onClick={()=> navigate(pro.value)}>
<div className="card land-main card0">
      <h2 className='land-title' >{pro.label}</h2>
  </div>
</div>  
))}

</div>
    </>
  )
}
