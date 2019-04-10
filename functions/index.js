const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const nodemailer = require("nodemailer");
var moment = require("moment");

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

const getCalendarTime = (date, time, offsetMinutes) => {
  let d = date.replace(/^\w+, (\w+ \d+)\w+/, "$1");
  // console.log(moment(new Date(d + " " + time)).format("YYYYMMDDTHHmmss"));
  // console.log(
  //   moment(new Date(d + " " + time))
  //     .add(15, "minute")
  //     .format("YYYYMMDDTHHmmss")
  // );

  if (offsetMinutes)
    return moment(new Date(d + " " + time))
      .add(15, "minute")
      .format("YYYYMMDDTHHmmss");
  else return moment(new Date(d + " " + time)).format("YYYYMMDDTHHmmss");
};

// API GET
app.get("/", (req, res) => {
  res.send("Hello from Firebase!");
});

// TODO: Create Dashboard, Sound Notifications (Bell Icon), Emails, Reservation Confirm - G Calendar event
// API: Broadcast Newsletter
// app.get("/broadcast", (req, res) => {});

// API: Unsubscribe from Subscription, update subscribers:status => "unsubscribed"
// DONE
app.get("/unsubscribe-subscription/:subscriberId", (req, res) => {
  return admin
    .database()
    .ref(`subscribers/${req.params.subscriberId}`)
    .once("value", snapshot => {
      let subscriberData = snapshot.val();
      if (subscriberData.status === "unsubscribed") {
        // Prevent Recurring unsubscribe requests.
        console.log(
          `${subscriberData.email} is already unsubscribed: `,
          subscriberData
        );
        res.send(`<h1>WildTiger - Already Unsubscribed</h1>`);
      } else {
        snapshot.ref.update({
          status: "unsubscribed"
        });
        console.log(`${subscriberData.email}'s has unsubscribed.`);
        res.send(`<h1>WildTiger - Unsubscribed Successfully</h1>`);
      }
    })
    .catch(err => {
      console.error(
        `There was an error unsubscribing ${subscriberData.email}.`,
        err
      );
    });
});

// API: Confirm Subscription, update subscribers:isVerified
// DONE
app.get("/confirm-subscription/:subscriberId", (req, res) => {
  return admin
    .database()
    .ref(`subscribers/${req.params.subscriberId}`)
    .once("value", snapshot => {
      let subscriberData = snapshot.val();
      if (subscriberData.isVerified) {
        // Prevent Recurrent confirm-subscription requests.
        console.log(
          `${subscriberData.email} is already verified: `,
          subscriberData
        );
        res.send(
          `<h1>WildTiger - Email Already Confirmed</h1>
        <p>Your email has being already verified.</p>
        <p>You can close this window.</p>
        `
        );
      } else {
        snapshot.ref.update({
          isVerified: true
        });
        console.log(
          `${subscriberData.email} has been verified: `,
          subscriberData
        );
        res.send(
          `<h1>WildTiger - Email Confirmed</h1>
      <p>Wonderful! Your email has being verified, you are now successfully added to our mailing list.</p>
      <p>You can now close this window.</p>
      `
        );
      }
    })
    .catch(err => {
      console.error(
        `There was an error verifying ${subscriberData.email}.`,
        err
      );
    });
});

// API: Cancel Reservation, update reservation:isCancelled
app.get("/cancel-reservation/:reservationId", (req, res) => {
  // Send a Cancel Email to customer "It's sad to see you go." as well as admin.
  return admin
    .database()
    .ref(`reservations/${req.params.reservationId}`)
    .once("value", snapshot => {
      let reservationData = snapshot.val();
      if (reservationData.isCancelled) {
        console.log(
          `${reservationData.email}'s reservation has already been cancelled.`
        );
        res.send(`<h1>WildTiger - Reservation already Cancelled.</h1>`);
      } else {
        snapshot.ref.update({
          isCancelled: true
        });
        console.log(
          `${reservationData.email}'s reservation has been Cancelled.`
        );
        res.send(`<h1>WildTiger - Reservation Cancelled.</h1>`);
      }
    })
    .catch(err => {
      console.error(
        `There was an error cancelling ${reservationData.email}'s reservation.`,
        err
      );
    });
});

