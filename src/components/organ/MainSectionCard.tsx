import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

function MainSectionCard({ title, date, fluid, slug }) {
  return (
    <div className="MainSectionCard">
      <Link to={`/articles/${slug}`}>
        <Img fluid={fluid} />
      </Link>
      <Link to={`/articles/${slug}`}>
        <h1 className="text-blue-600 hover:text-red-400">{title}</h1>
      </Link>
      <h3 className="text-gray-400">Published On: {date}</h3>
    </div>
  );
}

export default MainSectionCard;
