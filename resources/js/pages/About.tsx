import React from "react";
import MainLayout from '../layouts/MainLayout';

const About = () => {
  return <div>About</div>;
};

About.layout = (page: React.ReactNode) => <MainLayout children={page} />;
export default About;
