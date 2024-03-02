import React from "react";

const DocumentAI = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        left: "17vw",

        width: "83%",
        height: "100%",
      }}
    >
      <iframe
        title="Streamlit Chatbot"
        // src="http://54.87.189.202:8501/"
        src="http://localhost:8501/"
        width="100%"
        height="900px"
        allow="fullscreen"
        style={{ border: "none" }} // Optional: Remove iframe border
      />
    </div>
  );
};

export default DocumentAI;
