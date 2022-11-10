import { Link } from "react-router-dom";
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
          <Link to="#" className="btn btn--full margin-right-sm margin-btm ">
            Start your order
          </Link>
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
