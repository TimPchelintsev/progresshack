const reports = [
  { goalId: 1, id: 1, date: '2020-01-10', doneToday: 'Something', doTomorrow: 'Lots of stuff', doBetter: 'OK', insight: 'Haribol', change: 10 },
  { goalId: 1, id: 2, date: '2020-01-11', doneToday: 'Something..', doTomorrow: 'That thing', doBetter: 'OK', insight: 'Hare Krishna', change: 14 },
  { goalId: 1, id: 3, date: '2020-01-12', doneToday: 'Something..', doTomorrow: 'That thing', doBetter: 'OK', insight: 'Hare Krishna', change: 54 },
  { goalId: 2, id: 4, date: '2020-01-13', doneToday: 'Something..', doTomorrow: 'That thing', doBetter: 'OK', insight: 'Hare Krishna', change: 67 },
  { goalId: 2, id: 5, date: '2020-01-14', doneToday: 'Something..', doTomorrow: 'That thing', doBetter: 'OK', insight: 'Hare Krishna', change: 100 }
]

const goals = [{ id: 1, name: 'Goal 1', value: 100 }, { id: 2, name: 'Goal 2', value: 50 }]

export default () => {
  return {
    getUserGoals: async userId => goals,
    getGoalReports: async goalId => reports.filter(r => String(r.goalId) === String(goalId)),
    getGoal: async goalId => {
      const goal = goals.filter(g => String(g.id) === String(goalId))[0]
      return goal
    },
    createGoal: async goal => {
      goal.id = goals.length + 1
      goals.push(goal)
      return goal
    },
    createReport: async report => {
      report.id = reports.length + 1
      reports.push(report)
      return report
    }
  }
}
