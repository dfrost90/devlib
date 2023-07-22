const FormRow = ({
  type,
  name,
  value,
  placeholder,
  required,
  handleChange,
  id,
  labelText,
}) => {
  return (
    <div className="form-row">
      {labelText && (
        <label className="form-label" htmlFor={id}>
          {labelText}
        </label>
      )}
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        className="form-input"
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
      />
    </div>
  );
};
export default FormRow;
