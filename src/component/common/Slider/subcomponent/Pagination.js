import './Pagination.css';
export const Pagination = ({ total, current, handleChange }) => (
  <div className='pagination-container'>
    <div className='wrap-pagination-container'>
      <h2>{current}</h2>
      <h3>/{total}</h3>
    </div>
    <div className='wrap-pagination-container'>
      <button
        disabled={current === 1}
        onClick={() => {
          handleChange(false);
        }}
      >
        <i className='fa fa-arrow-left'></i>
      </button>
      <button
        disabled={current === total}
        onClick={() => {
          handleChange(true);
        }}
      >
        <i className='fa fa-arrow-right'></i>
      </button>
    </div>
  </div>
);
