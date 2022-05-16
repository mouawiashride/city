import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Contactus } from '../../redux-tool/reducers/signin';
import './ContactUs.css'
export default function ContactUs() {
  const [email,setEmail] = useState(''); 
  const [message,setmessage] = useState(''); 
  const dispatch=useDispatch();
  let navigate = useNavigate();
function handlesend(e)
{
  e.preventDefault();
  dispatch(Contactus({email,message}))
  navigate("/", { replace: true });
  
  
}

  return (
    <>
    <div className='container my-4 position-relative' style={{paddingTop:'40px'}}>
      <img alt='telphone' src='media/ContactUs/telphone.png' className='position-absolute telephoneimg' style={{zIndex:'-1'}}  />
<p className='text-center my-4'>
  تواصل معنا
</p>
    
<form>


  <div className="row row-cols-12 row-cols-md-6 justify-content-center mb-3">
    <div className="col-8 col-md-5">
        <input required type="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='الإيميل' className="form-control"  />
      </div>
  </div>
  <div className="row row-cols-12 row-cols-md-6 justify-content-center mb-3">
  
     <div className="col-8 col-md-5">
        <textarea required type="email" value={message} onChange={(e)=>{setmessage(e.target.value)}} rows={3} cols={4} style={{resize:'none'}} placeholder='الرسالة' className="form-control"  />
      </div>
  </div>
 



  <button  onClick={(e)=>handlesend(e)} type="submit" className="btn mx-auto d-block sendtousbutton px-4  rounded-x ">إرسال</button>
</form>
</div>
    </>
  )
}
