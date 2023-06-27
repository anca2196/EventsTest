import React, { useContext } from 'react';
import './next-event-card.scss';
import { getEventDate } from '../../../helpers/helpers';
import { EventContext } from '../../../EventsContext';

const NextEventCard = () => {
  const { nextEvent } = useContext(EventContext);
  const { title, image, startDate, type, speaker } = nextEvent;

  return (
    <div className="next-event-card-container">
      <div className="next-event-card_top-section">
        <div className="next-event-card_image">
          <img src={image} alt="title" />
        </div>

        <div className="next-event-card_info">
          <p className="next-event-card_title">{title}</p>
          <p className="next-event-card_type">{type}</p>
          <p className="next-event-card_speaker">{speaker}</p>
        </div>
      </div>
      <p className="next-event-card_date">{getEventDate(startDate)}</p>
    </div>
  );
};

export default NextEventCard;
