import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BarChart, Bar } from 'recharts';
import { ScatterChart, Scatter } from 'recharts';
import axios from 'axios';

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/mongoDB/getAll/DHT11')
      .then(response => {
        const rawData = response.data;
        const latestData = rawData.slice(-10); // Get the last 10 entries
        const formattedData = latestData.map(item => ({
          timestamp: new Date(item.timestamp).toLocaleTimeString(), // Convert timestamp to readable format
          temperature: item.temperature,
            humidity: item.humidity,
          light: item.light,
        }));
          setData(formattedData);
          console.log(formattedData)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="timestamp" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
      </LineChart>

      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="timestamp" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Bar dataKey="humidity" fill="#8884d8" />
      </BarChart>

 <ScatterChart width={500} height={300}>
        <CartesianGrid />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="Light Intensity" dataKey="light" fill="#8884d8" />
      </ScatterChart>
    </div>
  );
}

export default Main;
