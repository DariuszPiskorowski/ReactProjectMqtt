import './App.css'
import React from 'react';
import MQTTClient from './MQTTClient';

function App() {
    return (
        <div className="App">
            <h1>Mój Klient MQTT</h1>
            <MQTTClient brokerUrl="wss://Hass-Mqtt-Server.local:1883" topic="Boiler/Temperature/#" />
        </div>
    );
}

export default App;
