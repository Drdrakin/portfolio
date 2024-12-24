import React from 'react';
import styles from './Home.module.css';

const ProfilePage: React.FC = () => {

    let username = "Default Username";
    let bio = "Default bio";
    let avatarUrl = "https://via.placeholder.com/100";

    return (
        <div className={styles.container}>
            <div className={styles.profileCard}>
                <img src={avatarUrl} alt={`${username}'s avatar`} className={styles.avatar} />
                <h1 className={styles.username}>{username}</h1>
                <p className={styles.bio}>{bio}</p>
            </div>
        </div>
    );
};


export default ProfilePage;
