import React, { useState } from "react";

// Alert Component
const Alert = ({ message, type, onClose }) => {
  if (!message) return null;
  return (
    <div className="fixed top-5 right-5 z-50">
      <div
        className={`rounded-lg px-5 py-3 shadow-lg flex items-center gap-3 animate-slide-in
          ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
      >
        <span>{message}</span>
        <button
          className="ml-3 text-white font-bold"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [alert, setAlert] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:2300/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setAlert({ message: "Appointment booked successfully!", type: "success" });
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          city: "",
          service: "",
          date: "",
          time: "",
          notes: "",
        });
      } else {
        setAlert({ message: "Failed to book appointment.", type: "error" });
      }
    } catch (error) {
      setAlert({ message: "Server error. Try again later.", type: "error" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Book a Cleaning Appointment
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Full Name"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none md:col-span-2"
            required
          >
            <option value="">Select Service</option>
            <option value="Home Cleaning">Home Cleaning</option>
            <option value="Office Cleaning">Office Cleaning</option>
            <option value="Carpet Cleaning">Carpet Cleaning</option>
            <option value="Laundry Service">Laundry Service</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Additional Notes"
            rows="4"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none md:col-span-2"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition md:col-span-2"
          >
            Book Appointment
          </button>
        </form>
      </div>

      {/* Alert */}
      <Alert
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert({ message: "", type: "" })}
      />
    </div>
  );
};

export default BookingForm;
