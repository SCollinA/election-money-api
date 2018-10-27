import express from "express"
import { router } from "../routes/index"

const app = express()
app.use("/", router)

const port = 3000
app.listen(port, () => console.log(`App listening on port ${port}!`))