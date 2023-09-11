import { pelak } from "../assets/pelak";
import { motorPelak } from "../assets/motorPelak";
import { editIcon, deleteIcon } from "../assets/icons";
import { justToEnglish, justToFarsi } from "../util/translateDigit";
export const PelakSetting = ({ onDelete, onEdit, onSelect, type, value }) => {
  return (
    <div className="PelakSetting">
      <div className="PelakSetting__title">
        {type ? "موتور من" : "ماشین من"}
      </div>
      <div className="PelakSetting__setting">
        <div className="PelakSetting__edit" onClick={onEdit}>
          {editIcon}
        </div>
        <div className="PelakSetting__remove" onClick={onDelete}>
          {deleteIcon}
        </div>
      </div>
      <div className="PelakSetting__pelak">
        <div className="mypelak__pelak" onClick={onSelect}>
          {type ? <PelakMotor value={value} /> : <PelakCar value={value} />}
        </div>
      </div>
    </div>
  );
};

export const PelakMotor = ({ value = [] }) => {
  return (
    <div className="PelakMotor">
      <div className="PelakMotor__background"> {motorPelak} </div>
      <div className="PelakMotor__content">
        <div></div>
        <span>{justToFarsi(value[0])}</span>
        <span> {justToFarsi(value[1])} </span>
      </div>
    </div>
  );
};
export const PelakCar = ({ value = [] }) => {
  return (
    <div className="PelakCar">
      <div className="PelakCar__background"> {pelak} </div>
      <div className="PelakCar__content">
        <div></div>
        <span> {justToFarsi(value[0])} </span>
        <span> {justToFarsi(value[1])} </span>
        <span> {justToFarsi(value[2])} </span>
        <span className="PelakCar__lastcol"> {justToFarsi(value[3])} </span>
      </div>
    </div>
  );
};
