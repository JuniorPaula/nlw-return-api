export default {
  prismaUrl: process.env.DATABASE_URL,
  port: process.env.PORT || 3033,
  nodemailer: {
    hostName: process.env.HOSTMAIL,
    portHost: process.env.PORT_MAIL,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  }
}
