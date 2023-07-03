import './Banner.css';
import banner from '../../assets/banner.svg';
import bannerBg from '../../assets/bannerBg.svg';

export const Banner = () => {
  return (
    <div className='banner'>
      <img src={banner} className='banner' alt='banner' />
      <div className='banner-container'>
        <img src={bannerBg} className='bannerBg' alt='bannerBg' />
        <div className='banner-text'>
          <h1>Discover Your Wonder</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam.
          </h3>
        </div>
      </div>
    </div>
  );
};
