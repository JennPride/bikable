//Vendor
import React, {Component} from 'react';

//Removed WeatherAction and WeatherStore references to keep everything central to
//this class and because I'm most familiar with React as opposed to Redux/Flux

import {getApiData} from 'js/utils/api';
import {viewOptions} from 'js/config';

import bike from 'images/bike.png';
import metro from 'images/metro.png';

//Function to take in all data and provide the decision to bike or metro via icon
export let decision = (minTemp, maxTemp, currMinTemp, currMaxTemp, percent, currPercent) => {
  if((currMinTemp > minTemp) && (currMaxTemp < maxTemp) && (currPercent < percent)) {
    return bike
  } else {
    return metro
  }
}

export default class Body extends Component {
  constructor(props){
		super(props);
    this.state = {
      temps: [0,0],
      percents: [0,0],
    };
    this.handleMinTempChange = this.handleMinTempChange.bind(this);
    this.handleMaxTempChange = this.handleMaxTempChange.bind(this);
    this.handlePerChange = this.handlePerChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
	}
  /*
    get api data when the component mounts
  */
  componentDidMount() {

    //Making API call for the local weather to Washington DC
    //Including AppID for simplicity sake
    const appId = "d91da2996bab99b50718e92c620599a4"
    const today = getApiData(appId)


    this.setState({
      temps: [Math.round(today[0]), Math.round(today[1])],
      percents: [Math.round(today[2]), Math.round(today[3])]
    })

  }

  //Passing input value changes up to App.js for state management

  handleMinTempChange(e) {
    this.props.onPropChange(e.target.value, "minTemp");
  }

  handleMaxTempChange(e) {
    this.props.onPropChange(e.target.value, "maxTemp");
  }

  handlePerChange(e) {
    this.props.onPropChange(e.target.value, "rain");
  }

  render () {

    const maxDegrees = Math.max(this.state.temps[0], this.state.temps[1])
    const minDegrees = Math.min(this.state.temps[0], this.state.temps[1])
    const maxPercent = Math.max(this.state.percents[0], this.state.percents[1])

    var icon = decision(this.props.minTemp, this.props.maxTemp, minDegrees, maxDegrees, this.props.rain, maxPercent)

    return (
      <div id="content">
        <div id="input-from">
          <h1> Preferences </h1>
          <h3> What are your thresholds for biking to and from work? </h3>
            <h3><ul id="inputs"><li> Max <input type="number" value={this.props.maxTemp} onChange={this.handleMaxTempChange}/>&#176; F </li>
            <li> Min <input type="number" value={this.props.minTemp} onChange={this.handleMinTempChange}/>&#176; F </li>
            <li> Max<input type="number" value={this.props.rain} onChange={this.handlePerChange}/> &#37; chance of rain. </li></ul></h3>
        </div>
        <div>
          <div id="today">
          <h1>Today</h1>
          <img id="choice" src={icon}/>
          <div id="morning">
            <h2> Morning </h2>
              <h3>{this.state.temps[0]}&#176; F</h3>
              <h3>{this.state.percents[0]}% chance of rain</h3>
          </div>
          <div id="evening">
            <h2> Evening </h2>
            <h3>{this.state.temps[1]}&#176; F</h3>
            <h3>{this.state.percents[1]}% chance of rain</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
