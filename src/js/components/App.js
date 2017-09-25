//Vendor
import React, {Component} from 'react';
//Components
import Header from 'js/components/Header';
import Weather from 'js/components/weather/Weather';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      temp: 100,
      rain: 20,
      title: "Bikeable"
    };
    this.handlePerChange = this.handlePerChange.bind(this);
    this.handleTempChange = this.handleTempChange.bind(this);
  }

  displayName: 'App';

  handleTempChange(newTemp) {
    this.setState({
    temp : newTemp
  });
}

handlePerChange(newPer) {
  this.setState({
    rain: newPer
  })
}

  render () {
    return (
        <div className='root'>
          <Header title={this.state.title} />
          <Weather temp={this.state.temp} rain={this.state.rain} onPerChange={this.handlePerChange} onTempChange={this.handleTempChange}/>
        </div>

    );
  }

}
