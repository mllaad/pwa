import { message } from "antd";
import { back, clipboardIcon, arrowCard } from "../../assets/icons";
import { useState } from "react";
import Expand from "../../components/Expand";
import Header from "../../components/Header";
import Clipboard from "../../components/Clipboard";

const AllBillsList = (props) => {
  const cols = [
    <span className="expand_blue">جزئیات</span>,
    <span className="expand_black"> {"تاریخ"} </span>,
    <span className="expand_orange"> {"2000 تومان"} </span>,
    <span className="expand_black"> {"1/2/15  2:14"} </span>,
    <Clipboard text={"1421412512"} />,
    <span className="expand_black">شماره ارجاع</span>,
  ];

  const innerCols = [
    <span className="el_orange "> {"2000 تومان"} </span>,
    <span className="expand_black"> {"1/2/15 "} </span>,
  ];

  const onCancel = () => null;

  return (
    <>
      <Header onBack={onCancel} title={"لیست عوارض پرداخت شده"} />
      <div className="allBillsList__scroll">
        <Expand header={cols} arrow={true}>
          <Expand
            header={innerCols}
            containerClassName={"expand-border "}
            className="allbillslist_inner"
            arrow={false}
          >
            <div>wefwefwef</div>D<div>wefwefwef</div>D<div>wefwefwef</div>D
            <div>wefwefwef</div>D<div>wefwefwef</div>D<div>wefwefwef</div>D
            <div>wefwefwef</div>D
          </Expand>
        </Expand>
        <Expand header={cols} arrow={true}>
          <Expand
            header={innerCols}
            containerClassName={"expand-border "}
            className="allbillslist_inner"
            arrow={false}
          >
            <div>wefwefwef</div>D<div>wefwefwef</div>D<div>wefwefwef</div>D
            <div>wefwefwef</div>D<div>wefwefwef</div>D<div>wefwefwef</div>D
            <div>wefwefwef</div>D
          </Expand>
        </Expand>
        <Expand header={cols} arrow={true}>
          <Expand
            header={innerCols}
            containerClassName={"expand-border "}
            className="allbillslist_inner"
            arrow={false}
          >
            <div>wefwefwef</div>D<div>wefwefwef</div>D<div>wefwefwef</div>D
            <div>wefwefwef</div>D<div>wefwefwef</div>D<div>wefwefwef</div>D
            <div>wefwefwef</div>D
          </Expand>
        </Expand>
        <Expand header={cols} arrow={true}>
          <Expand
            header={innerCols}
            containerClassName={"expand-border "}
            className="allbillslist_inner"
            arrow={false}
          >
            <div>wefwefwef</div>D<div>wefwefwef</div>D<div>wefwefwef</div>D
            <div>wefwefwef</div>D<div>wefwefwef</div>D<div>wefwefwef</div>D
            <div>wefwefwef</div>D
          </Expand>
        </Expand>
        <Expand header={cols} arrow={true}>
          <Expand
            header={innerCols}
            containerClassName={"expand-border "}
            className="allbillslist_inner"
            arrow={false}
          >
            <div>wefwefwef</div>D<div>wefwefwef</div>D<div>wefwefwef</div>D
            <div>wefwefwef</div>D<div>wefwefwef</div>D<div>wefwefwef</div>D
            <div>wefwefwef</div>D
          </Expand>
        </Expand>
        <Expand header={cols} arrow={true}>
          <Expand
            header={innerCols}
            containerClassName={"expand-border "}
            className="allbillslist_inner"
            arrow={false}
          >
            <div>wefwefwef</div>D<div>wefwefwef</div>D<div>wefwefwef</div>D
            <div>wefwefwef</div>D<div>wefwefwef</div>D<div>wefwefwef</div>D
            <div>wefwefwef</div>D
          </Expand>
        </Expand>
      </div>
    </>
  );
};

export default AllBillsList;
