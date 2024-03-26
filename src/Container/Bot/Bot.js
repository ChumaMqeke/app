import React from "react";
import "./Bot.css";

const Bot = () => {
  const handleChatbotClick = () => {
    // Scroll to the contacts section
    const contactsSection = document.getElementById("contact");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed"
    >
      <ion-icon name="chatbubble-ellipses" onClick={handleChatbotClick}></ion-icon>
    </div>
  );
};

export default Bot;
