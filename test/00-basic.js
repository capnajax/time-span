'use strict';

import TestBattery from 'test-battery';
import timespan from '../index.js';

describe('Basic test', function() {
    const startDate = new Date('12-12-12');
    const testSet = [
      {endDate: new Date('12-12-12 00:00:00.12'), expected: '120ms'},
      {endDate: new Date('12-12-12 00:00:12.00'), expected: '12s'},
      {endDate: new Date('12-12-12 00:00:12.12'), expected: '12.120s'},
      {endDate: new Date('12-12-12 00:12:00.00'), expected: '12m'},
      {endDate: new Date('12-12-12 00:12:00.12'), expected: '12m 0.120s'},
      {endDate: new Date('12-12-12 00:12:12.00'), expected: '12m 12s'},
      {endDate: new Date('12-12-12 00:12:12.12'), expected: '12m 12.120s'},
      {endDate: new Date('12-12-12 12:00:00.00'), expected: '12h'},
      {endDate: new Date('12-12-12 12:00:00.12'), expected: '12:00:00.120'},
      {endDate: new Date('12-12-12 12:00:12.00'), expected: '12:00:12'},
      {endDate: new Date('12-12-12 12:00:12.12'), expected: '12:00:12.120'},
      {endDate: new Date('12-12-12 12:12:00.00'), expected: '12:12'},
      {endDate: new Date('12-12-12 12:12:00.12'), expected: '12:12:00.120'},
      {endDate: new Date('12-12-12 12:12:12.00'), expected: '12:12:12'},
      {endDate: new Date('12-12-12 12:12:12.12'), expected: '12:12:12.120'},
      {endDate: new Date('12-24-12'), expected: '12d'},
      {endDate: new Date('12-24-12 00:00:00.12'), expected: '12d 0:00:00.120'},
      {endDate: new Date('12-24-12 00:00:12.00'), expected: '12d 0:00:12'},
      {endDate: new Date('12-24-12 00:00:12.12'), expected: '12d 0:00:12.120'},
      {endDate: new Date('12-24-12 00:12:00.00'), expected: '12d 0:12'},
      {endDate: new Date('12-24-12 00:12:00.12'), expected: '12d 0:12:00.120'},
      {endDate: new Date('12-24-12 00:12:12.00'), expected: '12d 0:12:12'},
      {endDate: new Date('12-24-12 00:12:12.12'), expected: '12d 0:12:12.120'},
      {endDate: new Date('12-24-12 12:00:00.00'), expected: '12d 12h'},
      {endDate: new Date('12-24-12 12:00:00.12'), expected: '12d 12:00:00.120'},
      {endDate: new Date('12-24-12 12:00:12.00'), expected: '12d 12:00:12'},
      {endDate: new Date('12-24-12 12:00:12.12'), expected: '12d 12:00:12.120'},
      {endDate: new Date('12-24-12 12:12:00.00'), expected: '12d 12:12'},
      {endDate: new Date('12-24-12 12:12:00.12'), expected: '12d 12:12:00.120'},
      {endDate: new Date('12-24-12 12:12:12.00'), expected: '12d 12:12:12'},
      {endDate: new Date('12-24-12 12:12:12.12'), expected: '12d 12:12:12.120'},
      {endDate: new Date('12-12-12 00:00:02.00'), expected: '2s'},
      {endDate: new Date('12-12-12 00:00:02.12'), expected: '2.120s'},
      {endDate: new Date('12-12-12 00:02:00.00'), expected: '2m'},
      {endDate: new Date('12-12-12 00:02:00.12'), expected: '2m 0.120s'},
      {endDate: new Date('12-12-12 00:02:02.00'), expected: '2m 2s'},
      {endDate: new Date('12-12-12 00:02:02.12'), expected: '2m 2.120s'},
      {endDate: new Date('12-12-12 02:00:00.00'), expected: '2h'},
      {endDate: new Date('12-12-12 02:00:00.12'), expected: '2:00:00.120'},
      {endDate: new Date('12-12-12 02:00:02.00'), expected: '2:00:02'},
      {endDate: new Date('12-12-12 02:00:02.12'), expected: '2:00:02.120'},
      {endDate: new Date('12-12-12 02:02:00.00'), expected: '2:02'},
      {endDate: new Date('12-12-12 02:02:00.12'), expected: '2:02:00.120'},
      {endDate: new Date('12-12-12 02:02:02.00'), expected: '2:02:02'},
      {endDate: new Date('12-12-12 02:02:02.12'), expected: '2:02:02.120'},
      {endDate: new Date('12-14-12'), expected: '2d'}
    ]

    const makeTest = function(battery, spec) {
      let resultTimespan = timespan(startDate, spec.endDate);
      battery.isEqual(resultTimespan, spec.expected, 'testing %s == %s',
        resultTimespan, spec.expected)
    }

    const makeTests = function(battery) {
      for (let spec of testSet) {
        makeTest(battery, spec);
      }
    }

    it ('twelves', function(done) {

      const battery = new TestBattery();
      makeTests(battery);
      battery.done(errors => {
        errors && console.log(errors);
        done(errors);
      });

    });

});