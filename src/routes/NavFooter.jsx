import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const NavFooter = () => {
  return (
    <>
      {/* The content renders inside nav and footer because react router 
      "Outlet" is in Navigation at the end */}
      <Navigation />
      <Footer />
    </>
  );
};

export default NavFooter;
