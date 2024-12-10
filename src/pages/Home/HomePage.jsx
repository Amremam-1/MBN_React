import React from "react";
import Intro from "../../components/Intro";
import Mask from "../../components/Mask";
import Services from "../../components/Services";
import Counter from "../../components/Counter";
import Portfolio from "../../components/packagePortfolio/Portfolio";
import Testimonial from "../../components/packageTestmonial/Testimonial";
import ContactForm from "../../components/ContactForm";

const HomePage = () => {
  return (
    <div>
      <Intro />
      <Mask />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonial />
      <ContactForm />
    </div>
  );
};

export default HomePage;
