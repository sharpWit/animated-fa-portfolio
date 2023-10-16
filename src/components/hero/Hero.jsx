import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButtons: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        ریکت دولوپر
      </motion.div>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>سعید خسروی</motion.h2>
          <motion.h1 variants={textVariants}>
            توسعه دهنده و طراح وب اپلیکیشن
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              مشاهده آخرین نمونه کارها
            </motion.button>
            <motion.button variants={textVariants}>تماس با من</motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            animate="scrollButtons"
            variants={textVariants}
          />
        </motion.div>
      </div>

      <div className="imageContainer">
        <img src="/saeed-frontview.png" alt="" className="heroGuy" />
      </div>
    </div>
  );
};

export default Hero;
