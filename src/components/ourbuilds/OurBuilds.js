import React , { useRef, useState }  from 'react'
import './OurBuilds.css'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";




// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { Autoplay, EffectCoverflow, Lazy, Pagination } from "swiper";



export default function OurBuilds() {
    
  return (
    <>

{/* start  video how to use site  */}
<div className="video-how-to-use-site  container p-4">
    <div className="video-container  my-2" >
        <div className="ratio ratio-21x9  mx-auto container rounded-x overflow-hidden  ">
            <iframe src="https://www.youtube.com/embed/qzQ67ztFAbU" title="YouTube video" allowFullScreen></iframe>
        </div>
    </div>
</div>
 {/* end  video how to use site  */}




    <div className='container my-4 overflow-hidden'>
        <h5 className='text-center my-4 fs-2'style={{color:'#0076A4',fontFamily:'DecoType Naskh'}} >مبانينا</h5>
        <div className='row justify-content-center my-4'>
                    <div className='col-10 my-4'>

                              <div id="carouselExampleIndicators" className="carousel slide position-relative"  data-bs-ride="carousel">
                                    <div className="carousel-indicators position-absolute"  >
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img src="media/cardsbuilds/fashion/fashion1.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="media/cardsbuilds/gym/gym1.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="media/cardsbuilds/hairdresser/hairdresser1.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="media/cardsbuilds/talent/talent1.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                        <img src="media/cardsbuilds/restaurant/restaurant1.jpg" className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                    </div>
                    </div>
        </div>
    </div>



     <div className='container-fluid '>
         <div className='row '>
             <div className='col-md-6 col-12'>
                   <h4 className='text-center'>
                   مبنى الموضى
                   </h4>
                   <p className='my-4 p-4'>
                   تظهر أناقة الإنسان من أزيائه، فالموضة والأزياء تأخذ جزءاً كبيراً في أذهان الناس
وتعطي الانطباع الأولي على شخصية الإنسان الذي يرتديها فهو عالم واسع تطور عبر
السنين ليصبح من أهم العوالم في وقتنا هذا لذلك كان من المهم تجهيز مدينتنا بمركز
أزياء ضخم يحتوي على أحدث صيحات الموضة المناسبة لكافة الأعمار
                   </p>
             </div>
             <div className='col-md-5 col-12  '>
             <Swiper
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        speed={5000}
        coverflowEffect={{
          rotate: 50,
          stretch: 100,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        modules={[EffectCoverflow,Pagination,Autoplay,Lazy]}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper my-4"
      >
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/fashion/fashion1.jpg"  style={{width:'100%',height:'400px',maxWidth:'100%' }}    alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/fashion/fashion2.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/fashion/fashion3.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/fashion/fashion4.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/fashion/fashion5.jpg"  style={{width:'100%',height:'400px',maxWidth:'100%' }} alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
       
      </Swiper>
            </div>
         </div>



         <div className='row my-4'>
            
             <div className='col-md-5 col-12 order-md-first  order-1'>
             <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        speed={5000}
        coverflowEffect={{
          rotate: 50,
          stretch: 100,
          depth: 600,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow,Pagination,Autoplay,Lazy]}
        className="mySwiper my-4"
      >
         <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/talent/talent1.jpg"  style={{width:'100%',height:'400px',maxWidth:'100%' }}    alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/talent/talent2.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/talent/talent3.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/talent/talent4.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/talent/talent5.jpg"  style={{width:'100%',height:'400px',maxWidth:'100%' }} alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      </Swiper>
            </div>

                    <div className='col-md-6 col-12'>
                          <h4 className='text-center'>
                          مبنى المواهب:
                          </h4>
                              <p className='my-4 p-4'>
                              لكل إنسان موهبة بالحياة قد يكتشفها أو يكتسبها بالتجارب والمحاولات وإن
            كانت لديه تلك الموهبة بالفعل يحاول ويتدرب على تنميتها وتطويرها إلى
            أفضل حالاتها بالإضافة إلى أن الكثير من المواهب تعد مصدراً للدخل
            وانطلاقا من ذلك وفرنا في مدينتنا مبنى يدعم المواهب حيث يمكنك
            استعراض موهبتك أو تنميتها وفق برامج خاصة ومجهزة
                              </p>
                        
                    </div>
         </div>


















         <div className='row '>
             <div className='col-md-6 col-12'>
                   <h4 className='text-center'>
                   نادي رياضي:
                   </h4>
                   <p className='my-4 p-4'>
                   للرياضة دور محوري في الحفاظ على صحتنا العقلية والجسدية والنفسية، إن
كنت ممن لا يمارسون الرياضة لتعرف كيف ستتغير حياتك إلى الأفضل
يمكنك زيارة مركزنا الرياضي لتمارس كافة أنواع الأنشطة الرياضية
المناسبة لاهتماماتك ورغباتك.
                   </p>
             </div>
             <div className='col-md-5 col-12  '>
             <Swiper
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        speed={5000}
        coverflowEffect={{
          rotate: 50,
          stretch: 100,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        modules={[EffectCoverflow,Pagination,Autoplay,Lazy]}
        className="mySwiper my-4"
        lazy={true}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/gym/gym1.jpg"  style={{width:'100%',height:'400px',maxWidth:'100%' }}    alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/gym/gym2.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/gym/gym3.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/gym/gym4.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/gym/gym5.jpg"  style={{width:'100%',height:'400px',maxWidth:'100%' }} alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/gym/gym6.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/gym/gym7.jpg"  style={{width:'100%',height:'400px',maxWidth:'100%' }} alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
       
      </Swiper>
            </div>
         </div>



         <div className='row my-4'>
            
             <div className='col-md-5 col-12 order-md-first  order-1'>
             <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        speed={5000}
        coverflowEffect={{
          rotate: 50,
          stretch: 100,
          depth: 600,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        modules={[EffectCoverflow,Pagination,Autoplay,Lazy]}
        className="mySwiper my-4"
          lazy={true}
        pagination={{
          clickable: true,
        }}
      >
         <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/hairdresser/hairdresser1.jpg"  style={{width:'100%',height:'400px',maxWidth:'100%' }}    alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/hairdresser/hairdresser2.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/hairdresser/hairdresser3.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/hairdresser/hairdresser4.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>

      </Swiper>
            </div>

                    <div className='col-md-6 col-12'>
                          <h4 className='text-center'>
                      مركز تصفيف الشعر :
                          </h4>
                              <p className='my-4 p-4'>
                              كل إنسان يسعى للحصول على أسمى درجة من الجمال ولأن الشعر جزأ لا
يتجزأ من جمالنا الخارجي ومن المهم جداً المحافظة عليه زودنا مدينتنا
بمركز مخصص للاهتمام بالشعر نملك فيه اختيارات متعددة من مستحضرات
ذات جودة عالية للعناية به ولكن قبل اختيار واستخدام أي مستحضر أو
اعتماد أي تسريحة يجب أن نكون على دراية بنوع شعرنا وطبيعته وما يناسبنا
وهذا ما تم مراعاته بمركزنا.
                              </p>
                        
                    </div>
         </div>
















         <div className='row '>
             <div className='col-md-6 col-12'>
                   <h4 className='text-center'>
                   المطعم:
                   </h4>
                   <p className='my-4 p-4'>
                   لأن الطعام من أكثر الأشياء الممتعة والمهمة في حياتنا لذلك قمنا بإنشاء مطعم يتيح
لمستخدمينا تجربة مختلف أصناف الطعام المشهورة كالطعام الإيطالي والصيني بما فيه
من مأكولات بحرية عالية الجودة والأطعمة السريعة إضافة إلى تذوق مأكولات المطبخ
العربي المعروفة بلذتها.
                   </p>
             </div>
             <div className='col-md-5 col-12  '>
             <Swiper
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        speed={7000}
        coverflowEffect={{
          rotate: 50,
          stretch: 100,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
       
        className="mySwiper my-4"
        modules={[EffectCoverflow,Pagination,Autoplay,Lazy]}
      
        lazy={true}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/restaurant/restaurant1.jpg"  style={{width:'100%',height:'400px',maxWidth:'100%' }}    alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/restaurant/restaurant2.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/restaurant/restaurant3.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/restaurant/restaurant4.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/restaurant/restaurant5.jpg"  style={{width:'100%',height:'400px',maxWidth:'100%' }} alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/restaurant/restaurant6.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/restaurant/restaurant7.jpg" style={{width:'100%',height:'400px',maxWidth:'100%' }}  alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-lazy" src="media/cardsbuilds/restaurant/restaurant8.jpg"  style={{width:'100%',height:'400px',maxWidth:'100%' }} alt='any'/>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
       
      </Swiper>
            </div>
         </div>



       






















         







     </div>
    </>
  )
}
