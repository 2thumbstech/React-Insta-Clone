import React from 'react';
// import Post from './Post';
// import './Post.css';

const PostContainer = props => {
    return (
        <div className = 'post-container-wrapper '>
        {props.data.map(post=> <div>
            <img src = {post.thumbnailUrl}/>
            <p>{post.username}</p>
            <img src={post.imageUrl}/>
            
        </div>
            
            )}
     
        </div>
    );
};
export default PostContainer;