import "./Home.css";
const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>
          Master Chess with <span>Grandmasters</span>
        </h1>

        <p>
          Learn from professional chess players with personalized coaching.
        </p>

        <div className="buttons">
          <button className="join">Join Now</button>
          <button className="coach">Meet Our Coaches</button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="card">
          <h2>500+</h2>
          <p>Students Trained</p>
        </div>

        <div className="card">
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>

        <div className="card">
          <h2>5</h2>
          <p>Grandmaster Coaches</p>
        </div>

        <div className="card">
          <h2>2600+</h2>
          <p>Highest Rating</p>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="coaches">
        <h2>Our Coaches</h2>
        <p>Learn from experienced instructors</p>
      </section>

    </div>
  );
};

export default Home;