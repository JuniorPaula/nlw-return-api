import { FeadbacksRepository } from '../repositories/interfaces/feadbacks-repository'
import { SendEmail } from '../service/interfaces/send-email'

interface SubmitFeadbackUsecaseRequest {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeadbackUsecase {
  private readonly feadbackRepository: FeadbacksRepository
  private readonly sendEmail: SendEmail
  constructor (
    feadbackRepository: FeadbacksRepository,
    sendEmail: SendEmail
  ) {
    this.feadbackRepository = feadbackRepository
    this.sendEmail = sendEmail
  }

  async handle (request: SubmitFeadbackUsecaseRequest): Promise<void> {
    const { type, comment, screenshot } = request

    if (!type) {
      throw new Error('Type is required!')
    }

    if (!comment) {
      throw new Error('Comment is required!')
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format!')
    }

    await this.feadbackRepository.create({
      type,
      comment,
      screenshot
    })

    await this.sendEmail.sendMail({
      subject: 'Novo feadback',
      body: [
        `<p>Tipo de feadback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`
      ].join('\n')
    })
  }
}
