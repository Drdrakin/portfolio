import React from 'react';

const ProfilePage: React.FC = () => {

    let username = "Default Username";
    let bio = "Default bio";
    let avatarUrl = "https://via.placeholder.com/100";

    return (
        <div>
            <div >
                <img src={avatarUrl} alt={`${username}'s avatar`} />
                <h1 className="text-3xl font-bold underline">{username}</h1>
                <p>{bio}</p>
            </div>
        </div>
    );
};

export default ProfilePage;