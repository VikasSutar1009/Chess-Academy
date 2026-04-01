import "./AllCoaches.css";

function AllCoaches() {
    const Allcoaches = [
        {
            name: "GM R.B.Ramesh",
            PeakRating: "Peak USCF Rating 2530",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/R._B._Ramesh_in_January_2024.jpg/500px-R._B._Ramesh_in_January_2024.jpg",
            price: "$100 Per hour",
        },
        {
            name: "GM Susan Polgar",
            PeakRating: "Peak FIDE Rating 2577",
            img: "https://i0.wp.com/kingdomofchess.com/wp-content/uploads/2026/03/Susan-Polgar.webp?w=600&ssl=1",
            price: "$110 Per hour",
        },
        {
            name: "GM Pravin Thipsay",
            PeakRating: "Peak USCF Rating 2510",
            img: "https://globalprimenews.com/wp-content/uploads/2022/08/Beyond-Business-Pravin-Thipsay-at-GLIM-1.jpg",
            price: "$80 Per hour",
        },
        {
            name: "WIM Sakshi Chitlange",
            PeakRating: "Peak FIDE Rating 2299",
            img: "https://i0.wp.com/kingdomofchess.com/wp-content/uploads/2026/03/WIM-Sakshi-Chitlange.webp?w=600&ssl=1",
            price: "$100 Per hour",
        },
        {
            name: "GM Alex Mista",
            PeakRating: "Peak USCF Rating 2691",
            img: "https://randomuser.me/api/portraits/men/15.jpg",
            price: "$100 Per hour",
        },
        {
            name: "GM Alexander Shabalov",
            PeakRating: "Peak USCF Rating 2708",
            img: "https://saintlouischessclub.org/wp-content/uploads/2025/07/2025-US-Senior-Championship-GM-Alexander-Shabalov_-768x636.webp",
            price: "$90 Per hour",
        },
        {
            name: "GM Abhijit Kunte",
            PeakRating: "Peak USCF Rating 2560",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICn9JOM4VRSKxq802PK7Ox9zeuJ71QhvavQ&s",
            price: "$100 Per hour",
        },
        {
            name: "GM Srinath Narayanan",
            PeakRating: "Peak USCF Rating 2600",
            img: "https://media.licdn.com/dms/image/v2/D5603AQH4d3srwgbiOA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704461491057?e=2147483647&v=beta&t=miLupRYq1GhjdOjzj9hKAWFipJWt0vzWPwJmlh60Gn0",
            price: "$90 Per hour",
        },
    ];

    return (
        <div className="all-coaches">
            <h2>All coaches</h2>

            <input
            type="text"
            placeholder="Search coach by name..."
            className="search"
            />

            <div className="grid">
                {Allcoaches.map((coach, index) => (
                    <div className="coach-card" key={index}>
                        <img src={coach.img} alt={coach.name} />
                        <div className="info">
                            <h3>{coach.name}</h3>
                            <span>{coach.PeakRating}</span>
                            <h5>{coach.price}</h5>

                            <button className="book">Book a Lesson</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllCoaches;