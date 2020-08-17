import React, { useState } from 'react';
import api from './services/api'

import './App.css'

function App() {
  const [dateTime, setDateTime] = useState()

  api.get('/').then(response => {
    const value = response.data.currentDateTime

    setDateTime(value)
  }).catch((error) => {
    console.log('Sorry, but that is a problem with the API. Try it later')
  })

  return (
    <div id="content">
      <span className="title-content">Informations of date and time based on Coordinated Universal Time (UTC):</span>
      <span className="date-time-information">{dateTime}</span>
      <span className="observation">Obs: to update the informations of date and time in browser, press 'F5' to refresh the page.</span>
    </div>
  );
}

export default App;