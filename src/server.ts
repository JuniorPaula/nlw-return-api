import { prisma } from './prisma'
import express from 'express'

const app = express()

app.use(express.json())

app.post('/feadback', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const feadback = await prisma.feadback.create({
    data: {
      type,
      comment,
      screenshot
    }
  })

  return res.status(201).json(feadback)
})

app.listen(3030, () => console.log('[+] Server is running'))
