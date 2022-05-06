import { FeadbacksRepository } from '../repositories/interfaces/feadbacks-repository'

interface SubmitFeadbackUsecaseRequest {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeadbackUsecase {
  private readonly feadbackRepository: FeadbacksRepository
  constructor (feadbackRepository: FeadbacksRepository) {
    this.feadbackRepository = feadbackRepository
  }

  async handle (request: SubmitFeadbackUsecaseRequest): Promise<void> {
    const { type, comment, screenshot } = request

    await this.feadbackRepository.create({
      type,
      comment,
      screenshot
    })
  }
}
