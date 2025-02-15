import React from "react";
import Image from "next/image";
import Link from "next/link";
import { staticExperiencesData } from "@/static-data/images";
import { motion } from "framer-motion";

import { Experience } from "@/types/Experience";

import NBgLink from "../Links/NBgLink";
import { Button } from "../ShadUI/button";

const ExperienceCard = ({
  experience,
  index,
  start,
}: {
  experience: Experience;
  index: number;
  start: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={
        start
          ? {
              opacity: 1,
              transition: {
                duration: 0.2,
                delay: index * 0.15,
              },
            }
          : { opacity: 0, transition: { duration: 0.1, delay: index * 0.1 } }
      }
      className="h-full w-full rounded-xl border border-black duration-300 hover:border-brandLight dark:border-gray-400 dark:hover:border-brandLight"
    >
      {experience.displayImage && (
        <div className="relative h-44 w-full overflow-hidden rounded-t-xl">
          <Image
            src={experience.displayImage.url}
            fill
            sizes="(max-width: 1200px) 50vw, 33vw"
            quality={50}
            className="object-cover"
            alt={experience.displayImage.alt ? experience.displayImage.alt : ""}
          />
        </div>
      )}

      <div className="space-y-3 p-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-2xl">
            <span className="text-brandDark dark:text-brandLight">
              {
                staticExperiencesData.find(
                  (experienceData) => experienceData.name === experience.slug
                )?.icon
              }
            </span>
            <p className="first-letter:uppercase">{experience.name}</p>
          </div>
          <NBgLink
            prompt="view"
            href={`/experiences/${experience.slug}`}
            extraStyles="text-base justify-end"
          />
        </div>

        <p className="text-lg opacity-70">{experience.description}</p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
