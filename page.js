'use client'; 

import { useEffect, useState } from "react";
import { Pacifico, Montserrat } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

export default function App() {
  const targetDate = new Date("2026-05-20T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    "https://gifyu.com/image/b75pO",
    "https://gifyu.com/image/b75pG",
    "https://gifyu.com/image/b75pJ",
    "https://gifyu.com/image/b75py",
    "https://gifyu.com/image/b75pB",
    "https://gifyu.com/image/b75pP",
    "https://gifyu.com/image/b75pX",
    "https://gifyu.com/image/b75pe"
  ];

  const wishes = [
    {
      name: "Your Frooti 💖",
      msg: `Viju, Mikuu telusa oka vishayam lo miru naku yeppudu kii iina vodinchaleruu.\nYenta aa vishayam??\nI'm the winner of loving more than you because miikanta munduuu nenu premincha gaa 😁👉🏻👈.`
    },
    {
      name: "Mendi Bhargavi 😶‍🌫️",
      msg: `Miru navvin appudu Hee-Hee sound naku chala istam Vijay.\nAndike emo yenta badhaa lo unna adi vinte chalu anni marchipotaa.\n\nDon't lose your smile and most importantly mii laughter face.\n\nIvee request kadu order as nee future wife gaa 😂\n\nEe roju anipistundi Vijay...\nyour mine 💗\n\nHappiest birthday nannnaa ❤️`
    },
    {
      name: "Me 💌",
      msg: `Mii tho nee every day start avalii,\nmii tho nee every night end avalii,\ndoesn't matter with romance or fight—\nmii tho ite chalu 🧸`
    },
    {
      name: "Us 💫",
      msg: `Eppudu nunchiii every year mii birthday manam celebrate cheskovali.\n\nPromise chestunaa—\nmii age increase avutuunte,\nmii paina unna prema kuda increase avutadhi ❤️\n\nI love you Viju 🥺❤️`
    }
  ];

  return (
    <div className={`min-h-screen bg-white ${montserrat.className}`}>
      {/* Countdown */}
      <section className="py-20 px-4 bg-gradient-to-b from-red-50 to-white text-center">
        <h2 className={`text-4xl md:text-5xl text-red-600 mb-10 ${pacifico.className}`}>
          Countdown to 20 May 🎂
        </h2>
        <div className="flex justify-center gap-4 md:gap-8 text-red-700 flex-wrap">
          {Object.entries(timeLeft).map(([label, val]) => (
            <div key={label} className="bg-white px-5 py-4 rounded-2xl shadow-md border border-red-200 min-w-[80px]">
              <div className="text-3xl md:text-5xl font-bold">{isMounted ? val : 0}</div>
              <div className="text-sm md:text-base capitalize">{label}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-lg text-red-500">✨ Happiest birthday Viju ❤️ ✨</p>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4 bg-white">
        <h2 className={`text-4xl text-center text-red-600 mb-10 ${pacifico.className}`}>Our Memories 📸</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`photo${i + 1}`} className="w-full h-56 object-cover rounded-2xl hover:scale-105 transition duration-300 shadow-md border-2 border-red-100" />
          ))}
        </div>
      </section>

      {/* Memories Video */}
      <section className="py-16 px-4 bg-red-50">
        <h2 className={`text-4xl text-center text-red-600 mb-10 ${pacifico.className}`}>Special Moment 🎥</h2>
        <div className="max-w-3xl mx-auto">
          <video src="https://files.catbox.moe/lbqxq2.mp4" controls autoPlay muted loop playsInline className="w-full rounded-2xl shadow-lg border-4 border-red-200" />
        </div>
      </section>

      {/* Wishes */}
      <section className="py-16 px-4 bg-white">
        <h2 className={`text-4xl text-center text-red-600 mb-10 ${pacifico.className}`}>Wishes from Me 🥰</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {wishes.map((w, i) => (
            <div key={i} className="bg-red-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <p className="text-lg text-gray-800 whitespace-pre-line">{w.msg}</p>
              <p className="text-right mt-3 font-semibold text-red-600">- {w.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-red-600 text-white">
        <p className={`text-xl ${pacifico.className}`}>Made with ❤️ for Viju</p>
        <p className="text-sm mt-2">20 May 2026 • Forever Yours</p>
      </footer>
    </div>
  );
        }
        
