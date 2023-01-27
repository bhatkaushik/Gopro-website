import Footer from "./Footer/Footer";
import FooterSearchBar from "./footerSearchbarSection/FooterSearchBar";
import PreFooter from "./preFooter/PreFooter";

const FooterLayout = () => {
  return (
    <div>
      <PreFooter />
      <div className="spacerbar__short"></div>
      <FooterSearchBar />
      <Footer />
    </div>
  );
};

export default FooterLayout;
