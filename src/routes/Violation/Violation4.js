import {
  back,
  greenOkIcon,
  clipboardIcon,
  redCancelIcon,
} from "../../assets/icons";
import Clipboard from "../../components/Clipboard";
import Expand from "../../components/Expand";
import Header from "../../components/Header";
import { route } from "./index";
import { Expandable } from "../../components/Expand";
import { arrowCard } from "../../assets/icons";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import withRouter from "../../util/withModalRouter";
const ViolationList = (props) => {
  const onCancel = () => props.navigate(-1);

  let conten = (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>mialdmil</span>
        <span>miladmilad</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>mialdmil</span>
        <span>miladmilad</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>mialdmil</span>
        <span>miladmilad</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>mialdmil</span>
        <span>miladmilad</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>mialdmil</span>
        <span>miladmilad</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>mialdmil</span>
        <span>miladmilad</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>mialdmil</span>
        <span>miladmilad</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>mialdmil</span>
        <span>miladmilad</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>mialdmil</span>
        <span>miladmilad</span>
      </div>
    </>
  );

  let topic = (
    <>
      <div className="expand_blue">
        {" "}
        <span className="s21111">{arrowCard}</span> <span>جزئیات</span>{" "}
      </div>
      <div className="expand_black"> استعلام مجموع خلافی </div>
      <div className="expand_orange"> 117,50 تومان </div>
      <div className="expand_black"> 14:02 12/1/23 </div>
    </>
  );

  return (
    <>
      <Header onBack={onCancel} title={"لیست استعلام ها"} />
      <div className="allBillsList__scroll">
        <Expandable topic={topic}>
          <div className="expand_red"> پرداخت نشده {redCancelIcon}</div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Clipboard text={"3243924732047"} />
            <div className="expand_black_ss"> شماره ارجاع </div>
          </div>
          {/* ----------------------------------------------------- */}
          {[1, 2].map(() => {
            return (
              <Expandable
                className={"clasName__Test"}
                topic={
                  <>
                    <div className="clasName__Test_1">
                      {" "}
                      <span> {arrowCard} </span> <span> 24122 تومان </span>{" "}
                    </div>
                    <div className="clasName__Test_2">1401/12/20</div>
                  </>
                }
              >
                {conten}
              </Expandable>
            );
          })}
        </Expandable>
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
)(withRouter(ViolationList));
