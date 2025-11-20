// src/PostReview.js
import React, { useState } from "react";
import axios from "axios";

function PostReview() {
  const [formData, setFormData] = useState({
    car_make: "",
    car_model: "",
    dealer: "",
    reviewer_name: "",
    car_year: "",
    purchase_date: "",
    rating: "",
    comment: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitReview = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/djangoapp/reviews/", formData);
      alert("Review Submitted!");
    } catch (error) {
      console.log(error);
      alert("Error submitting review");
    }
  };

  return (
    <div>
      <h2>Add Review</h2>
      <input name="car_make" placeholder="Car Make ID" onChange={handleChange} />
      <input name="car_model" placeholder="Car Model ID" onChange={handleChange} />
      <input name="dealer" placeholder="Dealer ID" onChange={handleChange} />
      <input name="reviewer_name" placeholder="Your Name" onChange={handleChange} />
      <input name="car_year" placeholder="Car Year" onChange={handleChange} />
      <input type="date" name="purchase_date" onChange={handleChange} />
      <input name="rating" placeholder="Rating 1 to 5" onChange={handleChange} />
      <textarea name="comment" placeholder="Comment" onChange={handleChange} />
      <button onClick={submitReview}>Submit</button>
    </div>
  );
}

export default PostReview;
