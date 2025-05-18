import React, { useEffect, useState } from 'react';
import Timeline from './Timeline';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/ai-history')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div className="app-root">
      <div className="app-container">
        <Timeline events={events} />
      </div>
    </div>
  );
}

export default App;