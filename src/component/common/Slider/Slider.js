import { useState } from 'react';
import './Slider.css';
import { SliderContent } from './subcomponent/SliderContent';
import { Pagination } from './subcomponent/Pagination';

const list = [
  {
    header: 'Who we are',
    subheader: 'Technology Company',
    desc: 'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    header: 'What we do',
    subheader: 'Professional Brand Management',
    desc: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
  },
  {
    header: 'How we do',
    subheader: 'Strategize, Design, Collaborate',
    desc: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.',
  },
];

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
      <div className='slider-container'>
        {list
          .filter((item, index) => index === count)
          .map((item, index) => (
            <SliderContent {...item} />
          ))}
        <Pagination total={list.length} current={count + 1} handleChange={handleChangeSlider} />
      </div>
    </>
  );
};
