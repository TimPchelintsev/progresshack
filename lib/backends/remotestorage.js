import RemoteStorage from 'remotestoragejs'

function uuidv4 () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export default () => {
  const remoteStorage = new RemoteStorage()
  const path = 'progresshack'
  remoteStorage.access.claim(path, 'rw')
  remoteStorage.caching.enable(`/${path}/`)
  const client = remoteStorage.scope(`/${path}/`)
  client.declareType('goal', {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      value: { type: 'number' },
      reports: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            date: { type: 'string' },
            doneToday: { type: 'string' },
            doTomorrow: { type: 'string' },
            doBetter: { type: 'string' },
            insight: { type: 'string' },
            change: { type: 'number' }
          }
        }
      }
    }
  })
  // client.declareType('report', {
  //   type: 'object',
  //   properties: {
  //     id: { type: 'string' },
  //     date: { type: 'date' },
  //     doneToday: { type: 'string' },
  //     doTomorrow: { type: 'string' },
  //     doBetter: { type: 'string' },
  //     insight: { type: 'string' },
  //     change: { type: 'number' }
  //   }
  // })
  return {
    getUserGoals: async userId => {
      const res = await client.getAll('/goals/')
      console.log('res', res)
      return Object.keys(res).map(id => ({ id, ...res[id], reports: res[id].reports || [] }))
    },
    getGoalReports: async goalId => {
      const goal = await client.getObject(`/goals/${goalId}`)
      return goal.reports || []
    },
    getGoal: async goalId => {
      const goal = await client.getObject(`/goals/${goalId}`)
      return { id: goalId, ...goal, reports: goal.reports || [] }
    },
    createGoal: async goal => {
      const id = uuidv4()
      const _goal = { ...goal, id, reports: [] }
      await client.storeObject('goal', `/goals/${id}`, goal)
      console.log('goal', _goal)
      return _goal
    },
    createReport: async report => {
      const id = uuidv4()
      const { goalId, ...rest } = report
      const _report = { ...rest, id }
      const goal = await client.getObject(`/goals/${goalId}`)
      const _goal = { ...goal, reports: [...goal.reports || [], _report] }
      await client.storeObject('goal', `/goals/${goalId}`, _goal)
      return _report
    }
  }
}
