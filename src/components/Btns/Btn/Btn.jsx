import classes from "./Btn.module.css";
const Btn = ({ text, ...props }) => {
  return (
    <button {...props} className={classes.btn}>
      {text}
    </button>
  );
};
export default Btn;
