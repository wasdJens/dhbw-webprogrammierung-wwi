import { useState } from "react";
import styles from "./beer-card.module.css";

export function BeerRatingSlider({ currentRating, onRatingSelect }) {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseEnter = (rating) => {
    setHoveredRating(rating);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (rating) => {
    onRatingSelect(rating);
  };

  const StarIcon = ({ filled }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`${styles.star} ${filled ? styles.filled : ""}`}
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );

  return (
    <div className={styles.ratingContainer}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(star)}
          role="button"
          aria-label={`Rate ${star} stars`}
        >
          <StarIcon filled={star <= (hoveredRating || currentRating)} />
        </span>
      ))}
    </div>
  );
}
