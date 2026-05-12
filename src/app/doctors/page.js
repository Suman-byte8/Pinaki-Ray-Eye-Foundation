import Link from "next/link";
import Image from "next/image";
import { doctorsData } from "@/data/doctorsData";

export default function DoctorsPage() {
  return (
    <>
      <main className="flex-grow py-20 bg-[#f9f9fb]">
        <div className="max-w-[1200px] mx-auto px-6">


        <h1 className="text-4xl font-bold text-center text-[#2f317b] mb-12">
          Our Doctors
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctorsData.map((doctor) => (
            <Link
              key={doctor.slug}
              href={`/doctors/${doctor.slug}`}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
            >
              <div className="relative w-full h-[350px] rounded-lg overflow-hidden mb-4">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <h2 className="text-xl font-bold text-[#2f317b]">
                {doctor.name}
              </h2>

              <p className="text-gray-600 text-sm">{doctor.designation}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
    </>
  );

}




