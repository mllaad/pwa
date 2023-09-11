import { Button, Form, message } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import bill from "../../apiCall/requestObjects/bill";
import { CallCoreService } from "../../appRedux/features/CoreService";
import Header from "../../components/Header";
import {
  editIcon,
  deleteIcon,
  hamrahAvalIcon,
  raitelIcon,
  irancelIcon,
} from "../../assets/icons";
import {
  water,
  electricity,
  gas,
  tehranShahrdari,
  telecommunication,
} from "../../assets/bill/index";
import { withRouter } from "../../util/withModalRouter";
import { justToFarsi } from "../../util/translateDigit";

const BillList = (props) => {
  const backHandle = () => props.backModal();

  const { data, billType } = props.router.location.state;

  // ================================== قبض جدید =============================================
  const addBillHandle = () =>
    props.navigateByState("../CreateOrUpdateBill", {
      billType: billType,
      id: null,
      SenderUserId: null,
      isCreate: true,
    });

  // =========================================== ویرایش قبض ========================================
  const editHandle = (id, senderUserId, billID, billName) => () =>
    props.navigateByState("../CreateOrUpdateBill", {
      // نوع قبض
      billType: billType,
      // ای دی در دیتا بیس
      id: id,
      isCreate: false,
      // کاربر
      senderUserId: senderUserId,
      // شناسه قبض
      billID,
      // اسم قبض که کاربر نوشته
      billName,
    });

  // ========================================== استعلام قبض================================
  const estelamHandle = (billData) => async () => {
    let requestObj;
    switch (billType) {
      // 1: "قبض آب",
      case 1:
        requestObj = bill.estelam.ab(billData.billID);
        break;
      // 2: "قبض برق"
      case 2:
        requestObj = bill.estelam.barq(billData.billID);
        break;
      // 3: "قبض تلفن ثابت"
      case 3:
        requestObj = bill.estelam.telphon(billData.billID);
        break;
      // 4: "قبض گاز"
      case 4:
        requestObj = bill.estelam.gas(billData.billID);
        break;
      // 5: "قبض همراه اول"
      case 5:
        requestObj = bill.estelam.hamrahAval(billData.billID);
        break;
      // 6: "قبض رایتل"
      case 6:
        requestObj = bill.estelam.raitel(billData.billID);
        break;
      // 7: "قبض ایرانسل",
      case 7:
        requestObj = bill.estelam.irancel(billData.billID);
        break;
      // 8: "قبض شهرداری",
      case 8:
        requestObj = "onDevelop";
        break;
      // 9: "لیست قبض های پرداخت شده",
      case 9:
        requestObj = "onDevelop";
        break;
      // 10: "سایر قبوض",
      case 10:
        requestObj = "onDevelop";
        break;
      default:
        break;
    }
    if (!requestObj) return message.error("نوع قبض نامشخص می باشد");
    if (requestObj === "onDevelop")
      return message.error("هنوز توسعه پیدا نکرده");
    const { actionType, jsonValues, objectId, type } = requestObj;

    const { payload } = await props.actions.CallCoreService({
      server: 0,
      objectId,
      actionType,
      jsonValues,
      type,
    });

    if (payload.id < 0) {
      message.error(<div dir="rtl">{payload.message}</div>);
    } else {
      props.navigateByState("../Estelam", {
        data: payload.data,
        billType: billType,
        billName: billData.name,
      });
    }
  };

  // ============================== حذف قبض =======================================
  const deleteHandle = (id) => async (e) => {
    const { actionType, jsonValues, objectId, type } = bill.delete(id);
    const { payload } = await props.actions.CallCoreService({
      server: 0,
      objectId,
      actionType,
      jsonValues,
      type,
    });

    if (payload.id < 0) return message.error(payload.message);
    {
      const { server, objectId, actionType, jsonValues, type } = bill.get(
        props.auth.userID,
        billType
      );

      const { payload } = await props.actions.CallCoreService({
        server,
        objectId,
        actionType,
        jsonValues,
        type,
      });

      if (payload.id > 0) {
        props.changeRouterState({
          data: payload.data,
          billType: billType,
        });
      } else {
        message.error(payload.message);
      }
    }
  };

  // ******!!! CAN BE A BUG !!!********
  /*
    when router change 
    **first** 
    current component rerenders 
    then goes to next component with navigate!!!! 
    so state of router change and current component throw an error
  */
  // ===============================================================

  return (
    <>
      <Header onBack={backHandle} title={toPersion[billType]} />
      <Form className="BillList__form">
        <span className="BillList__title">
          {data.length ? "قبض مورد نظر را انتخاب نمایید" : "قبض موجود نمی باشد"}
        </span>
        <div className="BillItems__container">
          {Array.isArray(data) &&
            data.map((item) => (
              <div className="BillItem">
                <div className="BillItem__left">
                  <span
                    className="BillItem__edit"
                    onClick={editHandle(
                      item.id,
                      item.senderUserId,
                      item.billID,
                      item.name
                    )}
                  >
                    {editIcon}
                  </span>
                  <span
                    className="BillItem__trash"
                    onClick={deleteHandle(item.id)}
                  >
                    {deleteIcon}
                  </span>

                  <Button
                    className="BillItem__btn"
                    onClick={estelamHandle(item)}
                  >
                    {" "}
                    استعلام{" "}
                  </Button>
                </div>
                <div className="BillItem__right">
                  <span className="BillItem__title">
                    <span className="BillItem__name">{item.name}</span>
                    <span className="BillItem__svg">{svgObj[billType]}</span>
                  </span>
                  <span className="BillItem__idNumber">
                    {justToFarsi(item.billID)}
                  </span>
                </div>
              </div>
            ))}
        </div>

        <Button className="BillList__btn" onClick={addBillHandle}>
          {" "}
          افزودن شناسه قبض جدید <span className="BillList__btnIcon"> + </span>
        </Button>
      </Form>
    </>
  );
};

const actionCreators = Object.assign({}, { CallCoreService });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});
const mapStateToProps = (state) => ({
  coreData: state.coreServices.coreData,
  router: state.router,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BillList));

var toPersion = {
  1: "قبض آب",
  2: "قبض برق",
  3: "قبض تلفن ثابت",
  4: "قبض گاز",
  5: "قبض همراه اول",
  6: "قبض رایتل",
  7: "قبض ایرانسل",
  8: "قبض شهرداری",
  9: "لیست قبض های پرداخت شده",
  10: "سایر قبوض",
};
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
