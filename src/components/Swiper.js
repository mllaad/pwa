
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide,  } from 'swiper/react'
import {  addInventoryIcon, addInventoryTabIcon0, addInventoryTabIcon1, back , } from '../assets/icons'
import cardPng from '../assets/card.png'
import {Button} from 'antd'
import { useState } from 'react'
const _Swiper = () => {

    const clickHandle = () => {
        return null
    }

    return (
        <Swiper 
        slidesPerView={1.6}
        spaceBetween={30}
        centeredSlides={true}
        onSlideChange={(e) => console.log(e.activeIndex, 'onSlideChange')}
        className="mySwiper"
        >
        <SwiperSlide  style={{height:'20vh'}} className='swiper-slide' onClick={clickHandle({state: 'Payment_2'})}>
            <div className='ssdd' ><div><img className="addinventory__slide" src={cardPng}/></div></div>
        </SwiperSlide>
        <SwiperSlide style={{height:'20vh'}}  className='swiper-slide' onClick={clickHandle({state: 'Payment_2'})}>
            <div className='ssdd' ><div><img className="addinventory__slide" src={cardPng}/></div></div>
        </SwiperSlide>
        </Swiper>
    )

}

export default _Swiper