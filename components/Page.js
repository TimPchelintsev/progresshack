import { Grommet } from 'grommet'
import { dark } from 'grommet/themes'
import Meta from './Meta'

export default ({ children, title }) => {
  return (
    <Grommet full theme={dark}>
      <Meta title={title} />
      {children}
    </Grommet>
  )
}
