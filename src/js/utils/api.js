import {urls} from 'js/config';

let fetchApiData = (appId) => {
  let invocation = new XMLHttpRequest();

  invocation.open('GET', urls.itemInfo(appId), false);
  invocation.send();
  return invocation;
}
/**
* @param {string} appId - API Id or to get info about
*/
export let getApiData = (apiId) => {
    let invocation = fetchApiData(apiId);
    let resp = invocation.responseText;
    let data = JSON.parse(resp);
    let hours = data.hourly.data;
    let morningTemp = hours[9].temperature;
    let eveningTemp = hours[18].temperature;
    let morningPrec = hours[9].precipProbability;
    let eveningPrec = hours[18].precipProbability;

    return [morningTemp, eveningTemp, morningPrec, eveningPrec];
}
