// Import your community outreach images
import camp1 from "@/assets/community outreach page/co1.webp";
import camp2 from "@/assets/community outreach page/co2.webp";
import camp3 from "@/assets/community outreach page/co3.webp";
import camp5 from "@/assets/community outreach page/co5.webp";
import camp6 from "@/assets/community outreach page/co6.webp";
import camp7 from "@/assets/community outreach page/co7.webp";    
import camp8 from "@/assets/community outreach page/co8.webp";
import camp9 from "@/assets/community outreach page/co9.webp";
import camp10 from "@/assets/community outreach page/co10.webp";
import camp12 from "@/assets/community outreach page/co12.webp";
import camp13 from "@/assets/community outreach page/co13.webp";
import camp14 from "@/assets/community outreach page/co14.webp";
import camp15 from "@/assets/community outreach page/co15.webp";
import camp16 from "@/assets/community outreach page/co16.webp";


export const communityData = {
  hero: {
    title: "Community Outreach",
  },
  activities: {
    title: "Community Eye Care Activities of The Hospital Aim to Reach The Unreached",
    leftColumn: [
      "To identify patients with cataract and do their surgery.",
      "To do refractive correction and prescribe glasses.",
      "To treat and create awareness about other eye diseases."
    ],
    rightColumn: [
      "To increase eye health seeking behavior among people.",
      "To conduct door to door survey to know about the magnitude of avoidable blindness and vision problems."
    ]
  },
  gallery: {
    title: "For All The World To See",
    // We map your imported images here. You can add as many as you want.
    images: [
      { id: 1, src: camp1, alt: "Community Outreach Eye Camp 1" },
      { id: 2, src: camp2, alt: "Community Outreach Eye Camp 2" },
      { id: 3, src: camp3, alt: "Community Outreach Eye Camp 3" },
      { id: 4, src: camp5, alt: "Community Outreach Eye Camp 5" },
      { id: 5, src: camp6, alt: "Community Outreach Eye Camp 6" },
      { id: 6, src: camp7, alt: "Community Outreach Eye Camp 7" },
      { id: 7, src: camp8, alt: "Community Outreach Eye Camp 8" },
      { id: 8, src: camp9, alt: "Community Outreach Eye Camp 9" },
      { id: 9, src: camp10, alt: "Community Outreach Eye Camp 10" },
      { id: 10, src: camp12, alt: "Community Outreach Eye Camp 12" },
      // Duplicated a couple just to demonstrate the grid filling out 
      // like in your screenshot. Replace with actual images.
      { id: 11, src: camp1, alt: "Community Outreach Eye Camp 11" },
      { id: 12, src: camp2, alt: "Community Outreach Eye Camp 12" },
      { id: 13, src: camp3, alt: "Community Outreach Eye Camp 13" },
      { id: 14, src: camp5, alt: "Community Outreach Eye Camp 14" },
      { id: 15, src: camp6, alt: "Community Outreach Eye Camp 15" },
      { id: 16, src: camp7, alt: "Community Outreach Eye Camp 16" },
    ]
  }
};