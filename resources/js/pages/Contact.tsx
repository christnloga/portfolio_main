import React from "react";
import MainLayout from '../layouts/MainLayout';

const Contact = () => {
  return <div>Contact</div>;
};

Contact.layout = (page: React.ReactNode) => <MainLayout children={page} />;
export default Contact;
