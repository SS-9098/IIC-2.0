import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



import ParticleBackground from "../components/ParticleBackground.tsx";

const IntroWrapper: React.FC = () => {
  const [showIntro] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [glitchText, setGlitchText] = useState("IIC 2.0");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);

    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.85) {
        const glitched = "IIC 2.0"
          .split("")
          .map((char) =>
            Math.random() > 0.7
              ? String.fromCharCode(33 + Math.floor(Math.random() * 94))
              : char
          )
          .join("");
        setGlitchText(glitched);
        setTimeout(() => setGlitchText("IIC 2.0"), 50);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      clearInterval(glitchInterval);
    };
  }, []);

  const handleEnter = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen relative bg-black text-white overflow-hidden font-mono">
      
      <ParticleBackground />

      {showIntro && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center text-center px-6 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 0, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 0, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              animation: "gridPulse 4s ease-in-out infinite",
            }}
          />

          <div className="relative mb-2">
            <h1
              className={`text-6xl sm:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF0066] via-[#FF1493] to-[#FF69B4] transition-all duration-300 ${
                glitchText !== "IIC 2.0" ? "animate-pulse" : ""
              }`}
              style={{
                textShadow:
                  glitchText === "IIC 2.0"
                    ? "0 2px 8px rgba(255, 20, 147, 0.6), 0 4px 16px rgba(255, 20, 147, 0.5)"
                    : "0 0 15px rgba(255, 0, 102, 0.7), 0 0 30px rgba(255, 0, 102, 0.6)",
                filter:
                  glitchText !== "IIC 2.0"
                    ? "hue-rotate(330deg) saturate(1.5)"
                    : "none",
                WebkitTextStroke:
                  glitchText === "IIC 2.0"
                    ? "0.6px rgba(255, 182, 193, 0.7)"
                    : "0.8px rgba(255, 182, 193, 0.9)",
              }}
            >
              {glitchText}
            </h1>

            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-30 h-1"
              style={{
                animation: "scanLine 3s linear infinite",
                top: "50%",
              }}
            />
          </div>

          <p className="mb-5">International Innovation Challenge -2.0</p>
          <div className="relative mb-10">
            <p className="text-pink-300 max-w-2xl text-xl sm:text-2xl tracking-wider leading-relaxed font-light">
              <span className="inline-block animate-pulse mr-2">{">"}</span>
              We are <span className="text-cyan-400 font-semibold">
                Back:
              </span>{" "}
              Bigger in
              <span className="text-fuchsia-400 font-semibold"> Impact</span>
              {"; "}
              Bolder in{" "}
              <span className="text-violet-400 font-semibold">
                Innovation.
              </span>{" "}
              <span className="inline-block animate-pulse ml-2">{"<"}</span>
              <div
                className="inline-block w-3 h-6 bg-pink-400 ml-2 animate-pulse"
                style={{ animation: "blink 1s infinite" }}
              />
            </p>
          </div>

          <div className="relative group">
            <button
              onClick={handleEnter}
              className="relative px-16 py-5 rounded-lg text-xl font-bold text-white bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 hover:from-purple-700 hover:to-pink-600 transition-all duration-500 transform hover:scale-105 active:scale-95 border-2 border-pink-500 overflow-hidden"
              style={{
                boxShadow:
                  "0 0 30px #ff00ff, 0 0 10px #ff00ff, inset 0 0 20px rgba(255, 0, 255, 0.1)",
                textShadow: "0 0 10px #fff",
                letterSpacing: "3px",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700" />

              <span className="relative z-10">Revolutionalise The World</span>
            </button>

            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-pink-400 opacity-60" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-pink-400 opacity-60" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-pink-400 opacity-60" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-pink-400 opacity-60" />
          </div>

          <div className="mt-8 text-center">
            <div className="text-pink-400 tracking-widest text-lg mb-2 animate-pulse">
              // Make your dreams come true...
            </div>
            <div className="text-cyan-300 text-sm opacity-70 font-light">
              [ Press ENTER to JOIN US ]
            </div>
          </div>

          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping" />
          <div
            className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/6 w-1 h-1 bg-violet-400 rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          />
        </div>
      )}

      
      {/* Custom Styles */}
      <style>{`
        @keyframes scanLine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes gridPulse {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default IntroWrapper;
