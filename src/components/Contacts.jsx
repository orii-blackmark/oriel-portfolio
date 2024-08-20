import "../assets/contact.css";

const Contacts = () => {
  return (
    <section className="contact">
      <form action="">
        <h2>Contact Form</h2>
        <div className="input-box">
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="">Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="">Your Message</label>
          <textarea
            name=""
            className="field mess"
            id=""
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contacts;
