import { Input, Form } from "antd";

const baseComponent = (props) => {
  return (
    <Form.Item
      className="default__inputpassword-wrraper"
      {...props.formItemOption}
      colon={false}
      wrapperCol={{ span: 24 }}
      labelCol={{ span: 24 }}
      validateTrigger={["onBlur", "onFocus"]}
    >
      <Input.Password
        className={"default__inputpassword"}
        {...props.componentOption}
      />
    </Form.Item>
  );
};

export default baseComponent;
