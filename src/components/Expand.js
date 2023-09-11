import { forwardRef } from "react"
import { useState } from "react"
import { arrowCard } from "../assets/icons"
import Checkbox from '../components/baseComponents/Checkbox'

const Expand = ({header, className, containerClassName ,arrow, children}) => {

    // ARROW
    // text come from **header[0]**
    // is just *svg* and get text right side of it => if is true. if is not true then just it is text 

    // HEADER
    // *********************
    // header is array and spread in to => display: grid => grid-template-columns: 1fr 1fr 

    const [expand, setExpand] = useState(false)
    const clickHandle = () => setExpand(t => !t)
    const style = expand ? { rotate: '0deg' } :  { rotate: '-180deg' }
    return (
        <div className={ containerClassName || "expand__container"}>
        {/* ************* header of compoent ***************** */}
        <div className={className || "expand"} onClick={arrow ? null : clickHandle}>
            <>
            {
            arrow 
            ? 
            <span className= "expand_blue" onClick={arrow ? clickHandle : null}>  
            <span className="expand__svg" style={style}>{arrowCard}</span>  {header[0]} 
            </span>
            : 
            header[0] 
            }
            
                {header.map((head, index) => {
                    if(index == 0) return
                    if(!expand && index > 3) return
                    return head
                })}
            </>
        </div>
        {/* -------------------------------------------------------- */}
        {expand &&
        // expanded content
        <div style={{marginTop: '10px'}}>
        {children}
        </div>
        }
        </div>
    )
}


export const Expandable = ({topic, children, className}) => {

    const [expand, setExpand] = useState(false)

    const topicIsActive = expand ? 'Expandable__topic--on ' : '' 
    return <div className={className || "Expandable"}>
        <div className={"Expandable__topic " + topicIsActive} onClick={() => setExpand(t => !t)}>{topic}</div>
        {
        expand && 
        <div className="Expandable__content">{children}</div>
        }
    </div>
}

export default Expand