/* eslint-disable react/prop-types */
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
