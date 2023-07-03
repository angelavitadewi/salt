import './CarouselContent.css';

export const CarouselContent = ({ header, icon, desc, prev, next }) => (
  <div className='carousel-column'>
    <div className='carousel-row'>
      <div className='carousel-header-prev'>
        <div className='blur-left'></div>
        {prev && <img src={prev} alt={header} />}
      </div>

      <div className='carousel-header'>
        <img src={icon} alt={header} />
        <h3>{header}</h3>
      </div>

      <div className='carousel-header-next'>
        <div className='blur-right'></div>
        {next && <img src={next} alt={header} />}
      </div>
    </div>

    <h3>{desc}</h3>
  </div>
);
