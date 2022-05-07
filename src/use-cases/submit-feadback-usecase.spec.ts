import { FeadbacksRepository, FeadbacksRepositoryDTO } from '../repositories/interfaces/feadbacks-repository'
import { SendEmail, SendEmailDTO } from '../service/interfaces/send-email'
import { SubmitFeadbackUsecase } from './submit-feadback-usercase'

const makeFeadbackRepository = (): FeadbacksRepository => {
  class FeadbackRepositoryStub implements FeadbacksRepository {
    async create (data: FeadbacksRepositoryDTO): Promise<void> {
      const fakeFeadback = {
        type: 'any_type',
        comment: 'any_comment',
        screenshot: 'data:image/png;base64,any_screenshot'
      }

      await new Promise(resolve => resolve(fakeFeadback))
    }
  }

  return new FeadbackRepositoryStub()
}

const makeSendEmail = (): SendEmail => {
  class SendEmailStub implements SendEmail {
    async sendMail (data: SendEmailDTO): Promise<void> {
      const fakeMailSend = {
        subject: 'any_feadback',
        body: 'any_body'
      }

      await new Promise(resolve => resolve(fakeMailSend))
    }
  }

  return new SendEmailStub()
}

interface SutTypes {
  sut: SubmitFeadbackUsecase
  feadbackRepositoryStub: FeadbacksRepository
  sendEmailStub: SendEmail
}

const makeSut = (): SutTypes => {
  const feadbackRepositoryStub = makeFeadbackRepository()
  const sendEmailStub = makeSendEmail()
  const sut = new SubmitFeadbackUsecase(feadbackRepositoryStub, sendEmailStub)

  return {
    sut,
    feadbackRepositoryStub,
    sendEmailStub
  }
}

describe('SubmitFeadback', () => {
  test('Should be able to submit a feadback', async () => {
    const { sut } = makeSut()

    expect(sut.handle({
      type: 'any_type',
      comment: 'any_comment',
      screenshot: 'data:image/png;base64,any_screenshot'
    })).resolves.not.toThrow()
  })

  test('Should not be able to submit a feadback without type', async () => {
    const { sut } = makeSut()

    expect(sut.handle({
      type: '',
      comment: 'any_comment',
      screenshot: 'data:image/png;base64,any_screenshot'
    })).rejects.toThrow()
  })

  test('Should not be able to submit a feadback without comment', async () => {
    const { sut } = makeSut()

    expect(sut.handle({
      type: 'any_type',
      comment: '',
      screenshot: 'data:image/png;base64,any_screenshot'
    })).rejects.toThrow()
  })

  test('Should not be able to submit a feadback with invalid screenshot', async () => {
    const { sut } = makeSut()

    expect(sut.handle({
      type: 'any_type',
      comment: '',
      screenshot: 'invalid_screenshot'
    })).rejects.toThrow()
  })
})
