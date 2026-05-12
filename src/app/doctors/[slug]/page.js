import { doctorsData } from "@/data/doctorsData";
import DoctorPageClient from "./DoctorPageClient";

export async function generateStaticParams() {
  return doctorsData.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DoctorPage({ params }) {
  const { slug } = await params;
  return <DoctorPageClient slug={slug} />;
}
