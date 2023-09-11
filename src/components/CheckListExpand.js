import { useState } from "react"
import { arrowCard } from "../assets/icons"
import Checkbox from '../components/baseComponents/Checkbox'


const CheckListExpand = ({inputName, children}) => {

    const [expand, setExpand] = useState(false)
    const clickHandle = () => setExpand(t => !t)
    const style = expand ? { rotate: '0deg' } :  { rotate: '-180deg' }
    return (
        <div className="CheckListExpand">
            <div className="CheckListExpand__header">
                <span className="CheckListExpand__checkBox" >
                {/* <Checkbox formItemOption={{name: inputName , className: 'checkBox_wrapper'}} componentOption={{className: 'checkBox_wrapper'}} /> */}
                </span>
                <span className="CheckListExpand__btn" onClick={clickHandle}> <span className="CheckListExpand__arrow" style={style}>{arrowCard}</span> <span className="CheckListExpand__detail">جزئیات</span> </span>
                <span className="CheckListExpand__header__item"style={{textAlign:'right'}}> 1400/12/20 </span>
                <span className="CheckListExpand__header__item" > 02:14 </span>
                <span className="CheckListExpand__header__item" style={{textAlign:'right'}}> {'2000 تومان'} </span>
            </div>
            <div className="CheckListExpand__content" style={expand ? {display: 'block'} : {display: 'none'}}>
                {children}
            </div>
        </div>
    )
}


export default CheckListExpand;