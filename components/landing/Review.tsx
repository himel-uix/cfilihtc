import Image from 'next/image'
import fiveStar from "@/public/images/five-star.png"
import React from 'react'

const Review = () => {
    return (
        <section className='py-10 md:py-20 lg:py-30 bg-[#01050A]'>
            <div className='container mx-auto px-5'>
                <div className='w-7/12 ml-auto space-y-6 md:space-y-8 lg:space-y-10'>
                    <div className='space-y-3 lg:space-y-4'>
                        <span className="inline-block px-3.5 py-1 bg-[#0EA5E914] rounded-[50px] border border-[#0EA5E952] font-bold tracking-[0.8px] text-[11.5px] text-[#38BDF8]">গ্রাহকদের অভিজ্ঞতা</span>
                        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#F8FAFC]">
                            গ্রাহকদের ভালোবাসায় <br /><span className='text-[#38BDF8]'>৫ স্টার রেটিং!</span>
                        </h2>
                        <span className="inline-block w-13 h-0.75 rounded-[2px] bg-linear-to-r from-[#0EA5E9] to-transparent"></span>
                    </div>
                    <div className='md:py-6 lg:py-9.5 px-7 rounded-[22px] border border-[#0EA5E952] bg-[linear-gradient(103.81deg,_#0F1523_0%,_#141C2E_100%)] shadow-[0px_0px_40px_rgba(14,165,233,0.22)] space-y-3'>
                        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#38BDF8] text-center">
                            ৫.০
                        </h2>
                        <Image className='mx-auto' src={fiveStar} alt='five star' width={141} height={42} />
                        <p className='font-normal text-base text-center text-[#CBD5E1]'>৩টি গ্লোবাল রেটিং · ৫ এর মধ্যে ৫ · ১০০% গ্রাহক সন্তুষ্ট</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div className='py-6.5 px-5.5 bg-[#0F1523] border border-[#0EA5E924] rounded-[20px]'>
                            <div className='flex gap-3'>
                                <div className='size-12 rounded-full bg-linear-to-br from-[#0369A1] to-[#0EA5E9] flex items-center justify-center p-1 font-bold text-lg leading-8.5 tracking-[0.2px] text-[#F8FAFC]'>র</div>
                                <div className='space-y-1'>
                                    <h4 className='font-bold text-base text-[#F8FAFC]'>Shanna Hite</h4>
                                    <p className='font-normal text-xs text-[#64748B]'>৬ মে, ২০২৬</p>
                                </div>
                            </div>
                            <div>
                                <Image src={fiveStar} alt='five star' width={141} height={42} />
                            </div>
                            <div>
                                <h3 className='font-bold text-sm text-[#38BDF8]'>স্বাদ ভালো এবং কার্যকর</h3>
                                <p className='font-normal text-sm text-[#CBD5E1]'>আমি কয়েক সপ্তাহ ধরে এগুলো খাচ্ছি এবং ভালো অনুভব করছি। এগুলো খাওয়ার পর শরীরে এনার্জি ও সামগ্রিক সুস্থতায় ইতিবাচক পরিবর্তন লক্ষ্য করেছি। ভিটামিনগুলো সত্যিই ভালো কাজ করছে বলে মনে হয়েছে।</p>
                                <div className='py-1 px'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review