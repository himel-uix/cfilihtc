"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { handleOrderClick } from "@/lib/utils";

export function HeroSection({ onOrderClick }: { onOrderClick: () => void }) {
    return (
        <section>
            <div className="grid grid-cols-2 gap-2 container mx-auto px-4">
                <div>
                    <Badge>লাইভ - স্টক শেষের আগেই নি</Badge>
                    <h1>
                        বিবাহর পর <span>হারানো শক্তি</span> ও আত্মবিশ্বাস <span>আবার ফিরে পান</span>
                    </h1>
                    <p>
                        আপনার কি ভেতরের শক্তি কমে গেছে? স্ত্রীর কাছে নিজেকে ছোট মনে হচ্ছে? আর নয়
                        OUT। Men's 40+ Multivitamin - পুরুষের জন্য বিশেষ ফর্মুলা। MEN’S 40+
                        Multivitamin ব্যবহারে সিংহের মতো গর্জন হবে খেলার মাঠে
                    </p>
                    <ul>
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
                    <div>
                        <del>৳৫,৯৯৮</del>
                        <h2>৳২,৯৯৯</h2>
                        <Badge>৫০% ছাড়</Badge>
                    </div>
                    <div>
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 w-full text-white font-semibold px-8"
                            onClick={handleOrderClick}
                        >
                            <Image src={"/icons/cart.png"} alt="" width={28} height={28} /> এখনই
                            অর্ডার করুন
                        </Button>
                        <p>📦 ঘরে পেয়ে টাকা দিন · ✅ কনফার্মেশন কল পাবেন · 💸 সহজ রিফান্ড পলিসি</p>
                        <ul className="flex gap-2 items-center">
                            <li className="flex gap-2 items-center">
                                <Image src={"/icons/star-blue.svg"} alt="" width={28} height={28} />
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
                <div>
                    <Image src={"/images/hero-img.png"} alt="" width={440} height={520} />
                    <Image src={"/images/hero-rating.png"} alt="" width={300} height={110} />
                </div>
            </div>
            <div className="flex items-center gap-2 container mx-auto px-5">
                <div>
                    <p>৳৫,৯৯৮</p>
                    <h4>৳২,৯৯৯</h4>
                </div>

                <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 w-full text-white font-semibold px-8"
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
                className="w-full mt-8"
            />
        </section>
    );
}
