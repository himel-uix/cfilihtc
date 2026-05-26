"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { handleOrderClick } from "@/lib/utils";

export function HeroSection({ onOrderClick }: { onOrderClick: () => void }) {
    return (
        <section className="mt-12">
            <div className="grid grid-cols-2 gap-6 container mx-auto px-4">
                <div>
                    <Badge
                        variant={"destructive"}
                        className="text-md border-2 border-red-500 bg-red-300 text-red-300 font-bold"
                    >
                        🔴 লাইভ - স্টক শেষের আগেই নিন
                    </Badge>
                    <h1 className="text-6xl font-bold my-8">
                        বিবাহর পর <span className="text-primary">হারানো শক্তি</span> ও আত্মবিশ্বাস{" "}
                        <span className="text-primary">আবার ফিরে পান</span>
                    </h1>
                    <p>
                        আপনার কি ভেতরের শক্তি কমে গেছে? স্ত্রীর কাছে নিজেকে ছোট মনে হচ্ছে? আর নয়
                        OUT। Men's 40+ Multivitamin - পুরুষের জন্য বিশেষ ফর্মুলা। MEN’S 40+
                        Multivitamin ব্যবহারে সিংহের মতো গর্জন হবে খেলার মাঠে
                    </p>
                    <ul className="my-8">
                        <li className="flex gap-2 items-center">
                            <Image src={"/icons/round-fire.png"} alt="" width={28} height={28} />{" "}
                            যৌ/ন শক্তি ও স্ট্যামিনা বৃদ্ধিতে সহায়ক
                        </li>
                        <li className="flex gap-2 items-center">
                            <Image src={"/icons/round-clock.png"} alt="" width={28} height={28} />{" "}
                            ৪৫ থেকে ১ ঘন্টা খেলার সক্ষমতা তৈরি করে
                        </li>
                        <li className="flex gap-2 items-center">
                            <Image src={"/icons/round-arm.png"} alt="" width={28} height={28} />{" "}
                            শরীরের অভ্যন্তরীণ শক্তি ফিরিয়ে আনে
                        </li>
                        <li className="flex gap-2 items-center">
                            <Image src={"/icons/round-sheld.png"} alt="" width={28} height={28} />{" "}
                            প্রোস্টেট ও হরমোন সাপোর্ট
                        </li>
                        <li className="flex gap-2 items-center">
                            <Image src={"/icons/round-thunder.png"} alt="" width={28} height={28} />{" "}
                            সারাদিনের এনার্জি ও মনোবল বাড়ায়
                        </li>
                        <li className="flex gap-2 items-center">
                            <Image src={"/icons/round-check.png"} alt="" width={28} height={28} />{" "}
                            ৩০+ ভিটামিন ও মিনারেল - ১ বোতলে
                        </li>
                    </ul>
                    <div className="flex items-center gap-6 my-4">
                        <del className="text-red-500 text-lg">৳৫,৯৯৮</del>
                        <h2 className="text-6xl font-bold text-primary">৳২,৯৯৯</h2>
                        <Badge
                            variant={"destructive"}
                            className="text-md border-2 border-red-500 bg-red-300 text-red-300 font-bold"
                        >
                            ৫০% ছাড়
                        </Badge>
                    </div>
                    <div className="flex flex-col items-center gap-2 mt-8">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 w-full text-white font-semibold px-8 py-6 text-xl"
                            onClick={handleOrderClick}
                        >
                            <Image src={"/icons/cart.png"} alt="" width={28} height={28} /> এখনই
                            অর্ডার করুন
                        </Button>
                        <p>📦 ঘরে পেয়ে টাকা দিন · ✅ কনফার্মেশন কল পাবেন · 💸 সহজ রিফান্ড পলিসি</p>
                        <ul className="flex gap-2 items-center">
                            <li className="flex gap-2 items-center">
                                <Image
                                    src={"/icons/star-blue.svg"}
                                    alt=""
                                    width={100}
                                    height={28}
                                />
                                ৫ স্টার রেটিং
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src={"/icons/lock.png"} alt="" width={28} height={28} />
                                ৪৫ থেকে ১ ঘন্টা খেলার সক্ষমতা তৈরি করে
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src={"/icons/call.png"} alt="" width={28} height={28} />
                                ২৪/৭ সাপোর্ট
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <Image src={"/images/hero-img.png"} alt="" width={440} height={520} />
                    <Image src={"/images/hero-rating.png"} alt="" width={300} height={110} />
                </div>
            </div>
            <div className="flex items-center gap-6 container mx-auto px-5 mt-8">
                <div>
                    <p>৳৫,৯৯৮</p>
                    <h4 className="text-xl font-bold text-primary">৳২,৯৯৯</h4>
                </div>

                <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 w-full text-white font-semibold px-8 py-6 text-xl"
                    onClick={handleOrderClick}
                >
                    এখনই অর্ডার করুন
                </Button>
            </div>
            <Image
                src={"/images/hero-strip.png"}
                alt=""
                width={1920}
                height={132}
                className="w-full mt-12"
            />
        </section>
    );
}
