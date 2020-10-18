import React from 'react';
import './NewsItem.css';


const NewsItem = ({news, logoUrl}) => {
    const {
        title,
        originallink,
        link,
        pubDate,
        description
    } = news;   // https://newsapi.org

    return (
      <div className="newsItem">
          <div className="thumbnail">
              <a href={link} rel="noopener noreferrer">
                  <img src={logoUrl} alt="thumbnail"/>
              </a>
          </div>
          <div className="contents">
              <h2>
                  <a href={link} rel="noopener noreferrer">
                      {title}
                  </a>
              </h2>
              <p>{description}</p>
          </div>
      </div>
    );
};

export default NewsItem;