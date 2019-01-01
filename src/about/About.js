// @flow

import React, { PureComponent } from 'react';
import { Main } from '../shared/styles/styles';
import { Helmet } from 'react-helmet';
import Banner from '../shared/components/Banner';
import AltCard from '../shared/components/AltCard';
import connect from 'react-redux/es/connect/connect';
import { AboutBanner } from './About.style';

const mapStateToProps = state => ({
  about: state.About
});

class AboutMe extends PureComponent {
  componentDidMount() {
    document.getElementById('root').style.backgroundImage = 'url(about.svg)';
  }

  render() {
    return (
      <Main>
        <Helmet>
          <title>Elliot Evans - About</title>
          <meta name="description" content="About Page" />
          <meta
            name="keywords"
            content="Front End Developer, Web Application Developer, Web Developer, Javascript Developer"
          />
        </Helmet>
        <AboutBanner>
          <Banner text={this.props.about.banner} />
        </AboutBanner>
        <AltCard text={this.props.about.card} image={this.props.about.image} />
      </Main>
    );
  }
}

const About = connect(mapStateToProps)(AboutMe);

export default About;
