import { bindActionCreators } from "redux";
import withRouter from "../../util/withModalRouter";
import { CallCoreService } from "../../appRedux/features/CoreService";
import { useSwiperSlide, useSwiper } from "swiper/react";
import _card from "../../assets/card.svg";
import "swiper/swiper-bundle.css";
import { useState } from "react";
import { connect } from "react-redux";
import card from "../../apiCall/requestObjects/card";
import Alert from "../../components/Alert";
import { Button, message } from "antd";
import {
  deleteIcon,
  editIcon,
  arrowCard,
  alertNotice,
} from "../../assets/icons";
import { useEffect } from "react";
import { bankLogo } from "../../util/digitTypeDetect";
import { userCards } from "../../appRedux/features/Auth";
import { getRandomColor } from "../../util/randomColor";

// =============================== Card ===============================
const Card = (props) => {
  //   console.log(data);
  const [showDeleteCard, setShowDeleteCard] = useState();

  // کارت کلیک شد
  const [isSelected, setIsSelected] = useState(false);
  const clickCardHanle = () => setIsSelected((card) => !card);

  // کارت انتخاب شده
  const slideChange = useSwiperSlide();
  useEffect(() => {
    setIsSelected(false);
  }, [slideChange]);

  //  حذف کارت
  const deleteCardHandle = async () => {
    setShowDeleteCard(false);
    const obj = card.delete(props.data.id);
    const { payload } = await props.actions.CallCoreService(obj);
    if (payload.id > 0) {
      message.success(payload.message);

      {
        const obj = card.get(props.auth.userID);
        const { payload } = await props.actions.CallCoreService(obj);
        if (payload.id < 0) return message.error(payload.message);
        const response = props.actions.userCards(payload.data);
      }
    } else {
      message.error(payload.message);
    }
  };

  const dateHandle = (date) => (/\d{2}$/.test(date) ? date : "0" + date);

  // ========
  const cardNumber = props.data.cardNumber?.replace(/(\d{4})/g, "$1  ");
  const month = props.data.month;
  const year = props.data.year?.replace("14", "");
  const className = isSelected ? "Card--selected" : "";
  const id = props.data.id;

  return (
    <>
      <div className={"Card " + className} onClick={clickCardHanle}>
        <div className="Card " style={{ backgroundColor: getRandomColor() }}>
          <div className="Card__icon">{bankLogo(props.data.cardNumber)}</div>
          <div className="Card__number">{cardNumber}</div>
          <div className="Card__date">
            {dateHandle(year)}/{dateHandle(month)}
          </div>
        </div>
        <div className="Card__arrow">{arrowCard}</div>
      </div>
      <div className="Card__UnderCard">
        <div
          className="Card__undericon"
          onClick={() =>
            props.navigateByState("EditCard", {
              cardNumber,
              year: props.data.year,
              month: props.data.month,
              id,
            })
          }
        >
          {editIcon}
        </div>
        <div
          className="Card__undericon"
          onClick={() => setShowDeleteCard(true)}
        >
          {deleteIcon}
        </div>
      </div>

      {/***********************************  حذف کارت   ***********************************/}
      <Alert isOn={showDeleteCard}>
        <div className="alert__container">
          {alertNotice}
          <p>ایا برای حذف کارت اطمینان دارید؟</p>
          <div className="alert__btn">
            <Button
              className="white-btn"
              onClick={() => setShowDeleteCard(false)}
            >
              {" "}
              خیر{" "}
            </Button>
            <Button className="blue-btn" onClick={deleteCardHandle}>
              {" "}
              بله{" "}
            </Button>
          </div>
        </div>
      </Alert>
    </>
  );
};

const actionCreators = Object.assign({}, { CallCoreService, userCards });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});
const mapStateToProps = (state) => ({
  router: state.router,
  auth: state.auth,
  coreData: state.coreServices.coreData,
  coreDataState: state.coreServices.coreDataState,
  coreServiceFlow: state.coreServices.coreServiceFlow,
});

// export default SwiperCards;
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Card));
