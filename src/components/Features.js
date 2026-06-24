import React from "react";
import { features } from "../data/content";
import { IconGlobe, IconShield, IconHeart, IconClock } from "./Icons";
import SafeImage from "./SafeImage";

const featureIcons = [IconGlobe, IconClock, IconShield, IconHeart];

const Features = () => {
  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="features__layout">
          <div className="features__intro">
            <span className="section-header__eyebrow">Why NTT</span>
            <h2 className="section-header__title">Travel with peace of mind</h2>
            <p className="section-header__desc">
              We believe great travel should be effortless. From the moment you dream
              of a trip to the memories you bring home, Next Trip Travel is with you every step.
            </p>
            <div className="features__image-wrap">
              <SafeImage
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&h=600&q=80"
                alt="Traveler overlooking mountains"
                className="features__image"
                seed="ntt-features"
              />
              <div className="features__image-badge">
                <span className="features__badge-value">98%</span>
                <span className="features__badge-label">Customer satisfaction</span>
              </div>
            </div>
          </div>

          <div className="features__grid">
            {features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <div key={feature.title} className="feature-card">
                  <div className="feature-card__icon">
                    <Icon />
                  </div>
                  <h3 className="feature-card__title">{feature.title}</h3>
                  <p className="feature-card__desc">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
