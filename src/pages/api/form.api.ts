import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  // Get data submitted in request's body.
  const body = req.body

  console.log('body: ', body)

  // Guard clause checks for first and last name,
  // returns early if they are not found
  if (!body.fullName || !body.email || !body.subject || !body.message) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'Please Fill All Required Fields' })
  }

  res.status(200).json({ data: `${body.fullName} ${body.email} ${body.subject} ${body.message}`, name: `${body.fullName}` })

}