import express, { Request, Response } from "express";
import { setupViewEngine } from "./utils/view";
import genreRouter from "./routes/genre.routes";
import authorRouter from "./routes/author.routes";
import bookRouter from "./routes/book.routes";
import bookInstanceRouter from "./routes/bookinstance.routes";
import i18next from "i18next";
import i18nextMiddleware from "i18next-http-middleware";
import i18nextBackend from "i18next-fs-backend";
import path from "path";
import * as bookController from "./controllers/book.controller";

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
app.use(i18nextMiddleware.handle(i18next));

// Use jquery, bootstrap
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use("/js", [
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")),
  express.static(path.join(__dirname, "node_modules/jquery/dist")),
]);
// Static files
app.use(express.static(path.join(__dirname, "public")));

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use("/genres", genreRouter);
app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/book-instances", bookInstanceRouter);
app.use("/", bookController.index);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
