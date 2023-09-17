import Expand from "../../components/Expand";
import Header from "../../components/Header";
import Clipboard from "../../components/Clipboard";
import withRouter from "../../util/withModalRouter";
import { Collapse } from "antd";
import { arrowCard } from "../../assets/icons";
import { digitToTomanCurrency } from "../../util/translateCurrency";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const createLabel = (title, date, price) => (
  <div className="test">
    <span className="" style={{ lineHeight: "1.7" }}>
      جزئیات
    </span>
    <span className="right">{title}</span>
    <span className="" style={{ marginLeft: "-20px" }}>
      {" "}
      {date}{" "}
    </span>
    <span className="right orange">{digitToTomanCurrency(price)} تومان</span>
    <span className="" style={{ marginLeft: "-20px" }}>
      09383706371
    </span>
    <span className="right ">شماره ارجاع تلفن همراه</span>
  </div>
);

const items = [
  {
    key: "1",
    label: createLabel("شارژ ایرانسل", "10:31  13/12/1", 222331100),
    children: <p>{text}</p>,
  },
];

const Main = (props) => {
  const backHandle = () => props.closeModal();

  const onChage = () => {};
  const expandIcon = (e, d) => {
    console.log(e, d);
    return arrowCard;
  };

  return (
    <>
      <Header onBack={backHandle} title={"لیست تراکنش ها"} />
      <div className="test__scroll">
        <Collapse
          items={items}
          onChange={onChage}
          expandIcon={expandIcon}
          ghost={true}
          accordion
        />
        <Collapse
          items={items}
          onChange={onChage}
          expandIcon={expandIcon}
          ghost={true}
        />
        <Collapse
          items={items}
          onChange={onChage}
          expandIcon={expandIcon}
          ghost={true}
        />
        <Collapse
          items={items}
          onChange={onChage}
          expandIcon={expandIcon}
          ghost={true}
        />
        <Collapse
          items={items}
          onChange={onChage}
          expandIcon={expandIcon}
          ghost={true}
        />
        <Collapse
          items={items}
          onChange={onChage}
          expandIcon={expandIcon}
          ghost={true}
        />
      </div>
    </>
  );
};
export default withRouter(Main);
