"use client";

import Image from 'next/image'
import icon from "@/public/icons/check.png"
import Link from 'next/link'
import { useState, useEffect, useCallback, useRef } from "react";

const Offer = () => {
    const INIT_HOURS = 7;
    const INIT_MINUTES = 42;
    const INIT_SECONDS = 30;

    const [totalSeconds, setTotalSeconds] = useState(
        INIT_HOURS * 3600 + INIT_MINUTES * 60 + INIT_SECONDS
    );
    const intervalRef = useRef(null);

    // Format time with leading zeros
    const formatTime = useCallback(() => {
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        return {
            hours: hrs.toString().padStart(2, "0"),
            minutes: mins.toString().padStart(2, "0"),
            seconds: secs.toString().padStart(2, "0"),
        };
    }, [totalSeconds]);

    const { hours, minutes, seconds } = formatTime();

    // Start timer
    useEffect(() => {
        if (totalSeconds <= 0) return;

        intervalRef.current = setInterval(() => {
            setTotalSeconds((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <section className='pt-20 py-6 md:py-10 lg:py-20 bg-[linear-gradient(180deg,_#070B18_0%,_#030508_100%)]'>
            <div className='container mx-auto px-5 lg:max-w-6xl'>
                <div className="rounded-[28px] bg-[#141C2E] border border-[#0EA5E952] shadow-[0px_0px_24px_rgba(14,165,233,0.38)] px-6 md:px-8 lg:px-10 pt-20 md:pt-10 lg:pt-15 pb-6 md:pb-8 lg:pb-12 relative">
                    <div className='py-2 px-6 rounded-[50px] bg-linear-to-r from-[#DC2626] to-[#EF4444] shadow-[0px_4px_20px_rgba(239,68,68,0.4)] font-bold text-xs leading-5 text-center text-white absolute top-0 left-4 right-4 md:left-1/2 md:right-auto transform md:-translate-x-1/2 -translate-y-1/2'>🔥 সীমিত সময়ের ধামাকা অফার 🔥</div>
                    <div className='space-y-4 md:space-y-5 lg:space-y-7'>
                        <div className='space-y-3 lg:space-y-5 text-center'>
                            <span className="inline-block py-1 px-3.5 rounded-[50px] bg-[#0EA5E914] border border-[#0EA5E952] text-xs leading-4.5 text-center text-[#38BDF8] font-bold">বিশেষ মূল্য ছাড়</span>
                            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#F8FAFC] text-center">৫০% ছাড়ে নিন - <br /> <span className="text-[#38BDF8]">আজকেই শেষ সুযোগ!</span></h2>
                        </div>
                        <div className='space-y-3'>
                            <p className="font-normal text-sm leading-5 text-center text-[#64748B]">⏰ এই অফার শেষ হচ্ছে:</p>

                            {/* Countdown Timer - Original Design No Changes */}
                            <div className="flex items-center justify-center gap-2 lg:gap-4 lg:w-8/12 mx-auto">
                                {/* Hours */}
                                <div className="flex-1 py-3.5 px-4.5 bg-[#0A0F1E] border border-[#0EA5E924] rounded-[10px] space-y-1">
                                    <p className="text-center text-lg lg:text-4xl leading-none font-bold text-[#38BDF8]">
                                        {hours}
                                    </p>
                                    <p className="text-center font-semibold text-xs text-[#64748B]">ঘণ্টা</p>
                                </div>
                                {/* Minutes */}
                                <div className="flex-1 py-3.5 px-4.5 bg-[#0A0F1E] border border-[#0EA5E924] rounded-[10px] space-y-1">
                                    <p className="text-center text-lg lg:text-4xl leading-none font-bold text-[#38BDF8]">
                                        {minutes}
                                    </p>
                                    <p className="text-center font-semibold text-xs text-[#64748B]">মিনিট</p>
                                </div>
                                {/* Seconds */}
                                <div className="flex-1 py-3.5 px-4.5 bg-[#0A0F1E] border border-[#0EA5E924] rounded-[10px] space-y-1">
                                    <p className="text-center text-lg lg:text-4xl leading-none font-bold text-[#38BDF8]">
                                        {seconds}
                                    </p>
                                    <p className="text-center font-semibold text-xs text-[#64748B]">সেকেন্ড</p>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-3 text-center'>
                            <p className='text-center font-semibold text-xs text-[#64748B]'>পূর্বের দাম: ৳৫,৯৯৮</p>
                            <h2 className='text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#38BDF8] text-center'>৳২,৯৯৯</h2>
                            <span className='inline-block py-2 px-6 rounded-[50px] bg-linear-to-r from-[#DC2626] to-[#EF4444] shadow-[0px_4px_20px_rgba(239,68,68,0.38)] text-xs md:text-sm font-bold leading-6 text-center text-white'>আপনি বাঁচাচ্ছেন ৳৩,০০০ টাকা!</span>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <div className='rounded-[10px] bg-[#070B18] border border-[#0EA5E924] py-3 px-3.5 flex gap-3 md:gap-6 lg:gap-8'>
                                <Image className='shrink-0 size-4 lg:size-6' src={icon} alt="Check" width={24} height={24} />
                                <span className='text-sm leading-5 font-normal text-[#CBD5E1] grow'>ক্যাশ অন ডেলিভারি</span>
                            </div>
                            <div className='rounded-[10px] bg-[#070B18] border border-[#0EA5E924] py-3 px-3.5 flex gap-3 md:gap-6 lg:gap-8'>
                                <Image className='shrink-0 size-4 lg:size-6' src={icon} alt="Check" width={24} height={24} />
                                <span className='text-sm leading-5 font-normal text-[#CBD5E1] grow'>ফ্রি হোম ডেলিভারি</span>
                            </div>
                            <div className='rounded-[10px] bg-[#070B18] border border-[#0EA5E924] py-3 px-3.5 flex gap-3 md:gap-6 lg:gap-8'>
                                <Image className='shrink-0 size-4 lg:size-6' src={icon} alt="Check" width={24} height={24} />
                                <span className='text-sm leading-5 font-normal text-[#CBD5E1] grow'>১০০% অথেন্টিক প্রোডাক্ট</span>
                            </div>
                            <div className='rounded-[10px] bg-[#070B18] border border-[#0EA5E924] py-3 px-3.5 flex gap-3 md:gap-6 lg:gap-8'>
                                <Image className='shrink-0 size-4 lg:size-6' src={icon} alt="Check" width={24} height={24} />
                                <span className='text-sm leading-5 font-normal text-[#CBD5E1] grow'>কনফার্মেশন কল</span>
                            </div>
                            <div className='rounded-[10px] bg-[#070B18] border border-[#0EA5E924] py-3 px-3.5 flex gap-3 md:gap-6 lg:gap-8'>
                                <Image className='shrink-0 size-4 lg:size-6' src={icon} alt="Check" width={24} height={24} />
                                <span className='text-sm leading-5 font-normal text-[#CBD5E1] grow'>৩০ দিনের সার্ভিং</span>
                            </div>
                            <div className='rounded-[10px] bg-[#070B18] border border-[#0EA5E924] py-3 px-3.5 flex gap-3 md:gap-6 lg:gap-8'>
                                <Image className='shrink-0 size-4 lg:size-6' src={icon} alt="Check" width={24} height={24} />
                                <span className='text-sm leading-5 font-normal text-[#CBD5E1] grow'>বিচক্ষণ প্যাকেজিং</span>
                            </div>
                        </div>

                        <div className='py-3 px-3.5 bg-[#EF444417] rounded-[10px] border border-[#EF444447] space-y-3'>
                            <p className='font-bold text-sm leading-5 text-center text-[#F87171]'>⚠️ মাত্র ৯৭টি স্টকে আছে!</p>
                            <div className='w-full h-2 rounded-lg overflow-hidden bg-[#070B18] relative'>
                                <div className='rounded-lg bg-linear-to-r from-[#EF4444] to-[#F97316] h-full absolute w-3/4'></div>
                            </div>
                            <p className='text-xs leading-5 text-center text-[#64748B] font-semibold'>৬৭% স্টক ইতোমধ্যে বিক্রি হয়ে গেছে</p>
                        </div>

                        <div className='space-y-3 text-center'>
                            <Link href="#order-form" className='inline-block py-4.5 px-6 rounded-[12px] bg-linear-to-r from-[#0369A1] via-[#0EA5E9] to-[#38BDF8] shadow-[0px_0px_40px_rgba(14,165,233,0.48),_0px_8px_28px_rgba(0,0,0,0.4)] text-lg leading-7.5 tracking-[0.2px] text-center font-bold'>🛒 এখনই অর্ডার করুন - ৳২,৯৯৯ মাত্র</Link>
                            <p className='text-xs font-normal text-center text-[#64748B]'>📦 ঘরে পেয়ে টাকা দিন · কোনো আগাম পেমেন্ট নেই · সহজ রিফান্ড পলিসি</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer