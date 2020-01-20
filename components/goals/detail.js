import Link from 'next/link'
import { Box, Text, defaultProps, Anchor } from 'grommet'
import { Line } from 'react-chartjs-2'

const cumulativeSum = (sum => value => sum += value)(0)

export default ({ goal }) => {
  console.log('goal detail', goal)
  const cumsum = goal.reports.map(r => r.change).map(cumulativeSum)
  const reports = goal.reports.map((r, i) => ({ ...r, fact: cumsum[i] })).reverse()
  const fact = cumsum[cumsum.length - 1] || 0
  const percent = 100 * fact / goal.value
  const borderColor = defaultProps.theme.global.colors['status-ok']
  return (
    <Box fill background='background'>
      <Box fill='horizontal' align='center'><Text weight='bold'>{goal.name}: {fact}/{goal.value} ({parseInt(percent)}%)</Text></Box>
      <Box fill='horizontal' height='small' pad='small'>
        <Line options={{ maintainAspectRatio: false, legend: { display: false } }} data={{ labels: reports.map(r => r.date), datasets: [{ fill: false, borderColor, label: 'Progress', data: cumsum }] }} />
      </Box>
      <Box pad='small' fill='horizontal' align='center'><Link href='/goals/[slug]/report' as={`/goals/${goal.id}/report`}><Anchor label='Add Report' /></Link></Box>
      <Box fill gap='xsmall' overflow='scroll'>
        {reports.map(report => (
          <Box justify='center' align='start' border key={report.date} height={{ min: '220px', max: 'medium' }} background={{ color: 'black', opacity: 'medium' }}>
            <Box justify='center' align='start' pad='small'>
              {[{ field: 'date', name: 'Date' },
                { field: 'doneToday', name: 'Done Today' },
                { field: 'doTomorrow', name: 'Do Tomorrow' },
                { field: 'doBetter', name: 'Do Better' },
                { field: 'change', name: 'Change' },
                { field: 'fact', name: 'Fact' }
              ].map(({ field, name }) => (
                <Text key={field} color='status-ok'><code><strong>{name}:</strong> {report[field]}</code></Text>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
