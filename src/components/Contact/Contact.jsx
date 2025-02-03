import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.scss';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmationMessage(`${name}, votre message a bien été envoyé.`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100 ">
            <div className="contact-form card p-4">
                <h3 className="text-center text-white">Contactez-nous</h3>
                {confirmationMessage ? (
                    <p className="confirmation-message text-center text-white">{confirmationMessage}</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label text-white">Nom:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Votre nom"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Votre email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">Message:</label>
                            <textarea
                                className="form-control"
                                placeholder="Votre message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-light w-100">Envoyer</button>
                    </form>
                )}
            </div>
        </div>
    );
}