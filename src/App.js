import { useEffect, useState } from 'react';
import './App.scss';
import { EventProvider } from './EventsContext';
import EventsDisplay from './components/events-display/EventsDisplay';
import HeroSection from './components/hero/HeroSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="App">
      <EventProvider>
        {isLoading ? (
          <div className="app-loading">
            <div className="lds-dual-ring"></div>
          </div>
        ) : (
          <div className="app-content">
            <HeroSection />
            <EventsDisplay />
          </div>
        )}
      </EventProvider>
    </div>
  );
}

export default App;
