import '../index.css';
import { motion } from 'framer-motion';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: .8,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      {/* <div className="hero-overlay"></div> */}
      <motion.div
        className='hero'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='hero-content'>
          <motion.div className='hero-text' variants={containerVariants}>
            <motion.h2 className='heroh2' variants={childVariants}>
              Fearless Innovation Hub
            </motion.h2>
            <motion.span className='herospan' variants={childVariants}>
              Trendsetting Digital Solutions
            </motion.span>
            <motion.p className='herop' variants={childVariants}>
              We fuse creativity with technology to craft unforgettable digital
              experiences. From sleek websites to powerful marketing solutions,
              we're here to elevate your brand in the digital world.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
