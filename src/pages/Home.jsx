import "./Home.css";
import Stats from "../components/Stats/Stats";
import Reviews from "../components/Reviews/Reviews";
function Home() {
  return (
    <div className="home">

      <section className="hero">
        <h1>
          Master Chess with <span>Grandmasters</span>
        </h1>

        <p>
          Our team is composed of professional chess players <br />
          who are experienced in teaching both kids and adults. <br />
          Elevate your game with personalized coaching.
        </p>

        <div className="buttons">
          <button className="join">Join Now</button>
          <button className="coach">Meet Our Coaches</button>
        </div>
      </section>

      <Stats />

      <Reviews />

    </div>
  );
};

export default Home;