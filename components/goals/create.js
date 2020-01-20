import React from 'react'
import { Box, Button, Form, FormField, Heading } from 'grommet'

export default ({ createGoal }) => {
  return (
    <Box fill align='center' justify='center'>
      <Heading level={1}>Create Goal</Heading>
      <Box fill='horizontal'>
        <Form onSubmit={({ value }) => createGoal({ ...value, value: parseInt(value.value) })}>
          <FormField name='name' label='Goal Name' />
          <FormField name='value' label='Goal Value' />
          <Box fill='horizontal' align='center'><Button type='submit' primary label='Submit' /></Box>
        </Form>
      </Box>
    </Box>
  )
}
