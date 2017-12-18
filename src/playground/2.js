import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { connect } from 'react-redux'

import { getCarrierIcon, getCarrierName } from './utils'

// getCarrierIcon('AA') => 'something/AA.png'
// getCarrierName('AA') => 'American Airlines'

const link = 'https://gist.githubusercontent.com/bgdavidx/132a9e3b9c70897bc07cfa5ca25747be/raw/8dbbe1db38087fad4a8c8ade48e741d6fad8c872/gistfile1.txt';

class Page extends Component {
  render(){
    return (
      <div>
        
      </div>
    )
  }
}

// Write a React component that renders a list of flights 
// (static data, - source, destination, departure time, arrival time, carrier and carrier icon)

<h1>From {origin}</h1> //source
<h1>To {destination}</h1>
<h1> {departureTime} </h1>

"departureTime": "2017-06-01T21:21:17.274Z",

var d = new Date(1993, 5, 28, 14, 39, 7);

console.log(d.toString());     // logs Wed Jun 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toDateString()); // logs Wed Jun 28 1993




const list = [
  {
    "departureTime": "2017-06-01T21:21:17.274Z",
    "arrivalTime": "2017-06-01T22:21:17.274Z",
    "carrier": "FR",
    "origin": "SJC",
    "destination": "BUR"
  },
  {
    "departureTime": "2017-06-01T21:21:17.331Z",
    "arrivalTime": "2017-06-02T09:21:17.331Z",
    "carrier": "FR",
    "origin": "JFK",
    "destination": "AUS"
  },
]

redux-saga //library
//when using dates use moment, 
//date-fns === immutable

