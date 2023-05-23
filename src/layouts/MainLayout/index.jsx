import { PropTypes } from "prop-types";
const MainLayout = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
