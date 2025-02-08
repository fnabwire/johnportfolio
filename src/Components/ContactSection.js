import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <section id="ContactSection">
      <div style={contactSectionStyle}>
        <div style={contactContainerStyle}>
          {/* Address */}
          <div style={contactItemStyle}>
            <FontAwesomeIcon icon={faHome} style={iconStyle} />
            <strong style={titleStyle}>My Address</strong>
            <p style={textStyle}>Nairobi, Kenya</p>
          </div>

          {/* Phone */}
          <div style={contactItemStyle}>
            <FontAwesomeIcon icon={faPhone} style={iconStyle} />
            <strong style={titleStyle}>Give Me a Call</strong>
            <p style={textStyle}>+254 746 981 845</p>
          </div>

          {/* Email */}
          <div style={contactItemStyle}>
            <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
            <strong style={titleStyle}>Send Me an Email</strong>
            <p style={textStyle}>jumaelectricals@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const contactSectionStyle = {
  backgroundColor: "#032825",
  color: "white",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

const contactContainerStyle = {
  display: "flex",
  gap: "180px",
  justifyContent: "center",
  flexWrap: "wrap",
};

const contactItemStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "200px",
};

const iconStyle = {
  fontSize: "30px",
  color: "#98760B",
  marginBottom: "10px",
};

const titleStyle = {
  fontSize: "18px",
};

const textStyle = {
  marginTop: "5px",
};

const mediaQueries = `
  @media (max-width: 1024px) {
    .contact-container {
      gap: 100px;
    }

    .contact-item {
      max-width: 180px;
    }
  }

  @media (max-width: 768px) {
    .contact-container {
      flex-direction: column;
      gap: 40px;
      align-items: center;
    }

    .contact-item {
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    .contact-container {
      flex-direction: column;
      gap: 30px;
      align-items: center;
    }

    .contact-item {
      width: 100%;
      text-align: center;
    }

    .icon {
      font-size: 25px;
    }

    .title {
      font-size: 16px;
    }

    .text {
      font-size: 14px;
    }
  }
`;

const styleElement = document.createElement("style");
styleElement.textContent = mediaQueries;
document.head.appendChild(styleElement);

export default ContactSection;
