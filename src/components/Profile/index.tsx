import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import { FaGithub } from 'react-icons/fa'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import { api } from "../../axios/api";

import {
  ProfileContainer,
  InfoContainer,
  NameLink,
  Description,
  StatusProfile,
  Status,
} from "./styles";

interface ProfileDataProps {
  avatar_url: string;
  name: string;
  html_url: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileDataProps>({});

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/users/bertandev");

      
      const { avatar_url, name, html_url, bio, login, company, followers } = response.data;

      const data = {
        avatar_url,
        name,
        html_url,
        bio,
        login,
        company,
        followers
      }

      setProfileData(data);
    }

    fetchData();
  }, []);

  return (
    <ProfileContainer>
      <img src={profileData.avatar_url} alt="" />

      <InfoContainer>
        <NameLink>
          <h1>{profileData.name}</h1>

          <a href={profileData.html_url}>
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </NameLink>

        <Description>{profileData.bio}</Description>

        <StatusProfile>
          <Status>
            <FaGithub size={17}/>
            <span>{profileData.login}</span>
          </Status>

          <Status>
            {profileData.company && (
              <>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{profileData.company}</span>
              </>
            )}
          </Status>

          <Status>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{profileData.followers} seguidores</span>
          </Status>
        </StatusProfile>
      </InfoContainer>
    </ProfileContainer>
  );
}
