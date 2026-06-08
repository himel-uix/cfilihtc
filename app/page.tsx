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
import PainSection from "@/components/landing/painSection";
import WhySolutionSection from "@/components/landing/WhySolutionSection";
import Benifit from "@/components/landing/Benifit";
import Trust from "@/components/landing/Trust";
import Offer from "@/components/landing/Offer";
import FinalCta from "@/components/landing/FinalCta";
import Review from "@/components/landing/Review";
import Support from "@/components/landing/Support";
import whatsappIcon from "@/public/icons/whatsapp-icon.png"
import privacyPolicyIcon from "@/public/icons/privacy-policy.png"
import NotificationPopup from "@/components/landing/NotificationPopup";
import PolicyPopup from "@/components/landing/PolicyPopup";
import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
    const handleOrderClick = () => {
        const formSection = document.querySelector("#order-form");
        if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const [ispopupOpen, setIsPopUpOpen] = useState(false);
    const handleClosePopup = () => {
        setIsPopUpOpen(!ispopupOpen);
    }

    return (
        <>
            <Header />
            <main className="">
                <HeroSection onOrderClick={handleOrderClick} />
                <StickyCta />
                <Support />
                <PainSection />
                <WhySolutionSection />
                <Benifit />
                <Review />
                <Offer />
                <div id="order-form">
                    <OrderFormSection />
                </div>
                <Trust />
                <FAQSection />
                <FinalCta />
                <Footer />
            </main>
            {/* sociel */}
            <div className="flex flex-col gap-1 fixed bottom-3 right-3 md:bottom-8 md:right-8 z-999">
                <Link target="_blank" href="https://wa.me/8801345245494" className="size-20 rounded-full">
                    <Image className="w-full" src={whatsappIcon} alt="whatsapp logo" width={80} height={80} />
                </Link>
                <button onClick={() => setIsPopUpOpen(true)} className="size-20 rounded-full cursor-pointer">
                    <Image className="w-full" src={privacyPolicyIcon} alt="privacy policy" width={80} height={80} />
                </button>
            </div>
            {/* sociel */}
            <NotificationPopup />
            <PolicyPopup isopen={ispopupOpen} handleClick={handleClosePopup} />
        </>
    );
}
