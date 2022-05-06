import nodemailer from 'nodemailer'
import { SendEmail, SendEmailDTO } from '../interfaces/send-email'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '39a1091a67d127',
    pass: '0a6aca9169176c'
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
