import React from "react";
import Header from "../../components/Header";

const Contact = () => {
  return (
    <>
      <section>
        <Header />
        <div>
          <h1>Contact Us</h1>
          <p>If you have any questions, feel free to reach out!</p>
          <ul>
            <li>Email: info@example.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Contact;