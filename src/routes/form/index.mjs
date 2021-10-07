import express from "express";

const routerFactory = () => {
  const router = express.Router();

  router.get("/", (_req, res) => {
    return res.render('form/index')
  });

  router.post("/actions/create", (req, res) => {
      const body = req.body

      console.log(body)

     return res.render('form/index')
  });

  return router;
};

export default routerFactory;
