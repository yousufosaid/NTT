import React from "react";

const cities = [
  "Santorini",
  "Kyoto",
  "Maldives",
  "Patagonia",
  "Marrakech",
  "Swiss Alps",
  "Bali",
  "Iceland",
  "Dubai",
  "New Zealand",
];

const DestinationTicker = () => {
  const track = [...cities, ...cities];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {track.map((city, i) => (
          <span key={`${city}-${i}`} className="ticker__item">
            <span className="ticker__dot" />
            {city}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DestinationTicker;
