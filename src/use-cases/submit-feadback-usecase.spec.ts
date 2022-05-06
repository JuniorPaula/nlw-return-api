import { SubmitFeadbackUsecase } from './submit-feadback-usercase'

describe('SubmitFeadback', () => {
  test('Should be able to submit a feadback', async () => {
    const submitFeadback = new SubmitFeadbackUsecase(
      { create: async () => {} },
      { sendMail: async () => {} }
    )

    expect(submitFeadback.handle({
      type: 'any_type',
      comment: 'any_comment',
      screenshot: 'data:image/png;base64,any_screenshot'
    })).resolves.not.toThrow()
  })

  test('Should not be able to submit a feadback without type', async () => {
    const submitFeadback = new SubmitFeadbackUsecase(
      { create: async () => {} },
      { sendMail: async () => {} }
    )

    expect(submitFeadback.handle({
      type: '',
      comment: 'any_comment',
      screenshot: 'data:image/png;base64,any_screenshot'
    })).rejects.toThrow()
  })
})
