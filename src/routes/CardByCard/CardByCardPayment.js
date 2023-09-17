import { transferIcon } from "../../assets/icons";
import PaymentRequest from "../../components/PaymentRequest";
import Header from "../../components/Header";
import { connect } from "react-redux";
import withRouter from "../../util/withModalRouter";
import { bindActionCreators } from "redux";
import Refah from "../../assets/banks/Refah";
import { bankLogo } from "../../util/digitTypeDetect";
import { digitToTomanCurrency } from "../../util/translateCurrency";
import { justToFarsi } from "../../util/translateDigit";

const CardByCardPayment = (props) => {
  const cardNumber = props.router.location.state?.cardNumber;
  const amount = props.router.location.state?.amount;
  const onCancel = () =>
    props.navigateByState("../", { price: amount, cardNumber });

  const requesthandle = (f) => {
    console.log(f);
    const title = "رسید کارت به کارت";
    const data = [];
    props.navigate("../../Payment/Result");
  };

  return (
    <>
      <Header onBack={onCancel} title={"کارت به کارت"} />
      <div className="CardByCardPayment__container">
        <Card
          cardNumber={justToFarsi("8794 6312 3456 7890")}
          title={"بانک رفاه"}
          logo={Refah}
        />
        <div className="CardByCardPayment__transfer">
          <div className="CardByCardPayment__number">
            {" "}
            <span>{digitToTomanCurrency(amount)}</span> ریال{" "}
          </div>
          <div className="CardByCardPayment__mid"> مبلغ {transferIcon}</div>
        </div>
        <Card
          cardNumber={justToFarsi(cardNumber.replace(/(\d{4})/g, "$1 "))}
          title={"بانک تجارت"}
          logo={bankLogo(cardNumber)}
        />
      </div>
      <PaymentRequest onPaymentRequest={requesthandle} />
    </>
  );
};

const Card = ({ cardNumber, title, logo }) => {
  return (
    <div className="CardByCardPayment__card">
      <div className="CardByCardPayment__number">{cardNumber}</div>
      <div className="CardByCardPayment__icon">
        <span className="CardByCardPayment__text">{title}</span>
        <span className="CardByCardPayment__svg">{logo}</span>
      </div>
    </div>
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
)(withRouter(CardByCardPayment));
