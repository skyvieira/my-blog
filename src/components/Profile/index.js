import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as S from "./styled";
import Avatar from "../Avatar";

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description }
    }
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }    
  `);

  return (
    <S.ProfileWrapper>
      <Avatar />
      <S.Info>
        <S.Name>{title}</S.Name>
        <S.Position>{position}</S.Position>
        <S.About>{description}</S.About>
      </S.Info>
    </S.ProfileWrapper>
  );
};

export default Profile