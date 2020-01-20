import { useRouter } from 'next/router'
import Page from '../../../components/Page'
import GoalDetail from '../../../components/goals/detail'
import initApi from '../../../lib/api'
import { useGoal } from '../../../lib/hooks'

export default () => {
  const api = initApi()
  const router = useRouter()
  const { slug } = router.query
  const goal = useGoal(api)(slug)
  return (
    <Page>
      {goal && <GoalDetail goal={goal} />}
    </Page>
  )
}
