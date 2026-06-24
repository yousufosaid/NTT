import React from "react";
import Logo from "./Logo";

const footerLinks = {
  explore: [
    { label: "Destinations", href: "#destinations" },
    { label: "Packages", href: "#packages" },
    { label: "Travel Guides", href: "#" },
    { label: "Deals", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Safety", href: "#" },
    { label: "Cancellation", href: "#" },
    { label: "FAQ", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              <Logo variant="light" />
            </a>
            <p className="footer__tagline">
              Next Trip Travel — crafting extraordinary journeys since 2009. Your adventure starts here.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h4 className="footer__col-title">Explore</h4>
              {footerLinks.explore.map((link) => (
                <a key={link.label} href={link.href} className="footer__link">{link.label}</a>
              ))}
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Company</h4>
              {footerLinks.company.map((link) => (
                <a key={link.label} href={link.href} className="footer__link">{link.label}</a>
              ))}
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Support</h4>
              {footerLinks.support.map((link) => (
                <a key={link.label} href={link.href} className="footer__link">{link.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">&copy; {new Date().getFullYear()} Next Trip Travel (NTT). All rights reserved.</p>
          <div className="footer__legal">
            <a href="/privacy" className="footer__link">Privacy Policy</a>
            <a href="/terms" className="footer__link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
