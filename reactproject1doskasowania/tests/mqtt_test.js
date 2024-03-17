const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://Hass-Mqtt-Server.local:1883');

client.on('connect', () => {
  console.log('Connected to MQTT broker');

  client.subscribe('Boiler/Temperature/IdSensora', (err) => {
    if (!err) {
      console.log('Subscribed to temperature topic');
    } else {
      console.error('Subscription error:', err);
    }
  });

  // send "on" command
  client.publish('Boiler/Relay/relay1', 'on', {}, (error) => {
    if (error) {
      console.error('Publish error:', error);
    }
  });

  // wait 5 sec before send "off" command
  setTimeout(() => {
    
    client.publish('Boiler/Relay/relay1', 'off', {}, (error) => {
      if (error) {
        console.error('Publish error:', error);
      }
    });

    // wait 5 sec
    setTimeout(() => {
      client.end();
    }, 5000); 
  }, 5000); 
});

client.on('message', (topic, message) => {
  
  if (topic === 'Boiler/Temperature/IdSensora') {   // CHANGE IdSensora FOR REAL ID OF TEMP SENSOR
    console.log(`Temperature message received: ${message.toString()}`);
  }
});
