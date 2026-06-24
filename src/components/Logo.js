import React from "react";

const Logo = ({ variant = "light" }) => {
  return (
    <span className={`logo logo--${variant}`}>
      <span className="logo__mark">NTT</span>
      <span className="logo__text">
        <span className="logo__name">Next Trip</span>
        <span className="logo__suffix">Travel</span>
      </span>
    </span>
  );
};

export default Logo;
