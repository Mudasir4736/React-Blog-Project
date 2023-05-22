import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useEffect } from 'react'
const Fitness = () => {
  const [val,setval]=useState([])

  useEffect(()=>{
    const url='https://blogbackend-ashen.vercel.app/api/fitty';
    fetch(url).then(fittyres=>fittyres.json())
   
    .then(fittyres=>setval([fittyres]))
    console.log(setval)
  },[])


  return (
    <>
    {
    val.map((fittyres)=>{
  return(
  <>

      <h1 style={{ position: 'absolute', left: '50px' }}>FITNESS  <hr /></h1>
      <div id='hr21'>
        <img src={fittyres[0].ImageAsset} alt="" className='ltimg1' />
        <div className="latbox">
        <p><Link to='/Fitness-data'>{fittyres[0].Title}</Link></p>
          <p >{fittyres[0].BlogContent}</p>
        </div>
      </div>
      <div id='hr22'>
        <img src={fittyres[1].ImageAsset} alt="" className='ltimg1' />
        <div className="latbox">
        <p><Link to='/Fitness-data'>{fittyres[1].Title}</Link></p>
          <p >{fittyres[1].BlogContent}</p>
        </div>
      </div>
      <div id='hr23'></div>

      <p style={{ fontSize: '30px', position: 'absolute', top: '180px', left: '890px' }}>Top Posts
        <hr style={{ width: '200px', height: '3px', backgroundColor: 'lightblue' }} /><br /></p>


      <div className='sidebox21' >
        <img src={fittyres[2].ImageAsset} alt="" width='280px' height='200px' />
        <p><Link to='/Fitness-data'>{fittyres[2].Title}</Link></p>
        <p>{fittyres[2].BlogContent}</p>
        <p>{fittyres[2].PublishedDate}</p>
        <hr /></div>

      <div className='sidebox32' >
        <img src={fittyres[0].ImageAsset} alt="" width='280px' height='200px' />
        <p><Link to='/Fitness-data'>{fittyres[0].Title}</Link></p>
        <p>{fittyres[0].BlogContent}</p>
        <p>{fittyres[0].PublishedDate}</p>
        <hr /></div>

      <div className='sidebox33' >
        <img src={fittyres[1].ImageAsset} alt="" width='280px' height='200px' />
        <p><Link to='/Fitness-data'>{fittyres[1].Title}</Link></p>
        <p>{fittyres[1].BlogContent}</p>
        <p>{fittyres[1].PublishedDate}</p>
        <hr /></div>

        </>)})
}
    </>
  )
}

export default Fitness
