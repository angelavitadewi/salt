import { Banner } from '../component/Banner/Banner';
import { Slider } from '../component/Common/Slider/Slider';
import { CoreValues } from '../component/CoreValues/CoreValues';
import { Speciality } from '../component/Speciality/Speciality';

const listSlider = [
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
export const Home = (props) => {
  return (
    <>
      <Banner />
      <Slider content={listSlider} sliderRef={props.sliderRef} />
      <CoreValues valueRef={props.valueRef} />
      <Speciality perkRef={props.perkRef} />
    </>
  );
};
