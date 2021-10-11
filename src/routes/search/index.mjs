import express from "express";
import fruits from "./fruits.mjs";

const routerFactory = () => {
  const router = express.Router();

  router.get("/", (req, res) => {
    const term = req.query["term"];

    let options = [];
    if (term) {
      const usableTerm = term.trim().toLowerCase();
      options = fruits
        .filter((fruit) => fruit.toLowerCase().includes(usableTerm))
        .slice(0, 10); // Only a few

      res.setHeader('Content-Type', 'text/vnd.turbo-stream.html')
      return res.render("search/results", { term, options });
    }

    return res.render("search/index");
  });

  return router;
};

export default routerFactory;
