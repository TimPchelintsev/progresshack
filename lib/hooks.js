import React from 'react'

const useGoal = api => goalId => {
  const [goal, setGoal] = React.useState()
  React.useEffect(() => {
    const getGoal = async () => {
      if (goalId) {
        const reports = await api.getGoalReports(goalId)
        console.log('reports from useGoal', reports)
        const _goal = await api.getGoal(goalId)
        setGoal({ ..._goal, reports })
      }
    }
    getGoal()
  }, goalId)

  return goal
}

export { useGoal }
