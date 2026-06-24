import React from "react";
import { testimonials } from "../data/content";
import { IconStar } from "./Icons";
import SafeImage from "./SafeImage";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-header__eyebrow">Testimonials</span>
          <h2 className="section-header__title">Stories from our travelers</h2>
          <p className="section-header__desc">
            Real experiences from people who've explored the world with Next Trip Travel.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <article key={item.id} className="testimonial-card">
              <div className="testimonial-card__stars">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <IconStar key={i} filled />
                ))}
              </div>
              <blockquote className="testimonial-card__text">
                "{item.text}"
              </blockquote>
              <div className="testimonial-card__author">
                <SafeImage
                  src={item.avatar}
                  alt={item.name}
                  className="testimonial-card__avatar"
                  seed={item.seed}
                />
                <div>
                  <span className="testimonial-card__name">{item.name}</span>
                  <span className="testimonial-card__role">{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
