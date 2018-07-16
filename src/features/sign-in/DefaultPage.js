import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
// import { Formik } from 'formik';
// import { LoginPage as TablerLoginPage } from 'tabler-react';

export class DefaultPage extends Component {
  // static propTypes = {
  //   signIn: PropTypes.object.isRequired,
  //   actions: PropTypes.object.isRequired
  // };

  render() {
    return (
      <div className="sign-in-default-page">
        Page Content: sign-in/DefaultPage
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    signIn: state.signIn
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
