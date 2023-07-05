import './Footer.css';
import logoFooter from '../../assets/logoFooter.svg';
import footer from '../../assets/footer.svg';

export const Footer = (props) => {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-address'>
          <img src={logoFooter} alt='logoFooter' />
          <div className='footer-card'>
            <select name='departement'>
              <option value='tech'>TECHNOLOGY DEPARTMENT</option>
            </select>
            <h3>Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat</h3>
          </div>
        </div>
        <div className='footer-shape'>
          <img src={footer} alt='footer' className='footer-shape' />
          <div className='footer-end'>
            <h3
              onClick={() => {
                props.sliderRef.current.scrollIntoView();
              }}
            >
              Who We Are
            </h3>
            <h3
              onClick={() => {
                props.valueRef.current.scrollIntoView();
              }}
            >
              Our Values
            </h3>
            <h3
              onClick={() => {
                props.perkRef.current.scrollIntoView();
              }}
            >
              The Perks
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
