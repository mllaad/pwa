import { useState } from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import withRouter from "../../util/withModalRouter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { translateDigit } from "";
import { digitToTomanCurrency } from "../../util/translateCurrency";
const InternetOption = (props) => {
  const phoneNumber = props.router.location.state?.phoneNumber;
  const tarabari = props.router.location.state?.tarabari;
  const checkBoxs = props.router.location.state?.checkBoxs;

  const onCancel = () => props.navigate("../");

  // ================
  const [tab, setTab] = useState("روزانه");
  const checkTab = (localTab) =>
    localTab === tab ? { backgroundColor: "#FF8B00", color: "white" } : {};

  const tabs = [
    { name: "بلند مدت" },
    { name: "ماهانه" },
    { name: "هفتگی" },
    { name: "روزانه" },
  ];
  const arrayNum = Array(10).fill(0);
  return (
    <>
      <Header onBack={onCancel} title={"لیست بسته های اینترنتی"} />
      <div className="InternetOption">
        <Container width={"90%"}>
          <div className="InternetOption__tabs">
            {tabs.map(({ name }) => (
              <span
                className="InternetOption__tab"
                onClick={() => setTab(name)}
                style={checkTab(name)}
              >
                {name}
              </span>
            ))}
          </div>
          <div className="InternetOption__list">
            {arrayNum.map(() => {
              const val = "";
              // Math.floor(Math.random() * 10000000) + 1;
              return (
                <div
                  className="InternetOption__list-item"
                  onClick={() =>
                    props.navigateByState("../../Payment", {
                      phoneNumber,
                      tarabari,
                      checkBoxs,
                      price: val,
                    })
                  }
                >
                  <div className="InternetOption__list--price">
                    {digitToTomanCurrency(val)} تومان
                  </div>
                  <div className="InternetOption__list--title">تست</div>
                </div>
              );
            })}
          </div>
        </Container>
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
)(withRouter(InternetOption));
