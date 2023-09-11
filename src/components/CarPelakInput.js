import { pelak } from "../assets/pelak";
import { MaskedTextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { Select } from "antd";
import { alpha } from "../util/dropDownToFarsi";

const CarPelakInput = ({ onCompelete }) => {
  let save = {};
  const changeHandle = (type) => (e) => {
    save = { ...save, [type]: e.value || e };
    if (
      save[1]?.length === 2 &&
      save[2]?.length === 1 &&
      save[3]?.length === 3 &&
      save[4]?.length === 2
    ) {
      onCompelete(save);
    }
  };

  return (
    <div className="CarPelakInput">
      <div className="CarPelakInput__background">
        {" "}
        {pelak}
        <div className="CarPelakInput__content">
          <div></div>
          <MaskedTextBoxComponent
            style={{
              direction: "ltr",
              width: "100%",
              textAlign: "center",
              border: "0px",
              fontSize: "19px",
            }}
            cssClass="pelak__input"
            enableRtl={false}
            mask={"[0-9] [0-9]"}
            placeholder="1 2"
            onChange={changeHandle(1)}
          />
          <Select
            className="pelak__dropdown"
            rootClassName="pelak__dropdown"
            defaultValue="الف"
            onSelect={changeHandle(2)}
            style={{
              width: 120,
            }}
            options={alpha}
          />
          <MaskedTextBoxComponent
            style={{
              direction: "ltr",
              width: "100%",
              textAlign: "center",
              border: "0px",
              fontSize: "19px",
            }}
            cssClass="pelak__input"
            onChange={changeHandle(3)}
            enableRtl={false}
            mask={"[0-9] [0-9] [0-9]"}
            placeholder="3 4 5"
          />
          {/* <div className="CarPelakInput__lastcol"> */}
          <MaskedTextBoxComponent
            style={{
              direction: "ltr",
              width: "100%",
              textAlign: "center",
              border: "0px",
              fontSize: "1rem",
            }}
            cssClass="pelak__input--lastcol"
            enableRtl={false}
            onChange={changeHandle(4)}
            mask={"[0-9] [0-9]"}
            placeholder="6 7"
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default CarPelakInput;
