import { logo } from '../../assets/icons'
import { Form, Button } from 'antd'
import { notice } from '../../assets/icons'
import Input from '../../components/baseComponents/Input'
const CodeMeliNumber = ({route, setRoute}) => {

    const submitHandle = (form) => {  
        setRoute("CodeMeliNumberVER")
    }


return  (
            <div className="bg-img">
            <div className="container"  > 
            <span className="logo"> {logo} </span>
                <Form onFinish={submitHandle} className='form' >  
                    <div className="form__content">
                            <Input
                            formItemOption={{
                            name:'codeMeliORcodebank',
                            label:"کد ملی یا شماره حساب",
                            rules:[{ pattern: /^\d+$/, message: 'بصورت عددی وارد کنید'}],
                            }}
                            componentOption={{  
                                placeholder:'کد ملی یا شماره حساب خود را وارد نمایید',
                                style: {textAlign: 'center'}
                            }}
                            />
                        <div className="center">    
                        <div> طبق دستورالعمل بانک مرکزی برای استفاده از خدمات مالی نیاز به اهراز هویت دارید. </div>
                        <span>{notice}</span>
                      </div>
                    </div>
                    <Button  className="form__btn"  htmlType="submit" > تایید </Button>     
                </Form>
            </div>
            </div>
        )
}


export default CodeMeliNumber;