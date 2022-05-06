export interface SendEmailDTO {
  subject: string
  body: string
}

export interface SendEmail {
  sendMail: (data: SendEmailDTO) => Promise<void>
}
