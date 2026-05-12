// Import service images
import primaryEyeCare from '../assets/services/Primary_Eye_care.jpg';
import cataract from '../assets/services/Cataract_services_final.jpg.webp';
import retina from '../assets/services/retina-service1.jpg.webp';
import glaucoma from '../assets/services/Glaucoma_services.jpg';
import cornea from '../assets/services/Cornea_and_anterior_segment_services.jpg';
import oculoplasty from '../assets/services/Occuloplasty.jpg';
import pediatric from '../assets/services/pediatric-opthalmology.jpg.webp';
import diagnostic from '../assets/services/diagnostic_services.jpg';

// Import doctor images
import dr_dhurjati from '../assets/doctors/Dr Dhurjati Prasad Ray.webp';
import dr_rashi from '../assets/doctors/Dr Rashi Ray.jpg';
import dr_swakshyar from '../assets/doctors/Dr Swakshyar Saumya Pal.jpg';

export const servicesData = [
  { id: 1, title: 'Primary Eye Care', image: primaryEyeCare },
  { id: 2, title: 'Cataract', image: cataract },
  { id: 3, title: 'Retina', image: retina },
  { id: 4, title: 'Glaucoma', image: glaucoma },
  { id: 5, title: 'Cornea and Anterior Segment', image: cornea },
  { id: 6, title: 'Oculoplasty', image: oculoplasty },
  { id: 7, title: 'Paediatric Ophthalmology and Strabismus', image: pediatric },
  { id: 8, title: 'Ocular Diagnostics', image: diagnostic },
];

export const consultantsData = [
  {
    id: 1,
    name: 'Dr. Dhurjati Prasad Ray',
    role: 'Senior Opthalmic Consultant',
    specialization: 'Cataract and Refractive Surgeon',
    image: dr_dhurjati,
  },
  {
    id: 2,
    name: 'Dr. Rashi Ray',
    role: 'Senior Opthalmic Consultant',
    specialization: 'Cataract and Refractive Surgeon',
    image: dr_rashi,
  },
  {
    id: 3,
    name: 'Dr. Swakshyar Saumya Pal',
    role: 'Senior Vitreo-Retina-Consultant and Surgeon',
    specialization: 'Vitreo-Retina Specialist', // Adjusted to fit nicely
    image: dr_swakshyar,
  },
];

export const faqData = [
  {
    id: '01',
    question: 'How much time does it take for a basic eye check up?',
    answer: 'A basic eye checkup will need minimum of 30 - 45 min. It includes some basic eye examination by Optometrist and detailed eye examination by your ophthalmologist.',
  },
  {
    id: '02',
    question: 'My patient is very old and cannot sit for long waiting period. Can you help?',
    answer: 'We encourage patients to take prior appointment on given contact number to decrease the waiting time and our staff will prioritize their examination. In case of eye trauma, patients will be seen on emergency basis.',
  },
  {
    id: '03',
    question: 'My patients is very anxious about getting their eyes checked. How can you help?',
    answer: 'We have a patient care team who will talk to your patient along with attendant to answer questions and help with a smooth examination.',
  },
  {
    id: '04',
    question: 'My patient is old and having difficulty in seeing. Do you think it is cataract and surgery will be required?',
    answer: 'Your patient needs to be examined by an ophthalmologist to assure the cause of decrease in vision. All patients of decrease in vision may not be due to Cataract.',
  },
  {
    id: '05',
    question: 'Can i take appointment for a specific consultant?',
    answer: 'Yes, you can take appointment for a specific consultant.',
  },
  {
    id: '06',
    question: 'Is there a night stay facility?',
    answer: 'Our hospital is a day care Hospital but you can avail “Guest House facility” within the hospital after discharge.',
  },
];