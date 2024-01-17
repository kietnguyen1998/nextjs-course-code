import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css"
import ReactMarkdown from "react-markdown"
// const dumyPost = {
//   slug: "getting-started-with-nextjs",
//   title: "getting started with nextjs",
//   image: "getting-started-nextjs.png",
//   date: "2022-02-11",
//   content: "# This is the first post",
// };
export default function PostContent(props) {
  const {post}=props
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
     
    </article>
  );
}
