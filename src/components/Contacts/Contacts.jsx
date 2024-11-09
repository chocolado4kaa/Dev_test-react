import classes from "./contacts.module.scss";

const Contacts = () => {
  return (
    <section className={classes.contactsSection}>
      <div className={classes.contacts_wrap}>
        <div className={classes.textBox}>
          <p className="b1">
            We appreciate your business and want to ensure you are satisfied
            with your GOpure product! Please contact us with any questions you
            have about the product, or if we can help you in any way.
          </p>
        </div>
        <Container
          className={classes.email}
          image="src/assets/Contact/email1.svg"
        >
          <p className="b2">For customer support: </p>
          <p className="b2">For sales inquiries: </p>
          <p className="b2">For press inquiries: </p>
          <a href="mailto:contact@gopurepod.com" className="b2">
            contact@gopurepod.com
          </a>
          <a href="mailto:jim@blocenterprises.com" className="b2">
            jim@blocenterprises.com
          </a>
          <a href="mailto:info@blocenterprises.com" className="b2">
            info@blocenterprises.com
          </a>
        </Container>
        <Container
          className={classes.adress}
          image="src/assets/Contact/adress.svg"
        >
          <p className="b2">Mailing Address:</p>
          <a href="https://maps.app.goo.gl/W4hFfYooXiB7aAoE6" className="b2" target="_blank">
            Bloc Enterprises, LLC, 11 Grumman Hill Road, Suite 1A
          </a>
          <p className="b2">Wilton, CT 06897</p>
        </Container>
      </div>
    </section>
  );
};
export default Contacts;

const Container = ({ className, children, image }) => {
  return (
    <div className={classes.block}>
      <div className={className}>
        <div className={classes.imageBlock}>
          <img src={image} alt={className} />
        </div>
        <adress className={classes.textBlock}>{children}</adress>
      </div>
    </div>
  );
};
