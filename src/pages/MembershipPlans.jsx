import "./MembershipPlans.css";

function MembershipPlans() {
    return (
        <div className="plans">
            <h2>Membership Plans</h2>

            <div className="plan-container">

                <div className="plan-card">
                    <h3>Digital</h3>
                    <h1>$100 <span>/month</span></h1>

                    <ul>
                        <li>Unlimited Online group Lessons</li>
                        <li>Unlimited Online Tournaments</li>
                        <li>Opening Database Access</li>
                        <li>Video Coursee Access</li>
                    </ul>

                    <button>Login to Subscribe</button>
                </div>

                <div className="plan-card premium">
                    <h3>Grandmaster</h3>
                    <h1>$299 <span>/month</span></h1>

                    <ul>
                        <li>Digital Membership Included</li>
                        <li>In-Person Academy Access</li>
                        <li>Personalized Plan</li>
                        <li>Monthly Check-ins</li>
                        <li>Tournament Support</li>
                    </ul>
                    <button>Login to Subscribe</button>
                </div>
            </div>

            <div className="compare-section">
                <h2>Compare Plans</h2>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Features</th>
                            <th>Digital</th>
                            <th>Grandmaster</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Online Group Classes</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Homework & Puzzles</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Progress Tracking</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Initial 1-on-1 Assessment</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>15% Tournaments Discount</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>In-Person Group Classes</td>
                            <td>✖</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Monthly 1-on-1 Check-ins</td>
                            <td>✖</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Tournament Support</td>
                            <td>✖</td>
                            <td>✔</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MembershipPlans;