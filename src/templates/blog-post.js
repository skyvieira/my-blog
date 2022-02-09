import React from "react";
import { graphql } from "gatsby";

import * as S from "../components/Post/styled";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import RecommendedPosts from "../components/RecommendedPosts";
import Comments from "../components/Comments";

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const previous = pageContext.previousPost;
  const next = pageContext.nextPost;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <S.PostHeader>
        <S.PostDate>{post.frontmatter.date} • {post.timeToRead} min de leitura</S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>

      <S.Content>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.Content>

      <RecommendedPosts previous={previous} next={next} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt")
        image
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost