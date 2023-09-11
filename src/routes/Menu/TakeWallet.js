import Header from "../../components/Header";
import Input from "../../components/baseComponents/Input";
import InputNumber from "../../components/baseComponents/InputNumber";
import { Button, Form } from "antd";
import { menuNotice } from "../../assets/menu/index";
import withRouter from "../../util/withModalRouter";

const TakeWallet = (props) => {
  const backHandle = () => props.closeModal();

  return (
    <>
      <Header onBack={backHandle} title={"برداشت از کیف پول"} />
      <Form className="TakeWallet">
        <div className="TakeWallet__myMoney">
          <span className="TakeWallet__bold">: موجودی قابل پرداخت</span>
          <span className="TakeWallet__orange"> 1,325,000 ریال</span>
        </div>
        <div className="TakeWallet__notice">
          <span className="TakeWallet__text">
            طبق دستورالعمل بانک مرکزی انتقال از کیف پول فقط به کارت صاحب سیم
            کارت امکان پذیر است
          </span>
          <span className="">{menuNotice}</span>
        </div>
        <Input
          formItemOption={{
            label: "شماره کارت",
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
            label: "مبلغ",
            // style:{width: '100%'},
            // name: "pass",
            // rules:[{ pattern: /^\d+$/, message: 'بصورت عددی وارد کنید'}],
          }}
          componentOption={{
            placeholder: "مبلغ مورد نظر را به ریال وارد کنید",
            // style: {textAlign: 'center', height: '48px'}
          }}
        />
        <Button className="TakeWallet__btn"> انتقال </Button>
      </Form>
    </>
  );
};

export default withRouter(TakeWallet);
