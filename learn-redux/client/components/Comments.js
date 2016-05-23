import React from 'react';

const Comments = React.createClass({
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.post_id, i)}>
            &times;
          </button>
        </p>
      </div>
    )
  },

  handleSumbit(e) {
    e.preventDefault();
    const post_id = this.props.params.post_id;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(post_id, author, comment);
    this.refs.commentForm.reset();
  },

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSumbit}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden/>
        </form>
      </div>
    );
  }
});

export default Comments;
