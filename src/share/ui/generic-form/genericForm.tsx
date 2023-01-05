import React from 'react'
import { GenericFormProps } from '../../utils/types.utils'
import { GenericButton } from '../generic-button/genericButton'



export default function GenericForm() {

    // Handles submit event on form submit.
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // Stop form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data: GenericFormProps = {
            fullName: event.currentTarget.fullName.value,
            email: event.currentTarget.email.value,
            subject: event.currentTarget.subject.value,
            message: event.currentTarget.message.value
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // API endpoint to send form data.
        const endpoint = '/api/form'

        // Forming request to send data to server.
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        // Send form data to form API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        // Get response data from server as JSON.
        const result = await response.json()
        alert(`Is this your full name: ${result.data}`)
    }

    // Styles

    const formContainerClass = 'w-100 f-column flex-center-all';
    const fieldWrapperClass = 'w-100 f-column a-start pb-5';
    const labelClass = 'pt-3 pb-2';
    const inputClass = 'p-2';

    return (

        <>
            <form className={formContainerClass} onSubmit={handleSubmit}>
                <div className={fieldWrapperClass}>
                    <label className={labelClass} htmlFor="fullName">Name</label>
                    <input className={inputClass} type="text" id="fullName" name="fullName" placeholder='John Doe' required  />

                    <label className={labelClass} htmlFor="email">Email</label>
                    <input className={inputClass} type="text" id="email" name="email" placeholder='johndoe@example.com' required />

                    <label className={labelClass} htmlFor="subject">Subject</label>
                    <input className={inputClass} type="text" id="subject" name="subject" placeholder='Price Quotation Request' required />

                    <label className={labelClass} htmlFor="message">Message</label>
                    <textarea className={inputClass} id="message" name="message"  placeholder='Write here your request into details. '></textarea>
                </div>

                <GenericButton label={'Submit'} isPrimary={true} type={"submit"} styles={{ fontSize: '0.9rem' }} />
            </form>
        </>
    )
}

