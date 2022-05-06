import { prisma } from './prisma'
import nodemailer from 'nodemailer'
import express from 'express'

const app = express()

app.use(express.json())

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '39a1091a67d127',
    pass: '0a6aca9169176c'
  }
})

app.post('/feadback', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const feadback = await prisma.feadback.create({
    data: {
      type,
      comment,
      screenshot
    }
  })

  await transport.sendMail({
    from: 'Equipe Feedget <io@feedget.com>',
    to: 'Junior Paula <slucivaldo509@gmail.com>',
    subject: 'Novo Feadback',
    html: [
      `<p>Tipo de feadback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`
    ].join('\n')
  })

  return res.status(201).json(feadback)
})

app.listen(3030, () => console.log('[+] Server is running'))
