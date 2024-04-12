import React, { useState } from 'react';

function BookingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    doctor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Patient Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <select name="doctor" value={formData.doctor} onChange={handleChange}>
        <option value="">Select Doctor</option>
        <option value="Dr. Smith">Dr. Smith</option>
        <option value="Dr. Jones">Dr. Jones</option>
      </select>
      <button type="submit">Book Appointment</button>
    </form>
  );
}

export default BookingForm;