import { InputNumber } from "antd";
import { Form } from "antd";
const baseComponent = (props) => {
  return (
    <Form.Item
      className="default__InputNumber--wrraper"
      {...props.formItemOption}
      wrapperCol={{ span: 24 }}
      labelCol={{ span: 24 }}
    >
      <InputNumber
        // کاری که انجام میده 3 رقم 3 رقم جدا میکنه
        // formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        // parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
        className={"default__InputNumber"}
        min={0}
        {...props.componentOption}
      />
    </Form.Item>
  );
};

export default baseComponent;
