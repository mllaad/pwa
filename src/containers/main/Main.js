import "../../styles/baseComponents.css";
import "../../styles/components.css";
import "../../styles/main.css";
import "../../styles/index.css";
import { logo, hamburger, elipse, vector, notifIcon } from "../../assets/icons";
import { profile } from "../../assets/menu/index";
import { useState } from "react";
import { footer } from "../../assets/footer/footer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logOut } from "../../appRedux/features/Auth";
import { Drawer, message } from "antd";
import { BackUp, Exit, Notif, Section } from "./mainCompo";
import SwiperCards from "./swiper";
import { footers, grid, menu, notif } from "./mainMap";
import Icon from "../../components/Icon";
import Alert from "../../components/Alert";
import withRouter from "../../util/withModalRouter";
import { CallCoreService } from "../../appRedux/features/CoreService";
import MainRoute from "../../routes/index";

const Main = (props) => {
  //  اعلان ها
  const [isNotif, setIsNotif] = useState(false);

  // برای منو
  const [isMenu, setIsMenu] = useState(false);
  const [isBackUp, setIsBackUp] = useState(false);
  const [isExit, setIsExit] = useState(false);

  const navigateHandle = (path) => () => {
    if (!path) {
      message.info(
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          توسعه پیدا نکرده
        </div>
      );
      return;
    }
    props.navigate(path);
  };

  const onClickMenuItem = (type, val) => () => {
    if (type === "alert") {
      val === "Exit" ? setIsExit(true) : setIsBackUp(true);
    }
    if (type === "modal") {
      setIsMenu(false);
      props.navigate(val);
    }
  };

  // خروج کاربر
  const signOutHandle = async () => {
    setIsExit(false);
    props.actions.logOut();
    // const response = await props.actions.logoutAction(props.auth.token);
    // if (response.payload.id > 0) {
    //   message.success("کاربر خارج شد");
    // }
  };

  return (
    <div className="home__bg">
      <Alert isOn={isExit}>
        {" "}
        <Exit setState={setIsBackUp} signOutHandle={signOutHandle} />{" "}
      </Alert>
      <Alert isOn={isBackUp}>
        {" "}
        <BackUp setState={setIsBackUp} />{" "}
      </Alert>
      {/* ------------------------------- MODAL ------------------------------ */}

      <div className="home__container">
        {/* ------------------------------- HEADER --------------------------- */}
        <Section className="header">
          <div className="notif" onClick={() => setIsNotif(true)}>
            <span className="notif__alarm"> {vector} </span>
            <span className="notif__red"> {elipse} </span>
          </div>
          <div className="header__logo">{logo}</div>
          <div className="header__menu" onClick={() => setIsMenu(true)}>
            {hamburger}
          </div>
        </Section>
        {/* ------------------------------- WALLET --------------------------- */}
        <Section className="wallet">
          <SwiperCards />
        </Section>
        {/* ------------------------------- GRID --------------------------- */}
        <Section className="gridSection">
          <div className="gridSection__container">
            {grid.map(({ text, svg, span, path }) => {
              let className;
              if (path) {
                className = span ? "gridmain gridmain--span2" : "gridmain";
              } else {
                className = span
                  ? "gridmain-off  gridmain--span2"
                  : "gridmain-off";
              }

              return (
                <Icon
                  key={text}
                  className={className}
                  icon={svg}
                  onClick={navigateHandle(path)}
                  text={text}
                />
              );
            })}
            {/* free space for scroll */}
            <div className="gridSection__space" />
          </div>
          {/* ------------------------------- FOOTER --------------------------- */}
          <div className="footer">
            <div className="footer__bg"> {footer} </div>
            <div className="footer__text">
              {" "}
              <span> تراکنش ها </span> <span> کد QR </span>{" "}
              <span> افزایش موجودی </span>{" "}
            </div>
            <div className="footer__items">
              {footers.map((footer, index) => {
                return (
                  <div
                    className="footer__item"
                    onClick={navigateHandle(footer.path)}
                    key={index}
                  >
                    <div className="footer__itemImage"> {footer.svg} </div>
                  </div>
                );
              })}

              {/* ------------------------------  MENU ------------------------------- */}
              <Drawer
                className="Menu"
                rootClassName={"MenuCotainer"}
                closable={false}
                onClose={() => setIsMenu(false)}
                open={isMenu}
              >
                <div
                  className="Menu__header"
                  onClick={navigateHandle("Menu/Profile")}
                >
                  <span className="Menu__number">09383706371</span>
                  <span className="Menu__profile">{profile}</span>
                </div>
                {menu.map((obj, index) => {
                  const path = obj.path;
                  return (
                    <div
                      className="Menu__item"
                      onClick={onClickMenuItem(obj.type, obj.path)}
                      key={index}
                    >
                      <span className="Menu__text">{obj.text}</span>
                      <span className="Menu__icon">{obj.icon}</span>
                    </div>
                  );
                })}
              </Drawer>

              {/* ------------------------- NOTICE -------------------------------- */}
              <Drawer
                className="Notice"
                placement={"left"}
                rootClassName="Notice__container"
                closable={false}
                onClose={() => setIsNotif(false)}
                open={isNotif}
              >
                <div className="Notice__header">
                  <span className="Notice__number"> اعلان ها </span>
                  <span className="Notice__profile">{notifIcon}</span>
                </div>
                {notif.map((text, index) => {
                  return <Notif text={text} key={index} />;
                })}
              </Drawer>
            </div>
          </div>
        </Section>
      </div>
      <MainRoute />
    </div>
  );
};

const actionCreators = Object.assign({}, { CallCoreService, logOut });
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));
