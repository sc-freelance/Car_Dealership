// src/AllReviews.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function AllReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/djangoapp/reviews/").then((res) => {
      setReviews(res.data);
    });
  }, []);

  return (
    <div>
      <h2>All Reviews</h2>
      {reviews.map((r) => (
        <div key={r.id}>
          <h3>{r.car_make} - {r.rating}⭐</h3>
          <p>{r.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default AllReviews;
