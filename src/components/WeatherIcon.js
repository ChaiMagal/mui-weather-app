import React from 'react'

import weather from '../images/icons/weather.svg'
import night from '../images/icons/night.svg'
import cloudy from '../images/icons/cloudy.svg'
import snowy from '../images/icons/snowy.svg'
import thunder from '../images/icons/thunder.svg'
import rainy from '../images/icons/rainy.svg'
import sunny from '../images/icons/sunny.svg'

const WeatherIcon = ({ number }) => {
  return (
    <>
      {number >= 0 && number < 6 ? (
        //sunny
        <img
          alt='weather'
          src={sunny}
          width='200'
          style={{ borderRadius: '5px' }}
          className='d-inline-block align-top'
        />
      ) : number >= 6 && number < 12 ? (
        //cloudy
        <img
          alt='weather'
          src={cloudy}
          width='200'
          style={{ borderRadius: '5px' }}
          className='d-inline-block align-top'
        />
      ) : number >= 12 && number < 19 ? (
        //rain
        <img
          alt='weather'
          src={rainy}
          width='200'
          style={{ borderRadius: '5px' }}
          className='d-inline-block align-top'
        />
      ) : number >= 19 && number < 33 ? (
        //snow
        <img
          alt='weather'
          src={snowy}
          width='200'
          style={{ borderRadius: '5px' }}
          className='d-inline-block align-top'
        />
      ) : number >= 33 && number < 39 ? (
        //night
        <img
          alt='weather'
          src={night}
          width='200'
          style={{ borderRadius: '5px' }}
          className='d-inline-block align-top'
        />
      ) : number >= 39 && number < 44 ? (
        //storm
        <img
          alt='weather'
          src={thunder}
          width='200'
          style={{ borderRadius: '5px' }}
          className='d-inline-block align-top'
        />
      ) : (
        //general weather
        <img
          alt='weather'
          src={weather}
          width='200'
          style={{ borderRadius: '5px' }}
          className='d-inline-block align-top'
        />
      )}
    </>
  )
}

export default WeatherIcon
