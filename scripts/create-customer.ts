import { log } from '@therockstorm/utils'
import client from './client'
import 'source-map-support/register'

const randomStr = () =>
  Math.random()
    .toString(36)
    .substr(2, 10)

const create = async () => {
  const token = await client.auth.client()
  const res = await token.post('customers', {
    firstName: 'Webhook',
    lastName: 'Test',
    email: `${randomStr()}@example.com`,
    type: 'receive-only'
  })
  log(`Created ${res.headers.get('location')}`)
}

create()