"use client";

import { useState } from "react";

export default function UploadPage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleUpload = () => {
    const widget = (window as any).cloudinary.createUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          setImageUrl(result.info.secure_url);
        }
      }
    );
    widget.open();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-semibold">Upload Dental Image</h1>
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
      >
        Upload Image
      </button>
      {imageUrl && (
        <div className="mt-4">
          <img
            src={imageUrl}
            alt="Uploaded"
            className="max-w-md rounded-xl shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
