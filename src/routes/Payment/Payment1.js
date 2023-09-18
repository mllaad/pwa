import { bindActionCreators } from "redux";
import Header from "../../components/Header";
import CheckPaymentType from "../../components/PaymentType";
import withRouter from "../../util/withModalRouter";
import { connect } from "react-redux";
// import { simCardName } from "../../util/digitTypeDetect";
import { justToEnglish, justToFarsi } from "../../util/translateDigit";
import { digitToTomanCurrency } from "../../util/translateCurrency";

import objsvg from "../../assets/objsvg";
import // hamrahAvalIcon,
// irancelIcon,
// raitelIcon,
// shatelIcon,
"../../assets/icons";

const PaymentType = (props) => {
  const backHandle = () => props.navigate(-1);

  const data = { ...props.router.location.state };

  console.log(objsvg, "objsvg");
  console.log(data, "data");
  // =============== go to payment or get result ====================
  const selectHandle = (e) => {
    if (e === "wallet") {
      props.navigate("Result");
    } else {
      props.navigate("Payment2");
    }
  };
  return (
    <>
      <Header onBack={backHandle} title />
      <div className="paymenttype">
        <div className="payenttype__header">
          <div className="payenttype__info">
            <span className="payenttype__uppertext">{data?.header_1}</span>
            <span className="payenttype__icon">{objsvg[data?.logo]} </span>
            <span className="payenttype__lowertext">{data?.header_2}</span>
          </div>
          <div className="payenttype__pricetitle">مبلغ قابل پرداخت : </div>
          <div className="payenttype__price">
            {justToFarsi(digitToTomanCurrency(justToEnglish(data?.price)))}{" "}
            تومان
          </div>
        </div>
        <CheckPaymentType onSelect={selectHandle} />
      </div>
    </>
  );
};

const actionCreators = Object.assign({}, {});
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
)(withRouter(PaymentType));

// const icon = {
//   shatel: shatelIcon,
//   irancell: irancelIcon,
//   raitel: raitelIcon,
//   hamrahaval: hamrahAvalIcon,
//   [undefined]: "",
// };
// const _icon = icon[simCardName(justToEnglish(data?.phoneNumber))];
