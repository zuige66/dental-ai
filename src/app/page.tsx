import VideoHero from "@/app/components/VideoHero";

export default function HomePage() {
  return (
    <div>
      <VideoHero />
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Welcome to Dental AI</h2>
        <p className="text-lg text-gray-600">
          Harness the power of AI for dental diagnosis, tooth segmentation, and
          treatment planning.
        </p>
      </section>
    </div>
  );
}
