"use client";

import { useState, useEffect } from "react";
import { handleOrderClick } from "@/lib/utils";
import { Button } from "../ui/button";

function StickyCta() {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(true);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <section
            className={`fixed bottom-0 left-0 right-0 bg-background z-50 py-3 shadow-lg border-t transition-transform duration-300 ${isVisible ? "translate-y-0" : "translate-y-full"
                }`}
        >
            <div className="flex items-center gap-3 md:gap-6 container mx-auto px-5">
                <div>
                    <p className="line-through text-gray-500">৳৫,৯৯৮</p>
                    <h4 className="text-xl font-bold text-primary">৳২,৯৯৯</h4>
                </div>

                <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 grow md:w-full text-white font-semibold px-4 md:px-6 lg:px-8 py-6 text-sm lg:text-xl w-fit "
                    onClick={handleOrderClick}
                >
                    এখনই অর্ডার করুন
                </Button>
            </div>
        </section>
    );
}

export default StickyCta;