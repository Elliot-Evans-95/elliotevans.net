import * as React from 'react';
import { memo } from 'react';
import { Main } from '../../styles/styles';
import { AboutBanner } from './about.style';
import Helmet from 'react-helmet';
import AltCard from '../altCard';
import { IPageAbout } from '../../models/about.types';

interface IAbout {
  about: IPageAbout;
}

const About = (about: IAbout) => {
  const title = 'Elliot Evans - About';
  const desc = 'About Page';
  const keywords =
    'Front End Developer, Web Application Developer, Web Developer, Javascript Developer';

  return (
    <Main>
      <Helmet>
        <title>{title}</title>
        <meta name={'description'} content={desc} />
        <meta name={'keywords'} content={keywords} />
      </Helmet>
      <AboutBanner>
        <h1>About</h1>
      </AboutBanner>
      <AltCard about={about.about} />
    </Main>
  );
};

export default memo(About);
