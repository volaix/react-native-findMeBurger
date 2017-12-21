import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from "react-redux";

// Bottom information, Title, Price, image, and Burger
const SelectionAvatar = (props) => (
  < View style={{
    width: 370,
    top: 550,
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
    }}> {props.markerSelected}
    </Text>

    <Text style={{
      backgroundColor: '#fd5c63',
      position: 'absolute',
      top: 53,
      left: 80,
      height: 20,
      width: 200,
      color: 'white',
    }}> $12.50, {props.markerSelected}
    </Text>
  </View >
)

const mapStateToProps = (state, props) => {
  return {
    markerSelected: state.mapView.markerSelected,
  }
}

export default connect(mapStateToProps)(SelectionAvatar)