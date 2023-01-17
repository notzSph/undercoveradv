import { NextApiRequest, NextApiResponse } from "next";

const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "mail.undercoveradv.com",
  secure: true, // true for 465, false for other ports
  auth: {
    user: "hey@undercoveradv.com", // generated ethereal user
    pass: "#Weareundercover2023" // generated ethereal password
  }
});





export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const body = req.body
  // Get data submitted in request's body.

  const message = {
    from: "no-reply-undercover@undercoveradv.com",
    to: "hey@undercoveradv.com",
    subject: "From Succesfully Submitted",
    text: `${body.fullName} ${body.email} ${body.subject} ${body.message}`,
  };
  
  console.log('body: ', body)

  if (!body.fullName || !body.email || !body.subject || !body.message) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'Please Fill All Required Fields' })
  }

  await transport.sendMail(message, (error: any, info: any) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });

  res.status(200).json({ data: `${body.fullName} ${body.email} ${body.subject} ${body.message}`, name: `${body.fullName}` })

}