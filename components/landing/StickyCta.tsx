"use client";

import { useState, useEffect, useRef } from "react";
import { handleOrderClick } from "@/lib/utils";
import { Button } from "../ui/button";

function StickyCta() {
    const [isVisible, setIsVisible] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            const faqSection = document.getElementById("faq-section");

            // FAQ section শেষ হয়ে গেলে CTA hide
            if (faqSection) {
                const faqBottom =
                    faqSection.offsetTop + faqSection.offsetHeight;

                if (currentScrollY + window.innerHeight >= faqBottom) {
                    setIsVisible(false);
                    lastScrollY.current = currentScrollY;
                    return;
                }
            }

            // নিচে scroll করলে CTA show
            if (
                currentScrollY > lastScrollY.current &&
                currentScrollY > 100
            ) {
                setIsVisible(true);
            }
            // উপরে scroll করলে CTA hide
            else if (currentScrollY < lastScrollY.current) {
                setIsVisible(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            className={`fixed bottom-0 left-0 right-0 bg-background z-50 py-3 shadow-lg border-t transition-transform duration-300 ${
                isVisible ? "translate-y-0" : "translate-y-full"
            }`}
        >
            <div className="container mx-auto flex items-center gap-3 px-5 md:gap-6">
                <div>
                    <p className="text-gray-500 line-through">৳৫,৯৯৮</p>
                    <h4 className="text-primary text-xl font-bold">
                        ৳২,৯৯৯
                    </h4>
                </div>

                <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 grow w-fit px-4 py-6 text-sm font-semibold text-white md:w-full md:px-6 lg:px-8 lg:text-xl"
                    onClick={handleOrderClick}
                >
                    এখনই অর্ডার করুন
                </Button>
            </div>
        </section>
    );
}

export default StickyCta;