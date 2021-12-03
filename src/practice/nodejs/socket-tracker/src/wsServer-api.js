"use strict";

const WebSocketServer = require('ws').Server;

module.exports = (stepService) => {
  const WEBSOCKET_PORT = 8081;

  // * TODO: Write the WebSocket API for receiving `update`s,
  //         using `stepService` for data persistence.
  //         Make sure to return an instance of a WebSocketServer.

  const wss = new WebSocketServer({ port : WEBSOCKET_PORT });
  
  wss.on('connection', function connection(ws) {
    
    ws.on('message', function incoming(wsdata) {
      let data = JSON.parse(wsdata)
      
      if ((data.username == '') || (data.username == undefined) || (data.username == null)) {
        ws.send('invalid username entry');
      }
      
      else if ((data.ts == '') || (data.ts == undefined) || (data.ts == null)) {
        ws.send('invalid time stamp entry');
      }
      
      else if ((data.newSteps == '') || (data.newSteps == undefined) || (data.newSteps == null)) {
        ws.send('invalid newSteps entry');
      }
      
      else if ((data.update_id == '') || (data.update_id == undefined) || (data.update_id == null)) {
        ws.send('invalid update entry');
      }
      
      else {
        stepService.add(data.username, data.ts, data.newSteps, data.update_id);

        ws.send('successfully updated steps');
      }
    })
  })
  
  return wss;
};
