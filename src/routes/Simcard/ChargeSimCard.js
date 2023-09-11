import { userAutoComplete } from "../../assets/icons";
import { Button, Form, message } from "antd";
import { useEffect, useState } from "react";
import InputNumber from "../../components/baseComponents/InputNumber";
import Header from "../../components/Header";
import AutoComplete from "../../components/baseComponents/AutoComplete";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import withRouter from "../../util/withModalRouter";
import { digitToTomanCurrency } from "../../util/translateCurrency";
import { justToEnglish, justToFarsi } from "../../util/translateDigit";
import { wordifyRialsInTomans } from "../../util/numberToToman";

const ChargeSimCard = (props) => {
  const onCancel = () => props.navigate(-1);

  const [isShowInput, setIsShowInput] = useState(false);
  const [currency, setCurreny] = useState(false);

  const renderItem = (number, text) => ({
    value: number,
    label: (
      <div
        className="ChargeSimCard__dropdown"
        onClick={() =>
          text === "سایر مبالغ" ? setIsShowInput(true) : setIsShowInput(false)
        }
      >
        <span style={{ padding: "10px 0px", height: "45px" }}> {text} </span>
      </div>
    ),
  });

  const options = [
    {
      options: [
        renderItem("سایر مبالغ", "سایر مبالغ"),
        renderItem(justToFarsi(digitToTomanCurrency(20000)), "2,000 تومان"),
        renderItem(justToFarsi(digitToTomanCurrency(50000)), "5,000 تومان"),
        renderItem(justToFarsi(digitToTomanCurrency(100000)), "10,000 تومان"),
        renderItem(justToFarsi(digitToTomanCurrency(200000)), "20,000 تومان"),
        renderItem(justToFarsi(digitToTomanCurrency(500000)), "50,000 تومان"),
      ],
    },
  ];

  const formHandle = ({ price }) => {
    if (!price) return message.error("مبلغ را وارد نمایید");
    const phoneNumber = props.router.location.state?.phoneNumber;

    props.navigateByState("../../Payment", { price, phoneNumber });
  };
  return (
    <>
      <Header onBack={onCancel} title={"خرید شارژ "} />
      <Form className="ChargeSimCard" onFinish={formHandle}>
        <div className="ChargeSimCard__autocomplete">
          <AutoComplete
            formItemOption={{ name: "price" }}
            autoComplete={{ options: options }}
            componentOption={{
              placeholder: "انتخاب کنید",
              prefix: userAutoComplete,
            }}
            // <<custom label out side of form.item!>>>
            label={"خرید شارژ"}
          />
        </div>
        <div className="ChargeSimCard__input">
          {isShowInput && (
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
          )}
        </div>
        <Button className="ChargeSimCard__btn" htmlType="submit">
          ادامه
        </Button>
      </Form>
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
)(withRouter(ChargeSimCard));
