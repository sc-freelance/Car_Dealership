import React, { useState } from "react";
import "./Styles/dealerregister.css";
import Header from "../Header/Header";

function DealerForm() {
  const [formData, setFormData] = useState({
    dealer_name: "",
    city: "",
    address: "",
    zip_code: "",
    state: "",
    review: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);

    try {
      const response = await fetch("http://127.0.0.1:8000/djangoapp/dealers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          dealer_name: "",
          city: "",
          address: "",
          zip_code: "",
          state: "",
          review: "",
        });
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert("Error adding dealer");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Header/>
      <div className="dealer-form-container">
        <div className="dealer-form-card">
          <div className="form-header">
            <h2>Add New Dealer</h2>
            <p>Fill in the details below to register a new dealer</p>
          </div>

          <form onSubmit={handleSubmit} className="dealer-form">
            <div className="input-row">
              <div className="form-group">
                <label className="form-label">Dealer Name</label>
                <input
                  type="text"
                  name="dealer_name"
                  className="form-input"
                  value={formData.dealer_name}
                  onChange={handleChange}
                  required
                  placeholder="Enter dealer name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">City</label>
                <input
                  type="text"
                  name="city"
                  className="form-input"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="Enter city"
                />
              </div>
            </div>

            <div className="input-row">
              <div className="form-group">
                <label className="form-label">Zip Code</label>
                <input
                  type="text"
                  name="zip_code"
                  className="form-input"
                  value={formData.zip_code}
                  onChange={handleChange}
                  required
                  placeholder="Enter zip code"
                />
              </div>
              <div className="form-group">
                <label className="form-label">State</label>
                <input
                  type="text"
                  name="state"
                  className="form-input"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  placeholder="Enter state"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Address</label>
              <textarea
                name="address"
                className="form-textarea"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Enter full address"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Review</label>
              <textarea
                name="review"
                className="form-textarea"
                value={formData.review}
                onChange={handleChange}
                required
                placeholder="Enter your review"
              />
            </div>

            <button
              type="submit"
              className={`submit-button ${isSubmitting ? "loading" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "" : "Add Dealer"}
            </button>

            {showSuccess && (
              <div className="success-message">
                ✓ Dealer added successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default DealerForm;
