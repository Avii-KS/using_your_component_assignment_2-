// PostCard.jsx
import React from 'react';
import LikeButton from './likebutton'; // Adjust the path if necessary

function PostCard({ post, onLikeToggle }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={post.profileImage} alt={post.username} />
        <strong>{post.username}</strong>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <LikeButton
        initialLiked={post.isLiked}
        onToggle={(newStatus) => onLikeToggle(post.id, newStatus)}
      />
    </div>
  );
}

export default PostCard;