import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { post_id } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === post_id);
    const post = this.props.posts[i];
    const postComments = this.props.comments[post_id] || [];

    return(
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props}/>
      </div>
    );
  }
});

export default Single;
