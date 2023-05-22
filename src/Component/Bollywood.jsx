
import { Link } from 'react-router-dom'
import './Style.css'
import { useState } from 'react'
import { useEffect } from 'react'
const Bollywood = () => {
 const [val,setval]=useState([])

     useEffect(()=>{
  const url='https://blogbackend-ashen.vercel.app/api/bolly';
  fetch(url).then(bollyres=>bollyres.json())
  .then(bollyres=>setval([bollyres]))
},[])

     return (<>
   {
    val.map((bollyres)=>{
    return (
  <>
    <h1 style={{ position: 'absolute', left: '50px' }}>BOLLYWOOD <hr /></h1>
    <div id='hr21'>
      <img src={bollyres[0].ImageAsset} alt="" className='ltimg1' />
      <div className="latbox">
      <h4><Link to='/bollywood-data'>{bollyres[0].Title}</Link></h4>
        <p >{bollyres[0].BlogContent}</p>
      </div>
    </div>
    <div id='hr22'>
      <img src={bollyres[1].ImageAsset} alt="" className='ltimg1' />
      <div className="latbox">
      <h4><Link to='/bollywood-data'>{bollyres[1].Title}</Link></h4>
        <p >{bollyres[1].BlogContent}</p>
      </div>
    </div>
    <div id='hr23'></div>

    <p style={{ fontSize: '30px', position: 'absolute', top: '180px', left: '890px' }}>Top Posts
      <hr style={{ width: '200px', height: '3px', backgroundColor: 'lightblue' }} /><br /></p>
                                                                                              
                                                                                              
    <div className='sidebox21' >
      <img src={bollyres[2].ImageAsset} alt="" width='250px' height='150px' />
      <p><Link to='/bollywood-data'>{bollyres[2].Title}</Link></p>
      <p>{bollyres[2].BlogContent}</p>
      <p>{bollyres[2].PublishedDate}</p>
      <hr /></div>

    <div className='sidebox22' >
      <img src={bollyres[0].ImageAsset} alt="" width='250px' height='150px' />
      <p><Link to='/bollywood-data'>{bollyres[0].Title}</Link></p>
      <p>{bollyres[0].BlogContent}</p>
      <p>{bollyres[0].PublishedDate}</p>
      <hr /></div>

    <div className='sidebox23' >
      <img src={bollyres[1].ImageAsset} alt="" width='250px' height='150px' />
      <p><Link to='/bollywood-data'>{bollyres[1].Title}</Link></p>
      <p>{bollyres[1].BlogContent}</p>
      <p>{bollyres[1].PublishedDate}</p>
      <hr /></div>


</>)})
}
   
  </>)
}
export default Bollywood



