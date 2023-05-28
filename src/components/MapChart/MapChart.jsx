import {MapContainer, Marker, TileLayer, Tooltip} from 'react-leaflet'
import styles from './MapChart.module.css'
import {nanoid} from '@reduxjs/toolkit'

function MapChart({data, header}) {
  return (
    <div className={styles.mapContainer}>
      <div className={styles.header}>{header}</div>
      <MapContainer
        style={{width: '100%', height: '100%'}}
        center={[20, 77]}
        zoom={4}
        scrollWheelZoom={true}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map(item => {
          const {_id, lat, long} = item.countryInfo
          const {country, continent, cases, deaths, recovered} = item
          return (
            <Marker key={_id ? _id : nanoid()} position={[lat, long]}>
              <Tooltip>
                <div>
                  <div>
                    {country} (<span>{continent}</span>)
                  </div>
                  <div>Cases: {cases}</div>
                  <div>Deaths: {deaths}</div>
                  <div>Recovered: {recovered}</div>
                </div>
              </Tooltip>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}
export default MapChart
