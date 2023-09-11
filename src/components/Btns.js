
import { plusIcon } from "../assets/icons"
import { Button } from "antd"


export const AddPelakBtn = ({onClick}) => {
    return  <Button className="carbill-add__btn" onClick={onClick}> 
                <> 
                    <span className="carbill-add__btn_svg"> {plusIcon} </span> 
                    <span>افزودن پلاک جدید </span> 
                </> 
            </Button>
} 