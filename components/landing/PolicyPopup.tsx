import React from 'react'

const PolicyPopup = () => {
    return (
        <div className='hidden fixed top-0 left-0 w-full h-full z-9999 rounded-[12px] border border-[#0F293F] py-8 px-6'>
            <div className="text-center mb-4 lg:mb-6">
                <span className="inline-block px-8 py-1 bg-[#0EA5E914] rounded-[50px] border border-[#0EA5E952] font-bold text-sm md:text-lg lg:text-xl text-[#38BDF8]">Policies (নীতিমালা)</span>
            </div>
            <div className='space-y-2'>
                <h2 className='font-semibold text-base text-[#38BDF8]'>Refund Policy (রিফান্ড নীতিমালা)</h2>
                <p className='font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]'>আমাদের পণ্যসমূহ সর্বোচ্চ মান বজায় রেখে সরবরাহ করা হয়। আমাদের লক্ষ্য শুধু প্রোডাক্ট বিক্রি করা নয় - আপনার সন্তুষ্টি নিশ্চিত করা।
                    আমাদের প্রতিনিধির বলা নিয়ম মোতাবেক সেবনের পর যদি রেজাল্ট না পান তাহলে অবশ্যই এক সপ্তাহের মধ্যে আমাদের সাথে যোগাযোগ করতে হবে এবং রিফান্ড পেতে নিচের ধাপগুলো অনুসরণ করুনঃ</p>
            </div>
            <div>
                <p className='font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]'>📌 কী করতে হবে?</p>
                <ul>
                    <li className='font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]'>★কুরিয়ার প্যাকেটের ট্যাগ সংরক্ষণ করুন</li>
                    <li className='font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]'>★ সাপোর্ট টিমে যোগাযোগ করুন</li>
                    <li className='font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]'>★ অভিযোগ যাচাই সাপেক্ষে পণ্য পরিবর্তন অথবা অর্থ ফেরত দেওয়া হবে।</li>
                    <li className='font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]'>★ রিফান্ড অনুমোদিত হলে আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবেন এবং নির্ধারিত সময়ের মধ্যে মোবাইল ব্যাংকিংয়ের মাধ্যমে অর্থ ফেরত প্রদান করা হবে।</li>
                    <li className='font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]'>★ কুরিয়ার চার্জ সাধারণত ফেরতযোগ্য নয়।</li>
                </ul>
            </div>
            <div className='space-y-2'>
                <h2 className='font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]'>⚠️ গুরুত্বপূর্ণ নির্দেশনা</h2>
                <p className='font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]'>প্রোডাক্ট ডেলিভারির সময় কুরিয়ার পলির উপর থাকা ট্যাগ/স্টিকারটি যত্নসহকারে রেখে দিন। এটি আপনার অর্ডার ভেরিফিকেশনের জন্য প্রয়োজন হবে।⁠</p>
            </div>
        </div>
    )}

export default PolicyPopup