import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useLocation } from 'react-router-dom'
import { fetchSignUP } from '../../redux-tool/reducers/signin';
import './Signup.css'
export default function Signup() {
  const data = useSelector(state=>state.Sign);

const [email,setEmail] = useState(''); 
const [password,setpassword] = useState(''); 
const [repeatpassword,setrepeatpassword] = useState('');
const [birthday,setbirthday] = useState('')
const [username,setuser] = useState('')
const dispatch =useDispatch();
const [passworderror,setpassworderror]=useState('');

// alert(e.target.value.getDate());
function  handleSignUp(e)
{
e.preventDefault();

if( password===repeatpassword )
{
  dispatch(fetchSignUP({email,username,birthday,password}))
}
else 
{
  setpassworderror('لا يوجد تطابق بين كلمتي السر ');
}

}








const errormes =  data?.datatemp?.message?.map((resul,index)=><div key={index} className="row row-cols-12 row-cols-md-6 justify-content-center mb-3">
<div className="col-8 col-md-5">
    <label  className='text-danger'>  {resul}   </label>
  </div>
</div>   ) 

  
  if (data.logedin)
 return  <Navigate to="/" replace={true} />
else 
  return (
    <>

    <div className='container position-relative'>
    <div className='row'>
            <div className='col-sm'>
           <img src='media/logo/logo.svg' alt='logo' className='mx-auto d-block' />
            </div>
      </div>
      <h4 className='text-center'>تسجيل حساب</h4>

      <form noValidate={false} method='POST'>
      <div className="row row-cols-12 row-cols-md-6 justify-content-center mb-3">
            <div className="col-8 col-md-5  ">
            <input  type="text" value={username} onChange={(e)=>{setuser(e.target.value)}} placeholder='الاسم' className="form-control"  required={true} />
            </div>
     </div>
      <div className="row row-cols-12 row-cols-md-6 justify-content-center mb-3">
            <div className="col-8 col-md-5  ">
            <input required={true} type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='الإيميل' className="form-control"  />
            </div>
     </div>


  <div className="row row-cols-12 row-cols-md-6 justify-content-center mb-3">
    <div className="col-8 col-md-5">
        <input required={true} type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='كلمة السر' className="form-control"  />
      </div>
  </div>
  <div className="row row-cols-12 row-cols-md-6 justify-content-center mb-3">
    <div className="col-8 col-md-5">
        <input required={true} type="password" value={repeatpassword} onChange={(e)=>{setrepeatpassword(e.target.value)}} placeholder='تأكيد كلمة السر' className="form-control"  />
      </div>
  </div>
  
  <div className="row row-cols-12 row-cols-md-6 justify-content-center mb-3">
    <div className="col-8 col-md-5">
        <input required={true} type="date"   onChange={(e)=>{    console.log(e.target.value); setbirthday( e.target.value)}}   className="form-control"  />
      </div>
  </div>


  <div  className="row row-cols-12 row-cols-md-6 justify-content-center mb-3">
<div className="col-8 col-md-5">
    <label className='text-danger' >  {passworderror}   </label>
  </div>
</div> 

{errormes}


 

<div className='row  row-cols-md-8 justify-content-center'>
  <div className='col-auto'>
  <button onClick={(e)=>{handleSignUp(e)}} type="submit" className="btn mx-auto d-block createaccountnow px-4 my-4 rounded-x ">إنشاء حساب</button>
  <button href='/signin' className='fw-light  notHaveAccountLoginNow'  >لديك حساب!؟  <Link to='/signin'  className='letslogin' > قم بتسجيل الدخول</Link></button>
  </div>
</div>



    
      </form>
   


     

     

    </div>


    </>
  )
}
