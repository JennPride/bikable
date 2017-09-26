import renderer from 'react-test-renderer';
// import api from 'js/utils/api';
import React from 'react';

import bike from 'images/bike.png';
import metro from 'images/metro.png';

/**
* Snapshot testing can be very useful if used correctly, this example just shows how to use
* it but this is not the most useful snapshot, sometimes it is better to call it multiple
* times inside a test and take snapshots of the component changing throughout some interactions,
* Ex. snapshot default state, snapshot after click/mouseover, snapshot after mouseleave
*/
const Weather = require('js/components/weather/Weather');

describe('Testing transportation decisions', () => {

  test('Suggest metro if all max/min values match existing values', () => {
    const dec = Weather.decision(0, 0, 0, 0, 0, 0)
      expect(dec).toBe(metro)
    })

  test('Suggest metro is max temp is too high', () => {
    const dec = Weather.decision(0, 2, 1, 3, 1, 0)
      expect(dec).toBe(metro)
    })

  test('Suggest bike under perfect conditions (not going above/below limits)', () => {
    const dec = Weather.decision(0, 10, 1, 9, 1, 0)
      expect(dec).toBe(bike)
    })

  test('Suggest metro if min temp is too low', () => {
    const dec = Weather.decision(0, 9, -1, 0, 1, 0)
      expect(dec).toBe(metro)
    })

  test('Suggest metro if chance of rain is too high', () => {
    const dec = Weather.decision(0, 2, 1, 3, 1, 2)
      expect(dec).toBe(metro)
    })
})
