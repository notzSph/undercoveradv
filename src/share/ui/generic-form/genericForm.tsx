import React from 'react'
import { useLayout } from '../../../hooks/useLayout.hook'
import { GenericFormProps } from '../../utils/types.utils'
import { GenericButton } from '../generic-button/genericButton'
import styles from './genericForm.module.scss'


export default function GenericForm() {

    const { isMobile } = useLayout()

    // Handles submit event on form submit.
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // Stop form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data: GenericFormProps = {
            fullName: event.currentTarget.fullName.value,
            email: event.currentTarget.email.value,
            subject: event.currentTarget.subject.value,
            message: event.currentTarget.message.value,
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
        alert(`Thanks ${result.name}! Your Form has been submitted succesfully, check your inbox for updates!`)
    }

    // Styles

    const formContainerClass = 'w-100 f-column flex-center-all';
    const fieldWrapperClass = `w-100 f-column a-start pb-4`;
    const labelClass = `${styles.label} pt-3`;
    const inputClass = `${styles.input} p-2`;
    const textareaClass = `${styles.textarea} p-2`;
    const checkboxClass = `${isMobile ? 'pb-4' : 'pb-5'} w-100 f-row a-center`;

    return (

        <>
            <form className={formContainerClass} onSubmit={handleSubmit}>
                <div className={fieldWrapperClass}>
                    <label className={labelClass} htmlFor="fullName">Name *</label>
                    <input className={inputClass} type="text" id="fullName" name="fullName" placeholder='John Doe' required />

                    <label className={labelClass} htmlFor="email">Email *</label>
                    <input className={inputClass} type="text" id="email" name="email" placeholder='johndoe@example.com' required />

                    <label className={labelClass} htmlFor="subject">Subject *</label>
                    <input className={inputClass} type="text" id="subject" name="subject" placeholder='How can we help you?' required />

                    <label className={labelClass} htmlFor="message">Message *</label>
                    <textarea className={textareaClass} id="message" name="message" placeholder='What can can we do to help you?' required />
                </div>
                <div className={checkboxClass}>
                    <input style={{ width: '20px' }} type="checkbox" id="policy" name="policy" required />
                    <label style={{ marginLeft: '15px', fontSize: '0.75rem', paddingTop: '0' }} className={labelClass} htmlFor="policy">Ho Letto e Accetto l&apos;Informativa sulla privacy</label>
                </div>

                <GenericButton label={'Submit'} isPrimary={true} type={"submit"} styles={{ fontWeight: '500' }} />
            </form>
        </>
    )
}

