import React from "react";


const Resume = () => {
  const buttonContainerStyles = {
    display: "flex",
    justifyContent: "center",
    gap: "1em",
    
  }
  const ctaButtonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#98760B',
    color:'#032825',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: "600",
  }
  const experiences = [

    {
      id: 1,
      year: "09/2024 - 12/2024",
      title: "Virtual Assistant- Intern",
      company: "SolotechSystems",
      description:
        "Networking company based in Amboseli, Lavington.It offers services ranging from Wi-Fi installations to CCTV configurations.",
    },
    {
      id: 2,
      year: "05/2024 - 08/2024",
      title: "Electric Bikes Engineer",
      company: "eBee Mobility Africa",
      description:
      "eBee is an E-mobility company in Kenya and Africa.It specializes in electric bikes for transport, leisure, and last-mile delivery.",
    },
    
  ];

  const education = [
    {
      id: 1,
      year: "GRADUATED",
      title: "Bachelor of Technology in Computer and Electronic Systems Engineering",
      institution: "Mount Kenya University",
      description:
          "A comprehensive degree program equipping me with the knowledge and skills in computer hardware, software, and electronic systems design.",
  },
  {
      id: 2,
      year: "2024 - 2024",
      title: "Virtual Assistant",
      institution: "ALX Africa",
      description:
          "A training program focused on developing essential virtual assistant skills and technical proficiency, enhancing my ability to provide remote administrative support.",
  },
  ];

  return (
    <div className="resume-container">
      <h2 className="resume-title">MY RESUME</h2>

      <div style={buttonContainerStyles}>
          <a button style={ctaButtonStyle}         
              href="https://drive.google.com/file/d/1Xki5QFwDpzc9czcjevyIx59olIsApLRC/view?usp=drivesdk"
              download="JOHN JUMA_CV.pdf" target="_blank" rel="noopener noreferrer"> Download CV </a>
      </div>

      <div className="resume-sections">
        {/* Experiences */}
        <div className="resume-section">
          <h3 className="section-title">Experience</h3>
          <div className="timeline">
            {experiences.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-number">{exp.id}</div>
                <p className="timeline-year">{exp.year}</p>
                <h4 className="timeline-title">{exp.title}</h4>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="resume-section">
          <h3 className="section-title">Education</h3>
          <div className="timeline">
            {education.map((edu) => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-number">{edu.id}</div>
                <p className="timeline-year">{edu.year}</p>
                <h4 className="timeline-title">{edu.title}</h4>
                <p className="timeline-company">{edu.institution}</p>
                <p className="timeline-description">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

const css = `

.resume-container {
  background-color:  #032825;
  color: white;
  padding: 50px 20px;
  text-align: center;
}

.resume-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 0px;
}

.resume-button-container {
  margin-top: 10px;
}

.resume-button {
  background-color: #98760B;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  text decoration: none;
}

.resume-sections {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 0px;
}

.resume-section {
  width: 45%;
  text-align: left;
}

.section-title {
  font-size: 1.8rem;
  font-weight: bold;
  border-bottom: 2px solid #98760B;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.timeline {
  position: relative;
  padding-left: 25px;
  border-left: 3px solid #98760B;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
}

.timeline-number {
  position: absolute;
  left: -40px;
  top: 0px;
  width: 25px;
  height: 25px;
  background-color: #98760B;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 25px;
  border-radius: 50%;
}

.timeline-year {
  color: #98760B;
  font-weight: bold;
}

.timeline-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.timeline-company {
  font-style: italic;
  color: #f5f5dc;
  // font-weight: bold;
}

.timeline-description {
  color: #bbb;
}

@media (max-width: 768px) {
  .resume-sections {
    flex-direction: column;
    align-items: center;
  }

  .resume-section {
    width: 90%;
  }
}
  

`;
const styleElement = document.createElement("style");
styleElement.textContent = css;
document.head.appendChild(styleElement);