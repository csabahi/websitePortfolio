import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Camron

          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            I'm eager to build and
            <br />
            design innovating projects{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          {/* <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./person.png" alt="" /> */}

          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./websiteHeadshot.png" alt="" />
        </motion.div>

        {/* <a className={css.email} href="mailto:sabahi.camron@gmail.com">
          sabahi.camron@gmail.com
        </a> */}

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">BASc</div>
            <div className="secondaryText">
              <div>Mechatronics</div>
              <div>Engineering</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>Second Year Student at</span>
            <div className="secondaryText">
              <span>The University of Waterloo</span>
            </div>
          </motion.div> 
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;
