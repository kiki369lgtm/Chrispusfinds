// Mock mailer — logs instead of sending. Swap the body of sendMail for a real
// provider (Nodemailer/SES/SendGrid) later; every caller already goes through
// this one function so nothing else needs to change.
const sendMail = async ({ to, subject, html }) => {
    console.log(`\n--- MOCK EMAIL ---\nTo: ${to}\nSubject: ${subject}\n${html}\n------------------\n`);
    return true;
};

module.exports = { sendMail };
