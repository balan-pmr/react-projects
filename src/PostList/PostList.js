import React from 'react';
import PostData from '../data/PostList.json';

function PostList() {
  return (
    <div>
        <p>Hi there, im from postlist component.</p>
  <p>{
      PostData.map((postDetail, index) => {
      return <h5>
                {postDetail.name} is {postDetail.age} years old.
            </h5>
      })
      }</p>
        
    </div>
  );
}

export default PostList;
