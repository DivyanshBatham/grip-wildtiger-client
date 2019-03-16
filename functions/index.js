const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const nodemailer = require("nodemailer");

// Initialize the adminSDK:
admin.initializeApp();

// Initialize Express:
const app = express();

// Configuring the email transport (Nodemailer):
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

// API GET
app.get("/", (req, res) => {
  res.send("Hello from Firebase!");
});

// TODO: Create Dashboard, Sound Notifications (Bell Icon), Emails, Reservation Confirm - G Calendar event
// API: Broadcast Newsletter
// app.get("/broadcast", (req, res) => {});

// API: Confirm Subscription, update subscribers:isVerified
app.get("/confirm-subscription/:subscriberId", (req, res) => {
  return admin
    .database()
    .ref(`subscribers/${req.params.subscriberId}`)
    .once("value", snapshot => {
      snapshot.ref.update({
        isVerified: true
      });
      let subscriberData = snapshot.val();
      console.log(`${subscriberData.email} has been verified.`);
      res.send(
        `<h1>WildTiger - Email Confirmed</h1>
      <p>Wonderful! Your email has being verified, you are now successfully added to our mailing list.</p>
      <p>You can now close this window.</p>
      `
      );
    })
    .catch(err => {
      console.error(
        `There was an error verifying ${subscriberData.email}.`,
        err
      );
    });
});

// Firebase Functions HTTPS Event:
exports.api = functions.https.onRequest(app);

// Firebase Functions Subscribers [onCreate] Event:
exports.onSubscriberAdded = functions.database
  .ref("/subscribers/{subscriberId}")
  .onCreate((snapshot, context) => {
    const subscriberId = context.params.subscriberId;
    console.log(`New subscriber ${subscriberId} added to the mailing list.`);

    // Get subscriberData:
    const subscriberData = snapshot.val();
    console.log(subscriberData);

    // Send a welcome email:
    const mailOptions = {
      from: `"WildTiger" <${gmailEmail}>`,
      to: subscriberData.email,
      subject: "WildTiger - Confirm your Subscription",
      text: "WildTiger - Confirm your Subscription (text)",
      // TODO: Create Email Template
      html: `<h1>WildTiger - Confirm your Subscription</h1>
      <p>Wonderful! You are just one step away from getting our
      newsletters.</p>
      <a href='https://us-central1-grip-wildtiger.cloudfunctions.net/api/confirm-subscription/${subscriberId}'>Click here to confirm your subscription</a>
      <p>More Food. Less Money. Commence Mouthwatering.</p>
      <p>If you didn't ask for this subscription, you can simply ignore this email.</p>
      <p>Thanks,</p>
      <p>WildTiger - Laotian & Thai Cuisines (https://grip-wildtiger.firebaseapp.com/)</p>
      `
    };

    return mailTransport
      .sendMail(mailOptions)
      .then(res => {
        // console.log(res);
        console.log(
          `Confirmation email sent to: ${
            subscriberData.email
          } (${subscriberId})`
        );
        return null;
      })
      .catch(error => {
        console.error(
          `There was an error while sending email to ${subscriberData.email} :`,
          error
        );
      });
  });

// Firebase Functions Reservations [onCreate] Event: Send email to client and owners.


// Firebase Functions Reservations [onUpdate] Event: Send confirmation email to client.