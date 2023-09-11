import { back } from "../../assets/icons";
import { carTax, hightwayTax, payList, tehNorth } from "../../assets/tax/tax";

import Header from "../../components/Header";
import Icon from "../../components/Icon";
import withRouter from "../../util/withModalRouter";

const Taxes = (props) => {
  const onCancel = () => props.closeModal();

  const handle = (nextstate) => () => null;
  return (
    <>
      <Header onBack={onCancel} title={"پرداخت"} />
      <div className="grid__bill">
        <Icon icon={carTax} onClick={handle()} text={"عوارض خودرو"} />
        <Icon icon={hightwayTax} onClick={handle("")} text={"عوارض آزادراهی"} />
        <Icon icon={tehNorth} onClick={handle("")} text={"تهران-شمال"} />
        <Icon icon={payList} onClick={handle()} text={"لیست پرداخت ها"} />
      </div>
    </>
  );
};

export default withRouter(Taxes);
