import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import MapView from 'react-native-maps'
import { connect } from 'react-redux'
import { updateMarkerSelection } from "../redux/mapViewActions"

class MapViewComponent extends React.Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    markers: [
      {
        title: "Meet & Bun",
        description: 'Only 3km Away',
        markerPrice: "15",
        coordinate: {
          latitude: -31.954792,
          longitude: 115.858180,
        },
      },
      {
        title: "Jus Burgers",
        description: 'Flip Club Favourite',
        markerPrice: "15",
        coordinate: {
          latitude: -31.945507,
          longitude: 115.823721,
        },
      },
      {
        title: "McDonalds",
        description: '2km Away',
        markerPrice: "11",
        coordinate: {
          latitude: -31.947323,
          longitude: 115.812258,
        },
      },

    ],
  }

  handleRegionChange = (region) => {
    this.setState({ region })
  }

  componentDidMount() {
    navigator.geolocation.watchPosition(geo_success => {
      const { latitude, longitude } = geo_success.coords
      this.setState(() => ({ //redux me
        region: {
          latitude,
          longitude,
          latitudeDelta: 0.020315661459751055,
          longitudeDelta: 0.01384431156378696,
        }
      })
      )
    })
  }


  markerPress = (e) => {
    //note the finder only checks for latitude. will cause a bug in future. to fix, add a search for longitude aswell.
    const selected = this.state.markers.find(o => {
      return (o.coordinate.latitude === e.nativeEvent.coordinate.latitude) && (o.coordinate.longitude === e.nativeEvent.coordinate.longitude)
    })
      .title
      this.props.dispatch(updateMarkerSelection(selected))

  }

  render() {
    return (
      <MapView
        style={{ left: 0, right: 0, top: 0, bottom: 0, position: 'absolute' }}
        region={this.state.region}
        onRegionChange={this.handleRegionChange}
        showsUserLocation
        loadingEnabled
        showsPointsOfInterest={false}
        // showsBuildings={false}
        showsTraffic={false}
      >
        {this.state.markers.map(marker => (
          <MapView.Marker
            key={marker.title}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            onPress={this.markerPress}
          >
            <View style={styles.markerPlaceholder}>
              <View style={styles.markerRedSquare}>
                <Text style={styles.markerDollarSign}>$</Text>
                <Text style={styles.pinText}>{marker.markerPrice}</Text>
              </View>
              <View style={styles.markertriangle} />
            </View>
          </MapView.Marker>
        ))}
        </MapView>
    )
  }
}


const styles = StyleSheet.create({
  markerRedSquare: {
  flexDirection: "row",
  backgroundColor: '#fd5c63',
  width: 50,
  height: 30,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 4,
}
  ,
  markerDollarSign: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  markerPlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  markertriangle: {
    width: 0,
    height: 0,
    borderWidth: 7,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderTopColor: '#fd5c63',
  },
  pinText: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 20,
  },
  container: {
    position: 'absolute',
    backgroundColor: 'blue',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const mapStateToProps = (state, props) => {
    return {
        markerSelected:  state.mapView.markerSelected,
        markers: state.mapView.markers,
    }
}
export default connect(mapStateToProps)(MapViewComponent)