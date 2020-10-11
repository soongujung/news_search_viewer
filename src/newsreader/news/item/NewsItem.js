import React from 'react';
import './NewsItem.css';


const NewsItem = ({news}) => {
    const { title, description, url, urlToImage } = news;

    return (
      <div className="newsItem">
          <div className="thumbnail">
              <a href={url} rel="noopener noreferrer">
                  <img src={urlToImage} alt="thumbnail"/>
              </a>
          </div>
          <div className="contents">
              <h2>
                  <a href={url} rel="noopener noreferrer">
                      {title}
                  </a>
              </h2>
              <p>{description}</p>
          </div>
      </div>
    );
};

export default NewsItem;