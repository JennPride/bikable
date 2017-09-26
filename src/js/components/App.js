//Vendor
import React, {Component} from 'react';
//Components
import Header from 'js/components/Header';
import Weather from 'js/components/weather/Weather';

export default class App extends Component {


//Holding the user input variables in the App state to account for potential
//use in components other than weather

  constructor(props) {
    super(props);
    this.state = {
      minTemp: 0,
      maxTemp: 100,
      rain: 20,
      title: "Bikeable"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  displayName: 'App';

//Using generic handle change state manager to update based on which field
//is passed

  handleChange(newProp, propName) {
      if(propName == "maxTemp") {
        this.setState({
         maxTemp : newProp
      });
    } else if (propName == "minTemp") {
      this.setState({
        minTemp: newProp
      })
    } else if (propName == "rain") {
        this.setState({
          rain: newProp
        })
      }
  }

  render () {
    return (
        <div className='root'>
          <Header title={this.state.title} />
          <Weather minTemp={this.state.minTemp} maxTemp={this.state.maxTemp} rain={this.state.rain} onPropChange={this.handleChange}/>
        </div>

    );
  }

}
