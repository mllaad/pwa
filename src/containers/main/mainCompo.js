import { logo, notifArrow } from "../../assets/icons";
import { useEffect, useRef, useState } from "react";
import { Button } from "antd";
import "../../styles/index.css";
import _card from "../../assets/card.svg";

export const Notif = ({ text }) => {
  const [isOn, setIsOn] = useState(false);

  const className = isOn ? "Notice__arrow Notice__arrow--on" : "Notice__arrow";

  const containerRef = useRef(null);

  useEffect(() => {
    const _animation = (anim, opt) =>
      containerRef.current.animate(anim, {
        iterations: 1,
        fill: "forwards",
        ...opt,
      });
    // animate
    const anim = {
      // showmore
      more: {
        text: [{ height: "100px" }, { height: "200px" }],
      },
      // showless
      less: {
        text: [{ height: "200px" }, { height: "100px" }],
      },
    };
    if (isOn) {
      _animation(anim.more.text, { duration: 210 });
    } else {
      _animation(anim.less.text, { duration: 210 });
    }
  }, [isOn]);

  return (
    <div
      ref={containerRef}
      className={"Notice__item"}
      style={{ height: "50px" }}
    >
      <span className={className} onClick={() => setIsOn((s) => !s)}>
        <span
          className="Notice__svg"
          style={isOn ? { rotate: "0 deg" } : { rotate: "180deg" }}
        >
          {" "}
          {notifArrow}{" "}
        </span>
        <span className="Notice__more"> بیشتر </span>
      </span>
      {
        <span className="Notice__text">
          {" "}
          {isOn ? text : text.substring(0, 70)}{" "}
        </span>
      }
    </div>
  );
};

export const Section = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export const BackUp = ({ setState }) => {
  const clickHandle = () => setState(false);
  return (
    <>
      <div className="">
        {" "}
        <span className=""> پشتیبانی </span> <span className=""> {} </span>{" "}
      </div>
      <div className="">
        {" "}
        برای ارتباط با پشتیبانی با شماره ۰۲۱۱۲۳۴۵۶۷ تماس بگیرید{" "}
      </div>
      <Button onClick={clickHandle} className="">
        {" "}
        برگشت{" "}
      </Button>
    </>
  );
};
export const Exit = ({ setState, signOutHandle }) => {
  const onCancel = () => setState(false);
  return (
    <>
      <div className="">
        {" "}
        <span className=""> خروج از حساب کاربری </span>{" "}
        <span className=""> {} </span>{" "}
      </div>
      <div className="">آیا برای خروج از حساب کاربری خود اطمینان دارید؟</div>
      <div className="">
        {" "}
        <Button onClick={signOutHandle} className="">
          بله
        </Button>{" "}
        <Button onClick={onCancel} className="">
          خیر
        </Button>{" "}
      </div>
    </>
  );
};

export const SplashScreen = () => {
  return (
    <>
      <div className="bg-img">
        <div className="container">
          <div className="SplashScreen">
            <span className="SplashScreen__logo"> {logo} </span>
            <div className="SplashScreen__content">
              <span> پرداخت امن با صبا پی</span>
              <span> تحت نظارت بانک مرکزی ایران </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
