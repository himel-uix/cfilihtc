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
import KabuSection from "@/components/landing/KabuSection";
import Men40 from "@/components/landing/Men40";
import Changes from "@/components/landing/Changes";
import PainSection from "@/components/landing/painSection";
import WhySolutionSection from "@/components/landing/WhySolutionSection";
import Benifit from "@/components/landing/Benifit";
import Trust from "@/components/landing/Trust";
import Offer from "@/components/landing/Offer";
import FinalCta from "@/components/landing/FinalCta";
import Review from "@/components/landing/Review";

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
                <KabuSection />
                <PainSection />
                <WhySolutionSection />
                <Benifit />
                <Trust />
                <Review />
                <Offer />
                <FinalCta />
                <Men40 />
                <Changes />
                <div id="order-form">
                    <OrderFormSection />
                </div>
                <FAQSection />
                <Footer />
            </main>
        </>
    );
}
