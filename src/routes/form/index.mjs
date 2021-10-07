import express from "express";

const routerFactory = () => {
  const router = express.Router();

  router.get("/", (_req, res) => {
    return res.render("form/index");
  });

  router.post("/actions/create", (req, res) => {
    const body = req.body;

    let nameError = "";
    if (body.name.length <= 0) {
      nameError = "Name required";
    }

    let dobError = "";
    if (!body.dob) {
      nameError = "Date of birth required";
    }

    let fingersError = "";
    if (body.dob.fingers <= 0 || body.dob.fingers > 20) {
      nameError = "Finger count required";
    }

    return res.render("form/error-stream", {
      nameError,
      dobError,
      fingersError,
    });
  });

  return router;
};

export default routerFactory;
