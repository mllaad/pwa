import { Button, Form, message } from "antd";
import Header from "../../components/Header";
import Checkbox from "../../components/baseComponents/Checkbox";
import Input from "../../components/baseComponents/Input";
import bill from "../../apiCall/requestObjects/bill";
import { CallCoreService } from "../../appRedux/features/CoreService";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import withRouter from "../../util/withModalRouter";

const NewBill = (props) => {
  const backHandle = () => props.backModal();
  const { billType, isCreate, id, senderUserId } = props.router.location.state;
  const billID = props.router.location.state?.billID;
  const billName = props.router.location.state?.billName;

  const formHandle = async ({ title, traceNumber, check }) => {
    if (!check) return;
    const userid = props.auth.userID;

    // ثبت در دیتابیس
    const { server, objectId, actionType, jsonValues, type } = isCreate
      ? bill.create(JSON.parse(userid), billType, title, traceNumber)
      : bill.update(id, title, billType, senderUserId, traceNumber);
    const { payload } = await props.actions.CallCoreService({
      server,
      objectId,
      actionType,
      jsonValues,
      type,
    });
    if (payload.id < 0) return message.error("اشکال در ثبت");

    // درخواست لیست
    {
      const { server, objectId, actionType, jsonValues, type } = bill.get(
        userid,
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
        props.navigateByState("../BillList", {
          data: payload.data,
          billType: billType,
        });
      } else {
        message.error(payload.message);
      }
    }
  };

  return (
    <>
      <Header
        onBack={backHandle}
        title={isCreate ? "قبض جدید" : "ویرایش قبض"}
      />

      <Form className="NewBill__form" onFinish={formHandle}>
        <Input
          formItemOption={{
            name: "title",
            label: "عنوان قبض",
            // rules:[{ pattern: /^\d{11}$/, message: 'شماره تلفن همراه صحیح نمی باشد'}],
            initialValue: billName,
          }}
          componentOption={{
            placeholder: "عنوان قبض را وارد نمایید",
            style: { textAlign: "center" },
          }}
        />
        <Input
          formItemOption={{
            name: "traceNumber",
            label: "شناسه قبض",
            // rules:[{ pattern: /^\d{11}$/, message: 'شماره تلفن همراه صحیح نمی باشد'}],
            initialValue: billID,
          }}
          componentOption={{
            placeholder: "شماره قبض را وارد نمایید",
            style: { textAlign: "center" },
          }}
        />
        <div className="NewBill__checkbox">
          <span className="NewBill__link">
            {" "}
            اطلاع رسانی زمان صدور قبض جدید{" "}
          </span>
          <Checkbox formItemOption={{ name: "check" }} componentOption={{}} />
        </div>
        <p className="NewBill__description">
          اطلاع رسانی زمان صدور قبض جدید هر زمان قبض جدیدی صادر شود، از طریق
          اعلان های برنامه به شما اطلاع داده میشود.
        </p>
        <Button className="NewBill__btn" htmlType="submit">
          {" "}
          پرداخت{" "}
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
  coreDataState: state.coreServices.coreDataState,
  auth: state.auth,
  router: state.router,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewBill));
