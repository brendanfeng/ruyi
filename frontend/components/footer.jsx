import React from 'react';
import { Image } from 'cloudinary-react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="author-tag">
        Made by <a href="http://www.brendanfeng.me">Brendan Feng</a>,
        Inspired by <a href="https://www.kickstarter.com">Kickstarter</a>
      </div>
      <div className="rightside">
        <a href="https://github.com/brendanfeng/ruyi" className="social-logos">
          <Image publicId='https://res.cloudinary.com/ruyi/image/upload/v1521192941/GitHub-Mark-120px-plus'>
          </Image>
        </a>
        <a href="https://www.linkedin.com/in/brendanfeng/" className="social-logos">
          <Image publicId='https://res.cloudinary.com/ruyi/image/upload/v1521193001/In-2C-128px-TM'>
          </Image>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
