import classes from "./flexContainer.module.scss";

const FlexContainer = () => {
  return (
    <section className={classes.FlexContainer}>
      <div className={classes.AboutUs_Frame}>
        <FlexWrap
          className={classes.row}
          title="Our Company"
          source="src/assets/AboutUs/photos_right.png"
        >
          <p className="b2">
            GOpure was launched by Bloc Enterprises, a specialized distribution
            & marketing company introducing consumer products distinguished by
            innovation, technology and disruptive solutions to everyday problems
            that improve the health and well-being of people and pets. The
            company strives to practice sustainability principles in all
            operations and be a good steward of the earth.
          </p>
          <p className="b2">
            Like many amazing innovations, the inspiration for the GOpure Pod
            happened the instant its inventor in Ireland was determined to find
            a better solution after removing many dozens of used plastic water
            bottles from his car, most over half full. He was ashamed and
            disgusted by this wasteful consumption and inefficiency so he sought
            out world-renowned microbiologist, Dr Ronald Russell at Trinity
            College in Dublin, to help realize his vision of introducing a
            portable water purifier for everyday use and eliminate the need for
            single use plastic water bottles.
          </p>
        </FlexWrap>
        <FlexWrap
          className={classes["row-reverse"]}
          title="About PuriBloc"
          source="src/assets/AboutUs/photos_left.png"
        >
          <p className="b2">
            PuriBloc is the innovative water purification, preservation
            technology inside GOpure, a portable, environmentally friendly Pod
            that keeps drinking water clean and safe, while also greatly
            improving taste. Within seconds, contaminants found in ordinary tap
            water are neutralized and the pH balance is optimized for healthy
            hydration. Unlike carbon water filters that only work once, PuriBloc
            technology works continuously through a natural process known as
            ionic exchange and keeps pure water fresh and great tasting for
            months.
          </p>
          <p className="b2">
            The adsorptive power of GOpure’s advanced microporous ceramic core
            is mind-boggling due to the enormous surface area for its volume
            with which water can react. This high porosity surface area carries
            millions of negatively charged binding sites, which attract and
            adsorb heavy metals along with other chemical or organic impurities,
            including bacteria.
          </p>
          <p className="b2">
            The GOpure Pod is changing the way the world drinks water by
            continually purifying and enhancing your drinking water on the go
            while also helping to save our planet: using one GOpure Pod in a
            personal re-usable bottle replaces 2,000 single-use water bottles
            with zero plastic waste.
          </p>
        </FlexWrap>
      </div>
    </section>
  );
};
export default FlexContainer;

const FlexWrap = ({ className = "", children, ...props }) => {
  return (
    <div className={`${classes.FlexWrap} ${className}`}>
      <TextBlock {...props}>{children}</TextBlock>
      <ImageBlock {...props} />
    </div>
  );
};

const TextBlock = ({ title, children }) => {
  return (
    <div className={classes.TextBlock}>
      <div className={classes.title}>
        <h2 className="Headline">{title}</h2>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const ImageBlock = ({ source }) => {
  return (
    <div className={classes.ImageBlock}>
      <img src={source} alt="" />
    </div>
  );
};
