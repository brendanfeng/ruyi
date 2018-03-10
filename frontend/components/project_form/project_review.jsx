import React from 'react';

const Review = (props) => {
  return (
    <div>
      <header>
        Wazzupppp GO SUBMIT!
      </header>
      <button onClick={props.submitForm}>Save Project</button>
    </div>
  );
};

export default Review;
