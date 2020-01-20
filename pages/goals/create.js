import React from 'react'
import { useRouter } from 'next/router'
import Page from '../../components/Page'
import GoalsCreate from '../../components/goals/create'

import initApi from '../../lib/api'

const GoalsCreatePage = () => {
  const api = initApi()
  const router = useRouter()
  const createGoal = async formData => {
    const goal = await api.createGoal(formData)
    router.push('/goals/[slug]', `/goals/${goal.id}`, { shallow: true })
  }

  return (
    <Page title='Create Goal'>
      <GoalsCreate createGoal={createGoal} />
    </Page>
  )
}

export default GoalsCreatePage
