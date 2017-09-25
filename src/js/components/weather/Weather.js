//Vendor
import React, {Component} from 'react';
//Locals
import {weatherStore} from 'js/components/weather/WeatherStore';
import {weatherActions} from 'js/components/weather/WeatherActions';

import {getApiData} from 'js/utils/api';
import {viewOptions} from 'js/config';

import bike from 'images/bike.png';
import metro from 'images/metro.png';

export default class Body extends Component {
  constructor(props){
		super(props);
		this.state = weatherStore.getState();
		weatherStore.listen(this.storeDidUpdate.bind(this));
    this.handleTempChange = this.handleTempChange.bind(this);
    this.handlePerChange = this.handlePerChange.bind(this);
	}
  /*
    get api data when the component mounts
  */
  componentDidMount() {
    // Subscribe to the store for updates
    weatherActions.initialize(); //initialize store
  }

  storeDidUpdate = () => {
    this.setState(weatherStore.getState());//triggers re-render when store updates
  }

  handleTempChange(e) {
    this.props.onTempChange(e.target.value);
  }

  handlePerChange(e) {
    this.props.onPerChange(e.target.value);
  }

  render () {

    const appId = "d91da2996bab99b50718e92c620599a4"

    const today = getApiData(appId)
    const todayMDegrees = Math.round(today[0]);
    const todayMPercent = Math.round(today[1]);

    const todayEDegrees = Math.round(today[2]);
    const todayEPercent = Math.round(today[3]);

    const maxDegrees = todayMDegrees > todayEDegrees ? todayMDegrees : todayEDegrees;
    const maxPercent = todayMPercent > todayEPercent ? todayMPercent : todayEPercent;

    var icon = metro;

    if (((this.props.temp) > maxDegrees) && ((this.props.rain) > maxPercent)) {
      icon = bike;
    }
    return (
      <div id="content">
        <div id="input-from">
          <h1> Preferences </h1>
          <h3> What are your thresholds for biking to and from work? </h3>
            <h3> Maximum <input type="text" value={this.props.temp} onChange={this.handleTempChange}/>&#176; F with a
            maximum <input type="text" value={this.props.rain} onChange={this.handlePerChange}/> &#37; chance of rain.</h3>
        </div>
        <div>
          <div id="today">
          <h1>Today</h1>
          <img id="choice" src={icon}/>
          <div id="morning">
            <h2> Morning </h2>
              <h3>{todayMDegrees}&#176; F</h3>
              <h3>{todayMPercent}% chance of rain</h3>
          </div>
          <div id="evening">
            <h2> Evening </h2>
              <h3>{todayEDegrees}&#176; F</h3>
              <h3>{todayEPercent}% chance of rain</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
