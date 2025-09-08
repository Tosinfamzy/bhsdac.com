/* eslint-disable react/prop-types */

const WhiteContainer = ({ children, className = "", textClass = "" }) => {
  return (
    <section className={`bg-white py-12 md:py-16 ${className}`}>
      <div className={`w-full max-w-7xl mx-auto px-4 ${textClass}`}>{children}</div>
    </section>
  );
};
export default WhiteContainer;
