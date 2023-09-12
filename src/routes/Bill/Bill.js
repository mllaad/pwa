import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../../components/Header";
import Icon from "../../components/Icon";
import {
  water,
  electricity,
  gas,
  listType1,
  listType2,
  tehranShahrdari,
  telecommunication,
} from "../../assets/bill";
import { irancelIcon, hamrahAvalIcon, raitelIcon } from "../../assets/icons";
import { CallCoreService } from "../../appRedux/features/CoreService";
import bill from "../../apiCall/requestObjects/bill";
import { message } from "antd";
import withRouter from "../../util/withModalRouter";

const Bill = (props) => {
  const backHandle = () => props.backModal();

  // لیست قبض های کاربر
  // before go to next page we fetch data
  // like **ssr web page**
  const requestData =
    (billingtypeid, route = "BillList") =>
    async () => {
      // const userid = props.auth.userID;

      // let { server, objectId, actionType, jsonValues, type } =
      //   billingtypeid === 9
      //     ? bill.allPayed(userid)
      //     : bill.get(userid, billingtypeid);

      // const { payload } = await props.actions.CallCoreService({
      //   server,
      //   objectId,
      //   actionType,
      //   jsonValues,
      //   type,
      // });
      // if (payload.id > 0) {
      props.navigateByState(route, {
        // data: payload.data,
        billType: billingtypeid,
      });
      // } else {
      //   message.error(payload.message);
      // }
    };

  return (
    <>
      <Header onBack={backHandle} title={"پرداخت قبوض"} />
      <div className="Bill">
        <Icon
          className={"Bill__icon"}
          icon={gas}
          onClick={requestData(4)}
          text={"گاز"}
        />
        <Icon
          className={"Bill__icon"}
          icon={electricity}
          onClick={requestData(2)}
          text={"برق"}
        />
        <Icon
          className={"Bill__icon"}
          icon={water}
          onClick={requestData(1)}
          text={"آب"}
        />
        <Icon
          className={"Bill__icon"}
          icon={irancelIcon}
          onClick={requestData(7)}
          text={"ایرانسل"}
        />
        <Icon
          className={"Bill__icon"}
          icon={hamrahAvalIcon}
          onClick={requestData(5)}
          text={"همراه اول"}
        />
        <Icon
          className={"Bill__icon"}
          icon={raitelIcon}
          onClick={requestData(6)}
          text={"رایتل"}
        />
        <Icon
          className={"Bill__icon"}
          icon={telecommunication}
          onClick={requestData(3)}
          text={"تلفن ثابت"}
        />
        <Icon
          className={"Bill__icon"}
          icon={tehranShahrdari}
          onClick={requestData(8)}
          text={"عوارض شهرداری"}
        />
        <Icon
          className={"Bill__icon"}
          icon={listType1}
          onClick={requestData(10)}
          text={"سایر قبوض"}
        />
        <Icon
          className={"Bill__icon"}
          icon={listType2}
          onClick={requestData(9, "BillPayedList")}
          text={"لیست قبوض پرداخت شده"}
        />
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
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Bill));
