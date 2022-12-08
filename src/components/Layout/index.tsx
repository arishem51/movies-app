import { Layout as LayoutANTD } from "antd";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Layout = () => {
  return (
    <LayoutANTD>
      <Header />
      <Outlet />
      <Footer />
    </LayoutANTD>
  );
};
export default Layout;
