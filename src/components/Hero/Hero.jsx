import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver.js';
import { useAppStore } from '../../stores/appStore.js';
import CardButton from '../UI/CardButton/CardButton.jsx';
import './Hero.css';

const Hero = () => {
  const { content } = useAppStore();
  const [elementRef, isIntersecting] = useIntersectionObserver();

  if (!content?.hero) return null;

  const {
    title,
    subtitle,
    ctaButton,
    stats,
    productsInfo,
    description,
    offers,
    cards,
  } = content.hero;
  const { title: offersTitle, offersBackground, productsOffers } = offers;

  return (
    <section
      ref={elementRef}
      className={`hero ${isIntersecting ? 'hero--visible' : ''}`}
    >
      <div className="hero__container">
        <div className="hero__info-content">
          {/* Block for content in ::after area */}
          <div className="hero__info-content-after">
            <div className="hero__info-content-after-text">
              <p>{description}</p>
            </div>
          </div>

          <div className="hero__info-content-first">
            {/* Hero Info Content */}
            <div className="hero__info">
              {/* Title and CTA Button */}
              <div className="hero__title-and-cta">
                <h1 className="hero__info-title">
                  {title}
                  <a href="#catalog" className="btn btn-primary btn-cta">
                    <svg
                      width="17"
                      height="17"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.56758 1.05523e-06L15.8568 0C16.4882 6.59524e-07 17 0.511848 17 1.14324L17 11.4324C17 12.0638 16.4882 12.5757 15.8568 12.5757C15.2254 12.5757 14.7135 12.0638 14.7135 11.4324V3.90327L1.61679 17L0 15.3832L13.0967 2.28648H5.56758C4.93619 2.28648 4.42434 1.77464 4.42434 1.14324C4.42434 0.511847 4.93619 1.05523e-06 5.56758 1.05523e-06Z"
                        fill="currentColor"
                      />
                    </svg>
                    {ctaButton}
                  </a>
                </h1>
                <p className="hero__info-subtitle">{subtitle}</p>
              </div>

              {/* Hero Info Bottom */}
              <div className="hero__info-bottom">
                {/* Stats */}
                <div className="stats">
                  {stats.map(stat => (
                    <div key={stat.id} className="stat-item">
                      <span className="stat-value">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Product Images */}
                <div className="products">
                  <div className="product-images">
                    {productsInfo.map(product => (
                      <div className="product-image">
                        <img src={product.image} alt={product.name} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Hero Offers Content */}
            <div
              className="hero__offers"
              style={{ backgroundImage: `url(${offersBackground})` }}
            >
              {/* Offers Title */}
              <div className="hero__offers-title">
                <div className="hero__offers-title-text">{offersTitle}</div>
                <div className="hero__offers-logo">
                  <svg
                    viewBox="0 0 71 44"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <path
                      d="M57.9006 11.741L70.998 0L63.101 17.2843H48.4243L39.9495 34.2992L36.9062 28.1015L45.0729 11.741L57.9006 11.741Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7.85844 17.2843L0 0L13.1359 11.7795L26.0022 11.7795L38.8299 37.5713L35.6326 44L22.5738 17.2843H7.85844Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              {/* Offers Content */}
              <div className="hero__offers-content">
                <div className="hero__offers-products-list">
                  {productsOffers.map(product => (
                    <div
                      key={product.id}
                      className="hero__offers-product hero__offers-product-content"
                    >
                      <div className="hero__offers-product-inner">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="hero__offers-product-image"
                        />
                        <div className="hero__offers-product-info">
                          <h3 className="hero__offers-product-name">
                            {product.name}
                          </h3>
                          <p className="hero__offers-product-price">
                            {product.price}
                          </p>
                        </div>
                      </div>
                      <div className="hero__offers-product-arrow">
                        <svg
                          width="17"
                          height="17"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 17 17"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.56758 1.05523e-06L15.8568 0C16.4882 6.59524e-07 17 0.511848 17 1.14324L17 11.4324C17 12.0638 16.4882 12.5757 15.8568 12.5757C15.2254 12.5757 14.7135 12.0638 14.7135 11.4324V3.90327L1.61679 17L0 15.3832L13.0967 2.28648H5.56758C4.93619 2.28648 4.42434 1.77464 4.42434 1.14324C4.42434 0.511847 4.93619 1.05523e-06 5.56758 1.05523e-06Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hero__info-content-second">
            {/* Hero Cards List */}
            <div className="hero__cards-list">
              {/* Left Block */}
              <div className="hero__cards-left">
                {/* First Card */}
                <div className="hero__card hero__first-card">
                  <div className="hero__card-header">
                    <span className="hero__card-title">{cards[0].title}</span>
                  </div>
                  <div className="hero__card-content">
                    <img
                      src={cards[0].image}
                      alt={cards[0].title}
                      className="hero__first-card-product-image"
                    />
                  </div>
                  <CardButton />
                </div>

                {/* Second Card */}
                <div
                  className="hero__card hero__second-card"
                  style={{ backgroundImage: `url(${cards[1].background})` }}
                >
                  <div className="hero__offers-title">
                    <div className="hero__offers-title-text">
                      {cards[1].title}
                    </div>
                    <div className="hero__offers-logo">
                      <svg
                        width="71"
                        height="44"
                        viewBox="0 0 71 44"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                      >
                        <path
                          d="M57.9006 11.741L70.998 0L63.101 17.2843H48.4243L39.9495 34.2992L36.9062 28.1015L45.0729 11.741L57.9006 11.741Z"
                          fill="currentColor"
                        />
                        <path
                          d="M7.85844 17.2843L0 0L13.1359 11.7795L26.0022 11.7795L38.8299 37.5713L35.6326 44L22.5738 17.2843H7.85844Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="hero__second-card-bottom">
                    <div className="hero__second-card-bottom-social-links">
                      {cards[1].socialLinks
                        .filter(link => !link.text)
                        .map(link => (
                          <a
                            key={link.id}
                            href={link.url}
                            className="hero__social-link"
                          >
                            {link.platform === 'Telegram' ? (
                              <svg
                                width="27"
                                height="21"
                                viewBox="0 0 27 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M24.699 0.18541C24.699 0.18541 27.1965 -0.723587 26.9876 1.4838C26.9188 2.3928 26.2946 5.57459 25.8086 9.01557L24.1436 19.2095C24.1436 19.2095 24.0048 20.7029 22.7557 20.9627C21.5073 21.2219 19.6341 20.0537 19.2869 19.7939C19.0092 19.5989 14.0837 16.6769 12.3493 15.2489C11.8633 14.8589 11.3079 14.0802 12.4187 13.1712L19.7028 6.67798C20.5353 5.89919 21.3678 4.08119 17.899 6.28858L8.18557 12.4566C8.18557 12.4566 7.07537 13.1064 4.99447 12.522L0.484254 11.223C0.484254 11.223 -1.18072 10.2492 1.66388 9.27537C8.60214 6.22378 17.1359 3.1074 24.6978 0.18541H24.699Z"
                                  fill="currentColor"
                                />
                              </svg>
                            ) : link.platform === 'YouTube' ? (
                              <svg
                                width="32"
                                height="24"
                                viewBox="0 0 32 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16 0C0.2752 0 0 1.36208 0 12C0 22.6379 0.2752 24 16 24C31.7248 24 32 22.6379 32 12C32 1.36208 31.7248 0 16 0ZM21.128 12.5205L13.944 15.787C13.3152 16.0706 12.8 15.7527 12.8 15.0764V8.92364C12.8 8.24883 13.3152 7.92935 13.944 8.21299L21.128 11.4795C21.7568 11.7662 21.7568 12.2338 21.128 12.5205Z"
                                  fill="currentColor"
                                />
                              </svg>
                            ) : (
                              link.text || link.platform
                            )}
                          </a>
                        ))}
                    </div>
                    {cards[1].socialLinks.find(l => l.text) ? (
                      <a
                        className="hero__social-email-link"
                        href={cards[1].socialLinks.find(l => l.text).url}
                      >
                        {cards[1].socialLinks.find(l => l.text).text}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Right Block */}
              <div className="hero__cards-right">
                {/* Third Card */}
                <div className="hero__card hero__third-card">
                  <div className="hero__offers-title">
                    <div className="hero__offers-title-third-text">
                      {cards[2].title}
                    </div>
                    <div className="hero__offers-logo-third">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_144)">
                          <path
                            d="M21.4786 10.8156L12.6832 19.611C11.6057 20.6885 10.1443 21.2938 8.62053 21.2938C7.09672 21.2938 5.63532 20.6885 4.55783 19.611C3.48033 18.5335 2.875 17.0721 2.875 15.5483C2.875 14.0245 3.48033 12.5631 4.55783 11.4856L13.3532 2.69024C14.0715 1.97191 15.0458 1.56836 16.0616 1.56836C17.0775 1.56836 18.0518 1.97191 18.7701 2.69024C19.4884 3.40857 19.892 4.38284 19.892 5.39871C19.892 6.41458 19.4884 7.38885 18.7701 8.10718L9.96519 16.9025C9.60602 17.2617 9.11889 17.4635 8.61096 17.4635C8.10302 17.4635 7.61589 17.2617 7.25672 16.9025C6.89756 16.5434 6.69578 16.0562 6.69578 15.5483C6.69578 15.0403 6.89756 14.5532 7.25672 14.194L15.3821 6.07822"
                            stroke="currentColor"
                            stroke-width="1.91411"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_144">
                            <rect
                              width="22.9693"
                              height="22.9693"
                              fill="white"
                              transform="translate(0.953125 0.242188)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div className="hero__third-card-bottom">
                    <div className="hero__third-card-bottom-button">
                      <a href="#read-more">
                        <svg
                          width="17"
                          height="17"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 17 17"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.56758 1.05523e-06L15.8568 0C16.4882 6.59524e-07 17 0.511848 17 1.14324L17 11.4324C17 12.0638 16.4882 12.5757 15.8568 12.5757C15.2254 12.5757 14.7135 12.0638 14.7135 11.4324V3.90327L1.61679 17L0 15.3832L13.0967 2.28648H5.56758C4.93619 2.28648 4.42434 1.77464 4.42434 1.14324C4.42434 0.511847 4.93619 1.05523e-06 5.56758 1.05523e-06Z"
                            fill="currentColor"
                          />
                        </svg>
                        {cards[2].buttonText}
                      </a>
                      <img
                        src={cards[2].image}
                        alt={cards[2].title}
                        className="hero__third-card-product-image"
                      />
                    </div>
                  </div>
                </div>

                <div className="hero__card hero__fourth-card">
                  <div className="hero__card-header">
                    <span className="hero__card-title">{cards[3].title}</span>
                  </div>
                  <div className="hero__card-content">
                    <img
                      src={cards[3].image}
                      alt={cards[3].title}
                      className="hero__fourth-card-product-image"
                    />
                  </div>
                  <CardButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
