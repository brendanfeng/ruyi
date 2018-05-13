import React from 'react';
import {Image, Transformation} from 'cloudinary-react';
import {Link} from 'react-router-dom';

const DiscoverItem = ({project, creator}) => {
  let statusWidth = Math.floor((project.pledged_amount / project.goal) * 100);
  if (statusWidth > 100) 
    statusWidth = 100;
  if (!statusWidth) 
    statusWidth = 0;
  return (<div className="discover-project-item">
    <div className="discover-item-top">
      <Image publicId={project.img_url}>
        <Transformation quality="auto" fetchFormat="auto"/>
        <Transformation width="400" height="259" crop="lfill" gravity="north"/>
      </Image>
      <div className="discover-item-info">
        <p className="discover-item-title">
          <Link to={`/projects/show/${project.id}`}>
            {project.title}
          </Link>
        </p>
        <p className="discover-item-blurb">
          <Link to={`/projects/show/${project.id}`}>
            {project.blurb}
          </Link>
        </p>
      </div>
      <p className="discover-item-creator">
        By {creator.username}
      </p>
    </div>
    <div className="discover-item-bottom">
      <div className="project-aside-status">
        <div className="project-bar-percent" style={{
            width: `${statusWidth}%`
          }}></div>
        <div className="project-bar-unfunded"></div>
      </div>
      <p className="discover-item-percent">
        {Math.floor(project.pledged_amount / project.goal)}% funded
      </p>
      <p className="discover-item-category">
        <Link to={`/discover/${project.category}`}>
          {project.category}
        </Link>
      </p>
    </div>
  </div>);
};

export default DiscoverItem;
