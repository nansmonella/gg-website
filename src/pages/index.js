import React from 'react';
import imageSrc from './img.png'; // Update the path to your image
import './index.css'; // Update the path if your structure is different
import baran from './baran.jpg'; // Adjust path as necessary
import nancy from './nancy.jpg'; // Adjust path as necessary
import atakan from './atakan.jpg'; // Adjust path as necessary
import sarp1 from './sarp1.jpg'; // Adjust path as necessary
import batuhan from './batuhan.jpg'; // Adjust path as necessary
import { Link } from 'react-router-dom';



function Index() {
    return (
        <div className="homeContainer">
            <div className="homeLanding">
                <div className="homeLandingText">
                    <h1 className="homeTitle">GlucoGuardian</h1>
                    <text className="homeDescription">We are number 1 app in diabetes management, creating a better experience for the patients!</text>
                    <Link to="/about">
                        <button className="homeLearnMoreButton">Learn More</button>
                    </Link>                
                </div>
                <img src={imageSrc} alt="GlucoGuardian" className="homeImage" />
            </div>
            <section className="dexcomFitbitSection">
                <h2 className="dexcomFitbitSectionTitle">Dexcom + Fitbit</h2>
                <p className="dexcomFitbitSectionContent">
                Dexcom devices are at the forefront of glucose monitoring technology, providing continuous, real-time data on blood glucose levels. By integrating Dexcom's API, GlucoGuardian receives up-to-the-minute glucose readings, which are crucial for accurate health assessments and timely alerts.
                </p>
                <p className="dexcomFitbitSectionContent">
                Fitbit devices track a variety of health metrics such as physical activity, heart rate, sleep patterns, and more. GlucoGuardian utilizes this data to analyze how daily activities and lifestyle choices affect glucose levels and overall well-being.
                </p>
            </section>

            <section className="whoWeAreSection">
                <h2 className="whoWeAreSectionTitle">Who We Are</h2>
                <p className="whoWeAreSectionContent">
                We are a dynamic team of software engineering students from METU, brought together by a shared commitment to innovate and improve the quality of life for individuals with diabetes.
                </p>
                <p className="whoWeAreSectionContent">
                Our diverse backgrounds in computer science, machine learning, healthcare technology, and user experience design equip us with a unique blend of skills that drive our project, GlucoGuardian.
                </p>
            </section>

            <div className="teamSection">
                <h2 className="teamSectionTitle">Our Team</h2>
                <div className="teamMember">
                    <img src={baran} alt="Tgeam Member 1"/>
                </div>
                <div className="teamMember">
                    <img src={nancy} alt="Team Member 2"/>
                </div>
                <div className="teamMember">
                    <img src={atakan} alt="Team Member 3"/>
                </div>
                <div className="teamMember">
                    <img src={sarp1} alt="Team Member 4"/>
                </div>
                <div className="teamMember">
                    <img src={batuhan} alt="Team Member 5"/>
                </div>
            </div>
        </div>
    );
}

export default Index;
