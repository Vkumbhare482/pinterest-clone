import React, { useState } from 'react';
import './news.css';

// Import images
import ceoImg from '../assets/ceo.jpg';
import news1 from '../assets/news1.png';
import news2 from '../assets/news2.png';
import news3 from '../assets/news3.png';
import news4 from '../assets/news4.png';
import news5 from '../assets/news5.png';
import news6 from '../assets/news6.png';
import news7 from '../assets/news7.png';
import news8 from '../assets/news8.png';
import news9 from '../assets/news9.png';
import news10 from '../assets/news10.png';
import news11 from '../assets/news11.png';
import news12 from '../assets/news12.png';
 import news13 from '../assets/news13.png';

const featuredArticles = [
  {
    id: 1,
    title: 'Pinterest Wedding Trends Report 2026: Maximum romance, modern individuality',
    date: '28 April 2026',
    image: news1,
  },
  {
    id: 2,
    title: 'Pinterest Spring Trend Report 2026: Personalisation is in bloom',
    date: '17 March 2026',
    image: news2,
  },
];

const allArticles = [
  {
    id: 1,
    title: "Pinterest's latest campaign wants you to live your life, not just scroll it.",
    date: '1 May 2026',
    tags: ['Ads', 'Company'],
    image: news1,
  },
  {
    id: 2,
    title: 'Pinterest Wedding Trends Report 2026: Maximum romance, modern individuality',
    date: '28 April 2026',
    tags: ['Trends'],
    image: news2,
  },
  {
    id: 3,
    title: 'With a new shoppable streaming series, people bring their Pinterest boards to life',
    date: '23 March 2026',
    tags: ['Creators', 'Company'],
    image: news3,
  },
  {
    id: 4,
    title: 'Pinterest Spring Trend Report 2026: Personalisation is in bloom',
    date: '17 March 2026',
    tags: ['Trends'],
    image: news4,
  },
  {
    id: 5,
    title: 'Pinterest Parenting Trend Report 2026: Raising screen-smart kids who seek real-world adventure',
    date: '24 February 2026',
    tags: ['Trends'],
    image: news5,
  },
  {
    id: 6,
    title: 'From Cool Blue to Persimmon: Meet the 2026 Pinterest Palette™',
    date: '14 January 2026',
    tags: ['Trends'],
    image: news6,
  },
  {
    id: 7,
    title: 'Pinterest Predicts™: Nonconformity, self-preservation, and escapism drive 21 trends for 2026',
    date: '9 December 2025',
    tags: ['Trends', 'Partnerships'],
    image: news7,
  },
  {
    id: 8,
    title: "Our 2024/2025 Ireland Gender Pay Gap Report",
    date: '28 November 2025',
    tags: ['Company'],
    image: news8,
  },
  {
    id: 9,
    title: "Pinterest's Festive Season Edit brings precision to festive shopping",
    date: '3 November 2025',
    tags: ['Ads', 'Creators', 'Trends'],
    image: news9,
  },
  {
    id: 10,
    title: 'Pinterest rolls out new tools to give users more control over GenAI content',
    date: '16 October 2025',
    tags: ['Product', 'Company'],
    image: news10,
  },
  {
    id: 11,
    title: 'Pinterest launches Top of Search ads and new advertising tools to drive visual shopping decisions',
    date: '25 September 2025',
    tags: ['Ads', 'Company', 'Product'],
    image: news11,
  },
  {
    id: 12,
    title: 'Pinterest rolls out in-app prompts to discourage phone distractions in UK schools',
    date: '3 September 2025',
    tags: ['Trust and safety'],
    image: news12,
  },
  {
    id: 13,
    title: 'Pinterest Presents: The Global Marketing Event of the Year — Operation: It\'s Possible',
    date: '20 August 2025',
    tags: ['Ads', 'Company'],
    image: news13,
  },
];

