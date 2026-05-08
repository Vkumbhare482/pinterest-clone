import React, { useState } from "react";
import "./create.css";

// Import hero images from assets folder
import hero1  from "../assets/hero1.jpg";
import hero2  from "../assets/hero2.jpg";
import hero3  from "../assets/hero3.jpg";
import hero4  from "../assets/hero4.jpg";
import hero5  from "../assets/hero5.jpg";
import hero6  from "../assets/hero6.jpg";
import hero7  from "../assets/hero7.jpg";
import hero8  from "../assets/hero8.jpg";
import hero9  from "../assets/hero9.jpg";
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

const PinterestLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 0C7.163 0 0 7.163 0 16c0 6.777 4.188 12.594 10.138 15.003-.14-1.26-.266-3.194.055-4.568.29-1.24 1.95-8.266 1.95-8.266s-.498-.996-.498-2.47c0-2.316 1.342-4.046 3.012-4.046 1.42 0 2.108 1.067 2.108 2.346 0 1.43-.912 3.571-1.382 5.554-.393 1.659.832 3.01 2.467 3.01 2.96 0 5.239-3.12 5.239-7.627 0-3.986-2.865-6.772-6.959-6.772-4.742 0-7.524 3.557-7.524 7.232 0 1.43.55 2.963 1.236 3.8a.497.497 0 01.115.476c-.126.522-.405 1.659-.46 1.89-.073.306-.244.37-.562.223-2.091-.974-3.4-4.035-3.4-6.495 0-5.284 3.838-10.135 11.07-10.135 5.813 0 10.328 4.142 10.328 9.681 0 5.777-3.642 10.424-8.696 10.424-1.699 0-3.298-.884-3.846-1.925l-1.046 3.903c-.379 1.459-1.402 3.288-2.087 4.4C13.39 31.863 14.682 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0z"
      fill="#E60023"
    />
  </svg>
);

const brandCards = [
  { img: hero14, label: "Harry" },
  { img: hero1,  label: "Solange Woods" },
  { img: hero2,  label: "Jones" },
  { img: hero15, label: "Monstera" },
  { img: hero3,  label: "Home Universal" },
  { img: hero16, label: "Stone" },
  { img: hero4,  label: "Magazine" },
  { img: hero17, label: "Publisher" },
  { img: hero5,  label: "Blog" },
];

const storyTabs = ["Creator", "Publisher", "Merchant"];
const whyTabs   = ["Reach", "Actionable", "Easy creation", "Longevity", "Positivity"];

const whyContent = {
  Reach: {
    heading: "Your audience is here",
    body: "Amplify your content to over half a billion people who use Pinterest every month to explore their passions. You'll find Millennials, sure, and Gen Z finding their next aesthetic — in fact, they're our fastest growing, most engaged audience.",
  },
  Actionable: {
    heading: "Content that drives action",
    body: "Pinterest users come with intent. They're planning, discovering and ready to act — making your content more likely to convert than on any other platform.",
  },
  "Easy creation": {
    heading: "Create with ease",
    body: "From quick Pins to full campaigns, Pinterest's creation tools are designed to be simple and powerful — so you can spend less time building and more time growing.",
  },
  Longevity: {
    heading: "Content that keeps working",
    body: "Unlike other platforms, Pins don't disappear. Your content continues to be discovered and shared for months — even years — after you post it.",
  },
  Positivity: {
    heading: "A more positive place",
    body: "Pinterest is uniquely positive. People come here to find inspiration, not arguments — giving your brand a safe, brand-friendly environment to thrive in.",
  },
};

