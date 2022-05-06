import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma'

export const router = express.Router()

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '39a1091a67d127',
    pass: '0a6aca9169176c'
  }
})

router.post('/feadback', async (req, res) => {
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
