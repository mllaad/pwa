import { Input, AutoComplete, Form } from "antd";

const _AutoComplete = (props) => {
  return (
    <div className={props.container || "autocomplete__container"}>
      <div className="autocomplete__label">{props.label}</div>
      <Form.Item {...props.formItemOption} required={true}>
        <AutoComplete
          dropdownStyle={{
            border: "1px solid #0554F2",
            borderRadius: "10px",
            textAlign: "center",
          }}
          className="autocomplete"
          {...props.autoComplete}
        >
          <Input size="large" {...props.componentOption} />
        </AutoComplete>
      </Form.Item>
    </div>
  );
};

export default _AutoComplete;
