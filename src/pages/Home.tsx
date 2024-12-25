import React from 'react';

const ProfilePage: React.FC = () => {

    return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 p-4">
        <h1 className="text-white text-2xl font-bold">Tailwind CSS Card</h1>
        </div>
        <div className="p-4">
        <p className="text-gray-700">This is a simple card component styled with Tailwind CSS.</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Click Me</button>
        </div>
    </div>
    );
};

export default ProfilePage;