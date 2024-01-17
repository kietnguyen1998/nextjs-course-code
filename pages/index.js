import Head from "next/head";
import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturePost from "../components/home-page/feature-post";
import { getFeaturePosts } from "../lib/post-util";
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
function HomePage(props) {
  return (
    <Fragment>
      {/* <Head>
        <title>Max' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head> */}
      <Hero />
      <FeaturePost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturePosts();
  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 60,
  };
}
export default HomePage;
