import React from 'react'
import { Box, Button, Form, FormField, Heading } from 'grommet'

export default ({ createReport }) => {
  return (
    <Box fill align='center' justify='center'>
      <Heading level={1}>Add Report</Heading>
      <Box fill='horizontal'>
        <Form onSubmit={({ value }) => createReport({ ...value, change: parseInt(value.change) })}>
          <FormField name='date' label='Date' type='date' />
          <FormField name='doneToday' label='Done Today' />
          <FormField name='doTomorrow' label='Do Tomorrow' />
          <FormField name='doBetter' label='Do Better' />
          <FormField name='insight' label='Insight' />
          <FormField name='change' label='Change' type='number' />
          <Box fill='horizontal' align='center'><Button type='submit' primary label='Submit' /></Box>
        </Form>
      </Box>
    </Box>
  )
}
