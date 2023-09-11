import { Input, Form } from "antd";

const baseComponent = (props) => {
  return (
    <Form.Item
      className="default__input-wrraper"
      {...props.formItemOption}
      colon={false}
      wrapperCol={{ span: 24 }}
      labelCol={{ span: 24 }}
      validateTrigger={["onBlur", "onFocus"]}
    >
      <Input className={"default__input"} {...props.componentOption} />
    </Form.Item>
  );
};

export default baseComponent;
