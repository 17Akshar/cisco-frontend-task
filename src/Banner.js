import React from 'react'
import './Banner.css'
function Banner(props){
  return (
    <>
    <div className='banner-main'>
    <h1>{props.title}</h1>
    </div>
    </>
  );
}
export default Banner