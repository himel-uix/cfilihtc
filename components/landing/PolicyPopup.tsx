'use client';

import { useState } from "react";
type PolicyPopupProps = {
    isopen: boolean;
    handleClick: () => void;
};

const PolicyPopup = ({ isopen, handleClick }: PolicyPopupProps) => {
    const [onClose, setOnClose] = useState(true);

    return (
        <div
            className={`fixed inset-0 z-9999 bg-black/60 flex items-center justify-center p-4 transition-all duration-300 ease-in-out ${isopen
                ? 'opacity-100 visible'
                : 'opacity-0 invisible'
                }`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-5xl transition-all duration-300 ease-out max-h-[90vh] overflow-y-auto rounded-[12px] border border-[#0F293F] py-8 px-6 bg-[#0F1523] space-y-6 md:space-y-8 lg:space-y-12 ${isopen
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 translate-y-4'
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={handleClick}
                    className="absolute top-4 right-4 text-white text-2xl leading-none cursor-pointer"
                >
                    ×
                </button>

                <div className="text-center mb-4 lg:mb-6">
                    <span className="inline-block px-8 py-1 bg-[#0EA5E914] rounded-[50px] border border-[#0EA5E952] font-bold text-sm md:text-lg lg:text-xl text-[#38BDF8]">
                        Policies (নীতিমালা)
                    </span>
                </div>

                <div className="space-y-2">
                    <h2 className="font-semibold text-base text-[#38BDF8]">
                        Refund Policy (রিফান্ড নীতিমালা)
                    </h2>

                    <p className="font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]">
                        আমাদের পণ্যসমূহ সর্বোচ্চ মান বজায় রেখে সরবরাহ করা হয়।
                        আমাদের লক্ষ্য শুধু প্রোডাক্ট বিক্রি করা নয় - আপনার
                        সন্তুষ্টি নিশ্চিত করা। আমাদের প্রতিনিধির বলা নিয়ম
                        মোতাবেক সেবনের পর যদি রেজাল্ট না পান তাহলে অবশ্যই এক
                        সপ্তাহের মধ্যে আমাদের সাথে যোগাযোগ করতে হবে এবং রিফান্ড
                        পেতে নিচের ধাপগুলো অনুসরণ করুনঃ
                    </p>
                </div>

                <div>
                    <p className="font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]">
                        📌 কী করতে হবে?
                    </p>

                    <ul>
                        <li className="font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]">
                            ★কুরিয়ার প্যাকেটের ট্যাগ সংরক্ষণ করুন
                        </li>

                        <li className="font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]">
                            ★ সাপোর্ট টিমে যোগাযোগ করুন
                        </li>

                        <li className="font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]">
                            ★ অভিযোগ যাচাই সাপেক্ষে পণ্য পরিবর্তন অথবা অর্থ
                            ফেরত দেওয়া হবে।
                        </li>

                        <li className="font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]">
                            ★ রিফান্ড অনুমোদিত হলে আমাদের প্রতিনিধি আপনার সাথে
                            যোগাযোগ করবেন এবং নির্ধারিত সময়ের মধ্যে মোবাইল
                            ব্যাংকিংয়ের মাধ্যমে অর্থ ফেরত প্রদান করা হবে।
                        </li>

                        <li className="font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]">
                            ★ কুরিয়ার চার্জ সাধারণত ফেরতযোগ্য নয়।
                        </li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <h2 className="font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]">
                        ⚠️ গুরুত্বপূর্ণ নির্দেশনা
                    </h2>

                    <p className="font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]">
                        প্রোডাক্ট ডেলিভারির সময় কুরিয়ার পলির উপর থাকা
                        ট্যাগ/স্টিকারটি যত্নসহকারে রেখে দিন। এটি আপনার অর্ডার
                        ভেরিফিকেশনের জন্য প্রয়োজন হবে।
                    </p>
                </div>

                <div className="space-y-2">
                    <h2 className="font-semibold text-base text-[#38BDF8]">
                        Privacy Policy (গোপনীয়তা নীতিমালা)
                    </h2>

                    <p className="font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]">
                        আমরা আপনার ব্যক্তিগত তথ্যের নিরাপত্তা ও গোপনীয়তাকে
                        সর্বোচ্চ গুরুত্ব দিয়ে সংরক্ষণ করি।
                    </p>
                </div>

                <ul>
                    <li className="font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]">
                        ★আপনার ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষের কাছে বিক্রি বা
                        শেয়ার করা হয় না।
                    </li>

                    <li className="font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]">
                        ★অর্ডার প্রসেসিং, ডেলিভারি এবং প্রয়োজনীয় সেবা প্রদানের
                        ক্ষেত্রেই শুধুমাত্র তথ্য ব্যবহার করা হয়।
                    </li>

                    <li className="font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]">
                        ★আপনার তথ্য নিরাপদ সার্ভারে সংরক্ষণ করা হয় এবং
                        অননুমোদিত প্রবেশ থেকে সুরক্ষিত রাখা হয়।
                    </li>

                    <li className="font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]">
                        ★আমরা আমাদের সহযোগী সেবাদানকারী প্রতিষ্ঠানগুলোকেও
                        তথ্যের গোপনীয়তা রক্ষায় প্রতিশ্রুতিবদ্ধ রাখি।
                    </li>

                    <li className="font-normal text-sm md:text-sm lg:text-base text-[#F8FAFC]">
                        ★গোপনীয়তা নীতিমালা সম্পর্কিত যেকোনো প্রশ্ন বা উদ্বেগের
                        জন্য আমাদের সাথে যোগাযোগ করতে পারেন।
                    </li>
                </ul>

                <div>
                    <h2 className="font-semibold text-base text-[#38BDF8]">
                        Terms of Service (সেবার শর্তাবলী)
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default PolicyPopup;