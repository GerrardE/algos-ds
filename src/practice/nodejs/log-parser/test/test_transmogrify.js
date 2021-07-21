const transmogrify = require('../lib/transmogrify').transmogrify;
const LogEvent = require('../lib/types').LogEvent;
const helpers = require('./test_helper');
const fixture = require('@deemai/test-fixture');
const assert = require('assert');

describe('TestTransmogrify', function() {

  it('test_transmogrify_date_format', () => {
    let rawEvents = [
      {
        "server": "10.10.0.177",
        "date": "2019-07-01T15:27:25.000Z",
        "severity": "WARN",
        "process": "microsrvc",
        "message": "retry failed to downstream service luxadapter"
      }
    ];

    let expectedLogEvents = [
      LogEvent(
        "10.10.0.177",
          new Date("2019-07-01T15:27:25.000Z").toISOString(),  // test date format is JavaScript ISO format
        "WARN",
        "microsrvc",
        "retry failed to downstream service luxadapter"
      )
    ];

    let actualLogEvents = transmogrify(rawEvents);
    assert.deepEqual(expectedLogEvents, actualLogEvents);
  });

  it('test_transmogrify_all_formats', function() {
    let rawEvents = helpers.readJson('transmogrify-input.json');
    let expectedLogEvents = helpers.parseLogEvents('transmogrify-output.json');
    let actualLogEvents = transmogrify(rawEvents);
    
    assert.deepEqual(expectedLogEvents, actualLogEvents);
  });

  fixture.baseTest();
});


