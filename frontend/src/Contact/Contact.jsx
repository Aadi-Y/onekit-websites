import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requirements, setRequirements] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!companyName || !name || !email || !phone || !requirements) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
  
    try {
      const response = await fetch("https://onekit-backend.vercel.app/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ companyName, name, email, phone, requirements }),
      });
  
      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        const errorData = await response.json();
        alert("Failed to send email: " + errorData.error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="contact-part-main">
      <div className="contact-cont1">
        <h1>Connect</h1>
        <h1 style={{ fontWeight: 100 }}>with onekit</h1>
      </div>
      <div className="contact-form-cont">
        <form onSubmit={handleSubmit}>
          <input 
            className="contact-part1" 
            type="text" 
            placeholder="Company Name" 
            value={companyName} 
            onChange={(e) => setCompanyName(e.target.value)} 
          />
          <input 
            className="contact-part1" 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            className="contact-part1" 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            className="contact-part1" 
            type="number" 
            placeholder="Phone" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
          />
          <input 
            className="contact-part1" 
            type="text" 
            placeholder="Enter your requirements" 
            value={requirements} 
            onChange={(e) => setRequirements(e.target.value)} 
          />
          {error && <p className="error-message">{error}</p>}
          <div className="contact-button-container">
            <button type="submit">SCHEDULE DEMO</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
