import HeroImage from "../assets/images/hero-min.png";
const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            We deliver your favourite foods into your door.Delivery within 30
            minutes
          </h1>
          <p className="hero-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            deleniti, consequatur esse molestias a debitis minima recusandae
            eveniet possimus.
          </p>
          <a href="#cta" className="btn btn--full margin-right-sm margin-btm ">
            Start eating well
          </a>

          {/* <div className="delivered-meals">
            <p className="delivered-text">
              <span> 250,000+</span> meals delivered last year!
            </p>
          </div> */}
        </div>
        <div className="hero-img-box">
          <picture>
            <img
              src={HeroImage}
              alt="Woman enjoying food, meals in stroage container, and food bowls on a table"
              className="hero-img"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
export default Hero;

