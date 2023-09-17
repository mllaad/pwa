import Header from "../../components/Header";
import { Form, Button } from "antd";
import InputNumber from "../../components/baseComponents/InputNumber";
import { useState } from "react";
import Input from "../../components/baseComponents/Input";
import { justToEnglish, justToFarsi } from "../../util/translateDigit";
import withRouter from "../../util/withModalRouter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useRef } from "react";
import { bankLogo } from "../../util/digitTypeDetect";

const SelectCard = (props) => {
  const onCancel = () => props.navigate(-1);
  const cardRef = useRef(null);
  const [isBtnActive, setIsBtnActive] = useState(true);
  const cardNumber = props.router.location.state?.cardNumber;
  const price = props.router.location.state?.price;

  const selectCardHandle = ({ cardNumber }) => {
    props.navigateByState("../", { cardNumber, price });
  };

  //  =============== search field ====================
  const [cardNameUser, setCardNameUser] = useState("");
  const [cardNumberUser, setCardNumberUser] = useState("");

  const filteredCards = data
    .filter((d) => (cardNumberUser ? d.card.includes(cardNumberUser) : d))
    .filter((d) => (cardNameUser ? d.name.includes(cardNameUser) : d));

  const onSelectCard = (cardNumber) => () => {
    props.navigateByState("../", { cardNumber, price });
  };

  // ================ input cardNumber ==============

  // ================ کارت مقصد ====================
  const cardNumberChange = (e) => {
    setCardNumberUser(e);

    if (e?.length === 16) {
      cardRef.current.blur();
      setIsBtnActive(false);
    } else {
      setIsBtnActive(true);
    }
  };

  const formatterHandler = (value) =>
    justToFarsi(`${justToEnglish(value)}`.replace(/(\d{4})/g, "$1  "));
  const parserHandler = (value) =>
    justToEnglish(value.replace(/\$\s?|(  *)/g, ""));

  return (
    <>
      <Header onBack={onCancel} title={"انتخاب کارت"} />
      <Form className="selectCard" onFinish={selectCardHandle}>
        <div className="selectCard__inputType">
          {/* ============== */}
          <div className="selectCard__inputcard">
            <InputNumber
              formItemOption={{
                name: "cardNumber",
                label: "کارت مقصد",
                style: { textAlign: "center" },
                initialValue: cardNumber,
              }}
              componentOption={{
                autoComplete: "off",
                placeholder: "شماره کارت بانکی را وارد کنید",
                onChange: cardNumberChange,
                ref: cardRef,
                stringMode: true,
                min: "0000000000000000",
                max: "9999999999999999",
                formatter: (value) => formatterHandler(value),
                parser: (value) => parserHandler(value),
              }}
            />
          </div>

          {/* =================== */}
          <div className="selectCard__btngroup">
            <Button
              className="selectCard__btn"
              disabled={isBtnActive}
              htmlType="submit"
            >
              {" "}
              ادامه{" "}
            </Button>
            <Button
              className="selectCard__btn"
              disabled={isBtnActive}
              htmlType="submit"
            >
              {" "}
              ذخیره و ادامه{" "}
            </Button>
          </div>

          <div className="selectCard__inputcard">
            <Input
              formItemOption={{
                rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
              }}
              componentOption={{
                onChange: (e) => setCardNameUser(e.target.value),
                style: { textAlign: "center" },
                autoComplete: "off",
                placeholder: "جستجو ",
              }}
            />
          </div>
        </div>
        <div className="selectCard__list">
          {filteredCards.map((obj) => {
            return (
              <div
                className="selectCard__item"
                onClick={onSelectCard(obj.card)}
              >
                <div className="">
                  <div className="selectCard__name">{obj.name}</div>
                  <div className="selectCard__card">
                    {justToFarsi(obj.card.replace(/(\d{4})/g, "$1 "))}
                  </div>
                </div>
                <div className="selectCard__icon">{bankLogo(obj.card)}</div>
              </div>
            );
          })}
        </div>
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
)(withRouter(SelectCard));

var data = [
  { name: " رومینا برزگر", card: "5029381042539858" },
  { name: " متین نوشا", card: "6037701693675825" },
  { name: "میلاد قاسمی", card: "6104337840874620" },
  { name: " خدمتعلی نجفی", card: "5894631136289956" },
  { name: "علیرضا مهرجو", card: "5892101414836557" },
  { name: " مهدی نصیری", card: "5022291502166224" },
  { name: "مرتضی احیایی", card: "5047061078776206" },
  { name: "مهدی نصیری", card: "5892101471803862" },
];
