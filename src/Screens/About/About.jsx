import React from 'react';
import about from '../../assets/about.png';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat accusamus dolorum consequatur voluptates aperiam totam. Quasi deleniti quidem voluptatem earum illo veritatis. Eius ab iste quas sunt maxime minus dicta omnis expedita libero illum recusandae obcaecati facilis, ea vel, fugit excepturi. Iste dicta dolore qui ipsam neque quos rem.</p>
      </div>
      <div className={styles.mainimg}>
        <img className={styles.image} src={about} alt="About Us" />
      </div>
    </div>
  );
};

export default About;
