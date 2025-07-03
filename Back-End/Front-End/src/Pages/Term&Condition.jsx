import React from "react";

import Call from "../assets/call-calling.png";
import FooterBG from "../assets/FooterBG.png";

const TermHero=() =>{
    return(
            <section
              className="bg-[#172423] overflow-hidden bg-cover bg-center h-[466px]"
              style={{ backgroundImage: `url(${FooterBG})` }}
            >
              <div className="text-center pt-[130px] pb-[100px]">
                <h2 className="font-bold text-[#E99F69] text-[20px]">Term & Conditions</h2>
                <h3 className="font-bold text-[48px] text-[#FFFFFF]">
                Your Privacy Matters
                </h3>
                <div className="pt-4 text-center mt-[50px]">
                  <button className="inline-flex items-center space-x-3 bg-[#E99F69] hover:bg-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <img src={Call} alt="Call Icon" className="h-5 w-5" />
                    <span>Get In Touch</span>
                  </button>
                </div>
              </div>
            </section>
        
    );
}

const Conditions =() =>{
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Terms and Conditions</h1>
          <p className="mb-6">
            Welcome to LawCase. By accessing or using our website ("Site"), you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with these terms, please refrain from using our services.
          </p>
    
          <section className="mb-6">
            <h2 className="font-semibold text-lg mb-2">1. General Information</h2>
            <p>
              LawCase is a legal services platform that provides information and resources related to commercial and business law. The information provided on this Site is for general informational purposes only and does not constitute legal advice or establish an attorney-client relationship.
            </p>
          </section>
    
          <section className="mb-6">
            <h2 className="font-semibold text-lg mb-2">2. Use of Our Services</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>You must be at least 18 years old to use our Site.</li>
              <li>You agree to use this Site for lawful purposes only.</li>
              <li>Unauthorized use, including hacking, data mining, or distributing malicious software, is strictly prohibited.</li>
              <li>We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.</li>
            </ul>
          </section>
    
          <section className="mb-6">
            <h2 className="font-semibold text-lg mb-2">3. No Attorney-Client Relationship</h2>
            <p>
              Use of this Site does not create an attorney-client relationship between you and LawCase or any of its representatives. If you require legal assistance, please consult a qualified attorney.
            </p>
          </section>
    
          <section className="mb-6">
            <h2 className="font-semibold text-lg mb-2">4. Intellectual Property</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>All content on this Site, including text, graphics, logos, and images, is the property of LawCase and is protected under applicable intellectual property laws.</li>
              <li>You may not copy, reproduce, or distribute our content without prior written permission.</li>
            </ul>
          </section>
    
          <section className="mb-6">
            <h2 className="font-semibold text-lg mb-2">5. Limitation of Liability</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>LawCase does not guarantee the accuracy, completeness, or reliability of any information provided on the Site.</li>
              <li>We are not liable for any damages arising from your use or inability to use our Site.</li>
              <li>In jurisdictions that do not allow limitations of liability, our liability will be limited to the maximum extent permitted by law.</li>
            </ul>
          </section>
    
          <section className="mb-6">
            <h2 className="font-semibold text-lg mb-2">6. Third-Party Links</h2>
            <p>
              Our Site may contain links to third-party websites. LawCase is not responsible for the content, policies, or practices of these external sites.
            </p>
          </section>
    
          <section className="mb-6">
            <h2 className="font-semibold text-lg mb-2">7. Privacy Policy</h2>
            <p>
              Your use of our Site is also governed by our Privacy Policy, which outlines how we collect, use, and protect your data.
            </p>
          </section>
    
          <section className="mb-6">
            <h2 className="font-semibold text-lg mb-2">8. Changes to Terms and Conditions</h2>
            <p>
              We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page, and your continued use of the Site signifies your acceptance of the updated terms.
            </p>
          </section>
    
          <section className="mb-6">
            <h2 className="font-semibold text-lg mb-2">9. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these terms will be resolved in the courts of [Your Jurisdiction].
            </p>
          </section>
    
          <section>
            <h2 className="font-semibold text-lg mb-2">10. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at [email address] or [phone number].
            </p>
            <p className="mt-4">
              By using LawCase, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
            </p>
          </section>
        </div>
      );
    }

const TermCondtion=()=>{
    return(
      <>
        <TermHero />
        <Conditions/>
        </>
    );
}

export default TermCondtion;