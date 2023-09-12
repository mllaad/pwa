import { bindActionCreators } from "redux";
import withRouter from "../../util/withModalRouter";
import { CallCoreService } from "../../appRedux/features/CoreService";
import { SwiperSlide, Swiper } from "swiper/react";
import _card from "../../assets/card.svg";
import wallet from "../../assets/wallet.svg";
import "swiper/swiper-bundle.css";
import { connect } from "react-redux";
import card from "../../apiCall/requestObjects/card";
import Card from "./Card";
import { useEffect } from "react";
import { userCards } from "../../appRedux/features/Auth";

// ================================== SwiperCards ====================================
const SwiperCards = (props) => {
  const cards = props.card.data;

  // get cards
  // useEffect(() => {
  //   const obj = card.get(props.auth.userID);
  //   props.actions.CallCoreService(obj).then((response) => {
  //     if (response.payload.id > 0) {
  //       props.actions.userCards(response.payload.data);
  //     }
  //   });
  // }, []);

  return (
    <>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={1}
        centeredSlides={true}
        onSlideChange={(e) => null}
        className="mySwiper mainSiwper"
      >
        {/* =====================  کارت جدید ======================== */}
        <SwiperSlide onClick={() => props.navigate("NewCard")}>
          <div className="wrapperCards__container">
            <div className="SwiperCards__new">افزودن کارت جدید +</div>
          </div>
        </SwiperSlide>
        {/* ====================== کارت های کاربر ====================== */}
        {cards &&
          cards.map((card, index) =>
            // prettier-ignore
            <SwiperSlide key={index} className="swiper-slide mainSwiper__slide">
              <Card data={card} />
            </SwiperSlide>
          )}
        {/* ========================== کیف پول =========================== */}
        <SwiperSlide>
          <div className="wrapperCards__container">
            <img className="wrapperCards__img" src={wallet} />
            <span className="wrapperCards__wallet">0 تومان</span>
          </div>
        </SwiperSlide>
      </Swiper>
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
  card: state.card,
});

// export default SwiperCards;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SwiperCards));
