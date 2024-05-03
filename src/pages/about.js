import React from 'react';
import imageSrc from './img.png'; // Update the path to your image
import './index.css'; // Update the path if your structure is different
import baran from './baran.jpg'; // Adjust path as necessary
import nancy from './nancy.jpg'; // Adjust path as necessary
import atakan from './atakan.jpg'; // Adjust path as necessary
import sarp1 from './sarp1.jpg'; // Adjust path as necessary
import batuhan from './batuhan.jpg'; // Adjust path as necessary
import { Link } from 'react-router-dom';



function About() {
    return (
        <div className="homeContainer">
            
            <section className="doSection">
                <h2 className="doSectionTitle">What We Do</h2>
                <p className="doSectionContent">At GlucoGuardian, we leverage cutting-edge technology to enhance the lives of individuals managing diabetes. Our primary goal is to facilitate a comprehensive and personalized approach to diabetes management that harmonizes with each patient’s lifestyle. Through the innovative use of machine learning and real-time data analytics, we provide crucial insights and predictive alerts that help patients prevent critical glucose events and optimize their health management strategies.
</p>
            </section>

            <div className="container">
                <h2 className="coreFeaturesSectionTitle">Core Features of GlucoGuardian</h2>
                <section className="coreFeaturesSection">
                    <div className="coreFeaturesSectionContent">
                        <h3>Lifestyle Impact Analyzer</h3>
                        <p>Our system utilizes advanced machine learning algorithms to analyze data from wearable devices like Dexcom and Fitbit. This feature helps uncover the intricate relationships between various lifestyle factors—such as diet, physical activity, sleep patterns, and stress levels—and their impact on blood glucose levels. This analysis empowers patients with a deeper understanding of how their daily routines influence their health, enabling them to make informed decisions to maintain optimal glycemic control.</p>
                    </div>
                    <div className="coreFeaturesSectionContent">
                        <h3>Intelligent Alert System</h3>
                        <p>We have developed a real-time alert system that uses time-series analysis and adaptive learning models to predict and notify patients of potential hypoglycemic or hyperglycemic events before they occur. This proactive approach allows patients to take preventive measures, significantly reducing the risks associated with abrupt glucose fluctuations.</p>
                    </div>
                    <div className="coreFeaturesSectionContent">
                        <h3>Comprehensive Health Dashboard</h3>
                        <p>Our user-friendly dashboard serves as a central hub where patients and healthcare providers can view and analyze health data. It combines insights from both the Lifestyle Impact Analyzer and the Intelligent Alert System, offering detailed visualizations, correlation matrices, and actionable insights. The dashboard facilitates a holistic view of health metrics, encouraging proactive health management.</p>
                    </div>
                </section>
            </div>



            <section className="ourCommitmentSection">
                <h2 className="ourCommitmentSectionTitle"> Our Commitment</h2>
                <p className="ourCommitmentSectionContent"> GlucoGuardian is committed to transforming diabetes care by providing tools that support better health outcomes. Our platform not only caters to those with diabetes but also offers valuable insights to anyone interested in understanding and improving their health through data-driven analysis. We continue to innovate and adapt, ensuring our solutions are at the forefront of technology and healthcare.</p>
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

export default About;
