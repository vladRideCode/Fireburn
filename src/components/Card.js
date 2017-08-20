import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

class Card extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View>
        <Text>Just Card Component</Text>
      </View>
    );
  }

}

Card.propTypes = {
  cards: PropTypes.array
};

export default Card;
