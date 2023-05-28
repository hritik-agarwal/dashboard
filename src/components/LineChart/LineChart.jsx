import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import styles from './LineChart.module.css'

function LineChartComponent({data, xKey, yKey, color, tickFormatter, header}) {
  const margin = {top: 30, right: 30, left: 30, bottom: 50}
  return (
    <div className={styles.lineChartContainer}>
      <div className={styles.header}>{header}</div>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart data={data} margin={margin}>
          <Line
            type='monotone'
            dataKey={xKey}
            stroke={color}
            strokeWidth={2}
            activeDot={{r: 5}}
          />
          <CartesianGrid stroke='#ccc' strokeDasharray='4 4' />
          <XAxis stroke='white' strokeOpacity={0.5} dataKey={yKey} />
          <YAxis stroke='white' tickFormatter={tickFormatter} />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
export default LineChartComponent
