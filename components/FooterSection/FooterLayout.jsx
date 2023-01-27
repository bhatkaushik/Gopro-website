import Footer from "./Footer/Footer";
import FooterSearchBar from "./footerSearchbarSection/FooterSearchBar";
import PreFooter from "./preFooter/PreFooter";

const FooterLayout = () => {
  return (
    <div>
      <PreFooter />
      <FooterSearchBar />
      <Footer />
    </div>
  );
};

export default FooterLayout;
