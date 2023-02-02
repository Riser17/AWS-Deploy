import React from 'react'
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();
  return (
    <div>
  {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
  </div>

  )
}

export default Breadcrumbs
