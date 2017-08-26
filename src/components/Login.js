import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
// import autoBind from 'react-autobind';
import { NavigationActions } from 'react-navigation';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    borderRadius: 5,
    margin: 5
  }
});


class Login extends Component {

  constructor(props) {
    super(props);
    // autoBind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.init.depot.length >= 3 && nextProps.init.route.length >= 4){
      this.props.loginScreen();
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Screen A
        </Text>
        <Text style={styles.instructions}>
        </Text>
        <Button
        onPress={() => this.props.navigation.dispatch({ type: 'Login' })}
        title="Log in"
        />
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  changeRoute: PropTypes.func.isRequired,
  changeDepot: PropTypes.func.isRequired,
  isLoading: PropTypes.func.isRequired,
  loginScreen: PropTypes.func.isRequired
};

Login.navigationOptions = {
  title: 'Log In',
};

export default Login;
