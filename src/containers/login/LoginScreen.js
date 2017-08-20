import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../../components/Login';
import { changeDepot, changeRoute, isLoading } from './login.actions';
import { NavigationActions } from 'react-navigation';

const mapStateToProps = (state) => ({
  auth: state.auth,
  init: state.init
});

const mapDispatchToProps = dispatch => {
  return {
    changeDepot: depot => {
      dispatch(changeDepot(depot));
    },
    changeRoute: route => {
      dispatch(changeRoute(route));
    },
    isLoading: () => {
      dispatch(isLoading());
    },
    loginScreen: () =>
      dispatch(NavigationActions.navigate({ routeName: 'Loader' })),
  }
};

const LoginScreen = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginScreen;
