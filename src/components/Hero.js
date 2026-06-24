import React from "react";
import { IconSearch, IconMapPin, IconCalendar, IconUsers } from "./Icons";
import { stats } from "../data/content";
import SafeImage from "./SafeImage";
import DestinationTicker from "./DestinationTicker";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg">
        <SafeImage
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Scenic lake and mountains"
          className="hero__bg-img"
          seed="ntt-hero"
          loading="eager"
        />
        <div className="hero__overlay" />
        <div className="hero__orbs" aria-hidden="true">
          <span className="hero__orb hero__orb--1" />
          <span className="hero__orb hero__orb--2" />
          <span className="hero__orb hero__orb--3" />
        </div>
      </div>

      <div className="container hero__content">
        <div className="hero__text">
          <span className="hero__badge">
            <span className="hero__badge-pulse" />
            Your next adventure starts here
          </span>
          <h1 className="hero__title">
            Travel the world with
            <span className="hero__title-accent"> Next Trip Travel</span>
          </h1>
          <p className="hero__subtitle">
            NTT curates bold journeys to 120+ destinations — expert planning,
            unforgettable memories, and experiences built around you.
          </p>
        </div>

        <div className="search-card">
          <form className="search-card__form" onSubmit={(e) => e.preventDefault()}>
            <div className="search-card__field">
              <label className="search-card__label">Destination</label>
              <div className="search-card__input-wrap">
                <IconMapPin />
                <input type="text" placeholder="Where do you want to go?" className="search-card__input" />
              </div>
            </div>
            <div className="search-card__field">
              <label className="search-card__label">Dates</label>
              <div className="search-card__input-wrap">
                <IconCalendar />
                <input type="text" placeholder="Check in — Check out" className="search-card__input" />
              </div>
            </div>
            <div className="search-card__field">
              <label className="search-card__label">Travelers</label>
              <div className="search-card__input-wrap">
                <IconUsers />
                <input type="text" placeholder="2 adults" className="search-card__input" />
              </div>
            </div>
            <button type="submit" className="btn btn--primary search-card__btn">
              <IconSearch />
              <span>Search Trips</span>
            </button>
          </form>
        </div>

        <DestinationTicker />

        <div className="hero__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
