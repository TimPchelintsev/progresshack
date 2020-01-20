import React from 'react'
import Page from '../../components/Page'
import GoalsList from '../../components/Goals/list'

import initApi from '../../lib/api'

const Goals = () => {
  const api = initApi()
  const [state, setState] = React.useState()

  React.useEffect(() => {
    const getState = async () => {
      const goals = (await api.getUserGoals())
      console.log('goals', goals)
      setState({ goals })
    }
    getState()
  }, [])

  return (
    <Page title='Goals'>
      {state && <GoalsList goals={state.goals} />}
    </Page>
  )
}

export default Goals
