import React from 'react';
import { Dimensions, Text, View, AppRegistry, StyleSheet } from 'react-native';
import MapViewComponent from './src/components/MapViewComponent'
import SelectionAvatar from './src/components/SelectionAvatar'
import configureStore from './src/redux/configureStore'
import { Provider } from 'react-redux'

const store = configureStore()

export default class App extends React.Component {
  state = {
  }

  render() {
    const { height, width } = Dimensions.get('window');
    return (
      <Provider store={store}>
        <View style={{
        flex: 1,
        position: 'relative',
        flexDirection: 'column',
      }}>

      <MapViewComponent />
      <SelectionAvatar />
      </View>
      </Provider>
    );
  }
}