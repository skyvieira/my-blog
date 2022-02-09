import React from "react";
import propTypes from "prop-types";

import * as S from "./styled";
import getThemeColor from "../../utils/getThemeColor";

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous
      ? (
        <S.RecommendedLink
          to={previous.fields.slug}
          cover
          direction='left'
          bg={getThemeColor()}
          duration={0.6}
          className="previous"
        >
          {previous.frontmatter.title}
        </S.RecommendedLink>
      )
      : <span></span>
    }
    {next
      ? (
        <S.RecommendedLink
          to={next.fields.slug}
          cover
          direction='right'
          bg={getThemeColor()}
          duration={0.6}
          className="next"
        >
          {next.frontmatter.title}
        </S.RecommendedLink>
      )
      : <span></span>
    }
  </S.RecommendedWrapper>
);

RecommendedPosts.propTypes = {
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    }),
  }),
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    }),
  })
};

export default RecommendedPosts