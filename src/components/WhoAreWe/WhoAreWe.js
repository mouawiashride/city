import React from 'react'
import './WhoAreWe.css'
export default function WhoAreWe() {
  return (
    <div className='container my-4 overflow-hidden position-relative' style={{padding:'20px'}}>
         
         <h2 className='WhoAreWeTitle text-center  w-100 ' style={{marginBottom:'80px'}}>من نحن
         
         <img src='media/WhoArewe/keysshape.png' className='position-absolute' alt='keysshape' style={{width:'40%',top:'0%',left:'-5%'}}  />
         </h2>

         <div className='row ' >
             <div className='col-md-6 col-12 position-relative'>
             <img src='media/WhoArewe/homeshape.png' className='position-absolute ' alt='keysshape' style={{zIndex:'-1',width:'50%',top:'-40px',right:'-25%'}}  />
         <p className='fs-4'>
           
             في وقت يرتفع فيه الطلب على السلع و الخدمات المرتبطة في 
العالم االفتراضي نوفر لكم مدينةليست من الخيال إنما من واقع 
نسجناه على الشبكة العنكبوتية التختلف عن المدن الواقعية في مضمونها 
، تحاكي هذه المدينة كل متطلبات زوارها من تسوق عبر المحال التجارية
رياضية إضافة لتأمين الموجودة فيها إلى نوا بيئة مناسبة إلقامة  
الاجتماعات حتى الحصول على شهادات مصدقة من جامعاتها ، يستطيع 
مستخدميها ممارسة نشاطات حياتهم بكل حرية والتجول ً ضمن شوارعها 
كل هذا دون مغادرة منزلهم الواقعي ، نحن نقدم استثمارا ٍض وتأجيرها
 حتى توريثها لشراء عقارات وأرا ً آمنا لألبناء ، مشر وعنا سيخدم كافة شرائح
 المجتمع، تعالوامعنا إلى مدينة المستقبل.
 </p>
             </div>
             <div className='col-md-6 col-12 rounded-x '>
             <img   src='media/WhoArewe/mainimg.jpg' alt='keysshape' style={{borderRadius:'100px',width:'100%',maxWidth:'100%'}}  />
             </div>
         </div>
    </div>
  )
}
