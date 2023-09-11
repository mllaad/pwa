import { back } from "../../assets/icons";
import { route } from ".";
import Header from "../../components/Header";
const ViolationPayment = ({ routeState, setRouteState }) => {
  const onCancel = () => null;

  return (
    <>
      <Header onBack={onCancel} title={"پرداخت شناسه با قبض"} />
    </>
  );
};

export default ViolationPayment;
