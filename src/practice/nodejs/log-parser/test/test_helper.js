const fs = require('fs');
const path = require('path');
const LogEvent = require('../lib/types').LogEvent;

module.exports = {
    readJson: function(fileName) {
        let jsonPath = path.join(__dirname, fileName);
        let jsonString = fs.readFileSync(jsonPath, 'utf8');
        return JSON.parse(jsonString);
    },

    parseLogEvents: function(fileName) {
        return this.readJson(fileName).map((r) => LogEvent(r['server'], r['date'], r['severity'], r['process'], r['message']));
    }
};