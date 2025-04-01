import React, { useState } from "react";

const ContactMe = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-5xl font-bold text-center mb-12">Contact Me</h2>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 bg-black p-8 border-2 border-white rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white text-white p-2 mt-2"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white text-white p-2 mt-2"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white text-white p-2 mt-2 h-32"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-white text-black py-3 font-semibold mt-4 rounded-lg ${
                isSubmitting ? "opacity-50" : "hover:bg-gray-300"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="md:w-1/2 bg-black p-8 border-2 border-white rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-6">Connect with Me</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="https://www.linkedin.com/in/tamanna-shaw-mg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Tamanna013"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:23cse1031@nitgoa.ac.in"
                className="text-lg text-white hover:underline"
              >
                Email Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
