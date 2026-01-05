import { Elysia } from 'elysia'
import { createClient } from '@supabase/supabase-js'
import { verifyJWT } from './config/auth'

const supabase = createClient(
	process.env.SUPABASE_URL!,
	process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const app = new Elysia()

app.get('/', () => 'GameWikia backend working!')

app.get('/health', () => {
  return { status: 'ok' }
})

app.get('/me', async ({ headers, set }) => {
  const auth = headers.authorization
  if (!auth) {
    set.status = 401
    return { error: 'Missing Authorization header' }
  }

  const token = auth.replace('Bearer ', '')

  try {
    const payload = await verifyJWT(token)
    return { payload }
  } catch (err) {
    console.error(err)
    set.status = 401
    return { error: String(err) }
  }
})


app.listen(3000)

console.log('🚀 GameWikia backend running on http://localhost:3000')