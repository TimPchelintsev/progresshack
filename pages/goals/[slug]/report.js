import React from 'react'
import { useRouter } from 'next/router'
import Page from '../../../components/Page'
import ReportsCreate from '../../../components/reports/create'

import initApi from '../../../lib/api'
import { useGoal } from '../../../lib/hooks'

const ReportsCreatePage = () => {
  const api = initApi()
  const router = useRouter()
  const { slug } = router.query
  const goal = useGoal(api)(slug)
  const createReport = async formData => {
    await api.createReport({ ...formData, goalId: goal.id })
    router.push('/goals/[slug]', `/goals/${goal.id}`, { shallow: true })
  }

  return (
    <Page title='Create Report'>
      <ReportsCreate createReport={createReport} />
    </Page>
  )
}

export default ReportsCreatePage
