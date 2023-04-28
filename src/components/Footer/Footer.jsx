import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's design something <br />
            great together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:sabahi.camron@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Toronto/Waterloo ON, Canada</p>
          </div>
          <ul className={css.menu}>
            <li> <a href="mailto:csabahip@uwaterloo.ca"> csabahip@uwaterloo.ca</a> </li>
            <li> <a href="https://www.linkedin.com/in/camron-sabahi/" target="_blank"> LinkedIn </a></li>
            <li> <a href="https://github.com/csabahi" target="_blank"> GitHub </a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
