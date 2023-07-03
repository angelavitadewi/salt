import './Speciality.css';

import speedImprovement from '../../assets/speedImprovement.svg';
import accesories from '../../assets/accesories.svg';
import exhaust from '../../assets/exhaust.svg';
import { Carousel } from '../Common/Carousel/Carousel';

const listCarousel = [
  {
    header: 'Accesories',
    icon: accesories,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.',
  },
  {
    header: 'Speed Improvement',
    icon: speedImprovement,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.',
  },
  {
    header: 'Exhaust',
    icon: exhaust,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.',
  },
];
export const Speciality = () => {
  return (
    <div className='special-container'>
      <div className='special-card'>
        <h1>OUR SPECIALITY</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis
          nulla consequat. Sed commodo nunc sit amet congue aliquam.
        </h3>
      </div>
      <Carousel content={listCarousel} />
    </div>
  );
};
