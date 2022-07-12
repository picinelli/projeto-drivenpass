import express from "express"
import "express-async-errors"
import cors from "cors"
import router from "./routers/index.js"

const app = express()
app.use(express.json())
app.use(cors())

app.use(router)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Servidor aberto na porta: ${PORT}`)
})