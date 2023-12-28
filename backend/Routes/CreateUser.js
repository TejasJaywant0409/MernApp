const express = require("express");
const router = express.Router();
const user = require("../Models/UserSignupSchema");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  [
    body("name").isAlpha(),
    body("password").isLength({ min: 5 }),
    body("mobileNo").isLength({ min: 10 }),
    body("location").isAlphanumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
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
      console.error(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/Loginuser",
  [
    body("password").isLength({ min: 5 }),
    body("mobileNo").isLength({ min: 10 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let mobileNo = req.body.mobileNo;

    try {
      let userData = await user.findOne({ mobileNo });
      if (!userData) {
        return res.json({ errors: "Invalid Mobile Number!" });
      }

      if (req.body.password !== userData.password) {
        return res.json({ errors: "Invalid Password!" });
      }

      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
