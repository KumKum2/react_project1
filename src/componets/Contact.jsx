import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <main>
                <h1>Contact Us</h1>

                <form>
                    <div>
                        <label>Name</label>
                        <input type='text' required placeholder='Rahul Kumar' />
                    </div>

                    <div>
                        <label>Name</label>
                        <input type='text' required placeholder='Rahul Kumar' />
                    </div>

                    <div>
                        <label>Email</label>
                        <input type='email' required placeholder='abc@xyz.com' />
                    </div>

                    <div>
                        <label>Message</label>
                        <input type='text' required placeholder='Tell us about your Query' />
                    </div>
                    <button type='submit'>Submit Now</button>
                </form>
            </main>

        </div>
    )
}

export default Contact;