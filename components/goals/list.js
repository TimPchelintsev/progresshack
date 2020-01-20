import React from 'react'
import Link from 'next/link'
import { Box, Text, Anchor } from 'grommet'
export default ({ goals }) => {
  return (
    <Box fill background='background' pad='small'>
      <Box fill gap='xsmall' overflow='scroll'>
        {goals.map(goal => (
          <Box justify='center' border key={goal.id} height={{ min: '220px', max: 'medium' }} background={{ color: 'black', opacity: 'medium' }}>
            <Box pad='small'><Link href='/goals/[slug]' as={`/goals/${goal.id}`}><Anchor>{goal.name}</Anchor></Link></Box>
            <Box fill justify='center' pad='xsmall'>
              <Box justify='center' align='start' pad='small'>
                {[{ field: 'name', name: 'Goal' },
                  { field: 'value', name: 'Value' }
                ].map(({ field, name }) => (
                  <Text key={field} color='status-ok'><code><strong>{name}:</strong> {goal[field]}</code></Text>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
        <Box justify='center' align='center' border height={{ min: '220px', max: 'medium' }} background={{ color: 'black', opacity: 'medium' }}>
          <Box align='center' justify='center' pad='xsmall'><Link href='/goals/create'><Anchor>Create Goal</Anchor></Link></Box>
        </Box>
      </Box>
    </Box>
  )
}
