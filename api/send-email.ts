import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../utils/send-email";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email } = req.body;
    await sendEmail(name, email);
    return res.status(200).end();
  }
  console.log("here");

  return res.status(404).json({
    error: {
      code: "not_found",
      message:
        "The requested endpoint was not found or doesn't support this method.",
    },
  });
};

// server.post('/api/contact', (req, res) => {
//   const { email, name } = req.body
//   console.log(req.body)
//   res.send('success')
// })
