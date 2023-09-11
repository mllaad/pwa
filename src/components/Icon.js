


const Icon = ({onClick, icon, text, className}) => {
    return <div className={"Icon " + className} onClick={onClick}>
        <div className="Icon__svg">
                {icon}
        </div>
        <div className="Icon__text">
                {text}
        </div>
    </div>
}

export default Icon