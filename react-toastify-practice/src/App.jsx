// App.js
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      toast.warn("All fields are required!");
      return;
    }

    // Simulate API request
    toast.info("Submitting...");
    setTimeout(() => {
      toast.success("Feedback submitted successfully!");
      setForm({ name: '', email: '', message: '' }); // Reset form
    }, 2000);
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} /><br /><br />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br /><br />
        <textarea name="message" placeholder="Your message" value={form.message} onChange={handleChange} /><br /><br />
        <button type="submit">Send Feedback</button>
      </form>
      
      {/* Toast container renders the toasts */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
