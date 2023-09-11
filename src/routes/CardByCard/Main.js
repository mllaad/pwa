import { back, userAutoComplete } from "../../assets/icons";
import card from "../../assets/card.svg";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Form, message } from "antd";
import { useState } from "react";
import Input from "../../components/baseComponents/Input";
import { wordifyRialsInTomans } from "../../util/numberToToman";
import { route } from "./index";
import Header from "../../components/Header";
import InputNumber from "../../components/baseComponents/InputNumber";
import withRouter from "../../util/withModalRouter";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { justToEnglish, justToFarsi } from "../../util/translateDigit";
import { digitToTomanCurrency } from "../../util/translateCurrency";

var cardss = [
  "6102 3378 4065 3378",
  "6102 3378 4065 3378",
  "6102 3378 4065 3378",
];
const CardByCard = (props) => {
  const onCancel = () => props.closeModal();

  const cardNumber = props.router.location.state?.cardNumber;
  const price = props.router.location.state?.price;
  const [amount, setAmmount] = useState(price || 0);

  const help = wordifyRialsInTomans(amount);

  //  رفتن به صفحه پرداخت
  const formHandle = ({ amount }) => {
    if (!cardNumber) return message.error("شماره کارت را مشخص کنید");
    if (!amount) return message.error("مبلغ را مشخص کنید");
    props.navigateByState("CardByCardPayment", {
      cardNumber,
      amount,
    });
  };

  return (
    <>
      <Header onBack={onCancel} title={"پرداخت"} />
      <MySwiper cards={cardss} />
      <Form className="cardByCard__form" onFinish={formHandle}>
        <label className="cardByCard__label"> کارت مقصد </label>
        <div
          className="cardByCard__input"
          onClick={() =>
            props.navigateByState("SelectCard", {
              price: amount,
              cardNumber: cardNumber,
            })
          }
        >
          <span className="cardByCard__icon"> {userAutoComplete} </span>
          <p className="cardByCard__placeholder">
            {" "}
            {cardNumber
              ? justToFarsi(String(cardNumber).replace(/(\d{4})/g, "$1  "))
              : "شماره کارت را وارد نمایید"}
          </p>
        </div>
        <InputNumber
          formItemOption={{
            rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
            label: "مبلغ",
            name: "amount",
            help: help,
            initialValue: price
              ? justToFarsi(digitToTomanCurrency(price))
              : null,
          }}
          componentOption={{
            placeholder: "مبلغ را به ریال وارد کنید",
            autoComplete: "off",
            onChange: (e) => setAmmount(e),
            formatter: (value) =>
              justToFarsi(
                `${justToEnglish(value)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              ),
            parser: (value) => justToEnglish(value).replace(/\$\s?|(,*)/g, ""),
          }}
        />
        <Input
          formItemOption={{
            name: "for",
            label: "بابت",
            rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
          }}
          componentOption={{
            style: { textAlign: "center" },
            autoComplete: "off",
            placeholder: "توضیحات تراکنش (اختیاری)",
          }}
        />
        <Button
          className="CardByCard__btn"
          style={{ marginTop: "25px" }}
          htmlType="submit"
        >
          {" "}
          ادامه{" "}
        </Button>
      </Form>
    </>
  );
};

const MySwiper = ({ onSlideChange, cards }) => {
  return (
    <Swiper
      slidesPerView={1.4}
      spaceBetween={-20}
      centeredSlides={true}
      onSlideChange={onSlideChange}
      className="mySwiper"
    >
      {cards.map(() => {
        return (
          <SwiperSlide className="swiper-slide">
            <div className="CardByCard__slide">
              <img src={card} className="CardByCard__img" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
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
)(withRouter(CardByCard));
