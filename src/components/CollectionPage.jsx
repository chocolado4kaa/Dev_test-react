import { Header, Footer, HeroSection, Shop } from "./Components";

const CollectionPage = () => {
  return (
    <>
      <Header />
      <HeroSection BgClass="Collection_Bg" className="Container_OnlyTitle">
        <div className="HeroSection_title">
          <h3 className="S36_L46">Men’s Crew Necks</h3>
        </div>
      </HeroSection>
      <Shop />
      <Footer />
    </>
  );
};
export default CollectionPage;