const CreatePage = () => {
  const [activeStoryTab, setActiveStoryTab]   = useState("Creator");
  const [activeWhyTab,   setActiveWhyTab]     = useState("Reach");
  const [footnotesOpen,  setFootnotesOpen]    = useState(false);

  return (
    <div>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="nav-logo">
          <PinterestLogo />
          <span className="nav-logo-text">Create</span>
        </div>

        <div className="nav-links">
          <a href="#">For your brand</a>
          <a href="#">Get started</a>
          <a href="#">Features and tools</a>
          <a href="#">Resources</a>
          <a href="#">Blog</a>
        </div>

        <div className="nav-btns">
          <button className="btn-login">Log in</button>
          <button className="btn-signup">Sign up</button>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-images">
          <div className="hi hi-1"><img src={hero1}  alt="" /></div>
          <div className="hi hi-2"><img src={hero2}  alt="" /></div>
          <div className="hi hi-3"><img src={hero3}  alt="" /></div>
          <div className="hi hi-4"><img src={hero4}  alt="" /></div>
          <div className="hi hi-5"><img src={hero5}  alt="" /></div>
          <div className="hi hi-6"><img src={hero6}  alt="" /></div>
          <div className="hi hi-7"><img src={hero7}  alt="" /></div>
          <div className="hi hi-8"><img src={hero8}  alt="" /></div>
          <div className="hi hi-9"><img src={hero9}  alt="" /></div>
          <div className="hi hi-10"><img src={hero10} alt="" /></div>
        </div>

        <div className="hero-center">
          <h1>Where your content can thrive</h1>
          <p>On Pinterest, create with ease and grow your brand all in a more positive place.</p>
          <button className="hero-cta">Get started</button>
        </div>
      </section>

      {/* ===== WHAT'S NEW ===== */}
      <section className="whats-new">
        <span className="badge-new">What's new</span>
        <div className="news-grid">
          <div className="news-card">
            <div className="news-card-img">
              <img src={hero11} alt="Content calendar" />
            </div>
            <h3>Our 2026 calendar for all your content planning needs</h3>
            <a href="#">See calendar →</a>
          </div>
          <div className="news-card">
            <div className="news-card-img">
              <img src={hero12} alt="Instagram claiming" />
            </div>
            <h3>Introducing updates to Instagram account claiming and auto-publish</h3>
            <a href="#">Learn more →</a>
          </div>
          <div className="news-card">
            <div className="news-card-img">
              <img src={hero13} alt="Pinterest tips" />
            </div>
            <h3>Fundamentals and must-know tips for Pinterest</h3>
            <a href="#">Discover now →</a>
          </div>
        </div>
      </section>

      {/* ===== PINTEREST FOR YOUR BRAND ===== */}
      <section className="brand-section">
        <h2>Pinterest for your brand</h2>
        <p className="brand-sub">
          Empowering brands of all types—from personal to business—to reach their goals.
        </p>

        <div className="brand-scroll-wrap">
          <div className="brand-scroll">
            {brandCards.map((card, i) => (
              <div className="brand-card" key={i}>
                <img src={card.img} alt={card.label} />
                <div className="brand-card-label">
                  <span>{card.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="brand-types">
          <div className="brand-type">
            <h3>Content creators</h3>
            <p>For everyone who wants to share their ideas.</p>
            <ul>
              <li><strong>Grow and engage your audience</strong> with simple ways to create, customise and cross-post your content.</li>
              <li><strong>Make money</strong> with features to drive traffic to your own site or destination.</li>
            </ul>
            <a href="#">Explore Pinterest for creators →</a>
          </div>
          <div className="brand-type">
            <h3>Merchants</h3>
            <p>For shops and retailers of any size.</p>
            <ul>
              <li><strong>Increase sales or web conversions</strong> with shoppable content formats—and reach an audience that's ready to shop.</li>
              <li><strong>Build brand awareness</strong> with seamless solutions for scaling and optimising your organic content.</li>
            </ul>
            <a href="#">Explore Pinterest for merchants →</a>
          </div>
          <div className="brand-type">
            <h3>Publishers and media companies</h3>
            <p>For traditional, digital and everything in between.</p>
            <ul>
              <li><strong>Amplify your brand</strong> to the millions of deeply engaged people on Pinterest.</li>
              <li><strong>Grow your business</strong> with easy, efficient bulk creation tools.</li>
            </ul>
            <a href="#">Explore Pinterest for publishers and media companies →</a>
          </div>
        </div>
      </section>

      {/* ===== NOT SURE ===== */}
      <section className="not-sure">
        <h2>Not sure which is for you?</h2>
        <p>Dive into our features guides to see what works best for you and your brand.</p>
        <button className="btn-outline">Read the guides</button>
      </section>

      {/* ===== SUCCESS STORIES ===== */}
      <section className="success">
        <h2>Success stories</h2>
        <div className="success-inner">
          <div className="success-img">
            <img src={hero18} alt="Success story" />
          </div>
          <div className="success-right">
            <div className="story-tabs">
              {storyTabs.map((tab) => (
                <button
                  key={tab}
                  className={`story-tab${activeStoryTab === tab ? " active" : ""}`}
                  onClick={() => setActiveStoryTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <h3>How one UK creator boosts engagement with seasonal content</h3>
            <a href="#">Read the story →</a>
          </div>
        </div>
      </section>

      {/* ===== WHY PINTEREST ===== */}
      <section className="why">
        <h2>Why Pinterest</h2>

        <div className="why-tabs">
          {whyTabs.map((tab) => (
            <button
              key={tab}
              className={`why-tab${activeWhyTab === tab ? " active" : ""}`}
              onClick={() => setActiveWhyTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="why-content">
          <div className="why-left">
            <div className="circle-avatars">
              {[hero1, hero2, hero3, hero4, hero5, hero6].map((img, i) => (
                <img key={i} className="circle-av" src={img} alt="" />
              ))}
            </div>
            <div className="why-img-main">
              <img src={hero19} alt="Audience" />
            </div>
            <div className="profile-card">
              <div className="p-name">Nariah Hughes ✓</div>
              <div className="p-handle">
                nariahhughes.com · Style ideas from Nariah Hughes. Based in London.
              </div>
            </div>
          </div>

          <div className="why-right">
            <h3>{whyContent[activeWhyTab].heading}</h3>
            <p>{whyContent[activeWhyTab].body}</p>
          </div>
        </div>
      </section>

      {/* ===== GET STARTED CTA ===== */}
      <section className="get-started">
        <h2>Start creating on Pinterest</h2>
        <p className="sub2">
          Anyone can create and grow on Pinterest. Whether you're flying solo or part of a brand team. And it's free.
        </p>
        <p className="sub3">
          Anyone can create and grow on Pinterest. Whether you're flying solo or part of a brand team. And it's free.
        </p>
        <div className="cta-btns">
          <button className="btn-dark">Get started</button>
          <button className="btn-light">Create now</button>
        </div>
      </section>

      {/* ===== FOOTNOTES ===== */}
      <div className="footnotes">
        <div
          className="footnotes-toggle"
          onClick={() => setFootnotesOpen(!footnotesOpen)}
        >
          <strong>Footnotes</strong>
          <span>{footnotesOpen ? "−" : "+"}</span>
        </div>
        {footnotesOpen && (
          <div className="footnotes-body">
            <p>¹ Pinterest internal data, 2024.</p>
          </div>
        )}
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo-wrap">
            <div className="footer-wordmark">
              <span style={{ color: "#e60023" }}>P</span>interest
            </div>
            <button className="lang-btn">🌐 English (India) ▾</button>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>Quick links</h4>
              <a href="#">Trends to try this month</a>
              <a href="#">Creator newsletter</a>
              <a href="#">Pinterest Content Academy</a>
              <a href="#">FAQ</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#">About Pinterest</a>
              <a href="#">Newsroom</a>
              <a href="#">Careers</a>
              <a href="#">Investors</a>
            </div>
            <div className="footer-col">
              <h4>More from Pinterest</h4>
              <a href="#">Help Centre</a>
              <a href="#">Advertisers</a>
              <a href="#">Developers</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <span>© 2026 Pinterest</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Cookie preferences</a>
            <a href="#">Creator content privacy notice</a>
            <a href="#">Creator Code</a>
          </div>
          <div className="footer-follow">
            <span>Follow Pinterest Create</span>
            <a href="#" className="social-icon" aria-label="Pinterest">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="#E60023">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 6.777 4.188 12.594 10.138 15.003-.14-1.26-.266-3.194.055-4.568.29-1.24 1.95-8.266 1.95-8.266s-.498-.996-.498-2.47c0-2.316 1.342-4.046 3.012-4.046 1.42 0 2.108 1.067 2.108 2.346 0 1.43-.912 3.571-1.382 5.554-.393 1.659.832 3.01 2.467 3.01 2.96 0 5.239-3.12 5.239-7.627 0-3.986-2.865-6.772-6.959-6.772-4.742 0-7.524 3.557-7.524 7.232 0 1.43.55 2.963 1.236 3.8a.497.497 0 01.115.476c-.126.522-.405 1.659-.46 1.89-.073.306-.244.37-.562.223-2.091-.974-3.4-4.035-3.4-6.495 0-5.284 3.838-10.135 11.07-10.135 5.813 0 10.328 4.142 10.328 9.681 0 5.777-3.642 10.424-8.696 10.424-1.699 0-3.298-.884-3.846-1.925l-1.046 3.903c-.379 1.459-1.402 3.288-2.087 4.4C13.39 31.863 14.682 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreatePage;
