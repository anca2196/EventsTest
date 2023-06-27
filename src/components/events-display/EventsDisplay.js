import React, { useContext, useState, useEffect } from 'react';
import './events-display.scss';
import { EventContext } from '../../EventsContext';
import SmallEventCard from '../cards/small-cards/SmallEventCard';
import _ from 'lodash';

const EventsDisplay = () => {
  const { events, setEvents } = useContext(EventContext);
  const [eventsDisplayed, setEventsDisplayed] = useState(events);
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    if (sortType) {
      setEventsDisplayed(events.filter((event) => event.category === sortType));
      return;
    }
    setEventsDisplayed(events);
  }, [sortType]);

  return (
    <section className="events-display-container">
      <p className="events-display_title">Discover Upcoming Events:</p>
      <div className="events-display_sort-container">
        <p>Sort by: </p>
        <div
          className="sort-container_chip"
          onClick={() => {
            setSortType('coding');
          }}
        >
          Coding
        </div>
        <div
          className="sort-container_chip"
          onClick={() => {
            setSortType('social');
          }}
        >
          Social
        </div>
        <div
          className="sort-container_reset"
          onClick={() => {
            setSortType(null);
          }}
        >
          x
        </div>
      </div>

      <div className="events-buble-container">
        <div className="events-buble"></div>
        <div className="event-cards-container">
          {eventsDisplayed.map((event) => (
            <SmallEventCard
              key={event.id}
              {...event}
              subscribe={(id) => {
                const eventsCopy = events.map((item) => {
                  if (item.id === event.id) {
                    item.isSubscribed = !item.isSubscribed;
                  }
                  return item;
                });
                setEvents(eventsCopy);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsDisplay;
