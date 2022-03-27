import {TabActions} from '@react-navigation/native';
import React, {Component} from 'react';
import {Text, View, AppRegistry} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './assets/screens/NavTabs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Tabs></Tabs>
      </NavigationContainer>
    );
  }
}

export default App;
