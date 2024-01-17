import React from "react";
import classes from "./posts-grid.module.css"
import PostItem from "./post-item";
export default function Postsgrid({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
