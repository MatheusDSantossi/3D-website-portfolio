import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Form from "./Form";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-x-hidden transition-none`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl transition-none w-full
        min-w-[320px]
        max-w-xl
        min-h-[420px]
        "
      >
        <p className={styles.contactSubText}>Get in touch</p>
        <h3 className={styles.contactHeadText}>Contact.</h3>
        <Form />
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="
        xl:h-auto 
        h-[350px] 
        md:h-[550px] 
        transition-none
        min-w-0
        flex-1
        "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
