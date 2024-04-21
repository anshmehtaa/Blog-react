import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostList = ({ posts }) => {
    return (
        <div className="blog-list">
            {posts.map(post => (
                <div className="card" key={post.id}>
                    <div className="card-body">
                        <h2 className="card-title" style={{ color: 'black' }}><Link to={`/post/${post.id}`} state={{ post }}>{post.title}</Link></h2>
                        <p className="card-text">{post.content.substring(0, 100)}...</p>
                        <p className="card-text text-muted">Published on: {new Date(post.publish_date).toLocaleDateString()}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogPostList;
