import { NextApiRequest, NextApiResponse } from "next";
import admin from 'firebase-admin';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {


  const body = req.body
  const docName = `${body.fullName} From Submitted`;


  admin.firestore().collection('form').doc(docName).set({
    to: "edoardoglinac@gmail.com",
    message: {
      subject: 'Form Succesfully Submitted',
      html: `name: ${body.fullName} || email: ${body.email} || subject: ${body.subject} || message: ${body.message}`,
    },
  })

  // Get data submitted in request's body.
  console.log('body: ', body)

  if (!body.fullName || !body.email || !body.subject || !body.message) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'Please Fill All Required Fields' })
  }

  res.status(200).json({ data: `${body.fullName} ${body.email} ${body.subject} ${body.message}`, name: `${body.fullName}` })

}