const categories = ['All', 'Ads', 'Company', 'Creators', 'Partnerships', 'Product', 'Trust and safety', 'Trends'];

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredArticles = activeCategory === 'All'
    ? allArticles
    : allArticles.filter(a => a.tags.includes(activeCategory));

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="newspage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <svg className="pinterest-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
          </svg>
          <span className="navbar-title">Newsroom</span>
        </div>
        <div className="navbar-links">
          <a href="#">Company</a>
          <a href="#">Impact</a>
          <a href="#">Press assets</a>
          <a href="#">Contact</a>
          <button className="search-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Featured News Carousel */}
      <section className="featured-section">
        <h2 className="featured-label">Featured news</h2>
        <div className="featured-carousel">
          <div
            className="featured-track"
            style={{ transform: `translateX(-${featuredIndex * 100}%)` }}
          >
            {featuredArticles.map((article) => (
              <div className="featured-card" key={article.id}>
                <div className="featured-text">
                  <h1 className="featured-title">{article.title}</h1>
                  <p className="featured-date">{article.date}</p>
                </div>
                <div className="featured-image-grid">
                  <img src={article.image} alt={article.title} className="featured-main-img" />
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-btn carousel-prev"
            onClick={() => setFeaturedIndex(i => Math.max(0, i - 1))}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button
            className="carousel-btn carousel-next"
            onClick={() => setFeaturedIndex(i => Math.min(featuredArticles.length - 1, i + 1))}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="articles-section">
        <div className="filter-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => { setActiveCategory(cat); setVisibleCount(9); }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {visibleArticles.map(article => (
            <article className="news-card" key={article.id}>
              <div className="news-card-img-wrap">
                <img src={article.image} alt={article.title} className="news-card-img" />
              </div>
              <div className="news-card-body">
                <h3 className="news-card-title">{article.title}</h3>
                <div className="news-card-meta">
                  <span className="news-card-date">{article.date}</span>
                  {article.tags.map(tag => (
                    <span className="news-card-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {visibleCount < filteredArticles.length && (
          <div className="load-more-wrap">
            <button className="load-more-btn" onClick={handleLoadMore}>Load more</button>
          </div>
        )}
      </section>

      {/* CEO Section */}
      <section className="ceo-section">
        <div className="ceo-image-wrap">
          <img src={ceoImg} alt="Pinterest CEO Bill Ready" className="ceo-img" />
        </div>
        <div className="ceo-text">
          <h2 className="ceo-heading">A word from our CEO</h2>
          <p className="ceo-description">
            Pinterest CEO Bill Ready shares why making the phone a 'one-stop shop' for secure, private and effective age verification is essential to protect teens online.
          </p>
          <button className="read-more-btn">Read more</button>
        </div>
      </section>

      {/* Looking for something else */}
      <section className="explore-section">
        <h2 className="explore-heading">Looking for something else?</h2>
        <div className="explore-cards">
          <div className="explore-card">
            <div className="explore-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
              </svg>
            </div>
            <a href="#" className="explore-link">For businesses <span>↗</span></a>
          </div>
          <div className="explore-card">
            <div className="explore-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </div>
            <a href="#" className="explore-link">For creators <span>↗</span></a>
          </div>
          <div className="explore-card">
            <div className="explore-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
              </svg>
            </div>
            <a href="#" className="explore-link">For investors <span>↗</span></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <svg className="footer-logo" viewBox="0 0 135 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="28" fontFamily="Georgia, serif" fontSize="30" fontStyle="italic" fill="#000">Pinterest</text>
            </svg>
            <button className="lang-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              English (UK) ▾
            </button>
          </div>
          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Quick links</h4>
              <a href="#">Press assets</a>
              <a href="#">Subscribe via RSS</a>
              <a href="#">Contact us</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#">About Pinterest</a>
              <a href="#">Careers</a>
              <a href="#">Investors</a>
            </div>
            <div className="footer-col">
              <h4>More from Pinterest</h4>
              <a href="#">Help Centre</a>
              <a href="#">Businesses</a>
              <a href="#">Creators</a>
              <a href="#">Developers</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Pinterest</span>
          <a href="#">Copyright and Trademark</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy and Cookies</a>
          <a href="#">Cookie preferences</a>
          <a href="#">Personalised ads</a>
        </div>
        <div className="footer-status">
          <a href="#">Pinterest status</a>
        </div>
      </footer>
    </div>
  );
};

export default NewsPage;