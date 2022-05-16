import React from 'react'
import './RentYourPropertyNow.css'
export default function RentYourPropertyNow() {
  return (
    <div className='container overflow-hidden  my-4'>
              <div className='row justify-content-sm-between justify-content-center align-items-start p-4'>
                   
                    <div className='col-sm-5 col-8 p-4 '>
                        <img className='position-relative shot1 rounded-x' src='media/rentyourproperynow/2shot.png ' style={{width:'100%',height:'auto',maxWidth:'100%'}} alt='shot1' />
                        <div className='row row-cols-13 p-4'>
                              <div className='col-4 img-2-container'>
                              <img src='media/rentyourproperynow/shot1.png' className=' shot2 position-relative'  style={{width:'110%',height:'auto',maxWidth:'110%'}} alt='shot1' />
                              </div>
                              <div className='col-8 img-3-container'>
                              <img  src='media/rentyourproperynow/shot3.png' className='rounded-x shot3 position-relative ' style={{width:'100%',height:'auto',maxWidth:'100%'}} alt='shot1' />
                              </div>
                        </div>
                    </div>
                    <div className='col-sm-5 text-center p-4 flex-column   '>
                       <img style={{width:'20%',maxWidth:'100%',marginLeft:'100%'}} className='my-4 ' alt='rentyourproperynowicon' src='media/rentyourproperynow/locationlogo.png' />
                       <h4 className='RentYourPropertyNowTitle fs-1 fw-bolder w-100'> احجز شقتك الآن مجانا</h4>
                       <img style={{width:'20%'}} className='my-4' alt='rentyourproperynowicon' src='media/rentyourproperynow/handkeyimg.png' />
                    </div>
              </div>
    </div>
  )
}
