import './CoreValues.css';
import coreValues from '../../assets/coreValues.svg';
import { List } from './Subcomponent/List';

const listCoreValue = [
  {
    header: 'Dedication',
    desc: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maximeplaceat.',
  },
  {
    header: 'Intellectual Honesty',
    desc: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.',
  },
  {
    header: 'Curiosity',
    desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum delenitiatque.',
  },
];

export const CoreValues = ({ valueRef }) => {
  return (
    <div className='core-value-container' ref={valueRef}>
      <h1>Our Core Values</h1>
      <h3>
        Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas.
        Aliquet odio et lectus etiam sit.
        <br />
        <br /> In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.
      </h3>
      <List content={listCoreValue} />
      <img src={coreValues} className='coreValues' alt='coreValues' />
    </div>
  );
};
