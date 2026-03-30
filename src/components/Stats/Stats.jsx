import { useEffect, useState } from "react";
import "./Stats.css";
function Stats() {
    const [ students, setStudents] = useState(0);
    const [ years, setYears] = useState(0);
    const [ coaches, setCoaches] = useState(0);
    const [ rating, setRating] = useState(0);

    useEffect(() => {
        animateCount(setStudents, 500);
        animateCount(setYears, 10);
        animateCount(setCoaches, 5);
        animateCount(setRating, 2600);
    }, []);

    const animateCount = (setFunc, target) => {
        let start = 0 ;
        const duration = 2000;
        const increment = target / (duration /16);

        const timer = setInterval(() => {
            start += increment;

            if (start >= target) {
                setFunc(target);
                clearInterval(timer);
            } else {
                setFunc(Math.floor(start));
            }
        }, 16);
    }

    return(
        
      <div className="stats">
        <div className="card">
          <h2>{students}+</h2>
          <p>STUDENT TRAINED</p>
        </div>

        <div className="card">
          <h2>{years}+</h2>
          <p>YEAR EXPERIENCE</p>
        </div>

        <div className="card">
          <h2>{coaches}</h2>
          <p>GRANDMASTER COACHES</p>
        </div>

        <div className="card">
          <h2>{rating}+</h2>
          <p>HEIGHEST RATING </p>
        </div>
      </div>

    );
}

export default Stats;