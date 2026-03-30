import { useState } from "react";
import "./Reviews.css";

function Reviews() {
    const reviews = [
        {
            name: "Priya Mohite",
            time: "2 weeks ago",
            text: "It's been over a year since my son joined AGCA and we love it so far. This is a great place for chess enthusiasts. Highly recommend."
        },
        {
            name: "Sanjay Gupta",
            time: "4 weeks ago",
            text: "AGCA is really fun to play chess at. You can do lessons with grandmasters and there's tournaments for all levels of chess players. The coaches are thorough with their teaching."
        },
        {
            name: "Gita Rathod",
            time: " 1 month ago",
            text: "Playing with people from different countries makes it exciting. Every game feels challenging"
        },
        {
            name: "Karan Desai",
            time: "2 days ago",
            text: "The interface is very clean and fast. I never face lag while playing blitz games. Feels very professional."
        },
        {
            name: "Jaime Arroyo",
            time: "5 weeks ago",
            text: "The daily puzzles keep me engaged. It's now part of my daily routine!"
        },
    ];

    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex(index === 0 ? reviews.length - 1 : index - 1);
    };

    const nextSlide = () => {
        setIndex(index === reviews.length - 1 ? 0 : index + 1);
    };

    return (
        <div className="reviews">
            <div className="rating">
                5.0 ★★★★★ <span>24 Google Reviews</span>
            </div>

            <h2>What Our Customers Say</h2>

            <div className="review-box">
                <button className="nav-btn left" onClick={prevSlide}>
                    ❮
                </button>

                <div className="review-card">
                    <div className="review-header">
                        <div>
                            <h4>{reviews[index].name}</h4>
                            <p>★★★★★ {reviews[index].time}</p>
                        </div>
                    </div>

                    <p className="review-text">"{reviews[index].text}"</p>
                </div>

                <button className="nav-btn right" onClick={nextSlide}>
                    ❯
                </button>
            </div>

            {/* Dots */}
            <div className="dots">
                {reviews.map((_, i) => (
                    <span
                        key={i}
                        className={i === index ? "dot active" : "dot"}
                        onClick={() => setIndex(i)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Reviews;
