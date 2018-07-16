import React from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { LoginPage as TablerLoginPage } from 'tabler-react';
import 'tabler-react/dist/Tabler.css';
import * as actions from './redux/actions';

// import { LoginPage as TablerLoginPage } from 'tabler-react';

// export class DefaultPage extends Component {
//   // static propTypes = {
//   //   signIn: PropTypes.object.isRequired,
//   //   actions: PropTypes.object.isRequired
//   // };

//   render() {
//     return (
//       <div className="sign-in-default-page">
//         Page Content: sign-in/DefaultPage
//         <Link to="/dashboard"> DASHBOARD </Link>
//       </div>
//     );
//   }
// }

const DefaultPage = () => (
  <Formik
    initialValues={{
      email: '',
      password: ''
    }}
    validate={values => {
      // same as above, but feel free to move this into a class method now.
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }}
    onSubmit={() => {
      alert('Done!'); // eslint-disable-line no-alert
    }}
    render={({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit
      /* isSubmitting */
    }) => (
      <TablerLoginPage
        onSubmit={handleSubmit}
        onChange={handleChange}
        onBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}
      />
    )}
  />
);

export { DefaultPage };

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
