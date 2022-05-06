import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import config from './config/env'
import { router } from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

const port = config.port
app.listen(port, () => console.log('[+] Server is running'))
