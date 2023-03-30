import classes from "./PasswordOutput.module.css";
const PasswordOutput = ({ pw }) => {
  return (
    <div className={classes.pwOutput}>
      <div className={classes.pw}>
        <span>{pw}</span>
      </div>
    </div>
  );
};
export default PasswordOutput;
