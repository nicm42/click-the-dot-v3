import { rest } from 'msw';
import * as scores from '../dummyScores.json'

export const handlers = [
  rest.get('/api/getscores', async (req, res, ctx) => {
    const score = await scores(JSON.parse(req.body))
    return res(
      ctx.status(200),
      ctx.json({score})
    )
  }),

  rest.post('/api/postscores', async (req, res, ctx) => {
    const score = await scores(JSON.parse(req.body))
    return res(
      ctx.status(200)
    )
  })
]