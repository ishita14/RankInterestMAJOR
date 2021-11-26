import React, { useState, useEffect } from "react";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./Post.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";



import Button from "@material-ui/core/Button";



function Post({ username, caption, imageUrl, postId, user, comments, like }) {
  // const [comments, setComments] = useState(commentss)
  // const [comment, setComment] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {

  });
  const likes = () => {
    fetch(`/insertlike/${postId}`, {
      method: "Post",
      headers: {
        "authorization": "Bearer " + localStorage.getItem("jwt")
      },
    }).then(res => res.json())
      .then(result => {
        // setPosts(result.data.categoryPosts)
        // alert(result.code)
      }).catch(err => {
        console.log(err);
      })


  }
  const postComment = (id, comment) => {

    fetch(`/insertcomment/${postId}/${comment}`, {
      method: "Post",
      headers: {
        "authorization": "Bearer " + localStorage.getItem("jwt")
      },

    })
      .then(res => res.json())
      .then(result => {
        // setPosts(result.data.categoryPosts)
        // alert(result)
      }).catch(err => {
        console.log(err);
      })

  };



  return (
    <div className="post">
      {/* header => avatar + username */}
      <div className="post__header">
        {/* <Avatar
          className="post__avatar"
          alt="subhampreet"
          src={avatars[avatar].ava}
        /> */}

        <h3>{username}</h3>
        {/* <div className="MoreHorizIcon">
          <MoreHorizIcon />
        </div> */}
      </div>

      {/* Image */}
      <img className="post__image" src={imageUrl} />

      {/* POST ICONS */}

      <div className="likeShare">
        <FavoriteBorderIcon onClick={() => { likes() }} className="likeShare-item" fontSize="medium" /><h1>{like[0]?.count}</h1>
        {/* <ModeCommentOutlinedIcon className="likeShare-item" fontSize="medium" />
        <NearMeOutlinedIcon className="likeShare-item" fontSize="medium" />
        <TurnedInNotOutlinedIcon
          className="likeShare-item-save"
          fontSize="medium"
        /> */}
      </div>

      {/* username + caption */}
      <h5 className="post__text">
        {" "}
        <strong>{username} </strong>
        {caption}
      </h5>

      {/* COMMENTS */}

      <div className="post_comments">
        {comments.map((comment) => (
          <h5 className="comment">
            <strong>{comment.commentUser.userName}</strong> {comment.commentText}
          </h5>
        ))}
      </div>

      {/* POST CAPTIONS */}

      {(
        <form className="postComment_Box">
          <input
            className="comment_input"
            type="text"
            placeholder="Add a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            color="secondary"
            className="comment_button"
            disabled={!text}
            type="submit"
            onClick={() => { postComment(postId, text) }}
          >
            Post
          </Button>
        </form>
      )}
    </div>
  );
}

export default Post;
