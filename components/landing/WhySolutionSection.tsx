
import Image from "next/image";
import men40Image from "@/public/images/men40.png"
import icon1 from "@/public/icons/fire.png";
import icon2 from "@/public/icons/sheld.png";
import icon3 from "@/public/icons/arm.png";
import icon4 from "@/public/icons/medicine.png";
import icon5 from "@/public/icons/dna.png";
const WhySolutionSection = () => {
    const features = [
        {
            id: 1,
            icon: icon1,
            title: "পুরুষালি শক্তি ও ড্রাইভ ফিরিয়ে দেয়",
            description: "Zinc, Selenium ও CoQ10 হরমোন উৎপাদনে সহায়ক। পুরুষের অভ্যন্তরীণ শক্তি ও উদ্দীপনা স্বাভাবিক মাত্রায় ফিরিয়ে আনতে সাহায্য করে।"
        },
        {
            id: 2,
            icon: icon2,
            title: "প্রোস্টেট সাপোর্ট - Saw Palmetto সহ",
            description: "৪০+ বয়সে প্রোস্টেট স্বাস্থ্য অত্যন্ত গুরুত্বপূর্ণ। Saw Palmetto ও Lycopene প্রোস্টেট সুস্থ রাখতে পরিচিত।"
        },
        {
            id: 3,
            icon: icon3,
            title: "স্ট্যামিনা ও পারফরমেন্স বৃদ্ধি",
            description: "B-কমপ্লেক্স, Magnesium ও Vitamin D শরীরের এনার্জি লেভেল বাড়িয়ে শারীরিক ও মানসিক পারফরমেন্স উন্নত করে।"
        },
        {
            id: 4,
            icon: icon4,
            title: "২০+ পুষ্টি উপাদান - একটিই বোতলে",
            description: "আলাদা আলাদা সাপ্লিমেন্ট কেনার ঝামেলা নেই। প্রতিদিন মাত্র ২টি ক্যাপসুল।"
        },
        {
            id: 5,
            icon: icon5,
            title: "বিশেষ Men's 40+ Blend",
            description: "Boron, Lutein, Zeaxanthin ও অন্যান্য উপাদান বিশেষভাবে ৪০+ পুরুষের চাহিদার কথা মাথায় রেখে তৈরি।"
        },
    ]
    return (
        <section className="relative py-6 md:py-10 lg:py-20 bg-[#070B18] overflow-hidden z-1">
            <div className="absolute size-125 rounded-full bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(14,165,233,0.06)_0%,rgba(14,165,233,0)_70%)] -top-37.5 -right-37.5 -z-1"></div>
            <div className="container mx-auto px-5 space-y-6 md:space-y-8 lg:space-y-11.5">
                <div className='space-y-3 lg:space-y-4'>
                    <span className="inline-block px-3.5 py-1 bg-[#0EA5E914] rounded-[50px] border border-[#0EA5E952] font-bold tracking-[0.8px] text-xs text-[#38BDF8]">সমাধান এখানেই</span>
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold">
                        কেন <span className="text-[#38BDF8]">Men's 40+</span><br /> সবার থেকে আলাদা?
                    </h2>
                    <span className="inline-block w-13 h-0.75 rounded-[2px] bg-linear-to-r from-[#0EA5E9] to-transparent"></span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 md:gap-8 lg:gap-12">
                    <div className="lg:px-11.5 lg:py-21 md:px-0 md:py-0 px-4 py-6 bg-[#101624] border border-[#0EA5E924] rounded-[20px] flex items-center justify-center shadow-[0_0_24px_rgba(14,165,233,0.38)] grow w-full">
                        <Image src={men40Image} alt="men image" width={534} height={616} />
                    </div>
                    <div className="space-y-3 md:space-y-4 lg:max-w-7/12 w-full shrink-0">
                        {features.map(feature => (
                            <div key={feature.id} className="flex gap-3.5 border border-[#0F1523] rounded-[12px] lg:p-4.5 p-3 bg-[#0F1523]">
                                <div className="size-11.5 rounded-[11px] py-1 px-2.5 bg-[#0EA5E91A] border border-[#0EA5E952] flex items-center justify-center shrink-0">
                                    <Image src={feature.icon} alt={feature.title} width={21} height={34} className="h-5 w-8.5 shrink-0" />
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-base font-bold text-[#38BDF8]">{feature.title}</h3>
                                    <p className="text-sm font-normal text-[#64748B] ">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default WhySolutionSection