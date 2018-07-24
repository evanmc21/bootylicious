import React from 'react';

const Comment = ({comment}) => {
  return (
    <div className="comments">
    <p>{comment.content}</p>
    </div>
  );
}

export default Comment
