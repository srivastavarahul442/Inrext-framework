require('dotenv').config();
const migrate = require('./migration');
const mailer = require('./mail');

// Run migration
migrate();

// Send demo email
const sendDemoEmail = async () => {
  try {
    await mailer.sendEmail(
      'rahulmithu5@gmail.com',
      'Demo Email from Inrext Framework',
      '<h1>Hello!</h1><p>This is a demo email from the Inrext Framework.</p>'
    );
    console.log('Demo email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error.message);
  }
};

// Uncomment the line below to send demo email
sendDemoEmail();

module.exports = {
  migrate,
  mailer,
  sendDemoEmail,
};
