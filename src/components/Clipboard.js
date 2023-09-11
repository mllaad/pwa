import { clipboardIcon } from "../assets/icons";
import { message } from "antd";


const Clipboard = ({text}) => {

    const clipboardHandle = (v) => () => {
        navigator.clipboard
        .writeText(v)
        .then(() => message.success("copied"))
        .catch(() =>   message.error("something went wrong"));
    }

    return  <div className="Clipboard" onClick={clipboardHandle}>
                <div className="Clipboard__text">{text}</div>
                <div className="Clipboard__icon">{clipboardIcon}</div>
            </div>
}
export default Clipboard