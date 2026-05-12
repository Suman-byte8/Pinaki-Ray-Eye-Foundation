// ==========================================
// 1. IMPORT ALL IMAGES FROM SRC/ASSETS
// ==========================================

// Awards
import award4 from "@/assets/gallery/Awards and Recognition/4.webp";
import award5 from "@/assets/gallery/Awards and Recognition/5.webp";
import award6 from "@/assets/gallery/Awards and Recognition/6.webp";
import award7 from "@/assets/gallery/Awards and Recognition/7.webp";
import award8 from "@/assets/gallery/Awards and Recognition/8.webp";
import award9 from "@/assets/gallery/Awards and Recognition/9.webp";
import award10 from "@/assets/gallery/Awards and Recognition/10.webp";
import award11 from "@/assets/gallery/Awards and Recognition/11.webp";
import award12 from "@/assets/gallery/Awards and Recognition/12.webp";

// Community Outreach
import camp1 from "@/assets/gallery/Community Outreach/Pinaki_Ray_Eye_Camp1.webp";
import camp2 from "@/assets/gallery/Community Outreach/Pinaki_Ray_Eye_Camp2.webp";
import camp3 from "@/assets/gallery/Community Outreach/Pinaki_Ray_Eye_Camp3.webp";
import camp5 from "@/assets/gallery/Community Outreach/Pinaki_Ray_Eye_Camp5.webp";
import camp6 from "@/assets/gallery/Community Outreach/Pinaki_Ray_Eye_Camp6.webp";
import camp7 from "@/assets/gallery/Community Outreach/Pinaki_Ray_Eye_Camp7.webp";
import camp8 from "@/assets/gallery/Community Outreach/Pinaki_Ray_Eye_Camp8.webp";
import camp9 from "@/assets/gallery/Community Outreach/Pinaki_Ray_Eye_Camp9.webp";
import camp10 from "@/assets/gallery/Community Outreach/Pinaki_Ray_Eye_Camp10.webp";
import camp12 from "@/assets/gallery/Community Outreach/Pinaki_Ray_Eye_Camp12.webp";

// Our Hospital
import hosp1 from "@/assets/gallery/Our Hospital/1.webp";
import hosp2 from "@/assets/gallery/Our Hospital/2.webp";
import hosp3 from "@/assets/gallery/Our Hospital/3.webp";
import hosp4 from "@/assets/gallery/Our Hospital/4.webp";
import hosp5 from "@/assets/gallery/Our Hospital/5.webp";
import hosp6 from "@/assets/gallery/Our Hospital/6.webp";
import hosp7 from "@/assets/gallery/Our Hospital/7.webp";
import hosp8 from "@/assets/gallery/Our Hospital/8.webp";
import hosp9 from "@/assets/gallery/Our Hospital/9.webp";

// ==========================================
// 2. EXPORT THE DATA ARRAY
// ==========================================

export const galleryData = [
  {
    id: "our-hospital",
    category: "Our Hospital",
    images: [
      { src: hosp1, alt: "Hospital 1", width: 800, height: 500 },
      { src: hosp2, alt: "Hospital 2", width: 800, height: 800 },
      { src: hosp3, alt: "Hospital 3", width: 800, height: 600 },
      { src: hosp4, alt: "Hospital 4", width: 800, height: 700 },
      { src: hosp5, alt: "Hospital 5", width: 800, height: 550 },
      { src: hosp6, alt: "Hospital 6", width: 800, height: 850 },
      { src: hosp7, alt: "Hospital 7", width: 800, height: 600 },
      { src: hosp8, alt: "Hospital 8", width: 800, height: 750 },
      { src: hosp9, alt: "Hospital 9", width: 800, height: 500 },
    ],
  },
  {
    id: "awards",
    category: "Awards",
    images: [
      { src: award4, alt: "Award 4", width: 800, height: 600 },
      { src: award5, alt: "Award 5", width: 800, height: 800 },
      { src: award6, alt: "Award 6", width: 800, height: 500 },
      { src: award7, alt: "Award 7", width: 800, height: 700 },
      { src: award8, alt: "Award 8", width: 800, height: 600 },
      { src: award9, alt: "Award 9", width: 800, height: 900 },
      { src: award10, alt: "Award 10", width: 800, height: 500 },
      { src: award11, alt: "Award 11", width: 800, height: 750 },
      { src: award12, alt: "Award 12", width: 800, height: 600 },
    ],
  },
  {
    id: "community-outreach",
    category: "Community Outreach",
    images: [
      { src: camp1, alt: "Eye Camp 1", width: 800, height: 600 },
      { src: camp2, alt: "Eye Camp 2", width: 800, height: 700 },
      { src: camp3, alt: "Eye Camp 3", width: 800, height: 500 },
      { src: camp5, alt: "Eye Camp 5", width: 800, height: 800 },
      { src: camp6, alt: "Eye Camp 6", width: 800, height: 600 },
      { src: camp7, alt: "Eye Camp 7", width: 800, height: 900 },
      { src: camp8, alt: "Eye Camp 8", width: 800, height: 550 },
      { src: camp9, alt: "Eye Camp 9", width: 800, height: 700 },
      { src: camp10, alt: "Eye Camp 10", width: 800, height: 600 },
      { src: camp12, alt: "Eye Camp 12", width: 800, height: 750 },
    ],
  },
];
