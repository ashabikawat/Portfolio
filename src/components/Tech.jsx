// import React from "react";
// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import { textVariant } from "../utils/motion";

// const Tech = () => {
//   return (
//     <div className="flex flex-row flex-wrap justify-center gap-10">
//       {technologies.map((technology) => (
//         <div className="w-28 h-28" key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");

import React from "react";
import { styles } from "../styles";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex justify-center items-center"
      >
        <h2 className={styles.sectionHeadText}>Competencies</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 flex flex-col rounded-2xl justify-center items-center"
            key={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-20 h-20 object-contain"
            />
            <div className="flex justify-center items-center">
              <p
                className="text-secondary text-[16px] font-semibold"
                style={{ margin: 0 }}
              >
                {technology.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "Tech");
