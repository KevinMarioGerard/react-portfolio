import * as React from 'react';

export type ProfilePicProps = {
    /**
     * Image source for profile pic
     */
    profilePicSrc: string;
};

const ProfilePic: React.FC<ProfilePicProps> = ({ profilePicSrc }) => {
    return (
        <div className="profile__container">
            <img className="profile__pic" src={profilePicSrc} alt="Profile Pic" />
        </div>
    );
};

export default ProfilePic;
