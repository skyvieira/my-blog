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
      <S.Info to='/'>
        <Avatar />
        <S.Name>{title}</S.Name>
        <S.Position>{position}</S.Position>
      </S.Info>
      <S.About>{description}</S.About>
    </S.ProfileWrapper>
  );
};

export default Profile