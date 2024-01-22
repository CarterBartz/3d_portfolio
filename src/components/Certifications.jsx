import React from "react";
import { motion } from 'framer-motion';
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { certs } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CertsCard = ({ index, title, icon, description, source, date }) => (
  <Tilt className='xs:w-[500px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[2.5px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col'
      >
        <img
          src={icon}
          alt='[title}'
          className='object-contain w-16 h-16'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <h3 className='text-white text-[20px] font-bold text-center'>
          {source}
        </h3>
        <h3 className='text-white text-[18px] text-center'>
          {date}
        </h3>
        <h4 className='text-white text-[15px] text-center'>
          {description}
        </h4>
      </div>
    </motion.div>
  </Tilt>
);

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Some of my proven work</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className='flex flex-wrap justify-around w-full gap-10 mt-20'>
        {certs.map((certs, index) => (
          <CertsCard key={certs.title} index={index} {...certs} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Certifications, "");