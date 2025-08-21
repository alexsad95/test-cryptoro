import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver.js';
import { useAppStore } from '../../stores/appStore.js';
import ProductCard from '../UI/ProductCard/ProductCard.jsx';
import './PopularProducts.css';

const PopularProducts = () => {
  const { content } = useAppStore();
  const [elementRef, isIntersecting] = useIntersectionObserver();

  if (!content?.popularProducts) return null;

  const { title, categories, bannerTitle, bannerBackground } =
    content.popularProducts;

  return (
    <section
      ref={elementRef}
      className={`popular-products ${isIntersecting ? 'popular-products--visible' : ''}`}
    >
      <div className="popular-products__container">
        <h2 className="popular-products__title">{title}</h2>

        <div className="popular-products__grid">
          {/* Card A - left top */}
          <ProductCard
            title={categories[0].title}
            image={categories[0].image}
            gridArea="A"
          />

          {/* Card B - top middle */}
          <ProductCard
            title={categories[1].title}
            description={categories[1].description}
            gridArea="B"
          />

          {/* Card C - right top */}
          <ProductCard
            title={categories[2].title}
            image={categories[2].image}
            gridArea="C"
          />

          {/* Central banner D */}
          <div
            className="popular-products__banner popular-products__banner--area-d"
            style={{ backgroundImage: `url(${bannerBackground})` }}
          >
            <div className="popular-products__banner-content">
              <h3 className="popular-products__banner-title">{bannerTitle}</h3>
            </div>
          </div>

          {/* Card F - left bottom */}
          <ProductCard
            title={categories[3].title}
            image={categories[3].image}
            gridArea="F"
          />

          {/* Card G - middle bottom */}
          <ProductCard
            title={categories[4].title}
            description={categories[4].description}
            gridArea="G"
          />

          {/* Card P - right bottom */}
          <ProductCard
            title={categories[5].title}
            image={categories[5].image}
            gridArea="P"
          />
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
