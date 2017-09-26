import renderer from 'react-test-renderer';
// import api from 'js/utils/api';
import React from 'react';

/**
* Snapshot testing can be very useful if used correctly, this example just shows how to use
* it but this is not the most useful snapshot, sometimes it is better to call it multiple
* times inside a test and take snapshots of the component changing throughout some interactions,
* Ex. snapshot default state, snapshot after click/mouseover, snapshot after mouseleave
*/
const API = require('js/utils/api');

describe('Testing api data', () => {

  test('Ensuring API data is returned and is reliable', () => {
    const data = API.getApiData("d91da2996bab99b50718e92c620599a4")
      expect(data).toBeDefined()
    })

})
