
import DoctorCard from './DoctorCard';
import SectionHeading from './SectionHeading';
import ToggleButton from './ToggleButton';
import Link from 'next/link';

export default function DoctorsList() {
  return (
    <div className="bg-pink-100 py-8 lg:py-24 flex-wrap px-3">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Telehealth Visit" />
        <div className="py-4 flex items-center justify-between">
         
         <ToggleButton />
          
          {/* See All Button */}
          <Link
            href="/doctors"
            className="py-3 px-6 border border-blue-600 bg-white rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            See All
          </Link>
          
        </div>
        <div className="py-6">
          <DoctorCard />
          </div>
      </div>
    </div>
  );
}
