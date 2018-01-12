import React, { Component } from 'react';
import { connect } from 'react-redux';

import EEBanner from '../../components/banner/ee-banner';
import EECard from '../../components/card/ee-card';
import { Main } from '../../styles';

const mapStateToProps = function(state) {
  console.log(state);

  return {
    something: state.something
  };
};

class Home extends Component {
  render() {
    const text = [
      'Hello, this is Elliot Evans.',
      'Front-end Developer here...',
      'Example',
      'There would be a short description from one of my blog posts but instead here is some placeholder text'
    ];

    return (
      <Main>
        <EEBanner text={text} something={this.props.something} />
        <EECard text={text} />
      </Main>
    );
  }
}

export default connect(mapStateToProps)(Home);
