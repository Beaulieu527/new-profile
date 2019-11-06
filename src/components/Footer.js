import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <section id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="copyright">
        <ul className="menu">
          <li>&copy; Beaulieu Development.</li>
        </ul>
      </div>
    </section>
  );
}
