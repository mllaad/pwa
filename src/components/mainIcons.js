import { useEffect, useState, useRef, useCallback } from 'react'

const MainIcon = (props) => {

    const getNextStep = () => {
        if (props.prevStep === '0')
            alert('helllllllo');
    }

    return (
        <div className={ props.className} onClick={() => getNextStep(false)} >{props.iconName}</div>
    )

}
export default MainIcon
