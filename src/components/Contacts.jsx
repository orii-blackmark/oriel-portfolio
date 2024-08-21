import "../assets/contact.css";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useState } from "react";

const Contacts = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "3a8e3515-5f20-422c-9925-3bfdeb65f0fc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
        event.target.reset(); // Reset the form
      } else {
        Swal.fire({
          title: "Error!",
          text: res.message || "Something went wrong. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error); // Log the error
      Swal.fire({
        title: "Error!",
        text: "An error occurred. Please try again later.",
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        {" "}
        Get in Touch
      </motion.h2>
      <motion.form
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        onSubmit={onSubmit}
      >
        <h2>Contact Form</h2>
        <div className="input-box">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="field"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            className="field"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            className="field mess"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>
    </section>
  );
};

export default Contacts;
