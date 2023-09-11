import { Form, Radio } from "antd"



const RadioBtns = ({name, onChange, children}) => {
    return (
      <Form.Item name={name} labelCol={{span: 24}} wrapperCol={{span: 24}}>
      <Radio.Group rootClassName="default__Radio" onChange={onChange} >
        {children}
      </Radio.Group>
      </Form.Item>
    )
  }


  export default RadioBtns;