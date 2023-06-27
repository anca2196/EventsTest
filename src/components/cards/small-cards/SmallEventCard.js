import React, { useState } from 'react';
import './small-event-card.scss';

const SmallEventCard = ({ title, id, image, subscribe, isSubscribed }) => {
  const [isChecked, setIsChecked] = useState(isSubscribed);

  const handleSubscribeClick = () => {
    setIsChecked((prev) => !prev);
    subscribe(id);
  };
  return (
    <div className="small-event-card-container">
      <div className="small-event-image">
        <img src={image} alt={title} />
      </div>

      <p>{title}</p>

      <span
        className={`fa fa-star unchecked ${isChecked ? 'checked' : 'unchecked'}`}
        onClick={handleSubscribeClick}
      ></span>
    </div>
  );
};

export default SmallEventCard;
