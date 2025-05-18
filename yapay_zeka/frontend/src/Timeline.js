import React from 'react';
import './Timeline.css';

function Timeline({ events }) {
  return (
    <div>
      <h2 className="timeline-title">Yapay Zekâ Tarihçesi</h2>
      <div className="timeline-grid">
        {events.map((event, idx) => (
          <div
            className="timeline-card"
            key={event.year}
            style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
          >
            <div className="timeline-img-container">
              <img
                src={event.image}
                alt={event.title}
                className="timeline-img"
                loading="lazy"
              />
            </div>
            <div className="timeline-content">
              <div className="timeline-year">{event.year}</div>
              <div className="timeline-card-title">{event.title}</div>
              <p className="timeline-desc">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;