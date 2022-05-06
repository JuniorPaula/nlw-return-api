import express from 'express'
// import nodemailer from 'nodemailer'
import { PrismaFeadbackRepository } from './repositories/prisma/prisma-feadback-repository'
import { NodemailerService } from './service/nodemailer/nodemailer'
import { SubmitFeadbackUsecase } from './use-cases/submit-feadback-usercase'

export const router = express.Router()

router.post('/feadback', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const prismaFeadbackRepository = new PrismaFeadbackRepository()
  const nodemailerService = new NodemailerService()
  const submitFeadbackUsecase =
    new SubmitFeadbackUsecase(prismaFeadbackRepository, nodemailerService)

  await submitFeadbackUsecase.handle({
    type,
    comment,
    screenshot
  })

  return res.status(201).send()
})
