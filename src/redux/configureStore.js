import { createStore, combineReducers } from 'redux';
// import devToolsEnhancer from 'remote-redux-devtools';

//reducer
const mapViewReducerDefaultState = {
  markerSelected: "Jus Burgers",
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

const mapViewReducer = (state = mapViewReducerDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_MARKER_SELECTION':
      return {
        ...state,
        markerSelected: action.selection,
      }
    default:
      return state
  }
}

//store creation
export default () => {
  const store = createStore(
    combineReducers({
      mapView: mapViewReducer,
    })
    // devToolsEnhancer()
  )

  return store
}
