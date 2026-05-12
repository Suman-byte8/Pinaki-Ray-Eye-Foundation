import React from "react";
import Image from "next/image";
import styles from "./MasonryGallery.module.css";

export default function MasonryGallery({ images }) {
  if (!Array.isArray(images) || images.length === 0) {
    return <p className="text-gray-500 text-center py-10">No images to display.</p>;
  }

  return (
    <div className={styles.masonry}>
      {images.map((img, index) => (
        <div key={index} className={styles.item}>
          <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
            <Image
              src={img.src}
              alt={img.alt || `Image ${index + 1}`}
              width={img.width}
              height={img.height}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority={index < 4} 
              className="hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      ))}
    </div>
  );
}