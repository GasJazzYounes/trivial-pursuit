import React, { useEffect } from "react";

function AnswerNotification({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        console.log("AnswerNotification: Hiding notification");
        onClose();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return show ? (
    <div className="answer-notification-container">
      <div className="answer-notification">
        <p>{message}</p>
      </div>
    </div>
  ) : null;
}

export default AnswerNotification;
