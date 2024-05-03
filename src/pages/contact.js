import React from 'react';
import imageSrc from './img.png'; // Update the path to your image
import './index.css'; // Update the path if your structure is different
import { Link } from 'react-router-dom';



function Contact() {
    return (
        <div className="homeContainer">
            <section className="dexcomFitbitSection">
                <h2 className="contactSectionTitle">Have questions or feedback? We'd love to hear from you!</h2>
                <p className="contactSectionContent">
                    Emails:
                </p>
                <p className="contactSectionContent">
                    Nansy Ibrahim - e241530@metu.edu.tr
                </p>
                <p className="contactSectionContent">
                    Atakan Bayil - e223707@metu.edu.tr
                </p>
                <p className="contactSectionContent">
                    Sarp Kantar - e237515@metu.edu.tr
                </p>
                <p className="contactSectionContent">
                    Batuhan Yildiz - e238077@metu.edu.tr
                </p>
                <p className="contactSectionContent">
                    Baran - e238077@metu.edu.tr
                </p>
            </section>
        </div>
    );
}

export default Contact;
