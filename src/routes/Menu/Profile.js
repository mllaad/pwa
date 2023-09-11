import Header from "../../components/Header";
import Input from "../../components/baseComponents/Input";
import InputNumber from "../../components/baseComponents/InputNumber";
import { Button, Form } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { CallCoreService } from "../../appRedux/features/CoreService";
import withRouter from "../../util/withModalRouter";
// import { menuNotice } from '../../assets/menu/index'

const Profile = (props) => {
  const backHandle = () => props.closeModal();

  return (
    <>
      <Header onBack={backHandle} title={"برداشت از کیف پول"} />
      <Form className="Profile">
        <InputNumber
          formItemOption={{
            label: "شماره تلفن همراه",
            // style:{width: '100%'},
            // name: "pass",
            // rules:[{ pattern: /^\d+$/, message: 'بصورت عددی وارد کنید'}],
          }}
          componentOption={{
            placeholder: "مبلغ مورد نظر را به ریال وارد کنید",
            // style: {textAlign: 'center', height: '48px'}
          }}
        />
        <Input
          formItemOption={{
            label: "نام و نام خانوادگی",
            // style:{width: '100%'},
            // name: "pass",
            // rules:[{ pattern: /^\d+$/, message: 'بصورت عددی وارد کنید'}],
          }}
          componentOption={
            {
              // placeholder:'رمز' ,
              // style: {textAlign: 'center', height: '48px'}
            }
          }
        />
        <InputNumber
          formItemOption={{
            label: "کد ملی یا شماره حساب",
            // style:{width: '100%'},
            // name: "pass",
            // rules:[{ pattern: /^\d+$/, message: 'بصورت عددی وارد کنید'}],
          }}
          componentOption={{
            placeholder: "مبلغ مورد نظر را به ریال وارد کنید",
            // style: {textAlign: 'center', height: '48px'}
          }}
        />
        <div className="Profile__inputGroupTitle"> تاریخ تولد </div>
        <div className="Profile__inputGroup">
          <InputNumber
            formItemOption={{
              name: "year",
              // style:{width: '100%'},
              // name: "pass",
              // rules:[{ pattern: /^\d+$/, message: 'بصورت عددی وارد کنید'}],
            }}
            componentOption={{
              placeholder: "سال",
              // style: {textAlign: 'center', height: '48px'}
            }}
          />
          <InputNumber
            formItemOption={{
              name: "month",
              // style:{width: '100%'},
              // name: "pass",
              // rules:[{ pattern: /^\d+$/, message: 'بصورت عددی وارد کنید'}],
            }}
            componentOption={{
              placeholder: "ماه",
              // style: {textAlign: 'center', height: '48px'}
            }}
          />
          <InputNumber
            formItemOption={{
              name: "day",
              // style:{width: '100%'},
              // name: "pass",
              // rules:[{ pattern: /^\d+$/, message: 'بصورت عددی وارد کنید'}],
            }}
            componentOption={{
              style: { textAlign: "center" },
              placeholder: "روز",
            }}
          />
        </div>
        <Button className="Profile__btn"> انتقال </Button>
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
)(withRouter(Profile));
