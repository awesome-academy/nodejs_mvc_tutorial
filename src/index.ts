import express, { Request, Response } from "express";
import { setupViewEngine } from "./utils/view";
import { initDatabase } from "./utils/database";
import genreRouter from "./routes/genre.routes";
import authorRouter from "./routes/author.routes";
import bookRouter from "./routes/book.routes";
import bookInstanceRouter from "./routes/bookinstance.routes";

const app = express();
setupViewEngine(app);
initDatabase();

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.get("/", (req, res) => {
  res.render("index", {
    title: "Sun Asterisk",
    message: "Make awesome things that matter",
  });
});

app.use("/genre", genreRouter);
app.use("/author", authorRouter);
app.use("/book", bookRouter);
app.use("/book-instance", bookInstanceRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
