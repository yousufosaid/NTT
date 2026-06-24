import React from "react";
import { packages } from "../data/content";
import { IconArrowRight } from "./Icons";
import SafeImage from "./SafeImage";

const Packages = () => {
  return (
    <section id="packages" className="section packages">
      <div className="container">
        <div className="section-header section-header--light">
          <span className="section-header__eyebrow">Curated</span>
          <h2 className="section-header__title">Featured Packages</h2>
          <p className="section-header__desc">
            All-inclusive journeys designed for seamless travel. Flights, stays, and experiences bundled together.
          </p>
        </div>

        <div className="packages__grid">
          {packages.map((pkg) => (
            <article key={pkg.id} className="package-card">
              <div className="package-card__image-wrap">
                <SafeImage
                  src={pkg.image}
                  alt={pkg.title}
                  className="package-card__image"
                  seed={pkg.seed}
                />
                <span className="package-card__duration">{pkg.duration}</span>
              </div>
              <div className="package-card__body">
                <h3 className="package-card__title">{pkg.title}</h3>
                <p className="package-card__desc">{pkg.description}</p>
                <div className="package-card__includes">
                  {pkg.includes.map((item) => (
                    <span key={item} className="package-card__tag">{item}</span>
                  ))}
                </div>
                <div className="package-card__footer">
                  <div className="package-card__price">
                    <span className="package-card__price-label">From</span>
                    <span className="package-card__price-value">${pkg.price}</span>
                  </div>
                  <button className="btn btn--primary btn--sm">
                    View Details
                    <IconArrowRight />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
