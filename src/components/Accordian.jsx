import React, { useState } from "react";
import Arrow_icon from '../assets/arrow.png'

export const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index)=>{
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <>
      <div className="bg-black p-6 text-white w-full">
        <h2 className="font-bold text-2xl pl-30">Frequently Asked Questions</h2>

        <div className="w-6xl ml-34 mt-4 flex flex-col space-y-3">

          <div className="rounded-md bg-gray-700">
            <div onClick={()=> handleClick(0)} className="flex items-center justify-between cursor-pointer hover:bg-gray-600 p-4 hover:rounded-md">
              <h3>
              What is Netflix?
            </h3>
            <img src={Arrow_icon} alt="keydown-icon" className="mr-8"/>
            </div>
            {openIndex===0 && (
              <p className="border-t border-b-gray-200 ml-4 mr-4 opacity-50 p-4 text-sm">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.You can watch as much
                as you want, whenever you want, without a single ad – all for
                one low monthly price. There's always something new to discover,
                and new TV shows and movies are added every week!
              </p>
            )}
          </div>

          <div className="rounded-md bg-gray-700">
            <div onClick={()=> handleClick(1)} className="flex items-center justify-between cursor-pointer hover:bg-gray-600 p-4 hover:rounded-md">
              <h3>
              How much does NetflixGPT cost?
            </h3>
            <img src={Arrow_icon} alt="keydown-icon" className="mr-8"/>
            </div>
            {openIndex===1 && (
              <p className="border-t border-b-gray-200 ml-4 mr-4 opacity-50 p-4 text-sm">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹1 to ₹10/month.
              </p>
            )}
          </div>

          <div className="rounded-md bg-gray-700">
            <div onClick={()=> handleClick(2)} className="flex items-center justify-between cursor-pointer hover:bg-gray-600 p-4 hover:rounded-md">
              <h3>
              Where can i watch?
            </h3>
            <img src={Arrow_icon} alt="keydown-icon" className="mr-8"/>
            </div>
            {openIndex===2 && (
              <p className="border-t border-b-gray-200 ml-4 mr-4 opacity-50 p-4 text-sm">
                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
              </p>
            )}
          </div>

          <div className="rounded-md bg-gray-700">
            <div onClick={()=> handleClick(3)} className="flex items-center justify-between cursor-pointer hover:bg-gray-600 p-4 hover:rounded-md">
               <h3>
              How do i cancel?
            </h3>
            <img src={Arrow_icon} alt="keydown-icon" className="mr-8"/>
            </div>
            {openIndex===3 && (
              <p className="border-t border-b-gray-200 ml-4 mr-4 opacity-50 p-4 text-sm">
               Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
              </p>
            )}
          </div>

          <div className="rounded-md bg-gray-700">
            <div onClick={()=> handleClick(4)} className="flex items-center justify-between cursor-pointer hover:bg-gray-600 p-4 hover:rounded-md">
              <h3>
              Where can i watch on Netfix?
            </h3>
            <img src={Arrow_icon} alt="keydown-icon" className="mr-8"/>
            </div>
            {openIndex===4 && (
              <p className="border-t border-b-gray-200 ml-4 mr-4 opacity-50 p-4 text-sm">
                Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
              </p>
            )}
          </div>

          <div className="rounded-md bg-gray-700">
            <div onClick={()=> handleClick(5)} className="flex items-center justify-between cursor-pointer hover:bg-gray-600 p-4 hover:rounded-md">
              <h3>
              Is Netflix good for kids?
            </h3>
             <img src={Arrow_icon} alt="keydown-icon" className="mr-8"/>
            </div>
            {openIndex===5 && (
              <p className="border-t border-b-gray-200 ml-4 mr-4 opacity-50 p-4 text-sm">
                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
              </p>
            )}
          </div>

          
        </div>
      </div>
    </>
  );
};
