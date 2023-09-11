

// import { handleEnter } from "../utility/utility";
import { Form, Checkbox } from "antd";

const baseComponent = (props) => {
  return (
    <Form.Item  {...props.formItemOption}
    valuePropName="checked" 
    wrapperCol={{span:24}}
    labelCol={{span: 24}}
    // noStyle={true}
    className={props.className || "default__CheckBox" }
    style={{direction: 'rtl', width: '100%', textAlign: 'center'}}
    >
    <Checkbox {...props.componentOption}>
      {props.children}
    </Checkbox>
        
    </Form.Item>
  );
};

export default baseComponent;