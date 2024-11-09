import { Header, Footer, HeroSection, Contacts } from "./Components";

const Contact = () => {
  return (
    <>
      <Header />
      <HeroSection BgClass="ContactUs_Bg" className="Container_OnlyTitle">
        <div className="HeroSection_title">
          <h1 className="Headline">Contact Us</h1>
        </div>
      </HeroSection>
      <Contacts />
      <Footer />
    </>
  );
};
export default Contact;
