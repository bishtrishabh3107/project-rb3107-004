import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import '../../assets/styles/index.scss';

function ArticleSectionSideScreen() {
  return (
    <div className="sideScreen_ArticleSection">
      <StaticQuery
        query={articleSectionSideScreen}
        render={(data) => {
          return (
            <div className="articleSectionSideScreen">
              {data.allStrapiArticle.edges.map(({ node }) => (
                <div className="my-3" key={node.id}>
                  <Link to={`/articles/${node.slug}`}>
                    <Img fluid={node.image.childImageSharp.fluid} />
                    <h1 className="text-blue-600 hover:text-red-400">
                      {node.title}
                    </h1>
                  </Link>
                  <h3 className="text-gray-400">
                    Published On: {node.publishedAt}
                  </h3>
                </div>
              ))}
            </div>
          );
        }}
      />
    </div>
  );
}

export default ArticleSectionSideScreen;

const articleSectionSideScreen = graphql`
  {
    allStrapiArticle(sort: { fields: publishedAt, order: DESC }, limit: 3) {
      edges {
        node {
          id
          title
          slug
          publishedAt(formatString: "DD MM YYYY")
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
