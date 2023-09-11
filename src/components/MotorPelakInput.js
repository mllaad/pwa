import { MaskedTextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { motorPelak } from "../assets/motorPelak";

const MotorPelakInput = ({ onCompelete }) => {
  let save = {};
  const changeHandle = (type) => (e) => {
    save = { ...save, [type]: e.value || e };
    if (save[1]?.length === 3 && save[2]?.length === 4) {
      onCompelete(save);
    }
  };
  return (
    <div className="MotorPelakInput">
      <div className="MotorPelakInput__background">{motorPelak}</div>
      <div className="MotorPelakInput__content">
        <div></div>
        <MaskedTextBoxComponent
          style={{
            direction: "ltr",
            width: "100%",
            textAlign: "center",
            border: "0px",
            fontSize: "19px",
          }}
          cssClass="MotorPelakInput__input"
          enableRtl={false}
          mask={"[0-9]   [0-9]   [0-9]"}
          placeholder="1  2  3"
          onChange={changeHandle(1)}
        />
        <MaskedTextBoxComponent
          style={{
            direction: "ltr",
            width: "100%",
            textAlign: "center",
            border: "0px",
            fontSize: "19px",
          }}
          cssClass="MotorPelakInput__input"
          enableRtl={false}
          mask={"[0-9]   [0-9]   [0-9]   [0-9]"}
          placeholder="1  2  3  4"
          onChange={changeHandle(2)}
        />
      </div>
    </div>
  );
};

export default MotorPelakInput;
