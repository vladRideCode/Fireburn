import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';

const mapStateToProps = (state) => ({
  cards: state.cards
});

const CardScreen = connect(mapStateToProps)(Card);
export default CardScreen;
