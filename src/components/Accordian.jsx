import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";
import lang from "../utils/langConstants";

export const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const language = useSelector(store => store.language?.languageState);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
            q: lang[language].faqQuestion1,
            a: lang[language].faqAnswer1,
          },
          {
            q: lang[language].faqQuestion2,
            a: lang[language].faqAnswer2,
          },
          {
            q: lang[language].faqQuestion3,
            a: lang[language].faqAnswer3,
          },
          {
            q: lang[language].faqQuestion4,
            a: lang[language].faqAnswer4,
          },
          {
            q: lang[language].faqQuestion5,
            a: lang[language].faqAnswer5,
          },
          {
            q: lang[language].faqQuestion6,
            a: lang[language].faqAnswer6,
          },
  ]

  return (
    <div className="bg-black text-white w-full py-10 px-4 sm:px-6 lg:px-40">
      <h2 className="font-bold text-2xl sm:text-xl md:text-2xl lg:text-2xl mb-6">
        {lang[language].faq}
      </h2>

      <div className="flex flex-col space-y-3 max-w-6xl mx-auto">
        {accordionData.map((item, index) => (
          <div key={index} className="rounded-md bg-gray-700 overflow-hidden">
            <div
              onClick={() => handleClick(index)}
              className="flex items-center justify-between cursor-pointer hover:bg-gray-600 active:bg-gray-600 transition-colors duration-300 p-4"
            >
              <h3 className="text-md sm:text-lg md:text-lg font-medium">
                {item.q}
              </h3>
              <IoIosArrowDown
                className={`mr-2 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                size={24}
              />
            </div>
            {openIndex === index && (
              <p className="border-t border-gray-500 px-4 py-3 text-sm sm:text-base md:text-md opacity-80">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
