import React, { useContext } from 'react';
import NextEventCard from '../cards/next-event-card/NextEventCard';
import './hero.scss';
import { EventContext } from '../../EventsContext';

const HeroSection = () => {
  const { nextEvent } = useContext(EventContext);

  return (
    <div className="hero-section-container">
      <h1 className="hero_welcome-title">Welcome</h1>
      <p className="hero_subtitle">Your next event:</p>
      {nextEvent ? <NextEventCard /> : 'No upcoming event :('}
    </div>
  );
};

export default HeroSection;
