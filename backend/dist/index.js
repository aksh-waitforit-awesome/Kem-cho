import express, {} from "express";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).send("kem cho");
});
app.listen(3000, () => console.log(`http://localhost:${port}`));
//# sourceMappingURL=index.js.map