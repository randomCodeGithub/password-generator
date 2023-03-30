import Btn from "./Btn/Btn";
import classes from "./Btns.module.css";

const Btns = ({
  isAllUnchecked,
  isPasswordEmpty,
  btnFuncs: { generatePassword, copyPassword },
}) => {
  return (
    <div className={classes.btns}>
      <Btn
        disabled={isAllUnchecked}
        text={"Generate"}
        onClick={generatePassword}
      />
      <Btn disabled={isPasswordEmpty} text={"Copy"} onClick={copyPassword} />
    </div>
  );
};
export default Btns;
