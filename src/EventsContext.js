import { createContext, useEffect, useState } from 'react';
import { DummyData } from './constants/constants';
import _ from 'lodash';

const EventContext = createContext({});

const EventProvider = ({ children }) => {
  const [user, setUser] = useState('Cristi');
  const [events, setEvents] = useState(
    JSON.parse(sessionStorage.getItem('events')) || DummyData
  );
  const [nextEvent, setNextEvent] = useState(events[0]);

  useEffect(() => {
    const subsribedEvents = events.filter((item) => item.isSubscribed === true);
    subsribedEvents.sort(function (a, b) {
      return new Date(a.startDate) - new Date(b.startDate);
    });
    setNextEvent(subsribedEvents[0]);
    sessionStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  return (
    <EventContext.Provider
      value={{
        user,
        setUser,
        events,
        setEvents,
        nextEvent,
        setNextEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export { EventContext, EventProvider };
