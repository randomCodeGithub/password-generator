const NumberElement = ({ text, handleChange, classes, ...props }) => {
  return (
    <div className={classes.formControl}>
      <label>{text}</label>
      <input onChange={handleChange} {...props} type="number" />
    </div>
  );
};
export default NumberElement;
