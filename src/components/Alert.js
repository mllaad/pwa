

import { useEffect, useState, memo } from 'react'
import ReactDom from 'react-dom'

const Alert = ({isOn ,children}) => {

    let component

    useEffect(() => {
        const slides = document.querySelector('.mySwiper')
        if(slides) {
            isOn ? slides.classList.add('blur-10px') : slides.classList.remove('blur-10px')
        }
    },[isOn])

    // setState for mount and delay for unmount
    const shouldRender = useDelayUnmount(isOn, 300);
    const mountedStyle = { animation: "inAnimation 300ms ease-in",  backdropFilter: 'blur(10px)'};
    const unmountedStyle = { animation: "outAnimation 310ms ease-in", backdropFilter: 'blur(0px)' };

    component = (
        <div className='alert' > 
          <div className='alert__container' style={isOn ? mountedStyle : unmountedStyle}> {children} </div>        
        </div>
    )

    return shouldRender ? ReactDom.createPortal(component, document.body) : null
}


// animation after mount and before unmount
function useDelayUnmount(isOn, delayTime) {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
      let timeoutId;
      if (isOn && !shouldRender) {
        setShouldRender(true);
      } else if (!isOn && shouldRender) {
        timeoutId = setTimeout(() => setShouldRender(false), delayTime);
      }

      return () => clearTimeout(timeoutId);
    }, [isOn, delayTime, shouldRender]);
    return shouldRender;
  }
export default memo(Alert)