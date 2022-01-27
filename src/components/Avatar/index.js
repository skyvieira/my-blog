import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as S from "./styled";

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 80)
          }
        }
      }
    `
  );
  const image = getImage(avatarImage);

  return (
    <S.Avatar to='/'>
      <GatsbyImage
        image={image}
        alt="avatar"
        className="image"
      />
    </S.Avatar>
  );
};

export default Avatar