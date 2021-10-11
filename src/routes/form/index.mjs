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
      dobError = "Date of birth required";
    }

    let fingersError = "";
    const fingers = Number(body.fingers);
    if (fingers <= 0 || fingers > 20) {
      fingersError = "Finger count required";
    }

    res.setHeader("Content-Type", "text/vnd.turbo-stream.html");
    return res.render("form/error-stream", {
      nameError,
      dobError,
      fingersError,
    });
  });

  return router;
};

export default routerFactory;
