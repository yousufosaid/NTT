import React, { useState } from "react";
import { IconArrowRight } from "./Icons";
import SafeImage from "./SafeImage";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section id="contact" className="newsletter">
      <div className="newsletter__bg">
        <SafeImage
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&h=800&q=80"
          alt="Mountain peaks"
          className="newsletter__bg-img"
          seed="ntt-newsletter"
        />
        <div className="newsletter__overlay" />
      </div>
      <div className="container newsletter__content">
        <div className="newsletter__card">
          <span className="newsletter__badge">NTT Insider</span>
          <h2 className="newsletter__title">Ready for your next adventure?</h2>
          <p className="newsletter__desc">
            Get exclusive deals, travel inspiration, and insider tips from Next Trip Travel.
          </p>
          {submitted ? (
            <p className="newsletter__success">
              Thank you! We'll send you our best travel deals soon.
            </p>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn--primary">
                Subscribe
                <IconArrowRight />
              </button>
            </form>
          )}
          <p className="newsletter__note">No spam, unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
