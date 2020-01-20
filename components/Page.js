import Link from 'next/link'
import { Grommet, Box, Header, Main, Anchor } from 'grommet'
import { dark } from 'grommet/themes'
import Meta from './Meta'

export default ({ children, title }) => {
  return (
    <Grommet full theme={dark}>
      <Meta title={title} />
      <Box fill>
        <Header pad='small'>
          <Link href='/goals'><Anchor>ProgressHack</Anchor></Link>
        </Header>
        <Main>{children}</Main>
      </Box>
    </Grommet>
  )
}