// API: Confirm Reservation, update reservation:isApproved
// DONE
app.get("/confirm-reservation/:reservationId", (req, res) => {
  return admin
    .database()
    .ref(`reservations/${req.params.reservationId}`)
    .once("value", snapshot => {
      let reservationData = snapshot.val();
      if (reservationData.isCancelled) {
        console.log(
          `${
            reservationData.email
          }'s reservation has already been cancelled, cannot approve now.`
        );
        res.send(
          `<h1>WildTiger - User has Cancelled the Reservation, cannot Approve.</h1>`
        );
      } else if (reservationData.isApproved) {
        console.log(
          `${reservationData.email}'s reservation has already been approved.`
        );
        res.send(`<h1>WildTiger - Reservation Already Confirmed.</h1>`);
      } else {
        snapshot.ref.update({
          isApproved: true
        });
        console.log(
          `${reservationData.email}'s reservation has been approved.`
        );
        res.send(`<h1>WildTiger - Reservation Confirmed.</h1>`);
      }
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
    console.log(`New subscriber ${subscriberId} added: `, subscriberData);

    // Send a welcome email:
    const mailOptions = {
      from: `"WildTiger" <${gmailEmail}>`,
      to: subscriberData.email,
      subject: "WildTiger - Confirm your Subscription",
      text: "WildTiger - Confirm your Subscription (text)",
      html: `
      <div class="email-background" style="background: whitesmoke;font-family: sans-serif;text-align: center;font-size: 15px;padding: 14px 18px;">
  <a href="https://grip-wildtiger.firebaseapp.com" target="_blank" rel="noopener noreferrer" class="email-header" style="text-decoration: none;color: #606060;">
    <div class="header" style="font-weight: 800;font-size: 1.5em;">
      Wild Tiger
    </div>
    <div class="subHeader" style="font-size: 1.1em;">
      Laotian & Thai Cuisines
    </div>
  </a>

  <div class="email-container" style="max-width: 650px;margin: 16px auto;background: white;padding: 32px;text-align: center;border-radius: 5px;">
    <!-- illustration -->

    <!-- Heading -->
    <h1 style="font-size: 1.7em;margin-bottom: 1em;color: #323232;">Confirm Your Subscription</h1>
    <!-- Paragraph -->
    <p style="line-height: 1.2em;color: #505050;">
      Wonderful! You are just one step away from getting our newsletters.
    </p>
    <p style="line-height: 1.2em;color: #505050;">
      More Food. Less Money.
      <span class="noWrap" style="display: inline-block;">Commence Mouthwatering.</span>
    </p>

    <!-- CTA -->
    <a class="cta" href='https://us-central1-grip-wildtiger.cloudfunctions.net/api/confirm-subscription/${subscriberId}' style="color: white;font-weight: 500;transition: all 0.2s ease-in-out;text-decoration: none;background: #0fc96c;display: inline-block;font-size: 1.2em;padding: 0.7em 1em;border-radius: 10em;margin: 1em 0;box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.6);line-height: 1em;">Confirm
      Your Subscription</a>

    <!-- Note -->
    <p class="note" style="line-height: 1.2em;color: #505050;margin-top: 3em;font-size: 0.9em;">
      NOTE: If you didn't ask for this subscription, you can simply ignore
      this email.
    </p>

    <hr style="border: 0;border-top: 2px solid whitesmoke;margin: 30px;">

    <div class="email-questions">
      <!-- heading Need Help? -->
      <h2 style="font-size: 1.2em;color: #323232;">Questions?</h2>
      <!-- paragraph for any further querries contact us -->
      <p style="line-height: 1.2em;color: #505050;">
        If you have any questions feel free to call us at
        <a class="noWrap" href="tel:+1-360-882-8887" style="color: #323232;font-weight: 500;transition: all 0.2s ease-in-out;display: inline-block;">+1
          (360) 882-8887</a>
        or email
        <a class="noWrap" href="mailto:help@wildtigerwa.com" style="color: #323232;font-weight: 500;transition: all 0.2s ease-in-out;display: inline-block;">help@wildtigerwa.com</a>
      </p>
    </div>
  </div>
  <div class="email-footer" style="font-size: 0.8em;color: #606060;">
    <!-- Footer - -->
    <a href='https://us-central1-grip-wildtiger.cloudfunctions.net/api/unsubscribe-subscription/${subscriberId}' style="color: #606060;">Unsubscribe</a>
  </div>
</div>
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
      .catch(err => {
        console.error(
          `There was an error while sending email to ${subscriberData.email} :`,
          err
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

    // Should I send a reservation received email to the customer?
    const mailOptions = {
      from: `"WildTiger" <${gmailEmail}>`,
      to: gmailEmail, // Also send email to customer
      // TODO: Send a copy of reservation details to customer onCreate Reservation
      subject: "WildTiger - Reservation Received",
      text: "WildTiger - Reservation Received (text)",
      html: `
      <div class="email-background" style="background: whitesmoke;font-family: sans-serif;text-align: center;font-size: 15px;padding: 14px 18px;">
    <a href="https://grip-wildtiger.firebaseapp.com" target="_blank" rel="noopener noreferrer" class="email-header"
        style="text-decoration: none;color: #606060;">
        <div class="header" style="font-weight: 800;font-size: 1.5em;">
            Wild Tiger
        </div>
        <div class="subHeader" style="font-size: 1.1em;">
            Laotian & Thai Cuisines
        </div>
    </a>

    <div class="email-container" style="max-width: 650px;margin: 16px auto;background: white;padding: 32px;text-align: center;border-radius: 5px;">
        <!-- Heading -->
        <h1 style="font-size: 1.7em;margin-bottom: 1em;color: #323232;">Reservation Received</h1>
        <!-- Paragraph -->
        <p style="line-height: 1.2em;color: #505050;">
            There is a reservation request with the following details:
        </p>

        <div style="overflow-x:auto;">

            <table style="margin: 0 auto;">
                <tr>
                    <th style="text-align: left;width: 50%;padding: 1em 1em 1em 0em;color: #505050;font-weight: 500;">Name</th>
                    <td style="text-align: right;width: 50%;padding: 1em 0em;color: #323232;font-weight: 600;">${
                      reservationData.name
                    }</td>
                </tr>
                <tr>
                    <th style="text-align: left;width: 50%;padding: 1em 1em 1em 0em;color: #505050;font-weight: 500;">Email</th>
                    <td style="text-align: right;width: 50%;padding: 1em 0em;color: #323232;font-weight: 600;">
                      <a href="mailto:${reservationData.email}">${
        reservationData.email
      }</a>
                    </td>
                </tr>
                <tr>
                    <th style="text-align: left;width: 50%;padding: 1em 1em 1em 0em;color: #505050;font-weight: 500;">Number</th>
                    <td style="text-align: right;width: 50%;padding: 1em 0em;color: #323232;font-weight: 600;">
                      <a href="tel:${reservationData.number}">${
        reservationData.number
      }</a>
                    </td>
                </tr>
                <tr>
                    <th style="text-align: left;width: 50%;padding: 1em 1em 1em 0em;color: #505050;font-weight: 500;">Guests</th>
                    <td style="text-align: right;width: 50%;padding: 1em 0em;color: #323232;font-weight: 600;">${
                      reservationData.guests
                    }</td>
                </tr>
                <tr>
                    <th style="text-align: left;width: 50%;padding: 1em 1em 1em 0em;color: #505050;font-weight: 500;">Time</th>
                    <td style="text-align: right;width: 50%;padding: 1em 0em;color: #323232;font-weight: 600;">${
                      reservationData.time
                    }</td>
                </tr>
                <tr>
                    <th style="text-align: left;width: 50%;padding: 1em 1em 1em 0em;color: #505050;font-weight: 500;">Date</th>
                    <td style="text-align: right;width: 50%;padding: 1em 0em;color: #323232;font-weight: 600;">${
                      reservationData.date
                    }</td>
                </tr>
            </table>

        </div>

        <!-- CTA -->
        <a class="cta" href="https://us-central1-grip-wildtiger.cloudfunctions.net/api/confirm-reservation/${reservationId}" style="color: white;font-weight: 500;transition: all 0.2s ease-in-out;text-decoration: none;background: #0fc96c;display: inline-block;font-size: 1.2em;padding: 0.7em 1em;border-radius: 10em;margin: 1em 0;box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.6);line-height: 1em;">Confirm
            Reservation</a>

        <!-- Note -->
        <p class="note" style="line-height: 1.2em;color: #505050;font-size: 0.9em;margin-top: 3em;">
            NOTE: It is suggested that you cross check the dashboard before confirming the reservation.
        </p>

    </div>
</div>
      `
    };

    return mailTransport
      .sendMail(mailOptions)
      .then(res => {
        // console.log(res);
        console.log(`Reservation Request (${reservationId}) sent.`);
        return null;
      })
      .catch(err => {
        console.error(
          `There was an error while sending email to ${gmailEmail} :`,
          err
        );
      });
  });

// Firebase Functions Reservations [onUpdate] Event: Send confirmation email to client.
// TODO: Add to Calendar,fix lineHeight (Remove), Add support for other calendars.
exports.onReservationUpdated = functions.database
  .ref("/reservations/{reservationId}")
  .onUpdate((change, context) => {
    const reservationId = context.params.reservationId;
    const reservationDataOld = change.before.val();
    const reservationData = change.after.val();

    if (reservationData === reservationDataOld) {
      console.log("onReservationUpdated [onUpdate]: Nothing updated");
      return null;
    }

    // TODO: Add a funcionality to cancel the reservation.
    // Check for cancelled status.
    if (reservationData.isCancelled) {
      // Send a mail to customer and admin.
      // Temporary Fix, make it change to only 'cancelled' and it should be only in hands of admin.
      // When admin cancels the reservation, send an email to customer notifying that.
      // TODO: Create a flow diagram to showcase in #grip-project
      // console.log(
        // "onReservationUpdated [onUpdate]: isApproved changed to something else, so don't send notification."
      // );
      console.log("TODO: Send a mail to customer and cc admin.");
      return null;
    } else if (reservationData.isApproved) {
      console.log(`Reservation ${reservationId} approved: `, reservationData);

      // Send a Reservation Confirmed Email:
      const mailOptions = {
        from: `"WildTiger" <${gmailEmail}>`,
        to: reservationData.email,
        subject: "WildTiger - Reservation Confirmed",
        text: "WildTiger - Reservation Confirmed (text)",
        html: `
      <div class="email-background" style="background: whitesmoke;font-family: sans-serif;text-align: center;font-size: 15px;padding: 14px 18px;">
    <a href="https://grip-wildtiger.firebaseapp.com" target="_blank" rel="noopener noreferrer" class="email-header"
        style="text-decoration: none;color: #606060;">
        <div class="header" style="font-weight: 800;font-size: 1.5em;">
            Wild Tiger
        </div>
        <div class="subHeader" style="font-size: 1.1em;">
            Laotian & Thai Cuisines
        </div>
    </a>

    <div class="email-container" style="max-width: 650px;margin: 16px auto;background: white;padding: 32px;text-align: center;border-radius: 5px;">
        <!-- illustration -->

        <!-- Heading -->
        <h1 style="font-size: 1.7em;margin-bottom: 1em;color: #323232;">Reservation Confirmed</h1>
        <!-- Paragraph -->
        <p style="line-height: 1.2em;color: #505050;">
            Wonderful! Your reservation has being confirmed.
        </p>

        <div style="overflow-x:auto;">

            <table style="margin: 0 auto;">
                <tr>
                    <th style="text-align: left;width: 50%;padding: 1em 1em 1em 0em;color: #505050;font-weight: 500;">Name</th>
                    <td style="text-align: right;width: 50%;padding: 1em 0em;color: #323232;font-weight: 600;">${
                      reservationData.name
                    }</td>
                </tr>
                <tr>
                    <th style="text-align: left;width: 50%;padding: 1em 1em 1em 0em;color: #505050;font-weight: 500;">Email</th>
                    <td style="text-align: right;width: 50%;padding: 1em 0em;color: #323232;font-weight: 600;">${
                      reservationData.email
                    }</td>
                </tr>
                <tr>
                    <th style="text-align: left;width: 50%;padding: 1em 1em 1em 0em;color: #505050;font-weight: 500;">Number</th>
                    <td style="text-align: right;width: 50%;padding: 1em 0em;color: #323232;font-weight: 600;">${
                      reservationData.number
                    }</td>
                </tr>
                <tr>
                    <th style="text-align: left;width: 50%;padding: 1em 1em 1em 0em;color: #505050;font-weight: 500;">Guests</th>
                    <td style="text-align: right;width: 50%;padding: 1em 0em;color: #323232;font-weight: 600;">${
                      reservationData.guests
                    }</td>
                </tr>
                <tr>
                    <th style="text-align: left;width: 50%;padding: 1em 1em 1em 0em;color: #505050;font-weight: 500;">Time</th>
                    <td style="text-align: right;width: 50%;padding: 1em 0em;color: #323232;font-weight: 600;">${
                      reservationData.time
                    }</td>
                </tr>
                <tr>
                    <th style="text-align: left;width: 50%;padding: 1em 1em 1em 0em;color: #505050;font-weight: 500;">Date</th>
                    <td style="text-align: right;width: 50%;padding: 1em 0em;color: #323232;font-weight: 600;">${
                      reservationData.date
                    }</td>
                </tr>
            </table>

        </div>

        <!-- CTA -->
        <a class="cta" href="https://calendar.google.com/calendar/r/eventedit?text=Wild+Tiger+Reservation+Check-IN&dates=${getCalendarTime(
          reservationData.date,
          reservationData.time
        )}/${getCalendarTime(
          reservationData.date,
          reservationData.time,
          15
        )}&details=Wild+Tiger+Laotian+%26+Thai+Cuisines%3A+%0AReservation+for+a+table+of+${encodeURI(
          reservationData.guests
        ).replace(/\+/, "%2B")}+in+the+name+of+${encodeURI(
          reservationData.name
        )}.+%0A%0ANOTE%3A+Reserved+table+is+subject+to+availability+after+15+minutes+of+reserved+time.+Contact+us+for+rescheduling+opportunities.+%0A%0AIf+you+have+any+questions+feel+free+to+call+us+at+%2B1+(360)+882-8887+or+email+help%40wildtigerwa.com&location=Wild+Tiger+1825+SE+164th+AVE+Suite+101+Vancouver%2C+WA+98683"
            style="color: white;font-weight: 500;transition: all 0.2s ease-in-out;text-decoration: none;background: #0fc96c;display: inline-block;font-size: 1.2em;padding: 0.7em 1em;border-radius: 10em;margin: 1em 0;box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.6);line-height: 1em;">Add
            to Google Calendar</a>

        <p style="line-height: 1.2em;color: #505050;">That was a mistake? <a class="noWrap" href="https://us-central1-grip-wildtiger.cloudfunctions.net/api/cancel-reservation/${reservationId}"
                style="color: #323232;font-weight: 500;transition: all 0.2s ease-in-out;display: inline-block;">Cancel
                your Reservation</a></p>
        <!-- Note -->
        <p class="note" style="line-height: 1.2em;color: #505050;font-size: 0.9em;margin-top: 3em;">
            NOTE: Reserved table is subject to availability after 15 minutes of reserved time. Contact us for
            rescheduling opportunities.
        </p>

        <hr style="border: 0;border-top: 2px solid whitesmoke;margin: 30px;">

        <div class="email-questions">
            <!-- heading Need Help? -->
            <h2 style="font-size: 1.2em;color: #323232;">Questions?</h2>
            <!-- paragraph for any further querries contact us -->
            <p style="line-height: 1.2em;color: #505050;">
                If you have any questions feel free to call us at
                <a class="noWrap" href="tel:+1-360-882-8887" style="color: #323232;font-weight: 500;transition: all 0.2s ease-in-out;display: inline-block;">+1
                    (360) 882-8887</a>
                or email
                <a class="noWrap" href="mailto:help@wildtigerwa.com" style="color: #323232;font-weight: 500;transition: all 0.2s ease-in-out;display: inline-block;">help@wildtigerwa.com</a>
            </p>
        </div>
    </div>
</div>
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
        .catch(err => {
          console.error(
            `There was an error while sending email to ${
              reservationData.email
            } :`,
            err
          );
        });
    }
  });
