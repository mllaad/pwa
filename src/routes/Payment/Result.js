import React from "react";
import withRouter from "../../util/withModalRouter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../../components/Header";
import { Button } from "antd";

const Result = (props) => {
  console.log(props);
  const onCancel = () => props.closeModal();
  return (
    <>
      <Header onBack={onCancel} title={"موفق"} />
      <div className="Result__title">موفق</div>
      <div className="Result__title2">عنوان</div>
      <div className="Result__content">
        <div className="Result__row">
          <span>دیتا از سرور</span>
          <span>دیتا از سرور</span>
        </div>
        <div className="Result__row">
          <span>دیتا از سرور</span>
          <span>دیتا از سرور</span>
        </div>
        <div className="Result__row">
          <span>دیتا از سرور</span>
          <span>دیتا از سرور</span>
        </div>
        <div className="Result__row">
          <span>دیتا از سرور</span>
          <span>دیتا از سرور</span>
        </div>
        <div className="Result__row">
          <span>دیتا از سرور</span>
          <span>دیتا از سرور</span>
        </div>
      </div>
      <Button className="Result__btn" onClick={() => props.closeModal()}>
        بازگشت به صفحه اصلی
      </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Result));
