const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
const cors = require("cors")({ origin: true });

admin.initializeApp();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: config.user.email, pass: config.user.password },
});

let mailOptions = {
  from: "Das Development",
  to: "daniel.laserna@gmail.com",
  subject: "Testing nodemailer",
  text: "Test successful",
};

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });
  });
});
