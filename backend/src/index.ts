import express, { type Request, type Response } from "express"
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("kem cho")
})
app.listen(3000, () => console.log(`http://localhost:${port}`))
