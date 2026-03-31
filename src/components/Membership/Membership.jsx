import { useNavigate } from "react-router-dom";
import "./Membership.css";

function Membership() {
    const navigate = useNavigate();

    return (
        <div className="membership">
            <div className="box">
                <h2>Ready to Start Your Chess Journey ?</h2>

                <p>
                    Join hundreds of students who have improved their game with us.
                </p>

                <button onClick={() => navigate("/membership")}>
                    View Membership Plans → 
                </button>
            </div>
        </div>
    );
}

export default Membership;