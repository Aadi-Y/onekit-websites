import React, { useState } from "react";
import "./ReachUs.css";

const ReachUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [futureOpportunities, setFutureOpportunities] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !portfolio || !privacyPolicy) {
      setError(
        "All required fields must be filled and privacy policy accepted."
      );
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    try {
      const response = await fetch(
        "https://onekit-backend.vercel.app/send-reachUs-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            portfolio,
            privacyPolicy,
            futureOpportunities,
          }),
        }
      );

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
    <>
      <div className="reach-part-main">
        <div className="reach-form-cont">
          <form onSubmit={handleSubmit}>
            <input
              className="reach-part1"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="reach-part1"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="reach-part1"
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="reach-part1"
              type="text"
              placeholder="Portfolio URL"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
            />

            <div className="reach-priv1">
              <input
                type="checkbox"
                checked={privacyPolicy}
                onChange={(e) => setPrivacyPolicy(e.target.checked)}
              />
              <p>
                I have read the Privacy Policy and confirm that onekit store my
                personal details to be able to process my job application.
              </p>
            </div>
            <div className="reach-priv1">
              <input
                type="checkbox"
                checked={futureOpportunities}
                onChange={(e) => setFutureOpportunities(e.target.checked)}
              />
              <p>
                Yes, onekit can also contact me about future job opportunities.
              </p>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="reach-cont1">
          <h1>Let'onekit.</h1>
          <h1 style={{ fontWeight: 100 }}>together</h1>
        </div>
      </div>
    </>
  );
};

export default ReachUs;
