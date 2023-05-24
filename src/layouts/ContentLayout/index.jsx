import { PropTypes } from "prop-types";
const ContentLayout = ({ children }) => {
  return (
    <div className=" content">
      {children}
    </div>
  );
};

ContentLayout.propTypes = {
  children: PropTypes.node,
};

export default ContentLayout;
