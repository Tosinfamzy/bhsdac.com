/* eslint-disable react/prop-types */

const WhiteContainer = ({ children, className }) => {
  return <div className={`bg-white ${className}`}>{children}</div>;
};
export default WhiteContainer;
