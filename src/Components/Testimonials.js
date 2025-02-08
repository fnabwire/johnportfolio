import React from "react";

const testimonials = [
  {
    name: "Faith Nasieku",
    role: "Project Manager",
    quote:
      "John's designs are incredibly creative and visually stunning. He has a great understanding of branding and always delivers high-quality work. I highly recommend him for any design project.",
  },
  {
    name: "Phyian Lee",
    role: "Content Creator",
    quote:
      "Working with John was a fantastic experience. He's a great communicator, always met deadlines, and exceeded my expectations with his innovative designs.  I'll definitely be hiring him again.",
  },
  {
    name: "Justus Kombo",
    role: "Web Developer",
    quote:
      "John's ability to translate ideas into compelling visuals is truly impressive. He's a talented and dedicated designer who brings a unique perspective to every project.  He's a true professional.",
  },
  {
    name: "Cromwell Oloo",
    role: "Project Manager",
    quote:
      "I was blown away by John's creativity and attention to detail. He took my vague ideas and turned them into a polished and professional design that perfectly captured my vision.  He's a pleasure to work with.",
  },
  {
    name: "Karani Mwale",
    role: "Graphic Designer",
    quote:
      "John is a highly skilled and versatile graphic designer. He's able to adapt to different styles and create designs that are both aesthetically pleasing and functional.  I'm thrilled with the results he delivered.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">Clients' Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

const css = `
.testimonials-section {
  text-align: center; /* Center the title */
  padding: 2em;
  background-color: #f5f5dc; /*Keeps background color*/
}

.testimonials-title {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 1em;
  color: #98760B; /* Dark Green for the title */
}

.testimonials-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
}

.testimonial-card {
  background-color: #032825;
  border-radius: 10px;
  box-shadow: 0 4px 8px #98760B;
  padding: 1.5em;
  max-width: 300px;
  text-align: center;
}

.testimonial-name {
  font-size: 1.25em;
  font-weight: bold;
  margin-bottom: 0.5em;
  color: white;
}

.testimonial-role {
  font-size: 1em;
  color: #98760B;
  margin-bottom: 1em;
}

.testimonial-quote {
  font-size: 1em;
  font-style: italic;
  color: white;
  margin-bottom: 1em; /* Space between quote and name */
}
`;

const styleElement = document.createElement("style");
styleElement.textContent = css;
document.head.appendChild(styleElement);