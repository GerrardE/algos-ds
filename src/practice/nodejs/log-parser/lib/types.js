'use strict';

module.exports = {
    LogEvent: function (server, date, severity, process, message) {
        return Object.freeze({
            server, date, severity, process, message
        });
    }
};