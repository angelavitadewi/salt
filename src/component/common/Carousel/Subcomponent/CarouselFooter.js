import './CarouselFooter.css';
export const CarouselFooter = ({ total, current, handleChange }) => (
  <div className='carousel-container'>
    <button
      disabled={current === 1}
      onClick={() => {
        handleChange(false);
      }}
    >
      <i className='fa fa-arrow-left'></i>
    </button>
    <div>
      {[...Array(total)].map((item, index) =>
        index + 1 === current ? <span className='dot active'></span> : <span className='dot'></span>,
      )}
    </div>
    <button
      disabled={current === total}
      onClick={() => {
        handleChange(true);
      }}
    >
      <i className='fa fa-arrow-right'></i>
    </button>
  </div>
);
