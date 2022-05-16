import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux-tool/reducers/signin';
import './Header.css'
  function Header({data}) {
    const navigate = useNavigate();


    

//  const data = useSelector(state=>state.Sign)
 const dispatch = useDispatch();
   function handlelogout(){
    dispatch(logout());
    localStorage.clear();
    navigate('/', { replace: true });
   
   } 
 
  return (
    <>
<nav className=" navbar-site navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
  <a className="navbar-brand d-block " href="/">
     <img 
     className='logo-img '
      alt="logo property rent"   
     src="/media/logo/logo.svg"
      />
    </a>

    {data.logedin&& <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start  order-lg-1 " >
   <div className="dropdown notification mx-4">
     <a href="/" className="d-block link-dark text-decoration-none dropdown-toggle" id="notification" data-bs-toggle="dropdown" aria-expanded="false">
       <img src="media/profile/profilephoto.png" alt="mdo" width="32" height="auto" className="rounded-circle"/>
     </a>
     <ul className="dropdown-menu text-small" aria-labelledby="notification">
    
       <li ><button onClick={()=>{handlelogout()}} className="dropdown-item" href="/">تسجيل خروج</button></li>
     
     </ul>
   </div> </div>}



    <button className="navbar-toggler order-lg-1 order-lg-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
 
   
    <div className="collapse navbar-collapse text-center" id="navbarNav">
      <ul className="navbar-nav justify-content-lg-around w-100 justify-content-center">

        

        <li className="nav-item">
          <a className="nav-link active fw-bold rounded-x" aria-current="page" href="/">الرئيسية </a>
        </li>
    
      
        <li className="nav-item">
          <a className="nav-link fw-bold rounded-x" href='/goto'>الذهاب  إلى</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold rounded-x" href='/contactus'>تواصل معنا </a>
        </li>

         

        {!data.logedin&&<>
          <li className="nav-item">
          <a  className="nav-link fw-bold rounded-x" href="/signin">تسجيل الدخول </a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold rounded-x" href="/signup">إنشاء حساب</a>
        </li></> }



        {
          data.logedin ?    <>
        <li className="nav-item">
          <button className="nav-link fw-bold rounded-x" > رقم شقتك: <span className='rentnumber'>{data.data.key}</span> </button>
        </li>
        </>  : <> </>
     }

  
      </ul>
    </div>


    
    
  </div>
</nav>
    </>
  )
}


export default Header;
