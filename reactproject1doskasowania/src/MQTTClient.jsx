import React, { useEffect } from 'react';
import mqtt from 'mqtt';

const MQTTClient = ({ brokerUrl, topic }) => {
    useEffect(() => {
        const client = mqtt.connect(brokerUrl);

        client.on('connect', () => {
            console.log('Connected to MQTT broker');
            client.subscribe(topic, (err) => {
                if (!err) {
                    console.log(`Subscribed to topic: ${topic}`);
                }
            });
        });

        client.on('message', (topic, message) => {
            console.log(`Message received on ${topic}: ${message.toString()}`);

        });

        return () => {
            client.end();
        };
    }, [brokerUrl, topic]);

    return <div>Connecting to MQTT...</div>;
};

export default MQTTClient;