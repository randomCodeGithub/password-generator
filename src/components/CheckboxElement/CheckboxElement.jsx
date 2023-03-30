import cn from "classnames";
const CheckboxElement = ({ text, id, handleChange, value, classes }) => {
  return (
    <div className={cn(classes.formControl, classes.checkbox)}>
      <input
        id={`checkbox-${id}`}
        type="checkbox"
        onChange={() => {
          handleChange(id);
        }}
        checked={value}
      />
      <label htmlFor={`checkbox-${id}`}>{text}</label>
    </div>
  );
};

export default CheckboxElement;
