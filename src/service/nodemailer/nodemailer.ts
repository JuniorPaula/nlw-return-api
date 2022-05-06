import nodemailer from 'nodemailer'
import config from '../../config/env'
import { SendEmail, SendEmailDTO } from '../interfaces/send-email'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: config.nodemailer.auth.pass,
    pass: config.nodemailer.auth.pass
  }
})

export class NodemailerService implements SendEmail {
  async sendMail ({ subject, body }: SendEmailDTO): Promise<void> {
    await transport.sendMail({
      from: 'Equipe Feedget <io@feedget.com>',
      to: 'Junior Paula <slucivaldo509@gmail.com>',
      subject,
      html: body
    })
  }
}
