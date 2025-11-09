"use client";

const prefix = process.env.NODE_ENV === "production" ? "/dental-ai" : "";

export default function VideoHero() {
  return (
    <div className="relative w-full h-[60vh] mx-auto my-12 max-w-6xl 
        flex items-center justify-center 
        overflow-hidden 
        shadow-none border-0
        rounded-2xl    // ⬅️ 新增：圆角和阴影">
      <video
        src={`${prefix}/video.mp4`}
        autoPlay
        loop
        muted
        playsInline
       className="absolute w-full h-full object-cover brightness-75 rounded-2xl"
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
