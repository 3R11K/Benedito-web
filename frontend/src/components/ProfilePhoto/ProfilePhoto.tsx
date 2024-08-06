import React from "react";
import { ProfilePhotoContainer, ProfilePhotoImage } from "./style.tsx";
import defaultProfile from "../../images/default_profile.png"

interface ProfilePhotoProps {
    radius: string;
    src: string;
}

function ProfilePhoto({ radius, src }: ProfilePhotoProps) {
    return (
        <div>
            <ProfilePhotoContainer>
                <ProfilePhotoImage radius={radius} src={src || defaultProfile} />
            </ProfilePhotoContainer>
        </div>
    );
}

export default ProfilePhoto;