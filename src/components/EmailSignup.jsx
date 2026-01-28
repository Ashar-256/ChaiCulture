import React, { useState } from 'react';
import './EmailSignup.css';

const EmailSignup = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        // Simulate API call
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <section className="signup-section container text-center">
            <div className="signup-wrapper">
                <h3 className="signup-heading">Join the Guest List</h3>
                <p className="signup-sub">Be the first to know when we open our doors.</p>

                {status === 'success' ? (
                    <div className="success-message">
                        <p>Thank you. You have been added to our royal guest list.</p>
                    </div>
                ) : (
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="signup-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === 'loading'}
                        />
                        <button type="submit" className="signup-btn uppercase" disabled={status === 'loading'}>
                            {status === 'loading' ? 'Processing...' : 'Notify Me'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default EmailSignup;
