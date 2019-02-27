import React from "react";
import PropTypes from "prop-types";

import "./Links.scss";

const propTypes = {
  links: PropTypes.array.isRequired
};

const Links = ({ links }) => {
  return (
    <ul className="links">
      {links.map(link => {
        const { text, link: href, content } = link;
        return (
          <li>
            {content ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {text}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
};

Links.propTypes = propTypes;

export default Links;
