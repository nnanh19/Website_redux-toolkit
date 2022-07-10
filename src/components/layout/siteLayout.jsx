import {  Layout} from "antd";
import { Outlet } from "react-router-dom";
import FooterSite from "./partials/footerSite";
import HeaderSite from "./partials/headerSite";
const {  Content } = Layout;

const SiteLayout = () => {
  return (
    <Layout className="mainLayout">
      <HeaderSite />  
      <Content
        className="site-layout"
   
      >
          <Outlet />
      </Content>

      {/* <FooterSite /> */}
    </Layout>
  );
};

export default SiteLayout;
