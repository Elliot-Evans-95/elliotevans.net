import React from 'react';

import EEBanner from '../../components/banner/ee-banner';
import EECard from '../../components/card/ee-card';
import { Main } from '../../styles';
import PropTypes from 'prop-types';

const Home = () => {
  const text = [
    'Hello, this is Elliot Evans.',
    'Front-end Developer here...',
    'Example',
    'There would be a short description from one of my blog posts but instead here is some placeholder text'
  ];

  return (
    <Main>
      <section />
      <EEBanner text={text} />
      <EECard text={text} />
    </Main>
  );
};

// Home.defaultProps = {
//   text: text
// };

Home.propTypes = {
  something: PropTypes.object
};

export default Home;
