import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div 
    varients={fadeIn("", "spring", index * 0.5, 0.75)}
    className="w-full p-10 bg-tertiary shadow-card rounded-3xl"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="flex justify-between gap-1 mt-7 tiems-center">
        <div className="flex flex-col flex-1">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img 
          src={image}
          alt={`feedback-by-${name}`}
          className="object-cover w-10 h-10 rounded-full"
        />

      </div>
    </div>

  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-grey-light rounded-[20px]">
      <div className={`${styles.padding} bg-grey-mid rounded-2xl min-h-[300px]`}>
        <motion.div varients={textVariant()}>
          <p className={styles.sectionSubText}>What otehrs say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14`}>
        <div className="flex flex-col gap-5 md:flex-row">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard 
              key={testimonial.name}
              index={index}
              {...testimonial}
              classname="md:w-1/3"
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default SectionWrapper(Feedbacks, "");