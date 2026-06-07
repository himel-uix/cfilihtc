import Image from 'next/image'
import fiveStar from "@/public/images/five-star.png"
import React from 'react'
import mansProduct from "@/public/images/mans-product.png"

const Review = () => {
    return (
        <section className='py-10 md:py-20 lg:py-30 bg-[#01050A] relative z-1'>
            <div className='container mx-auto px-5 flex flex-col lg:block gap-6'>
                <div className='lg:absolute top-0 left-0 bottom-0 h-full -z-1'>
                    <Image className='h-full' src={mansProduct} alt='mans product' width={848} height={1073} />
                </div>
                <div className='lg:w-7/12 ml-auto space-y-6 md:space-y-8 lg:space-y-10'>
                    <div className='space-y-3 lg:space-y-4'>
                        <span className="inline-block px-3.5 py-1 bg-[#0EA5E914] rounded-[50px] border border-[#0EA5E952] font-bold tracking-[0.8px] text-xs text-[#38BDF8]">গ্রাহকদের অভিজ্ঞতা</span>
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
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4.5'>
                        <div className='py-6.5 px-5.5 bg-[#0F1523] border border-[#0EA5E924] rounded-[20px] flex flex-col gap-4'>
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
                            <div className='space-y-4 grow flex flex-col'>
                                <h3 className='font-bold text-sm text-[#38BDF8]'>স্বাদ ভালো এবং কার্যকর</h3>
                                <p className='font-normal text-sm text-[#CBD5E1] grow'>আমি কয়েক সপ্তাহ ধরে এগুলো খাচ্ছি এবং ভালো অনুভব করছি। এগুলো খাওয়ার পর শরীরে এনার্জি ও সামগ্রিক সুস্থতায় ইতিবাচক পরিবর্তন লক্ষ্য করেছি। ভিটামিনগুলো সত্যিই ভালো কাজ করছে বলে মনে হয়েছে।</p>
                                <p className='py-1 px-3 inline-block text-center rounded-[50px] bg-[#22C55E1A] border border-[#22C55E4D] font-semibold text-xs leading-6.5 text-[#4ADE80] w-fit'>✓ যাচাইকৃত ক্রেতা</p>
                            </div>
                        </div>
                        <div className='py-6.5 px-5.5 bg-[#0F1523] border border-[#0EA5E924] rounded-[20px] flex flex-col gap-4'>
                            <div className='flex gap-3'>
                                <div className='size-12 rounded-full bg-linear-to-br from-[#0369A1] to-[#0EA5E9] flex items-center justify-center p-1 font-bold text-lg leading-8.5 tracking-[0.2px] text-[#F8FAFC]'>ক</div>
                                <div className='space-y-1'>
                                    <h4 className='font-bold text-base text-[#F8FAFC]'>Demetrius Layssard</h4>
                                    <p className='font-normal text-xs text-[#64748B]'>৬ মে, ২০২৬</p>
                                </div>
                            </div>
                            <div>
                                <Image src={fiveStar} alt='five star' width={141} height={42} />
                            </div>
                            <div className='space-y-4 grow flex flex-col'>
                                <h3 className='font-bold text-sm text-[#38BDF8]'>দামের তুলনায় বেশ ভালো</h3>
                                <p className='font-normal text-sm text-[#CBD5E1] grow'>ভালো মানের একটি প্রোডাক্ট এবং দামও যুক্তিসঙ্গত।৪৮ বছরে শরীর অনেক দুর্বল হয়ে গিয়েছিল।
                                    কাজের চাপ, বাসায় ফিরে শক্তি পেতাম না। Men's
                                    40+ শুরু করার পর প্রথম মাসেই এনার্জি বাড়ল।
                                    এখন পারিবারিক জীবনে আবার আনন্দ আসছে।</p>
                                <p className='py-1 px-3 inline-block text-center rounded-[50px] bg-[#22C55E1A] border border-[#22C55E4D] font-semibold text-xs leading-6.5 text-[#4ADE80] w-fit'>✓ যাচাইকৃত ক্রেতা</p>
                            </div>
                        </div>
                        <div className='py-6.5 px-5.5 bg-[#0F1523] border border-[#0EA5E924] rounded-[20px] flex flex-col gap-4'>
                            <div className='flex gap-3'>
                                <div className='size-12 rounded-full bg-linear-to-br from-[#0369A1] to-[#0EA5E9] flex items-center justify-center p-1 font-bold text-lg leading-8.5 tracking-[0.2px] text-[#F8FAFC]'>শ</div>
                                <div className='space-y-1'>
                                    <h4 className='font-bold text-base text-[#F8FAFC]'>Lalo</h4>
                                    <p className='font-normal text-xs text-[#64748B]'>৬ মে, ২০২৬</p>
                                </div>
                            </div>
                            <div>
                                <Image src={fiveStar} alt='five star' width={141} height={42} />
                            </div>
                            <div className='space-y-4 grow flex flex-col'>
                                <h3 className='font-bold text-sm text-[#38BDF8]'>অত্যন্ত সুপারিশযোগ্য</h3>
                                <p className='font-normal text-sm text-[#CBD5E1] grow'>আমার স্বামী এই ভিটামিনগুলো খুব পছন্দ করেছেন। সহজে হজম হয় এবং মানও অনেক ভালো।</p>
                                <p className='py-1 px-3 inline-block text-center rounded-[50px] bg-[#22C55E1A] border border-[#22C55E4D] font-semibold text-xs leading-6.5 text-[#4ADE80] w-fit'>✓ যাচাইকৃত ক্রেতা</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review