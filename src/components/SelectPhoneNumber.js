import {
  shatelBlackIcon,
  shatelIcon,
  irancelBlackIcon,
  irancelIcon,
  hamrahAvalBlackIcon,
  hamrahAvalIcon,
  raitelIcon,
  raitelBlackIcon,
} from "../assets/icons";
import { Form, Button, Radio } from "antd";
import { useState } from "react";
import { simCardName } from "../util/digitTypeDetect";
import AutoComplete from "./baseComponents/AutoComplete";
import RadioBtns from "./baseComponents/RadioBtns";
import { userAutoComplete } from "../assets/icons";
import CheckBox from "./baseComponents/Checkbox";
import { justToEnglish, justToFarsi } from "../util/translateDigit";

const SelectPhoneNumber = ({ onSelect, labels }) => {
  const [form] = Form.useForm();

  // ایکون سیمکارت
  const [activeIcon, setActiveIcon] = useState();
  // prettier-ignore
  const _irancellIcon = activeIcon === "irancell" ? irancelIcon : irancelBlackIcon;
  // prettier-ignore
  const _hamrahAval = activeIcon === "hamrahaval" ? hamrahAvalIcon : hamrahAvalBlackIcon;
  const _shatelIcon = activeIcon === "shatel" ? shatelIcon : shatelBlackIcon;
  const _raitelIcon = activeIcon === "raitel" ? raitelIcon : raitelBlackIcon;

  // =================== autocompelte =======================
  const renderItem = (number, icon) => {
    return {
      value: number,
      label: (
        <div className="SelectPhoneNumber__dropDownItem">
          <span className="">{number}</span>
          <span className="">{icon}</span>
        </div>
      ),
    };
  };
  const options = [
    {
      options: [
        renderItem(justToFarsi("0998124576"), shatelIcon),
        renderItem(justToFarsi("09109054497"), hamrahAvalIcon),
        renderItem(justToFarsi("09359054497"), irancelIcon),
        renderItem(justToFarsi("09226567085"), raitelIcon),
      ],
    },
  ];

  // ============== when one of inputs changes ==================
  const _valuesChange = (field) => {
    const inputName = Object.keys(field)[0];
    switch (inputName) {
      // autocomplete
      case "phoneNumber":
        setActiveIcon(simCardName(justToEnglish(field.phoneNumber)));
        break;
      // icons
      case "tarabari":
        setActiveIcon(field.tarabari);
        break;
      //  checkbox
      default:
        labels.map((label) => form.setFieldValue(`checkBox-${label}`, false));
        form.setFieldValue(inputName, true);
        break;
    }
  };

  return (
    // <>
    <div className="SelectPhoneNumber">
      <Form
        onValuesChange={_valuesChange}
        onFinish={onSelect}
        form={form}
        className={"SelectPhoneNumber__form"}
      >
        <AutoComplete
          formItemOption={{ name: "phoneNumber" }}
          autoComplete={{ options: options }}
          componentOption={{
            placeholder: "09383457685",
            prefix: userAutoComplete,
          }}
          // <<custom label out side of form.item!>>>
          label={"شماره تلفن همراه"}
        />
        <h2 className="SelectPhoneNumber__groupTitle">
          اگر ترابرد کرده اید اپراتور خود را انتخاب کنید
        </h2>
        <div className="SelectPhoneNumber__groupIcon">
          <RadioBtns name={"tarabari"}>
            <Radio value={"irancell"}>{_irancellIcon}</Radio>
            <Radio value={"raitel"}>{_raitelIcon}</Radio>
            <Radio value={"hamrahaval"}>{_hamrahAval} </Radio>
            <Radio value={"shatel"}>{_shatelIcon} </Radio>
          </RadioBtns>
        </div>
        {/* ============================ */}
        <div className="selectPhoneNumber__groupCheckbox">
          {labels.map((label) => (
            <div className="selectPhoneNumber__checkgroup">
              <CheckBox formItemOption={{ name: `checkBox-${label}` }} />
              <span className="">{label}</span>
            </div>
          ))}
        </div>
        <Button htmlType="submit" className={"SelectPhoneNumber__btn"}>
          ادامه
        </Button>
        <div></div>
      </Form>
    </div>

    // </>
  );
};

export default SelectPhoneNumber;
