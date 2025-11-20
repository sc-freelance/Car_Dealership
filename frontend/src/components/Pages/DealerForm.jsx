import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Styles/dealerform.css";
import Header from "../Header/Header";

function DealerForm() {
  const { dealerId } = useParams();

  // ---------- FORM STATES ----------
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [carMake, setCarMake] = useState(1);
  const [carYear, setCarYear] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");

  // ---------- REVIEWS ----------
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch ALL reviews then filter locally
  useEffect(() => {
    fetch("http://127.0.0.1:8000/djangoapp/reviews/")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // Filter reviews for this dealer
  const filteredReviews = reviews.filter(
    (r) => String(r.dealer_name) === String(dealerId)
  );

  // Submit review
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://127.0.0.1:8000/djangoapp/dealer/${dealerId}/add-review/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        rating,
        comment,
        car_year: carYear,
        purchase_date: purchaseDate,
        car_make: carMake,
        dealer_name: dealerId,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Review Submitted Successfully!");

        // Reload ALL reviews then filter again
        fetch("http://127.0.0.1:8000/djangoapp/reviews/")
          .then((res) => res.json())
          .then((data) => setReviews(data));
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
    <Header/>
      <div className="dealer-review-container">
        {/* Header Section */}
        <div className="dealer-header">
          <h1>Dealer #{dealerId}</h1>
          <h2>Customer Reviews & Feedback</h2>
        </div>

        {/* Review Form Section */}
        <section className="review-form-section">
          <h2>Submit Your Review</h2>
          <form onSubmit={handleSubmit} className="review-form">
            <div className="form-group">
              <label className="review-form-label">Car Make ID</label>
              <input
                type="number"
                className="review-form-input"
                value={carMake}
                onChange={(e) => setCarMake(e.target.value)}
                required
                min="1"
              />
            </div>

            <div className="form-group">
              <label className="review-form-label">Car Year</label>
              <input
                type="date"
                className="review-form-input"
                value={carYear}
                onChange={(e) => setCarYear(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="review-form-label">Purchase Date</label>
              <input
                type="date"
                className="review-form-input"
                value={purchaseDate}
                onChange={(e) => setPurchaseDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="review-form-label">Rating (1–5)</label>
              <input
                type="number"
                className="review-form-input rating-input"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </div>

            <div className="form-group full-width">
              <label className="review-form-label">Your Review</label>
              <textarea
                className="review-form-textarea"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                placeholder="Share your experience with this dealer..."
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Submit Review
            </button>
          </form>
        </section>

        {/* Reviews Display Section */}
        <section className="reviews-section">
          <h2>Customer Reviews</h2>

          {loading ? (
            <div className="loading-state">Loading reviews...</div>
          ) : filteredReviews.length === 0 ? (
            <div className="empty-state">
              No reviews available for this dealer yet.
            </div>
          ) : (
            <div className="reviews-grid">
              {filteredReviews.map((r) => (
                <div key={r.id} className="review-card">
                  <div className="review-rating">{r.rating} ★</div>
                  <p className="review-comment">{r.comment}</p>
                  <div className="review-details">
                    <div className="review-detail">
                      <span className="detail-label">Car Make</span>
                      <span className="detail-value">{r.car_make}</span>
                    </div>
                    <div className="review-detail">
                      <span className="detail-label">Car Year</span>
                      <span className="detail-value">{r.car_year}</span>
                    </div>
                    <div className="review-detail">
                      <span className="detail-label">Purchase Date</span>
                      <span className="detail-value">{r.purchase_date}</span>
                    </div>
                    <div className="review-detail">
                      <span className="detail-label">Dealer ID</span>
                      <span className="detail-value">{r.dealer_name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default DealerForm;
