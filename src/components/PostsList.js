import React from 'react';

export default function PostsList(props) {
  console.log(props);
  return (
    <div>
      {props.posts.map(post => (
        <div key={post.id}>
          <span>{post.title}:</span>
          <span>{post.message}</span>
        </div>
      ))}
    </div>
  );
}
