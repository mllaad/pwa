import { bindActionCreators } from "redux";
import Header from "../../components/Header";
import PaymentRequest from "../../components/PaymentRequest";
import { connect } from "react-redux";
import withRouter from "../../util/withModalRouter";
import card from "../../assets/card.svg";
const Payment2 = (props) => {
  const backHandle = () => props.navigate(-1);

  const requestHandle = (e) => props.navigate("../Result");
  return (
    <>
      <Header onBack={backHandle} title="پرداخت" />

      <div className="Payment2__showCase">
        <img src={card} className="Payment2__img" />
      </div>
      <PaymentRequest onPaymentRequest={requestHandle} />
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
)(withRouter(Payment2));
