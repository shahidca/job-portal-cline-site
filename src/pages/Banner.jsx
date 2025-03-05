import { easeIn, motion } from "framer-motion"
import React from 'react';
import team1 from '../assets/banner-img/programer-2 (2).jpg'
import team2 from '../assets/banner-img/programer-2 (3).jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen w-11/12 mx-auto">
  <div className="hero-content flex-col gap-16 lg:flex-row-reverse">
   
    <div className='flex-1'>
        <motion.img
      src={team1}
      animate={{y:[75, 130,75]}}
      transition={{duration:5, repeat:Infinity}}
      className="max-w-sm rounded-t-[42px] rounded-br-[42px] border-b-8 border-r-8 border-blue-500 shadow-2xl" />
        <motion.img
      src={team2}
      animate={{x:[100, 175,100]}}
      transition={{duration:7, ease:easeIn, repeat:Infinity}}
      className="max-w-sm rounded-t-[42px] rounded-br-[42px] border-b-8 border-l-8 border-blue-500 shadow-2xl" />
      
      </div>
    <div className='flex-1'>
        <motion.h1
            animate={{x:70}}
            transition={{duration:2, repeat:Infinity}}
             className="text-5xl font-bold">Empowering Careers, One <motion.span animate={{color:['#33ffac']}}> Job</motion.span> at a Time!</motion.h1>
      
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
    
  </div>
</div>
    );
};

export default Banner;