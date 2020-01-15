import { Box, Text, defaultProps } from 'grommet'
import { Line } from 'react-chartjs-2'

const reports = [
  { date: '2020-01-10', doneToday: 'Something', doTomorrow: 'Lots of stuff', doBetter: 'OK', insight: 'Haribol', fact: 10 },
  { date: '2020-01-11', doneToday: 'Something..', doTomorrow: 'That thing', doBetter: 'OK', insight: 'Hare Krishna', fact: 14 },
  { date: '2020-01-12', doneToday: 'Something..', doTomorrow: 'That thing', doBetter: 'OK', insight: 'Hare Krishna', fact: 54 },
  { date: '2020-01-13', doneToday: 'Something..', doTomorrow: 'That thing', doBetter: 'OK', insight: 'Hare Krishna', fact: 67 },
  { date: '2020-01-14', doneToday: 'Something..', doTomorrow: 'That thing', doBetter: 'OK', insight: 'Hare Krishna', fact: 100 }
]

export default () => {
  const borderColor = defaultProps.theme.global.colors['status-ok']
  console.log('theme', defaultProps.theme)
  return (
    <Box fill background='background'>
      <Box fill='horizontal' height='medium' pad='small'>
        <Line options={{ maintainAspectRatio: false, legend: { display: false } }} data={{ labels: reports.map(r => r.date), datasets: [{ fill: false, borderColor , label: 'Progress', data: reports.map(r => r.fact) }] }} />
      </Box>
      <Box fill gap='xsmall' overflow='scroll'>
        {reports.map(report => (
          <Box justify='center' border key={report.date} height={{ min: '220px', max: 'medium' }} background={{ color: 'black', opacity: 'medium' }}>
            <Box fill justify='center' pad='xsmall'><pre><Text color='status-ok'>{JSON.stringify(report, null, 2)}</Text></pre></Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
