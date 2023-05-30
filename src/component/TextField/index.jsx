import { PropTypes } from "prop-types";

const TextField = ({ text, handleChange, name, value }) => {
  return (
    <input
      onChange={handleChange}
      value={value}
      className="input"
      placeholder={text}
      type="text"
      name={name}
    />
  );
};

TextField.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default TextField;
