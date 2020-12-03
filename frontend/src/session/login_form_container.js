// src/components/session/login_form_container.js

import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    other: (
      <button className="nav-btns-child-login" onClick={() => dispatch(openModal('signup'))}>
        Sign Up
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);