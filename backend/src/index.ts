import { Elysia } from 'elysia'

const app = new Elysia()

app.get('/', () => 'GameWikia backend working!')

app.get('/health', () => {
  return { status: 'ok' }
})

app.listen(3000)

console.log('🚀 GameWikia backend running on http://localhost:3000')