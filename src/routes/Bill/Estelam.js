import { Form, Button } from "antd";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CallCoreService } from "../../appRedux/features/CoreService";
import {
  water,
  electricity,
  gas,
  tehranShahrdari,
  telecommunication,
} from "../../assets/bill";
import { hamrahAvalIcon, irancelIcon, raitelIcon } from "../../assets/icons";
import Header from "../../components/Header";
import { justToFarsi } from "../../util/translateDigit";
import { tomanCurrency } from "../../util/numberToToman";
import withRouter from "../../util/withModalRouter";

const Estelam = (props) => {
  const backHandle = () => props.backModal();

  console.log(props.router.location.state.data, "props__ Estelam");

  const { data, billType, billName } = props.router.location.state;

  let type;
  switch (billType) {
    case 5:
      type = "simcard";
      break;
    case 3:
      type = "simcard";
      break;

    default:
      type = "";
      break;
  }

  console.log(justToFarsi(billName), "justToFarsi(billName)");

  const convertDate = (date) => {
    if (!date) return;
    const _date = date.split(" ");
    let options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(_date).toLocaleDateString("fa-IR", options);
  };

  return (
    <>
      <Header onBack={backHandle} title={"استعلام قبض"} />
      {/*
        استعلام سیمکارت متفارت از باقیه استعلام ها می باشد 
        type == 1 استعلام غیر از سیمکارت
      */}
      {type === "simcard" ? (
        <Form className="Estelam__simcard">
          <div className="Estelam__title1">دوره پایانی</div>
          <div className="Estelam__term">
            <span className="Estelam__left">
              {justToFarsi(data.finalTerm.billID)}
            </span>
            <span className="Estelam__right"> شناسه قبض </span>
            <span className="Estelam__left">
              {justToFarsi(data.finalTerm.paymentID)}
            </span>
            <span className="Estelam__right"> شماره پرداخت </span>{" "}
            <span className="Estelam__left Estelam__orange">
              {justToFarsi(data.finalTerm.amount)}
            </span>
            <span className="Estelam__right"> مبلغ پرداخت </span>{" "}
          </div>
          <Button className="Estelam__btn"> پرداخت </Button>
          <div className="Estelam__title1">دوره میانی</div>
          <div className="Estelam__term">
            <span className="Estelam__left">
              {justToFarsi(data.midTerm.billID)}
            </span>
            <span className="Estelam__right"> شناسه قبض </span>
            <span className="Estelam__left">
              {justToFarsi(data.midTerm.paymentID)}
            </span>
            <span className="Estelam__right"> شماره پرداخت </span>{" "}
            <span className="Estelam__left Estelam__orange ">
              {tomanCurrency(data.midTerm.amount)}
            </span>
            <span className="Estelam__right"> مبلغ پرداخت </span>{" "}
          </div>
          <Button className="Estelam__btn"> پرداخت </Button>
        </Form>
      ) : (
        <Form className="Estelam">
          <div className="Estelam__title">
            {" "}
            <span> قبض های پرداخت شده </span>{" "}
          </div>
          {/* showCase */}
          <div className="Estelam__showcase">
            <span className="Estelam__left Estelam__left--lineheight ">
              {justToFarsi(data.billID)}
            </span>
            <span className="Estelam__2">
              <span className="Estelam__2text">{billName}</span>
              <span className="Estelam__2svg">{svgObj[billType]}</span>
            </span>
            <span className="Estelam__left Estelam__orange">
              {tomanCurrency(data.amount)}
            </span>
            <span className="Estelam__right ">مبلغ بدهی</span>
          </div>
          {/* moreInfo */}
          <title className="Estelam__titlemore"> جزعیات قبض </title>
          <div className="Estelam__moreinfo">
            <span className="Estelam__left"> {data.fullName} </span>
            <span className="Estelam__right"> نام مشترک </span>
            <span className="Estelam__left">
              {convertDate(data.currentDate)}
            </span>
            <span className="Estelam__right"> تاریخ قراعت </span>
            <span className="Estelam__left">
              {convertDate(data.paymentDate)}
            </span>
            <span className="Estelam__right"> آخرین مهلت پرداخت </span>
          </div>
          <div className="Estelam__pic">
            {" "}
            <span> تصویر آخرین قبض </span>{" "}
          </div>
          <Button className="Estelam__btn"> پرداخت </Button>
        </Form>
      )}
    </>
  );
};

const actionCreators = Object.assign({}, { CallCoreService });
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
)(withRouter(Estelam));

var svgObj = {
  1: water,
  2: electricity,
  3: telecommunication,
  4: gas,
  5: hamrahAvalIcon,
  6: raitelIcon,
  7: irancelIcon,
  8: tehranShahrdari,
  // 9: "لیست قبوض پرداخت شده",
  // 10: "سایر قبوض",
};

// برق آب گاز
// {
//   "id": 16,
//   "message": "درخواست با موفقیت انجام شد",
//   "token": {
//       "fullName": "علی اصغر فرنوش",
//       "address": "اشرفی پیامبر فهیمی مهتاب  4 پ  40 ",
//       "billID": "0037418306239",
//       "paymentID": null,
//       "previousDate": "05/15/2023 00:00:00",
//       "currentDate": "06/28/2023 00:00:00",
//       "paymentDate": "07/08/2023 00:00:00",
//       "billPdfUrl": null,
//       "extraInfo": "{\"تعداد واحد\":\"17\",\"نوع مصرف\":\" خانگی بدون چیلر\",\"گروه\":\"G\",\"شماره اشتراک\":\"3037418316\",\"سریال کنتور\":\"0025009531\",\"کد آدرس\":\"453805290000\",\"شماره پرونده\":\"849254\",\"ظرفیت\":\"40\",\"رقم شمارشگر پیشین\":\"175,680\",\"رقم شمارشگر فعلی\":\"178,010\",\"کارکرد شمارشگر\":\"2,330\",\"مصرف استاندارد\":\"2,330\",\"بهای گاز مصرفی\":\"3,481,713 ریال\",\"عوارض\":\"522,257 ریال\",\"بیمه\":\"49,184 ریال\",\"بدهی متفرقه\":\"0 ریال\",\"مانده بدهی\":\"0 ریال\",\"مانده صورتحساب قبلی\":\"0 ریال\",\"تعداد بدهی\":\"0\",\"شماره سری\":\"184\",\"مانده مبلغ هزار ریال\":\"627 ریال\",\"کسر مبلغ هزار ریال\":\"952 ریال\",\"عوارض گازرسانی به روستا\":\"348,171 ریال\"}",
//       "amount": 4401000
//   },
//   "traceMessage": null
// }

// سیمکارت ها
// {
//   "id": 16,
//   "message": "درخواست با موفقیت انجام شد",
//   "token": {
//       "finalTerm": {
//           "billID": "6842103630153",
//           "paymentID": "1822498",
//           "amount": 18000,
//           "extraInfo": null
//       },
//       "midTerm": {
//           "billID": "6842103630153",
//           "paymentID": "2026571",
//           "amount": 20000,
//           "extraInfo": null
//       }
//   },
//   "traceMessage": null
// }
