const nodemailer = require("nodemailer");

const add = async (req, res) => {
  const { firstname, lastname, email, message } = req.body;

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // Your email
      pass: process.env.EMAIL_PASSWORD, // Your email password or App password if 2FA is enabled
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL, // The receiving email address
    subject: "Nouveau message de",
    text: `Prénom: ${firstname}\nNom: ${lastname}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    res.status(500).send("Error sending email");
  }
};

module.exports = {
  add,
};
