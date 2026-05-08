import React, { useState, useEffect, useRef } from "react";
import "./business.css";

// Import hero images from assets folder
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";
import hero7 from "../assets/hero7.jpg";
import hero8 from "../assets/hero8.jpg";
import hero9 from "../assets/hero9.jpg";
import hero10 from "../assets/hero10.jpg";
import hero11 from "../assets/hero11.jpg";
import hero12 from "../assets/hero12.jpg";
import hero13 from "../assets/hero13.jpg";
import hero14 from "../assets/hero14.jpg";
import hero15 from "../assets/hero15.jpg";
import hero16 from "../assets/hero16.jpg";
import hero17 from "../assets/hero17.jpg";
import hero18 from "../assets/hero18.jpg";
import hero19 from "../assets/hero19.jpg";

// Pinterest Logo SVG
const PinterestLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

// LinkedIn Icon
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const BusinessPage = () => {
  const [activeTab, setActiveTab] = useState("Awareness");
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef(null);

  const tabs = ["Awareness", "Consideration", "Conversions"];

  const faqData = [
    { q: "How do I use Pinterest for business?" },
    { q: "What is a business account?" },
    { q: "Should I have a separate Pinterest account for my business?" },
    { q: "What are the benefits of using Pinterest for my business?" },
    { q: "Is it easy to sell on Pinterest?" },
  ];

  const brandLogos = [
    "LOUIS VUITTON",
    "American Express",
    "McDonald's",
    "MAC",
    "KitKat",
    "BACARDI",
    "Uber",
  ];

  const carouselSlides = [
    {
      label: "Your 2026 colour forecast",
      title: "Meet the 2026 Pinterest Palette™",
      cta: "See trending colours",
      images: [hero8, hero9, hero10, hero11],
    },
    {
      label: "Trending now",
      title: "Top picks for every lifestyle",
      cta: "Explore trends",
      images: [hero12, hero13, hero14, hero15],
    },
    {
      label: "Advertise smarter",
      title: "Reach audiences ready to act",
      cta: "Learn more",
      images: [hero16, hero17, hero18, hero19],
    },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-page">
      {/* ── NAVBAR ── */}
      <header className={`pb-nav${isScrolled ? " pb-nav--scrolled" : ""}`}>
        <div className="pb-nav__inner">
          <a href="#" className="pb-nav__brand">
            <PinterestLogo />
            <span className="pb-nav__brand-text">Business</span>
          </a>

          <nav className={`pb-nav__links${mobileMenuOpen ? " open" : ""}`}>
            <a href="#">About Pinterest</a>
            <a href="#">Create content</a>
            <a href="#">Advertise</a>
            <a href="#">News + insights</a>
            <a href="#">Resources</a>
          </nav>

          <div className="pb-nav__actions">
            <button className="pb-btn pb-btn--outline">Log in</button>
            <button className="pb-btn pb-btn--dark">Sign up</button>
            <button
              className="pb-nav__burger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* ── ANNOUNCEMENT BANNER ── */}
      <div className="pb-banner">
        <span>
          Pinterest Predicts™ is here: See the top trends for 2026.{" "}
          <a href="#">Explore trends →</a>
        </span>
      </div>

      {/* ── HERO ── */}
      <section className="pb-hero" ref={heroRef}>
        <div className="pb-hero__content">
          <h1 className="pb-hero__heading">Grow your business on Pinterest</h1>
          <p className="pb-hero__sub">
            Pinterest is where people discover new ideas, plan and shop. With
            Pinterest ads, you can reach your audience at every stage of the
            consumer journey. Sign up for a free business account to access ads
            and other marketing tools.
          </p>
          <div className="pb-hero__ctas">
            <button className="pb-btn pb-btn--dark pb-btn--lg">Sign up</button>
            <button className="pb-btn pb-btn--outline pb-btn--lg">
              Request meeting
            </button>
          </div>
        </div>

        <div className="pb-hero__pins">
          <div className="pb-hero__pin-col pb-hero__pin-col--left">
            <div className="pb-hero__pin">
              <img src={hero1} alt="Pin 1" />
            </div>
            <div className="pb-hero__pin pb-hero__pin--food">
              <img src={hero2} alt="Pin 2" />
            </div>
          </div>
          <div className="pb-hero__pin-col pb-hero__pin-col--center">
            <div className="pb-hero__pin pb-hero__pin--promoted">
              <img src={hero3} alt="Pin 3" />
              <div className="pb-hero__pin-label">
                <span className="pb-hero__pin-brand">BLUXOME</span>
                <p className="pb-hero__pin-caption">
                  Head-turning hair accessories
                </p>
                <p className="pb-hero__pin-promo">Promoted by Bluxome</p>
              </div>
            </div>
          </div>
          <div className="pb-hero__pin-col pb-hero__pin-col--right">
            <div className="pb-hero__pin pb-hero__pin--beauty">
              <img src={hero4} alt="Pin 4" />
              <div className="pb-hero__pin-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                </svg>
              </div>
            </div>
            <div className="pb-hero__pin pb-hero__pin--skate">
              <img src={hero5} alt="Pin 5" />
              <div className="pb-hero__pin-checkout">
                Checkouts{" "}
                <span role="img" aria-label="up">
                  📈
                </span>
              </div>
            </div>
          </div>
          <div className="pb-hero__pin-col pb-hero__pin-col--extra">
            <div className="pb-hero__pin pb-hero__conversion-api">
              <span className="pb-hero__api-dot" />
              Conversion API
            </div>
            <div className="pb-hero__pin">
              <img src={hero6} alt="Pin 6" />
            </div>
          </div>
        </div>
      </section>

      {/* ── NO.1 REASON SECTION ── */}
      <section className="pb-reason">
        <div className="pb-reason__inner">
          <div className="pb-reason__visual">
            <div className="pb-reason__card">
              <img src={hero7} alt="Headphones" className="pb-reason__img" />
              <div className="pb-reason__price-tag">
                <img src={hero7} alt="thumb" />
                <div>
                  <strong>£189</strong>
                  <p>Over-ear headphones</p>
                </div>
              </div>
              <button className="pb-reason__add-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                </svg>
                Add to basket
              </button>
            </div>
          </div>
          <div className="pb-reason__text">
            <h2>
              The No. 1 reason people use Pinterest is to find new products and
              brands<sup>1</sup>
            </h2>
            <div className="pb-reason__callout">
              <h3>A place where ads don't feel like ads</h3>
              <p>
                Weekly Pinterest users are more likely to say that ads feel
                relevant on Pinterest, compared to people using other
                platforms.<sup>2</sup> Because{" "}
                <a href="#">people on Pinterest</a> are here to take action, ads
                actually enhance their experience—they don't detract from it.
              </p>
              <div className="pb-reason__ctas">
                <button className="pb-btn pb-btn--dark">
                  How Pinterest works
                </button>
                <button className="pb-btn pb-btn--outline">
                  Learn about ads
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EFFECTIVE SOLUTIONS ── */}
      <section className="pb-solutions">
        <h2 className="pb-solutions__heading">Effective solutions for every goal</h2>
        <div className="pb-solutions__tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-solutions__tab${activeTab === tab ? " active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="pb-solutions__content">
          <div className="pb-solutions__mockup">
            <div className="pb-solutions__phone">
              <div className="pb-solutions__phone-inner">
                <div className="pb-solutions__search-bar">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#767676">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#767676" style={{ marginLeft: "auto" }}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                </div>
                <div className="pb-solutions__pin-img">
                  <img
                    src={
                      activeTab === "Awareness"
                        ? hero8
                        : activeTab === "Consideration"
                        ? hero9
                        : hero10
                    }
                    alt={activeTab}
                  />
                  <div className="pb-solutions__pin-overlay">
                    <p>Explore unique destinations all over the world</p>
                    <button>Visit</button>
                  </div>
                </div>
                <div className="pb-solutions__dots">
                  {[0, 1, 2, 3, 4].map((d) => (
                    <span
                      key={d}
                      className={`pb-solutions__dot${d === 0 ? " active" : ""}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pb-solutions__info">
            {activeTab === "Awareness" && (
              <>
                <h3>Build awareness</h3>
                <p>
                  Grow your reach and build brand or product awareness. Formats
                  such as image ads, Idea ads or Premiere Spotlight videos can
                  help to tell your story and connect with new customers.
                </p>
              </>
            )}
            {activeTab === "Consideration" && (
              <>
                <h3>Drive consideration</h3>
                <p>
                  Engage people who are actively exploring and planning. Use
                  shopping ads, carousel ads, and collection ads to inspire
                  action and keep your brand top-of-mind.
                </p>
              </>
            )}
            {activeTab === "Conversions" && (
              <>
                <h3>Boost conversions</h3>
                <p>
                  Turn inspiration into action. Pinterest's conversion
                  optimisation tools help you reach people who are most likely
                  to complete a purchase or take a specific action on your site.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── BRANDS WIN BIG ── */}
      <section className="pb-brands">
        <h2>Brands win big with Pinterest ads</h2>
        <p>
          Brands such as Nestlé, Urban Outfitters and CeraVe are already using
          Pinterest to reach their goals. Explore our success story section to
          see how brands have achieved results for a variety of objectives.
        </p>
        <div className="pb-brands__ctas">
          <button className="pb-btn pb-btn--dark pb-btn--lg">
            Read success stories
          </button>
          <button className="pb-btn pb-btn--outline pb-btn--lg">Sign up</button>
        </div>
        <div className="pb-brands__logos">
          {brandLogos.map((b) => (
            <span key={b} className="pb-brands__logo">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* ── CAROUSEL (Pinterest Palette) ── */}
      <section className="pb-carousel">
        <div className="pb-carousel__slide">
          <div className="pb-carousel__text">
            <p className="pb-carousel__label">
              {carouselSlides[carouselIndex].label}
            </p>
            <h2 className="pb-carousel__title">
              {carouselSlides[carouselIndex].title}
            </h2>
            <button className="pb-btn pb-btn--dark pb-btn--lg">
              {carouselSlides[carouselIndex].cta}
            </button>
          </div>
          <div className="pb-carousel__images">
            {carouselSlides[carouselIndex].images.map((img, i) => (
              <div key={i} className={`pb-carousel__img pb-carousel__img--${i}`}>
                <img src={img} alt={`Slide ${carouselIndex + 1} image ${i + 1}`} />
              </div>
            ))}
            <div className="pb-carousel__blob pb-carousel__blob--blue" />
            <div className="pb-carousel__blob pb-carousel__blob--yellow" />
            <div className="pb-carousel__blob pb-carousel__blob--red" />
          </div>
        </div>
        <div className="pb-carousel__nav">
          {carouselSlides.map((_, i) => (
            <button
              key={i}
              className={`pb-carousel__dot${carouselIndex === i ? " active" : ""}`}
              onClick={() => setCarouselIndex(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── BUSINESS ACCOUNT ── */}
      <section className="pb-account">
        <div className="pb-account__inner">
          <div className="pb-account__visual">
            <div className="pb-account__promote-card">
              <img src={hero11} alt="Promote" />
              <button className="pb-account__promote-btn">Promote</button>
              <div className="pb-account__pin-brand">BLUXOME</div>
            </div>
          </div>
          <div className="pb-account__text">
            <h2>It all starts with a business account</h2>
            <p>
              A business account unlocks our full suite of business tools, such
              as ads and analytics. It's free to sign up, and easy to get
              started.
            </p>
            <div className="pb-account__ctas">
              <button className="pb-btn pb-btn--dark pb-btn--lg">Sign up</button>
              <button className="pb-btn pb-btn--outline pb-btn--lg">
                Create ad
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESOURCES ── */}
      <section className="pb-resources">
        <h2>Resources to guide you</h2>
        <div className="pb-resources__grid">
          <div className="pb-resources__card">
            <div className="pb-resources__icon pb-resources__icon--green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
              </svg>
            </div>
            <h3>Get a free ads consultation</h3>
            <p>
              Whether you're new to Pinterest ads or hoping to optimise existing
              campaigns, we're here to help. Talk to our account team for
              personalised tips and new campaign ideas.
            </p>
            <a href="#">Request meeting →</a>
          </div>
          <div className="pb-resources__card">
            <div className="pb-resources__icon pb-resources__icon--teal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <h3>Join our newsletter</h3>
            <p>
              Receive regular updates about Pinterest products, insights and
              programming.
            </p>
            <a href="#">Subscribe →</a>
          </div>
          <div className="pb-resources__card">
            <div className="pb-resources__icon pb-resources__icon--salmon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
              </svg>
            </div>
            <h3>Explore our free learning platform</h3>
            <p>
              Pinterest Academy offers tactical, in-depth training—powered by
              our in-house experts. You can take courses, watch webinars or earn
              badges to show off your skills. Get more from your advertising and
              grow your success.
            </p>
            <a href="#">Enrol now ↗</a>
          </div>
        </div>
      </section>

      {/* ── GET STARTED CTA ── */}
      <section className="pb-cta">
        <h2>Get started today</h2>
        <button className="pb-btn pb-btn--dark pb-btn--xl">Sign up</button>
      </section>

      {/* ── FAQ ── */}
      <section className="pb-faq">
        <div className="pb-faq__inner">
          {faqData.map((item, i) => (
            <div
              key={i}
              className={`pb-faq__item${openFaq === i ? " open" : ""}`}
            >
              <button
                className="pb-faq__q"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="pb-faq__icon">{openFaq === i ? "×" : "+"}</span>
              </button>
              {openFaq === i && (
                <div className="pb-faq__a">
                  <p>
                    For more detailed information about this topic, please visit
                    our Help Centre or contact our support team.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTNOTES ── */}
      <section className="pb-footnotes">
        <button
          className="pb-footnotes__toggle"
          onClick={() => setOpenFaq(openFaq === 99 ? null : 99)}
        >
          <span>Footnotes</span>
          <span>{openFaq === 99 ? "×" : "+"}</span>
        </button>
      </section>

      {/* ── FOOTER ── */}
      <footer className="pb-footer">
        <div className="pb-footer__top">
          <div className="pb-footer__brand">
            <div className="pb-footer__logo">
              <PinterestLogo />
              <span>Pinterest</span>
            </div>
            <div className="pb-footer__lang">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              English (UK) ▾
            </div>
          </div>
          <div className="pb-footer__cols">
            <div className="pb-footer__col">
              <h4>Quick links</h4>
              <a href="#">Business newsletter</a>
              <a href="#">Business community</a>
              <a href="#">Brand guidelines</a>
            </div>
            <div className="pb-footer__col">
              <h4>Company</h4>
              <a href="#">About Pinterest</a>
              <a href="#">Newsroom</a>
              <a href="#">Careers</a>
              <a href="#">Investors</a>
            </div>
            <div className="pb-footer__col">
              <h4>More from Pinterest</h4>
              <a href="#">Help Centre</a>
              <a href="#">Creators</a>
              <a href="#">Developers</a>
            </div>
          </div>
        </div>
        <div className="pb-footer__bottom">
          <span>© 2026 Pinterest</span>
          <a href="#">Terms of Service</a>
          <a href="#">Copyright and Trademark</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies Policy</a>
          <a href="#">Cookie preferences</a>
          <a href="#">Personalised ads</a>
          <a href="#">Pinterest status</a>
          <div className="pb-footer__social">
            <span>Follow Pinterest Business</span>
            <a href="#" aria-label="Pinterest">
              <PinterestLogo />
            </a>
            <a href="#" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BusinessPage;