import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    const [userData, setUserData] = useState(() => {
        const savedData = localStorage.getItem('user');
        return savedData ? JSON.parse(savedData) : { name: '', email: '' };
    });

    const [isEditing, setIsEditing] = useState(false);
    const [updatedData, setUpdatedData] = useState({ ...userData });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        localStorage.setItem('user', JSON.stringify(updatedData));
        setUserData(updatedData);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUserData({ name: '', email: '' });
        setUpdatedData({ name: '', email: '' });
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">User Profile</h1>
            <div className="card mt-4 p-4">
                {isEditing ? (
                    <div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={updatedData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={updatedData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="btn btn-success" onClick={handleSave}>Save</button>
                    </div>
                ) : (
                    <div>
                        <p><strong>Name:</strong> {userData.name}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                        <button className="btn btn-primary" onClick={handleEdit}>Edit Profile</button>
                    </div>
                )}
                <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};
export default Profile;
