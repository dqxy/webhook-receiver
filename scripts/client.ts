import { envVar } from '@therockstorm/utils'
import dwolla from 'dwolla-v2'

export default new dwolla.Client({
  key: envVar('DWOLLA_APP_KEY'),
  secret: envVar('DWOLLA_APP_SECRET'),
  environment: 'sandbox'
  // In production app, save token to your database for reuse
  // onGrant: (token) => new Promise(...)
})
