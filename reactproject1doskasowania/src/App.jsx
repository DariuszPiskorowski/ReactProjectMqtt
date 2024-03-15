import './App.css'
import React from 'react';
import MQTTClient from './MQTTClient';

function App() {
    return (
        <div className="App">
            <h1>Mój Klient MQTT</h1>
            <MQTTClient brokerUrl="wss://test.mosquitto.org:8081" topic="test/topic" />
        </div>
    );
}

export default App;
