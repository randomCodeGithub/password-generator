import InputController from "../InputController/InputController";
import classes from "./PasswordSettings.module.css";
const PasswordSettings = ({
  checkboxes,
  passwordLength,
  handleChanges: { updateLength, updateCheckStatus },
}) => {
  return (
    <div className={classes.pwSettings}>
      <InputController
        text={"Password Length"}
        fieldType={"number"}
        handleChange={updateLength}
        value={passwordLength}
      />
      {checkboxes.map((checkbox) => (
        <InputController
          key={checkbox.id}
          id={checkbox.id}
          fieldType={"checkbox"}
          text={checkbox.name}
          handleChange={updateCheckStatus}
          value={checkbox.checked}
        />
      ))}
    </div>
  );
};
export default PasswordSettings;
