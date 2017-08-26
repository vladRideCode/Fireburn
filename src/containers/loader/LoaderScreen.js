import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import { fetchRoute } from './loader.actions';

const mapStateToProps = (state) => ({
  is_loading: state.init.is_loading
});

const mapDispatchToProps = dispatch => {
  return {
    fetchRoute: () => {
      dispatch(fetchRoute());
    }
};

export default connect(mapStateToProps)(Loader);
 // LoaderScreen;
