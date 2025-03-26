import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./MiddlePart.css";

function MiddlePart() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".index-division-5-2 > div");
    const listItems = document.querySelectorAll(".index-division-5-1 ul li");
  
    const checkAlignment = () => {
      let activeId = null;
  
      sections.forEach((section, index) => {
        const sectionRect = section.getBoundingClientRect();
        const listItem = listItems[index]; // Matching `li` for each `div`
  
        if (listItem) {
          const listItemRect = listItem.getBoundingClientRect();
  
          // Check if the top positions of section and list item are nearly the same
          if (Math.abs(sectionRect.top - listItemRect.top) < 10) {
            activeId = section.getAttribute("id");
          }
        }
      });
  
      if (activeId) {
        setActiveSection(activeId);
      }
    };
  
    window.addEventListener("scroll", checkAlignment);
    window.addEventListener("resize", checkAlignment);
    checkAlignment(); // Run initially
  
    return () => {
      window.removeEventListener("scroll", checkAlignment);
      window.removeEventListener("resize", checkAlignment);
    };
  }, []);
  
  

  return (
    <>
      <section className="index-section-5">
        <div className="index-division-5-1">
          <ul>
            <li
              className={activeSection === "section1" ? "active" : ""}
              id="one"
            >
              Creative Branding
            </li>
            <li
              className={activeSection === "section2" ? "active" : ""}
              id="two"
            >
              Influencer Marketing
            </li>
            <li
              className={activeSection === "section3" ? "active" : ""}
              id="three"
            >
              Brand Strategy
            </li>
            <li
              className={activeSection === "section4" ? "active" : ""}
              id="four"
            >
              Consulting
            </li>
          </ul>
        </div>
        <div className="index-division-5-2">
          <motion.div
            id="section1"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: activeSection === "section1" ? 1 : 0.5,
              y: activeSection === "section1" ? 0 : 50,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="index-div-5-2-1"
          >
            <h2 className="middlepart-h2">Not just your Ordinary Branding Agency</h2>
            <p>
              Your brand is your reputation and those small details and trends
              tend to make a huge impact on eyes, hearts and minds of the people
              around you. Making people Admire those small details and streaks
              creates a huge impact on their subconscious minds, which is
              nothing but magic.And we do that magic for you!
            </p>
          </motion.div>

          <motion.div
            id="section2"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: activeSection === "section2" ? 1 : 0.5,
              y: activeSection === "section2" ? 0 : 50,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="index-div-5-2-2"
          >
            <h2 className="middlepart-h2">Underrated yet Extensive</h2>
            <p>
              From using the referral code for an extra 20% discount to getting
              us to follow a new skin care routine, the influencers got us. Not
              just us, you too. These people are backed up by loyal audiences
              who relate themselves with them. So why still underestimate the
              power of the new age word-of-mouth marketing? Let onekit be the
              bridge between the brand and the influencer, so the influencer as
              well as the brand can skip the tedious process of outreach,
              building strategies, and running campaigns.
            </p>
          </motion.div>

          <motion.div
            id="section3"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: activeSection === "section3" ? 1 : 0.5,
              y: activeSection === "section3" ? 0 : 50,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="index-div-5-2-3"
          >
            <h2 className="middlepart-h2">It’s high time to define your brand</h2>
            <p>
              Questions like what is the meaning of the brand, why does it
              exist, what is the market volume, how to win over competitors and
              hence forth must be addressed. Before vaguely coming up with
              solutions we at onekit do intense case studies and immense
              research to full-fill the problem of how the brand wants to be
              perceived and how the ideal customer perceives the brand.
            </p>
          </motion.div>

          <motion.div
            id="section4"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: activeSection === "section4" ? 1 : 0.5,
              y: activeSection === "section4" ? 0 : 50,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="index-div-5-2-4"
          >
            <h2 className="middlepart-h2">Borrow the onekit Brains</h2>
            <p>
              More than time burnt on designing and planning content, we spend
              majority of our time on analysing the needs of brands. By just
              pointing out the North Star brand which is nothing but the brands
              those are similar to the brand that we want to create or become,
              we at onekit can obtain insights and concepts to get you there to
              where you there to where you wanted to be.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default MiddlePart;
