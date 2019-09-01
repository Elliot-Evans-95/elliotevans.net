// @flow

import React, { PureComponent } from 'react';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SkillGrid } from './Skills.style';
import SkillList from './SkillsList';
import Blobs from '../blobs/Blobs';
import { Meta } from '../meta/meta';

class Skills extends PureComponent {
  heading = 'Skills';
  subHeading = 'Experience on Languages, Frameworks and Tools';

  componentDidMount() {
    const title = 'Elliot Evans - Skills';
    const desc = 'Skills Page';
    const keywords =
      'Front End Developer, Web Application Developer, Web Developer, Javascript Developer';
    new Meta(title, desc, keywords).setMeta();

    document.getElementById('root').style.backgroundImage = 'url(skills.svg)';
  }

  render() {
    return (
      <SkillGrid>
        {/*<HelmetProvider>*/}
        {/*  <Helmet>*/}
        {/*    <title>Elliot Evans - Skills</title>*/}
        {/*    <meta name="description" content="Skills Page" />*/}
        {/*    <meta*/}
        {/*      name="keywords"*/}
        {/*      content="Front End Developer, Web Application Developer, Web Developer, Javascript Developer"*/}
        {/*    />*/}
        {/*  </Helmet>*/}
        <Blobs location={this.props.location} />
        <h1>{this.heading}</h1>
        <h3>{this.subHeading}</h3>
        <SkillList />
        {/*</HelmetProvider>*/}
      </SkillGrid>
    );
  }
}

export default Skills;
