import { Button, Form, message } from "antd";
import Header from "../../components/Header";
import walletImg from "../../assets/wallet.svg";
import withRouter from "../../util/withModalRouter";
import { justToEnglish, justToFarsi } from "../../util/translateDigit";
import { digitToTomanCurrency } from "../../util/translateCurrency";
import InputNumber from "../../components/baseComponents/InputNumber";
import { wordifyRialsInTomans } from "../../util/numberToToman";
import { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const AddWallet = (props) => {
  const onCancel = () => props.closeModal();
  const [currency, setCurreny] = useState(null);

  const action = (price) => {
    const obj = {
      header_1: "افزایش موجودی",
      header_2: "کیف پول",
      price: price,
      logo: "addInventoryIcon",
    };

    props.navigateByState("../../Payment", {
      ...obj,
    });
  };

  const formHandle = ({ payment }) => {
    if (!payment) return message.error("مبلغ را وارد نمایید");

    action(payment);
  };

  return (
    <>
      <Header onBack={onCancel} title={"افزایش موجودی"} />
      <div className="AddWallet">
        <div className="AddWallet__imgcontainer">
          <img src={walletImg} className="AddWallet__img" />
          <span className="AddWallet__amount" dir="rtl">
            <span>{justToFarsi(digitToTomanCurrency(111232321))}</span> تومان
          </span>
        </div>
        <Form onFinish={formHandle} className={"AddWallet__form"}>
          <div className={"AddWallet__radiogroup"}>
            {[100000, 50000, 20000].map((val) => {
              return (
                <Button
                  htmlType="submit"
                  className="AddWallet__radio"
                  onClick={() => action(val)}
                >
                  {justToFarsi(digitToTomanCurrency(val))}
                </Button>
              );
            })}
          </div>
          <InputNumber
            formItemOption={{
              name: "payment",
              label: "مبلق دلخواه",
              help: wordifyRialsInTomans(currency),
            }}
            componentOption={{
              onChange: (e) => setCurreny(e),
              placeholder: "مبلق مورد نظر را به تومان وارد کنید",
              formatter: (value) =>
                justToFarsi(
                  `${justToEnglish(value)}`.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ","
                  )
                ),
              parser: (value) =>
                justToEnglish(value).replace(/\$\s?|(,*)/g, ""),
            }}
          />
          <Button className="AddWallet__btn" htmlType="submit">
            {"تایید"}
          </Button>
        </Form>
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
)(withRouter(AddWallet));
