import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:"Build strength and muscle with our targeted weight training classes, suitable for all experience levels. Our expert trainers will guide you through proper form and techniques.",
    image: image1,
  },
  {
    name: "Ab Core Classes",
    description:
      "Strengthen and tone your core with exercises designed to target your abs and obliques. This class will help improve posture and overall stability.",
    image: image2,
  },
  {
    name: "Adventure Classes",
    description:
      "Push your limits in our adventure classes, featuring outdoor challenges and dynamic workouts designed to enhance endurance and agility. Perfect for those seeking excitement and variety.",
    image: image3,
  },
  {
    name: "Fitness Classes",
    description:
      "Get fit and energized in our diverse fitness classes, focusing on cardio, strength, flexibility, and overall well-being. Whether you’re a beginner or an expert, there’s something for everyone.",
    image: image4,
  },
  {
    name: "Traning Classes",
    image: image5,
  },
  {
    name: "Yoga Classes",
    description:
      "Find balance and relaxation with our yoga classes, designed to improve flexibility, reduce stress, and enhance mental clarity. Suitable for all levels, from beginners to advanced practitioners.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            Our gym offers a variety of classes tailored to all fitness levels, from strength training to yoga. Whether you're looking to improve flexibility, boost endurance, or build muscle, we have a class to fit your goals.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class key={`${item.name}-${index}`} name={item.name} description={item.description} image={item.image} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
