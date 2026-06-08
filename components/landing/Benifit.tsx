import React from 'react'
import Image from "next/image"
import icon1 from "@/public/icons/fire.png"
import icon2 from "@/public/icons/painSectionIcon/icon2.png"
import icon3 from "@/public/icons/painSectionIcon/icon3.png"

const Benifit = () => {
    const benifits = [
        {
            id: 1,
            icon: icon1,
            title: "যৌ/ন শক্তি পূর্ণ উদ্ধার",
            description: "পার্টনারের সাথে খেলা হবে ১০০ ১০০ সম্পর্ক হবে গভীর ও আনন্দময়"
        },
        {
            id: 2,
            icon: icon2,
            title: "খেলা শুরু হবে কিন্তু এবার পার্টনার OUT হবে",
            description: "আপনার আত্মবিশ্বাস ও শক্তির জোরে পার্টনার হেরে যাবে"
        },
        {
            id: 3,
            icon: icon3,
            title: "শরীরে দুর্বলতা ও ক্লান্তি  আর নয়",
            description: "ফিরে পাবেন দীর্ঘক্ষণ এনার্জি ও আত্মবিশ্বাসের অনুভূতি। প্রতিবার খেলাতেই পাবেন তৃপ্তি"
        }
    ];
    return (
        <section className="py-6 md:py-10 lg:py-20 bg-[#04060F]">
            <div className="container mx-auto px-5 space-y-4 lg:space-y-9">
                <div className='space-y-3 lg:space-y-4'>
                    <span className="inline-block px-3.5 py-1 bg-[#0EA5E914] rounded-[50px] border border-[#0EA5E952] font-bold tracking-[0.8px] text-xs text-[#38BDF8]">মূল উপকারিতা</span>
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#F8FAFC]">যে
                        <span className="text-[#38BDF8]"> ৩টি পরিবর্তন</span><br /> আপনি অনুভব করবেন
                    </h2>
                    <span className="inline-block w-13 h-0.75 rounded-[2px] bg-linear-to-r from-[#0EA5E9] to-transparent"></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                    {benifits.map((benifit) => (
                        <div key={benifit.id} className="px-4.5 py-5.5 rounded-lg bg-[#0F1523] border border-[#EF444424] transition-all duration-300 ease-linear hover:-translate-y-1">
                            <div className="flex items-center justify-center mb-4">
                                <Image src={benifit.icon} alt={benifit.title} width={48} height={48} className="size-12" />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-base text-center font-bold text-[#0EA5E9]">{benifit.title}</h3>
                                <p className="max-w-8/12 text-sm text-center font-normal text-[#64748B] mx-auto">{benifit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Benifit