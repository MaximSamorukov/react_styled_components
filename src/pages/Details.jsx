import React from 'react'
import { useParams, Link } from 'react-router-dom';
function Details(props) {
  const { name } = useParams();
  console.log(props);
  return (
    <div>
      {name}
      <Link to='/'>Home page</Link>
    </div>
  )
}

export default Details