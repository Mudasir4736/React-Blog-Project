import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import '../Component/Style.css'

const Homebox = () => {
  const [val,setval]=useState([])

  useEffect(()=>{
    const url='https://blogbackend-ashen.vercel.app/api/datas';
    fetch(url).then(datasres=>datasres.json())
   
    .then(datasres=>setval([datasres]))
  },[])

  return (<>
    {
    val.map((datasres)=>{
  return(
  <>
      <img src={datasres[0].ImageAsset} className='p1'  alt='??'/>
      <span className='sp1'>{datasres[0].PublishedDate}</span>
      <img src={datasres[1].ImageAsset} className='p2'  alt='??'/>
      <span className='sp2'> {datasres[1].PublishedDate}</span>
      <img src={datasres[2].ImageAsset} className='p3' alt='??' />
      <span className='sp3'>{datasres[2].PublishedDate}</span>


      <p style={{ fontSize: '40px', position: 'absolute', top: '700px', left: '110px' }}>The Latest
        <hr style={{ width: '200px', height: '3px', backgroundColor: 'lightblue' }} /></p>

      <div className='container'>
        <div className='boxdetails'>
          <img src={datasres[0].ImageAsset} alt="" height='250px' width='300px' />
          <h4><Link to='/bollywood-data'>{datasres[0].Title}</Link></h4>
          <p>{datasres[0].BlogContent}</p>
          <p>{datasres[0].PublishedDate}</p>
        </div>
      </div>
      <div className='container2'>
        <div className='boxdetails2'>
          <img src={datasres[1].ImageAsset} alt="" height='250px' width='300px' />
          <h4><Link to='/bollywood-data'>{datasres[1].Title}</Link></h4>
          <p>{datasres[1].BlogContent}</p>
          <p>{datasres[1].PublishedDate}</p>
        </div>
      </div>
      <div className='container3'>
        <div className='boxdetails3'>
          <img src={datasres[2].ImageAsset} alt="" height='250px' width='300px' />
          <h4><Link to='/food-data'>{datasres[2].Title}</Link></h4>
          <p>{datasres[2].BlogContent}</p>
          <p>{datasres[2].PublishedDate}</p>
        </div>
      </div>

      <p style={{ fontSize: '40px', position: 'absolute', top: '1260px', left: '120px' }}>Latest Articles
        <hr style={{ width: '200px', height: '3px', backgroundColor: 'lightblue' }} /><br /></p>


      <div id='hr1'>
        <img src={datasres[0].ImageAsset} alt="" className='ltimg1' />
        <div className="latbox">
          <p >{datasres[0].BlogContent}</p>
        </div>
      </div>
      <div id='hr2'>
        <img src={datasres[1].ImageAsset} alt="" className='ltimg2' />
        <div className="latbox2">
          <p >{datasres[1].BlogContent}</p>
        </div>
      </div>
      <div id='hr3'>
        <img src={datasres[2].ImageAsset} alt="" className='ltimg2' />
        <div className="latbox2">
          <p >{datasres[2].BlogContent}</p>
        </div>
      </div>
      <div id='hr4'></div>

       <div className='mazapic'>
         <img src="https://images.unsplash.com/photo-1621232082074-1a7750ecc557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt=""  width='300px' height='590'  />
       </div>
   
       <p style={{ fontSize: '30px', position: 'absolute', top: '1980px', left: '960px' }}>Top Posts
        <hr style={{ width: '200px', height: '3px', backgroundColor: 'lightblue' }} /><br /></p>
         <div className='sidebox' >
         <img src={datasres[0].ImageAsset} alt=""  width='250px'  height='150px' />
         <p>{datasres[0].BlogContent}</p>
         <p>{datasres[0].PublishedDate}</p>

       </div>
       </>)})
}
    </>
  )
}
export default Homebox

