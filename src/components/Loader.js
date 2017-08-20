import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Button, StyleSheet, Text, View, TextInput } from 'react-native';

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});

class Loader extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log('Component did mount...');
  }

  render(){
    return(
      <View>
        <ActivityIndicator
           style={[styles.centering, {height: 80}]}
           size="large"
         />
      </View>

    );
  }

}

Loader.propTypes = {
  is_loading: PropTypes.bool.isRequired,
};

Loader.navigationOptions = {
  header: null
};

export default Loader;
