import fetch from "node-fetch";

const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";
const SENDGRID_API_KEY =
  "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";
const sendEmail = async (name: string, email: string) => {
  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email,
            },
          ],
          subject: "sub",
        },
      ],
      from: {
        email: "ahmed.ely.mabrouk@gmail.com",
        name: "Ahmed",
      },
      content: [
        {
          type: "text/html",
          value: `Congratulations <b>${name}</b>, you just sent an email with sendGrid`,
        },
      ],
    }),
  });
};

export { sendEmail };
