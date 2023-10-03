import { Outlet } from "react-router-dom";

import { Fragment } from "react";
import NavBar from "../navbar/navbar.component";
import Footer from "../footer/footer.component";

const FooterNav = () => {
  return (
    <Fragment>
      <NavBar />

      <Outlet />
      
      <Footer />
    </Fragment>
  );
};

export default FooterNav;