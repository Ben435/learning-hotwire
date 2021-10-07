import express from "express";
import createError from "http-errors";
import path from "path";
import todoRoutes from "./routes/todos/index.mjs";
import searchRoutes from "./routes/search/index.mjs";
import formRoutes from './routes/form/index.mjs';
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const filePath = fileURLToPath(import.meta.url);
const dirname = path.dirname(filePath);
console.log(filePath, dirname);

const app = express();
const port = 3000;

app.set("views", path.join(dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (_req, res) => res.render("index"));
app.use("/todos", todoRoutes());
app.use("/search", searchRoutes());
app.use("/form", formRoutes());

app.use((_req, _res, next) => {
  next(createError(404));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
