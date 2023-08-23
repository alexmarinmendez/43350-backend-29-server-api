import express from 'express'
import userRouter from './routers/users.js'

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use('/users', userRouter)

app.listen(PORT, () => console.log(`Server Up on port ${PORT}`))