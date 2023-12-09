import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="an img"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm Kiet</h1>
      <p>I am a web developer</p>
    </section>
  );
}
