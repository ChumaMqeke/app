import React, { useState, useEffect } from 'react';

const Card = ({ cardKey, text, icon, btnText, btnLink, btnIcon, headerImg, sendInteraction }) => {
  const openUrl = (url, label) => {
    window.open(url, '_blank');
  };

  const headText = text.length > 30 ? text.substring(0, 30) + '...' : text;

  const headerSection = headerImg ? (
    <div style={{ backgroundImage: `url("${headerImg}")` }} className="carousel-bg-img">
      <img src={icon} height="40px" className="carousel-logo-img" />
    </div>
  ) : (
    <img src={icon} height="45px" className="mt-15" />
  );

  const marginClass = headerImg ? '30' : '15';

  return (
    <li className="carousel-card carousel-li" key={cardKey}>
      {headerSection}
      <div className={`carousel-card-text mt-${marginClass}`}>
        <p>{headText}</p>
      </div>
      <a className="carousel-card-outline" href='javascript:void(0)' onClick={() => openUrl(btnLink, btnText)}>
        {btnIcon && (
          <span>
            <img src={btnIcon} height="12px" /> &nbsp;{btnText}
          </span>
        )}
        {!btnIcon && <span>{btnText}</span>}
      </a>
    </li>
  );
};

const Carousel = ({ items, sendInteraction }) => {
  const cards = items.map((t, index) => (
    <Card
      key={index}
      cardKey={index}
      icon={t.icon}
      text={t.text}
      headerImg={t.headerImg}
      btnText={t.btnText}
      btnLink={t.btnLink}
      btnIcon={t.btnIcon}
      sendInteraction={sendInteraction}
    />
  ));

  useEffect(() => {
    document.documentElement.style.setProperty('--num', items.length);
  }, [items]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const carouselStyle = {
    transform: `translateX(-${(currentIndex / items.length) * 100}%)`,
  };

  return (
    <div className="carouselwrapper module-wrapper">
      <div className="ui">
        <button onClick={handlePrevClick} className="carousel-button carousel-prev">
          <span className="material-icons">&lsaquo;</span>
        </button>
        <button onClick={handleNextClick} className="carousel-button carousel-next">
          <span className="material-icons">&#8250;</span>
        </button>
      </div>
      <ul className="carousel" style={carouselStyle}>
        {cards}
      </ul>
    </div>
  );
}
export default Carousel;