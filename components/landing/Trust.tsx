import React from 'react'
import icon1 from "@/public/icons/trustsectionicon/toffi.png"
import icon2 from "@/public/icons/trustsectionicon/bag.png"
import icon3 from "@/public/icons/trustsectionicon/box.png"
import icon4 from "@/public/icons/trustsectionicon/phone.png"
import icon5 from "@/public/icons/trustsectionicon/rocket.png"
import Image from 'next/image'

const Trust = () => {
    const trustedItems = [
        {
            id: 1,
            icon: icon1,
            title: "১০০% অরিজিনাল",
            description: "অফিশিয়াল সোর্স থেকে আমদানি"
        },
        {
            id: 2,
            icon: icon2,
            title: "ক্যাশ অন ডেলিভারি",
            description: "পণ্য পেয়ে তারপর টাকা দিন"
        },
        {
            id: 3,
            icon: icon3,
            title: "বিচক্ষণ প্যাকেজিং",
            description: "গোপনীয়তা বজায় রেখে পাঠানো হয়"
        },
        {
            id: 4,
            icon: icon4,
            title: "কনফার্মেশন কল",
            description: "প্রতিটি অর্ডার ফোনে নিশ্চিত করা হয়"
        },
        {
            id: 5,
            icon: icon5,
            title: "দ্রুত ডেলিভারি",
            description: "ঢাকায় ১-২ দিন, বাইরে ২-৪ দিন"
        },
    ]
    return (
        <section className="py-6 md:py-10 lg:py-20 bg-[#070B18]">
            <div className="container mx-auto px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                {trustedItems.map(item => (
                    <div key={item.id} className="px-2 md:px-4.5 py-3 md:py-5 rounded-lg bg-[#0F1523] border border-[#0EA5E924] shadow-[0px_0px_5px_rgba(14,165,233,0.38)]">
                        <div className="flex items-center justify-center mb-4">
                            <Image src={item.icon} alt={item.title} width={34} height={55} />
                        </div>
                        <div className="space-y-1.5">
                            <h3 className="text-base text-center font-bold text-[#F8FAFC]">{item.title}</h3>
                            <p className="md:max-w-8/12 text-sm text-center font-normal text-[#64748B] mx-auto">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Trust