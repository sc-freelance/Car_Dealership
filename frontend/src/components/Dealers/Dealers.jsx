import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ ADD THIS
import Header from "../Header/Header";
import review_icon from "../assets/reviewicon.png";

function Dealers() {
  const [dealers, setDealers] = useState([]);
  const navigate = useNavigate(); // ✅ DEFINE navigate

  useEffect(() => {
    fetch("http://127.0.0.1:8000/djangoapp/dealers/")
      .then((response) => response.json())
      .then((data) => setDealers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <div>
        <h2>Dealers List</h2>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Dealer Name</th>
              <th>City</th>
              <th>Address</th>
              <th>Zip</th>
              <th>State</th>
              <th>Review Dealer</th>
            </tr>
          </thead>
          <tbody>
            {dealers.map((dealer) => (
              <tr key={dealer.id}>
                <td>{dealer.id}</td>

                {/* ✔️ Clickable dealer name */}
                <td
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => navigate(`/dealer/${dealer.id}/review`)}
                >
                  {dealer.dealer_name.charAt(0).toUpperCase() +
                    dealer.dealer_name.slice(1)}
                </td>

                <td>
                  {dealer.city.charAt(0).toUpperCase() + dealer.city.slice(1)}
                </td>
                <td>
                  {dealer.address.charAt(0).toUpperCase() + dealer.address.slice(1)}
                </td>
                <td>{dealer.zip_code}</td>
                <td>
                  {dealer.state.charAt(0).toUpperCase() + dealer.state.slice(1)}
                  </td>
                <td
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => navigate(`/dealer/${dealer.id}/review`)} // FIXED
                >
                  <img
                    style={{
                      width: "30px",
                    }}
                    src={review_icon}
                    alt=""
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dealers;
