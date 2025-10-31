export default function VideoHero() {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">
          AI-powered Dental Solutions
        </h1>
      </div>
    </div>
  );
}
