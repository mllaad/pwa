
import {  addInventoryIcon, addInventoryTabIcon0, addInventoryTabIcon1, back , } from '../assets/icons'
import card from '../assets/card.svg'
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide,  } from 'swiper/react'
import {Button} from 'antd'
import { useState } from 'react'

const PaymentType = ({ onSelect }) => {

    const [tab, setTab] = useState(0)
    const tabHandle = (v) => () => setTab(v)
    const checkTab = (tabed, tab) => tabed == tab ? 'PaymentType__tab--active': null

    // ---------------- NEXT STATE -------------------
    const clickHandle = (type) => () => onSelect(type)

    return <div className='PaymentType'> 
              {/* tabs */}
              <div className='PaymentType__tabs '>
                          <div className={'PaymentType__tab '  + checkTab(tab, 0)} onClick={tabHandle(0)}>
                            {addInventoryTabIcon0}
                            <span>کیف پول</span>
                            </div>  
                          <div className={'PaymentType__tab ' + checkTab(tab, 1)} onClick={tabHandle(1)}>
                            {addInventoryTabIcon1}
                            <span>کارت بانکی</span>
                            </div>  
                    </div>
                    <div className='PaymentType__content'>
                            {tab === 0 ? (
                                // کیف پول
                                <div className='PaymentType__wallet'>
                                    <Button  onClick={clickHandle('wallet')} className='PaymentType__btn'> پرداخت </Button>
                                    <div className='PaymentType__mywallet ' >
                                    <div className='PaymentType__mywallet_info'> 
                                        <span > موجودی کیف پول</span>
                                        <h2> 0 تومان</h2>
                                    </div>
                                    <div className='PaymentType__walletIcon'>
                                        {addInventoryIcon}
                                    </div>
                                    </div>
                                </div>
                            ) : (
                                // کارت بانکی
                                <div className='PaymentType__swiper' >
                                <Swiper 
                                slidesPerView={1.6}
                                spaceBetween={1}
                                centeredSlides={true}
                                onSlideChange={(e) => console.log(e.activeIndex, 'onSlideChange')}
                                className="mySwiper peyment__mySwiper"
                                >
                                <SwiperSlide className='swiper-slide' onClick={clickHandle('0241')}>
                                    <div className='PaymentType__slide' ><div><img className="PaymentType__slide" src={card}/></div></div>
                                </SwiperSlide>
                                <SwiperSlide className='swiper-slide' onClick={clickHandle('25122')}>
                                    <div className='PaymentType__slide' ><div><img className="PaymentType__slide" src={card}/></div></div>
                                </SwiperSlide>
                                </Swiper>
                                </div>
                            )}
                    </div>
         </div>
}

export default PaymentType