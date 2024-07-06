import "./Hero.css";

const Hero = ({ gender }) => {
  return (
    <div className="hero-div">
      <img
        src={gender === "men" ? "/hero-men.webp" : "/hero-women.webp"}
        alt="hero"
      />
    </div>
  );
};

export default Hero;
