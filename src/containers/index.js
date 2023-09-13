import { Route, Routes, useNavigate } from "react-router-dom";
import SignUp from "./signup/index";
import Main from "./main/Main";
import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Spin } from "antd";
// import { checkTokenAction } from "../appRedux/features/Auth";
import { SplashScreen } from "./main/mainCompo";

const Authentication = (props) => {
  // DETECT IS PWA OR SIMPLE WEB PAGE
  let displayMode;
  const [showSpashScreen, setShowSplashScreen] = useState(() => {
    const mqStandAlone = "(display-mode: standalone)";
    if (navigator.standalone || window.matchMedia(mqStandAlone).matches) {
      displayMode = "standalone";
      return true;
    } else {
      displayMode = "browser";
      return false;
    }
  });

  // console.log(
  //   props.coreServices.coreServiceFlow,
  //   "props.coreServices.coreServiceFlow"
  // );

  const navigate = useNavigate();

  // ON MOUNT
  useEffect(() => {
    // SPLASH SCREEN
    if (displayMode === "standalone") {
      setTimeout(() => {
        setShowSplashScreen(false);
      }, 500);
    }
    // REMOVE SPLASH SCREEN
    if (displayMode === "browser") {
      setShowSplashScreen(false);
    }

    // CHECK AUTHORIZE
    // const token = props.auth.token
    //   ? props.auth.token
    //   : localStorage.getItem("token");
    // props.actions.checkTokenAction(token);

    return () => props.navigate(0);
  }, []);

  // CHECK AUTHORIZE IS VALID
  // useEffect(() => {
  // if (!props.auth.tokenIsValid) {
  //   navigate({ pathname: "/signup" });
  // }
  // }, [props.auth.tokenIsValid]);

  if (showSpashScreen) return <SplashScreen />;

  return (
    <>
      {/* {props.coreServices.promiseState === "pending" && <ShowPending />}
      {props.auth.authState === "pending" && <ShowPending />} */}

      {props.auth.tokenIsValid ? (
        <Main />
      ) : (
        <Routes>
          <Route path="/signup/*" element={<SignUp />} />
          <Route
            path="/*"
            element={<MainNoToken isValid={props.auth.tokenIsValid} />}
            exact
          />
          {/* NEXT STEP */}
          {/* <Route path="/signin" element={<SignIn/>} /> */}
          {/* <Route path="*" element={<div>NOT FOUND 404</div>} /> */}
        </Routes>
      )}
    </>
  );
};

const ShowPending = () => {
  return (
    <div className="ShowPending">
      <div className="ShowPending__item">
        <Spin />
      </div>
    </div>
  );
};

const MainNoToken = ({ isValid }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("signup");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      در حال اعتبار سنجی توکن
      <Spin />
    </div>
  );
};

const actionCreators = Object.assign({}, {});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});
const mapStateToProps = (state) => ({
  auth: state.auth,
  coreServices: state.coreServices,
  router: state.router,
});

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
