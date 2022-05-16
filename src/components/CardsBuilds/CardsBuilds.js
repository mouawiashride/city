import React from 'react'
import './CardsBuilds.css'
export default function CardsBuilds() {
  return (
    <>
        <div className='container my-4'>
           <div className="cardSBuildsRow row justify-content-center  g-4">
            <div className="col-10 col-md-4 col-sm-6" >
              <div className="card ">
                <img src="media/cardsbuilds/1.png" className="card-img-top overflow-hidden " alt="..." />
                <div className="card-body">
                  <h5 className="card-title">نادي رياضي</h5>
                  <p className="card-text">نادي مزود بكافة األجهزة و برامج رياضية جاهزة تستطيع اختيارها وممارستها أو وضع البرنامج الذي يناسبك.</p>
                </div>
              </div>
            </div>
            <div className="col-10 col-md-4 col-sm-6">
              <div className="card ">
                <img src="media/cardsbuilds/2.png" className="card-img-top " alt="..." />
                <div className="card-body">
                  <h5 className="card-title">مبنى المواهب</h5>
                  <p className="card-text">في هذا المبنى تستطيع أن تمارس مواهبك وتنميتها وعرضها على باقي المستخدمين وأخذ الآراء فيها.</p>
                </div>
              </div>
            </div>
            <div className="col-10 col-md-4 col-sm-6">
              <div className="card">
                <img src="media/cardsbuilds/3.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">مبنى الموضى</h5>
                  <p className="card-text">فيها مختلف الأزياء والموضة تستطيع اختيار نمط المالبس التي تناسبك وتجريبها قبل شرائها.</p>
                </div>
              </div>
            </div>
            <div className="col-10 col-md-4 col-sm-6">
                <div className="card">
                  <img src="media/cardsbuilds/4.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">مبنى المكاتب</h5>
                      <p className="card-text">فيها مختلف الأزياء والموضة تستطيع اختيار نمط المالبس التي تناسبك وتجريبها قبل شرائها.</p>
                    </div>
                </div>
            </div>
            <div className="col-10 col-md-4 col-sm-6">
                <div className="card">
                  <img src="media/cardsbuilds/5.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">المطاعم</h5>
                      <p className="card-text">تستطيع اختيار وجباتك أو إعطاء وصفات من اختيارك لتجريبها من قبل مستخدمين آخرين.</p>
                    </div>
                </div>
            </div>
            <div className="col-10 col-md-4 col-sm-6">
                <div className="card">
                  <img src="media/cardsbuilds/6.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">مبنى تصفيف الشعر</h5>
                      <p className="card-text">فيها مختلف الأزياء والموضة تستطيع اختيار نمط المالبس التي تناسبك وتجريبها قبل شرائها.</p>
                    </div>
                </div>
            </div>

          </div>

              
        </div>
    </>
  )
}
