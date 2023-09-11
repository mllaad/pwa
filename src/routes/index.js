import ReactDom from "react-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Routes } from "react-router-dom";
import AddWallet from "./AddWallet/index";
import MenuRoute from "./Menu/index";
import AllPayList from "./AllPayList/index";
import Bill from "./Bill/index";
import CardByCard from "./CardByCard/index";
import EditCard from "./EditCard/index";
import Internet from "./Internet/index";
import Menu from "./Menu/index";
import NewCard from "./NewCard/index";
import Simcard from "./Simcard/index";
import Tax from "./Tax/index";
import Violation from "./Violation/index";
import withRouter from "../util/withModalRouter";
import Payment from "./Payment/index";

const MainRoute = (props) => {
  const isOpen = props.location.state?.modal === true ? true : false;

  const isRender = DelayForFun(isOpen);

  const container = {
    in: { animation: "modal__containerIn 300ms ease-in forwards" },
    out: { animation: "modal__containerOut 300ms ease-in forwards" },
  };

  const content = {
    in: { animation: "modal__contentIn 300ms ease-in forwards" },
    out: { animation: "modal__contentOut 300ms ease-in forwards" },
  };

  return isRender
    ? ReactDom.createPortal(
        <div
          className="modal__container"
          key={props.location.pathname}
          style={isOpen ? container.in : container.out}
        >
          <div
            className="modal__content"
            style={isOpen ? content.in : content.out}
          >
            <Routes>
              <Route path="Menu/*" element={<MenuRoute />} />
              <Route path="Bill/*" element={<Bill />} />
              <Route path="Menu/*" element={<MenuRoute />} />
              <Route path="AddWallet/*" element={<AddWallet />} />
              <Route path="AllPayList/*" element={<AllPayList />} />
              <Route path="CardByCard/*" element={<CardByCard />} />
              <Route path="EditCard/*" element={<EditCard />} />
              <Route path="Internet/*" element={<Internet />} />
              <Route path="Menu/*" element={<Menu />} />
              <Route path="NewCard/*" element={<NewCard />} />
              <Route path="Simcard/*" element={<Simcard />} />
              <Route path="Tax/*" element={<Tax />} />
              <Route path="Violation/*" element={<Violation />} />
              <Route path="Payment/*" element={<Payment />} />
            </Routes>
          </div>
        </div>,
        document.body
      )
    : null;
};

const DelayForFun = (isMount, delay = 500) => {
  const [val, setVal] = useState(false);
  var timeID;
  useEffect(() => {
    if (!val && isMount) {
      setVal(true);
    }
    if (val && !isMount) {
      timeID = setTimeout(() => {
        setVal(false);
      }, delay);
    } else {
      clearTimeout(timeID);
    }
  }, [isMount]);
  return val;
};

const actionCreators = Object.assign({}, {});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});
const mapStateToProps = (state) => ({
  location: state.router.location,
  coreDataState: state.coreServices.coreDataState,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainRoute)
);
