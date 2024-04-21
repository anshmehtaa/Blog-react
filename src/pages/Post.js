import React from 'react';
import { useLocation } from 'react-router-dom';

const Post = () => {
    const location = useLocation();
    const post = location.state.post;

    if (!post) {
        return <p>No blog post selected.</p>;
    }

    return (
        <div className="blog-post">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p className="card-text">{post.content}</p>
                    <p className="card-text text-muted">Published on: {new Date(post.publish_date).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
};

export default Post;
