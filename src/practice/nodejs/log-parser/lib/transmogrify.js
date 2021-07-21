'use strict';

const LogEvent = require('./types').LogEvent;

module.exports = {
    // For the raw events given (an array of objects) returns an array of LogEvent instances.
    // See types.js for more information and the unit tests for examples.

    transmogrify: function (rawEvents) {
        // TODO: write your solution here, do not change the method signature in any way
        // console.log(rawEvents)
        
        // in some records,indicator-level maps to severity by mapping:
        // 1 - TRACE, 2 - DEBUG, 3..5 INFO, 6..8 WARN, 9..10 ERROR
        // in some records, indicator-type and indicator-value are concatenated to form the message field
        // ... but when indicator-type contains the text "message", then only the indicator-value is used to form the message field
        // the source field is mapped into the process field for output
        if(rawEvents.length > 0){
            const transEvents = [];

            rawEvents.forEach(item => {
                let data = {};
    
                data.server = item.server;
                data.date = item.date;
                data.severity = item.severity;
                data.process = item.process;
                data.message = item.message;
    
                if(typeof item.date == "number") {
                    // let now = new Date();
                    let itemdate = new Date(item.date);
                    itemdate.setUTCSeconds(1000);
                    // itemdate = new Date(itemdate.getTime() + itemdate.getTimezoneOffset() * 60000);

                    data.date = new Date(itemdate).toISOString();
                }
    
                if(item.source) {
                    data.process = item.source;
                }
    
                if(item.events){
                    item.events.forEach(e => {
                        if(e["indicator-type"] === "message"){
                            data.message = e["indicator-value"];
                        } else if (e["indicator-type"] !== "message"){
                            data.message = `${e["indicator-type"]} ${e["indicator-value"]}`;
                        }
    
                        switch(e["indicator-level"]) {
                            case 1:
                                data.severity = "TRACE";
                                break;
                            case 2:
                                data.severity = "DEBUG";
                                break;
                            case 3:
                            case 4:
                            case 5:
                                data.severity = "INFO"
                                break;
                            case 6:
                            case 7:
                            case 8:
                                data.severity = "WARN"
                                break;
                            case 9:
                            case 10:
                                data.severity = "ERROR"
                        }
                    })
                }
    
    
                transEvents.push(data);
            })
    console.log(">>>>>>>>>>>>>>", transEvents);
            return transEvents;
        }
        
        throw Error("Not implemented");
    }
};
