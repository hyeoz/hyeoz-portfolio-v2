import { useState } from 'react';

type CarouselPropsType = {
  images: any[];
};

export default function Carousel({ images }: CarouselPropsType) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onClickNextButton = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const onClickPrevButton = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="carousel-wrapper">
      <button onClick={onClickPrevButton} className="carousel-button">
        <img src="/svg/chevron.svg" alt="carousel-chevron-left" />
      </button>
      <div className="carousel-image-wrapper hide-scroll-bar">
        {images.map((img, index) => (
          <img
            src={img}
            className={[
              'carousel-image',
              index === currentSlide ? 'visible' : 'hidden',
            ].join(' ')}
            alt={`carousel-image-${index}`}
            key={`carousel-image-${index}`}
          />
        ))}
      </div>
      <button onClick={onClickNextButton} className="carousel-button">
        <img src="/svg/chevron.svg" alt="carousel-chevron-right" />
      </button>
    </div>
  );
}
