"use client";

import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { OrderFormSection } from "@/components/landing/OrderFormSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";
import Header from "@/components/landing/Header";

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
            <main className="overflow-hidden">
                <HeroSection onOrderClick={handleOrderClick} />
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
