import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

const ProjectsCategoryItem = (props) => {
  return (
    <div className="category-projects-item" onClick={() => props.goToShow(props.id)}>
      <div className="category-item-image">
        <Image publicId={props.image}>
          <Transformation quality="auto" fetchFormat="auto" />
          <Transformation width="150" height="97" crop="lfill" gravity="north" />
        </Image>
      </div>
      <div className="category-item-info">
        <p className="category-item-title">
          {props.title}
        </p>
        <p className="category-item-funded">
          {props.funded}% funded
        </p>
      </div>
    </div>
  );
};

export default ProjectsCategoryItem;
