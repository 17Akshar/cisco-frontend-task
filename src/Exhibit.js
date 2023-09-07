import React from 'react'
import './Exhibit.css'
function Exhibit(props){
  return (

    <>
    <div className='card'>
      <h1>{props.name}</h1>
      <p>{props.address}</p>
    </div>
    </>

  );
}
export default Exhibit
