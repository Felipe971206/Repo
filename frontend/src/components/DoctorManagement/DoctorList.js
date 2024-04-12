import React from 'react';

function DoctorList() {
  const doctors = [
    { id: 1, name: "Dr. Smith", specialty: "Cardiology" },
    { id: 2, name: "Dr. Jones", specialty: "Dermatology" }
  ];

  return (
    <ul>
      {doctors.map(doctor => (
        <li key={doctor.id}>{doctor.name} - {doctor.specialty}</li>
      ))}
    </ul>
  );
}

export default DoctorList;