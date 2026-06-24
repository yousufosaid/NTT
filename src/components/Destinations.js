import React from "react";
import { destinations } from "../data/content";
import { IconStar, IconArrowRight } from "./Icons";
import SafeImage from "./SafeImage";

const Destinations = () => {
  return (
    <section id="destinations" className="section destinations">
      <div className="destinations__glow" aria-hidden="true" />
      <div className="container">
        <div className="section-header">
          <span className="section-header__eyebrow">Explore</span>
          <h2 className="section-header__title">Popular Destinations</h2>
          <p className="section-header__desc">
            Handpicked locations that travelers love. From iconic landmarks to hidden gems.
          </p>
        </div>

        <div className="destinations__grid">
          {destinations.map((dest, index) => (
            <article
              key={dest.id}
              className={`dest-card dest-card--animate ${index === 0 ? "dest-card--featured" : ""}`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="dest-card__image-wrap">
                <SafeImage
                  src={dest.image}
                  alt={dest.name}
                  className="dest-card__image"
                  seed={dest.seed}
                />
                <span className="dest-card__tag">{dest.tag}</span>
                <div className="dest-card__overlay" />
              </div>
              <div className="dest-card__body">
                <div className="dest-card__meta">
                  <span className="dest-card__country">{dest.country}</span>
                  <span className="dest-card__rating">
                    <IconStar filled />
                    {dest.rating}
                  </span>
                </div>
                <h3 className="dest-card__name">{dest.name}</h3>
                <div className="dest-card__footer">
                  <div className="dest-card__price">
                    <span className="dest-card__price-label">From</span>
                    <span className="dest-card__price-value">${dest.price}</span>
                    <span className="dest-card__duration">{dest.duration}</span>
                  </div>
                  <button className="dest-card__btn" aria-label={`Explore ${dest.name}`}>
                    <IconArrowRight />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="section-footer">
          <a href="#destinations" className="btn btn--outline">
            View All Destinations
            <IconArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
