import React from "react";
import Hero from "../components/Hero.jsx";
import Form from "../components/Form.jsx";

const Home = () => {
  return (
    <div className="p-4 flex flex-col gap-10">
      <Hero />
      <Form />
    </div>
  );
};

export default Home;
