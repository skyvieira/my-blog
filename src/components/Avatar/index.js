import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as S from "./styled";

const Avatar = () => (
  <S.Avatar>
    <StaticImage
      placeholder="tracedSVG"
      src="../../images/profile-photo.jpg"
      alt="Avatar"
      className="image"
    />
  </S.Avatar>
);

export default Avatar