"use client";

import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { OrderFormSection } from "@/components/landing/OrderFormSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import StickyCta from "@/components/landing/StickyCta";
import Image from "next/image";

export default function HomePage() {
    const handleOrderClick = () => {
        const formSection = document.querySelector("#order-form");
        if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Header />
            <main className="">
                <HeroSection onOrderClick={handleOrderClick} />
                <StickyCta />
                <Image
                    src={"/images/hero-strip.png"}
                    alt=""
                    width={1920}
                    height={132}
                    className="w-full mt-12"
                />
                <FeaturesSection />
                <div id="order-form">
                    <OrderFormSection />
                </div>
                <TestimonialsSection />
                <FAQSection />
                <Footer />
            </main>
        </>
    );
}
