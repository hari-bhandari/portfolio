import React, {Fragment, useState} from 'react';

const ContactMe = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [response, setResponse] = useState('')

    const sendEmail = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({name, email, subject, response});

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            await fetch("https://formspree.io/mgenrlnr", requestOptions)
            setResponse("Your email has been received, I will get back to you as soon as possible")
        } catch (e) {
            setResponse('Something went wrong, Please try again')
        }
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        if (name === '' || email === '' || subject === '' || message === '') {
            setResponse('Please enter all fields correctly')
        } else {
            await sendEmail()
        }
    }


    return (
        <Fragment>
            <div className='modal fade text-bolder' id="contactModal">
                <div className="modal-dialog">
                    <div className='modal-content background'>
                        <div className="modal-header">
                            <h5 className="modal-title">Contact Us</h5>

                            <button className="close" data-dismiss="modal">
                                <span className="text-bolder">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmit}>
                                {response !== '' && (<div className="info-msg" role="alert">
                                    {response}
                                </div>)}
                                <div className="form-group">
                                    <label htmlFor="name">Name*</label>
                                    <input type="text" className="form-control" onChange={(e) => {
                                        setName(e.target.value)
                                    }} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email*</label>
                                    <input type="email" className="form-control" onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject*</label>
                                    <input type="text" className="form-control" onChange={(e) => {
                                        setSubject(e.target.value)
                                    }} required/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message*</label>
                                    <textarea className="form-control" required onChange={(e) => {
                                        setMessage(e.target.value)
                                    }}/>
                                </div>


                                <div className="modal-footer">
                                    <button onClick={onSubmit} className="btn btn-primary btn-block">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </Fragment>
    );
};

export default ContactMe;