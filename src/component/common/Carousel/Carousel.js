import { useState } from 'react';
import './Carousel.css';
import { CarouselContent } from './Subcomponent/CarouselContent';
import { CarouselFooter } from './Subcomponent/CarouselFooter';

export const Carousel = ({ content }) => {
  const [count, setCount] = useState(0);

  const handleChangeCarousel = (isNext) => {
    if (isNext) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      {content?.length && (
        <div className='carousel-container'>
          {content
            .filter((item, index) => index === count)
            .map((item, index) => (
              <CarouselContent {...item} prev={content[count - 1]?.icon || ''} next={content[count + 1]?.icon || ''} />
            ))}
        </div>
      )}
      <div>
        <CarouselFooter total={content.length} current={count + 1} handleChange={handleChangeCarousel} />
      </div>
    </>
  );
};
