import React  from 'react'
import './footer.css'

export default function Footer() {
   

    return (
    <div className='footer container-fluid  p-4' style={{backgroundImage:`url('/media/footer/footer.png')`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
      <div className='row justify-content-center text-center'>
         <div className='col-sm-6'>
             <ul className='row'>
                 <div className='d-flex flex-column col-6'>
                 <li>
                    
                 <a href='/' className='position-relative  fs-4'>
                 <img  style={{width:'20px',height:'20px' ,right:'-50%' }} className='position-absolute ' alt='arrow' src='media/footer/arrow.png' />
                    الرئيسية  
                     </a>
                 </li>
                 <li>
                     <a href='/signin' className='fs-4'>
                     تسجيل الدخول  
                     </a>
                 </li>
                 </div>
                 <div className='d-flex flex-column col-6 '>
                 <li>
                     <a href='/signup' className='fs-4'>
                     إنشاء حساب 
                     </a>
                 </li>
                 <li>
                     <a href='/contactus' className='fs-4' >
                     تواصل معنا  
                     </a>
                 </li>
                 <li>
                     <a href='/goto' className='fs-4'>
                     الذهاب  إلى 
                     </a>
                 </li>
                 </div>
               
             </ul>
         </div>
        

           <div className='col-12 mt-4  text-center  '>
               <p className='text-white p-0 m-0'>copyrights © the virtual generation 2022

</p>
<p className='text-white p-0 m-0'>
developed and designed by ICR
</p>
<p className='text-white p-0 m-0'>
IdeaCodeReality.ICR@gmail.com
</p>
           </div>
      </div>

    </div>
  )
}
