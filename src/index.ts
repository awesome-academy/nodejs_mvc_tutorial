import express, { Request, Response } from "express";
import { setupViewEngine } from "./utils/view";
import { initDatabase } from "./utils/database";
import genreRouter from "./routes/genre.routes";
import authorRouter from "./routes/author.routes";
import bookRouter from "./routes/book.routes";
import bookInstanceRouter from "./routes/bookinstance.routes";
import i18next from "i18next";
import i18nextMiddleware from "i18next-http-middleware";
import i18nextBackend from "i18next-fs-backend";
import path from "path";

i18next
  .use(i18nextBackend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    fallbackLng: "vi",
    preload: ["vi", "en"],
    supportedLngs: ["vi", "en"],
    saveMissing: true,
    backend: {
      loadPath: path.join(__dirname, "locales/{{lng}}/{{ns}}.json"),
      addPath: path.join(__dirname, "locales/{{lng}}/{{ns}}.missing.json"),
    },
    detection: {
      order: ["querystring", "cookie"],
      caches: ["cookie"],
      lookupQuerystring: "locale", //query string on url (?locale=en/vi)
      lookupCookie: "locale",
      ignoreCase: true,
      cookieSecure: false,
    },
  });

const app = express();
setupViewEngine(app);
initDatabase();
app.use(i18nextMiddleware.handle(i18next));

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use("/genre", genreRouter);
app.use("/author", authorRouter);
app.use("/book", bookRouter);
app.use("/book-instance", bookInstanceRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
