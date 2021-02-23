import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import '../../assets/styles/index.scss';

function ArticleCard({ title, slug, date, fluid, description }) {
  return (
    <div>
      <div className="articleCard m-5">
        <Link to={`/articles/${slug}`}>
          <div className="articleCard__Image">
            <Img fluid={fluid} />
          </div>
          <h1 className="articleCard__Title text-blue-600 my-3 hover:text-red-400">
            {title}
          </h1>
        </Link>
        <div className="articleCard__Info">
          <p>{description}</p>
          <h3 className="articleCard__Date my-2 text-gray-400 ">
            Published On: {date}
          </h3>
          <Link to={`/articles/${slug}`}>
            <button className="button is-primary">Continue Reading</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
