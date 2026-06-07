import Image from 'next/image'
import Link from 'next/link'
import leftProductImg from "@/public/images/left-side.png"
import rightProductImg from "@/public/images/right-side.png"

const FinalCta = () => {
    return (
        <section className='py-6 md:py-10 lg:py-20 relative z-1 bg-[linear-gradient(106.14deg,_#04080F_0%,_#06112A_100%)]'>
            <div className='container mx-auto px-5 max-w-2xl flex gap-5 flex-col lg:block'>
            <div className='lg:absolute left-0 top-0 h-full -z-1'>
                <Image src={leftProductImg} alt='product img' width={797} height={555} />
            </div>
            <div className='order-last lg:absolute right-0 top-0 h-full -z-1'>
                <Image src={rightProductImg} alt='product img' width={797} height={555} />
            </div>
                <div className='text-center space-y-4'>
                    <span className="inline-block py-1 px-3.5 rounded-[50px] bg-[#0EA5E914] border border-[#0EA5E952] text-xs leading-4.5 text-center text-[#38BDF8] font-bold">শেষ সুযোগ</span>
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#F8FAFC] text-center">আর অপেক্ষা নয় - <br /> <span className="text-[#38BDF8]">আজই দাম্পত্য জীবন বদলে দিন</span></h2>
                    <p className='lg:w-2/4 mx-auto text-xs leading-5 text-center font-normal text-[#CBD5E1]'>আপনার স্ত্রী আপনাকে ভালোবাসে। আপনার পরিবার আপনাকে চায়। তাদের জন্য, নিজের জন্য — আজই একটা সিদ্ধান্ত নিন। <span className='font-bold'>শক্তি, স্ট্যামিনা ও আত্মবিশ্বাস — আবার ফিরে পান।</span></p>
                    <div className='space-y-3 text-center'>
                        <Link href="#order-form" className='inline-block py-4.5 px-6 rounded-[12px] bg-linear-to-r from-[#0369A1] via-[#0EA5E9] to-[#38BDF8] shadow-[0px_0px_40px_rgba(14,165,233,0.48),_0px_8px_28px_rgba(0,0,0,0.4)] text-lg leading-7.5 tracking-[0.2px] text-center font-bold'>🚀 এখনই অর্ডার করুন - মাত্র ৳২,৯৯৯</Link>
                        <p className='text-xs font-normal text-center text-[#64748B]'>📦 ঘরে পেয়ে টাকা দিন · কোনো আগাম পেমেন্ট নেই · সহজ রিফান্ড পলিসি</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinalCta