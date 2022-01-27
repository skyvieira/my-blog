import React from "react";
import { graphql } from "gatsby";

import * as S from "../components/Post/styled";
import Layout from "../components/Layout";
import Seo from "../components/seo";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <S.PostHeader>
        <S.PostDate>{post.frontmatter.date} • {post.timeToRead} min de leitura</S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>

      <S.Content>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.Content>
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        description
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt")
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost