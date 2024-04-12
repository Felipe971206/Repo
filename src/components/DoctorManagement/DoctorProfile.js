import React from 'react';

function DoctorProfile({ doctor }) {
    return (
        <div>
            <h2>{doctor.name}</h2>
            <p>Specialty: {doctor.specialty}</p>
            <p>Contact: {doctor.contact}</p>
        </div>
    );
}

export default DoctorProfile;