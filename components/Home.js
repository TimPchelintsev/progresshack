import Link from 'next/link'
import { Box, Heading, Anchor } from 'grommet'

export default () => {
  return (
    <Box fill align='center' justify='center'>
      <Link href='/goals'><Anchor color='status-ok'><Heading level={1}>P R O G R E S S H A C K</Heading></Anchor></Link>
    </Box>
  )
}
