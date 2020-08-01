import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class HomeContainer extends Component {
  state = {
    profileInfo: PropTypes.object.isRequired
  };

  render() {
    return (
      <React.Fragment>
        <h1> FAGGOT </h1>
      </React.Fragment>
    );
  }
}

export default withRouter(connect( null, null )(HomeContainer));
