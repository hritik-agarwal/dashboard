import {useEffect, useState} from 'react'
import {Carousel} from 'react-responsive-carousel'

import styles from './Chart.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Loader, MapChart, LineChartComponent} from '../../components'
import {fetchLineChartData, fetchMapChartData} from '../../api/external'

const getFormattedData = data => {
  const {cases, deaths, recovered} = data
  const dates = Object.keys(cases)
  return dates.map(date => ({
    date,
    cases: cases[date],
    deaths: deaths[date],
    recovered: recovered[date],
  }))
}

function Chart() {
  const [lineChartData, setLineChartData] = useState(null)
  const [mapChartData, setMapChartData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const date_cases_data = await fetchLineChartData()
      const country_cases_data = await fetchMapChartData()
      setLineChartData(getFormattedData(date_cases_data))
      setMapChartData(country_cases_data)
    }
    fetchData()
  }, [])

  if (!lineChartData || !mapChartData) {
    return <Loader text={'charts'} />
  }

  return (
    <div className={styles.container}>
      <div className={styles.chartsContainer}>
        <Carousel
          showStatus={false}
          autoPlay={true}
          interval={3000}
          showArrows={false}
          infiniteLoop={true}
          transitionTime={2000}
          className={styles.carouselContainer}>
          <LineChartComponent
            data={lineChartData}
            xKey={'cases'}
            yKey={'date'}
            color={'blue'}
            tickFormatter={val => `${val / 1000000} Million`}
            header={'Worldwide Disease Cases'}
          />
          <LineChartComponent
            data={lineChartData}
            xKey={'recovered'}
            yKey={'date'}
            color={'green'}
            tickFormatter={val => `${val / 1000000} Million`}
            header={'Worldwide Disease Recovered'}
          />
          <LineChartComponent
            data={lineChartData}
            xKey={'deaths'}
            yKey={'date'}
            color={'red'}
            tickFormatter={val => `${val / 1000000} Million`}
            header={'Worldwide Disease Deaths'}
          />
        </Carousel>
        <MapChart data={mapChartData} header={'Worldwide Map of Diseases'} />
      </div>
    </div>
  )
}
export default Chart
