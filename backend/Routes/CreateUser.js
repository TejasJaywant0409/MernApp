const express = require("express");
const router = express.Router();
const user = require("../Models/UserSignupSchema");
const { body, query, validationResult } = require("express-validator");

router.post(
  "/createuser",
  body("name").isAlpha(),
  body("password").isLength({ min: 6 }),
  body("mobileNo").isNumeric().isLength({ min: 10 }),
  body("location").isAlphanumeric(),
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    try {
      await user.create({
        name: req.body.name,
        password: req.body.password,
        mobileNo: req.body.mobileNo,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
