import React from 'react';
import BookingForm from './components/AppointmentBooking/BookingForm';
import DoctorList from './components/DoctorManagement/DoctorList';
import LoginForm from './components/UserAuthentication/LoginForm';

function App() {
  return (
    <div>
      <h1>ServiCita - Appointment System</h1>
      <BookingForm />
      <DoctorList />
      <LoginForm />
    </div>
  );
}

export default App;