import React from 'react';
import { Dimensions, Text, View, AppRegistry, StyleSheet } from 'react-native';
import MapViewComponent from './src/components/MapViewComponent'

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

        {/* Bottom information, Title, Price, image, and Burger */}
        <View style={{
          width: 370,
          top: 630,
          position: 'relative',
          flex: 1,
          alignSelf: 'center',
          borderRadius: 20,
          flexDirection: 'row' 

        }}>
          <View style={{
            position: 'relative',
            backgroundColor: 'black',
            height: 60, 
            width: 60,
            top: 20,
            left: 20,
          }}>
          </View>

          <Text style={{
            backgroundColor: '#fd5c63',
            position: 'relative',
            top: 20,
            left: 20,
            height: 30,
            width: 200,
            color: 'white',
            fontSize: 18,
            fontWeight: '800',
          }}> Jus Burgers
            </Text>

          <Text style={{
            backgroundColor: '#fd5c63',
            position: 'absolute',
            top: 53,
            left: 80,
            height: 20,
            width: 200,
            color: 'white',
          }}> $12.50, Teriyaki Burger
            </Text>

        </View>
      </View>
      </Provider>
    );
  }
}