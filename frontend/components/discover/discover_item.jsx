import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

const DiscoverItem = ({project, creator}) => {
  let statusWidth = Math.floor((project.pledged_amount / project.goal) * 100);
  if (statusWidth > 100) statusWidth = 100;
  if (!statusWidth) statusWidth = 0;
  return (
    <div className="discover-project-item">
      <Image publicId={project.img_url}>
        <Transformation quality="auto" fetchFormat="auto" />
        <Transformation width="250" height="162" crop="lfill" gravity="north" />
      </Image>
      <p>
        {project.title}
      </p>
      <p>
        {project.blurb}
      </p>
      <p>
        By {creator.username}
      </p>
      <div className="project-aside-status">
        <div className="project-bar-percent"
          style={{width: `${statusWidth}%`}}>
        </div>
        <div className="project-bar-unfunded">
        </div>
      </div>
      <p>
        {Math.floor(project.pledged_amount / project.goal)}% funded
      </p>
      <p>
        {project.category}
      </p>
    </div>
  );
};

export default DiscoverItem;
