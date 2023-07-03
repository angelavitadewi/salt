import { useState } from 'react';
import './Slider.css';
import { SliderContent } from './Subcomponent/SliderContent';
import { Pagination } from './Subcomponent/Pagination';

export const Slider = ({ content }) => {
  const [count, setCount] = useState(0);

  const handleChangeSlider = (isNext) => {
    if (isNext) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      {content?.length && (
        <div className='slider-container'>
          {content
            .filter((item, index) => index === count)
            .map((item, index) => (
              <SliderContent {...item} />
            ))}
          <Pagination total={content.length} current={count + 1} handleChange={handleChangeSlider} />
        </div>
      )}
    </>
  );
};
