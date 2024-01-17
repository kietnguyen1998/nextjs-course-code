import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";

export default function AllPostsPage(props) {
  const dummyPost = [
    {
      slug: "getting-started-with-nextjs",
      title: "getting started with nextjs",
      image: "getting-started-nextjs.png",
      excerpt: "Nextjs is a React framework for production",
      date: "2022-02-11",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "getting started with nextjs",
      image: "getting-started-nextjs.png",
      excerpt: "Nextjs is a React framework for production",
      date: "2022-02-11",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "getting started with nextjs",
      image: "getting-started-nextjs.png",
      excerpt: "Nextjs is a React framework for production",
      date: "2022-02-11",
    },
  ];
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
