import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import MainSectionCard from '../organ/MainSectionCard';
import '../../assets/styles/index.scss';
import BestProductsSection from './BestProductsSection';
import Bounce from 'react-reveal/Bounce';

function MainSection() {
  return (
    <div className="m-6">
      <div className="columns is-variable is-tablet is-7">
        <div className="column is-two-thirds ">
          <div className="mainSection__Article">
            <StaticQuery
              query={mainArticle}
              render={(data) => {
                return (
                  <div className="grid grid-cols-2 gap-3">
                    {data.allStrapiArticle.edges.map(({ node }) => (
                      <MainSectionCard
                        key={node.id}
                        title={node.title}
                        date={node.publishedAt}
                        fluid={node.image.childImageSharp.fluid}
                        slug={node.slug}
                      />
                    ))}
                  </div>
                );
              }}
            />
          </div>
        </div>
        <div className="column is-one-thirds">
          <Bounce>
            <BestProductsSection />
          </Bounce>
        </div>
      </div>
    </div>
  );
}

export default MainSection;

const mainArticle = graphql`
  {
    allStrapiArticle(
      limit: 4
      sort: { fields: publishedAt, order: DESC }
      filter: { status: { eq: "published" } }
    ) {
      edges {
        node {
          id
          slug
          title
          publishedAt(formatString: "DD-MM-YYYY")
          description
          category {
            name
          }
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
