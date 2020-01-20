import MemoryBackend from './backends/memory'
import RSBackend from './backends/remotestorage'

export default ({ backend } = {}) => {
  // backend = backend || MemoryBackend()
  backend = backend || RSBackend()
  return {
    getUserGoals: async userId => backend.getUserGoals(userId),
    getGoalReports: async goalId => backend.getGoalReports(goalId),
    getGoal: async goalId => backend.getGoal(goalId),
    createGoal: async goal => backend.createGoal(goal),
    createReport: async report => backend.createReport(report)
  }
}
