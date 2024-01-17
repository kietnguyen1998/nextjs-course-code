import Postsgrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";
export default function FeaturePost(props) {
  return (
    <section className={classes.latest}>
      <h2>Feature posts</h2>
      <Postsgrid posts={props.posts}/>
    </section>
  );
}
