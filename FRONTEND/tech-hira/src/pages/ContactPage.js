import React, { useEffect, useState } from 'react';
import ContactDetails from '../components/ContactDetails';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './style/ContactPage.css';

const ContactPage = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();  // Prevent the default mini-infobar
            setDeferredPrompt(e);  // Save the event for later use
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install');
                } else {
                    console.log('User dismissed the install');
                }
                setDeferredPrompt(null);  // Clear the saved event
            });
        }
    };

    return (
        <div>
            <Header />
            <div className="contact-page">
                <ContactForm />
                <ContactDetails />
            </div>
            {/* Add the install button, only showing it if the install prompt is available */}
            {deferredPrompt && (
                <button onClick={handleInstallClick} className="install-button">
                    Install App
                </button>
            )}
            <Footer />
        </div>
    );
};

export default ContactPage;
