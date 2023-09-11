
import { logo, hamburger, elipse, vector, internetLogo, swipeCard, bi_iphone, check, loan_icon, 
arcticons_receiptmanager,raphael_car,raphael_car_2,
costemer_club,festival,shopping,group_1,subtract, group_3, group_2,deleteCard,editCard,arrowCard,alertNotice, back, notifArrow, notifIcon, addInventoryIcon, 
addInventoryTabIcon0, addInventoryTabIcon1
} from '../assets/icons'
import { useState, useEffect, useRef } from 'react'

const Notification = ({children}) => {

    return <div className='notificaiton'>
        <div className='notification__header'> {notifIcon} </div>
        <div className='header__line'/>
        <div className='notification__content'> {children} </div>
    </div>
}




export const Notif = ({children}) => {
    
    const [showMore, setShowMore] = useState(false)
  
    const ref = useRef(null)
    const _animation = ( anim, opt) => 
        ref.current.animate(anim, { iterations: 1, fill: 'forwards' , ...opt})
    useEffect(() => {
            // animate
    const anim = {
        // showmore
        more: {
            text: [{opacity: 0}, {opacity: 1}]
        },
        // showless
        less: {
            text: [{opacity: 0}, {opacity: 1}]
        }
    }
        if(showMore) {
            // in
            _animation(anim.more.text, {duration: 1010})
          } else {
            _animation(anim.less.text, {duration: 1010})
          }
    })
      
return <div className='notif__container'  ref={ref} >
    <div className='notif__content'>{showMore ? children : `${children.substring(0, 50)}`}</div> 
    <div className='notif__btn' onClick={() => setShowMore(toggle => !toggle)}>
    <span className={showMore ? 'showmore--up' : 'showmore-- down'}>{notifArrow}</span> <span className='btn__showmore' > {showMore ?  "کمتر" : "بیشتر"} </span> 
    </div>
</div>
}


export default Notification