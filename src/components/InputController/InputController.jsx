import CheckboxElement from "../CheckboxElement/CheckboxElement";
import NumberElement from "../Elements/NumberElement";
import classes from "./InputController.module.css";

const InputController = ({ fieldType, ...props }) => {
  const rest = { props };
  switch (fieldType) {
    case "checkbox":
      return <CheckboxElement classes={classes} {...props} />;

    case "number":
      return <NumberElement classes={classes} {...props} />;

    default:
      return null;
  }
};
export default InputController;
