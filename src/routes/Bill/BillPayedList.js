import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CallCoreService } from "../../appRedux/features/CoreService";
import Header from "../../components/Header";
import withRouter from "../../util/withModalRouter";

const BillPayedList = (props) => {
  const backHandle = () => props.closeModal();
  const data = props.router.location.state;

  return (
    <>
      <Header onBack={backHandle} title={" لیست قبوض پرداخت شده "} />
      <div className="">
        {data.length &&
          data.map((item) => {
            <div className=""></div>;
          })}
      </div>
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
)(withRouter(BillPayedList));
