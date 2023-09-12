import { back } from "../../assets/icons";
import InputNumber from "../../components/baseComponents/InputNumber";
import { Button, Form, message } from "antd";
import Header from "../../components/Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import withRouter from "../../util/withModalRouter";
import { CallCoreService } from "../../appRedux/features/CoreService";
import card from "../../apiCall/requestObjects/card";
import { userCards } from "../../appRedux/features/Auth";
import { justToEnglish } from "../../util/translateDigit";
import { useRef } from "react";
import { DateFormatter } from "../../util/InputUtils";
import { updateCard } from "../../appRedux/features/Card";
import { getRandomColor } from "../../util/randomColor";

const EditCard = (props) => {
  const yearRef = useRef(null);
  const monthRef = useRef(null);

  const cardNumber = props.router.location?.state?.cardNumber;
  const year = props.router.location?.state?.year;
  const month = props.router.location?.state?.month;
  const id = props.router.location?.state?.id;
  const userID = props.auth.userID;

  const onCancel = () => props.closeModal();

  const formHandle = async ({ year, month }) => {
    const card = {
      cardNumber: cardNumber.replace(/ /g, ""),
      year: String(year),
      month: String(month),
      rgb: getRandomColor(),
    };
    props.actions.updateCard(card);
    props.closeModal();

    // const obj = card.update(
    //   id,
    //   userID,
    //   cardNumber?.replace(/ /g, ""),
    //   year,
    //   month
    // );
    // const response = await props.actions.CallCoreService(obj);
    // if (response.payload.id > 0) {
    //   const obj = card.get(props.auth.userID);
    //   const { payload } = await props.actions.CallCoreService(obj);
    //   if (payload.id > 0) {
    //     message.success(payload.message);
    //     props.actions.userCards(payload.data);
    //     props.closeModal();
    //   }
    // }
  };

  // ===========
  const format_year_method = new DateFormatter();
  const yearFormatter = (value) => format_year_method.format(value);
  const yearParser = (value) => {
    if (/\d{2}/.test(justToEnglish(value))) {
      yearRef.current.blur();
    }
    return justToEnglish(value);
  };

  // ===========
  const format_month_method = new DateFormatter();
  const monthFormatter = (value) => format_month_method.format(value);
  const monthParser = (value) => {
    if (/\d{2}/.test(justToEnglish(value))) {
      yearRef.current.focus();
    }
    return justToEnglish(value) > 12 ? "12" : justToEnglish(value);
  };

  const initialValueHandle = (value) =>
    /\d{2}$/.test(value) ? value.match(/\d{2}$/)[0] : "0" + value;

  return (
    <>
      <Header onBack={onCancel} title={"پرداخت"} />
      <div className="EditCard">
        <p className="EditCard__title">شماره کارت</p>
        <p className={"EditCard__number"}>{cardNumber}</p>

        <Form className="EditCard__form" onFinish={formHandle}>
          <div className="EditCard__group">
            <InputNumber
              formItemOption={{
                name: "year",
                initialValue: initialValueHandle(year),
                label: "سال",
              }}
              componentOption={{
                placeholder: "سال",
                ref: yearRef,
                formatter: (value) => yearFormatter(value),
                parser: (value) => yearParser(value),
                onFocus: (e) => e.target.select(),
              }}
            />

            {/* ========= */}
            <InputNumber
              formItemOption={{
                name: "month",
                label: "ماه",
                initialValue: initialValueHandle(month),
              }}
              componentOption={{
                placeholder: "ماه",
                ref: monthRef,
                formatter: (value) => monthFormatter(value),
                parser: (value) => monthParser(value),
                onFocus: (e) => e.target.select(),
              }}
            />
            {/* <span className="EditCard__label"> ماه</span> */}
          </div>

          <Button className="EditCard__btn" htmlType="submit">
            {"تایید"}
          </Button>
        </Form>
      </div>
    </>
  );
};

const actionCreators = Object.assign(
  {},
  { CallCoreService, userCards, updateCard }
);
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});
const mapStateToProps = (state) => ({
  router: state.router,
  auth: state.auth,
  coreData: state.coreServices.coreData,
  coreDataState: state.coreServices.coreDataState,
  coreServiceFlow: state.coreServices.coreServiceFlow,
});

// export default SwiperCards;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditCard));
