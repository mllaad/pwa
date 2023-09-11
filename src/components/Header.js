import { back } from "../assets/icons"


const Header = ({onBack, title}) => {

    return (
    <div className='Header'> 
    <div className='Header__back' onClick={onBack}>{back}</div>
    <div className='Header__title'> {title} </div></div>
    )     
    
}

export default Header