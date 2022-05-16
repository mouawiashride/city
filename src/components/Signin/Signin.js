import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { fetchSignIN } from '../../redux-tool/reducers/signin';
import './Signin.css'
export default function Signin( ) {
  // const statue =  useSelector(state=>state.Sign);
const [email,setEmail] = useState(''); 
const [password,setpassword] = useState(''); 
const dispatch =useDispatch();
 const data = useSelector(state=>state.Sign);
 let navigate = useNavigate();
function  handlelogin(e)
{
e.preventDefault();
dispatch(fetchSignIN({email,password}))
navigate("/", { replace: true });

}
  if (data.logedin)
 return  <Navigate to="/" replace={true} />
else 
  return (
    <>

    <div className='container position-relative'>
    <div className='row  '>
            <div className='col-sm'>
           <img src='media/logo/logo.svg' alt='logo' className='mx-auto d-block' />
            </div>
      </div>
      <h4 className='text-center'> تسجيل دخول</h4>

      <form>
      <div className="row row-cols-12 row-cols-md-6 justify-content-center mb-3">
    <div className="col-8 col-md-5  ">
      <input type="email" onChange={e=>{setEmail(e.target.value)}} value={email} placeholder='الإيميل' className="form-control"  />
    </div>
  </div>


  <div className="row row-cols-12 row-cols-md-6 justify-content-center mb-3">
    <div className="col-8 col-md-5">
        <input type="password" onChange={e=>{setpassword(e.target.value)}} value={password} placeholder='كلمة السر' className="form-control"  />
      </div>
  </div>

  

      <button type='submit' onClick={(e)=>handlelogin(e)} href='/' style={{width:'fit-content'}} className="  btn mx-auto d-block button px-4 my-4 rounded-x"> تسجيل دخول</button>
      <button   style={{width:'fit-content'}}  className="create-your-acount-now btn mx-auto d-block button px-4 my-4 rounded-x ">ليس لديك حساب؟! <a href='/signup'  >أنشئ حسابك الآن</a> </button>
      </form>
   


    </div>


    </>
  )
}
