import { alertNotice } from "../../assets/icons";
import InputNumber from "../../components/baseComponents/InputNumber";
import Alert from "../../components/Alert";
import { Button, Form, message } from "antd";
import { useState } from "react";
import Header from "../../components/Header";
import withRouter from "../../util/withModalRouter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CallCoreService } from "../../appRedux/features/CoreService";
import { useRef } from "react";
import card from "../../apiCall/requestObjects/card";
import wallet from "../../apiCall/requestObjects/wallet";
import { justToEnglish } from "../../util/translateDigit";
import { userCards } from "../../appRedux/features/Auth";
import { DateFormatter, cardNumber_Formatter } from "../../util/InputUtils";
import { createCard } from "../../appRedux/features/Card";
import { getRandomColor } from "../../util/randomColor";

const NewCard = (props) => {
  const numberRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const onCancel = () => props.closeModal();

  // ========== formHandle ============
  const formHandle = async ({ cardNumber, year, month }) => {
    if (!/\d{16}/.test(String(cardNumber)))
      return message.error("شماره کارت را وارد نمایید");
    if (!month) return message.error("تاریخ را وارد نمایید");
    if (!year) return message.error("تاریخ را وارد نمایید");

    const card = {
      cardNumber: String(cardNumber).replace(/ /g, ""),
      year: String(year),
      month: String(month),
      rgb: getRandomColor(),
    };

    props.actions.createCard(card);
    props.closeModal();
    // // کارت جدید
    // const obj = card.create(props.auth.userID, cardNumber, year, month);
    // const { payload } = await props.actions.CallCoreService(obj);
    // if (payload.id > 0) {
    //   // همه کارت ها
    //   const obj = card.get(props.auth.userID);
    //   const { payload } = await props.actions.CallCoreService(obj);
    //   if (payload.id > 0) {
    //     // ذخیره در ریداکس
    //     props.actions.userCards(payload.data);
    //     setShowAlert({ isShow: true, cardNumber });
    //   }
    // }
  };

  // =======================  استعلام ============================
  const [showAlert, setShowAlert] = useState({
    isShow: false,
    cardNumber: null,
  });
  const estelamHandle = async () => {
    const obj = wallet.estelam(props.auth.userID, showAlert.cardNumber);
    const { payload } = await props.actions.CallCoreService(obj);
    if (payload.id > 0) {
      message.success(payload.message);
    } else {
      message.error(payload.message);
    }
  };

  const laterHandle = () => {
    setShowAlert({ isShow: false, cardNumber: null });
    props.closeModal();
  };

  // ================================= inputs ==================================

  const cardNumberFormatter = (value) => {
    const removeSpace = String(value).replace(/\s/g, "");
    if (/.{16}/.test(removeSpace)) {
      monthRef.current.focus();
    }
    return cardNumber_Formatter(value);
  };
  const parserHandler = (value) =>
    justToEnglish(value.replace(/\$\s?|(  *)/g, ""));

  const format_year_method = new DateFormatter();
  const yearFormatter = (value) => format_year_method.format(value);
  const yearParser = (value) => {
    if (/\d{2}/.test(justToEnglish(value))) {
      yearRef.current.blur();
    }
    return justToEnglish(value);
  };

  const format_month_method = new DateFormatter();
  const monthFormatter = (value) => format_month_method.format(value);
  const monthParser = (value) => {
    if (/\d{2}/.test(justToEnglish(value))) {
      yearRef.current.focus();
    }
    return justToEnglish(value);
  };

  return (
    <>
      <Header onBack={onCancel} title={"افزودن کارت جدید"} />
      <Form className="NewCard__form" onFinish={formHandle}>
        <InputNumber
          formItemOption={{
            name: "cardNumber",
            label: "شماره کارت",
            style: { textAlign: "center" },
          }}
          componentOption={{
            autoComplete: "off",
            placeholder: "شماره کارت بانکی را وارد کنید",
            ref: numberRef,
            stringMode: true,
            min: "0000000000000000",
            max: "9999999999999999",
            formatter: (value) => cardNumberFormatter(value),
            parser: (value) => parserHandler(value),
          }}
        />
        <div className="NewCard__datetitle">تاریخ انقضا</div>
        <div className="NewCard__date">
          <InputNumber
            formItemOption={{
              name: "year",
            }}
            componentOption={{
              placeholder: "سال",
              ref: yearRef,
              stringMode: true,
              formatter: yearFormatter,
              parser: yearParser,
              onFocus: (e) => e.target.select(),
            }}
          />
          <InputNumber
            formItemOption={{
              name: "month",
            }}
            componentOption={{
              placeholder: "ماه",
              ref: monthRef,
              formatter: monthFormatter,
              parser: monthParser,
              onFocus: (e) => e.target.select(),
            }}
          />
        </div>
        <Button className="NewCard__btn" htmlType="submit">
          {"تایید"}
        </Button>
      </Form>
      <Alert isOn={showAlert.isShow}>
        <div className="alert__container">
          {alertNotice}
          <p>
            {" "}
            قانون جدید بانک مرکزی، برای استفاده از کارت بانکی، باید ابتدا
            اطلاعات کارت بانکی خود را در سامانه شاپرک ثبت کنید.
          </p>
          <div className="alert__btn">
            <Button className="white-btn" onClick={estelamHandle}>
              {" "}
              ثبت کارت{" "}
            </Button>
            <Button className="blue-btn" onClick={laterHandle}>
              {" "}
              بعدا{" "}
            </Button>
          </div>
        </div>
      </Alert>
    </>
  );
};

const actionCreators = Object.assign({}, { CallCoreService, createCard });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});
const mapStateToProps = (state) => ({
  coreData: state.coreServices.coreData,
  coreDataState: state.coreServices.coreDataState,
  auth: state.auth,
  router: state.router,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewCard));
