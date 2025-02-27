
import { Stethoscope } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function DoctorCard() {
    return (
        <div
            className="border border-gray-200 bg-white inline-flex flex-col py-8 px-6 rounded-md">
            <Link href="#">
                <h2 className="uppercase font-bold text-2xl tracking-widest">Vijal Patel, PA-C</h2>
                <p className="py-3"> 3250 Lincoln Highway, Kendall Park, NJ 08824 </p>
                <div className="flex items-center gap-4 py-4">
                    <Image src="/doctor.jpg" width={243} height={207} alt="Doctor" className="w-24 h-24 rounded-full object-cover" />
                    <div className="flex flex-col gap-2">
                        <p className="flex items-center">
                            <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0 " />
                            <span>Family Medicine</span>
                        </p>
                        <p className="bg-green-200 py-3 px-6 uppercase">Available today</p>
                    </div>
                </div></Link>
            <div className="pt-8 border-t border-gray-400">
                <h3>
                    Tue, Mar 12 Original Price $137 $127 with Sesame Plus
                </h3>
            </div>
        </div>
    )
}

