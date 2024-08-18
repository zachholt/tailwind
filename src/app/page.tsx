'use client'

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [buttonText, setButtonText] = useState("Push it to the limit");
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    setButtonText("Limit pushed");

    // Reset the scale after the animation
    setTimeout(() => setIsClicked(false), 100);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" px-4 py-5 flex flex-row text-blue rounded-lg bg-slate-400 md:w-full lg:w-full justify-between font-mono text-sm sm:flex-col">
        <div><Link className="link-primary" href="">Home</Link></div>
        <div><Link className="link-primary" href="">About</Link></div>
        <div><Link className="link-primary" href="">Contact</Link></div>
      </div>
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="px-2 rounded-lg bg-white">
          <div className=" text-black relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
            <p className="animate-pulse text-center underline">Main content</p>
            <p>This is where main content goes in case you didnt know by the underlined text above. I made the underline using tailwind css. yeah pretty epic, I know.</p>
          </div>
        </div>
      </div>
      <button onClick={handleButtonClick} className={`text-urine bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-oneplease focus:ring transform transition-transform duration-300 ${isClicked ? 'scale-90' : 'scale-100'}`} >
        {buttonText}
      </button>
    </main>
  );
}