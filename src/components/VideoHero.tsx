"use client";

const prefix = process.env.NODE_ENV === "production" ? "/dental-ai" : "";

export default function VideoHero() {
  return (
    <div className="relative w-full h-[60vh]  overflow-hidden flex items-center justify-center">
      <video
        src={`${prefix}/video.mp4`}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-[65%] min-h-full object-cover brightness-75"
      />
      <h1
        className="
          relative text-5xl font-extrabold text-white 
          bg-transparent px-6 py-3 rounded-xl
          transition-all duration-500 
          hover:scale-110 hover:-translate-y-2
        "
      >
        AI-powered Dental Solutions
      </h1>
    </div>
  );
}
