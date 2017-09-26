/*eslint-disable */
import {weatherActions} from 'js/components/weather/WeatherActions';
import {dispatcher} from 'js/dispatcher';


//Not using this class for now
class WeatherStore {
	constructor () {
    this.init = false

		this.bindListeners({
			initialize: weatherActions.initialize
		});
	}

	initialize(){
    this.init = true;
	}
}


export const weatherStore = dispatcher.createStore(WeatherStore, 'WeatherStore');
