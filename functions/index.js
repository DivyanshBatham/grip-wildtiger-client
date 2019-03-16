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

// API: Unsubscribe from Subscription, update subscribers:status => "unsubscribed"
// app.get("/unsubscribe-subscription/:subscriberId", (req, res) => {

// API: Confirm Subscription, update subscribers:isVerified
app.get("/confirm-subscription/:subscriberId", (req, res) => {
  return admin
    .database()
    .ref(`subscribers/${req.params.subscriberId}`)
    .once("value", snapshot => {
      let subscriberData = snapshot.val();
      if(subscriberData.isVerified) {
        // Prevent Recurrent confirm-subscription requests.
        console.log(`${subscriberData.email} is already verified: `,subscriberData);
        res.send(
          `<h1>WildTiger - Email Already Confirmed</h1>
        <p>Your email has being already verified.</p>
        <p>You can close this window.</p>
        `
        );
        return null;
      }
      snapshot.ref.update({
        isVerified: true
      });
      console.log(`${subscriberData.email} has been verified: `,subscriberData);
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

// API: Confirm Reservation, update reservation:isApproved
app.get("/confirm-reservation/:reservationId", (req, res) => {
  return admin
    .database()
    .ref(`reservations/${req.params.reservationId}`)
    .once("value", snapshot => {
      snapshot.ref.update({
        isApproved: true
      });
      let reservationData = snapshot.val();
      console.log(`${reservationData.email}'s reservation has been approved.`);
      res.send(`<h1>WildTiger - Reservation Confirmed</h1>`);
    })
    .catch(err => {
      console.error(
        `There was an error approving ${reservationData.email}'s reservation.`,
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
    const subscriberData = snapshot.val();
    console.log(`New subscriber ${subscriberId} added: `,subscriberData);

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
exports.onReservationAdded = functions.database
  .ref("/reservations/{reservationId}")
  .onCreate((snapshot, context) => {
    const reservationId = context.params.reservationId;
    const reservationData = snapshot.val();
    console.log(`New reservation ${reservationId} received: `, reservationData);

    // Send a welcome email:
    const mailOptions = {
      from: `"WildTiger" <${gmailEmail}>`,
      to: gmailEmail, // Also send email to customer
      // TODO: Send a copy of reservation details to customer onCreate Reservation
      subject: "WildTiger - Reservation Received",
      text: "WildTiger - Reservation Received (text)",
      html: `<h1>WildTiger - Reservation Received</h1>
      <p>Reservation details:</p>
      <table>
        <tr>
          <td>Name</td>
          <td>${reservationData.name}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>${reservationData.email}</td>
        </tr>
        <tr>
          <td>Number</td>
          <td>${reservationData.number}</td>
        </tr>
        <tr>
          <td>Guests</td>
          <td>${reservationData.guests}</td>
        </tr>
        <tr>
          <td>Time</td>
          <td>${reservationData.time}</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>${reservationData.date}</td>
        </tr>
        <tr>
          <td>Reservation Confirmed</td>
          <td>${reservationData.isApproved}</td>
        </tr>
      </table>
      
      <a href='https://us-central1-grip-wildtiger.cloudfunctions.net/api/confirm-reservation/${reservationId}'>Click here to confirm reservation</a>
      
      
      <p>Thanks,</p>
      <p>WildTiger - Laotian & Thai Cuisines (https://grip-wildtiger.firebaseapp.com/)</p>
      `
    };

    return mailTransport
      .sendMail(mailOptions)
      .then(res => {
        // console.log(res);
        console.log(
          `Reservation Request (${reservationId}) sent.`
        );
        return null;
      })
      .catch(error => {
        console.error(
          `There was an error while sending email to ${gmailEmail} :`,
          error
        );
      });
  });

// Firebase Functions Reservations [onUpdate] Event: Send confirmation email to client.
exports.onReservationConfirmed = functions.database
  .ref("/reservations/{reservationId}")
  .onUpdate((change, context) => {
    const reservationId = context.params.reservationId;
    const reservationDataOld = change.before.val();
    const reservationData = change.after.val();

    if(reservationData.isApproved === reservationDataOld.isApproved) {
      console.log("onReservationConfirmed [onUpdate]: Nothing updated")
      return null;
    }
    
    // TODO: Add a funcionality to cancel the reservation.
    // Check for cancelled status.
    // if(reservationData.isApproved === 'cancelled' ) {
    if(reservationData.isApproved !== true) { // Temporary Fix, make it change to only 'cancelled' and it should be only in hands of admin.
    // When admin cancels the reservation, send an email to customer notifying that.
    // TODO: Create a flow diagram to showcase in #grip-project
      console.log("onReservationConfirmed [onUpdate]: isApproved changed to something else, so don't send notification.")
      return null;
    }

    console.log(`Reservation ${reservationId} approved: `, reservationData);

    // Send a Reservation Confirmed Email:
    const mailOptions = {
      from: `"WildTiger" <${gmailEmail}>`,
      to: reservationData.email,
      subject: "WildTiger - Reservation Confirmed",
      text: "WildTiger - Reservation Confirmed (text)",
      html: `<h1>WildTiger - Reservation Confirmed</h1>
      <p>Wonderful! Your reservation has being confirmed.</p>
      <p>Reservation details:</p>
      <table>
        <tr>
          <td>Name</td>
          <td>${reservationData.name}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>${reservationData.email}</td>
        </tr>
        <tr>
          <td>Number</td>
          <td>${reservationData.number}</td>
        </tr>
        <tr>
          <td>Guests</td>
          <td>${reservationData.guests}</td>
        </tr>
        <tr>
          <td>Time</td>
          <td>${reservationData.time}</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>${reservationData.date}</td>
        </tr>
      </table>
      
      <a href='#'>Add Reservation to your Calendar</a>
      
      
      <p>Thanks,</p>
      <p>WildTiger - Laotian & Thai Cuisines (https://grip-wildtiger.firebaseapp.com/)</p>
      `
    };

    return mailTransport
      .sendMail(mailOptions)
      .then(res => {
        // console.log(res);
        console.log(
          `Reservation Confirmation (${reservationId}) sent to Customer.`
        );
        return null;
      })
      .catch(error => {
        console.error(
          `There was an error while sending email to ${reservationData.email} :`,
          error
        );
      });
  });
